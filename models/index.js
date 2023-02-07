const User = require('./User');

const Vehicle = require('./Vehicle')

User.hasMany(Vehicle, {
    foreignKey:'user_id',
    onDelete: 'CASCADE'
});

Vehicle.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Vehicle };