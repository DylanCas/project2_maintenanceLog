const router = require("express").Router();
const Vehicle = require('../../models/vehicle')
const axios = require('axios');
require("dotenv").config();

const apiUrl = "http://api.carmd.com/v3.0";


router.post("/vin/:vin", async (req, res) => {
  if (!req.session.loggedIn) {
    res.status(401).json({message: 'Please log in to use this feature.'})
  }
  const url = `${apiUrl}/decode?vin=${req.params.vin}`;
  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type":"application/json",
        "authorization":process.env.CARMDKEY,
        "partner-token":process.env.CARMDTOKEN,
      }
    });
    const { manufacturer, trim, transmission,...vehicleInfo } = response.data.data;
    const vehicle = await Vehicle.create({...vehicleInfo, user_id: req.session.user_id});
    res.status(200).json(vehicle)
  } catch(error) {
    console.error(error);
    res.status(500).json(error)
  }
});

module.exports = router;