const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park('Jurassic Park', 50);

  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
});

  it('should have a ticket price', function() {
    const actual = park.price;
    assert.strictEqual(actual, 50)

  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.numberOfDinosaurs();
    assert.deepStrictEqual(actual, 0);

  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur('T-rex');
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur('T-rex');
    park.addDinosaur('Triceratops');
    park.removeDinosaurBySpecies('T-rex')
    const expected = ([ 'Triceratops' ])
    const actual = park.dinosaurCollection
    assert.deepStrictEqual(actual, expected)
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
