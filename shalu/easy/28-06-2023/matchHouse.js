// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.
function matchHouse(a){
    console.log("number of house ", a);
    let matchs = (a * 6) - (a - 1);
    console.log("number of matchs ", matchs);
    return matchs;
}
console.log(matchHouse(5));