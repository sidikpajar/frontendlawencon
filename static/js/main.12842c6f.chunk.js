(this.webpackJsonpfrontendlawencon=this.webpackJsonpfrontendlawencon||[]).push([[0],{105:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),i=(a(80),a(21)),l=a(25),u=a(66),s=a(19),d={loading:!1,contact:[],error:""},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_CONTACT_REQUEST":return Object(s.a)(Object(s.a)({},t),{},{loading:!0});case"FETCH_CONTACT_SUCCESS":return{loading:!1,contact:e.payload,error:""};case"FETCH_CONTACT_FAILURE":return{loading:!1,contact:[],error:e.payload};default:return t}},m={loading:!1,contactDetail:[],error:""},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_CONTACT_DETAIL_REQUEST":return Object(s.a)(Object(s.a)({},t),{},{loading:!0});case"FETCH_CONTACT_DETAIL_SUCCESS":return{loading:!1,contactDetail:e.payload,error:""};case"FETCH_CONTACT_DETAIL_FAILURE":return{loading:!1,contactDetail:[],error:e.payload};default:return t}},h={loading:!1,contactAdd:[],error:""},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_CONTACT_ADD_REQUEST":return Object(s.a)(Object(s.a)({},t),{},{loading:!0});case"FETCH_CONTACT_ADD_SUCCESS":return{loading:!1,contactAdd:e.payload,error:""};case"FETCH_CONTACT_ADD_FAILURE":return{loading:!1,contactAdd:[],error:e.payload};default:return t}},g={loading:!1,contactUpdate:[],error:""},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_CONTACT_UPDATE_REQUEST":return Object(s.a)(Object(s.a)({},t),{},{loading:!0});case"FETCH_CONTACT_UPDATE_SUCCESS":return{loading:!1,contactUpdate:e.payload,error:""};case"FETCH_CONTACT_UPDATE_FAILURE":return{loading:!1,contactUpdate:[],error:e.payload};default:return t}},T=Object(l.combineReducers)({contact:p,contactDetail:f,contactAdd:C,contactUpdate:E}),v=a(67),y=Object(l.createStore)(T,Object(v.composeWithDevTools)(Object(l.applyMiddleware)(u.a))),A=(a(85),a(9)),N=a.n(A),b=a(15),O=a(26),_=a(27),D=a(31),U=a(29),S=a(145),w=a(149),j=a(148),k=a(143),x=a(146),F=a(147),H=a(144),R=a(139),L=a(24),I=a.n(L),B=function(){return{type:"FETCH_CONTACT_REQUEST"}},W=function(t){return{type:"FETCH_CONTACT_FAILURE",payload:t}},Q=function(){return{type:"FETCH_CONTACT_DETAIL_REQUEST"}},q=function(){return{type:"FETCH_CONTACT_ADD_REQUEST"}},P=function(){return{type:"FETCH_CONTACT_UPDATE_REQUEST"}},G=a(152),M=function(t){Object(D.a)(a,t);var e=Object(U.a)(a);function a(t){var n;return Object(O.a)(this,a),(n=e.call(this,t)).getDetail=function(){var t=Object(b.a)(N.a.mark((function t(e){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.props.history.push({pathname:"/ContactDetail/"+e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n.getDelete=function(t){n.props.fetchContactDelete(t)},n.goToAddContact=Object(b.a)(N.a.mark((function t(){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.props.history.push({pathname:"/ContactAdd"});case 2:case"end":return t.stop()}}),t)}))),n.goToUpdateContact=function(){var t=Object(b.a)(N.a.mark((function t(e){var a;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.id,console.log(a),t.next=4,n.props.history.push({pathname:"/ContactUpdate/".concat(a),data:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n.state={},n}return Object(_.a)(a,[{key:"componentDidMount",value:function(){var t=Object(b.a)(N.a.mark((function t(){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.fetchContact();case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.props.contactData;return console.log(e),r.a.createElement(R.a,{style:{marginTop:100}},r.a.createElement(G.a,{onClick:function(){return t.goToAddContact()},style:{marginBottom:"10px"},variant:"contained",color:"primary"},"Add Contact"),r.a.createElement(k.a,{component:H.a},r.a.createElement(S.a,{"aria-label":"a dense table"},r.a.createElement(x.a,null,r.a.createElement(F.a,null,r.a.createElement(j.a,{align:"left"},"First Name"),r.a.createElement(j.a,{align:"left"},"Last Name"),r.a.createElement(j.a,{align:"left"},"Age"),r.a.createElement(j.a,{align:"right"},"Action"))),r.a.createElement(w.a,null,e.map((function(e){return r.a.createElement(F.a,{key:e.id},r.a.createElement(j.a,{align:"left"},e.firstName),r.a.createElement(j.a,{align:"left"},e.lastName),r.a.createElement(j.a,{align:"left"},e.age),r.a.createElement(j.a,{align:"right"},r.a.createElement(G.a,{onClick:function(){return t.getDetail(e.id)},style:{marginRight:"5px"},variant:"contained",color:"primary"},"Detail"),r.a.createElement(G.a,{onClick:function(){return t.goToUpdateContact(e)},style:{marginRight:"5px"},variant:"contained",color:"secondary"},"Change"),r.a.createElement(G.a,{onClick:function(){return t.getDelete(e.id)},variant:"contained",color:"secondary"},"Delete")))}))))))}}]),a}(n.Component),J=Object(i.b)((function(t){return{contactData:t.contact.contact.data?t.contact.contact.data.data:[]}}),(function(t){return{fetchContact:function(){return t((function(t){t(B),I()({method:"get",url:"".concat("https://simple-contact-crud.herokuapp.com").concat("/contact"),data:{},validateStatus:function(){return!0}}).then((function(e){t(function(t){return{type:"FETCH_CONTACT_SUCCESS",payload:t}}(e))})).catch((function(e){t(W(e))}))}))},fetchContactDelete:function(e){return t((a=e,function(t){t(B),I()({method:"delete",url:"".concat("https://simple-contact-crud.herokuapp.com").concat("/contact","/").concat(a),validateStatus:function(){return!0}}).then((function(t){var e=t;console.log("delete",e)})).catch((function(e){t(W(e))}))}));var a}}}))(M),K=a(150),Y=function(t){Object(D.a)(a,t);var e=Object(U.a)(a);function a(t){var n;return Object(O.a)(this,a),(n=e.call(this,t)).getBack=function(){var t=Object(b.a)(N.a.mark((function t(e){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.props.history.push({pathname:"/"});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n.state={},n}return Object(_.a)(a,[{key:"componentDidMount",value:function(){var t=Object(b.a)(N.a.mark((function t(){var e,a;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.location.href;case 2:return e=t.sent,t.next=5,e.substr(e.lastIndexOf("/")+1);case 5:return a=t.sent,t.next=8,this.props.fetchContactDetail(a);case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.props.contactDetailData;return console.log(e),r.a.createElement(R.a,{style:{marginTop:100}},r.a.createElement("div",{className:"button-custom"},r.a.createElement(G.a,{onClick:function(){return t.getBack()},variant:"contained",color:"primary"},"Back")),r.a.createElement(K.a,{container:!0},r.a.createElement(H.a,null,r.a.createElement(K.a,{item:!0,className:"paperStyle",sm:12,xs:12},r.a.createElement("div",null,r.a.createElement("img",{className:"detail-avatar",style:{width:175,height:175},alt:e.firstName,src:"N/A"!==e.photo?e.photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSKJSt6ck2GifQGbuktdinQnUQnK919aaNoA&usqp=CAU"})),r.a.createElement("div",{className:"detail-wrapping"},r.a.createElement("div",{className:"name"},"".concat(e.firstName," ").concat(e.lastName)),r.a.createElement("div",{className:"description"},"Product Designer"),r.a.createElement("div",{className:"age"},e.age," years old"))))))}}]),a}(n.Component),$=Object(i.b)((function(t){return{contactDetailData:t.contactDetail.contactDetail.data?t.contactDetail.contactDetail.data.data:""}}),(function(t){return{fetchContactDetail:function(e){return t((a=e,function(t){t(Q),I()({method:"get",url:"".concat("https://simple-contact-crud.herokuapp.com").concat("/contact","/").concat(a),data:{},validateStatus:function(){return!0}}).then((function(e){t({type:"FETCH_CONTACT_DETAIL_SUCCESS",payload:e})})).catch((function(e){t({type:"FETCH_CONTACT_DETAIL_FAILURE",payload:e})}))}));var a}}}))(Y),z=a(151),V=a(39),X=a.n(V),Z=function(t){Object(D.a)(a,t);var e=Object(U.a)(a);function a(t){var n;return Object(O.a)(this,a),(n=e.call(this,t)).addContact=Object(b.a)(N.a.mark((function t(){var e,a,r,o,c,i;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=n.state,a=e.firstName,r=e.lastName,o=e.age,c=e.photo,i={firstName:a,lastName:r,age:o,photo:c},n.props.fetchContactAdd(i);case 3:case"end":return t.stop()}}),t)}))),n.goToContact=Object(b.a)(N.a.mark((function t(){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.props.history.push({pathname:"/"});case 1:case"end":return t.stop()}}),t)}))),n.state={firstName:"",lastName:"",age:0,photo:""},n}return Object(_.a)(a,[{key:"render",value:function(){var t=this,e=this.props.contactAdd;400===e.status?X.a.fire({title:"Cancel add contact!",text:e.data.message,icon:"error",confirmButtonColor:"#3085d6",confirmButtonText:"Try"}).then((function(t){t.isConfirmed&&window.location.reload()})):201===e.status&&X.a.fire({title:"Your contact has been saved",text:e.data.message,icon:"success",confirmButtonColor:"#3085d6",confirmButtonText:"Go to Contact"}).then((function(e){e.isConfirmed&&t.props.history.push({pathname:"/"})}));var a=this.state,n=a.firstName,o=a.lastName,c=a.age,i=a.photo;return r.a.createElement(R.a,{style:{marginTop:100}},r.a.createElement(G.a,{onClick:function(){return t.goToContact()},style:{marginBottom:"10px"},variant:"contained",color:"primary"},"Back Contact List"),r.a.createElement("form",null,r.a.createElement(z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"firstName",label:"First Name",name:"firstName",autoFocus:!0,type:"text",value:n,onChange:function(e){return t.setState({firstName:e.target.value})}}),r.a.createElement(z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"lastName",label:"Last Name",type:"text",id:"lastName",value:o,onChange:function(e){return t.setState({lastName:e.target.value})}}),r.a.createElement(z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"age",label:"Age",type:"number",id:"age",value:c,onChange:function(e){return t.setState({age:e.target.value})}}),r.a.createElement(z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"photo",label:"Input your URL Photo",type:"text",id:"photo",value:i,onChange:function(e){return t.setState({photo:e.target.value})}}),r.a.createElement(G.a,{fullWidth:!0,variant:"contained",color:"primary",onClick:function(){return t.addContact()}},"Add Contact")))}}]),a}(n.Component),tt=Object(i.b)((function(t){return{contactAdd:t.contactAdd.contactAdd}}),(function(t){return{fetchContactAdd:function(e){return t((a=e,function(t){t(q),I()({method:"post",url:"".concat("https://simple-contact-crud.herokuapp.com").concat("/contact"),data:a,validateStatus:function(){return!0}}).then((function(e){t(function(t){return{type:"FETCH_CONTACT_ADD_SUCCESS",payload:t}}(e))})).catch((function(e){console.log(e),t({type:"FETCH_CONTACT_ADD_FAILURE",payload:e})}))}));var a}}}))(Z),et=function(t){Object(D.a)(a,t);var e=Object(U.a)(a);function a(t){var n;return Object(O.a)(this,a),(n=e.call(this,t)).updateContact=Object(b.a)(N.a.mark((function t(){var e,a,r,o,c,i;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=n.state,a=e.firstName,r=e.lastName,o=e.age,c=e.photo,i={firstName:a,lastName:r,age:o,photo:c},n.props.fetchContactUpdate(n.getLastURl(),i);case 3:case"end":return t.stop()}}),t)}))),n.goToContact=Object(b.a)(N.a.mark((function t(){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.props.history.push({pathname:"/"});case 1:case"end":return t.stop()}}),t)}))),n.getLastURl=function(){var t=window.location.href;return t.substr(t.lastIndexOf("/")+1)},n.state={firstName:n.props.location.data?n.props.location.data.firstName:"",lastName:n.props.location.data?n.props.location.data.lastName:"",age:n.props.location.data?n.props.location.data.age:0,photo:n.props.location.data?n.props.location.data.photo:""},n}return Object(_.a)(a,[{key:"render",value:function(){var t=this,e=this.props.contactUpdate;return 400===e.status?X.a.fire({title:"Update contact error!",text:e.data.message,icon:"error",confirmButtonColor:"#3085d6",confirmButtonText:"Try"}).then((function(t){t.isConfirmed&&window.location.reload()})):201===e.status&&X.a.fire({title:"Your contact has been updated",text:e.data.message,icon:"success",confirmButtonColor:"#3085d6",confirmButtonText:"Go to Contact"}).then((function(e){e.isConfirmed&&t.props.history.push({pathname:"/"})})),r.a.createElement(R.a,{style:{marginTop:100}},r.a.createElement(G.a,{onClick:function(){return t.goToContact()},style:{marginBottom:"10px"},variant:"contained",color:"primary"},"Back Contact List"),r.a.createElement("form",null,r.a.createElement(z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"firstName",label:"First Name",name:"firstName",autoFocus:!0,type:"text",value:this.state.firstName,onChange:function(e){return t.setState({firstName:e.target.value})}}),r.a.createElement(z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"lastName",label:"Last Name",type:"text",id:"lastName",value:this.state.lastName,onChange:function(e){return t.setState({lastName:e.target.value})}}),r.a.createElement(z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"age",label:"Age",type:"number",id:"age",value:this.state.age,onChange:function(e){return t.setState({age:e.target.value})}}),r.a.createElement(z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"photo",label:"Input your URL Photo",type:"text",id:"photo",value:this.state.photo,onChange:function(e){return t.setState({photo:e.target.value})}}),r.a.createElement(G.a,{fullWidth:!0,variant:"contained",color:"primary",onClick:function(){return t.updateContact()}},"Update Contact")))}}]),a}(n.Component),at=Object(i.b)((function(t){return{contactUpdate:t.contactUpdate.contactUpdate}}),(function(t){return{fetchContactUpdate:function(e,a){return t(function(t,e){return console.log("fetch",e),function(a){a(P),I()({method:"put",url:"".concat("https://simple-contact-crud.herokuapp.com").concat("/contact","/").concat(t),data:e,validateStatus:function(){return!0}}).then((function(t){a(function(t){return{type:"FETCH_CONTACT_UPDATE_SUCCESS",payload:t}}(t))})).catch((function(t){a({type:"FETCH_CONTACT_UPDATE_FAILURE",payload:t})}))}}(e,a))}}}))(et),nt=a(68),rt=a(12);var ot=function(){return r.a.createElement(i.a,{store:y},r.a.createElement(nt.a,null,r.a.createElement(rt.c,null,r.a.createElement(rt.a,{path:"/",exact:!0,component:J}),r.a.createElement(rt.a,{path:"/ContactDetail/:id",component:$}),r.a.createElement(rt.a,{path:"/ContactAdd",component:tt}),r.a.createElement(rt.a,{path:"/ContactUpdate/:id",component:at}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ot,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},75:function(t,e,a){t.exports=a(105)},80:function(t,e,a){},85:function(t,e,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.12842c6f.chunk.js.map