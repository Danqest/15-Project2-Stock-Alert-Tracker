const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Alert extends Model {}
    Alert.init (
        {
            username: DataTypes.STRING,
            ticker: DataTypes.STRING,
            command: DataTypes.STRING,
            shares: DataTypes.INTEGER,
            bidask: DataTypes.INTEGER,
            current_price: DataTypes.INTEGER,
            open: true,
            closed: false,
            gain: DataTypes.INTEGER,

        },
        {
            sequelize,
        }
    )

module.exports = Alert;
