// // v1
// import express from "express";
// import bodyParser from "body-parser";
// import { dirname } from "path"
// import { fileURLToPath } from "url";
// const __dirname = dirname(fileURLToPath(import.meta.url))

// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html")
// })

// app.post("/submit", (req, res) => {
//   console.log(`Street name: ${req.body.street}`)
//   console.log(`Pet name: ${req.body.pet}`)
//   res.send(req.body.street + req.body.pet)
// })

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });

// // v2

// import bodyParser from "body-parser";
// import express from "express";
// import { dirname } from "path"
// import { fileURLToPath } from "url";
// const __dirname = dirname(fileURLToPath(import.meta.url))

// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: true }))

// let bandName = ""

// function bandNameGenerator(req, res, next) {
//   bandName = req.body["street"] + req.body["pet"];
//   next();
// }

// app.use(bandNameGenerator)

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// })

// app.post("/submit", (req, res) => {
//   res.send(`Hello your Band Name is ${bandName}!`);
// })

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express();
const port = 3000;
let bandName = ""
app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.post("/submit", (req, res) => {
  res.send(`<h1>Hello your new band name is ${bandName}!</h1>`)
})

app.listen(port, () => {
  console.log(`Server is running at port: ${port}.`)
})