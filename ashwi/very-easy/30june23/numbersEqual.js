// Create a function that returns true when num1 is equal to num2; otherwise return false.

function numEqual(num1,num2){

    console.log("before number", num1,num2);
    let result = num1 === num2;
    console.log("after compare both the number result", result);
    return result;
   
}
console.log(numEqual(10,10));