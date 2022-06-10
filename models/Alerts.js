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
            // userId: {
            //     type: DataTypes.INTEGER,
            //     referencec : {
            //         model: 'user',
            //         key: 'id',
            //     }
            // },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            ticker: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            buysell: Boolean,
            shares: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }, 
            bidask: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            current_price:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            startDate: {
                type: DataTypes.DATE,
                allowNull: false,
              },
            endDate: {
                type: DataTypes.DATE,
                allowNull: false,
              },
              pnl: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
        },

        {
            sequelize,
            timestamps: true,
            freezeTableName: true,
            underscored: true,
            modelName: 'alert',
        }
    )

module.exports = Alert;
