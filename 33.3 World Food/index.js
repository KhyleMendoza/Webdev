import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import "dotenv/config"

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

db.connect();

let data = []
let topRiceProducer = {};
let topWheatProducer = {};

db.query("SELECT * FROM world_food", (err, res) => {
    if (err) {
        console.error("Error executing query", err.stack);
    } else {
        data = res.rows;
    }
})

db.query(
    "SELECT * FROM world_food ORDER BY rice_production DESC LIMIT 1",
    (err, res) => {
        if (err) {
            console.error("Error executing query", err.stack);
        } else {
            topRiceProducer = res.rows[0];
        }
    }
);

db.query(
    "SELECT * FROM world_food ORDER BY wheat_production DESC LIMIT 1",
    (err, res) => {
        if (err) {
            console.error("Error executing query", err.stack);
        } else {
            topWheatProducer = res.rows[0];
        }
    }
);

app.get("/", (req, res) => {
    res.render("index.ejs", {
        data: data,
        topRiceProducer: topRiceProducer,
        topWheatProducer: topWheatProducer
    });
});

app.get("/filter", (req, res) => {
    const country = req.query.country;

    if (!country) {
        res.render("index.ejs", {
            data,
            topRiceProducer: topRiceProducer,
            topWheatProducer: topWheatProducer
        });
        return;
    }

    db.query(
        "SELECT * FROM world_food WHERE country ILIKE $1",
        [`%${country}%`],
        (err, result) => {
            if (err) {
                console.error("Error executing query", err.stack);
            } else {
                res.render("index.ejs", {
                    data: result.rows,
                    topRiceProducer: topRiceProducer,
                    topWheatProducer: topWheatProducer
                })
            }
        }
    )
})

app.listen(port, () => {
    console.log(`Server is running at port: ${port}.`);
})