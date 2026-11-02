function validateLogin(username, password) {
  if (username.trim() === "") {
    console.log("Username is required");
    return false;
  }
  if (password.length < 6) {
    console.log("Password must be at least 6 characters");
    return false;
  }
  console.log("Validation Success - Can proceed to login");
  return true;
}


validateLogin("rahul", "120356");