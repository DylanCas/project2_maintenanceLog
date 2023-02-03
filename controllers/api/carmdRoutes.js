const router = require("express").Router();
const Vehicle = require('../../models/vehicle')
const axios = require('axios');
require("dotenv").config();

const apiUrl = "http://api.carmd.com/v3.0";


router.get("/vin/:vin", async (req, res) => {
  const url = `${apiUrl}/decode?vin=${req.params.vin}`;
  try {
    const res = await axios.get(url, {
      headers: {
        "Content-Type":"application/json",
        "authorization":process.env.CARMDKEY,
        "partner-token":process.env.CARMDTOKEN,
      }
    });
    console.log(res.data.data.year);
    // res.send(res);
  } catch(error) {
    console.error(error);
    res.status(500).json({message: "An error occurred, please try again. If problem persists, contact us"})
  }
});

module.exports = router;