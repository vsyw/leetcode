const isertionSort = function (a) {
  const arr = a;
  for (let i = 0; i < arr.length; i++) {
    const tmp = arr[i];
    let j = 0;
    for (j = i; j > 0 && arr[j - 1] > tmp; j--) arr[j] = arr[j - 1];
    arr[j] = tmp;
  }
  return arr;
};

console.log(isertionSort([1,1,1,0]));
