/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./JS/Interactive_map.js":
/*!******************************************************!*\
  !*** D:/Development/GeoPortal/JS/Interactive_map.js ***!
  \******************************************************/
/*! exports provided: Interactive_map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Interactive_map\", function() { return Interactive_map; });\nlet Interactive_map =  function(){\r\n\t\"use strict\";\r\n\tlet body = document.querySelector(\"body\"),\r\n\t \tsvg_map = document.querySelector(\".svg_map\"),\r\n\t \tcursBlock =  document.getElementById(\"coords1\"),\r\n\t\tinteractive_map = document.querySelector(\".interactive_map\"),\r\n\t \timg = document.querySelector(\".sect_main_img2\");\r\n\r\n\tlet defineMatrix = function(){return getComputedStyle(svg_map,null).getPropertyValue(\"transform\").match(/-(\\d+\\.\\d+)|(\\d+\\.\\d+)|(\\d+)|(-\\d+)/g).map((el)=>+el)}; \r\n\tlet matrix, scale, delta, down, x1, y1, x2, y2, shiftX, shiftY;\t\r\n\t\r\n\t\r\n//---------------------------------------------------------------------------------------------------//\r\n//-----------------------------------------------SCALE-----------------------------------------------//\r\n//---------------------------------------------------------------------------------------------------//\r\n\tlet scaleX1, scaleY1, scaleX2, scaleY2;\r\n\tlet zooming = (evt)=>{\r\n\t\tcursBlock.textContent = \"+scale = \" + scale;//show scale\r\n\t\t\r\n\t\timg.setAttribute(\"style\", `transform: matrix(${scale}, ${matrix[1]}, ${matrix[2]}, ${scale}, ${matrix[4]}, ${matrix[5]})`);//change scale in img\r\n  \t \tsvg_map.style.transform = `matrix(${scale}, ${matrix[1]}, ${matrix[2]}, ${scale}, ${matrix[4]}, ${matrix[5]})`;//change scale in svg_map\r\n     \t\r\n    \tscaleX2 = evt.offsetX;//define x2 after change scale +\r\n    \tscaleY2 = evt.offsetY;//define y2 after change scale +\r\n\r\n    \tshiftX = matrix[4] + (scaleX2 - scaleX1)*scale;//define shift coord after zooming\r\n    \tshiftY = matrix[5] + (scaleY2 - scaleY1)*scale;//define shift coord after zooming\r\n    \t \t\r\n    \timg.setAttribute(\"style\", `transform: matrix(${scale}, ${matrix[1]}, ${matrix[2]}, ${scale}, ${shiftX}, ${shiftY})`);//shift coord back \r\n    \tsvg_map.style.transform = `matrix(${scale}, ${matrix[1]}, ${matrix[2]}, ${scale}, ${shiftX}, ${shiftY})`;//shift coord back \r\n\t};\r\n\r\n\tlet scaleFun = function(evt){\r\n\t\tevt.preventDefault();\r\n\t\tdelta = evt.deltaY || evt.detail || evt.wheelDelta;//scroll mouse wheel +/-\r\n    \tmatrix = defineMatrix();//define css attribute (transform:matrix) //it's a massive//\r\n\t\tscale = matrix[0];//define scale from matrix\r\n    \t\r\n    \tif(delta > 0 && scale < 5) {//mouse wheel +  \r\n    \t \tscale += 0.1;\r\n    \t \tzooming(evt);\r\n    \t}\r\n    \telse if(delta < 0 && scale > 0.5){//mouse wheel -\r\n    \t \tscale -= 0.1;\r\n    \t \tzooming(evt);\r\n    \t}\r\n\t};\r\n\r\n\tinteractive_map.addEventListener(\"mousewheel\", scaleFun);\r\n\r\n//---------------------------------------------------------------------------------------------------//\r\n//-----------------------------------------------SHIFT-----------------------------------------------//\r\n//---------------------------------------------------------------------------------------------------//\r\n\r\n\t// let shiftCoord = function(x1,y1,x2,y2){\r\n\t// \tif(x1>x2 && y1>y2) return [(x1-x2)*-1,(y1-y2)*-1];//shift left-top corner\r\n\t// \telse if(x1>x2 && y1<y2) return [(x1-x2)*-1,y2-y1];//shift left-down corner\r\n\t// \telse if(x1<x2 && y1<y2) return [x2-x1,y2-y1];//shift right-down corner\r\n\t// \telse if(x1<x2 && y1>y2) return [x2-x1,(y1-y2)*-1];//shift right-top corner\r\n\t// };\r\n\r\n\tlet mouseMoveFun = (evt)=>{\r\n\t\tscaleX1 = evt.offsetX;//define x1 before change scale +/-\r\n    \tscaleY1 = evt.offsetY;//define y1 before change scale +/-\r\n\t\tif(down){\r\n\t\t\twindow.drugger=false;\r\n\t\t\tmatrix = defineMatrix();\r\n\t\t\tx2 = evt.clientX;//second coord X2 (mouse move)\r\n\t\t\ty2 = evt.clientY;//second coord Y2 (mouse move)\r\n\t\t\t\r\n\t\t\tshiftX =matrix[4] + (x2 - x1);//X2 - X1\r\n\t\t\tshiftY = matrix[5] + (y2 - y1);//Y2 - Y1 \r\n\r\n\t\t\tsvg_map.style.transform = `matrix(${matrix[0]}, ${matrix[1]}, ${matrix[2]}, ${matrix[3]}, ${shiftX}, ${shiftY})`;//change position svg\r\n\t\t\timg.setAttribute(\"style\", `transform: matrix(${matrix[0]}, ${matrix[1]}, ${matrix[2]}, ${matrix[3]}, ${shiftX}, ${shiftY})`);//change position img\r\n\t\t\t\r\n\t\t\t// matrix = defineMatrix();\r\n\r\n\t\t\t// cursBlock.textContent = `\r\n\t\t\t// \tX1:  ${x1}\r\n\t\t\t// \tY1: ${y1}\r\n\t\t\t// \tX2: ${x2}\r\n\t\t\t// \tY2: ${y2}\r\n\t\t\t// \tshiftX: ${shiftX}\r\n\t\t\t// \tshiftY: ${shiftY}\r\n\t\t\t// `;\r\n\r\n\t\t\tx1 = x2;//after shift X1 became X2 \r\n\t\t\ty1 = y2;//after shift Y1 became Y2\t\r\n\t\t}\r\n\t};\r\n\r\n\tlet mouseUpFun = (evt)=>{\r\n\t\tdown = false;//block mouse move eventlistener\r\n\t};\r\n\r\n\tlet mouseDownFun = (evt)=>{\r\n\t//\talert(\"map\")\r\n\t\tdown = true;//was a mouse down \r\n\t\twindow.drugger = true;\r\n\t\tx1 = evt.clientX;//first coord X1 (mouse down)\r\n\t\ty1 = evt.clientY;//first coord Y1 (mouse down)\r\n\t\t\r\n\t\tcursBlock.textContent = \"x1: \"+ x1 + \" y1: \"+ y1;\t  \t\r\n\t};\r\n\r\n\t//events: down -> move -> up -> click\r\n\tinteractive_map.addEventListener(\"mousedown\", mouseDownFun);\r\n\tinteractive_map.addEventListener(\"mousemove\", mouseMoveFun);\r\n\tbody.addEventListener(\"mouseup\", mouseUpFun);\r\n\t//interactive_map.addEventListener(\"click\", (evt)=>drugger?cursBlock.textContent = \"drugger\":cursBlock.textContent = \"click\");\r\n};\r\n\n\n//# sourceURL=webpack:///D:/Development/GeoPortal/JS/Interactive_map.js?");

/***/ }),

