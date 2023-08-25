const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const taskList = document.querySelector("#taskList");
const changeTheme = document.getElementById("change-theme");

addButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const listItem = document.createElement("li");
  listItem.innerHTML = `
        ${taskText}
        <button class="delete-button">Delete</button>
    `;

  taskList.appendChild(listItem);
  taskInput.value = "";

  const deleteButton = listItem.querySelector(".delete-button");
  deleteButton.addEventListener("click", () => {
    listItem.remove();
  });
});

changeTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
