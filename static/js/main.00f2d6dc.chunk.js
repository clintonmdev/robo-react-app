(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(0),c=n(3),a=n.n(c),i=n(4),s=n(2),l=(n(26),function(e){var t=e.robots.map((function(e){return Object(o.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw shadow-5",children:[Object(o.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(e.id,"}?size=200x200")}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsx)("p",{children:e.email})]})]},e.id)}));return Object(o.jsx)("div",{children:t})}),h=function(e){e.searchfield;var t=e.searchChange;return Object(o.jsx)("div",{className:"pa2",children:Object(o.jsx)("input",{"aria-label":"search robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robots",onChange:t})})},d=function(){return Object(o.jsx)("h1",{className:"f2",children:"RoboFriends "})},u=function(e){return Object(o.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"},children:e.children})},b=(n(27),n(10)),f=n(11),j=n(14),p=n(13),g=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(e){var o;return Object(b.a)(this,n),(o=t.call(this,e)).state={hasError:!1},o}return Object(f.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(o.jsx)("h1",{children:"Oooops. thats not good "}):this.props.children}}]),n}(r.Component),v="CHANGE_SEARCH_FIELD",O="SET_ROBOTS";var w=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.getRobots.robots}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:v,payload:n}));var n},onRequestRobots:function(t){return e({type:O,payload:t})}}}))((function(e){var t=e.onRequestRobots;Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return t(e)}))}),[]);var n=e.robots.filter((function(t){return t.name.toLowerCase().includes(e.searchField.toLowerCase())}));return e.robots?Object(o.jsxs)("div",{className:"tc",children:[Object(o.jsx)(d,{}),Object(o.jsx)(h,{searchChange:e.onSearchChange}),Object(o.jsx)(u,{children:Object(o.jsx)(g,{children:Object(o.jsx)(l,{robots:n})})})]}):Object(o.jsx)("h1",{children:"Loading..."})})),x=(n(28),{searchField:""}),m={robots:[]},y=n(12),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var R=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case v:return Object.assign({},e,{searchField:t.payload});default:return e}},getRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case O:return Object.assign({},e,{robots:t.payload});default:return e}}}),E=Object(s.d)(R,Object(s.a)(y.a));a.a.render(Object(o.jsx)(i.a,{store:E,children:Object(o.jsx)(w,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robo-react-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robo-react-app","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):C(t,e)}))}}()}},[[29,1,2]]]);
//# sourceMappingURL=main.00f2d6dc.chunk.js.map