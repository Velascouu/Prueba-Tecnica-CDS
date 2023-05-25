const fetch = require("isomorphic-fetch");



const getAllCities = () => { return;};

const getOneCity = (cityId) => { 
    
    const APIKEY = "5b4a5fb7fff1a8f5a3c0cd68dc4e9a5b";
    const url = 'https://api.openweathermap.org/data/2.5/weather?id='+cityId+'&appid='+APIKEY;
    fetch(url)
        .then(response => {
            if (response.ok) {
                console.log(response.json());
                return response.json();
            } else {
            throw new Error('Error en la solicitud: ' + response.statusText);
            }
        })
        .then(data => {
            // Aquí puedes manejar la respuesta de la API
            console.log(data);
            return data;
        })
        .catch(error => {
            // Aquí puedes manejar cualquier error ocurrido durante la petición
            //console.error(error);
            return error;
        });

};

module.exports = {
    getAllCities,
    getOneCity
};