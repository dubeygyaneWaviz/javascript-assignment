
function leftShiftPower(a,b){
   let secondPaira = 2;
    for (let i = 1; i < b; i++) {
        secondPaira = secondPaira * i;
        console.log(secondPaira, "ec")
        return secondPaira;
    }
    return a * secondPaira;
}
console.log(leftShiftPower(12, 4));
console.log(leftShiftPower(46, 6));

// not completed