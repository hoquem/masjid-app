(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,r){"use strict";r.r(t);var a=r(2),n=r(0),s=r.n(n),c=r(30),o=r.n(c),i=(r(73),r(15)),m=r(16),b=r(18),l=r(17),d=r(64),h=r(7),u=(r(74),r(75),r(19)),j=r(39),p=r(40),O=r(66),v=r(25),f=function(e){Object(b.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(i.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={toggle:!1},e.Toggle=function(){e.setState({toggle:!e.state.toggle})},e}return Object(m.a)(r,[{key:"render",value:function(){return Object(a.jsxs)(p.a,{bg:"light",expand:"lg",children:[Object(a.jsx)(p.a.Brand,{href:"#home",children:"Masjid Membership"}),Object(a.jsx)(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsxs)(p.a.Collapse,{id:"basic-navbar-nav",children:[Object(a.jsxs)(j.a,{className:"mr-auto",children:[Object(a.jsx)(j.a.Link,{href:"/",children:"Home"}),Object(a.jsx)(j.a.Link,{href:"/Members",children:"Members"}),Object(a.jsx)(j.a.Link,{href:"/Logout",children:"Logout"})]}),Object(a.jsxs)(O.a,{inline:!0,children:[Object(a.jsx)(v.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),Object(a.jsx)(u.a,{variant:"outline-success",children:"Search"})]})]})]})}}]),r}(n.Component),x=r(67),S=r(27),g=r.n(S),M=r(37),w=r(63),C=r(38),N=r.n(C),k=r(62),L=function(e){Object(b.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(i.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).handleEditButtonClick=function(t){e.props.handleMemberEdit(e.props.member)},e.handleRemoveButtonClick=function(t){e.props.handleMemberRemove(e.props.member)},e}return Object(m.a)(r,[{key:"render",value:function(){var e=this.props.member.HouseNo+" "+this.props.member.Street,t=this.props.member.Firstname+" "+this.props.member.Lastname;return Object(a.jsxs)("tr",{className:"border-bottom",children:[Object(a.jsx)("td",{children:this.props.member.MemberId}),Object(a.jsx)("td",{children:t}),Object(a.jsx)("td",{children:e}),Object(a.jsx)("td",{children:Object(a.jsxs)(k.a,{size:"sm",children:[Object(a.jsx)(u.a,{variant:"outline-danger",onClick:this.handleRemoveButtonClick,children:"r"}),Object(a.jsx)(u.a,{variant:"outline-warning",onClick:this.handleEditButtonClick,children:"e"})]})})]})}}]),r}(n.Component),y=function(e){Object(b.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(i.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).handleAddButtonClick=function(t){e.props.addMember(e.props.street)},e.handleMemberEdit=function(t){e.props.updateMember(t)},e.handleMemberRemove=function(t){e.props.removeMember(t)},e}return Object(m.a)(r,[{key:"render",value:function(){var e=this;return Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsxs)("tr",{className:"border-bottom border-success font-weight-bold",children:[Object(a.jsx)("td",{colSpan:"3",children:this.props.street.name+"  "}),Object(a.jsx)("td",{children:Object(a.jsx)(u.a,{variant:"outline-warning",onClick:this.handleAddButtonClick,children:"+"})})]}),this.props.street.members.map((function(t){return Object(a.jsx)(L,{member:t,handleMemberEdit:e.handleMemberEdit,handleMemberRemove:e.handleMemberRemove},t.MemberId)})),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{}),Object(a.jsx)("td",{}),Object(a.jsx)("td",{})]}),Object(a.jsx)("tr",{children:Object(a.jsx)("td",{colSpan:"3"})})]})}}]),r}(n.Component),F=r(52),E=r(35),T=r(14),H=function(e){Object(b.a)(r,e);var t=Object(l.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).handleSave=function(e){var t={Firstname:a.state.memberFirstname?a.state.memberFirstname:a.props.member.Firstname,Lastname:a.state.memberLastname?a.state.memberLastname:a.props.member.Lastname,HouseNo:a.state.memberHouseNo?a.state.memberHouseNo:a.props.member.HouseNo,Street:a.state.memberStreet?a.state.memberStreet:a.props.member.Street,Town:a.state.memberTown?a.state.memberTown:a.props.member.Town};a.props.onSave(t)},a.handleCancel=function(){var e={Firstname:a.state.memberFirstname,Lastname:a.state.memberLastname,HouseNo:a.state.memberHouseNo,Street:a.state.memberStreet,Town:a.state.memberTown};a.props.onCancel(e)},a.state={memberFirstname:"",memberLastname:"",memberHouseNo:"",memberStreet:"",memberTown:"Luton"},a}return Object(m.a)(r,[{key:"render",value:function(){var e=this;return Object(a.jsxs)(E.a,Object(F.a)(Object(F.a)({},this.props),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",children:[Object(a.jsx)(E.a.Header,{children:Object(a.jsx)(E.a.Title,{id:"contained-modal-title-vcenter",children:"Member details"})}),Object(a.jsxs)(E.a.Body,{children:[Object(a.jsxs)(T.a,{className:"mb-3",children:[Object(a.jsx)(T.a.Prepend,{children:Object(a.jsx)(T.a.Text,{id:"Firstname",children:"Firstname(s)"})}),Object(a.jsx)(v.a,{placeholder:"First name","aria-label":"Firstname","aria-describedby":"firstname",onChange:function(t){return e.setState({memberFirstname:t.target.value.toLocaleLowerCase()})},defaultValue:this.props.member.Firstname})]}),Object(a.jsxs)(T.a,{className:"mb-3",children:[Object(a.jsx)(T.a.Prepend,{children:Object(a.jsx)(T.a.Text,{id:"Lastname",children:"Lastname"})}),Object(a.jsx)(v.a,{placeholder:"Last name","aria-label":"Lastname","aria-describedby":"lastname",onChange:function(t){return e.setState({memberLastname:t.target.value.toLocaleLowerCase()})},defaultValue:this.props.member.Lastname})]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)(T.a,{className:"mb-3",children:[Object(a.jsx)(T.a.Prepend,{children:Object(a.jsx)(T.a.Text,{id:"HouseNo",children:"House"})}),Object(a.jsx)(v.a,{placeholder:"House number or name","aria-label":"House #","aria-describedby":"house",onChange:function(t){return e.setState({memberHouseNo:t.target.value.toLocaleUpperCase()})},defaultValue:this.props.member.HouseNo})]}),Object(a.jsxs)(T.a,{className:"mb-3",children:[Object(a.jsx)(T.a.Prepend,{children:Object(a.jsx)(T.a.Text,{id:"Street",children:"Street"})}),Object(a.jsx)(v.a,{placeholder:"Street name","aria-label":"Street","aria-describedby":"street",onChange:function(t){return e.setState({memberStreet:t.target.value.toLocaleUpperCase()})},defaultValue:this.props.member.Street})]})]}),Object(a.jsxs)(E.a.Footer,{children:[Object(a.jsx)(u.a,{variant:"secondary",onClick:this.handleCancel,children:"Cancel"}),Object(a.jsx)(u.a,{variant:"primary",onClick:this.handleSave,children:"Save"})]})]}))}}]),r}(n.Component),A=function(e){Object(b.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(i.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={modalShow:!1,tempmember:{Firstname:"FIRSTNAME",Lastname:"LASTNAME",HouseNo:"1",Street:"STREET 1",Town:"LUTON"},isAddNewMember:!1,members:[]},e.setModalShow=function(t){e.setState({modalShow:t})},e.showMemberEditDialog=function(){e.setModalShow(!0)},e.hideMemberEditDialog=function(){e.setModalShow(!1)},e.handleMemberEditCancel=function(t){e.hideMemberEditDialog()},e.handleMemberEditSave=function(t){try{if(e.state.isAddNewMember)e.saveNewMember(t);else{var r=e.state.members.find((function(t){return t._id===e.state.tempmember._id}));r&&(r.Firstname=t.Firstname,r.Lastname=t.Lastname,r.HouseNo=t.HouseNo,r.Street=t.Street,r.Town=t.Town,e.saveUpdatedMember(r),e.setState({members:e.state.members}))}e.hideMemberEditDialog()}catch(a){console.log(a)}},e.removeMember=function(t){e.saveDelete(t)},e.handleAddNewMemberButtonClick=function(t){e.addNewMember({name:""})},e.addNewMember=function(t){e.setState({tempmember:{Firstname:"",Lastname:"",HouseNo:"",Street:t.name,Town:"LUTON"},isAddNewMember:!0},e.showMemberEditDialog)},e.updateMember=function(t){e.setState({tempmember:t,isAddNewMember:!1},e.showMemberEditDialog)},e}return Object(m.a)(r,[{key:"componentDidMount",value:function(){var e=Object(M.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("/members");case 3:t=e.sent,this.setState({members:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"saveNewMember",value:function(){var e=Object(M.a)(g.a.mark((function e(t){var r,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.Firstname&&t.Firstname.length>0&&t.Lastname&&t.Lastname.length>0&&t.HouseNo&&t.HouseNo.length>0&&t.Street&&t.Street.length>0)){e.next=6;break}return e.next=3,N.a.post("/members",t);case 3:r=e.sent,a=[].concat(Object(x.a)(this.state.members),[r.data]),this.setState({members:a});case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"saveUpdatedMember",value:function(){var e=Object(M.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.put("members/"+t._id,t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()},{key:"saveDelete",value:function(){var e=Object(M.a)(g.a.mark((function e(t){var r,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.delete("members/"+t._id,t);case 3:r=e.sent,-1!==(a=this.state.members.findIndex((function(e){return e._id===r.data._id})))&&(this.state.members.splice(a,1),this.setState({members:this.state.members})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getStreets",value:function(){this.state.members.sort((function(e,t){return e.Street.localeCompare(t.Street)}));var e=[];this.state.members.forEach((function(t){t.Street=t.Street.toUpperCase();var r=e.find((function(e){return e.name===t.Street}));r||(r={name:t.Street,members:[]},e.push(r)),r.members.push(t)})),e.forEach((function(e){e.members.sort((function(e,t){var r=e.HouseNo,a=t.HouseNo;return r<a?-1:r>a?1:0}))}));var t=1;return e.forEach((function(e){var r=[];e.members.forEach((function(e){var a=Object.assign({},e);a.MemberId=t++,r.push(a)})),e.members=r})),e}},{key:"render",value:function(){var e=this,t=this.state.members.length+1e3,r=this.getStreets(),n=this.state.tempmember;return this.state.members.length>0?Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsx)(H,{member:n,show:this.state.modalShow,onCancel:this.handleMemberEditCancel,onSave:this.handleMemberEditSave}),Object(a.jsx)(w.a,{borderless:!0,hover:!0,children:Object(a.jsx)("tbody",{children:r.map((function(r){return Object(a.jsx)(y,{street:r,addMember:e.addNewMember,removeMember:e.removeMember,updateMember:e.updateMember},t++)}))})})]}):Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsx)(H,{member:n,show:this.state.modalShow,onCancel:this.handleMemberEditCancel,onSave:this.handleMemberEditSave}),Object(a.jsx)("div",{children:Object(a.jsx)(u.a,{onClick:this.handleAddNewMemberButtonClick,children:"Add Member"})})]})}}]),r}(n.Component),B=function(e){Object(b.a)(r,e);var t=Object(l.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(m.a)(r,[{key:"render",value:function(){return Object(a.jsx)(d.a,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)(f,{}),Object(a.jsx)(h.c,{children:Object(a.jsx)(h.a,{path:"/members",component:A})})]})})}}]),r}(n.Component),D=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,103)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),a(e),n(e),s(e),c(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(B,{})}),document.getElementById("root")),D()},73:function(e,t,r){},75:function(e,t,r){}},[[101,1,2]]]);
//# sourceMappingURL=main.29e9d251.chunk.js.map