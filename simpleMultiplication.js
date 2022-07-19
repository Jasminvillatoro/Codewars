/* Description 
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

// SOLUTION
function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}

//   TEST CASES
console.log(simpleMultiplication(1));
console.log(simpleMultiplication(2));
