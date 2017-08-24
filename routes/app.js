var express = require('express');
var router = express.Router();
var Plant = require('../models/plant');
var User = require('../models/user');
var passport = require('passport');
var passportJWT = require('passport-jwt')
var jwt = require('jsonwebtoken');
var config = require('../config.js')
var bcrypt = require('bcrypt');


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

router.post('/user/register', (req, res) => {
  var newUser = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    location: req.body.location,
    garden: req.body.garden
  });
  newUser.save((err, user) => {
    if (err) {
      return res.status(501).json({
        title: 'An error occured',
        error: err
      });
    }
    res.status(200).json({
      message: "Success. Welcome to Planter, " + user.username,
      object: user
    });
  });
});

router.post('/user/login', function(req, res) {

  if (req.body.username && req.body.password) {
    var username = req.body.username;
    var password = req.body.password;
  }

  User.findOne({'username': username}, (err, user) => {

    if (err) {
      return res.status(401).json({
        title: 'An error occured',
        error: err
      });
    }

    if (!user) {
      return res.status(401).json({
        title: 'No such user found',
      });
    }

    user.comparePassword(password, function(err, isMatch) {
      if (isMatch) {
        var payload = {id: user._id};
        var token = jwt.sign(payload, config.secret, {expiresIn: '1h'});

        res.status(200).json({
          title: 'User logged in successfully',
          token: token
        });
      } else {
        return res.status(401).json({
          title: 'Authentication error',
          message: 'You were not logged in: Please try again.'
        });
      }
    });
  });
});

router.get('/user/:id/garden', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.status(200).json({
    title: 'Garden route',
    message: 'This is the protected garden route'
  });
})

router.get('/user/:id', (req, res) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) {
      return res.status(401).json({
        title: 'An error occured',
        error: 'No user found'
      })
    }
    res.status(200).json({
      title: 'User retrieved',
      object: user
    });
  });
});

router.get("/secret", passport.authenticate('jwt', { session: false }), function(req, res){
  res.json("Success! You can not see this without a valid token");
});


module.exports = router;
