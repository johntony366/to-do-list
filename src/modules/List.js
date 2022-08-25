export default class List {
  constructor(listName) {
    this.name = listName;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }
}
