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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Merienda:wght@700&family=Merriweather:ital,wght@1,700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\r\\n  -webkit-box-sizing: border-box;\\r\\n  -moz-box-sizing: border-box;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n  -webkit-box-sizing: inherit;\\r\\n  -moz-box-sizing: inherit;\\r\\n  box-sizing: inherit;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  font-size: 17px;\\r\\n  color: #dddbf1;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  display: flex;\\r\\n  margin-top: 150px;\\r\\n  justify-content: center;\\r\\n  height: 100vh;\\r\\n  background-color: #755c1b;\\r\\n}\\r\\n\\r\\n.todolist {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr;\\r\\n  grid-template-rows: repeat(4, auto);\\r\\n  background-color: #7a4419;\\r\\n  height: max-content;\\r\\n  max-width: 900px;\\r\\n  border-radius: 20px 20px;\\r\\n  border: 2px solid #383f51;\\r\\n}\\r\\n\\r\\n.list-header,\\r\\n.add-new-task {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  border-bottom: 1px solid #383f51;\\r\\n  padding: 0 20px;\\r\\n  height: 50px;\\r\\n}\\r\\n\\r\\n#add-new-task,\\r\\n#add-new-task::placeholder {\\r\\n  color: #ada7ac;\\r\\n  font-family: 'Merienda', cursive;\\r\\n  letter-spacing: 0.1rem;\\r\\n}\\r\\n\\r\\n.list-header > h1 {\\r\\n  letter-spacing: 0.1rem;\\r\\n  font-family: 'Merriweather', serif;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\ninput,\\r\\nbutton {\\r\\n  border: 0;\\r\\n  background: none;\\r\\n}\\r\\n\\r\\ninput:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.task {\\r\\n  cursor: move;\\r\\n  height: 50px;\\r\\n  display: grid;\\r\\n  align-items: center;\\r\\n  grid-template-columns: auto 1fr auto;\\r\\n  column-gap: 20px;\\r\\n  padding: 0 20px;\\r\\n  border-bottom: 2px dotted #383f51;\\r\\n}\\r\\n\\r\\n.fa-solid {\\r\\n  font-size: 24px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\ninput[type=checkbox] {\\r\\n  transform: scale(1.5);\\r\\n}\\r\\n\\r\\n.new-task {\\r\\n  letter-spacing: 0.07rem;\\r\\n  font-family: 'Merienda', cursive;\\r\\n  border-radius: 9px;\\r\\n  padding-left: 10px;\\r\\n}\\r\\n\\r\\n.active {\\r\\n  background: #b4b88c;\\r\\n  color: #000;\\r\\n}\\r\\n\\r\\n.line {\\r\\n  text-decoration: line-through;\\r\\n  font-size: 17px;\\r\\n  color: #ada7ac;\\r\\n}\\r\\n\\r\\n#clear-btn {\\r\\n  font-family: 'Merienda', cursive;\\r\\n  cursor: pointer;\\r\\n  height: 70px;\\r\\n  background-color: #0b2545;\\r\\n  border-radius: 0 0 19px 19px;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 600px) {\\r\\n  * {\\r\\n    font-size: 20px;\\r\\n  }\\r\\n\\r\\n  .list-header > h1 {\\r\\n    font-size: 25px;\\r\\n  }\\r\\n\\r\\n  .todolist {\\r\\n    width: 70%;\\r\\n  }\\r\\n\\r\\n  .list-header,\\r\\n  .add-new-task {\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr auto;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_add_remove_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/add-remove.js */ \"./src/modules/add-remove.js\");\n\r\n\r\n\r\n\r\nconst newlib = new _modules_add_remove_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\nnewlib.submitNewTaskEntry();\r\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/index.js?");

/***/ }),

