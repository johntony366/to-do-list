import List from "./List";

export default class Lists {
  constructor() {
    this.lists = [new List("All tasks")];
  }

  addList(list) {
    this.lists.push(list);
  }

  getListIndex(listName) {
    return this.lists.findIndex((list) => list.getName() === listName);
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
