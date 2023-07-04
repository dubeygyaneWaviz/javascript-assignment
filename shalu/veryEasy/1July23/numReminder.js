// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
function numRemainder(num1, num2) {
  console.log(" before Number Remainder:: ", num1, num2);
  if (num1 % num2 === 0) {
    console.log("The remainder is zero.");
  } else {
    console.log("The remainder is not zero.");
  }
}
numRemainder(4, 5);
