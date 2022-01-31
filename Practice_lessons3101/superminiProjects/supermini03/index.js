"use strict";

/**
Complete the function isPromoCodeValid such that it returns true when the promo code is valid 
and false otherwise.
/**
 * @param {boolean} code
 */

function isPromoCodeValid(code) {
  if (code.trim().includes(" ")) {
    return false;
  } else {
    return code.trim().length >= 5 && code.trim().length <= 10;
  }
}

// Sample usage - do not modify
const code = document.querySelector("#promo-code");

code.addEventListener("keyup", () => {
  let result = isPromoCodeValid(code.value);
  if (result) {
    code.classList.remove("error");
  } else {
    code.classList.add("error");
  }
});
