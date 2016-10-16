/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */

// testing

// function UndirectedGraphNode(label) {
//   this.label = label;
//   this.neighbors = [];   // Array of UndirectedGraphNode
// }
// const g2 = new UndirectedGraphNode(2);
// g2.neighbors = [g2];
// const g1 = new UndirectedGraphNode(1);
// g1.neighbors = [g2];
// const g0 = new UndirectedGraphNode(0);
// g0.neighbors = [g1, g2];

const doClone = function (graph, map) {
  if (graph === null) return null;

  if (map.hasOwnProperty(graph.label)) {
    return map[graph.label];
  }
  const g = new UndirectedGraphNode(graph.label);
  map[g.label] = g;

  for (let i = 0; i < graph.neighbors.length; i++) {
    g.neighbors.push(doClone(graph.neighbors[i], map));
  }

  return g;
};

const cloneGraph = function (graph) {
  const map = {}; // use map to record node and avoid infinite loop (cycle)
  return doClone(graph, map);
};



console.log(cloneGraph(g0));
