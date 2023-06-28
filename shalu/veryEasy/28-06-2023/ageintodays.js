// Create a function that takes the age in years and returns the age in days.
function agetoday(age){
    console.log("Age ::", age);
    let days = 365;
    console.log("Days ::", days);
    let result = days * age;
    console.log("after days multiply by age :: ", result);
    return result;
}
let ageindays = agetoday(25);
console.log(ageindays);