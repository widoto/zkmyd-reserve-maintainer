import dotenv from 'dotenv';

dotenv.config({ path: '../env/.env' });

export default {
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 5,
  port: process.env.DB_PORT,
};
