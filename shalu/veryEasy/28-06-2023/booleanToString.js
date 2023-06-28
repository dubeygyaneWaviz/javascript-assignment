// Create a function that takes a boolean variable flag and returns it as a string.
function booleanToString(flag){
    console.log(" before boolean to string :: >",typeof(flag), flag);
// return `${flag}`
    let result = flag.toString();
    console.log("after boolean to string :: ",typeof(result), result);
    return result;
}
const checkResult = booleanToString(22);
console.log("Result ::>", typeof(checkResult), checkResult);
// console.log(booleanToString(22));
