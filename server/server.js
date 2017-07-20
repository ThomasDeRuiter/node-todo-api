const express = require('express'),
	bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose'),
	{ Todo } = require('./models/todo'),
	{ User } = require('./models/user');

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

})

app.listen(3000, () => {
	console.log('Started on port 3000.');
});


module.exports = {app};









