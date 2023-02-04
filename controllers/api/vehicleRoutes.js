const router = require('express').Router();
const { Vehicle } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/addVehicleForm', async (req, res) => {
    try {
      const addVehicle = await Vehicle.create({
        ...req.body,
        user_id: req.session.user_id
      });

      res.status(200).json(addVehicle);
    } catch (err) {
      res.status(400).json(err);
    }
  }); 

  
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const vehicleData = await Vehicle.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!vehicleData) {
      res.status(404).json({ message: 'No vehicle found!' });
      return;
    }

    res.status(200).json(vehicleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
