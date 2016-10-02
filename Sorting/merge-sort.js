/**
 * @param {array} arr
 */
function merge(left, right, arr) {
  let l = 0, r = 0, k = 0;
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      arr[k++] = left[l++];
    } else {
      arr[k++] = right[r++];
    }
  }
  while (l < left.length) arr[k++] = left[l++];
  while (r < right.length) arr[k++] = right[r++];
  // console.log(arr);
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
// merge([1, 4], [2, 6], []);
mergeSort([7, 2, 5, 4, 6]);
