(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[116],{2792:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/middleware/auth",function(){return e(715)}])},715:function(n,t,e){"use strict";e.r(t);var r=e(7568),u=e(4051),i=e.n(u),o=e(3299);t.default=function(n){return function(){var t=(0,r.Z)(i().mark((function t(e,r){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.getSession)({req:e});case 2:if(!t.sent){t.next=7;break}return t.abrupt("return",n(e,r));case 7:return r.statusCode=403,r.setHeader("Content-Type","application/json"),r.end(JSON.stringify({message:"Protected content"})),t.abrupt("return");case 11:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()}},7568:function(n,t,e){"use strict";function r(n,t,e,r,u,i,o){try{var c=n[i](o),a=c.value}catch(s){return void e(s)}c.done?t(a):Promise.resolve(a).then(r,u)}function u(n){return function(){var t=this,e=arguments;return new Promise((function(u,i){var o=n.apply(t,e);function c(n){r(o,u,i,c,a,"next",n)}function a(n){r(o,u,i,c,a,"throw",n)}c(void 0)}))}}e.d(t,{Z:function(){return u}})}},function(n){n.O(0,[774,888,179],(function(){return t=2792,n(n.s=t);var t}));var t=n.O();_N_E=t}]);