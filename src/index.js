import { renderHeader } from "./header";
import { renderHomepage } from "./homepage";
import { renderMenu } from "./menu";
import { renderContact } from "./contact";
import { renderFooter } from "./footer";

const clearContent = () => {
  const contentDiv = document.getElementById("content");
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }
};

renderHeader();
renderHomepage();
renderFooter();

const linkBtns = document.querySelectorAll("button");
linkBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    clearContent();
    if (e.target.textContent === "Home") renderHomepage();
    if (e.target.textContent === "Menu") renderMenu();
    if (e.target.textContent === "Contact") renderContact();
  });
});
