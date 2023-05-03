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
const bcrypt = require("bcrypt")

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
  user: "root",
  host: "localhost",
  port:8889,
  password: "root",
  database: "yanfomadb"
});

app.post("/register", (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  
  // bcrypt.hash(plainTextPassword, 10, (err, hash) =>{
  //     password = hash;
  //     console.log(password)
  // })
  
  bcrypt.hash(password,10,(err, hash)=>{
    con.query(
      "INSERT INTO users (email, username, password) VALUES (?, ?, ?)",
      [email, username, hash],
      (error, result) => {
        if (result) {
          res.send(result); // sends response back to frontend
        } else {
          res.send({ message: "error occured while registering perhaps you entered wrong credentials", Error: error });
          console.log(error);
        }
      }
    );  
  })
  
  
});

// app.post("/login", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;
  
   
//   con.query(
//     "SELECT * FROM users WHERE username = ? AND password = ?",
//     [username, password],
    
//     (err, result) => {
  
//       if (err) {
//         req.setEncoding({ err: err });
//       } 
//       else {
//         if (result.length > 0 && bcrypt.compareSync(password,String(result[0].password))) {
//           res.send(result);
//         } else {
//           res.send({ message: "WRONG USERNAME OR PASSWORD!",Error:err });
//           console.log("login Error:",err,password)
//         }
//       }
//     }
    
//   );
// });

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  
  con.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      } else if (result.length === 0) {
        res.send({ message: "USER NOT FOUND" });
      } else {
        const hashedPassword = result[0].password;
        bcrypt.compare(password, hashedPassword, (err, isMatch) => {
          if (err) {
            res.send({ err: err });
          } else if (isMatch) {
            res.send(result);
          } else {
            res.send({ message: "WRONG PASSWORD " });
          }
        });
      }
    }
  );
});

app.listen(3001, () => {
    console.log(`running backend server`);
});


// const hashedResult = '';
//   const gethash = (username) => {
//     con.query("SELECT * FROM users where username = ?", username,(err,result)=>{
    
//         let hash = String(result[0].password)
//       console.log("hashed :", hash);
      
//       return hash;
    
//   })


//   hashedResult = gethash(username)

// console.log(hashedResult);
//   }
  // const hashedPassword = bcrypt.compare(password, hashedResult, (error,result)=>{
  //   if(result){
  //    console.log("hashed password:",result);
  //     return hashedResult;
  //   }
  //   else {
  //     console.log(error);
  //   }
  // });
