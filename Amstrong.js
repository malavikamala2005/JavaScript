function isArmstrong(num) {
  let temp = num;
  let sum = 0;

  while (temp > 0) {
    let digit = temp % 10;
    sum = sum + (digit * digit * digit); 
    temp = Math.floor(temp / 10); 
  }

  if (sum === num) {
    console.log(num + " is Armstrong");
  } else {
    console.log(num + " is NOT Armstrong");
  }
}

isArmstrong(153); 

isArmstrong(123); 