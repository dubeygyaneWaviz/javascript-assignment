// Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

function profitableGamble (prob, prize, pay){
    // console.log("profitable", prob,prize,pay);
    return prob*prize > pay;

}
console .log (profitableGamble (5,5 ,9));