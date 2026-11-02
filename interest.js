function simpleInterest(principle,rate,time){
    let interest=(principle * rate * time)/100;
    let totalAmount=principle + interest;
    console.log("principle:"+principle);
    console.log("Rate:"+rate+"%");
    console.log("Time:"+time+"years");
    console.log("Interest:"+interest);
    console.log("Total Amount:"+totalAmount);
    return interest;
}
simpleInterest(50000, 3, 2); 