/***/ "./src/modules/add-remove.js":
/*!***********************************!*\
  !*** ./src/modules/add-remove.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask.js */ \"./src/modules/createTask.js\");\n/* harmony import */ var _interactive_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive-page.js */ \"./src/modules/interactive-page.js\");\n\r\n\r\n\r\nconst taskContainer = document.querySelector('.task-container');\r\nconst addNewTaskInput = document.getElementById('add-new-task');\r\nconst enterBtn = document.querySelector('.enter');\r\nconst clearAllBtn = document.getElementById('clear-btn');\r\nconst refresh = document.querySelector('.refresh');\r\nclass AddRemoveTask {\r\n  constructor() {\r\n    this.store = JSON.parse(localStorage.getItem('ToDoList')) || [];\r\n  }\r\n\r\n  resetIndex() {\r\n    let initialIndex = 1;\r\n    this.store.forEach((task) => {\r\n      task.index = initialIndex;\r\n      initialIndex += 1;\r\n    });\r\n    localStorage.setItem('ToDoList', JSON.stringify(this.store));\r\n  }\r\n\r\n  clearCompletedTasks(button) {\r\n    button.addEventListener('click', () => {\r\n      this.store = this.store.filter((task) => task.completed === false);\r\n      taskContainer.innerHTML = '';\r\n      this.store.forEach((task) => {\r\n        this.newTask(task.description, task.id);\r\n      });\r\n      localStorage.setItem('ToDoList', JSON.stringify(this.store));\r\n    });\r\n  }\r\n\r\n  deleteTask(button) {\r\n    button.addEventListener('click', () => {\r\n      this.store = this.store.filter(\r\n        (tasks) => button.parentElement.id !== tasks.id,\r\n      );\r\n      taskContainer.innerHTML = '';\r\n      this.store.forEach((task) => {\r\n        this.newTask(task.description, task.id);\r\n      });\r\n      localStorage.setItem('ToDoList', JSON.stringify(this.store));\r\n    });\r\n  }\r\n\r\n  newTask(task, id) {\r\n    taskContainer.innerHTML\r\n      += `\r\n      <div class=\"task\">\r\n          <input type=\"checkbox\" class=\"check\">\r\n          <input id=\"${id}\" class=\"new-task\" type=\"text\" value=\"${task}\">\r\n          <span id=\"${id}\">\r\n            <i class=\"delete fa-solid fa-trash-can\"></i>\r\n          </span>\r\n      </div>\r\n      `;\r\n\r\n    // mark item as completed\r\n    const checkBox = document.querySelectorAll('.check');\r\n    (0,_interactive_page_js__WEBPACK_IMPORTED_MODULE_1__.markItemAsComplete)(checkBox, this.store);\r\n\r\n    const deleteBtn = document.querySelectorAll('.delete');\r\n    deleteBtn.forEach((btn) => {\r\n      this.deleteTask(btn);\r\n      this.resetIndex();\r\n    });\r\n    localStorage.setItem('ToDoList', JSON.stringify(this.store));\r\n\r\n    // edit an input\r\n    const fieldInputs = document.querySelectorAll('.new-task');\r\n    fieldInputs.forEach((field) => {\r\n      field.addEventListener('click', () => {\r\n        (0,_interactive_page_js__WEBPACK_IMPORTED_MODULE_1__.updateInput)(field, this.store);\r\n      });\r\n      field.addEventListener('blur', () => {\r\n        (0,_interactive_page_js__WEBPACK_IMPORTED_MODULE_1__.makeInputDefault)(field);\r\n      });\r\n      field.addEventListener('keydown', (e) => {\r\n        if (e.code === 'Enter') {\r\n          (0,_interactive_page_js__WEBPACK_IMPORTED_MODULE_1__.makeInputDefault)(field);\r\n        }\r\n      });\r\n    });\r\n  }\r\n\r\n  localStorageToWebpage() {\r\n    if (localStorage !== null) {\r\n      const store = JSON.parse(localStorage.getItem('ToDoList'));\r\n      store.forEach((task) => {\r\n        this.newTask(task.description, task.id);\r\n      });\r\n    }\r\n  }\r\n\r\n  addNewTask() {\r\n    const index = this.store.length < 1 ? 1 : this.store.length + 1;\r\n    const currTask = new _createTask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](addNewTaskInput.value, index);\r\n    this.store.push(currTask);\r\n    this.newTask(currTask.description, currTask.id);\r\n    addNewTaskInput.value = '';\r\n  }\r\n\r\n  submitNewTaskEntry() {\r\n    enterBtn.addEventListener('click', () => {\r\n      if (addNewTaskInput.value !== '') {\r\n        this.addNewTask();\r\n      }\r\n    });\r\n\r\n    addNewTaskInput.addEventListener('keydown', (e) => {\r\n      if (e.code === 'Enter') {\r\n        this.addNewTask();\r\n      }\r\n    });\r\n    this.clearCompletedTasks(clearAllBtn);\r\n    localStorage.setItem('ToDoList', JSON.stringify(this.store));\r\n    this.localStorageToWebpage();\r\n    // delete all tasks\r\n    (0,_interactive_page_js__WEBPACK_IMPORTED_MODULE_1__.deleteAllTasks)(refresh, taskContainer);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddRemoveTask);\r\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/add-remove.js?");

