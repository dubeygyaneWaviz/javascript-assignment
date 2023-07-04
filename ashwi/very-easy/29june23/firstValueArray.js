// Create a function that takes an array containing only numbers and return the first element.

function firstNum(arr){
    console.log("firstnum", arr);
    let firstNum = arr[0];
    console.log("firstNum", firstNum);
    return firstNum;

}
console.log(firstNum([1,2,3]));