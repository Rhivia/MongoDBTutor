const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const config = {
  autoIndex: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

before((done) => {
  mongoose.connect('mongodb://localhost/users_test', config);

  mongoose.connection
    .once('open', () => { done(); })
    .on('error', (error) => {
      console.warn('Warning', error);
    });
});

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    // Ready to run the next test!
    done();
  });
});
