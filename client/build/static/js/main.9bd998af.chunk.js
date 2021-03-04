(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{198:function(e,t,a){},199:function(e,t,a){},533:function(e,t,a){},535:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(17),c=a.n(r),o=(a(198),a(199),a(25)),i=a(26),l=a(29),d=a(28),j=a(77),u=a(67),h=a(27),b=a(63),p=a(537),O=a(546),m=a(538),g=a(539),x=a(540),f=a(541),v=a(542),y=a(543),w=a(544),S=a(545),k=a(51),C=a.n(k),E="USER_LOADING",L="USER_LOADED",A="AUTH_ERROR",N="LOGIN_SUCCESS",R="LOGIN_FAIL",I="LOGOUT_SUCCESS",_="REGISTER_SUCCESS",T="REGISTER_FAIL",G="GET_ERRORS",F="CLEAR_ERRORS",U=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:G,payload:{msg:e,status:t,id:a}}},P=function(){return{type:F}},D=function(e){var t=e().auth.token,a={headers:{"Content-type":"application/json"}};return t&&(a.headers["x-auth-token"]=t),a},B=(a(220),a(2)),J=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={modal:!1,name:"",email:"",password:"",msg:null},e.toggle=function(){e.props.clearErrors(),e.setState({modal:!e.state.modal})},e.onChange=function(t){e.setState(Object(b.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a=e.state,n={username:a.username,email:a.email,password:a.password};e.props.register(n)},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.error,n=t.isAuthenticated;a!==e.error&&("REGISTER_FAIL"===a.id?this.setState({msg:a.msg.msg}):this.setState({msg:null})),this.state.modal&&n&&this.toggle()}},{key:"render",value:function(){return Object(B.jsxs)("div",{children:[Object(B.jsx)(p.a,{onClick:this.toggle,href:"#",children:"Register"}),Object(B.jsxs)(O.a,{isOpen:this.state.modal,toggle:this.toggle,children:[Object(B.jsx)(m.a,{toggle:this.toggle,children:"Register"}),Object(B.jsxs)(g.a,{children:[" ",this.state.msg?Object(B.jsxs)(x.a,{color:"danger",children:[" ",this.state.msg]}):null,Object(B.jsx)(f.a,{onSubmit:this.onSubmit,children:Object(B.jsxs)(v.a,{children:[Object(B.jsx)(y.a,{for:"username",children:"Name"}),Object(B.jsx)(w.a,{type:"text",name:"username",id:"username",placeholder:"Username",className:"mb-3",onChange:this.onChange}),Object(B.jsx)(y.a,{for:"email",children:"Email"}),Object(B.jsx)(w.a,{type:"text",name:"email",id:"email",placeholder:"Email",className:"mb-3",onChange:this.onChange}),Object(B.jsx)(y.a,{for:"password",children:"Password"}),Object(B.jsx)(w.a,{type:"password",name:"password",id:"password",placeholder:"Password",className:"mb-3",onChange:this.onChange}),Object(B.jsx)(S.a,{color:"dark",style:{marginTop:"2rem"},block:!0,children:"Register"})]})})]})]})]})}}]),a}(n.Component),M=Object(h.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,error:e.error}}),{register:function(e){var t=e.username,a=e.email,n=e.password;return function(e){var s=JSON.stringify({username:t,email:a,password:n});C.a.post("/api/users",s,{headers:{"Content-Type":"application/json"}}).then((function(t){return e({type:_,payload:t.data})})).catch((function(t){e(U(t.response.data,t.response.status,"REGISTER_FAIL")),e({type:T})}))}},clearErrors:P})(J),H=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(B.jsx)(n.Fragment,{children:Object(B.jsx)(p.a,{onClick:this.props.logout,href:"#",children:"Logout"})})}}]),a}(n.Component),W=Object(h.b)(null,{logout:function(){return{type:I}}})(H),X=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={modal:!1,email:"",password:"",msg:null},e.toggle=function(){e.props.clearErrors(),e.setState({modal:!e.state.modal})},e.onChange=function(t){e.setState(Object(b.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a=e.state,n={email:a.email,password:a.password};e.props.login(n)},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.error,n=t.isAuthenticated;a!==e.error&&("LOGIN_FAIL"===a.id?this.setState({msg:a.msg.msg}):this.setState({msg:null})),this.state.modal&&n&&this.toggle()}},{key:"render",value:function(){return Object(B.jsxs)("div",{children:[Object(B.jsx)(p.a,{onClick:this.toggle,href:"#",children:"Login"}),Object(B.jsxs)(O.a,{isOpen:this.state.modal,toggle:this.toggle,children:[Object(B.jsx)(m.a,{toggle:this.toggle,children:"Login"}),Object(B.jsxs)(g.a,{children:[" ",this.state.msg?Object(B.jsxs)(x.a,{color:"danger",children:[" ",this.state.msg]}):null,Object(B.jsx)(f.a,{onSubmit:this.onSubmit,children:Object(B.jsxs)(v.a,{children:[Object(B.jsx)(y.a,{for:"email",children:"Email"}),Object(B.jsx)(w.a,{type:"email",name:"email",id:"email",placeholder:"Email",className:"mb-3",onChange:this.onChange}),Object(B.jsx)(y.a,{for:"password",children:"Password"}),Object(B.jsx)(w.a,{type:"password",name:"password",id:"password",placeholder:"Password",className:"mb-3",onChange:this.onChange}),Object(B.jsx)(S.a,{color:"dark",style:{marginTop:"2rem"},block:!0,children:"Login"})]})})]})]})]})}}]),a}(n.Component),z=Object(h.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,error:e.error}}),{login:function(e){var t=e.email,a=e.password;return function(e){var n=JSON.stringify({email:t,password:a});C.a.post("/api/auth",n,{headers:{"Content-Type":"application/json"}}).then((function(t){return e({type:N,payload:t.data})})).catch((function(t){e(U(t.response.data,t.response.status,"LOGIN_FAIL")),e({type:R})}))}},clearErrors:P})(X),V=a(59),q=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={isOpen:!1},e.toggle=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.auth,t=e.isAuthenticated,a=e.user,s=Object(B.jsxs)(n.Fragment,{children:[Object(B.jsx)(V.a,{children:Object(B.jsx)("span",{className:"navbar-text mr-3",children:Object(B.jsxs)("strong",{children:[" ",a?"Welcome ".concat(a.username):""]})})}),Object(B.jsx)(u.a.Link,{className:"text-black",href:"/",children:"Home"}),Object(B.jsx)(u.a.Link,{className:"text-black",href:"/Artistfind",children:"Artistfind"}),Object(B.jsx)(u.a.Link,{className:"text-black",href:"/Profile",children:"Profile"}),Object(B.jsx)(u.a.Link,{className:"text-black",href:"/About",children:"About"}),Object(B.jsx)(V.a,{children:Object(B.jsx)(W,{})})]}),r=Object(B.jsxs)(n.Fragment,{children:[Object(B.jsx)(V.a,{children:Object(B.jsx)(M,{})}),Object(B.jsx)(V.a,{children:Object(B.jsx)(z,{})})]});return Object(B.jsxs)(j.a,{collapseOnSelect:!0,className:"gradient border fixed-top",expand:"lg",children:[Object(B.jsx)(j.a.Brand,{className:"text-black",href:"#home",children:"WanderList"}),Object(B.jsx)(j.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(B.jsx)(j.a.Collapse,{id:"responsive-navbar-nav",children:Object(B.jsxs)(u.a,{className:"mr-auto",children:[" ",t?s:r," "]})})]})}}]),a}(n.Component),K=Object(h.b)((function(e){return{auth:e.auth}}),null)(q),Q=a(193),Y=a(13),Z=(a(532),a.p+"static/media/record.b9b0b86c.png"),$=function(){return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)("div",{className:"container-fluid",class:"",children:Object(B.jsx)("a",{href:"/artistfind",onClick:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){console.log("Latitude: "+e.coords.latitude+"Longitude: "+e.coords.longitude)})):console.log("Geolocation is not supported by this browser.")},children:Object(B.jsx)("img",{src:Z,alt:"Paris",class:"shrink center rotate "})})})})},ee=function(){return Object(B.jsxs)("section",{class:"hero d-flex flex-column justify-content-center align-items-center",id:"home",children:[Object(B.jsx)("div",{class:"bg-overlay"}),Object(B.jsx)("div",{class:"container",children:Object(B.jsx)("div",{class:"row",children:Object(B.jsx)("div",{class:"col-lg-8 col-md-10 mx-auto col-12",children:Object(B.jsxs)("div",{class:"hero-text mt-5 text-center",children:[Object(B.jsx)("h6",{"data-aos":"fade-up","data-aos-delay":"300",children:"A new way to experience music!"}),Object(B.jsx)("h1",{class:"text-white","data-aos":"fade-up","data-aos-delay":"500",children:"Upgrade your listening"}),Object(B.jsx)("a",{href:"#feature",class:"btn custom-btn mt-3","data-aos":"fade-up","data-aos-delay":"600",children:"Get started"}),Object(B.jsx)("a",{href:"#about",class:"btn custom-btn bordered mt-3","data-aos":"fade-up","data-aos-delay":"700",children:"learn more"})]})})})})]})},te=a(65),ae=(a(184),n.Component,a(39)),ne=a(91),se=function(){var e=Object(h.c)((function(e){return e.auth.user.user.username}));return console.log(e),Object(B.jsx)(B.Fragment,{children:Object(B.jsx)("div",{className:"container-fluid center",class:"center",children:Object(B.jsxs)(ae.a,{style:{width:"18rem"},children:[Object(B.jsx)(ae.a.Img,{variant:"top",src:"https://via.placeholder.com/150"}),Object(B.jsxs)(ae.a.Body,{children:[Object(B.jsxs)(ae.a.Title,{children:[" ",e]}),Object(B.jsx)(ae.a.Text,{}),Object(B.jsx)(ne.a,{variant:"primary",children:"Go somewhere"})]})]})})})},re=a(194),ce=(a(533),a(188)),oe=a.p+"static/media/preload.9c9895dd.gif",ie={cardstyle:{background:"whitesmoke",justifyContent:"flex-end",width:"18rem",margin:20}};var le=function(e){return Object(B.jsx)("div",{className:"fade-in",children:Object(B.jsxs)(ae.a,{className:"shadow-lg p-3 mb-5 bg-white rounded grow",style:ie.cardstyle,children:[Object(B.jsx)(ce.LazyLoadImage,{class:"card-img-top",height:"270px",placeholderSrc:oe,src:e.url}),Object(B.jsxs)(ae.a.Body,{className:"white",children:[Object(B.jsxs)(ae.a.Title,{children:[" ",e.artistname]}),Object(B.jsxs)(ae.a.Text,{children:[" ",e.locations," "]}),Object(B.jsx)("a",{target:"_blank",href:e.spotifyurl,children:Object(B.jsx)(ne.a,{variant:"btn btn-outline-success",children:"Listen Now"})})]})]})})},de=a(189),je=a(190),ue=a(191);function he(){var e=Object(n.useState)([]),t=Object(re.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude,a=e.coords.longitude;console.log(t,a),C.a.get("api/artistfind/".concat(t,"/").concat(a)).then((function(e){console.log("hello"),s(e.data)}))}))}),[]),Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)("div",{children:[" ",console.log("mydata",a),Object(B.jsx)("br",{}),Object(B.jsx)("br",{}),Object(B.jsx)("br",{}),Object(B.jsx)("br",{}),Object(B.jsx)(de.a,{fluid:!0,children:Object(B.jsxs)(je.a,{children:[" ",a.length?a.map((function(e,t){return Object(B.jsx)(ue.a,{children:Object(B.jsx)(le,{class:"text-center",url:e.image,artistname:e.artistname,locations:e.location,spotifyurl:e.spotifyurl},t)})})):null," "]})})]})})}var be=a(50),pe=a(192),Oe=a(42),me={token:localStorage.getItem("token"),isAuthenticated:null,isLoading:!1,user:null},ge={msg:{},status:null,id:null},xe=Object(be.c)({error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return{msg:t.payload.msg,status:t.payload.status,id:t.payload.id};case F:return{msg:{},status:null,id:null};default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(Oe.a)(Object(Oe.a)({},e),{},{isLoading:!0});case L:return Object(Oe.a)(Object(Oe.a)({},e),{},{isAuthenticated:!0,isLoading:!1,user:t.payload});case N:case _:return localStorage.setItem("token",t.payload.token),Object(Oe.a)(Object(Oe.a)(Object(Oe.a)({},e),t.payload),{},{isAuthenticated:!0,isLoading:!1,user:t.payload});case A:case R:case I:case T:return localStorage.removeItem("token"),Object(Oe.a)(Object(Oe.a)({},e),{},{token:null,user:null,isAuthenticated:!1,isLoading:!1});default:return e}}}),fe=[pe.a],ve=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||be.d,ye=Object(be.e)(xe,{},ve(be.a.apply(void 0,fe))),we=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){ye.dispatch((function(e,t){e({type:E}),C.a.get("/api/auth/user",D(t)).then((function(t){return e({type:L,payload:t.data})})).catch((function(t){e(U(t.response.data,t.response.status)),e({type:A})}))}))}},{key:"render",value:function(){return Object(B.jsx)(h.a,{store:ye,children:Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)(Q.a,{children:[Object(B.jsx)(K,{}),Object(B.jsx)("div",{className:"pages",children:Object(B.jsxs)(Y.c,{children:[Object(B.jsx)(Y.a,{exact:!0,path:"/",component:$}),Object(B.jsx)(Y.a,{exact:!0,path:"/about",component:ee}),Object(B.jsx)(Y.a,{exact:!0,path:"/Artistfind",component:he}),Object(B.jsx)(Y.a,{exact:!0,path:"/Profile",component:se}),Object(B.jsx)(Y.a,{path:"*",component:$})]})})]})})})}}]),a}(n.Component);c.a.render(Object(B.jsx)(s.a.StrictMode,{children:Object(B.jsx)(we,{})}),document.getElementById("root"))}},[[535,1,2]]]);
//# sourceMappingURL=main.9bd998af.chunk.js.map