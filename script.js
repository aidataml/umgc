// Ensure site is fully loaded.
document.addEventListener("DOMContentLoaded", function() {
let todoForm = document.querySelector("#todoForm");
let todoList = document.querySelector("#todoList");

// Listen for task submission event.
todoForm.addEventListener("submit", function(event){
    event.preventDefault();
  
      let removeButton = document.createElement("button");
      removeButton.innerText = "Remove";
      removeButton.classList.add('buttonRemove');
  
      let newTask = document.createElement("li");
      newTask.innerText = document.querySelector("#task").value;
      
      // Add new task to the end of the list. Add remove button to new list item. 
      todoList.appendChild(newTask);
      newTask.appendChild(removeButton);
      
      todoForm.reset();
    });
  
    // Listen for an event on the task list. Strike-through completed tasks. Delete removed tasks. 
    todoList.addEventListener("click", function(event) {
      const targetTagToLowerCase = event.target.tagName.toLowerCase();
      if (targetTagToLowerCase === "li") {
        event.target.style.textDecoration = "line-through";
      } else if (targetTagToLowerCase === "button") {
        event.target.parentNode.remove();
      }
    });
  });