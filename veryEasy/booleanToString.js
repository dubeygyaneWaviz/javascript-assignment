// Create a function that takes a boolean variable flag and returns it as a string.
function booleanToString(flag){
// return `${flag}`
return flag.toString();
}
const checkResult = booleanToString(22);
console.log("Result ::>", typeof(checkResult), checkResult);
// console.log(booleanToString(22));