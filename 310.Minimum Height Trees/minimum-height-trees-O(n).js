/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findMinHeightTrees = function (n, edges) {
  if (n === 1) return [0];
  const graph = new Array(n);
  for (let i = 0; i < n; i++) graph[i] = [];
  
  // construct the graph
  edges.forEach((vertices) => {
    graph[vertices[0]].push(vertices[1]);
    graph[vertices[1]].push(vertices[0]);
  });

  let leaves = [];
  for (let i = 0; i < n; i++) {
    if (graph[i].length === 1) leaves.push([i, graph[i][0]]);
  }

  while (n > 2) {
    n = n - leaves.length;
    const newLeaves = [];
    leaves.forEach((item) => {
      const idx = graph[item[1]].indexOf(item[0]); // item['vertex', 'adjcentVertex']
      graph[item[1]].splice(idx, 1);
      if (graph[item[1]].length === 1) {
        newLeaves.push([item[1], graph[item[1]][0]]);
      }
    });
    leaves = newLeaves;
  }
  const res = [];
  for (let i = 0; i < leaves.length; i++) {
    res.push(leaves[i][0]);
  }
  return res;
};

console.log(findMinHeightTrees(6, [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]));
