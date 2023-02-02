const { response } = require("express");
const axios = require('axios/dist/browser/axios.cjs'); // browser commonJS bundle (ES2017)
// const axios = require('axios/dist/node/axios.cjs'); // node commonJS bundle (ES2017)

const apiUrl = "http://api.carmd.com/v3.0";
require("dotenv").config();

const router = require("express").Router();

router.get("/vin/:vin", async (req, res) => {
    const url = `${apiUrl}/decode?vin=${req.params.vin}`;
    
    // ***axios npm will be used in place of following***
    // https://www.npmjs.com/package/axios#axios-api
//   const response = await fetch(url, {
//     method: "get",
//     headers: {
//       "partner-token": process.env.CARMDTOKEN,
//       "Authorization": process.env.CARMDKEY,
//       "Content-Type": "application/json",
//     },
//   });
  console.log(response)
  res.status(200).json(response);
});

module.exports = router;
