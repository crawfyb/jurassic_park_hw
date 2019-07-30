const Park = function(name, price) {
  this.name = name;
  this.price = price;
  this.dinosaurCollection = [];
}
Park.prototype.numberOfDinosaurs = function () {
  return this.dinosaurCollection.length;
};

Park.prototype.addDinosaur = function (dinosaur) {
  return this.dinosaurCollection.push(dinosaur);
};

Park.prototype.removeDinosaurBySpecies = function (species) {
  const indexOfDinosaur = this.dinosaurCollection.indexOf(species);
  this.dinosaurCollection.splice(indexOfDinosaur, 1)
};
module.exports = Park;
