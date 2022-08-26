import List from "./List";
import Lists from "./Lists";
import Task from "./Task";

export default class Storage {
  static saveLists(lists) {
    localStorage.setItem("lists", JSON.stringify(lists));
  }

  static #loadLists() {
    return JSON.parse(localStorage.getItem("lists"));
  }

  static getListsObject() {
    const lists = Object.assign(new Lists(), this.#loadLists());

    lists.setListsArray(
      lists.getListsArray().map((list) => Object.assign(new List(), list))
    );

    lists.getListsArray().forEach((list) => {
      list.setTasksArray(
        list.getTasksArray().map((task) => Object.assign(new Task(), task))
      );
    });

    return lists;
  }

  static addListToListsAndSave(list) {
    const lists = Storage.getListsObject();
    lists.addList(list);
    Storage.saveLists(lists);
  }

  static addTaskToListAndSave(listName, task) {
    const lists = Storage.getLists();
    const targetList = lists.getListByName(listName);
    targetList.addTask(task);
    Storage.saveLists(lists);
  }
}
