var express = require('express');
var router = express.Router();

const City = require('../models/cities')


router.post("/", (req, res) => {
    City.findOne({cityName: req.body.cityName}).then(data => {
       
        if (data !== null){
            res.json({ result: false, error: "City already saved" });
        } else {  
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.cityName}&appid=cec1e75b3dc8c5ddf19be3b86686e76c&units=metric`)
                .then(response => response.json())
                .then(apiData => {
                    const newCity = new City ({
                        cityName: apiData.name,
                        main: apiData.weather[0].main,
                        description: apiData.weather[0].description,
                        tempMin: apiData.main.temp_min,
                        tempMax: apiData.main.temp_max,
                    });

                    newCity.save().then(() =>{
                        res.json({ result: true, weather: newCity });

                    });
                })
        }
    })
});


router.get("/", (req, res) => {
    City.find().then(data => {
        res.json({weather: data})
    })
})


  router.get("/:cityName", (req, res) => {
        City.findOne({cityName: req.params.cityName}).then(data => {
            if (data) {
            res.json({ result: true, weather: data });
            } else {
            res.json({ result: false, error: "City not found" });
            }
        })

  });


  router.delete("/:cityName", (req, res) => {
    City.findOne({cityName: req.params.cityName}).then (data => { 
    
        if (data) {
        res.json({ result: true, weather: data });
        } else {
        res.json({ result: false, error: "City not found" });
        return data
        }
    });
});
  
  module.exports = router;