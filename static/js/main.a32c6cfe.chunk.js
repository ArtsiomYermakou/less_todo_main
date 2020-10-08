(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{102:function(e,t,a){e.exports=a(131)},107:function(e,t,a){},108:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a.n(o);a(107),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(108);var c,l,s=a(174),u=a(175),d=a(176),m=a(167),f=a(133),b=a(170),E=a(178),O=a(179),T=a(177),p=a(18),v=a(7),g=a(60),j=a(82),h=a.n(j).a.create(Object(v.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"298395db-2088-448b-824f-15482d6c3999"}})),k=function(e){return h.post("auth/login",e)},I=function(){return h.get("auth/me")},S=function(){return h.delete("/auth/login")},C=function(){return h.get("todo-lists")},y=function(e){return h.post("todo-lists",{title:e})},A=function(e){return h.delete("todo-lists/".concat(e))},w=function(e,t){return h.put("todo-lists/".concat(e),{title:t})},D=function(e){return h.get("todo-lists/".concat(e,"/tasks"))},L=function(e,t){return h.delete("todo-lists/".concat(e,"/tasks/").concat(t))},P=function(e,t){return h.post("todo-lists/".concat(e,"/tasks"),{title:t})},N=function(e,t,a){return h.put("todo-lists/".concat(e,"/tasks/").concat(t),a)};!function(e){e[e.New=0]="New",e[e.InProgress=1]="InProgress",e[e.Completed=2]="Completed",e[e.Draft=3]="Draft"}(c||(c={})),function(e){e[e.Low=0]="Low",e[e.Middle=1]="Middle",e[e.Hi=2]="Hi",e[e.Urgently=3]="Urgently",e[e.Later=4]="Later"}(l||(l={}));var x=function(e,t){e.messages.length?t(U(e.messages[0])):t(U("Some error occurred")),t(H("failed"))},R=function(e,t){t(U(e.message?e.message:"Some error occurred")),t(H("failed"))},F={isLoggedIn:!1},G=function(e){return{type:"login/SET-IS-LOGGED-IN",value:e}},K={status:"idle",error:null,isInitialized:!1},U=function(e){return{type:"APP/SET-ERROR",error:e}},H=function(e){return{type:"APP/SET-STATUS",status:e}},M=function(e){return{type:"APP/SET-INITIALIZED",isInitialized:e}},_=[],z=a(35),V={},Z=function(e,t,a){return function(n,r){var o=r().tasks[a].find((function(t){return t.id===e}));if(o){var i=Object(v.a)({deadline:o.deadline,description:o.description,priority:o.priority,startDate:o.startDate,title:o.title,status:o.status},t);N(a,e,i).then((function(r){if(0===r.data.resultCode){var o=function(e,t,a){return{type:"UPDATE-TASK",model:t,todolistId:a,taskId:e}}(e,t,a);n(o)}else x(r.data,n)})).catch((function(e){R(e,n)}))}else console.warn("task not found in the state")}},q=a(171),B=a(132),Y=a(45),J=a(180),W=a(168),$=r.a.memo((function(e){var t=e.addItem,a=e.disabled,o=void 0!==a&&a;console.log("AddItemForm called");var i=Object(n.useState)(""),c=Object(Y.a)(i,2),l=c[0],s=c[1],u=Object(n.useState)(null),d=Object(Y.a)(u,2),f=d[0],b=d[1],E=function(){""!==l.trim()?(t(l),s("")):b("Title is required")};return r.a.createElement("div",null,r.a.createElement(J.a,{variant:"outlined",disabled:o,error:!!f,value:l,onChange:function(e){s(e.currentTarget.value)},onKeyPress:function(e){null!==f&&b(null),13===e.charCode&&E()},label:"Title",helperText:f}),r.a.createElement(m.a,{color:"primary",onClick:E,disabled:o},r.a.createElement(W.a,null)))})),Q=a(90),X=r.a.memo((function(e){console.log("EditableSpan called");var t=Object(n.useState)(!1),a=Object(Y.a)(t,2),o=a[0],i=a[1],c=Object(n.useState)(e.value),l=Object(Y.a)(c,2),s=l[0],u=l[1];return o?r.a.createElement(J.a,{value:s,onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),e.onChange(s)}}):r.a.createElement("span",{onDoubleClick:function(){i(!0),u(e.value)}},e.value)})),ee=a(169),te=a(182),ae=r.a.memo((function(e){var t=Object(n.useCallback)((function(){return e.removeTask(e.task.id,e.todolistId)}),[e.task.id,e.todolistId]),a=Object(n.useCallback)((function(t){var a=t.currentTarget.checked;e.changeTaskStatus(e.task.id,a?c.Completed:c.New,e.todolistId)}),[e.task.id,e.todolistId]),o=Object(n.useCallback)((function(t){e.changeTaskTitle(e.task.id,t,e.todolistId)}),[e.task.id,e.todolistId]);return r.a.createElement("div",{key:e.task.id,className:e.task.status===c.Completed?"is-done":""},r.a.createElement(te.a,{checked:e.task.status===c.Completed,color:"primary",onChange:a}),r.a.createElement(X,{value:e.task.title,onChange:o}),r.a.createElement(m.a,{onClick:t},r.a.createElement(ee.a,null)))})),ne=r.a.memo((function(e){var t=e.demo,a=void 0!==t&&t,o=Object(Q.a)(e,["demo"]);console.log("Todolist called");var i=Object(p.b)();Object(n.useEffect)((function(){if(!a){var e,t=(e=o.todolist.id,function(t){t(H("loading")),D(e).then((function(a){var n=a.data.items;t(function(e,t){return{type:"SET-TASKS",tasks:e,todolistId:t}}(n,e)),t(H("succeeded"))}))});i(t)}}),[]);var l=Object(n.useCallback)((function(e){o.addTask(e,o.todolist.id)}),[o.addTask,o.todolist.id]),s=Object(n.useCallback)((function(e){o.changeTodolistTitle(o.todolist.id,e)}),[o.todolist.id,o.changeTodolistTitle]),u=Object(n.useCallback)((function(){return o.changeFilter("all",o.todolist.id)}),[o.todolist.id,o.changeFilter]),d=Object(n.useCallback)((function(){return o.changeFilter("active",o.todolist.id)}),[o.todolist.id,o.changeFilter]),f=Object(n.useCallback)((function(){return o.changeFilter("completed",o.todolist.id)}),[o.todolist.id,o.changeFilter]),E=o.tasks;return"active"===o.todolist.filter&&(E=o.tasks.filter((function(e){return e.status===c.New}))),"completed"===o.todolist.filter&&(E=o.tasks.filter((function(e){return e.status===c.Completed}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement(X,{value:o.todolist.title,onChange:s}),r.a.createElement(m.a,{onClick:function(){o.removeTodolist(o.todolist.id)},disabled:"loading"===o.todolist.entityStatus},r.a.createElement(ee.a,null))),r.a.createElement($,{addItem:l,disabled:"loading"===o.todolist.entityStatus}),r.a.createElement("div",null,E.map((function(e){return r.a.createElement(ae,{key:e.id,task:e,todolistId:o.todolist.id,removeTask:o.removeTask,changeTaskTitle:o.changeTaskTitle,changeTaskStatus:o.changeTaskStatus})}))),r.a.createElement("div",{style:{paddingTop:"10px"}},r.a.createElement(b.a,{variant:"all"===o.todolist.filter?"outlined":"text",onClick:u,color:"default"},"All"),r.a.createElement(b.a,{variant:"active"===o.todolist.filter?"outlined":"text",onClick:d,color:"primary"},"Active"),r.a.createElement(b.a,{variant:"completed"===o.todolist.filter?"outlined":"text",onClick:f,color:"secondary"},"Completed")))})),re=a(14),oe=function(e){var t=e.demo,a=void 0!==t&&t,o=Object(p.c)((function(e){return e.todolists})),i=Object(p.c)((function(e){return e.tasks})),c=Object(p.b)(),l=Object(p.c)((function(e){return e.auth.isLoggedIn}));Object(n.useEffect)((function(){if(!a&&l){var e=function(e){e(H("loading")),C().then((function(t){e({type:"SET-TODOLISTS",todolists:t.data}),e(H("succeeded"))}))};c(e)}}),[]);var s=Object(n.useCallback)((function(e,t){var a=function(e,t){return function(a){L(t,e).then((function(n){var r=function(e,t){return{type:"REMOVE-TASK",taskId:e,todolistId:t}}(e,t);a(r)}))}}(e,t);c(a)}),[]),u=Object(n.useCallback)((function(e,t){var a=function(e,t){return function(a){a(H("loading")),P(t,e).then((function(e){if(0===e.data.resultCode){var t=function(e){return{type:"ADD-TASK",task:e}}(e.data.data.item);a(t),a(H("succeeded"))}else x(e.data,a)})).catch((function(e){R(e,a)}))}}(e,t);c(a)}),[]),d=Object(n.useCallback)((function(e,t,a){var n=Z(e,{status:t},a);c(n)}),[]),m=Object(n.useCallback)((function(e,t,a){var n=Z(e,{title:t},a);c(n)}),[]),f=Object(n.useCallback)((function(e,t){var a={type:"CHANGE-TODOLIST-FILTER",id:t,filter:e};c(a)}),[]),b=Object(n.useCallback)((function(e){var t,a=(t=e,function(e){e(H("loading")),e({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:t,status:"loading"}),A(t).then((function(a){e(function(e){return{type:"REMOVE-TODOLIST",id:e}}(t)),e(H("succeeded"))}))});c(a)}),[]),E=Object(n.useCallback)((function(e,t){var a=function(e,t){return function(a){w(e,t).then((function(n){a(function(e,t){return{type:"CHANGE-TODOLIST-TITLE",id:e,title:t}}(e,t))}))}}(e,t);c(a)}),[]),O=Object(n.useCallback)((function(e){var t=function(e){return function(t){t(H("loading")),y(e).then((function(e){t({type:"ADD-TODOLIST",todolist:e.data.data.item}),t(H("succeeded"))}))}}(e);c(t)}),[c]);return l?r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,{container:!0,style:{padding:"20px"}},r.a.createElement($,{addItem:O})),r.a.createElement(q.a,{container:!0,spacing:3},o.map((function(e){var t=i[e.id];return r.a.createElement(q.a,{item:!0,key:e.id},r.a.createElement(B.a,{style:{padding:"10px"}},r.a.createElement(ne,{todolist:e,tasks:t,removeTask:s,changeFilter:f,addTask:u,changeTaskStatus:d,removeTodolist:b,changeTaskTitle:m,changeTodolistTitle:E,demo:a})))})))):r.a.createElement(re.a,{to:"/login"})},ie=a(184),ce=a(181);function le(e){return r.a.createElement(ce.a,Object.assign({elevation:6,variant:"filled"},e))}function se(){var e=Object(p.c)((function(e){return e.app.error})),t=Object(p.b)(),a=function(e,a){"clickaway"!==a&&t(U(null))},n=null!==e;return r.a.createElement(ie.a,{open:n,autoHideDuration:6e3,onClose:a},r.a.createElement(le,{onClose:a,severity:"error"},e))}var ue=a(185),de=a(166),me=a(172),fe=a(173),be=a(89),Ee=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.auth.isLoggedIn})),a=Object(be.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<6&&(t.password="Password > 6 symbols"):t.password="Required",t},onSubmit:function(t){var a;e((a=t,function(e){e(H("loading")),k(a).then((function(t){0===t.data.resultCode?(e(G(!0)),e(H("succeeded"))):x(t.data,e)})).catch((function(t){R(t,e)}))}))}});return t?r.a.createElement(re.a,{to:"/"}):r.a.createElement(q.a,{container:!0,justify:"center"},r.a.createElement(q.a,{item:!0,xs:4},r.a.createElement("form",{onSubmit:a.handleSubmit},r.a.createElement(ue.a,null,r.a.createElement(de.a,null,r.a.createElement("h3",null,"Email and password for the test"),r.a.createElement("p",null,"Email: artem_ermakov_1999@mail.ru"),r.a.createElement("p",null,"Password: Uzatit1999")),r.a.createElement(me.a,null,r.a.createElement(J.a,Object.assign({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.errors.email?r.a.createElement("div",{style:{color:"red"}},a.errors.email):null,r.a.createElement(J.a,Object.assign({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.errors.password?r.a.createElement("div",{style:{color:"red"}},a.errors.password):null,r.a.createElement(fe.a,{label:"Remember me",control:r.a.createElement(te.a,a.getFieldProps("rememberMe"))}),r.a.createElement(b.a,{type:"submit",variant:"contained",color:"primary"},"Login"))))))};var Oe=function(e){var t=e.demo,a=void 0!==t&&t,o=Object(p.b)(),i=Object(p.c)((function(e){return e.app.status})),c=Object(p.c)((function(e){return e.app.isInitialized})),l=Object(p.c)((function(e){return e.auth.isLoggedIn}));Object(n.useEffect)((function(){o((function(e){I().then((function(t){0===t.data.resultCode&&e(G(!0)),e(e(M(!0)))}))}))}),[]);var v=Object(n.useCallback)((function(){o((function(e){e(H("loading")),S().then((function(t){0===t.data.resultCode?(e(G(!1)),e(H("succeeded"))):x(t.data,e)})).catch((function(t){R(t,e)}))}))}),[]);return c?r.a.createElement("div",{className:"App"},r.a.createElement(se,null),r.a.createElement(u.a,{position:"static"},r.a.createElement(d.a,null,r.a.createElement(m.a,{edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(T.a,null)),r.a.createElement(f.a,{variant:"h6"},"News"),l&&r.a.createElement(b.a,{onClick:v,color:"inherit"},"Log out")),"loading"===i&&r.a.createElement(E.a,null)),r.a.createElement(O.a,{fixed:!0},r.a.createElement(re.d,null,r.a.createElement(re.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(Ee,null)}}),r.a.createElement(re.b,{exact:!0,path:"/less_todo_main",render:function(){return r.a.createElement(oe,{demo:a})}}),r.a.createElement(re.b,{exact:!0,path:"/less_todo_main/",render:function(){return r.a.createElement(oe,{demo:a})}}),r.a.createElement(re.b,{exact:!0,path:"/",render:function(){return r.a.createElement(oe,{demo:a})}}),r.a.createElement(re.b,{exact:!0,path:"/",render:function(){return r.a.createElement(oe,{demo:a})}})))):r.a.createElement("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"}},r.a.createElement(s.a,null))},Te=a(42),pe=a(88),ve=Object(Te.c)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TASK":return Object(v.a)(Object(v.a)({},e),{},Object(z.a)({},t.todolistId,e[t.todolistId].filter((function(e){return e.id!=t.taskId}))));case"ADD-TASK":return Object(v.a)(Object(v.a)({},e),{},Object(z.a)({},t.task.todoListId,[t.task].concat(Object(g.a)(e[t.task.todoListId]))));case"UPDATE-TASK":return Object(v.a)(Object(v.a)({},e),{},Object(z.a)({},t.todolistId,e[t.todolistId].map((function(e){return e.id===t.taskId?Object(v.a)(Object(v.a)({},e),t.model):e}))));case"ADD-TODOLIST":return Object(v.a)(Object(v.a)({},e),{},Object(z.a)({},t.todolist.id,[]));case"REMOVE-TODOLIST":var a=Object(v.a)({},e);return delete a[t.id],a;case"SET-TODOLISTS":var n=Object(v.a)({},e);return t.todolists.forEach((function(e){n[e.id]=[]})),n;case"SET-TASKS":return Object(v.a)(Object(v.a)({},e),{},Object(z.a)({},t.todolistId,t.tasks));default:return e}},todolists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TODOLIST":return e.filter((function(e){return e.id!=t.id}));case"ADD-TODOLIST":return[Object(v.a)(Object(v.a)({},t.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(g.a)(e));case"CHANGE-TODOLIST-TITLE":return e.map((function(e){return e.id===t.id?Object(v.a)(Object(v.a)({},e),{},{title:t.title}):e}));case"CHANGE-TODOLIST-FILTER":return e.map((function(e){return e.id===t.id?Object(v.a)(Object(v.a)({},e),{},{filter:t.filter}):e}));case"CHANGE-TODOLIST-ENTITY-STATUS":return e.map((function(e){return e.id===t.id?Object(v.a)(Object(v.a)({},e),{},{entityStatus:t.status}):e}));case"SET-TODOLISTS":return t.todolists.map((function(e){return Object(v.a)(Object(v.a)({},e),{},{filter:"all",entityStatus:"idle"})}));default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-STATUS":return Object(v.a)(Object(v.a)({},e),{},{status:t.status});case"APP/SET-ERROR":return Object(v.a)(Object(v.a)({},e),{},{error:t.error});case"APP/SET-INITIALIZED":return Object(v.a)(Object(v.a)({},e),{},{isInitialized:t.isInitialized});default:return Object(v.a)({},e)}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET-IS-LOGGED-IN":return Object(v.a)(Object(v.a)({},e),{},{isLoggedIn:t.value});default:return e}}}),ge=Object(Te.d)(ve,Object(Te.a)(pe.a));window.store=ge;var je=a(47);i.a.render(r.a.createElement(p.a,{store:ge},r.a.createElement(je.a,null,r.a.createElement(Oe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[102,1,2]]]);
//# sourceMappingURL=main.a32c6cfe.chunk.js.map