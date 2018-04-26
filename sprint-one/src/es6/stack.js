class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.num = 0;
  }

  push(value) {
	this.num++;
    this[this.num] = value;  	
  }

  pop() {
	if (this.num === 0) {
	  return null;
	} else {
		var deleted = this[this.num];
		delete this[this.num];
		this.num--;
		return deleted;
	}  	
  }

  size() {
  	return this.num;
  }

}

var stack = new Stack();