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
  // creates a list item each time "add" is clicked.

  if (itemInput.value !== "") {
    let listItem = document.createElement("li");
    listItem.classList.add("list-item");
    listItem.innerHTML = itemInput.value;
    todoList.appendChild(listItem);

    // creates a div to put the list buttons in
    let listButtonGroup = document.createElement("div");
    listButtonGroup.classList.add("list-button-group");
    listItem.append(listButtonGroup);

    let completeItem = document.createElement("button");
    completeItem.classList.add("complete-list-item");
    completeItem.innerHTML = "Done";
    listButtonGroup.appendChild(completeItem);

    let deleteItem = document.createElement("button");
    deleteItem.classList.add("delete-list-item");
    deleteItem.innerHTML = "X";
    listButtonGroup.appendChild(deleteItem);

    itemInput.value = "";

    // item button events

    // complete an item crosses it out
    completeItem.addEventListener("click", function () {
      if (completeItem.innerHTML === "Done") {
        // unhides the checkmark by the task
        let icon = document.createElement("i");
        icon.classList.add("hidden", "fas", "fa-check");
        // let icon = document.getElementById("icon");
        listItem.appendChild(icon);
        // icon.classList.remove("hidden");

        completeItem.innerHTML = "Undo";
        completeItem.style.background = "yellow";
        completeItem.style.color = "black";
      } else {
        icon.classList.remove("hidden");
        completeItem.innerHTML = "Done";
        completeItem.style.background = "blue";
        completeItem.style.color = "white";
      }

      console.log(listItem);
    });

    // hitting the "X" button deletes the item
    deleteItem.addEventListener("click", function () {
      listItem.remove();
    });
  } else {
    return;
  }
});

// clears list
clearButton.addEventListener("click", function () {
  todoList.innerHTML = "";
});
