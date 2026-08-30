const express = require("express");
const router = express.Router();
const gamesController = require("../controller/gamesController");

router.get("/", gamesController.getAllGames);
router.get("/:id", gamesController.getGameById);
router.post("/", gamesController.saveGame);
router.put("/:id", gamesController.updateGame);
router.delete("/:id", gamesController.deleteGame);

module.exports = router;