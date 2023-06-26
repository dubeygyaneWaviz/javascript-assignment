// Create a function that will handle simple math expressions. The input is an expression in the form of a string.
function calculate(expression){
   expression.replace('');
   return eval(expression);
}
console.log(calculate("49/7*2-3"));