var express = require('express');
var router = express.Router();
var Plant = require('../models/plant');

router.get('/', (req, res) => {
  res.send('This will be the home page');
})

router.get('/plants', (req, res, next) => {
  Plant.find({}, (error, plants) => {
    if (error) {
      return res.sattus(501).json({
        title: 'An error occured',
        error: error
      })
    } else {
      res.status(200).json({
        message: 'Plants successfully found',
        object: plants
      });
    }
  });
});

router.post('/plants', (req, res, next) => {
  var newPlant = new Plant({
    name: req.body.name,
    image: req.body.image
  });
  Plant.create(newPlant, (error, plant) => {
    if (error) {
      return res.status(501).json({
        title: 'An error occured',
        error: error
      });
    } else {
      res.status(200).json({
        message: 'Plant successfully added to database',
        object: plant
      });
    }
  })
});

module.exports = router;
