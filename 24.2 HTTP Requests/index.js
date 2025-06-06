import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello, User!</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About me</h1><p>My name is Joaquin</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact me</h1><p>+639123456789</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});