const inputBOX = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBOX.value === "") {
    alert("You must type something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBOX.value;
    listContainer.appendChild(li);

    // Create span icon for every task counted
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span); // create child on li content - span !
  }
  inputBOX.value = "";
  saveData();
}

// When we click list container where we sotred all our tasks, first it will be checked where we clicked
// If we clicked in list LI that will toggle "checked"
// If we clicked in SPAN it will delete parent element, parent in this case are list elements
// "checked" is defined in style.css!!!
// "SPAN" refers to span imported in function add task!

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// Saving data after the sit will be turned off
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function restoreData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
restoreData();
