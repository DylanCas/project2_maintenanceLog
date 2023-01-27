const router = require('express').Router();

const userApiRoutes = require('./api/userRoutes');

router.use('./api/userRoutes', userApiRoutes);

module.exports = router;