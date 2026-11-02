function checkVotingEligibility(age) {
  if (age >= 18) {
    console.log("You are eligible to vote!");
    return true;
  } else {
    console.log(`Not eligible. You need to wait ${18 - age} more years.`);
    return false;
  }
}


checkVotingEligibility(20); 
