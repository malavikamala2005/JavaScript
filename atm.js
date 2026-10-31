function atmWithdraw(balance, withdrawAmount) {
  
  
  console.log("Your Balance: Rs. " + balance);
  console.log("Withdraw Request: Rs. " + withdrawAmount);

  if (withdrawAmount % 100 !== 0) {
    console.log("FAILED: Amount must be multiple of 100");
  } 
  else if (withdrawAmount > balance) {
    console.log("FAILED: Insufficient Balance");
  } 
  else if ((balance - withdrawAmount) < 500) {
    console.log("FAILED: Must keep minimum Rs. 500 in account");
  } 
  else {
    balance = balance - withdrawAmount;
    console.log("SUCCESS: Please collect cash");
    console.log("Remaining Balance: Rs. " + balance);
  }
}


atmWithdraw(5000, 2000); 
atmWithdraw(5000, 1250); 