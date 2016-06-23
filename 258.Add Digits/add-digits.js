/**
 * @param {number} num
 * @return {number}
 * Let’s take a number like 12345. That’s the same as 1 × 10,000 + 2 × 1,000 + 3 × 100 + 4 × 10 + 5.

Now, 10 is 9 + 1; 100 is 99 + 1, and so on. So let’s rewrite:

12,345 = 1 × (9,999 + 1) + 2 × (999 + 1) + 3 × (99 + 1) + 4 × (9 + 1) + 5.

Multiply out the brackets and rearrange a bit; you get:

12,345 = (1 × 9,999 + 2 × 999 + 3 × 99 + 4 × 9) + (1 + 2 + 3 + 4 + 5).

That first bracket – I don’t know what it is and I don’t really care, except that it’s a multiple of 9 – each of the numbers added if in there is clearly a multiple of 9. The second bracket is… just the sum of the digits, which is 15 – or 6 (modulo 9). If you do a quick check, 12,345 is indeed the same as 6 (modulo 9).
 */
var addDigits = function(num) {
    if (num === 0) return 0;
    else {
        return num % 9 === 0 ? 9 : num % 9;
    }
};