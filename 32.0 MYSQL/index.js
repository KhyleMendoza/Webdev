import "dotenv/config";
import express from "express";
import mysql from "mysql2/promise";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = await mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT)
});

app.get("/", async (req, res) => {
    try {
        const [products] = await db.query("SELECT * FROM products");
        console.log(products);
        res.render("index.ejs", { products: products });
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).send("Database error");
    }
});

app.listen(port, () => {
    console.log(`Server is running at port: ${port}.`);
});