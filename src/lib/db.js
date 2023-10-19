import mysql from "mysql2";

const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  // port: process.env.MYSQL_PORT,
});

export async function query({ query, values = [] }) {
  const dbconnection = pool.promise();
  try {
    const [rows, fields] = await dbconnection.execute(query, values);
    return rows;
  } catch (error) {
    throw new Error(error.message);
  }
}
