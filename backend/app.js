const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());