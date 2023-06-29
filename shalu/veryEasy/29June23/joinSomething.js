// Write a function that returns the string "something" joined with a space " " and the given argument a.
function joinSomething (a){
    console.log(" before JoinSomething :: ", a);
    let string = "Something"  + a + " " +"EveryThing";
    console.log(string );
    return string;
}
console.log(joinSomething(" is better then nothing"));