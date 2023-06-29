// Create a function that returns the given argument, but by using an arrow function.

const arrowFunction = (arg) => {
    console.log(" before Arg :: ", arg);
    let result = arg;
    console.log("after Arg Result ::", result);
    return result;
}
console.log(arrowFunction("5"));
