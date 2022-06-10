const sequelize = require('../config/connection');
const { User, Alert } = require('../models');

const userData = require('./userData.json');
const alertData = require('./alertData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const alert of alertData) {
    await Alert.create({
      ...alert,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