/***/ }),

/***/ "./src/modules/createTask.js":
/*!***********************************!*\
  !*** ./src/modules/createTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass NewTask {\r\n  constructor(description, index) {\r\n    this.description = description;\r\n    this.index = index;\r\n    this.id = Math.random().toString(36).substr(2, 7).replace(/[^a-z]/g, '');\r\n    this.completed = false;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTask);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/createTask.js?");

/***/ }),

/***/ "./src/modules/interactive-page.js":
/*!*****************************************!*\
  !*** ./src/modules/interactive-page.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteAllTasks\": () => (/* binding */ deleteAllTasks),\n/* harmony export */   \"makeInputDefault\": () => (/* binding */ makeInputDefault),\n/* harmony export */   \"markItemAsComplete\": () => (/* binding */ markItemAsComplete),\n/* harmony export */   \"updateInput\": () => (/* binding */ updateInput)\n/* harmony export */ });\nconst markItemAsComplete = (checkbox, array) => {\r\n  checkbox.forEach((box) => {\r\n    box.addEventListener('change', () => {\r\n      const result = array.filter(\r\n        (task) => box.nextElementSibling.id === task.id,\r\n      );\r\n      if (box.checked) {\r\n        box.nextElementSibling.classList.add('line');\r\n        array[result[0].index - 1].completed = true;\r\n      } else {\r\n        box.nextElementSibling.classList.remove('line');\r\n        array[result[0].index - 1].completed = false;\r\n      }\r\n      localStorage.setItem('ToDoList', JSON.stringify(array));\r\n    });\r\n  });\r\n};\r\n\r\nconst deleteAllTasks = (button, container) => {\r\n  button.addEventListener('click', () => {\r\n    container.innerHTML = '';\r\n    localStorage.clear();\r\n  });\r\n};\r\n\r\nconst updateInput = (field, array) => {\r\n  if (field.classList.contains('line')) {\r\n    field.readOnly = false;\r\n    field.classList.remove('line');\r\n    field.classList.add('active');\r\n  } else {\r\n    field.classList.add('active');\r\n    field.readOnly = false;\r\n  }\r\n\r\n  field.addEventListener('change', () => {\r\n    const result = array.filter(\r\n      (task) => field.id === task.id,\r\n    );\r\n    array[result[0].index - 1].description = field.value;\r\n    localStorage.setItem('ToDoList', JSON.stringify(array));\r\n  });\r\n};\r\n\r\nconst makeInputDefault = (field) => {\r\n  if (field.previousElementSibling.checked) {\r\n    field.classList.add('line');\r\n    field.classList.remove('active');\r\n    field.readOnly = true;\r\n  } else {\r\n    field.classList.remove('active');\r\n    field.readOnly = true;\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/interactive-page.js?");

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