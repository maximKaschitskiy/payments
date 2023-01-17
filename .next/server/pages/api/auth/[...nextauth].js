"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET,\n            authorizationUrl: \"https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code\",\n            scope: \"https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email\"\n        }), \n    ],\n    jwt: {\n        encryption: true\n    },\n    secret: \"secret token\",\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async session ({ session , token  }) {\n            session.user.tag - session.user.name.split(\" \").join(\"\").toLowerCase();\n            session.user.uid = token.sub;\n            return session;\n        },\n        redirect: async (url, _baseUrl)=>{\n            if (url === \"/user\") {\n                return Promise.resolve(\"/\");\n            }\n            return Promise.resolve(\"/\");\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlDO0FBQ3VCO0FBRXhELGlFQUFlQSxnREFBUSxDQUFDO0lBQ3RCRSxTQUFTLEVBQUU7UUFDVEQsaUVBQWMsQ0FBQztZQUNiRSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFTO1lBQy9CQyxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxhQUFhO1lBQ3ZDQyxnQkFBZ0IsRUFDZCxvR0FBb0c7WUFDdEdDLEtBQUssRUFDSCxpR0FBaUc7U0FDcEcsQ0FBQztLQUNIO0lBQ0RDLEdBQUcsRUFBRTtRQUNIQyxVQUFVLEVBQUUsSUFBSTtLQUNqQjtJQUNEQyxNQUFNLEVBQUUsY0FBYztJQUN0QkMsT0FBTyxFQUFFO1FBQ1BDLFFBQVEsRUFBRSxLQUFLO0tBQ2hCO0lBQ0RDLFNBQVMsRUFBRTtRQUNULE1BQU1GLE9BQU8sRUFBQyxFQUFFQSxPQUFPLEdBQUVHLEtBQUssR0FBRSxFQUFFO1lBQ2hDSCxPQUFPLENBQUNJLElBQUksQ0FBQ0MsR0FBRyxHQUFHTCxPQUFPLENBQUNJLElBQUksQ0FBQ0UsSUFBSSxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQ0MsV0FBVyxFQUFFLENBQUM7WUFDdkVULE9BQU8sQ0FBQ0ksSUFBSSxDQUFDTSxHQUFHLEdBQUdQLEtBQUssQ0FBQ1EsR0FBRyxDQUFDO1lBQzdCLE9BQU9YLE9BQU8sQ0FBQztTQUNoQjtRQUNEWSxRQUFRLEVBQUUsT0FBT0MsR0FBRyxFQUFFQyxRQUFRLEdBQUs7WUFDakMsSUFBSUQsR0FBRyxLQUFLLE9BQU8sRUFBRTtnQkFDbkIsT0FBT0UsT0FBTyxDQUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDN0I7WUFDRCxPQUFPRCxPQUFPLENBQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QjtLQUNGO0NBQ0YsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0lELFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9TRUNSRVQsXHJcbiAgICAgIGF1dGhvcml6YXRpb25Vcmw6XHJcbiAgICAgICAgXCJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvdjIvYXV0aD9wcm9tcHQ9Y29uc2VudCZhY2Nlc3NfdHlwZT1vZmZsaW5lJnJlc3BvbnNlX3R5cGU9Y29kZVwiLFxyXG4gICAgICBzY29wZTpcclxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvdXNlcmluZm8ucHJvZmlsZSBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3VzZXJpbmZvLmVtYWlsXCIsXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGp3dDoge1xyXG4gICAgZW5jcnlwdGlvbjogdHJ1ZSxcclxuICB9LFxyXG4gIHNlY3JldDogXCJzZWNyZXQgdG9rZW5cIixcclxuICBzZXNzaW9uOiB7XHJcbiAgICBzdHJhdGVneTogXCJqd3RcIixcclxuICB9LFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcclxuICAgICAgc2Vzc2lvbi51c2VyLnRhZyAtIHNlc3Npb24udXNlci5uYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHNlc3Npb24udXNlci51aWQgPSB0b2tlbi5zdWI7XHJcbiAgICAgIHJldHVybiBzZXNzaW9uO1xyXG4gICAgfSxcclxuICAgIHJlZGlyZWN0OiBhc3luYyAodXJsLCBfYmFzZVVybCkgPT4ge1xyXG4gICAgICBpZiAodXJsID09PSBcIi91c2VyXCIpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFwiL1wiKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFwiL1wiKTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX1NFQ1JFVCIsImF1dGhvcml6YXRpb25VcmwiLCJzY29wZSIsImp3dCIsImVuY3J5cHRpb24iLCJzZWNyZXQiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJjYWxsYmFja3MiLCJ0b2tlbiIsInVzZXIiLCJ0YWciLCJuYW1lIiwic3BsaXQiLCJqb2luIiwidG9Mb3dlckNhc2UiLCJ1aWQiLCJzdWIiLCJyZWRpcmVjdCIsInVybCIsIl9iYXNlVXJsIiwiUHJvbWlzZSIsInJlc29sdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();