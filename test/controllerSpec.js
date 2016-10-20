//remove status does remove child node_modules
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

// describe('sendObject', function(){
//   it('should return an object', function(){
//     spyOn(obj, 'removeStatus').andReturn('removed')
//     expect('removeStatus').toReturn('removed');
//   })
// })

//mockuser data
describe('sendObject', function(){
  it("should make XHR request", function() {
      var xhr = {
        open: jasmine.createSpy('open')
      };
      XMLHttpRequest = jasmine.createSpy('XMLHttpRequest');
      XMLHttpRequest.open(function () {
          return xhr;
      });
      expect(xhr.open).toHaveBeenCalled();
  });

})
