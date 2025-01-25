// mysql2/promise para usar async/await com promises
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export async function criarConexao() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST, // Use environment variables
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    console.log("Connected to MySQL!");
    return connection;
  } catch (error) {
    console.error("Error connecting to MySQL:", error);
    throw new Error(
      "Houve um problema ao tentar se conectar ao banco de dados"
    );
  }
}
