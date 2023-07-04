// Create a function that takes voltage and current and returns the calculated power.
function power (voltage, current){
    console.log(" before Power:: ", voltage,current);
    let result = voltage * current;
    console.log("After power ::", result);
    return result;
}
power(110, 3);