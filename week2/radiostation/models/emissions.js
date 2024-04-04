// Insert your code here
const mongoose = require('mongoose');

const emissionSchema = mongoose.Schema({
    discontinued: Boolean,
    mainAnimator: String,
    name: String,
    nbAnimators: Number,

});

const Emission = mongoose.model('emissions', emissionSchema)

module.exports = Emission