function leapYear(year){
    if(year % 100 === 0 ){
        if(year % 400 === 0){
            console.log("This Year is Leap Yeaar" , year);
        }else{
            console.log("this Year is not Leap Year" , year);
        }
    }else{
        if(year % 4 === 0){
            console.log("This Year is Leap Year", year);
        }else{
            console.log("This Year is not Leap Year", year);
        }
    }
    }
    leapYear(2008);