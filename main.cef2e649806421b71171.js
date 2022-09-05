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
        listRenameInput.value = listRenameInput.value.trim();

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
          taskRenameInput.value = taskRenameInput.value.trim();

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
      listInput.value = listInput.value.trim();

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
      taskInput.value = taskInput.value.trim();

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
    if (
      !/\S/.test(taskInput.value) ||
      !/[a-zA-Z0-9_]/.test(taskInput.value) ||
      /[ ]{2,}/.test(taskInput.value)
    ) {
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
    if (
      !/\S/.test(listInput.value) ||
      !/[a-zA-Z0-9_ ]/.test(listInput.value) ||
      /[ ]{2,}/.test(listInput.value)
    ) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sVUFBVSxLQUFLLFlBQVksWUFBWSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLFlBQVksVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUss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Q0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0E4QjtBQUNSO0FBQ007O0FBRTVCLGdFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kcm9wZG93bk1lbnUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcGFsZXR0ZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Ryb3Bkb3duTWVudS5jc3M/NmI3ZCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9MaXN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9MaXN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvTG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9UYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYWxldHRlLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmZpbHRlcnMtbGlzdCBsaSxcXG4ubGlzdHMtbGlzdCBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrcy1saXN0IGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm9wdGlvbnMgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKi9cXG4vKiBGb3Igc2lkZWJhciAqL1xcbi8qKioqKioqKioqKioqKioqL1xcblxcbi5zaWRlYmFyIC5kcm9wZG93bi1tZW51LWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICB0b3A6IDZweDtcXG4gIHJpZ2h0OiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxufVxcblxcbi5zaWRlYmFyIC5kcm9wZG93bi1tZW51LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG59XFxuXFxuLnNpZGViYXIgLmRyb3Bkb3duLW1lbnUtYnRuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLnNpZGViYXIgLmRyb3Bkb3duLW1lbnUtYnRuIGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0cHg7XFxuICBsZWZ0OiAxMHB4O1xcbn1cXG5cXG4uc2lkZWJhciAuZHJvcGRvd24tYnRuIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB2YXIoLS1wMSk7XFxufVxcblxcbi5zaWRlYmFyIC5kcm9wZG93bi1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCA3NSwgNzUsIDEpO1xcbn1cXG5cXG4uc2lkZWJhciAuZHJvcGRvd24tYnRuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA1LCAxMDUsIDEwNSk7XFxufVxcblxcbi5saXN0cy1saXN0IC5kcm9wZG93bk1lbnUge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0b3A6IDEwMCU7XFxuICByaWdodDogMDtcXG5cXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxufVxcblxcbi5saXN0cy1saXN0IC5kcm9wZG93bk1lbnUuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLyoqKioqKioqKioqKiovXFxuLyogRm9yIHRhc2tzICovXFxuLyoqKioqKioqKioqKiovXFxuXFxuLnRhc2tzLWxpc3QgLmRyb3Bkb3duLW1lbnUtYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICB0b3A6IDZweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAxMnB4O1xcbn1cXG5cXG4udGFza3MtbGlzdCAuZHJvcGRvd24tbWVudS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bi1tZW51LWJ0bi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bi1tZW51LWJ0biBpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNnB4O1xcbiAgbGVmdDogMTBweDtcXG4gIGNvbG9yOiB2YXIoLS1wMSk7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bi1idG4ge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB2YXIoLS1wMSk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2tzLWxpc3QgLmRyb3Bkb3duLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsIDc1LCA3NSwgMSk7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bk1lbnUge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0b3A6IDEwMCU7XFxuICByaWdodDogMDtcXG5cXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bk1lbnUgLm9wdGlvbnMgbGkge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bk1lbnUuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLyogTWVkaWEgcXVlcmllcyAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA5ODBweCkge1xcbiAgLnNpZGViYXIgLmRyb3Bkb3duLW1lbnUtYnRuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAuc2lkZWJhciAuZHJvcGRvd24tbWVudS1idG4ge1xcbiAgICByaWdodDogMTBweDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Ryb3Bkb3duTWVudS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQSxpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCLGlCQUFpQjs7QUFFakI7RUFDRSxjQUFjOztFQUVkLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLFVBQVU7RUFDViw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCOztFQUVsQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjs7RUFFcEIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULFFBQVE7O0VBRVIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtBQUN0Qjs7QUFFQSxjQUFjO0FBQ2QsY0FBYztBQUNkLGNBQWM7O0FBRWQ7RUFDRSxZQUFZO0VBQ1osa0JBQWtCOztFQUVsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCOztFQUVqQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7O0VBRXBCLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFDVCxRQUFROztFQUVSLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi9wYWxldHRlLmNzc1xcXCI7XFxuXFxuLmZpbHRlcnMtbGlzdCBsaSxcXG4ubGlzdHMtbGlzdCBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrcy1saXN0IGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm9wdGlvbnMgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKi9cXG4vKiBGb3Igc2lkZWJhciAqL1xcbi8qKioqKioqKioqKioqKioqL1xcblxcbi5zaWRlYmFyIC5kcm9wZG93bi1tZW51LWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICB0b3A6IDZweDtcXG4gIHJpZ2h0OiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxufVxcblxcbi5zaWRlYmFyIC5kcm9wZG93bi1tZW51LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG59XFxuXFxuLnNpZGViYXIgLmRyb3Bkb3duLW1lbnUtYnRuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLnNpZGViYXIgLmRyb3Bkb3duLW1lbnUtYnRuIGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0cHg7XFxuICBsZWZ0OiAxMHB4O1xcbn1cXG5cXG4uc2lkZWJhciAuZHJvcGRvd24tYnRuIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB2YXIoLS1wMSk7XFxufVxcblxcbi5zaWRlYmFyIC5kcm9wZG93bi1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCA3NSwgNzUsIDEpO1xcbn1cXG5cXG4uc2lkZWJhciAuZHJvcGRvd24tYnRuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA1LCAxMDUsIDEwNSk7XFxufVxcblxcbi5saXN0cy1saXN0IC5kcm9wZG93bk1lbnUge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0b3A6IDEwMCU7XFxuICByaWdodDogMDtcXG5cXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxufVxcblxcbi5saXN0cy1saXN0IC5kcm9wZG93bk1lbnUuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLyoqKioqKioqKioqKiovXFxuLyogRm9yIHRhc2tzICovXFxuLyoqKioqKioqKioqKiovXFxuXFxuLnRhc2tzLWxpc3QgLmRyb3Bkb3duLW1lbnUtYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICB0b3A6IDZweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAxMnB4O1xcbn1cXG5cXG4udGFza3MtbGlzdCAuZHJvcGRvd24tbWVudS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bi1tZW51LWJ0bi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bi1tZW51LWJ0biBpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNnB4O1xcbiAgbGVmdDogMTBweDtcXG4gIGNvbG9yOiB2YXIoLS1wMSk7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bi1idG4ge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB2YXIoLS1wMSk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2tzLWxpc3QgLmRyb3Bkb3duLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsIDc1LCA3NSwgMSk7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bk1lbnUge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0b3A6IDEwMCU7XFxuICByaWdodDogMDtcXG5cXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bk1lbnUgLm9wdGlvbnMgbGkge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bk1lbnUuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLyogTWVkaWEgcXVlcmllcyAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA5ODBweCkge1xcbiAgLnNpZGViYXIgLmRyb3Bkb3duLW1lbnUtYnRuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAuc2lkZWJhciAuZHJvcGRvd24tbWVudS1idG4ge1xcbiAgICByaWdodDogMTBweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1wMDogI2RjY2RmMDtcXG4gIC0tcDE6ICNjOGI2ZTI7XFxuICAtLXAyOiAjYThhNGNlO1xcbiAgLS1wMzogIzdhODZiNjtcXG4gIC0tcDN0OiAjN2E4NmI2NjM7XFxuICAtLXA0OiAjNDk1YzgzO1xcbiAgLS1wNTogIzM5NGE2YjtcXG4gIC0tcDY6ICMzMDNjNTU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wYWxldHRlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsYUFBYTtFQUNiLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGFBQWE7RUFDYixhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1wMDogI2RjY2RmMDtcXG4gIC0tcDE6ICNjOGI2ZTI7XFxuICAtLXAyOiAjYThhNGNlO1xcbiAgLS1wMzogIzdhODZiNjtcXG4gIC0tcDN0OiAjN2E4NmI2NjM7XFxuICAtLXA0OiAjNDk1YzgzO1xcbiAgLS1wNTogIzM5NGE2YjtcXG4gIC0tcDY6ICMzMDNjNTU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYWxldHRlLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJhc3NldHMvY2lyY2xlLXJlZ3VsYXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2NpcmNsZS1jaGVjay1yZWd1bGFyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0byZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogdmFyKC0tcDEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDQpO1xcbiAgbWluLXdpZHRoOiAyNTBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1wMSk7XFxufVxcblxcbnAge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogVXRpbGl0eSBjbGFzc2VzICovXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmlucHV0LXRleHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDQpO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG4gIHBhZGRpbmc6IDRweCAxMnB4IDRweCAxMnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qICAqL1xcblxcbmJvZHkgPiAuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyIDRmciA1MHB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuLmhlYWRlciB7XFxuICBnYXA6IDhweDtcXG4gIGdyaWQtY29sdW1uOiAxLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4ucHJpbWFyeS1oZWFkaW5nIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLyogU2lkZWJhciAqL1xcbi5zaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXA1KTtcXG59XFxuXFxuLnNpZGViYXItY29udGVudCB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIG1hcmdpbjogMTZweCAxNnB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNpZGViYXIgaSB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5zaWRlYmFyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wMyk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgcGFkZGluZzogMHB4IDhweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxuXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xcbn1cXG5cXG4uc2lkZWJhciAubGlzdC1idG4ge1xcbiAgcGFkZGluZy1yaWdodDogNDBweDtcXG59XFxuXFxuLnNpZGViYXIgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXAyKTtcXG59XFxuXFxuLnNpZGViYXIgYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wMSk7XFxufVxcblxcbi5saXN0cyB7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubGlzdHMgaDIsXFxuLmZpbHRlcnMgaDIge1xcbiAgY29sb3I6IHZhcigtLXAyKTtcXG59XFxuXFxuLmZpbHRlcnMtbGlzdCxcXG4ubGlzdHMtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA4cHg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG59XFxuXFxuLmxpc3RzLWxpc3QgbGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubGlzdHMtbGlzdCAuYnRuLWNvbnRlbnQuZGlzYWJsZWQge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ubGlzdHMtbGlzdCAucmVuYW1lLWxpc3QtcG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5saXN0cy1saXN0IC5yZW5hbWUtbGlzdC1wb3B1cC5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5saXN0LXJlbmFtZS1pbnB1dCB7XFxuICBtYXJnaW4tdG9wOiAwcHg7XFxufVxcblxcbi5maWx0ZXItaWNvbixcXG4ubGlzdC1pY29uLFxcbi5hZGQtbGlzdC1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTJweDtcXG4gIGxlZnQ6IDEwcHg7XFxufVxcblxcbi5zaWRlYmFyIC5hZGQtbGlzdC1idG4ge1xcbiAgZ2FwOiA0cHg7XFxuICBwYWRkaW5nOiAwcHggMTJweDtcXG4gIHBhZGRpbmctbGVmdDogMjhweDtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcblxcbi5hZGQtbGlzdC1idG4uYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmFkZC1saXN0LXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDI2cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFkZC1saXN0LXBvcHVwIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wNCk7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgcGFkZGluZzogNHB4IDEycHggNHB4IDEycHg7XFxuICB3aWR0aDogMTUwcHg7XFxufVxcblxcbi5hZGQtbGlzdC1wb3B1cCBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1wMyk7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiO1xcbn1cXG5cXG4uYWRkLWxpc3QtcG9wdXAuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBNYWluICovXFxuLm1haW4ge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcblxcbiAgcGFkZGluZzogMzJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXA2KTtcXG59XFxuXFxuLm1haW4taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcblxcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG59XFxuXFxuLm1haW4taGVhZGVyIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uYWRkVGFza0Zvcm0ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tYWluLWhlYWRlciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1wMyk7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiO1xcbn1cXG5cXG4udGFza3MtbGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4udGFza3MtbGlzdCBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi50YXNrLWNvbnRlbnQge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnRhc2stY29udGVudC5kaXNhYmxlZCB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5yZW5hbWUtdGFzay1wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMjBweDtcXG4gIHRvcDogNnB4O1xcbn1cXG5cXG4ucmVuYW1lLXRhc2stcG9wdXAuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udGFzay1yZW5hbWUtaW5wdXQge1xcbiAgbWFyZ2luLXRvcDogMHB4O1xcbn1cXG5cXG4udGFzayB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFzayBsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweCAwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XFxuICBjb2xvcjogdmFyKC0tcDEpO1xcbn1cXG5cXG4udGFzayBsYWJlbDo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgbGVmdDogMTJweDtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogdmFyKC0tcDIpO1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wM3QpO1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG4uZm9vdGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiA0IC8gNTtcXG5cXG4gIGdhcDogOHB4O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG4vKiBNZWRpYSBxdWVyaWVzICovXFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XFxuICAuc2lkZWJhci1jb250ZW50IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5ODBweCkge1xcbiAgYm9keSA+IC5jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyIDUwcHg7XFxuICB9XFxuXFxuICAuaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICB9XFxuXFxuICAuc2lkZWJhciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgfVxcblxcbiAgLmZpbHRlcnMtbGlzdCA+IGxpIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLnNpZGViYXItY29udGVudCB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIG1hcmdpbjogMzJweDtcXG4gIH1cXG5cXG4gIC5tYWluIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICB9XFxuXFxuICAuZm9vdGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICB9XFxuXFxuICAuZmlsdGVycy1saXN0LFxcbiAgLmxpc3RzLWxpc3Qge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmxpc3RzIGgyIHtcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyIGgyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyIC5hZGQtbGlzdC1idG4ge1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgfVxcblxcbiAgLmFkZC1saXN0LXBvcHVwIHtcXG4gICAgdG9wOiA1OXB4O1xcbiAgfVxcblxcbiAgLmxpc3RzLFxcbiAgLmZpbHRlcnMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7OztFQUdFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixn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QUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1oseURBQWtEO0VBQ2xELDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHlEQUF3RDtBQUMxRDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUEsV0FBVztBQUNYO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7O0VBRWYsUUFBUTtFQUNSLGtCQUFrQjtBQUNwQjs7QUFFQSxrQkFBa0I7O0FBRWxCO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjtBQUNBO0VBQ0U7SUFDRSw4QkFBOEI7SUFDOUIsa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBOztJQUVFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTs7SUFFRSxXQUFXO0VBQ2I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvJmRpc3BsYXk9c3dhcFxcXCIpO1xcbkBpbXBvcnQgXFxcIi4vcGFsZXR0ZS5jc3NcXFwiO1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogdmFyKC0tcDEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDQpO1xcbiAgbWluLXdpZHRoOiAyNTBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1wMSk7XFxufVxcblxcbnAge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogVXRpbGl0eSBjbGFzc2VzICovXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmlucHV0LXRleHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDQpO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG4gIHBhZGRpbmc6IDRweCAxMnB4IDRweCAxMnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qICAqL1xcblxcbmJvZHkgPiAuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyIDRmciA1MHB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuLmhlYWRlciB7XFxuICBnYXA6IDhweDtcXG4gIGdyaWQtY29sdW1uOiAxLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4ucHJpbWFyeS1oZWFkaW5nIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLyogU2lkZWJhciAqL1xcbi5zaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXA1KTtcXG59XFxuXFxuLnNpZGViYXItY29udGVudCB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIG1hcmdpbjogMTZweCAxNnB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNpZGViYXIgaSB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5zaWRlYmFyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wMyk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgcGFkZGluZzogMHB4IDhweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxuXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xcbn1cXG5cXG4uc2lkZWJhciAubGlzdC1idG4ge1xcbiAgcGFkZGluZy1yaWdodDogNDBweDtcXG59XFxuXFxuLnNpZGViYXIgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXAyKTtcXG59XFxuXFxuLnNpZGViYXIgYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wMSk7XFxufVxcblxcbi5saXN0cyB7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubGlzdHMgaDIsXFxuLmZpbHRlcnMgaDIge1xcbiAgY29sb3I6IHZhcigtLXAyKTtcXG59XFxuXFxuLmZpbHRlcnMtbGlzdCxcXG4ubGlzdHMtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA4cHg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG59XFxuXFxuLmxpc3RzLWxpc3QgbGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubGlzdHMtbGlzdCAuYnRuLWNvbnRlbnQuZGlzYWJsZWQge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ubGlzdHMtbGlzdCAucmVuYW1lLWxpc3QtcG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5saXN0cy1saXN0IC5yZW5hbWUtbGlzdC1wb3B1cC5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5saXN0LXJlbmFtZS1pbnB1dCB7XFxuICBtYXJnaW4tdG9wOiAwcHg7XFxufVxcblxcbi5maWx0ZXItaWNvbixcXG4ubGlzdC1pY29uLFxcbi5hZGQtbGlzdC1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTJweDtcXG4gIGxlZnQ6IDEwcHg7XFxufVxcblxcbi5zaWRlYmFyIC5hZGQtbGlzdC1idG4ge1xcbiAgZ2FwOiA0cHg7XFxuICBwYWRkaW5nOiAwcHggMTJweDtcXG4gIHBhZGRpbmctbGVmdDogMjhweDtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcblxcbi5hZGQtbGlzdC1idG4uYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmFkZC1saXN0LXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDI2cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFkZC1saXN0LXBvcHVwIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wNCk7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgcGFkZGluZzogNHB4IDEycHggNHB4IDEycHg7XFxuICB3aWR0aDogMTUwcHg7XFxufVxcblxcbi5hZGQtbGlzdC1wb3B1cCBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1wMyk7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiO1xcbn1cXG5cXG4uYWRkLWxpc3QtcG9wdXAuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBNYWluICovXFxuLm1haW4ge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcblxcbiAgcGFkZGluZzogMzJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXA2KTtcXG59XFxuXFxuLm1haW4taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcblxcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG59XFxuXFxuLm1haW4taGVhZGVyIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uYWRkVGFza0Zvcm0ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tYWluLWhlYWRlciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1wMyk7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiO1xcbn1cXG5cXG4udGFza3MtbGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4udGFza3MtbGlzdCBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi50YXNrLWNvbnRlbnQge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnRhc2stY29udGVudC5kaXNhYmxlZCB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5yZW5hbWUtdGFzay1wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMjBweDtcXG4gIHRvcDogNnB4O1xcbn1cXG5cXG4ucmVuYW1lLXRhc2stcG9wdXAuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udGFzay1yZW5hbWUtaW5wdXQge1xcbiAgbWFyZ2luLXRvcDogMHB4O1xcbn1cXG5cXG4udGFzayB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFzayBsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweCAwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XFxuICBjb2xvcjogdmFyKC0tcDEpO1xcbn1cXG5cXG4udGFzayBsYWJlbDo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgbGVmdDogMTJweDtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJhc3NldHMvY2lyY2xlLXJlZ3VsYXIuc3ZnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiYXNzZXRzL2NpcmNsZS1jaGVjay1yZWd1bGFyLnN2Z1xcXCIpO1xcbn1cXG5cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiB2YXIoLS1wMik7XFxufVxcblxcbi50YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXAzdCk7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcbi5mb290ZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDQgLyA1O1xcblxcbiAgZ2FwOiA4cHg7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxufVxcblxcbi8qIE1lZGlhIHF1ZXJpZXMgKi9cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcXG4gIC5zaWRlYmFyLWNvbnRlbnQge1xcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDk4MHB4KSB7XFxuICBib2R5ID4gLmNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnIgNTBweDtcXG4gIH1cXG5cXG4gIC5oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICB9XFxuXFxuICAuZmlsdGVycy1saXN0ID4gbGkge1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcblxcbiAgLnNpZGViYXIgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuc2lkZWJhci1jb250ZW50IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgbWFyZ2luOiAzMnB4O1xcbiAgfVxcblxcbiAgLm1haW4ge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gIH1cXG5cXG4gIC5maWx0ZXJzLWxpc3QsXFxuICAubGlzdHMtbGlzdCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAubGlzdHMgaDIge1xcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgfVxcblxcbiAgLnNpZGViYXIgaDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgfVxcblxcbiAgLnNpZGViYXIgLmFkZC1saXN0LWJ0biB7XFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxuICB9XFxuXFxuICAuYWRkLWxpc3QtcG9wdXAge1xcbiAgICB0b3A6IDU5cHg7XFxuICB9XFxuXFxuICAubGlzdHMsXFxuICAuZmlsdGVycyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZHJvcGRvd25NZW51LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZHJvcGRvd25NZW51LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3Qge1xuICBjb25zdHJ1Y3RvcihsaXN0TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IGxpc3ROYW1lO1xuICAgIHRoaXMuYXJyYXkgPSBbXTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBhZGRUYXNrKHRhc2spIHtcbiAgICB0YXNrLnNldE9yaWdpbkxpc3QodGhpcy5uYW1lKTtcbiAgICB0aGlzLmFycmF5LnB1c2godGFzayk7XG4gIH1cblxuICByZW1vdmVUYXNrKHRhc2tOYW1lKSB7XG4gICAgdGhpcy5hcnJheS5zcGxpY2UodGhpcy5nZXRUYXNrSW5kZXgodGFza05hbWUpLCAxKTtcbiAgfVxuXG4gIGdldFRhc2sodGFza05hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5maW5kKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PT0gdGFza05hbWUpO1xuICB9XG5cbiAgZ2V0VGFza0luZGV4KHRhc2tOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PT0gdGFza05hbWUpO1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBzZXRBcnJheShhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdHMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFycmF5ID0gW107XG4gIH1cblxuICBhZGRMaXN0KGxpc3QpIHtcbiAgICB0aGlzLmFycmF5LnB1c2gobGlzdCk7XG4gIH1cblxuICByZW5hbWVMaXN0KG9yaWdpbmFsTGlzdE5hbWUsIG5ld0xpc3ROYW1lKSB7XG4gICAgY29uc3QgbGlzdCA9IHRoaXMuZ2V0TGlzdEJ5TmFtZShvcmlnaW5hbExpc3ROYW1lKTtcbiAgICBsaXN0LnNldE5hbWUobmV3TGlzdE5hbWUpO1xuICAgIGxpc3QuYXJyYXkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgdGFzay5zZXRPcmlnaW5MaXN0KG5ld0xpc3ROYW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUxpc3QobGlzdE5hbWUpIHtcbiAgICB0aGlzLmFycmF5LnNwbGljZSh0aGlzLmdldExpc3RJbmRleChsaXN0TmFtZSksIDEpO1xuICB9XG5cbiAgZ2V0TGlzdEluZGV4KGxpc3ROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkuZmluZEluZGV4KChsaXN0KSA9PiBsaXN0LmdldE5hbWUoKSA9PT0gbGlzdE5hbWUpO1xuICB9XG5cbiAgZ2V0VGFza0J5VGFza05hbWUodGFza05hbWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLmFycmF5W2ldO1xuICAgICAgY29uc3QgcmVzdWx0ID0gbGlzdC5nZXRBcnJheS5maW5kKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PT0gdGFza05hbWUpO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0TGlzdEJ5VGFza05hbWUodGFza05hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5maW5kKChsaXN0KSA9PlxuICAgICAgbGlzdC5nZXRBcnJheSgpLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09PSB0YXNrTmFtZSlcbiAgICApO1xuICB9XG5cbiAgZ2V0TGlzdEJ5TmFtZShsaXN0TmFtZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LmZpbmQoKGxpc3QpID0+IGxpc3QuZ2V0TmFtZSgpID09PSBsaXN0TmFtZSk7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIHNldEFycmF5KGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG59XG4iLCJpbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XG5pbXBvcnQgTGlzdHMgZnJvbSBcIi4vTGlzdHNcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxTdG9yYWdlIHtcbiAgc3RhdGljIHNhdmVMaXN0cyhsaXN0cykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlzdHNcIiwgSlNPTi5zdHJpbmdpZnkobGlzdHMpKTtcbiAgfVxuXG4gIHN0YXRpYyAjbG9hZExpc3RzKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdHNcIikpO1xuICB9XG5cbiAgc3RhdGljIGdldExpc3RzT2JqZWN0KCkge1xuICAgIGNvbnN0IGxpc3RzID0gT2JqZWN0LmFzc2lnbihuZXcgTGlzdHMoKSwgdGhpcy4jbG9hZExpc3RzKCkpO1xuXG4gICAgbGlzdHMuc2V0QXJyYXkoXG4gICAgICBsaXN0cy5nZXRBcnJheSgpLm1hcCgobGlzdCkgPT4gT2JqZWN0LmFzc2lnbihuZXcgTGlzdCgpLCBsaXN0KSlcbiAgICApO1xuXG4gICAgbGlzdHMuZ2V0QXJyYXkoKS5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICBsaXN0LnNldEFycmF5KFxuICAgICAgICBsaXN0LmdldEFycmF5KCkubWFwKCh0YXNrKSA9PiBPYmplY3QuYXNzaWduKG5ldyBUYXNrKCksIHRhc2spKVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBsaXN0cztcbiAgfVxuXG4gIHN0YXRpYyBnZXRMaXN0QnlOYW1lKGxpc3ROYW1lKSB7XG4gICAgY29uc3QgbGlzdHMgPSBMb2NhbFN0b3JhZ2UuZ2V0TGlzdHNPYmplY3QoKTtcbiAgICByZXR1cm4gbGlzdHMuZ2V0TGlzdEJ5TmFtZShsaXN0TmFtZSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0TGlzdEJ5VGFza05hbWUodGFza05hbWUpIHtcbiAgICBjb25zdCBsaXN0cyA9IExvY2FsU3RvcmFnZS5nZXRMaXN0c09iamVjdCgpO1xuICAgIHJldHVybiBsaXN0cy5nZXRMaXN0QnlUYXNrTmFtZSh0YXNrTmFtZSk7XG4gIH1cblxuICBzdGF0aWMgYWRkTGlzdChsaXN0KSB7XG4gICAgY29uc3QgbGlzdHMgPSBMb2NhbFN0b3JhZ2UuZ2V0TGlzdHNPYmplY3QoKTtcbiAgICBsaXN0cy5hZGRMaXN0KGxpc3QpO1xuICAgIExvY2FsU3RvcmFnZS5zYXZlTGlzdHMobGlzdHMpO1xuICB9XG5cbiAgc3RhdGljIHJlbmFtZUxpc3Qob3JpZ2luYWxMaXN0TmFtZSwgbmV3TGlzdE5hbWUpIHtcbiAgICBjb25zdCBsaXN0cyA9IExvY2FsU3RvcmFnZS5nZXRMaXN0c09iamVjdCgpO1xuICAgIGxpc3RzLnJlbmFtZUxpc3Qob3JpZ2luYWxMaXN0TmFtZSwgbmV3TGlzdE5hbWUpO1xuICAgIExvY2FsU3RvcmFnZS5zYXZlTGlzdHMobGlzdHMpO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZUxpc3QobGlzdE5hbWUpIHtcbiAgICBjb25zdCBsaXN0cyA9IExvY2FsU3RvcmFnZS5nZXRMaXN0c09iamVjdCgpO1xuICAgIGxpc3RzLnJlbW92ZUxpc3QobGlzdE5hbWUpO1xuICAgIExvY2FsU3RvcmFnZS5zYXZlTGlzdHMobGlzdHMpO1xuICB9XG5cbiAgc3RhdGljIGdldFRhc2sodGFza05hbWUpIHtcbiAgICBjb25zdCBsaXN0cyA9IExvY2FsU3RvcmFnZS5nZXRMaXN0c09iamVjdCgpO1xuICAgIHJldHVybiBsaXN0cy5nZXRUYXNrQnlUYXNrTmFtZSh0YXNrTmFtZSk7XG4gIH1cblxuICBzdGF0aWMgYWRkVGFzayhsaXN0TmFtZSwgdGFzaykge1xuICAgIGNvbnN0IGxpc3RzID0gTG9jYWxTdG9yYWdlLmdldExpc3RzT2JqZWN0KCk7XG4gICAgY29uc3QgdGFyZ2V0TGlzdCA9IGxpc3RzLmdldExpc3RCeU5hbWUobGlzdE5hbWUpO1xuICAgIHRhcmdldExpc3QuYWRkVGFzayh0YXNrKTtcbiAgICBMb2NhbFN0b3JhZ2Uuc2F2ZUxpc3RzKGxpc3RzKTtcbiAgfVxuXG4gIHN0YXRpYyByZW5hbWVUYXNrKGxpc3ROYW1lLCB0YXNrLCBuZXdUYXNrTmFtZSkge1xuICAgIGNvbnN0IGxpc3RzID0gTG9jYWxTdG9yYWdlLmdldExpc3RzT2JqZWN0KCk7XG4gICAgY29uc3QgdGFyZ2V0TGlzdCA9IGxpc3RzLmdldExpc3RCeU5hbWUobGlzdE5hbWUpO1xuICAgIHRhcmdldExpc3QuZ2V0VGFzayh0YXNrLmdldE5hbWUoKSkuc2V0TmFtZShuZXdUYXNrTmFtZSk7XG4gICAgTG9jYWxTdG9yYWdlLnNhdmVMaXN0cyhsaXN0cyk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlVGFzayhsaXN0TmFtZSwgdGFzaykge1xuICAgIGNvbnN0IGxpc3RzID0gTG9jYWxTdG9yYWdlLmdldExpc3RzT2JqZWN0KCk7XG4gICAgY29uc3QgbGlzdCA9IGxpc3RzLmdldExpc3RCeU5hbWUobGlzdE5hbWUpO1xuICAgIGxpc3QucmVtb3ZlVGFzayh0YXNrLmdldE5hbWUoKSk7XG4gICAgTG9jYWxTdG9yYWdlLnNhdmVMaXN0cyhsaXN0cyk7XG4gIH1cblxuICBzdGF0aWMgY29udGFpbnNUYXNrKHRhc2tOYW1lKSB7XG4gICAgY29uc3QgbGlzdHMgPSBMb2NhbFN0b3JhZ2UuZ2V0TGlzdHNPYmplY3QoKTtcbiAgICByZXR1cm4gbGlzdHMuZ2V0TGlzdEJ5VGFza05hbWUodGFza05hbWUpO1xuICB9XG5cbiAgc3RhdGljIGNvbnRhaW5zTGlzdChsaXN0TmFtZSkge1xuICAgIHJldHVybiBMb2NhbFN0b3JhZ2UuZ2V0TGlzdEJ5TmFtZShsaXN0TmFtZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0U3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZTtcbiAgfVxuXG4gIHRvZ2dsZVN0YXR1cygpIHtcbiAgICB0aGlzLmFjdGl2ZSA9ICF0aGlzLmFjdGl2ZTtcbiAgfVxuXG4gIGdldE9yaWdpbkxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMub3JpZ2luTGlzdE5hbWU7XG4gIH1cblxuICBzZXRPcmlnaW5MaXN0KGxpc3ROYW1lKSB7XG4gICAgdGhpcy5vcmlnaW5MaXN0TmFtZSA9IGxpc3ROYW1lO1xuICB9XG59XG4iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XG5pbXBvcnQgTG9jYWxTdG9yYWdlIGZyb20gXCIuL0xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IFZhbGlkYXRvciBmcm9tIFwiLi9WYWxpZGF0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xuICBzdGF0aWMgbG9hZFRvRG9MaXN0KCkge1xuICAgIFVJLmxvYWRMaXN0cygpO1xuICAgIFVJLnNldHVwQnV0dG9ucygpO1xuICAgIFVJLmxvYWRBbGxUYXNrcygpO1xuICB9XG5cbiAgLy8gTG9hZGluZ1xuICBzdGF0aWMgbG9hZExpc3RzKCkge1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0cyB1bFwiKTtcbiAgICB1bC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIExvY2FsU3RvcmFnZS5nZXRMaXN0c09iamVjdCgpXG4gICAgICAuZ2V0QXJyYXkoKVxuICAgICAgLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgICAgVUkuY3JlYXRlTGlzdChsaXN0LmdldE5hbWUoKSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVMaXN0KGxpc3ROYW1lKSB7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RzLWxpc3RcIik7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgICBsaS5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImJ0bi1jb250ZW50XCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwibGlzdC1idG5cIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLW5vdGUtc3RpY2t5IGxpc3QtaWNvblwiPjwvaT5cbiAgICAgICAgPHA+JHtsaXN0TmFtZX08L3A+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93blwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZHJvcGRvd24tbWVudS1idG5cIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsXCI+PC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duTWVudVwiPlxuICAgICAgICAgIDx1bCBjbGFzcz1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgPGxpPjxidXR0b24gY2xhc3M9XCJkcm9wZG93bi1idG4gbGlzdC1lZGl0XCI+RWRpdDwvYnV0dG9uPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YnV0dG9uIGNsYXNzPVwiZHJvcGRvd24tYnRuIGxpc3QtZGVsZXRlXCI+RGVsZXRlPC9idXR0b24+PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyZW5hbWUtbGlzdC1wb3B1cFwiPlxuICAgICAgPGZvcm0gY2xhc3M9XCJyZW5hbWUtbGlzdC1mb3JtXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzcz1cImlucHV0LXRleHQgbGlzdC1yZW5hbWUtaW5wdXRcIlxuICAgICAgICAgIHZhbHVlPVwiJHtsaXN0TmFtZX1cIlxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJzdWJtaXRSZW5hbWVMaXN0Rm9ybVwiIHR5cGU9XCJzdWJtaXRcIiBoaWRkZW4gLz5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICAgIGxpLnNldEF0dHJpYnV0ZShcImlkXCIsIGxpc3ROYW1lLnJlcGxhY2UoL1xccy9nLCBcIlwiKSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuXG4gICAgY29uc3QgbGlzdEVkaXQgPSBsaS5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtZWRpdFwiKTtcbiAgICBjb25zdCByZW5hbWVMaXN0Rm9ybSA9IGxpLnF1ZXJ5U2VsZWN0b3IoXCIucmVuYW1lLWxpc3QtZm9ybVwiKTtcbiAgICBjb25zdCBsaXN0RGVsZXRlID0gbGkucXVlcnlTZWxlY3RvcihcIi5saXN0LWRlbGV0ZVwiKTtcbiAgICBjb25zdCBidG5Db250ZW50ID0gbGkucXVlcnlTZWxlY3RvcihcIi5idG4tY29udGVudFwiKTtcblxuICAgIGNvbnN0IGxpc3REcm9wZG93bk1lbnVCdXR0b24gPSBsaS5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLW1lbnUtYnRuXCIpO1xuICAgIGNvbnN0IGxpc3REcm9wZG93bk1lbnUgPSBsaS5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duTWVudVwiKTtcblxuICAgIGxpc3REcm9wZG93bk1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBsaXN0RHJvcGRvd25NZW51QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICBsaXN0RHJvcGRvd25NZW51LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUxKSA9PiB7XG4gICAgICAgIGlmIChlMS50YXJnZXQgIT09IGxpc3REcm9wZG93bk1lbnUpIHtcbiAgICAgICAgICBsaXN0RHJvcGRvd25NZW51QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgbGlzdERyb3Bkb3duTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG5cbiAgICBidG5Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBVSS5lbmFibGVUYXNrSW5wdXQoKTtcbiAgICAgIFVJLmxvYWRGcmVzaExpc3QobGlzdE5hbWUpO1xuICAgIH0pO1xuXG4gICAgbGlzdERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIExvY2FsU3RvcmFnZS5yZW1vdmVMaXN0KGxpc3ROYW1lKTtcbiAgICAgIFVJLmxvYWRMaXN0cygpO1xuXG4gICAgICBjb25zdCBhY3RpdmVMaXN0VGl0bGUgPSBVSS5nZXRBY3RpdmVMaXN0VGl0bGUoKTtcbiAgICAgIGlmIChsaXN0TmFtZSA9PT0gYWN0aXZlTGlzdFRpdGxlIHx8IGFjdGl2ZUxpc3RUaXRsZSA9PT0gXCJBbGwgdGFza3NcIikge1xuICAgICAgICBVSS5sb2FkQWxsVGFza3MoKTtcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlTGlzdFRpdGxlID09PSBcIkNvbXBsZXRlZCB0YXNrc1wiKSB7XG4gICAgICAgIFVJLmxvYWRBbGxDb21wbGV0ZWRUYXNrcygpO1xuICAgICAgfSBlbHNlIGlmIChhY3RpdmVMaXN0VGl0bGUgPT09IFwiUGVuZGluZyB0YXNrc1wiKSB7XG4gICAgICAgIFVJLmxvYWRBbGxQZW5kaW5nVGFza3MoKTtcbiAgICAgIH1cbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG5cbiAgICBsaXN0RWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIFVJLmVuYWJsZVJlbmFtZUxpc3RQb3B1cChsaXN0TmFtZSk7XG5cbiAgICAgIGNvbnN0IGxpc3RSZW5hbWVJbnB1dCA9IGxpLnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1yZW5hbWUtaW5wdXRcIik7XG5cbiAgICAgIHJlbmFtZUxpc3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUxKSA9PiB7XG4gICAgICAgIGUxLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxpc3RSZW5hbWVJbnB1dC52YWx1ZSA9IGxpc3RSZW5hbWVJbnB1dC52YWx1ZS50cmltKCk7XG5cbiAgICAgICAgY29uc3QgbmV3TGlzdE5hbWUgPSBsaXN0UmVuYW1lSW5wdXQudmFsdWU7XG5cbiAgICAgICAgVmFsaWRhdG9yLnZhbGlkYXRlUmVuYW1lTGlzdChsaXN0UmVuYW1lSW5wdXQsIGxpc3ROYW1lKTtcbiAgICAgICAgaWYgKGxpc3RSZW5hbWVJbnB1dC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICAgIFVJLmRpc2FibGVSZW5hbWVMaXN0UG9wdXAoKTtcbiAgICAgICAgICBMb2NhbFN0b3JhZ2UucmVuYW1lTGlzdChsaXN0TmFtZSwgbmV3TGlzdE5hbWUpO1xuICAgICAgICAgIFVJLmxvYWRMaXN0cygpO1xuXG4gICAgICAgICAgY29uc3QgYWN0aXZlTGlzdFRpdGxlID0gVUkuZ2V0QWN0aXZlTGlzdFRpdGxlKCk7XG5cbiAgICAgICAgICBpZiAoYWN0aXZlTGlzdFRpdGxlID09PSBsaXN0TmFtZSkge1xuICAgICAgICAgICAgVUkubG9hZEZyZXNoTGlzdChuZXdMaXN0TmFtZSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChhY3RpdmVMaXN0VGl0bGUgPT09IFwiQWxsIHRhc2tzXCIpIHtcbiAgICAgICAgICAgIFVJLmxvYWRBbGxUYXNrcygpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlTGlzdFRpdGxlID09PSBcIkNvbXBsZXRlZCB0YXNrc1wiKSB7XG4gICAgICAgICAgICBVSS5sb2FkQWxsQ29tcGxldGVkVGFza3MoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGFjdGl2ZUxpc3RUaXRsZSA9PT0gXCJQZW5kaW5nIHRhc2tzXCIpIHtcbiAgICAgICAgICAgIFVJLmxvYWRBbGxQZW5kaW5nVGFza3MoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaXN0UmVuYW1lSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpc3RSZW5hbWVJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgIGxpc3RSZW5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICBsaXN0UmVuYW1lSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgZTEuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9KTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZW5hYmxlVGFza0lucHV0KCkge1xuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrRm9ybVwiKTtcbiAgICBhZGRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9XG5cbiAgc3RhdGljIGRpc2FibGVUYXNrSW5wdXQoKSB7XG4gICAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRhc2tGb3JtXCIpO1xuICAgIGFkZFRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIHN0YXRpYyBsb2FkQWxsVGFza3MoZmxhZ3MpIHtcbiAgICBVSS5kaXNhYmxlVGFza0lucHV0KCk7XG4gICAgVUkucmVzZXREaXNwbGF5ZWRUYXNrcygpO1xuICAgIGlmIChmbGFncykge1xuICAgICAgVUkuc2V0QWN0aXZlTGlzdFRpdGxlKGZsYWdzLmxpc3ROYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgVUkuc2V0QWN0aXZlTGlzdFRpdGxlKFwiQWxsIHRhc2tzXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGxpc3RzID0gTG9jYWxTdG9yYWdlLmdldExpc3RzT2JqZWN0KCk7XG4gICAgbGlzdHMuZ2V0QXJyYXkoKS5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICBVSS5sb2FkQWRkaXRpb25hbExpc3QobGlzdC5nZXROYW1lKCksIGZsYWdzKTtcbiAgICB9KTtcbiAgICBVSS5zZXR1cFRhc2tUb2dnbGUoKTtcbiAgICBVSS5yZW5kZXJBbGxUYXNrU3RhdHVzZXMoZmxhZ3MpO1xuICB9XG5cbiAgc3RhdGljIGxvYWRBbGxDb21wbGV0ZWRUYXNrcygpIHtcbiAgICBVSS5sb2FkQWxsVGFza3MoeyBsaXN0TmFtZTogXCJDb21wbGV0ZWQgdGFza3NcIiwgdGFza0lzQWN0aXZlOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHN0YXRpYyBsb2FkQWxsUGVuZGluZ1Rhc2tzKCkge1xuICAgIFVJLmxvYWRBbGxUYXNrcyh7IGxpc3ROYW1lOiBcIlBlbmRpbmcgdGFza3NcIiwgdGFza0lzQWN0aXZlOiB0cnVlIH0pO1xuICB9XG5cbiAgc3RhdGljIGxvYWRGcmVzaExpc3QobGlzdE5hbWUpIHtcbiAgICBVSS5zZXRBY3RpdmVMaXN0VGl0bGUobGlzdE5hbWUpO1xuICAgIFVJLnJlc2V0RGlzcGxheWVkVGFza3MoKTtcbiAgICBVSS5yZW5kZXJUYXNrcyhsaXN0TmFtZSk7XG4gICAgVUkucmVuZGVyVGFza1N0YXR1c2VzKGxpc3ROYW1lKTtcblxuICAgIFVJLnNldHVwVGFza1RvZ2dsZSgpO1xuICB9XG5cbiAgc3RhdGljIGxvYWRBZGRpdGlvbmFsTGlzdChsaXN0TmFtZSwgZmxhZ3MpIHtcbiAgICBVSS5yZW5kZXJUYXNrcyhsaXN0TmFtZSwgZmxhZ3MpO1xuICB9XG5cbiAgc3RhdGljIGdldEFjdGl2ZUxpc3RUaXRsZSgpIHtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1uYW1lXCIpO1xuICAgIHJldHVybiBoMS50ZXh0Q29udGVudDtcbiAgfVxuXG4gIHN0YXRpYyBzZXRBY3RpdmVMaXN0VGl0bGUobGlzdE5hbWUpIHtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1uYW1lXCIpO1xuICAgIGgxLnRleHRDb250ZW50ID0gbGlzdE5hbWU7XG4gIH1cblxuICBzdGF0aWMgcmVzZXREaXNwbGF5ZWRUYXNrcygpIHtcbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtbGlzdFwiKTtcbiAgICB0YXNrcy5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJUYXNrcyhsaXN0TmFtZSwgZmxhZ3MpIHtcbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtbGlzdFwiKTtcbiAgICBjb25zdCBsaXN0ID0gTG9jYWxTdG9yYWdlLmdldExpc3RCeU5hbWUobGlzdE5hbWUpO1xuXG4gICAgbGlzdC5nZXRBcnJheSgpLmZvckVhY2goKHRhc2ssIGkpID0+IHtcbiAgICAgIGlmIChmbGFncykge1xuICAgICAgICBpZiAoZmxhZ3MudGFza0lzQWN0aXZlKSB7XG4gICAgICAgICAgaWYgKCF0YXNrLmdldFN0YXR1cygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCFmbGFncy50YXNrSXNBY3RpdmUpIHtcbiAgICAgICAgICBpZiAodGFzay5nZXRTdGF0dXMoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB0YXNrTmFtZSA9IHRhc2suZ2V0TmFtZSgpO1xuICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBsaS5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgbmFtZT1cInRhc2tDb21wbGV0ZWRcIlxuICAgICAgICAgICAgaWQ9XCIke2xpc3ROYW1lLnJlcGxhY2UoL1xccy9nLCBcIlwiKX1UYXNrJHtpfVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0YXNrVGV4dFwiIGZvcj1cIiR7bGlzdE5hbWUucmVwbGFjZSgvXFxzL2csIFwiXCIpfVRhc2ske2l9XCJcbiAgICAgICAgICAgID4ke3Rhc2tOYW1lfTwvbGFiZWxcbiAgICAgICAgICA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZHJvcGRvd24tbWVudS1idG5cIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsXCI+PC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duTWVudVwiPlxuICAgICAgICAgIDx1bCBjbGFzcz1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgIDxsaT48YnV0dG9uIGNsYXNzPVwiZHJvcGRvd24tYnRuIHRhc2stZWRpdFwiPkVkaXQ8L2J1dHRvbj48L2xpPlxuICAgICAgICAgICAgPGxpPjxidXR0b24gY2xhc3M9XCJkcm9wZG93bi1idG4gdGFzay1kZWxldGVcIj5EZWxldGU8L2J1dHRvbj48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicmVuYW1lLXRhc2stcG9wdXBcIj5cbiAgICAgICAgPGZvcm0gY2xhc3M9XCJyZW5hbWUtdGFzay1mb3JtXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzcz1cImlucHV0LXRleHQgdGFzay1yZW5hbWUtaW5wdXRcIlxuICAgICAgICAgICAgdmFsdWU9XCIke3Rhc2tOYW1lfVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJzdWJtaXRSZW5hbWVUYXNrRm9ybVwiIHR5cGU9XCJzdWJtaXRcIiBoaWRkZW4gLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgO1xuICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgYCR7dGFza05hbWUucmVwbGFjZSgvXFxzL2csIFwiXCIpfWApO1xuICAgICAgdGFza3MuYXBwZW5kQ2hpbGQobGkpO1xuXG4gICAgICBjb25zdCB0YXNrRWRpdCA9IGxpLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1lZGl0XCIpO1xuICAgICAgY29uc3QgcmVuYW1lVGFza0Zvcm0gPSBsaS5xdWVyeVNlbGVjdG9yKFwiLnJlbmFtZS10YXNrLWZvcm1cIik7XG4gICAgICBjb25zdCB0YXNrRGVsZXRlID0gbGkucXVlcnlTZWxlY3RvcihcIi50YXNrLWRlbGV0ZVwiKTtcblxuICAgICAgY29uc3QgdGFza0Ryb3Bkb3duTWVudUJ1dHRvbiA9IGxpLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tbWVudS1idG5cIik7XG4gICAgICBjb25zdCB0YXNrRHJvcGRvd25NZW51ID0gbGkucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bk1lbnVcIik7XG5cbiAgICAgIHRhc2tEcm9wZG93bk1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIHRhc2tEcm9wZG93bk1lbnVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgdGFza0Ryb3Bkb3duTWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUxKSA9PiB7XG4gICAgICAgICAgaWYgKGUxLnRhcmdldCAhPT0gdGFza0Ryb3Bkb3duTWVudSkge1xuICAgICAgICAgICAgdGFza0Ryb3Bkb3duTWVudUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgdGFza0Ryb3Bkb3duTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9KTtcblxuICAgICAgdGFza0RlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgTG9jYWxTdG9yYWdlLnJlbW92ZVRhc2sobGlzdE5hbWUsIHRhc2spO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmIChVSS5nZXRBY3RpdmVMaXN0VGl0bGUoKSA9PT0gXCJBbGwgdGFza3NcIikge1xuICAgICAgICAgIFVJLmxvYWRBbGxUYXNrcygpO1xuICAgICAgICB9IGVsc2UgaWYgKFVJLmdldEFjdGl2ZUxpc3RUaXRsZSgpID09PSBcIkNvbXBsZXRlZCB0YXNrc1wiKSB7XG4gICAgICAgICAgVUkubG9hZEFsbENvbXBsZXRlZFRhc2tzKHtcbiAgICAgICAgICAgIGxpc3ROYW1lOiBcIkNvbXBsZXRlZCB0YXNrc1wiLFxuICAgICAgICAgICAgdGFza0lzQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChVSS5nZXRBY3RpdmVMaXN0VGl0bGUoKSA9PT0gXCJQZW5kaW5nIHRhc2tzXCIpIHtcbiAgICAgICAgICBVSS5sb2FkQWxsUGVuZGluZ1Rhc2tzKHtcbiAgICAgICAgICAgIGxpc3ROYW1lOiBcIlBlbmRpbmcgdGFza3NcIixcbiAgICAgICAgICAgIHRhc2tJc0FjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBVSS5yZXNldERpc3BsYXllZFRhc2tzKCk7XG4gICAgICAgICAgVUkucmVuZGVyVGFza3MobGlzdE5hbWUpO1xuICAgICAgICAgIFVJLnJlbmRlclRhc2tTdGF0dXNlcyhsaXN0TmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0YXNrRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgVUkuZW5hYmxlUmVuYW1lVGFza1BvcHVwKHRhc2tOYW1lKTsgLy8gTmVlZCB0byBpbXBsZW1lbnRcblxuICAgICAgICBjb25zdCB0YXNrUmVuYW1lSW5wdXQgPSBsaS5xdWVyeVNlbGVjdG9yKFwiLnRhc2stcmVuYW1lLWlucHV0XCIpO1xuICAgICAgICByZW5hbWVUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlMSkgPT4ge1xuICAgICAgICAgIGUxLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGFza1JlbmFtZUlucHV0LnZhbHVlID0gdGFza1JlbmFtZUlucHV0LnZhbHVlLnRyaW0oKTtcblxuICAgICAgICAgIFZhbGlkYXRvci52YWxpZGF0ZVJlbmFtZVRhc2sodGFza1JlbmFtZUlucHV0LCB0YXNrTmFtZSk7XG4gICAgICAgICAgaWYgKHRhc2tSZW5hbWVJbnB1dC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICAgICAgVUkuZGlzYWJsZVJlbmFtZVRhc2tQb3B1cCgpO1xuICAgICAgICAgICAgTG9jYWxTdG9yYWdlLnJlbmFtZVRhc2sobGlzdE5hbWUsIHRhc2ssIHRhc2tSZW5hbWVJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICBpZiAoVUkuZ2V0QWN0aXZlTGlzdFRpdGxlKCkgPT09IFwiQWxsIHRhc2tzXCIpIHtcbiAgICAgICAgICAgICAgVUkubG9hZEFsbFRhc2tzKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFVJLmdldEFjdGl2ZUxpc3RUaXRsZSgpID09PSBcIkNvbXBsZXRlZCB0YXNrc1wiKSB7XG4gICAgICAgICAgICAgIFVJLmxvYWRBbGxDb21wbGV0ZWRUYXNrcyh7XG4gICAgICAgICAgICAgICAgbGlzdE5hbWU6IFwiQ29tcGxldGVkIHRhc2tzXCIsXG4gICAgICAgICAgICAgICAgdGFza0lzQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFVJLmdldEFjdGl2ZUxpc3RUaXRsZSgpID09PSBcIlBlbmRpbmcgdGFza3NcIikge1xuICAgICAgICAgICAgICBVSS5sb2FkQWxsUGVuZGluZ1Rhc2tzKHtcbiAgICAgICAgICAgICAgICBsaXN0TmFtZTogXCJQZW5kaW5nIHRhc2tzXCIsXG4gICAgICAgICAgICAgICAgdGFza0lzQWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIFVJLmxvYWRGcmVzaExpc3QobGlzdE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFza1JlbmFtZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFza1JlbmFtZUlucHV0LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICB0YXNrUmVuYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGFza1JlbmFtZUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7IG9uY2U6IHRydWUgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZTEuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgcmVuZGVyVGFza1N0YXR1c2VzKGxpc3ROYW1lKSB7XG4gICAgY29uc3QgbGlzdCA9IExvY2FsU3RvcmFnZS5nZXRMaXN0QnlOYW1lKGxpc3ROYW1lKTtcbiAgICBsaXN0LmdldEFycmF5KCkuZm9yRWFjaCgodGFzaywgaSkgPT4ge1xuICAgICAgaWYgKCF0YXNrLmdldFN0YXR1cygpKSB7XG4gICAgICAgIC8vIElmIHRhc2sgaXMgbm90IGFjdGl2ZVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAjJHt0YXNrLmdldE9yaWdpbkxpc3QoKS5yZXBsYWNlKC9cXHMvZywgXCJcIil9VGFzayR7aX1gXG4gICAgICAgICkuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgcmVuZGVyQWxsVGFza1N0YXR1c2VzKGZsYWdzKSB7XG4gICAgY29uc3QgbGlzdHMgPSBMb2NhbFN0b3JhZ2UuZ2V0TGlzdHNPYmplY3QoKTtcbiAgICBsaXN0cy5nZXRBcnJheSgpLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgIGxpc3QuZ2V0QXJyYXkoKS5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7XG4gICAgICAgIGlmICghdGFzay5nZXRTdGF0dXMoKSkge1xuICAgICAgICAgIGlmIChmbGFncyAmJiBmbGFncy50YXNrSXNBY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYCMke3Rhc2suZ2V0T3JpZ2luTGlzdCgpLnJlcGxhY2UoL1xccy9nLCBcIlwiKX1UYXNrJHtpfWBcbiAgICAgICAgICApLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBzZXR1cFRhc2tUb2dnbGUoKSB7XG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWxpc3RcIik7XG4gICAgY29uc3QgdGFza0RpdnMgPSB0YXNrcy5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2sgaW5wdXRcIik7XG5cbiAgICB0YXNrRGl2cy5mb3JFYWNoKCh0YXNrRGl2KSA9PiB7XG4gICAgICB0YXNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0cyA9IExvY2FsU3RvcmFnZS5nZXRMaXN0c09iamVjdCgpO1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGUudGFyZ2V0LmxhYmVsc1swXS50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgbGlzdCA9IGxpc3RzLmdldExpc3RCeVRhc2tOYW1lKHRhc2tOYW1lKTtcbiAgICAgICAgY29uc3QgdGFzayA9IGxpc3QuZ2V0VGFzayh0YXNrTmFtZSk7XG4gICAgICAgIHRhc2sudG9nZ2xlU3RhdHVzKCk7XG5cbiAgICAgICAgTG9jYWxTdG9yYWdlLnNhdmVMaXN0cyhsaXN0cyk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBzZXR1cEJ1dHRvbnMoKSB7XG4gICAgLy8gQWRkIGxpc3QgYnV0dG9uXG4gICAgY29uc3QgbGlzdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtbGlzdC1mb3JtIC5saXN0LW5hbWUtaW5wdXRcIik7XG4gICAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dFRhc2tUZXh0XCIpO1xuXG4gICAgY29uc3QgYWRkTGlzdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1saXN0LWZvcm1cIik7XG4gICAgY29uc3QgYWRkTGlzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWxpc3QtYnRuXCIpO1xuXG4gICAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRhc2tGb3JtXCIpO1xuICAgIGNvbnN0IGFsbFRhc2tzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGwtdGFza3MtYnRuXCIpO1xuICAgIGNvbnN0IGFsbENvbXBsZXRlZFRhc2tzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLmFsbC1jb21wbGV0ZWQtdGFza3MtYnRuXCJcbiAgICApO1xuICAgIGNvbnN0IGFsbFBlbmRpbmdUYXNrc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5hbGwtcGVuZGluZy10YXNrcy1idG5cIlxuICAgICk7XG5cbiAgICBhbGxUYXNrc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgVUkubG9hZEFsbFRhc2tzKCk7XG4gICAgfSk7XG5cbiAgICBhbGxDb21wbGV0ZWRUYXNrc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgVUkubG9hZEFsbENvbXBsZXRlZFRhc2tzKCk7XG4gICAgfSk7XG5cbiAgICBhbGxQZW5kaW5nVGFza3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIFVJLmxvYWRBbGxQZW5kaW5nVGFza3MoKTtcbiAgICB9KTtcblxuICAgIGFkZExpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBVSS5lbmFibGVBZGRMaXN0UG9wdXAoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG5cbiAgICBhZGRMaXN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsaXN0SW5wdXQudmFsdWUgPSBsaXN0SW5wdXQudmFsdWUudHJpbSgpO1xuXG4gICAgICBjb25zdCBsaXN0TmFtZSA9IGxpc3RJbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IG5ld0xpc3QgPSBuZXcgTGlzdChsaXN0TmFtZSk7XG5cbiAgICAgIFZhbGlkYXRvci52YWxpZGF0ZUxpc3QobGlzdElucHV0KTtcbiAgICAgIGlmIChsaXN0SW5wdXQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgTG9jYWxTdG9yYWdlLmFkZExpc3QobmV3TGlzdCk7XG4gICAgICAgIFVJLmNyZWF0ZUxpc3QobGlzdE5hbWUpO1xuXG4gICAgICAgIFVJLmRpc2FibGVBZGRMaXN0UG9wdXAoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3RJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICBsaXN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImlucHV0XCIsXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgbGlzdElucHV0LnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGFkZFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRhc2tJbnB1dC52YWx1ZSA9IHRhc2tJbnB1dC52YWx1ZS50cmltKCk7XG5cbiAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayh0YXNrSW5wdXQudmFsdWUpO1xuICAgICAgY29uc3QgbGlzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtbmFtZVwiKS50ZXh0Q29udGVudDtcblxuICAgICAgVmFsaWRhdG9yLnZhbGlkYXRlVGFzayh0YXNrSW5wdXQpO1xuICAgICAgaWYgKHRhc2tJbnB1dC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICBMb2NhbFN0b3JhZ2UuYWRkVGFzayhsaXN0TmFtZSwgbmV3VGFzayk7XG5cbiAgICAgICAgVUkubG9hZEZyZXNoTGlzdChsaXN0TmFtZSk7XG4gICAgICAgIFVJLmNsZWFyVGFza0lucHV0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgdGFza0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIHRhc2tJbnB1dC5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZW5hYmxlQWRkTGlzdFBvcHVwKCkge1xuICAgIGNvbnN0IGFkZExpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1saXN0LWJ0blwiKTtcbiAgICBjb25zdCBhZGRMaXN0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1saXN0LXBvcHVwXCIpO1xuICAgIGNvbnN0IGxpc3ROYW1lSW5wdXQgPSBhZGRMaXN0UG9wdXAucXVlcnlTZWxlY3RvcihcIi5saXN0LW5hbWUtaW5wdXRcIik7XG5cbiAgICBhZGRMaXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgYWRkTGlzdFBvcHVwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgbGlzdE5hbWVJbnB1dC5mb2N1cygpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLmV4aXRBZGRMaXN0UG9wVXBXaGVuTG9zZUZvY3VzKTtcbiAgfVxuXG4gIHN0YXRpYyBkaXNhYmxlQWRkTGlzdFBvcHVwKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS5leGl0QWRkTGlzdFBvcFVwV2hlbkxvc2VGb2N1cyk7XG5cbiAgICBjb25zdCBhZGRMaXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtbGlzdC1idG5cIik7XG4gICAgY29uc3QgYWRkTGlzdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtbGlzdC1wb3B1cFwiKTtcbiAgICBjb25zdCBsaXN0TmFtZUlucHV0ID0gYWRkTGlzdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1uYW1lLWlucHV0XCIpO1xuXG4gICAgYWRkTGlzdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGFkZExpc3RQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGxpc3ROYW1lSW5wdXQudmFsdWUgPSBcIlwiO1xuICB9XG5cbiAgc3RhdGljIGVuYWJsZVJlbmFtZUxpc3RQb3B1cChsaXN0TmFtZSkge1xuICAgIGNvbnN0IHRhcmdldExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYCMke2xpc3ROYW1lLnJlcGxhY2UoL1xccy9nLCBcIlwiKX1gXG4gICAgKTtcbiAgICBjb25zdCBidG5Db250ZW50ID0gdGFyZ2V0TGlzdC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1jb250ZW50XCIpO1xuICAgIGNvbnN0IHBvcHVwID0gdGFyZ2V0TGlzdC5xdWVyeVNlbGVjdG9yKFwiLnJlbmFtZS1saXN0LXBvcHVwXCIpO1xuICAgIGNvbnN0IGxpc3RSZW5hbWVJbnB1dCA9IHRhcmdldExpc3QucXVlcnlTZWxlY3RvcihcIi5saXN0LXJlbmFtZS1pbnB1dFwiKTtcblxuICAgIHRhcmdldExpc3QuY2xhc3NMaXN0LmFkZChcImVkaXRlZC1saXN0XCIpO1xuICAgIGJ0bkNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgbGlzdFJlbmFtZUlucHV0LmZvY3VzKCk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkuZXhpdFJlbmFtZUxpc3RQb3BVcFdoZW5Mb3NlRm9jdXMpO1xuICB9XG5cbiAgc3RhdGljIGRpc2FibGVSZW5hbWVMaXN0UG9wdXAoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLmV4aXRSZW5hbWVMaXN0UG9wVXBXaGVuTG9zZUZvY3VzKTtcblxuICAgIGNvbnN0IHRhcmdldExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRlZC1saXN0XCIpO1xuICAgIGNvbnN0IGJ0bkNvbnRlbnQgPSB0YXJnZXRMaXN0LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNvbnRlbnRcIik7XG4gICAgY29uc3QgcG9wdXAgPSB0YXJnZXRMaXN0LnF1ZXJ5U2VsZWN0b3IoXCIucmVuYW1lLWxpc3QtcG9wdXBcIik7XG5cbiAgICB0YXJnZXRMaXN0LmNsYXNzTGlzdC5yZW1vdmUoXCJlZGl0ZWQtbGlzdFwiKTtcbiAgICBidG5Db250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcbiAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgc3RhdGljIGVuYWJsZVJlbmFtZVRhc2tQb3B1cCh0YXNrTmFtZSkge1xuICAgIGNvbnN0IHRhcmdldExpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFza05hbWUucmVwbGFjZSgvXFxzL2csIFwiXCIpfWApO1xuICAgIGNvbnN0IHRhc2tDb250ZW50ID0gdGFyZ2V0TGkucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRlbnRcIik7XG4gICAgY29uc3QgcG9wdXAgPSB0YXJnZXRMaS5xdWVyeVNlbGVjdG9yKFwiLnJlbmFtZS10YXNrLXBvcHVwXCIpO1xuICAgIGNvbnN0IHRhc2tSZW5hbWVJbnB1dCA9IHRhcmdldExpLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1yZW5hbWUtaW5wdXRcIik7XG5cbiAgICB0YXJnZXRMaS5jbGFzc0xpc3QuYWRkKFwiZWRpdGVkLXRhc2tcIik7XG4gICAgdGFza0NvbnRlbnQuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgdGFza1JlbmFtZUlucHV0LmZvY3VzKCk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkuZXhpdFJlbmFtZVRhc2tQb3BVcFdoZW5Mb3NlRm9jdXMpO1xuICB9XG5cbiAgc3RhdGljIGRpc2FibGVSZW5hbWVUYXNrUG9wdXAoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLmV4aXRSZW5hbWVUYXNrUG9wVXBXaGVuTG9zZUZvY3VzKTtcblxuICAgIGNvbnN0IHRhcmdldExpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0ZWQtdGFza1wiKTtcbiAgICBjb25zdCB0YXNrQ29udGVudCA9IHRhcmdldExpLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250ZW50XCIpO1xuICAgIGNvbnN0IHBvcHVwID0gdGFyZ2V0TGkucXVlcnlTZWxlY3RvcihcIi5yZW5hbWUtdGFzay1wb3B1cFwiKTtcblxuICAgIHRhcmdldExpLmNsYXNzTGlzdC5yZW1vdmUoXCJlZGl0ZWQtdGFza1wiKTtcbiAgICB0YXNrQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfVxuXG4gIHN0YXRpYyBleGl0QWRkTGlzdFBvcFVwV2hlbkxvc2VGb2N1cyhlKSB7XG4gICAgaWYgKFxuICAgICAgZS50YXJnZXQgIT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1uYW1lLWlucHV0XCIpICYmXG4gICAgICBlLnRhcmdldCAhPT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0LnN1Ym1pdEFkZExpc3RGb3JtXCIpXG4gICAgKSB7XG4gICAgICBVSS5kaXNhYmxlQWRkTGlzdFBvcHVwKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGV4aXRSZW5hbWVMaXN0UG9wVXBXaGVuTG9zZUZvY3VzKGUpIHtcbiAgICBpZiAoXG4gICAgICAhZS50YXJnZXQubWF0Y2hlcyhcIi5saXN0LXJlbmFtZS1pbnB1dFwiKSAmJlxuICAgICAgIWUudGFyZ2V0Lm1hdGNoZXMoXCJpbnB1dC5zdWJtaXRSZW5hbWVMaXN0Rm9ybVwiKVxuICAgICkge1xuICAgICAgVUkuZGlzYWJsZVJlbmFtZUxpc3RQb3B1cCgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBleGl0UmVuYW1lVGFza1BvcFVwV2hlbkxvc2VGb2N1cyhlKSB7XG4gICAgaWYgKFxuICAgICAgIWUudGFyZ2V0Lm1hdGNoZXMoXCIudGFzay1yZW5hbWUtaW5wdXRcIikgJiZcbiAgICAgICFlLnRhcmdldC5tYXRjaGVzKFwiaW5wdXQuc3VibWl0UmVuYW1lVGFza0Zvcm1cIilcbiAgICApIHtcbiAgICAgIFVJLmRpc2FibGVSZW5hbWVUYXNrUG9wdXAoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY2xlYXJUYXNrSW5wdXQoKSB7XG4gICAgY29uc3QgaW5wdXRUYXNrVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRUYXNrVGV4dFwiKTtcbiAgICBpbnB1dFRhc2tUZXh0LnZhbHVlID0gXCJcIjtcbiAgfVxufVxuIiwiaW1wb3J0IExvY2FsU3RvcmFnZSBmcm9tIFwiLi9Mb2NhbFN0b3JhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdG9yIHtcbiAgc3RhdGljIHZhbGlkYXRlVGFzayh0YXNrSW5wdXQpIHtcbiAgICBpZiAoXG4gICAgICAhL1xcUy8udGVzdCh0YXNrSW5wdXQudmFsdWUpIHx8XG4gICAgICAhL1thLXpBLVowLTlfXS8udGVzdCh0YXNrSW5wdXQudmFsdWUpIHx8XG4gICAgICAvWyBdezIsfS8udGVzdCh0YXNrSW5wdXQudmFsdWUpXG4gICAgKSB7XG4gICAgICB0YXNrSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJJbnZhbGlkIHRhc2sgbmFtZSFcIik7XG4gICAgfSBlbHNlIGlmIChMb2NhbFN0b3JhZ2UuY29udGFpbnNUYXNrKHRhc2tJbnB1dC52YWx1ZSkpIHtcbiAgICAgIHRhc2tJbnB1dC5zZXRDdXN0b21WYWxpZGl0eShcIlRhc2sgbmFtZSBtdXN0IGJlIHVuaXF1ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFza0lucHV0LnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB2YWxpZGF0ZVJlbmFtZVRhc2sodGFza1JlbmFtZUlucHV0LCB0YXNrTmFtZSkge1xuICAgIGNvbnN0IGxpc3QgPSBMb2NhbFN0b3JhZ2UuZ2V0TGlzdEJ5VGFza05hbWUodGFza05hbWUpO1xuICAgIGNvbnN0IGxpc3ROYW1lID0gbGlzdC5nZXROYW1lKCk7XG4gICAgY29uc3QgdGFzayA9IGxpc3QuZ2V0VGFzayh0YXNrTmFtZSk7XG5cbiAgICBMb2NhbFN0b3JhZ2UucmVtb3ZlVGFzayhsaXN0TmFtZSwgdGFzayk7XG4gICAgVmFsaWRhdG9yLnZhbGlkYXRlVGFzayh0YXNrUmVuYW1lSW5wdXQpO1xuICAgIExvY2FsU3RvcmFnZS5hZGRUYXNrKGxpc3ROYW1lLCB0YXNrKTtcbiAgfVxuXG4gIHN0YXRpYyB2YWxpZGF0ZUxpc3QobGlzdElucHV0KSB7XG4gICAgaWYgKFxuICAgICAgIS9cXFMvLnRlc3QobGlzdElucHV0LnZhbHVlKSB8fFxuICAgICAgIS9bYS16QS1aMC05XyBdLy50ZXN0KGxpc3RJbnB1dC52YWx1ZSkgfHxcbiAgICAgIC9bIF17Mix9Ly50ZXN0KGxpc3RJbnB1dC52YWx1ZSlcbiAgICApIHtcbiAgICAgIGxpc3RJbnB1dC5zZXRDdXN0b21WYWxpZGl0eShcIkludmFsaWQgbGlzdCBuYW1lIVwiKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgW1wiQWxsIHRhc2tzXCIsIFwiQ29tcGxldGVkIHRhc2tzXCIsIFwiUGVuZGluZyB0YXNrc1wiXS5maW5kKFxuICAgICAgICAodGFza05hbWUpID0+IGxpc3RJbnB1dC52YWx1ZSA9PT0gdGFza05hbWVcbiAgICAgIClcbiAgICApIHtcbiAgICAgIGxpc3RJbnB1dC5zZXRDdXN0b21WYWxpZGl0eShcbiAgICAgICAgYFwiJHtsaXN0SW5wdXQudmFsdWV9XCIgaXMgYSByZXNlcnZlZCBsaXN0IG5hbWVgXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoTG9jYWxTdG9yYWdlLmNvbnRhaW5zTGlzdChsaXN0SW5wdXQudmFsdWUpKSB7XG4gICAgICBsaXN0SW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJMaXN0IG5hbWUgbXVzdCBiZSB1bmlxdWVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3RJbnB1dC5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdmFsaWRhdGVSZW5hbWVMaXN0KGxpc3RSZW5hbWVJbnB1dCwgbGlzdE5hbWUpIHtcbiAgICBjb25zdCBsaXN0ID0gTG9jYWxTdG9yYWdlLmdldExpc3RCeU5hbWUobGlzdE5hbWUpO1xuICAgIExvY2FsU3RvcmFnZS5yZW1vdmVMaXN0KGxpc3ROYW1lKTtcbiAgICBWYWxpZGF0b3IudmFsaWRhdGVMaXN0KGxpc3RSZW5hbWVJbnB1dCk7XG4gICAgTG9jYWxTdG9yYWdlLmFkZExpc3QobGlzdCk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgVUkgZnJvbSBcIi4vbW9kdWxlcy9VSVwiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgXCIuL2Ryb3Bkb3duTWVudS5jc3NcIjtcblxuVUkubG9hZFRvRG9MaXN0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=