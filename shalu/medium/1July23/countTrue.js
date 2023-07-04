// Create a function which returns the number of true values there are in an array.
function countTrue(arr) {
  console.log("before Count Array", arr);
  let count = 0;
  let falseCount =0;
  console.log("count ini ::", count);
  for (let i = 0; i < arr.length; i++) {
    console.log("counter loop ", i);
    if (arr[i] === true) {
      count++;
      console.log("Current value of count", count);
    }else{
      falseCount++;
    }
  }
  console.log("number of true", count);
  console.log("number of false", falseCount);
  return count;
}
countTrue([true, false, false, true, false]);