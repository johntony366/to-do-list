/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/List.js":
/*!*****************************!*\
  !*** ./src/modules/List.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ List)
/* harmony export */ });
class List {
  constructor(listName) {
    this.name = listName;
    this.tasks = [];
  }

  getListName() {
    return this.name;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  getTask(taskName) {
    return this.tasks.find((task) => task.getName() === taskName);
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }
}


/***/ }),

/***/ "./src/modules/Lists.js":
/*!******************************!*\
  !*** ./src/modules/Lists.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Lists)
/* harmony export */ });
class Lists {
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


/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ "./src/modules/List.js");
/* harmony import */ var _Lists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lists */ "./src/modules/Lists.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");




class Storage {
  static saveLists(lists) {
    localStorage.setItem("lists", JSON.stringify(lists));
  }

  static #loadListsFromStorage() {
    return JSON.parse(localStorage.getItem("lists"));
  }

  static getLists() {
    const lists = Object.assign(new _Lists__WEBPACK_IMPORTED_MODULE_1__["default"](), this.#loadListsFromStorage());

    lists.setLists(
      lists.getLists().map((list) => Object.assign(new _List__WEBPACK_IMPORTED_MODULE_0__["default"](), list))
    );

    lists.getLists().forEach((list) => {
      list.setTasks(
        list.getTasks.map((task) => Object.assign(new _Task__WEBPACK_IMPORTED_MODULE_2__["default"](), task))
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


/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
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
}


/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.js");


class UI {
  static loadToDoList() {
    UI.loadLists();
    UI.setupButtons();
    // UI.loadList("All tasks");
  }

  // Loading
  static loadLists() {
    _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].getLists()
      .getLists()
      .forEach((list) => {
        UI.createList(list);
      });
  }

  static createList(list) {
    const ul = document.querySelector(".lists ul");
    const li = document.createElement("li");
    li.innerHTML = `<button>${list.getListName()}</button>`;
    li.addEventListener("click", () => {
      UI.setDisplayList(list);
    });
    ul.appendChild(li);
  }

  static setDisplayList(list) {
    const h1 = document.querySelector(".list-name");
    h1.textContent = list.getListName();

    const tasks = document.querySelector(".tasks");
    list.forEach((task) => {
      tasks.innerHTML += `<li>
                          <div class="task">
                              <input
                                  type="checkbox"
                                  name="taskCompleted"
                                  id="taskCompleted"
                              />
                              <label class="taskText" for="taskCompleted"
                                  >${task.getDescription()}</label
                              >
                          </div>
                      </li>`;

      const taskDiv = tasks.querySelector(".task");
      taskDiv.addEventListener("click", () => {
        task.toggleStatus();
      });
    });
  }

  static setupButtons() {
    // Add list button
    const addListButton = document.querySelector(".add-list-btn");
    const addListPopup = document.querySelector(".add-list-popup");
    addListButton.addEventListener("click", () => {
      addListButton.classList.add("active");
      addListPopup.classList.add("active");
    });
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");


_modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"].loadToDoList();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JCZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEIwQjtBQUNFO0FBQ0Y7O0FBRVg7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLDhDQUFLOztBQUV6QztBQUNBLHVEQUF1RCw2Q0FBSTtBQUMzRDs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNELDZDQUFJO0FBQzFEO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQmdDOztBQUVqQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUkseURBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbUJBQW1CO0FBQ2pEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsc0JBQXNCO0FBQzNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7VUMvREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ044Qjs7QUFFOUIsZ0VBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvTGlzdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3Qge1xuICBjb25zdHJ1Y3RvcihsaXN0TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IGxpc3ROYW1lO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgfVxuXG4gIGdldExpc3ROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBhZGRUYXNrKHRhc2spIHtcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gIH1cblxuICBnZXRUYXNrKHRhc2tOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXROYW1lKCkgPT09IHRhc2tOYW1lKTtcbiAgfVxuXG4gIHNldFRhc2tzKHRhc2tzKSB7XG4gICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0cyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGlzdHMgPSBbXTtcbiAgfVxuXG4gIGFkZExpc3QobGlzdCkge1xuICAgIHRoaXMubGlzdHMucHVzaChsaXN0KTtcbiAgfVxuXG4gIGdldExpc3QobGlzdE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5saXN0cy5maW5kKChsaXN0KSA9PiBsaXN0LmdldE5hbWUoKSA9PT0gbGlzdE5hbWUpO1xuICB9XG5cbiAgZ2V0TGlzdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdHM7XG4gIH1cblxuICBzZXRMaXN0cyhsaXN0cykge1xuICAgIHRoaXMubGlzdHMgPSBsaXN0cztcbiAgfVxufVxuIiwiaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xuaW1wb3J0IExpc3RzIGZyb20gXCIuL0xpc3RzXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xuICBzdGF0aWMgc2F2ZUxpc3RzKGxpc3RzKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0c1wiLCBKU09OLnN0cmluZ2lmeShsaXN0cykpO1xuICB9XG5cbiAgc3RhdGljICNsb2FkTGlzdHNGcm9tU3RvcmFnZSgpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RzXCIpKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRMaXN0cygpIHtcbiAgICBjb25zdCBsaXN0cyA9IE9iamVjdC5hc3NpZ24obmV3IExpc3RzKCksIHRoaXMuI2xvYWRMaXN0c0Zyb21TdG9yYWdlKCkpO1xuXG4gICAgbGlzdHMuc2V0TGlzdHMoXG4gICAgICBsaXN0cy5nZXRMaXN0cygpLm1hcCgobGlzdCkgPT4gT2JqZWN0LmFzc2lnbihuZXcgTGlzdCgpLCBsaXN0KSlcbiAgICApO1xuXG4gICAgbGlzdHMuZ2V0TGlzdHMoKS5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICBsaXN0LnNldFRhc2tzKFxuICAgICAgICBsaXN0LmdldFRhc2tzLm1hcCgodGFzaykgPT4gT2JqZWN0LmFzc2lnbihuZXcgVGFzaygpLCB0YXNrKSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGlzdHM7XG4gIH1cblxuICBzdGF0aWMgYWRkTGlzdChsaXN0KSB7XG4gICAgY29uc3QgbGlzdHMgPSBTdG9yYWdlLmdldExpc3RzKCk7XG4gICAgbGlzdHMuYWRkTGlzdChsaXN0KTtcbiAgICBTdG9yYWdlLnNhdmVMaXN0cyhsaXN0cyk7XG4gIH1cblxuICBzdGF0aWMgYWRkVGFzayhsaXN0TmFtZSwgdGFzaykge1xuICAgIGNvbnN0IGxpc3RzID0gU3RvcmFnZS5nZXRMaXN0cygpO1xuICAgIGNvbnN0IHRhcmdldExpc3QgPSBsaXN0cy5nZXRMaXN0KGxpc3ROYW1lKTtcbiAgICB0YXJnZXRMaXN0LmFkZFRhc2sodGFzayk7XG4gICAgU3RvcmFnZS5zYXZlTGlzdHMobGlzdHMpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXRTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlO1xuICB9XG5cbiAgdG9nZ2xlU3RhdHVzKCkge1xuICAgIHRoaXMuYWN0aXZlID0gIXRoaXMuYWN0aXZlO1xuICB9XG59XG4iLCJpbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9TdG9yYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgc3RhdGljIGxvYWRUb0RvTGlzdCgpIHtcbiAgICBVSS5sb2FkTGlzdHMoKTtcbiAgICBVSS5zZXR1cEJ1dHRvbnMoKTtcbiAgICAvLyBVSS5sb2FkTGlzdChcIkFsbCB0YXNrc1wiKTtcbiAgfVxuXG4gIC8vIExvYWRpbmdcbiAgc3RhdGljIGxvYWRMaXN0cygpIHtcbiAgICBTdG9yYWdlLmdldExpc3RzKClcbiAgICAgIC5nZXRMaXN0cygpXG4gICAgICAuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgICBVSS5jcmVhdGVMaXN0KGxpc3QpO1xuICAgICAgfSk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlTGlzdChsaXN0KSB7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RzIHVsXCIpO1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpLmlubmVySFRNTCA9IGA8YnV0dG9uPiR7bGlzdC5nZXRMaXN0TmFtZSgpfTwvYnV0dG9uPmA7XG4gICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIFVJLnNldERpc3BsYXlMaXN0KGxpc3QpO1xuICAgIH0pO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXREaXNwbGF5TGlzdChsaXN0KSB7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtbmFtZVwiKTtcbiAgICBoMS50ZXh0Q29udGVudCA9IGxpc3QuZ2V0TGlzdE5hbWUoKTtcblxuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcbiAgICBsaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHRhc2tzLmlubmVySFRNTCArPSBgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGFza0NvbXBsZXRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0YXNrQ29tcGxldGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0YXNrVGV4dFwiIGZvcj1cInRhc2tDb21wbGV0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID4ke3Rhc2suZ2V0RGVzY3JpcHRpb24oKX08L2xhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+YDtcblxuICAgICAgY29uc3QgdGFza0RpdiA9IHRhc2tzLnF1ZXJ5U2VsZWN0b3IoXCIudGFza1wiKTtcbiAgICAgIHRhc2tEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGFzay50b2dnbGVTdGF0dXMoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHNldHVwQnV0dG9ucygpIHtcbiAgICAvLyBBZGQgbGlzdCBidXR0b25cbiAgICBjb25zdCBhZGRMaXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtbGlzdC1idG5cIik7XG4gICAgY29uc3QgYWRkTGlzdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtbGlzdC1wb3B1cFwiKTtcbiAgICBhZGRMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhZGRMaXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICBhZGRMaXN0UG9wdXAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVUkgZnJvbSBcIi4vbW9kdWxlcy9VSVwiO1xuXG5VSS5sb2FkVG9Eb0xpc3QoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==