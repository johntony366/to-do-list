export default class Task {
  constructor(description) {
    this.description = description;
    this.active = true;
  }

  getDescription() {
    return this.description;
  }

  getStatus() {
    return this.active;
  }

  toggleStatus() {
    this.active = !this.active;
  }

  setOriginList(listName) {
    this.originListName = listName;
  }

  getOriginList() {
    return this.originListName;
  }
}
