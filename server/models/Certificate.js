// Certificates.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const certificateSchema = new Schema({
	certificateName: { type: String, required: true },
	certificateAchieved: { type: Boolean, required: true },
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Student = mongoose.model('certificates', certificateSchema);
