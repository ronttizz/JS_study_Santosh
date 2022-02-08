// TODO: when the user clicks on '#menu-sidebar' => toggle the class 'show' on '#app-sidebar'
const sidebar = document.querySelector("#app-sidebar");
const sidebarButton = document.querySelector("#menu-sidebar");

sidebarButton.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});
