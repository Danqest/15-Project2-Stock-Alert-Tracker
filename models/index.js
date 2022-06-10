const User = require('./User');
const Alert = require('./Alerts');

User.hasMany(Alert, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
User.belongsToMany(Alert, {
  foreignKey: 'userId'
});


module.exports = { User, Alert };