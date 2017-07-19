const mongoose = require('mongoose');

const User = mongoose.model('User', {
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		minlength: 2,
		trim: true // remove leading white spaces.
	}
});

// let newUser = new User({
// 	name: 'Magic Johnson',
// 	email: 'magicJ@app.com'
// });

// save() returns a promise
// newUser.save().then( doc => {
// 	console.log('Saved user', doc);
// }, (e) => {
// 	console.log('Unable to save user', e);
// });

module.exports = {User};

