"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[7],{368:function(t,e,n){n.d(e,{O:function(){return s}});var r=n(689),a=n(87),c=n(311),u=n(184),s=function(t){var e=t.movies,n=(0,r.TH)();return(0,u.jsx)("ul",{children:e.map((function(t){return(0,u.jsxs)("li",{children:[(0,u.jsx)("img",{src:(0,c.Y)(t.poster_path),alt:t.title,width:"100px"}),(0,u.jsx)(a.OL,{to:"/movies/".concat(t.id),state:{from:n},children:t.title})]},t.id)}))})}},7:function(t,e,n){n.r(e);var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),i=n(87),o=n(32),p=n(368),f=n(184);e.default=function(){var t=(0,s.useState)(""),e=(0,a.Z)(t,2),n=e[0],c=e[1],v=(0,i.lr)(),l=(0,a.Z)(v,2),h=l[0],d=l[1],m=h.get("query"),g=(0,s.useState)([]),x=(0,a.Z)(g,2),w=x[0],k=x[1];(0,s.useEffect)((function(){m&&(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.mv)(m);case 3:e=t.sent,n=e.results,k(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:return t.prev=11,c(m),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})))()}),[m]);return(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"Movies"}),(0,f.jsxs)("form",{onSubmit:function(t){t.preventDefault(),d({query:n})},children:[(0,f.jsx)("input",{type:"text",value:n,onChange:function(t){var e=t.target.value;c(e)}}),(0,f.jsx)("button",{type:"submit",children:"search"})]}),(0,f.jsx)(p.O,{movies:w})]})}},32:function(t,e,n){n.d(e,{FP:function(){return p},LC:function(){return f},WE:function(){return i},Xn:function(){return v},mv:function(){return o}});var r=n(861),a=n(757),c=n.n(a),u=n(912);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="76cbb606f190fc237086ec33f1fd98a3",i=function(){var t=(0,r.Z)(c().mark((function t(){var e,n,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"trending/movie/day",n=a.length>1?a[1]:void 0,t.next=4,u.Z.get("".concat(e,"?api_key=").concat(s),n);case 4:return r=t.sent,t.abrupt("return",r.data);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e,n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"),n);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a,i=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"",r=i.length>2?i[2]:void 0,t.next=4,u.Z.get("movie/".concat(e).concat(n,"?api_key=").concat(s,"&language=en-US"),r);case 4:return a=t.sent,t.abrupt("return",a.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e,n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"),n);case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e,n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US"),n);case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},311:function(t,e,n){n.d(e,{Y:function(){return r}});var r=function(t){return t?t.startsWith("/https")?t.slice(1):"https://image.tmdb.org/t/p/w400/".concat(t):"https://placeholder.pics/svg/300/7050FF-2716FF/FFFFFF/Not%20found"}}}]);
//# sourceMappingURL=7.4771b0e7.chunk.js.map