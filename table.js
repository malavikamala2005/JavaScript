function multiplicationTable(num, limit = 10) {
  for (let i = 1; i <= limit; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}


multiplicationTable(5);


multiplicationTable(2,10);