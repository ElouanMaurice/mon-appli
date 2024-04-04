// Insert your code here
const mongoose = require('mongoose');

const songSchema = mongoose.Schema({
    annoying: Boolean,
    artist: String,
    creationDate: Date,
    title: String,

});

const Song = mongoose.model('song', songSchema);

module.exports = Song;