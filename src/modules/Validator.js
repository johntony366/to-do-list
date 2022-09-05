import LocalStorage from "./LocalStorage";

export default class Validator {
  static validateTask(taskInput) {
    if (
      !/\S/.test(taskInput.value) ||
      !/[a-zA-Z0-9_]/.test(taskInput.value) ||
      /[ ]{2,}/.test(taskInput.value)
    ) {
      taskInput.setCustomValidity("Invalid task name!");
    } else if (LocalStorage.containsTask(taskInput.value)) {
      taskInput.setCustomValidity("Task name must be unique");
    } else {
      taskInput.setCustomValidity("");
    }
  }

  static validateRenameTask(taskRenameInput, taskName) {
    const list = LocalStorage.getListByTaskName(taskName);
    const listName = list.getName();
    const task = list.getTask(taskName);

    LocalStorage.removeTask(listName, task);
    Validator.validateTask(taskRenameInput);
    LocalStorage.addTask(listName, task);
  }

  static validateList(listInput) {
    if (
      !/\S/.test(listInput.value) ||
      !/[a-zA-Z0-9_ ]/.test(listInput.value) ||
      /[ ]{2,}/.test(listInput.value)
    ) {
      listInput.setCustomValidity("Invalid list name!");
    } else if (
      ["All tasks", "Completed tasks", "Pending tasks"].find(
        (taskName) => listInput.value === taskName
      )
    ) {
      listInput.setCustomValidity(
        `"${listInput.value}" is a reserved list name`
      );
    } else if (LocalStorage.containsList(listInput.value)) {
      listInput.setCustomValidity("List name must be unique");
    } else {
      listInput.setCustomValidity("");
    }
  }

  static validateRenameList(listRenameInput, listName) {
    const list = LocalStorage.getListByName(listName);
    LocalStorage.removeList(listName);
    Validator.validateList(listRenameInput);
    LocalStorage.addList(list);
  }
}
