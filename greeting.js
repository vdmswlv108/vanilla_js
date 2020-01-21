const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings"),
  nameAsk = document.querySelector(".greeting_name_ask"),
  toDoForm2 = document.querySelector(".js-toDoForm");

const userLS = "currentUser",
  showingCN = "showing";
deleteCN = "delete";

function saveName(text) {
  localStorage.setItem(userLS, text);
}

function handleSubmit() {
  event.preventDefault();
  nameAsk.classList.add(deleteCN);
  toDoForm2.classList.remove(deleteCN);
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(showingCN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(showingCN);
  greeting.classList.add(showingCN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(userLS);
  if (currentUser === null) {
    askForName();
    toDoForm2.classList.add(deleteCN);
  } else {
    paintGreeting(currentUser);
    nameAsk.classList.add(deleteCN);
  }
}

function init() {
  loadName();
}
init();
