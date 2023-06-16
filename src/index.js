import "./style.css";

function component() {
  const element = document.createElement("div");

  element.innerHTML = "Test print display";

  return element;
}

const content = document.getElementById("content");
content.appendChild(component());
