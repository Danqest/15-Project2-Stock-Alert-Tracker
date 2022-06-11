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
            // username: {
            //     type: DataTypes.STRING,
            //     allowNull: false,
            // },
            ticker: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            entry: { //long or short
                type: DataTypes.STRING,
                allowNull: false,
              },
            shares: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }, 
            entry_price: { 
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            current_price:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            // start_time: {
            //     type: DataTypes.DATE,
            //     allowNull: false,
            //   },
            // end_time: {
            //     type: DataTypes.DATE,
            //     allowNull: false,
            //   },
              profit_or_loss: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                  model: 'user',
                  key: 'id',
                },
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
