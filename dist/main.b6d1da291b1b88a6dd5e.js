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
___CSS_LOADER_EXPORT___.push([module.id, ".filters-list li,\n.lists-list li {\n  position: relative;\n}\n\n.tasks-list li {\n  position: relative;\n}\n\n.options button {\n  border: none;\n  width: 100%;\n}\n\n/****************/\n/* For sidebar */\n/****************/\n\n.sidebar .dropdown-menu-btn {\n  display: block;\n\n  border-radius: 4px;\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  z-index: 1;\n  top: 6px;\n  right: 6px;\n  background-color: transparent;\n  padding: 12px;\n}\n\n.sidebar .dropdown-menu-btn:hover {\n  background-color: rgb(255, 255, 255, 0.3);\n}\n\n.sidebar .dropdown-menu-btn.active {\n  background-color: rgb(255, 255, 255, 0.5);\n}\n\n.sidebar .dropdown-menu-btn i {\n  position: absolute;\n  top: 6px;\n  left: 10px;\n}\n\n.sidebar .dropdown-btn {\n  text-align: left;\n  padding: 12px;\n  font-size: 0.9rem;\n  border-radius: 0px;\n\n  background-color: black;\n  color: var(--p1);\n}\n\n.sidebar .dropdown-btn:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.sidebar .dropdown-btn.active {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.lists-list .dropdownMenu {\n  opacity: 0;\n  pointer-events: none;\n\n  background-color: rgb(0, 0, 0, 0.7);\n  position: absolute;\n  z-index: 100;\n  top: 100%;\n  right: 0;\n\n  padding: 0.75rem;\n}\n\n.lists-list .dropdownMenu.active {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n\n/*************/\n/* For tasks */\n/*************/\n\n.tasks-list .dropdown-menu-btn {\n  border: none;\n  border-radius: 4px;\n\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  z-index: 1;\n  top: 6px;\n  right: 20px;\n  background-color: transparent;\n  padding: 12px;\n}\n\n.tasks-list .dropdown-menu-btn:hover {\n  background-color: rgb(255, 255, 255, 0.1);\n}\n\n.tasks-list .dropdown-menu-btn.active {\n  background-color: rgb(255, 255, 255, 0.3);\n}\n\n.tasks-list .dropdown-menu-btn i {\n  position: absolute;\n  top: 6px;\n  left: 10px;\n  color: var(--p1);\n}\n\n.tasks-list .dropdown-btn {\n  text-align: left;\n  padding: 12px;\n  padding-right: 24px;\n  font-size: 0.9rem;\n\n  background-color: black;\n  color: var(--p1);\n  width: 100%;\n}\n\n.tasks-list .dropdown-btn:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.tasks-list .dropdownMenu {\n  opacity: 0;\n  pointer-events: none;\n\n  background-color: rgb(0, 0, 0, 0.4);\n  position: absolute;\n  z-index: 100;\n  top: 100%;\n  right: 0;\n\n  padding: 0.75rem;\n}\n\n.tasks-list .dropdownMenu .options li {\n  width: 100%;\n}\n\n.tasks-list .dropdownMenu.active {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n/* Media queries */\n@media (min-width: 980px) {\n  .sidebar .dropdown-menu-btn {\n    display: block;\n  }\n\n  .sidebar .dropdown-menu-btn {\n    right: 10px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/dropdownMenu.css"],"names":[],"mappings":"AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA,iBAAiB;AACjB,gBAAgB;AAChB,iBAAiB;;AAEjB;EACE,cAAc;;EAEd,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,UAAU;EACV,6BAA6B;EAC7B,aAAa;AACf;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,iBAAiB;EACjB,kBAAkB;;EAElB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,UAAU;EACV,oBAAoB;;EAEpB,mCAAmC;EACnC,kBAAkB;EAClB,YAAY;EACZ,SAAS;EACT,QAAQ;;EAER,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,oBAAoB;AACtB;;;AAGA,cAAc;AACd,cAAc;AACd,cAAc;;AAEd;EACE,YAAY;EACZ,kBAAkB;;EAElB,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,WAAW;EACX,6BAA6B;EAC7B,aAAa;AACf;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,iBAAiB;;EAEjB,uBAAuB;EACvB,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,UAAU;EACV,oBAAoB;;EAEpB,mCAAmC;EACnC,kBAAkB;EAClB,YAAY;EACZ,SAAS;EACT,QAAQ;;EAER,gBAAgB;AAClB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;EACV,oBAAoB;AACtB;;AAEA,kBAAkB;AAClB;EACE;IACE,cAAc;EAChB;;EAEA;IACE,WAAW;EACb;AACF","sourcesContent":["@import \"./palette.css\";\n\n.filters-list li,\n.lists-list li {\n  position: relative;\n}\n\n.tasks-list li {\n  position: relative;\n}\n\n.options button {\n  border: none;\n  width: 100%;\n}\n\n/****************/\n/* For sidebar */\n/****************/\n\n.sidebar .dropdown-menu-btn {\n  display: block;\n\n  border-radius: 4px;\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  z-index: 1;\n  top: 6px;\n  right: 6px;\n  background-color: transparent;\n  padding: 12px;\n}\n\n.sidebar .dropdown-menu-btn:hover {\n  background-color: rgb(255, 255, 255, 0.3);\n}\n\n.sidebar .dropdown-menu-btn.active {\n  background-color: rgb(255, 255, 255, 0.5);\n}\n\n.sidebar .dropdown-menu-btn i {\n  position: absolute;\n  top: 6px;\n  left: 10px;\n}\n\n.sidebar .dropdown-btn {\n  text-align: left;\n  padding: 12px;\n  font-size: 0.9rem;\n  border-radius: 0px;\n\n  background-color: black;\n  color: var(--p1);\n}\n\n.sidebar .dropdown-btn:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.sidebar .dropdown-btn.active {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.lists-list .dropdownMenu {\n  opacity: 0;\n  pointer-events: none;\n\n  background-color: rgb(0, 0, 0, 0.7);\n  position: absolute;\n  z-index: 100;\n  top: 100%;\n  right: 0;\n\n  padding: 0.75rem;\n}\n\n.lists-list .dropdownMenu.active {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n\n/*************/\n/* For tasks */\n/*************/\n\n.tasks-list .dropdown-menu-btn {\n  border: none;\n  border-radius: 4px;\n\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  z-index: 1;\n  top: 6px;\n  right: 20px;\n  background-color: transparent;\n  padding: 12px;\n}\n\n.tasks-list .dropdown-menu-btn:hover {\n  background-color: rgb(255, 255, 255, 0.1);\n}\n\n.tasks-list .dropdown-menu-btn.active {\n  background-color: rgb(255, 255, 255, 0.3);\n}\n\n.tasks-list .dropdown-menu-btn i {\n  position: absolute;\n  top: 6px;\n  left: 10px;\n  color: var(--p1);\n}\n\n.tasks-list .dropdown-btn {\n  text-align: left;\n  padding: 12px;\n  padding-right: 24px;\n  font-size: 0.9rem;\n\n  background-color: black;\n  color: var(--p1);\n  width: 100%;\n}\n\n.tasks-list .dropdown-btn:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.tasks-list .dropdownMenu {\n  opacity: 0;\n  pointer-events: none;\n\n  background-color: rgb(0, 0, 0, 0.4);\n  position: absolute;\n  z-index: 100;\n  top: 100%;\n  right: 0;\n\n  padding: 0.75rem;\n}\n\n.tasks-list .dropdownMenu .options li {\n  width: 100%;\n}\n\n.tasks-list .dropdownMenu.active {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n/* Media queries */\n@media (min-width: 980px) {\n  .sidebar .dropdown-menu-btn {\n    display: block;\n  }\n\n  .sidebar .dropdown-menu-btn {\n    right: 10px;\n  }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: \"Lato\", sans-serif;\n  color: var(--p1);\n  background-color: var(--p4);\n}\n\nul {\n  list-style-type: none;\n}\n\na {\n  text-decoration: none;\n  color: var(--p1);\n}\n\np {\n  margin: 10px 0;\n}\n\nimg {\n  width: 100%;\n}\n\n/* Utility classes */\n.flex {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/*  */\n\nbody > .container {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 100px 1fr 4fr 50px;\n  height: 100vh;\n}\n\n/* Header */\n.header {\n  gap: 8px;\n  grid-column: 1/ 3;\n  grid-row: 1 / 2;\n}\n\n.primary-heading {\n  font-size: 2rem;\n}\n\n/* Sidebar */\n.sidebar {\n  background-color: var(--p5);\n}\n\n.sidebar-content {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  margin: 16px 16px;\n  flex-direction: column;\n}\n\n.sidebar i {\n  color: black;\n}\n\n.sidebar button {\n  background-color: var(--p3);\n  border: none;\n  border-radius: 12px;\n  padding: 0px 8px;\n\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  text-align: left;\n\n  position: relative;\n  padding-left: 32px;\n}\n\n.sidebar .list-btn {\n  padding-right: 40px;\n}\n\n.sidebar button:hover {\n  background-color: var(--p2);\n}\n\n.sidebar button:active {\n  background-color: var(--p1);\n}\n\n.lists {\n  margin-top: 12px;\n}\n\n.lists h2,\n.filters h2 {\n  color: var(--p2);\n}\n\n.filters-list,\n.lists-list {\n  display: flex;\n  gap: 8px;\n  flex-direction: row;\n  justify-content: start;\n  flex-wrap: wrap;\n  margin-top: 8px;\n}\n\n.filter-icon,\n.list-icon,\n.add-list-icon {\n  position: absolute;\n  top: 12px;\n  left: 10px;\n}\n\n.sidebar .add-list-btn {\n  gap: 4px;\n  padding: 0px 8px;\n  padding-left: 28px;\n  margin-top: 8px;\n}\n\n.add-list-btn.active {\n  display: none;\n}\n\n.add-list-popup {\n  display: none;\n}\n\n.add-list-popup input[type=\"text\"] {\n  background-color: var(--p4);\n  color: inherit;\n  border: none;\n  border-radius: 12px;\n  padding: 4px 0px 4px 12px;\n}\n\n.add-list-popup input[type=\"text\"]::placeholder {\n  color: var(--p3);\n  font-family: \"Lato\";\n}\n\n.add-list-popup.active {\n  display: block;\n}\n\n/* Main */\n.main {\n  grid-column: 1 / 2;\n  grid-row: 3 / 4;\n\n  padding: 32px;\n  background-color: var(--p6);\n}\n\n.main-header {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  margin-bottom: 24px;\n}\n\n.main-header input[type=\"text\"] {\n  background-color: var(--p4);\n  color: inherit;\n  border: none;\n  border-radius: 12px;\n  padding: 4px 0px 4px 12px;\n  width: 50%;\n}\n\n.addTaskForm {\n  flex: 1;\n  display: none;\n}\n\n.main-header input[type=\"text\"]::placeholder {\n  color: var(--p3);\n  font-family: \"Lato\";\n}\n\n.tasks-list {\n  display: grid;\n}\n\n.tasks-list li {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n}\n\n.task {\n  color: black;\n  border-radius: 24px;\n  width: 100%;\n  user-select: none;\n\n  position: relative;\n}\n\n.task input[type=\"checkbox\"] {\n  display: none;\n}\n\n.task label {\n  display: flex;\n  align-items: center;\n  padding: 8px 0px;\n  padding-left: 32px;\n  color: var(--p1);\n}\n\n.task label::before {\n  position: absolute;\n  content: \"\";\n  left: 12px;\n  width: 12px;\n  height: 12px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n}\n\n.task input[type=\"checkbox\"]:checked + label::before {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.task input[type=\"checkbox\"]:checked + label {\n  text-decoration: line-through;\n  color: var(--p2);\n}\n\n.task:hover {\n  background-color: var(--p3t);\n}\n\n/* Footer */\n.footer {\n  grid-column: 1 / 2;\n  grid-row: 4 / 5;\n\n  gap: 8px;\n  grid-column: 1 / 3;\n}\n\n/* Media queries */\n\n@media (min-width: 480px) {\n  .sidebar-content {\n    margin-left: 32px;\n  }\n}\n@media (min-width: 980px) {\n  body > .container {\n    grid-template-columns: 20% 80%;\n    grid-template-rows: 100px 1fr 50px;\n  }\n\n  .header {\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n  }\n\n  .sidebar {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n  }\n\n  .filters-list > li {\n    width: 80%;\n  }\n\n  .sidebar button {\n    width: 100%;\n  }\n\n  .sidebar-content {\n    justify-content: start;\n    margin: 32px;\n  }\n\n  .main {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n  }\n\n  .footer {\n    grid-column: 1 / 3;\n    grid-row: 3 / 4;\n  }\n\n  .filters-list,\n  .lists-list {\n    flex-direction: column;\n  }\n\n  .lists h2 {\n    margin-top: 24px;\n  }\n\n  .sidebar h2 {\n    margin-bottom: 12px;\n  }\n\n  .sidebar .add-list-btn {\n    margin-top: 16px;\n  }\n\n  .lists,\n  .filters {\n    width: 100%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAGA;;;EAGE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,+BAA+B;EAC/B,gBAAgB;EAChB,2BAA2B;AAC7B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;AACb;;AAEA,oBAAoB;AACpB;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA,KAAK;;AAEL;EACE,aAAa;EACb,0BAA0B;EAC1B,sCAAsC;EACtC,aAAa;AACf;;AAEA,WAAW;AACX;EACE,QAAQ;EACR,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA,YAAY;AACZ;EACE,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,eAAe;;EAEf,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,2BAA2B;EAC3B,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;;EAEhB,aAAa;EACb,mBAAmB;EACnB,QAAQ;;EAER,gBAAgB;;EAEhB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;EACb,QAAQ;EACR,mBAAmB;EACnB,sBAAsB;EACtB,eAAe;EACf,eAAe;AACjB;;AAEA;;;EAGE,kBAAkB;EAClB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,QAAQ;EACR,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,2BAA2B;EAC3B,cAAc;EACd,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA,SAAS;AACT;EACE,kBAAkB;EAClB,eAAe;;EAEf,aAAa;EACb,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;;EAET,mBAAmB;AACrB;;AAEA;EACE,2BAA2B;EAC3B,cAAc;EACd,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;EACzB,UAAU;AACZ;;AAEA;EACE,OAAO;EACP,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,iBAAiB;;EAEjB,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,WAAW;EACX,YAAY;EACZ,yDAAkD;EAClD,4BAA4B;AAC9B;;AAEA;EACE,yDAAwD;AAC1D;;AAEA;EACE,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA,WAAW;AACX;EACE,kBAAkB;EAClB,eAAe;;EAEf,QAAQ;EACR,kBAAkB;AACpB;;AAEA,kBAAkB;;AAElB;EACE;IACE,iBAAiB;EACnB;AACF;AACA;EACE;IACE,8BAA8B;IAC9B,kCAAkC;EACpC;;EAEA;IACE,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,sBAAsB;IACtB,YAAY;EACd;;EAEA;IACE,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,eAAe;EACjB;;EAEA;;IAEE,sBAAsB;EACxB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;;IAEE,WAAW;EACb;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato&display=swap\");\n@import \"./palette.css\";\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: \"Lato\", sans-serif;\n  color: var(--p1);\n  background-color: var(--p4);\n}\n\nul {\n  list-style-type: none;\n}\n\na {\n  text-decoration: none;\n  color: var(--p1);\n}\n\np {\n  margin: 10px 0;\n}\n\nimg {\n  width: 100%;\n}\n\n/* Utility classes */\n.flex {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/*  */\n\nbody > .container {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 100px 1fr 4fr 50px;\n  height: 100vh;\n}\n\n/* Header */\n.header {\n  gap: 8px;\n  grid-column: 1/ 3;\n  grid-row: 1 / 2;\n}\n\n.primary-heading {\n  font-size: 2rem;\n}\n\n/* Sidebar */\n.sidebar {\n  background-color: var(--p5);\n}\n\n.sidebar-content {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  margin: 16px 16px;\n  flex-direction: column;\n}\n\n.sidebar i {\n  color: black;\n}\n\n.sidebar button {\n  background-color: var(--p3);\n  border: none;\n  border-radius: 12px;\n  padding: 0px 8px;\n\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  text-align: left;\n\n  position: relative;\n  padding-left: 32px;\n}\n\n.sidebar .list-btn {\n  padding-right: 40px;\n}\n\n.sidebar button:hover {\n  background-color: var(--p2);\n}\n\n.sidebar button:active {\n  background-color: var(--p1);\n}\n\n.lists {\n  margin-top: 12px;\n}\n\n.lists h2,\n.filters h2 {\n  color: var(--p2);\n}\n\n.filters-list,\n.lists-list {\n  display: flex;\n  gap: 8px;\n  flex-direction: row;\n  justify-content: start;\n  flex-wrap: wrap;\n  margin-top: 8px;\n}\n\n.filter-icon,\n.list-icon,\n.add-list-icon {\n  position: absolute;\n  top: 12px;\n  left: 10px;\n}\n\n.sidebar .add-list-btn {\n  gap: 4px;\n  padding: 0px 8px;\n  padding-left: 28px;\n  margin-top: 8px;\n}\n\n.add-list-btn.active {\n  display: none;\n}\n\n.add-list-popup {\n  display: none;\n}\n\n.add-list-popup input[type=\"text\"] {\n  background-color: var(--p4);\n  color: inherit;\n  border: none;\n  border-radius: 12px;\n  padding: 4px 0px 4px 12px;\n}\n\n.add-list-popup input[type=\"text\"]::placeholder {\n  color: var(--p3);\n  font-family: \"Lato\";\n}\n\n.add-list-popup.active {\n  display: block;\n}\n\n/* Main */\n.main {\n  grid-column: 1 / 2;\n  grid-row: 3 / 4;\n\n  padding: 32px;\n  background-color: var(--p6);\n}\n\n.main-header {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  margin-bottom: 24px;\n}\n\n.main-header input[type=\"text\"] {\n  background-color: var(--p4);\n  color: inherit;\n  border: none;\n  border-radius: 12px;\n  padding: 4px 0px 4px 12px;\n  width: 50%;\n}\n\n.addTaskForm {\n  flex: 1;\n  display: none;\n}\n\n.main-header input[type=\"text\"]::placeholder {\n  color: var(--p3);\n  font-family: \"Lato\";\n}\n\n.tasks-list {\n  display: grid;\n}\n\n.tasks-list li {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n}\n\n.task {\n  color: black;\n  border-radius: 24px;\n  width: 100%;\n  user-select: none;\n\n  position: relative;\n}\n\n.task input[type=\"checkbox\"] {\n  display: none;\n}\n\n.task label {\n  display: flex;\n  align-items: center;\n  padding: 8px 0px;\n  padding-left: 32px;\n  color: var(--p1);\n}\n\n.task label::before {\n  position: absolute;\n  content: \"\";\n  left: 12px;\n  width: 12px;\n  height: 12px;\n  background-image: url(\"assets/circle-regular.svg\");\n  background-repeat: no-repeat;\n}\n\n.task input[type=\"checkbox\"]:checked + label::before {\n  background-image: url(\"assets/circle-check-regular.svg\");\n}\n\n.task input[type=\"checkbox\"]:checked + label {\n  text-decoration: line-through;\n  color: var(--p2);\n}\n\n.task:hover {\n  background-color: var(--p3t);\n}\n\n/* Footer */\n.footer {\n  grid-column: 1 / 2;\n  grid-row: 4 / 5;\n\n  gap: 8px;\n  grid-column: 1 / 3;\n}\n\n/* Media queries */\n\n@media (min-width: 480px) {\n  .sidebar-content {\n    margin-left: 32px;\n  }\n}\n@media (min-width: 980px) {\n  body > .container {\n    grid-template-columns: 20% 80%;\n    grid-template-rows: 100px 1fr 50px;\n  }\n\n  .header {\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n  }\n\n  .sidebar {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n  }\n\n  .filters-list > li {\n    width: 80%;\n  }\n\n  .sidebar button {\n    width: 100%;\n  }\n\n  .sidebar-content {\n    justify-content: start;\n    margin: 32px;\n  }\n\n  .main {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n  }\n\n  .footer {\n    grid-column: 1 / 3;\n    grid-row: 3 / 4;\n  }\n\n  .filters-list,\n  .lists-list {\n    flex-direction: column;\n  }\n\n  .lists h2 {\n    margin-top: 24px;\n  }\n\n  .sidebar h2 {\n    margin-bottom: 12px;\n  }\n\n  .sidebar .add-list-btn {\n    margin-top: 16px;\n  }\n\n  .lists,\n  .filters {\n    width: 100%;\n  }\n}\n"],"sourceRoot":""}]);
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
    const h1 = document.querySelector(".list-name");

    li.innerHTML = `<button class="list-btn">
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

      if (list.getName() === h1.textContent) {
        this.loadAllTasks();
      }
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
          this.renderTasks(modifiedList);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTJCLGtCQUFrQixLQUFLLEdBQUcsU0FBUyxtRkFBbUYsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLFVBQVUsS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLFVBQVUsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFlBQVksVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxjQUFjLFdBQVcsWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLE9BQU8sWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sVUFBVSxLQUFLLFlBQVksWUFBWSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1B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QUFDQSxNQUFNLDZEQUFvQjs7QUFFMUIsdUJBQXVCLG9FQUEyQjtBQUNsRCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2pTQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQThCO0FBQ1I7QUFDTTs7QUFFNUIsZ0VBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Ryb3Bkb3duTWVudS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wYWxldHRlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZHJvcGRvd25NZW51LmNzcz82YjdkIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0xpc3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9Mb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYWxldHRlLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmZpbHRlcnMtbGlzdCBsaSxcXG4ubGlzdHMtbGlzdCBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrcy1saXN0IGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm9wdGlvbnMgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKi9cXG4vKiBGb3Igc2lkZWJhciAqL1xcbi8qKioqKioqKioqKioqKioqL1xcblxcbi5zaWRlYmFyIC5kcm9wZG93bi1tZW51LWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICB0b3A6IDZweDtcXG4gIHJpZ2h0OiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDEycHg7XFxufVxcblxcbi5zaWRlYmFyIC5kcm9wZG93bi1tZW51LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG59XFxuXFxuLnNpZGViYXIgLmRyb3Bkb3duLW1lbnUtYnRuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLnNpZGViYXIgLmRyb3Bkb3duLW1lbnUtYnRuIGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA2cHg7XFxuICBsZWZ0OiAxMHB4O1xcbn1cXG5cXG4uc2lkZWJhciAuZHJvcGRvd24tYnRuIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB2YXIoLS1wMSk7XFxufVxcblxcbi5zaWRlYmFyIC5kcm9wZG93bi1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbn1cXG5cXG4uc2lkZWJhciAuZHJvcGRvd24tYnRuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbi5saXN0cy1saXN0IC5kcm9wZG93bk1lbnUge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0b3A6IDEwMCU7XFxuICByaWdodDogMDtcXG5cXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxufVxcblxcbi5saXN0cy1saXN0IC5kcm9wZG93bk1lbnUuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKiovXFxuLyogRm9yIHRhc2tzICovXFxuLyoqKioqKioqKioqKiovXFxuXFxuLnRhc2tzLWxpc3QgLmRyb3Bkb3duLW1lbnUtYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICB0b3A6IDZweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAxMnB4O1xcbn1cXG5cXG4udGFza3MtbGlzdCAuZHJvcGRvd24tbWVudS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bi1tZW51LWJ0bi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bi1tZW51LWJ0biBpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNnB4O1xcbiAgbGVmdDogMTBweDtcXG4gIGNvbG9yOiB2YXIoLS1wMSk7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bi1idG4ge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB2YXIoLS1wMSk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2tzLWxpc3QgLmRyb3Bkb3duLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bk1lbnUge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0b3A6IDEwMCU7XFxuICByaWdodDogMDtcXG5cXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bk1lbnUgLm9wdGlvbnMgbGkge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bk1lbnUuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLyogTWVkaWEgcXVlcmllcyAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA5ODBweCkge1xcbiAgLnNpZGViYXIgLmRyb3Bkb3duLW1lbnUtYnRuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAuc2lkZWJhciAuZHJvcGRvd24tbWVudS1idG4ge1xcbiAgICByaWdodDogMTBweDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Ryb3Bkb3duTWVudS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQSxpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCLGlCQUFpQjs7QUFFakI7RUFDRSxjQUFjOztFQUVkLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLFVBQVU7RUFDViw2QkFBNkI7RUFDN0IsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7O0VBRWxCLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9COztFQUVwQixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBQ1QsUUFBUTs7RUFFUixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCOzs7QUFHQSxjQUFjO0FBQ2QsY0FBYztBQUNkLGNBQWM7O0FBRWQ7RUFDRSxZQUFZO0VBQ1osa0JBQWtCOztFQUVsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCOztFQUVqQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7O0VBRXBCLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFDVCxRQUFROztFQUVSLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi9wYWxldHRlLmNzc1xcXCI7XFxuXFxuLmZpbHRlcnMtbGlzdCBsaSxcXG4ubGlzdHMtbGlzdCBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrcy1saXN0IGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm9wdGlvbnMgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKi9cXG4vKiBGb3Igc2lkZWJhciAqL1xcbi8qKioqKioqKioqKioqKioqL1xcblxcbi5zaWRlYmFyIC5kcm9wZG93bi1tZW51LWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICB0b3A6IDZweDtcXG4gIHJpZ2h0OiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDEycHg7XFxufVxcblxcbi5zaWRlYmFyIC5kcm9wZG93bi1tZW51LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG59XFxuXFxuLnNpZGViYXIgLmRyb3Bkb3duLW1lbnUtYnRuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLnNpZGViYXIgLmRyb3Bkb3duLW1lbnUtYnRuIGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA2cHg7XFxuICBsZWZ0OiAxMHB4O1xcbn1cXG5cXG4uc2lkZWJhciAuZHJvcGRvd24tYnRuIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB2YXIoLS1wMSk7XFxufVxcblxcbi5zaWRlYmFyIC5kcm9wZG93bi1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbn1cXG5cXG4uc2lkZWJhciAuZHJvcGRvd24tYnRuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbi5saXN0cy1saXN0IC5kcm9wZG93bk1lbnUge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0b3A6IDEwMCU7XFxuICByaWdodDogMDtcXG5cXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxufVxcblxcbi5saXN0cy1saXN0IC5kcm9wZG93bk1lbnUuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKiovXFxuLyogRm9yIHRhc2tzICovXFxuLyoqKioqKioqKioqKiovXFxuXFxuLnRhc2tzLWxpc3QgLmRyb3Bkb3duLW1lbnUtYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICB0b3A6IDZweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAxMnB4O1xcbn1cXG5cXG4udGFza3MtbGlzdCAuZHJvcGRvd24tbWVudS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bi1tZW51LWJ0bi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bi1tZW51LWJ0biBpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNnB4O1xcbiAgbGVmdDogMTBweDtcXG4gIGNvbG9yOiB2YXIoLS1wMSk7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bi1idG4ge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB2YXIoLS1wMSk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2tzLWxpc3QgLmRyb3Bkb3duLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bk1lbnUge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0b3A6IDEwMCU7XFxuICByaWdodDogMDtcXG5cXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bk1lbnUgLm9wdGlvbnMgbGkge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrcy1saXN0IC5kcm9wZG93bk1lbnUuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLyogTWVkaWEgcXVlcmllcyAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA5ODBweCkge1xcbiAgLnNpZGViYXIgLmRyb3Bkb3duLW1lbnUtYnRuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAuc2lkZWJhciAuZHJvcGRvd24tbWVudS1idG4ge1xcbiAgICByaWdodDogMTBweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1wMDogI2RjY2RmMDtcXG4gIC0tcDE6ICNjOGI2ZTI7XFxuICAtLXAyOiAjYThhNGNlO1xcbiAgLS1wMzogIzdhODZiNjtcXG4gIC0tcDN0OiAjN2E4NmI2NjM7XFxuICAtLXA0OiAjNDk1YzgzO1xcbiAgLS1wNTogIzM5NGE2YjtcXG4gIC0tcDY6ICMzMDNjNTU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wYWxldHRlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsYUFBYTtFQUNiLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGFBQWE7RUFDYixhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1wMDogI2RjY2RmMDtcXG4gIC0tcDE6ICNjOGI2ZTI7XFxuICAtLXAyOiAjYThhNGNlO1xcbiAgLS1wMzogIzdhODZiNjtcXG4gIC0tcDN0OiAjN2E4NmI2NjM7XFxuICAtLXA0OiAjNDk1YzgzO1xcbiAgLS1wNTogIzM5NGE2YjtcXG4gIC0tcDY6ICMzMDNjNTU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYWxldHRlLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJhc3NldHMvY2lyY2xlLXJlZ3VsYXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2NpcmNsZS1jaGVjay1yZWd1bGFyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0byZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogdmFyKC0tcDEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDQpO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXAxKTtcXG59XFxuXFxucCB7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiBVdGlsaXR5IGNsYXNzZXMgKi9cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiAgKi9cXG5cXG5ib2R5ID4gLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciA0ZnIgNTBweDtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbi5oZWFkZXIge1xcbiAgZ2FwOiA4cHg7XFxuICBncmlkLWNvbHVtbjogMS8gMztcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLnByaW1hcnktaGVhZGluZyB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi8qIFNpZGViYXIgKi9cXG4uc2lkZWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wNSk7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRlbnQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW46IDE2cHggMTZweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaWRlYmFyIGkge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc2lkZWJhciBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDMpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHBhZGRpbmc6IDBweCA4cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcblxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMzJweDtcXG59XFxuXFxuLnNpZGViYXIgLmxpc3QtYnRuIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XFxufVxcblxcbi5zaWRlYmFyIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wMik7XFxufVxcblxcbi5zaWRlYmFyIGJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDEpO1xcbn1cXG5cXG4ubGlzdHMge1xcbiAgbWFyZ2luLXRvcDogMTJweDtcXG59XFxuXFxuLmxpc3RzIGgyLFxcbi5maWx0ZXJzIGgyIHtcXG4gIGNvbG9yOiB2YXIoLS1wMik7XFxufVxcblxcbi5maWx0ZXJzLWxpc3QsXFxuLmxpc3RzLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcblxcbi5maWx0ZXItaWNvbixcXG4ubGlzdC1pY29uLFxcbi5hZGQtbGlzdC1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTJweDtcXG4gIGxlZnQ6IDEwcHg7XFxufVxcblxcbi5zaWRlYmFyIC5hZGQtbGlzdC1idG4ge1xcbiAgZ2FwOiA0cHg7XFxuICBwYWRkaW5nOiAwcHggOHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyOHB4O1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG5cXG4uYWRkLWxpc3QtYnRuLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYWRkLWxpc3QtcG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFkZC1saXN0LXBvcHVwIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wNCk7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBwYWRkaW5nOiA0cHggMHB4IDRweCAxMnB4O1xcbn1cXG5cXG4uYWRkLWxpc3QtcG9wdXAgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tcDMpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIjtcXG59XFxuXFxuLmFkZC1saXN0LXBvcHVwLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogTWFpbiAqL1xcbi5tYWluIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG5cXG4gIHBhZGRpbmc6IDMycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wNik7XFxufVxcblxcbi5tYWluLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG5cXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxufVxcblxcbi5tYWluLWhlYWRlciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDQpO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgcGFkZGluZzogNHB4IDBweCA0cHggMTJweDtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5hZGRUYXNrRm9ybSB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1haW4taGVhZGVyIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLXAzKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCI7XFxufVxcblxcbi50YXNrcy1saXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi50YXNrcy1saXN0IGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4udGFzayB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFzayBsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweCAwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XFxuICBjb2xvcjogdmFyKC0tcDEpO1xcbn1cXG5cXG4udGFzayBsYWJlbDo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgbGVmdDogMTJweDtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogdmFyKC0tcDIpO1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wM3QpO1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG4uZm9vdGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiA0IC8gNTtcXG5cXG4gIGdhcDogOHB4O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG4vKiBNZWRpYSBxdWVyaWVzICovXFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XFxuICAuc2lkZWJhci1jb250ZW50IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5ODBweCkge1xcbiAgYm9keSA+IC5jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyIDUwcHg7XFxuICB9XFxuXFxuICAuaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICB9XFxuXFxuICAuc2lkZWJhciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgfVxcblxcbiAgLmZpbHRlcnMtbGlzdCA+IGxpIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLnNpZGViYXItY29udGVudCB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIG1hcmdpbjogMzJweDtcXG4gIH1cXG5cXG4gIC5tYWluIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICB9XFxuXFxuICAuZm9vdGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICB9XFxuXFxuICAuZmlsdGVycy1saXN0LFxcbiAgLmxpc3RzLWxpc3Qge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmxpc3RzIGgyIHtcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyIGgyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyIC5hZGQtbGlzdC1idG4ge1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgfVxcblxcbiAgLmxpc3RzLFxcbiAgLmZpbHRlcnMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7OztFQUdFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFF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Q0FBa0M7RUFDcEM7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7O0lBRUUsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBOztJQUVFLFdBQVc7RUFDYjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG8mZGlzcGxheT1zd2FwXFxcIik7XFxuQGltcG9ydCBcXFwiLi9wYWxldHRlLmNzc1xcXCI7XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB2YXIoLS1wMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wNCk7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tcDEpO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIFV0aWxpdHkgY2xhc3NlcyAqL1xcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qICAqL1xcblxcbmJvZHkgPiAuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyIDRmciA1MHB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuLmhlYWRlciB7XFxuICBnYXA6IDhweDtcXG4gIGdyaWQtY29sdW1uOiAxLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4ucHJpbWFyeS1oZWFkaW5nIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLyogU2lkZWJhciAqL1xcbi5zaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXA1KTtcXG59XFxuXFxuLnNpZGViYXItY29udGVudCB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIG1hcmdpbjogMTZweCAxNnB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNpZGViYXIgaSB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5zaWRlYmFyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wMyk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgcGFkZGluZzogMHB4IDhweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxuXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xcbn1cXG5cXG4uc2lkZWJhciAubGlzdC1idG4ge1xcbiAgcGFkZGluZy1yaWdodDogNDBweDtcXG59XFxuXFxuLnNpZGViYXIgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXAyKTtcXG59XFxuXFxuLnNpZGViYXIgYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wMSk7XFxufVxcblxcbi5saXN0cyB7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbn1cXG5cXG4ubGlzdHMgaDIsXFxuLmZpbHRlcnMgaDIge1xcbiAgY29sb3I6IHZhcigtLXAyKTtcXG59XFxuXFxuLmZpbHRlcnMtbGlzdCxcXG4ubGlzdHMtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA4cHg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG59XFxuXFxuLmZpbHRlci1pY29uLFxcbi5saXN0LWljb24sXFxuLmFkZC1saXN0LWljb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMnB4O1xcbiAgbGVmdDogMTBweDtcXG59XFxuXFxuLnNpZGViYXIgLmFkZC1saXN0LWJ0biB7XFxuICBnYXA6IDRweDtcXG4gIHBhZGRpbmc6IDBweCA4cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcblxcbi5hZGQtbGlzdC1idG4uYWN0aXZlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hZGQtbGlzdC1wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYWRkLWxpc3QtcG9wdXAgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXA0KTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHBhZGRpbmc6IDRweCAwcHggNHB4IDEycHg7XFxufVxcblxcbi5hZGQtbGlzdC1wb3B1cCBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1wMyk7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiO1xcbn1cXG5cXG4uYWRkLWxpc3QtcG9wdXAuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBNYWluICovXFxuLm1haW4ge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcblxcbiAgcGFkZGluZzogMzJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXA2KTtcXG59XFxuXFxuLm1haW4taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcblxcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG59XFxuXFxuLm1haW4taGVhZGVyIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wNCk7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBwYWRkaW5nOiA0cHggMHB4IDRweCAxMnB4O1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmFkZFRhc2tGb3JtIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tcDMpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIjtcXG59XFxuXFxuLnRhc2tzLWxpc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnRhc2tzLWxpc3QgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi50YXNrIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogOHB4IDBweDtcXG4gIHBhZGRpbmctbGVmdDogMzJweDtcXG4gIGNvbG9yOiB2YXIoLS1wMSk7XFxufVxcblxcbi50YXNrIGxhYmVsOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBsZWZ0OiAxMnB4O1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IDEycHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImFzc2V0cy9jaXJjbGUtcmVndWxhci5zdmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJhc3NldHMvY2lyY2xlLWNoZWNrLXJlZ3VsYXIuc3ZnXFxcIik7XFxufVxcblxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IHZhcigtLXAyKTtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcDN0KTtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuLmZvb3RlciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogNCAvIDU7XFxuXFxuICBnYXA6IDhweDtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuLyogTWVkaWEgcXVlcmllcyAqL1xcblxcbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xcbiAgLnNpZGViYXItY29udGVudCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTgwcHgpIHtcXG4gIGJvZHkgPiAuY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciA1MHB4O1xcbiAgfVxcblxcbiAgLmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgfVxcblxcbiAgLnNpZGViYXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gIH1cXG5cXG4gIC5maWx0ZXJzLWxpc3QgPiBsaSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxuXFxuICAuc2lkZWJhciBidXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyLWNvbnRlbnQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBtYXJnaW46IDMycHg7XFxuICB9XFxuXFxuICAubWFpbiB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgfVxcblxcbiAgLmZpbHRlcnMtbGlzdCxcXG4gIC5saXN0cy1saXN0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5saXN0cyBoMiB7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxuICB9XFxuXFxuICAuc2lkZWJhciBoMiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICB9XFxuXFxuICAuc2lkZWJhciAuYWRkLWxpc3QtYnRuIHtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG4gIH1cXG5cXG4gIC5saXN0cyxcXG4gIC5maWx0ZXJzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kcm9wZG93bk1lbnUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kcm9wZG93bk1lbnUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGxpc3ROYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbGlzdE5hbWU7XG4gICAgdGhpcy5hcnJheSA9IFtdO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgdGFzay5zZXRPcmlnaW5MaXN0KHRoaXMubmFtZSk7XG4gICAgdGhpcy5hcnJheS5wdXNoKHRhc2spO1xuICB9XG5cbiAgcmVtb3ZlVGFzayh0YXNrTmFtZSkge1xuICAgIHRoaXMuYXJyYXkuc3BsaWNlKHRoaXMuZ2V0VGFza0luZGV4KHRhc2tOYW1lKSwgMSk7XG4gIH1cblxuICBnZXRUYXNrKHRhc2tOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkuZmluZCgodGFzaykgPT4gdGFzay5nZXROYW1lKCkgPT09IHRhc2tOYW1lKTtcbiAgfVxuXG4gIGdldFRhc2tJbmRleCh0YXNrTmFtZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LmZpbmRJbmRleCgodGFzaykgPT4gdGFzay5nZXROYW1lKCkgPT09IHRhc2tOYW1lKTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgc2V0QXJyYXkoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hcnJheSA9IFtdO1xuICB9XG5cbiAgYWRkTGlzdChsaXN0KSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKGxpc3QpO1xuICB9XG5cbiAgcmVtb3ZlTGlzdChsaXN0TmFtZSkge1xuICAgIHRoaXMuYXJyYXkuc3BsaWNlKHRoaXMuZ2V0TGlzdEluZGV4KGxpc3ROYW1lKSwgMSk7XG4gIH1cblxuICBnZXRMaXN0SW5kZXgobGlzdE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5maW5kSW5kZXgoKGxpc3QpID0+IGxpc3QuZ2V0TmFtZSgpID09PSBsaXN0TmFtZSk7XG4gIH1cblxuICBnZXRMaXN0QnlUYXNrTmFtZSh0YXNrTmFtZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LmZpbmQoKGxpc3QpID0+XG4gICAgICBsaXN0LmdldEFycmF5KCkuZmluZCgodGFzaykgPT4gdGFzay5nZXROYW1lKCkgPT09IHRhc2tOYW1lKVxuICAgICk7XG4gIH1cblxuICBnZXRMaXN0QnlOYW1lKGxpc3ROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkuZmluZCgobGlzdCkgPT4gbGlzdC5nZXROYW1lKCkgPT09IGxpc3ROYW1lKTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgc2V0QXJyYXkoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cbn1cbiIsImltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcbmltcG9ydCBMaXN0cyBmcm9tIFwiLi9MaXN0c1wiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFza1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhbFN0b3JhZ2Uge1xuICBzdGF0aWMgc2F2ZUxpc3RzKGxpc3RzKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0c1wiLCBKU09OLnN0cmluZ2lmeShsaXN0cykpO1xuICB9XG5cbiAgc3RhdGljICNsb2FkTGlzdHMoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsaXN0c1wiKSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0TGlzdHNPYmplY3QoKSB7XG4gICAgY29uc3QgbGlzdHMgPSBPYmplY3QuYXNzaWduKG5ldyBMaXN0cygpLCB0aGlzLiNsb2FkTGlzdHMoKSk7XG5cbiAgICBsaXN0cy5zZXRBcnJheShcbiAgICAgIGxpc3RzLmdldEFycmF5KCkubWFwKChsaXN0KSA9PiBPYmplY3QuYXNzaWduKG5ldyBMaXN0KCksIGxpc3QpKVxuICAgICk7XG5cbiAgICBsaXN0cy5nZXRBcnJheSgpLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgIGxpc3Quc2V0QXJyYXkoXG4gICAgICAgIGxpc3QuZ2V0QXJyYXkoKS5tYXAoKHRhc2spID0+IE9iamVjdC5hc3NpZ24obmV3IFRhc2soKSwgdGFzaykpXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxpc3RzO1xuICB9XG5cbiAgc3RhdGljIGdldExpc3RCeU5hbWUobGlzdE5hbWUpIHtcbiAgICBjb25zdCBsaXN0cyA9IExvY2FsU3RvcmFnZS5nZXRMaXN0c09iamVjdCgpO1xuICAgIHJldHVybiBsaXN0cy5nZXRMaXN0QnlOYW1lKGxpc3ROYW1lKTtcbiAgfVxuXG4gIHN0YXRpYyBhZGRMaXN0KGxpc3QpIHtcbiAgICBjb25zdCBsaXN0cyA9IExvY2FsU3RvcmFnZS5nZXRMaXN0c09iamVjdCgpO1xuICAgIGxpc3RzLmFkZExpc3QobGlzdCk7XG4gICAgTG9jYWxTdG9yYWdlLnNhdmVMaXN0cyhsaXN0cyk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlTGlzdChsaXN0TmFtZSkge1xuICAgIGNvbnN0IGxpc3RzID0gTG9jYWxTdG9yYWdlLmdldExpc3RzT2JqZWN0KCk7XG4gICAgbGlzdHMucmVtb3ZlTGlzdChsaXN0TmFtZSk7XG4gICAgTG9jYWxTdG9yYWdlLnNhdmVMaXN0cyhsaXN0cyk7XG4gIH1cblxuICBzdGF0aWMgYWRkVGFzayhsaXN0TmFtZSwgdGFzaykge1xuICAgIGNvbnN0IGxpc3RzID0gTG9jYWxTdG9yYWdlLmdldExpc3RzT2JqZWN0KCk7XG4gICAgY29uc3QgdGFyZ2V0TGlzdCA9IGxpc3RzLmdldExpc3RCeU5hbWUobGlzdE5hbWUpO1xuICAgIHRhcmdldExpc3QuYWRkVGFzayh0YXNrKTtcbiAgICBMb2NhbFN0b3JhZ2Uuc2F2ZUxpc3RzKGxpc3RzKTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVUYXNrKGxpc3ROYW1lLCB0YXNrKSB7XG4gICAgY29uc3QgbGlzdHMgPSBMb2NhbFN0b3JhZ2UuZ2V0TGlzdHNPYmplY3QoKTtcbiAgICBjb25zdCBsaXN0ID0gbGlzdHMuZ2V0TGlzdEJ5TmFtZShsaXN0TmFtZSk7XG4gICAgbGlzdC5yZW1vdmVUYXNrKHRhc2suZ2V0TmFtZSgpKTtcbiAgICBMb2NhbFN0b3JhZ2Uuc2F2ZUxpc3RzKGxpc3RzKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmU7XG4gIH1cblxuICB0b2dnbGVTdGF0dXMoKSB7XG4gICAgdGhpcy5hY3RpdmUgPSAhdGhpcy5hY3RpdmU7XG4gIH1cblxuICBnZXRPcmlnaW5MaXN0KCkge1xuICAgIHJldHVybiB0aGlzLm9yaWdpbkxpc3ROYW1lO1xuICB9XG5cbiAgc2V0T3JpZ2luTGlzdChsaXN0TmFtZSkge1xuICAgIHRoaXMub3JpZ2luTGlzdE5hbWUgPSBsaXN0TmFtZTtcbiAgfVxufVxuIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFza1wiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xuaW1wb3J0IExvY2FsU3RvcmFnZSBmcm9tIFwiLi9Mb2NhbFN0b3JhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xuICBzdGF0aWMgbG9hZFRvRG9MaXN0KCkge1xuICAgIFVJLmxvYWRMaXN0cygpO1xuICAgIFVJLnNldHVwQnV0dG9ucygpO1xuICAgIFVJLmxvYWRBbGxUYXNrcygpO1xuICB9XG5cbiAgLy8gTG9hZGluZ1xuICBzdGF0aWMgbG9hZExpc3RzKCkge1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0cyB1bFwiKTtcbiAgICB1bC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIExvY2FsU3RvcmFnZS5nZXRMaXN0c09iamVjdCgpXG4gICAgICAuZ2V0QXJyYXkoKVxuICAgICAgLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgICAgVUkuY3JlYXRlTGlzdChsaXN0KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUxpc3QobGlzdCkge1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0cyB1bFwiKTtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1uYW1lXCIpO1xuXG4gICAgbGkuaW5uZXJIVE1MID0gYDxidXR0b24gY2xhc3M9XCJsaXN0LWJ0blwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1ub3RlLXN0aWNreSBsaXN0LWljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgPHA+JHtsaXN0LmdldE5hbWUoKX08L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRyb3Bkb3duLW1lbnUtYnRuXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1lbGxpcHNpcy12ZXJ0aWNhbFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bk1lbnVcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJvcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgICA8bGk+PGJ1dHRvbiBjbGFzcz1cImRyb3Bkb3duLWJ0biBsaXN0LWVkaXRcIj5FZGl0PC9idXR0b24+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48YnV0dG9uIGNsYXNzPVwiZHJvcGRvd24tYnRuIGxpc3QtZGVsZXRlXCI+RGVsZXRlPC9idXR0b24+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIGxpLnNldEF0dHJpYnV0ZShcImlkXCIsIGxpc3QuZ2V0TmFtZSgpKTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG5cbiAgICBjb25zdCBsaXN0RWRpdCA9IGxpLnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1lZGl0XCIpO1xuICAgIGNvbnN0IGxpc3REZWxldGUgPSBsaS5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtZGVsZXRlXCIpO1xuXG4gICAgY29uc3QgbGlzdERyb3Bkb3duTWVudUJ1dHRvbiA9IGxpLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tbWVudS1idG5cIik7XG4gICAgY29uc3QgbGlzdERyb3Bkb3duTWVudSA9IGxpLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd25NZW51XCIpO1xuXG4gICAgbGlzdERyb3Bkb3duTWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGxpc3REcm9wZG93bk1lbnVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgIGxpc3REcm9wZG93bk1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTEpID0+IHtcbiAgICAgICAgaWYgKGUxLnRhcmdldCAhPT0gbGlzdERyb3Bkb3duTWVudSkge1xuICAgICAgICAgIGxpc3REcm9wZG93bk1lbnVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICBsaXN0RHJvcGRvd25NZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcblxuICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBsaXN0cyA9IExvY2FsU3RvcmFnZS5nZXRMaXN0c09iamVjdCgpO1xuICAgICAgLy8gQWRkIGNvZGUgdG8gZW5hYmxlIGlucHV0aGVyZVxuICAgICAgVUkuZW5hYmxlVGFza0lucHV0KCk7XG5cbiAgICAgIFVJLmxvYWRGcmVzaExpc3QobGlzdHMuZ2V0TGlzdEJ5TmFtZShsaXN0LmdldE5hbWUoKSkpO1xuICAgIH0pO1xuXG4gICAgbGlzdERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIExvY2FsU3RvcmFnZS5yZW1vdmVMaXN0KGxpc3QuZ2V0TmFtZSgpKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLmxvYWRMaXN0cygpO1xuXG4gICAgICBpZiAobGlzdC5nZXROYW1lKCkgPT09IGgxLnRleHRDb250ZW50KSB7XG4gICAgICAgIHRoaXMubG9hZEFsbFRhc2tzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZW5hYmxlVGFza0lucHV0KCkge1xuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrRm9ybVwiKTtcbiAgICBhZGRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9XG5cbiAgc3RhdGljIGRpc2FibGVUYXNrSW5wdXQoKSB7XG4gICAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRhc2tGb3JtXCIpO1xuICAgIGFkZFRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIHN0YXRpYyBsb2FkQWxsVGFza3MoKSB7XG4gICAgVUkuZGlzYWJsZVRhc2tJbnB1dCgpO1xuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1saXN0XCIpO1xuICAgIHRhc2tzLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LW5hbWVcIik7XG4gICAgaDEudGV4dENvbnRlbnQgPSBcIkFsbCB0YXNrc1wiO1xuXG4gICAgY29uc3QgbGlzdHMgPSBMb2NhbFN0b3JhZ2UuZ2V0TGlzdHNPYmplY3QoKTtcbiAgICBsaXN0cy5nZXRBcnJheSgpLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgIFVJLmxvYWRBZGRpdGlvbmFsTGlzdChsaXN0KTtcbiAgICB9KTtcbiAgICBVSS5zZXR1cFRhc2tUb2dnbGUoKTtcbiAgICBVSS5yZW5kZXJBbGxUYXNrU3RhdHVzZXMobGlzdHMpO1xuICB9XG5cbiAgc3RhdGljIGxvYWRGcmVzaExpc3QobGlzdCkge1xuICAgIFVJLnNldEFjdGl2ZUxpc3RUaXRsZShsaXN0LmdldE5hbWUoKSk7XG4gICAgVUkucmVzZXREaXNwbGF5ZWRUYXNrcygpO1xuICAgIFVJLnJlbmRlclRhc2tzKGxpc3QpO1xuICAgIFVJLnJlbmRlclRhc2tTdGF0dXNlcyhsaXN0KTtcblxuICAgIFVJLnNldHVwVGFza1RvZ2dsZSgpO1xuICB9XG5cbiAgc3RhdGljIGxvYWRBZGRpdGlvbmFsTGlzdChsaXN0KSB7XG4gICAgVUkucmVuZGVyVGFza3MobGlzdCk7XG4gIH1cblxuICBzdGF0aWMgc2V0QWN0aXZlTGlzdFRpdGxlKGxpc3ROYW1lKSB7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtbmFtZVwiKTtcbiAgICBoMS50ZXh0Q29udGVudCA9IGxpc3ROYW1lO1xuICB9XG5cbiAgc3RhdGljIHJlc2V0RGlzcGxheWVkVGFza3MoKSB7XG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWxpc3RcIik7XG4gICAgdGFza3MucmVwbGFjZUNoaWxkcmVuKCk7XG4gIH1cblxuICBzdGF0aWMgcmVuZGVyVGFza3MobGlzdCkge1xuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1saXN0XCIpO1xuICAgIGNvbnN0IGxpc3ROYW1lID0gbGlzdC5nZXROYW1lKCk7XG4gICAgbGlzdC5nZXRBcnJheSgpLmZvckVhY2goKHRhc2ssIGkpID0+IHtcbiAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgbGkuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJ0YXNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0YXNrQ29tcGxldGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIiR7bGlzdE5hbWV9VGFzayR7aX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInRhc2tUZXh0XCIgZm9yPVwiJHtsaXN0TmFtZX1UYXNrJHtpfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPiR7dGFzay5nZXROYW1lKCl9PC9sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRyb3Bkb3duLW1lbnUtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd25NZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwib3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGJ1dHRvbiBjbGFzcz1cImRyb3Bkb3duLWJ0biB0YXNrLWVkaXRcIj5FZGl0PC9idXR0b24+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxidXR0b24gY2xhc3M9XCJkcm9wZG93bi1idG4gdGFzay1kZWxldGVcIj5EZWxldGU8L2J1dHRvbj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgIHRhc2tzLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgIGNvbnN0IHRhc2tFZGl0ID0gbGkucXVlcnlTZWxlY3RvcihcIi50YXNrLWVkaXRcIik7XG4gICAgICBjb25zdCB0YXNrRGVsZXRlID0gbGkucXVlcnlTZWxlY3RvcihcIi50YXNrLWRlbGV0ZVwiKTtcblxuICAgICAgY29uc3QgdGFza0Ryb3Bkb3duTWVudUJ1dHRvbiA9IGxpLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tbWVudS1idG5cIik7XG4gICAgICBjb25zdCB0YXNrRHJvcGRvd25NZW51ID0gbGkucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bk1lbnVcIik7XG5cbiAgICAgIHRhc2tEcm9wZG93bk1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIHRhc2tEcm9wZG93bk1lbnVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgdGFza0Ryb3Bkb3duTWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUxKSA9PiB7XG4gICAgICAgICAgaWYgKGUxLnRhcmdldCAhPT0gdGFza0Ryb3Bkb3duTWVudSkge1xuICAgICAgICAgICAgdGFza0Ryb3Bkb3duTWVudUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgdGFza0Ryb3Bkb3duTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9KTtcblxuICAgICAgdGFza0RlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgTG9jYWxTdG9yYWdlLnJlbW92ZVRhc2sobGlzdE5hbWUsIHRhc2spO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCBoMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1uYW1lXCIpO1xuXG4gICAgICAgIGlmIChoMS50ZXh0Q29udGVudCA9PT0gXCJBbGwgdGFza3NcIikge1xuICAgICAgICAgIHRoaXMubG9hZEFsbFRhc2tzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbW9kaWZpZWRMaXN0ID0gTG9jYWxTdG9yYWdlLmdldExpc3RCeU5hbWUobGlzdE5hbWUpO1xuICAgICAgICAgIHRhc2tzLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICAgIHRoaXMucmVuZGVyVGFza3MobW9kaWZpZWRMaXN0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgcmVuZGVyVGFza1N0YXR1c2VzKGxpc3QpIHtcbiAgICBsaXN0LmdldEFycmF5KCkuZm9yRWFjaCgodGFzaywgaSkgPT4ge1xuICAgICAgaWYgKCF0YXNrLmdldFN0YXR1cygpKSB7XG4gICAgICAgIC8vIElmIHRhc2sgaXMgbm90IGFjdGl2ZVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAjJHt0YXNrLmdldE9yaWdpbkxpc3QoKX1UYXNrJHtpfWBcbiAgICAgICAgKS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJBbGxUYXNrU3RhdHVzZXMobGlzdHMpIHtcbiAgICBsaXN0cy5nZXRBcnJheSgpLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgIGxpc3QuZ2V0QXJyYXkoKS5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7XG4gICAgICAgIGlmICghdGFzay5nZXRTdGF0dXMoKSkge1xuICAgICAgICAgIC8vIElmIHRhc2sgaXMgbm90IGFjdGl2ZVxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgIyR7dGFzay5nZXRPcmlnaW5MaXN0KCl9VGFzayR7aX1gXG4gICAgICAgICAgKS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgc2V0dXBUYXNrVG9nZ2xlKCkge1xuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1saXN0XCIpO1xuICAgIGNvbnN0IHRhc2tEaXZzID0gdGFza3MucXVlcnlTZWxlY3RvckFsbChcIi50YXNrIGlucHV0XCIpO1xuXG4gICAgdGFza0RpdnMuZm9yRWFjaCgodGFza0RpdikgPT4ge1xuICAgICAgdGFza0Rpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgLy8gUHJvYmxlbSBpcyBpdCByZWdpc3RlcnMgc2VwYXJhdGUgY2xpY2tzIGZvciBsYWJlbCBhbmQgY2hlY2tib3hcbiAgICAgICAgY29uc3QgbGlzdHMgPSBMb2NhbFN0b3JhZ2UuZ2V0TGlzdHNPYmplY3QoKTtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBlLnRhcmdldC5sYWJlbHNbMF0udGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBsaXN0cy5nZXRMaXN0QnlUYXNrTmFtZSh0YXNrTmFtZSk7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBsaXN0LmdldFRhc2sodGFza05hbWUpO1xuICAgICAgICB0YXNrLnRvZ2dsZVN0YXR1cygpO1xuXG4gICAgICAgIExvY2FsU3RvcmFnZS5zYXZlTGlzdHMobGlzdHMpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgc2V0dXBCdXR0b25zKCkge1xuICAgIC8vIEFkZCBsaXN0IGJ1dHRvblxuICAgIGNvbnN0IGFkZExpc3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtbGlzdC1mb3JtXCIpO1xuICAgIGNvbnN0IGxpc3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWxpc3QtZm9ybSAubGlzdC1uYW1lLWlucHV0XCIpO1xuICAgIGNvbnN0IGFkZExpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1saXN0LWJ0blwiKTtcbiAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVGFza0Zvcm1cIik7XG4gICAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dFRhc2tUZXh0XCIpO1xuICAgIGNvbnN0IGFsbFRhc2tzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGwtdGFza3MtYnRuXCIpO1xuXG4gICAgYWxsVGFza3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIFVJLmxvYWRBbGxUYXNrcygpO1xuICAgIH0pO1xuXG4gICAgYWRkTGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5lbmFibGVBZGRMaXN0UG9wdXAoKTtcbiAgICB9KTtcbiAgICBhZGRMaXN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vIEFkZCBsaXN0IHRvIExvY2FsU3RvcmFnZVxuXG4gICAgICBjb25zdCBsaXN0TmFtZSA9IGxpc3RJbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IG5ld0xpc3QgPSBuZXcgTGlzdChsaXN0TmFtZSk7XG4gICAgICBMb2NhbFN0b3JhZ2UuYWRkTGlzdChuZXdMaXN0KTtcbiAgICAgIFVJLmNyZWF0ZUxpc3QobmV3TGlzdCk7XG5cbiAgICAgIHRoaXMuZGlzYWJsZUFkZExpc3RQb3B1cCgpO1xuICAgIH0pO1xuXG4gICAgYWRkVGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAvLyBBZGQgdGFzayB0byBsaXN0XG5cbiAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayh0YXNrSW5wdXQudmFsdWUpO1xuICAgICAgY29uc3QgbGlzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtbmFtZVwiKS50ZXh0Q29udGVudDtcbiAgICAgIExvY2FsU3RvcmFnZS5hZGRUYXNrKGxpc3ROYW1lLCBuZXdUYXNrKTtcblxuICAgICAgVUkubG9hZEZyZXNoTGlzdChMb2NhbFN0b3JhZ2UuZ2V0TGlzdHNPYmplY3QoKS5nZXRMaXN0QnlOYW1lKGxpc3ROYW1lKSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZW5hYmxlQWRkTGlzdFBvcHVwKCkge1xuICAgIGNvbnN0IGFkZExpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1saXN0LWJ0blwiKTtcbiAgICBjb25zdCBhZGRMaXN0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1saXN0LXBvcHVwXCIpO1xuXG4gICAgYWRkTGlzdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIGFkZExpc3RQb3B1cC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgc3RhdGljIGRpc2FibGVBZGRMaXN0UG9wdXAoKSB7XG4gICAgY29uc3QgYWRkTGlzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWxpc3QtYnRuXCIpO1xuICAgIGNvbnN0IGFkZExpc3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWxpc3QtcG9wdXBcIik7XG5cbiAgICBhZGRMaXN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgYWRkTGlzdFBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgVUkgZnJvbSBcIi4vbW9kdWxlcy9VSVwiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgXCIuL2Ryb3Bkb3duTWVudS5jc3NcIjtcblxuVUkubG9hZFRvRG9MaXN0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=