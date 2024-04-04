var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

const OWM_API_KEY = "4810d2c7945fe82541e351ffa914d368";



/*router.get("/weather", (req, res) => {
  res.json({ weather });
});

router.get("/weather/:cityName", (req, res) => {
  const searchedWeather = weather.find(
    e => e.cityName.toLowerCase() === req.params.cityName.toLowerCase()
  );
  if (searchedWeather) {
    res.json({ result: true, weather: searchedWeather });
  } else {
    res.json({ result: false, error: "City not found" });
  }
});

router.delete("/weather/:cityName", (req, res) => {
  const searchedWeather = weather.find(
    e => e.cityName.toLowerCase() === req.params.cityName.toLowerCase()
  );
  if (searchedWeather) {
    weather = weather.filter(
      e => e.cityName.toLowerCase() !== req.params.cityName.toLowerCase()
    );
    res.json({ result: true, weather });
  } else {
    res.json({ result: false, error: "City not found" });
  }
});
*/
module.exports = router;
