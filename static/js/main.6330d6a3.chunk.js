(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(0),c=n(3),i=n.n(c),a=n(4),s=n(2),l=(n(27),function(e){var t=e.robots.map((function(e){return Object(o.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw shadow-5",children:[Object(o.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(e.id,"}?200x200")}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsx)("p",{children:e.email})]})]},e.id)}));return Object(o.jsx)("div",{children:t})}),h=function(e){e.searchfield;var t=e.searchChange;return Object(o.jsx)("div",{className:"pa2",children:Object(o.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robots",onChange:t})})},d=function(){return Object(o.jsx)("h1",{className:"f2",children:"RoboFriends "})},u=function(e){return Object(o.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"},children:e.children})},b=(n(28),n(11)),f=n(12),j=n(16),g=n(15),v=function(e){Object(j.a)(n,e);var t=Object(g.a)(n);function n(e){var o;return Object(b.a)(this,n),(o=t.call(this,e)).state={hasError:!1},o}return Object(f.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(o.jsx)("h1",{children:"Oooops. thats not good "}):this.props.children}}]),n}(r.Component),p="CHANGE_SEARCH_FIELD",O="SET_ROBOTS";var w=Object(a.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.getRobots.robots}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:p,payload:n}));var n},onRequestRobots:function(t){return e({type:O,payload:t})}}}))((function(e){var t=e.onRequestRobots;Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return t(e)}))}),[]);var n=e.robots.filter((function(t){return t.name.toLowerCase().includes(e.searchField.toLowerCase())}));return e.robots?Object(o.jsxs)("div",{className:"tc",children:[Object(o.jsx)(d,{}),Object(o.jsx)(h,{searchChange:e.onSearchChange}),Object(o.jsx)(u,{children:Object(o.jsx)(v,{children:Object(o.jsx)(l,{robots:n})})})]}):Object(o.jsx)("h1",{children:"Loading..."})})),x=(n(29),{searchField:""}),m={robots:[]},y=n(13),k=n(14),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}Object(y.createLogger)();var E=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case p:return Object.assign({},e,{searchField:t.payload});default:return e}},getRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case O:return Object.assign({},e,{robots:t.payload});default:return e}}}),N=Object(s.d)(E,Object(s.a)(k.a));i.a.render(Object(o.jsx)(a.a,{store:N,children:Object(o.jsx)(w,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robo-react-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/robo-react-app","/service-worker.js");C?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):R(e)}))}}()}},[[30,1,2]]]);
//# sourceMappingURL=main.6330d6a3.chunk.js.map