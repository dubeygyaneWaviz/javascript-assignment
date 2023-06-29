// Fix the code in the Code tab so the function returns true if and only if x is equal to 7.
function isEqual(x){
    console.log("before is equal value of x ", x);
    let result = x=== 7;
    console.log("after equal value of x ", result);
    return  result;
}
console.log(isEqual(7));