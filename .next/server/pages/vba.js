module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/vba.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/media.js":
/*!*****************************!*\
  !*** ./components/media.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/alvisonhunter/Documents/NEXT JS/misterExcelNicaragua/components/media.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst getVideoList = data => {\n  let arrVBA = data;\n  let embebURL = \"https://www.youtube.com/embed/\";\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, Object.keys(arrVBA).map((key, index) => {\n    console.log(arrVBA[key]);\n    return __jsx(\"div\", {\n      key: index,\n      className: \"col-6\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 11\n      }\n    }, __jsx(\"iframe\", {\n      height: \"315\",\n      width: \"560\",\n      src: embebURL + arrVBA[key],\n      frameBorder: \"0\",\n      allow: \"accelerometer; encrypted-media; gyroscope; picture-in-picture\",\n      allowFullScreen: true,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 13\n      }\n    }));\n  }));\n};\n\nclass Media extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {};\n  }\n\n  render() {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 7\n      }\n    }, __jsx(\"div\", {\n      className: \"row\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }\n    }, getVideoList(this.props.data)));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Media);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZGlhLmpzPzU2N2MiXSwibmFtZXMiOlsiZ2V0VmlkZW9MaXN0IiwiZGF0YSIsImFyclZCQSIsImVtYmViVVJMIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImluZGV4IiwiY29uc29sZSIsImxvZyIsIk1lZGlhIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsWUFBWSxHQUFJQyxJQUFELElBQVU7QUFDN0IsTUFBSUMsTUFBTSxHQUFHRCxJQUFiO0FBQ0EsTUFBSUUsUUFBUSxHQUFHLGdDQUFmO0FBQ0EsU0FDRSxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxNQUFaLEVBQW9CSSxHQUFwQixDQUF3QixDQUFDQyxHQUFELEVBQU1DLEtBQU4sS0FBZ0I7QUFDdkNDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUixNQUFNLENBQUNLLEdBQUQsQ0FBbEI7QUFDQSxXQUNFO0FBQUssU0FBRyxFQUFFQyxLQUFWO0FBQWlCLGVBQVMsRUFBQyxPQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFDRSxZQUFNLEVBQUMsS0FEVDtBQUVFLFdBQUssRUFBQyxLQUZSO0FBR0UsU0FBRyxFQUFFTCxRQUFRLEdBQUdELE1BQU0sQ0FBQ0ssR0FBRCxDQUh4QjtBQUlFLGlCQUFXLEVBQUMsR0FKZDtBQUtFLFdBQUssRUFBQywrREFMUjtBQU1FLHFCQUFlLE1BTmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGO0FBWUQsR0FkQSxDQURILENBREY7QUFtQkQsQ0F0QkQ7O0FBd0JBLE1BQU1JLEtBQU4sU0FBb0JDLDRDQUFLLENBQUNDLFNBQTFCLENBQW9DO0FBQ2xDQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDRDs7QUFFREMsUUFBTSxHQUFHO0FBQ1AsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXNCakIsWUFBWSxDQUFDLEtBQUtlLEtBQUwsQ0FBV2QsSUFBWixDQUFsQyxDQURGLENBREY7QUFLRDs7QUFaaUM7O0FBZXJCVSxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVkaWEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGdldFZpZGVvTGlzdCA9IChkYXRhKSA9PiB7XG4gIGxldCBhcnJWQkEgPSBkYXRhO1xuICBsZXQgZW1iZWJVUkwgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1wiO1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIHtPYmplY3Qua2V5cyhhcnJWQkEpLm1hcCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhhcnJWQkFba2V5XSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjb2wtNlwiPlxuICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzMTVcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjU2MFwiXG4gICAgICAgICAgICAgIHNyYz17ZW1iZWJVUkwgKyBhcnJWQkFba2V5XX1cbiAgICAgICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcbiAgICAgICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCJcbiAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXG4gICAgICAgICAgICA+PC9pZnJhbWU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuY2xhc3MgTWVkaWEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+e2dldFZpZGVvTGlzdCh0aGlzLnByb3BzLmRhdGEpfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZWRpYTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/media.js\n");

/***/ }),

