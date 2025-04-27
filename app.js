//localStorage.clear();

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

var validUsers = JSON.parse(localStorage.getItem("validUsers")) || {
  "abdo": "1234",
  "soly": "5678"
};

function validateLogin() {

  event.preventDefault(); 

  var enteredUsername = document.getElementById("username").value;
  var enteredPassword = document.getElementById("password").value;

  if (validUsers[enteredUsername] && validUsers[enteredUsername] === enteredPassword) {
      Swal.fire({
          title: "Login Successful!",
          text: "Welcome, " + enteredUsername + "!",
          icon: "success",
          confirmButtonText: "OK"
      }).then(() => {
          window.location.href = "home.html";
      });

      return true;
  } else {
      Swal.fire({
          title: "Error!",
          text: "Invalid username or password.",
          icon: "error",
          confirmButtonText: "Try Again"
      });
      return false;
  }
}

function handleSignUp() {
  event.preventDefault(); 

  var username = document.getElementById("username_signup").value;
  var password = document.getElementById("password_signup").value;

  if (!username || !password) {
      Swal.fire({
          title: "Error!",
          text: "Username and password cannot be empty.",
          icon: "error",
          confirmButtonText: "Try Again"
      });
      return false;
  }

  if (validUsers.hasOwnProperty(username)) {
      Swal.fire({
          title: "Error!",
          text: "Username already exists! Choose a different one.",
          icon: "error",
          confirmButtonText: "Try Again"
      });
      return false;
  }

  validUsers[username] = password;
  localStorage.setItem("validUsers", JSON.stringify(validUsers));

  Swal.fire({
      title: "Sign Up Successful!",
      text: "Welcome, " + username + "!",
      icon: "success",
      confirmButtonText: "Go to Home"
  }).then(() => {
      window.location.href = "home.html";
  });

  return true;
}
