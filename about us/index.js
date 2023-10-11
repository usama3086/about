
const dropdownParent = document.querySelectorAll(".navItem");
const dropdowns = document.querySelectorAll(".dropdown");
const navBtn = document.querySelector(".navbtn");
const toggleMenu = document.querySelectorAll("#toggleMenu");

dropdownParent.forEach((menu, i) => {
  menu.addEventListener("mouseover", () => {
    dropdowns[i].style = "display: block";
  });
});

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("mouseover", () => {
    console.log("I'm over");
    dropdown.style.display = "block";
  });
  dropdown.addEventListener("mouseleave", () => {
    console.log("I'm over");
    dropdown.style.display = "none";
  });
});
dropdownParent.forEach((menu, i) => {
  menu.addEventListener("mouseleave", () => {
    dropdowns[i].style = "display: none";
  });
});
var acc = document.getElementsByClassName("accordion");
var i;

navBtn.addEventListener("click", () => {
  // toggleMenu[0].style.display = "flex";
  if (toggleMenu[0].style.display == "flex") {
    toggleMenu[0].style.display = "none";
    const panels = document.querySelectorAll(".panel");
    for (i = 0; i < panels.length; i++) {
      console.log("closed");

      // console.log(this);
      // event.currentTarget.classList.toggle("active");
      panels[i].style.display = "none";
      acc[i].classList.remove("active");
    }
  } else {
    toggleMenu[0].style.display = "flex";
    toggleMenu[0].style.flexDirection = "column";
    toggleMenu[0].style.alignItems = "center";
  }
});

// <<<<<<<<<<<<<<<<<<<Toggle button menu>>>>>>>>>>>>>>>

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", (event) => {
    const currentElement = event.currentTarget;
    const panel = currentElement.nextElementSibling;

    // Toggle the "active" class
    currentElement.classList.toggle("active");

    // Toggle the display of the panel
    if (panel.style.display === "flex") {
      panel.style.display = "none";
      // Remove the "active" class when closing the accordion
      currentElement.classList.remove("active");
    } else {
      panel.style.display = "flex";
      panel.style.flexDirection = "column";
      panel.style.alignItems = "center";
      panel.style.gap = "10px";
    }
  });
}