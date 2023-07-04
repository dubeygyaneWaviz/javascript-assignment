// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function nextNumber(number){
    console.log(" before NextNumber ::", number);
    let result = number + 1;
    console.log("after nextNumber :: ", result);
    return result;
}
nextNumber(-3);