const mobileMenuButton = document.querySelector(".mobile-menu-button");
const closeBtn = document.querySelector(".close-btn");
const getServicesButton = document.querySelector("#ServicesButton");
const getservicesMobile = document.querySelector("#ServicesMobile");
mobileMenuButton.addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("translate-x-full");
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
});

closeBtn.addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("translate-x-full");
  document.body.style.backgroundColor = "white";
});

window.addEventListener("click", function (event) {
  if (
    !mobileMenuButton.contains(event.target) &&
    !closeBtn.contains(event.target) &&
    !document.querySelector(".sidebar").contains(event.target)
  ) {
    document.querySelector(".sidebar").classList.toggle("translate-x-full");
    document.body.style.backgroundColor = "white";
  }
  if (
    !getServicesButton.contains(event.target) &&
    !getservicesMobile.contains(event.target)
  ) {
    getservicesMobile.classList.add("hidden");
  }
});
