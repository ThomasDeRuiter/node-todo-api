const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose'),
	{Todo} = require('./../server/models/todo');


let id = '596f8fe1c28b63036bcdbf5b';

if (!ObjectId.isValid(id)) console.log('Id is not valid');

// Todo.find({
// 	_id: id
// }).then( todos => console.log('Todos', todos));

// Todo.findOne({
// 	_id: id
// }).then( todo => console.log('Todo', todo));

// Always use findById method when looking up by id
// when id doesnt exist mongoose returns "null"
// handle this default behavior by adding an if statement.
Todo.findById(id).then( todo => {
	if (!todo) {
		return console.log('Id not found.');
	}
	console.log('Todo by ID', todo)
}).catch( e => console.log(e));




