const formLinkBar = document.querySelector(".form_link-bar");
const inputLinkBar = formLinkBar.querySelector(".link_input");
const inputBorder = "input_border";

function handleMouseIn() {
  inputLinkBar.classList.add(inputBorder);
}

function handleMouseOut() {
  inputLinkBar.classList.remove(inputBorder);
}

function init() {
  inputLinkBar.addEventListener("mouseover", handleMouseIn);
  inputLinkBar.addEventListener("mouseout", handleMouseOut);
}

init();
