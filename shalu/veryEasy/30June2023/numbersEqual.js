// Create a function that returns true when num1 is equal to num2; otherwise return false.
function numEqual(num1,num2){
    console.log(" before Number Equal ::", num1, num2);
    let result = num1 === num2;
    console.log("after number equal :: ", result);
    return result;
}
console.log(numEqual(10,5));