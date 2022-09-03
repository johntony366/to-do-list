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
    const listName = LocalStorage.getListByName(taskName);
    const task = LocalStorage.getTaskByTaskName(taskName);

    LocalStorage.removeTask(taskName);
    Validator.validateTask(taskRenameInput);
    if (!taskRenameInput.validity.valid) {
      LocalStorage.addTask(listName);
    }
  }
}
