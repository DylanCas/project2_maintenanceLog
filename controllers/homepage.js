const router = require('express').Router();
const { User, Vehicle } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const vehicleData = await Vehicle.findAll(req.session.user_id, {
      include: [
        {
          model: Vehicle,
          attributes: ['make', 'model'],
        },
      ],
    });

    const vehicles = vehicleData.map((vehicle) =>
      vehicle.get({ plain: true })
    );


    res.render('homepage', {
       vehicles,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/singleVehicle', withAuth, async (req, res) => {
  try {

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Vehicle }],
    });

    const user = userData.get({ plain: true });

    res.render('singleVehicle', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {

  if (req.session.logged_in) {
    res.redirect('/');
   return;
 }

  res.render('login');
});

module.exports = router;
