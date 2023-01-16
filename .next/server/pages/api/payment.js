"use strict";
(() => {
var exports = {};
exports.id = 624;
exports.ids = [624,933];
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
        type: Number,
        required: true
    }
});
(mongoose__WEBPACK_IMPORTED_MODULE_0___default().models) = {};
const Payment = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Payments", payments);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Payment);


/***/ }),

/***/ 574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ payment)
});

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(663);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./pages/middleware/mongodb.js

const connectDB = (handler)=>async (req, res)=>{
        if ((external_mongoose_default()).connections[0].readyState) {
            return handler(req, res);
        } else {
            await external_mongoose_default().connect(process.env.MONGODB_URI, {
                bufferCommands: false
            }).then((mongoose)=>{
                return mongoose;
            }).then(()=>{
                return handler(req, res);
            }).catch((err)=>{
                console.log({
                    err
                });
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({
                    message: "Internal Server Error"
                }));
                return err;
            });
        }
    };
/* harmony default export */ const mongodb = (connectDB);

;// CONCATENATED MODULE: external "bcrypt"
const external_bcrypt_namespaceObject = require("bcrypt");
var external_bcrypt_default = /*#__PURE__*/__webpack_require__.n(external_bcrypt_namespaceObject);
// EXTERNAL MODULE: ./pages/api/models/payments.js
var payments = __webpack_require__(738);
;// CONCATENATED MODULE: external "joi"
const external_joi_namespaceObject = require("joi");
var external_joi_default = /*#__PURE__*/__webpack_require__.n(external_joi_namespaceObject);
;// CONCATENATED MODULE: ./utility/apiValidateSchema.js

const apiValidateSchema = external_joi_default().object({
    cardNumber: external_joi_default().string().length(16).pattern(/^[0-9]+$/).required(),
    expDate: external_joi_default().string().length(7).pattern(/^(0\d|1[0-2])\/\d{4}$/).required(),
    cvv: external_joi_default().string().length(3).pattern(/^[0-9]+$/).required(),
    amount: external_joi_default().string().min(1).max(9).pattern(/^[0-9]+$/).required()
});
/* harmony default export */ const utility_apiValidateSchema = (apiValidateSchema);

;// CONCATENATED MODULE: ./pages/middleware/validate.js

const validateInputs = (handler)=>async (req, res)=>{
        const val = utility_apiValidateSchema.validate({
            cardNumber: req.body.cardNumber.replace(/\s/g, ""),
            expDate: req.body.expDate,
            cvv: req.body.cvv,
            amount: req.body.amount
        });
        if (!val.error) {
            return handler(req, res);
        } else {
            console.log(val.error);
            res.statusCode = 400;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({
                message: val.error.message
            }));
            return;
        }
    };
/* harmony default export */ const validate = (validateInputs);

;// CONCATENATED MODULE: external "next-auth/react"
const react_namespaceObject = require("next-auth/react");
;// CONCATENATED MODULE: ./pages/middleware/auth.js

const authMiddle = (handler)=>async (req, res)=>{
        const session = await (0,react_namespaceObject.getSession)({
            req
        });
        if (session) {
            return handler(req, res);
        } else {
            res.statusCode = 403;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({
                message: "Protected content"
            }));
            return;
        }
    };
/* harmony default export */ const auth = (authMiddle);

;// CONCATENATED MODULE: ./pages/api/payment.js






const handler = async (req, res)=>{
    if (req.method === "POST") {
        const { cardNumber , expDate , cvv , amount  } = req.body;
        const hash = await external_bcrypt_default().hash(cvv, 10);
        payments["default"].create({
            cardNumber,
            expDate,
            cvv: hash,
            amount
        }).then((payment)=>{
            res.status(201).send({
                amount: payment.amount,
                _id: payment._id
            });
            res.end();
            return;
        }).catch((err1)=>{
            console.log({
                err: err1
            });
            res.statusCode = 400;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({
                message: "Bad Request"
            }));
            return err1;
        });
    } else {
        console.log({
            err
        });
        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({
            message: "Bad Request"
        }));
        return;
    }
};
/* harmony default export */ const payment = (auth(mongodb(validate(handler))));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(574));
module.exports = __webpack_exports__;

})();