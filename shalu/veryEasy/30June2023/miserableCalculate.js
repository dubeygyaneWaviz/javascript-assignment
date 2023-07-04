// Create a function that will handle simple math expressions. The input is an expression in the form of a string.
function calculate(expression){
   console.log(" before Calculate Expression :: ", expression);
   let result = eval(expression);
   console.log(" before Calculate Expression :: ", result);
   return result;
}
console.log(calculate("49/7*2-15"));