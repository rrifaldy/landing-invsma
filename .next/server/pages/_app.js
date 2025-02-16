/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/ContextProvider.js":
/*!****************************************!*\
  !*** ./src/context/ContextProvider.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ \"./src/context/context.js\");\n\n\n\n\nconst ContextProvider = ({ children  })=>{\n    const { 0: menuStatus , 1: setMenuStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { 0: openSearch , 1: setOpenSearch  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const toggleMenu = (value)=>{\n        setMenuStatus((preMenuStatus)=>value === undefined ? !preMenuStatus : typeof value === \"boolean\" ? value : !!value\n        );\n    };\n    const toggleSearch = ()=>{\n        setOpenSearch((preSearch)=>!preSearch\n        );\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        toggleMenu(false);\n    }, [\n        pathname\n    ]);\n    const value1 = {\n        menuStatus,\n        openSearch,\n        toggleMenu,\n        toggleSearch\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n        value: value1,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\hendr\\\\Documents\\\\Project Running\\\\INVSMA\\\\Website INVSMA\\\\landing-invsma\\\\src\\\\context\\\\ContextProvider.js\",\n        lineNumber: 35,\n        columnNumber: 10\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContextProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9Db250ZXh0UHJvdmlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1c7QUFDbkI7QUFFL0IsS0FBSyxDQUFDSyxlQUFlLElBQUksQ0FBQyxDQUFDQyxRQUFRLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDekMsS0FBSyxNQUFFQyxVQUFVLE1BQUVDLGFBQWEsTUFBSUwsK0NBQVEsQ0FBQyxLQUFLO0lBQ2xELEtBQUssTUFBRU0sVUFBVSxNQUFFQyxhQUFhLE1BQUlQLCtDQUFRLENBQUMsS0FBSztJQUVsRCxLQUFLLENBQUMsQ0FBQyxDQUFDUSxRQUFRLEVBQUMsQ0FBQyxHQUFHWCxzREFBUztJQUU5QixLQUFLLENBQUNZLFVBQVUsSUFBSUMsS0FBSyxHQUFLLENBQUM7UUFDN0JMLGFBQWEsRUFBRU0sYUFBYSxHQUMxQkQsS0FBSyxLQUFLRSxTQUFTLElBQ2RELGFBQWEsR0FDZCxNQUFNLENBQUNELEtBQUssS0FBSyxDQUFTLFdBQzFCQSxLQUFLLEtBQ0hBLEtBQUs7O0lBRWYsQ0FBQztJQUVELEtBQUssQ0FBQ0csWUFBWSxPQUFTLENBQUM7UUFDMUJOLGFBQWEsRUFBRU8sU0FBUyxJQUFNQSxTQUFTOztJQUN6QyxDQUFDO0lBRURmLGdEQUFTLEtBQU8sQ0FBQztRQUNmVSxVQUFVLENBQUMsS0FBSztJQUNsQixDQUFDLEVBQUUsQ0FBQ0Q7UUFBQUEsUUFBUTtJQUFBLENBQUM7SUFFYixLQUFLLENBQUNFLE1BQUssR0FBRyxDQUFDO1FBQ2JOLFVBQVU7UUFDVkUsVUFBVTtRQUNWRyxVQUFVO1FBQ1ZJLFlBQVk7SUFDZCxDQUFDO0lBQ0QsTUFBTSw2RUFBRVoseURBQWdCO1FBQUNTLEtBQUssRUFBRUEsTUFBSztrQkFBR1AsUUFBUTs7Ozs7O0FBQ2xELENBQUM7QUFFRCxpRUFBZUQsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFscGVzLW5leHRqcy8uL3NyYy9jb250ZXh0L0NvbnRleHRQcm92aWRlci5qcz8yZGJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCI7XHJcblxyXG5jb25zdCBDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW21lbnVTdGF0dXMsIHNldE1lbnVTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcGVuU2VhcmNoLCBzZXRPcGVuU2VhcmNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAodmFsdWUpID0+IHtcclxuICAgIHNldE1lbnVTdGF0dXMoKHByZU1lbnVTdGF0dXMpID0+XHJcbiAgICAgIHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICA/ICFwcmVNZW51U3RhdHVzXHJcbiAgICAgICAgOiB0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiXHJcbiAgICAgICAgPyB2YWx1ZVxyXG4gICAgICAgIDogISF2YWx1ZVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuU2VhcmNoKChwcmVTZWFyY2gpID0+ICFwcmVTZWFyY2gpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB0b2dnbGVNZW51KGZhbHNlKTtcclxuICB9LCBbcGF0aG5hbWVdKTtcclxuXHJcbiAgY29uc3QgdmFsdWUgPSB7XHJcbiAgICBtZW51U3RhdHVzLFxyXG4gICAgb3BlblNlYXJjaCxcclxuICAgIHRvZ2dsZU1lbnUsXHJcbiAgICB0b2dnbGVTZWFyY2gsXHJcbiAgfTtcclxuICByZXR1cm4gPGNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57Y2hpbGRyZW59PC9jb250ZXh0LlByb3ZpZGVyPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRleHRQcm92aWRlcjtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjb250ZXh0IiwiQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJtZW51U3RhdHVzIiwic2V0TWVudVN0YXR1cyIsIm9wZW5TZWFyY2giLCJzZXRPcGVuU2VhcmNoIiwicGF0aG5hbWUiLCJ0b2dnbGVNZW51IiwidmFsdWUiLCJwcmVNZW51U3RhdHVzIiwidW5kZWZpbmVkIiwidG9nZ2xlU2VhcmNoIiwicHJlU2VhcmNoIiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/ContextProvider.js\n");

/***/ }),

