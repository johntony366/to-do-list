import Task from "./Task";
import List from "./List";
import LocalStorage from "./LocalStorage";
import Validator from "./Validator";

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
        UI.createList(list.getName());
      });
  }

  static createList(listName) {
    const ul = document.querySelector(".lists-list");
    const li = document.createElement("li");

    li.innerHTML = `
    <div class="btn-content">
      <button class="list-btn">
        <i class="fa-regular fa-note-sticky list-icon"></i>
        <p>${listName}</p>
      </button>
      <div class="dropdown">
        <button class="dropdown-menu-btn">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>
        <div class="dropdownMenu">
          <ul class="options">
              <li><button class="dropdown-btn list-edit">Edit</button></li>
              <li><button class="dropdown-btn list-delete">Delete</button></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="rename-list-popup">
      <form class="rename-list-form">
        <input
          type="text"
          class="input-text list-rename-input"
          value="${listName}"
        />
        <input class="submitRenameListForm" type="submit" hidden />
      </form>
    </div>
    `;
    li.setAttribute("id", listName.replace(/\s/g, ""));
    ul.appendChild(li);

    const listEdit = li.querySelector(".list-edit");
    const renameListForm = li.querySelector(".rename-list-form");
    const listDelete = li.querySelector(".list-delete");
    const btnContent = li.querySelector(".btn-content");

    const listDropdownMenuButton = li.querySelector(".dropdown-menu-btn");
    const listDropdownMenu = li.querySelector(".dropdownMenu");

    listDropdownMenuButton.addEventListener("click", (e) => {
      listDropdownMenuButton.classList.toggle("active");
      listDropdownMenu.classList.toggle("active");
      document.addEventListener("click", (e1) => {
        if (e1.target !== listDropdownMenu) {
          listDropdownMenuButton.classList.remove("active");
          listDropdownMenu.classList.remove("active");
        }
      });
      e.stopPropagation();
    });

    btnContent.addEventListener("click", () => {
      UI.enableTaskInput();
      UI.loadFreshList(listName);
    });

    listDelete.addEventListener("click", (e) => {
      LocalStorage.removeList(listName);
      UI.loadLists();

      const activeListTitle = UI.getActiveListTitle();
      if (
        listName === activeListTitle ||
        activeListTitle === "All tasks" ||
        activeListTitle === "Completed tasks" ||
        activeListTitle === "Pending tasks"
      ) {
        UI.loadAllTasks();
      }

      e.stopPropagation();
    });

    listEdit.addEventListener("click", (e) => {
      UI.enableRenameListPopup(listName);

      const listRenameInput = li.querySelector(".list-rename-input");

      renameListForm.addEventListener("submit", (e1) => {
        e1.preventDefault();

        const newListName = listRenameInput.value;

        Validator.validateRenameList(listRenameInput, listName);
        if (listRenameInput.validity.valid) {
          UI.disableRenameListPopup();
          LocalStorage.renameList(listName, newListName);
          UI.loadLists();
          if (UI.getActiveListTitle() === listName) {
            UI.loadFreshList(newListName);
          }
          listRenameInput.value = "";
        } else {
          listRenameInput.reportValidity();
          listRenameInput.addEventListener(
            "input",
            () => {
              listRenameInput.setCustomValidity("");
            },
            { once: true }
          );
        }

        e1.stopPropagation();
      });
      e.stopPropagation();
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

  static loadAllTasks(flags) {
    UI.disableTaskInput();
    UI.resetDisplayedTasks();
    if (flags) {
      UI.setActiveListTitle(flags.listName);
    } else {
      UI.setActiveListTitle("All tasks");
    }

    const lists = LocalStorage.getListsObject();
    lists.getArray().forEach((list) => {
      UI.loadAdditionalList(list.getName(), flags);
    });
    UI.setupTaskToggle();
    UI.renderAllTaskStatuses(flags);
  }

  static loadAllCompletedTasks() {
    UI.loadAllTasks({ listName: "Completed tasks", taskIsActive: false });
  }

  static loadAllPendingTasks() {
    UI.loadAllTasks({ listName: "Pending tasks", taskIsActive: true });
  }

  static loadFreshList(listName) {
    UI.setActiveListTitle(listName);
    UI.resetDisplayedTasks();
    UI.renderTasks(listName);
    UI.renderTaskStatuses(listName);

    UI.setupTaskToggle();
  }

  static loadAdditionalList(listName, flags) {
    UI.renderTasks(listName, flags);
  }

  static getActiveListTitle() {
    const h1 = document.querySelector(".list-name");
    return h1.textContent;
  }

  static setActiveListTitle(listName) {
    const h1 = document.querySelector(".list-name");
    h1.textContent = listName;
  }

  static resetDisplayedTasks() {
    const tasks = document.querySelector(".tasks-list");
    tasks.replaceChildren();
  }

  static renderTasks(listName, flags) {
    const tasks = document.querySelector(".tasks-list");
    const list = LocalStorage.getListByName(listName);

    list.getArray().forEach((task, i) => {
      if (flags) {
        if (flags.taskIsActive) {
          if (!task.getStatus()) {
            return;
          }
        } else if (!flags.taskIsActive) {
          if (task.getStatus()) {
            return;
          }
        }
      }

      const taskName = task.getName();
      const li = document.createElement("li");
      li.innerHTML = `
      <div class="task-content">
        <div class="task">
          <input
            type="checkbox"
            name="taskCompleted"
            id="${listName.replace(/\s/g, "")}Task${i}"
          />
          <label class="taskText" for="${listName.replace(/\s/g, "")}Task${i}"
            >${taskName}</label
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
      </div>
      <div class="rename-task-popup">
        <form class="rename-task-form">
          <input
            type="text"
            class="input-text task-rename-input"
            value="${taskName}"
          />
          <input class="submitRenameTaskForm" type="submit" hidden />
        </form>
      </div>
                           `;
      li.setAttribute("class", `${taskName.replace(/\s/g, "")}`);
      tasks.appendChild(li);

      const taskEdit = li.querySelector(".task-edit");
      const renameTaskForm = li.querySelector(".rename-task-form");
      const taskDelete = li.querySelector(".task-delete");

      const taskDropdownMenuButton = li.querySelector(".dropdown-menu-btn");
      const taskDropdownMenu = li.querySelector(".dropdownMenu");

      taskDropdownMenuButton.addEventListener("click", (e) => {
        taskDropdownMenuButton.classList.toggle("active");
        taskDropdownMenu.classList.toggle("active");
        document.addEventListener("click", (e1) => {
          if (e1.target !== taskDropdownMenu) {
            taskDropdownMenuButton.classList.remove("active");
            taskDropdownMenu.classList.remove("active");
          }
        });
        e.stopPropagation();
      });

      taskDelete.addEventListener("click", (e) => {
        LocalStorage.removeTask(listName, task);
        e.stopPropagation();

        if (UI.getActiveListTitle() === "All tasks") {
          UI.loadAllTasks();
        } else if (UI.getActiveListTitle() === "Completed tasks") {
          UI.loadAllCompletedTasks({
            listName: "Completed tasks",
            taskIsActive: false,
          });
        } else if (UI.getActiveListTitle() === "Pending tasks") {
          UI.loadAllPendingTasks({
            listName: "Pending tasks",
            taskIsActive: true,
          });
        } else {
          const modifiedList = LocalStorage.getListByName(listName);
          UI.resetDisplayedTasks();
          UI.renderTasks(modifiedList);
          UI.renderTaskStatuses(modifiedList);
        }
      });

      taskEdit.addEventListener("click", (e) => {
        UI.enableRenameTaskPopup(taskName); // Need to implement

        const taskRenameInput = li.querySelector(".task-rename-input");
        renameTaskForm.addEventListener("submit", (e1) => {
          e1.preventDefault();

          Validator.validateRenameTask(taskRenameInput, taskName);
          if (taskRenameInput.validity.valid) {
            UI.disableRenameTaskPopup();
            LocalStorage.renameTask(listName, task, taskRenameInput.value);
            if (UI.getActiveListTitle() === "All tasks") {
              UI.loadAllTasks();
            } else if (UI.getActiveListTitle() === "Completed tasks") {
              UI.loadAllCompletedTasks({
                listName: "Completed tasks",
                taskIsActive: false,
              });
            } else if (UI.getActiveListTitle() === "Pending tasks") {
              UI.loadAllPendingTasks({
                listName: "Pending tasks",
                taskIsActive: true,
              });
            } else {
              UI.loadFreshList(listName);
            }
            taskRenameInput.value = "";
          } else {
            taskRenameInput.reportValidity();
            taskRenameInput.addEventListener(
              "input",
              () => {
                taskRenameInput.setCustomValidity("");
              },
              { once: true }
            );
          }
          e1.stopPropagation();
        });
        e.stopPropagation();
      });
    });
  }

  static renderTaskStatuses(listName) {
    const list = LocalStorage.getListByName(listName);
    list.getArray().forEach((task, i) => {
      if (!task.getStatus()) {
        // If task is not active
        document.querySelector(
          `#${task.getOriginList().replace(/\s/g, "")}Task${i}`
        ).checked = true;
      }
    });
  }

  static renderAllTaskStatuses(flags) {
    const lists = LocalStorage.getListsObject();
    lists.getArray().forEach((list) => {
      list.getArray().forEach((task, i) => {
        if (!task.getStatus()) {
          if (flags && flags.taskIsActive === true) {
            return;
          }

          document.querySelector(
            `#${task.getOriginList().replace(/\s/g, "")}Task${i}`
          ).checked = true;
        }
      });
    });
  }

  static setupTaskToggle() {
    const tasks = document.querySelector(".tasks-list");
    const taskDivs = tasks.querySelectorAll(".task input");

    taskDivs.forEach((taskDiv) => {
      taskDiv.addEventListener("click", (e) => {
        const lists = LocalStorage.getListsObject();
        const taskName = e.target.labels[0].textContent;
        const list = lists.getListByTaskName(taskName);
        const task = list.getTask(taskName);
        task.toggleStatus();

        LocalStorage.saveLists(lists);
        e.stopPropagation();
      });
    });
  }

  static setupButtons() {
    // Add list button
    const listInput = document.querySelector(".add-list-form .list-name-input");
    const taskInput = document.querySelector("#inputTaskText");

    const addListForm = document.querySelector(".add-list-form");
    const addListButton = document.querySelector(".add-list-btn");

    const addTaskForm = document.querySelector(".addTaskForm");
    const allTasksButton = document.querySelector(".all-tasks-btn");
    const allCompletedTasksButton = document.querySelector(
      ".all-completed-tasks-btn"
    );
    const allPendingTasksButton = document.querySelector(
      ".all-pending-tasks-btn"
    );

    allTasksButton.addEventListener("click", () => {
      UI.loadAllTasks();
    });

    allCompletedTasksButton.addEventListener("click", () => {
      UI.loadAllCompletedTasks();
    });

    allPendingTasksButton.addEventListener("click", () => {
      UI.loadAllPendingTasks();
    });

    addListButton.addEventListener("click", (e) => {
      UI.enableAddListPopup();
      e.stopPropagation();
    });

    addListForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const listName = listInput.value;
      const newList = new List(listName);

      Validator.validateList(listInput);
      if (listInput.validity.valid) {
        LocalStorage.addList(newList);
        UI.createList(listName);

        UI.disableAddListPopup();
      } else {
        listInput.reportValidity();
        listInput.addEventListener(
          "input",
          () => {
            listInput.setCustomValidity("");
          },
          { once: true }
        );
      }
    });

    addTaskForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const newTask = new Task(taskInput.value);
      const listName = document.querySelector(".list-name").textContent;

      Validator.validateTask(taskInput);
      if (taskInput.validity.valid) {
        LocalStorage.addTask(listName, newTask);

        UI.loadFreshList(listName);
        UI.clearTaskInput();
      } else {
        taskInput.reportValidity();
        taskInput.addEventListener(
          "input",
          () => {
            taskInput.setCustomValidity("");
          },
          { once: true }
        );
      }
    });
  }

  static enableAddListPopup() {
    const addListButton = document.querySelector(".add-list-btn");
    const addListPopup = document.querySelector(".add-list-popup");
    const listNameInput = addListPopup.querySelector(".list-name-input");

    addListButton.classList.add("active");
    addListPopup.classList.add("active");
    listNameInput.focus();

    document.addEventListener("click", UI.exitAddListPopUpWhenLoseFocus);
  }

  static disableAddListPopup() {
    document.removeEventListener("click", UI.exitAddListPopUpWhenLoseFocus);

    const addListButton = document.querySelector(".add-list-btn");
    const addListPopup = document.querySelector(".add-list-popup");
    const listNameInput = addListPopup.querySelector(".list-name-input");

    addListButton.classList.remove("active");
    addListPopup.classList.remove("active");
    listNameInput.value = "";
  }

  static enableRenameListPopup(listName) {
    const targetList = document.querySelector(
      `#${listName.replace(/\s/g, "")}`
    );
    const btnContent = targetList.querySelector(".btn-content");
    const popup = targetList.querySelector(".rename-list-popup");
    const listRenameInput = targetList.querySelector(".list-rename-input");

    targetList.classList.add("edited-list");
    btnContent.classList.add("disabled");
    popup.classList.add("active");
    listRenameInput.focus();

    document.addEventListener("click", UI.exitRenameListPopUpWhenLoseFocus);
  }

  static disableRenameListPopup() {
    document.removeEventListener("click", UI.exitRenameListPopUpWhenLoseFocus);

    const targetList = document.querySelector(".edited-list");
    const btnContent = targetList.querySelector(".btn-content");
    const popup = targetList.querySelector(".rename-list-popup");

    targetList.classList.remove("edited-list");
    btnContent.classList.remove("disabled");
    popup.classList.remove("active");
  }

  static enableRenameTaskPopup(taskName) {
    const targetLi = document.querySelector(`.${taskName.replace(/\s/g, "")}`);
    const taskContent = targetLi.querySelector(".task-content");
    const popup = targetLi.querySelector(".rename-task-popup");
    const taskRenameInput = targetLi.querySelector(".task-rename-input");

    targetLi.classList.add("edited-task");
    taskContent.classList.add("disabled");
    popup.classList.add("active");
    taskRenameInput.focus();

    document.addEventListener("click", UI.exitRenameTaskPopUpWhenLoseFocus);
  }

  static disableRenameTaskPopup() {
    document.removeEventListener("click", UI.exitRenameTaskPopUpWhenLoseFocus);

    const targetLi = document.querySelector(".edited-task");
    const taskContent = targetLi.querySelector(".task-content");
    const popup = targetLi.querySelector(".rename-task-popup");

    targetLi.classList.remove("edited-task");
    taskContent.classList.remove("disabled");
    popup.classList.remove("active");
  }

  static exitAddListPopUpWhenLoseFocus(e) {
    if (
      e.target !== document.querySelector(".list-name-input") &&
      e.target !== document.querySelector("input.submitAddListForm")
    ) {
      UI.disableAddListPopup();
    }
  }

  static exitRenameListPopUpWhenLoseFocus(e) {
    if (
      !e.target.matches(".list-rename-input") &&
      !e.target.matches("input.submitRenameListForm")
    ) {
      UI.disableRenameListPopup();
    }
  }

  static exitRenameTaskPopUpWhenLoseFocus(e) {
    if (
      !e.target.matches(".task-rename-input") &&
      !e.target.matches("input.submitRenameTaskForm")
    ) {
      UI.disableRenameTaskPopup();
    }
  }

  static clearTaskInput() {
    const inputTaskText = document.querySelector("#inputTaskText");
    inputTaskText.value = "";
  }
}
