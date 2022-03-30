/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Merienda:wght@700&family=Merriweather:ital,wght@1,700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n  -webkit-box-sizing: border-box;\\n  -moz-box-sizing: border-box;\\n  box-sizing: border-box;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n  -webkit-box-sizing: inherit;\\n  -moz-box-sizing: inherit;\\n  box-sizing: inherit;\\n  padding: 0;\\n  margin: 0;\\n  font-size: 17px;\\n  color: #dddbf1;\\n}\\n\\nbody {\\n  display: flex;\\n  margin-top: 150px;\\n  justify-content: center;\\n  height: 100vh;\\n  background-color: #755c1b;\\n}\\n\\n.todolist {\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  grid-template-rows: repeat(4, auto);\\n  background-color: #7a4419;\\n  height: max-content;\\n  max-width: 900px;\\n  border-radius: 20px 20px;\\n  border: 2px solid #383f51;\\n}\\n\\n.list-header,\\n.add-new-task {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  border-bottom: 1px solid #383f51;\\n  padding: 0 20px;\\n  height: 50px;\\n}\\n\\n#add-new-task,\\n#add-new-task::placeholder {\\n  color: #ada7ac;\\n  font-family: 'Merienda', cursive;\\n  letter-spacing: 0.1rem;\\n}\\n\\n.list-header > h1 {\\n  letter-spacing: 0.1rem;\\n  font-family: 'Merriweather', serif;\\n  font-size: 20px;\\n}\\n\\ninput,\\nbutton {\\n  border: 0;\\n  background: none;\\n}\\n\\ninput:focus {\\n  outline: none;\\n}\\n\\n.task {\\n  cursor: move;\\n  height: 50px;\\n  display: grid;\\n  align-items: center;\\n  grid-template-columns: auto 1fr auto;\\n  column-gap: 20px;\\n  padding: 0 20px;\\n  border-bottom: 2px dotted #383f51;\\n}\\n\\n.fa-solid {\\n  font-size: 24px;\\n  cursor: pointer;\\n}\\n\\ninput[type=checkbox] {\\n  transform: scale(1.5);\\n}\\n\\n.new-task {\\n  letter-spacing: 0.07rem;\\n  font-family: 'Merienda', cursive;\\n  border-radius: 9px;\\n  padding-left: 10px;\\n}\\n\\n.active {\\n  background: #b4b88c;\\n  color: #000;\\n}\\n\\n.line {\\n  text-decoration: line-through;\\n  font-size: 17px;\\n  color: #ada7ac;\\n}\\n\\n#clear-btn {\\n  font-family: 'Merienda', cursive;\\n  cursor: pointer;\\n  height: 70px;\\n  background-color: #0b2545;\\n  border-radius: 0 0 19px 19px;\\n}\\n\\n/* error message */\\n.error {\\n  color: #0b2545;\\n  visibility: hidden;\\n  font-size: 19px;\\n  padding: 12px;\\n  position: absolute;\\n  width: max-content;\\n  background-color: #c1c7d0;\\n  text-align: center;\\n  top: 12%;\\n  border-radius: 5px;\\n}\\n\\n.error::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 100%;\\n  left: 50%;\\n  margin-left: -5px;\\n  border-width: 5px;\\n  border-style: solid;\\n  border-color: #c1c7d0 transparent transparent transparent;\\n}\\n\\n@media screen and (min-width: 600px) {\\n  * {\\n    font-size: 20px;\\n  }\\n\\n  .list-header > h1 {\\n    font-size: 25px;\\n  }\\n\\n  .todolist {\\n    width: 70%;\\n  }\\n\\n  .list-header,\\n  .add-new-task {\\n    display: grid;\\n    grid-template-columns: 1fr auto;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_add_remove_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/add-remove.js */ \"./src/modules/add-remove.js\");\n\n\n\n\nconst newlib = new _modules_add_remove_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nnewlib.submitNewTaskEntry();\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/index.js?");

/***/ }),

