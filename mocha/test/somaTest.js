var sum = require('../src/soma.js');
var expect = require('chai').expect;

// begin a test suite of one or more tests
describe('#sum()', function() {

    // add a test hook
    beforeEach(function() {
      // ...some logic before each test is run
    })
    
    // test a functionality
    it('should add numbers', function() {
      // add an assertion
      expect(sum([1, 2, 3, 4, 5])).to.equal(15);
    })
    
    // ...some more tests
    
  })