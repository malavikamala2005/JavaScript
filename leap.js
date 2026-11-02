function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a Leap Year");
    return true;
  } else {
    console.log(year + " is NOT a Leap Year");
    return false;
  }
}


isLeapYear(2024); 
isLeapYear(2023); 
isLeapYear(2000); 
isLeapYear(2028); 