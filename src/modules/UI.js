import List from "./List";
import Storage from "./Storage";

export default class UI {
  static loadToDoList() {
    UI.loadLists();
    UI.setupButtons();
    // UI.loadList("All tasks");
  }

  // Loading
  static loadLists() {
    Storage.getListsObject()
      .getListsArray()
      .forEach((list) => {
        UI.createList(list);
      });
  }

  static createList(list) {
    const ul = document.querySelector(".lists ul");
    const li = document.createElement("li");
    li.innerHTML = `<button>${list.getListName()}</button>`;
    li.addEventListener("click", () => {
      UI.loadList(list);
    });
    ul.appendChild(li);
  }

  static loadList(list) {
    const h1 = document.querySelector(".list-name");
    h1.textContent = list.getListName();

    const tasks = document.querySelector(".tasks");
    tasks.replaceChildren();
    list.getTasksArray().forEach((task) => {
      tasks.innerHTML += `<li>
                          <div class="task">
                              <input
                                  type="checkbox"
                                  name="taskCompleted"
                                  id="taskCompleted"
                              />
                              <label class="taskText" for="taskCompleted"
                                  >${task.getDescription()}</label
                              >
                          </div>
                      </li>`;

      const taskDiv = tasks.querySelector(".task");
      taskDiv.addEventListener("click", () => {
        task.toggleStatus();
      });
    });
  }

  static setupButtons() {
    // Add list button
    const addListForm = document.querySelector(".add-list-form");
    const listInput = document.querySelector(".add-list-form .list-name-input");
    const addListButton = document.querySelector(".add-list-btn");

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
