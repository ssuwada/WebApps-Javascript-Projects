/* Import all of the documented in HTML data */

const notesContainer = document.querySelector(".notes-container");
const createBTN = document.querySelector(".btn");
let notes = document.querySelector(".input-box"); //It will create multiple boxes named input-box after implementing

/* ADD EVEN LISTENER FOR BUTTON */
/* Bassicaly this function is creating like in html element <p></p> 
defined with class and contentediteable ect. and adding png */

createBTN.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img); // Append it to place you want and its defined
});
