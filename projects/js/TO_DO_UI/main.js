const UI_ELEMENTS = {
  ADD_TASK_BTN: document.querySelector(".add-icon-btn"),
  DELETE_TASK_BTNS: document.querySelectorAll(".delete-btn"),
  ADD_TASK_FIELD_VALUE: document.querySelector(".add-task-field"),
};

function addNewTask() {
  let taskDivTemplate = document.querySelector(".task-item").cloneNode(true);
  let deleteBTN = taskDivTemplate.querySelector(".delete-btn");
  deleteBTN.addEventListener("click", deleteTask);
  let checkBtn = taskDivTemplate.querySelector(".task-checkbox");
  checkBtn.addEventListener("click", checkTask);
  deleteBTN.addEventListener("click", deleteTask);
  taskDivTemplate.querySelector(".task-text").textContent =
    UI_ELEMENTS.ADD_TASK_FIELD_VALUE.value;
  taskDivTemplate.className = "new-task-item";
  const tasksList = document.querySelector(".tasks-list");
  tasksList.append(taskDivTemplate);
}

UI_ELEMENTS.ADD_TASK_BTN.addEventListener("click", addNewTask);

function deleteTask(event) {
  event.currentTarget.parentElement.classlist.toggle("done");
}

function checkTask(event) {
  event.currentTarget.parentElement.classList.toggle("done");
}
