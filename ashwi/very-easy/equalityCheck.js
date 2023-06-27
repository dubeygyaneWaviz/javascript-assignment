// In this challenge, you must verify the equality of two different values given the parameters a and b.

// Both the value and type of the parameters need to be equal. The possible types of the given parameters are:

// Numbers
// Strings
// Booleans (false or true)
// Special values: undefined, null and NaN
// What have you learned so far that will permit you to do two different checks (value and type) with a single statement?

// Implement a function that returns true if the parameters are equal, and false if they are not.


function equalityCheck (a,b){
    // console.log("equality", a,b);
    if (a === b){
        console.log("the type and value are equal",true);
       
    }else if(typeof (a) != typeof (b) && a == b)
        console.log("the value are equal but type is different",false);
    else{
        console.log("the type and value are not equal",false);

    }


}
equalityCheck(1,"1");