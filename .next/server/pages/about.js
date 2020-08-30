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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/alvisonhunter/Documents/NEXT JS/misterExcelNicaragua/pages/about.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst About = () => __jsx(\"div\", {\n  className: \"container\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 2,\n    columnNumber: 3\n  }\n}, __jsx(\"h3\", {\n  className: \"my-4 header-text-color text-center text-uppercase\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }\n}, \"Why Mister Excel Nicaragua?\"), __jsx(\"div\", {\n  className: \"row\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }\n}, __jsx(\"div\", {\n  className: \"col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-4\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 7\n  }\n}, __jsx(\"img\", {\n  className: \"card-img-top mx-auto\",\n  src: \"/misterExcel.png\",\n  alt: \"Alvison Hunter\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }\n})), __jsx(\"div\", {\n  className: \"col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 7\n  }\n}, __jsx(\"p\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 9\n  }\n}, \"I have always wanted to learn Microsoft Excel and found out that most people were afraid of either learning or teaching if they already know about it. They often tend to mention that it was a difficult tool to use and understand, and in some cases, they dare to believe it was mostly for code eaters.\"), __jsx(\"p\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 9\n  }\n}, \"From that point, I started using this tool, experimenting with its options, all of the buttons on the ribbons, the variety of different tools on it, and I happened to like it. From that time, I started using the Visual Basic editor that comes with Office Suite, and, voila, I am now a fan of this and many other Microsoft products!\"), __jsx(\"p\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }\n}, \"I want to be able to help others learn about this tool, to use it, to enjoy working with it. It is now my duty to provide you guys with as many tips and tricks as possible to feel that I am being part of a change in the concept of sharing knowledge to others without any particular interest order than the simple fact of helping people: I now become Mister Excel Nicaragua, and I am willing to sacrifice time and effort to see others succeed in the learning path of this beautiful and very useful tool created by Microsoft Corporation\"), __jsx(\"p\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 9\n  }\n}, \"Buckle up, fellows, the adventure is about to begin, I\\u2019m ready to start, how about you, pal?\"))));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcz8yNmVjIl0sIm5hbWVzIjpbIkFib3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTUEsS0FBSyxHQUFHLE1BQ1o7QUFBSyxXQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSSxXQUFTLEVBQUMsbURBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERixFQUlFO0FBQUssV0FBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLG1EQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUNFLFdBQVMsRUFBQyxzQkFEWjtBQUVFLEtBQUcsRUFBQyxrQkFGTjtBQUdFLEtBQUcsRUFBQyxnQkFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsQ0FERixFQVFFO0FBQUssV0FBUyxFQUFDLDhDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtUQURGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpVkFSRixFQWVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNGhCQWZGLEVBeUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUdBekJGLENBUkYsQ0FKRixDQURGOztBQStDZUEsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hYm91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFib3V0ID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgIDxoMyBjbGFzc05hbWU9XCJteS00IGhlYWRlci10ZXh0LWNvbG9yIHRleHQtY2VudGVyIHRleHQtdXBwZXJjYXNlXCI+XG4gICAgICBXaHkgTWlzdGVyIEV4Y2VsIE5pY2FyYWd1YT9cbiAgICA8L2gzPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTEyIGNvbC1sZy02IGNvbC14bC02IG1iLTRcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcCBteC1hdXRvXCJcbiAgICAgICAgICBzcmM9XCIvbWlzdGVyRXhjZWwucG5nXCJcbiAgICAgICAgICBhbHQ9XCJBbHZpc29uIEh1bnRlclwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLTYgY29sLXhsLTZcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgSSBoYXZlIGFsd2F5cyB3YW50ZWQgdG8gbGVhcm4gTWljcm9zb2Z0IEV4Y2VsIGFuZCBmb3VuZCBvdXQgdGhhdCBtb3N0XG4gICAgICAgICAgcGVvcGxlIHdlcmUgYWZyYWlkIG9mIGVpdGhlciBsZWFybmluZyBvciB0ZWFjaGluZyBpZiB0aGV5IGFscmVhZHkga25vd1xuICAgICAgICAgIGFib3V0IGl0LiBUaGV5IG9mdGVuIHRlbmQgdG8gbWVudGlvbiB0aGF0IGl0IHdhcyBhIGRpZmZpY3VsdCB0b29sIHRvXG4gICAgICAgICAgdXNlIGFuZCB1bmRlcnN0YW5kLCBhbmQgaW4gc29tZSBjYXNlcywgdGhleSBkYXJlIHRvIGJlbGlldmUgaXQgd2FzXG4gICAgICAgICAgbW9zdGx5IGZvciBjb2RlIGVhdGVycy5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBGcm9tIHRoYXQgcG9pbnQsIEkgc3RhcnRlZCB1c2luZyB0aGlzIHRvb2wsIGV4cGVyaW1lbnRpbmcgd2l0aCBpdHNcbiAgICAgICAgICBvcHRpb25zLCBhbGwgb2YgdGhlIGJ1dHRvbnMgb24gdGhlIHJpYmJvbnMsIHRoZSB2YXJpZXR5IG9mIGRpZmZlcmVudFxuICAgICAgICAgIHRvb2xzIG9uIGl0LCBhbmQgSSBoYXBwZW5lZCB0byBsaWtlIGl0LiBGcm9tIHRoYXQgdGltZSwgSSBzdGFydGVkXG4gICAgICAgICAgdXNpbmcgdGhlIFZpc3VhbCBCYXNpYyBlZGl0b3IgdGhhdCBjb21lcyB3aXRoIE9mZmljZSBTdWl0ZSwgYW5kLFxuICAgICAgICAgIHZvaWxhLCBJIGFtIG5vdyBhIGZhbiBvZiB0aGlzIGFuZCBtYW55IG90aGVyIE1pY3Jvc29mdCBwcm9kdWN0cyFcbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBJIHdhbnQgdG8gYmUgYWJsZSB0byBoZWxwIG90aGVycyBsZWFybiBhYm91dCB0aGlzIHRvb2wsIHRvIHVzZSBpdCwgdG9cbiAgICAgICAgICBlbmpveSB3b3JraW5nIHdpdGggaXQuIEl0IGlzIG5vdyBteSBkdXR5IHRvIHByb3ZpZGUgeW91IGd1eXMgd2l0aCBhc1xuICAgICAgICAgIG1hbnkgdGlwcyBhbmQgdHJpY2tzIGFzIHBvc3NpYmxlIHRvIGZlZWwgdGhhdCBJIGFtIGJlaW5nIHBhcnQgb2YgYVxuICAgICAgICAgIGNoYW5nZSBpbiB0aGUgY29uY2VwdCBvZiBzaGFyaW5nIGtub3dsZWRnZSB0byBvdGhlcnMgd2l0aG91dCBhbnlcbiAgICAgICAgICBwYXJ0aWN1bGFyIGludGVyZXN0IG9yZGVyIHRoYW4gdGhlIHNpbXBsZSBmYWN0IG9mIGhlbHBpbmcgcGVvcGxlOiBJXG4gICAgICAgICAgbm93IGJlY29tZSBNaXN0ZXIgRXhjZWwgTmljYXJhZ3VhLCBhbmQgSSBhbSB3aWxsaW5nIHRvIHNhY3JpZmljZSB0aW1lXG4gICAgICAgICAgYW5kIGVmZm9ydCB0byBzZWUgb3RoZXJzIHN1Y2NlZWQgaW4gdGhlIGxlYXJuaW5nIHBhdGggb2YgdGhpc1xuICAgICAgICAgIGJlYXV0aWZ1bCBhbmQgdmVyeSB1c2VmdWwgdG9vbCBjcmVhdGVkIGJ5IE1pY3Jvc29mdCBDb3Jwb3JhdGlvblxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEJ1Y2tsZSB1cCwgZmVsbG93cywgdGhlIGFkdmVudHVyZSBpcyBhYm91dCB0byBiZWdpbiwgSeKAmW0gcmVhZHkgdG9cbiAgICAgICAgICBzdGFydCwgaG93IGFib3V0IHlvdSwgcGFsP1xuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/about.js\n");

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