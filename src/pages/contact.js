const contactContent = () => {
  const contactContent = document.createElement("div");
  contactContent.id = "contact-content";

  const info = document.createElement("p");
  info.innerHTML =
    "This is our contact pages where you can communicated with us if you have any questions, comments or concerns. You don't see any contact info here because, sadly, this restaurant doesn't exist.";

  contactContent.appendChild(info);

  return contactContent;
};

export default contactContent;
