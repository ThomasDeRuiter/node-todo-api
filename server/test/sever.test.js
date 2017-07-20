const expect = require('expect'),
	  request = require('supertest');

const { app } = require('./../server'),
	  { Todo } = require('./../models/todo');

// clear the database before running the test by removing all todo's
// so the test starts with 0 todo's and,
// "expect(todos.length).toBe(1)" will pass.
beforeEach(done => {
	Todo.remove({}).then(() => done());
});

// Add a test case.
// its added to the scripts in the package.json file.
// run npm test.
// test-watch will run the test to nodemon,
// which means the test will run after each change on the app.
describe('POST /todos', () => {
	it('Should create a new todo', done => {
		let text = 'Test todo text';

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
				Todo.find().then( todos => {

					// should be one todo that we inserted above
					expect(todos.length).toBe(1);

					// expect that that item has a text property
					// equal to the text variable created above
					expect(todos[0].text).toBe(text);
					done();
				}).catch( e => done(e)); // catch any errors in the callback.
			}); 
	});

});

