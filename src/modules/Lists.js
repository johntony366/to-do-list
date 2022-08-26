export default class Lists {
  constructor() {
    this.lists = [];
  }

  addList(list) {
    this.lists.push(list);
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
