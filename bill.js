function electricityBill(units) {
  let rate = 0;

  if (units <= 100) {
    rate = 2; 
  } else if (units <= 200) {
    rate = 4;
  } else {
    rate = 6; 
  }

  
  let bill = 0;
  if (units <= 100) {
    bill = units * 2;
  } else if (units <= 200) {
    bill = (100 * 2) + (units - 100) * 4;
  } else {
    bill = (100 * 2) + (100 * 4) + (units - 200) * 6;
  }

  console.log("Units Used: " + units);
  console.log("Total Bill: Rs. " + bill);
}

electricityBill(150); 
electricityBill(250); 