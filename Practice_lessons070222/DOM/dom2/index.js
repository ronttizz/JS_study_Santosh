const getNavbarElement = () => {
  // TODO: get the element with id navbar
  return document.querySelector("#navbar") ?? "ID 'navbar' Not found";
};

const getMainElement = () => {
  // TODO: get the element with id main
  return document.querySelector("#main") ?? "ID 'main' Not Found";
};

const getAboutFromFooter = () => {
  // TODO: get the the about link that's in the footer
  return document.querySelector("footer a") ?? "'footer a' Not Found";
};

const getTheParagraphElement = () => {
  // TODO: get the first paragraph element
  return document.querySelector("p") ?? "Element 'p' Not Found";
};

// Sample usage - do not modify
console.log(getNavbarElement());
console.log(getMainElement());
console.log(getAboutFromFooter());
console.log(getTheParagraphElement());
