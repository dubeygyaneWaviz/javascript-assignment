// // There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

function remainderNum(num1,num2){

    // console.log("remaindernum", num1,num2);

    var remainder = num1%num2;

    // console.log("Remainder",num1%num2);

    var d= parseInt(num1/num2);

    console.log("d",d);

    console.log("rem",remainder);


}
remainderNum(10 ,3);