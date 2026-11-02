function calculateAge(dob){
    let birthDate=new Date(dob);
    let today=new Date();
    let age=today.getFullYear()-birthDate.getFullYear();
    let monthDiff=today.getMonth()-birthDate.getMonth();
    if(monthDiff<0||(monthDiff===0&&today.getDate()<birthDate.getDate())){
        age--;
    }
    console.log("Age:"+age+"years");
    return age;
}
calculateAge("2005-12-21");