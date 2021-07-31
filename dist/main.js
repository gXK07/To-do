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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Icons/Cross.png */ \"./src/Icons/Cross.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Icons/Project.png */ \"./src/Icons/Project.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./Icons/Logo.png */ \"./src/Icons/Logo.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./Icons/delete.png */ \"./src/Icons/delete.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"Body{\\n    margin: 0px;\\n    font-family: Arial, Helvetica, sans-serif;\\n}\\n\\nheader{\\n    height: 50px;\\n    width: 100%;\\n    background-color: #d84c3f;\\n    border-bottom: solid rgb(207, 207, 207) 0.1px;\\n}\\n#Container{\\n    position: absolute;\\n    height: 90%;\\n    width: 100%;\\n}\\n\\n#newTask{\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    position: absolute;\\n    right: 60px;\\n}\\n#newPro{\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    position: absolute;\\n    right: 15px;\\n \\n}\\n#logo{\\n    height: 30px;\\n    width: 40px;\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n    border: none;\\n    margin: 8px;\\n    margin-left : 45px\\n}\\n\\n#delete{\\n    height: 25px;\\n    width: 25px;\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n    border: none;\\n    margin: 5px;\\n}\\n.DueDate{\\n    color: red;\\n}\\n#delete:hover{\\n    cursor: pointer;\\n    transform: scale(1.1);\\n}\\n.topbutton{\\n    height: 25px;\\n    width: 25px;\\n    border: none;\\n    margin: 10px;\\n}\\n.topbutton:hover{\\n    cursor: pointer;\\n    transform: scale(1.1);\\n}\\n\\n#ProjectTxt{\\n    margin-top: 40px;\\n    height : 40px;\\n    font-weight: bold;\\n    font-size: 16px;\\n    margin-left: 43px;\\n    width: 250px;\\n    padding-top: 10px;\\n}\\n\\n#ProjectList{\\n    width: 300px;\\n    border-bottom : solid rgb(207, 207, 207) 0.1px;\\n    grid-area: \\\"a\\\";\\n    background-color: #fafafa;\\n}\\n\\n#TaskList{\\n    width: 700px;\\n    margin: 60px 0px 0px 0px;\\n    border-bottom : solid rgb(207, 207, 207) 0.1px;\\n    grid-area: \\\"b\\\";\\n}\\n\\nform{\\n    background-color: white;\\n    height: 200px;\\n    width: 400px;\\n    border : solid rgb(207, 207, 207) 0.1px;\\n    position: absolute;\\n    margin: auto;\\n    left: 0;\\n    right: 0;\\n    top: 0;\\n    bottom: 0;\\n    box-shadow: 0px 0px 30px 0px rgba(92, 92, 92, 0.568);\\n    border-radius: 12px;\\n    padding : 15px;\\n    \\n}\\n.formfield{\\n    width: 390px;\\n    height: 30px;\\n    margin: auto;\\n    border : none\\n}\\n.formfield:focus{\\n    outline: none;\\n\\n}\\n#central{\\n    height: 100%;\\n    display: grid;\\n    grid-template-areas: \\\"a b b\\\";\\n}\\n#taskField{\\n    height: 50px;\\n    width: 700px;\\n    border-bottom: solid #cfcfcf 0.1px;\\n    display: block;\\n}\\n.projectField{\\n    margin: 3px;\\n    font-size: 16px;\\n    color: rgba(54, 54, 54, 0.815);\\n    margin-left: 43px;\\n    height: 30px;\\n    padding-top: 10px;\\n    padding-left: 5px;\\n    width: 250px;\\n    border-radius: 6px;\\n}\\n.projectField:hover{\\n    cursor: pointer;\\n    background-color: #ebebeb;\\n}\\n.onclick{\\n    background-color: #ebebeb;\\n}\\n#submit{\\n    background-color: #d8564a;\\n    width: 100px;\\n    margin: 5px;\\n    border-radius: 6px;\\n}\\n#cancel{\\n    background: none;\\n    border : solid rgba(128, 128, 128, 0.479) 0.1px;\\n    width: 100px;\\n    margin: 5px;\\n    border-radius: 6px;\\n}\\n#submit:hover{\\n    cursor: pointer;\\n}\\n#cancel:hover{\\n    cursor: pointer;\\n}\\n\\n#Title{\\n    height: 60px;\\n}\\n#Description{\\n    height: 15px;\\n}\\n\\nfooter{\\n    padding-top: 10px;\\n    color: #fdfdfd;\\n    text-align : center;\\n    background-color: #d84c3f;\\n    height: 30px;\\n    width: 100%;\\n    position : absolute;\\n    bottom: 0;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://to-do/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://to-do/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DisplayForm\": () => (/* binding */ DisplayForm),\n/* harmony export */   \"Display\": () => (/* binding */ Display)\n/* harmony export */ });\n\nconst DisplayForm = {\n    isClicked : [document.createElement(\"button\"),document.createElement(\"button\")],\n    task(dataFormTask){\n        //creation du formulaire\n        let form = document.createElement(\"form\");\n        Container.appendChild(form);\n        const formFields = new Array(6);\n        for(let i=0; i<6; i++){\n            formFields[i] = document.createElement(\"input\");\n            form.appendChild(formFields[i]);\n            formFields[i].classList.add(\"formfield\");\n        }\n        formFields[0].setAttribute(\"id\", \"Title\");\n        formFields[0].setAttribute(\"placeholder\", \"Title\");\n        formFields[1].setAttribute(\"id\", \"Description\");\n        formFields[1].setAttribute(\"placeholder\", \"Description\");\n        formFields[2].setAttribute(\"id\", \"Project\");\n        formFields[2].setAttribute(\"placeholder\", \"Project\");\n        formFields[3].setAttribute(\"class\", \"DueDate\");\n        formFields[3].setAttribute(\"type\", \"Date\");\n        formFields[4].setAttribute(\"type\", \"button\");\n        formFields[4].setAttribute(\"id\", \"submit\");\n        formFields[5].setAttribute(\"type\", \"button\");\n        formFields[5].setAttribute(\"id\", \"cancel\");\n\n\n        //actions à faire quand on click sur \"submit\"\n        formFields[4].onclick = () => {\n            // if(dataFormTask[0] === undefined){\n            //     alert(\"choose a title\");\n            // }\n            // else{\n            for(let i=0; i< 5; i++){\n                dataFormTask[i] = formFields[i].value\n            }\n            \n            //déclanche la suite de \"newtask\" dans le fichier \"Logic.js\"\n            this.isClicked[0].click();\n            //deleteForm()\n            for(let i=0; i<6; i++){\n                form.removeChild(formFields[i])\n                formFields[i] = null;\n            }\n            Container.removeChild(form);\n            form = null;\n        // }\n            \n        }\n\n        formFields[5].onclick = () =>{\n            for(let i=0; i<6; i++){\n                form.removeChild(formFields[i])\n                formFields[i] = null;\n            }\n            Container.removeChild(form);\n            form = null;\n        }\n    \n    },\n    project(dataFormProject){\n        let form = document.createElement(\"form\");\n        Container.appendChild(form);\n        // creation form du projet \n        const formFields = new Array(4);\n        for(let i=0; i<4; i++){\n            formFields[i] = document.createElement(\"input\");\n            form.appendChild(formFields[i]);\n            formFields[i].classList.add(\"formfield\");\n        }\n        formFields[0].setAttribute(\"id\", \"Title\");\n        formFields[0].setAttribute(\"placeholder\", \"Title\");\n        formFields[1].setAttribute(\"id\", \"Description\");\n        formFields[1].setAttribute(\"placeholder\", \"Description\");\n        formFields[2].setAttribute(\"type\", \"button\");\n        formFields[2].setAttribute(\"id\", \"submit\");\n        formFields[3].setAttribute(\"type\", \"button\");\n        formFields[3].setAttribute(\"id\", \"cancel\");\n\n        formFields[2].onclick = () => {\n            // chopper le id=\"projectfield\" et regarder les element a l'intéieur pour la boucle\n            // let use = false;\n            // for(let i=0; i<; i++){\n            //     if(dataFormProject)\n            // }\n            for(let i=0; i< 2; i++){\n                dataFormProject[i] = formFields[i].value\n            }\n            this.isClicked[1].click(); // c'est ca qui déclanche la boucle\n            for(let i=0; i<4; i++){\n                form.removeChild(formFields[i])\n                formFields[i] = null;\n            }\n            Container.removeChild(form);\n            form = null;\n        }\n\n        formFields[3].onclick = () =>{\n            for(let i=0; i<4; i++){\n                form.removeChild(formFields[i])\n                formFields[i] = null;\n            }\n            Container.removeChild(form);\n            form = null;\n        }\n    }\n}\nconst Display = {\n    task(Task){\n        const TaskList = document.getElementById(\"TaskList\");\n        const taskField = document.createElement(\"div\");\n        taskField.setAttribute(\"id\", \"taskField\");\n        TaskList.appendChild(taskField);\n        let fieldT = new Array(4);\n        for(let i=0; i<3; i++){\n            fieldT[i] = document.createElement(\"div\");\n            taskField.appendChild(fieldT[i])\n            fieldT[i].classList.add(\"fieldT\");\n        }\n        fieldT[0].textContent = Task.Title;\n        fieldT[1].textContent = Task.Description;\n        fieldT[2].textContent = Task.DueDate;\n        fieldT[2].setAttribute(\"class\", \"DueDate\");\n    \n        fieldT[3] = document.createElement(\"button\");\n        fieldT[3].setAttribute(\"id\", \"delete\");\n        taskField.appendChild(fieldT[3]);\n        // deleteTask\n        fieldT[3].onclick = () => {\n            console.log(\"deleted !\")\n            const Project = Task.Project\n            const index = Project.taskArray.indexOf(Task);\n            Project.taskArray.splice(index, 1);\n            this.show(Project);\n            \n\n        }\n    },\n    addProject(Project) {\n            const projectList = document.getElementById(\"ProjectList\");\n            const projectField = document.createElement(\"div\");\n            projectField.classList.add(\"projectField\");\n            projectList.appendChild(projectField);\n            projectField.setAttribute(\"id\", Project.Title);\n            projectField.textContent = Project.Title;\n            projectField.addEventListener(\"click\", () => {this.show(Project)})\n        },\n        // affiche les taches d'un projet dans la zone de droite\n    show(project){  \n\n        const TaskList = document.getElementById(\"TaskList\");\n        while (TaskList.firstChild) {\n            TaskList.removeChild(TaskList.lastChild);\n          }\n        for(let i=0; i<project.taskArray.length; i++){\n            this.task(project.taskArray[i]);\n        }\n        // met le curseur sur le project quand on affiche ses taches\n        const allFileds = document.getElementsByClassName(\"projectField\")\n        for(let i=0; i<allFileds.length; i++){\n        allFileds[i].classList.remove(\"onclick\");\n        }\n        const thisField = document.getElementById(project.Title);\n        thisField.classList.add(\"onclick\")\n    }\n    }\n\n\n\n//# sourceURL=webpack://to-do/./src/DOM.js?");

/***/ }),

