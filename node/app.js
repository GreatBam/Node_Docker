const bodyParser = require("body-parser");
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt");
const salt = 10;
const port = 3000;
require("dotenv").config();
app.use(bodyParser.json());
app.use(cors());

class Database {
  constructor() {
    this.initConnection();
  }

  initConnection() {
    this.connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });
    this.connection.connect((err) => {
      if (err) {
        console.error("Error connecting:", err.stack);
        setTimeout(() => this.initConnection(), 2000);
      } else {
        console.log("Connected to MySQL database.");
      }
    });
    this.connection.on("error", (err) => {
      if (err.code === "PROTOCOL_CONNECTION_LOST") {
        console.error("Database connection was closed.");
        this.initConnection();
      }
      if (err.code === "ER_CON_COUNT_ERROR") {
        console.error("Database has too many connections.");
      }
      if (err.code === "ECONNREFUSED") {
        console.error("Database connection was refused.");
      }
    });
  }
  query(query) {
    return new Promise((resolve, reject) => {
      this.connection.query(query, (error, result) => {
        if (error) reject(error);
        else resolve(JSON.stringify(result));
      });
    });
  }
}

const connection = new Database();
connection.initConnection();

app.get("/api/data", async (req, res) => {
  try {
    const result = await connection.query("SELECT * FROM t_users");
    let parsedResult = JSON.parse(result);
    console.log(parsedResult);
    res.json(parsedResult);
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.get("/api/data/:idUser", async (req, res) => {
  try {
    const userId = req.params.idUser;
    const query = `SELECT * FROM t_users WHERE idUser=${userId}`;
    const result = await connection.query(query);
    let parsedResult = JSON.parse(result);
    res.json(parsedResult);
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.post("/api/adduser", async (req, res) => {
  const { name, lastname, dob } = req.body;

  if (!name || !lastname || !dob) {
    return res
      .status(400)
      .json({ error: "Name, lastname and DOB are required" });
  }

  const addUserQuery = `INSERT INTO t_users (userName, userLastname, userDob) VALUES ('${name}', '${lastname}', '${dob}')`;

  try {
    await connection.query(addUserQuery);
    res.json({ message: "User added successfully!" });
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.post("/api/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const insertAccount = `INSERT INTO t_logs (email, password) VALUES ('${email}), ('${password}')`;

});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
