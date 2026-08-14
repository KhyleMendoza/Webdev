//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

// // v1
// import express from "express";
// import bodyParser from "body-parser";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// const port = 3000;
// const app = express();
// const __dirname = dirname(fileURLToPath(import.meta.url))

// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/public/index.html");
// })

// app.post("/check", (req, res) => {
//     if (req.body["password"] == "ILoveProgramming") {
//         res.sendFile(__dirname + "/public/secret.html");
//     } else {
//         // res.send("Incorrect Password");
//         res.sendFile(__dirname + "/public/index.html")
//     }
// })

// app.listen(port, () => {
//     console.log(`Server is listening at port: ${port}.`);
// })

// // v2
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

let isAuthenticated = false;

function checkPassword(req, res, next) {
    let password = req.body["password"];
    if (password == "ILoveProgramming") {
        isAuthenticated = true;
    } else {
        isAuthenticated = false;
    }
    next();
} 

app.use(checkPassword);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/check", (req, res) => {
    if (isAuthenticated) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        // res.sendFile(__dirname + "/public/index.html");
        res.redirect("/");
    }
})

app.listen(port, () => {
    console.log(`Server is running at port: ${port}.`);
})