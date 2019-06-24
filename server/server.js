const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 4000;
const app = express();

app.use(bodyParser.json(), cors()),
	app.use(
		bodyParser.urlencoded({
			extended: false
		})
	);

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/flexilearning';

mongoose
	.connect(MONGODB_URI, { useNewUrlParser: true })
	.then(() => console.log('MongoDB connected'))
	.catch((err) => console.log(err));

const Students = require('./routes/Students');

// In development environemnt, we use the create-react-app dev server
// In production, the static build is served from here
if (process.env.NODE_ENV !== 'development') {
	//TODO: Update/Check the paths
	app.use('/', express.static(path.resolve(__dirname, '../client/build')));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
	});
}

app.use('/students', Students);
app.listen(port, () => {
	console.log('Server is running on port: ' + port);
});
