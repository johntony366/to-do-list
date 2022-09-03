import LocalStorage from "./LocalStorage";

export default class Validator {
  static validateTask(taskInput) {
    if (!/\S/.test(taskInput.value)) {
      taskInput.setCustomValidity("Cannot leave task name blank!");
    } else if (LocalStorage.containsTask(taskInput.value)) {
      taskInput.setCustomValidity("Task is already present");
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
    if (!/\S/.test(listInput.value)) {
      listInput.setCustomValidity("Cannot leave list name blank!");
    } else if (LocalStorage.containsList(listInput.value)) {
      listInput.setCustomValidity("List is already present");
    } else {
      listInput.setCustomValidity("");
    }
  }
}
