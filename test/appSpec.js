var supertest = require("supertest");
var should = require("should");
var server = supertest.agent("http://localhost:3000");

describe("GET '/' request",function(){

  it("should display index page",function(done){
    server.get("/")
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      done();
    });
  });

  it("should send useragent info in request", function(done) {
    server.get("/")
    .end(function(req, res){
      res.body.should.be.an.instanceOf(Object);
      done();
    });
  });

});

describe("POST '/transaction' request",function(){

  it("should display index page",function(done){
    server.post("/transaction")
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      done();
    });
  });

  it("should send useragent info in request", function(done) {
    server.post("/transaction")
    .end(function(req, res){
      res.body.should.be.an.instanceOf(Object);
      done();
    });
  });

});
