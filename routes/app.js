var express = require('express');
var router = express.Router();
var Plant = require('../models/plant');
var User = require('../models/user');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var config = require('../config.js')


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
  console.log(req.body);
  var newUser = new User({
    username: req.body.username,
    email: req.body.email,
    location: req.body.location,
    garden: req.body.garden
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

router.post('/user/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {

    if (err) {
      return res.status(501).json({
        title: 'An error occured',
        error: err
      });
    }

    if (!user) {
      return res.status(401).json({
        title: 'An error occured',
        error:  'User not found'
      });
    }

    var token = jwt.sign({ user_id: user._id}, config.secret, {expiresIn: '1h'});

    res.status(200).json({
      title: 'Welcome back ' + user.username,
      user: user,
      token: token
    })
  })(req, res, next);
});

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
})

router.get('/user/:id/garden', (req, res) => {
  res.status(200).json({
    title: "Congratulations, you've found the garden!"
  });
});


module.exports = router;
