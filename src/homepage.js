import restaurantPic from "./images/restaurant.jpg";

const renderHomepage = () => {
  const contentDiv = document.getElementById("content");
  const homeImg = new Image();
  const homeHeading = document.createElement("h1");
  const homeP = document.createElement("p");

  homeImg.src = restaurantPic;
  homeImg.alt = "Inside the restaurant";
  homeHeading.textContent = "Welcome to Ryan's Restaurant!";
  homeP.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quo ullam ipsa. Inventore eaque provident officiis suscipit dignissimos cupiditate incidunt a nulla id. Nostrum, quis.";

  contentDiv.appendChild(homeImg);
  contentDiv.appendChild(homeHeading);
  contentDiv.appendChild(homeP);
};

export { renderHomepage };
