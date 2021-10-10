(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{34:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var r,a,c,i,o,u,l,s,b=t(0),d=t.n(b),j=t(9),p=t.n(j),m=t(22),h=t(7),f=t(8),O=t(20),x=t(23),g="contacts/add",v="contacts/remove",y=Object(f.combineReducers)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case g:return[].concat(Object(x.a)(e),[r]);case v:return e.filter((function(e){return r!==e.id}));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e}}),C=Object(f.combineReducers)({contacts:y}),w=Object(f.createStore)(C,Object(O.composeWithDevTools)()),k=(t(34),t(2)),S=t(3),A=S.a.h1(r||(r=Object(k.a)(["\nmargin-left: 75px;\ncolor: gray;\n"]))),z=S.a.h2(a||(a=Object(k.a)(["\n  margin-left: 75px;\n"]))),F=t(10),N=t(11),D=t(12),I=t(14),J=t(13),T=t(43),Z=S.a.form(c||(c=Object(k.a)(["\n  display: inline-flex;\n  flex-direction: column;\n  margin-left: 40px;\n  padding: 30px;\n  border: none;\n  border-radius: 4px;\n"]))),q=S.a.label(i||(i=Object(k.a)(["\n  font-size: 14px;\n"]))),B=S.a.input(o||(o=Object(k.a)(["\n  padding: 4px;\n  margin-top: 4px;\n"]))),L=S.a.button(u||(u=Object(k.a)(["\n  width: fit-content;\n  padding: 10px;\n  margin-top: 8px;\n  font-size: 14px;\n  background-color: #0eebdc;\n  border: none;\n  border-radius: 10px;\n  &:hover,\n  &:active {\n    cursor: pointer;\n    background-color: #15c2b6;\n  }\n"]))),M=t(1),R=function(e){Object(I.a)(t,e);var n=Object(J.a)(t);function t(){var e;Object(N.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=n.call.apply(n,[this].concat(a))).state={name:"",number:""},e.handleChange=function(n){e.setState(Object(F.a)({},n.currentTarget.name,n.target.value))},e.handleSubmit=function(n){n.preventDefault();var t=e.state,r=t.name,a=t.number;(0,e.props.onSubmit)(r,a),e.setState({name:"",number:""})},e}return Object(D.a)(t,[{key:"render",value:function(){var e=this.handleSubmit,n=this.handleChange,t=this.state,r=t.name,a=t.number;return Object(M.jsxs)(Z,{action:"",onSubmit:e,children:[Object(M.jsx)(q,{htmlFor:"name",children:"Name"}),Object(M.jsx)(B,{onChange:n,type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(M.jsx)(q,{htmlFor:"number",children:"Number"}),Object(M.jsx)(B,{onChange:n,type:"tel",name:"number",value:a,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(M.jsx)(L,{type:"submit",children:" Add contact"})]})}}]),t}(b.Component),E=Object(h.b)((function(e){return{contacts:e.contacts.item}}),(function(e){return{onSubmit:function(n){return e(function(e){return{types:g,payload:{id:Object(T.a)(),name:e.name,number:e.number}}}(n))}}}))(R),P=S.a.ul(l||(l=Object(k.a)(["\n  list-style-type: circle;\n  margin-left: 20px;\n"]))),W=S.a.li(s||(s=Object(k.a)(["\n  margin-top: 8px;\n  font-size: 18px;\n"])));var $,G,H,K=function(e){return e.contacts.items.filter((function(n){return n.name.toLowerCase().includes(e.contacts.filter.toLowerCase())}))},Q=Object(h.b)((function(e){return{contacts:K(e)}}),(function(e){return{deleteId:function(n){return e(function(e){return{types:v,payload:e}}(n))}}}))((function(e){var n=e.contacts,t=e.deleteId;return Object(M.jsx)("div",{children:Object(M.jsx)(P,{children:n.map((function(e){var n=e.id,r=e.name,a=e.number;return Object(M.jsxs)(W,{children:[r," - ",a," ",Object(M.jsx)(L,{type:"button",onClick:function(){return t(n)},children:"Delete"})]},n)}))})})})),U=S.a.div($||($=Object(k.a)(["\n  display: inline-flex;\n  flex-direction: column;\n  margin-left: 60px;\n"]))),V=S.a.input(G||(G=Object(k.a)(["\n  padding: 4px;\n  margin-top: 4px;\n"]))),X=S.a.label(H||(H=Object(k.a)(["\n  font-weight: 500;\n"]))),Y=function(e){Object(I.a)(t,e);var n=Object(J.a)(t);function t(){var e;Object(N.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=n.call.apply(n,[this].concat(a))).getFilterName=function(n){return(0,e.props.onChange)(n.currentTarget.value)},e}return Object(D.a)(t,[{key:"render",value:function(){var e=this.props.value;return Object(M.jsxs)(U,{children:[Object(M.jsx)(X,{htmlFor:"filter",children:"Find contacts by name"}),Object(M.jsx)(V,{type:"text",name:"filter",value:e,onChange:this.getFilterName})]})}}]),t}(b.Component);function _(){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(A,{children:"Phonebook"}),Object(M.jsx)(E,{}),Object(M.jsx)(z,{children:"Contacts"}),Object(M.jsx)(Y,{}),Object(M.jsx)(Q,{})]})}p.a.render(Object(M.jsx)(d.a.StrictMode,{children:Object(M.jsx)(m.a,{children:Object(M.jsx)(h.a,{store:w,children:Object(M.jsx)(_,{})})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.10ee520a.chunk.js.map