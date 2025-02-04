// JavaScript to toggle the menu on small screens
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

menuToggle.addEventListener("click", () => {
  navigation.classList.toggle("active");
});
