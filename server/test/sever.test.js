const expect = require('expect'),
	  request = require('supertest'),
	  {ObjectID} = require('mongodb');

const { app } = require('./../server'),
	  { Todo } = require('./../models/todo');

const todos = [{
	_id: new ObjectID(),
	text: 'First todo',
	description: 'First things first.'
}, {
	_id: new ObjectID(),
	text: 'Second todo',
	description: 'Just some dummy text'
}];

// clear the database before running the test by removing all todo's
// so the test starts with 0 todo's and,
// "expect(todos.length).toBe(1)" will pass.
beforeEach(done => {
	Todo.remove({}).then(() => {
		return Todo.insertMany(todos);
	}).then( () => done());
});

// Add a test case.
// its added to the scripts in the package.json file.
// run npm test.
// test-watch will run the test to nodemon,
// which means the test will run after each change on the app.
describe('POST /todos', () => {
	it('Should create a new todo', done => {

		let text = 'Test post todo';

		// make the request with supertest.
		// pass in the app to make the test on.
		request(app)
			.post('/todos') // make the post request
			.send({text}) // object gets converted to JSON by supertest
			.expect(200) // expect the status to be 200
			.expect( res => { // custom expect calls get passed the response

				// expect the response body to be an object
				// and has the text property equal to the one we send above.
				expect(res.body.text).toBe(text);
			})
			.end((err, res) => { // check what got stored in the mongodb collection.
				// if error use return to stop the function execution
				// so everything below wont run.
				if (err) {
					return done(err);
				}

				// fetch all the todo's
				Todo.find({text}).then( todos => {

					// should be one todo that we inserted above
					expect(todos.length).toBe(1);

					// expect that that item has a text property
					// equal to the text variable created above
					expect(todos[0].text).toBe(text);
					done();
				}).catch( e => done(e)); // catch any errors in the callback.
			}); 
	});

	

	it('should not create todo with invalid body data', done => {
		request(app)
			.post('/todos')
			.send({})
			.expect(400)
			.end( (err, res) => {
				if (err) return done(err)

				Todo.find().then( todos => {
					expect(todos.length).toBe(2);
					done();
				}).catch( e => done(e));
			});
	});

});

describe('GET /todos', () => {
	it('should get all todos', done => {
		request(app)
			.get('/todos')
			.expect(200)
			.expect(res => {
				expect(res.body.todos.length).toBe(2);
			})
			.end(done);
	});
});

describe('GET /todos/:id', () => {
	it('Should return todo doc', done => {
		request(app)
			.get(`/todos/${todos[0]._id.toHexString()}`)
			.expect(200)
			.expect(res => {
				expect(res.body.todo.text).toBe(todos[0].text);
			})
			.end(done);
	});

	it('Should return 404 if todo not found', done => {
		request(app)
			.get(`/todos/${new ObjectID().toHexString()}`)
			.expect(404)
			.end(done);
	});

	it('Should return 404 for non-object ids', done => {
		request(app)
			.get(`/todos/12344555`)
			.expect(404)
			.end(done);
	});
});

















