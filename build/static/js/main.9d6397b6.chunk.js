(this["webpackJsonpsocial-cool"]=this["webpackJsonpsocial-cool"]||[]).push([[0],{221:function(e,t,c){"use strict";c.r(t);var n=c(71),a=c.n(n),r=c(1),i=c.n(r),s=c(15),o=c(32),l=c(9),j=c(238),b=c(77),u=c(17),d=c(144),O=(c(222),c(189),d.a.initializeApp({apiKey:"AIzaSyDUSJ5yzHvTCCSQTuONsPtOBGodjamReHc",authDomain:"money2022-173b9.firebaseapp.com",projectId:"money2022-173b9",storageBucket:"money2022-173b9.appspot.com",messagingSenderId:"944583877759",appId:"1:944583877759:web:0fd8a43af8a727a76c0b4a"})),h=d.a.firestore(),x=(d.a.initializeApp({apiKey:"AIzaSyBKVsNm8RP9VKYBgEwmyRQsitx9dncLuaI",authDomain:"social-cool-f16ba.firebaseapp.com",projectId:"social-cool-f16ba",storageBucket:"social-cool-f16ba.appspot.com",messagingSenderId:"578558980743",appId:"1:578558980743:web:4668ba80e8df3c24087e22"},"dada").firestore(),O.auth()),m=c(0),p=i.a.createContext();function f(){return Object(r.useContext)(p)}function v(e){var t=e.children,c=Object(r.useState)(),n=Object(l.a)(c,2),a=n[0],i=n[1],s=Object(r.useState)(!0),o=Object(l.a)(s,2),j=o[0],b=o[1];Object(r.useEffect)((function(){return x.onAuthStateChanged((function(e){i(e),b(!1)}))}),[]);var u={currentUser:a,login:function(e,t){return x.signInWithEmailAndPassword(e,t)},signup:function(e,t){return x.createUserWithEmailAndPassword(e,t)},logout:function(){return x.signOut()},resetPassword:function(e){return x.sendPasswordResetEmail(e)},updateEmail:function(e){return a.updateEmail(e)},updatePassword:function(e){return a.updatePassword(e)}};return Object(m.jsx)(p.Provider,{value:u,children:!j&&t})}var g=c(19);function C(){var e=i.a.useState(""),t=Object(l.a)(e,2),c=t[0],n=t[1],a=f(),r=a.currentUser,d=a.logout,O=Object(g.g)();function h(e,t){var c=t.name;n(c)}function x(){return(x=Object(o.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d();case 3:O.push("/login"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(m.jsxs)(j.a,{secondary:!0,pointing:!0,children:[Object(m.jsx)(j.a.Item,{as:u.b,to:"/accounts",name:"accounts",onClick:h,active:"accounts"===c,children:"\u5e33\u6236"}),Object(m.jsx)(j.a.Item,{as:u.b,to:"/cates",name:"cates",onClick:h,active:"cates"===c,children:"\u985e\u5225"}),Object(m.jsx)(j.a.Item,{as:u.b,to:"/balances",name:"balances",onClick:h,active:"balances"===c,children:"\u6536\u652f"}),"mkdodos@gmail.com"==(null===r||void 0===r?void 0:r.email)&&Object(m.jsx)(j.a.Item,{as:u.b,to:"/stocks",children:"\u80a1\u7968"}),Object(m.jsx)(j.a.Menu,{position:"right",children:r?Object(m.jsx)(j.a.Item,{name:"",onClick:function(){return x.apply(this,arguments)},children:Object(m.jsx)(b.a,{name:"sign-out"})}):Object(m.jsx)(j.a.Item,{name:"login",as:u.b,to:"/login",children:"Login"})})]})}var k=c(29),w=c(38),y=c(7),S=c(241),I=c(239),F=c(223),R=c(240);function A(){var e=f().currentUser,t={name:"",prior:"",balance:""},c=i.a.useState([]),n=Object(l.a)(c,2),a=n[0],s=n[1],o=i.a.useState(t),j=Object(l.a)(o,2),b=j[0],u=j[1],d=Object(r.useState)(-1),O=Object(l.a)(d,2),x=O[0],p=O[1],v=Object(r.useState)(!1),g=Object(l.a)(v,2),C=g[0],A=g[1],H=h.collection("accounts");function B(e){p(a.indexOf(e)),u(e),A(!0)}function E(e){u(Object(y.a)(Object(y.a)({},b),{},Object(k.a)({},e.target.name,e.target.value)))}return i.a.useEffect((function(){H.where("user","==",e.email).get().then((function(e){s(e.docs.map((function(e){return Object(y.a)(Object(y.a)({},e.data()),{},{id:e.id})})))}))}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(S.a,{open:C,closeIcon:!0,onClose:function(){A(!1)},children:[Object(m.jsx)(S.a.Header,{children:"\u7de8\u8f2f\u5e33\u6236"}),Object(m.jsx)(S.a.Content,{children:Object(m.jsxs)(I.a,{children:[Object(m.jsxs)(I.a.Field,{children:[Object(m.jsx)("label",{children:"\u540d\u7a31"}),Object(m.jsx)("input",{name:"name",placeholder:"First Name",value:b.name,onChange:E})]}),Object(m.jsxs)(I.a.Field,{children:[Object(m.jsx)("label",{children:"\u9806\u5e8f"}),Object(m.jsx)("input",{type:"number",name:"prior",value:b.prior,onChange:E})]}),Object(m.jsxs)(I.a.Field,{children:[Object(m.jsx)("label",{children:"\u9918\u984d"}),Object(m.jsx)("input",{type:"number",name:"balance",value:b.balance,onChange:E})]})]})}),Object(m.jsxs)(S.a.Actions,{children:[Object(m.jsx)(F.a,{floated:"left",color:"red",onClick:function(){H.doc(b.id).delete(),s(a.filter((function(e){return e.id!==b.id}))),A(!1)},children:"Delete"}),Object(m.jsx)(F.a,{primary:!0,onClick:function(){var c=b.name,n=b.balance,r=b.prior;x>-1?H.doc(b.id).update({name:c,balance:n,prior:r}).then((function(){var e=a.slice();Object.assign(e[x],b),s(e),A(!1),u(t)})):H.add({name:c,balance:n,prior:r,user:e.email}).then((function(e){A(!1),u(t),s([].concat(Object(w.a)(a),[Object(y.a)(Object(y.a)({},b),{},{id:e.id})]))}))},children:"Save"})]})]}),Object(m.jsx)(F.a,{onClick:function(){p(-1),A(!0)},color:"olive",children:"ADD"}),Object(m.jsxs)(R.a,{unstackable:!0,children:[Object(m.jsx)(R.a.Header,{children:Object(m.jsx)(R.a.Row,{children:[{text:"\u540d\u7a31",value:"name",type:"string"},{text:"\u9806\u5e8f",value:"prior",type:"number"},{text:"\u9918\u984d",value:"balance",type:"number"}].map((function(e,t){return Object(m.jsx)(R.a.HeaderCell,{children:e.text},t)}))})}),Object(m.jsx)(R.a.Body,{children:a.map((function(e,t){return Object(m.jsxs)(R.a.Row,{onClick:function(){B(e)},children:[Object(m.jsx)(R.a.Cell,{children:e.name}),Object(m.jsx)(R.a.Cell,{children:e.prior}),Object(m.jsx)(R.a.Cell,{children:e.balance})]},e.id)}))})]})]})}function H(e){var t=e.rows,c=e.schema;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(R.a,{unstackable:!0,children:[Object(m.jsx)(R.a.Header,{children:Object(m.jsxs)(R.a.Row,{children:[c.map((function(e,t){return Object(m.jsx)(R.a.HeaderCell,{children:e.text},t)})),Object(m.jsx)(R.a.HeaderCell,{children:"#"})]})}),Object(m.jsx)(R.a.Body,{children:t.map((function(e,t){return Object(m.jsxs)("tr",{children:[c.map((function(t,c){return Object(m.jsx)("td",{children:e[t.name]},c)})),Object(m.jsx)("td",{children:Object(m.jsx)(u.b,{to:"/cates/edit/".concat(e.id),children:"Edit"})})]},t)}))})]})})}function B(){var e=f().currentUser,t=Object(r.useState)([]),c=Object(l.a)(t,2),n=c[0],a=c[1];return Object(r.useEffect)((function(){h.collection("cates").where("user","==",e.email).orderBy("prior").get().then((function(e){var t=e.docs.map((function(e){return Object(y.a)(Object(y.a)({},e.data()),{},{id:e.id})}));a(t)}))}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(H,{rows:n,schema:[{name:"name",text:"\u540d\u7a31",type:"text"},{name:"prior",text:"\u9806\u5e8f",type:"number"}]})})}var E=c(53),D=c(54),U=c(102),N=c(103),q=c(245),L=function(e){Object(U.a)(c,e);var t=Object(N.a)(c);function c(){return Object(E.a)(this,c),t.apply(this,arguments)}return Object(D.a)(c,[{key:"render",value:function(){return Object(m.jsx)("button",{className:"square",onClick:this.props.onClick,children:this.props.value})}}]),c}(i.a.Component),P=function(e){Object(U.a)(c,e);var t=Object(N.a)(c);function c(e){var n;return Object(E.a)(this,c),(n=t.call(this,e)).state={squares:Array(9).fill(null)},n}return Object(D.a)(c,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();t[e]="X",this.setState({squares:t})}},{key:"renderSquare",value:function(e){var t=this;return Object(m.jsx)(L,{value:this.state.squares[e],onClick:function(){t.handleClick(e)}})}},{key:"render",value:function(){return Object(m.jsxs)(q.a,{children:[Object(m.jsxs)(q.a.Row,{children:[Object(m.jsx)(q.a.Column,{children:this.renderSquare(0)}),Object(m.jsx)(q.a.Column,{children:this.renderSquare(1)}),Object(m.jsx)(q.a.Column,{children:this.renderSquare(2)})]}),Object(m.jsxs)(q.a.Row,{children:[Object(m.jsx)(q.a.Column,{children:this.renderSquare(3)}),Object(m.jsx)(q.a.Column,{children:this.renderSquare(4)}),Object(m.jsx)(q.a.Column,{children:this.renderSquare(5)})]}),Object(m.jsxs)(q.a.Row,{children:[Object(m.jsx)(q.a.Column,{children:this.renderSquare(7)}),Object(m.jsx)(q.a.Column,{children:this.renderSquare(8)})]})]})}}]),c}(i.a.Component),z=c(44),V=c.n(z),J=c(235),K=c(236),M=c(246),Q=c(104);function T(e){var t=e.cates,c=e.rows,n=e.rowsCopy,a=e.setRows,i=e.setItem,s=e.setItemCopy,o=e.setEditedIndex,j=e.setOpen,b=e.activeAccount,u=e.setIsIncome,d=(e.isIncome,e.setIsIncomeOrigin),O=e.setCate,h=Object(r.useState)(""),x=Object(l.a)(h,2),p=x[0],f=x[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(q.a,{children:Object(m.jsxs)(q.a.Row,{columns:2,children:[Object(m.jsx)(q.a.Column,{children:Object(m.jsx)(J.a,{name:"search",fluid:!0,value:p,onChange:function(e){f(e.target.value),a(n.filter((function(t){return t.title.toLowerCase().includes(e.target.value.toLowerCase())})))},placeholder:"Search..."})}),Object(m.jsx)(q.a.Column,{children:Object(m.jsx)(K.a,{selection:!0,fluid:!0,label:"\u985e\u5225",placeholder:"",options:t,onChange:function(e,t){console.log(t.value),a(n.filter((function(e){return e.cate===t.value})))}})})]})}),Object(m.jsx)(R.a,{unstackable:!0,children:Object(m.jsx)(R.a.Body,{children:c.map((function(e){var t;return Object(m.jsxs)(R.a.Row,{onClick:function(){!function(e){O(e.cate),u((function(t){var c={date:e.date,title:e.title,id:e.id};return e.income?(i(Object(y.a)(Object(y.a)({},c),{},{amt:e.income})),s(Object(y.a)(Object(y.a)({},c),{},{amt:e.income})),!0):(i(Object(y.a)(Object(y.a)({},c),{},{amt:e.expense})),s(Object(y.a)(Object(y.a)({},c),{},{amt:e.expense})),!1)})),d((function(){return!!e.income})),o(c.indexOf(e)),j(!0)}(e)},children:[Object(m.jsxs)(R.a.Cell,{children:[Object(m.jsx)(M.a,{as:"h4",children:e.title}),Object(m.jsxs)("span",{children:[e.date," "]}),!b&&Object(m.jsx)(Q.a,{color:"teal",children:null===(t=e.account)||void 0===t?void 0:t.name}),e.cate&&Object(m.jsx)(Q.a,{children:e.cate})]}),Object(m.jsxs)(R.a.Cell,{textAlign:"right",children:[e.income?Object(m.jsx)(Q.a,{color:"teal",circular:!0,children:"\u5b58"}):Object(m.jsx)(Q.a,{color:"orange",circular:!0,children:"\u63d0"}),Object(m.jsx)("br",{}),"$ ",e.income?e.income:e.expense+""]})]},e.id)}))})})]})}var W=function(e){var t=e.rows,c=e.setRows,n=e.rowsCopy,a=e.setRowsCopy,i=e.rowsAccount,s=e.setRowsAccount,o=e.item,b=e.setItem,u=e.editedIndex,d=e.defalutItem,O=e.setEditedIndex,x=e.open,p=e.setOpen,v=(e.setActiveAccount,e.activeAccount),g=e.itemCopy,C=e.isIncome,R=e.setIsIncome,A=e.isIncomeOrigin,H=e.cates,B=e.cate,E=e.setCate,D=f().currentUser,U=Object(r.useState)(!1),N=Object(l.a)(U,2),q=N[0],L=N[1],P=function(e){console.log(o),b(Object(y.a)(Object(y.a)({},o),{},Object(k.a)({},e.target.name,e.target.value)))},z=h.collection("balances");function V(e){h.collection("accounts").doc(v.id).update({balance:e});var t=i.indexOf(v),c=i.slice();Object.assign(c[t],Object(y.a)(Object(y.a)({},v),{},{balance:e})),s(c)}function J(e,t){var c=t.name;console.log(o),R("income"===c)}return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(S.a,{open:x,closeIcon:!0,onClose:function(){p(!1)},children:[Object(m.jsxs)(S.a.Header,{children:["\u7de8\u8f2f\u8868\u55ae",A?"income":"expense"]}),Object(m.jsxs)(S.a.Content,{children:[Object(m.jsxs)(j.a,{fluid:!0,widths:2,pointing:!0,secondary:!0,children:[Object(m.jsx)(j.a.Item,{color:"teal",name:"income",active:C,onClick:J,children:"\u6536\u5165"}),Object(m.jsx)(j.a.Item,{color:"orange",name:"expense",active:!C,onClick:J,children:"\u652f\u51fa"})]}),Object(m.jsxs)(I.a,{children:[Object(m.jsxs)(I.a.Field,{children:[Object(m.jsx)("label",{children:"\u65e5\u671f"}),Object(m.jsx)("input",{name:"date",type:"date",placeholder:"",value:o.date,onChange:P})]}),Object(m.jsx)(I.a.Select,{selection:!0,fluid:!0,label:"\u985e\u5225",placeholder:"",value:B,options:H,onChange:function(e,t){E(t.value),console.log(t.value)}}),Object(m.jsxs)(I.a.Field,{children:[Object(m.jsx)("label",{children:"\u9805\u76ee"}),Object(m.jsx)("input",{name:"title",placeholder:"",value:o.title,onChange:P})]}),Object(m.jsxs)(I.a.Field,{children:[Object(m.jsx)("label",{children:"\u91d1\u984d"}),Object(m.jsx)("input",{name:"amt",type:"number",placeholder:"",value:o.amt,onChange:P})]})]})]}),Object(m.jsxs)(S.a.Actions,{children:[u>-1&&Object(m.jsx)(F.a,{loading:q,floated:"left",color:"red",onClick:function(){L(!0),z.doc(o.id).delete().then((function(){c(t.filter((function(e){return e.id!==o.id}))),a(n.filter((function(e){return e.id!==o.id}))),O(-1),b(d),p(!1),L(!1);var e=v.balance+1*o.amt;C&&(e=v.balance-1*o.amt),V(e)}))},children:"Delete"}),Object(m.jsx)(F.a,{loading:q,floated:"right",primary:!0,onClick:function(){if(-1==u){var e={date:o.date,title:o.title,user:D.email,account:v};B&&(e.cate=B),e=C?Object(y.a)(Object(y.a)({},e),{},{income:o.amt}):Object(y.a)(Object(y.a)({},e),{},{expense:o.amt}),L(!0),z.add(e).then((function(r){console.log(r.id);var i=Object(y.a)(Object(y.a)({},e),{},{id:r.id});c([i].concat(Object(w.a)(t))),a([i].concat(Object(w.a)(n))),L(!1),O(-1),b(d),p(!1);var s=v.balance-1*o.amt;C&&(s=v.balance+1*o.amt),V(s)}))}else{var r={date:o.date,title:o.title,user:D.email,account:v};B&&(r.cate=B),r=C?Object(y.a)(Object(y.a)({},r),{},{income:o.amt,expense:null}):Object(y.a)(Object(y.a)({},r),{},{expense:o.amt,income:null}),L(!0),z.doc(o.id).update(r).then((function(){var e=v.balance-1*o.amt+1*g.amt;C&&(e=1*v.balance+1*o.amt-1*g.amt),!A&&C&&(e=v.balance+1*o.amt+1*g.amt),A&&!C&&(e=v.balance-1*o.amt-1*g.amt),V(e);var n=t.slice();Object.assign(n[u],r),c(n),L(!1),O(-1),b(d),p(!1)}))}},children:"Save"})]})]})})},G=c(247),X=function(e){var t=e.rows,c=e.accountClick,n=e.activeAccount;f().currentUser;return Object(m.jsx)(q.a,{columns:3,children:t.map((function(e,t){return Object(m.jsx)(q.a.Column,{children:Object(m.jsx)(G.a,{textAlign:"center",color:"teal",inverted:(null===n||void 0===n?void 0:n.name)===e.name,onClick:function(){c(e)},children:e.name})},e.id)}))})},Y=c(243),$=function(){var e=f(),t=e.currentUser,c=(e.logout,Object(r.useState)(!1)),n=Object(l.a)(c,2),a=n[0],i=n[1],s=Object(r.useState)([]),o=Object(l.a)(s,2),j=o[0],b=o[1],u=Object(r.useState)([]),d=Object(l.a)(u,2),O=d[0],x=d[1],p=Object(r.useState)([]),v=Object(l.a)(p,2),g=v[0],C=v[1],k=Object(r.useState)(),w=Object(l.a)(k,2),S=w[0],I=w[1],R={date:(new Date).toISOString().slice(0,10),title:"",amt:""},A=Object(r.useState)(R),H=Object(l.a)(A,2),B=H[0],E=H[1],D=Object(r.useState)(R),U=Object(l.a)(D,2),N=U[0],L=U[1],P=Object(r.useState)(-1),z=Object(l.a)(P,2),V=z[0],J=z[1],K=Object(r.useState)(!1),M=Object(l.a)(K,2),Q=M[0],G=M[1],$=Object(r.useState)(!1),Z=Object(l.a)($,2),_=Z[0],ee=Z[1],te=Object(r.useState)(),ce=Object(l.a)(te,2),ne=ce[0],ae=ce[1],re=Object(r.useState)([]),ie=Object(l.a)(re,2),se=ie[0],oe=ie[1];Object(r.useEffect)((function(){var e=h.collection("cates").orderBy("prior");t&&(e=e.where("user","==",t.email)),e=e.get().then((function(e){var t=e.docs.map((function(e){var t=e.data();return{text:t.name,value:t.name,key:e.id}}));oe(t)}));var c=h.collection("balances").orderBy("date","desc").limit(300);t&&(c=c.where("user","==",null===t||void 0===t?void 0:t.email)),c.get().then((function(e){var t=e.docs.map((function(e){return Object(y.a)(Object(y.a)({},e.data()),{},{id:e.id})}));b(t),x(t)})),h.collection("accounts").where("user","==",t.email).orderBy("prior").limit(3).get().then((function(e){var t=e.docs.map((function(e){return Object(y.a)(Object(y.a)({},e.data()),{},{id:e.id})}));C(t)}))}),[]);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(q.a,{children:Object(m.jsx)(q.a.Row,{children:Object(m.jsx)(q.a.Column,{children:Object(m.jsx)(X,{rows:g,activeAccount:S,accountClick:function(e){I(e),b(O.filter((function(t){return t.account&&t.account.name==e.name})))}})})})}),S&&Object(m.jsx)(q.a,{columns:2,children:Object(m.jsxs)(q.a.Row,{children:[Object(m.jsx)(q.a.Column,{children:Object(m.jsx)(Y.a,{horizontal:!0,children:Object(m.jsx)(Y.a.Value,{children:null===S||void 0===S?void 0:S.balance})})}),Object(m.jsx)(q.a.Column,{verticalAlign:"middle",children:Object(m.jsx)(F.a,{onClick:function(){i(!0),E(R),J(-1)},floated:"right",color:"yellow",children:"ADD"})})]})}),Object(m.jsx)(q.a,{children:Object(m.jsx)(q.a.Row,{children:Object(m.jsx)(q.a.Column,{children:Object(m.jsx)(T,{setCate:ae,cates:se,setOpen:i,rows:j,rowsCopy:O,setRows:b,item:B,setItem:E,setItemCopy:L,isIncome:Q,setIsIncome:G,isIncomeOrigin:_,setIsIncomeOrigin:ee,setEditedIndex:J,activeAccount:S})})})}),Object(m.jsx)(W,{cates:se,cate:ne,setCate:ae,isIncomeOrigin:_,setIsIncome:G,isIncome:Q,defalutItem:R,rows:j,setRows:b,setRowsCopy:x,rowsCopy:O,rowsAccount:g,setRowsAccount:C,item:B,setItem:E,editedIndex:V,setEditedIndex:J,open:a,setOpen:i,setActiveAccount:I,activeAccount:S,itemCopy:N})]})};function Z(){var e=Object(g.g)(),t=Object(g.h)().id,c=Object(r.useState)({name:"",prior:""}),n=Object(l.a)(c,2),a=n[0],i=n[1];Object(r.useEffect)((function(){h.collection("cates").doc(t).get().then((function(e){e.exists?(i(e.data()),console.log("Document data:",e.data())):console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)}))}),[]);var s=function(e){i(Object(y.a)(Object(y.a)({},a),{},Object(k.a)({},e.target.name,e.target.value)))};return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(I.a,{onSubmit:function(){h.collection("cates").doc(t).update(Object(y.a)(Object(y.a)({},a),{},{prior:Number(a.prior)})).then((function(){e.push("/cates")}))},children:[Object(m.jsxs)(I.a.Field,{children:[Object(m.jsx)("label",{children:"\u540d\u7a31"}),Object(m.jsx)("input",{name:"name",placeholder:"",value:a.name,onChange:s})]}),Object(m.jsxs)(I.a.Field,{children:[Object(m.jsx)("label",{children:"\u9806\u5e8f"}),Object(m.jsx)("input",{type:"number",name:"prior",placeholder:"",value:a.prior,onChange:s})]}),Object(m.jsx)(F.a,{type:"submit",primary:!0,children:"Save"})]})})}function _(e){var t=e.defalutItem,c=e.schema,n=i.a.useState([]),a=Object(l.a)(n,2),r=a[0],s=a[1],o=i.a.useState(t),j=Object(l.a)(o,2),b=j[0],u=j[1],d=i.a.useState(-1),O=Object(l.a)(d,2),x=O[0],p=O[1],f=i.a.useState(!1),v=Object(l.a)(f,2),g=v[0],C=v[1],F=h.collection(e.collectionName);return i.a.useEffect((function(){F.get().then((function(e){var t=e.docs.map((function(e){return Object(y.a)(Object(y.a)({},e.data()),{},{id:e.id})}));s(t)}))}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(S.a,{open:g,closeIcon:!0,onClose:function(){return C(!1)},children:[Object(m.jsx)(S.a.Header,{children:"\u7de8\u8f2f\u8868\u55ae"}),Object(m.jsx)(S.a.Content,{children:Object(m.jsx)(I.a,{children:c.map((function(e,t){return Object(m.jsxs)(I.a.Field,{children:[Object(m.jsx)("label",{children:e.text}),Object(m.jsx)(J.a,{placeholder:e.text,name:e.name,value:b[e.name],type:e.type,onChange:function(e){u(Object(y.a)(Object(y.a)({},b),{},Object(k.a)({},e.target.name,e.target.value)))}})]},t)}))})}),Object(m.jsxs)(S.a.Actions,{children:[Object(m.jsx)("button",{className:"ui button blue",onClick:function(){if(-1==x){var e=Object(y.a)(Object(y.a)({},b),{},{id:Date.now()});F.add(e),s([].concat(Object(w.a)(r),[e]))}else{F.doc(b.id).update(b);var c=r.slice();Object.assign(c[x],b),s(c),p(-1)}u(t),C(!1)},children:"\u5132\u5b58"}),-1!==x&&Object(m.jsx)("button",{className:"ui button red left floated",onClick:function(){if(confirm("\u78ba\u5b9a\u522a\u9664\u55ce?")){F.doc(b.id).delete();var e=r.filter((function(e){return e.id!==b.id}));s(e),C(!1)}},children:"\u522a\u9664"})]})]}),Object(m.jsx)("button",{className:"ui button",onClick:function(){C(!0),u(t),p(-1)},children:"\u65b0\u589e"}),Object(m.jsx)(ee,{edit:function(e){C(!0),p(r.indexOf(e)),u(e)},schema:c,rows:r,dataRow:e.dataRow})]})}var ee=function(e){Object(U.a)(c,e);var t=Object(N.a)(c);function c(e){return Object(E.a)(this,c),t.call(this,e)}return Object(D.a)(c,[{key:"render",value:function(){var e=this;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(R.a,{unstackable:!0,children:[Object(m.jsx)(R.a.Header,{children:Object(m.jsxs)(R.a.Row,{children:[this.props.schema.map((function(e,t){return Object(m.jsx)(R.a.HeaderCell,{children:e.text},t)})),Object(m.jsx)(R.a.HeaderCell,{children:"#"})]})}),Object(m.jsx)(R.a.Body,{children:this.props.rows.map((function(t,c){return Object(m.jsxs)("tr",{children:[e.props.dataRow?e.props.dataRow:e.props.schema.map((function(e,c){return Object(m.jsx)("td",{children:t[e.name]},c)})),Object(m.jsx)("td",{onClick:function(){return e.props.edit(t)},children:Object(m.jsx)("a",{href:"#",children:"\u7de8\u8f2f"})})]},c)}))})]})})}}]),c}(i.a.Component);function te(){var e=[{name:"name",text:"\u540d\u7a31",type:"text"},{name:"qty",text:"\u80a1\u6578",type:"number"},{name:"price",text:"\u73fe\u50f9",type:"number"},{name:"cost",text:"\u6210\u672c",type:"number"}];e.map((function(e,t){return Object(m.jsx)("td",{children:"A"},t)}));return Object(m.jsx)(_,{schema:e,defalutItem:{name:"",qty:"",price:"",cost:""},collectionName:"stocks"})}var ce=Object(r.createContext)(),ne=function(e){var t=h.collection(e.collectionName);Object(r.useEffect)((function(){t.get().then((function(e){var t=e.docs.map((function(e){return Object(y.a)(Object(y.a)({},e.data()),{},{id:e.id})}));i(t)}))}),[]);var c=Object(r.useState)([]),n=Object(l.a)(c,2),a=n[0],i=n[1],s={name:"",price:""},o=Object(r.useState)(s),j=Object(l.a)(o,2),b=j[0],u=j[1],d=Object(r.useState)(-1),O=Object(l.a)(d,2),x=O[0],p=O[1],f=Object(r.useState)(!1),v=Object(l.a)(f,2),g=v[0],C=v[1];return Object(m.jsx)(ce.Provider,{value:{books:a,editedBook:b,open:g,removeBook:function(e){t.doc(e).delete(),i(a.filter((function(t){return t.id!==e})))},editBook:function(e){u(e),p(a.indexOf(e)),C(!0)},updateBook:function(e){u(e)},saveBook:function(e){if(-1==x)t.add(e).then((function(t){i([].concat(Object(w.a)(a),[Object(y.a)(Object(y.a)({},e),{},{id:t.id})]))}));else{t.doc(e.id).update(e);var c=a.slice();Object.assign(c[x],e),i(c)}u(s),p(-1),C(!1)},openForm:function(){p(-1),u(s),C(!0)},closeForm:function(){p(-1),u(s),C(!1)}},children:e.children})},ae=function(){var e=Object(r.useContext)(ce),t=e.editBook,c=e.books,n=e.removeBook,a=e.openForm;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(M.a,{children:c.length}),Object(m.jsx)(F.a,{onClick:function(){a()},children:"ADD"}),Object(m.jsxs)(R.a,{unstackable:!0,children:[Object(m.jsx)(R.a.Header,{children:Object(m.jsxs)(R.a.Row,{children:[Object(m.jsx)(R.a.HeaderCell,{children:"\u66f8\u540d"}),Object(m.jsx)(R.a.HeaderCell,{children:"\u4f5c\u8005"}),Object(m.jsx)(R.a.HeaderCell,{children:"#"}),Object(m.jsx)(R.a.HeaderCell,{children:"#"})]})}),Object(m.jsx)(R.a.Body,{children:c.map((function(e){return Object(m.jsxs)(R.a.Row,{children:[Object(m.jsx)(R.a.Cell,{children:e.title}),Object(m.jsx)(R.a.Cell,{children:e.author}),Object(m.jsx)(R.a.Cell,{onClick:function(){n(e.id)},children:"Delete"}),Object(m.jsx)(R.a.Cell,{onClick:function(){t(e)},children:"Edit"})]},e.id)}))})]})]})},re=function(){var e=Object(r.useContext)(ce),t=e.editBook,c=e.books,n=e.removeBook,a=e.openForm;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(M.a,{children:c.length}),Object(m.jsx)(F.a,{onClick:function(){console.log("open"),a()},children:"ADD"}),Object(m.jsxs)(R.a,{unstackable:!0,children:[Object(m.jsx)(R.a.Header,{children:Object(m.jsxs)(R.a.Row,{children:[Object(m.jsx)(R.a.HeaderCell,{children:"\u66f8\u540d"}),Object(m.jsx)(R.a.HeaderCell,{children:"\u4f5c\u8005"}),Object(m.jsx)(R.a.HeaderCell,{children:"Qty"}),Object(m.jsx)(R.a.HeaderCell,{children:"#"}),Object(m.jsx)(R.a.HeaderCell,{children:"#"})]})}),Object(m.jsx)(R.a.Body,{children:c.map((function(e){return Object(m.jsxs)(R.a.Row,{children:[Object(m.jsx)(R.a.Cell,{children:e.name}),Object(m.jsx)(R.a.Cell,{children:e.price}),Object(m.jsx)(R.a.Cell,{children:e.qty}),Object(m.jsx)(R.a.Cell,{onClick:function(){n(e.id)},children:"Delete"}),Object(m.jsx)(R.a.Cell,{onClick:function(){t(e)},children:"Edit"})]},e.id)}))})]})]})},ie=function(){var e=Object(r.useContext)(ce),t=e.editedBook,c=e.updateBook,n=e.saveBook,a=e.open,i=e.closeForm,s=Object(r.useState)(""),o=Object(l.a)(s,2),j=(o[0],o[1]),b=Object(r.useState)(""),u=Object(l.a)(b,2),d=(u[0],u[1]);return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(S.a,{open:a,closeIcon:!0,onClose:i,children:[Object(m.jsx)(S.a.Header,{children:"\u7de8\u8f2f"}),Object(m.jsx)(S.a.Content,{children:Object(m.jsxs)(I.a,{children:[Object(m.jsxs)(I.a.Field,{children:[Object(m.jsx)("label",{children:"Title"}),Object(m.jsx)(J.a,{placeholder:"book title",name:"price",value:t.price,type:"text",onChange:function(e){c(Object(y.a)(Object(y.a)({},t),{},Object(k.a)({},e.target.name,e.target.value)))}})]}),Object(m.jsxs)(I.a.Field,{children:[Object(m.jsx)("label",{children:"Author"}),Object(m.jsx)(J.a,{placeholder:"book author",name:"author",value:t.author,type:"text",onChange:function(e){c(Object(y.a)(Object(y.a)({},t),{},Object(k.a)({},e.target.name,e.target.value)))}})]})]})}),Object(m.jsx)(S.a.Actions,{children:Object(m.jsx)(F.a,{onClick:function(){n(t),j(""),d("")},children:"Update"})})]})})};var se=function(){function e(){Object(E.a)(this,e)}return Object(D.a)(e,null,[{key:"getAllContacts",value:function(){var e=[];return h.collection("cates").get().then((function(t){t.docs.map((function(t){e.push(Object(y.a)({},t.data()))}))})),e}}]),e}();se.serverURL="http://localhost:9000";var oe=function(){var e=Object(r.useState)({loading:!1,contacts:[],errorMessage:""}),t=Object(l.a)(e,2),c=t[0],n=t[1];Object(r.useEffect)((function(){n(Object(y.a)(Object(y.a)({},c),{},{loading:!1}));var e=se.getAllContacts();n(Object(y.a)(Object(y.a)({},c),{},{loading:!1,contacts:e})),console.log(e)}),[]);var a=c.contacts;return Object(m.jsx)("pre",{children:JSON.stringify(a)})},le=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(oe,{}),Object(m.jsxs)(ne,{collectionName:"stocks",children:[Object(m.jsx)(ie,{}),Object(m.jsx)(re,{})]}),Object(m.jsxs)(ne,{collectionName:"books",children:[Object(m.jsx)(ie,{}),Object(m.jsx)(ae,{})]})]})},je=function(){function e(){Object(E.a)(this,e)}return Object(D.a)(e,null,[{key:"getAllContacts",value:function(){var e="".concat(this.serverURL,"/contacts");return V.a.get(e)}},{key:"getContact",value:function(e){var t="".concat(this.serverURL,"/contacts/").concat(e);return V.a.get(t)}},{key:"AddContact",value:function(e){var t="".concat(this.serverURL,"/contacts");return V.a.post(t,e)}},{key:"UpdateContact",value:function(e){var t="".concat(this.serverURL,"/contacts/").concat(e.id);return V.a.put(t,e)}},{key:"DeleteContact",value:function(e){var t="".concat(this.serverURL,"/contacts/").concat(e);return V.a.delete(t)}}]),e}();je.serverURL="http://192.168.0.12:9000";var be=c.p+"static/media/spin.0d8837f6.gif";function ue(){return Object(m.jsx)("div",{className:"ui basic segment",children:Object(m.jsx)("img",{src:be,className:"ui centered medium image",style:{width:"100px"}})})}var de=function(){var e=Object(r.useState)({loading:!1,contacts:[]}),t=Object(l.a)(e,2),c=t[0],n=t[1];Object(r.useEffect)(Object(o.a)(Object(s.a)().mark((function e(){var t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(y.a)(Object(y.a)({},c),{},{loading:!0})),e.next=3,V.a.get("http://192.168.0.12:9000/contacts");case 3:t=e.sent,n(Object(y.a)(Object(y.a)({},c),{},{loading:!1,contacts:t.data}));case 5:case"end":return e.stop()}}),e)}))),[]);var a=c.contacts,i=c.loading;return Object(m.jsx)(m.Fragment,{children:i?Object(m.jsx)(ue,{}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(F.a,{children:Object(m.jsx)(u.b,{to:"/contacts/add",children:"ADD"})}),Object(m.jsxs)(R.a,{unstackable:!0,children:[Object(m.jsx)(R.a.Header,{children:Object(m.jsxs)(R.a.Row,{children:[Object(m.jsx)(R.a.HeaderCell,{children:"\u540d\u7a31"}),Object(m.jsx)(R.a.HeaderCell,{children:"\u91d1\u984d"}),Object(m.jsx)(R.a.HeaderCell,{children:"#"}),Object(m.jsx)(R.a.HeaderCell,{children:"#"})]})}),Object(m.jsx)(R.a.Body,{children:a.map((function(e){return Object(m.jsxs)(R.a.Row,{children:[Object(m.jsx)(R.a.Cell,{children:e.name}),Object(m.jsx)(R.a.Cell,{children:e.amt}),Object(m.jsx)(R.a.Cell,{children:Object(m.jsx)(u.b,{to:"/contacts/edit/".concat(e.id),children:"Edit"})}),Object(m.jsx)(R.a.Cell,{children:Object(m.jsx)(u.b,{to:"/contacts/view/".concat(e.id),children:"View"})})]},e.id)}))})]})]})})};function Oe(){var e=Object(g.h)().contactId;return Object(r.useEffect)(Object(o.a)(Object(s.a)().mark((function t(){var c;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,je.getContact(e);case 2:c=t.sent,console.log(c.data);case 4:case"end":return t.stop()}}),t)}))),[]),Object(m.jsx)("div",{children:e})}function he(){var e=Object(g.g)(),t=Object(g.h)().contactId;Object(r.useEffect)(Object(o.a)(Object(s.a)().mark((function e(){var c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,je.getContact(t);case 4:c=e.sent,i(c.data);case 6:case"end":return e.stop()}}),e)}))),[]);var c=Object(r.useState)({name:"",amt:""}),n=Object(l.a)(c,2),a=n[0],i=n[1],j=function(e){i(Object(y.a)(Object(y.a)({},a),{},Object(k.a)({},e.target.name,e.target.value)))},b=function(){var c=Object(o.a)(Object(s.a)().mark((function c(){return Object(s.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(!t){c.next=5;break}return c.next=3,je.UpdateContact(a);case 3:c.next=7;break;case 5:return c.next=7,je.AddContact(a);case 7:e.push("/contacts"),console.log("save");case 9:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}(),u=function(){var c=Object(o.a)(Object(s.a)().mark((function c(){return Object(s.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(!t){c.next=3;break}return c.next=3,je.DeleteContact(a.id);case 3:e.push("/contacts");case 4:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[" ",Object(m.jsxs)(I.a,{onSubmit:b,children:[Object(m.jsxs)(I.a.Field,{children:[Object(m.jsx)("label",{children:"\u540d\u7a31"}),Object(m.jsx)("input",{name:"name",placeholder:"",value:a.name,onChange:j})]}),Object(m.jsxs)(I.a.Field,{children:[Object(m.jsx)("label",{children:"\u91d1\u984d"}),Object(m.jsx)("input",{name:"amt",placeholder:"",value:a.amt,onChange:j})]}),Object(m.jsx)(F.a,{type:"submit",primary:!0,children:"Save"})]}),Object(m.jsx)(F.a,{floated:"right",onClick:u,children:"Delete"})]})}var xe=c(242);function me(){var e=Object(r.useRef)(),t=Object(r.useRef)(),c=f().login,n=Object(r.useState)(""),a=Object(l.a)(n,2),i=(a[0],a[1]),j=Object(r.useState)(!1),u=Object(l.a)(j,2),d=(u[0],u[1]),O=Object(g.g)();function h(){return(h=Object(o.a)(Object(s.a)().mark((function n(a){return Object(s.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),n.prev=1,i(""),d(!0),n.next=6,c(e.current.value,t.current.value);case 6:O.push("/balances"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),i("Failed to log in");case 12:d(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(xe.a,{fluid:!0,children:[Object(m.jsx)(xe.a.Content,{textAlign:"center",header:"Money 2022"}),Object(m.jsx)(xe.a.Content,{children:Object(m.jsxs)(I.a,{size:"large",onSubmit:function(e){return h.apply(this,arguments)},children:[Object(m.jsxs)(I.a.Field,{children:[Object(m.jsx)("label",{children:"Email"}),Object(m.jsx)("input",{ref:e,defaultValue:"mkdodos@gmail.com"})]}),Object(m.jsxs)(I.a.Field,{children:[Object(m.jsx)("label",{children:"Password"}),Object(m.jsx)("input",{ref:t,defaultValue:"123456"})]}),Object(m.jsx)(F.a,{fluid:!0,type:"submit",size:"large",color:"blue",children:"\u767b\u5165"})]})}),Object(m.jsxs)(xe.a.Content,{extra:!0,children:[Object(m.jsx)(b.a,{name:"user"}),"4 Friends"]})]})})}var pe=c(173),fe=["component"];function ve(e){var t=e.component,c=Object(pe.a)(e,fe),n=f().currentUser;return Object(m.jsx)(g.b,Object(y.a)(Object(y.a)({},c),{},{render:function(e){return n?Object(m.jsx)(t,Object(y.a)({},e)):Object(m.jsx)(g.a,{to:"/login"})}}))}function ge(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),c=(t[0],t[1]),n=f(),a=n.currentUser,i=n.logout,j=Object(g.g)();function b(){return(b=Object(o.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(""),e.prev=1,e.next=4,i();case 4:j.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),c("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return console.log(a),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("pre",{children:JSON.stringify(a)}),Object(m.jsx)("div",{children:"Dashboard"}),Object(m.jsx)("strong",{children:"Email:"})," ",null===a||void 0===a?void 0:a.email,Object(m.jsx)(F.a,{variant:"link",onClick:function(){return b.apply(this,arguments)},children:"Log Out"})]})}function Ce(){f().currentUser;return Object(m.jsxs)(g.d,{children:[Object(m.jsx)(g.b,{path:"/accounts",children:Object(m.jsx)(A,{})}),Object(m.jsx)(g.b,{path:"/cates",exact:!0,component:B}),Object(m.jsx)(g.b,{path:"/cates/edit/:id",exact:!0,component:Z}),Object(m.jsx)(g.b,{path:"/tictactoe",component:P}),Object(m.jsx)(ve,{path:"/balances",exact:!0,component:$}),Object(m.jsx)(ve,{path:"/stocks",component:te}),Object(m.jsx)(g.b,{path:"/books",component:le}),Object(m.jsx)(g.b,{path:"/login",exact:!0,component:me}),Object(m.jsx)(g.b,{path:"/",exact:!0,component:ge}),Object(m.jsx)(ve,{path:"/dashboard",exact:!0,component:ge}),Object(m.jsx)(g.b,{path:"/contacts",exact:!0,component:de}),Object(m.jsx)(g.b,{path:"/contacts/add",exact:!0,component:he}),Object(m.jsx)(g.b,{path:"/contacts/view/:contactId",exact:!0,component:Oe}),Object(m.jsx)(g.b,{path:"/contacts/edit/:contactId",exact:!0,component:he})]})}var ke=c(237);function we(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(v,{children:Object(m.jsxs)(u.a,{children:[Object(m.jsx)(C,{}),Object(m.jsx)(ke.a,{children:Object(m.jsx)(Ce,{})})]})})})}c(220);var ye=document.getElementById("root");a.a.render(Object(m.jsx)(we,{}),ye)}},[[221,1,2]]]);
//# sourceMappingURL=main.9d6397b6.chunk.js.map