/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData)\n/* harmony export */ });\nasync function getWeatherData(location) {\n    let data;\n    try {\n        let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=BH8YRTK298A6YGDR6YYXTT7L3`);\n        data = await response.json();\n        console.log(data);\n    }\n    catch (e) {\n        console.log(e);\n    }\n    return data;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSwwSEFBMEgsU0FBUztBQUNuSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcl9vZGluLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKSB7XG4gICAgbGV0IGRhdGE7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lLyR7bG9jYXRpb259P2tleT1CSDhZUlRLMjk4QTZZR0RSNllZWFRUN0wzYCk7XG4gICAgICAgIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCB7IGdldFdlYXRoZXJEYXRhIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n\n\nconst body = document.querySelector('body');\nconst searchForm = document.createElement('form');\nconst label = document.createElement('label');\nconst outer = document.createElement('div');\nlabel.for = 'searchInput';\nlabel.classList.add('label');\nlabel.textContent = 'Search: ';\nconst searchInput = document.createElement('input');\nsearchInput.name = 'searchInput';\nsearchInput.classList.add('search');\nsearchInput.id = 'searchInput';\nsearchInput.type = 'text';\nsearchInput.required = true;\nsearchInput.placeholder = 'location';\nlabel.appendChild(searchInput);\n\nconst searchBtn = document.createElement('button');\nsearchBtn.classList.add('btn');\nsearchBtn.id = 'searchBtn';\nsearchBtn.textContent = 'Submit';\nsearchBtn.type = 'button';\n\nsearchBtn.addEventListener('click', (event) => {\n    event.preventDefault();\n    (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(searchInput.value);\n})\n\nsearchForm.appendChild(label);\nsearchForm.appendChild(searchBtn);\nouter.appendChild(searchForm);\nbody.appendChild(outer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHVEQUFjO0FBQ2xCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyX29kaW4vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRXZWF0aGVyRGF0YSB9IGZyb20gXCIuL2FwcC5qc1wiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbmNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmNvbnN0IG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5sYWJlbC5mb3IgPSAnc2VhcmNoSW5wdXQnO1xubGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWwnKTtcbmxhYmVsLnRleHRDb250ZW50ID0gJ1NlYXJjaDogJztcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnNlYXJjaElucHV0Lm5hbWUgPSAnc2VhcmNoSW5wdXQnO1xuc2VhcmNoSW5wdXQuY2xhc3NMaXN0LmFkZCgnc2VhcmNoJyk7XG5zZWFyY2hJbnB1dC5pZCA9ICdzZWFyY2hJbnB1dCc7XG5zZWFyY2hJbnB1dC50eXBlID0gJ3RleHQnO1xuc2VhcmNoSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuc2VhcmNoSW5wdXQucGxhY2Vob2xkZXIgPSAnbG9jYXRpb24nO1xubGFiZWwuYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpO1xuXG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbnNlYXJjaEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbnNlYXJjaEJ0bi5pZCA9ICdzZWFyY2hCdG4nO1xuc2VhcmNoQnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG5zZWFyY2hCdG4udHlwZSA9ICdidXR0b24nO1xuXG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGdldFdlYXRoZXJEYXRhKHNlYXJjaElucHV0LnZhbHVlKTtcbn0pXG5cbnNlYXJjaEZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuc2VhcmNoRm9ybS5hcHBlbmRDaGlsZChzZWFyY2hCdG4pO1xub3V0ZXIuYXBwZW5kQ2hpbGQoc2VhcmNoRm9ybSk7XG5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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
/******/ 			// no module.id needed
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;