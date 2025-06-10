import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const date = new Date();
    let currentDay = date.getDay();
    let isWeekday = (currentDay > 0) && (currentDay < 6);
    let type = isWeekday ? "weekday" : "weekend";
    let message = isWeekday ? "it's time to work hard" : "it's time to have fun";
    res.render("index.ejs", {
        dayType: type,
        advice: message,
    });
});

app.listen(port, () => {
    console.log(`Server started in port ${port}`);
});