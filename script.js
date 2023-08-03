const burgerBtn = document.querySelector(".burger-btn");
const navList = document.querySelector(".navbar-list-items");

burgerBtn.addEventListener("click", () => {
  navList.classList.toggle("hidden");
});
