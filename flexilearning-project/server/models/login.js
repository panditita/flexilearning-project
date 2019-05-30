// Login.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginSchema = new Schema({
	email: { type: String, required: true },
	password: { type: String, required: true },
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Student = mongoose.model('login', loginSchema);
