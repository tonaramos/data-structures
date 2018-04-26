class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.num = 0;
  }

  enqueue(value) {
    this[this.num] = value;
    this.num++;
  }

  dequeue() {
   if (this.num === 0) {
   	return 0;
   } else {
	   var firstItem = this[Object.keys(this)[0]];
	   var firstKey = Object.keys(this)[0];
	   delete this[firstKey];
	   this.num--;
	   return firstItem;
	}
  }

  size() {
    return this.num;
  }
}

var queue = new Queue();