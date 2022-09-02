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
___CSS_LOADER_EXPORT___.push([module.id, ".filters-list li,\n.lists-list li {\n  position: relative;\n}\n\n.tasks-list li {\n  position: relative;\n}\n\n.options button {\n  border: none;\n  width: 100%;\n}\n\n/****************/\n/* For sidebar */\n/****************/\n\n.sidebar .dropdown-menu-btn {\n  display: block;\n\n  border-radius: 4px;\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  z-index: 1;\n  top: 6px;\n  right: 6px;\n  background-color: transparent;\n  padding: 12px;\n}\n\n.sidebar .dropdown-menu-btn:hover {\n  background-color: rgb(255, 255, 255, 0.3);\n}\n\n.sidebar .dropdown-menu-btn.active {\n  background-color: rgb(255, 255, 255, 0.5);\n}\n\n.sidebar .dropdown-menu-btn i {\n  position: absolute;\n  top: 6px;\n  left: 10px;\n}\n\n.sidebar .dropdown-btn {\n  text-align: left;\n  padding: 12px;\n  font-size: 0.9rem;\n  border-radius: 0px;\n\n  background-color: black;\n  color: var(--p1);\n}\n\n.sidebar .dropdown-btn:hover {\n  background-color: rgb(75, 75, 75, 1);\n}\n\n.sidebar .dropdown-btn.active {\n  background-color: rgb(105, 105, 105);\n}\n\n.lists-list .dropdownMenu {\n  opacity: 0;\n  pointer-events: none;\n\n  background-color: rgb(0, 0, 0, 0.7);\n  position: absolute;\n  z-index: 100;\n  top: 100%;\n  right: 0;\n\n  padding: 0.75rem;\n}\n\n.lists-list .dropdownMenu.active {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n/*************/\n/* For tasks */\n/*************/\n\n.tasks-list .dropdown-menu-btn {\n  border: none;\n  border-radius: 4px;\n\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  z-index: 1;\n  top: 6px;\n  right: 20px;\n  background-color: transparent;\n  padding: 12px;\n}\n\n.tasks-list .dropdown-menu-btn:hover {\n  background-color: rgb(255, 255, 255, 0.1);\n}\n\n.tasks-list .dropdown-menu-btn.active {\n  background-color: rgb(255, 255, 255, 0.3);\n}\n\n.tasks-list .dropdown-menu-btn i {\n  position: absolute;\n  top: 6px;\n  left: 10px;\n  color: var(--p1);\n}\n\n.tasks-list .dropdown-btn {\n  text-align: left;\n  padding: 12px;\n  padding-right: 24px;\n  font-size: 0.9rem;\n\n  background-color: black;\n  color: var(--p1);\n  width: 100%;\n}\n\n.tasks-list .dropdown-btn:hover {\n  background-color: rgb(75, 75, 75, 1);\n}\n\n.tasks-list .dropdownMenu {\n  opacity: 0;\n  pointer-events: none;\n\n  background-color: rgb(0, 0, 0, 0.4);\n  position: absolute;\n  z-index: 100;\n  top: 100%;\n  right: 0;\n\n  padding: 0.75rem;\n}\n\n.tasks-list .dropdownMenu .options li {\n  width: 100%;\n}\n\n.tasks-list .dropdownMenu.active {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n/* Media queries */\n@media (min-width: 980px) {\n  .sidebar .dropdown-menu-btn {\n    display: block;\n  }\n\n  .sidebar .dropdown-menu-btn {\n    right: 10px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/dropdownMenu.css"],"names":[],"mappings":"AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA,iBAAiB;AACjB,gBAAgB;AAChB,iBAAiB;;AAEjB;EACE,cAAc;;EAEd,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,UAAU;EACV,6BAA6B;EAC7B,aAAa;AACf;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,iBAAiB;EACjB,kBAAkB;;EAElB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,UAAU;EACV,oBAAoB;;EAEpB,mCAAmC;EACnC,kBAAkB;EAClB,YAAY;EACZ,SAAS;EACT,QAAQ;;EAER,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,oBAAoB;AACtB;;AAEA,cAAc;AACd,cAAc;AACd,cAAc;;AAEd;EACE,YAAY;EACZ,kBAAkB;;EAElB,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,WAAW;EACX,6BAA6B;EAC7B,aAAa;AACf;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,iBAAiB;;EAEjB,uBAAuB;EACvB,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,UAAU;EACV,oBAAoB;;EAEpB,mCAAmC;EACnC,kBAAkB;EAClB,YAAY;EACZ,SAAS;EACT,QAAQ;;EAER,gBAAgB;AAClB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;EACV,oBAAoB;AACtB;;AAEA,kBAAkB;AAClB;EACE;IACE,cAAc;EAChB;;EAEA;IACE,WAAW;EACb;AACF","sourcesContent":["@import \"./palette.css\";\n\n.filters-list li,\n.lists-list li {\n  position: relative;\n}\n\n.tasks-list li {\n  position: relative;\n}\n\n.options button {\n  border: none;\n  width: 100%;\n}\n\n/****************/\n/* For sidebar */\n/****************/\n\n.sidebar .dropdown-menu-btn {\n  display: block;\n\n  border-radius: 4px;\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  z-index: 1;\n  top: 6px;\n  right: 6px;\n  background-color: transparent;\n  padding: 12px;\n}\n\n.sidebar .dropdown-menu-btn:hover {\n  background-color: rgb(255, 255, 255, 0.3);\n}\n\n.sidebar .dropdown-menu-btn.active {\n  background-color: rgb(255, 255, 255, 0.5);\n}\n\n.sidebar .dropdown-menu-btn i {\n  position: absolute;\n  top: 6px;\n  left: 10px;\n}\n\n.sidebar .dropdown-btn {\n  text-align: left;\n  padding: 12px;\n  font-size: 0.9rem;\n  border-radius: 0px;\n\n  background-color: black;\n  color: var(--p1);\n}\n\n.sidebar .dropdown-btn:hover {\n  background-color: rgb(75, 75, 75, 1);\n}\n\n.sidebar .dropdown-btn.active {\n  background-color: rgb(105, 105, 105);\n}\n\n.lists-list .dropdownMenu {\n  opacity: 0;\n  pointer-events: none;\n\n  background-color: rgb(0, 0, 0, 0.7);\n  position: absolute;\n  z-index: 100;\n  top: 100%;\n  right: 0;\n\n  padding: 0.75rem;\n}\n\n.lists-list .dropdownMenu.active {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n/*************/\n/* For tasks */\n/*************/\n\n.tasks-list .dropdown-menu-btn {\n  border: none;\n  border-radius: 4px;\n\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  z-index: 1;\n  top: 6px;\n  right: 20px;\n  background-color: transparent;\n  padding: 12px;\n}\n\n.tasks-list .dropdown-menu-btn:hover {\n  background-color: rgb(255, 255, 255, 0.1);\n}\n\n.tasks-list .dropdown-menu-btn.active {\n  background-color: rgb(255, 255, 255, 0.3);\n}\n\n.tasks-list .dropdown-menu-btn i {\n  position: absolute;\n  top: 6px;\n  left: 10px;\n  color: var(--p1);\n}\n\n.tasks-list .dropdown-btn {\n  text-align: left;\n  padding: 12px;\n  padding-right: 24px;\n  font-size: 0.9rem;\n\n  background-color: black;\n  color: var(--p1);\n  width: 100%;\n}\n\n.tasks-list .dropdown-btn:hover {\n  background-color: rgb(75, 75, 75, 1);\n}\n\n.tasks-list .dropdownMenu {\n  opacity: 0;\n  pointer-events: none;\n\n  background-color: rgb(0, 0, 0, 0.4);\n  position: absolute;\n  z-index: 100;\n  top: 100%;\n  right: 0;\n\n  padding: 0.75rem;\n}\n\n.tasks-list .dropdownMenu .options li {\n  width: 100%;\n}\n\n.tasks-list .dropdownMenu.active {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n/* Media queries */\n@media (min-width: 980px) {\n  .sidebar .dropdown-menu-btn {\n    display: block;\n  }\n\n  .sidebar .dropdown-menu-btn {\n    right: 10px;\n  }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: \"Lato\", sans-serif;\n  color: var(--p1);\n  background-color: var(--p4);\n  min-width: 250px;\n}\n\nul {\n  list-style-type: none;\n}\n\na {\n  text-decoration: none;\n  color: var(--p1);\n}\n\np {\n  margin: 10px 0;\n}\n\nimg {\n  width: 100%;\n}\n\n/* Utility classes */\n.flex {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.input-text {\n  background-color: var(--p4);\n  color: inherit;\n  border: none;\n  border-radius: 12px;\n  margin-top: 16px;\n  padding: 4px 0px 4px 12px;\n  width: 100%;\n}\n\n/*  */\n\nbody > .container {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 100px 1fr 4fr 50px;\n  height: 100vh;\n}\n\n/* Header */\n.header {\n  gap: 8px;\n  grid-column: 1/ 3;\n  grid-row: 1 / 2;\n}\n\n.primary-heading {\n  font-size: 2rem;\n}\n\n/* Sidebar */\n.sidebar {\n  background-color: var(--p5);\n}\n\n.sidebar-content {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  margin: 16px 16px;\n  flex-direction: column;\n}\n\n.sidebar i {\n  color: black;\n}\n\n.sidebar button {\n  background-color: var(--p3);\n  border: none;\n  border-radius: 12px;\n  padding: 0px 8px;\n\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  text-align: left;\n\n  position: relative;\n  padding-left: 32px;\n}\n\n.sidebar .list-btn {\n  padding-right: 40px;\n}\n\n.sidebar button:hover {\n  background-color: var(--p2);\n}\n\n.sidebar button:active {\n  background-color: var(--p1);\n}\n\n.lists {\n  margin-top: 12px;\n  position: relative;\n}\n\n.lists h2,\n.filters h2 {\n  color: var(--p2);\n}\n\n.filters-list,\n.lists-list {\n  display: flex;\n  gap: 8px;\n  flex-direction: row;\n  justify-content: start;\n  flex-wrap: wrap;\n  margin-top: 8px;\n}\n\n.lists-list li {\n  position: relative;\n}\n\n.lists-list .rename-list-popup {\n  display: none;\n  position: absolute;\n  top: 6px;\n}\n\n.lists-list .rename-list-popup.active {\n  display: block;\n}\n\n.list-rename-input {\n  margin-top: 0px;\n}\n\n.filter-icon,\n.list-icon,\n.add-list-icon {\n  position: absolute;\n  top: 12px;\n  left: 10px;\n}\n\n.sidebar .add-list-btn {\n  gap: 4px;\n  padding: 0px 12px;\n  padding-left: 28px;\n  margin-top: 8px;\n  margin-bottom: 12px;\n}\n\n.add-list-btn.active {\n  visibility: hidden;\n}\n\n.add-list-popup {\n  display: none;\n  position: absolute;\n  top: 26px;\n  width: 100%;\n}\n\n.add-list-popup input[type=\"text\"] {\n  background-color: var(--p4);\n  color: inherit;\n  border: none;\n  border-radius: 12px;\n  margin-top: 16px;\n  padding: 4px 0px 4px 12px;\n  width: 100%;\n}\n\n.add-list-popup input[type=\"text\"]::placeholder {\n  color: var(--p3);\n  font-family: \"Lato\";\n}\n\n.add-list-popup.active {\n  display: block;\n}\n\n/* Main */\n.main {\n  grid-column: 1 / 2;\n  grid-row: 3 / 4;\n\n  padding: 32px;\n  background-color: var(--p6);\n}\n\n.main-header {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  margin-bottom: 24px;\n}\n\n.main-header input[type=\"text\"] {\n  width: 50%;\n}\n\n.addTaskForm {\n  flex: 1;\n  display: none;\n}\n\n.main-header input[type=\"text\"]::placeholder {\n  color: var(--p3);\n  font-family: \"Lato\";\n}\n\n.tasks-list {\n  display: grid;\n}\n\n.tasks-list li {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n}\n\n.task {\n  color: black;\n  border-radius: 24px;\n  width: 100%;\n  user-select: none;\n\n  position: relative;\n}\n\n.task input[type=\"checkbox\"] {\n  display: none;\n}\n\n.task label {\n  display: flex;\n  align-items: center;\n  padding: 8px 0px;\n  padding-left: 32px;\n  color: var(--p1);\n}\n\n.task label::before {\n  position: absolute;\n  content: \"\";\n  left: 12px;\n  width: 12px;\n  height: 12px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n}\n\n.task input[type=\"checkbox\"]:checked + label::before {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.task input[type=\"checkbox\"]:checked + label {\n  text-decoration: line-through;\n  color: var(--p2);\n}\n\n.task:hover {\n  background-color: var(--p3t);\n}\n\n/* Footer */\n.footer {\n  grid-column: 1 / 2;\n  grid-row: 4 / 5;\n\n  gap: 8px;\n  grid-column: 1 / 3;\n}\n\n/* Media queries */\n\n@media (min-width: 480px) {\n  .sidebar-content {\n    margin-left: 32px;\n  }\n}\n@media (min-width: 980px) {\n  body > .container {\n    grid-template-columns: 20% 80%;\n    grid-template-rows: 100px 1fr 50px;\n  }\n\n  .header {\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n  }\n\n  .sidebar {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n  }\n\n  .filters-list > li {\n    width: 80%;\n  }\n\n  .sidebar button {\n    width: 100%;\n  }\n\n  .sidebar-content {\n    justify-content: start;\n    margin: 32px;\n  }\n\n  .main {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n  }\n\n  .footer {\n    grid-column: 1 / 3;\n    grid-row: 3 / 4;\n  }\n\n  .filters-list,\n  .lists-list {\n    flex-direction: column;\n  }\n\n  .lists h2 {\n    margin-top: 24px;\n  }\n\n  .sidebar h2 {\n    margin-bottom: 12px;\n  }\n\n  .sidebar .add-list-btn {\n    margin-top: 16px;\n  }\n\n  .add-list-popup {\n    top: 59px;\n  }\n\n  .lists,\n  .filters {\n    width: 100%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato&display=swap\");\n@import \"./palette.css\";\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: \"Lato\", sans-serif;\n  color: var(--p1);\n  background-color: var(--p4);\n  min-width: 250px;\n}\n\nul {\n  list-style-type: none;\n}\n\na {\n  text-decoration: none;\n  color: var(--p1);\n}\n\np {\n  margin: 10px 0;\n}\n\nimg {\n  width: 100%;\n}\n\n/* Utility classes */\n.flex {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.input-text {\n  background-color: var(--p4);\n  color: inherit;\n  border: none;\n  border-radius: 12px;\n  margin-top: 16px;\n  padding: 4px 0px 4px 12px;\n  width: 100%;\n}\n\n/*  */\n\nbody > .container {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 100px 1fr 4fr 50px;\n  height: 100vh;\n}\n\n/* Header */\n.header {\n  gap: 8px;\n  grid-column: 1/ 3;\n  grid-row: 1 / 2;\n}\n\n.primary-heading {\n  font-size: 2rem;\n}\n\n/* Sidebar */\n.sidebar {\n  background-color: var(--p5);\n}\n\n.sidebar-content {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  margin: 16px 16px;\n  flex-direction: column;\n}\n\n.sidebar i {\n  color: black;\n}\n\n.sidebar button {\n  background-color: var(--p3);\n  border: none;\n  border-radius: 12px;\n  padding: 0px 8px;\n\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  text-align: left;\n\n  position: relative;\n  padding-left: 32px;\n}\n\n.sidebar .list-btn {\n  padding-right: 40px;\n}\n\n.sidebar button:hover {\n  background-color: var(--p2);\n}\n\n.sidebar button:active {\n  background-color: var(--p1);\n}\n\n.lists {\n  margin-top: 12px;\n  position: relative;\n}\n\n.lists h2,\n.filters h2 {\n  color: var(--p2);\n}\n\n.filters-list,\n.lists-list {\n  display: flex;\n  gap: 8px;\n  flex-direction: row;\n  justify-content: start;\n  flex-wrap: wrap;\n  margin-top: 8px;\n}\n\n.lists-list li {\n  position: relative;\n}\n\n.lists-list .rename-list-popup {\n  display: none;\n  position: absolute;\n  top: 6px;\n}\n\n.lists-list .rename-list-popup.active {\n  display: block;\n}\n\n.list-rename-input {\n  margin-top: 0px;\n}\n\n.filter-icon,\n.list-icon,\n.add-list-icon {\n  position: absolute;\n  top: 12px;\n  left: 10px;\n}\n\n.sidebar .add-list-btn {\n  gap: 4px;\n  padding: 0px 12px;\n  padding-left: 28px;\n  margin-top: 8px;\n  margin-bottom: 12px;\n}\n\n.add-list-btn.active {\n  visibility: hidden;\n}\n\n.add-list-popup {\n  display: none;\n  position: absolute;\n  top: 26px;\n  width: 100%;\n}\n\n.add-list-popup input[type=\"text\"] {\n  background-color: var(--p4);\n  color: inherit;\n  border: none;\n  border-radius: 12px;\n  margin-top: 16px;\n  padding: 4px 0px 4px 12px;\n  width: 100%;\n}\n\n.add-list-popup input[type=\"text\"]::placeholder {\n  color: var(--p3);\n  font-family: \"Lato\";\n}\n\n.add-list-popup.active {\n  display: block;\n}\n\n/* Main */\n.main {\n  grid-column: 1 / 2;\n  grid-row: 3 / 4;\n\n  padding: 32px;\n  background-color: var(--p6);\n}\n\n.main-header {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  margin-bottom: 24px;\n}\n\n.main-header input[type=\"text\"] {\n  width: 50%;\n}\n\n.addTaskForm {\n  flex: 1;\n  display: none;\n}\n\n.main-header input[type=\"text\"]::placeholder {\n  color: var(--p3);\n  font-family: \"Lato\";\n}\n\n.tasks-list {\n  display: grid;\n}\n\n.tasks-list li {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n}\n\n.task {\n  color: black;\n  border-radius: 24px;\n  width: 100%;\n  user-select: none;\n\n  position: relative;\n}\n\n.task input[type=\"checkbox\"] {\n  display: none;\n}\n\n.task label {\n  display: flex;\n  align-items: center;\n  padding: 8px 0px;\n  padding-left: 32px;\n  color: var(--p1);\n}\n\n.task label::before {\n  position: absolute;\n  content: \"\";\n  left: 12px;\n  width: 12px;\n  height: 12px;\n  background-image: url(\"assets/circle-regular.svg\");\n  background-repeat: no-repeat;\n}\n\n.task input[type=\"checkbox\"]:checked + label::before {\n  background-image: url(\"assets/circle-check-regular.svg\");\n}\n\n.task input[type=\"checkbox\"]:checked + label {\n  text-decoration: line-through;\n  color: var(--p2);\n}\n\n.task:hover {\n  background-color: var(--p3t);\n}\n\n/* Footer */\n.footer {\n  grid-column: 1 / 2;\n  grid-row: 4 / 5;\n\n  gap: 8px;\n  grid-column: 1 / 3;\n}\n\n/* Media queries */\n\n@media (min-width: 480px) {\n  .sidebar-content {\n    margin-left: 32px;\n  }\n}\n@media (min-width: 980px) {\n  body > .container {\n    grid-template-columns: 20% 80%;\n    grid-template-rows: 100px 1fr 50px;\n  }\n\n  .header {\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n  }\n\n  .sidebar {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n  }\n\n  .filters-list > li {\n    width: 80%;\n  }\n\n  .sidebar button {\n    width: 100%;\n  }\n\n  .sidebar-content {\n    justify-content: start;\n    margin: 32px;\n  }\n\n  .main {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n  }\n\n  .footer {\n    grid-column: 1 / 3;\n    grid-row: 3 / 4;\n  }\n\n  .filters-list,\n  .lists-list {\n    flex-direction: column;\n  }\n\n  .lists h2 {\n    margin-top: 24px;\n  }\n\n  .sidebar h2 {\n    margin-bottom: 12px;\n  }\n\n  .sidebar .add-list-btn {\n    margin-top: 16px;\n  }\n\n  .add-list-popup {\n    top: 59px;\n  }\n\n  .lists,\n  .filters {\n    width: 100%;\n  }\n}\n"],"sourceRoot":""}]);
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
  }

  removeList(listName) {
    this.array.splice(this.getListIndex(listName), 1);
  }

  getListIndex(listName) {
    return this.array.findIndex((list) => list.getName() === listName);
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
  }

  static removeTask(listName, task) {
    const lists = LocalStorage.getListsObject();
    const list = lists.getListByName(listName);
    list.removeTask(task.getName());
    LocalStorage.saveLists(lists);
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
        UI.createList(list);
      });
  }

  static createList(list) {
    const ul = document.querySelector(".lists-list");
    const li = document.createElement("li");
    const h1 = document.querySelector(".list-name");

    li.innerHTML = `
    <button class="list-btn">
      <i class="fa-regular fa-note-sticky list-icon"></i>
      <p>${list.getName()}</p>
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
    </button>
    <div class="rename-list-popup">
      <form class="rename-list-form">
        <input
          type="text"
          class="input-text list-rename-input"
          value="${list.getName()}"
        />
        <input class="submitRenameListForm" type="submit" hidden />
      </form>
    </div>
    <p>Why is this not working</p>`;
    li.setAttribute("id", list.getName());
    ul.appendChild(li);

    const listEdit = li.querySelector(".list-edit");
    const listDelete = li.querySelector(".list-delete");

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

    li.addEventListener("click", () => {
      const lists = _LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].getListsObject();
      // Add code to enable inputhere
      UI.enableTaskInput();

      UI.loadFreshList(lists.getListByName(list.getName()));
    });

    listDelete.addEventListener("click", (e) => {
      _LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].removeList(list.getName());
      e.stopPropagation();
      this.loadLists();

      if (list.getName() === h1.textContent || h1.textContent === "All tasks") {
        this.loadAllTasks();
      }
    });

    listEdit.addEventListener("click", (e) => {});
  }

  static enableTaskInput() {
    const addTaskForm = document.querySelector(".addTaskForm");
    addTaskForm.style.display = "block";
  }

  static disableTaskInput() {
    const addTaskForm = document.querySelector(".addTaskForm");
    addTaskForm.style.display = "none";
  }

  static loadAllTasks() {
    UI.disableTaskInput();
    const tasks = document.querySelector(".tasks-list");
    tasks.replaceChildren();
    const h1 = document.querySelector(".list-name");
    h1.textContent = "All tasks";

    const lists = _LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].getListsObject();
    lists.getArray().forEach((list) => {
      UI.loadAdditionalList(list);
    });
    UI.setupTaskToggle();
    UI.renderAllTaskStatuses(lists);
  }

  static loadFreshList(list) {
    UI.setActiveListTitle(list.getName());
    UI.resetDisplayedTasks();
    UI.renderTasks(list);
    UI.renderTaskStatuses(list);

    UI.setupTaskToggle();
  }

  static loadAdditionalList(list) {
    UI.renderTasks(list);
  }

  static setActiveListTitle(listName) {
    const h1 = document.querySelector(".list-name");
    h1.textContent = listName;
  }

  static resetDisplayedTasks() {
    const tasks = document.querySelector(".tasks-list");
    tasks.replaceChildren();
  }

  static renderTasks(list) {
    const tasks = document.querySelector(".tasks-list");
    const listName = list.getName();
    list.getArray().forEach((task, i) => {
      const li = document.createElement("li");
      li.innerHTML = `<div class="task">
                              <input
                                  type="checkbox"
                                  name="taskCompleted"
                                  id="${listName}Task${i}"
                              />
                              <label class="taskText" for="${listName}Task${i}"
                                  >${task.getName()}</label
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
                           </div>`;
      tasks.appendChild(li);
      const taskEdit = li.querySelector(".task-edit");
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
        const h1 = document.querySelector(".list-name");

        if (h1.textContent === "All tasks") {
          this.loadAllTasks();
        } else {
          const modifiedList = _LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].getListByName(listName);
          tasks.replaceChildren();
          UI.renderTasks(modifiedList);
          UI.renderTaskStatuses(modifiedList);
        }
      });
    });
  }

  static renderTaskStatuses(list) {
    list.getArray().forEach((task, i) => {
      if (!task.getStatus()) {
        // If task is not active
        document.querySelector(
          `#${task.getOriginList()}Task${i}`
        ).checked = true;
      }
    });
  }

  static renderAllTaskStatuses(lists) {
    lists.getArray().forEach((list) => {
      list.getArray().forEach((task, i) => {
        if (!task.getStatus()) {
          // If task is not active
          document.querySelector(
            `#${task.getOriginList()}Task${i}`
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
        // Problem is it registers separate clicks for label and checkbox
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
    const addListForm = document.querySelector(".add-list-form");
    const listInput = document.querySelector(".add-list-form .list-name-input");
    const addListButton = document.querySelector(".add-list-btn");
    const addTaskForm = document.querySelector(".addTaskForm");
    const taskInput = document.querySelector("#inputTaskText");
    const allTasksButton = document.querySelector(".all-tasks-btn");

    allTasksButton.addEventListener("click", () => {
      UI.loadAllTasks();
    });

    addListButton.addEventListener("click", (e) => {
      this.enableAddListPopup();
      e.stopPropagation();
    });
    addListForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Add list to LocalStorage

      const listName = listInput.value;
      const newList = new _List__WEBPACK_IMPORTED_MODULE_1__["default"](listName);
      _LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].addList(newList);
      UI.createList(newList);

      this.disableAddListPopup();
    });

    addTaskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Add task to list

      const newTask = new _Task__WEBPACK_IMPORTED_MODULE_0__["default"](taskInput.value);
      const listName = document.querySelector(".list-name").textContent;
      _LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].addTask(listName, newTask);

      UI.loadFreshList(_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].getListsObject().getListByName(listName));
      UI.clearTaskInput();
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

  static exitAddListPopUpWhenLoseFocus(e) {
    if (
      e.target !== document.querySelector(".list-name-input") &&
      e.target !== document.querySelector("input.submitAddListForm")
    ) {
      UI.disableAddListPopup();
    }
  }

  static clearTaskInput() {
    const inputTaskText = document.querySelector("#inputTaskText");
    inputTaskText.value = "";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q2U7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QzBCO0FBQ0U7QUFDRjs7QUFFWDtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsOENBQUs7O0FBRXpDO0FBQ0EsdURBQXVELDZDQUFJO0FBQzNEOztBQUVBO0FBQ0E7QUFDQSx3REFBd0QsNkNBQUk7QUFDNUQ7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCMEI7QUFDQTtBQUNnQjs7QUFFM0I7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3hVQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQThCO0FBQ1I7QUFDTTs7QUFFNUIsZ0VBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Ryb3Bkb3duTWVudS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wYWxldHRlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZHJvcGRvd25NZW51LmNzcz82YjdkIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0xpc3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9Mb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYWxldHRlLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmZpbHRlcnMtbGlzdCBsaSxcXG4ubGlzdHMtbGlzdCBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrcy1saXN0IGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm9wdGlvbnMgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKi9cXG4vKiBGb3Igc2lkZWJhciAqL1xcbi8qKioqKioqKioqKioqKioqL1xcblxcbi5zaWRlYmFyIC5kcm9wZG93bi1tZW51LWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICB0b3A6IDZweDtcXG4gIHJpZ2h0OiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDEycHg7XFxufVxcblxcbi5zaWRlYmFyIC5kcm9wZG93bi1tZW51LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG59XFxuXFxuLnNpZGViYXIgLmRyb3Bkb3duLW1lbnUtYnRuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLnNpZGViYXIgLmRyb3Bkb3duLW1lbnUtYnRuIGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA2cHg7XFxuICBsZWZ0OiAxMHB4O1xcbn1cXG5cXG4uc2lkZWJhciAuZHJvcGRvd24tYnRuIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB2YXIoLS1wMSk7XFxufVxcblxcbi5zaWRlYmFyIC5kcm9wZG93bi1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCA3NSwgNzUsIDEpO1xcbn1cXG5cXG4uc2lkZWJhciAuZHJvcGRvd24tYnRuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA1LCAxMDUsIDEwNSk7XFxufVxcblxcbi5saXN0cy1saXN0IC5kcm9wZG93bk1lbnUge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0b3A6IDEwMCU7XFxuICByaWdodDogMDtcXG5cXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxufVxcblxcbi5saXN0cy1saXN0IC5kcm9wZG93bk1lbnUuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLyoqKioqKioqKioqKiovXFxuLyogRm9yIHRhc2tzICovXFxuLyoqKioqKioqKioqKiovXFxuXFxuLnRhc2tzLWxpc3QgLmRyb3Bkb3duLW1lbnUtYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICB0b3A6IDZweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAxMnB4O1xcbn1cXG5cXG4udGFza3MtbGlzdCAuZHJvcGRvd24tbWVudS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bi1tZW51LWJ0bi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bi1tZW51LWJ0biBpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNnB4O1xcbiAgbGVmdDogMTBweDtcXG4gIGNvbG9yOiB2YXIoLS1wMSk7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bi1idG4ge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB2YXIoLS1wMSk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2tzLWxpc3QgLmRyb3Bkb3duLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsIDc1LCA3NSwgMSk7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bk1lbnUge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0b3A6IDEwMCU7XFxuICByaWdodDogMDtcXG5cXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bk1lbnUgLm9wdGlvbnMgbGkge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bk1lbnUuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLyogTWVkaWEgcXVlcmllcyAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA5ODBweCkge1xcbiAgLnNpZGViYXIgLmRyb3Bkb3duLW1lbnUtYnRuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAuc2lkZWJhciAuZHJvcGRvd24tbWVudS1idG4ge1xcbiAgICByaWdodDogMTBweDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Ryb3Bkb3duTWVudS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQSxpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCLGlCQUFpQjs7QUFFakI7RUFDRSxjQUFjOztFQUVkLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLFVBQVU7RUFDViw2QkFBNkI7RUFDN0IsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7O0VBRWxCLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9COztFQUVwQixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBQ1QsUUFBUTs7RUFFUixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCOztBQUVBLGNBQWM7QUFDZCxjQUFjO0FBQ2QsY0FBYzs7QUFFZDtFQUNFLFlBQVk7RUFDWixrQkFBa0I7O0VBRWxCLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7O0VBRWpCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjs7RUFFcEIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULFFBQVE7O0VBRVIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtBQUN0Qjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuL3BhbGV0dGUuY3NzXFxcIjtcXG5cXG4uZmlsdGVycy1saXN0IGxpLFxcbi5saXN0cy1saXN0IGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhc2tzLWxpc3QgbGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ub3B0aW9ucyBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqL1xcbi8qIEZvciBzaWRlYmFyICovXFxuLyoqKioqKioqKioqKioqKiovXFxuXFxuLnNpZGViYXIgLmRyb3Bkb3duLW1lbnUtYnRuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcblxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogNnB4O1xcbiAgcmlnaHQ6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMTJweDtcXG59XFxuXFxuLnNpZGViYXIgLmRyb3Bkb3duLW1lbnUtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbn1cXG5cXG4uc2lkZWJhciAuZHJvcGRvd24tbWVudS1idG4uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG4uc2lkZWJhciAuZHJvcGRvd24tbWVudS1idG4gaSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDZweDtcXG4gIGxlZnQ6IDEwcHg7XFxufVxcblxcbi5zaWRlYmFyIC5kcm9wZG93bi1idG4ge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHZhcigtLXAxKTtcXG59XFxuXFxuLnNpZGViYXIgLmRyb3Bkb3duLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsIDc1LCA3NSwgMSk7XFxufVxcblxcbi5zaWRlYmFyIC5kcm9wZG93bi1idG4uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDUsIDEwNSwgMTA1KTtcXG59XFxuXFxuLmxpc3RzLWxpc3QgLmRyb3Bkb3duTWVudSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC43KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHRvcDogMTAwJTtcXG4gIHJpZ2h0OiAwO1xcblxcbiAgcGFkZGluZzogMC43NXJlbTtcXG59XFxuXFxuLmxpc3RzLWxpc3QgLmRyb3Bkb3duTWVudS5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG5cXG4vKioqKioqKioqKioqKi9cXG4vKiBGb3IgdGFza3MgKi9cXG4vKioqKioqKioqKioqKi9cXG5cXG4udGFza3MtbGlzdCAuZHJvcGRvd24tbWVudS1idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcblxcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogNnB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDEycHg7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bi1tZW51LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG59XFxuXFxuLnRhc2tzLWxpc3QgLmRyb3Bkb3duLW1lbnUtYnRuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG59XFxuXFxuLnRhc2tzLWxpc3QgLmRyb3Bkb3duLW1lbnUtYnRuIGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA2cHg7XFxuICBsZWZ0OiAxMHB4O1xcbiAgY29sb3I6IHZhcigtLXAxKTtcXG59XFxuXFxuLnRhc2tzLWxpc3QgLmRyb3Bkb3duLWJ0biB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogMTJweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHZhcigtLXAxKTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFza3MtbGlzdCAuZHJvcGRvd24tYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgNzUsIDc1LCAxKTtcXG59XFxuXFxuLnRhc2tzLWxpc3QgLmRyb3Bkb3duTWVudSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC40KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHRvcDogMTAwJTtcXG4gIHJpZ2h0OiAwO1xcblxcbiAgcGFkZGluZzogMC43NXJlbTtcXG59XFxuXFxuLnRhc2tzLWxpc3QgLmRyb3Bkb3duTWVudSAub3B0aW9ucyBsaSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2tzLWxpc3QgLmRyb3Bkb3duTWVudS5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG5cXG4vKiBNZWRpYSBxdWVyaWVzICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDk4MHB4KSB7XFxuICAuc2lkZWJhciAuZHJvcGRvd24tbWVudS1idG4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5zaWRlYmFyIC5kcm9wZG93bi1tZW51LWJ0biB7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXAwOiAjZGNjZGYwO1xcbiAgLS1wMTogI2M4YjZlMjtcXG4gIC0tcDI6ICNhOGE0Y2U7XFxuICAtLXAzOiAjN2E4NmI2O1xcbiAgLS1wM3Q6ICM3YTg2YjY2MztcXG4gIC0tcDQ6ICM0OTVjODM7XFxuICAtLXA1OiAjMzk0YTZiO1xcbiAgLS1wNjogIzMwM2M1NTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhbGV0dGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLXAwOiAjZGNjZGYwO1xcbiAgLS1wMTogI2M4YjZlMjtcXG4gIC0tcDI6ICNhOGE0Y2U7XFxuICAtLXAzOiAjN2E4NmI2O1xcbiAgLS1wM3Q6ICM3YTg2YjY2MztcXG4gIC0tcDQ6ICM0OTVjODM7XFxuICAtLXA1OiAjMzk0YTZiO1xcbiAgLS1wNjogIzMwM2M1NTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BhbGV0dGUuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImFzc2V0cy9jaXJjbGUtcmVndWxhci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJhc3NldHMvY2lyY2xlLWNoZWNrLXJlZ3VsYXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB2YXIoLS1wMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wNCk7XFxuICBtaW4td2lkdGg6IDI1MHB4O1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXAxKTtcXG59XFxuXFxucCB7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiBVdGlsaXR5IGNsYXNzZXMgKi9cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW5wdXQtdGV4dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wNCk7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgcGFkZGluZzogNHB4IDBweCA0cHggMTJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiAgKi9cXG5cXG5ib2R5ID4gLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciA0ZnIgNTBweDtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbi5oZWFkZXIge1xcbiAgZ2FwOiA4cHg7XFxuICBncmlkLWNvbHVtbjogMS8gMztcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLnByaW1hcnktaGVhZGluZyB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi8qIFNpZGViYXIgKi9cXG4uc2lkZWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wNSk7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRlbnQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW46IDE2cHggMTZweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaWRlYmFyIGkge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc2lkZWJhciBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDMpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHBhZGRpbmc6IDBweCA4cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcblxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMzJweDtcXG59XFxuXFxuLnNpZGViYXIgLmxpc3QtYnRuIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XFxufVxcblxcbi5zaWRlYmFyIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wMik7XFxufVxcblxcbi5zaWRlYmFyIGJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDEpO1xcbn1cXG5cXG4ubGlzdHMge1xcbiAgbWFyZ2luLXRvcDogMTJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxpc3RzIGgyLFxcbi5maWx0ZXJzIGgyIHtcXG4gIGNvbG9yOiB2YXIoLS1wMik7XFxufVxcblxcbi5maWx0ZXJzLWxpc3QsXFxuLmxpc3RzLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcblxcbi5saXN0cy1saXN0IGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxpc3RzLWxpc3QgLnJlbmFtZS1saXN0LXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDZweDtcXG59XFxuXFxuLmxpc3RzLWxpc3QgLnJlbmFtZS1saXN0LXBvcHVwLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmxpc3QtcmVuYW1lLWlucHV0IHtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG59XFxuXFxuLmZpbHRlci1pY29uLFxcbi5saXN0LWljb24sXFxuLmFkZC1saXN0LWljb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMnB4O1xcbiAgbGVmdDogMTBweDtcXG59XFxuXFxuLnNpZGViYXIgLmFkZC1saXN0LWJ0biB7XFxuICBnYXA6IDRweDtcXG4gIHBhZGRpbmc6IDBweCAxMnB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyOHB4O1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuLmFkZC1saXN0LWJ0bi5hY3RpdmUge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uYWRkLWxpc3QtcG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWRkLWxpc3QtcG9wdXAgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXA0KTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICBwYWRkaW5nOiA0cHggMHB4IDRweCAxMnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hZGQtbGlzdC1wb3B1cCBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1wMyk7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiO1xcbn1cXG5cXG4uYWRkLWxpc3QtcG9wdXAuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBNYWluICovXFxuLm1haW4ge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcblxcbiAgcGFkZGluZzogMzJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXA2KTtcXG59XFxuXFxuLm1haW4taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcblxcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG59XFxuXFxuLm1haW4taGVhZGVyIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uYWRkVGFza0Zvcm0ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tYWluLWhlYWRlciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1wMyk7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiO1xcbn1cXG5cXG4udGFza3MtbGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4udGFza3MtbGlzdCBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLnRhc2sge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2sgbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHggMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xcbiAgY29sb3I6IHZhcigtLXAxKTtcXG59XFxuXFxuLnRhc2sgbGFiZWw6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGxlZnQ6IDEycHg7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogMTJweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IHZhcigtLXAyKTtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDN0KTtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuLmZvb3RlciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogNCAvIDU7XFxuXFxuICBnYXA6IDhweDtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuLyogTWVkaWEgcXVlcmllcyAqL1xcblxcbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xcbiAgLnNpZGViYXItY29udGVudCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTgwcHgpIHtcXG4gIGJvZHkgPiAuY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciA1MHB4O1xcbiAgfVxcblxcbiAgLmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgfVxcblxcbiAgLnNpZGViYXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gIH1cXG5cXG4gIC5maWx0ZXJzLWxpc3QgPiBsaSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxuXFxuICAuc2lkZWJhciBidXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyLWNvbnRlbnQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBtYXJnaW46IDMycHg7XFxuICB9XFxuXFxuICAubWFpbiB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgfVxcblxcbiAgLmZpbHRlcnMtbGlzdCxcXG4gIC5saXN0cy1saXN0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5saXN0cyBoMiB7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxuICB9XFxuXFxuICAuc2lkZWJhciBoMiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICB9XFxuXFxuICAuc2lkZWJhciAuYWRkLWxpc3QtYnRuIHtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG4gIH1cXG5cXG4gIC5hZGQtbGlzdC1wb3B1cCB7XFxuICAgIHRvcDogNTlweDtcXG4gIH1cXG5cXG4gIC5saXN0cyxcXG4gIC5maWx0ZXJzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBOzs7RUFHRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBLEtBQUs7O0FBRUw7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLHNDQUFzQztFQUN0QyxhQUFhO0FBQ2Y7O0FBRUEsV0FBVztBQUNYO0VBQ0UsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxZQUFZO0FBQ1o7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTs7RUFFZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Us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OztFQUVBOztJQUVFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTs7SUFFRSxXQUFXO0VBQ2I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvJmRpc3BsYXk9c3dhcFxcXCIpO1xcbkBpbXBvcnQgXFxcIi4vcGFsZXR0ZS5jc3NcXFwiO1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogdmFyKC0tcDEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDQpO1xcbiAgbWluLXdpZHRoOiAyNTBweDtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1wMSk7XFxufVxcblxcbnAge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogVXRpbGl0eSBjbGFzc2VzICovXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmlucHV0LXRleHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDQpO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG4gIHBhZGRpbmc6IDRweCAwcHggNHB4IDEycHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogICovXFxuXFxuYm9keSA+IC5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnIgNGZyIDUwcHg7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG4uaGVhZGVyIHtcXG4gIGdhcDogOHB4O1xcbiAgZ3JpZC1jb2x1bW46IDEvIDM7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5wcmltYXJ5LWhlYWRpbmcge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4vKiBTaWRlYmFyICovXFxuLnNpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDUpO1xcbn1cXG5cXG4uc2lkZWJhci1jb250ZW50IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luOiAxNnB4IDE2cHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2lkZWJhciBpIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnNpZGViYXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXAzKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBwYWRkaW5nOiAwcHggOHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG5cXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XFxufVxcblxcbi5zaWRlYmFyIC5saXN0LWJ0biB7XFxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uc2lkZWJhciBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDIpO1xcbn1cXG5cXG4uc2lkZWJhciBidXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXAxKTtcXG59XFxuXFxuLmxpc3RzIHtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5saXN0cyBoMixcXG4uZmlsdGVycyBoMiB7XFxuICBjb2xvcjogdmFyKC0tcDIpO1xcbn1cXG5cXG4uZmlsdGVycy1saXN0LFxcbi5saXN0cy1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDhweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG5cXG4ubGlzdHMtbGlzdCBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5saXN0cy1saXN0IC5yZW5hbWUtbGlzdC1wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA2cHg7XFxufVxcblxcbi5saXN0cy1saXN0IC5yZW5hbWUtbGlzdC1wb3B1cC5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5saXN0LXJlbmFtZS1pbnB1dCB7XFxuICBtYXJnaW4tdG9wOiAwcHg7XFxufVxcblxcbi5maWx0ZXItaWNvbixcXG4ubGlzdC1pY29uLFxcbi5hZGQtbGlzdC1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTJweDtcXG4gIGxlZnQ6IDEwcHg7XFxufVxcblxcbi5zaWRlYmFyIC5hZGQtbGlzdC1idG4ge1xcbiAgZ2FwOiA0cHg7XFxuICBwYWRkaW5nOiAwcHggMTJweDtcXG4gIHBhZGRpbmctbGVmdDogMjhweDtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcblxcbi5hZGQtbGlzdC1idG4uYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmFkZC1saXN0LXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDI2cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFkZC1saXN0LXBvcHVwIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wNCk7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgcGFkZGluZzogNHB4IDBweCA0cHggMTJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWRkLWxpc3QtcG9wdXAgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tcDMpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIjtcXG59XFxuXFxuLmFkZC1saXN0LXBvcHVwLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogTWFpbiAqL1xcbi5tYWluIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG5cXG4gIHBhZGRpbmc6IDMycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wNik7XFxufVxcblxcbi5tYWluLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG5cXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxufVxcblxcbi5tYWluLWhlYWRlciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmFkZFRhc2tGb3JtIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tcDMpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIjtcXG59XFxuXFxuLnRhc2tzLWxpc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnRhc2tzLWxpc3QgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi50YXNrIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogOHB4IDBweDtcXG4gIHBhZGRpbmctbGVmdDogMzJweDtcXG4gIGNvbG9yOiB2YXIoLS1wMSk7XFxufVxcblxcbi50YXNrIGxhYmVsOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBsZWZ0OiAxMnB4O1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IDEycHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImFzc2V0cy9jaXJjbGUtcmVndWxhci5zdmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJhc3NldHMvY2lyY2xlLWNoZWNrLXJlZ3VsYXIuc3ZnXFxcIik7XFxufVxcblxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IHZhcigtLXAyKTtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDN0KTtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuLmZvb3RlciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogNCAvIDU7XFxuXFxuICBnYXA6IDhweDtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuLyogTWVkaWEgcXVlcmllcyAqL1xcblxcbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xcbiAgLnNpZGViYXItY29udGVudCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTgwcHgpIHtcXG4gIGJvZHkgPiAuY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciA1MHB4O1xcbiAgfVxcblxcbiAgLmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgfVxcblxcbiAgLnNpZGViYXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gIH1cXG5cXG4gIC5maWx0ZXJzLWxpc3QgPiBsaSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxuXFxuICAuc2lkZWJhciBidXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyLWNvbnRlbnQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBtYXJnaW46IDMycHg7XFxuICB9XFxuXFxuICAubWFpbiB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgfVxcblxcbiAgLmZpbHRlcnMtbGlzdCxcXG4gIC5saXN0cy1saXN0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5saXN0cyBoMiB7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxuICB9XFxuXFxuICAuc2lkZWJhciBoMiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICB9XFxuXFxuICAuc2lkZWJhciAuYWRkLWxpc3QtYnRuIHtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG4gIH1cXG5cXG4gIC5hZGQtbGlzdC1wb3B1cCB7XFxuICAgIHRvcDogNTlweDtcXG4gIH1cXG5cXG4gIC5saXN0cyxcXG4gIC5maWx0ZXJzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kcm9wZG93bk1lbnUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kcm9wZG93bk1lbnUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGxpc3ROYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbGlzdE5hbWU7XG4gICAgdGhpcy5hcnJheSA9IFtdO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGFkZFRhc2sodGFzaykge1xuICAgIHRhc2suc2V0T3JpZ2luTGlzdCh0aGlzLm5hbWUpO1xuICAgIHRoaXMuYXJyYXkucHVzaCh0YXNrKTtcbiAgfVxuXG4gIHJlbW92ZVRhc2sodGFza05hbWUpIHtcbiAgICB0aGlzLmFycmF5LnNwbGljZSh0aGlzLmdldFRhc2tJbmRleCh0YXNrTmFtZSksIDEpO1xuICB9XG5cbiAgZ2V0VGFzayh0YXNrTmFtZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LmZpbmQoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09PSB0YXNrTmFtZSk7XG4gIH1cblxuICBnZXRUYXNrSW5kZXgodGFza05hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5maW5kSW5kZXgoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09PSB0YXNrTmFtZSk7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIHNldEFycmF5KGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0cyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXJyYXkgPSBbXTtcbiAgfVxuXG4gIGFkZExpc3QobGlzdCkge1xuICAgIHRoaXMuYXJyYXkucHVzaChsaXN0KTtcbiAgfVxuXG4gIHJlbmFtZUxpc3Qob3JpZ2luYWxMaXN0TmFtZSwgbmV3TGlzdE5hbWUpIHtcbiAgICBjb25zdCBsaXN0ID0gdGhpcy5nZXRMaXN0QnlOYW1lKG9yaWdpbmFsTGlzdE5hbWUpO1xuICAgIGxpc3Quc2V0TmFtZShuZXdMaXN0TmFtZSk7XG4gIH1cblxuICByZW1vdmVMaXN0KGxpc3ROYW1lKSB7XG4gICAgdGhpcy5hcnJheS5zcGxpY2UodGhpcy5nZXRMaXN0SW5kZXgobGlzdE5hbWUpLCAxKTtcbiAgfVxuXG4gIGdldExpc3RJbmRleChsaXN0TmFtZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LmZpbmRJbmRleCgobGlzdCkgPT4gbGlzdC5nZXROYW1lKCkgPT09IGxpc3ROYW1lKTtcbiAgfVxuXG4gIGdldExpc3RCeVRhc2tOYW1lKHRhc2tOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkuZmluZCgobGlzdCkgPT5cbiAgICAgIGxpc3QuZ2V0QXJyYXkoKS5maW5kKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PT0gdGFza05hbWUpXG4gICAgKTtcbiAgfVxuXG4gIGdldExpc3RCeU5hbWUobGlzdE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5maW5kKChsaXN0KSA9PiBsaXN0LmdldE5hbWUoKSA9PT0gbGlzdE5hbWUpO1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBzZXRBcnJheShhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxufVxuIiwiaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xuaW1wb3J0IExpc3RzIGZyb20gXCIuL0xpc3RzXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsU3RvcmFnZSB7XG4gIHN0YXRpYyBzYXZlTGlzdHMobGlzdHMpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3RzXCIsIEpTT04uc3RyaW5naWZ5KGxpc3RzKSk7XG4gIH1cblxuICBzdGF0aWMgI2xvYWRMaXN0cygpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RzXCIpKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRMaXN0c09iamVjdCgpIHtcbiAgICBjb25zdCBsaXN0cyA9IE9iamVjdC5hc3NpZ24obmV3IExpc3RzKCksIHRoaXMuI2xvYWRMaXN0cygpKTtcblxuICAgIGxpc3RzLnNldEFycmF5KFxuICAgICAgbGlzdHMuZ2V0QXJyYXkoKS5tYXAoKGxpc3QpID0+IE9iamVjdC5hc3NpZ24obmV3IExpc3QoKSwgbGlzdCkpXG4gICAgKTtcblxuICAgIGxpc3RzLmdldEFycmF5KCkuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgbGlzdC5zZXRBcnJheShcbiAgICAgICAgbGlzdC5nZXRBcnJheSgpLm1hcCgodGFzaykgPT4gT2JqZWN0LmFzc2lnbihuZXcgVGFzaygpLCB0YXNrKSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGlzdHM7XG4gIH1cblxuICBzdGF0aWMgZ2V0TGlzdEJ5TmFtZShsaXN0TmFtZSkge1xuICAgIGNvbnN0IGxpc3RzID0gTG9jYWxTdG9yYWdlLmdldExpc3RzT2JqZWN0KCk7XG4gICAgcmV0dXJuIGxpc3RzLmdldExpc3RCeU5hbWUobGlzdE5hbWUpO1xuICB9XG5cbiAgc3RhdGljIGFkZExpc3QobGlzdCkge1xuICAgIGNvbnN0IGxpc3RzID0gTG9jYWxTdG9yYWdlLmdldExpc3RzT2JqZWN0KCk7XG4gICAgbGlzdHMuYWRkTGlzdChsaXN0KTtcbiAgICBMb2NhbFN0b3JhZ2Uuc2F2ZUxpc3RzKGxpc3RzKTtcbiAgfVxuXG4gIHN0YXRpYyByZW5hbWVMaXN0KG9yaWdpbmFsTGlzdE5hbWUsIG5ld0xpc3ROYW1lKSB7XG4gICAgY29uc3QgbGlzdHMgPSBMb2NhbFN0b3JhZ2UuZ2V0TGlzdHNPYmplY3QoKTtcbiAgICBsaXN0cy5yZW5hbWVMaXN0KG9yaWdpbmFsTGlzdE5hbWUsIG5ld0xpc3ROYW1lKTtcbiAgICBMb2NhbFN0b3JhZ2Uuc2F2ZUxpc3RzKGxpc3RzKTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVMaXN0KGxpc3ROYW1lKSB7XG4gICAgY29uc3QgbGlzdHMgPSBMb2NhbFN0b3JhZ2UuZ2V0TGlzdHNPYmplY3QoKTtcbiAgICBsaXN0cy5yZW1vdmVMaXN0KGxpc3ROYW1lKTtcbiAgICBMb2NhbFN0b3JhZ2Uuc2F2ZUxpc3RzKGxpc3RzKTtcbiAgfVxuXG4gIHN0YXRpYyBhZGRUYXNrKGxpc3ROYW1lLCB0YXNrKSB7XG4gICAgY29uc3QgbGlzdHMgPSBMb2NhbFN0b3JhZ2UuZ2V0TGlzdHNPYmplY3QoKTtcbiAgICBjb25zdCB0YXJnZXRMaXN0ID0gbGlzdHMuZ2V0TGlzdEJ5TmFtZShsaXN0TmFtZSk7XG4gICAgdGFyZ2V0TGlzdC5hZGRUYXNrKHRhc2spO1xuICAgIExvY2FsU3RvcmFnZS5zYXZlTGlzdHMobGlzdHMpO1xuICB9XG5cbiAgc3RhdGljIHJlbmFtZVRhc2sobGlzdE5hbWUsIHRhc2ssIG5ld1Rhc2tOYW1lKSB7XG4gICAgY29uc3QgbGlzdHMgPSBMb2NhbFN0b3JhZ2UuZ2V0TGlzdHNPYmplY3QoKTtcbiAgICBjb25zdCB0YXJnZXRMaXN0ID0gbGlzdHMuZ2V0TGlzdEJ5TmFtZShsaXN0TmFtZSk7XG4gICAgdGFyZ2V0TGlzdC5nZXRUYXNrKHRhc2suZ2V0TmFtZSgpKS5zZXROYW1lKG5ld1Rhc2tOYW1lKTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVUYXNrKGxpc3ROYW1lLCB0YXNrKSB7XG4gICAgY29uc3QgbGlzdHMgPSBMb2NhbFN0b3JhZ2UuZ2V0TGlzdHNPYmplY3QoKTtcbiAgICBjb25zdCBsaXN0ID0gbGlzdHMuZ2V0TGlzdEJ5TmFtZShsaXN0TmFtZSk7XG4gICAgbGlzdC5yZW1vdmVUYXNrKHRhc2suZ2V0TmFtZSgpKTtcbiAgICBMb2NhbFN0b3JhZ2Uuc2F2ZUxpc3RzKGxpc3RzKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXRTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlO1xuICB9XG5cbiAgdG9nZ2xlU3RhdHVzKCkge1xuICAgIHRoaXMuYWN0aXZlID0gIXRoaXMuYWN0aXZlO1xuICB9XG5cbiAgZ2V0T3JpZ2luTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcmlnaW5MaXN0TmFtZTtcbiAgfVxuXG4gIHNldE9yaWdpbkxpc3QobGlzdE5hbWUpIHtcbiAgICB0aGlzLm9yaWdpbkxpc3ROYW1lID0gbGlzdE5hbWU7XG4gIH1cbn1cbiIsImltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcbmltcG9ydCBMb2NhbFN0b3JhZ2UgZnJvbSBcIi4vTG9jYWxTdG9yYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgc3RhdGljIGxvYWRUb0RvTGlzdCgpIHtcbiAgICBVSS5sb2FkTGlzdHMoKTtcbiAgICBVSS5zZXR1cEJ1dHRvbnMoKTtcbiAgICBVSS5sb2FkQWxsVGFza3MoKTtcbiAgfVxuXG4gIC8vIExvYWRpbmdcbiAgc3RhdGljIGxvYWRMaXN0cygpIHtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdHMgdWxcIik7XG4gICAgdWwucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICBMb2NhbFN0b3JhZ2UuZ2V0TGlzdHNPYmplY3QoKVxuICAgICAgLmdldEFycmF5KClcbiAgICAgIC5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICAgIFVJLmNyZWF0ZUxpc3QobGlzdCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVMaXN0KGxpc3QpIHtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdHMtbGlzdFwiKTtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1uYW1lXCIpO1xuXG4gICAgbGkuaW5uZXJIVE1MID0gYFxuICAgIDxidXR0b24gY2xhc3M9XCJsaXN0LWJ0blwiPlxuICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLW5vdGUtc3RpY2t5IGxpc3QtaWNvblwiPjwvaT5cbiAgICAgIDxwPiR7bGlzdC5nZXROYW1lKCl9PC9wPlxuICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJkcm9wZG93bi1tZW51LWJ0blwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtZWxsaXBzaXMtdmVydGljYWxcIj48L2k+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd25NZW51XCI+XG4gICAgICAgICAgPHVsIGNsYXNzPVwib3B0aW9uc1wiPlxuICAgICAgICAgICAgICA8bGk+PGJ1dHRvbiBjbGFzcz1cImRyb3Bkb3duLWJ0biBsaXN0LWVkaXRcIj5FZGl0PC9idXR0b24+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxidXR0b24gY2xhc3M9XCJkcm9wZG93bi1idG4gbGlzdC1kZWxldGVcIj5EZWxldGU8L2J1dHRvbj48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9idXR0b24+XG4gICAgPGRpdiBjbGFzcz1cInJlbmFtZS1saXN0LXBvcHVwXCI+XG4gICAgICA8Zm9ybSBjbGFzcz1cInJlbmFtZS1saXN0LWZvcm1cIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzPVwiaW5wdXQtdGV4dCBsaXN0LXJlbmFtZS1pbnB1dFwiXG4gICAgICAgICAgdmFsdWU9XCIke2xpc3QuZ2V0TmFtZSgpfVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cInN1Ym1pdFJlbmFtZUxpc3RGb3JtXCIgdHlwZT1cInN1Ym1pdFwiIGhpZGRlbiAvPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICAgIDxwPldoeSBpcyB0aGlzIG5vdCB3b3JraW5nPC9wPmA7XG4gICAgbGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgbGlzdC5nZXROYW1lKCkpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcblxuICAgIGNvbnN0IGxpc3RFZGl0ID0gbGkucXVlcnlTZWxlY3RvcihcIi5saXN0LWVkaXRcIik7XG4gICAgY29uc3QgbGlzdERlbGV0ZSA9IGxpLnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1kZWxldGVcIik7XG5cbiAgICBjb25zdCBsaXN0RHJvcGRvd25NZW51QnV0dG9uID0gbGkucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1tZW51LWJ0blwiKTtcbiAgICBjb25zdCBsaXN0RHJvcGRvd25NZW51ID0gbGkucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bk1lbnVcIik7XG5cbiAgICBsaXN0RHJvcGRvd25NZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgbGlzdERyb3Bkb3duTWVudUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgbGlzdERyb3Bkb3duTWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlMSkgPT4ge1xuICAgICAgICBpZiAoZTEudGFyZ2V0ICE9PSBsaXN0RHJvcGRvd25NZW51KSB7XG4gICAgICAgICAgbGlzdERyb3Bkb3duTWVudUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgIGxpc3REcm9wZG93bk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuXG4gICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGxpc3RzID0gTG9jYWxTdG9yYWdlLmdldExpc3RzT2JqZWN0KCk7XG4gICAgICAvLyBBZGQgY29kZSB0byBlbmFibGUgaW5wdXRoZXJlXG4gICAgICBVSS5lbmFibGVUYXNrSW5wdXQoKTtcblxuICAgICAgVUkubG9hZEZyZXNoTGlzdChsaXN0cy5nZXRMaXN0QnlOYW1lKGxpc3QuZ2V0TmFtZSgpKSk7XG4gICAgfSk7XG5cbiAgICBsaXN0RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgTG9jYWxTdG9yYWdlLnJlbW92ZUxpc3QobGlzdC5nZXROYW1lKCkpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMubG9hZExpc3RzKCk7XG5cbiAgICAgIGlmIChsaXN0LmdldE5hbWUoKSA9PT0gaDEudGV4dENvbnRlbnQgfHwgaDEudGV4dENvbnRlbnQgPT09IFwiQWxsIHRhc2tzXCIpIHtcbiAgICAgICAgdGhpcy5sb2FkQWxsVGFza3MoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxpc3RFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge30pO1xuICB9XG5cbiAgc3RhdGljIGVuYWJsZVRhc2tJbnB1dCgpIHtcbiAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVGFza0Zvcm1cIik7XG4gICAgYWRkVGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfVxuXG4gIHN0YXRpYyBkaXNhYmxlVGFza0lucHV0KCkge1xuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrRm9ybVwiKTtcbiAgICBhZGRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICBzdGF0aWMgbG9hZEFsbFRhc2tzKCkge1xuICAgIFVJLmRpc2FibGVUYXNrSW5wdXQoKTtcbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtbGlzdFwiKTtcbiAgICB0YXNrcy5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1uYW1lXCIpO1xuICAgIGgxLnRleHRDb250ZW50ID0gXCJBbGwgdGFza3NcIjtcblxuICAgIGNvbnN0IGxpc3RzID0gTG9jYWxTdG9yYWdlLmdldExpc3RzT2JqZWN0KCk7XG4gICAgbGlzdHMuZ2V0QXJyYXkoKS5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICBVSS5sb2FkQWRkaXRpb25hbExpc3QobGlzdCk7XG4gICAgfSk7XG4gICAgVUkuc2V0dXBUYXNrVG9nZ2xlKCk7XG4gICAgVUkucmVuZGVyQWxsVGFza1N0YXR1c2VzKGxpc3RzKTtcbiAgfVxuXG4gIHN0YXRpYyBsb2FkRnJlc2hMaXN0KGxpc3QpIHtcbiAgICBVSS5zZXRBY3RpdmVMaXN0VGl0bGUobGlzdC5nZXROYW1lKCkpO1xuICAgIFVJLnJlc2V0RGlzcGxheWVkVGFza3MoKTtcbiAgICBVSS5yZW5kZXJUYXNrcyhsaXN0KTtcbiAgICBVSS5yZW5kZXJUYXNrU3RhdHVzZXMobGlzdCk7XG5cbiAgICBVSS5zZXR1cFRhc2tUb2dnbGUoKTtcbiAgfVxuXG4gIHN0YXRpYyBsb2FkQWRkaXRpb25hbExpc3QobGlzdCkge1xuICAgIFVJLnJlbmRlclRhc2tzKGxpc3QpO1xuICB9XG5cbiAgc3RhdGljIHNldEFjdGl2ZUxpc3RUaXRsZShsaXN0TmFtZSkge1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LW5hbWVcIik7XG4gICAgaDEudGV4dENvbnRlbnQgPSBsaXN0TmFtZTtcbiAgfVxuXG4gIHN0YXRpYyByZXNldERpc3BsYXllZFRhc2tzKCkge1xuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1saXN0XCIpO1xuICAgIHRhc2tzLnJlcGxhY2VDaGlsZHJlbigpO1xuICB9XG5cbiAgc3RhdGljIHJlbmRlclRhc2tzKGxpc3QpIHtcbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtbGlzdFwiKTtcbiAgICBjb25zdCBsaXN0TmFtZSA9IGxpc3QuZ2V0TmFtZSgpO1xuICAgIGxpc3QuZ2V0QXJyYXkoKS5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7XG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGxpLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwidGFza1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGFza0NvbXBsZXRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCIke2xpc3ROYW1lfVRhc2ske2l9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0YXNrVGV4dFwiIGZvcj1cIiR7bGlzdE5hbWV9VGFzayR7aX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID4ke3Rhc2suZ2V0TmFtZSgpfTwvbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkcm9wZG93bi1tZW51LWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1lbGxpcHNpcy12ZXJ0aWNhbFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duTWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxidXR0b24gY2xhc3M9XCJkcm9wZG93bi1idG4gdGFzay1lZGl0XCI+RWRpdDwvYnV0dG9uPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YnV0dG9uIGNsYXNzPVwiZHJvcGRvd24tYnRuIHRhc2stZGVsZXRlXCI+RGVsZXRlPC9idXR0b24+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICB0YXNrcy5hcHBlbmRDaGlsZChsaSk7XG4gICAgICBjb25zdCB0YXNrRWRpdCA9IGxpLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1lZGl0XCIpO1xuICAgICAgY29uc3QgdGFza0RlbGV0ZSA9IGxpLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZWxldGVcIik7XG5cbiAgICAgIGNvbnN0IHRhc2tEcm9wZG93bk1lbnVCdXR0b24gPSBsaS5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLW1lbnUtYnRuXCIpO1xuICAgICAgY29uc3QgdGFza0Ryb3Bkb3duTWVudSA9IGxpLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd25NZW51XCIpO1xuXG4gICAgICB0YXNrRHJvcGRvd25NZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICB0YXNrRHJvcGRvd25NZW51QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIHRhc2tEcm9wZG93bk1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlMSkgPT4ge1xuICAgICAgICAgIGlmIChlMS50YXJnZXQgIT09IHRhc2tEcm9wZG93bk1lbnUpIHtcbiAgICAgICAgICAgIHRhc2tEcm9wZG93bk1lbnVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIHRhc2tEcm9wZG93bk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSk7XG5cbiAgICAgIHRhc2tEZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIExvY2FsU3RvcmFnZS5yZW1vdmVUYXNrKGxpc3ROYW1lLCB0YXNrKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgaDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtbmFtZVwiKTtcblxuICAgICAgICBpZiAoaDEudGV4dENvbnRlbnQgPT09IFwiQWxsIHRhc2tzXCIpIHtcbiAgICAgICAgICB0aGlzLmxvYWRBbGxUYXNrcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG1vZGlmaWVkTGlzdCA9IExvY2FsU3RvcmFnZS5nZXRMaXN0QnlOYW1lKGxpc3ROYW1lKTtcbiAgICAgICAgICB0YXNrcy5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgICBVSS5yZW5kZXJUYXNrcyhtb2RpZmllZExpc3QpO1xuICAgICAgICAgIFVJLnJlbmRlclRhc2tTdGF0dXNlcyhtb2RpZmllZExpc3QpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJUYXNrU3RhdHVzZXMobGlzdCkge1xuICAgIGxpc3QuZ2V0QXJyYXkoKS5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7XG4gICAgICBpZiAoIXRhc2suZ2V0U3RhdHVzKCkpIHtcbiAgICAgICAgLy8gSWYgdGFzayBpcyBub3QgYWN0aXZlXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYCMke3Rhc2suZ2V0T3JpZ2luTGlzdCgpfVRhc2ske2l9YFxuICAgICAgICApLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHJlbmRlckFsbFRhc2tTdGF0dXNlcyhsaXN0cykge1xuICAgIGxpc3RzLmdldEFycmF5KCkuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgbGlzdC5nZXRBcnJheSgpLmZvckVhY2goKHRhc2ssIGkpID0+IHtcbiAgICAgICAgaWYgKCF0YXNrLmdldFN0YXR1cygpKSB7XG4gICAgICAgICAgLy8gSWYgdGFzayBpcyBub3QgYWN0aXZlXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAjJHt0YXNrLmdldE9yaWdpbkxpc3QoKX1UYXNrJHtpfWBcbiAgICAgICAgICApLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBzZXR1cFRhc2tUb2dnbGUoKSB7XG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWxpc3RcIik7XG4gICAgY29uc3QgdGFza0RpdnMgPSB0YXNrcy5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2sgaW5wdXRcIik7XG5cbiAgICB0YXNrRGl2cy5mb3JFYWNoKCh0YXNrRGl2KSA9PiB7XG4gICAgICB0YXNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAvLyBQcm9ibGVtIGlzIGl0IHJlZ2lzdGVycyBzZXBhcmF0ZSBjbGlja3MgZm9yIGxhYmVsIGFuZCBjaGVja2JveFxuICAgICAgICBjb25zdCBsaXN0cyA9IExvY2FsU3RvcmFnZS5nZXRMaXN0c09iamVjdCgpO1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGUudGFyZ2V0LmxhYmVsc1swXS50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgbGlzdCA9IGxpc3RzLmdldExpc3RCeVRhc2tOYW1lKHRhc2tOYW1lKTtcbiAgICAgICAgY29uc3QgdGFzayA9IGxpc3QuZ2V0VGFzayh0YXNrTmFtZSk7XG4gICAgICAgIHRhc2sudG9nZ2xlU3RhdHVzKCk7XG5cbiAgICAgICAgTG9jYWxTdG9yYWdlLnNhdmVMaXN0cyhsaXN0cyk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBzZXR1cEJ1dHRvbnMoKSB7XG4gICAgLy8gQWRkIGxpc3QgYnV0dG9uXG4gICAgY29uc3QgYWRkTGlzdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1saXN0LWZvcm1cIik7XG4gICAgY29uc3QgbGlzdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtbGlzdC1mb3JtIC5saXN0LW5hbWUtaW5wdXRcIik7XG4gICAgY29uc3QgYWRkTGlzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWxpc3QtYnRuXCIpO1xuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrRm9ybVwiKTtcbiAgICBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0VGFza1RleHRcIik7XG4gICAgY29uc3QgYWxsVGFza3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbC10YXNrcy1idG5cIik7XG5cbiAgICBhbGxUYXNrc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgVUkubG9hZEFsbFRhc2tzKCk7XG4gICAgfSk7XG5cbiAgICBhZGRMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgdGhpcy5lbmFibGVBZGRMaXN0UG9wdXAoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gICAgYWRkTGlzdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAvLyBBZGQgbGlzdCB0byBMb2NhbFN0b3JhZ2VcblxuICAgICAgY29uc3QgbGlzdE5hbWUgPSBsaXN0SW5wdXQudmFsdWU7XG4gICAgICBjb25zdCBuZXdMaXN0ID0gbmV3IExpc3QobGlzdE5hbWUpO1xuICAgICAgTG9jYWxTdG9yYWdlLmFkZExpc3QobmV3TGlzdCk7XG4gICAgICBVSS5jcmVhdGVMaXN0KG5ld0xpc3QpO1xuXG4gICAgICB0aGlzLmRpc2FibGVBZGRMaXN0UG9wdXAoKTtcbiAgICB9KTtcblxuICAgIGFkZFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vIEFkZCB0YXNrIHRvIGxpc3RcblxuICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRhc2tJbnB1dC52YWx1ZSk7XG4gICAgICBjb25zdCBsaXN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1uYW1lXCIpLnRleHRDb250ZW50O1xuICAgICAgTG9jYWxTdG9yYWdlLmFkZFRhc2sobGlzdE5hbWUsIG5ld1Rhc2spO1xuXG4gICAgICBVSS5sb2FkRnJlc2hMaXN0KExvY2FsU3RvcmFnZS5nZXRMaXN0c09iamVjdCgpLmdldExpc3RCeU5hbWUobGlzdE5hbWUpKTtcbiAgICAgIFVJLmNsZWFyVGFza0lucHV0KCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZW5hYmxlQWRkTGlzdFBvcHVwKCkge1xuICAgIGNvbnN0IGFkZExpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1saXN0LWJ0blwiKTtcbiAgICBjb25zdCBhZGRMaXN0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1saXN0LXBvcHVwXCIpO1xuICAgIGNvbnN0IGxpc3ROYW1lSW5wdXQgPSBhZGRMaXN0UG9wdXAucXVlcnlTZWxlY3RvcihcIi5saXN0LW5hbWUtaW5wdXRcIik7XG5cbiAgICBhZGRMaXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgYWRkTGlzdFBvcHVwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgbGlzdE5hbWVJbnB1dC5mb2N1cygpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLmV4aXRBZGRMaXN0UG9wVXBXaGVuTG9zZUZvY3VzKTtcbiAgfVxuXG4gIHN0YXRpYyBkaXNhYmxlQWRkTGlzdFBvcHVwKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS5leGl0QWRkTGlzdFBvcFVwV2hlbkxvc2VGb2N1cyk7XG5cbiAgICBjb25zdCBhZGRMaXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtbGlzdC1idG5cIik7XG4gICAgY29uc3QgYWRkTGlzdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtbGlzdC1wb3B1cFwiKTtcbiAgICBjb25zdCBsaXN0TmFtZUlucHV0ID0gYWRkTGlzdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1uYW1lLWlucHV0XCIpO1xuXG4gICAgYWRkTGlzdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGFkZExpc3RQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGxpc3ROYW1lSW5wdXQudmFsdWUgPSBcIlwiO1xuICB9XG5cbiAgc3RhdGljIGV4aXRBZGRMaXN0UG9wVXBXaGVuTG9zZUZvY3VzKGUpIHtcbiAgICBpZiAoXG4gICAgICBlLnRhcmdldCAhPT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LW5hbWUtaW5wdXRcIikgJiZcbiAgICAgIGUudGFyZ2V0ICE9PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQuc3VibWl0QWRkTGlzdEZvcm1cIilcbiAgICApIHtcbiAgICAgIFVJLmRpc2FibGVBZGRMaXN0UG9wdXAoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY2xlYXJUYXNrSW5wdXQoKSB7XG4gICAgY29uc3QgaW5wdXRUYXNrVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRUYXNrVGV4dFwiKTtcbiAgICBpbnB1dFRhc2tUZXh0LnZhbHVlID0gXCJcIjtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBVSSBmcm9tIFwiLi9tb2R1bGVzL1VJXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBcIi4vZHJvcGRvd25NZW51LmNzc1wiO1xuXG5VSS5sb2FkVG9Eb0xpc3QoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==