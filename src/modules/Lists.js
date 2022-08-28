export default class Lists {
  constructor() {
    this.lists = [];
  }

  addList(list) {
    this.lists.push(list);
  }

  getListIndex(listName) {
    return this.lists.findIndex((list) => list.getName() === listName);
  }

  getListByTaskName(taskName) {
    return this.lists.find((list) =>
      list.getTasksArray().find((task) => task.getDescription() === taskName)
    );
  }

  getListByName(listName) {
    return this.lists.find((list) => list.getName() === listName);
  }

  getListsArray() {
    return this.lists;
  }

  setListsArray(lists) {
    this.lists = lists;
  }
}
