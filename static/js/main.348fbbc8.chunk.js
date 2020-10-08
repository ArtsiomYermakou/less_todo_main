(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{102:function(t,e,a){t.exports=a(131)},107:function(t,e,a){},108:function(t,e,a){},131:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(9),r=a.n(i);a(107),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(108);var c,l,s=a(174),u=a(175),d=a(176),m=a(167),f=a(133),b=a(170),O=a(178),E=a(179),T=a(177),v=a(18),g=a(7),p=a(60),j=a(82),h=a.n(j).a.create(Object(g.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"298395db-2088-448b-824f-15482d6c3999"}})),k=function(t){return h.post("auth/login",t)},I=function(){return h.get("auth/me")},S=function(){return h.delete("/auth/login")},C=function(){return h.get("todo-lists")},y=function(t){return h.post("todo-lists",{title:t})},A=function(t){return h.delete("todo-lists/".concat(t))},w=function(t,e){return h.put("todo-lists/".concat(t),{title:e})},D=function(t){return h.get("todo-lists/".concat(t,"/tasks"))},L=function(t,e){return h.delete("todo-lists/".concat(t,"/tasks/").concat(e))},P=function(t,e){return h.post("todo-lists/".concat(t,"/tasks"),{title:e})},N=function(t,e,a){return h.put("todo-lists/".concat(t,"/tasks/").concat(e),a)};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(c||(c={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(l||(l={}));var R=function(t,e){t.messages.length?e(U(t.messages[0])):e(U("Some error occurred")),e(H("failed"))},F=function(t,e){e(U(t.message?t.message:"Some error occurred")),e(H("failed"))},x={isLoggedIn:!1},G=function(t){return{type:"login/SET-IS-LOGGED-IN",value:t}},K={status:"idle",error:null,isInitialized:!1},U=function(t){return{type:"APP/SET-ERROR",error:t}},H=function(t){return{type:"APP/SET-STATUS",status:t}},M=function(t){return{type:"APP/SET-INITIALIZED",isInitialized:t}},z=[],V=a(35),Z={},q=function(t,e,a){return function(n,o){var i=o().tasks[a].find((function(e){return e.id===t}));if(i){var r=Object(g.a)({deadline:i.deadline,description:i.description,priority:i.priority,startDate:i.startDate,title:i.title,status:i.status},e);N(a,t,r).then((function(o){if(0===o.data.resultCode){var i=function(t,e,a){return{type:"UPDATE-TASK",model:e,todolistId:a,taskId:t}}(t,e,a);n(i)}else R(o.data,n)})).catch((function(t){F(t,n)}))}else console.warn("task not found in the state")}},B=a(171),Y=a(132),_=a(45),J=a(180),W=a(168),$=o.a.memo((function(t){var e=t.addItem,a=t.disabled,i=void 0!==a&&a;console.log("AddItemForm called");var r=Object(n.useState)(""),c=Object(_.a)(r,2),l=c[0],s=c[1],u=Object(n.useState)(null),d=Object(_.a)(u,2),f=d[0],b=d[1],O=function(){""!==l.trim()?(e(l),s("")):b("Title is required")};return o.a.createElement("div",null,o.a.createElement(J.a,{variant:"outlined",disabled:i,error:!!f,value:l,onChange:function(t){s(t.currentTarget.value)},onKeyPress:function(t){null!==f&&b(null),13===t.charCode&&O()},label:"Title",helperText:f}),o.a.createElement(m.a,{color:"primary",onClick:O,disabled:i},o.a.createElement(W.a,null)))})),Q=a(90),X=o.a.memo((function(t){console.log("EditableSpan called");var e=Object(n.useState)(!1),a=Object(_.a)(e,2),i=a[0],r=a[1],c=Object(n.useState)(t.value),l=Object(_.a)(c,2),s=l[0],u=l[1];return i?o.a.createElement(J.a,{value:s,onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),t.onChange(s)}}):o.a.createElement("span",{onDoubleClick:function(){r(!0),u(t.value)}},t.value)})),tt=a(169),et=a(182),at=o.a.memo((function(t){var e=Object(n.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),a=Object(n.useCallback)((function(e){var a=e.currentTarget.checked;t.changeTaskStatus(t.task.id,a?c.Completed:c.New,t.todolistId)}),[t.task.id,t.todolistId]),i=Object(n.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return o.a.createElement("div",{key:t.task.id,className:t.task.status===c.Completed?"is-done":""},o.a.createElement(et.a,{checked:t.task.status===c.Completed,color:"primary",onChange:a}),o.a.createElement(X,{value:t.task.title,onChange:i}),o.a.createElement(m.a,{onClick:e},o.a.createElement(tt.a,null)))})),nt=o.a.memo((function(t){var e=t.demo,a=void 0!==e&&e,i=Object(Q.a)(t,["demo"]);console.log("Todolist called");var r=Object(v.b)();Object(n.useEffect)((function(){if(!a){var t,e=(t=i.todolist.id,function(e){e(H("loading")),D(t).then((function(a){var n=a.data.items;e(function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(n,t)),e(H("succeeded"))}))});r(e)}}),[]);var l=Object(n.useCallback)((function(t){i.addTask(t,i.todolist.id)}),[i.addTask,i.todolist.id]),s=Object(n.useCallback)((function(t){i.changeTodolistTitle(i.todolist.id,t)}),[i.todolist.id,i.changeTodolistTitle]),u=Object(n.useCallback)((function(){return i.changeFilter("all",i.todolist.id)}),[i.todolist.id,i.changeFilter]),d=Object(n.useCallback)((function(){return i.changeFilter("active",i.todolist.id)}),[i.todolist.id,i.changeFilter]),f=Object(n.useCallback)((function(){return i.changeFilter("completed",i.todolist.id)}),[i.todolist.id,i.changeFilter]),O=i.tasks;return"active"===i.todolist.filter&&(O=i.tasks.filter((function(t){return t.status===c.New}))),"completed"===i.todolist.filter&&(O=i.tasks.filter((function(t){return t.status===c.Completed}))),o.a.createElement("div",null,o.a.createElement("h3",null,o.a.createElement(X,{value:i.todolist.title,onChange:s}),o.a.createElement(m.a,{onClick:function(){i.removeTodolist(i.todolist.id)},disabled:"loading"===i.todolist.entityStatus},o.a.createElement(tt.a,null))),o.a.createElement($,{addItem:l,disabled:"loading"===i.todolist.entityStatus}),o.a.createElement("div",null,O.map((function(t){return o.a.createElement(at,{key:t.id,task:t,todolistId:i.todolist.id,removeTask:i.removeTask,changeTaskTitle:i.changeTaskTitle,changeTaskStatus:i.changeTaskStatus})}))),o.a.createElement("div",{style:{paddingTop:"10px"}},o.a.createElement(b.a,{variant:"all"===i.todolist.filter?"outlined":"text",onClick:u,color:"default"},"All"),o.a.createElement(b.a,{variant:"active"===i.todolist.filter?"outlined":"text",onClick:d,color:"primary"},"Active"),o.a.createElement(b.a,{variant:"completed"===i.todolist.filter?"outlined":"text",onClick:f,color:"secondary"},"Completed")))})),ot=a(14),it=function(t){var e=t.demo,a=void 0!==e&&e,i=Object(v.c)((function(t){return t.todolists})),r=Object(v.c)((function(t){return t.tasks})),c=Object(v.b)(),l=Object(v.c)((function(t){return t.auth.isLoggedIn}));Object(n.useEffect)((function(){if(!a&&l){var t=function(t){t(H("loading")),C().then((function(e){t({type:"SET-TODOLISTS",todolists:e.data}),t(H("succeeded"))}))};c(t)}}),[]);var s=Object(n.useCallback)((function(t,e){var a=function(t,e){return function(a){L(e,t).then((function(n){var o=function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(t,e);a(o)}))}}(t,e);c(a)}),[]),u=Object(n.useCallback)((function(t,e){var a=function(t,e){return function(a){a(H("loading")),P(e,t).then((function(t){if(0===t.data.resultCode){var e=function(t){return{type:"ADD-TASK",task:t}}(t.data.data.item);a(e),a(H("succeeded"))}else R(t.data,a)})).catch((function(t){F(t,a)}))}}(t,e);c(a)}),[]),d=Object(n.useCallback)((function(t,e,a){var n=q(t,{status:e},a);c(n)}),[]),m=Object(n.useCallback)((function(t,e,a){var n=q(t,{title:e},a);c(n)}),[]),f=Object(n.useCallback)((function(t,e){var a={type:"CHANGE-TODOLIST-FILTER",id:e,filter:t};c(a)}),[]),b=Object(n.useCallback)((function(t){var e,a=(e=t,function(t){t(H("loading")),t({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:e,status:"loading"}),A(e).then((function(a){t(function(t){return{type:"REMOVE-TODOLIST",id:t}}(e)),t(H("succeeded"))}))});c(a)}),[]),O=Object(n.useCallback)((function(t,e){var a=function(t,e){return function(a){w(t,e).then((function(n){a(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e))}))}}(t,e);c(a)}),[]),E=Object(n.useCallback)((function(t){var e=function(t){return function(e){e(H("loading")),y(t).then((function(t){e({type:"ADD-TODOLIST",todolist:t.data.data.item}),e(H("succeeded"))}))}}(t);c(e)}),[c]);return l?o.a.createElement(o.a.Fragment,null,o.a.createElement(B.a,{container:!0,style:{padding:"20px"}},o.a.createElement($,{addItem:E})),o.a.createElement(B.a,{container:!0,spacing:3},i.map((function(t){var e=r[t.id];return o.a.createElement(B.a,{item:!0,key:t.id},o.a.createElement(Y.a,{style:{padding:"10px"}},o.a.createElement(nt,{todolist:t,tasks:e,removeTask:s,changeFilter:f,addTask:u,changeTaskStatus:d,removeTodolist:b,changeTaskTitle:m,changeTodolistTitle:O,demo:a})))})))):o.a.createElement(ot.a,{to:"/login"})},rt=a(184),ct=a(181);function lt(t){return o.a.createElement(ct.a,Object.assign({elevation:6,variant:"filled"},t))}function st(){var t=Object(v.c)((function(t){return t.app.error})),e=Object(v.b)(),a=function(t,a){"clickaway"!==a&&e(U(null))},n=null!==t;return o.a.createElement(rt.a,{open:n,autoHideDuration:6e3,onClose:a},o.a.createElement(lt,{onClose:a,severity:"error"},t))}var ut=a(185),dt=a(166),mt=a(172),ft=a(173),bt=a(89),Ot=function(){var t=Object(v.b)(),e=Object(v.c)((function(t){return t.auth.isLoggedIn})),a=Object(bt.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required",t.password?t.password.length<6&&(e.password="Password > 6 symbols"):e.password="Required",e},onSubmit:function(e){var a;t((a=e,function(t){t(H("loading")),k(a).then((function(e){0===e.data.resultCode?(t(G(!0)),t(H("succeeded"))):R(e.data,t)})).catch((function(e){F(e,t)}))}))}});return e?o.a.createElement(ot.a,{to:"/"}):o.a.createElement(B.a,{container:!0,justify:"center"},o.a.createElement(B.a,{item:!0,xs:4},o.a.createElement("form",{onSubmit:a.handleSubmit},o.a.createElement(ut.a,null,o.a.createElement(dt.a,null,o.a.createElement("h3",null,"Email and password for the test"),o.a.createElement("p",null,"Email: artem_ermakov_1999@mail.ru"),o.a.createElement("p",null,"Password: Uzatit1999")),o.a.createElement(mt.a,null,o.a.createElement(J.a,Object.assign({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.errors.email?o.a.createElement("div",{style:{color:"red"}},a.errors.email):null,o.a.createElement(J.a,Object.assign({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.errors.password?o.a.createElement("div",{style:{color:"red"}},a.errors.password):null,o.a.createElement(ft.a,{label:"Remember me",control:o.a.createElement(et.a,a.getFieldProps("rememberMe"))}),o.a.createElement(b.a,{type:"submit",variant:"contained",color:"primary"},"Login"))))))};var Et=function(t){var e=t.demo,a=void 0!==e&&e,i=Object(v.b)(),r=Object(v.c)((function(t){return t.app.status})),c=Object(v.c)((function(t){return t.app.isInitialized})),l=Object(v.c)((function(t){return t.auth.isLoggedIn}));Object(n.useEffect)((function(){i((function(t){I().then((function(e){0===e.data.resultCode&&t(G(!0)),t(t(M(!0)))}))}))}),[]);var g=Object(n.useCallback)((function(){i((function(t){t(H("loading")),S().then((function(e){0===e.data.resultCode?(t(G(!1)),t(H("succeeded"))):R(e.data,t)})).catch((function(e){F(e,t)}))}))}),[]);return c?o.a.createElement("div",{className:"App"},o.a.createElement(st,null),o.a.createElement(u.a,{position:"static"},o.a.createElement(d.a,null,o.a.createElement(m.a,{edge:"start",color:"inherit","aria-label":"menu"},o.a.createElement(T.a,null)),o.a.createElement(f.a,{variant:"h6"},"News"),l&&o.a.createElement(b.a,{onClick:g,color:"inherit"},"Log out")),"loading"===r&&o.a.createElement(O.a,null)),o.a.createElement(E.a,{fixed:!0},o.a.createElement(ot.d,null,o.a.createElement(ot.b,{exact:!0,path:"/login",render:function(){return o.a.createElement(Ot,null)}}),o.a.createElement(ot.b,{exact:!0,path:"/",render:function(){return o.a.createElement(it,{demo:a})}})))):o.a.createElement("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"}},o.a.createElement(s.a,null))},Tt=a(42),vt=a(88),gt=Object(Tt.c)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(g.a)(Object(g.a)({},t),{},Object(V.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!=e.taskId}))));case"ADD-TASK":return Object(g.a)(Object(g.a)({},t),{},Object(V.a)({},e.task.todoListId,[e.task].concat(Object(p.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(g.a)(Object(g.a)({},t),{},Object(V.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(g.a)(Object(g.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(g.a)(Object(g.a)({},t),{},Object(V.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var a=Object(g.a)({},t);return delete a[e.id],a;case"SET-TODOLISTS":var n=Object(g.a)({},t);return e.todolists.forEach((function(t){n[t.id]=[]})),n;case"SET-TASKS":return Object(g.a)(Object(g.a)({},t),{},Object(V.a)({},e.todolistId,e.tasks));default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!=e.id}));case"ADD-TODOLIST":return[Object(g.a)(Object(g.a)({},e.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(p.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(g.a)(Object(g.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(g.a)(Object(g.a)({},t),{},{filter:e.filter}):t}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.id?Object(g.a)(Object(g.a)({},t),{},{entityStatus:e.status}):t}));case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(g.a)(Object(g.a)({},t),{},{filter:"all",entityStatus:"idle"})}));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(g.a)(Object(g.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(g.a)(Object(g.a)({},t),{},{error:e.error});case"APP/SET-INITIALIZED":return Object(g.a)(Object(g.a)({},t),{},{isInitialized:e.isInitialized});default:return Object(g.a)({},t)}},auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"login/SET-IS-LOGGED-IN":return Object(g.a)(Object(g.a)({},t),{},{isLoggedIn:e.value});default:return t}}}),pt=Object(Tt.d)(gt,Object(Tt.a)(vt.a));window.store=pt;var jt=a(47);r.a.render(o.a.createElement(v.a,{store:pt},o.a.createElement(jt.a,null,o.a.createElement(Et,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[102,1,2]]]);
//# sourceMappingURL=main.348fbbc8.chunk.js.map