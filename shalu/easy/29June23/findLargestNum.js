// Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.
function whichIsLarger(f, g) {
  console.log("before check largestNumber ", f, g);
  const resultF = f();
  const resultG = g();
  console.log("function f :: ", resultF);
  console.log("function g :: ", resultG);

  if (resultF > resultG) {
    let result = "f";
    console.log(" after check result ::", result);
    return result;
  } else if (resultG > resultF) {
    let result = "g";
    console.log(" after check result ::", result);
    return result;
  } else {
    return "neither";
  }
}
whichIsLarger(() => 5, () => 2);