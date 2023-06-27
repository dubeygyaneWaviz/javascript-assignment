// Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

    function makesTen(a, b) {
        // console.log("makesten", a,b);
        if (a === 10 || b === 10 || a + b === 10) {
            return true;
        } else {
            return false;
        }
    }
    
console.log(makesTen (1,11));