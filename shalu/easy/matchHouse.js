// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.
function matchHouse(a){
    // console.log("Match House::", a);
    let houseNum = (a * 6) - (a - 1);
    console.log(houseNum);
}
matchHouse(5);