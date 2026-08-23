import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
        const species = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/pikachu`)
        const description = species.data.flavor_text_entries.find(e => e.language.name === "en").flavor_text

        res.render("index.ejs", {
            pokemon: response.data,
            description: description
        })
    } catch (error) {
        res.send(error.response?.data)
    }
})

app.post("/pokemon", async (req, res) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.body.pokemon}`)
        const species = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${req.body.pokemon}`)
        const description = species.data.flavor_text_entries.find(e => e.language.name === "en").flavor_text

        res.render("index.ejs", {
            pokemon: response.data,
            description: description
        })
    } catch (error) {
        res.send(error.response?.data)
    }
})

app.listen(port, () => {
    console.log(`Server is running at port:${port}.`)
})