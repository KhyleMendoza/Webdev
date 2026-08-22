import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";
const yourBearerToken = "8269e2af-d1e7-4a63-a0ca-208d15710a55";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/post-secret", async (req, res) => {
  try {
    let secret = req.body.secret;
    let score = req.body.score;

    if (!score || !secret) {
      res.render("index.ejs", { content:"Secret and score should not be empty!" });
    }

    const result = await axios.post(`${API_URL}/secrets`, {
      "secret": req.body.secret,
      "score": req.body.score
    }, config)
    res.render("index.ejs", {content: JSON.stringify(result.data) })
  } catch (error) {
    res.render("index.ejs", {content: JSON.stringify(error.response.data)})
  }
});

app.post("/put-secret", async (req, res) => {
  try {
    const searchId = req.body.id;
    let secret = req.body.secret;
    let score = req.body.score;

    if (!searchId || !secret || !score) {
      res.render("index.ejs", { content: "id, secret and score should not be empty!" })
    }

    const result = await axios.put(`${API_URL}/secrets/${searchId}`, {
      "secret": secret,
      "score": score
    }, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) }) ;
  }
});

app.post("/patch-secret", async (req, res) => {
  try {
    const searchId = req.body.id;

    if (!searchId) {
      res.render("index.ejs", { content: "id should not be empty!" })
    }

    const result = await axios.patch(`${API_URL}/secrets/${searchId}`, req.body, config)
    res.render("index.ejs", { content: JSON.stringify(result.data) })
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) })
  }
});

app.post("/delete-secret", async (req, res) => {
  try {
    const searchId = req.body.id;

    if (!searchId) {
      res.render("index.ejs", { content: "id should not be empty!" })
    }

    const result = await axios.delete(`${API_URL}/secrets/${searchId}`, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) })
  } catch (error) {
    res.render("index.ejs", { content: error.response.data })
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
