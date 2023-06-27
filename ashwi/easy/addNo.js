function addNumber(num){
    let sum =0;

    for (let i=1; i<=num; i++){
       //sum+=i; We can use this statement also
       sum=sum+i;
       console.log("for current value of i " +i+ " sum is ", sum);

    }
    return sum;

}
console.log(addNumber(4));
