const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = process.env.PORT || 4000;
const app = express();

app.use(bodyParser.json(), cors()),
	app.use(
		bodyParser.urlencoded({
			extended: false
		})
	);

const MONGODB_URI = 'mongodb://localhost:27017/flexilearning';

mongoose
	.connect(MONGODB_URI, { useNewUrlParser: true })
	.then(() => console.log('MongoDB connected'))
	.catch((err) => console.log(err));

const Students = require('./routes/Students');

app.use('/students', Students);
app.listen(port, () => {
	console.log('Server is running on port: ' + port);
});
