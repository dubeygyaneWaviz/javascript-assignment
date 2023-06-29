// Write a function that takes an integer minutes and converts it to seconds.
function convert(minutes){
    console.log(" before Minutes to sec  ",minutes);
    let minutestosec = minutes*60;
    console.log("after minutes to sec ", minutestosec);
    return minutestosec;
}
console.log(convert(3));

// let second = convert(2);
// console.log(second);