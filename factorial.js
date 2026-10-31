function factorial(n) {
  if (n === 0) return 1;
  
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  console.log(n + "! = " + fact);
}

factorial(5);
factorial(0);