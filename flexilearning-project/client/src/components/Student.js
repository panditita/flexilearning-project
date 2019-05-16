// Import our User schema
const User = require('./models/User.js');

// POST route to register a user
app.post('/api/register', function(req, res) {
	const { email, password } = req.body;
	const user = new User({ email, password });
	user.save(function(err) {
		if (err) {
			res.status(500).send('Error registering new user please try again.');
		} else {
			res.status(200).send('Welcome to the club!');
		}
	});
});

UserSchema.methods.isCorrectPassword = function(password, callback) {
	bcrypt.compare(password, this.password, function(err, same) {
		if (err) {
			callback(err);
		} else {
			callback(err, same);
		}
	});
};
