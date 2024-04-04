const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	inscriptionDate: Date,
	addresses: [
		{ street: String, city: String, zipCode: String, isFavourite: Boolean},
		{ street: String, city: String, zipCode: String, isFavourite: Boolean}
	]
});

const User = mongoose.model('users', userSchema);

module.exports = User;