/***/ "./data/shared.js":
/*!************************!*\
  !*** ./data/shared.js ***!
  \************************/
/*! exports provided: cardInfo, arrFormula, arrVBA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cardInfo\", function() { return cardInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"arrFormula\", function() { return arrFormula; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"arrVBA\", function() { return arrVBA; });\nconst cardInfo = {\n  name: \"Alvison Hunter\",\n  title: \"Welcome to Mister Excel Nicaragua!\",\n  imgsrc: \"/ahunter_rounded.png\",\n  imgalt: \"Alvison Hunter Arnuero\",\n  strbody: \"Feel free to contact me to get more information.\",\n  btncaption: \"Contact me\"\n};\nconst arrFormula = {\n  1: \"AsgDfoLF3WU\",\n  2: \"znxADxfN9-Y\",\n  3: \"eANd6imx6fU\",\n  4: \"MkNFJ1xXuuY\",\n  5: \"t6aZNqjmY6M\",\n  6: \"PzEpLnFsyls\",\n  7: \"sCTDghCT-2s\",\n  8: \"_VbuZkVwWNM\",\n  9: \"iZrTjlOvqvM\",\n  10: \"7NXwaKtSnDw\",\n  11: \"dSs3UbPr_jo\",\n  12: \"tNgQzVN_xmo\",\n  13: \"3PvYMHK9iM8\",\n  14: \"O2wQNtVudlU\"\n};\nconst arrVBA = {\n  1: \"4eVTKxNr30M\",\n  2: \"caAETZyUjz0\",\n  3: \"LRgTY1N_Q4s\",\n  4: \"4eVTKxNr30M\"\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhL3NoYXJlZC5qcz9lMTIwIl0sIm5hbWVzIjpbImNhcmRJbmZvIiwibmFtZSIsInRpdGxlIiwiaW1nc3JjIiwiaW1nYWx0Iiwic3RyYm9keSIsImJ0bmNhcHRpb24iLCJhcnJGb3JtdWxhIiwiYXJyVkJBIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1BLFFBQVEsR0FBRztBQUN0QkMsTUFBSSxFQUFFLGdCQURnQjtBQUV0QkMsT0FBSyxFQUFFLG9DQUZlO0FBR3RCQyxRQUFNLEVBQUUsc0JBSGM7QUFJdEJDLFFBQU0sRUFBRSx3QkFKYztBQUt0QkMsU0FBTyxFQUFFLGtEQUxhO0FBTXRCQyxZQUFVLEVBQUU7QUFOVSxDQUFqQjtBQVNBLE1BQU1DLFVBQVUsR0FBRztBQUN4QixLQUFHLGFBRHFCO0FBRXhCLEtBQUcsYUFGcUI7QUFHeEIsS0FBRyxhQUhxQjtBQUl4QixLQUFHLGFBSnFCO0FBS3hCLEtBQUcsYUFMcUI7QUFNeEIsS0FBRyxhQU5xQjtBQU94QixLQUFHLGFBUHFCO0FBUXhCLEtBQUcsYUFScUI7QUFTeEIsS0FBRyxhQVRxQjtBQVV4QixNQUFJLGFBVm9CO0FBV3hCLE1BQUksYUFYb0I7QUFZeEIsTUFBSSxhQVpvQjtBQWF4QixNQUFJLGFBYm9CO0FBY3hCLE1BQUk7QUFkb0IsQ0FBbkI7QUFpQkEsTUFBTUMsTUFBTSxHQUFHO0FBQ3BCLEtBQUcsYUFEaUI7QUFFcEIsS0FBRyxhQUZpQjtBQUdwQixLQUFHLGFBSGlCO0FBSXBCLEtBQUc7QUFKaUIsQ0FBZiIsImZpbGUiOiIuL2RhdGEvc2hhcmVkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNhcmRJbmZvID0ge1xuICBuYW1lOiBcIkFsdmlzb24gSHVudGVyXCIsXG4gIHRpdGxlOiBcIldlbGNvbWUgdG8gTWlzdGVyIEV4Y2VsIE5pY2FyYWd1YSFcIixcbiAgaW1nc3JjOiBcIi9haHVudGVyX3JvdW5kZWQucG5nXCIsXG4gIGltZ2FsdDogXCJBbHZpc29uIEh1bnRlciBBcm51ZXJvXCIsXG4gIHN0cmJvZHk6IFwiRmVlbCBmcmVlIHRvIGNvbnRhY3QgbWUgdG8gZ2V0IG1vcmUgaW5mb3JtYXRpb24uXCIsXG4gIGJ0bmNhcHRpb246IFwiQ29udGFjdCBtZVwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGFyckZvcm11bGEgPSB7XG4gIDE6IFwiQXNnRGZvTEYzV1VcIixcbiAgMjogXCJ6bnhBRHhmTjktWVwiLFxuICAzOiBcImVBTmQ2aW14NmZVXCIsXG4gIDQ6IFwiTWtORkoxeFh1dVlcIixcbiAgNTogXCJ0NmFaTnFqbVk2TVwiLFxuICA2OiBcIlB6RXBMbkZzeWxzXCIsXG4gIDc6IFwic0NURGdoQ1QtMnNcIixcbiAgODogXCJfVmJ1WmtWd1dOTVwiLFxuICA5OiBcImlaclRqbE92cXZNXCIsXG4gIDEwOiBcIjdOWHdhS3RTbkR3XCIsXG4gIDExOiBcImRTczNVYlByX2pvXCIsXG4gIDEyOiBcInROZ1F6Vk5feG1vXCIsXG4gIDEzOiBcIjNQdllNSEs5aU04XCIsXG4gIDE0OiBcIk8yd1FOdFZ1ZGxVXCIsXG59O1xuXG5leHBvcnQgY29uc3QgYXJyVkJBID0ge1xuICAxOiBcIjRlVlRLeE5yMzBNXCIsXG4gIDI6IFwiY2FBRVRaeVVqejBcIixcbiAgMzogXCJMUmdUWTFOX1E0c1wiLFxuICA0OiBcIjRlVlRLeE5yMzBNXCIsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./data/shared.js\n");

/***/ }),

