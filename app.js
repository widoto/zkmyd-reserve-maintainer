import express from 'express';
import dotenv from 'dotenv';
import mariadb from 'mariadb';
import dbConfig from './config/database-config.js';
import swaggerConfig from './modules/swagger.js';

dotenv.config({ path: './env/.env' });

const { swaggerUi, specs } = swaggerConfig;

const app = express();
const PORT = process.env.SERVER_PORT || 3000;
const pool = mariadb.createPool(dbConfig);

async function asyncFunction() {
  let conn;
  try {
    conn = await pool.getConnection();

    const rows = await conn.query('SELECT 1');
    console.log(rows);
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.end();
  }
}

asyncFunction().then(() => {
  console.log('DB connection test completed');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.get('/', (req, res) => {
  res.send('Hello, Node.js!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
