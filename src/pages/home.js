const homeContent = () => {
  const homeContent = document.createElement("div");
  homeContent.id = "home-content";

  const desc = document.createElement("p");
  desc.innerHTML =
    "This is the restaurant for the best ramen anywhere. We have the best noodles, broth, and toppings. Fast and friendly service that will leave you wanting more.";

  homeContent.appendChild(desc);

  return homeContent;
};

export default homeContent;
