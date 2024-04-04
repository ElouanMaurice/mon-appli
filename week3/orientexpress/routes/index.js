var express = require('express');
var router = express.Router();

let trips = [{ departure: 'Paris', arrival: 'Lyon' }, { departure: 'Lyon', arrival: 'Marseille' }];

// POST /trips - Sample result: 

router.post('/trips', (req, res) => {
    trips.push({departure: req.body.departure, arrival: req.body.arrival});
    res.json({ allTrips: trips });
   });

// "allTrips": [
//   {
//     "departure": "Paris",
//     "arrival": "Lyon"
//   },
//   {
//     "departure": "Lyon",
//     "arrival": "Marseille"
//   },
//   {
//     "departure": "Grenoble",
//     "arrival": "Strasbourg"
//   }
// ]


// GET /trips - Sample result:

router.get('/trips', (req, res) => {
    res.json({ allTrips: trips}) ;
});

// "allTrips": [

//   {
//     "departure": "Paris",
//     "arrival": "Lyon"
//   },
//   {
//     "departure": "Lyon",
//     "arrival": "Marseille"
//   },
//   {
//     "departure": "Grenoble",
//     "arrival": "Strasbourg"
//   }
// ]

// GET /lastTrip - Sample result:


router.get('/lastTrip', (req, res) => {
    res.json({ lastTrip: trips[2]}) ;
});
// "lastTrip": {
//   "departure": "Grenoble",
//   "arrival": "Strasbourg"
// }

// DELETE /trips - Sample result:
router.delete('/trips', (req, res) => {
    trips.splice(req.params.position, trips.length);
    res.json({ allTrips: trips });
   });


// "allTrips": []

module.exports = router;