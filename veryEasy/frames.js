// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
function frames (minutes, fps){
    return minutes * 60 * fps;
}
console.log(frames(10,25));