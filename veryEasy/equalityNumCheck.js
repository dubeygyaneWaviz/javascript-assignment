function equalityCheck (a,b){
    if ( a === b){
        console.log("the type and value are equal",true);
    }else if (typeof(a) != typeof(b) && a == b) {
        console.log("the value are equal but type is diffrent",false);  
    }else{
        console.log("the type and value are not equal",false);
    }
    // console.log(typeof(a) + "Type of a");
}
equalityCheck(1,"000000001");

