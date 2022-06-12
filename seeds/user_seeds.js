const User = require('../models/User');

const userSeeds = [
    {
        "username": "username1",
        "email": "testing@testing.com",
        "password": "password12345"
      },
      {
        "username": "username2",
        "email": "testing2@testing.com",
        "password": "password12345"
      }
];

const seedUsers = () => User.bulkCreate(userSeeds);

module.exports = seedUsers;
