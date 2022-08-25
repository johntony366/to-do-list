export default class List {
  constructor(listName) {
    this.name = listName;
    this.tasks = [];
  }

  getListName() {
    return this.name;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  getTask(taskName) {
    return this.tasks.find((task) => task.getName() === taskName);
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }
}
