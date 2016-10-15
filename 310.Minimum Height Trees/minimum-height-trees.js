/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findMinHeightTrees = function (n, edges) {
  const graph = new Array(n);
  for (let i = 0; i < n; i++) graph[i] = [];
  
  // construct the graph
  edges.forEach((vertices) => {
    graph[vertices[0]].push(vertices[1]);
    graph[vertices[1]].push(vertices[0]);
  });

  let min = Number.MAX_SAFE_INTEGER;
  let res = [];
  // pick i = 0 to n - 1 respectively as root and calculate
  // the height of the tree.
  for (let i = 0; i < n; i++) {
    const q = [[i, 0]]; // [node, level]
    const used = new Array(n).fill(false);
    let height = 0;

    while (q.length) {
      const node = q.shift();
      used[node[0]] = true;
      // update height to the maximum level
      height = height < node[1] ? node[1] : height;
      // add the adjencent vertices and level back to the queue
      graph[node[0]].forEach((item) => {
        if (!used[item]) {
          q.push([item, node[1] + 1]);
          used[item] = true;
        }
      });
    }
    if (height < min) {
      res = [i];
      min = height;
    } else if (height === min) {
      res.push(i);
    }
  }

  return res;
};

console.log(findMinHeightTrees(6, [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]));