/***/ "./JS/Nav_bar.js":
/*!**********************************************!*\
  !*** D:/Development/GeoPortal/JS/Nav_bar.js ***!
  \**********************************************/
/*! exports provided: navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navigation\", function() { return navigation; });\nlet navigation =  function(){\r\n\t\r\n\tlet navigation_list = document.querySelector(\".navigation_list\"),\t\r\n\t \tfirstNavElement = navigation_list.firstElementChild;\r\n\t\r\n\tfirstNavElement.classList.add(\"navigation_focus\");\r\n\r\n\t\tnavigation_list.addEventListener(\"click\", function(evt){\r\n\t\t\tfirstNavElement = evt.target.closest(\"li\");\r\n\t\t});\r\n\t\tnavigation_list.addEventListener(\"mouseover\",(evt)=>{\r\n\r\n\t\t\tfirstNavElement.classList.remove(\"navigation_focus\");\r\n\t\t});\r\n\t\t\r\n\t\tnavigation_list.addEventListener(\"mouseout\",(evt)=>{\r\n\t\t\tfirstNavElement.classList.add(\"navigation_focus\");\r\n\t\t\r\n\t\t});\r\n\t\t\r\n\t\t\r\n};\n\n//# sourceURL=webpack:///D:/Development/GeoPortal/JS/Nav_bar.js?");

/***/ }),

/***/ "./JS/Open_form_with_region.js":
/*!************************************************************!*\
  !*** D:/Development/GeoPortal/JS/Open_form_with_region.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (81:22)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|       }\\n|     }\\n> \\tremove_tabindex_func = () => {open_form.forEach((e) => { e.innerHTML = e.innerHTML.replace(/tabindex=\\\"0\\\"/g,\\\"tabindex=\\\\\\\"-1\\\\\\\"\\\");})};\\n| \\tadd_tabindex_func = () => {open_form.forEach((e) => { e.innerHTML = e.innerHTML.replace(/tabindex=\\\"-1\\\"/g,\\\"tabindex=\\\\\\\"0\\\\\\\"\\\");})};\\n| \");\n\n//# sourceURL=webpack:///D:/Development/GeoPortal/JS/Open_form_with_region.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_Development_GeoPortal_JS_Interactive_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! D:/Development/GeoPortal/JS/Interactive_map.js */ \"./JS/Interactive_map.js\");\n/* harmony import */ var D_Development_GeoPortal_JS_Nav_bar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! D:/Development/GeoPortal/JS/Nav_bar.js */ \"./JS/Nav_bar.js\");\n/* harmony import */ var D_Development_GeoPortal_JS_Open_form_with_region_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! D:/Development/GeoPortal/JS/Open_form_with_region.js */ \"./JS/Open_form_with_region.js\");\n/* harmony import */ var D_Development_GeoPortal_JS_Open_form_with_region_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_Development_GeoPortal_JS_Open_form_with_region_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\nObject(D_Development_GeoPortal_JS_Interactive_map_js__WEBPACK_IMPORTED_MODULE_0__[\"Interactive_map\"])();\r\nObject(D_Development_GeoPortal_JS_Nav_bar_js__WEBPACK_IMPORTED_MODULE_1__[\"navigation\"])();\r\nObject(D_Development_GeoPortal_JS_Open_form_with_region_js__WEBPACK_IMPORTED_MODULE_2__[\"Open_form_with_region\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });