const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 3000;
app.use(cors());

class Database {
  constructor() {
    this.connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });
  }
  openConnection() {
    this.connection.connect((error) => {
      if (error) throw error;
      console.log("Connected to MySQL database!");
    });
  }
}
