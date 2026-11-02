function isPalindrome(num) {
  let str = num.toString();
  let reversed = str.split("").reverse().join("");
  
  if (str === reversed) {
    console.log(num + " is Palindrome");
    return true;
  } else {
    console.log(num + " is NOT Palindrome");
    return false;
  }
}


isPalindrome(121);  
isPalindrome(123);  