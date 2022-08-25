import Storage from "./Storage";

export default class UI {
  static loadToDoList() {
    UI.loadLists();
    UI.setupButtons();
    // UI.loadList("All tasks");
  }

  // Loading
  static loadLists() {
    Storage.getLists()
      .getLists()
      .forEach((list) => {
        UI.createList(list);
      });
  }

  static createList(list) {
    const ul = document.querySelector(".lists ul");
    const li = document.createElement("li");
    li.innerHTML = `<button>${list.getListName()}</button>`;
    li.addEventListener("click", () => {
      UI.setDisplayList(list);
    });
    ul.appendChild(li);
  }

  static setDisplayList(list) {
    const h1 = document.querySelector(".list-name");
    h1.textContent = list.getListName();

    const tasks = document.querySelector(".tasks");
    list.forEach((task) => {
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
    const addListButton = document.querySelector(".add-list-btn");
    const addListPopup = document.querySelector(".add-list-popup");
    addListButton.addEventListener("click", () => {
      addListButton.classList.add("active");
      addListPopup.classList.add("active");
    });
  }
}
