import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan(":method :url :status :response-time ms - :res[content-length]"));

app.get("/", (req, res) => {
  res.send("Hello");
  console.log(req.morgan);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
