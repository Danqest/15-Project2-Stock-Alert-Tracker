const User = require('../models/User');

const userSeeds = [
    {
        "username": "testing",
        "email": "testing@testing.com",
        "password": "password12345"
      }
];

const seedUsers = () => User.bulkCreate(userSeeds);

module.exports = seedUsers;
