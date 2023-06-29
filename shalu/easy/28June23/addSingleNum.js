function singleNum(num) {
  console.log("Single Number::", num);
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    console.log("for current value of i " +i+ " sum is", sum);
    // sum += i;
    sum=sum+i;
    console.log("for current value of i " +i+ " sum is", sum);
  }
  return sum;
}
console.log(singleNum(4));