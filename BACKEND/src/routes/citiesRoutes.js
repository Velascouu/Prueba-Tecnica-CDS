const express = require("express");
const router = express.Router();
const citiesController = require("../controllers/citiesController");

router
    .get('/allCities', citiesController.getAllCities)
    .get('/city/:cityId', citiesController.getOneCity);

module.exports = router;