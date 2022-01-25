import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/", (req, res) => {
  console.log("req: ", req.body);
  res.status(200);
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});
