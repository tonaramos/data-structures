var Stack = function() { // constructor function
  var stackObj = {
    num : 0
  };
  _.extend(stackObj, stackMethods);
  return stackObj; // an instance of the Stack class of objects
};

var stackMethods = {
  // methods go in here
  push: function(value) {
    // should create a new key-value pair in the storage object
    this.num++;
    this[this.num] = value;
    // increment num;
  },
  pop: function() {
    if (this.num === 0) {
      return null;
    } else {
      var deleted = this[this.num];
      delete this[this.num];
      this.num--;
      return deleted;
    }
  },
  size: function() {
    return this.num;
  }
};

var stack = Stack(); // creates new object stackObj;