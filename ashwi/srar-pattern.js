//  down-trangle-shape
// function printTrianglePattern (size){
//     for(let i= size; i>=1; i--){
//         let row = '';
//         for(let j=1; j<=i; j++){
//             row += '*';
//         }
//         console.log(row);
//     }
// }
// printTrianglePattern (5)


// function printTranglePattern (size){
//     for (let i= 1; i<=size; i++){
//         let row = '';
//         for(let j=1; j<=i; j++){
//             row += '*';
//         } 
//         console.log(row);
//     }
// }
// printTranglePattern(5);

// function printTranglePattern (rows){
//     for (let i= 1; i<=rows; i++){
//         let row = '';
//         for(let j=1; j<=i; j++){
//             row += '* #';
//         } 
//         console.log(row);
//     }
// }
// printTranglePattern(5);

// function printTrianglePattern(rows) {
//     // console.log("row",rows);
//     for (let i = 1; i <= rows; i++) {
//         // console.log("i",i);

//       let pattern = '';
//       for (let j = 1; j <=i; j++) {
//         pattern += '*#';
//       }
//       console.log(pattern);
//     }
//   }
  
//   printTrianglePattern(5);







// Define the number of rows in the triangle
// const numRows = 5;

// Function to create a combined star and hash triangle pattern
// function createCombinedTriangle(numRows) {
//   let pattern = '';
//   for (let row = 1; row <= numRows; row++) {
//     for (let col = 1; col <= row; col++) {
//       if (col % 2 === 0) {
//         pattern += '# ';
//       } else {
//         pattern += '* ';
//       }
//     }
//     pattern += '\n';
//   }
//   return pattern;
// }

// Call the createCombinedTriangle function and output the result
// const trianglePattern = createCombinedTriangle(numRows);
// console.log(trianglePattern);

  

// const numRows = 5;

// function createTraingleShape(numRows){
//     let pattern = '';
//     for (let row = 1; row <= numRows; row++) {
//         for (let col = 1; col <= row; col++) {
//             if (col % 2 === 0) {
//                         pattern += '# ';
//                       }
//                       else {
//                                 pattern += '* ';
//                               }

//         }

//     }
//     document.write("<br />");


// }








