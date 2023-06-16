import "./styles/style.css";
import "./styles/home.css";
import "./styles/contact.css";

import navbar from "./components/navbar";
import mainContent from "./components/mainContent";

// Pages.
import homeContent from "./pages/home";
import menuContent from "./pages/menu";
import contactContent from "./pages/contact";

// Element everything will be attached to.
const content = document.getElementById("content");

// Adding navbar to page.
content.appendChild(navbar());

// Adds the main-content element to page.
content.appendChild(mainContent());

// Getting tabs.
const tabs = document.getElementsByClassName("menu-item");
const homeTab = tabs[0];
const menuTab = tabs[1];
const contactTab = tabs[2];

// Adding event listener to each tab.
homeTab.addEventListener("click", displayHome);
menuTab.addEventListener("click", displayMenu);
contactTab.addEventListener("click", displayContact);

function displayHome() {
  // Main content of current page.
  const mainContentElement = document.getElementById("main-content");
  mainContentElement.innerHTML = "";
  mainContentElement.appendChild(homeContent());
}

function displayMenu() {
  // Main content of current page.
  const mainContentElement = document.getElementById("main-content");
  mainContentElement.innerHTML = "";
  mainContentElement.appendChild(menuContent());
}

function displayContact() {
  // Main content of current page.
  const mainContentElement = document.getElementById("main-content");
  mainContentElement.innerHTML = "";
  mainContentElement.appendChild(contactContent());
}

// Puts default home page content first.
const mainContentElement = document.getElementById("main-content");
mainContentElement.appendChild(homeContent());
