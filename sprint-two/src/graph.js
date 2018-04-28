// Instantiate a new graph
var Graph = function() {
  var newGraph = {};
  newGraph.edge = null;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = {
    value: node,
    edges: {}
  };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this[fromNode].edges[toNode] === this[toNode] && this[toNode].edges[fromNode] === this[fromNode];
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].edges[toNode] = this[toNode];
  this[toNode].edges[fromNode] = this[fromNode];

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this[fromNode].edges[toNode];
  delete this[toNode].edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  let graphKeys = Object.keys(this);
  for (let i = 0; i < graphKeys.length; i++) {
    cb(parseInt(graphKeys[i]));
  }
};
var graph = new Graph();