// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
function lessThanZero(num){
    console.log("LessThanZero  Num ::", num);
    if(num <= 0){
        console.log("Result", "true");
    }else{
        console.log( "Result","false");
    }
}
lessThanZero(5);