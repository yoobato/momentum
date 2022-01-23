const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

const showGreeting = (username) => {
  const greetingH1 = document.querySelector("#greeting");
  greetingH1.innerText = `Hello, ${username}!`;
  greetingH1.classList.remove(HIDDEN_CLASSNAME);
};

const handleLogin = (event) => {
  event.preventDefault();

  const usernameInput = document.querySelector("#usernameInput");
  const username = usernameInput.value;

  localStorage.setItem(USERNAME_KEY, username);
  showGreeting(username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  
  usernameInput.value = "";
};

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername) {
  showGreeting(savedUsername);
} else {
  const loginForm = document.querySelector("#loginForm");
  loginForm.addEventListener("submit", handleLogin);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
}
