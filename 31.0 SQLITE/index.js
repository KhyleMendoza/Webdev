import express from "express";
import Database from "better-sqlite3";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new Database("products.db")
db.prepare("DROP TABLE IF EXISTS products").run();

db.prepare (`
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY,
        name TEXT,
        price REAL
    )
`).run();

const insertProduct = db.prepare(`
    INSERT INTO products (name, price)
    VALUES (?, ?)    
`)

insertProduct.run("Apple", 50.50);
insertProduct.run("Orange", 30.50);
insertProduct.run("Pineapple", 20.50);

app.get("/", (req, res) => {
    const products = db.prepare("SELECT * FROM products").all();
    console.log(products)
    res.render("index.ejs", { products: products})
})

app.post("/filter", (req, res) => {
    const productName = req.body.productName;
    const minPrice = req.body.minPrice;
    const maxPrice = req.body.maxPrice;
    
    const products = db.prepare(`
        SELECT * FROM products
        WHERE name LIKE ?
        AND price >= ?
        AND price <= ?
    `).all(`%${productName}%`, minPrice || 0, maxPrice || 999999);

    res.render("index.ejs", { products: products})
})

app.get("/new", (req, res) => {
    res.render("modify.ejs", {
        heading: "Add New Product",
        action: "Create Product"
    });
})

app.post("/add/product", (req, res) => {
    const productName = req.body.productName;
    const productPrice = req.body.productPrice;

    insertProduct.run(productName, productPrice);
    res.redirect("/");
})

app.get("/edit/:id", (req, res) => {
    const productId = req.params.id;
    
    const product = db.prepare(`
        SELECT * FROM products
        WHERE id = ?
    `).get(productId);

    res.render("modify.ejs", {
        heading: "Edit Product",
        action: "Update Product",
        product: product
    })
})

app.post("/edit/:id", (req, res) => {
    const productId = req.params.id;
    const productName = req.body.productName;
    const productPrice = req.body.productPrice;
    db.prepare(`
        UPDATE products
        set name = ?, price = ?
        WHERE id = ?
    `).run(productName, productPrice, productId)

    res.redirect("/")
})

app.post("/delete/:id", (req, res) => {
    const productId = req.params.id;
    db.prepare(`
        DELETE FROM products
        WHERE id = ?    
    `).run(productId);
    res.redirect("/");
})

app.listen(port, () => {
    console.log(`Server is running at port: ${port}.`)
})