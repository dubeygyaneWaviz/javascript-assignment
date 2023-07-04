function matchHouse (a){
    console.log("number of house",a);
    
    let houseNum = (a * 6) - (a - 1);
    console.log(houseNum);
    return houseNum;

}
console.log(matchHouse(2));