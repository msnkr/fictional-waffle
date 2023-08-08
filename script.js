const burgerBtn = document.querySelector(".burger-btn");
const navList = document.querySelector(".navbar-list-items");
const customerGradient = document.querySelectorAll(".customer-gradient");

burgerBtn.addEventListener("click", () => {
  navList.classList.toggle("hidden");
});
