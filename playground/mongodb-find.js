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

	// db.collection('Todos').find({
	// 	_id: new ObjectId('58dc112998f5fb0e3d70f04a')
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos');
	// });

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
		
	// }, (err) => {
	// 	console.log('Unable to fetch todos');
	// });

	db.collection('Users').find({name: 'John Doe'}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
		
	}, (err) => {
		console.log('Unable to fetch todos');
	});

	// close the connection with the mongodb server
	db.close();
	
});

