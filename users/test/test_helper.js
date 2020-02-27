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
  const { users, comments, blogPosts } = mongoose.connection.collections;

  users.drop(() => {
    comments.drop(() => {
      blogPosts.drop(() => {
        done();
      })
    })
  });
});
