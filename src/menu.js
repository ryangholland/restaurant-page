import menuPic from "./images/menu.jpg";

const renderMenu = () => {
  const contentDiv = document.getElementById("content");
  const menuImg = new Image();
  const menuHeading = document.createElement("h1");
  const menuList = document.createElement("ul");
  const menuItems = ["Pizza", "Cheeseburger", "Sushi", "Cheesecake"];

  menuImg.src = menuPic;
  menuImg.alt = "Our famous menu";
  menuHeading.textContent = "Menu";
  menuItems.forEach((item) => {
    const itemli = document.createElement("li");
    itemli.textContent = item;
    menuList.appendChild(itemli);
  });

  contentDiv.appendChild(menuImg);
  contentDiv.appendChild(menuHeading);
  contentDiv.appendChild(menuList);
};

export { renderMenu };
