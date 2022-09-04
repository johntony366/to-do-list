/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/dropdownMenu.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/dropdownMenu.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_palette_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./palette.css */ "./node_modules/css-loader/dist/cjs.js!./src/palette.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_palette_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".filters-list li,\n.lists-list li {\n  position: relative;\n}\n\n.tasks-list li {\n  position: relative;\n}\n\n.options button {\n  border: none;\n  width: 100%;\n}\n\n/****************/\n/* For sidebar */\n/****************/\n\n.sidebar .dropdown-menu-btn {\n  display: block;\n\n  border-radius: 4px;\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  z-index: 1;\n  top: 6px;\n  right: 6px;\n  background-color: transparent;\n  padding: 12px;\n  font-size: inherit;\n}\n\n.sidebar .dropdown-menu-btn:hover {\n  background-color: rgb(255, 255, 255, 0.3);\n}\n\n.sidebar .dropdown-menu-btn.active {\n  background-color: rgb(255, 255, 255, 0.5);\n}\n\n.sidebar .dropdown-menu-btn i {\n  position: absolute;\n  top: 4px;\n  left: 10px;\n}\n\n.sidebar .dropdown-btn {\n  text-align: left;\n  padding: 12px;\n  font-size: 0.9rem;\n  border-radius: 0px;\n\n  background-color: black;\n  color: var(--p1);\n}\n\n.sidebar .dropdown-btn:hover {\n  background-color: rgb(75, 75, 75, 1);\n}\n\n.sidebar .dropdown-btn.active {\n  background-color: rgb(105, 105, 105);\n}\n\n.lists-list .dropdownMenu {\n  opacity: 0;\n  pointer-events: none;\n\n  background-color: rgb(0, 0, 0, 0.7);\n  position: absolute;\n  z-index: 100;\n  top: 100%;\n  right: 0;\n\n  padding: 0.75rem;\n}\n\n.lists-list .dropdownMenu.active {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n/*************/\n/* For tasks */\n/*************/\n\n.tasks-list .dropdown-menu-btn {\n  border: none;\n  border-radius: 4px;\n\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  z-index: 1;\n  top: 6px;\n  right: 20px;\n  background-color: transparent;\n  padding: 12px;\n}\n\n.tasks-list .dropdown-menu-btn:hover {\n  background-color: rgb(255, 255, 255, 0.1);\n}\n\n.tasks-list .dropdown-menu-btn.active {\n  background-color: rgb(255, 255, 255, 0.3);\n}\n\n.tasks-list .dropdown-menu-btn i {\n  position: absolute;\n  top: 6px;\n  left: 10px;\n  color: var(--p1);\n}\n\n.tasks-list .dropdown-btn {\n  text-align: left;\n  padding: 12px;\n  padding-right: 24px;\n  font-size: 0.9rem;\n\n  background-color: black;\n  color: var(--p1);\n  width: 100%;\n}\n\n.tasks-list .dropdown-btn:hover {\n  background-color: rgb(75, 75, 75, 1);\n}\n\n.tasks-list .dropdownMenu {\n  opacity: 0;\n  pointer-events: none;\n\n  background-color: rgb(0, 0, 0, 0.4);\n  position: absolute;\n  z-index: 100;\n  top: 100%;\n  right: 0;\n\n  padding: 0.75rem;\n}\n\n.tasks-list .dropdownMenu .options li {\n  width: 100%;\n}\n\n.tasks-list .dropdownMenu.active {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n/* Media queries */\n@media (min-width: 980px) {\n  .sidebar .dropdown-menu-btn {\n    display: block;\n  }\n\n  .sidebar .dropdown-menu-btn {\n    right: 10px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/dropdownMenu.css"],"names":[],"mappings":"AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA,iBAAiB;AACjB,gBAAgB;AAChB,iBAAiB;;AAEjB;EACE,cAAc;;EAEd,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,UAAU;EACV,6BAA6B;EAC7B,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,iBAAiB;EACjB,kBAAkB;;EAElB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,UAAU;EACV,oBAAoB;;EAEpB,mCAAmC;EACnC,kBAAkB;EAClB,YAAY;EACZ,SAAS;EACT,QAAQ;;EAER,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,oBAAoB;AACtB;;AAEA,cAAc;AACd,cAAc;AACd,cAAc;;AAEd;EACE,YAAY;EACZ,kBAAkB;;EAElB,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,WAAW;EACX,6BAA6B;EAC7B,aAAa;AACf;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,iBAAiB;;EAEjB,uBAAuB;EACvB,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,UAAU;EACV,oBAAoB;;EAEpB,mCAAmC;EACnC,kBAAkB;EAClB,YAAY;EACZ,SAAS;EACT,QAAQ;;EAER,gBAAgB;AAClB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;EACV,oBAAoB;AACtB;;AAEA,kBAAkB;AAClB;EACE;IACE,cAAc;EAChB;;EAEA;IACE,WAAW;EACb;AACF","sourcesContent":["@import \"./palette.css\";\n\n.filters-list li,\n.lists-list li {\n  position: relative;\n}\n\n.tasks-list li {\n  position: relative;\n}\n\n.options button {\n  border: none;\n  width: 100%;\n}\n\n/****************/\n/* For sidebar */\n/****************/\n\n.sidebar .dropdown-menu-btn {\n  display: block;\n\n  border-radius: 4px;\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  z-index: 1;\n  top: 6px;\n  right: 6px;\n  background-color: transparent;\n  padding: 12px;\n  font-size: inherit;\n}\n\n.sidebar .dropdown-menu-btn:hover {\n  background-color: rgb(255, 255, 255, 0.3);\n}\n\n.sidebar .dropdown-menu-btn.active {\n  background-color: rgb(255, 255, 255, 0.5);\n}\n\n.sidebar .dropdown-menu-btn i {\n  position: absolute;\n  top: 4px;\n  left: 10px;\n}\n\n.sidebar .dropdown-btn {\n  text-align: left;\n  padding: 12px;\n  font-size: 0.9rem;\n  border-radius: 0px;\n\n  background-color: black;\n  color: var(--p1);\n}\n\n.sidebar .dropdown-btn:hover {\n  background-color: rgb(75, 75, 75, 1);\n}\n\n.sidebar .dropdown-btn.active {\n  background-color: rgb(105, 105, 105);\n}\n\n.lists-list .dropdownMenu {\n  opacity: 0;\n  pointer-events: none;\n\n  background-color: rgb(0, 0, 0, 0.7);\n  position: absolute;\n  z-index: 100;\n  top: 100%;\n  right: 0;\n\n  padding: 0.75rem;\n}\n\n.lists-list .dropdownMenu.active {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n/*************/\n/* For tasks */\n/*************/\n\n.tasks-list .dropdown-menu-btn {\n  border: none;\n  border-radius: 4px;\n\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  z-index: 1;\n  top: 6px;\n  right: 20px;\n  background-color: transparent;\n  padding: 12px;\n}\n\n.tasks-list .dropdown-menu-btn:hover {\n  background-color: rgb(255, 255, 255, 0.1);\n}\n\n.tasks-list .dropdown-menu-btn.active {\n  background-color: rgb(255, 255, 255, 0.3);\n}\n\n.tasks-list .dropdown-menu-btn i {\n  position: absolute;\n  top: 6px;\n  left: 10px;\n  color: var(--p1);\n}\n\n.tasks-list .dropdown-btn {\n  text-align: left;\n  padding: 12px;\n  padding-right: 24px;\n  font-size: 0.9rem;\n\n  background-color: black;\n  color: var(--p1);\n  width: 100%;\n}\n\n.tasks-list .dropdown-btn:hover {\n  background-color: rgb(75, 75, 75, 1);\n}\n\n.tasks-list .dropdownMenu {\n  opacity: 0;\n  pointer-events: none;\n\n  background-color: rgb(0, 0, 0, 0.4);\n  position: absolute;\n  z-index: 100;\n  top: 100%;\n  right: 0;\n\n  padding: 0.75rem;\n}\n\n.tasks-list .dropdownMenu .options li {\n  width: 100%;\n}\n\n.tasks-list .dropdownMenu.active {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n/* Media queries */\n@media (min-width: 980px) {\n  .sidebar .dropdown-menu-btn {\n    display: block;\n  }\n\n  .sidebar .dropdown-menu-btn {\n    right: 10px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/palette.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/palette.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --p0: #dccdf0;\n  --p1: #c8b6e2;\n  --p2: #a8a4ce;\n  --p3: #7a86b6;\n  --p3t: #7a86b663;\n  --p4: #495c83;\n  --p5: #394a6b;\n  --p6: #303c55;\n}", "",{"version":3,"sources":["webpack://./src/palette.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,aAAa;EACb,aAAa;EACb,aAAa;EACb,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,aAAa;AACf","sourcesContent":[":root {\n  --p0: #dccdf0;\n  --p1: #c8b6e2;\n  --p2: #a8a4ce;\n  --p3: #7a86b6;\n  --p3t: #7a86b663;\n  --p4: #495c83;\n  --p5: #394a6b;\n  --p6: #303c55;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_palette_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./palette.css */ "./node_modules/css-loader/dist/cjs.js!./src/palette.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/circle-regular.svg */ "./src/assets/circle-regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! assets/circle-check-regular.svg */ "./src/assets/circle-check-regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_palette_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: \"Lato\", sans-serif;\n  color: var(--p1);\n  background-color: var(--p4);\n  min-width: 250px;\n  font-size: 16px;\n}\n\nul {\n  list-style-type: none;\n}\n\na {\n  text-decoration: none;\n  color: var(--p1);\n}\n\np {\n  margin: 10px 0;\n}\n\nimg {\n  width: 100%;\n}\n\n/* Utility classes */\n.flex {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.input-text {\n  background-color: var(--p4);\n  color: inherit;\n  border: none;\n  border-radius: 12px;\n  margin-top: 16px;\n  padding: 4px 12px 4px 12px;\n  width: 100%;\n}\n\n/*  */\n\nbody > .container {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 100px 1fr 4fr 50px;\n  height: 100vh;\n}\n\n/* Header */\n.header {\n  gap: 8px;\n  grid-column: 1/ 3;\n  grid-row: 1 / 2;\n}\n\n.primary-heading {\n  font-size: 2rem;\n}\n\n/* Sidebar */\n.sidebar {\n  background-color: var(--p5);\n}\n\n.sidebar-content {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  margin: 16px 16px;\n  flex-direction: column;\n}\n\n.sidebar i {\n  color: black;\n}\n\n.sidebar button {\n  background-color: var(--p3);\n  border: none;\n  border-radius: 12px;\n  padding: 0px 8px;\n\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  text-align: left;\n\n  position: relative;\n  padding-left: 32px;\n}\n\n.sidebar .list-btn {\n  padding-right: 40px;\n}\n\n.sidebar button:hover {\n  background-color: var(--p2);\n}\n\n.sidebar button:active {\n  background-color: var(--p1);\n}\n\n.lists {\n  margin-top: 12px;\n  position: relative;\n}\n\n.lists h2,\n.filters h2 {\n  color: var(--p2);\n}\n\n.filters-list,\n.lists-list {\n  display: flex;\n  gap: 8px;\n  flex-direction: row;\n  justify-content: start;\n  flex-wrap: wrap;\n  margin-top: 8px;\n}\n\n.lists-list li {\n  position: relative;\n}\n\n.lists-list .btn-content.disabled {\n  visibility: hidden;\n}\n\n.lists-list .rename-list-popup {\n  display: none;\n  position: absolute;\n  top: 6px;\n  width: 100%;\n}\n\n.lists-list .rename-list-popup.active {\n  display: block;\n}\n\n.list-rename-input {\n  margin-top: 0px;\n}\n\n.filter-icon,\n.list-icon,\n.add-list-icon {\n  position: absolute;\n  top: 12px;\n  left: 10px;\n}\n\n.sidebar .add-list-btn {\n  gap: 4px;\n  padding: 0px 12px;\n  padding-left: 28px;\n  margin-top: 8px;\n  margin-bottom: 12px;\n}\n\n.add-list-btn.active {\n  visibility: hidden;\n}\n\n.add-list-popup {\n  display: none;\n  position: absolute;\n  top: 26px;\n  width: 100%;\n}\n\n.add-list-popup input[type=\"text\"] {\n  background-color: var(--p4);\n  color: inherit;\n  border: none;\n  border-radius: 12px;\n  margin-top: 16px;\n  padding: 4px 12px 4px 12px;\n  width: 150px;\n}\n\n.add-list-popup input[type=\"text\"]::placeholder {\n  color: var(--p3);\n  font-family: \"Lato\";\n}\n\n.add-list-popup.active {\n  display: block;\n}\n\n/* Main */\n.main {\n  grid-column: 1 / 2;\n  grid-row: 3 / 4;\n\n  padding: 32px;\n  background-color: var(--p6);\n}\n\n.main-header {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  margin-bottom: 24px;\n}\n\n.main-header input[type=\"text\"] {\n  width: 50%;\n}\n\n.addTaskForm {\n  flex: 1;\n  display: none;\n}\n\n.main-header input[type=\"text\"]::placeholder {\n  color: var(--p3);\n  font-family: \"Lato\";\n}\n\n.tasks-list {\n  display: grid;\n}\n\n.tasks-list li {\n  display: flex;\n  align-items: center;\n  width: 80%;\n}\n\n.task-content {\n  flex: 1;\n}\n\n.task-content.disabled {\n  visibility: hidden;\n}\n\n.rename-task-popup {\n  display: none;\n  position: absolute;\n  left: 20px;\n  top: 6px;\n}\n\n.rename-task-popup.active {\n  display: block;\n}\n\n.task-rename-input {\n  margin-top: 0px;\n}\n\n.task {\n  color: black;\n  border-radius: 24px;\n  width: 100%;\n  user-select: none;\n\n  position: relative;\n}\n\n.task input[type=\"checkbox\"] {\n  display: none;\n}\n\n.task label {\n  display: flex;\n  align-items: center;\n  padding: 8px 0px;\n  padding-left: 32px;\n  color: var(--p1);\n}\n\n.task label::before {\n  position: absolute;\n  content: \"\";\n  left: 12px;\n  width: 12px;\n  height: 12px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n}\n\n.task input[type=\"checkbox\"]:checked + label::before {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.task input[type=\"checkbox\"]:checked + label {\n  text-decoration: line-through;\n  color: var(--p2);\n}\n\n.task:hover {\n  background-color: var(--p3t);\n}\n\n/* Footer */\n.footer {\n  grid-column: 1 / 2;\n  grid-row: 4 / 5;\n\n  gap: 8px;\n  grid-column: 1 / 3;\n}\n\n/* Media queries */\n\n@media (min-width: 480px) {\n  .sidebar-content {\n    margin-left: 32px;\n  }\n}\n@media (min-width: 980px) {\n  body > .container {\n    grid-template-columns: 20% 80%;\n    grid-template-rows: 100px 1fr 50px;\n  }\n\n  .header {\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n  }\n\n  .sidebar {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n  }\n\n  .filters-list > li {\n    width: 80%;\n  }\n\n  .sidebar button {\n    width: 100%;\n  }\n\n  .sidebar-content {\n    justify-content: start;\n    margin: 32px;\n  }\n\n  .main {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n  }\n\n  .footer {\n    grid-column: 1 / 3;\n    grid-row: 3 / 4;\n  }\n\n  .filters-list,\n  .lists-list {\n    flex-direction: column;\n  }\n\n  .lists h2 {\n    margin-top: 24px;\n  }\n\n  .sidebar h2 {\n    margin-bottom: 12px;\n  }\n\n  .sidebar .add-list-btn {\n    margin-top: 16px;\n  }\n\n  .add-list-popup {\n    top: 59px;\n  }\n\n  .lists,\n  .filters {\n    width: 100%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato&display=swap\");\n@import \"./palette.css\";\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: \"Lato\", sans-serif;\n  color: var(--p1);\n  background-color: var(--p4);\n  min-width: 250px;\n  font-size: 16px;\n}\n\nul {\n  list-style-type: none;\n}\n\na {\n  text-decoration: none;\n  color: var(--p1);\n}\n\np {\n  margin: 10px 0;\n}\n\nimg {\n  width: 100%;\n}\n\n/* Utility classes */\n.flex {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.input-text {\n  background-color: var(--p4);\n  color: inherit;\n  border: none;\n  border-radius: 12px;\n  margin-top: 16px;\n  padding: 4px 12px 4px 12px;\n  width: 100%;\n}\n\n/*  */\n\nbody > .container {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 100px 1fr 4fr 50px;\n  height: 100vh;\n}\n\n/* Header */\n.header {\n  gap: 8px;\n  grid-column: 1/ 3;\n  grid-row: 1 / 2;\n}\n\n.primary-heading {\n  font-size: 2rem;\n}\n\n/* Sidebar */\n.sidebar {\n  background-color: var(--p5);\n}\n\n.sidebar-content {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  margin: 16px 16px;\n  flex-direction: column;\n}\n\n.sidebar i {\n  color: black;\n}\n\n.sidebar button {\n  background-color: var(--p3);\n  border: none;\n  border-radius: 12px;\n  padding: 0px 8px;\n\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  text-align: left;\n\n  position: relative;\n  padding-left: 32px;\n}\n\n.sidebar .list-btn {\n  padding-right: 40px;\n}\n\n.sidebar button:hover {\n  background-color: var(--p2);\n}\n\n.sidebar button:active {\n  background-color: var(--p1);\n}\n\n.lists {\n  margin-top: 12px;\n  position: relative;\n}\n\n.lists h2,\n.filters h2 {\n  color: var(--p2);\n}\n\n.filters-list,\n.lists-list {\n  display: flex;\n  gap: 8px;\n  flex-direction: row;\n  justify-content: start;\n  flex-wrap: wrap;\n  margin-top: 8px;\n}\n\n.lists-list li {\n  position: relative;\n}\n\n.lists-list .btn-content.disabled {\n  visibility: hidden;\n}\n\n.lists-list .rename-list-popup {\n  display: none;\n  position: absolute;\n  top: 6px;\n  width: 100%;\n}\n\n.lists-list .rename-list-popup.active {\n  display: block;\n}\n\n.list-rename-input {\n  margin-top: 0px;\n}\n\n.filter-icon,\n.list-icon,\n.add-list-icon {\n  position: absolute;\n  top: 12px;\n  left: 10px;\n}\n\n.sidebar .add-list-btn {\n  gap: 4px;\n  padding: 0px 12px;\n  padding-left: 28px;\n  margin-top: 8px;\n  margin-bottom: 12px;\n}\n\n.add-list-btn.active {\n  visibility: hidden;\n}\n\n.add-list-popup {\n  display: none;\n  position: absolute;\n  top: 26px;\n  width: 100%;\n}\n\n.add-list-popup input[type=\"text\"] {\n  background-color: var(--p4);\n  color: inherit;\n  border: none;\n  border-radius: 12px;\n  margin-top: 16px;\n  padding: 4px 12px 4px 12px;\n  width: 150px;\n}\n\n.add-list-popup input[type=\"text\"]::placeholder {\n  color: var(--p3);\n  font-family: \"Lato\";\n}\n\n.add-list-popup.active {\n  display: block;\n}\n\n/* Main */\n.main {\n  grid-column: 1 / 2;\n  grid-row: 3 / 4;\n\n  padding: 32px;\n  background-color: var(--p6);\n}\n\n.main-header {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  margin-bottom: 24px;\n}\n\n.main-header input[type=\"text\"] {\n  width: 50%;\n}\n\n.addTaskForm {\n  flex: 1;\n  display: none;\n}\n\n.main-header input[type=\"text\"]::placeholder {\n  color: var(--p3);\n  font-family: \"Lato\";\n}\n\n.tasks-list {\n  display: grid;\n}\n\n.tasks-list li {\n  display: flex;\n  align-items: center;\n  width: 80%;\n}\n\n.task-content {\n  flex: 1;\n}\n\n.task-content.disabled {\n  visibility: hidden;\n}\n\n.rename-task-popup {\n  display: none;\n  position: absolute;\n  left: 20px;\n  top: 6px;\n}\n\n.rename-task-popup.active {\n  display: block;\n}\n\n.task-rename-input {\n  margin-top: 0px;\n}\n\n.task {\n  color: black;\n  border-radius: 24px;\n  width: 100%;\n  user-select: none;\n\n  position: relative;\n}\n\n.task input[type=\"checkbox\"] {\n  display: none;\n}\n\n.task label {\n  display: flex;\n  align-items: center;\n  padding: 8px 0px;\n  padding-left: 32px;\n  color: var(--p1);\n}\n\n.task label::before {\n  position: absolute;\n  content: \"\";\n  left: 12px;\n  width: 12px;\n  height: 12px;\n  background-image: url(\"assets/circle-regular.svg\");\n  background-repeat: no-repeat;\n}\n\n.task input[type=\"checkbox\"]:checked + label::before {\n  background-image: url(\"assets/circle-check-regular.svg\");\n}\n\n.task input[type=\"checkbox\"]:checked + label {\n  text-decoration: line-through;\n  color: var(--p2);\n}\n\n.task:hover {\n  background-color: var(--p3t);\n}\n\n/* Footer */\n.footer {\n  grid-column: 1 / 2;\n  grid-row: 4 / 5;\n\n  gap: 8px;\n  grid-column: 1 / 3;\n}\n\n/* Media queries */\n\n@media (min-width: 480px) {\n  .sidebar-content {\n    margin-left: 32px;\n  }\n}\n@media (min-width: 980px) {\n  body > .container {\n    grid-template-columns: 20% 80%;\n    grid-template-rows: 100px 1fr 50px;\n  }\n\n  .header {\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n  }\n\n  .sidebar {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n  }\n\n  .filters-list > li {\n    width: 80%;\n  }\n\n  .sidebar button {\n    width: 100%;\n  }\n\n  .sidebar-content {\n    justify-content: start;\n    margin: 32px;\n  }\n\n  .main {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n  }\n\n  .footer {\n    grid-column: 1 / 3;\n    grid-row: 3 / 4;\n  }\n\n  .filters-list,\n  .lists-list {\n    flex-direction: column;\n  }\n\n  .lists h2 {\n    margin-top: 24px;\n  }\n\n  .sidebar h2 {\n    margin-bottom: 12px;\n  }\n\n  .sidebar .add-list-btn {\n    margin-top: 16px;\n  }\n\n  .add-list-popup {\n    top: 59px;\n  }\n\n  .lists,\n  .filters {\n    width: 100%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/dropdownMenu.css":
/*!******************************!*\
  !*** ./src/dropdownMenu.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dropdownMenu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./dropdownMenu.css */ "./node_modules/css-loader/dist/cjs.js!./src/dropdownMenu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_dropdownMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_dropdownMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_dropdownMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_dropdownMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

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
    this.array = [];
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  addTask(task) {
    task.setOriginList(this.name);
    this.array.push(task);
  }

  removeTask(taskName) {
    this.array.splice(this.getTaskIndex(taskName), 1);
  }

  getTask(taskName) {
    return this.array.find((task) => task.getName() === taskName);
  }

  getTaskIndex(taskName) {
    return this.array.findIndex((task) => task.getName() === taskName);
  }

  getArray() {
    return this.array;
  }

  setArray(array) {
    this.array = array;
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


/***/ }),

/***/ "./src/modules/LocalStorage.js":
/*!*************************************!*\
  !*** ./src/modules/LocalStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocalStorage)
/* harmony export */ });
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ "./src/modules/List.js");
/* harmony import */ var _Lists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lists */ "./src/modules/Lists.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");




class LocalStorage {
  static saveLists(lists) {
    localStorage.setItem("lists", JSON.stringify(lists));
  }

  static #loadLists() {
    return JSON.parse(localStorage.getItem("lists"));
  }

  static getListsObject() {
    const lists = Object.assign(new _Lists__WEBPACK_IMPORTED_MODULE_1__["default"](), this.#loadLists());

    lists.setArray(
      lists.getArray().map((list) => Object.assign(new _List__WEBPACK_IMPORTED_MODULE_0__["default"](), list))
    );

    lists.getArray().forEach((list) => {
      list.setArray(
        list.getArray().map((task) => Object.assign(new _Task__WEBPACK_IMPORTED_MODULE_2__["default"](), task))
      );
    });

    return lists;
  }

  static getListByName(listName) {
    const lists = LocalStorage.getListsObject();
    return lists.getListByName(listName);
  }

  static getListByTaskName(taskName) {
    const lists = LocalStorage.getListsObject();
    return lists.getListByTaskName(taskName);
  }

  static addList(list) {
    const lists = LocalStorage.getListsObject();
    lists.addList(list);
    LocalStorage.saveLists(lists);
  }

  static renameList(originalListName, newListName) {
    const lists = LocalStorage.getListsObject();
    lists.renameList(originalListName, newListName);
    LocalStorage.saveLists(lists);
  }

  static removeList(listName) {
    const lists = LocalStorage.getListsObject();
    lists.removeList(listName);
    LocalStorage.saveLists(lists);
  }

  static getTask(taskName) {
    const lists = LocalStorage.getListsObject();
    return lists.getTaskByTaskName(taskName);
  }

  static addTask(listName, task) {
    const lists = LocalStorage.getListsObject();
    const targetList = lists.getListByName(listName);
    targetList.addTask(task);
    LocalStorage.saveLists(lists);
  }

  static renameTask(listName, task, newTaskName) {
    const lists = LocalStorage.getListsObject();
    const targetList = lists.getListByName(listName);
    targetList.getTask(task.getName()).setName(newTaskName);
    LocalStorage.saveLists(lists);
  }

  static removeTask(listName, task) {
    const lists = LocalStorage.getListsObject();
    const list = lists.getListByName(listName);
    list.removeTask(task.getName());
    LocalStorage.saveLists(lists);
  }

  static containsTask(taskName) {
    const lists = LocalStorage.getListsObject();
    return lists.getListByTaskName(taskName);
  }

  static containsList(listName) {
    return LocalStorage.getListByName(listName);
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
  constructor(name) {
    this.name = name;
    this.active = true;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getStatus() {
    return this.active;
  }

  toggleStatus() {
    this.active = !this.active;
  }

  getOriginList() {
    return this.originListName;
  }

  setOriginList(listName) {
    this.originListName = listName;
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
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List */ "./src/modules/List.js");
/* harmony import */ var _LocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocalStorage */ "./src/modules/LocalStorage.js");
/* harmony import */ var _Validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Validator */ "./src/modules/Validator.js");





class UI {
  static loadToDoList() {
    UI.loadLists();
    UI.setupButtons();
    UI.loadAllTasks();
  }

  // Loading
  static loadLists() {
    const ul = document.querySelector(".lists ul");
    ul.replaceChildren();

    _LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].getListsObject()
      .getArray()
      .forEach((list) => {
        UI.createList(list.getName());
      });
  }

  static createList(listName) {
    const ul = document.querySelector(".lists-list");
    const li = document.createElement("li");

    li.innerHTML = `
    <div class="btn-content">
      <button class="list-btn">
        <i class="fa-regular fa-note-sticky list-icon"></i>
        <p>${listName}</p>
      </button>
      <div class="dropdown">
        <button class="dropdown-menu-btn">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>
        <div class="dropdownMenu">
          <ul class="options">
              <li><button class="dropdown-btn list-edit">Edit</button></li>
              <li><button class="dropdown-btn list-delete">Delete</button></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="rename-list-popup">
      <form class="rename-list-form">
        <input
          type="text"
          class="input-text list-rename-input"
          value="${listName}"
        />
        <input class="submitRenameListForm" type="submit" hidden />
      </form>
    </div>
    `;
    li.setAttribute("id", listName.replace(/\s/g, ""));
    ul.appendChild(li);

    const listEdit = li.querySelector(".list-edit");
    const renameListForm = li.querySelector(".rename-list-form");
    const listDelete = li.querySelector(".list-delete");
    const btnContent = li.querySelector(".btn-content");

    const listDropdownMenuButton = li.querySelector(".dropdown-menu-btn");
    const listDropdownMenu = li.querySelector(".dropdownMenu");

    listDropdownMenuButton.addEventListener("click", (e) => {
      listDropdownMenuButton.classList.toggle("active");
      listDropdownMenu.classList.toggle("active");
      document.addEventListener("click", (e1) => {
        if (e1.target !== listDropdownMenu) {
          listDropdownMenuButton.classList.remove("active");
          listDropdownMenu.classList.remove("active");
        }
      });
      e.stopPropagation();
    });

    btnContent.addEventListener("click", () => {
      UI.enableTaskInput();
      UI.loadFreshList(listName);
    });

    listDelete.addEventListener("click", (e) => {
      _LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].removeList(listName);
      UI.loadLists();

      const activeListTitle = UI.getActiveListTitle();
      if (listName === activeListTitle || activeListTitle === "All tasks") {
        UI.loadAllTasks();
      } else if (activeListTitle === "Completed tasks") {
        UI.loadAllCompletedTasks();
      } else if (activeListTitle === "Pending tasks") {
        UI.loadAllPendingTasks();
      }
      e.stopPropagation();
    });

    listEdit.addEventListener("click", (e) => {
      UI.enableRenameListPopup(listName);

      const listRenameInput = li.querySelector(".list-rename-input");

      renameListForm.addEventListener("submit", (e1) => {
        e1.preventDefault();

        const newListName = listRenameInput.value;

        _Validator__WEBPACK_IMPORTED_MODULE_3__["default"].validateRenameList(listRenameInput, listName);
        if (listRenameInput.validity.valid) {
          UI.disableRenameListPopup();
          _LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].renameList(listName, newListName);
          UI.loadLists();

          const activeListTitle = UI.getActiveListTitle();

          if (activeListTitle === listName) {
            UI.loadFreshList(newListName);
          } else if (activeListTitle === "All tasks") {
            UI.loadAllTasks();
          } else if (activeListTitle === "Completed tasks") {
            UI.loadAllCompletedTasks();
          } else if (activeListTitle === "Pending tasks") {
            UI.loadAllPendingTasks();
          }

          listRenameInput.value = "";
        } else {
          listRenameInput.reportValidity();
          listRenameInput.addEventListener(
            "input",
            () => {
              listRenameInput.setCustomValidity("");
            },
            { once: true }
          );
        }

        e1.stopPropagation();
      });
      e.stopPropagation();
    });
  }

  static enableTaskInput() {
    const addTaskForm = document.querySelector(".addTaskForm");
    addTaskForm.style.display = "block";
  }

  static disableTaskInput() {
    const addTaskForm = document.querySelector(".addTaskForm");
    addTaskForm.style.display = "none";
  }

  static loadAllTasks(flags) {
    UI.disableTaskInput();
    UI.resetDisplayedTasks();
    if (flags) {
      UI.setActiveListTitle(flags.listName);
    } else {
      UI.setActiveListTitle("All tasks");
    }

    const lists = _LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].getListsObject();
    lists.getArray().forEach((list) => {
      UI.loadAdditionalList(list.getName(), flags);
    });
    UI.setupTaskToggle();
    UI.renderAllTaskStatuses(flags);
  }

  static loadAllCompletedTasks() {
    UI.loadAllTasks({ listName: "Completed tasks", taskIsActive: false });
  }

  static loadAllPendingTasks() {
    UI.loadAllTasks({ listName: "Pending tasks", taskIsActive: true });
  }

  static loadFreshList(listName) {
    UI.setActiveListTitle(listName);
    UI.resetDisplayedTasks();
    UI.renderTasks(listName);
    UI.renderTaskStatuses(listName);

    UI.setupTaskToggle();
  }

  static loadAdditionalList(listName, flags) {
    UI.renderTasks(listName, flags);
  }

  static getActiveListTitle() {
    const h1 = document.querySelector(".list-name");
    return h1.textContent;
  }

  static setActiveListTitle(listName) {
    const h1 = document.querySelector(".list-name");
    h1.textContent = listName;
  }

  static resetDisplayedTasks() {
    const tasks = document.querySelector(".tasks-list");
    tasks.replaceChildren();
  }

  static renderTasks(listName, flags) {
    const tasks = document.querySelector(".tasks-list");
    const list = _LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].getListByName(listName);

    list.getArray().forEach((task, i) => {
      if (flags) {
        if (flags.taskIsActive) {
          if (!task.getStatus()) {
            return;
          }
        } else if (!flags.taskIsActive) {
          if (task.getStatus()) {
            return;
          }
        }
      }

      const taskName = task.getName();
      const li = document.createElement("li");
      li.innerHTML = `
      <div class="task-content">
        <div class="task">
          <input
            type="checkbox"
            name="taskCompleted"
            id="${listName.replace(/\s/g, "")}Task${i}"
          />
          <label class="taskText" for="${listName.replace(/\s/g, "")}Task${i}"
            >${taskName}</label
          >
        </div>
        <button class="dropdown-menu-btn">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>
        <div class="dropdownMenu">
          <ul class="options">
            <li><button class="dropdown-btn task-edit">Edit</button></li>
            <li><button class="dropdown-btn task-delete">Delete</button></li>
          </ul>
        </div>
      </div>
      <div class="rename-task-popup">
        <form class="rename-task-form">
          <input
            type="text"
            class="input-text task-rename-input"
            value="${taskName}"
          />
          <input class="submitRenameTaskForm" type="submit" hidden />
        </form>
      </div>
                           `;
      li.setAttribute("class", `${taskName.replace(/\s/g, "")}`);
      tasks.appendChild(li);

      const taskEdit = li.querySelector(".task-edit");
      const renameTaskForm = li.querySelector(".rename-task-form");
      const taskDelete = li.querySelector(".task-delete");

      const taskDropdownMenuButton = li.querySelector(".dropdown-menu-btn");
      const taskDropdownMenu = li.querySelector(".dropdownMenu");

      taskDropdownMenuButton.addEventListener("click", (e) => {
        taskDropdownMenuButton.classList.toggle("active");
        taskDropdownMenu.classList.toggle("active");
        document.addEventListener("click", (e1) => {
          if (e1.target !== taskDropdownMenu) {
            taskDropdownMenuButton.classList.remove("active");
            taskDropdownMenu.classList.remove("active");
          }
        });
        e.stopPropagation();
      });

      taskDelete.addEventListener("click", (e) => {
        _LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].removeTask(listName, task);
        e.stopPropagation();

        if (UI.getActiveListTitle() === "All tasks") {
          UI.loadAllTasks();
        } else if (UI.getActiveListTitle() === "Completed tasks") {
          UI.loadAllCompletedTasks({
            listName: "Completed tasks",
            taskIsActive: false,
          });
        } else if (UI.getActiveListTitle() === "Pending tasks") {
          UI.loadAllPendingTasks({
            listName: "Pending tasks",
            taskIsActive: true,
          });
        } else {
          UI.resetDisplayedTasks();
          UI.renderTasks(listName);
          UI.renderTaskStatuses(listName);
        }
      });

      taskEdit.addEventListener("click", (e) => {
        UI.enableRenameTaskPopup(taskName); // Need to implement

        const taskRenameInput = li.querySelector(".task-rename-input");
        renameTaskForm.addEventListener("submit", (e1) => {
          e1.preventDefault();

          _Validator__WEBPACK_IMPORTED_MODULE_3__["default"].validateRenameTask(taskRenameInput, taskName);
          if (taskRenameInput.validity.valid) {
            UI.disableRenameTaskPopup();
            _LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].renameTask(listName, task, taskRenameInput.value);
            if (UI.getActiveListTitle() === "All tasks") {
              UI.loadAllTasks();
            } else if (UI.getActiveListTitle() === "Completed tasks") {
              UI.loadAllCompletedTasks({
                listName: "Completed tasks",
                taskIsActive: false,
              });
            } else if (UI.getActiveListTitle() === "Pending tasks") {
              UI.loadAllPendingTasks({
                listName: "Pending tasks",
                taskIsActive: true,
              });
            } else {
              UI.loadFreshList(listName);
            }
            taskRenameInput.value = "";
          } else {
            taskRenameInput.reportValidity();
            taskRenameInput.addEventListener(
              "input",
              () => {
                taskRenameInput.setCustomValidity("");
              },
              { once: true }
            );
          }
          e1.stopPropagation();
        });
        e.stopPropagation();
      });
    });
  }

  static renderTaskStatuses(listName) {
    const list = _LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].getListByName(listName);
    list.getArray().forEach((task, i) => {
      if (!task.getStatus()) {
        // If task is not active
        document.querySelector(
          `#${task.getOriginList().replace(/\s/g, "")}Task${i}`
        ).checked = true;
      }
    });
  }

  static renderAllTaskStatuses(flags) {
    const lists = _LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].getListsObject();
    lists.getArray().forEach((list) => {
      list.getArray().forEach((task, i) => {
        if (!task.getStatus()) {
          if (flags && flags.taskIsActive === true) {
            return;
          }

          document.querySelector(
            `#${task.getOriginList().replace(/\s/g, "")}Task${i}`
          ).checked = true;
        }
      });
    });
  }

  static setupTaskToggle() {
    const tasks = document.querySelector(".tasks-list");
    const taskDivs = tasks.querySelectorAll(".task input");

    taskDivs.forEach((taskDiv) => {
      taskDiv.addEventListener("click", (e) => {
        const lists = _LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].getListsObject();
        const taskName = e.target.labels[0].textContent;
        const list = lists.getListByTaskName(taskName);
        const task = list.getTask(taskName);
        task.toggleStatus();

        _LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].saveLists(lists);
        e.stopPropagation();
      });
    });
  }

  static setupButtons() {
    // Add list button
    const listInput = document.querySelector(".add-list-form .list-name-input");
    const taskInput = document.querySelector("#inputTaskText");

    const addListForm = document.querySelector(".add-list-form");
    const addListButton = document.querySelector(".add-list-btn");

    const addTaskForm = document.querySelector(".addTaskForm");
    const allTasksButton = document.querySelector(".all-tasks-btn");
    const allCompletedTasksButton = document.querySelector(
      ".all-completed-tasks-btn"
    );
    const allPendingTasksButton = document.querySelector(
      ".all-pending-tasks-btn"
    );

    allTasksButton.addEventListener("click", () => {
      UI.loadAllTasks();
    });

    allCompletedTasksButton.addEventListener("click", () => {
      UI.loadAllCompletedTasks();
    });

    allPendingTasksButton.addEventListener("click", () => {
      UI.loadAllPendingTasks();
    });

    addListButton.addEventListener("click", (e) => {
      UI.enableAddListPopup();
      e.stopPropagation();
    });

    addListForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const listName = listInput.value;
      const newList = new _List__WEBPACK_IMPORTED_MODULE_1__["default"](listName);

      _Validator__WEBPACK_IMPORTED_MODULE_3__["default"].validateList(listInput);
      if (listInput.validity.valid) {
        _LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].addList(newList);
        UI.createList(listName);

        UI.disableAddListPopup();
      } else {
        listInput.reportValidity();
        listInput.addEventListener(
          "input",
          () => {
            listInput.setCustomValidity("");
          },
          { once: true }
        );
      }
    });

    addTaskForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const newTask = new _Task__WEBPACK_IMPORTED_MODULE_0__["default"](taskInput.value);
      const listName = document.querySelector(".list-name").textContent;

      _Validator__WEBPACK_IMPORTED_MODULE_3__["default"].validateTask(taskInput);
      if (taskInput.validity.valid) {
        _LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].addTask(listName, newTask);

        UI.loadFreshList(listName);
        UI.clearTaskInput();
      } else {
        taskInput.reportValidity();
        taskInput.addEventListener(
          "input",
          () => {
            taskInput.setCustomValidity("");
          },
          { once: true }
        );
      }
    });
  }

  static enableAddListPopup() {
    const addListButton = document.querySelector(".add-list-btn");
    const addListPopup = document.querySelector(".add-list-popup");
    const listNameInput = addListPopup.querySelector(".list-name-input");

    addListButton.classList.add("active");
    addListPopup.classList.add("active");
    listNameInput.focus();

    document.addEventListener("click", UI.exitAddListPopUpWhenLoseFocus);
  }

  static disableAddListPopup() {
    document.removeEventListener("click", UI.exitAddListPopUpWhenLoseFocus);

    const addListButton = document.querySelector(".add-list-btn");
    const addListPopup = document.querySelector(".add-list-popup");
    const listNameInput = addListPopup.querySelector(".list-name-input");

    addListButton.classList.remove("active");
    addListPopup.classList.remove("active");
    listNameInput.value = "";
  }

  static enableRenameListPopup(listName) {
    const targetList = document.querySelector(
      `#${listName.replace(/\s/g, "")}`
    );
    const btnContent = targetList.querySelector(".btn-content");
    const popup = targetList.querySelector(".rename-list-popup");
    const listRenameInput = targetList.querySelector(".list-rename-input");

    targetList.classList.add("edited-list");
    btnContent.classList.add("disabled");
    popup.classList.add("active");
    listRenameInput.focus();

    document.addEventListener("click", UI.exitRenameListPopUpWhenLoseFocus);
  }

  static disableRenameListPopup() {
    document.removeEventListener("click", UI.exitRenameListPopUpWhenLoseFocus);

    const targetList = document.querySelector(".edited-list");
    const btnContent = targetList.querySelector(".btn-content");
    const popup = targetList.querySelector(".rename-list-popup");

    targetList.classList.remove("edited-list");
    btnContent.classList.remove("disabled");
    popup.classList.remove("active");
  }

  static enableRenameTaskPopup(taskName) {
    const targetLi = document.querySelector(`.${taskName.replace(/\s/g, "")}`);
    const taskContent = targetLi.querySelector(".task-content");
    const popup = targetLi.querySelector(".rename-task-popup");
    const taskRenameInput = targetLi.querySelector(".task-rename-input");

    targetLi.classList.add("edited-task");
    taskContent.classList.add("disabled");
    popup.classList.add("active");
    taskRenameInput.focus();

    document.addEventListener("click", UI.exitRenameTaskPopUpWhenLoseFocus);
  }

  static disableRenameTaskPopup() {
    document.removeEventListener("click", UI.exitRenameTaskPopUpWhenLoseFocus);

    const targetLi = document.querySelector(".edited-task");
    const taskContent = targetLi.querySelector(".task-content");
    const popup = targetLi.querySelector(".rename-task-popup");

    targetLi.classList.remove("edited-task");
    taskContent.classList.remove("disabled");
    popup.classList.remove("active");
  }

  static exitAddListPopUpWhenLoseFocus(e) {
    if (
      e.target !== document.querySelector(".list-name-input") &&
      e.target !== document.querySelector("input.submitAddListForm")
    ) {
      UI.disableAddListPopup();
    }
  }

  static exitRenameListPopUpWhenLoseFocus(e) {
    if (
      !e.target.matches(".list-rename-input") &&
      !e.target.matches("input.submitRenameListForm")
    ) {
      UI.disableRenameListPopup();
    }
  }

  static exitRenameTaskPopUpWhenLoseFocus(e) {
    if (
      !e.target.matches(".task-rename-input") &&
      !e.target.matches("input.submitRenameTaskForm")
    ) {
      UI.disableRenameTaskPopup();
    }
  }

  static clearTaskInput() {
    const inputTaskText = document.querySelector("#inputTaskText");
    inputTaskText.value = "";
  }
}


