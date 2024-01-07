const inputBOX = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBOX.value === "") {
    alert("You must type something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBOX.value;
    listContainer.appendChild(li);
  }
  inputBOX.value = "";
}
