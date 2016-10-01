/**
 * @param {array} arr
 */
function merge(left, right, arr) {
  let l = 0, r = 0;
  while (l < left.length && r < right.length) {
    
  }
}

function mergeSort(arr) {
  if (arr.length < 2) return;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);
  mergeSort(left);
  mergeSort(right);
  merge(left, right, arr);
  console.log(arr);
}

mergeSort([1, 2, 3, 4, 5, 6]);
