"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{597:function(r,t,e){e.r(t);var n=e(439),a=e(791),c=e(503),u=e(689),o=e(184);t.default=function(){var r=(0,u.UO)().id,t=(0,a.useState)([]),e=(0,n.Z)(t,2),s=e[0],i=e[1];return(0,a.useEffect)((function(){(0,c.z6)(r).then((function(r){i(r)})).catch((function(r){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0438\u0442\u0456:",r)}))}),[r]),(0,o.jsx)("div",{children:s.cast?(0,o.jsx)("div",{children:(0,o.jsx)("ul",{children:s.cast.map((function(r,t){return(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:r.profile_path?"https://image.tmdb.org/t/p/w500/".concat(r.profile_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:120,alt:"profile"}),(0,o.jsx)("li",{children:r.name},r.id),(0,o.jsxs)("p",{children:["Character: ",r.character]})]},t)}))})}):null})}},503:function(r,t,e){e.d(t,{E$:function(){return i},JS:function(){return s},Y1:function(){return f},kh:function(){return l},z6:function(){return p}});var n=e(861),a=e(757),c=e.n(a),u=e(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o={api_key:"233c7f71dccea172993da041a5656481",language:"en - US"},s=function(){var r=(0,n.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("trending/all/day",{params:o});case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456 \u0442\u0440\u0435\u043d\u0434\u043e\u0432\u0438\u0445 \u0444\u0456\u043b\u044c\u043c\u0456\u0432:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("movie/".concat(t),{params:o});case 3:return e=r.sent,r.abrupt("return",e.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456 \u0456\u043d\u0444\u043e \u043f\u0440\u043e \u0444\u0456\u043b\u044c\u043c:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("movie/".concat(t,"/credits"),{params:o});case 3:return e=r.sent,r.abrupt("return",e.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456 \u0441\u043f\u0438\u0441\u043a\u0443 \u0430\u043a\u0442\u043e\u0440\u0456\u0432:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("movie/".concat(t,"/reviews?page=1"),{params:o});case 3:return e=r.sent,r.abrupt("return",e.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456 \u0432\u0456\u0434\u0433\u0443\u043a\u0456\u0432:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("search/movie?query=".concat(t,"&include_adult=false&page=1"),{params:o});case 3:return e=r.sent,r.abrupt("return",e.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u0448\u0443\u043a\u0443 \u0444\u0456\u043b\u044c\u043c\u0456\u0432:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=597.e265db91.chunk.js.map