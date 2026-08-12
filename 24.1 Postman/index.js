import express from 'express'
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
})

app.post("/register", (req, res) => {
    res.sendStatus(201)
})

app.put("/user/khyle", (req, res) => {
    res.sendStatus(200)
})

app.patch("/user/khyle", (req, res) => {
    res.sendStatus(200);
})

app.delete("/user/khyle", (req, res) => {
    res.sendStatus(200);
})

app.use((req, res) => {
    res.status(404).send("Page not found");
})

app.listen(port, () => {
    console.log(`Server running at port: ${port}.`)
})