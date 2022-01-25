import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("req: ", req);
  res.status(200);
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});
