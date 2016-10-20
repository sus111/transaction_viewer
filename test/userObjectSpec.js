var userRequest = require('../public/javascripts/userObject');
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var moment = require('moment');
var userAgent = require('express-useragent');



// describe('userObject', function(){
//   it('should return an object', function(){
//     assert.typeOf(userObject, 'object');
//   })
// })

describe('userRequest', function(){
  it('should return an object', function(){
    // var positon = {latitude: 50, longitude: 50};
    assert.isObject(userData.userObject({latitude: 50, longitude: 50}), 'user details is an object');

  })
})


describe('randomise', function(){
  it('should return a random number', function(){
    var randomNumber = userRequest.randomise([0, 1, 2]);
    assert.isAtMost(randomNumber, 2, 'random number is less than or equal to 2');
  })
})

// user object has got correct parameters - has got all values presents and returns a json object
//
// test randomise returns random number, eg betweetn 0 - 6
