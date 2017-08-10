const express = require('express'),
	bodyParser = require('body-parser');


const { mongoose } = require('./db/mongoose'),
	{ Todo } = require('./models/todo'),
	{ User } = require('./models/user'),
	{ ObjectId } = require('mongodb');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	let todo = new Todo({
		text: req.body.text
	});

	todo.save().then( doc => {
		res.send(doc);
	}, e => {
		res.status(400).send(e);
	});
});


// Render out all todos
app.get('/todos', (req, res) => {

	Todo.find().then( todos => {

		// send back an object instead of an array,
		// so later its easier to add other properties.
		res.send({todos});
	}, e => {
		res.status(400).send(e);
	});

});

// Get todo by ID
app.get('/todos/:id', (req, res) => {
	let id = req.params.id;

	// validate id (404 - send back empty send)
	if (!ObjectId.isValid(id)) return res.status(404).send('Id is not valid');

	// find by id
	Todo.findById(id).then( todo => {
	
		// if no todo send 404 with empty body
		if (!todo) return res.status(404).send();

		// if todo exist send it back
		res.send({todo});

		// on error send 400 with empty body
	}).catch( e => res.status(400).send());

});

app.listen(4000, () => {
	console.log('Started on port 4000.');
});


module.exports = {app};









