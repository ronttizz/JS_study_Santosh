"use strict";

/**
Complete the getUserIdFromCard function such that it returns the value of data-user-id (number)
from the user-card element.
**/

const getUserIdFromCard = () => {
  // const user = document.querySelector("#user-card");
  // return user.dataset.userId;
  // can use one or the other, both work
  return document.querySelector("#user-card").dataset.userId;
};

// Sample usage - do not modify
console.log(getUserIdFromCard());
