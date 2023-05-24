const renderFooter = () => {
    const footerDiv = document.getElementById("footer");
    const copyDiv = document.createElement("div");

    copyDiv.textContent = "Copyright 2023 Ryan's Restaurant"
  
    footerDiv.appendChild(copyDiv);
  };
  
  export { renderFooter };
  