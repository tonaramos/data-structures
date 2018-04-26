var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.num = 0;
  return obj;
};

var stackMethods = {
	push : function(value) {
	    this.num++;
        this[this.num] = value;
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
	size : function() {
		return this.num;
	}
};

var stack = Stack();


