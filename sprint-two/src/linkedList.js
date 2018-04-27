var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {      
      list.tail = newNode;
      list.head.next = newNode;
    }
  };

  list.removeHead = function() {
    // change head to point to the next node
    var headValue = list.head.value;
    list.head = list.head.next;
    return headValue;
  };

  list.contains = function(target) {
    // if (this.head.next === null) {
    //   return this.head.value === target;
    // } else if (this.next === null) {
    //   return this.value === target;
    // } else {
    //   this.next.contains(target);
    // }
    var result = false;
    function checkNode(node, target) {
      if (node.next === null) {
        result = node.value === target;
        return result;
      } else if (node.value === target) {
        result = true;
      } else {
        checkNode(node.next, target);
      }
    }
    checkNode(this.head, target);
    return result;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 list.addtoTail: O(1);
 list.removeHead: O(1);
 list.contains: O(n);
 */
