const router = require('express').Router();

const userApiRoutes = require('./userRoutes');

router.use('/users', userApiRoutes);

module.exports = router;