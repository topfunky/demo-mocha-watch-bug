// IMPLEMENTATION
function Pie(attributes) {
  for (var key in attributes) {
    this[key] = attributes[key];
  }
  return this;
}

module.exports = Pie;
