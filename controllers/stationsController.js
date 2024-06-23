const Station = require("../models/station.js");

const getStations = async (req, res) => {
  const { stationType, fuelTypes, selectedServices } = req.query;
  console.log(req.query);

  let query = {};

  console.log("Received Query Parameters:", req.query);

  // Only filter if one of the stationTypes is selected
  // If the station type is "Truck stop" then only include stations with "truck stop"(case insensitive) in name
  // If the station type is "Service station" then exclude stations with "truck stop"(case insensitive) in name
  if (stationType) {
    if (
      stationType.includes("Truck stop") &&
      !stationType.includes("Service station")
    ) {
      query.name = { $regex: /truck stop/i };
    } else if (
      !stationType.includes("Truck stop") &&
      stationType.includes("Service station")
    ) {
      query.name = { $not: { $regex: /truck stop/i } };
    }
  }

  // Only include stations that sell any selected fuel types if one or more fuel type is selected
  if (fuelTypes) {
    query.fuelTypes = {
      $all: fuelTypes.map((fuel) => ({ $elemMatch: { type: fuel } })),
    };
  }

  // Only include stations that include the selected services
  if (selectedServices) {
    query.services = {
      $all: selectedServices,
    };
  }

  console.log("MongoDB Query:", query);

  try {
    const stations = await Station.find(query);
    res.json(stations);
  } catch (err) {
    res.status(500).json({ message: "Server Error", err });
  }
};

module.exports = {
  getStations,
};
