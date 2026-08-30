const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ msg: "Hello" });
});

app.post("/", (req, res) => {
  console.log(req.body); 
  res.status(201).send({ msg: "This is the Post method", received: req.body ?? "null" });
});

app.listen(3000, () => {
  console.log("Server is running on Port 3000");
});
