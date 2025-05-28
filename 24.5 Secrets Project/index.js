import express from "express";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({ extended: true }));

app.use(morgan("tiny"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    console.log(req.morgan);
});

app.post("/check", (req, res) => {
    let password = req.body.password;
    if (password === "YouShouldRest") {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.redirect("/");
    }
    console.log(req.morgan);

});

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});
