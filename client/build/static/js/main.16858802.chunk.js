(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{133:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(85),s=r.n(c),o=(r(97),r(11)),i=r(12),l=r(13),u=r(14),b=r(53),m=r(10),d=(r(98),r(99),r(18)),h=r(39),j=r(50),p=r(31),f=r(45),O=r(29),x=r(1),v=a.a.createContext(""),g=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={searchText:""},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this;return Object(x.jsx)(v.Provider,{value:{state:this.state,setSearchText:function(t){console.log("setSearchText - "+t),e.setState({searchText:t})}},children:this.props.children})}}]),r}(n.Component),S=g,y=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={searchText:""},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this,t=localStorage.user_email?"logout":"login";return Object(x.jsxs)(j.a,{bg:"light",expand:"lg",sticky:"top",children:[Object(x.jsx)(j.a.Brand,{href:"/",children:"Masjid Membership"}),Object(x.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(x.jsxs)(j.a.Collapse,{id:"basic-navbar-nav",children:[Object(x.jsxs)(h.a,{className:"mr-auto",children:[Object(x.jsx)(f.LinkContainer,{to:"/",children:Object(x.jsx)(h.a.Link,{children:"home"})}),Object(x.jsx)(f.LinkContainer,{to:"/members",children:Object(x.jsx)(h.a.Link,{href:"/members",children:"members"})}),Object(x.jsx)(f.LinkContainer,{to:"/printout",children:Object(x.jsx)(h.a.Link,{href:"/printout",children:"printout"})}),Object(x.jsx)(f.LinkContainer,{to:"/export",children:Object(x.jsx)(h.a.Link,{href:"/export",children:"export"})}),Object(x.jsx)(f.LinkContainer,{to:"/login",children:Object(x.jsx)(h.a.Link,{href:"/login",children:t})})]}),Object(x.jsx)(v.Consumer,{children:function(t){return Object(x.jsxs)(p.a,{inline:!0,children:[Object(x.jsx)(O.a,{type:"text",placeholder:"search",className:"mr-sm-2",onChange:function(t){return e.setState({searchText:t.target.value})},onKeyPress:function(r){13===r.charCode&&(r.preventDefault(),t.setSearchText(e.state.searchText))}}),Object(x.jsx)(d.a,{variant:"outline-success",onClick:function(){t.setSearchText(e.state.searchText)},children:"search"})]})}})]})]})}}]),r}(n.Component),C=y,k=r(9),w=r(19),M=r(88),L=r(35),T=r(20),F=r.n(T),N=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={stats:{},error:""},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=Object(w.a)(Object(k.a)().mark((function e(){var t;return Object(k.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.a.get("/stats");case 3:t=e.sent,this.setState({members:t.data,error:""}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({error:e.t0.message}),console.error(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=localStorage.user_displayName;return Object(x.jsx)(M.a,{fluid:!0,children:Object(x.jsxs)(L.a,{children:[Object(x.jsxs)("h1",{children:["Welcome to the Bury Park Masjid Membership App ",e]}),Object(x.jsx)("p",{}),Object(x.jsx)("br",{}),Object(x.jsxs)("p",{children:["For information about getting access to this application please contact ",Object(x.jsx)("a",{href:"mailto:m.hoque@gmail.com",children:"Mahmudul Hoque"})]})]})})}}]),r}(n.Component),E=N,A=r(84),H=r(91),I=r(90),B=r(89),D=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).handleEditButtonClick=function(t){e.props.handleMemberEdit(e.props.member)},e.handleRemoveButtonClick=function(t){e.props.handleMemberRemove(e.props.member)},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this.props.member.HouseNo+" "+this.props.member.Street,t=this.props.member.Firstname+" "+this.props.member.Lastname;return Object(x.jsxs)("tr",{className:"border-bottom",children:[Object(x.jsx)("td",{children:this.props.member.MemberId}),Object(x.jsx)("td",{children:t}),Object(x.jsx)("td",{children:e}),Object(x.jsx)("td",{children:Object(x.jsxs)(B.a,{size:"sm",children:[Object(x.jsx)(d.a,{variant:"outline-warning",onClick:this.handleEditButtonClick,children:"e"}),Object(x.jsx)(d.a,{variant:"outline-danger",onClick:this.handleRemoveButtonClick,children:"r"})]})})]})}}]),r}(n.Component),P=D,W=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).handleAddButtonClick=function(t){e.props.addMember(e.props.street)},e.handleMemberEdit=function(t){e.props.updateMember(t)},e.handleMemberRemove=function(t){e.props.removeMember(t)},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this;return Object(x.jsxs)(a.a.Fragment,{children:[Object(x.jsxs)("tr",{className:"border-bottom border-success font-weight-bold",children:[Object(x.jsx)("td",{colSpan:"3",children:this.props.street.name+"  "}),Object(x.jsx)("td",{children:Object(x.jsx)(d.a,{variant:"outline-warning",onClick:this.handleAddButtonClick,children:"+"})})]}),this.props.street.members.map((function(t){return v.Consumer,Object(x.jsx)(P,{member:t,handleMemberEdit:e.handleMemberEdit,handleMemberRemove:e.handleMemberRemove},t.MemberId)})),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{}),Object(x.jsx)("td",{}),Object(x.jsx)("td",{})]}),Object(x.jsx)("tr",{children:Object(x.jsx)("td",{colSpan:"3"})})]})}}]),r}(n.Component),R=W,U=r(71),V=r(46),_=r(25),z=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).handleSave=function(t){e.props.onSave(e.props.member)},e.handleCancel=function(){e.props.onCancel(e.props.member)},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this;return Object(x.jsxs)(V.a,Object(U.a)(Object(U.a)({},this.props),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",children:[Object(x.jsx)(V.a.Header,{children:Object(x.jsx)(V.a.Title,{id:"contained-modal-title-vcenter",children:"Member details"})}),Object(x.jsxs)(V.a.Body,{children:[Object(x.jsxs)(_.a,{className:"mb-3",children:[Object(x.jsx)(_.a.Prepend,{children:Object(x.jsx)(_.a.Text,{id:"Firstname",children:"Firstname(s)"})}),Object(x.jsx)(O.a,{placeholder:"First name","aria-label":"Firstname","aria-describedby":"firstname",onChange:function(t){return e.props.member.Firstname=t.target.value.toLocaleUpperCase()},defaultValue:this.props.member.Firstname})]}),Object(x.jsxs)(_.a,{className:"mb-3",children:[Object(x.jsx)(_.a.Prepend,{children:Object(x.jsx)(_.a.Text,{id:"Lastname",children:"Lastname"})}),Object(x.jsx)(O.a,{placeholder:"Last name","aria-label":"Lastname","aria-describedby":"lastname",onChange:function(t){return e.props.member.Lastname=t.target.value.toLocaleUpperCase()},defaultValue:this.props.member.Lastname})]}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)(_.a,{className:"mb-3",children:[Object(x.jsx)(_.a.Prepend,{children:Object(x.jsx)(_.a.Text,{id:"HouseNo",children:"House"})}),Object(x.jsx)(O.a,{placeholder:"House number or name","aria-label":"House #","aria-describedby":"house",onChange:function(t){return e.props.member.HouseNo=t.target.value.toLocaleUpperCase()},defaultValue:this.props.member.HouseNo})]}),Object(x.jsxs)(_.a,{className:"mb-3",children:[Object(x.jsx)(_.a.Prepend,{children:Object(x.jsx)(_.a.Text,{id:"Street",children:"Street"})}),Object(x.jsx)(O.a,{placeholder:"Street name","aria-label":"Street","aria-describedby":"street",onChange:function(t){return e.props.member.Street=t.target.value.toLocaleUpperCase()},defaultValue:this.props.member.Street})]})]}),Object(x.jsxs)(V.a.Footer,{children:[Object(x.jsx)(d.a,{variant:"secondary",onClick:this.handleCancel,children:"Cancel"}),Object(x.jsx)(d.a,{variant:"primary",onClick:this.handleSave,children:"Save"})]})]}))}}]),r}(n.Component),q=z,G=function(e){var t=e.trim().lastIndexOf(" ");if(-1===t)return{minusLastWord:"",lastWord:e.trim()};var r=e.slice(0,t),n=e.slice(t,e.length);return{minusLastWord:r.trim(),lastWord:n.trim()}},J=function(e,t){var r=G(e.toString()),n=G(t.toString()),a=r.lastWord,c=n.lastWord,s=r.minusLastWord,o=n.minusLastWord,i=/[^a-zA-Z]/g,l=/[^0-9]/g,u=a.toString(),b=c.toString(),m=u.replace(i,""),d=b.replace(i,""),h=parseInt(u.replace(l,""),10),j=parseInt(b.replace(l,""),10),p=0;return 0===(p=h===j?0===m.length?0===d.length?0:-1:m.localeCompare(d):h===j?0:h>j?1:-1)&&(p=0===s.length?0===o.length?0:-1:s.localeCompare(o)),p},Y=function(e,t){var r=e.sort((function(e,t){return function(e,t){var r=0;return 0===(r=e.Street.localeCompare(t.Street))&&(r=J(e.HouseNo,t.HouseNo)),0===r&&(r=e.Lastname.localeCompare(t.Lastname)),0===r&&(r=e.Firstname.localeCompare(t.Firstname)),r}(e,t)})),n=[];r.forEach((function(e){e.Street=e.Street.toUpperCase();var t=n.find((function(t){return t.name===e.Street}));t||(t={name:e.Street,members:[],count:0},n.push(t)),t.members.push(e),t.count=t.count+1}));var a=1;return n.forEach((function(e){var r=[];e.members.forEach((function(e){var n=Object.assign({},e);n.MemberId=a++,t&&t.length>0?(e.Firstname.includes(t)||e.Lastname.includes(t)||e.Street.includes(t))&&r.push(n):r.push(n)})),e.members=r})),n.filter((function(e){return e.members.length>0}))},K=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={modalShow:!1,tempmember:{Firstname:"FIRSTNAME",Lastname:"LASTNAME",HouseNo:"1",Street:"STREET 1",Town:"LUTON"},isAddNewMember:!1,members:[],error:""},e.setModalShow=function(t){e.setState({modalShow:t})},e.showMemberEditDialog=function(){e.setModalShow(!0)},e.hideMemberEditDialog=function(){e.setModalShow(!1)},e.handleMemberEditCancel=function(t){e.hideMemberEditDialog()},e.handleMemberEditSave=function(t){try{if(e.state.isAddNewMember)console.log("Save new member - ",t),e.saveNewMember(t);else{var r=e.state.members.find((function(t){return t._id===e.state.tempmember._id}));r&&(r.Firstname=t.Firstname,r.Lastname=t.Lastname,r.HouseNo=t.HouseNo,r.Street=t.Street,r.Town=t.Town,console.log("Save update member - ",r),e.saveUpdatedMember(r),e.setState({members:e.state.members}))}e.hideMemberEditDialog()}catch(n){console.error(n)}},e.removeMember=function(t){window.confirm("Are you sure you want to delete ".concat(t.Firstname," ").concat(t.Lastname))&&e.saveDelete(t)},e.handleAddNewMemberButtonClick=function(t){e.addNewMember({name:""})},e.addNewMember=function(t){e.setState({tempmember:{Firstname:"",Lastname:"",HouseNo:"",Street:t.name,Town:"LUTON"},isAddNewMember:!0},e.showMemberEditDialog)},e.updateMember=function(t){console.log("Update member - ",t),e.setState({tempmember:t,isAddNewMember:!1},e.showMemberEditDialog)},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=Object(w.a)(Object(k.a)().mark((function e(){var t;return Object(k.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.a.get("/members");case 3:t=e.sent,this.setState({members:t.data,error:""}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({error:e.t0.message}),console.error(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"saveNewMember",value:function(){var e=Object(w.a)(Object(k.a)().mark((function e(t){var r,n;return Object(k.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.Firstname&&t.Firstname.length>0&&t.Lastname&&t.Lastname.length>0&&t.HouseNo&&t.HouseNo.length>0&&t.Street&&t.Street.length>0)){e.next=6;break}return e.next=3,F.a.post("/members",t);case 3:r=e.sent,n=[].concat(Object(A.a)(this.state.members),[r.data]),this.setState({members:n});case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"saveUpdatedMember",value:function(){var e=Object(w.a)(Object(k.a)().mark((function e(t){return Object(k.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.a.put("members/"+t._id,t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()},{key:"saveDelete",value:function(){var e=Object(w.a)(Object(k.a)().mark((function e(t){var r,n;return Object(k.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.a.delete("members/"+t._id,t);case 3:r=e.sent,-1!==(n=this.state.members.findIndex((function(e){return e._id===r.data._id})))&&(this.state.members.splice(n,1),this.setState({members:this.state.members})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(this.state.error.length>0){return Object(x.jsx)(I.a,{variant:"danger",children:this.state.error})}var t=this.state.members.length+1e3,r=Y(this.state.members,this.context.state.searchText.toLocaleUpperCase()),n=this.state.tempmember;return this.state.members.length>0?Object(x.jsxs)(a.a.Fragment,{children:[Object(x.jsx)(q,{member:n,show:this.state.modalShow,onCancel:this.handleMemberEditCancel,onSave:this.handleMemberEditSave}),Object(x.jsx)(H.a,{borderless:!0,hover:!0,children:Object(x.jsx)("tbody",{children:r.map((function(r){return Object(x.jsx)(R,{street:r,addMember:e.addNewMember,removeMember:e.removeMember,updateMember:e.updateMember},t++)}))})})]}):Object(x.jsxs)(a.a.Fragment,{children:[Object(x.jsx)(q,{member:n,show:this.state.modalShow,onCancel:this.handleMemberEditCancel,onSave:this.handleMemberEditSave}),Object(x.jsx)("div",{children:Object(x.jsx)(d.a,{onClick:this.handleAddNewMemberButtonClick,children:"Add Member"})})]})}}]),r}(n.Component);K.contextType=v;var Z=K,Q=r(67),X=(r(132),function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={title:"Bury Park Masjid Membership Roll",date:(new Date).getFullYear()},e.memberToStringArray=function(e){var t=[];return t.push(e.memberId),t.push(e.Firstname,0+e.Lastname),t.push(e.HouseNo+" "+e.Street),t},e.printTitleAndSubTitle=function(t,r){var n=e.state.title.toString(),a=e.state.date.toString(),c=t.getFontSize(),s=t.getLineHeightFactor(),o=20;return t.setFontSize(30),t.text(n,100,o,{align:"center"}),o+=c+s,t.setFontSize(15),t.text(a,100,o,{align:"center"}),t},e.footer=function(e){if(r.currentpage<e.pageCount){r.doc.setFontSize(10);var t="Page "+e.pageCount;r.doc.text(t,e.settings.margin.left,r.doc.internal.pageSize.height-15),r.currentpage=e.pageCount}},e.printStreet=function(t,r,n){t.setFontSize(10);var a=r.name,c=[];return r.members.forEach((function(e){var t=[];t[0]=e.MemberId,t[1]=e.Firstname+" "+e.Lastname,t[2]=e.HouseNo+" "+e.Street,c.push(t)})),n?t.autoTable({startY:60,head:[[{content:a,colSpan:3,styles:{halign:"center",fillColor:[22,160,133]}}]],afterPageContent:e.footer,body:c,theme:"grid",columnStyles:{0:{cellWidth:15},1:{cellWidth:90},2:{cellWidth:80}}}):t.autoTable({head:[[{content:a,colSpan:3,styles:{halign:"center",fillColor:[22,160,133]}}]],afterPageContent:e.footer,body:c,theme:"grid",columnStyles:{0:{cellWidth:15},1:{cellWidth:90},2:{cellWidth:80}}}),t},e.handleButtonClick=function(){var t=Object(w.a)(Object(k.a)().mark((function t(n){var a,c,s,o;return Object(k.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),e.currentpage=0,t.next=4,F.a.get("/members");case 4:a=t.sent,c=a.data,s=Y(c,""),r.doc=new Q.default,e.printTitleAndSubTitle(r.doc),o=!0,s.forEach((function(t){o?(e.printStreet(r.doc,t,30),o=!1):e.printStreet(r.doc,t)})),r.doc.save("bpjm-members.pdf");case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(i.a)(r,[{key:"render",value:function(){var e=this;return Object(x.jsxs)(a.a.Fragment,{children:[Object(x.jsx)("br",{}),Object(x.jsxs)(L.a,{children:[Object(x.jsxs)(p.a.Group,{controlId:"formTitle",children:[Object(x.jsx)(p.a.Label,{children:"Title"}),Object(x.jsx)(p.a.Control,{placeholder:"Enter title of the report",onChange:function(t){return e.setState({title:t.target.value})},defaultValue:this.state.title})]}),Object(x.jsxs)(p.a.Group,{controlId:"formDate",children:[Object(x.jsx)(p.a.Label,{children:"Date"}),Object(x.jsx)(p.a.Control,{placeholder:"Date",onChange:function(t){return e.setState({date:t.target.value})},defaultValue:this.state.date})]}),Object(x.jsx)(d.a,{variant:"primary",type:"submit",onClick:this.handleButtonClick,children:"Print to PDF"})]})]})}}]),r}(n.Component));X.currentpage=0,X.lineHeight=8,X.leftMargin=20,X.pageHeight=20*X.lineHeight;var $=X,ee=r(68),te=r(32),re=r(70),ne="677448856451-tf822n4ctpqtrro55q55j400j6iv3gft.apps.googleusercontent.com";var ae=function(){var e=Object(n.useState)("Loading..."),t=Object(ee.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(null),s=Object(ee.a)(c,2),o=s[0],i=s[1],l=function(){var e=Object(w.a)(Object(k.a)().mark((function e(t){var r,n;return Object(k.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(t.profileObj),a(),r={token:t.tokenId,googleId:t.profileObj.googleId,displayName:t.profileObj.name,firstName:t.profileObj.givenName,lastName:t.profileObj.familyName,image:t.profileObj.image,email:t.profileObj.email},e.next=6,F.a.post("/auth/google",r);case 6:n=e.sent,localStorage.user_displayName=n.data.displayName,localStorage.user_email=n.email,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(w.a)(Object(k.a)().mark((function e(){return Object(k.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(null),localStorage.removeItem("user_displayName"),e.next=5,F.a.delete("/auth/logout");case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)(L.a,{className:"col-lg-4 col-md-4 col-sm-4 justify-content-center",children:[Object(x.jsx)("br",{}),o?Object(x.jsxs)(te.a,{children:[Object(x.jsxs)(te.a.Header,{children:["Welcome ",o.name,"!"]}),Object(x.jsx)(te.a.Body,{children:Object(x.jsx)(te.a.Title,{children:Object(x.jsx)(re.GoogleLogout,{clientId:ne,onLogoutSuccess:u,onFailure:function(e){console.log("Logout Failure ",e)}})})})]}):Object(x.jsxs)(te.a,{children:[Object(x.jsx)(te.a.Header,{children:"Login using your Google account"}),Object(x.jsx)(te.a.Body,{children:Object(x.jsx)(te.a.Title,{children:Object(x.jsx)(re.GoogleLogin,{clientId:ne,buttonText:r,onSuccess:l,onFailure:function(e){console.log("Login Failure ",e),a()},onRequest:function(){a("Loading...")},onAutoLoadFinished:function(){a()},isSignedIn:!0})})})]})]})},ce=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).memberToCSV=function(e){return e.MemberId+","+e.Firstname+","+e.Lastname+","+e.HouseNo+","+e.Street},e.streetToCSV=function(t,r){return r.members.forEach((function(r){t+=e.memberToCSV(r)+"\r\n"})),t},e.handleButtonClick=function(){var t=Object(w.a)(Object(k.a)().mark((function t(r){var n,a,c,s;return Object(k.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),t.next=3,F.a.get("/members");case 3:n=t.sent,a=n.data,c=Y(a,""),s="ID,Firstname,Lastname,House,Street\r\n",c.forEach((function(t){s=e.streetToCSV(s,t)})),console.log(s),e.saveToFile(s);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(i.a)(r,[{key:"render",value:function(){return Object(x.jsxs)(a.a.Fragment,{children:[Object(x.jsx)("br",{}),Object(x.jsxs)(L.a,{children:[Object(x.jsx)(d.a,{variant:"primary",type:"submit",onClick:this.handleButtonClick,children:"Export to CSV"}),Object(x.jsx)("br",{}),Object(x.jsx)("pre",{id:"csv"})]})]})}},{key:"saveToFile",value:function(e){var t=new Blob([e],{type:"application/octet-stream"}),r=document.createElement("a"),n=URL.createObjectURL(t);r.href=n,r.download="bpjm-members.csv",document.body.appendChild(r),r.click(),setTimeout((function(){document.body.removeChild(r),window.URL.revokeObjectURL(n)}),0)}}]),r}(n.Component),se=ce,oe=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return Object(x.jsx)(b.BrowserRouter,{children:Object(x.jsxs)(S,{children:[Object(x.jsx)(C,{}),Object(x.jsxs)(m.g,{children:[Object(x.jsx)(m.d,{exact:!0,path:"/",component:E}),Object(x.jsx)(m.d,{exact:!0,path:"/members",component:Z}),Object(x.jsx)(m.d,{exact:!0,path:"/PrintOut",component:$}),Object(x.jsx)(m.d,{exact:!0,path:"/export",component:se}),Object(x.jsx)(m.d,{exact:!0,path:"/login",component:ae})]})]})})}}]),r}(n.Component),ie=oe,le=function(e){e&&e instanceof Function&&r.e(6).then(r.bind(null,303)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))};s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(ie,{})}),document.getElementById("root")),le(console.log)},97:function(e,t,r){},99:function(e,t,r){}},[[133,1,3]]]);
//# sourceMappingURL=main.16858802.chunk.js.map