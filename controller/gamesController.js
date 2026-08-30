const gamesModel = require("../model/gamesModel");

const getAllGames = (req, res) => {
  const games = gamesModel.getAll();
  res.json(games);
};

const getGameById = (req, res) => {
  const id = parseInt(req.params.id);
  const game = gamesModel.getById(id);
  if (game) {
    res.status(200).json(game);
  } else {
    res.status(404).json({ message: "Game not found" });
  }
};

const saveGame = (req, res) => {
  const newGame = req.body;
  const savedGame = gamesModel.save(newGame);
  if (savedGame) {
    res.status(201).json(savedGame);
  } else {
    res.status(500).json({ message: "Error saving game" });
  }
};

const updateGame = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedData = req.body;

  const updatedGame = gamesModel.update(id, updatedData);

  if (updatedGame) {
    res.status(200).json(updatedGame);
  } else {
    res.status(404).json({ message: "Game not found or update failed" });
  }
};

const deleteGame = (req, res) => {
  const id = parseInt(req.params.id);
  const isDeleted = gamesModel.remove(id);

  if (isDeleted) {
    res.status(200).json({ message: `Game ${id} deleted successfully` });
  } else {
    res.status(404).json({ message: "Game not found" });
  }
};

module.exports = {
  getAllGames,
  getGameById,
  saveGame,
  updateGame,
  deleteGame,
};
