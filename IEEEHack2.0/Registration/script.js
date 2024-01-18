function validateForm() {
    var fullName = document.forms["registrationForm"]["fullName"].value;
    var username = document.forms["registrationForm"]["username"].value;
    var password = document.forms["registrationForm"]["password"].value;
    var confirmPassword = document.forms["registrationForm"]["confirmPassword"].value;
    var email = document.forms["registrationForm"]["email"].value;
    var phone = document.forms["registrationForm"]["phone"].value;
    var dob = document.forms["registrationForm"]["dob"].value;
    var gender = document.forms["registrationForm"]["gender"].value;
  
    var namePattern = /^[a-zA-Z\s\-']{1,50}$/;
    var passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,16}$/;
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var phonePattern = /^\d{10}$/;
  
    if (!namePattern.test(fullName)) {
      alert("Please enter a valid Full Name.");
      return false;
    }
    if (username.length < 1) {
      alert("Please enter a username.");
      return false;
    }
    if (!passwordPattern.test(password)) {
      alert("Password must contain at least one symbol, one capital letter, one number, and be 8-16 characters long.");
      return false;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please confirm your password.");
      return false;
    }
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    if (!phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }
    if (dob === "") {
      alert("Please enter your Date of Birth.");
      return false;
    }
    if (gender === "") {
        alert("Please select a gender.");
        return false;
      }
    
      return true;
  } 