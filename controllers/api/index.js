const router = require('express').Router();

const userApiRoutes = require('./userRoutes');

router.use('/user', userApiRoutes);

module.exports = router;