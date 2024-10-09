const mysql = require('mysql2/promise');
require('dotenv').config();

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

(async function validateConnection() {
  try {
    const connection = await db.getConnection();
    console.log('Connection successful!');
    connection.release();
  } catch (error) {
    console.error('Connection failed:', (error as Error).message);
  }
})();
