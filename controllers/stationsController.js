const Station = require("../models/station.js");

const getStations = async (req, res) => {
  try {
    const stations = await Station.find({});
    res.json(stations);
  } catch (err) {
    res.status(500).json({ message: "Server Error", err });
  }
};

module.exports = {
  getStations,
};
