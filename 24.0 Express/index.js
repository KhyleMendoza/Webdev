// import express from "express";
// const app = express();

// app.get("/", (req, res) => {
//     res.send("<h1>Welcome to the Homepage!</h1>");
// })

// app.get("/about", (req, res) => {
//     res.send("<h1>About us</h1>");
// })

// app.use((req, res) => {
//     res.status(404).send("<h1>Page not found</h1>");
// })

// app.listen(3000, () => {
//     console.log("Server running at http://localhost:3000/")
// })

import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // console.log(req.rawHeaders)
    res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About us</h1><p>My name is Khyle</p>")
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contact me</h1> 09329378293232")
})

app.use((req, res) => {
    res.status(404).send("Page not found")
})

app.listen(port, () => {
    console.log(`Server running at port ${port}.`)
});