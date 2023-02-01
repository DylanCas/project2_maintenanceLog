const router = require('express').Router();

const userApiRoutes = require('./userRoutes');
const carmdRoutes = require('./carmdRoutes');


router.use('/user', userApiRoutes);

router.use('/carmd', carmdRoutes);

module.exports = router;