/***/ "./src/modules/add-remove.js":
/*!***********************************!*\
  !*** ./src/modules/add-remove.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _interactive_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactive-page.js */ \"./src/modules/interactive-page.js\");\n\n\nconst taskContainer = document.querySelector('.task-container');\nconst enterBtn = document.querySelector('.enter');\nconst clearAllBtn = document.getElementById('clear-btn');\nconst refresh = document.querySelector('.refresh');\nclass AddRemoveTask {\n  constructor() {\n    this.store = JSON.parse(localStorage.getItem('ToDoList')) || [];\n  }\n\n  resetIndex() {\n    let initialIndex = 1;\n    this.store.forEach((task) => {\n      task.index = initialIndex;\n      initialIndex += 1;\n    });\n    localStorage.setItem('ToDoList', JSON.stringify(this.store));\n  }\n\n  clearCompletedTasks(button) {\n    button.addEventListener('click', () => {\n      this.store = this.store.filter((task) => task.completed === false);\n      taskContainer.innerHTML = '';\n      this.store.forEach((task) => {\n        this.newTask(task.description, task.index, task);\n      });\n      localStorage.setItem('ToDoList', JSON.stringify(this.store));\n    });\n  }\n\n  deleteTask(index) {\n    this.store = this.store.filter((task) => task.index !== index);\n    this.resetIndex();\n    this.newTask();\n    localStorage.setItem('ToDoList', JSON.stringify(this.store));\n  }\n\n  newTask() {\n    const taskContainer = document.querySelector('.task-container');\n    taskContainer.innerHTML = '';\n    this.store.forEach((task) => {\n      if (task.completed) {\n        taskContainer.innerHTML\n          += `\n      <div class=\"task\">\n          <input type=\"checkbox\" class=\"check\" checked>\n          <input id=\"${task.index}\" class=\"new-task line\" type=\"text\" value=\"${task.description}\">\n          <span id=\"${task.index}\">\n            <i class=\"delete fa-solid fa-trash-can\"></i>\n          </span>\n      </div>\n      `;\n      } else {\n        taskContainer.innerHTML\n          += `\n      <div class=\"task\">\n          <input type=\"checkbox\" class=\"check\">\n          <input id=\"${task.index}\" class=\"new-task\" type=\"text\" value=\"${task.description}\">\n          <span id=\"${task.index}\">\n            <i class=\"delete fa-solid fa-trash-can\"></i>\n          </span>\n      </div>\n      `;\n      }\n    });\n\n    localStorage.setItem('ToDoList', JSON.stringify(this.store));\n\n    // mark item as completed\n    const checkBox = document.querySelectorAll('.check');\n    (0,_interactive_page_js__WEBPACK_IMPORTED_MODULE_0__.markItemAsComplete)(checkBox, this.store);\n\n    // delete an item\n    const deleteBtn = document.querySelectorAll('.delete');\n    deleteBtn.forEach((btn) => {\n      btn.addEventListener('click', () => {\n        taskContainer.innerHTML = '';\n        this.deleteTask(Number(btn.parentElement.id));\n      });\n    });\n\n    // edit an input\n    const fieldInputs = document.querySelectorAll('.new-task');\n    fieldInputs.forEach((field) => {\n      field.addEventListener('click', () => {\n        (0,_interactive_page_js__WEBPACK_IMPORTED_MODULE_0__.updateInput)(field, this.store);\n      });\n      field.addEventListener('blur', () => {\n        (0,_interactive_page_js__WEBPACK_IMPORTED_MODULE_0__.makeInputDefault)(field);\n      });\n      field.addEventListener('keydown', (e) => {\n        if (e.code === 'Enter') {\n          (0,_interactive_page_js__WEBPACK_IMPORTED_MODULE_0__.makeInputDefault)(field);\n        }\n      });\n    });\n  }\n\n  localStorageToWebpage() {\n    if (localStorage !== null) {\n      const store = JSON.parse(localStorage.getItem('ToDoList'));\n      store.forEach((task) => {\n        this.newTask(task.description, task.index, task);\n      });\n    }\n  }\n\n  addNewTask(task) {\n    const currTask = {\n      index: this.store.length < 1 ? 1 : this.store.length + 1,\n      description: task,\n      completed: false,\n    };\n    this.store.push(currTask);\n    this.newTask();\n    localStorage.setItem('ToDoList', JSON.stringify(this.store));\n  }\n\n  submitNewTaskEntry() {\n    const addNewTaskInput = document.getElementById('add-new-task');\n    const errormsg = document.getElementById('error-msg');\n\n    enterBtn.addEventListener('click', () => {\n      if (addNewTaskInput.value === '') {\n        errormsg.style.visibility = 'visible';\n        setTimeout(() => {\n          errormsg.style.visibility = 'hidden';\n        }, 2000);\n      } else {\n        this.addNewTask(addNewTaskInput.value);\n        addNewTaskInput.value = '';\n      }\n    });\n\n    addNewTaskInput.addEventListener('keydown', (e) => {\n      if (e.code === 'Enter') {\n        if (addNewTaskInput.value === '') {\n          errormsg.style.visibility = 'visible';\n          setTimeout(() => {\n            errormsg.style.visibility = 'hidden';\n          }, 2000);\n        } else {\n          this.addNewTask(addNewTaskInput.value);\n          addNewTaskInput.value = '';\n        }\n      }\n    });\n\n    this.clearCompletedTasks(clearAllBtn);\n    localStorage.setItem('ToDoList', JSON.stringify(this.store));\n    this.localStorageToWebpage();\n    // delete all tasks\n    (0,_interactive_page_js__WEBPACK_IMPORTED_MODULE_0__.deleteAllTasks)(refresh, taskContainer);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddRemoveTask);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/add-remove.js?");

