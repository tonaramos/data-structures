var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var keyValue = [k, v];
  //if not undefined 
  let button = true;  
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
    this._storage.get(index).push(keyValue); 
  }
  if (this._storage.get(index) !== undefined) {
    for (let i = 0; i < this._storage.get(index).length; i++) {
    // loop over tuple and check if key exist
    //    if key exist -> assign new value to it
      
      if ( this._storage.get(index)[i][0] === k) {
        //this._storage.set(index,  v);
        this._storage.get(index)[i][1] = v;       
        button = false;
      }
    }
    if ( button === true ) {
      this._storage.get(index).push(keyValue);
    } 
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var positionalArray = this._storage.get(index);
  // for each item in the positional array
  for (var i = 0; i < this._storage.get(index).length; i++) {
    // if the first item in the first array of positionalArray is equal to k
    if (positionalArray[i][0] === k) {
    // return value
      return positionalArray[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //this._storage.set(index, undefined);  
  console.log(this._storage.get(index)[0], this._storage.get(index)[1]);  
  for (var i = 0; i < this._storage.get(index).length; i++) {
   
    if (this._storage.get(index)[i][0] === k) {
    
      this._storage.get(index).splice(i, 1);
    
    }
  }
//does not return anything
};

/*
 * Complexity: What is the time complexity of the above functions?
All of the above functions can run in constant time O(1);
 */
