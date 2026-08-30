// const express = require("express");
// const games = require("./data/games");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("hi there !!!");
// });

// // Get All
// app.get("/games", (req, res) => {
//   const { name } = req.query;
//   let result = games;
//   // Get by Query
//   if (name) {
//     result = result.filter((game) => game.name == name);
//   }
  
//   res.json(result);
// });

// // Get Game By ID (Single)
// app.get("/games/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const item = games.find((game) => game.id === id);

//   if (!item) {
//     return res.status(404).json({ message: "Game not found" });
//   }

//   res.json(item);
// });

// app.listen(5000, () => {
//   console.log("Server is running on port 5000");
// });

// // const http = require("http");
// // let games = require("./data/games");

// // const server = http.createServer((req, res) => {
// //   // res.setHeader("Content-Type", "application/json");

// //   console.log(req, req.method, req.url);
// //   if (req.method === "POST" && req.url === "/") {
// //     const newId = games.length + 1;
// //     const newItem = { id: newId, name: `Test ${newId}`, price: 1000 * newId };
// //     games.push(newItem);
// //     console.log("Updated games array:", games);
// //     return res.end(JSON.stringify(newItem));
// //   }
// // });

// // server.listen(3000, () => {
// //   console.log("Server running on http://localhost:3000");
// // });

// // console.log("Initial games:", games);

const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
// const gamesRouter = require('./router/gamesRouter');
const userRouter = require("./router/userRouter");

// app.use('/', gamesRouter);
app.use('/', userRouter);

app.listen(port, ()=> {
  console.log(`App is running on ${port}`);
})