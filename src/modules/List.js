export default class List {
  constructor(listName) {
    this.name = listName;
    this.array = [];
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  addTask(task) {
    task.setOriginList(this.name);
    this.array.push(task);
  }

  removeTask(taskName) {
    this.array.splice(this.getTaskIndex(taskName), 1);
  }

  getTask(taskName) {
    return this.array.find((task) => task.getName() === taskName);
  }

  getTaskIndex(taskName) {
    return this.array.findIndex((task) => task.getName() === taskName);
  }

  getArray() {
    return this.array;
  }

  setArray(array) {
    this.array = array;
  }
}
