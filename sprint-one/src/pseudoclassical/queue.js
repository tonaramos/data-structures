var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  this.num = 0;
};

Queue.prototype.enqueue = function(value) {
	this[this.num] = value;
    this.num++;
};

Queue.prototype.dequeue = function() {
	if (this.num === 0) {
   	return 0;
   } else {
	   var firstItem = this[Object.keys(this)[0]];
	   var firstKey = Object.keys(this)[0];
	   delete this[firstKey];
	   this.num--;
	   return firstItem;
	}
};

Queue.prototype.size = function() {
	return this.num;
};

var queue = new Queue();
