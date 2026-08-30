const fs = require("fs");
const path = require("path");

const gameFilePath = path.join(__dirname, "../data/games.json");

const getAll = () => {
  const data = fs.readFileSync(gameFilePath, "utf-8");
  return JSON.parse(data);
};

const getById = (id) => {
  const games = getAll();
  return games.find((game) => game.id === id);
};

const save = (newGame) => {
  try {
    const games = getAll();
    games.push(newGame);
    fs.writeFileSync(gameFilePath, JSON.stringify(games, null, 2), "utf-8");
    return newGame;
  } catch (err) {
    console.error("Error:", err);
    return null;
  }
};

const update = (id, updatedData) => {
  try {
    const games = getAll();
    const index = games.findIndex((game) => game.id === id);

    if (index === -1) return null;

    games[index] = { ...games[index], ...updatedData, id };
    fs.writeFileSync(gameFilePath, JSON.stringify(games, null, 2), "utf-8");
    return games[index];
  } catch (err) {
    console.error("Error updating game:", err);
    return null;
  }
};

const remove = (id) => {
  try {
    const games = getAll();
    const index = games.findIndex((game) => game.id === id);

    if (index === -1) return false;

    games.splice(index, 1);
    fs.writeFileSync(gameFilePath, JSON.stringify(games, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Error deleting game:", err);
    return false;
  }
};

module.exports = { getAll, getById, save, update, remove };
