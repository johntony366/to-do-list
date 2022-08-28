import Task from "./Task";
import List from "./List";
import Storage from "./Storage";

export default class UI {
  static loadToDoList() {
    const lists = Storage.getListsObject();
    UI.loadLists();
    UI.setupButtons();
    UI.loadList(lists.getListByName("All tasks"));
  }

  // Loading
  static loadLists() {
    Storage.getListsObject()
      .getListsArray()
      .forEach((list) => {
        if (list.getName() !== "All tasks") {
          UI.createList(list);
        }
      });
  }

  static createList(list) {
    const ul = document.querySelector(".lists ul");
    const li = document.createElement("li");

    li.innerHTML = `<button>${list.getName()}</button>`;
    li.addEventListener("click", () => {
      const lists = Storage.getListsObject();
      UI.loadList(lists.getListByName(list.getName()));
    });
    ul.appendChild(li);
  }

  static loadList(list) {
    const h1 = document.querySelector(".list-name");
    h1.textContent = list.getName();

    const tasks = document.querySelector(".tasks");
    tasks.replaceChildren();
    list.getTasksArray().forEach((task, i) => {
      tasks.innerHTML += `<li>
                          <div class="task">
                              <input
                                  type="checkbox"
                                  name="taskCompleted"
                                  id="taskCompleted${i}"
                              />
                              <label class="taskText" for="taskCompleted${i}"
                                  >${task.getDescription()}</label
                              >
                          </div>  
                      </li>`;

      const taskDiv = tasks.querySelector(".task");
      taskDiv.addEventListener("click", (e) => {
        const lists = Storage.getListsObject();
        const list = lists.getListByName(h1.textContent);
        const allTasksList = lists.getListByName("All tasks");

        task.toggleStatus();
        list.getTasksArray()[list.getTaskIndex(task.getDescription())] = task;
        allTasksList.getTasksArray()[
          allTasksList.getTaskIndex(task.getDescription())
        ] = task;
        lists.getListsArray()[lists.getListIndex(list.getName())] = list;
        lists.getListsArray()[lists.getListIndex("All tasks")] = allTasksList;

        Storage.saveLists(lists);

        e.stopPropagation();
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
    const lists = Storage.getListsObject();

    allTasksButton.addEventListener("click", () => {
      UI.loadList(lists.getListByName("All tasks"));
    });

    addListButton.addEventListener("click", () => {
      this.enableAddListPopup();
    });
    addListForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Add list to storage

      const listName = listInput.value;
      const newList = new List(listName);
      Storage.addListToListsAndSave(newList);
      UI.createList(newList);

      this.disableAddListPopup();
    });

    addTaskForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Add task to list

      const newTask = new Task(taskInput.value);
      const listName = document.querySelector(".list-name").textContent;
      Storage.addTaskToListAndSave(listName, newTask);
      if (listName !== "All tasks") {
        Storage.addTaskToListAndSave("All tasks", newTask);
      }
      UI.loadList(Storage.getListsObject().getListByName(listName));
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
