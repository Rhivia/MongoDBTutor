const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {
  let alex, joe, maria, zach;

  beforeEach((done) => {
    alex = new User({ name: 'Alex' });
    joe = new User({ name: 'Joe' });
    maria = new User({ name: 'Maria' });
    zach = new User({ name: 'Zach' });

    Promise.all([alex.save(), joe.save(), maria.save(), zach.save()])
      .then(() => done());
  })

  it('Finds all users with a name of Joe', (done) => {
    User.find({ name: 'Joe' })
      .then((users) => {
        assert(users[0]._id.toString() === user._id.toString());

        done();
      });
  });

  it('can skpi and limit the result set', (done) => {
    User.find({})
      .sort({ name: 1 })
      .skip(1)
      .limit(2)
      .then((users) => {
        assert(users[0].name === 'Joe');
        assert(users[1].name === 'Maria');
        done();
      });
  });
});
