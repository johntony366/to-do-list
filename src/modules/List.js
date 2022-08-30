export default class List {
  constructor(listName) {
    this.name = listName;
    this.tasks = [];
  }

  getName() {
    return this.name;
  }

  addTask(task) {
    task.setOriginList(this.name);
    this.tasks.push(task);
  }

  removeTask(taskName) {
    this.tasks.splice(this.getTaskIndex(taskName), 1);
  }

  getTask(taskName) {
    return this.tasks.find((task) => task.getDescription() === taskName);
  }

  getTaskIndex(taskName) {
    return this.tasks.findIndex((task) => task.getDescription() === taskName);
  }

  getTasksArray() {
    return this.tasks;
  }

  setTasksArray(tasks) {
    this.tasks = tasks;
  }
}
