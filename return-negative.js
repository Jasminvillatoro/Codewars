// Description
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Function

function makeNegative(num) {
  return -Math.abs(num);
}

// Test cases
makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12
