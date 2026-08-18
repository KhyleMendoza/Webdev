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
            latitude: data.latitude,
            longitude: data.longitude,
            altitude: data.altitude,
            velocity: data.velocity,
            visibility: data.visibility
        })
    } catch (error) {
        console.error(error);
        res.status(500).send("Unable to retrieve ISS data.")
    }
})

app.listen(port, () => {
    console.log(`Server is running at port: ${port}.`)
})