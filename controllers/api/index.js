const router = require('express').Router();
const vehicleRoutes = require('./vehicleRoutes')
const userApiRoutes = require('./userRoutes');
const carmdRoute = require('./carmdRoutes');


router.use('/users', userApiRoutes);
router.use('/vehicles', vehicleRoutes);
router.use('/carmd', carmdRoute);

module.exports = router;