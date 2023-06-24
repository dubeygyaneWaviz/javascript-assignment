function singleNum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    // sum += i;
    sum=sum+i;
  }
  return sum;
}
console.log(singleNum(13));