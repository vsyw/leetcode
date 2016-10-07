/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
 // reference: http://fisherlei.blogspot.tw/2013/12/leetcode-max-points-on-line-solution.html
/**
 * @param {Point[]} points
 * @return {number}
 */
const maxPoints = function (points) {
  let res = 0;
  for (let i = 0; i < points.length; i++) {
    // init the table for the future result checking
    const countTable = { 'init': 0 };
    // init duplicate to 1 in order to include the current point
    let duplicate = 1;
    for (let j = i + 1; j < points.length; j++) {
      if (points[i].x === points[j].x && points[i].y === points[j].y) {
        duplicate++;
        continue;
      }
      // special key 'horiz' to indicate which is a point lies in a horizontal line
      const key = (points[i].x === points[j].x) ? 'horiz' :
        (points[i].y - points[j].y) / (points[i].x - points[j].x);
      
      countTable.hasOwnProperty(key) ? countTable[key]++ : countTable[key] = 1;
    }
    // update the local maximum for every interation
    for (const obj in countTable) {
      if (countTable[obj] + duplicate > res) res = countTable[obj] + duplicate;
    }
  }
  return res;
};

