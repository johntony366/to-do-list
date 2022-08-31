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
___CSS_LOADER_EXPORT___.push([module.id, ".filters-list li,\n.lists-list li {\n  position: relative;\n}\n\n.tasks-list li {\n  position: relative;\n}\n\n/****************/\n/* For sidebar */\n/****************/\n\n.sidebar .dropdown-menu-btn {\n  display: none;\n\n  border-radius: 4px;\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  z-index: 1;\n  top: 6px;\n  right: 10px;\n  background-color: transparent;\n  padding: 12px;\n}\n\n.sidebar .dropdown-menu-btn:hover {\n  background-color: rgb(255, 255, 255, 0.3);\n}\n\n.sidebar .dropdown-menu-btn.active {\n  background-color: rgb(255, 255, 255, 0.5);\n}\n\n.sidebar .dropdown-menu-btn i {\n  position: absolute;\n  top: 6px;\n  left: 10px;\n}\n\n.sidebar .dropdown-btn {\n  text-align: left;\n  padding: 12px;\n  font-size: 0.9rem;\n  border-radius: 0px;\n\n  background-color: black;\n  color: var(--p1);\n}\n\n.sidebar .dropdown-btn:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.sidebar .dropdown-btn.active {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.lists-list .dropdownMenu {\n  opacity: 0;\n  pointer-events: none;\n\n  background-color: rgb(0, 0, 0, 0.7);\n  position: absolute;\n  z-index: 100;\n  top: 100%;\n  right: 0;\n\n  padding: 0.75rem;\n}\n\n.lists-list .dropdownMenu.active {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n\n/*************/\n/* For tasks */\n/*************/\n\n.tasks-list .dropdown-menu-btn {\n  border: none;\n  border-radius: 4px;\n\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  z-index: 1;\n  top: 6px;\n  right: 20px;\n  background-color: transparent;\n  padding: 12px;\n}\n\n.tasks-list .dropdown-menu-btn:hover {\n  background-color: rgb(255, 255, 255, 0.1);\n}\n\n.tasks-list .dropdown-menu-btn.active {\n  background-color: rgb(255, 255, 255, 0.7);\n}\n\n.tasks-list .dropdown-menu-btn i {\n  position: absolute;\n  top: 6px;\n  left: 10px;\n  color: var(--p1);\n}\n\n.tasks-list .dropdown-btn {\n  text-align: left;\n  padding: 12px;\n  padding-right: 24px;\n  font-size: 0.9rem;\n\n  background-color: black;\n  color: var(--p1);\n  width: 100%;\n}\n\n.tasks-list .dropdown-btn:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.tasks-list .dropdownMenu {\n  opacity: 0;\n  pointer-events: none;\n\n  background-color: rgb(0, 0, 0, 0.4);\n  position: absolute;\n  z-index: 100;\n  top: 100%;\n  right: 0;\n\n  padding: 0.75rem;\n}\n\n.tasks-list .dropdownMenu .options li {\n  width: 100%;\n}\n\n.tasks-list .dropdownMenu.active {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n/* Media queries */\n@media (min-width: 980px) {\n  .sidebar .dropdown-menu-btn {\n    display: block;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/dropdownMenu.css"],"names":[],"mappings":"AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,iBAAiB;AACjB,gBAAgB;AAChB,iBAAiB;;AAEjB;EACE,aAAa;;EAEb,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,WAAW;EACX,6BAA6B;EAC7B,aAAa;AACf;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,iBAAiB;EACjB,kBAAkB;;EAElB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,UAAU;EACV,oBAAoB;;EAEpB,mCAAmC;EACnC,kBAAkB;EAClB,YAAY;EACZ,SAAS;EACT,QAAQ;;EAER,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,oBAAoB;AACtB;;;AAGA,cAAc;AACd,cAAc;AACd,cAAc;;AAEd;EACE,YAAY;EACZ,kBAAkB;;EAElB,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,WAAW;EACX,6BAA6B;EAC7B,aAAa;AACf;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,iBAAiB;;EAEjB,uBAAuB;EACvB,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,UAAU;EACV,oBAAoB;;EAEpB,mCAAmC;EACnC,kBAAkB;EAClB,YAAY;EACZ,SAAS;EACT,QAAQ;;EAER,gBAAgB;AAClB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;EACV,oBAAoB;AACtB;;AAEA,kBAAkB;AAClB;EACE;IACE,cAAc;EAChB;AACF","sourcesContent":["@import \"./palette.css\";\n\n.filters-list li,\n.lists-list li {\n  position: relative;\n}\n\n.tasks-list li {\n  position: relative;\n}\n\n/****************/\n/* For sidebar */\n/****************/\n\n.sidebar .dropdown-menu-btn {\n  display: none;\n\n  border-radius: 4px;\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  z-index: 1;\n  top: 6px;\n  right: 10px;\n  background-color: transparent;\n  padding: 12px;\n}\n\n.sidebar .dropdown-menu-btn:hover {\n  background-color: rgb(255, 255, 255, 0.3);\n}\n\n.sidebar .dropdown-menu-btn.active {\n  background-color: rgb(255, 255, 255, 0.5);\n}\n\n.sidebar .dropdown-menu-btn i {\n  position: absolute;\n  top: 6px;\n  left: 10px;\n}\n\n.sidebar .dropdown-btn {\n  text-align: left;\n  padding: 12px;\n  font-size: 0.9rem;\n  border-radius: 0px;\n\n  background-color: black;\n  color: var(--p1);\n}\n\n.sidebar .dropdown-btn:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.sidebar .dropdown-btn.active {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.lists-list .dropdownMenu {\n  opacity: 0;\n  pointer-events: none;\n\n  background-color: rgb(0, 0, 0, 0.7);\n  position: absolute;\n  z-index: 100;\n  top: 100%;\n  right: 0;\n\n  padding: 0.75rem;\n}\n\n.lists-list .dropdownMenu.active {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n\n/*************/\n/* For tasks */\n/*************/\n\n.tasks-list .dropdown-menu-btn {\n  border: none;\n  border-radius: 4px;\n\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  z-index: 1;\n  top: 6px;\n  right: 20px;\n  background-color: transparent;\n  padding: 12px;\n}\n\n.tasks-list .dropdown-menu-btn:hover {\n  background-color: rgb(255, 255, 255, 0.1);\n}\n\n.tasks-list .dropdown-menu-btn.active {\n  background-color: rgb(255, 255, 255, 0.7);\n}\n\n.tasks-list .dropdown-menu-btn i {\n  position: absolute;\n  top: 6px;\n  left: 10px;\n  color: var(--p1);\n}\n\n.tasks-list .dropdown-btn {\n  text-align: left;\n  padding: 12px;\n  padding-right: 24px;\n  font-size: 0.9rem;\n\n  background-color: black;\n  color: var(--p1);\n  width: 100%;\n}\n\n.tasks-list .dropdown-btn:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.tasks-list .dropdownMenu {\n  opacity: 0;\n  pointer-events: none;\n\n  background-color: rgb(0, 0, 0, 0.4);\n  position: absolute;\n  z-index: 100;\n  top: 100%;\n  right: 0;\n\n  padding: 0.75rem;\n}\n\n.tasks-list .dropdownMenu .options li {\n  width: 100%;\n}\n\n.tasks-list .dropdownMenu.active {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n/* Media queries */\n@media (min-width: 980px) {\n  .sidebar .dropdown-menu-btn {\n    display: block;\n  }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: \"Lato\", sans-serif;\n  color: var(--p1);\n  background-color: var(--p4);\n}\n\nul {\n  list-style-type: none;\n}\n\na {\n  text-decoration: none;\n  color: var(--p1);\n}\n\np {\n  margin: 10px 0;\n}\n\nimg {\n  width: 100%;\n}\n\n/* Utility classes */\n.flex {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/*  */\n\nbody > .container {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 100px 1fr 4fr 50px;\n  height: 100vh;\n}\n\n/* Header */\n.header {\n  gap: 8px;\n  grid-column: 1/ 3;\n  grid-row: 1 / 2;\n}\n\n.primary-heading {\n  font-size: 2rem;\n}\n\n/* Sidebar */\n.sidebar {\n  background-color: var(--p5);\n}\n\n.sidebar-content {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  margin: 16px 16px;\n  flex-direction: column;\n}\n\n.sidebar i {\n  color: black;\n}\n\n.sidebar button {\n  background-color: var(--p3);\n  border: none;\n  border-radius: 12px;\n  padding: 0px 8px;\n\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  text-align: left;\n\n  position: relative;\n  padding-left: 32px;\n}\n\n.sidebar button:hover {\n  background-color: var(--p2);\n}\n\n.sidebar button:active {\n  background-color: var(--p1);\n}\n\n.lists {\n  margin-top: 12px;\n}\n\n.lists h2,\n.filters h2 {\n  color: var(--p2);\n}\n\n.filters-list,\n.lists-list {\n  display: flex;\n  gap: 8px;\n  flex-direction: row;\n  justify-content: start;\n  flex-wrap: wrap;\n  margin-top: 8px;\n}\n\n.filter-icon,\n.list-icon,\n.add-list-icon {\n  position: absolute;\n  top: 12px;\n  left: 10px;\n}\n\n.sidebar .add-list-btn {\n  gap: 4px;\n  padding: 0px 8px;\n  padding-left: 28px;\n  margin-top: 8px;\n}\n\n.add-list-btn.active {\n  display: none;\n}\n\n.add-list-popup {\n  display: none;\n}\n\n.add-list-popup input[type=\"text\"] {\n  background-color: var(--p4);\n  color: inherit;\n  border: none;\n  border-radius: 12px;\n  padding: 4px 0px 4px 12px;\n}\n\n.add-list-popup input[type=\"text\"]::placeholder {\n  color: var(--p3);\n  font-family: \"Lato\";\n}\n\n.add-list-popup.active {\n  display: block;\n}\n\n/* Main */\n.main {\n  grid-column: 1 / 2;\n  grid-row: 3 / 4;\n\n  padding: 32px;\n  background-color: var(--p6);\n}\n\n.main-header {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  margin-bottom: 24px;\n}\n\n.main-header input[type=\"text\"] {\n  background-color: var(--p4);\n  color: inherit;\n  border: none;\n  border-radius: 12px;\n  padding: 4px 0px 4px 12px;\n  width: 50%;\n}\n\n.addTaskForm {\n  flex: 1;\n  display: none;\n}\n\n.main-header input[type=\"text\"]::placeholder {\n  color: var(--p3);\n  font-family: \"Lato\";\n}\n\n.tasks-list {\n  display: grid;\n}\n\n.tasks-list li {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n}\n\n.task {\n  color: black;\n  border-radius: 24px;\n  width: 100%;\n  user-select: none;\n\n  position: relative;\n}\n\n.task input[type=\"checkbox\"] {\n  display: none;\n}\n\n.task label {\n  display: flex;\n  align-items: center;\n  padding: 8px 0px;\n  padding-left: 32px;\n  color: var(--p1);\n}\n\n.task label::before {\n  position: absolute;\n  content: \"\";\n  left: 12px;\n  width: 12px;\n  height: 12px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n}\n\n.task input[type=\"checkbox\"]:checked + label::before {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.task input[type=\"checkbox\"]:checked + label {\n  text-decoration: line-through;\n  color: var(--p2);\n}\n\n.task:hover {\n  background-color: var(--p3t);\n}\n\n/* Footer */\n.footer {\n  grid-column: 1 / 2;\n  grid-row: 4 / 5;\n\n  gap: 8px;\n  grid-column: 1 / 3;\n}\n\n/* Media queries */\n\n@media (min-width: 480px) {\n  .sidebar-content {\n    margin-left: 32px;\n  }\n}\n@media (min-width: 980px) {\n  body > .container {\n    grid-template-columns: 20% 80%;\n    grid-template-rows: 100px 1fr 50px;\n  }\n\n  .header {\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n  }\n\n  .sidebar {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n  }\n\n  .filters-list > li {\n    width: 80%;\n  }\n\n  .sidebar button {\n    width: 100%;\n  }\n\n  .sidebar-content {\n    justify-content: start;\n    margin: 32px;\n  }\n\n  .main {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n  }\n\n  .footer {\n    grid-column: 1 / 3;\n    grid-row: 3 / 4;\n  }\n\n  .filters-list,\n  .lists-list {\n    flex-direction: column;\n  }\n\n  .lists h2 {\n    margin-top: 24px;\n  }\n\n  .sidebar h2 {\n    margin-bottom: 12px;\n  }\n\n  .sidebar .add-list-btn {\n    margin-top: 16px;\n  }\n\n  .lists,\n  .filters {\n    width: 100%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato&display=swap\");\n@import \"./palette.css\";\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: \"Lato\", sans-serif;\n  color: var(--p1);\n  background-color: var(--p4);\n}\n\nul {\n  list-style-type: none;\n}\n\na {\n  text-decoration: none;\n  color: var(--p1);\n}\n\np {\n  margin: 10px 0;\n}\n\nimg {\n  width: 100%;\n}\n\n/* Utility classes */\n.flex {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/*  */\n\nbody > .container {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 100px 1fr 4fr 50px;\n  height: 100vh;\n}\n\n/* Header */\n.header {\n  gap: 8px;\n  grid-column: 1/ 3;\n  grid-row: 1 / 2;\n}\n\n.primary-heading {\n  font-size: 2rem;\n}\n\n/* Sidebar */\n.sidebar {\n  background-color: var(--p5);\n}\n\n.sidebar-content {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  margin: 16px 16px;\n  flex-direction: column;\n}\n\n.sidebar i {\n  color: black;\n}\n\n.sidebar button {\n  background-color: var(--p3);\n  border: none;\n  border-radius: 12px;\n  padding: 0px 8px;\n\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  text-align: left;\n\n  position: relative;\n  padding-left: 32px;\n}\n\n.sidebar button:hover {\n  background-color: var(--p2);\n}\n\n.sidebar button:active {\n  background-color: var(--p1);\n}\n\n.lists {\n  margin-top: 12px;\n}\n\n.lists h2,\n.filters h2 {\n  color: var(--p2);\n}\n\n.filters-list,\n.lists-list {\n  display: flex;\n  gap: 8px;\n  flex-direction: row;\n  justify-content: start;\n  flex-wrap: wrap;\n  margin-top: 8px;\n}\n\n.filter-icon,\n.list-icon,\n.add-list-icon {\n  position: absolute;\n  top: 12px;\n  left: 10px;\n}\n\n.sidebar .add-list-btn {\n  gap: 4px;\n  padding: 0px 8px;\n  padding-left: 28px;\n  margin-top: 8px;\n}\n\n.add-list-btn.active {\n  display: none;\n}\n\n.add-list-popup {\n  display: none;\n}\n\n.add-list-popup input[type=\"text\"] {\n  background-color: var(--p4);\n  color: inherit;\n  border: none;\n  border-radius: 12px;\n  padding: 4px 0px 4px 12px;\n}\n\n.add-list-popup input[type=\"text\"]::placeholder {\n  color: var(--p3);\n  font-family: \"Lato\";\n}\n\n.add-list-popup.active {\n  display: block;\n}\n\n/* Main */\n.main {\n  grid-column: 1 / 2;\n  grid-row: 3 / 4;\n\n  padding: 32px;\n  background-color: var(--p6);\n}\n\n.main-header {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  margin-bottom: 24px;\n}\n\n.main-header input[type=\"text\"] {\n  background-color: var(--p4);\n  color: inherit;\n  border: none;\n  border-radius: 12px;\n  padding: 4px 0px 4px 12px;\n  width: 50%;\n}\n\n.addTaskForm {\n  flex: 1;\n  display: none;\n}\n\n.main-header input[type=\"text\"]::placeholder {\n  color: var(--p3);\n  font-family: \"Lato\";\n}\n\n.tasks-list {\n  display: grid;\n}\n\n.tasks-list li {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n}\n\n.task {\n  color: black;\n  border-radius: 24px;\n  width: 100%;\n  user-select: none;\n\n  position: relative;\n}\n\n.task input[type=\"checkbox\"] {\n  display: none;\n}\n\n.task label {\n  display: flex;\n  align-items: center;\n  padding: 8px 0px;\n  padding-left: 32px;\n  color: var(--p1);\n}\n\n.task label::before {\n  position: absolute;\n  content: \"\";\n  left: 12px;\n  width: 12px;\n  height: 12px;\n  background-image: url(\"assets/circle-regular.svg\");\n  background-repeat: no-repeat;\n}\n\n.task input[type=\"checkbox\"]:checked + label::before {\n  background-image: url(\"assets/circle-check-regular.svg\");\n}\n\n.task input[type=\"checkbox\"]:checked + label {\n  text-decoration: line-through;\n  color: var(--p2);\n}\n\n.task:hover {\n  background-color: var(--p3t);\n}\n\n/* Footer */\n.footer {\n  grid-column: 1 / 2;\n  grid-row: 4 / 5;\n\n  gap: 8px;\n  grid-column: 1 / 3;\n}\n\n/* Media queries */\n\n@media (min-width: 480px) {\n  .sidebar-content {\n    margin-left: 32px;\n  }\n}\n@media (min-width: 980px) {\n  body > .container {\n    grid-template-columns: 20% 80%;\n    grid-template-rows: 100px 1fr 50px;\n  }\n\n  .header {\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n  }\n\n  .sidebar {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n  }\n\n  .filters-list > li {\n    width: 80%;\n  }\n\n  .sidebar button {\n    width: 100%;\n  }\n\n  .sidebar-content {\n    justify-content: start;\n    margin: 32px;\n  }\n\n  .main {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n  }\n\n  .footer {\n    grid-column: 1 / 3;\n    grid-row: 3 / 4;\n  }\n\n  .filters-list,\n  .lists-list {\n    flex-direction: column;\n  }\n\n  .lists h2 {\n    margin-top: 24px;\n  }\n\n  .sidebar h2 {\n    margin-bottom: 12px;\n  }\n\n  .sidebar .add-list-btn {\n    margin-top: 16px;\n  }\n\n  .lists,\n  .filters {\n    width: 100%;\n  }\n}\n"],"sourceRoot":""}]);
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
    const ul = document.querySelector(".lists ul");
    const li = document.createElement("li");

    li.innerHTML = `<button>
                <i class="fa-regular fa-note-sticky list-icon"></i>
                <p>${list.getName()}</p>
                <button class="dropdown-menu-btn">
                <i class="fa-solid fa-ellipsis-vertical"></i>
                </button>
              </button>
              <div class="dropdownMenu">
                <ul class="options">
                  <li><button class="dropdown-btn list-edit">Edit</button></li>
                  <li><button class="dropdown-btn list-delete">Delete</button></li>
                </ul>
              </div>
    `;
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
      this.loadAllTasks();
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
    UI.setupTaskToggle();
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
    tasks.replaceChildren();
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
        const modifiedList = _LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].getListByName(listName);
        this.renderTasks(modifiedList);
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

    addListButton.addEventListener("click", () => {
      this.enableAddListPopup();
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
    });
  }

  static enableAddListPopup() {
    const addListButton = document.querySelector(".add-list-btn");
    const addListPopup = document.querySelector(".add-list-popup");

    addListButton.classList.add("active");
    addListPopup.classList.add("active");
  }

  static disableAddListPopup() {
    const addListButton = document.querySelector(".add-list-btn");
    const addListPopup = document.querySelector(".add-list-popup");

    addListButton.classList.remove("active");
    addListPopup.classList.remove("active");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxVQUFVLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxVQUFVLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxZQUFZLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksY0FBYyxXQUFXLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxPQUFPLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLFVBQVUsS0FBSyxZQUFZLFlBQVksVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxZQUFZLFVB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VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0E4QjtBQUNSO0FBQ007O0FBRTVCLGdFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kcm9wZG93bk1lbnUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcGFsZXR0ZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Ryb3Bkb3duTWVudS5jc3M/NmI3ZCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9MaXN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9MaXN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvTG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9UYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGFsZXR0ZS5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5maWx0ZXJzLWxpc3QgbGksXFxuLmxpc3RzLWxpc3QgbGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFza3MtbGlzdCBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqL1xcbi8qIEZvciBzaWRlYmFyICovXFxuLyoqKioqKioqKioqKioqKiovXFxuXFxuLnNpZGViYXIgLmRyb3Bkb3duLW1lbnUtYnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiA4cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiA2cHg7XFxuICByaWdodDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMTJweDtcXG59XFxuXFxuLnNpZGViYXIgLmRyb3Bkb3duLW1lbnUtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbn1cXG5cXG4uc2lkZWJhciAuZHJvcGRvd24tbWVudS1idG4uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG4uc2lkZWJhciAuZHJvcGRvd24tbWVudS1idG4gaSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDZweDtcXG4gIGxlZnQ6IDEwcHg7XFxufVxcblxcbi5zaWRlYmFyIC5kcm9wZG93bi1idG4ge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHZhcigtLXAxKTtcXG59XFxuXFxuLnNpZGViYXIgLmRyb3Bkb3duLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxufVxcblxcbi5zaWRlYmFyIC5kcm9wZG93bi1idG4uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLmxpc3RzLWxpc3QgLmRyb3Bkb3duTWVudSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC43KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHRvcDogMTAwJTtcXG4gIHJpZ2h0OiAwO1xcblxcbiAgcGFkZGluZzogMC43NXJlbTtcXG59XFxuXFxuLmxpc3RzLWxpc3QgLmRyb3Bkb3duTWVudS5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKi9cXG4vKiBGb3IgdGFza3MgKi9cXG4vKioqKioqKioqKioqKi9cXG5cXG4udGFza3MtbGlzdCAuZHJvcGRvd24tbWVudS1idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcblxcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogNnB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDEycHg7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bi1tZW51LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG59XFxuXFxuLnRhc2tzLWxpc3QgLmRyb3Bkb3duLW1lbnUtYnRuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG59XFxuXFxuLnRhc2tzLWxpc3QgLmRyb3Bkb3duLW1lbnUtYnRuIGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA2cHg7XFxuICBsZWZ0OiAxMHB4O1xcbiAgY29sb3I6IHZhcigtLXAxKTtcXG59XFxuXFxuLnRhc2tzLWxpc3QgLmRyb3Bkb3duLWJ0biB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogMTJweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHZhcigtLXAxKTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFza3MtbGlzdCAuZHJvcGRvd24tYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG59XFxuXFxuLnRhc2tzLWxpc3QgLmRyb3Bkb3duTWVudSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC40KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHRvcDogMTAwJTtcXG4gIHJpZ2h0OiAwO1xcblxcbiAgcGFkZGluZzogMC43NXJlbTtcXG59XFxuXFxuLnRhc2tzLWxpc3QgLmRyb3Bkb3duTWVudSAub3B0aW9ucyBsaSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2tzLWxpc3QgLmRyb3Bkb3duTWVudS5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG5cXG4vKiBNZWRpYSBxdWVyaWVzICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDk4MHB4KSB7XFxuICAuc2lkZWJhciAuZHJvcGRvd24tbWVudS1idG4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Ryb3Bkb3duTWVudS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEIsaUJBQWlCOztBQUVqQjtFQUNFLGFBQWE7O0VBRWIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7RUFFbEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7O0VBRXBCLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFDVCxRQUFROztFQUVSLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7OztBQUdBLGNBQWM7QUFDZCxjQUFjO0FBQ2QsY0FBYzs7QUFFZDtFQUNFLFlBQVk7RUFDWixrQkFBa0I7O0VBRWxCLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7O0VBRWpCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjs7RUFFcEIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULFFBQVE7O0VBRVIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtBQUN0Qjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuL3BhbGV0dGUuY3NzXFxcIjtcXG5cXG4uZmlsdGVycy1saXN0IGxpLFxcbi5saXN0cy1saXN0IGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhc2tzLWxpc3QgbGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKi9cXG4vKiBGb3Igc2lkZWJhciAqL1xcbi8qKioqKioqKioqKioqKioqL1xcblxcbi5zaWRlYmFyIC5kcm9wZG93bi1tZW51LWJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcblxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogNnB4O1xcbiAgcmlnaHQ6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDEycHg7XFxufVxcblxcbi5zaWRlYmFyIC5kcm9wZG93bi1tZW51LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG59XFxuXFxuLnNpZGViYXIgLmRyb3Bkb3duLW1lbnUtYnRuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLnNpZGViYXIgLmRyb3Bkb3duLW1lbnUtYnRuIGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA2cHg7XFxuICBsZWZ0OiAxMHB4O1xcbn1cXG5cXG4uc2lkZWJhciAuZHJvcGRvd24tYnRuIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB2YXIoLS1wMSk7XFxufVxcblxcbi5zaWRlYmFyIC5kcm9wZG93bi1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbn1cXG5cXG4uc2lkZWJhciAuZHJvcGRvd24tYnRuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbi5saXN0cy1saXN0IC5kcm9wZG93bk1lbnUge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0b3A6IDEwMCU7XFxuICByaWdodDogMDtcXG5cXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxufVxcblxcbi5saXN0cy1saXN0IC5kcm9wZG93bk1lbnUuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKiovXFxuLyogRm9yIHRhc2tzICovXFxuLyoqKioqKioqKioqKiovXFxuXFxuLnRhc2tzLWxpc3QgLmRyb3Bkb3duLW1lbnUtYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICB0b3A6IDZweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAxMnB4O1xcbn1cXG5cXG4udGFza3MtbGlzdCAuZHJvcGRvd24tbWVudS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bi1tZW51LWJ0bi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bi1tZW51LWJ0biBpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNnB4O1xcbiAgbGVmdDogMTBweDtcXG4gIGNvbG9yOiB2YXIoLS1wMSk7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bi1idG4ge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB2YXIoLS1wMSk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2tzLWxpc3QgLmRyb3Bkb3duLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bk1lbnUge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0b3A6IDEwMCU7XFxuICByaWdodDogMDtcXG5cXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bk1lbnUgLm9wdGlvbnMgbGkge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bk1lbnUuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLyogTWVkaWEgcXVlcmllcyAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA5ODBweCkge1xcbiAgLnNpZGViYXIgLmRyb3Bkb3duLW1lbnUtYnRuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tcDA6ICNkY2NkZjA7XFxuICAtLXAxOiAjYzhiNmUyO1xcbiAgLS1wMjogI2E4YTRjZTtcXG4gIC0tcDM6ICM3YTg2YjY7XFxuICAtLXAzdDogIzdhODZiNjYzO1xcbiAgLS1wNDogIzQ5NWM4MztcXG4gIC0tcDU6ICMzOTRhNmI7XFxuICAtLXA2OiAjMzAzYzU1O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGFsZXR0ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGFBQWE7RUFDYixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixhQUFhO0VBQ2IsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tcDA6ICNkY2NkZjA7XFxuICAtLXAxOiAjYzhiNmUyO1xcbiAgLS1wMjogI2E4YTRjZTtcXG4gIC0tcDM6ICM3YTg2YjY7XFxuICAtLXAzdDogIzdhODZiNjYzO1xcbiAgLS1wNDogIzQ5NWM4MztcXG4gIC0tcDU6ICMzOTRhNmI7XFxuICAtLXA2OiAjMzAzYzU1O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGFsZXR0ZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2NpcmNsZS1yZWd1bGFyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImFzc2V0cy9jaXJjbGUtY2hlY2stcmVndWxhci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHZhcigtLXAxKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXA0KTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1wMSk7XFxufVxcblxcbnAge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogVXRpbGl0eSBjbGFzc2VzICovXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogICovXFxuXFxuYm9keSA+IC5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnIgNGZyIDUwcHg7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG4uaGVhZGVyIHtcXG4gIGdhcDogOHB4O1xcbiAgZ3JpZC1jb2x1bW46IDEvIDM7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5wcmltYXJ5LWhlYWRpbmcge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4vKiBTaWRlYmFyICovXFxuLnNpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDUpO1xcbn1cXG5cXG4uc2lkZWJhci1jb250ZW50IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luOiAxNnB4IDE2cHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2lkZWJhciBpIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnNpZGViYXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXAzKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBwYWRkaW5nOiAwcHggOHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG5cXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XFxufVxcblxcbi5zaWRlYmFyIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wMik7XFxufVxcblxcbi5zaWRlYmFyIGJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDEpO1xcbn1cXG5cXG4ubGlzdHMge1xcbiAgbWFyZ2luLXRvcDogMTJweDtcXG59XFxuXFxuLmxpc3RzIGgyLFxcbi5maWx0ZXJzIGgyIHtcXG4gIGNvbG9yOiB2YXIoLS1wMik7XFxufVxcblxcbi5maWx0ZXJzLWxpc3QsXFxuLmxpc3RzLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcblxcbi5maWx0ZXItaWNvbixcXG4ubGlzdC1pY29uLFxcbi5hZGQtbGlzdC1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTJweDtcXG4gIGxlZnQ6IDEwcHg7XFxufVxcblxcbi5zaWRlYmFyIC5hZGQtbGlzdC1idG4ge1xcbiAgZ2FwOiA0cHg7XFxuICBwYWRkaW5nOiAwcHggOHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyOHB4O1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG5cXG4uYWRkLWxpc3QtYnRuLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYWRkLWxpc3QtcG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFkZC1saXN0LXBvcHVwIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wNCk7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBwYWRkaW5nOiA0cHggMHB4IDRweCAxMnB4O1xcbn1cXG5cXG4uYWRkLWxpc3QtcG9wdXAgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tcDMpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIjtcXG59XFxuXFxuLmFkZC1saXN0LXBvcHVwLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogTWFpbiAqL1xcbi5tYWluIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG5cXG4gIHBhZGRpbmc6IDMycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wNik7XFxufVxcblxcbi5tYWluLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG5cXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxufVxcblxcbi5tYWluLWhlYWRlciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDQpO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgcGFkZGluZzogNHB4IDBweCA0cHggMTJweDtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5hZGRUYXNrRm9ybSB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1haW4taGVhZGVyIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLXAzKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCI7XFxufVxcblxcbi50YXNrcy1saXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi50YXNrcy1saXN0IGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4udGFzayB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFzayBsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweCAwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XFxuICBjb2xvcjogdmFyKC0tcDEpO1xcbn1cXG5cXG4udGFzayBsYWJlbDo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgbGVmdDogMTJweDtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogdmFyKC0tcDIpO1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wM3QpO1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG4uZm9vdGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiA0IC8gNTtcXG5cXG4gIGdhcDogOHB4O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG4vKiBNZWRpYSBxdWVyaWVzICovXFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XFxuICAuc2lkZWJhci1jb250ZW50IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5ODBweCkge1xcbiAgYm9keSA+IC5jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyIDUwcHg7XFxuICB9XFxuXFxuICAuaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICB9XFxuXFxuICAuc2lkZWJhciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgfVxcblxcbiAgLmZpbHRlcnMtbGlzdCA+IGxpIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLnNpZGViYXItY29udGVudCB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIG1hcmdpbjogMzJweDtcXG4gIH1cXG5cXG4gIC5tYWluIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICB9XFxuXFxuICAuZm9vdGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICB9XFxuXFxuICAuZmlsdGVycy1saXN0LFxcbiAgLmxpc3RzLWxpc3Qge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmxpc3RzIGgyIHtcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyIGgyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyIC5hZGQtbGlzdC1idG4ge1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgfVxcblxcbiAgLmxpc3RzLFxcbiAgLmZpbHRlcnMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7OztFQUdFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQSxLQUFLOztBQUVMO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzQ0FBc0M7RUFDdEMsYUFBYTtBQUNmOztBQUVBLFdBQVc7QUFDWDtFQUNFLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsWUFBWTtBQUNaO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7O0VBRWYsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjs7RUFFaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFROztFQUVSLGdCQUFnQjs7RUFFaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBOzs7RUFHRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEsU0FBUztBQUNUO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7O0VBRWYsYUFBYTtFQUNiLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUzs7RUFFVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsaUJBQWlCOztFQUVqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWix5REFBa0Q7RUFDbEQsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UseURBQXdEO0FBQzFEOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTs7RUFFZixRQUFRO0VBQ1Isa0JBQWtCO0FBQ3BCOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLDhCQUE4QjtJQUM5QixrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7O0lBRUUsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBOztJQUVFLFdBQVc7RUFDYjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG8mZGlzcGxheT1zd2FwXFxcIik7XFxuQGltcG9ydCBcXFwiLi9wYWxldHRlLmNzc1xcXCI7XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB2YXIoLS1wMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wNCk7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tcDEpO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIFV0aWxpdHkgY2xhc3NlcyAqL1xcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qICAqL1xcblxcbmJvZHkgPiAuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyIDRmciA1MHB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuLmhlYWRlciB7XFxuICBnYXA6IDhweDtcXG4gIGdyaWQtY29sdW1uOiAxLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4ucHJpbWFyeS1oZWFkaW5nIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLyogU2lkZWJhciAqL1xcbi5zaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXA1KTtcXG59XFxuXFxuLnNpZGViYXItY29udGVudCB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIG1hcmdpbjogMTZweCAxNnB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNpZGViYXIgaSB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5zaWRlYmFyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wMyk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgcGFkZGluZzogMHB4IDhweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxuXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xcbn1cXG5cXG4uc2lkZWJhciBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDIpO1xcbn1cXG5cXG4uc2lkZWJhciBidXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXAxKTtcXG59XFxuXFxuLmxpc3RzIHtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxufVxcblxcbi5saXN0cyBoMixcXG4uZmlsdGVycyBoMiB7XFxuICBjb2xvcjogdmFyKC0tcDIpO1xcbn1cXG5cXG4uZmlsdGVycy1saXN0LFxcbi5saXN0cy1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDhweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG5cXG4uZmlsdGVyLWljb24sXFxuLmxpc3QtaWNvbixcXG4uYWRkLWxpc3QtaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEycHg7XFxuICBsZWZ0OiAxMHB4O1xcbn1cXG5cXG4uc2lkZWJhciAuYWRkLWxpc3QtYnRuIHtcXG4gIGdhcDogNHB4O1xcbiAgcGFkZGluZzogMHB4IDhweDtcXG4gIHBhZGRpbmctbGVmdDogMjhweDtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG59XFxuXFxuLmFkZC1saXN0LWJ0bi5hY3RpdmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFkZC1saXN0LXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hZGQtbGlzdC1wb3B1cCBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDQpO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgcGFkZGluZzogNHB4IDBweCA0cHggMTJweDtcXG59XFxuXFxuLmFkZC1saXN0LXBvcHVwIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLXAzKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCI7XFxufVxcblxcbi5hZGQtbGlzdC1wb3B1cC5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIE1haW4gKi9cXG4ubWFpbiB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuXFxuICBwYWRkaW5nOiAzMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDYpO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuXFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXA0KTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHBhZGRpbmc6IDRweCAwcHggNHB4IDEycHg7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uYWRkVGFza0Zvcm0ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tYWluLWhlYWRlciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1wMyk7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiO1xcbn1cXG5cXG4udGFza3MtbGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4udGFza3MtbGlzdCBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLnRhc2sge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2sgbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHggMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xcbiAgY29sb3I6IHZhcigtLXAxKTtcXG59XFxuXFxuLnRhc2sgbGFiZWw6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGxlZnQ6IDEycHg7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogMTJweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiYXNzZXRzL2NpcmNsZS1yZWd1bGFyLnN2Z1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWw6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImFzc2V0cy9jaXJjbGUtY2hlY2stcmVndWxhci5zdmdcXFwiKTtcXG59XFxuXFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogdmFyKC0tcDIpO1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wM3QpO1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG4uZm9vdGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiA0IC8gNTtcXG5cXG4gIGdhcDogOHB4O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG4vKiBNZWRpYSBxdWVyaWVzICovXFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XFxuICAuc2lkZWJhci1jb250ZW50IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5ODBweCkge1xcbiAgYm9keSA+IC5jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyIDUwcHg7XFxuICB9XFxuXFxuICAuaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICB9XFxuXFxuICAuc2lkZWJhciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgfVxcblxcbiAgLmZpbHRlcnMtbGlzdCA+IGxpIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLnNpZGViYXItY29udGVudCB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIG1hcmdpbjogMzJweDtcXG4gIH1cXG5cXG4gIC5tYWluIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICB9XFxuXFxuICAuZm9vdGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICB9XFxuXFxuICAuZmlsdGVycy1saXN0LFxcbiAgLmxpc3RzLWxpc3Qge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmxpc3RzIGgyIHtcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyIGgyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyIC5hZGQtbGlzdC1idG4ge1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgfVxcblxcbiAgLmxpc3RzLFxcbiAgLmZpbHRlcnMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Ryb3Bkb3duTWVudS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Ryb3Bkb3duTWVudS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IHtcbiAgY29uc3RydWN0b3IobGlzdE5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBsaXN0TmFtZTtcbiAgICB0aGlzLmFycmF5ID0gW107XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBhZGRUYXNrKHRhc2spIHtcbiAgICB0YXNrLnNldE9yaWdpbkxpc3QodGhpcy5uYW1lKTtcbiAgICB0aGlzLmFycmF5LnB1c2godGFzayk7XG4gIH1cblxuICByZW1vdmVUYXNrKHRhc2tOYW1lKSB7XG4gICAgdGhpcy5hcnJheS5zcGxpY2UodGhpcy5nZXRUYXNrSW5kZXgodGFza05hbWUpLCAxKTtcbiAgfVxuXG4gIGdldFRhc2sodGFza05hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5maW5kKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PT0gdGFza05hbWUpO1xuICB9XG5cbiAgZ2V0VGFza0luZGV4KHRhc2tOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PT0gdGFza05hbWUpO1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBzZXRBcnJheShhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdHMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFycmF5ID0gW107XG4gIH1cblxuICBhZGRMaXN0KGxpc3QpIHtcbiAgICB0aGlzLmFycmF5LnB1c2gobGlzdCk7XG4gIH1cblxuICByZW1vdmVMaXN0KGxpc3ROYW1lKSB7XG4gICAgdGhpcy5hcnJheS5zcGxpY2UodGhpcy5nZXRMaXN0SW5kZXgobGlzdE5hbWUpLCAxKTtcbiAgfVxuXG4gIGdldExpc3RJbmRleChsaXN0TmFtZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LmZpbmRJbmRleCgobGlzdCkgPT4gbGlzdC5nZXROYW1lKCkgPT09IGxpc3ROYW1lKTtcbiAgfVxuXG4gIGdldExpc3RCeVRhc2tOYW1lKHRhc2tOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkuZmluZCgobGlzdCkgPT5cbiAgICAgIGxpc3QuZ2V0QXJyYXkoKS5maW5kKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PT0gdGFza05hbWUpXG4gICAgKTtcbiAgfVxuXG4gIGdldExpc3RCeU5hbWUobGlzdE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5maW5kKChsaXN0KSA9PiBsaXN0LmdldE5hbWUoKSA9PT0gbGlzdE5hbWUpO1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBzZXRBcnJheShhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxufVxuIiwiaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xuaW1wb3J0IExpc3RzIGZyb20gXCIuL0xpc3RzXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsU3RvcmFnZSB7XG4gIHN0YXRpYyBzYXZlTGlzdHMobGlzdHMpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3RzXCIsIEpTT04uc3RyaW5naWZ5KGxpc3RzKSk7XG4gIH1cblxuICBzdGF0aWMgI2xvYWRMaXN0cygpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RzXCIpKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRMaXN0c09iamVjdCgpIHtcbiAgICBjb25zdCBsaXN0cyA9IE9iamVjdC5hc3NpZ24obmV3IExpc3RzKCksIHRoaXMuI2xvYWRMaXN0cygpKTtcblxuICAgIGxpc3RzLnNldEFycmF5KFxuICAgICAgbGlzdHMuZ2V0QXJyYXkoKS5tYXAoKGxpc3QpID0+IE9iamVjdC5hc3NpZ24obmV3IExpc3QoKSwgbGlzdCkpXG4gICAgKTtcblxuICAgIGxpc3RzLmdldEFycmF5KCkuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgbGlzdC5zZXRBcnJheShcbiAgICAgICAgbGlzdC5nZXRBcnJheSgpLm1hcCgodGFzaykgPT4gT2JqZWN0LmFzc2lnbihuZXcgVGFzaygpLCB0YXNrKSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGlzdHM7XG4gIH1cblxuICBzdGF0aWMgZ2V0TGlzdEJ5TmFtZShsaXN0TmFtZSkge1xuICAgIGNvbnN0IGxpc3RzID0gTG9jYWxTdG9yYWdlLmdldExpc3RzT2JqZWN0KCk7XG4gICAgcmV0dXJuIGxpc3RzLmdldExpc3RCeU5hbWUobGlzdE5hbWUpO1xuICB9XG5cbiAgc3RhdGljIGFkZExpc3QobGlzdCkge1xuICAgIGNvbnN0IGxpc3RzID0gTG9jYWxTdG9yYWdlLmdldExpc3RzT2JqZWN0KCk7XG4gICAgbGlzdHMuYWRkTGlzdChsaXN0KTtcbiAgICBMb2NhbFN0b3JhZ2Uuc2F2ZUxpc3RzKGxpc3RzKTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVMaXN0KGxpc3ROYW1lKSB7XG4gICAgY29uc3QgbGlzdHMgPSBMb2NhbFN0b3JhZ2UuZ2V0TGlzdHNPYmplY3QoKTtcbiAgICBsaXN0cy5yZW1vdmVMaXN0KGxpc3ROYW1lKTtcbiAgICBMb2NhbFN0b3JhZ2Uuc2F2ZUxpc3RzKGxpc3RzKTtcbiAgfVxuXG4gIHN0YXRpYyBhZGRUYXNrKGxpc3ROYW1lLCB0YXNrKSB7XG4gICAgY29uc3QgbGlzdHMgPSBMb2NhbFN0b3JhZ2UuZ2V0TGlzdHNPYmplY3QoKTtcbiAgICBjb25zdCB0YXJnZXRMaXN0ID0gbGlzdHMuZ2V0TGlzdEJ5TmFtZShsaXN0TmFtZSk7XG4gICAgdGFyZ2V0TGlzdC5hZGRUYXNrKHRhc2spO1xuICAgIExvY2FsU3RvcmFnZS5zYXZlTGlzdHMobGlzdHMpO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZVRhc2sobGlzdE5hbWUsIHRhc2spIHtcbiAgICBjb25zdCBsaXN0cyA9IExvY2FsU3RvcmFnZS5nZXRMaXN0c09iamVjdCgpO1xuICAgIGNvbnN0IGxpc3QgPSBsaXN0cy5nZXRMaXN0QnlOYW1lKGxpc3ROYW1lKTtcbiAgICBsaXN0LnJlbW92ZVRhc2sodGFzay5nZXROYW1lKCkpO1xuICAgIExvY2FsU3RvcmFnZS5zYXZlTGlzdHMobGlzdHMpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0U3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZTtcbiAgfVxuXG4gIHRvZ2dsZVN0YXR1cygpIHtcbiAgICB0aGlzLmFjdGl2ZSA9ICF0aGlzLmFjdGl2ZTtcbiAgfVxuXG4gIGdldE9yaWdpbkxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMub3JpZ2luTGlzdE5hbWU7XG4gIH1cblxuICBzZXRPcmlnaW5MaXN0KGxpc3ROYW1lKSB7XG4gICAgdGhpcy5vcmlnaW5MaXN0TmFtZSA9IGxpc3ROYW1lO1xuICB9XG59XG4iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XG5pbXBvcnQgTG9jYWxTdG9yYWdlIGZyb20gXCIuL0xvY2FsU3RvcmFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XG4gIHN0YXRpYyBsb2FkVG9Eb0xpc3QoKSB7XG4gICAgVUkubG9hZExpc3RzKCk7XG4gICAgVUkuc2V0dXBCdXR0b25zKCk7XG4gICAgVUkubG9hZEFsbFRhc2tzKCk7XG4gIH1cblxuICAvLyBMb2FkaW5nXG4gIHN0YXRpYyBsb2FkTGlzdHMoKSB7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RzIHVsXCIpO1xuICAgIHVsLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgTG9jYWxTdG9yYWdlLmdldExpc3RzT2JqZWN0KClcbiAgICAgIC5nZXRBcnJheSgpXG4gICAgICAuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgICBVSS5jcmVhdGVMaXN0KGxpc3QpO1xuICAgICAgfSk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlTGlzdChsaXN0KSB7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RzIHVsXCIpO1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgbGkuaW5uZXJIVE1MID0gYDxidXR0b24+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLW5vdGUtc3RpY2t5IGxpc3QtaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICA8cD4ke2xpc3QuZ2V0TmFtZSgpfTwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZHJvcGRvd24tbWVudS1idG5cIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duTWVudVwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgIDxsaT48YnV0dG9uIGNsYXNzPVwiZHJvcGRvd24tYnRuIGxpc3QtZWRpdFwiPkVkaXQ8L2J1dHRvbj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxidXR0b24gY2xhc3M9XCJkcm9wZG93bi1idG4gbGlzdC1kZWxldGVcIj5EZWxldGU8L2J1dHRvbj48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgbGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgbGlzdC5nZXROYW1lKCkpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcblxuICAgIGNvbnN0IGxpc3RFZGl0ID0gbGkucXVlcnlTZWxlY3RvcihcIi5saXN0LWVkaXRcIik7XG4gICAgY29uc3QgbGlzdERlbGV0ZSA9IGxpLnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1kZWxldGVcIik7XG5cbiAgICBjb25zdCBsaXN0RHJvcGRvd25NZW51QnV0dG9uID0gbGkucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1tZW51LWJ0blwiKTtcbiAgICBjb25zdCBsaXN0RHJvcGRvd25NZW51ID0gbGkucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bk1lbnVcIik7XG5cbiAgICBsaXN0RHJvcGRvd25NZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgbGlzdERyb3Bkb3duTWVudUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgbGlzdERyb3Bkb3duTWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlMSkgPT4ge1xuICAgICAgICBpZiAoZTEudGFyZ2V0ICE9PSBsaXN0RHJvcGRvd25NZW51KSB7XG4gICAgICAgICAgbGlzdERyb3Bkb3duTWVudUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgIGxpc3REcm9wZG93bk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuXG4gICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGxpc3RzID0gTG9jYWxTdG9yYWdlLmdldExpc3RzT2JqZWN0KCk7XG4gICAgICAvLyBBZGQgY29kZSB0byBlbmFibGUgaW5wdXRoZXJlXG4gICAgICBVSS5lbmFibGVUYXNrSW5wdXQoKTtcblxuICAgICAgVUkubG9hZEZyZXNoTGlzdChsaXN0cy5nZXRMaXN0QnlOYW1lKGxpc3QuZ2V0TmFtZSgpKSk7XG4gICAgfSk7XG4gICAgbGlzdERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIExvY2FsU3RvcmFnZS5yZW1vdmVMaXN0KGxpc3QuZ2V0TmFtZSgpKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLmxvYWRMaXN0cygpO1xuICAgICAgdGhpcy5sb2FkQWxsVGFza3MoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBlbmFibGVUYXNrSW5wdXQoKSB7XG4gICAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRhc2tGb3JtXCIpO1xuICAgIGFkZFRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH1cblxuICBzdGF0aWMgZGlzYWJsZVRhc2tJbnB1dCgpIHtcbiAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVGFza0Zvcm1cIik7XG4gICAgYWRkVGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgc3RhdGljIGxvYWRBbGxUYXNrcygpIHtcbiAgICBVSS5kaXNhYmxlVGFza0lucHV0KCk7XG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWxpc3RcIik7XG4gICAgdGFza3MucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtbmFtZVwiKTtcbiAgICBoMS50ZXh0Q29udGVudCA9IFwiQWxsIHRhc2tzXCI7XG5cbiAgICBjb25zdCBsaXN0cyA9IExvY2FsU3RvcmFnZS5nZXRMaXN0c09iamVjdCgpO1xuICAgIGxpc3RzLmdldEFycmF5KCkuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgVUkubG9hZEFkZGl0aW9uYWxMaXN0KGxpc3QpO1xuICAgIH0pO1xuICAgIFVJLnJlbmRlckFsbFRhc2tTdGF0dXNlcyhsaXN0cyk7XG4gIH1cblxuICBzdGF0aWMgbG9hZEZyZXNoTGlzdChsaXN0KSB7XG4gICAgVUkuc2V0QWN0aXZlTGlzdFRpdGxlKGxpc3QuZ2V0TmFtZSgpKTtcbiAgICBVSS5yZXNldERpc3BsYXllZFRhc2tzKCk7XG4gICAgVUkucmVuZGVyVGFza3MobGlzdCk7XG4gICAgVUkucmVuZGVyVGFza1N0YXR1c2VzKGxpc3QpO1xuXG4gICAgVUkuc2V0dXBUYXNrVG9nZ2xlKCk7XG4gIH1cblxuICBzdGF0aWMgbG9hZEFkZGl0aW9uYWxMaXN0KGxpc3QpIHtcbiAgICBVSS5yZW5kZXJUYXNrcyhsaXN0KTtcbiAgICBVSS5zZXR1cFRhc2tUb2dnbGUoKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRBY3RpdmVMaXN0VGl0bGUobGlzdE5hbWUpIHtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1uYW1lXCIpO1xuICAgIGgxLnRleHRDb250ZW50ID0gbGlzdE5hbWU7XG4gIH1cblxuICBzdGF0aWMgcmVzZXREaXNwbGF5ZWRUYXNrcygpIHtcbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtbGlzdFwiKTtcbiAgICB0YXNrcy5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJUYXNrcyhsaXN0KSB7XG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWxpc3RcIik7XG4gICAgdGFza3MucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgY29uc3QgbGlzdE5hbWUgPSBsaXN0LmdldE5hbWUoKTtcbiAgICBsaXN0LmdldEFycmF5KCkuZm9yRWFjaCgodGFzaywgaSkgPT4ge1xuICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBsaS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInRhc2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRhc2tDb21wbGV0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiJHtsaXN0TmFtZX1UYXNrJHtpfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidGFza1RleHRcIiBmb3I9XCIke2xpc3ROYW1lfVRhc2ske2l9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+JHt0YXNrLmdldE5hbWUoKX08L2xhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZHJvcGRvd24tbWVudS1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtZWxsaXBzaXMtdmVydGljYWxcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bk1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJvcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YnV0dG9uIGNsYXNzPVwiZHJvcGRvd24tYnRuIHRhc2stZWRpdFwiPkVkaXQ8L2J1dHRvbj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGJ1dHRvbiBjbGFzcz1cImRyb3Bkb3duLWJ0biB0YXNrLWRlbGV0ZVwiPkRlbGV0ZTwvYnV0dG9uPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgdGFza3MuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgY29uc3QgdGFza0VkaXQgPSBsaS5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZWRpdFwiKTtcbiAgICAgIGNvbnN0IHRhc2tEZWxldGUgPSBsaS5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGVsZXRlXCIpO1xuXG4gICAgICBjb25zdCB0YXNrRHJvcGRvd25NZW51QnV0dG9uID0gbGkucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1tZW51LWJ0blwiKTtcbiAgICAgIGNvbnN0IHRhc2tEcm9wZG93bk1lbnUgPSBsaS5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duTWVudVwiKTtcblxuICAgICAgdGFza0Ryb3Bkb3duTWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgdGFza0Ryb3Bkb3duTWVudUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICB0YXNrRHJvcGRvd25NZW51LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTEpID0+IHtcbiAgICAgICAgICBpZiAoZTEudGFyZ2V0ICE9PSB0YXNrRHJvcGRvd25NZW51KSB7XG4gICAgICAgICAgICB0YXNrRHJvcGRvd25NZW51QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICB0YXNrRHJvcGRvd25NZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0pO1xuXG4gICAgICB0YXNrRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBMb2NhbFN0b3JhZ2UucmVtb3ZlVGFzayhsaXN0TmFtZSwgdGFzayk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IG1vZGlmaWVkTGlzdCA9IExvY2FsU3RvcmFnZS5nZXRMaXN0QnlOYW1lKGxpc3ROYW1lKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUYXNrcyhtb2RpZmllZExpc3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgcmVuZGVyVGFza1N0YXR1c2VzKGxpc3QpIHtcbiAgICBsaXN0LmdldEFycmF5KCkuZm9yRWFjaCgodGFzaywgaSkgPT4ge1xuICAgICAgaWYgKCF0YXNrLmdldFN0YXR1cygpKSB7XG4gICAgICAgIC8vIElmIHRhc2sgaXMgbm90IGFjdGl2ZVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAjJHt0YXNrLmdldE9yaWdpbkxpc3QoKX1UYXNrJHtpfWBcbiAgICAgICAgKS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJBbGxUYXNrU3RhdHVzZXMobGlzdHMpIHtcbiAgICBsaXN0cy5nZXRBcnJheSgpLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgIGxpc3QuZ2V0QXJyYXkoKS5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7XG4gICAgICAgIGlmICghdGFzay5nZXRTdGF0dXMoKSkge1xuICAgICAgICAgIC8vIElmIHRhc2sgaXMgbm90IGFjdGl2ZVxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgIyR7dGFzay5nZXRPcmlnaW5MaXN0KCl9VGFzayR7aX1gXG4gICAgICAgICAgKS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgc2V0dXBUYXNrVG9nZ2xlKCkge1xuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1saXN0XCIpO1xuICAgIGNvbnN0IHRhc2tEaXZzID0gdGFza3MucXVlcnlTZWxlY3RvckFsbChcIi50YXNrIGlucHV0XCIpO1xuXG4gICAgdGFza0RpdnMuZm9yRWFjaCgodGFza0RpdikgPT4ge1xuICAgICAgdGFza0Rpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgLy8gUHJvYmxlbSBpcyBpdCByZWdpc3RlcnMgc2VwYXJhdGUgY2xpY2tzIGZvciBsYWJlbCBhbmQgY2hlY2tib3hcbiAgICAgICAgY29uc3QgbGlzdHMgPSBMb2NhbFN0b3JhZ2UuZ2V0TGlzdHNPYmplY3QoKTtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBlLnRhcmdldC5sYWJlbHNbMF0udGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBsaXN0cy5nZXRMaXN0QnlUYXNrTmFtZSh0YXNrTmFtZSk7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBsaXN0LmdldFRhc2sodGFza05hbWUpO1xuICAgICAgICB0YXNrLnRvZ2dsZVN0YXR1cygpO1xuXG4gICAgICAgIExvY2FsU3RvcmFnZS5zYXZlTGlzdHMobGlzdHMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgc2V0dXBCdXR0b25zKCkge1xuICAgIC8vIEFkZCBsaXN0IGJ1dHRvblxuICAgIGNvbnN0IGFkZExpc3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtbGlzdC1mb3JtXCIpO1xuICAgIGNvbnN0IGxpc3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWxpc3QtZm9ybSAubGlzdC1uYW1lLWlucHV0XCIpO1xuICAgIGNvbnN0IGFkZExpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1saXN0LWJ0blwiKTtcbiAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVGFza0Zvcm1cIik7XG4gICAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dFRhc2tUZXh0XCIpO1xuICAgIGNvbnN0IGFsbFRhc2tzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGwtdGFza3MtYnRuXCIpO1xuXG4gICAgYWxsVGFza3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIFVJLmxvYWRBbGxUYXNrcygpO1xuICAgIH0pO1xuXG4gICAgYWRkTGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5lbmFibGVBZGRMaXN0UG9wdXAoKTtcbiAgICB9KTtcbiAgICBhZGRMaXN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vIEFkZCBsaXN0IHRvIExvY2FsU3RvcmFnZVxuXG4gICAgICBjb25zdCBsaXN0TmFtZSA9IGxpc3RJbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IG5ld0xpc3QgPSBuZXcgTGlzdChsaXN0TmFtZSk7XG4gICAgICBMb2NhbFN0b3JhZ2UuYWRkTGlzdChuZXdMaXN0KTtcbiAgICAgIFVJLmNyZWF0ZUxpc3QobmV3TGlzdCk7XG5cbiAgICAgIHRoaXMuZGlzYWJsZUFkZExpc3RQb3B1cCgpO1xuICAgIH0pO1xuXG4gICAgYWRkVGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAvLyBBZGQgdGFzayB0byBsaXN0XG5cbiAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayh0YXNrSW5wdXQudmFsdWUpO1xuICAgICAgY29uc3QgbGlzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtbmFtZVwiKS50ZXh0Q29udGVudDtcbiAgICAgIExvY2FsU3RvcmFnZS5hZGRUYXNrKGxpc3ROYW1lLCBuZXdUYXNrKTtcblxuICAgICAgVUkubG9hZEZyZXNoTGlzdChMb2NhbFN0b3JhZ2UuZ2V0TGlzdHNPYmplY3QoKS5nZXRMaXN0QnlOYW1lKGxpc3ROYW1lKSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZW5hYmxlQWRkTGlzdFBvcHVwKCkge1xuICAgIGNvbnN0IGFkZExpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1saXN0LWJ0blwiKTtcbiAgICBjb25zdCBhZGRMaXN0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1saXN0LXBvcHVwXCIpO1xuXG4gICAgYWRkTGlzdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIGFkZExpc3RQb3B1cC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgc3RhdGljIGRpc2FibGVBZGRMaXN0UG9wdXAoKSB7XG4gICAgY29uc3QgYWRkTGlzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWxpc3QtYnRuXCIpO1xuICAgIGNvbnN0IGFkZExpc3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWxpc3QtcG9wdXBcIik7XG5cbiAgICBhZGRMaXN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgYWRkTGlzdFBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgVUkgZnJvbSBcIi4vbW9kdWxlcy9VSVwiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgXCIuL2Ryb3Bkb3duTWVudS5jc3NcIjtcblxuVUkubG9hZFRvRG9MaXN0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=