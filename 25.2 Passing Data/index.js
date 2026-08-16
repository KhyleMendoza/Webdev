import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.post("/submit", (req, res) => {
    let fName = req.body["fName"];
    let lName = req.body["lName"];
    let fullName = fName + lName;
    let lengthOfName = fullName.length;
    fullName = fName + " " + lName;

    res.render("index.ejs", {
        fullName: fullName,
        lengthOfName: lengthOfName
    });
})

app.listen(port, () => {
    console.log(`Server is running at port: ${port}.`);
})