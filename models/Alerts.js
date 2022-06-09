const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Alert extends Model {}
    Alert.init (
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            ticker: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            buysell: DataTypes.STRING,
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