/***/ "./src/context/context.js":
/*!********************************!*\
  !*** ./src/context/context.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useRootContext\": () => (/* binding */ useRootContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});\nconst useRootContext = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (context);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9jb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBaUQ7QUFFakQsS0FBSyxDQUFDRSxPQUFPLGlCQUFHRixvREFBYSxDQUFDLENBQUMsQ0FBQztBQUV6QixLQUFLLENBQUNHLGNBQWMsT0FBUyxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0YsaURBQVUsQ0FBQ0MsT0FBTztBQUMzQixDQUFDO0FBRUQsaUVBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hhbHBlcy1uZXh0anMvLi9zcmMvY29udGV4dC9jb250ZXh0LmpzPzQ2YzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgY29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVJvb3RDb250ZXh0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KGNvbnRleHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGV4dDtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiY29udGV4dCIsInVzZVJvb3RDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/context.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_ContextProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/ContextProvider */ \"./src/context/ContextProvider.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _vendors_halpes_icons_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/vendors/halpes-icons/style.css */ \"./src/assets/vendors/halpes-icons/style.css\");\n/* harmony import */ var _vendors_halpes_icons_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendors_halpes_icons_style_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _vendors_reey_font_stylesheet_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/vendors/reey-font/stylesheet.css */ \"./src/assets/vendors/reey-font/stylesheet.css\");\n/* harmony import */ var _vendors_reey_font_stylesheet_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vendors_reey_font_stylesheet_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _vendors_fontawesome_css_all_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/vendors/fontawesome/css/all.min.css */ \"./src/assets/vendors/fontawesome/css/all.min.css\");\n/* harmony import */ var _vendors_fontawesome_css_all_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_vendors_fontawesome_css_all_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _vendors_animate_animate_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/vendors/animate/animate.min.css */ \"./src/assets/vendors/animate/animate.min.css\");\n/* harmony import */ var _vendors_animate_animate_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_vendors_animate_animate_min_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var node_modules_swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! node_modules/swiper/swiper-bundle.min.css */ \"./node_modules/swiper/swiper-bundle.min.css\");\n/* harmony import */ var node_modules_swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(node_modules_swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var tiny_slider_dist_tiny_slider_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tiny-slider/dist/tiny-slider.css */ \"./node_modules/tiny-slider/dist/tiny-slider.css\");\n/* harmony import */ var tiny_slider_dist_tiny_slider_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tiny_slider_dist_tiny_slider_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_halpes_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/styles/halpes.css */ \"./src/styles/halpes.css\");\n/* harmony import */ var _styles_halpes_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_halpes_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_halpes_responsive_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/styles/halpes-responsive.css */ \"./src/styles/halpes-responsive.css\");\n/* harmony import */ var _styles_halpes_responsive_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_halpes_responsive_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _styles_CausesDetailsRight_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/styles/CausesDetailsRight.css */ \"./src/styles/CausesDetailsRight.css\");\n/* harmony import */ var _styles_CausesDetailsRight_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_CausesDetailsRight_css__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\n\n// extra css\n\n\n\n\nconst MyApp = ({ Component , pageProps  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_ContextProvider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\hendr\\\\Documents\\\\Project Running\\\\INVSMA\\\\Website INVSMA\\\\landing-invsma\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\hendr\\\\Documents\\\\Project Running\\\\INVSMA\\\\Website INVSMA\\\\landing-invsma\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUQ7QUFDVjtBQUVKO0FBQ0U7QUFDRztBQUNKO0FBQ1E7QUFDVDtBQUV6QyxFQUFZO0FBQ2lCO0FBQ0Q7QUFDVztBQUNDO0FBRXhDLEtBQUssQ0FBQ0MsS0FBSyxJQUFJLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDM0MsTUFBTSw2RUFDSEgsZ0VBQWU7OEZBQ2JFLFNBQVM7ZUFBS0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIsQ0FBQztBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWxwZXMtbmV4dGpzLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGV4dFByb3ZpZGVyIGZyb20gXCJAL2NvbnRleHQvQ29udGV4dFByb3ZpZGVyXCI7XHJcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xyXG5cclxuaW1wb3J0IFwiQC92ZW5kb3JzL2hhbHBlcy1pY29ucy9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IFwiQC92ZW5kb3JzL3JlZXktZm9udC9zdHlsZXNoZWV0LmNzc1wiO1xyXG5pbXBvcnQgXCJAL3ZlbmRvcnMvZm9udGF3ZXNvbWUvY3NzL2FsbC5taW4uY3NzXCI7XHJcbmltcG9ydCBcIkAvdmVuZG9ycy9hbmltYXRlL2FuaW1hdGUubWluLmNzc1wiO1xyXG5pbXBvcnQgXCJub2RlX21vZHVsZXMvc3dpcGVyL3N3aXBlci1idW5kbGUubWluLmNzc1wiO1xyXG5pbXBvcnQgXCJ0aW55LXNsaWRlci9kaXN0L3Rpbnktc2xpZGVyLmNzc1wiO1xyXG5cclxuLy8gZXh0cmEgY3NzXHJcbmltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBcIkAvc3R5bGVzL2hhbHBlcy5jc3NcIjtcclxuaW1wb3J0IFwiQC9zdHlsZXMvaGFscGVzLXJlc3BvbnNpdmUuY3NzXCI7XHJcbmltcG9ydCBcIkAvc3R5bGVzL0NhdXNlc0RldGFpbHNSaWdodC5jc3NcIjtcclxuXHJcbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGV4dFByb3ZpZGVyPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L0NvbnRleHRQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJDb250ZXh0UHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/swiper-bundle.min.css":
