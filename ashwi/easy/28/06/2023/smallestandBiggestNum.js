// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax (numbers){
    if(numbers.lengthm === 0){
        return [];
    }

    // initialize variables for min and max num
    let min = numbers[0];
    console.log("min", min);
    let max = numbers[0];
    console.log("max", max);


    for (let i = 1; i < numbers.length; i++){
        console.log("min in loop", min);
        console.log("max in loop", max);
        if(numbers[i] < min){
            min = numbers[i];
        }
        if(numbers[i] > max){
            max = numbers[i];
        }
    }
    // return the min and max num as an array
    return [min, max];
}
console.log(minMax ([10,20,30]));