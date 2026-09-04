import express from "express";
import pg from "pg";
import "dotenv/config"

const app = express();
const port = 3000;

const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})

db.connect();

let result = [];

db.query("SELECT * FROM capitals", (err, res) => {
    if (err) {
        console.error("Error executing query", err.stack);
    } else {
        result = res.rows;
        console.log(result)
    }

    db.end();
})

app.listen(port, () => {
    console.log(`Server is listening at port: ${port}`)
});