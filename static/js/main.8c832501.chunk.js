(this["webpackJsonphabbit-rabbit"]=this["webpackJsonphabbit-rabbit"]||[]).push([[0],{92:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(17),r=n.n(a),o=n(7),l=n(10),s=n(113),d=n(120),b=n(44),j=n(65),u=n(16),h=n.n(u),f=n(66),m=n(114),O=n(116),g=n(122),x=n(105),k=n(121),p=n(103),w=n(104),v=n(2);var S=function(e){var t=e.habit,n=e.onCheckHabit,c=e.openEditModal,i=e.openDeleteModal,a=t.numTimesChecked===t.frequency;return Object(v.jsxs)(b.a,{style:Object(o.a)({transition:"opacity 0.3s"},(a||t.checked)&&{opacity:.3}),direction:"row",justify:"between",children:[Object(v.jsx)(k.a,{disabled:a,checked:t.checked,label:t.label,onChange:function(e){return n(e.target.checked,t.label)}}),Object(v.jsx)(g.a,{alignSelf:"center",margin:{left:"small",right:"small"},weight:"bold",children:"".concat(t.numTimesChecked,"/").concat(t.frequency)}),Object(v.jsxs)(b.a,{direction:"row",align:"end",justify:"end",children:[Object(v.jsx)(O.a,{icon:Object(v.jsx)(p.a,{}),onClick:function(){return c(t)}}),Object(v.jsx)(O.a,{icon:Object(v.jsx)(w.a,{color:"trash-color"}),onClick:function(){return i(t)}})]})]})};var C=function(e){var t=e.habits,n=e.setHabits,c=e.openCreateModal,i=e.openEditModal,a=e.openDeleteModal,r=function(e,c){n(t.map((function(t){return t.label===c?Object(o.a)(Object(o.a)({},t),{},{checked:e,numTimesChecked:e?Math.min(t.numTimesChecked+1,t.frequency):t.numTimesChecked-1}):t})))};return Object(v.jsxs)(b.a,{direction:"column",overflow:"hidden",children:[Object(v.jsx)(b.a,{margin:"small",border:{color:"border-color",size:"small",side:"bottom"},children:Object(v.jsx)(O.a,{alignSelf:"center",onClick:c,children:Object(v.jsxs)(b.a,{direction:"row",align:"center",justify:"center",children:[Object(v.jsx)(x.a,{color:"add-color"}),Object(v.jsx)(g.a,{margin:"small",children:"Add New Habit"})]})})}),0===t.length?Object(v.jsx)(g.a,{alignSelf:"center",margin:{top:"large"},children:"No habits to show..."}):t.map((function(e,t){return Object(v.jsx)(S,{habit:e,onCheckHabit:r,openEditModal:i,openDeleteModal:a},"".concat(e.label," ").concat(t))}))]})},y=n(118),M=n(119),E=n(115),D=[1,2,3,4,5,6,7];var H=function(e){var t=e.title,n=e.closeModal,i=e.confirmAction,a=e.habit,r=void 0===a?void 0:a,o=Object(c.useState)(r?r.label:""),s=Object(l.a)(o,2),d=s[0],j=s[1],u=Object(c.useState)(r?r.frequency:7),h=Object(l.a)(u,2),f=h[0],m=h[1];return Object(v.jsx)(y.a,{responsive:!1,onEsc:n,onClickOutside:n,children:Object(v.jsxs)(b.a,{pad:"medium",children:[Object(v.jsxs)(b.a,{direction:"column",pad:"medium",children:[Object(v.jsx)(g.a,{alignSelf:"center",margin:"small",children:t}),Object(v.jsx)(M.a,{placeholder:"Habit Name...",value:d,onChange:function(e){return j(e.target.value)},size:"medium"}),Object(v.jsxs)(b.a,{direction:"row",margin:{top:"small",bottom:"small"},children:[Object(v.jsx)(g.a,{alignSelf:"center",margin:{right:"small"},children:"Times per week:"}),Object(v.jsx)(E.a,{options:D,value:f,onChange:function(e){var t=e.option;return m(t)}})]})]}),Object(v.jsxs)(b.a,{direction:"row",margin:{top:"medium"},justify:"between",children:[Object(v.jsx)(O.a,{label:"Cancel",margin:{right:"small"},color:"black",onClick:n}),Object(v.jsx)(O.a,{label:"Confirm",margin:{left:"small"},color:"blue",onClick:function(){return i(d,f)}})]})]})})};var T=function(e){var t=e.closeModal,n=e.confirmAction;return Object(v.jsx)(y.a,{responsive:!1,onEsc:t,onClickOutside:t,children:Object(v.jsxs)(b.a,{pad:"medium",children:[Object(v.jsx)(b.a,{direction:"column",pad:"medium",children:Object(v.jsx)(g.a,{alignSelf:"center",margin:"small",children:"Remove item?"})}),Object(v.jsxs)(b.a,{direction:"row",margin:{top:"medium"},justify:"between",children:[Object(v.jsx)(O.a,{label:"Cancel",margin:{right:"small"},color:"black",onClick:t}),Object(v.jsx)(O.a,{label:"Delete",margin:{left:"small"},color:"red",onClick:n})]})]})})};var A=function(e){var t=e.habits,n=e.setHabits,i=Object(c.useState)(""),a=Object(l.a)(i,2),r=a[0],s=a[1],d=Object(c.useState)(!1),j=Object(l.a)(d,2),u=j[0],h=j[1],O=Object(c.useState)(!1),g=Object(l.a)(O,2),x=g[0],k=g[1],p=Object(c.useState)(!1),w=Object(l.a)(p,2),S=w[0],y=w[1],M=function(){s(""),h(!1)},E=function(){s(""),k(!1)},D=function(){y(!1)};return Object(v.jsxs)(b.a,{children:[Object(v.jsx)(C,{habits:t,setHabits:n,openCreateModal:function(){y(!0)},openEditModal:function(e){s(e.id),k(!0)},openDeleteModal:function(e){s(e.id),h(!0)}}),u&&Object(v.jsx)(T,{closeModal:M,confirmAction:function(){n(t.filter((function(e){return e.id!==r}))),M()}}),x&&Object(v.jsx)(H,{title:"Edit Habit",closeModal:E,confirmAction:function(e,c){n(t.map((function(t){return t.id===r?Object(o.a)(Object(o.a)({},t),{},{label:e,frequency:c}):t}))),E()},habit:t.find((function(e){return e.id===r}))}),S&&Object(v.jsx)(H,{title:"Create Habit",closeModal:D,confirmAction:function(e,c){var i={label:e,frequency:c,checked:!1,confirm:!1,numTimesChecked:0,id:Object(m.a)()};n([].concat(Object(f.a)(t),[i])),D()}})]})},I=n(123),q=n(108),z=n(109),F=n(110);function N(e){return Object(v.jsx)(b.a,Object(o.a)({tag:"header",direction:"row",align:"center",justify:"between",background:"header-bg",pad:{left:"medium",right:"small",vertical:"small"},elevation:"medium",style:{zIndex:"1"}},e))}var B=function(e){var t=e.setShowSidebar,n=e.showSidebar,c=e.darkMode,i=e.setDarkMode;return Object(v.jsxs)(N,{children:[Object(v.jsx)(I.a,{level:"3",margin:"none",children:"Habbit Rabbit"}),Object(v.jsxs)(b.a,{direction:"row",children:[Object(v.jsx)(O.a,{icon:c?Object(v.jsx)(q.a,{}):Object(v.jsx)(z.a,{}),alignSelf:"center",margin:{right:"small"},onClick:function(){i(!c)}}),Object(v.jsx)(O.a,{icon:Object(v.jsx)(F.a,{}),onClick:function(){return t(!n)}})]})]})},J=n(106),L=n(111),Y=n(112);var R=function(e){var t=e.showSidebar,n=e.setShowSidebar;return Object(v.jsx)(J.a.Consumer,{children:function(e){return Object(v.jsx)(c.Fragment,{children:t&&"small"===e?Object(v.jsx)(y.a,{children:Object(v.jsxs)(b.a,{background:"light-2",tag:"header",align:"center",justify:"end",direction:"row",children:[Object(v.jsx)(O.a,{icon:Object(v.jsx)(Y.a,{}),onClick:function(){return n(!1)}}),Object(v.jsx)(b.a,{fill:!0,background:"light-2",align:"center",justify:"center",children:"Sidebar"})]})}):Object(v.jsx)(L.a,{direction:"horizontal",open:t,children:Object(v.jsx)(b.a,{flex:!0,width:"medium",background:"light-2",elevation:"small",align:"center",justify:"center",children:"Sidebar"})})})}})},P=Object(j.deepMerge)(s.a,{global:{colors:{"header-bg":{light:"#228BE6",dark:"#81218A"},"border-color":{light:"black",dark:"white"},"trash-color":{light:"red",dark:"#D91818"},"add-color":{light:"blue",dark:"#2521EB"}},font:{family:"Roboto",size:"18px",height:"20px"}}}),V="habits",G="timeLastVisited",K="ddd MM-DD-YYYY hh:mm:ss";var Q=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)([]),r=Object(l.a)(a,2),s=r[0],j=r[1],u=Object(c.useState)(!1),f=Object(l.a)(u,2),m=f[0],O=f[1];return window.addEventListener("beforeunload",(function(e){e.preventDefault(),window.localStorage.setItem(G,h()().format(K))})),Object(c.useEffect)((function(){var e=localStorage.getItem(V);e&&j(JSON.parse(e))}),[]),Object(c.useEffect)((function(){var e=h()(window.localStorage.getItem(G),K),t=h()().diff(e,"days");t>=1&&(t>=7&&(console.log("weekly reset diff"),j((function(e){return e.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{numTimesChecked:0})}))}))),console.log("daily reset diff"),j((function(e){return e.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{checked:!1})}))}))),setTimeout((function(){console.log("resetHabits fired"),1===h()().day()&&(console.log("weekly reset"),j((function(e){return e.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{numTimesChecked:0})}))}))),console.log("daily reset"),j((function(e){return e.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{checked:!1})}))}))}),h()("24:00:00","hh:mm:ss").diff(h()(),"milliseconds"))}),[]),Object(c.useEffect)((function(){localStorage.setItem(V,JSON.stringify(s))}),[s]),Object(v.jsx)(d.a,{full:!0,theme:P,themeMode:m?"dark":"light",children:Object(v.jsxs)(b.a,{fill:!0,children:[Object(v.jsx)(B,{setShowSidebar:i,showSidebar:n,darkMode:m,setDarkMode:O}),Object(v.jsxs)(b.a,{direction:"row",flex:!0,align:"start",overflow:{horizontal:"hidden"},pad:"medium",children:[Object(v.jsx)(b.a,{flex:!0,align:"center",justify:"center",app:!0,body:!0,children:Object(v.jsx)(A,{habits:s,setHabits:j})}),Object(v.jsx)(R,{showSidebar:n,setShowSidebar:i})]})]})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,124)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};r.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(Q,{})}),document.getElementById("root")),U()}},[[92,1,2]]]);
//# sourceMappingURL=main.8c832501.chunk.js.map