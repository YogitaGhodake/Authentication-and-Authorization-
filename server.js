const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const { response } = require('express');

const jwt = require('jsonwebtoken');

const SECRET_KEY = "jwtSecretkey"



const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ["GET", "POST"],
    credentials: true
}));

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "your new password",
    database: "LoginSystem",
});

app.post('/api/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "INSERT INTO users(username, password) VALUES(?,?)",
        [username, password],
        (err, result) => {
            if (err) {
                res.send({ err: err })
            } 
            else {
                res.send({result: result, message: "Successfully Registered" });
            }
        },
    );
});


app.post('/api/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM `users` WHERE username = ? AND password = ?;",
        [username, password],
        (err, result) => {
            if (err) {
                res.send({ err: err })
            }
            console.log(result, "result ==> 78");
            if (result.length > 0) {
                var user = JSON.stringify(result[0]);

                var token = jwt.sign(user, SECRET_KEY)

                res.send({ token, user: JSON.parse(user) });

            } else {
                res.send({ message: "User doesn't exist" });
            }
        }
    );
});




app.get('/api/allUsers', (req, res) => {

    try {
        const token = req.headers["x-access-token"] || req.headers["authorization"];
        console.log("token ===> 81", token);
    
        const decoded = jwt.verify(token, SECRET_KEY);
        console.log(decoded, "decoded");

        db.query (
            "SELECT * FROM `users`;",
            (err, result) => {
                if (err) {
                    res.send({ err: err })
                }

                res.send({ result});
             
            }
        )
    } catch {
        res.send({ message: "Invalid token."})
    }
   
});





app.listen(3001, () => {
    console.log("running server...connected to mysql");
});