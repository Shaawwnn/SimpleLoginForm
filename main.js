const sampleUsers = [
  {
    username: "shaaaawny",
    password: "ve8rv28",
    name: "Shawn",
  },
  {
    username: "gwynethgalan",
    password: "stewie07",
    name: "Gail",
  },
  {
    username: "smellynowie",
    password: "unknown143",
    name: "Stewie",
  },
];

// LOGIN FORM FUNCTIONALITIES

const signUpLayout = document.querySelector(".signup-container");
const showSignUp = document.getElementById("showSignUp");
const hideSignUp = document.getElementById("hideSignUp");
const login = document.getElementById("login");
const logUser = document.getElementById("logUser");
const logPass = document.getElementById("logPass");
const errorUser = document.querySelector("#error1");
const errorPass = document.querySelector("#error2");
const register = document.getElementById("register");
const regUser = document.getElementById("regUser");
const regPass = document.getElementById("regPass");
const firstName = document.getElementById("firstName");

showSignUp.addEventListener("click", e => {
  if (!signUpLayout.classList.contains("show-overlay")) {
    signUpLayout.classList.add("show-overlay");
    e.target.classList.add("enlarge-text");
    hideSignUp.classList.add("minimize-text");
  } else {
    signUpLayout.classList.remove("show-overlay");
    e.target.classList.remove("enlarge-text");
    hideSignUp.classList.remove("minimize-text");
  }
});

hideSignUp.addEventListener("click", e => {
  if (e.target.classList.contains("minimize-text")) {
    signUpLayout.classList.remove("show-overlay");
    showSignUp.classList.remove("enlarge-text");
    e.target.classList.remove("minimize-text");
  }
});

// LOGIN AUTHENTICATION

login.addEventListener("submit", e => {
  e.preventDefault();

  checkLogin();
});

function checkLogin(x) {
  x = sampleUsers;
  for (i = 0; i < sampleUsers.length; i++) {
    if (x[i].username === logUser.value && x[i].password === logPass.value) {
      logUser.value = "";
      logPass.value = "";
      alert(`Welcome ${x[i].name}`);
      logUser.focus();
      return;
    }
    if (x[i].username === logUser.value && x[i].password !== logPass.value) {
      logPass.value = "";
      errorPass.style.opacity = "1";
      setTimeout(() => {
        errorPass.style.opacity = "0";
      }, 3000);
      console.log(false);
      return;
    }
  }
  logUser.value = "";
  logPass.value = "";
  errorUser.style.opacity = "1";
  setTimeout(() => {
    errorUser.style.opacity = "0";
  }, 3000);
  logUser.focus();
  return;
}

//          REGISTRATION

register.addEventListener("submit", e => {
  e.preventDefault();
  for (i = 0; i < sampleUsers.length; i++) {
    if (sampleUsers[i].username === regUser.value) {
      return;
    }
  }
  sampleUsers.push({
    username: regUser.value,
    password: regPass.value,
    name: firstName.value,
  });
  regPass.value = "";
  regUser.value = "";
  alert(`Congratulations ${firstName.value}! You are now registered!`);
  firstName.value = "";
  signUpLayout.classList.remove("show-overlay");
  showSignUp.classList.remove("enlarge-text");
  e.target.classList.remove("minimize-text");
});
