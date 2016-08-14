/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  const products = [1];
  let product = 1;
  for (let i = 1; i < nums.length; i++) {
    product *= nums[i - 1];
    products.push(product);
  }
  product = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    product *= nums[i + 1];
    products[i] = product;
  }
  return products;
};

console.log(productExceptSelf([0, 0]));