/***/ }),

/***/ "./src/modules/Validator.js":
/*!**********************************!*\
  !*** ./src/modules/Validator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Validator)
/* harmony export */ });
/* harmony import */ var _LocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocalStorage */ "./src/modules/LocalStorage.js");


class Validator {
  static validateTask(taskInput) {
    if (!/\S/.test(taskInput.value)) {
      taskInput.setCustomValidity("Invalid task name!");
    } else if (_LocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"].containsTask(taskInput.value)) {
      taskInput.setCustomValidity("Task name must be unique");
    } else {
      taskInput.setCustomValidity("");
    }
  }

  static validateRenameTask(taskRenameInput, taskName) {
    const list = _LocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"].getListByTaskName(taskName);
    const listName = list.getName();
    const task = list.getTask(taskName);

    _LocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"].removeTask(listName, task);
    Validator.validateTask(taskRenameInput);
    _LocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"].addTask(listName, task);
  }

  static validateList(listInput) {
    if (!/\S/.test(listInput.value)) {
      listInput.setCustomValidity("Invalid list name!");
    } else if (
      ["All tasks", "Completed tasks", "Pending tasks"].find(
        (taskName) => listInput.value === taskName
      )
    ) {
      listInput.setCustomValidity(
        `"${listInput.value}" is a reserved list name`
      );
    } else if (_LocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"].containsList(listInput.value)) {
      listInput.setCustomValidity("List name must be unique");
    } else {
      listInput.setCustomValidity("");
    }
  }

