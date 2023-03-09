// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import db from "./config/Database.js";
// import router from "./routes/index.js";
// dotenv.config();
// const app = express();

// try {
//   await db.authenticate();
//   console.log("Database Connected...");
// } catch (error) {
//   console.error(error);
// }

// app.use(cors({ credentials:true, origin: 'http://localhost:3000' }));
// app.use(cookieParser());
// app.use(express.json());
// app.use(router);

// app.listen(5000, ()=> console.log('server running at port 5000'));

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "yanfomadb"
});

app.post("/register", (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  con.query(
    "INSERT INTO users (email, username, password) VALUES (?, ?, ?)",
    [email, username, password],
    (err, result) => {
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "ENTER CORRECT ASKED DETAILS!", Error: err });
      }
    }
  );
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  con.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        req.setEncoding({ err: err });
      } 
      else {
        if (result.length > 0) {
          res.send(result);
        } else {
          res.send({ message: "WRONG USERNAME OR PASSWORD!" });
        }
      }
    }
  );
});

app.listen(3001, () => {
    console.log("running backend server");
});