"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "react-dom/client"
const client_namespaceObject = require("react-dom/client");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "@mui/material/styles"
const styles_namespaceObject = require("@mui/material/styles");
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(692);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(649);
// EXTERNAL MODULE: external "@emotion/react"
var external_emotion_react_ = __webpack_require__(805);
// EXTERNAL MODULE: ./utility/createEmotionCache.js + 1 modules
var createEmotionCache = __webpack_require__(921);
;// CONCATENATED MODULE: ./pages/_app.js










const clientSideEmotionCache = (0,createEmotionCache/* default */.Z)();
function MyApp({ Component , emotionCache =clientSideEmotionCache , pageProps: { session , ...pageProps } ,  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_emotion_react_.CacheProvider, {
        value: emotionCache,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.SessionProvider, {
            session: session,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.CssBaseline, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ utility_createEmotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./utility/createEmotionCache.js

const createEmotionCache = ()=>{
    return cache_default()({
        key: "css"
    });
};
/* harmony default export */ const utility_createEmotionCache = (createEmotionCache);


/***/ }),

/***/ 805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(292));
module.exports = __webpack_exports__;

})();