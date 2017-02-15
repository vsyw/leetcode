/* eslint-disable no-param-reassign */
const quickSort = function (list, left, right) {
  if (right <= left) return;
  const pivotIndex = left;
  const pivot = list[left];
  // swap pivot to the end of array
  [list[pivotIndex], list[right]] = [list[right], list[pivotIndex]];
  
  let swapIndex = left;
  for (let i = left; i < right; i++) {
    if (list[i] <= pivot) {
      [list[i], list[swapIndex]] = [list[swapIndex], list[i]];
      swapIndex++;
    }
  }
  // switch the element of swapIndex with pivot
  [list[right], list[swapIndex]] = [list[swapIndex], list[right]];
  quickSort(list, left, swapIndex - 1);
  quickSort(list, swapIndex + 1, right);
};

const sort = function (list) {
  quickSort(list, 0, list.length - 1);
  return list;
};

console.log(sort([3, 4, 5, 2, 1]));