/***/ "./src/Icons/Cross.png":
/*!*****************************!*\
  !*** ./src/Icons/Cross.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9240a17ad11301f4325b.png\";\n\n//# sourceURL=webpack://to-do/./src/Icons/Cross.png?");

/***/ }),

/***/ "./src/Icons/Logo.png":
/*!****************************!*\
  !*** ./src/Icons/Logo.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"78a3ceec62ce8b78bf5c.png\";\n\n//# sourceURL=webpack://to-do/./src/Icons/Logo.png?");

/***/ }),

/***/ "./src/Icons/Project.png":
/*!*******************************!*\
  !*** ./src/Icons/Project.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5aad10a840bbb7f4dfc4.png\";\n\n//# sourceURL=webpack://to-do/./src/Icons/Project.png?");

/***/ }),

/***/ "./src/Icons/delete.png":
/*!******************************!*\
  !*** ./src/Icons/delete.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9ed72fa1c7b34ae6eb66.png\";\n\n//# sourceURL=webpack://to-do/./src/Icons/delete.png?");

/***/ }),

/***/ "./src/Logic.js":
/*!**********************!*\
  !*** ./src/Logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newTask\": () => (/* binding */ newTask),\n/* harmony export */   \"newProject\": () => (/* binding */ newProject)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n\nlet comptorTask = 0 ;\nlet cP = 1 ;\nlet arrayDataFormT = new Array;\nlet dataFormProject = new Array;\n\nconst factoryTask = (array) => {\n    // créer l'objet task\n    const Title = array[0];\n    const Description = array[1];\n    let Project = ''\n    for(let i =0; i<Projects.list.length; i++){\n        if(array[2] === Projects.list[i].Title){\n            Project = Projects.list[i];\n        }\n    }\n    const DueDate = array[3];\n    console.log(DueDate);\n    return {Title, Description, DueDate, Project}\n}\n\nconst factoryProject = (array) => {\n    console.log(\"je me suis déclanché avec cette array:\", array);\n    let taskArray = [];\n    const Title = array[0];\n    const Description = array[1];\n    return {Title, Description, taskArray}\n}\n\nconst newTask = () => {\n    comptorTask++;\n    let dataFormTask = new Array(5)\n    _DOM__WEBPACK_IMPORTED_MODULE_0__.DisplayForm.task(dataFormTask);\n    _DOM__WEBPACK_IMPORTED_MODULE_0__.DisplayForm.isClicked[0].addEventListener(\"click\", () => {\n    let objTask = factoryTask(dataFormTask);\n    objTask.Project.taskArray.push(objTask);\n    _DOM__WEBPACK_IMPORTED_MODULE_0__.Display.show(objTask.Project);\n    dataFormTask = [];\n    })\n    }\n\nconst newProject = () => {\n    dataFormProject[cP] = new Array(2)\n    _DOM__WEBPACK_IMPORTED_MODULE_0__.DisplayForm.project(dataFormProject[cP]);\n    _DOM__WEBPACK_IMPORTED_MODULE_0__.DisplayForm.isClicked[1].addEventListener(\"click\", () => {\n    console.log(cP);\n    console.log(dataFormProject);\n    Projects.list[cP] = factoryProject(dataFormProject[cP]);\n    _DOM__WEBPACK_IMPORTED_MODULE_0__.Display.addProject(Projects.list[cP]);\n    cP++;\n    })\n}\n\nconst P = {\n    list : [factoryProject([\"Project1\", \"Project de base\"])]\n    }\n    \nlocalStorage.setItem(\"Projects\", JSON.stringify(P));\nconst Projects = JSON.parse(localStorage.getItem(\"Projects\"));\nconsole.log(Projects);\n\nfor (let i=0; i<Projects.list.length; i++){\n_DOM__WEBPACK_IMPORTED_MODULE_0__.Display.addProject(Projects.list[i]);\n}\n\n\n\n\n//# sourceURL=webpack://to-do/./src/Logic.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _Logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logic */ \"./src/Logic.js\");\n\n\n// import {Cross, Project} from \"./Icons\";\nconst task = document.getElementById(\"newTask\");\nconst proj = document.getElementById(\"newPro\");\n\ntask.onclick = _Logic__WEBPACK_IMPORTED_MODULE_1__.newTask;\nproj.onclick = _Logic__WEBPACK_IMPORTED_MODULE_1__.newProject;\n\n//# sourceURL=webpack://to-do/./src/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;