/***/ "./pages/vba.js":
/*!**********************!*\
  !*** ./pages/vba.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/media */ \"./components/media.js\");\n/* harmony import */ var _data_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/shared */ \"./data/shared.js\");\nvar _jsxFileName = \"/Users/alvisonhunter/Documents/NEXT JS/misterExcelNicaragua/pages/vba.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst VBA = () => __jsx(\"div\", {\n  className: \"container\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 3\n  }\n}, __jsx(\"h3\", {\n  className: \"my-3 header-text-color text-center text-uppercase\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }\n}, \"Visual Basic for Applications Tutorials\"), __jsx(_components_media__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  data: _data_shared__WEBPACK_IMPORTED_MODULE_2__[\"arrVBA\"],\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (VBA);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy92YmEuanM/YTkzNyJdLCJuYW1lcyI6WyJWQkEiLCJhcnJWQkEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxHQUFHLEdBQUcsTUFDVjtBQUFLLFdBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFJLFdBQVMsRUFBQyxtREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQURGLEVBSUUsTUFBQyx5REFBRDtBQUFPLE1BQUksRUFBRUMsbURBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUpGLENBREY7O0FBU2VELGtFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdmJhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lZGlhIGZyb20gXCIuLi9jb21wb25lbnRzL21lZGlhXCI7XG5pbXBvcnQgeyBhcnJWQkEgfSBmcm9tIFwiLi4vZGF0YS9zaGFyZWRcIjtcblxuY29uc3QgVkJBID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgIDxoMyBjbGFzc05hbWU9XCJteS0zIGhlYWRlci10ZXh0LWNvbG9yIHRleHQtY2VudGVyIHRleHQtdXBwZXJjYXNlXCI+XG4gICAgICBWaXN1YWwgQmFzaWMgZm9yIEFwcGxpY2F0aW9ucyBUdXRvcmlhbHNcbiAgICA8L2gzPlxuICAgIDxNZWRpYSBkYXRhPXthcnJWQkF9IC8+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVkJBO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/vba.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });