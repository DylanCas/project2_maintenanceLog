const router = require('express').Router();

const userApiRoutes = require('./userRoutes');
const carmdRoute = require('./carmdRoutes');


router.use('/users', userApiRoutes);

router.use('/carmd', carmdRoute);

module.exports = router;