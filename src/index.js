import "./style.css";

function homePage() {
  // Creates header element.
  const header = document.createElement("div");
  header.id = "header";

  //   Creates container element for menu items.
  const menuItemsContainer = document.createElement("div");
  menuItemsContainer.id = "menu-items";

  // Creates menu items elements
  const menuItemHome = document.createElement("div");
  const menuItemMenu = document.createElement("div");
  const menuItemContact = document.createElement("div");

  menuItemHome.classList.add("menu-item");
  menuItemMenu.classList.add("menu-item");
  menuItemContact.classList.add("menu-item");

  // Adds text to menu items.
  menuItemHome.innerHTML = "Home";
  menuItemMenu.innerHTML = "Menu";
  menuItemContact.innerHTML = "Contact";

  // Adds menu items to container
  menuItemsContainer.appendChild(menuItemHome);
  menuItemsContainer.appendChild(menuItemMenu);
  menuItemsContainer.appendChild(menuItemContact);

  // Adds menu container to header.
  header.appendChild(menuItemsContainer);

  return header;
}

const content = document.getElementById("content");
content.appendChild(homePage());

// Adds the main-content element to page.
const mainContent = document.createElement("div");
mainContent.id = "main-content";
content.appendChild(mainContent);
