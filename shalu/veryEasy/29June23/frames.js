// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
function frames (minutes, fps){
    console.log(" before Frames Minute , fsp", minutes, fps);
    let result = minutes * 60 * fps;
    console.log("after frames minutes , fps", result);
    return result;
}
console.log(frames(10,25));