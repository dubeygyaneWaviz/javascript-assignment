// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.
function convert (hours,minutes){
    console.log(" before Hours to minutes ", hours, minutes);
    let totalSeconds = (hours * 3600) + (minutes * 60);
    console.log(" after hours to minutes total seconds ", totalSeconds);
    return totalSeconds;
}
console.log(convert (2,3));