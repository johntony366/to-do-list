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
