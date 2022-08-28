export default class List {
  constructor(listName) {
    this.name = listName;
    this.tasks = [];
  }

  getName() {
    return this.name;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  getTask(taskName) {
    return this.tasks.find((task) => task.getName() === taskName);
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
