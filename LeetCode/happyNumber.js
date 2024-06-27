// 202. Happy Number

// Input: n = 19
// Output: true
// Explanation:
// 1(^2) + 9(^2) = 82
// 8(^2) + 2(^2) = 68
// 6(^2) + 8(^2) = 100
// 1(^2) + 0(^2) + 02 = 1

// Example 2:

// Input: n = 2
// Output: false

var isHappy = function (n) {
  let attempts = {};
  while (n !== 1) {
    n = sumOfSquares(n);
    if (attempts[n]) {
      return false;
    }
    attempts[n] = true;
  }
  return true;
};

function sumOfSquares(num) {
  let str = num.toString();
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    sum += Math.pow(Number(char), 2);
  }
  return sum;
}
