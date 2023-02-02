const { response } = require("express");
const axios = require('axios');

const apiUrl = "http://api.carmd.com/v3.0";
require("dotenv").config();

const router = require("express").Router();

router.get("/vin/:vin", async (req, res) => {
    
});

module.exports = router;
