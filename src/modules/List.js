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

  setTasks(tasks) {
    this.tasks = tasks;
  }
}
