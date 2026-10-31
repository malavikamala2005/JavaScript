function calculateBonus(salary, years) {
  
  let rate = years >= 5 ? 0.10 : 0.05;//ternary operator
  
  let bonus = salary * rate;
  return bonus;
}


console.log(calculateBonus(50000, 6)); 
console.log(calculateBonus(40000, 2));