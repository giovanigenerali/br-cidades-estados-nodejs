var supertest = require("supertest");
var should = require("should");
var app = require('../app');
var server = supertest.agent(app);

describe('br-cidades-estados-nodejs', function() {

  describe('get all "estados"', function() {
    it('it should return status code 200', function(done) {
      server
      .get('/estados')
      .expect(200)
      .end(function(err, res) {
        res.status.should.equal(200);
        done();
      });
    });
  });

  describe('get a specific "estado"', function() {
    it('it should return status code 200', function(done) {
      server
      .get('/estados/SP')
      .expect(200)
      .end(function(err, res) {
        res.status.should.equal(200);
        done();
      });
    });
  });

  describe('get an "estado" not found"', function() {
    it('it should return status code 404', function(done) {
      server
      .get('/estados/X')
      .expect(404)
      .end(function(err, res) {
        res.status.should.equal(404);
        done();
      });
    });
  });

  describe('post an new "estado""', function() {
    it('it should return status code 403', function(done) {
      server
      .post('/estados')
      .send({estado: "X"})
      .expect(403)
      .end(function(err, res) {
        res.status.should.equal(403);
        done();
      });
    });
  });

  describe('get all "cidades"', function() {
    it('it should return status code 200', function(done) {
      server
      .get('/cidades')
      .expect(200)
      .end(function(err, res) {
        res.status.should.equal(200);
        done();
      });
    });
  });

  describe('post an new "cidade""', function() {
    it('it should return status code 403', function(done) {
      server
      .post('/estados/SP/cidades')
      .send({cidade: "X", estadoId: "SP"})
      .expect(403)
      .end(function(err, res) {
        res.status.should.equal(403);
        done();
      });
    });
  });

  describe('get all "capitais"', function() {
    it('it should return status code 200', function(done) {
      server
      .get('/capitais')
      .expect(200)
      .end(function(err, res) {
        res.status.should.equal(200);
        done();
      });
    });
  });

});