/*!***************************************************!*\
  !*** ./node_modules/swiper/swiper-bundle.min.css ***!
  \***************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/tiny-slider/dist/tiny-slider.css":
/*!*******************************************************!*\
  !*** ./node_modules/tiny-slider/dist/tiny-slider.css ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/assets/vendors/animate/animate.min.css":
/*!****************************************************!*\
  !*** ./src/assets/vendors/animate/animate.min.css ***!
  \****************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/assets/vendors/fontawesome/css/all.min.css":
/*!********************************************************!*\
  !*** ./src/assets/vendors/fontawesome/css/all.min.css ***!
  \********************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/assets/vendors/halpes-icons/style.css":
/*!***************************************************!*\
  !*** ./src/assets/vendors/halpes-icons/style.css ***!
  \***************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/assets/vendors/reey-font/stylesheet.css":
/*!*****************************************************!*\
  !*** ./src/assets/vendors/reey-font/stylesheet.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/CausesDetailsRight.css":
/*!*******************************************!*\
  !*** ./src/styles/CausesDetailsRight.css ***!
  \*******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/halpes-responsive.css":
/*!******************************************!*\
  !*** ./src/styles/halpes-responsive.css ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/halpes.css":
/*!*******************************!*\
  !*** ./src/styles/halpes.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();