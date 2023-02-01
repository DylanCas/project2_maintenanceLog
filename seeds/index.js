const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./users.json');
const vehicleData = require('./vehicles.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.create({
    name: '',
    email: '',
    password: '',
});

};

seedDatabase();