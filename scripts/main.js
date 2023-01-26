const myImage = document.querySelector(".settings-tog");
const settingsTogButton = document.querySelector(".settings-tog-btn");

#settings-tog-btn.addEventListener('click', settingsToggle);

function settingsToggle() {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/down-chevron.png") {
    myImage.setAttribute("src", "images/up-chevron.png");
  } else {
    myImage.setAttribute("src", "images/down-chevron.png");
  }
};