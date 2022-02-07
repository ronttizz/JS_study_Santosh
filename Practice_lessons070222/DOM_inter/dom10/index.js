const getSelectedCurrencies = () => {
  const links = [...document.querySelectorAll(".active")];
  const currencies = [];
  links.forEach((link) => currencies.push(link.textContent));
  return currencies;
};

// Sample usage - do not modify
document.querySelectorAll(".cards .card").forEach((card) => {
  card.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active");
    console.log(getSelectedCurrencies());
  });
});
