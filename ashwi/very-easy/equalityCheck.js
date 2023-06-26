function equalityCheck (a,b){
    if (a === b){
        console.log("the type and value are equal",true);
       
    }else if(typeof (a) != typeof (b) && a == b)
        console.log("the value are equal but type is different",false);
    else{
        console.log("the type and value are not equal",false);

    }


}
equalityCheck(1,"1");