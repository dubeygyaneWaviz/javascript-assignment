function countTrue(arr){
    let countT = 0;
    let countF = 0;
    for (let i = 0; i< arr.length; i++){
        console.log("counter loop", i);
        if(arr[i] === true){
            countT++;
            console.log("value of countT", countT );

        }else{
            countF++;
        }
    }
    console.log("num of true", countT);
    console.log("num of false", countF);  

}
countTrue([true, true, true, false, false,false , true]);
