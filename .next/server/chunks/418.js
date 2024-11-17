"use strict";
exports.id = 418;
exports.ids = [418];
exports.modules = {

/***/ 6084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo-hijau.576a698a.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAt0lEQVR42mOAARUfG1YQrevvxFTe3cEIlxB01mcG0SIuhpVCzgZTJV2NbYSdDfbAFQg46YN1iroYegHZz5U8LRWB9Dc5dzMxuCKgpKe4q9EUPie9L2IuRjMEnQ2eiTgbeMIVAI1cDLRiMtC6XUBrZgP5C4G4ECwp7W4mIOdhHq3sZWmr4WPrqe5j463sZRUCxP5A6/gYxN1M+CVdTcxk3EyN1Lyt9VS9rS2Biq2BkiaKnhbCDIQAAEWwKFlMHcHfAAAAAElFTkSuQmCC"});

/***/ }),

/***/ 2418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9343);
/* harmony import */ var _data_NavItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4181);
/* harmony import */ var _hooks_useScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(292);
/* harmony import */ var _images_resources_logo_hijau_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6084);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1476);









const HeaderOne = ()=>{
    const { scrollTop  } = (0,_hooks_useScroll__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(130);
    const { toggleMenu , toggleSearch  } = (0,_context_context__WEBPACK_IMPORTED_MODULE_1__/* .useRootContext */ .E)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "main-header clearfix",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "main-header__logo",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Image, {
                            src: _images_resources_logo_hijau_png__WEBPACK_IMPORTED_MODULE_4__["default"].src,
                            alt: "",
                            className: "header-logo"
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "main-menu-wrapper",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "main-menu-wrapper__top",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "main-menu-wrapper__top-inner",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "main-menu-wrapper__left",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "main-menu-wrapper__left-content",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "main-menu-wrapper__left-text",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Selamat datang di INVSMA. Layanan Urun Dana Berbasis Teknologi Informasi (Securities Crowdfunding)"
                                        })
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "main-menu-wrapper__bottom",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                            className: scrollTop ? "stricky-header stricked-menu main-menu stricky-fixed slideInDown animated" : "main-menu slideIn animated",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: scrollTop ? "sticky-header__content main-menu__inner" : "main-menu__inner",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        onClick: ()=>toggleMenu()
                                        ,
                                        className: "mobile-nav__toggler",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa fa-bars"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        className: "main-menu__list",
                                        children: _data_NavItems__WEBPACK_IMPORTED_MODULE_2__/* ["default"].map */ .Z.map((navItem)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                navItem: navItem
                                            }, navItem.id)
                                        )
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "main-menu__right",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                            href: "/causes-details",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "main-menu__donate-btn",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fa fa-user"
                                                    }),
                                                    "Login"
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderOne);


/***/ })

};
;