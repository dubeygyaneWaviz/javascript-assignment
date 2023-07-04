function oddEven(num){
  console.log(" before Odd Even ::", num);
  let result =  num % 2 === 0 ? "Even" : "Odd"; 
  console.log("after odd even :: ", result);
  return result;
}
oddEven(11);