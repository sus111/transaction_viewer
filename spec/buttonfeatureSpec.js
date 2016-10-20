const Browser = require('zombie');
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

describe('index page', function() {
  beforeEach(function() {
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

  beforeEach(function(done) {
    this.browser.visit('/', done);
  });

  it('should show a submit request button', function(){
    assert.ok(this.browser.success);
    this.browser.assert.element('.submit-button');
  });

  it('should show a response box and text when submit clicked', function(){
    var browser = this.browser;
    assert.ok(this.browser.success);
    this.browser.pressButton('.submit-button');
    this.browser.wait().then( function() {
      browser.assert.style('div.response-box', 'display', 'block');
      browser.assert.element('.status');
    }, 5000);
  });

  it('should clear the response box when the background is clicked', function(){
    this.browser.pressButton('.submit-button');
    this.browser.click('.background');
    this.browser.assert.style('.response-box', 'display', 'none');
  })
});
