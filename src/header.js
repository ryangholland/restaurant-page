const renderHeader = () => {
  const headerDiv = document.getElementById("header");
  const headerTitle = document.createElement("h2");
  const navBarDiv = document.createElement("div");
  const homeLink = document.createElement("div");
  const menuLink = document.createElement("div");
  const contactLink = document.createElement("div");

  headerTitle.textContent = "Ryan's Restaurant";
  homeLink.textContent = "Home";
  menuLink.textContent = "Menu";
  contactLink.textContent = "Contact";

  headerDiv.appendChild(headerTitle);
  navBarDiv.appendChild(homeLink);
  navBarDiv.appendChild(menuLink);
  navBarDiv.appendChild(contactLink);
  headerDiv.appendChild(navBarDiv);
};

export { renderHeader };
