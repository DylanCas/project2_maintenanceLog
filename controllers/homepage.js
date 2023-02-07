const router = require('express').Router();
const User = require('../models/User');
const Vehicle = require('../models/Vehicle')
const withAuth = require('../utils/auth');

router.get('/',withAuth, async (req, res) => {
  try {
    const vehicleData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Vehicle }],
    });

    const user = vehicleData.get({ plain: true });

    res.render('homepage', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/singleVehicle/:id', withAuth, async (req, res) => {
  try {
    const vehicleData = await Vehicle.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const vehicle = vehicleData.get({ plain: true });

    res.render('singleVehicle', {
      ...vehicle,
      logged_in: req.session.logged_in
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

router.get("/vinForm", async (req, res) => {
  try {
    res.render('vinForm')
  } catch (err) {
    res.status(400, 500).json(err);
  }
})

module.exports = router;
