var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var array = [];
  var size = array.length;

  // Implement the methods below
  someInstance.push = function(value) {
    array.push(value);
    return array.length;
  };

  someInstance.pop = function() {
    // does not error when removing from empty stack
    return array.pop();
  };

  someInstance.size = function() {
    return array.length;
  };

  return someInstance;
};
