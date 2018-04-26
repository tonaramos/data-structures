var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueObj = {
  	num : 0
  };
  _.extend(queueObj, queueMethods);
  return queueObj;
};

var queueMethods = {
  enqueue : function(value) {
    this[this.num] = value;
    this.num++;
  },
  dequeue : function() {
   if (this.num === 0) {
   	return 0;
   } else {
	   var firstItem = this[Object.keys(this)[0]];
	   var firstKey = Object.keys(this)[0];
	   delete this[firstKey];
	   this.num--;
	   return firstItem;
	}
  },
  size : function() {
    return this.num;
  }
};

var queue = Queue();
