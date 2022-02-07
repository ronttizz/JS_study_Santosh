const getShortTextParagraphs = () => {
  const paragraphs = [...document.querySelectorAll("p")];
  const p = [];
  paragraphs.forEach((element) => {
    if (element.textContent.length < 10) {
      p.push(element.textContent);
    }
  });
  return p;
};

// const getShortTextParagraphs = () => {
//   return [...document.querySelectorAll("p")]
//     .filter((p) => p.textContent.length < 10)
//     .map((p) => p.textContent);
// };

// Sample usage - do not modify
console.log(getShortTextParagraphs());
