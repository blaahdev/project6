const menu = document.querySelector(".menu");
const centerItem = document.querySelector(".center-item");

centerItem.addEventListener("mouseenter", () => {
  menu.classList.add("active");
});
centerItem.addEventListener("mouseleave", () => {
  menu.classList.remove("active");
});
