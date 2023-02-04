const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vehicle extends Model {

}

Vehicle.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        trim: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        engine: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        milage: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
        // add user id
    },
    {
        sequelize,
        timestamps: false, 
        modelName: 'vehicle',
        freezeTableName: true,
    }
);

module.exports = Vehicle;
