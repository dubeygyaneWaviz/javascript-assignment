// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

function convert (hours,minutes){
    console.log("hrs", hours,minutes);
    let totalSeconds = (hours * 3600) + (minutes * 60);
    console.log("total second",totalSeconds);
    return totalSeconds;

}
console.log(convert (1,3));