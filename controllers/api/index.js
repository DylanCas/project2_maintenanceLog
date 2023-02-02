const router = require('express').Router();

const userApiRoutes = require('./userRoutes');
const carmdRoutes = require('./carmdRoutes');


router.use('/users', userApiRoutes);

router.use('/carmd', carmdRoutes);

module.exports = router;