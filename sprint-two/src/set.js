var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = []; 
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  (this.storage).push(item);
};

setPrototype.contains = function(item) {
  for (let i = 0; i < (this.storage).length; i++) {
    if (this.storage[i] === item) {
      return true;
    }          
  }
  return false;
};

setPrototype.remove = function(item) {
  (this.storage).splice((this.storage).indexOf(item), 1);
};