(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(4),c=n.n(a),s=n(5),i=n(6),r=n(9),b=n(8),o=n(1),l=n.n(o),d=n(7),u=n.n(d),j=(n(3),n(0)),h=function(t){var e,n=t.tabs,a=t.selectedTabId,c=t.onTabSelected;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"Tabs nav nav-tabs",children:n.map((function(t){return Object(j.jsx)("a",{href:t.id,className:u()("nav-link",{active:t.id===a}),onClick:function(e){e.preventDefault(),c(t)},children:t.title})}))}),Object(j.jsx)("p",{className:"mt-3",children:null===(e=n.find((function(t){return t.id===a})))||void 0===e?void 0:e.content})]})},m=(n(15),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),v=function(t){Object(r.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={selectedTab:m[0]},t.chooseTab=function(e){t.setState({selectedTab:e})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state.selectedTab;return Object(j.jsxs)("div",{className:"App container",children:[Object(j.jsxs)("h1",{className:"mt-2 mb-5",children:["Selected tab is"," ",t.title]}),Object(j.jsx)(h,{tabs:m,selectedTabId:t.id,onTabSelected:this.chooseTab})]})}}]),n}(l.a.Component),f=v;c.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7088051f.chunk.js.map