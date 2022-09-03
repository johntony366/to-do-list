export default class Lists {
  constructor() {
    this.array = [];
  }

  addList(list) {
    this.array.push(list);
  }

  renameList(originalListName, newListName) {
    const list = this.getListByName(originalListName);
    list.setName(newListName);
    list.array.forEach((task) => {
      task.setOriginList(newListName);
    });
  }

  removeList(listName) {
    this.array.splice(this.getListIndex(listName), 1);
  }

  getListIndex(listName) {
    return this.array.findIndex((list) => list.getName() === listName);
  }

  getTaskByTaskName(taskName) {
    for (let i = 0; i < this.array.length; i += 1) {
      const list = this.array[i];
      const result = list.getArray.find((task) => task.getName() === taskName);
      if (result) {
        return result;
      }
    }
    return undefined;
  }

  getListByTaskName(taskName) {
    return this.array.find((list) =>
      list.getArray().find((task) => task.getName() === taskName)
    );
  }

  getListByName(listName) {
    return this.array.find((list) => list.getName() === listName);
  }

  getArray() {
    return this.array;
  }

  setArray(array) {
    this.array = array;
  }
}
