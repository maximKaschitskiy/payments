"use strict";
(() => {
var exports = {};
exports.id = 933;
exports.ids = [933];
exports.modules = {

/***/ 663:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(663);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema);
const payments = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    cardNumber: {
        type: String,
        required: true
    },
    expDate: {
        type: String,
        required: true
    },
    cvv: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    }
});
(mongoose__WEBPACK_IMPORTED_MODULE_0___default().models) = {};
const Payment = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Payments", payments);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Payment);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(738));
module.exports = __webpack_exports__;

})();