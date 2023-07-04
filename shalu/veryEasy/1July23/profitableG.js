// Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.
function profitableGamble(prob, prize, pay){
    console.log(" before Profitable Gamble ::", prob, prize, pay);
    if(prob * prize > pay){
        console.log("result ", true);
    }else{
        console.log("result ", false);

    }
    // let result = prob * prize > pay;
    // console.log("after profitable gamble ::", result);
    // return result;  
}
profitableGamble(3,3,9);