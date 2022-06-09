const User = require('../models/User');
const Alert = require('../models/Alerts');


User.hasMany(Alert, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Alert.belongsTo(User, {
  foreignKey: 'user_id'
});
module.exports = { User, Alert };