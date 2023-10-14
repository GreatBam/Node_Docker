const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require('dotenv').config();
const app = express();
const port = 3000;
app.use(cors());

