import express from "express"

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"));

let currentNumber = 0
let nextNumber = 0

app.get("/", (req, res) => {
    currentNumber = Math.floor(Math.random() * 100);

    res.render("index.ejs", {currentNumber: currentNumber});
})

app.post("/guess", (req, res) => {
    nextNumber = Math.floor(Math.random() * 100);
    console.log(req.body.guess)
    res.render("index.ejs", {
        currentNumber: currentNumber,
        nextNumber: nextNumber
    })
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})