import express from "express"

const app = express();
const port = 3000;

app.use(express.static("public"));

const ISSApi = "https://api.wheretheiss.at/v1/satellites/25544"

app.get("/", async (req, res) => {
    try {
        const response = await fetch(ISSApi);
        const data = await response.json();
        // console.log(data);
        res.render("index.ejs", {
            data: data
        })
    } catch (error) {
        console.error(error);
        res.status(500).send("Unable to retrieve ISS data.")
    }
})

app.listen(port, () => {
    console.log(`Server is running at port: ${port}.`)
})