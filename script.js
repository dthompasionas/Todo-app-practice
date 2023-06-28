// buttons need functionality
// input text needs to display on page
// when clear list button is pushed, it needs to clear the whole list
// when add button is pushed it needs to add item below.

let addButton = document.querySelector(".add");
let clearButton = document.querySelector(".clear");
let itemInput = document.querySelector(".item-input");
let todoList = document.querySelector(".todo-list");

// adds the input value as a list item.
addButton.addEventListener("click", function () {
  let listItem = document.createElement("li");
  listItem.innerHTML = itemInput.value;
  todoList.appendChild(listItem);

  itemInput.value = "";
});

// clears list
clearButton.addEventListener("click", function () {
  todoList.innerHTML = "";
});
