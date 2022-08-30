import Task from "./Task";
import List from "./List";
import LocalStorage from "./LocalStorage";

export default class UI {
  static loadToDoList() {
    UI.loadLists();
    UI.setupButtons();
    UI.loadAllTasks();
  }

  // Loading
  static loadLists() {
    const ul = document.querySelector(".lists ul");
    ul.replaceChildren();

    LocalStorage.getListsObject()
      .getArray()
      .forEach((list) => {
        UI.createList(list);
      });
  }

  static createList(list) {
    const ul = document.querySelector(".lists ul");
    const li = document.createElement("li");

    li.innerHTML = `<button>
                <i class="fa-regular fa-note-sticky"></i>
                <p>${list.getName()}</p>
                <button class="dropdown-menu-btn">
                <i class="fa-solid fa-ellipsis-vertical"></i>
                </button>
              </button>
              <div class="dropdownMenu">
                <ul class="options">
                  <li><button class="dropdown-btn list-edit">Edit</button></li>
                  <li><button class="dropdown-btn list-delete">Delete</button></li>
                </ul>
              </div>
    `;
    ul.appendChild(li);

    const listEdit = document.querySelector(".list-edit");
    const listDelete = document.querySelector(".list-delete");
    li.addEventListener("click", () => {
      const lists = LocalStorage.getListsObject();
      // Add code to enable inputhere
      UI.enableTaskInput();

      UI.loadFreshList(lists.getListByName(list.getName()));
    });
    listDelete.addEventListener("click", (e) => {
      LocalStorage.removeListFromListsAndSave(list.getName());
      e.stopPropagation();
      this.loadLists();
    });
  }

  static enableTaskInput() {
    const addTaskForm = document.querySelector(".addTaskForm");
    addTaskForm.style.display = "block";
  }

  static disableTaskInput() {
    const addTaskForm = document.querySelector(".addTaskForm");
    addTaskForm.style.display = "none";
  }

  static loadAllTasks() {
    UI.disableTaskInput();
    const tasks = document.querySelector(".tasks");
    tasks.replaceChildren();
    const h1 = document.querySelector(".list-name");
    h1.textContent = "All tasks";

    const lists = LocalStorage.getListsObject();
    lists.getArray().forEach((list) => {
      UI.loadAdditionalList(list);
    });
    UI.renderAllTaskStatuses(lists);
  }

  static loadFreshList(list) {
    UI.setActiveListTitle(list.getName());
    UI.resetDisplayedTasks();
    UI.renderTasks(list);
    UI.renderTaskStatuses(list);

    UI.setupTaskToggle();
  }

  static loadAdditionalList(list) {
    UI.renderTasks(list);
    UI.setupTaskToggle();
  }

  static setActiveListTitle(listName) {
    const h1 = document.querySelector(".list-name");
    h1.textContent = listName;
  }

  static resetDisplayedTasks() {
    const tasks = document.querySelector(".tasks");
    tasks.replaceChildren();
  }

  static renderTasks(list) {
    const tasks = document.querySelector(".tasks");
    const listName = list.getName();
    list.getArray().forEach((task, i) => {
      tasks.innerHTML += `<li>
                          <div class="task">
                              <input
                                  type="checkbox"
                                  name="taskCompleted"
                                  id="${listName}Task${i}"
                              />
                              <label class="taskText" for="${listName}Task${i}"
                                  >${task.getName()}</label
                              >
                              </div>
                            <button class="dropdown-menu-btn">
                              <i class="fa-solid fa-ellipsis-vertical"></i>
                            </button>
                          <div class="dropdownMenu">
                            <ul class="options">
                             <li><button class="dropdown-btn task-edit">Edit</button></li>
                             <li><button class="dropdown-btn task-delete">Delete</button></li>
                             </ul>
                           </div>  
                      </li>`;
    });
  }

  static renderTaskStatuses(list) {
    list.getArray().forEach((task, i) => {
      if (!task.getStatus()) {
        // If task is not active
        document.querySelector(
          `#${task.getOriginList()}Task${i}`
        ).checked = true;
      }
    });
  }

  static renderAllTaskStatuses(lists) {
    lists.getArray().forEach((list) => {
      list.getArray().forEach((task, i) => {
        if (!task.getStatus()) {
          // If task is not active
          document.querySelector(
            `#${task.getOriginList()}Task${i}`
          ).checked = true;
        }
      });
    });
  }

  static setupTaskToggle() {
    const tasks = document.querySelector(".tasks");
    const taskDivs = tasks.querySelectorAll(".task input");

    taskDivs.forEach((taskDiv) => {
      taskDiv.addEventListener("click", (e) => {
        // Problem is it registers separate clicks for label and checkbox
        const lists = LocalStorage.getListsObject();
        const taskName = e.target.labels[0].textContent;
        const list = lists.getListByTaskName(taskName);
        const task = list.getTask(taskName);
        task.toggleStatus();

        LocalStorage.saveLists(lists);
      });
    });
  }

  static setupButtons() {
    // Add list button
    const addListForm = document.querySelector(".add-list-form");
    const listInput = document.querySelector(".add-list-form .list-name-input");
    const addListButton = document.querySelector(".add-list-btn");
    const addTaskForm = document.querySelector(".addTaskForm");
    const taskInput = document.querySelector("#inputTaskText");
    const allTasksButton = document.querySelector(".all-tasks-btn");

    allTasksButton.addEventListener("click", () => {
      UI.loadAllTasks();
    });

    addListButton.addEventListener("click", () => {
      this.enableAddListPopup();
    });
    addListForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Add list to LocalStorage

      const listName = listInput.value;
      const newList = new List(listName);
      LocalStorage.addList(newList);
      UI.createList(newList);

      this.disableAddListPopup();
    });

    addTaskForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Add task to list

      const newTask = new Task(taskInput.value);
      const listName = document.querySelector(".list-name").textContent;
      LocalStorage.addTask(listName, newTask);

      UI.loadFreshList(LocalStorage.getListsObject().getListByName(listName));
    });
  }

  static enableAddListPopup() {
    const addListButton = document.querySelector(".add-list-btn");
    const addListPopup = document.querySelector(".add-list-popup");

    addListButton.classList.add("active");
    addListPopup.classList.add("active");
  }

  static disableAddListPopup() {
    const addListButton = document.querySelector(".add-list-btn");
    const addListPopup = document.querySelector(".add-list-popup");

    addListButton.classList.remove("active");
    addListPopup.classList.remove("active");
  }
}
