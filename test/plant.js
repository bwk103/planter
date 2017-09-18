var mongoose = require('mongoose');
var Plant = require('../models/plant');

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();


chai.use(chaiHttp);

describe('Plants', ()=> {

  //'/plants':

  describe('/GET plants', () => {
    it('it should get all of the plants', (done) => {
      chai.request(server)
        .get('/plants')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.object.should.be.a('array');
          done();
        })
    })
  });

  //'plants/:id'
  describe('/GET plants/:id', () => {
    var id = '59981419a37ef95e2f542d68'
    it('it should return the correct plant', (done) => {
      chai.request(server)
      .get('/plants/' + id)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.object._id.should.equal(id)
        done()
      })
    })
  })


})