  static validateRenameList(listRenameInput, listName) {
    const list = _LocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"].getListByName(listName);
    _LocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"].removeList(listName);
    Validator.validateList(listRenameInput);
    _LocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"].addList(list);
  }
}


/***/ }),

/***/ "./src/assets/circle-check-regular.svg":
/*!*********************************************!*\
  !*** ./src/assets/circle-check-regular.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11d8987ec205b22a6275.svg";

/***/ }),

/***/ "./src/assets/circle-regular.svg":
/*!***************************************!*\
  !*** ./src/assets/circle-regular.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f37339968b638945afb7.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _dropdownMenu_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdownMenu.css */ "./src/dropdownMenu.css");




_modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"].loadToDoList();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xOTBiOTg1ZmFlMjRmZGEyNDNiMy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDYztBQUN2Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDBCQUEwQix3RkFBaUM7QUFDM0Q7QUFDQSw2RUFBNkUsdUJBQXVCLEdBQUcsb0JBQW9CLHVCQUF1QixHQUFHLHFCQUFxQixpQkFBaUIsZ0JBQWdCLEdBQUcsOEZBQThGLG1CQUFtQix5QkFBeUIsZUFBZSxnQkFBZ0IsdUJBQXVCLGVBQWUsYUFBYSxlQUFlLGtDQUFrQyxrQkFBa0IsdUJBQXVCLEdBQUcsdUNBQXVDLDhDQUE4QyxHQUFHLHdDQUF3Qyw4Q0FBOEMsR0FBRyxtQ0FBbUMsdUJBQXVCLGFBQWEsZUFBZSxHQUFHLDRCQUE0QixxQkFBcUIsa0JBQWtCLHNCQUFzQix1QkFBdUIsOEJBQThCLHFCQUFxQixHQUFHLGtDQUFrQyx5Q0FBeUMsR0FBRyxtQ0FBbUMseUNBQXlDLEdBQUcsK0JBQStCLGVBQWUseUJBQXlCLDBDQUEwQyx1QkFBdUIsaUJBQWlCLGNBQWMsYUFBYSx1QkFBdUIsR0FBRyxzQ0FBc0MsZUFBZSx5QkFBeUIsR0FBRyx5RkFBeUYsaUJBQWlCLHVCQUF1QixpQkFBaUIsZ0JBQWdCLHVCQUF1QixlQUFlLGFBQWEsZ0JBQWdCLGtDQUFrQyxrQkFBa0IsR0FBRywwQ0FBMEMsOENBQThDLEdBQUcsMkNBQTJDLDhDQUE4QyxHQUFHLHNDQUFzQyx1QkFBdUIsYUFBYSxlQUFlLHFCQUFxQixHQUFHLCtCQUErQixxQkFBcUIsa0JBQWtCLHdCQUF3QixzQkFBc0IsOEJBQThCLHFCQUFxQixnQkFBZ0IsR0FBRyxxQ0FBcUMseUNBQXlDLEdBQUcsK0JBQStCLGVBQWUseUJBQXlCLDBDQUEwQyx1QkFBdUIsaUJBQWlCLGNBQWMsYUFBYSx1QkFBdUIsR0FBRywyQ0FBMkMsZ0JBQWdCLEdBQUcsc0NBQXNDLGVBQWUseUJBQXlCLEdBQUcsb0RBQW9ELGlDQUFpQyxxQkFBcUIsS0FBSyxtQ0FBbUMsa0JBQWtCLEtBQUssR0FBRyxTQUFTLHdGQUF3RixZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxZQUFZLGFBQWEsY0FBYyxNQUFNLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFVBQVUsVUFBVSxXQUFXLEtBQUssVUFBVSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksY0FBYyxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLEtBQUssbURBQW1ELHVDQUF1Qyx1QkFBdUIsR0FBRyxvQkFBb0IsdUJBQXVCLEdBQUcscUJBQXFCLGlCQUFpQixnQkFBZ0IsR0FBRyw4RkFBOEYsbUJBQW1CLHlCQUF5QixlQUFlLGdCQUFnQix1QkFBdUIsZUFBZSxhQUFhLGVBQWUsa0NBQWtDLGtCQUFrQix1QkFBdUIsR0FBRyx1Q0FBdUMsOENBQThDLEdBQUcsd0NBQXdDLDhDQUE4QyxHQUFHLG1DQUFtQyx1QkFBdUIsYUFBYSxlQUFlLEdBQUcsNEJBQTRCLHFCQUFxQixrQkFBa0Isc0JBQXNCLHVCQUF1Qiw4QkFBOEIscUJBQXFCLEdBQUcsa0NBQWtDLHlDQUF5QyxHQUFHLG1DQUFtQyx5Q0FBeUMsR0FBRywrQkFBK0IsZUFBZSx5QkFBeUIsMENBQTBDLHVCQUF1QixpQkFBaUIsY0FBYyxhQUFhLHVCQUF1QixHQUFHLHNDQUFzQyxlQUFlLHlCQUF5QixHQUFHLHlGQUF5RixpQkFBaUIsdUJBQXVCLGlCQUFpQixnQkFBZ0IsdUJBQXVCLGVBQWUsYUFBYSxnQkFBZ0Isa0NBQWtDLGtCQUFrQixHQUFHLDBDQUEwQyw4Q0FBOEMsR0FBRywyQ0FBMkMsOENBQThDLEdBQUcsc0NBQXNDLHVCQUF1QixhQUFhLGVBQWUscUJBQXFCLEdBQUcsK0JBQStCLHFCQUFxQixrQkFBa0Isd0JBQXdCLHNCQUFzQiw4QkFBOEIscUJBQXFCLGdCQUFnQixHQUFHLHFDQUFxQyx5Q0FBeUMsR0FBRywrQkFBK0IsZUFBZSx5QkFBeUIsMENBQTBDLHVCQUF1QixpQkFBaUIsY0FBYyxhQUFhLHVCQUF1QixHQUFHLDJDQUEyQyxnQkFBZ0IsR0FBRyxzQ0FBc0MsZUFBZSx5QkFBeUIsR0FBRyxvREFBb0QsaUNBQWlDLHFCQUFxQixLQUFLLG1DQUFtQyxrQkFBa0IsS0FBSyxHQUFHLHFCQUFxQjtBQUNydE47QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1R2QztBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsaURBQWlELGtCQUFrQixrQkFBa0Isa0JBQWtCLGtCQUFrQixxQkFBcUIsa0JBQWtCLGtCQUFrQixrQkFBa0IsR0FBRyxPQUFPLGtGQUFrRixVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsZ0NBQWdDLGtCQUFrQixrQkFBa0Isa0JBQWtCLGtCQUFrQixxQkFBcUIsa0JBQWtCLGtCQUFrQixrQkFBa0IsR0FBRyxtQkFBbUI7QUFDNWpCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDMEc7QUFDakI7QUFDYztBQUNQO0FBQ2hHLDRDQUE0QyxpSUFBNEM7QUFDeEYsNENBQTRDLDZJQUFrRDtBQUM5Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGtIQUFrSDtBQUNsSCwwQkFBMEIsd0ZBQWlDO0FBQzNELHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLG9FQUFvRSwyQkFBMkIsZUFBZSxjQUFjLEdBQUcsVUFBVSxzQ0FBc0MscUJBQXFCLGdDQUFnQyxxQkFBcUIsb0JBQW9CLEdBQUcsUUFBUSwwQkFBMEIsR0FBRyxPQUFPLDBCQUEwQixxQkFBcUIsR0FBRyxPQUFPLG1CQUFtQixHQUFHLFNBQVMsZ0JBQWdCLEdBQUcsa0NBQWtDLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsaUJBQWlCLGdDQUFnQyxtQkFBbUIsaUJBQWlCLHdCQUF3QixxQkFBcUIsK0JBQStCLGdCQUFnQixHQUFHLGlDQUFpQyxrQkFBa0IsK0JBQStCLDJDQUEyQyxrQkFBa0IsR0FBRywyQkFBMkIsYUFBYSxzQkFBc0Isb0JBQW9CLEdBQUcsc0JBQXNCLG9CQUFvQixHQUFHLDZCQUE2QixnQ0FBZ0MsR0FBRyxzQkFBc0IsdUJBQXVCLG9CQUFvQixvQkFBb0IsNEJBQTRCLDRCQUE0QixzQkFBc0IsMkJBQTJCLEdBQUcsZ0JBQWdCLGlCQUFpQixHQUFHLHFCQUFxQixnQ0FBZ0MsaUJBQWlCLHdCQUF3QixxQkFBcUIsb0JBQW9CLHdCQUF3QixhQUFhLHVCQUF1Qix5QkFBeUIsdUJBQXVCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLDJCQUEyQixnQ0FBZ0MsR0FBRyw0QkFBNEIsZ0NBQWdDLEdBQUcsWUFBWSxxQkFBcUIsdUJBQXVCLEdBQUcsNkJBQTZCLHFCQUFxQixHQUFHLGlDQUFpQyxrQkFBa0IsYUFBYSx3QkFBd0IsMkJBQTJCLG9CQUFvQixvQkFBb0IsR0FBRyxvQkFBb0IsdUJBQXVCLEdBQUcsdUNBQXVDLHVCQUF1QixHQUFHLG9DQUFvQyxrQkFBa0IsdUJBQXVCLGFBQWEsZ0JBQWdCLEdBQUcsMkNBQTJDLG1CQUFtQixHQUFHLHdCQUF3QixvQkFBb0IsR0FBRyxnREFBZ0QsdUJBQXVCLGNBQWMsZUFBZSxHQUFHLDRCQUE0QixhQUFhLHNCQUFzQix1QkFBdUIsb0JBQW9CLHdCQUF3QixHQUFHLDBCQUEwQix1QkFBdUIsR0FBRyxxQkFBcUIsa0JBQWtCLHVCQUF1QixjQUFjLGdCQUFnQixHQUFHLDBDQUEwQyxnQ0FBZ0MsbUJBQW1CLGlCQUFpQix3QkFBd0IscUJBQXFCLCtCQUErQixpQkFBaUIsR0FBRyx1REFBdUQscUJBQXFCLDBCQUEwQixHQUFHLDRCQUE0QixtQkFBbUIsR0FBRyx1QkFBdUIsdUJBQXVCLG9CQUFvQixvQkFBb0IsZ0NBQWdDLEdBQUcsa0JBQWtCLGtCQUFrQiwyQkFBMkIsY0FBYywwQkFBMEIsR0FBRyx1Q0FBdUMsZUFBZSxHQUFHLGtCQUFrQixZQUFZLGtCQUFrQixHQUFHLG9EQUFvRCxxQkFBcUIsMEJBQTBCLEdBQUcsaUJBQWlCLGtCQUFrQixHQUFHLG9CQUFvQixrQkFBa0Isd0JBQXdCLGVBQWUsR0FBRyxtQkFBbUIsWUFBWSxHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyx3QkFBd0Isa0JBQWtCLHVCQUF1QixlQUFlLGFBQWEsR0FBRywrQkFBK0IsbUJBQW1CLEdBQUcsd0JBQXdCLG9CQUFvQixHQUFHLFdBQVcsaUJBQWlCLHdCQUF3QixnQkFBZ0Isc0JBQXNCLHlCQUF5QixHQUFHLG9DQUFvQyxrQkFBa0IsR0FBRyxpQkFBaUIsa0JBQWtCLHdCQUF3QixxQkFBcUIsdUJBQXVCLHFCQUFxQixHQUFHLHlCQUF5Qix1QkFBdUIsa0JBQWtCLGVBQWUsZ0JBQWdCLGlCQUFpQixzRUFBc0UsaUNBQWlDLEdBQUcsNERBQTRELHNFQUFzRSxHQUFHLG9EQUFvRCxrQ0FBa0MscUJBQXFCLEdBQUcsaUJBQWlCLGlDQUFpQyxHQUFHLDJCQUEyQix1QkFBdUIsb0JBQW9CLGVBQWUsdUJBQXVCLEdBQUcsc0RBQXNELHNCQUFzQix3QkFBd0IsS0FBSyxHQUFHLDZCQUE2Qix1QkFBdUIscUNBQXFDLHlDQUF5QyxLQUFLLGVBQWUseUJBQXlCLHNCQUFzQixLQUFLLGdCQUFnQix5QkFBeUIsc0JBQXNCLEtBQUssMEJBQTBCLGlCQUFpQixLQUFLLHVCQUF1QixrQkFBa0IsS0FBSyx3QkFBd0IsNkJBQTZCLG1CQUFtQixLQUFLLGFBQWEseUJBQXlCLHNCQUFzQixLQUFLLGVBQWUseUJBQXlCLHNCQUFzQixLQUFLLHFDQUFxQyw2QkFBNkIsS0FBSyxpQkFBaUIsdUJBQXVCLEtBQUssbUJBQW1CLDBCQUEwQixLQUFLLDhCQUE4Qix1QkFBdUIsS0FBSyx1QkFBdUIsZ0JBQWdCLEtBQUssMkJBQTJCLGtCQUFrQixLQUFLLEdBQUcsU0FBUyxtRkFBbUYsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxVQUFVLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxVQUFVLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxZQUFZLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksY0FBYyxXQUFXLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sVUFBVSxLQUFLLFlBQVksWUFBWSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLFlBQVksVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUss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O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBOEI7QUFDUjtBQUNNOztBQUU1QixnRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZHJvcGRvd25NZW51LmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3BhbGV0dGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kcm9wZG93bk1lbnUuY3NzPzZiN2QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvTGlzdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGFsZXR0ZS5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5maWx0ZXJzLWxpc3QgbGksXFxuLmxpc3RzLWxpc3QgbGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFza3MtbGlzdCBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5vcHRpb25zIGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKiovXFxuLyogRm9yIHNpZGViYXIgKi9cXG4vKioqKioqKioqKioqKioqKi9cXG5cXG4uc2lkZWJhciAuZHJvcGRvd24tbWVudS1idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiA4cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiA2cHg7XFxuICByaWdodDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5cXG4uc2lkZWJhciAuZHJvcGRvd24tbWVudS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxufVxcblxcbi5zaWRlYmFyIC5kcm9wZG93bi1tZW51LWJ0bi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbi5zaWRlYmFyIC5kcm9wZG93bi1tZW51LWJ0biBpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNHB4O1xcbiAgbGVmdDogMTBweDtcXG59XFxuXFxuLnNpZGViYXIgLmRyb3Bkb3duLWJ0biB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogdmFyKC0tcDEpO1xcbn1cXG5cXG4uc2lkZWJhciAuZHJvcGRvd24tYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgNzUsIDc1LCAxKTtcXG59XFxuXFxuLnNpZGViYXIgLmRyb3Bkb3duLWJ0bi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNSwgMTA1LCAxMDUpO1xcbn1cXG5cXG4ubGlzdHMtbGlzdCAuZHJvcGRvd25NZW51IHtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjcpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTAwO1xcbiAgdG9wOiAxMDAlO1xcbiAgcmlnaHQ6IDA7XFxuXFxuICBwYWRkaW5nOiAwLjc1cmVtO1xcbn1cXG5cXG4ubGlzdHMtbGlzdCAuZHJvcGRvd25NZW51LmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcblxcbi8qKioqKioqKioqKioqL1xcbi8qIEZvciB0YXNrcyAqL1xcbi8qKioqKioqKioqKioqL1xcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bi1tZW51LWJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuXFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiA4cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiA2cHg7XFxuICByaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMTJweDtcXG59XFxuXFxuLnRhc2tzLWxpc3QgLmRyb3Bkb3duLW1lbnUtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbn1cXG5cXG4udGFza3MtbGlzdCAuZHJvcGRvd24tbWVudS1idG4uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbn1cXG5cXG4udGFza3MtbGlzdCAuZHJvcGRvd24tbWVudS1idG4gaSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDZweDtcXG4gIGxlZnQ6IDEwcHg7XFxuICBjb2xvcjogdmFyKC0tcDEpO1xcbn1cXG5cXG4udGFza3MtbGlzdCAuZHJvcGRvd24tYnRuIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgcGFkZGluZy1yaWdodDogMjRweDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogdmFyKC0tcDEpO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bi1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCA3NSwgNzUsIDEpO1xcbn1cXG5cXG4udGFza3MtbGlzdCAuZHJvcGRvd25NZW51IHtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjQpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTAwO1xcbiAgdG9wOiAxMDAlO1xcbiAgcmlnaHQ6IDA7XFxuXFxuICBwYWRkaW5nOiAwLjc1cmVtO1xcbn1cXG5cXG4udGFza3MtbGlzdCAuZHJvcGRvd25NZW51IC5vcHRpb25zIGxpIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFza3MtbGlzdCAuZHJvcGRvd25NZW51LmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcblxcbi8qIE1lZGlhIHF1ZXJpZXMgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogOTgwcHgpIHtcXG4gIC5zaWRlYmFyIC5kcm9wZG93bi1tZW51LWJ0biB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLnNpZGViYXIgLmRyb3Bkb3duLW1lbnUtYnRuIHtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9kcm9wZG93bk1lbnUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUEsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQixpQkFBaUI7O0FBRWpCO0VBQ0UsY0FBYzs7RUFFZCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixVQUFVO0VBQ1YsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7RUFFbEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7O0VBRXBCLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFDVCxRQUFROztFQUVSLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7O0FBRUEsY0FBYztBQUNkLGNBQWM7QUFDZCxjQUFjOztBQUVkO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjs7RUFFbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjs7RUFFakIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9COztFQUVwQixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBQ1QsUUFBUTs7RUFFUixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4vcGFsZXR0ZS5jc3NcXFwiO1xcblxcbi5maWx0ZXJzLWxpc3QgbGksXFxuLmxpc3RzLWxpc3QgbGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFza3MtbGlzdCBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5vcHRpb25zIGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKiovXFxuLyogRm9yIHNpZGViYXIgKi9cXG4vKioqKioqKioqKioqKioqKi9cXG5cXG4uc2lkZWJhciAuZHJvcGRvd24tbWVudS1idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiA4cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiA2cHg7XFxuICByaWdodDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5cXG4uc2lkZWJhciAuZHJvcGRvd24tbWVudS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxufVxcblxcbi5zaWRlYmFyIC5kcm9wZG93bi1tZW51LWJ0bi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbi5zaWRlYmFyIC5kcm9wZG93bi1tZW51LWJ0biBpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNHB4O1xcbiAgbGVmdDogMTBweDtcXG59XFxuXFxuLnNpZGViYXIgLmRyb3Bkb3duLWJ0biB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogdmFyKC0tcDEpO1xcbn1cXG5cXG4uc2lkZWJhciAuZHJvcGRvd24tYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgNzUsIDc1LCAxKTtcXG59XFxuXFxuLnNpZGViYXIgLmRyb3Bkb3duLWJ0bi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNSwgMTA1LCAxMDUpO1xcbn1cXG5cXG4ubGlzdHMtbGlzdCAuZHJvcGRvd25NZW51IHtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjcpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTAwO1xcbiAgdG9wOiAxMDAlO1xcbiAgcmlnaHQ6IDA7XFxuXFxuICBwYWRkaW5nOiAwLjc1cmVtO1xcbn1cXG5cXG4ubGlzdHMtbGlzdCAuZHJvcGRvd25NZW51LmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcblxcbi8qKioqKioqKioqKioqL1xcbi8qIEZvciB0YXNrcyAqL1xcbi8qKioqKioqKioqKioqL1xcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bi1tZW51LWJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuXFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiA4cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiA2cHg7XFxuICByaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMTJweDtcXG59XFxuXFxuLnRhc2tzLWxpc3QgLmRyb3Bkb3duLW1lbnUtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbn1cXG5cXG4udGFza3MtbGlzdCAuZHJvcGRvd24tbWVudS1idG4uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbn1cXG5cXG4udGFza3MtbGlzdCAuZHJvcGRvd24tbWVudS1idG4gaSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDZweDtcXG4gIGxlZnQ6IDEwcHg7XFxuICBjb2xvcjogdmFyKC0tcDEpO1xcbn1cXG5cXG4udGFza3MtbGlzdCAuZHJvcGRvd24tYnRuIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgcGFkZGluZy1yaWdodDogMjRweDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogdmFyKC0tcDEpO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bi1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCA3NSwgNzUsIDEpO1xcbn1cXG5cXG4udGFza3MtbGlzdCAuZHJvcGRvd25NZW51IHtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjQpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTAwO1xcbiAgdG9wOiAxMDAlO1xcbiAgcmlnaHQ6IDA7XFxuXFxuICBwYWRkaW5nOiAwLjc1cmVtO1xcbn1cXG5cXG4udGFza3MtbGlzdCAuZHJvcGRvd25NZW51IC5vcHRpb25zIGxpIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFza3MtbGlzdCAuZHJvcGRvd25NZW51LmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcblxcbi8qIE1lZGlhIHF1ZXJpZXMgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogOTgwcHgpIHtcXG4gIC5zaWRlYmFyIC5kcm9wZG93bi1tZW51LWJ0biB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLnNpZGViYXIgLmRyb3Bkb3duLW1lbnUtYnRuIHtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tcDA6ICNkY2NkZjA7XFxuICAtLXAxOiAjYzhiNmUyO1xcbiAgLS1wMjogI2E4YTRjZTtcXG4gIC0tcDM6ICM3YTg2YjY7XFxuICAtLXAzdDogIzdhODZiNjYzO1xcbiAgLS1wNDogIzQ5NWM4MztcXG4gIC0tcDU6ICMzOTRhNmI7XFxuICAtLXA2OiAjMzAzYzU1O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGFsZXR0ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGFBQWE7RUFDYixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixhQUFhO0VBQ2IsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tcDA6ICNkY2NkZjA7XFxuICAtLXAxOiAjYzhiNmUyO1xcbiAgLS1wMjogI2E4YTRjZTtcXG4gIC0tcDM6ICM3YTg2YjY7XFxuICAtLXAzdDogIzdhODZiNjYzO1xcbiAgLS1wNDogIzQ5NWM4MztcXG4gIC0tcDU6ICMzOTRhNmI7XFxuICAtLXA2OiAjMzAzYzU1O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGFsZXR0ZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2NpcmNsZS1yZWd1bGFyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImFzc2V0cy9jaXJjbGUtY2hlY2stcmVndWxhci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHZhcigtLXAxKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXA0KTtcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tcDEpO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIFV0aWxpdHkgY2xhc3NlcyAqL1xcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbnB1dC10ZXh0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXA0KTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICBwYWRkaW5nOiA0cHggMTJweCA0cHggMTJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiAgKi9cXG5cXG5ib2R5ID4gLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciA0ZnIgNTBweDtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbi5oZWFkZXIge1xcbiAgZ2FwOiA4cHg7XFxuICBncmlkLWNvbHVtbjogMS8gMztcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLnByaW1hcnktaGVhZGluZyB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi8qIFNpZGViYXIgKi9cXG4uc2lkZWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wNSk7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRlbnQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW46IDE2cHggMTZweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaWRlYmFyIGkge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc2lkZWJhciBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDMpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHBhZGRpbmc6IDBweCA4cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcblxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMzJweDtcXG59XFxuXFxuLnNpZGViYXIgLmxpc3QtYnRuIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XFxufVxcblxcbi5zaWRlYmFyIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wMik7XFxufVxcblxcbi5zaWRlYmFyIGJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDEpO1xcbn1cXG5cXG4ubGlzdHMge1xcbiAgbWFyZ2luLXRvcDogMTJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxpc3RzIGgyLFxcbi5maWx0ZXJzIGgyIHtcXG4gIGNvbG9yOiB2YXIoLS1wMik7XFxufVxcblxcbi5maWx0ZXJzLWxpc3QsXFxuLmxpc3RzLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcblxcbi5saXN0cy1saXN0IGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxpc3RzLWxpc3QgLmJ0bi1jb250ZW50LmRpc2FibGVkIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmxpc3RzLWxpc3QgLnJlbmFtZS1saXN0LXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubGlzdHMtbGlzdCAucmVuYW1lLWxpc3QtcG9wdXAuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubGlzdC1yZW5hbWUtaW5wdXQge1xcbiAgbWFyZ2luLXRvcDogMHB4O1xcbn1cXG5cXG4uZmlsdGVyLWljb24sXFxuLmxpc3QtaWNvbixcXG4uYWRkLWxpc3QtaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEycHg7XFxuICBsZWZ0OiAxMHB4O1xcbn1cXG5cXG4uc2lkZWJhciAuYWRkLWxpc3QtYnRuIHtcXG4gIGdhcDogNHB4O1xcbiAgcGFkZGluZzogMHB4IDEycHg7XFxuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4uYWRkLWxpc3QtYnRuLmFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5hZGQtbGlzdC1wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyNnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hZGQtbGlzdC1wb3B1cCBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDQpO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG4gIHBhZGRpbmc6IDRweCAxMnB4IDRweCAxMnB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4uYWRkLWxpc3QtcG9wdXAgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tcDMpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIjtcXG59XFxuXFxuLmFkZC1saXN0LXBvcHVwLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogTWFpbiAqL1xcbi5tYWluIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG5cXG4gIHBhZGRpbmc6IDMycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wNik7XFxufVxcblxcbi5tYWluLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG5cXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxufVxcblxcbi5tYWluLWhlYWRlciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmFkZFRhc2tGb3JtIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tcDMpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIjtcXG59XFxuXFxuLnRhc2tzLWxpc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnRhc2tzLWxpc3QgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4udGFzay1jb250ZW50IHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi50YXNrLWNvbnRlbnQuZGlzYWJsZWQge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ucmVuYW1lLXRhc2stcG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDIwcHg7XFxuICB0b3A6IDZweDtcXG59XFxuXFxuLnJlbmFtZS10YXNrLXBvcHVwLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRhc2stcmVuYW1lLWlucHV0IHtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2sgbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHggMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xcbiAgY29sb3I6IHZhcigtLXAxKTtcXG59XFxuXFxuLnRhc2sgbGFiZWw6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGxlZnQ6IDEycHg7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogMTJweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IHZhcigtLXAyKTtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDN0KTtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuLmZvb3RlciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogNCAvIDU7XFxuXFxuICBnYXA6IDhweDtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuLyogTWVkaWEgcXVlcmllcyAqL1xcblxcbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xcbiAgLnNpZGViYXItY29udGVudCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTgwcHgpIHtcXG4gIGJvZHkgPiAuY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciA1MHB4O1xcbiAgfVxcblxcbiAgLmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgfVxcblxcbiAgLnNpZGViYXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gIH1cXG5cXG4gIC5maWx0ZXJzLWxpc3QgPiBsaSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxuXFxuICAuc2lkZWJhciBidXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyLWNvbnRlbnQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBtYXJnaW46IDMycHg7XFxuICB9XFxuXFxuICAubWFpbiB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgfVxcblxcbiAgLmZpbHRlcnMtbGlzdCxcXG4gIC5saXN0cy1saXN0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5saXN0cyBoMiB7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxuICB9XFxuXFxuICAuc2lkZWJhciBoMiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICB9XFxuXFxuICAuc2lkZWJhciAuYWRkLWxpc3QtYnRuIHtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG4gIH1cXG5cXG4gIC5hZGQtbGlzdC1wb3B1cCB7XFxuICAgIHRvcDogNTlweDtcXG4gIH1cXG5cXG4gIC5saXN0cyxcXG4gIC5maWx0ZXJzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBOzs7RUFHRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixXQUFXO0FBQ2I7O0FBRUEsS0FBSzs7QUFFTDtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIs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RUFDRSw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBLFdBQVc7QUFDWDtFQUNFLGtCQUFrQjtFQUNsQixlQUFlOztFQUVmLFFBQVE7RUFDUixrQkFBa0I7QUFDcEI7O0FBRUEsa0JBQWtCOztBQUVsQjtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsOEJBQThCO0lBQzlCLGtDQUFrQztFQUNwQzs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTs7SUFFRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7O0lBRUUsV0FBVztFQUNiO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0byZkaXNwbGF5PXN3YXBcXFwiKTtcXG5AaW1wb3J0IFxcXCIuL3BhbGV0dGUuY3NzXFxcIjtcXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHZhcigtLXAxKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXA0KTtcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tcDEpO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIFV0aWxpdHkgY2xhc3NlcyAqL1xcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbnB1dC10ZXh0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXA0KTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICBwYWRkaW5nOiA0cHggMTJweCA0cHggMTJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiAgKi9cXG5cXG5ib2R5ID4gLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciA0ZnIgNTBweDtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbi5oZWFkZXIge1xcbiAgZ2FwOiA4cHg7XFxuICBncmlkLWNvbHVtbjogMS8gMztcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLnByaW1hcnktaGVhZGluZyB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi8qIFNpZGViYXIgKi9cXG4uc2lkZWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wNSk7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRlbnQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW46IDE2cHggMTZweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaWRlYmFyIGkge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc2lkZWJhciBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDMpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHBhZGRpbmc6IDBweCA4cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcblxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMzJweDtcXG59XFxuXFxuLnNpZGViYXIgLmxpc3QtYnRuIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XFxufVxcblxcbi5zaWRlYmFyIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wMik7XFxufVxcblxcbi5zaWRlYmFyIGJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDEpO1xcbn1cXG5cXG4ubGlzdHMge1xcbiAgbWFyZ2luLXRvcDogMTJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxpc3RzIGgyLFxcbi5maWx0ZXJzIGgyIHtcXG4gIGNvbG9yOiB2YXIoLS1wMik7XFxufVxcblxcbi5maWx0ZXJzLWxpc3QsXFxuLmxpc3RzLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcblxcbi5saXN0cy1saXN0IGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxpc3RzLWxpc3QgLmJ0bi1jb250ZW50LmRpc2FibGVkIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmxpc3RzLWxpc3QgLnJlbmFtZS1saXN0LXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubGlzdHMtbGlzdCAucmVuYW1lLWxpc3QtcG9wdXAuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubGlzdC1yZW5hbWUtaW5wdXQge1xcbiAgbWFyZ2luLXRvcDogMHB4O1xcbn1cXG5cXG4uZmlsdGVyLWljb24sXFxuLmxpc3QtaWNvbixcXG4uYWRkLWxpc3QtaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEycHg7XFxuICBsZWZ0OiAxMHB4O1xcbn1cXG5cXG4uc2lkZWJhciAuYWRkLWxpc3QtYnRuIHtcXG4gIGdhcDogNHB4O1xcbiAgcGFkZGluZzogMHB4IDEycHg7XFxuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4uYWRkLWxpc3QtYnRuLmFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5hZGQtbGlzdC1wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyNnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hZGQtbGlzdC1wb3B1cCBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDQpO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG4gIHBhZGRpbmc6IDRweCAxMnB4IDRweCAxMnB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4uYWRkLWxpc3QtcG9wdXAgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tcDMpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIjtcXG59XFxuXFxuLmFkZC1saXN0LXBvcHVwLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogTWFpbiAqL1xcbi5tYWluIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG5cXG4gIHBhZGRpbmc6IDMycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wNik7XFxufVxcblxcbi5tYWluLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG5cXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxufVxcblxcbi5tYWluLWhlYWRlciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmFkZFRhc2tGb3JtIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tcDMpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIjtcXG59XFxuXFxuLnRhc2tzLWxpc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnRhc2tzLWxpc3QgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4udGFzay1jb250ZW50IHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi50YXNrLWNvbnRlbnQuZGlzYWJsZWQge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ucmVuYW1lLXRhc2stcG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDIwcHg7XFxuICB0b3A6IDZweDtcXG59XFxuXFxuLnJlbmFtZS10YXNrLXBvcHVwLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRhc2stcmVuYW1lLWlucHV0IHtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2sgbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHggMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xcbiAgY29sb3I6IHZhcigtLXAxKTtcXG59XFxuXFxuLnRhc2sgbGFiZWw6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGxlZnQ6IDEycHg7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogMTJweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiYXNzZXRzL2NpcmNsZS1yZWd1bGFyLnN2Z1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWw6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImFzc2V0cy9jaXJjbGUtY2hlY2stcmVndWxhci5zdmdcXFwiKTtcXG59XFxuXFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogdmFyKC0tcDIpO1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wM3QpO1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG4uZm9vdGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiA0IC8gNTtcXG5cXG4gIGdhcDogOHB4O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG4vKiBNZWRpYSBxdWVyaWVzICovXFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XFxuICAuc2lkZWJhci1jb250ZW50IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5ODBweCkge1xcbiAgYm9keSA+IC5jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyIDUwcHg7XFxuICB9XFxuXFxuICAuaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICB9XFxuXFxuICAuc2lkZWJhciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgfVxcblxcbiAgLmZpbHRlcnMtbGlzdCA+IGxpIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLnNpZGViYXItY29udGVudCB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIG1hcmdpbjogMzJweDtcXG4gIH1cXG5cXG4gIC5tYWluIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICB9XFxuXFxuICAuZm9vdGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICB9XFxuXFxuICAuZmlsdGVycy1saXN0LFxcbiAgLmxpc3RzLWxpc3Qge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmxpc3RzIGgyIHtcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyIGgyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyIC5hZGQtbGlzdC1idG4ge1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgfVxcblxcbiAgLmFkZC1saXN0LXBvcHVwIHtcXG4gICAgdG9wOiA1OXB4O1xcbiAgfVxcblxcbiAgLmxpc3RzLFxcbiAgLmZpbHRlcnMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Ryb3Bkb3duTWVudS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Ryb3Bkb3duTWVudS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IHtcbiAgY29uc3RydWN0b3IobGlzdE5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBsaXN0TmFtZTtcbiAgICB0aGlzLmFycmF5ID0gW107XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgdGFzay5zZXRPcmlnaW5MaXN0KHRoaXMubmFtZSk7XG4gICAgdGhpcy5hcnJheS5wdXNoKHRhc2spO1xuICB9XG5cbiAgcmVtb3ZlVGFzayh0YXNrTmFtZSkge1xuICAgIHRoaXMuYXJyYXkuc3BsaWNlKHRoaXMuZ2V0VGFza0luZGV4KHRhc2tOYW1lKSwgMSk7XG4gIH1cblxuICBnZXRUYXNrKHRhc2tOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkuZmluZCgodGFzaykgPT4gdGFzay5nZXROYW1lKCkgPT09IHRhc2tOYW1lKTtcbiAgfVxuXG4gIGdldFRhc2tJbmRleCh0YXNrTmFtZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LmZpbmRJbmRleCgodGFzaykgPT4gdGFzay5nZXROYW1lKCkgPT09IHRhc2tOYW1lKTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgc2V0QXJyYXkoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hcnJheSA9IFtdO1xuICB9XG5cbiAgYWRkTGlzdChsaXN0KSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKGxpc3QpO1xuICB9XG5cbiAgcmVuYW1lTGlzdChvcmlnaW5hbExpc3ROYW1lLCBuZXdMaXN0TmFtZSkge1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLmdldExpc3RCeU5hbWUob3JpZ2luYWxMaXN0TmFtZSk7XG4gICAgbGlzdC5zZXROYW1lKG5ld0xpc3ROYW1lKTtcbiAgICBsaXN0LmFycmF5LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHRhc2suc2V0T3JpZ2luTGlzdChuZXdMaXN0TmFtZSk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVMaXN0KGxpc3ROYW1lKSB7XG4gICAgdGhpcy5hcnJheS5zcGxpY2UodGhpcy5nZXRMaXN0SW5kZXgobGlzdE5hbWUpLCAxKTtcbiAgfVxuXG4gIGdldExpc3RJbmRleChsaXN0TmFtZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LmZpbmRJbmRleCgobGlzdCkgPT4gbGlzdC5nZXROYW1lKCkgPT09IGxpc3ROYW1lKTtcbiAgfVxuXG4gIGdldFRhc2tCeVRhc2tOYW1lKHRhc2tOYW1lKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBsaXN0ID0gdGhpcy5hcnJheVtpXTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGxpc3QuZ2V0QXJyYXkuZmluZCgodGFzaykgPT4gdGFzay5nZXROYW1lKCkgPT09IHRhc2tOYW1lKTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldExpc3RCeVRhc2tOYW1lKHRhc2tOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkuZmluZCgobGlzdCkgPT5cbiAgICAgIGxpc3QuZ2V0QXJyYXkoKS5maW5kKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PT0gdGFza05hbWUpXG4gICAgKTtcbiAgfVxuXG4gIGdldExpc3RCeU5hbWUobGlzdE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5maW5kKChsaXN0KSA9PiBsaXN0LmdldE5hbWUoKSA9PT0gbGlzdE5hbWUpO1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBzZXRBcnJheShhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxufVxuIiwiaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xuaW1wb3J0IExpc3RzIGZyb20gXCIuL0xpc3RzXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsU3RvcmFnZSB7XG4gIHN0YXRpYyBzYXZlTGlzdHMobGlzdHMpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3RzXCIsIEpTT04uc3RyaW5naWZ5KGxpc3RzKSk7XG4gIH1cblxuICBzdGF0aWMgI2xvYWRMaXN0cygpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RzXCIpKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRMaXN0c09iamVjdCgpIHtcbiAgICBjb25zdCBsaXN0cyA9IE9iamVjdC5hc3NpZ24obmV3IExpc3RzKCksIHRoaXMuI2xvYWRMaXN0cygpKTtcblxuICAgIGxpc3RzLnNldEFycmF5KFxuICAgICAgbGlzdHMuZ2V0QXJyYXkoKS5tYXAoKGxpc3QpID0+IE9iamVjdC5hc3NpZ24obmV3IExpc3QoKSwgbGlzdCkpXG4gICAgKTtcblxuICAgIGxpc3RzLmdldEFycmF5KCkuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgbGlzdC5zZXRBcnJheShcbiAgICAgICAgbGlzdC5nZXRBcnJheSgpLm1hcCgodGFzaykgPT4gT2JqZWN0LmFzc2lnbihuZXcgVGFzaygpLCB0YXNrKSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGlzdHM7XG4gIH1cblxuICBzdGF0aWMgZ2V0TGlzdEJ5TmFtZShsaXN0TmFtZSkge1xuICAgIGNvbnN0IGxpc3RzID0gTG9jYWxTdG9yYWdlLmdldExpc3RzT2JqZWN0KCk7XG4gICAgcmV0dXJuIGxpc3RzLmdldExpc3RCeU5hbWUobGlzdE5hbWUpO1xuICB9XG5cbiAgc3RhdGljIGdldExpc3RCeVRhc2tOYW1lKHRhc2tOYW1lKSB7XG4gICAgY29uc3QgbGlzdHMgPSBMb2NhbFN0b3JhZ2UuZ2V0TGlzdHNPYmplY3QoKTtcbiAgICByZXR1cm4gbGlzdHMuZ2V0TGlzdEJ5VGFza05hbWUodGFza05hbWUpO1xuICB9XG5cbiAgc3RhdGljIGFkZExpc3QobGlzdCkge1xuICAgIGNvbnN0IGxpc3RzID0gTG9jYWxTdG9yYWdlLmdldExpc3RzT2JqZWN0KCk7XG4gICAgbGlzdHMuYWRkTGlzdChsaXN0KTtcbiAgICBMb2NhbFN0b3JhZ2Uuc2F2ZUxpc3RzKGxpc3RzKTtcbiAgfVxuXG4gIHN0YXRpYyByZW5hbWVMaXN0KG9yaWdpbmFsTGlzdE5hbWUsIG5ld0xpc3ROYW1lKSB7XG4gICAgY29uc3QgbGlzdHMgPSBMb2NhbFN0b3JhZ2UuZ2V0TGlzdHNPYmplY3QoKTtcbiAgICBsaXN0cy5yZW5hbWVMaXN0KG9yaWdpbmFsTGlzdE5hbWUsIG5ld0xpc3ROYW1lKTtcbiAgICBMb2NhbFN0b3JhZ2Uuc2F2ZUxpc3RzKGxpc3RzKTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVMaXN0KGxpc3ROYW1lKSB7XG4gICAgY29uc3QgbGlzdHMgPSBMb2NhbFN0b3JhZ2UuZ2V0TGlzdHNPYmplY3QoKTtcbiAgICBsaXN0cy5yZW1vdmVMaXN0KGxpc3ROYW1lKTtcbiAgICBMb2NhbFN0b3JhZ2Uuc2F2ZUxpc3RzKGxpc3RzKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRUYXNrKHRhc2tOYW1lKSB7XG4gICAgY29uc3QgbGlzdHMgPSBMb2NhbFN0b3JhZ2UuZ2V0TGlzdHNPYmplY3QoKTtcbiAgICByZXR1cm4gbGlzdHMuZ2V0VGFza0J5VGFza05hbWUodGFza05hbWUpO1xuICB9XG5cbiAgc3RhdGljIGFkZFRhc2sobGlzdE5hbWUsIHRhc2spIHtcbiAgICBjb25zdCBsaXN0cyA9IExvY2FsU3RvcmFnZS5nZXRMaXN0c09iamVjdCgpO1xuICAgIGNvbnN0IHRhcmdldExpc3QgPSBsaXN0cy5nZXRMaXN0QnlOYW1lKGxpc3ROYW1lKTtcbiAgICB0YXJnZXRMaXN0LmFkZFRhc2sodGFzayk7XG4gICAgTG9jYWxTdG9yYWdlLnNhdmVMaXN0cyhsaXN0cyk7XG4gIH1cblxuICBzdGF0aWMgcmVuYW1lVGFzayhsaXN0TmFtZSwgdGFzaywgbmV3VGFza05hbWUpIHtcbiAgICBjb25zdCBsaXN0cyA9IExvY2FsU3RvcmFnZS5nZXRMaXN0c09iamVjdCgpO1xuICAgIGNvbnN0IHRhcmdldExpc3QgPSBsaXN0cy5nZXRMaXN0QnlOYW1lKGxpc3ROYW1lKTtcbiAgICB0YXJnZXRMaXN0LmdldFRhc2sodGFzay5nZXROYW1lKCkpLnNldE5hbWUobmV3VGFza05hbWUpO1xuICAgIExvY2FsU3RvcmFnZS5zYXZlTGlzdHMobGlzdHMpO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZVRhc2sobGlzdE5hbWUsIHRhc2spIHtcbiAgICBjb25zdCBsaXN0cyA9IExvY2FsU3RvcmFnZS5nZXRMaXN0c09iamVjdCgpO1xuICAgIGNvbnN0IGxpc3QgPSBsaXN0cy5nZXRMaXN0QnlOYW1lKGxpc3ROYW1lKTtcbiAgICBsaXN0LnJlbW92ZVRhc2sodGFzay5nZXROYW1lKCkpO1xuICAgIExvY2FsU3RvcmFnZS5zYXZlTGlzdHMobGlzdHMpO1xuICB9XG5cbiAgc3RhdGljIGNvbnRhaW5zVGFzayh0YXNrTmFtZSkge1xuICAgIGNvbnN0IGxpc3RzID0gTG9jYWxTdG9yYWdlLmdldExpc3RzT2JqZWN0KCk7XG4gICAgcmV0dXJuIGxpc3RzLmdldExpc3RCeVRhc2tOYW1lKHRhc2tOYW1lKTtcbiAgfVxuXG4gIHN0YXRpYyBjb250YWluc0xpc3QobGlzdE5hbWUpIHtcbiAgICByZXR1cm4gTG9jYWxTdG9yYWdlLmdldExpc3RCeU5hbWUobGlzdE5hbWUpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldFN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmU7XG4gIH1cblxuICB0b2dnbGVTdGF0dXMoKSB7XG4gICAgdGhpcy5hY3RpdmUgPSAhdGhpcy5hY3RpdmU7XG4gIH1cblxuICBnZXRPcmlnaW5MaXN0KCkge1xuICAgIHJldHVybiB0aGlzLm9yaWdpbkxpc3ROYW1lO1xuICB9XG5cbiAgc2V0T3JpZ2luTGlzdChsaXN0TmFtZSkge1xuICAgIHRoaXMub3JpZ2luTGlzdE5hbWUgPSBsaXN0TmFtZTtcbiAgfVxufVxuIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFza1wiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xuaW1wb3J0IExvY2FsU3RvcmFnZSBmcm9tIFwiLi9Mb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSBcIi4vVmFsaWRhdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgc3RhdGljIGxvYWRUb0RvTGlzdCgpIHtcbiAgICBVSS5sb2FkTGlzdHMoKTtcbiAgICBVSS5zZXR1cEJ1dHRvbnMoKTtcbiAgICBVSS5sb2FkQWxsVGFza3MoKTtcbiAgfVxuXG4gIC8vIExvYWRpbmdcbiAgc3RhdGljIGxvYWRMaXN0cygpIHtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdHMgdWxcIik7XG4gICAgdWwucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICBMb2NhbFN0b3JhZ2UuZ2V0TGlzdHNPYmplY3QoKVxuICAgICAgLmdldEFycmF5KClcbiAgICAgIC5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICAgIFVJLmNyZWF0ZUxpc3QobGlzdC5nZXROYW1lKCkpO1xuICAgICAgfSk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlTGlzdChsaXN0TmFtZSkge1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0cy1saXN0XCIpO1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgbGkuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJidG4tY29udGVudFwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImxpc3QtYnRuXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1ub3RlLXN0aWNreSBsaXN0LWljb25cIj48L2k+XG4gICAgICAgIDxwPiR7bGlzdE5hbWV9PC9wPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRyb3Bkb3duLW1lbnUtYnRuXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1lbGxpcHNpcy12ZXJ0aWNhbFwiPjwvaT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bk1lbnVcIj5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJvcHRpb25zXCI+XG4gICAgICAgICAgICAgIDxsaT48YnV0dG9uIGNsYXNzPVwiZHJvcGRvd24tYnRuIGxpc3QtZWRpdFwiPkVkaXQ8L2J1dHRvbj48L2xpPlxuICAgICAgICAgICAgICA8bGk+PGJ1dHRvbiBjbGFzcz1cImRyb3Bkb3duLWJ0biBsaXN0LWRlbGV0ZVwiPkRlbGV0ZTwvYnV0dG9uPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicmVuYW1lLWxpc3QtcG9wdXBcIj5cbiAgICAgIDxmb3JtIGNsYXNzPVwicmVuYW1lLWxpc3QtZm9ybVwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3M9XCJpbnB1dC10ZXh0IGxpc3QtcmVuYW1lLWlucHV0XCJcbiAgICAgICAgICB2YWx1ZT1cIiR7bGlzdE5hbWV9XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwic3VibWl0UmVuYW1lTGlzdEZvcm1cIiB0eXBlPVwic3VibWl0XCIgaGlkZGVuIC8+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgICBsaS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBsaXN0TmFtZS5yZXBsYWNlKC9cXHMvZywgXCJcIikpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcblxuICAgIGNvbnN0IGxpc3RFZGl0ID0gbGkucXVlcnlTZWxlY3RvcihcIi5saXN0LWVkaXRcIik7XG4gICAgY29uc3QgcmVuYW1lTGlzdEZvcm0gPSBsaS5xdWVyeVNlbGVjdG9yKFwiLnJlbmFtZS1saXN0LWZvcm1cIik7XG4gICAgY29uc3QgbGlzdERlbGV0ZSA9IGxpLnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1kZWxldGVcIik7XG4gICAgY29uc3QgYnRuQ29udGVudCA9IGxpLnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNvbnRlbnRcIik7XG5cbiAgICBjb25zdCBsaXN0RHJvcGRvd25NZW51QnV0dG9uID0gbGkucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1tZW51LWJ0blwiKTtcbiAgICBjb25zdCBsaXN0RHJvcGRvd25NZW51ID0gbGkucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bk1lbnVcIik7XG5cbiAgICBsaXN0RHJvcGRvd25NZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgbGlzdERyb3Bkb3duTWVudUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgbGlzdERyb3Bkb3duTWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlMSkgPT4ge1xuICAgICAgICBpZiAoZTEudGFyZ2V0ICE9PSBsaXN0RHJvcGRvd25NZW51KSB7XG4gICAgICAgICAgbGlzdERyb3Bkb3duTWVudUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgIGxpc3REcm9wZG93bk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuXG4gICAgYnRuQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgVUkuZW5hYmxlVGFza0lucHV0KCk7XG4gICAgICBVSS5sb2FkRnJlc2hMaXN0KGxpc3ROYW1lKTtcbiAgICB9KTtcblxuICAgIGxpc3REZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBMb2NhbFN0b3JhZ2UucmVtb3ZlTGlzdChsaXN0TmFtZSk7XG4gICAgICBVSS5sb2FkTGlzdHMoKTtcblxuICAgICAgY29uc3QgYWN0aXZlTGlzdFRpdGxlID0gVUkuZ2V0QWN0aXZlTGlzdFRpdGxlKCk7XG4gICAgICBpZiAobGlzdE5hbWUgPT09IGFjdGl2ZUxpc3RUaXRsZSB8fCBhY3RpdmVMaXN0VGl0bGUgPT09IFwiQWxsIHRhc2tzXCIpIHtcbiAgICAgICAgVUkubG9hZEFsbFRhc2tzKCk7XG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZUxpc3RUaXRsZSA9PT0gXCJDb21wbGV0ZWQgdGFza3NcIikge1xuICAgICAgICBVSS5sb2FkQWxsQ29tcGxldGVkVGFza3MoKTtcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlTGlzdFRpdGxlID09PSBcIlBlbmRpbmcgdGFza3NcIikge1xuICAgICAgICBVSS5sb2FkQWxsUGVuZGluZ1Rhc2tzKCk7XG4gICAgICB9XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuXG4gICAgbGlzdEVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBVSS5lbmFibGVSZW5hbWVMaXN0UG9wdXAobGlzdE5hbWUpO1xuXG4gICAgICBjb25zdCBsaXN0UmVuYW1lSW5wdXQgPSBsaS5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtcmVuYW1lLWlucHV0XCIpO1xuXG4gICAgICByZW5hbWVMaXN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlMSkgPT4ge1xuICAgICAgICBlMS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IG5ld0xpc3ROYW1lID0gbGlzdFJlbmFtZUlucHV0LnZhbHVlO1xuXG4gICAgICAgIFZhbGlkYXRvci52YWxpZGF0ZVJlbmFtZUxpc3QobGlzdFJlbmFtZUlucHV0LCBsaXN0TmFtZSk7XG4gICAgICAgIGlmIChsaXN0UmVuYW1lSW5wdXQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgICBVSS5kaXNhYmxlUmVuYW1lTGlzdFBvcHVwKCk7XG4gICAgICAgICAgTG9jYWxTdG9yYWdlLnJlbmFtZUxpc3QobGlzdE5hbWUsIG5ld0xpc3ROYW1lKTtcbiAgICAgICAgICBVSS5sb2FkTGlzdHMoKTtcblxuICAgICAgICAgIGNvbnN0IGFjdGl2ZUxpc3RUaXRsZSA9IFVJLmdldEFjdGl2ZUxpc3RUaXRsZSgpO1xuXG4gICAgICAgICAgaWYgKGFjdGl2ZUxpc3RUaXRsZSA9PT0gbGlzdE5hbWUpIHtcbiAgICAgICAgICAgIFVJLmxvYWRGcmVzaExpc3QobmV3TGlzdE5hbWUpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlTGlzdFRpdGxlID09PSBcIkFsbCB0YXNrc1wiKSB7XG4gICAgICAgICAgICBVSS5sb2FkQWxsVGFza3MoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGFjdGl2ZUxpc3RUaXRsZSA9PT0gXCJDb21wbGV0ZWQgdGFza3NcIikge1xuICAgICAgICAgICAgVUkubG9hZEFsbENvbXBsZXRlZFRhc2tzKCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChhY3RpdmVMaXN0VGl0bGUgPT09IFwiUGVuZGluZyB0YXNrc1wiKSB7XG4gICAgICAgICAgICBVSS5sb2FkQWxsUGVuZGluZ1Rhc2tzKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGlzdFJlbmFtZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaXN0UmVuYW1lSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICBsaXN0UmVuYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgbGlzdFJlbmFtZUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGUxLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGVuYWJsZVRhc2tJbnB1dCgpIHtcbiAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVGFza0Zvcm1cIik7XG4gICAgYWRkVGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfVxuXG4gIHN0YXRpYyBkaXNhYmxlVGFza0lucHV0KCkge1xuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrRm9ybVwiKTtcbiAgICBhZGRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICBzdGF0aWMgbG9hZEFsbFRhc2tzKGZsYWdzKSB7XG4gICAgVUkuZGlzYWJsZVRhc2tJbnB1dCgpO1xuICAgIFVJLnJlc2V0RGlzcGxheWVkVGFza3MoKTtcbiAgICBpZiAoZmxhZ3MpIHtcbiAgICAgIFVJLnNldEFjdGl2ZUxpc3RUaXRsZShmbGFncy5saXN0TmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFVJLnNldEFjdGl2ZUxpc3RUaXRsZShcIkFsbCB0YXNrc1wiKTtcbiAgICB9XG5cbiAgICBjb25zdCBsaXN0cyA9IExvY2FsU3RvcmFnZS5nZXRMaXN0c09iamVjdCgpO1xuICAgIGxpc3RzLmdldEFycmF5KCkuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgVUkubG9hZEFkZGl0aW9uYWxMaXN0KGxpc3QuZ2V0TmFtZSgpLCBmbGFncyk7XG4gICAgfSk7XG4gICAgVUkuc2V0dXBUYXNrVG9nZ2xlKCk7XG4gICAgVUkucmVuZGVyQWxsVGFza1N0YXR1c2VzKGZsYWdzKTtcbiAgfVxuXG4gIHN0YXRpYyBsb2FkQWxsQ29tcGxldGVkVGFza3MoKSB7XG4gICAgVUkubG9hZEFsbFRhc2tzKHsgbGlzdE5hbWU6IFwiQ29tcGxldGVkIHRhc2tzXCIsIHRhc2tJc0FjdGl2ZTogZmFsc2UgfSk7XG4gIH1cblxuICBzdGF0aWMgbG9hZEFsbFBlbmRpbmdUYXNrcygpIHtcbiAgICBVSS5sb2FkQWxsVGFza3MoeyBsaXN0TmFtZTogXCJQZW5kaW5nIHRhc2tzXCIsIHRhc2tJc0FjdGl2ZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIHN0YXRpYyBsb2FkRnJlc2hMaXN0KGxpc3ROYW1lKSB7XG4gICAgVUkuc2V0QWN0aXZlTGlzdFRpdGxlKGxpc3ROYW1lKTtcbiAgICBVSS5yZXNldERpc3BsYXllZFRhc2tzKCk7XG4gICAgVUkucmVuZGVyVGFza3MobGlzdE5hbWUpO1xuICAgIFVJLnJlbmRlclRhc2tTdGF0dXNlcyhsaXN0TmFtZSk7XG5cbiAgICBVSS5zZXR1cFRhc2tUb2dnbGUoKTtcbiAgfVxuXG4gIHN0YXRpYyBsb2FkQWRkaXRpb25hbExpc3QobGlzdE5hbWUsIGZsYWdzKSB7XG4gICAgVUkucmVuZGVyVGFza3MobGlzdE5hbWUsIGZsYWdzKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRBY3RpdmVMaXN0VGl0bGUoKSB7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtbmFtZVwiKTtcbiAgICByZXR1cm4gaDEudGV4dENvbnRlbnQ7XG4gIH1cblxuICBzdGF0aWMgc2V0QWN0aXZlTGlzdFRpdGxlKGxpc3ROYW1lKSB7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtbmFtZVwiKTtcbiAgICBoMS50ZXh0Q29udGVudCA9IGxpc3ROYW1lO1xuICB9XG5cbiAgc3RhdGljIHJlc2V0RGlzcGxheWVkVGFza3MoKSB7XG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWxpc3RcIik7XG4gICAgdGFza3MucmVwbGFjZUNoaWxkcmVuKCk7XG4gIH1cblxuICBzdGF0aWMgcmVuZGVyVGFza3MobGlzdE5hbWUsIGZsYWdzKSB7XG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWxpc3RcIik7XG4gICAgY29uc3QgbGlzdCA9IExvY2FsU3RvcmFnZS5nZXRMaXN0QnlOYW1lKGxpc3ROYW1lKTtcblxuICAgIGxpc3QuZ2V0QXJyYXkoKS5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7XG4gICAgICBpZiAoZmxhZ3MpIHtcbiAgICAgICAgaWYgKGZsYWdzLnRhc2tJc0FjdGl2ZSkge1xuICAgICAgICAgIGlmICghdGFzay5nZXRTdGF0dXMoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghZmxhZ3MudGFza0lzQWN0aXZlKSB7XG4gICAgICAgICAgaWYgKHRhc2suZ2V0U3RhdHVzKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgdGFza05hbWUgPSB0YXNrLmdldE5hbWUoKTtcbiAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgbGkuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cInRhc2stY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFza1wiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIG5hbWU9XCJ0YXNrQ29tcGxldGVkXCJcbiAgICAgICAgICAgIGlkPVwiJHtsaXN0TmFtZS5yZXBsYWNlKC9cXHMvZywgXCJcIil9VGFzayR7aX1cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwidGFza1RleHRcIiBmb3I9XCIke2xpc3ROYW1lLnJlcGxhY2UoL1xccy9nLCBcIlwiKX1UYXNrJHtpfVwiXG4gICAgICAgICAgICA+JHt0YXNrTmFtZX08L2xhYmVsXG4gICAgICAgICAgPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRyb3Bkb3duLW1lbnUtYnRuXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1lbGxpcHNpcy12ZXJ0aWNhbFwiPjwvaT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bk1lbnVcIj5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJvcHRpb25zXCI+XG4gICAgICAgICAgICA8bGk+PGJ1dHRvbiBjbGFzcz1cImRyb3Bkb3duLWJ0biB0YXNrLWVkaXRcIj5FZGl0PC9idXR0b24+PC9saT5cbiAgICAgICAgICAgIDxsaT48YnV0dG9uIGNsYXNzPVwiZHJvcGRvd24tYnRuIHRhc2stZGVsZXRlXCI+RGVsZXRlPC9idXR0b24+PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInJlbmFtZS10YXNrLXBvcHVwXCI+XG4gICAgICAgIDxmb3JtIGNsYXNzPVwicmVuYW1lLXRhc2stZm9ybVwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC10ZXh0IHRhc2stcmVuYW1lLWlucHV0XCJcbiAgICAgICAgICAgIHZhbHVlPVwiJHt0YXNrTmFtZX1cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwic3VibWl0UmVuYW1lVGFza0Zvcm1cIiB0eXBlPVwic3VibWl0XCIgaGlkZGVuIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYDtcbiAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGAke3Rhc2tOYW1lLnJlcGxhY2UoL1xccy9nLCBcIlwiKX1gKTtcbiAgICAgIHRhc2tzLmFwcGVuZENoaWxkKGxpKTtcblxuICAgICAgY29uc3QgdGFza0VkaXQgPSBsaS5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZWRpdFwiKTtcbiAgICAgIGNvbnN0IHJlbmFtZVRhc2tGb3JtID0gbGkucXVlcnlTZWxlY3RvcihcIi5yZW5hbWUtdGFzay1mb3JtXCIpO1xuICAgICAgY29uc3QgdGFza0RlbGV0ZSA9IGxpLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZWxldGVcIik7XG5cbiAgICAgIGNvbnN0IHRhc2tEcm9wZG93bk1lbnVCdXR0b24gPSBsaS5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLW1lbnUtYnRuXCIpO1xuICAgICAgY29uc3QgdGFza0Ryb3Bkb3duTWVudSA9IGxpLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd25NZW51XCIpO1xuXG4gICAgICB0YXNrRHJvcGRvd25NZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICB0YXNrRHJvcGRvd25NZW51QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIHRhc2tEcm9wZG93bk1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlMSkgPT4ge1xuICAgICAgICAgIGlmIChlMS50YXJnZXQgIT09IHRhc2tEcm9wZG93bk1lbnUpIHtcbiAgICAgICAgICAgIHRhc2tEcm9wZG93bk1lbnVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIHRhc2tEcm9wZG93bk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSk7XG5cbiAgICAgIHRhc2tEZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIExvY2FsU3RvcmFnZS5yZW1vdmVUYXNrKGxpc3ROYW1lLCB0YXNrKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBpZiAoVUkuZ2V0QWN0aXZlTGlzdFRpdGxlKCkgPT09IFwiQWxsIHRhc2tzXCIpIHtcbiAgICAgICAgICBVSS5sb2FkQWxsVGFza3MoKTtcbiAgICAgICAgfSBlbHNlIGlmIChVSS5nZXRBY3RpdmVMaXN0VGl0bGUoKSA9PT0gXCJDb21wbGV0ZWQgdGFza3NcIikge1xuICAgICAgICAgIFVJLmxvYWRBbGxDb21wbGV0ZWRUYXNrcyh7XG4gICAgICAgICAgICBsaXN0TmFtZTogXCJDb21wbGV0ZWQgdGFza3NcIixcbiAgICAgICAgICAgIHRhc2tJc0FjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoVUkuZ2V0QWN0aXZlTGlzdFRpdGxlKCkgPT09IFwiUGVuZGluZyB0YXNrc1wiKSB7XG4gICAgICAgICAgVUkubG9hZEFsbFBlbmRpbmdUYXNrcyh7XG4gICAgICAgICAgICBsaXN0TmFtZTogXCJQZW5kaW5nIHRhc2tzXCIsXG4gICAgICAgICAgICB0YXNrSXNBY3RpdmU6IHRydWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgVUkucmVzZXREaXNwbGF5ZWRUYXNrcygpO1xuICAgICAgICAgIFVJLnJlbmRlclRhc2tzKGxpc3ROYW1lKTtcbiAgICAgICAgICBVSS5yZW5kZXJUYXNrU3RhdHVzZXMobGlzdE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGFza0VkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIFVJLmVuYWJsZVJlbmFtZVRhc2tQb3B1cCh0YXNrTmFtZSk7IC8vIE5lZWQgdG8gaW1wbGVtZW50XG5cbiAgICAgICAgY29uc3QgdGFza1JlbmFtZUlucHV0ID0gbGkucXVlcnlTZWxlY3RvcihcIi50YXNrLXJlbmFtZS1pbnB1dFwiKTtcbiAgICAgICAgcmVuYW1lVGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZTEpID0+IHtcbiAgICAgICAgICBlMS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgVmFsaWRhdG9yLnZhbGlkYXRlUmVuYW1lVGFzayh0YXNrUmVuYW1lSW5wdXQsIHRhc2tOYW1lKTtcbiAgICAgICAgICBpZiAodGFza1JlbmFtZUlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAgICAgICBVSS5kaXNhYmxlUmVuYW1lVGFza1BvcHVwKCk7XG4gICAgICAgICAgICBMb2NhbFN0b3JhZ2UucmVuYW1lVGFzayhsaXN0TmFtZSwgdGFzaywgdGFza1JlbmFtZUlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIGlmIChVSS5nZXRBY3RpdmVMaXN0VGl0bGUoKSA9PT0gXCJBbGwgdGFza3NcIikge1xuICAgICAgICAgICAgICBVSS5sb2FkQWxsVGFza3MoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVUkuZ2V0QWN0aXZlTGlzdFRpdGxlKCkgPT09IFwiQ29tcGxldGVkIHRhc2tzXCIpIHtcbiAgICAgICAgICAgICAgVUkubG9hZEFsbENvbXBsZXRlZFRhc2tzKHtcbiAgICAgICAgICAgICAgICBsaXN0TmFtZTogXCJDb21wbGV0ZWQgdGFza3NcIixcbiAgICAgICAgICAgICAgICB0YXNrSXNBY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVUkuZ2V0QWN0aXZlTGlzdFRpdGxlKCkgPT09IFwiUGVuZGluZyB0YXNrc1wiKSB7XG4gICAgICAgICAgICAgIFVJLmxvYWRBbGxQZW5kaW5nVGFza3Moe1xuICAgICAgICAgICAgICAgIGxpc3ROYW1lOiBcIlBlbmRpbmcgdGFza3NcIixcbiAgICAgICAgICAgICAgICB0YXNrSXNBY3RpdmU6IHRydWUsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgVUkubG9hZEZyZXNoTGlzdChsaXN0TmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXNrUmVuYW1lSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrUmVuYW1lSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgIHRhc2tSZW5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICBcImlucHV0XCIsXG4gICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICB0YXNrUmVuYW1lSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlMS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJUYXNrU3RhdHVzZXMobGlzdE5hbWUpIHtcbiAgICBjb25zdCBsaXN0ID0gTG9jYWxTdG9yYWdlLmdldExpc3RCeU5hbWUobGlzdE5hbWUpO1xuICAgIGxpc3QuZ2V0QXJyYXkoKS5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7XG4gICAgICBpZiAoIXRhc2suZ2V0U3RhdHVzKCkpIHtcbiAgICAgICAgLy8gSWYgdGFzayBpcyBub3QgYWN0aXZlXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYCMke3Rhc2suZ2V0T3JpZ2luTGlzdCgpLnJlcGxhY2UoL1xccy9nLCBcIlwiKX1UYXNrJHtpfWBcbiAgICAgICAgKS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJBbGxUYXNrU3RhdHVzZXMoZmxhZ3MpIHtcbiAgICBjb25zdCBsaXN0cyA9IExvY2FsU3RvcmFnZS5nZXRMaXN0c09iamVjdCgpO1xuICAgIGxpc3RzLmdldEFycmF5KCkuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgbGlzdC5nZXRBcnJheSgpLmZvckVhY2goKHRhc2ssIGkpID0+IHtcbiAgICAgICAgaWYgKCF0YXNrLmdldFN0YXR1cygpKSB7XG4gICAgICAgICAgaWYgKGZsYWdzICYmIGZsYWdzLnRhc2tJc0FjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgIyR7dGFzay5nZXRPcmlnaW5MaXN0KCkucmVwbGFjZSgvXFxzL2csIFwiXCIpfVRhc2ske2l9YFxuICAgICAgICAgICkuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHNldHVwVGFza1RvZ2dsZSgpIHtcbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtbGlzdFwiKTtcbiAgICBjb25zdCB0YXNrRGl2cyA9IHRhc2tzLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzayBpbnB1dFwiKTtcblxuICAgIHRhc2tEaXZzLmZvckVhY2goKHRhc2tEaXYpID0+IHtcbiAgICAgIHRhc2tEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RzID0gTG9jYWxTdG9yYWdlLmdldExpc3RzT2JqZWN0KCk7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZS50YXJnZXQubGFiZWxzWzBdLnRleHRDb250ZW50O1xuICAgICAgICBjb25zdCBsaXN0ID0gbGlzdHMuZ2V0TGlzdEJ5VGFza05hbWUodGFza05hbWUpO1xuICAgICAgICBjb25zdCB0YXNrID0gbGlzdC5nZXRUYXNrKHRhc2tOYW1lKTtcbiAgICAgICAgdGFzay50b2dnbGVTdGF0dXMoKTtcblxuICAgICAgICBMb2NhbFN0b3JhZ2Uuc2F2ZUxpc3RzKGxpc3RzKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHNldHVwQnV0dG9ucygpIHtcbiAgICAvLyBBZGQgbGlzdCBidXR0b25cbiAgICBjb25zdCBsaXN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1saXN0LWZvcm0gLmxpc3QtbmFtZS1pbnB1dFwiKTtcbiAgICBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0VGFza1RleHRcIik7XG5cbiAgICBjb25zdCBhZGRMaXN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWxpc3QtZm9ybVwiKTtcbiAgICBjb25zdCBhZGRMaXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtbGlzdC1idG5cIik7XG5cbiAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVGFza0Zvcm1cIik7XG4gICAgY29uc3QgYWxsVGFza3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbC10YXNrcy1idG5cIik7XG4gICAgY29uc3QgYWxsQ29tcGxldGVkVGFza3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIuYWxsLWNvbXBsZXRlZC10YXNrcy1idG5cIlxuICAgICk7XG4gICAgY29uc3QgYWxsUGVuZGluZ1Rhc2tzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLmFsbC1wZW5kaW5nLXRhc2tzLWJ0blwiXG4gICAgKTtcblxuICAgIGFsbFRhc2tzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBVSS5sb2FkQWxsVGFza3MoKTtcbiAgICB9KTtcblxuICAgIGFsbENvbXBsZXRlZFRhc2tzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBVSS5sb2FkQWxsQ29tcGxldGVkVGFza3MoKTtcbiAgICB9KTtcblxuICAgIGFsbFBlbmRpbmdUYXNrc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgVUkubG9hZEFsbFBlbmRpbmdUYXNrcygpO1xuICAgIH0pO1xuXG4gICAgYWRkTGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIFVJLmVuYWJsZUFkZExpc3RQb3B1cCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcblxuICAgIGFkZExpc3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgbGlzdE5hbWUgPSBsaXN0SW5wdXQudmFsdWU7XG4gICAgICBjb25zdCBuZXdMaXN0ID0gbmV3IExpc3QobGlzdE5hbWUpO1xuXG4gICAgICBWYWxpZGF0b3IudmFsaWRhdGVMaXN0KGxpc3RJbnB1dCk7XG4gICAgICBpZiAobGlzdElucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAgIExvY2FsU3RvcmFnZS5hZGRMaXN0KG5ld0xpc3QpO1xuICAgICAgICBVSS5jcmVhdGVMaXN0KGxpc3ROYW1lKTtcblxuICAgICAgICBVSS5kaXNhYmxlQWRkTGlzdFBvcHVwKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0SW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgbGlzdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGxpc3RJbnB1dC5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBhZGRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayh0YXNrSW5wdXQudmFsdWUpO1xuICAgICAgY29uc3QgbGlzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtbmFtZVwiKS50ZXh0Q29udGVudDtcblxuICAgICAgVmFsaWRhdG9yLnZhbGlkYXRlVGFzayh0YXNrSW5wdXQpO1xuICAgICAgaWYgKHRhc2tJbnB1dC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICBMb2NhbFN0b3JhZ2UuYWRkVGFzayhsaXN0TmFtZSwgbmV3VGFzayk7XG5cbiAgICAgICAgVUkubG9hZEZyZXNoTGlzdChsaXN0TmFtZSk7XG4gICAgICAgIFVJLmNsZWFyVGFza0lucHV0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgdGFza0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIHRhc2tJbnB1dC5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZW5hYmxlQWRkTGlzdFBvcHVwKCkge1xuICAgIGNvbnN0IGFkZExpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1saXN0LWJ0blwiKTtcbiAgICBjb25zdCBhZGRMaXN0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1saXN0LXBvcHVwXCIpO1xuICAgIGNvbnN0IGxpc3ROYW1lSW5wdXQgPSBhZGRMaXN0UG9wdXAucXVlcnlTZWxlY3RvcihcIi5saXN0LW5hbWUtaW5wdXRcIik7XG5cbiAgICBhZGRMaXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgYWRkTGlzdFBvcHVwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgbGlzdE5hbWVJbnB1dC5mb2N1cygpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLmV4aXRBZGRMaXN0UG9wVXBXaGVuTG9zZUZvY3VzKTtcbiAgfVxuXG4gIHN0YXRpYyBkaXNhYmxlQWRkTGlzdFBvcHVwKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS5leGl0QWRkTGlzdFBvcFVwV2hlbkxvc2VGb2N1cyk7XG5cbiAgICBjb25zdCBhZGRMaXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtbGlzdC1idG5cIik7XG4gICAgY29uc3QgYWRkTGlzdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtbGlzdC1wb3B1cFwiKTtcbiAgICBjb25zdCBsaXN0TmFtZUlucHV0ID0gYWRkTGlzdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1uYW1lLWlucHV0XCIpO1xuXG4gICAgYWRkTGlzdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGFkZExpc3RQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGxpc3ROYW1lSW5wdXQudmFsdWUgPSBcIlwiO1xuICB9XG5cbiAgc3RhdGljIGVuYWJsZVJlbmFtZUxpc3RQb3B1cChsaXN0TmFtZSkge1xuICAgIGNvbnN0IHRhcmdldExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYCMke2xpc3ROYW1lLnJlcGxhY2UoL1xccy9nLCBcIlwiKX1gXG4gICAgKTtcbiAgICBjb25zdCBidG5Db250ZW50ID0gdGFyZ2V0TGlzdC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1jb250ZW50XCIpO1xuICAgIGNvbnN0IHBvcHVwID0gdGFyZ2V0TGlzdC5xdWVyeVNlbGVjdG9yKFwiLnJlbmFtZS1saXN0LXBvcHVwXCIpO1xuICAgIGNvbnN0IGxpc3RSZW5hbWVJbnB1dCA9IHRhcmdldExpc3QucXVlcnlTZWxlY3RvcihcIi5saXN0LXJlbmFtZS1pbnB1dFwiKTtcblxuICAgIHRhcmdldExpc3QuY2xhc3NMaXN0LmFkZChcImVkaXRlZC1saXN0XCIpO1xuICAgIGJ0bkNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgbGlzdFJlbmFtZUlucHV0LmZvY3VzKCk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkuZXhpdFJlbmFtZUxpc3RQb3BVcFdoZW5Mb3NlRm9jdXMpO1xuICB9XG5cbiAgc3RhdGljIGRpc2FibGVSZW5hbWVMaXN0UG9wdXAoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLmV4aXRSZW5hbWVMaXN0UG9wVXBXaGVuTG9zZUZvY3VzKTtcblxuICAgIGNvbnN0IHRhcmdldExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRlZC1saXN0XCIpO1xuICAgIGNvbnN0IGJ0bkNvbnRlbnQgPSB0YXJnZXRMaXN0LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNvbnRlbnRcIik7XG4gICAgY29uc3QgcG9wdXAgPSB0YXJnZXRMaXN0LnF1ZXJ5U2VsZWN0b3IoXCIucmVuYW1lLWxpc3QtcG9wdXBcIik7XG5cbiAgICB0YXJnZXRMaXN0LmNsYXNzTGlzdC5yZW1vdmUoXCJlZGl0ZWQtbGlzdFwiKTtcbiAgICBidG5Db250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcbiAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgc3RhdGljIGVuYWJsZVJlbmFtZVRhc2tQb3B1cCh0YXNrTmFtZSkge1xuICAgIGNvbnN0IHRhcmdldExpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFza05hbWUucmVwbGFjZSgvXFxzL2csIFwiXCIpfWApO1xuICAgIGNvbnN0IHRhc2tDb250ZW50ID0gdGFyZ2V0TGkucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRlbnRcIik7XG4gICAgY29uc3QgcG9wdXAgPSB0YXJnZXRMaS5xdWVyeVNlbGVjdG9yKFwiLnJlbmFtZS10YXNrLXBvcHVwXCIpO1xuICAgIGNvbnN0IHRhc2tSZW5hbWVJbnB1dCA9IHRhcmdldExpLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1yZW5hbWUtaW5wdXRcIik7XG5cbiAgICB0YXJnZXRMaS5jbGFzc0xpc3QuYWRkKFwiZWRpdGVkLXRhc2tcIik7XG4gICAgdGFza0NvbnRlbnQuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgdGFza1JlbmFtZUlucHV0LmZvY3VzKCk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkuZXhpdFJlbmFtZVRhc2tQb3BVcFdoZW5Mb3NlRm9jdXMpO1xuICB9XG5cbiAgc3RhdGljIGRpc2FibGVSZW5hbWVUYXNrUG9wdXAoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLmV4aXRSZW5hbWVUYXNrUG9wVXBXaGVuTG9zZUZvY3VzKTtcblxuICAgIGNvbnN0IHRhcmdldExpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0ZWQtdGFza1wiKTtcbiAgICBjb25zdCB0YXNrQ29udGVudCA9IHRhcmdldExpLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250ZW50XCIpO1xuICAgIGNvbnN0IHBvcHVwID0gdGFyZ2V0TGkucXVlcnlTZWxlY3RvcihcIi5yZW5hbWUtdGFzay1wb3B1cFwiKTtcblxuICAgIHRhcmdldExpLmNsYXNzTGlzdC5yZW1vdmUoXCJlZGl0ZWQtdGFza1wiKTtcbiAgICB0YXNrQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfVxuXG4gIHN0YXRpYyBleGl0QWRkTGlzdFBvcFVwV2hlbkxvc2VGb2N1cyhlKSB7XG4gICAgaWYgKFxuICAgICAgZS50YXJnZXQgIT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1uYW1lLWlucHV0XCIpICYmXG4gICAgICBlLnRhcmdldCAhPT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0LnN1Ym1pdEFkZExpc3RGb3JtXCIpXG4gICAgKSB7XG4gICAgICBVSS5kaXNhYmxlQWRkTGlzdFBvcHVwKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGV4aXRSZW5hbWVMaXN0UG9wVXBXaGVuTG9zZUZvY3VzKGUpIHtcbiAgICBpZiAoXG4gICAgICAhZS50YXJnZXQubWF0Y2hlcyhcIi5saXN0LXJlbmFtZS1pbnB1dFwiKSAmJlxuICAgICAgIWUudGFyZ2V0Lm1hdGNoZXMoXCJpbnB1dC5zdWJtaXRSZW5hbWVMaXN0Rm9ybVwiKVxuICAgICkge1xuICAgICAgVUkuZGlzYWJsZVJlbmFtZUxpc3RQb3B1cCgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBleGl0UmVuYW1lVGFza1BvcFVwV2hlbkxvc2VGb2N1cyhlKSB7XG4gICAgaWYgKFxuICAgICAgIWUudGFyZ2V0Lm1hdGNoZXMoXCIudGFzay1yZW5hbWUtaW5wdXRcIikgJiZcbiAgICAgICFlLnRhcmdldC5tYXRjaGVzKFwiaW5wdXQuc3VibWl0UmVuYW1lVGFza0Zvcm1cIilcbiAgICApIHtcbiAgICAgIFVJLmRpc2FibGVSZW5hbWVUYXNrUG9wdXAoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY2xlYXJUYXNrSW5wdXQoKSB7XG4gICAgY29uc3QgaW5wdXRUYXNrVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRUYXNrVGV4dFwiKTtcbiAgICBpbnB1dFRhc2tUZXh0LnZhbHVlID0gXCJcIjtcbiAgfVxufVxuIiwiaW1wb3J0IExvY2FsU3RvcmFnZSBmcm9tIFwiLi9Mb2NhbFN0b3JhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdG9yIHtcbiAgc3RhdGljIHZhbGlkYXRlVGFzayh0YXNrSW5wdXQpIHtcbiAgICBpZiAoIS9cXFMvLnRlc3QodGFza0lucHV0LnZhbHVlKSkge1xuICAgICAgdGFza0lucHV0LnNldEN1c3RvbVZhbGlkaXR5KFwiSW52YWxpZCB0YXNrIG5hbWUhXCIpO1xuICAgIH0gZWxzZSBpZiAoTG9jYWxTdG9yYWdlLmNvbnRhaW5zVGFzayh0YXNrSW5wdXQudmFsdWUpKSB7XG4gICAgICB0YXNrSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJUYXNrIG5hbWUgbXVzdCBiZSB1bmlxdWVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhc2tJbnB1dC5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdmFsaWRhdGVSZW5hbWVUYXNrKHRhc2tSZW5hbWVJbnB1dCwgdGFza05hbWUpIHtcbiAgICBjb25zdCBsaXN0ID0gTG9jYWxTdG9yYWdlLmdldExpc3RCeVRhc2tOYW1lKHRhc2tOYW1lKTtcbiAgICBjb25zdCBsaXN0TmFtZSA9IGxpc3QuZ2V0TmFtZSgpO1xuICAgIGNvbnN0IHRhc2sgPSBsaXN0LmdldFRhc2sodGFza05hbWUpO1xuXG4gICAgTG9jYWxTdG9yYWdlLnJlbW92ZVRhc2sobGlzdE5hbWUsIHRhc2spO1xuICAgIFZhbGlkYXRvci52YWxpZGF0ZVRhc2sodGFza1JlbmFtZUlucHV0KTtcbiAgICBMb2NhbFN0b3JhZ2UuYWRkVGFzayhsaXN0TmFtZSwgdGFzayk7XG4gIH1cblxuICBzdGF0aWMgdmFsaWRhdGVMaXN0KGxpc3RJbnB1dCkge1xuICAgIGlmICghL1xcUy8udGVzdChsaXN0SW5wdXQudmFsdWUpKSB7XG4gICAgICBsaXN0SW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJJbnZhbGlkIGxpc3QgbmFtZSFcIik7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIFtcIkFsbCB0YXNrc1wiLCBcIkNvbXBsZXRlZCB0YXNrc1wiLCBcIlBlbmRpbmcgdGFza3NcIl0uZmluZChcbiAgICAgICAgKHRhc2tOYW1lKSA9PiBsaXN0SW5wdXQudmFsdWUgPT09IHRhc2tOYW1lXG4gICAgICApXG4gICAgKSB7XG4gICAgICBsaXN0SW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXG4gICAgICAgIGBcIiR7bGlzdElucHV0LnZhbHVlfVwiIGlzIGEgcmVzZXJ2ZWQgbGlzdCBuYW1lYFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKExvY2FsU3RvcmFnZS5jb250YWluc0xpc3QobGlzdElucHV0LnZhbHVlKSkge1xuICAgICAgbGlzdElucHV0LnNldEN1c3RvbVZhbGlkaXR5KFwiTGlzdCBuYW1lIG11c3QgYmUgdW5pcXVlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0SW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHZhbGlkYXRlUmVuYW1lTGlzdChsaXN0UmVuYW1lSW5wdXQsIGxpc3ROYW1lKSB7XG4gICAgY29uc3QgbGlzdCA9IExvY2FsU3RvcmFnZS5nZXRMaXN0QnlOYW1lKGxpc3ROYW1lKTtcbiAgICBMb2NhbFN0b3JhZ2UucmVtb3ZlTGlzdChsaXN0TmFtZSk7XG4gICAgVmFsaWRhdG9yLnZhbGlkYXRlTGlzdChsaXN0UmVuYW1lSW5wdXQpO1xuICAgIExvY2FsU3RvcmFnZS5hZGRMaXN0KGxpc3QpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFVJIGZyb20gXCIuL21vZHVsZXMvVUlcIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IFwiLi9kcm9wZG93bk1lbnUuY3NzXCI7XG5cblVJLmxvYWRUb0RvTGlzdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9