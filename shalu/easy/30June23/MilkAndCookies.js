// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.
function MilkAndCookies (date){
    console.log("before :: ", date);
    let result = date.getMonth() === 11 && date.getDate() === 24;
    console.log("Result ", result);
    return result;
}
console.log(MilkAndCookies(new Date(2013,11,24)));