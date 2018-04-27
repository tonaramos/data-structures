var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here	
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods)
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	// create new node
	var newNode = Tree(value);
	this.children.push(newNode);
	// push to children array
};

treeMethods.contains = function(target) {
	var output = false;

	function checkChildren(node, target) {
		for (var i = 0; i < node.length; i++) {
			if (node[i].value === target) {
				output = true;
			}
		checkChildren(node[i].children, target);
		}
	}

	if (this.value === target) {
		output = true;
	}
	checkChildren(this.children, target);
	return output;
};

var tree = Tree();

/*
 * Complexity: What is the time complexity of the above functions?
 treeMethods.addChild: O(1);
 treeMthods.contains: O(n);
 */
