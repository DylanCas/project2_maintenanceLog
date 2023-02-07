const router = require('express').Router();

const userApiRoutes = require('./userRoutes');
// const carmdRoute = require('./carmdRoutes');
const vehicleRoutes = require('./vehicleRoutes')

router.use('/users', userApiRoutes);
router.use('/vehicles', vehicleRoutes)
// router.use('/carmd', carmdRoute);

module.exports = router;