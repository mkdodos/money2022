(this["webpackJsonpsocial-cool"]=this["webpackJsonpsocial-cool"]||[]).push([[0],{219:function(e,t,c){"use strict";c.r(t);var n=c(71),a=c.n(n),r=c(1),s=c.n(r),i=c(16),o=c(31),j=c(9),l=c(236),u=c(79),b=c(22),d=c(143),O=(c(220),c(187),d.a.initializeApp({apiKey:"AIzaSyDUSJ5yzHvTCCSQTuONsPtOBGodjamReHc",authDomain:"money2022-173b9.firebaseapp.com",projectId:"money2022-173b9",storageBucket:"money2022-173b9.appspot.com",messagingSenderId:"944583877759",appId:"1:944583877759:web:0fd8a43af8a727a76c0b4a"})),h=d.a.firestore(),x=(d.a.initializeApp({apiKey:"AIzaSyBKVsNm8RP9VKYBgEwmyRQsitx9dncLuaI",authDomain:"social-cool-f16ba.firebaseapp.com",projectId:"social-cool-f16ba",storageBucket:"social-cool-f16ba.appspot.com",messagingSenderId:"578558980743",appId:"1:578558980743:web:4668ba80e8df3c24087e22"},"dada").firestore(),O.auth()),p=c(0),f=s.a.createContext();function m(){return Object(r.useContext)(f)}function v(e){var t=e.children,c=Object(r.useState)(),n=Object(j.a)(c,2),a=n[0],s=n[1],i=Object(r.useState)(!0),o=Object(j.a)(i,2),l=o[0],u=o[1];Object(r.useEffect)((function(){return x.onAuthStateChanged((function(e){s(e),u(!1)}))}),[]);var b={currentUser:a,login:function(e,t){return x.signInWithEmailAndPassword(e,t)},signup:function(e,t){return x.createUserWithEmailAndPassword(e,t)},logout:function(){return x.signOut()},resetPassword:function(e){return x.sendPasswordResetEmail(e)},updateEmail:function(e){return a.updateEmail(e)},updatePassword:function(e){return a.updatePassword(e)}};return Object(p.jsx)(f.Provider,{value:b,children:!l&&t})}var C=c(18);function g(){var e=s.a.useState(""),t=Object(j.a)(e,2),c=t[0],n=t[1],a=m(),r=a.currentUser,d=a.logout,O=Object(C.f)();function h(e,t){var c=t.name;n(c)}function x(){return(x=Object(o.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d();case 3:O.push("/login"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(p.jsxs)(l.a,{secondary:!0,pointing:!0,children:[Object(p.jsx)(l.a.Item,{as:b.b,to:"/accounts",name:"accounts",onClick:h,active:"accounts"===c,children:"\u5e33\u6236"}),Object(p.jsx)(l.a.Item,{as:b.b,to:"/cates",name:"cates",onClick:h,active:"cates"===c,children:"\u985e\u5225"}),Object(p.jsx)(l.a.Item,{as:b.b,to:"/balances",name:"balances",onClick:h,active:"balances"===c,children:"\u6536\u652f"}),Object(p.jsx)(l.a.Item,{as:b.b,to:"/stocks",children:"\u80a1\u7968"}),Object(p.jsx)(l.a.Menu,{position:"right",children:r?Object(p.jsx)(l.a.Item,{name:"",onClick:function(){return x.apply(this,arguments)},children:Object(p.jsx)(u.a,{name:"sign-out"})}):Object(p.jsx)(l.a.Item,{name:"login",as:b.b,to:"/login",children:"Login"})})]})}var k=c(28),w=c(8),y=c(235),S=c(221),I=c(237);function R(e){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(I.a.Row,{onClick:e.onClick,children:[Object(p.jsxs)(I.a.Cell,{children:[" ",e.row.name]}),Object(p.jsxs)(I.a.Cell,{children:[" ",e.row.prior]}),Object(p.jsxs)(I.a.Cell,{children:[" ",e.row.balance]})]})})}function F(){var e=m().currentUser,t={name:"",prior:"",balance:""},c=s.a.useState([]),n=Object(j.a)(c,2),a=n[0],r=n[1],i=s.a.useState(t),o=Object(j.a)(i,2),l=o[0],u=o[1];function b(e,t){return Object(p.jsx)(R,{row:e,value:t,onClick:function(){return function(e){u(e)}(e)}},t)}function d(e){u(Object(w.a)(Object(w.a)({},l),{},Object(k.a)({},e.target.name,e.target.value)))}return s.a.useEffect((function(){h.collection("accounts").orderBy("prior").where("user","==",e.email).get().then((function(e){r(e.docs.map((function(e){return Object(w.a)(Object(w.a)({},e.data()),{},{id:e.id})})))}))}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(y.a,{onSubmit:function(){var e=l.name,c=l.balance,n=l.prior;h.collection("accounts").doc(l.id).update({name:e,balance:c,prior:n}),u(t)},children:[Object(p.jsxs)(y.a.Group,{children:[Object(p.jsxs)(y.a.Field,{children:[Object(p.jsx)("label",{children:"\u540d\u7a31"}),Object(p.jsx)("input",{name:"name",placeholder:"First Name",value:l.name,onChange:d})]}),Object(p.jsxs)(y.a.Field,{children:[Object(p.jsx)("label",{children:"\u9806\u5e8f"}),Object(p.jsx)("input",{type:"number",name:"prior",value:l.prior,onChange:d})]}),Object(p.jsxs)(y.a.Field,{children:[Object(p.jsx)("label",{children:"\u9918\u984d"}),Object(p.jsx)("input",{type:"number",name:"balance",value:l.balance,onChange:d})]})]}),Object(p.jsx)(S.a,{type:"submit",children:"Submit"})]}),Object(p.jsxs)(I.a,{unstackable:!0,children:[Object(p.jsx)(I.a.Header,{children:Object(p.jsx)(I.a.Row,{children:[{text:"\u540d\u7a31",value:"name",type:"string"},{text:"\u9806\u5e8f",value:"prior",type:"number"},{text:"\u9918\u984d",value:"balance",type:"number"}].map((function(e,t){return Object(p.jsx)(I.a.HeaderCell,{children:e.text},t)}))})}),Object(p.jsx)(I.a.Body,{children:a.map((function(e,t){return b(e,t)}))})]})]})}var A=c(48),H=c(49),B=c(74),E=c(76),D=c(38),N=c(238),U=c(233);function q(e){var t=e.defalutItem,c=e.schema,n=s.a.useState([]),a=Object(j.a)(n,2),r=a[0],i=a[1],o=s.a.useState(t),l=Object(j.a)(o,2),u=l[0],b=l[1],d=s.a.useState(-1),O=Object(j.a)(d,2),x=O[0],f=O[1],m=s.a.useState(!1),v=Object(j.a)(m,2),C=v[0],g=v[1];return s.a.useEffect((function(){h.collection(e.collectionName).get().then((function(e){var t=e.docs.map((function(e){return Object(w.a)(Object(w.a)({},e.data()),{},{id:e.id})}));i(t)}))}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("pre",{children:r.length}),Object(p.jsxs)(N.a,{open:C,closeIcon:!0,onClose:function(){return g(!1)},children:[Object(p.jsx)(N.a.Header,{children:"\u7de8\u8f2f\u8868\u55ae"}),Object(p.jsx)(N.a.Content,{children:Object(p.jsx)(y.a,{children:c.map((function(e,t){return Object(p.jsxs)(y.a.Field,{children:[Object(p.jsx)("label",{children:e.text}),Object(p.jsx)(U.a,{placeholder:e.text,name:e.name,value:u[e.name],type:e.type,onChange:function(e){b(Object(w.a)(Object(w.a)({},u),{},Object(k.a)({},e.target.name,e.target.value)))}})]},t)}))})}),Object(p.jsxs)(N.a.Actions,{children:[Object(p.jsx)("button",{className:"ui button blue",onClick:function(){if(-1==x)i([].concat(Object(D.a)(r),[Object(w.a)(Object(w.a)({},u),{},{id:Date.now()})]));else{var e=r.slice();Object.assign(e[x],u),i(e),f(-1)}b(t),g(!1)},children:"\u5132\u5b58"}),-1!==x&&Object(p.jsx)("button",{className:"ui button red left floated",onClick:function(){if(confirm("\u78ba\u5b9a\u522a\u9664\u55ce?")){var e=r.filter((function(e){return e.id!==u.id}));i(e),g(!1)}},children:"\u522a\u9664"})]})]}),Object(p.jsx)("button",{className:"ui button",onClick:function(){g(!0),b(t),f(-1)},children:"\u65b0\u589e"}),Object(p.jsx)(L,{edit:function(e){g(!0),f(r.indexOf(e)),b(e)},schema:c,rows:r})]})}var L=function(e){Object(B.a)(c,e);var t=Object(E.a)(c);function c(e){return Object(A.a)(this,c),t.call(this,e)}return Object(H.a)(c,[{key:"render",value:function(){var e=this;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(I.a,{unstackable:!0,children:[Object(p.jsx)(I.a.Header,{children:Object(p.jsxs)(I.a.Row,{children:[this.props.schema.map((function(e,t){return Object(p.jsx)(I.a.HeaderCell,{children:e.text},t)})),Object(p.jsx)(I.a.HeaderCell,{children:"#"})]})}),Object(p.jsx)(I.a.Body,{children:this.props.rows.map((function(t,c){return Object(p.jsxs)("tr",{children:[e.props.schema.map((function(e,c){return Object(p.jsx)("td",{children:t[e.name]},c)})),Object(p.jsx)("td",{onClick:function(){return e.props.edit(t)},children:Object(p.jsx)("a",{href:"#",children:"\u7de8\u8f2f"})})]},c)}))})]})})}}]),c}(s.a.Component);function P(){return Object(p.jsx)(q,{collectionName:"cates",schema:[{name:"name",text:"\u540d\u7a31",type:"text"},{name:"prior",text:"\u9806\u5e8f",type:"number"}],defalutItem:{name:"",prior:""}})}var z=c(241),V=function(e){Object(B.a)(c,e);var t=Object(E.a)(c);function c(){return Object(A.a)(this,c),t.apply(this,arguments)}return Object(H.a)(c,[{key:"render",value:function(){return Object(p.jsx)("button",{className:"square",onClick:this.props.onClick,children:this.props.value})}}]),c}(s.a.Component),J=function(e){Object(B.a)(c,e);var t=Object(E.a)(c);function c(e){var n;return Object(A.a)(this,c),(n=t.call(this,e)).state={squares:Array(9).fill(null)},n}return Object(H.a)(c,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();t[e]="X",this.setState({squares:t})}},{key:"renderSquare",value:function(e){var t=this;return Object(p.jsx)(V,{value:this.state.squares[e],onClick:function(){t.handleClick(e)}})}},{key:"render",value:function(){return Object(p.jsxs)(z.a,{children:[Object(p.jsxs)(z.a.Row,{children:[Object(p.jsx)(z.a.Column,{children:this.renderSquare(0)}),Object(p.jsx)(z.a.Column,{children:this.renderSquare(1)}),Object(p.jsx)(z.a.Column,{children:this.renderSquare(2)})]}),Object(p.jsxs)(z.a.Row,{children:[Object(p.jsx)(z.a.Column,{children:this.renderSquare(3)}),Object(p.jsx)(z.a.Column,{children:this.renderSquare(4)}),Object(p.jsx)(z.a.Column,{children:this.renderSquare(5)})]}),Object(p.jsxs)(z.a.Row,{children:[Object(p.jsx)(z.a.Column,{children:this.renderSquare(7)}),Object(p.jsx)(z.a.Column,{children:this.renderSquare(8)})]})]})}}]),c}(s.a.Component),K=c(44),M=c.n(K),Q=c(242),T=c(104);function G(e){var t=e.rows,c=e.rowsCopy,n=e.setRows,a=e.setItem,s=e.setItemCopy,i=e.setEditedIndex,o=e.setOpen,l=e.activeAccount,u=Object(r.useState)(""),b=Object(j.a)(u,2),d=b[0],O=b[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(U.a,{name:"search",value:d,onChange:function(e){O(e.target.value),n(c.filter((function(t){return t.title.toLowerCase().includes(e.target.value.toLowerCase())})))},placeholder:"Search..."}),Object(p.jsx)(I.a,{unstackable:!0,children:Object(p.jsx)(I.a.Body,{children:t.map((function(e){var c;return Object(p.jsxs)(I.a.Row,{onClick:function(){!function(e){a(e),s(e),i(t.indexOf(e)),o(!0)}(e)},children:[Object(p.jsxs)(I.a.Cell,{children:[Object(p.jsx)(Q.a,{as:"h4",children:e.title}),Object(p.jsxs)("span",{children:[e.date," "]}),!l&&Object(p.jsx)(T.a,{color:"teal",children:null===(c=e.account)||void 0===c?void 0:c.name})]}),Object(p.jsxs)(I.a.Cell,{textAlign:"right",children:[e.income?Object(p.jsx)(T.a,{color:"teal",circular:!0,children:"\u5b58"}):Object(p.jsx)(T.a,{color:"orange",circular:!0,children:"\u63d0"}),Object(p.jsx)("br",{}),"$ ",e.income?e.income:e.expense+""]})]},e.id)}))})})]})}var W=function(e){var t=e.rows,c=e.setRows,n=e.rowsCopy,a=e.setRowsCopy,s=e.rowsAccount,i=e.setRowsAccount,o=e.item,l=e.setItem,u=e.editedIndex,b=e.defalutItem,d=e.setEditedIndex,O=e.open,x=e.setOpen,f=(e.setActiveAccount,e.activeAccount),v=e.itemCopy,C=m().currentUser,g=Object(r.useState)(!1),I=Object(j.a)(g,2),R=I[0],F=I[1],A=function(e){l(Object(w.a)(Object(w.a)({},o),{},Object(k.a)({},e.target.name,e.target.value)))},H=h.collection("balances");function B(e){h.collection("accounts").doc(f.id).update({balance:e});var t=s.indexOf(f),c=s.slice();Object.assign(c[t],Object(w.a)(Object(w.a)({},f),{},{balance:e})),i(c)}return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(N.a,{open:O,closeIcon:!0,onClose:function(){x(!1)},children:[Object(p.jsx)(N.a.Header,{children:"\u7de8\u8f2f\u8868\u55ae"}),Object(p.jsx)(N.a.Content,{children:Object(p.jsxs)(y.a,{children:[Object(p.jsxs)(y.a.Field,{children:[Object(p.jsx)("label",{children:"\u65e5\u671f"}),Object(p.jsx)("input",{name:"date",type:"date",placeholder:"",value:o.date,onChange:A})]}),Object(p.jsxs)(y.a.Field,{children:[Object(p.jsx)("label",{children:"\u9805\u76ee"}),Object(p.jsx)("input",{name:"title",placeholder:"",value:o.title,onChange:A})]}),Object(p.jsxs)(y.a.Field,{children:[Object(p.jsx)("label",{children:"\u91d1\u984d"}),Object(p.jsx)("input",{name:"expense",type:"number",placeholder:"",value:o.expense,onChange:A})]})]})}),Object(p.jsxs)(N.a.Actions,{children:[u>-1&&Object(p.jsx)(S.a,{loading:R,floated:"left",color:"red",onClick:function(){F(!0),H.doc(o.id).delete().then((function(){c(t.filter((function(e){return e.id!==o.id}))),a(n.filter((function(e){return e.id!==o.id}))),d(-1),l(b),x(!1),F(!1),B(f.balance+1*o.expense)}))},children:"Delete"}),Object(p.jsx)(S.a,{loading:R,floated:"right",primary:!0,onClick:function(){-1==u?(F(!0),H.add(Object(w.a)(Object(w.a)({},o),{},{user:C.email,account:f})).then((function(e){var r=Object(w.a)(Object(w.a)({},o),{},{id:e.id,user:C.email,account:f});c([r].concat(Object(D.a)(t))),a([r].concat(Object(D.a)(n))),F(!1),d(-1),l(b),x(!1),B(f.balance-1*o.expense)}))):(F(!0),H.doc(o.id).update(o).then((function(){B(f.balance-1*o.expense+1*v.expense);var e=t.slice();Object.assign(e[u],o),c(e),F(!1),d(-1),l(b),x(!1)})))},children:"Save"})]})]})})},X=c(243),Y=function(e){var t=e.rows,c=e.accountClick,n=e.activeAccount;m().currentUser;return Object(p.jsx)(z.a,{columns:3,children:t.map((function(e,t){return Object(p.jsx)(z.a.Column,{children:Object(p.jsx)(X.a,{textAlign:"center",color:"teal",inverted:(null===n||void 0===n?void 0:n.name)===e.name,onClick:function(){c(e)},children:e.name})},e.id)}))})},$=c(239),Z=function(){var e=m(),t=e.currentUser,c=(e.logout,Object(r.useState)(!1)),n=Object(j.a)(c,2),a=n[0],s=n[1],i=Object(r.useState)([]),o=Object(j.a)(i,2),l=o[0],u=o[1],b=Object(r.useState)([]),d=Object(j.a)(b,2),O=d[0],x=d[1],f=Object(r.useState)([]),v=Object(j.a)(f,2),C=v[0],g=v[1],k=Object(r.useState)(),y=Object(j.a)(k,2),I=y[0],R=y[1],F={date:(new Date).toISOString().slice(0,10),title:"",expense:""},A=Object(r.useState)(F),H=Object(j.a)(A,2),B=H[0],E=H[1],D=Object(r.useState)(F),N=Object(j.a)(D,2),U=N[0],q=N[1],L=Object(r.useState)(-1),P=Object(j.a)(L,2),V=P[0],J=P[1];Object(r.useEffect)((function(){var e=h.collection("balances").orderBy("date","desc").limit(300);t&&(e=e.where("user","==",null===t||void 0===t?void 0:t.email)),e.get().then((function(e){var t=e.docs.map((function(e){return Object(w.a)(Object(w.a)({},e.data()),{},{id:e.id})}));u(t),x(t)})),h.collection("accounts").where("user","==",t.email).orderBy("prior").limit(3).get().then((function(e){var t=e.docs.map((function(e){return Object(w.a)(Object(w.a)({},e.data()),{},{id:e.id})}));g(t)}))}),[]);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(z.a,{children:Object(p.jsx)(z.a.Row,{children:Object(p.jsx)(z.a.Column,{children:Object(p.jsx)(Y,{rows:C,activeAccount:I,accountClick:function(e){R(e),u(O.filter((function(t){return t.account&&t.account.name==e.name})))}})})})}),I&&Object(p.jsx)(z.a,{columns:2,children:Object(p.jsxs)(z.a.Row,{children:[Object(p.jsx)(z.a.Column,{children:Object(p.jsx)($.a,{horizontal:!0,children:Object(p.jsx)($.a.Value,{children:null===I||void 0===I?void 0:I.balance})})}),Object(p.jsx)(z.a.Column,{verticalAlign:"middle",children:Object(p.jsx)(S.a,{onClick:function(){s(!0),E(F)},floated:"right",color:"yellow",children:"ADD"})})]})}),Object(p.jsx)(z.a,{children:Object(p.jsx)(z.a.Row,{children:Object(p.jsx)(z.a.Column,{children:Object(p.jsx)(G,{setOpen:s,rows:l,rowsCopy:O,setRows:u,item:B,setItem:E,setItemCopy:q,setEditedIndex:J,activeAccount:I})})})}),Object(p.jsx)(W,{defalutItem:F,rows:l,setRows:u,setRowsCopy:x,rowsCopy:O,rowsAccount:C,setRowsAccount:g,item:B,setItem:E,editedIndex:V,setEditedIndex:J,open:a,setOpen:s,setActiveAccount:R,activeAccount:I,itemCopy:U})]})};function _(e){var t=e.defalutItem,c=e.schema,n=s.a.useState([]),a=Object(j.a)(n,2),r=a[0],i=a[1],o=s.a.useState(t),l=Object(j.a)(o,2),u=l[0],b=l[1],d=s.a.useState(-1),O=Object(j.a)(d,2),x=O[0],f=O[1],m=s.a.useState(!1),v=Object(j.a)(m,2),C=v[0],g=v[1],S=h.collection(e.collectionName);return s.a.useEffect((function(){S.get().then((function(e){var t=e.docs.map((function(e){return Object(w.a)(Object(w.a)({},e.data()),{},{id:e.id})}));i(t)}))}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(N.a,{open:C,closeIcon:!0,onClose:function(){return g(!1)},children:[Object(p.jsx)(N.a.Header,{children:"\u7de8\u8f2f\u8868\u55ae"}),Object(p.jsx)(N.a.Content,{children:Object(p.jsx)(y.a,{children:c.map((function(e,t){return Object(p.jsxs)(y.a.Field,{children:[Object(p.jsx)("label",{children:e.text}),Object(p.jsx)(U.a,{placeholder:e.text,name:e.name,value:u[e.name],type:e.type,onChange:function(e){b(Object(w.a)(Object(w.a)({},u),{},Object(k.a)({},e.target.name,e.target.value)))}})]},t)}))})}),Object(p.jsxs)(N.a.Actions,{children:[Object(p.jsx)("button",{className:"ui button blue",onClick:function(){if(-1==x){var e=Object(w.a)(Object(w.a)({},u),{},{id:Date.now()});S.add(e),i([].concat(Object(D.a)(r),[e]))}else{S.doc(u.id).update(u);var c=r.slice();Object.assign(c[x],u),i(c),f(-1)}b(t),g(!1)},children:"\u5132\u5b58"}),-1!==x&&Object(p.jsx)("button",{className:"ui button red left floated",onClick:function(){if(confirm("\u78ba\u5b9a\u522a\u9664\u55ce?")){S.doc(u.id).delete();var e=r.filter((function(e){return e.id!==u.id}));i(e),g(!1)}},children:"\u522a\u9664"})]})]}),Object(p.jsx)("button",{className:"ui button",onClick:function(){g(!0),b(t),f(-1)},children:"\u65b0\u589e"}),Object(p.jsx)(ee,{edit:function(e){g(!0),f(r.indexOf(e)),b(e)},schema:c,rows:r,dataRow:e.dataRow})]})}var ee=function(e){Object(B.a)(c,e);var t=Object(E.a)(c);function c(e){return Object(A.a)(this,c),t.call(this,e)}return Object(H.a)(c,[{key:"render",value:function(){var e=this;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(I.a,{unstackable:!0,children:[Object(p.jsx)(I.a.Header,{children:Object(p.jsxs)(I.a.Row,{children:[this.props.schema.map((function(e,t){return Object(p.jsx)(I.a.HeaderCell,{children:e.text},t)})),Object(p.jsx)(I.a.HeaderCell,{children:"#"})]})}),Object(p.jsx)(I.a.Body,{children:this.props.rows.map((function(t,c){return Object(p.jsxs)("tr",{children:[e.props.dataRow?e.props.dataRow:e.props.schema.map((function(e,c){return Object(p.jsx)("td",{children:t[e.name]},c)})),Object(p.jsx)("td",{onClick:function(){return e.props.edit(t)},children:Object(p.jsx)("a",{href:"#",children:"\u7de8\u8f2f"})})]},c)}))})]})})}}]),c}(s.a.Component);function te(){var e=[{name:"name",text:"\u540d\u7a31",type:"text"},{name:"qty",text:"\u80a1\u6578",type:"number"},{name:"price",text:"\u73fe\u50f9",type:"number"},{name:"cost",text:"\u6210\u672c",type:"number"}];e.map((function(e,t){return Object(p.jsx)("td",{children:"A"},t)}));return Object(p.jsx)(_,{schema:e,defalutItem:{name:"",qty:"",price:"",cost:""},collectionName:"stocks"})}var ce=Object(r.createContext)(),ne=function(e){var t=h.collection(e.collectionName);Object(r.useEffect)((function(){t.get().then((function(e){var t=e.docs.map((function(e){return Object(w.a)(Object(w.a)({},e.data()),{},{id:e.id})}));s(t)}))}),[]);var c=Object(r.useState)([]),n=Object(j.a)(c,2),a=n[0],s=n[1],i={name:"",price:""},o=Object(r.useState)(i),l=Object(j.a)(o,2),u=l[0],b=l[1],d=Object(r.useState)(-1),O=Object(j.a)(d,2),x=O[0],f=O[1],m=Object(r.useState)(!1),v=Object(j.a)(m,2),C=v[0],g=v[1];return Object(p.jsx)(ce.Provider,{value:{books:a,editedBook:u,open:C,removeBook:function(e){t.doc(e).delete(),s(a.filter((function(t){return t.id!==e})))},editBook:function(e){b(e),f(a.indexOf(e)),g(!0)},updateBook:function(e){b(e)},saveBook:function(e){if(-1==x)t.add(e).then((function(t){s([].concat(Object(D.a)(a),[Object(w.a)(Object(w.a)({},e),{},{id:t.id})]))}));else{t.doc(e.id).update(e);var c=a.slice();Object.assign(c[x],e),s(c)}b(i),f(-1),g(!1)},openForm:function(){f(-1),b(i),g(!0)},closeForm:function(){f(-1),b(i),g(!1)}},children:e.children})},ae=function(){var e=Object(r.useContext)(ce),t=e.editBook,c=e.books,n=e.removeBook,a=e.openForm;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(Q.a,{children:c.length}),Object(p.jsx)(S.a,{onClick:function(){a()},children:"ADD"}),Object(p.jsxs)(I.a,{unstackable:!0,children:[Object(p.jsx)(I.a.Header,{children:Object(p.jsxs)(I.a.Row,{children:[Object(p.jsx)(I.a.HeaderCell,{children:"\u66f8\u540d"}),Object(p.jsx)(I.a.HeaderCell,{children:"\u4f5c\u8005"}),Object(p.jsx)(I.a.HeaderCell,{children:"#"}),Object(p.jsx)(I.a.HeaderCell,{children:"#"})]})}),Object(p.jsx)(I.a.Body,{children:c.map((function(e){return Object(p.jsxs)(I.a.Row,{children:[Object(p.jsx)(I.a.Cell,{children:e.title}),Object(p.jsx)(I.a.Cell,{children:e.author}),Object(p.jsx)(I.a.Cell,{onClick:function(){n(e.id)},children:"Delete"}),Object(p.jsx)(I.a.Cell,{onClick:function(){t(e)},children:"Edit"})]},e.id)}))})]})]})},re=function(){var e=Object(r.useContext)(ce),t=e.editBook,c=e.books,n=e.removeBook,a=e.openForm;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(Q.a,{children:c.length}),Object(p.jsx)(S.a,{onClick:function(){console.log("open"),a()},children:"ADD"}),Object(p.jsxs)(I.a,{unstackable:!0,children:[Object(p.jsx)(I.a.Header,{children:Object(p.jsxs)(I.a.Row,{children:[Object(p.jsx)(I.a.HeaderCell,{children:"\u66f8\u540d"}),Object(p.jsx)(I.a.HeaderCell,{children:"\u4f5c\u8005"}),Object(p.jsx)(I.a.HeaderCell,{children:"Qty"}),Object(p.jsx)(I.a.HeaderCell,{children:"#"}),Object(p.jsx)(I.a.HeaderCell,{children:"#"})]})}),Object(p.jsx)(I.a.Body,{children:c.map((function(e){return Object(p.jsxs)(I.a.Row,{children:[Object(p.jsx)(I.a.Cell,{children:e.name}),Object(p.jsx)(I.a.Cell,{children:e.price}),Object(p.jsx)(I.a.Cell,{children:e.qty}),Object(p.jsx)(I.a.Cell,{onClick:function(){n(e.id)},children:"Delete"}),Object(p.jsx)(I.a.Cell,{onClick:function(){t(e)},children:"Edit"})]},e.id)}))})]})]})},se=function(){var e=Object(r.useContext)(ce),t=e.editedBook,c=e.updateBook,n=e.saveBook,a=e.open,s=e.closeForm,i=Object(r.useState)(""),o=Object(j.a)(i,2),l=(o[0],o[1]),u=Object(r.useState)(""),b=Object(j.a)(u,2),d=(b[0],b[1]);return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(N.a,{open:a,closeIcon:!0,onClose:s,children:[Object(p.jsx)(N.a.Header,{children:"\u7de8\u8f2f"}),Object(p.jsx)(N.a.Content,{children:Object(p.jsxs)(y.a,{children:[Object(p.jsxs)(y.a.Field,{children:[Object(p.jsx)("label",{children:"Title"}),Object(p.jsx)(U.a,{placeholder:"book title",name:"price",value:t.price,type:"text",onChange:function(e){c(Object(w.a)(Object(w.a)({},t),{},Object(k.a)({},e.target.name,e.target.value)))}})]}),Object(p.jsxs)(y.a.Field,{children:[Object(p.jsx)("label",{children:"Author"}),Object(p.jsx)(U.a,{placeholder:"book author",name:"author",value:t.author,type:"text",onChange:function(e){c(Object(w.a)(Object(w.a)({},t),{},Object(k.a)({},e.target.name,e.target.value)))}})]})]})}),Object(p.jsx)(N.a.Actions,{children:Object(p.jsx)(S.a,{onClick:function(){n(t),l(""),d("")},children:"Update"})})]})})};var ie=function(){function e(){Object(A.a)(this,e)}return Object(H.a)(e,null,[{key:"getAllContacts",value:function(){var e=[];return h.collection("cates").get().then((function(t){t.docs.map((function(t){e.push(Object(w.a)({},t.data()))}))})),e}}]),e}();ie.serverURL="http://localhost:9000";var oe=function(){var e=Object(r.useState)({loading:!1,contacts:[],errorMessage:""}),t=Object(j.a)(e,2),c=t[0],n=t[1];Object(r.useEffect)((function(){n(Object(w.a)(Object(w.a)({},c),{},{loading:!1}));var e=ie.getAllContacts();n(Object(w.a)(Object(w.a)({},c),{},{loading:!1,contacts:e})),console.log(e)}),[]);var a=c.contacts;return Object(p.jsx)("pre",{children:JSON.stringify(a)})},je=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(oe,{}),Object(p.jsxs)(ne,{collectionName:"stocks",children:[Object(p.jsx)(se,{}),Object(p.jsx)(re,{})]}),Object(p.jsxs)(ne,{collectionName:"books",children:[Object(p.jsx)(se,{}),Object(p.jsx)(ae,{})]})]})},le=function(){function e(){Object(A.a)(this,e)}return Object(H.a)(e,null,[{key:"getAllContacts",value:function(){var e="".concat(this.serverURL,"/contacts");return M.a.get(e)}},{key:"getContact",value:function(e){var t="".concat(this.serverURL,"/contacts/").concat(e);return M.a.get(t)}},{key:"AddContact",value:function(e){var t="".concat(this.serverURL,"/contacts");return M.a.post(t,e)}},{key:"UpdateContact",value:function(e){var t="".concat(this.serverURL,"/contacts/").concat(e.id);return M.a.put(t,e)}},{key:"DeleteContact",value:function(e){var t="".concat(this.serverURL,"/contacts/").concat(e);return M.a.delete(t)}}]),e}();le.serverURL="http://192.168.0.12:9000";var ue=c.p+"static/media/spin.0d8837f6.gif";function be(){return Object(p.jsx)("div",{className:"ui basic segment",children:Object(p.jsx)("img",{src:ue,className:"ui centered medium image",style:{width:"100px"}})})}var de=function(){var e=Object(r.useState)({loading:!1,contacts:[]}),t=Object(j.a)(e,2),c=t[0],n=t[1];Object(r.useEffect)(Object(o.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(w.a)(Object(w.a)({},c),{},{loading:!0})),e.next=3,M.a.get("http://192.168.0.12:9000/contacts");case 3:t=e.sent,n(Object(w.a)(Object(w.a)({},c),{},{loading:!1,contacts:t.data}));case 5:case"end":return e.stop()}}),e)}))),[]);var a=c.contacts,s=c.loading;return Object(p.jsx)(p.Fragment,{children:s?Object(p.jsx)(be,{}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(S.a,{children:Object(p.jsx)(b.b,{to:"/contacts/add",children:"ADD"})}),Object(p.jsxs)(I.a,{unstackable:!0,children:[Object(p.jsx)(I.a.Header,{children:Object(p.jsxs)(I.a.Row,{children:[Object(p.jsx)(I.a.HeaderCell,{children:"\u540d\u7a31"}),Object(p.jsx)(I.a.HeaderCell,{children:"\u91d1\u984d"}),Object(p.jsx)(I.a.HeaderCell,{children:"#"}),Object(p.jsx)(I.a.HeaderCell,{children:"#"})]})}),Object(p.jsx)(I.a.Body,{children:a.map((function(e){return Object(p.jsxs)(I.a.Row,{children:[Object(p.jsx)(I.a.Cell,{children:e.name}),Object(p.jsx)(I.a.Cell,{children:e.amt}),Object(p.jsx)(I.a.Cell,{children:Object(p.jsx)(b.b,{to:"/contacts/edit/".concat(e.id),children:"Edit"})}),Object(p.jsx)(I.a.Cell,{children:Object(p.jsx)(b.b,{to:"/contacts/view/".concat(e.id),children:"View"})})]},e.id)}))})]})]})})};function Oe(){var e=Object(C.g)().contactId;return Object(r.useEffect)(Object(o.a)(Object(i.a)().mark((function t(){var c;return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,le.getContact(e);case 2:c=t.sent,console.log(c.data);case 4:case"end":return t.stop()}}),t)}))),[]),Object(p.jsx)("div",{children:e})}function he(){var e=Object(C.f)(),t=Object(C.g)().contactId;Object(r.useEffect)(Object(o.a)(Object(i.a)().mark((function e(){var c;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,le.getContact(t);case 4:c=e.sent,s(c.data);case 6:case"end":return e.stop()}}),e)}))),[]);var c=Object(r.useState)({name:"",amt:""}),n=Object(j.a)(c,2),a=n[0],s=n[1],l=function(e){s(Object(w.a)(Object(w.a)({},a),{},Object(k.a)({},e.target.name,e.target.value)))},u=function(){var c=Object(o.a)(Object(i.a)().mark((function c(){return Object(i.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(!t){c.next=5;break}return c.next=3,le.UpdateContact(a);case 3:c.next=7;break;case 5:return c.next=7,le.AddContact(a);case 7:e.push("/contacts"),console.log("save");case 9:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}(),b=function(){var c=Object(o.a)(Object(i.a)().mark((function c(){return Object(i.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(!t){c.next=3;break}return c.next=3,le.DeleteContact(a.id);case 3:e.push("/contacts");case 4:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[" ",Object(p.jsxs)(y.a,{onSubmit:u,children:[Object(p.jsxs)(y.a.Field,{children:[Object(p.jsx)("label",{children:"\u540d\u7a31"}),Object(p.jsx)("input",{name:"name",placeholder:"",value:a.name,onChange:l})]}),Object(p.jsxs)(y.a.Field,{children:[Object(p.jsx)("label",{children:"\u91d1\u984d"}),Object(p.jsx)("input",{name:"amt",placeholder:"",value:a.amt,onChange:l})]}),Object(p.jsx)(S.a,{type:"submit",primary:!0,children:"Save"})]}),Object(p.jsx)(S.a,{floated:"right",onClick:b,children:"Delete"})]})}function xe(){var e=Object(r.useRef)(),t=Object(r.useRef)(),c=m().login,n=Object(r.useState)(""),a=Object(j.a)(n,2),s=(a[0],a[1]),l=Object(r.useState)(!1),u=Object(j.a)(l,2),b=(u[0],u[1]),d=Object(C.f)();function O(){return(O=Object(o.a)(Object(i.a)().mark((function n(a){return Object(i.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),n.prev=1,s(""),b(!0),n.next=6,c(e.current.value,t.current.value);case 6:d.push("/balances"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),s("Failed to log in");case 12:b(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(y.a,{size:"large",onSubmit:function(e){return O.apply(this,arguments)},children:[Object(p.jsxs)(y.a.Field,{children:[Object(p.jsx)("label",{children:"Email"}),Object(p.jsx)("input",{ref:e,defaultValue:"mkdodos@gmail.com"})]}),Object(p.jsxs)(y.a.Field,{children:[Object(p.jsx)("label",{children:"Password"}),Object(p.jsx)("input",{ref:t,defaultValue:"123456"})]}),Object(p.jsx)(S.a,{type:"submit",size:"large",color:"blue",children:"Mark"})]}),Object(p.jsx)(S.a,{basic:!0,floated:"right",onClick:Object(o.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("dada@gmail.com","123456");case 2:d.push("/balances");case 3:case"end":return e.stop()}}),e)}))),size:"large",color:"blue",children:"Dada"})]})}function pe(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),c=(t[0],t[1]),n=m(),a=n.currentUser,s=n.logout,l=Object(C.f)();function u(){return(u=Object(o.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(""),e.prev=1,e.next=4,s();case 4:l.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),c("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{children:"Dashboard"}),Object(p.jsx)("strong",{children:"Email:"})," ",null===a||void 0===a?void 0:a.email,Object(p.jsx)(S.a,{variant:"link",onClick:function(){return u.apply(this,arguments)},children:"Log Out"})]})}function fe(){return Object(p.jsxs)(C.c,{children:[Object(p.jsx)(C.a,{path:"/accounts",children:Object(p.jsx)(F,{})}),Object(p.jsx)(C.a,{path:"/cates",component:P}),Object(p.jsx)(C.a,{path:"/tictactoe",component:J}),Object(p.jsx)(C.a,{path:"/balances",component:Z}),Object(p.jsx)(C.a,{path:"/stocks",component:te}),Object(p.jsx)(C.a,{path:"/books",component:je}),Object(p.jsx)(C.a,{path:"/login",exact:!0,component:xe}),Object(p.jsx)(C.a,{path:"/",exact:!0,component:pe}),Object(p.jsx)(C.a,{path:"/dashboard",exact:!0,component:pe}),Object(p.jsx)(C.a,{path:"/contacts",exact:!0,component:de}),Object(p.jsx)(C.a,{path:"/contacts/add",exact:!0,component:he}),Object(p.jsx)(C.a,{path:"/contacts/view/:contactId",exact:!0,component:Oe}),Object(p.jsx)(C.a,{path:"/contacts/edit/:contactId",exact:!0,component:he})]})}var me=c(234);function ve(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(v,{children:Object(p.jsxs)(b.a,{children:[Object(p.jsx)(g,{}),Object(p.jsx)(me.a,{children:Object(p.jsx)(fe,{})})]})})})}c(218);var Ce=document.getElementById("root");a.a.render(Object(p.jsx)(ve,{}),Ce)}},[[219,1,2]]]);
//# sourceMappingURL=main.3e66ae19.chunk.js.map