function compoundInterest(principal,rate,time,n){
    n=n||1;

    let amount=principal*Math.pow((1+rate/(100*n)),n*time);
    let interest=amount-principal;
    console.log("Principal:"+principal);
    console.log("Amount:"+amount.toFixed(2));
    console.log("CompundInterest:"+interest.toFixed(2));
    return interest;
}
compoundInterest(10000,5,2,1);