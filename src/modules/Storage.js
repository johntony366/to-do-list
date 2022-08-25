import List from "./List";
import Lists from "./Lists";
import Task from "./Task";

export default class Storage {
  static saveLists(lists) {
    localStorage.setItem("lists", JSON.stringify(lists));
  }

  static #loadListsFromStorage() {
    return JSON.parse(localStorage.getItem("lists"));
  }

  static getLists() {
    const lists = Object.assign(new Lists(), this.#loadListsFromStorage());

    lists.setLists(
      lists.getLists().map((list) => Object.assign(new List(), list))
    );

    lists.getLists().forEach((list) => {
      list.setTasks(
        list.getTasks.map((task) => Object.assign(new Task(), task))
      );
    });

    return lists;
  }

  static addList(list) {
    const lists = Storage.getLists();
    lists.addList(list);
    Storage.saveLists(lists);
  }

  static addTask(listName, task) {
    const lists = Storage.getLists();
    const targetList = lists.getList(listName);
    targetList.addTask(task);
    Storage.saveLists(lists);
  }
}
