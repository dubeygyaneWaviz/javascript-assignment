// // Mubashir wants to swap two given numbers!
// It is not returning the right values. Can you help him fix it?
function swappingVariable(a,b){
    console.log(" before swapping a ", a );
    console.log("before swapping b ", b);
    [a,b] = [b,a] // Array Distructuring
    console.log("after swapping:: a", a);
    console.log("after swapping :: b", b);
}
swappingVariable("shalu","ashwi");