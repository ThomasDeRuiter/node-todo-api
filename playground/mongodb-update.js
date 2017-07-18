
// update docs https://docs.mongodb.com/manual/reference/operator/update/

const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to mongodb server');
	}

	console.log('Connected to MongoDB server.');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectId('596e390577bb084ee42b93ee')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then(result => console.log(result));

	let findId = '58dcf9ad413dbe036be820b2';

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectId(findId)
	}, {
		$set: {
			name: 'Thomas de Ruiter'
		},
		$inc: {
			age: 44
		}
	}, {
		returnOriginal: false
	}).then(result => console.log(result));

	// close the connection with the mongodb server
	//db.close();
	
});

