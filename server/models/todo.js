
const mongoose = require('mongoose');

// Validation
// http://mongoosejs.com/docs/validation.html
const Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlength: 2,
		trim: true // remove leading white spaces.
	},
	description: {
		type: String,
		trim: true
	}
});

// let newTodo = new Todo({
// 	text: 'Workout',
// 	description: 'Train back and shoulders'.
// });

// // save() returns a promise
// newTodo.save().then( doc => {
// 	console.log('Saved todo', doc);
// }, (e) => {
// 	console.log('Unable to save todo');
// });

module.exports = {Todo};

