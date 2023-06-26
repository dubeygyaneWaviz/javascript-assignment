// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThanHundred(num1, num2) {
  let res = num1 + num2;
  console.log("Result  ", res);
  if (res <= 100) {
    console.log("true");
  } else {
    console.log("false");
  }
}
lessThanHundred(80, 10);
