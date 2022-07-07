/* Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

  */

// SOLUTION

function squareSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + Math.pow(arr[i], 2);
  }
  return sum;
}

squareSum([1, 2]);
// output 5
squareSum([0, 3, 4, 5]);
// output 50
