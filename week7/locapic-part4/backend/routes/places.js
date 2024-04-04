var express = require('express');
var router = express.Router();

const Place = require('../models/places');

router.post('/places', (req, res) => {
    const newPlace = new Place({
        nickname: req.body.nickname,
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
      });
    
      newPlace.save().then(() => {
        res.json({ result: true });
      }).catch(err => {
        console.error(err);
        res.json({ result: false, error: 'Error saving place to database' });
      });
})

  
router.get('/places/:nickname', (req, res) => {
    Place.find({nickname: req.params.nickname})
    .then(nick =>{
        res.json({ result: true, places: nick })
        
    })
} )

router.delete('/places', (req, res) => {
    const { nickname, name } = req.body;
    Place.deleteOne({ nickname, name })
      .then(place => {
          res.json({ result: true, places: place });
        
      })
})





module.exports = router;
