const menuContent = () => {
  const menuContent = document.createElement("div");

  const menuContainer = document.createElement("div");
  menuContainer.id = "menu-container";

  // Adds each image (10 images) to the menuContainer.
  for (var i = 1; i <= 10; i++) {
    const foodContainer = document.createElement("div");
    foodContainer.classList.add("food-container");

    // Image
    const menuItem = document.createElement("div");
    menuItem.classList.add("food-menu-item");
    menuItem.style.backgroundImage =
      "url('../src/images/menu-images/ramen-" + i + ".jpg')";

    // Name
    const foodName = document.createElement("div");
    foodName.classList = "food-name";
    foodName.innerHTML = "Ramen " + i;

    foodContainer.appendChild(menuItem);
    foodContainer.appendChild(foodName);

    menuContainer.appendChild(foodContainer);
  }

  menuContent.appendChild(menuContainer);

  return menuContent;
};

export default menuContent;
