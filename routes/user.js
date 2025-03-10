/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of users from the database
 *     responses:
 *       200:
 *         description: A list of users
 */
app.get('/users', (req, res) => {
  // 사용자 목록 반환
  res.json([]);
});
