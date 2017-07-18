//const MongoClient = require('mongodb').MongoClient;

// use destructering to pull of properties from mongodb library.
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to mongodb server');
	}

	console.log('Connected to MongoDB server.');

	// DELETE MANY
	// db.collection('Todos').deleteMany({text: 'learn new node module'}).then((result) => {
	// 	console.log(result);
	// });

	// DELETE ONE
	// db.collection('Todos').deleteOne({text: 'eat lunch'}).then(result => {
	// 	console.log(result);
	// });

	// FIND ONE AND DELETE
	db.collection('Todos').findOneAndDelete({completed: false}).then(result => {
		console.log(result);
	});

	// close the connection with the mongodb server
	//db.close();
	
});

