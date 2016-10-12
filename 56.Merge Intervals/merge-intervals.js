/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
function Interval(start, end) {
  this.start = start;
  this.end = end;
}

const merge = function (intervals) {
  if (intervals.length <= 0) return [];
  const res = [];
  intervals.sort((a, b) => a.start - b.start);
  // return intervals;
  let cur = new Interval(intervals[0].start, intervals[0].end);

  intervals.push(new Interval(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER));

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start <= cur.end) {
      cur.end = Math.max(intervals[i].end, cur.end);
    } else {
      res.push(cur);
      cur = new Interval(intervals[i].start, intervals[i].end);
    }
  }
  return res;
};

console.log(merge([[1, 4], [2, 3]]));
