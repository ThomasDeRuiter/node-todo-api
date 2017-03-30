//const MongoClient = require('mongodb').MongoClient;

// use destructering to pull of properties from mongodb library.
const {MongoClient, ObjectId} = require('mongodb');

// create a unique ID
// var obj = new ObjectId();
// console.log(obj);


// ES6 destructering
// var user = {name: 'John', age: 25}
// var {name} = user;
// console.log(name);

// Takes 2 arguments
// first arg: url where db lives. e.g. heroko url
// second arg: callback function
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to mongodb server');
	}

	console.log('Connected to MongoDB server.');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		// use return to stop the function execution.
	// 		return console.log('Unable to insert todo:', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// db.collection('Users').insertOne({
	// 	name: 'John Doe',
	// 	age: 25,
	// 	location: 'Philly'

	// }, (err, result) => {
	// 	if (err) {
	// 		// use return to stop the function execution.
	// 		return console.log('Unable to insert user:', err);
	// 	}

	// 	// result.ops is an array of all the documents that got inserted.
	// 	console.log(JSON.stringify(result.ops, undefined, 2));

	// 	// get the timestamp of id of to
	// 	console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
	// });

	// close the connection with the mongodb server
	db.close();
	
});

