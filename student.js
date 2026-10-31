function checkScholarship(marks, income, attendance) {
  
  

  if (marks >= 80 && income <= 50000 && attendance >= 75) {
    console.log("ELIGIBLE for Scholarship");
  } else {
    console.log("NOT ELIGIBLE for Scholarship");
    
    
    if (marks < 80) 
        console.log("Reason: Marks less than 80%");
    if (income > 50000) 
        console.log("Reason: Family income is too high");
    if (attendance < 75) 
        console.log("Reason: Attendance less than 75%");
  }
}


checkScholarship(85, 40000, 80);
checkScholarship(70, 40000, 90);


