// TODO: clicking on 'Toggle dark mode' should add/remove 'dark' class on <html>
const page = document.querySelector("html");
const button = document.querySelector("#theme-btn");

button.addEventListener("click", () => {
  page.classList.toggle("dark");
});
