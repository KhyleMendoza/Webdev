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

app.post("/filter", async (req, res) => {
    try {
        const productName = req.body.productName;
        const minPrice = req.body.minPrice;
        const maxPrice = req.body.maxPrice;
        const [products] = await db.query(`
            SELECT * FROM products
            WHERE name LIKE ?
            AND price >= ?
            AND price <= ?
            `,
            [
                `%${productName}%`,
                minPrice || 0,
                maxPrice || 999999
            ]
        );
        res.render("index.ejs", { products: products })
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).send("Database error"); 
    }
});

app.get("/new", (req, res) => {
    res.render("modify.ejs", {
        heading: "Add Product",
        action: "Create Product"
    });
})

app.post("/add/product", async (req, res) => {
    try {
        const productName = req.body.productName;
        const productPrice = req.body.productPrice;

        await db.query(
            "INSERT into products (name, price) VALUES (?, ?)",
            [productName, productPrice]
        )

        res.redirect("/");
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).send("Database error"); 
    }
});

app.get("/edit/:id", async (req, res) => {
    try {
        const productId = req.params.id;
        const [products] = await db.query(
            "SELECT * FROM products WHERE id = ?",
            [productId]
        );
        res.render("modify.ejs", {
            heading: "Edit Product",
            action: "Update Product",
            product: products[0]
        })
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).send("Database error"); 
    }
})

app.post("/edit/:id", async (req, res) => {
    try {
        const productId = req.params.id;
        const productName = req.body.productName;
        const productPrice = req.body.productPrice;
        await db.query(
            "UPDATE products SET name = ?, price = ? WHERE id = ?",
            [productName, productPrice, productId]
        );
        res.redirect("/");
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).send("Database error"); 
    }
})

app.post("/delete/:id", async (req, res) => {
    try {
        const productId = req.params.id;
        await db.query(
            "DELETE FROM products WHERE id = ?",
            [productId]
        );
        res.redirect("/");
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).send("Database error"); 
    }
})

app.listen(port, () => {
    console.log(`Server is running at port: ${port}.`);
});