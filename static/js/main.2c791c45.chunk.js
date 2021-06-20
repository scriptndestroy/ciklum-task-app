(this["webpackJsonptask-app"]=this["webpackJsonptask-app"]||[]).push([[0],{100:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),s=n(6),c=n.n(s),r=(n(15),n(61),n(62),n(18),n(19),n(63),n(12)),o=(n(28),n(16)),l=n(34),u=n(47),d=n(3),p=n(53),j=n(36),h=n(50),O=n(13),b=n(1),f=Object(a.forwardRef)((function(t,e){var n=t.onSave,a=t.task,s=i.a.useState(a||{}),c=Object(r.a)(s,2),o=c[0],l=c[1],u=Object(p.a)({initialValues:{title:(null===a||void 0===a?void 0:a.title)?a.title:"",description:(null===a||void 0===a?void 0:a.description)?a.description:"",status:(null===a||void 0===a?void 0:a.status)?a.status:""},validate:function(t){var e={title:"",description:"",status:""};return t.title||(e.title="Title is required."),t.description||(e.description="Description is required."),t.status||(e.status="Status is required."),e},onSubmit:function(t){n(t),console.log("aaa")}}),f=function(t){return!(!u.touched[t]||!u.errors[t])},m=function(t){return f(t)&&Object(b.jsx)("small",{className:"p-error",children:u.errors[t]})};return Object(b.jsx)("div",{className:"form-demo",style:{marginTop:"2rem"},children:Object(b.jsx)("div",{className:"",children:Object(b.jsxs)("form",{id:"form-task",className:"p-fluid",onSubmit:function(t){return function(t){return t.preventDefault(),u.handleSubmit(),u.validateForm(o).then((function(t){t.title||t.description||n(o)})),!1}(t)},children:[Object(b.jsxs)("div",{className:"p-field",children:[Object(b.jsxs)("span",{className:"p-float-label",children:[Object(b.jsx)(j.InputText,{id:"title",name:"title",value:o.title,maxLength:100,onChange:function(t){return l(Object(d.a)(Object(d.a)({},o),{},{title:t.currentTarget.value}))},autoFocus:!0,className:Object(O.classNames)({"p-invalid":f("title")})}),Object(b.jsx)("label",{htmlFor:"title",className:Object(O.classNames)({"p-error":f("title")}),children:"Title*"})]}),m("title")]}),Object(b.jsxs)("div",{className:"p-field p-mt-6",children:[Object(b.jsxs)("span",{className:"p-float-label",children:[Object(b.jsx)(j.InputText,{id:"description",name:"description",value:o.description,maxLength:300,onChange:function(t){return l(Object(d.a)(Object(d.a)({},o),{},{description:t.currentTarget.value}))},className:Object(O.classNames)({"p-invalid":f("description")})}),Object(b.jsx)("label",{htmlFor:"description",className:Object(O.classNames)({"p-error":f("description")}),children:"Description*"})]}),m("description")]}),Object(b.jsxs)("div",{className:"p-field p-mt-6",children:[Object(b.jsxs)("span",{className:"p-float-label",children:[Object(b.jsx)(h.Dropdown,{id:"status",name:"status",options:[{label:"To Do",value:"TD"},{label:"Done",value:"D"}],value:o.status,onChange:function(t){return l(Object(d.a)(Object(d.a)({},o),{},{status:t.value}))},className:Object(O.classNames)({"p-invalid":f("status")})}),Object(b.jsx)("label",{htmlFor:"status",className:Object(O.classNames)({"p-error":f("status")}),children:"Status*"})]}),m("status")]})]})})})})),m=function(t){var e=t.open,n=t.title,i=t.task,s=t.onSave,c=t.onClose,r=Object(a.useRef)(null);return Object(b.jsx)(u.Dialog,{draggable:!1,dismissableMask:!0,footer:Object(b.jsxs)("div",{children:[Object(b.jsx)(o.Button,{label:"No",icon:"pi pi-times",onClick:c,className:"p-button-text"}),Object(b.jsx)(o.Button,{label:"Yes",icon:"pi pi-check",type:"submit",form:"form-task",autoFocus:!0})]}),header:n,onHide:c,position:"top",style:{width:"30rem",marginTop:"5rem"},visible:e,children:Object(b.jsx)(f,{ref:r,task:i,onSave:function(t){return s(t)}})})},v=function(t){var e=t.title,n=t.tasks,a=t.onChange,s=t.readOnly,c=i.a.useState({title:"",description:"",status:""}),u=Object(r.a)(c,2),d=u[0],p=u[1],j=i.a.useState(!1),h=Object(r.a)(j,2),O=h[0],f=h[1],v=function(){f(!0)},N=function(t){p(n[t]),f(!0)};return Object(b.jsxs)(i.a.Fragment,{children:[Object(b.jsx)(m,{title:d.id?"Edit Task":"Add Task",task:d,onSave:function(t){return function(t){a(t),p({}),f(!1)}(t)},onClose:function(){f(!1),p({})},open:O}),Object(b.jsx)(l.Panel,{headerTemplate:function(t){var n="".concat(t.className," p-jc-start"),a="".concat(t.titleClassName," p-pl-1");return Object(b.jsxs)("div",{className:n,children:[Object(b.jsx)("span",{className:a,children:e}),!s&&Object(b.jsx)(o.Button,{label:"Add task",id:"addTask",icon:"pi pi-plus",onClick:v})]})},className:"p-shadow-1 m-mt-1",children:n.map((function(t,e){return Object(b.jsx)(l.Panel,{headerTemplate:function(n){return function(t,e,n){var a="".concat(t.className," p-jc-start p-p-2"),i="".concat(t.titleClassName," p-pl-1");return Object(b.jsxs)("div",{className:a,children:[Object(b.jsx)("span",{className:i,children:e}),Object(b.jsx)(o.Button,{className:"p-button-rounded p-button-text",icon:"pi pi-ellipsis-v",onClick:function(){return N(n)}})]})}(n,t.title||"",e)},header:t.title,className:"p-mb-1",children:t.description},e)}))})]})},N=n(24),x=n(55),k=n(54);console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/ciklum-task-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}));var S,T="PRO"===Object({NODE_ENV:"production",PUBLIC_URL:"/ciklum-task-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_STAGE?{ciklum_api:"https://localhost:5001/",DEV:!1}:"DEV"===Object({NODE_ENV:"production",PUBLIC_URL:"/ciklum-task-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_STAGE?{ciklum_api:"https://localhost:44311/",DEV:!0}:{ciklum_api:"https://localhost:5001/",DEV:!1},E=Object(d.a)(Object(d.a)({},T),{},{VERSION:"v 0.190621"}),_=n(14),g=n.n(_),D=n(25),L=n(51),C=n(26),R=n.n(C),A=n(17),w=n(52);!function(t){t.LOADING="LOADING",t.LOADING_CLEAR="LOADING_CLEAR"}(S||(S={}));var y=function(){return{type:S.LOADING,payload:""}},F=function(){return{type:S.LOADING_CLEAR,payload:""}},I={showLoading:!1},P=Object(A.b)({uiReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case S.LOADING:return Object(d.a)(Object(d.a)({},t),{},{showLoading:!0});case S.LOADING_CLEAR:return Object(d.a)(Object(d.a)({},t),{},{showLoading:!1});default:return t}}}),U=Object(A.c)(P,Object(A.a)(w.a)),W=new(function(t){Object(x.a)(n,t);var e=Object(k.a)(n);function n(){var t;return Object(N.a)(this,n),(t=e.call(this)).URL=void 0,t.URL=E.ciklum_api+"Tasks",t}return n}(function(){function t(){Object(N.a)(this,t),this.URL=void 0,this.URL=E.ciklum_api}return Object(L.a)(t,[{key:"setLoading",value:function(){U.dispatch(y())}},{key:"clearLoading",value:function(){U.dispatch(F())}},{key:"onInit",value:function(){this.setLoading()}},{key:"onFinish",value:function(t,e){return e||this.clearLoading(),t.data}},{key:"onFinishError",value:function(t,e){throw e||this.clearLoading(),t}},{key:"getAll",value:function(){var t=Object(D.a)(g.a.mark((function t(){var e=this;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.onInit(),t.abrupt("return",R.a.get(this.URL).then((function(t){return e.onFinish(t)})).catch((function(t){return e.onFinishError(t)})));case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"create",value:function(){var t=Object(D.a)(g.a.mark((function t(e){var n=this;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.onInit(),t.abrupt("return",R.a.post("".concat(this.URL),e).then((function(t){return n.onFinish(t)})).catch((function(t){return n.onFinishError(t)})));case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"update",value:function(){var t=Object(D.a)(g.a.mark((function t(e){var n=this;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.onInit(),t.abrupt("return",R.a.put("".concat(this.URL),e).then((function(t){return n.onFinish(t)})).catch((function(t){return n.onFinishError(t)})));case 2:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),t}())),G=function(t){var e=i.a.useState([]),n=Object(r.a)(e,2),a=n[0],s=n[1],c=function(t){t.id?function(t){W.update(t).then((function(t){s(t)})).catch((function(t){console.error(t)}))}(t):function(t){W.create(t).then((function(t){s(t)})).catch((function(t){console.error(t)}))}(t)};return Object(b.jsxs)("div",{className:"p-grid",children:[Object(b.jsx)("div",{className:"p-col-12 p-lg-2",children:Object(b.jsx)(v,{title:"To Do",onChange:c,tasks:a.filter((function(t){return"TD"===t.status}))})}),Object(b.jsx)("div",{className:"p-col-12 p-lg-2",children:Object(b.jsx)(v,{readOnly:!0,title:"Done",onChange:c,tasks:a.filter((function(t){return"D"===t.status}))})})]})};var H=function(){return Object(b.jsx)("div",{className:"p-p-6",children:Object(b.jsx)(G,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(H,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},15:function(t,e,n){},63:function(t,e,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.2c791c45.chunk.js.map