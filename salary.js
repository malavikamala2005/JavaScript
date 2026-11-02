function salaryCalculator(basic,hra,bonus,pf,tax){
    let gross=basic+hra+bonus;
    let deductions=pf+tax;
    let netSalary=gross-deductions;
    console.log("Gross Salary:"+gross);
    console.log("Total Deductions:"+deductions);
    console.log("Net Salary(TakeHome):"+netSalary);
    return netSalary;

}
salaryCalculator(30000,10000,5000,2000,1000);