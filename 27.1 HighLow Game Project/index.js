import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use((req, res, next) => {
    res.set("Cache-Control", "no-store");
    next();
});

let currentNumber = null;
let nextNumber = null;
let score = 0;
let life = 3;

function generateNumber() {
    return Math.floor(Math.random() * 100);
}

function checkAnswer(nextNumber, currentNumber) {
    if (nextNumber > currentNumber) {
        return "higher";
    } else if (nextNumber < currentNumber) {
        return "lower";
    } else {
        return "tie";
    }
}

function resetGame() {
    score = 0
    life = 3
    currentNumber = generateNumber();
}

app.get("/", (req, res) => {
    resetGame();
    res.render("index.ejs", {
        currentNumber: currentNumber,
        score: score,
        life: life
    });
});

app.post("/guess", (req, res) => {

    if (!req.body?.guess) {
        return res.redirect("/");
    }

    nextNumber = generateNumber();
    let answer = checkAnswer(nextNumber, currentNumber)
    const userChoice = req.body.guess;

    if (userChoice === answer) {
        score++;
    } else {
        life--;
    }

    if (life <= 0) {
        return res.send(`
            <h1>Game Over</h1>
            <p>Score: ${score}</p>
        `);
    }

    res.render("index.ejs", {
        currentNumber: currentNumber,
        nextNumber: nextNumber,
        score: score,
        life: life
    });
    currentNumber = nextNumber;
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});