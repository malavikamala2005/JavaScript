function getDiscount(amount) {
  let discount = 0;

  if (amount >= 5000) {
    discount = 20; // 20% for 5000+
  } else if (amount >= 1000) {
    discount = 10; // 10% for 1000+
  } else {
    discount = 0; // no discount
  }

  let discountAmount = (amount * discount) / 100;
  let finalAmount = amount - discountAmount;

  console.log("Purchase: " + amount);
  console.log("Discount: " + discount + "%");
  console.log("You Save: " + discountAmount);
  console.log("Pay: " + finalAmount);
}


getDiscount(6000);