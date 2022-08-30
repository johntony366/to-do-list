export default class Task {
  constructor(name) {
    this.name = name;
    this.active = true;
  }

  getName() {
    return this.name;
  }

  getStatus() {
    return this.active;
  }

  toggleStatus() {
    this.active = !this.active;
  }

  getOriginList() {
    return this.originListName;
  }

  setOriginList(listName) {
    this.originListName = listName;
  }
}
