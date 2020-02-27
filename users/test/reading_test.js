const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {
  let user;

  beforeEach((done) => {
    user = new User({
      name: 'Joe'
    });

    user.save()
      .then(() => done());
  })

  it('Finds all users with a name of Joe', (done) => {
    User.find({ name: 'Joe' })
      .then((users) => {
        assert(users[0]._id.toString() === user._id.toString());

        done();
      });
  });
});
