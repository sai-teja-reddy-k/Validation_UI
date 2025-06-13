document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirm = document.getElementById("confirm").value.trim();

  let isValid = true;

  // Name validation
  if (name === "") {
    setError("nameError", "Name is required");
    isValid = false;
  } else {
    clearError("nameError");
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    setError("emailError", "Invalid email format");
    isValid = false;
  } else {
    clearError("emailError");
  }

  // Password validation
  if (password.length < 6) {
    setError("passwordError", "Minimum 6 characters");
    isValid = false;
  } else {
    clearError("passwordError");
  }

  // Confirm password
  if (confirm !== password || confirm === "") {
    setError("confirmError", "Passwords do not match");
    isValid = false;
  } else {
    clearError("confirmError");
  }

  if (isValid) {
alert("✅ Registration Successful!");
window.location.href = "../Experiment-01_EaseBuy/index.html";
    this.reset();
  }
});


function setError(id, msg) {
  document.getElementById(id).textContent = msg;
}

function clearError(id) {
  document.getElementById(id).textContent = "";
}
