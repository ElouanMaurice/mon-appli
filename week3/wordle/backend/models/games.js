const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    date: Date,
    word: String,
})

const Game = mongoose.model('games', gameSchema);


module.exports = Game;