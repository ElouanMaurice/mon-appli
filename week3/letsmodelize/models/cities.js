// Insert your code here
const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
 name: String,
 currentPopulation: Number,
 country: {type:mongoose.Schema.Types.ObjectId, ref: 'coutries'},
});

const City = mongoose.model('cities', citySchema)
module.exports = City;