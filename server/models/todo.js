
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
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

// let newTodo = new Todo({
// 	text: 'Workout',
// 	completed: true,
// 	completedAt: 18072017
// });

// // save() returns a promise
// newTodo.save().then( doc => {
// 	console.log('Saved todo', doc);
// }, (e) => {
// 	console.log('Unable to save todo');
// });

module.exports = {Todo};

