// referrence http://bangbingsyb.blogspot.tw/2014/11/leetcode-permutations-i-ii.html


const permute = function (nums) {
  if (nums.length === 0) return [];
  const res = [[nums[0]]];
  for (let i = 1; i < nums.length; i++) {
    let tmp = res[i - 1];
    res.splice(i - 1, 1);
    console.log(tmp);
    for (let j = 0; j <= res.length; j++) {
      res.push(tmp.splice(j, 0, nums[i]));
      console.log(res);
    }
  }
  return res;
}

console.log(permute([1,2,3]));