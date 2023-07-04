// Write a function redundant that takes in a string str and returns a function that returns str.
function redundant(str) {
    console.log("before first func ::", str);
    return function () {
      console.log("After result ::", str);
      return str;
    };
  }
  const f1 = redundant("apple");
  console.log("Result ::", f1("apple"));