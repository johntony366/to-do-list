export default class Lists {
  constructor() {
    this.lists = [];
  }

  addList(list) {
    this.lists.push(list);
  }

  getList(listName) {
    return this.lists.find((list) => list.getName() === listName);
  }

  getLists() {
    return this.lists;
  }

  setLists(lists) {
    this.lists = lists;
  }
}
