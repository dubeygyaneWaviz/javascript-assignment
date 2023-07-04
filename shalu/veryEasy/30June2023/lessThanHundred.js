// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThanHundred(num1, num2) {
  console.log(" before LessThanHundred Two Num  ::", num1, num2);
  let res = num1 + num2;
  console.log(" after Result :: ", res);
  if (res <= 100) {
    console.log("after add num1 & num2 :: ", "true");
  } else {
    console.log("after add num1 & num2 :: ","false");
  }
}
lessThanHundred(80, 10);
