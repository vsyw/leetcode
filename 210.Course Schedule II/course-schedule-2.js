/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = function (numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0);
  const graph = [];
  const ans = [];
  for (let i = 0; i < numCourses; i++) graph.push([]);
  prerequisites.forEach((pair) => {
    if (graph[pair[1]].indexOf(pair[0]) !== -1) return;
    graph[pair[1]].push(pair[0]);
    inDegree[pair[1]]++;
  });

  const q = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) q.push(i);
  }
  while (q.length > 0) {
    const cur = q.shift();
    ans.push(cur);
    graph.forEach((item, index) => {
      if (item.length > 0 && item.indexOf(cur) !== -1) {
        --inDegree[index];
        if (inDegree[index] === 0) q.push(index);
      }
    });
  }
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] > 0) return [];
  }
  return ans.reverse();
};

console.log('sol: ', findOrder(4, [[1, 0], [0, 2], [3, 2]]));

