import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

let day = "";
let advice = "";

function getDay(req, res, next) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    const weekday = weekdays[d.getDay()];
    // const weekday = "Monday";

    if (weekday === "Saturday" || weekday === "Sunday") {
        day = "a weekend";
        advice = "it's time to have fun"
    } else {
        day = "the weekday"
        advice  ="it's time to work hard"
    }

    next()
}

app.use(getDay)

app.get("/", (req, res) => {
    // if (day == "weekend") {
    //     res.send(`<h1>Hey! It's the ${day}, its time to have fun!</h1>`)
    // } else {
    //     res.send(`<h1>Hey! It's a ${day}, its time to work hard!</h1>`)
    // }
    
    res.render('index.ejs', {
        dayType: day,
        advice: advice
    });
});

app.listen(port, () => {
    console.log(`Server is listening at port: ${port}.`);
})