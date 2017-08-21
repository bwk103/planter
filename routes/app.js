var express = require('express');
var router = express.Router();
var Plant = require('../models/plant');
var User = require('../models/user');
var passport = require('passport');


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
    image: req.body.image,
    type: req.body.type,
    height: req.body.height,
    width: req.body.width,
    colour: req.body.colour
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

router.get('/plants/:id', (req, res) => {
  var id = req.params.id;
  Plant.findById(id, (error, plant) => {
    if (error) {
      return res.status(501).json({
        title: 'An error occured',
        error: error
      });
    } else {
      res.status(200).json({
        message: 'Plant successfully found',
        object: plant
      });
    }
  })
})

router.put('/plants/:id', (req, res) => {
  var id = req.params.id;
  var updatedPlant = new Plant({
    _id: id,
    name: req.body.name,
    image: req.body.image
  });
  Plant.findByIdAndUpdate(id, {$set: updatedPlant}, (error, plant) => {
    if (error) {
      return res.status(501).json({
        title: 'An error occured',
        error: error
      });
    } else {
      res.status(200).json({
        message: 'Plant successfully changed',
        object: plant
      });
    }
  })
});

router.delete('/plants/:id', (req, res) => {
  var id = req.params.id;
  Plant.findByIdAndRemove(id, (error, plant) => {
    if (error) {
      return res.status(501).json({
        title: 'An error occured',
        error: error
      })
    }
    res.status(200).json({
      message: 'Plant successfully deleted',
      object: plant
    });
  });
})

router.post('/users/register', (req, res) => {
  var newUser = new User({
    username: req.body.username,
    email: req.body.email,
  });
  User.register(newUser, req.body.password, (error, user) => {
    if (error) {
      return res.status(501).json({
        title: 'An error occured',
        error: error
      });
    }
    passport.authenticate('local')(req, res, ()=> {
      res.status(200).json({
        message: "Success, Welcome to Planter",
        object: user
      });
    })
  })
});

router.post('/users/login', passport.authenticate('local'), (req, res) => {
  console.log(req.user);
});

module.exports = router;
