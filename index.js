import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.post("/action", (req, res) => {
  console.log("req: ", req.body);
  res.status(200);
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});
