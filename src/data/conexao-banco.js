// Import mysql2/promise to use async/await with promises
import mysql from "mysql2/promise";

// Create a function to establish the connection
export async function criarConexao() {
  try {
    const connection = await mysql.createConnection({
      host: "172.17.0.4", // Your MySQL server host
      user: "root", // Your MySQL username
      password: "312198", // Your MySQL password
      database: "financas_pessoais", // Your database name
    });

    console.log("Connected to MySQL!");
    return connection;
  } catch (error) {
    console.error("Error connecting to MySQL:", error);
    throw error; // Rethrow the error to handle it in other files
  }
}

/* EXEMPLO DE USO

// Import the connection function from db.js
import { createConnection } from './db.js';

// Define an async function to query the database
async function runQuery() {
  const connection = await createConnection();

  try {
    // Example query
    const [rows] = await connection.execute('SELECT * FROM your_table_name');
    console.log('Query Results:', rows);
  } catch (err) {
    console.error('Error running query:', err);
  } finally {
    // Close the connection after the query is finished
    await connection.end();
  }
}

// Call the function to run the query
runQuery();


*/
