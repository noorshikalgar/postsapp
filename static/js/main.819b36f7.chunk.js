(this.webpackJsonpposts=this.webpackJsonpposts||[]).push([[0],{117:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(14),o=a.n(l),s=(a(88),a(89),a(15)),c=a(21),i=a(17),m=a(16),u=a(18),d=a(121),p=a(33),b=a(120),h=a(76),E=a(129),g=function(e){var t=e.id;return n.a.createElement(E.a,{style:{width:"18rem"}},n.a.createElement(E.a.Body,null,n.a.createElement(E.a.Title,null,"Advertise #",t),n.a.createElement(E.a.Subtitle,{className:"mb-2 text-muted"},"ignissimos aperiam dolorem qui eum\\nfacilis quibusdam animi sint suscipit qui"),n.a.createElement(E.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),n.a.createElement(E.a.Link,{href:"#"},"Read More"),n.a.createElement(E.a.Link,{href:"#"},"Click to buy")))},f=a(11),v=a.n(f),y=function(e){if(!e)return!1;var t={},a=localStorage.getItem("registeredUsers");return a&&(t=a=JSON.parse(a)),e.id=j(),t[e.email]=e,localStorage.setItem("registeredUsers",JSON.stringify(t)),!0},O=function(e){if(!e)return!1;try{var t=JSON.parse(localStorage.getItem("registeredUsers"));for(var a in t){var r=t[a];if(e.email===r.email&&e.password===r.password)return console.log("checking"),localStorage.setItem("loggedUser",JSON.stringify(r)),!0}}catch(n){console.log(n.message)}return!1},w=function(){return JSON.parse(localStorage.getItem("loggedUser"))},j=function(){return Math.random().toString(36).substring(7)},S=function(e){if(!e)return!1;var t=P()||[];return e.id=N(),t.push(e),localStorage.setItem("postsData",JSON.stringify(t)),!0},k=function(){var e=w(),t=P(),a=[];if(!v.a.isEmpty(t))for(var r in t){var n=t[r];n.user.id===e.id&&a.push(n)}return console.log(a),a},P=function(){var e=JSON.parse(localStorage.getItem("postsData"));return v.a.isEmpty(e)?null:e.reverse()},N=function(){return Math.random().toString(36).substring(9)},C=function(e){var t=e.post;return n.a.createElement(n.a.Fragment,null,n.a.createElement(E.a,null,n.a.createElement(E.a.Header,{as:"h5"},t.title),n.a.createElement(E.a.Body,null,n.a.createElement("blockquote",{className:"blockquote mb-0"},n.a.createElement("p",null," ",t.body," "),n.a.createElement("footer",{className:"blockquote-footer"},"Created By ",n.a.createElement("cite",{title:"Source Title"},t.user.name))))),n.a.createElement("br",null))},D=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={posts:{}},a.showAdvertise=function(){for(var e in[1,2,3])return n.a.createElement(g,{id:e})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=P();this.setState({posts:e},(function(){return console.log("component loaded!")}))}},{key:"render",value:function(){var e=this.state.posts;return n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,null,n.a.createElement(h.a,{sm:12,md:8},n.a.createElement("h3",null," All Post "),n.a.createElement("hr",null),!v.a.isEmpty(e)&&Object.keys(e).map((function(t){return n.a.createElement(C,{key:t,post:e[t]})})),v.a.isEmpty(e)&&n.a.createElement("p",null," Dont have any posts yet. ")),n.a.createElement(h.a,{sm:12,md:4},n.a.createElement(d.a,{className:"py-5"},n.a.createElement("h4",null," Advertise "),n.a.createElement("hr",null),n.a.createElement(g,null),n.a.createElement("br",null),n.a.createElement(g,null),n.a.createElement("br",null),n.a.createElement(g,null)))))}}]),t}(r.Component),x=a(10),A=a(122),M=function(e){var t=e.user;return n.a.createElement(A.a,{className:"text-center"},n.a.createElement("h1",null," Welcome ",v.a.isEmpty(t)?"to Post's App":t.name," "),n.a.createElement("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit malesuada massa, et varius turpis ultrices sit amet. Nulla consequat justo a lorem ornare, ac tempor nunc pellentesque.  "),n.a.createElement("hr",null),n.a.createElement("div",null,v.a.isEmpty(t)&&n.a.createElement(n.a.Fragment,null,n.a.createElement(x.b,{to:"/posts",className:"btn btn-primary mr-3",variant:"primary"}," Explore Posts "),n.a.createElement(x.b,{to:"/login",className:"btn btn-outline-primary"}," Login Here ")),!v.a.isEmpty(t)&&n.a.createElement(n.a.Fragment,null,n.a.createElement(x.b,{to:"/dashboard",className:"btn btn-primary mr-3",variant:"primary"}," Dashboard "))))},q=a(126),U=a(128),F=a(127),B=function(e){var t=e.user;return n.a.createElement(q.a,{collapseOnSelect:!0,expand:"md",bg:"dark",variant:"dark"},n.a.createElement(d.a,null,n.a.createElement(x.c,{className:"navbar-brand",to:"/"},"POSTAPP"),n.a.createElement(q.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),n.a.createElement(q.a.Collapse,{id:"responsive-navbar-nav"},n.a.createElement(U.a,{className:"ml-auto"},n.a.createElement(x.c,{className:"nav-link",to:"/"},"Home"),n.a.createElement(x.c,{className:"nav-link",to:"/posts"},"Posts"),v.a.isEmpty(t)&&n.a.createElement(n.a.Fragment,null,n.a.createElement(x.c,{className:"nav-link",to:"/login"},"Login"),n.a.createElement(x.c,{className:"nav-link",to:"/register"},"Register")),!v.a.isEmpty(t)&&n.a.createElement(n.a.Fragment,null,n.a.createElement(F.a,{title:t.name,id:"basic-nav-dropdown"},n.a.createElement(x.c,{className:"dropdown-item",to:"/dashboard"},"Dashboard"),n.a.createElement(F.a.Divider,null),n.a.createElement(x.c,{className:"dropdown-item",to:"/logout"},"Logout")))))))},I=a(32),J=a(124),T=a(81),L=a(19),H=a.n(L);function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(a,!0).forEach((function(t){Object(I.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var W=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={data:{},errors:{}},a.validate=function(){var e=H.a.validate(a.state.data,a.schema,{abortEarly:!1}).error;if(!e)return null;var t=z({},a.state.errors),r=!0,n=!1,l=void 0;try{for(var o,s=e.details[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var c=o.value;t[c.path[0]]=c.message}}catch(i){n=!0,l=i}finally{try{r||null==s.return||s.return()}finally{if(n)throw l}}return t},a.validateProperty=function(e){var t=e.name,r=e.value,n=Object(I.a)({},t,r),l=Object(I.a)({},t,a.schema[t]),o=H.a.validate(n,l).error;return o?o.details[0].message:null},a.handleSubmit=function(e){e.preventDefault();var t=a.validate();t?a.setState({errors:t||{}},(function(){return console.log(a.state.errors)})):a.doSubmit()},a.handleChange=function(e){var t=e.currentTarget,r=z({},a.state.errors),n=a.validateProperty(t);n?r[t.name]=n:delete r[t.name];var l=z({},a.state.data);l[t.name]=t.value,a.setState({data:l,errors:r})},a}return Object(u.a)(t,e),t}(r.Component),G=a(48),Y=function(e){var t=e.name,a=e.lable,r=e.error,l=e.type,o=e.as,s=Object(G.a)(e,["name","lable","error","type","as"]);return n.a.createElement(J.a.Group,{controlId:t},n.a.createElement(J.a.Label,null,a),n.a.createElement(J.a.Control,Object.assign({type:l,name:t,as:o||"input"},s)),n.a.createElement(J.a.Text,{className:"text-danger"},r&&r))};function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var $=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={data:{email:"",password:""},errors:{}},a.schema={email:H.a.string().email().label("Email").required(),password:H.a.string().min(3).max(50).label("Password").required()},a.doSubmit=function(){var e=O(a.state.data);if(e)console.log("Submitted",a.state.errors,"result",e),window.location="/postsapp/dashboard";else{var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(a,!0).forEach((function(t){Object(I.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.state.errors);t.email="Email does not exists",a.setState({errors:t}),console.log("error",a.state.errors)}console.log("Submitted",a.state)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.errors,a=e.data;return n.a.createElement(b.a,null,n.a.createElement(h.a,{md:{span:8,offset:2},sm:12},n.a.createElement(E.a,null,n.a.createElement(E.a.Header,{as:"h5"}," Login Form "),n.a.createElement(E.a.Body,null,n.a.createElement(J.a,{onSubmit:this.handleSubmit},n.a.createElement(Y,{onChange:this.handleChange,name:"email",lable:"Email Address",type:"email",placeholder:"Enter email address",error:t.email,value:a.username}),n.a.createElement(Y,{onChange:this.handleChange,name:"password",lable:"Password",placeholder:"Enter password",type:"password",error:t.password}),n.a.createElement(T.a,{variant:"primary",disabled:this.validate(),type:"submit"},"Submit"))),n.a.createElement(E.a.Footer,null,"New here ? ",n.a.createElement(x.b,{to:"/register"}," Register Now ")))))}}]),t}(W),_=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={data:{email:"",name:"",password:""},errors:{}},a.schema={email:H.a.string().email().required(),name:H.a.string().min(3).max(120).required(),password:H.a.string().regex(/[a-zA-Z0-9]{3,30}/).required()},a.doSubmit=function(){y(a.state.data),a.props.history.replace("/login")},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.errors,a=e.data;return n.a.createElement(b.a,null,n.a.createElement(h.a,{md:{span:8,offset:2},sm:12},n.a.createElement(E.a,null,n.a.createElement(E.a.Header,{as:"h5"}," Register Form "),n.a.createElement(E.a.Body,null,n.a.createElement(J.a,{onSubmit:this.handleSubmit},n.a.createElement(Y,{onChange:this.handleChange,name:"email",lable:"Email Address",type:"email",placeholder:"Enter email address",error:t.email,value:a.username}),n.a.createElement(Y,{onChange:this.handleChange,name:"name",lable:"Name",type:"text",placeholder:"Enter your full name",error:t.name,value:a.name}),n.a.createElement(Y,{onChange:this.handleChange,name:"password",lable:"Password",placeholder:"Enter password",type:"password",error:t.password,value:a.password}),n.a.createElement(T.a,{variant:"primary",disabled:this.validate(),type:"submit"},"Submit"))),n.a.createElement(E.a.Footer,null,"Already have an account ? ",n.a.createElement(x.b,{to:"/login"}," Login here ")))))}}]),t}(W),K=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){JSON.parse(localStorage.getItem("loggedUser"))&&localStorage.removeItem("loggedUser"),window.location="/postsapp/"}},{key:"render",value:function(){return null}}]),t}(r.Component),Q=a(125),V=a(123);function X(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var ee=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={showModal:!1,user:{},data:{title:"",body:""},errors:{},posts:{}},a.schema={title:H.a.string().max(255).label("Title").required(),body:H.a.string().min(10).max(1024).label("Body").required()},a.doSubmit=function(){var e=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?X(a,!0).forEach((function(t){Object(I.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):X(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.state.data);e.user=a.state.user,e.created_at=Date.now(),S(e);var t=k();a.setState({posts:t}),a.showModal()},a.renderModal=function(){var e=a.state,t=e.showModal,r=e.errors;return n.a.createElement(Q.a,{show:t,size:"lg",onHide:a.showModal,"aria-labelledby":"contained-modal-title-vcenter",centered:!0},n.a.createElement(Q.a.Header,{closeButton:!0},n.a.createElement(Q.a.Title,{id:"contained-modal-title-vcenter"},"Create Post")),n.a.createElement(Q.a.Body,null,n.a.createElement(d.a,null,n.a.createElement(J.a,{onSubmit:a.handleSubmit},n.a.createElement(Y,{name:"title",lable:"Title",placeholder:"Enter title here",onChange:a.handleChange,error:r.title,type:"text"}),n.a.createElement(Y,{name:"body",as:"textarea",lable:"Body",placeholder:"Post message",onChange:a.handleChange,error:r.body,type:"text"}),n.a.createElement(T.a,{type:"submit",block:!0}," Create ")))))},a.showModal=function(){var e=!a.state.showModal;a.setState({showModal:e})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=k(),t=w()||{};this.setState({user:t,posts:e})}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.posts;return n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,null,n.a.createElement(h.a,{sm:12,md:10},n.a.createElement("h4",null," Hello, ",t.name,"! ")),n.a.createElement(h.a,{sm:12,md:2},n.a.createElement(V.a,null,n.a.createElement(T.a,{size:"sm",variant:"primary",onClick:this.showModal},"New Post"),this.renderModal()))),n.a.createElement("hr",null),v.a.isEmpty(a)&&n.a.createElement("p",{className:"text-center"}," You dont have any post!, Create one now. "),Object.keys(a).map((function(e){return n.a.createElement(C,{key:e,post:a[e]})})))}}]),t}(W);function te(e){var t=e.component,a=e.render,r=e.showOnUser,l=Object(G.a)(e,["component","render","showOnUser"]),o=v.a.isEmpty(w());return r?n.a.createElement(p.b,Object.assign({},l,{render:function(e){return o?n.a.createElement(p.a,{to:"/login"}):t?n.a.createElement(t,e):a(e)}})):n.a.createElement(p.b,Object.assign({},l,{render:function(e){return o?t?n.a.createElement(t,e):a(e):n.a.createElement(p.a,{to:"/"})}}))}var ae=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={user:{}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=w();this.setState({user:e})}},{key:"render",value:function(){var e=this.state.user;return n.a.createElement(n.a.Fragment,null,n.a.createElement(B,{user:e}),n.a.createElement(d.a,{className:"pt-3"},n.a.createElement(p.d,null,n.a.createElement(te,{showOnUser:!0,path:"/logout",component:K}),n.a.createElement(te,{showOnUser:!0,path:"/dashboard",component:ee}),n.a.createElement(te,{showOnUser:!1,path:"/register",component:_}),n.a.createElement(te,{showOnUser:!1,path:"/login",component:$}),n.a.createElement(p.b,{path:"/posts",component:D}),n.a.createElement(p.b,{path:"/",exact:!0,render:function(t){return n.a.createElement(M,Object.assign({user:e},t))}}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(x.a,{basename:"/postsapp/"},n.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},83:function(e,t,a){e.exports=a(117)},89:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.819b36f7.chunk.js.map