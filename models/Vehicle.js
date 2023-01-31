const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vehicle extends Model {

}

Vehicle.init(
    {
        id: {
            type: DataTypes.STRING,
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
            allowNull: false,
        },
        milage: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    },
    {
        sequelize,
        timestamps: false, 
        modelName: 'vehicle',
        freezeTableName: true,
    }
);

module.exports = Vehicle;
