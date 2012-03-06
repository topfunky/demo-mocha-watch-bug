assert = require('assert');
Pie    = require('../lib/pie');

// TEST
describe("Pie", function() {

  it("makes new", function() {
    var pie = new Pie({name:'Apple'});
    assert.equal(pie.name, 'Apple');
  });

});