/***/ }),

/***/ "./src/modules/interactive-page.js":
/*!*****************************************!*\
  !*** ./src/modules/interactive-page.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteAllTasks\": () => (/* binding */ deleteAllTasks),\n/* harmony export */   \"makeInputDefault\": () => (/* binding */ makeInputDefault),\n/* harmony export */   \"markItemAsComplete\": () => (/* binding */ markItemAsComplete),\n/* harmony export */   \"updateInput\": () => (/* binding */ updateInput)\n/* harmony export */ });\nconst markItemAsComplete = (checkbox, array) => {\n  checkbox.forEach((box) => {\n    box.addEventListener('change', () => {\n      const result = array.filter(\n        (task) => Number(box.nextElementSibling.id) === task.index,\n      );\n      if (box.checked) {\n        box.nextElementSibling.classList.add('line');\n        array[result[0].index - 1].completed = true;\n      } else {\n        box.nextElementSibling.classList.remove('line');\n        array[result[0].index - 1].completed = false;\n      }\n      localStorage.setItem('ToDoList', JSON.stringify(array));\n    });\n  });\n};\n\nconst deleteAllTasks = (button, container) => {\n  button.addEventListener('click', () => {\n    container.innerHTML = '';\n    localStorage.clear();\n  });\n};\n\nconst updateInput = (field, array) => {\n  if (field.classList.contains('line')) {\n    field.readOnly = false;\n    field.classList.remove('line');\n    field.classList.add('active');\n  } else {\n    field.classList.add('active');\n    field.readOnly = false;\n  }\n\n  field.addEventListener('change', () => {\n    const result = array.filter(\n      (task) => Number(field.id) === task.index,\n    );\n    array[result[0].index - 1].description = field.value;\n    localStorage.setItem('ToDoList', JSON.stringify(array));\n  });\n};\n\nconst makeInputDefault = (field) => {\n  if (field.previousElementSibling.checked) {\n    field.classList.add('line');\n    field.classList.remove('active');\n    field.readOnly = true;\n  } else {\n    field.classList.remove('active');\n    field.readOnly = true;\n  }\n};\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/interactive-page.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;