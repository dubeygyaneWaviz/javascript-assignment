// Create a function that takes the age in years and returns the age in days.

function covertAge(age){
    console.log("age", age);
    let days=365;
    console.log("days", days);
    let result = days * age;
    console.log("after days multply by age", result);
    return result;
}
console.log(covertAge(25));