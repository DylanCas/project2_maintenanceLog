const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vehicle extends Model {}

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
        make: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            // may alter/need to alter, to STRING
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        engine: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        mileage: {
            // may alter/need to alter, to STRING
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    },
    {
        sequelize,
        timestamps: false,
        // Prevent sequelize from renaming the table
        freezeTableName: true,
        modelName: 'vehicle'
      }
);

module.exports = Vehicle;
