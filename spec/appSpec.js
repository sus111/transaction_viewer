var request = require('request');
var base_url = "http://localhost:3000/"

describe("Express Server", function() {

  describe("GET /", function() {
    it("returns status code 200", function() {
      request.get('/', function(req, res) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("useragent info is sent in request", function() {
      request.get('/', function(req, res) {
        expect(req.useragent).toBe(true);
        done();
      });
    });

  });

  describe("POST /", function() {
    it("returns status code 200", function() {
      request.get('/transaction', function(req, res) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("sends a json object", function() {
      request.get(base_url, function(req, res) {
        var object = {'status': 'status'};
        expect(res.body).to.equal(object);
        done();
      });
    });
  });

});
