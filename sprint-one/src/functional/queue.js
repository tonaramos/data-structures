var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var num = 0;
  // add a variable to keep track of the oldest element each time enqueue is called
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[num] = value;
    num++;
    // increment the oldest variable counter
  };

  someInstance.dequeue = function() {
    if (num === 0) {
      return null;
    } else {
      num--;
      // delete the oldest element key-value pair with the lowest oldest variable
      var deleted = storage[Object.keys(storage)[0]];
      delete storage[Object.keys(storage)[0]];
      return deleted;
    }
  };

  someInstance.size = function() {
    return _.size(storage);
  };

  return someInstance;
};
