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
}
