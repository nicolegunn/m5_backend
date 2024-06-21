const express = require("express");
const { getStations } = require("../controllers/stationsController");
const router = express.Router();

router.get("/stations", getStations);

module.exports = router;
