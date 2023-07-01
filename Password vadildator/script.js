function validateForm() {
  
  const pass1 = document.getElementById("password1").value;
  const pass2 = document.getElementById("password2").value;

  if (pass1 != pass2) {
    alert("Password didn't match. Password validation unsuccessful");
    
  } else {
    alert("Password matched.Password Validation Successful");
    
  }
  
}
