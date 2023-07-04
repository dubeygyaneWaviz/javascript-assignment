// JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.
function andOperator (a,b){
    console.log(" before using operator ", a,b);
    let result = a && b;
    console.log("after using operator", result);
    return result;
}
andOperator(false,true);