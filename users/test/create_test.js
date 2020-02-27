const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
  it('saves a user', (done) => {
    const user = new User({
      name: 'Gleipnir'
    });

    user.save()
      .then(() => {
        // Has the database saved the object
        assert(!user.isNew);
        done();
      });
  });
});
