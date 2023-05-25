const citiesService = require("../services/citiesService");

const getAllCities = (req, res) => {
    const allCities = citiesService.getAllCities();
    res.send(allCities);
    return allCities;
};

const getOneCity = (req, res) => {
    const oneCity = citiesService.getOneCity(req.params.cityId);
    res.send(oneCity);
    return oneCity;
};

module.exports = {
    getAllCities,
    getOneCity
};