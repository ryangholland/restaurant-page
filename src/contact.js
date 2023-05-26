import contactPic from './images/contact.jpg'

const renderContact = () => {
    const contentDiv = document.getElementById("content");
    const contactImg = new Image();
    const contactHeading = document.createElement("h1");
    const contactP = document.createElement("p");

    contactImg.src = contactPic;
    contactImg.alt = "Phone and laptop";
    contactHeading.textContent = "Contact us:";
    contactP.textContent = "Call us at (555) 867-5309 or email us at restaurant@fake.com"

    contentDiv.appendChild(contactImg);
    contentDiv.appendChild(contactHeading);
    contentDiv.appendChild(contactP);
  };
  
  export { renderContact };
  