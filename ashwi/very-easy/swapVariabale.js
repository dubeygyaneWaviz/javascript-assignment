// Mubashir wants to swap two given numbers!
// It is not returning the right values. Can you help him fix it?

function swapVariable(a, b) {

    // console.log("a", a , "b", b);
    
    [a, b] = [b, a]
    
    console.log("Result ", [a,b]);
    
}
swapVariable(10, 20);