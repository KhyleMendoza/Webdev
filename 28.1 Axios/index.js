import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const apiUrl = "https://bored-api.appbrewery.com";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(`${apiUrl}/random`)
        const result = response.data;
        res.render("index.ejs", {
            data: result
        })
    } catch (error) {
        console.log("failed to make request:" + error.message)
        res.render("index.ejs", {
            error: error.message
        });
    }
})

app.post("/", async (req, res) => {
    try {
        const type = req.body.type;
        const participants = req.body.participants;

        const response = await axios.get(`${apiUrl}/filter?type=${type}&participants=${participants}`);
        const result = response.data;
        console.log(result);
        res.render("index.ejs", {
            data: result[Math.floor(Math.random() * result.length)]
        });
    } catch (error) {
        console.log("failed to make request:" + error.message)
        res.render("index.ejs", {
            error: error.message
        });
    }
})

app.listen(port, () => {
    console.log(`Server is listening at port:${port}.`)
})