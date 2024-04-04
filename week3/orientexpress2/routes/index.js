require('../models/connection');
const Trip = require('../models/trips');

var express = require('express');
var router = express.Router();



router.post('/trips', (req, res) => {
 let newTrip = new Trip ({
  departure: req.body.departure,
  arrival: req.body.arrival,
 })
newTrip.save().then(() => {
  Trip.find().then( trips => {
    res.json({ allTrips: trips });
  })
})

});

router.get('/trips', (req, res) => {
  Trip.find().then(trips => {
    res.json({ allTrips: trips })
  });
});

router.get('/lastTrip', (req, res) => {
  Trip.find().then(trips => {
  res.json({ lastTrip: trips[trips.length - 1] });
});
})

router.delete('/trips', (req, res) => {
  Trip.deleteMany().then(trips => {
  res.json({ allTrips: trips });
});
});
module.exports = router;
