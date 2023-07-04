// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThanHundred (num1,num2){
    console.log("before less than hundred", num1,num2);
    let res = num1+num2;
    console.log("after less than hunder",res);
    if(res <= 100){
                  
        console.log("result", "true");
    }else{
        console.log("result", "false");

    }


}
lessThanHundred(77,77);
