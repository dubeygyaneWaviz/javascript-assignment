//JavaScript program to print prime numbers from 1 to 100 using for loop
let isPrime = true;

console.log("Prime numbers from 1 to 100 are: ");

for (let i = 1; i <= 10; i++) {

  console.log(" i  ", i);
  for (let j = 2; j < i - 1; j++) {
    console.log(" j  ", j);
    if (i % j == 0) {
      console.log("Not a prime number")
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
  isPrime = true;
}
