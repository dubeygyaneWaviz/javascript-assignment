// Write a function that takes an integer minutes and converts it to seconds.

function convertMinut(minut){
    console.log("convertMinut",minut);
    let minutestosec = minut*60;
    console.log("after min to sec",minutestosec);
    return minutestosec;
}
console.log(convertMinut(3));