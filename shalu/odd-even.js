// var num = 31;
// if(num%2==0){
//     console.log(num + "is an even no")
// }else{
//     console.log(num + "is an odd no")
// }

//even number

// for(var a =1; a<=100; a++){
//     if(a %2 ==0){
//         console.log(a);
//     }
// }

//odd number
// for(var a =1; a<=100; a++){
//     console.log("current value ", a);
//     if(a %2!==0){
//         console.log("odd numbers ", a);
//     }
// }


// function printSquarePattern(size) {
//     for (let i = 0; i < size; i++) {
//       let row = '';
//       for (let j = 0; j < size; j++) {
//         row += '* ';
//       }
//       console.log(row);
//     }
//   }
  
//   printSquarePattern(5);

function printRectangle(width, height) {
  for (let i = 0; i < height; i++) {
    let row = '';
    for (let j = 0; j < width; j++) {
      if (i === 0 || i === height - 1 || j === 0 || j === width - 1) {
        row += '* ';
      } else {
        row += '# ';
      }
    }
    console.log(row);
  }
}

printRectangle(10, 10);