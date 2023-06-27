// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
function minMax(numbers) {
  // Check if the array is empty
  if (numbers.length === 0) {
    return [];
  }
  console.log("  :: ", numbers.length);

  // Initialize variables for minimum and maximum numbers
  let min = numbers[0];
  let max = numbers[0];
  console.log("Min ", min);
  console.log("Max ", max);

  // Iterate over the array to find the minimum and maximum numbers
  for (let i = 1; i < numbers.length; i++) {
    console.log("Min in loop ", min);
    console.log("Max in loop ", max);
    if (numbers[i] < min) {
      min = numbers[i];
    }
    if (numbers[i] > max) {
      max = numbers[i];
    }

  }

  // Return the minimum and maximum numbers as an array
  return [min, max];
}

// Example usage:
console.log(minMax([20, 3, 4, 5]));
