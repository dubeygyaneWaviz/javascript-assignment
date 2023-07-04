
function evenOdd(num){
    console.log("before evenodd", num);
    for(var a= 1; a<=num; a++){
        console.log("a", a);
        if(a%2 === 0){
            console.log("even no is "   +a );
            
        }else{
            console.log("odd no is  " +a);
        }
     
    }                                                                             
   
}
evenOdd(20);