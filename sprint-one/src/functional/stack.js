var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // create a variable to keep track of each key-value pair in the storage object
  var num = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    // create a new key-value pair in storage object;
    storage[num] = value;
    num++;
  };

  someInstance.pop = function() {
    // delete last property in an object
    // declare variable to hold the item you're about to delete
    if (num === 0) {
      return null;
    } else {
      num--;
      var deleted = storage[num];
      // delete storage[num]
      delete storage[num];
      // return the variable representing the item you just deleted
      return deleted;
    }
  };

  someInstance.size = function() {
    return num;
  };

  return someInstance;
};
