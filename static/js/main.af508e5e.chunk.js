(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},33:function(e,t,n){e.exports=n(57)},39:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(22),c=n.n(r),i=(n(39),n(7)),l=n(8),u=n(11),s=n(9),d=n(10),m=n(62),h=n(29),f=n.n(h),p=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("header",null,o.a.createElement(m.a,{bg:"dark",variant:"dark"},o.a.createElement(m.a.Brand,null,o.a.createElement("img",{src:f.a,width:"30",height:"30",className:"d-inline-block align-top"}),"Todo List"),o.a.createElement(m.a.Collapse,{className:"justify-content-end"},o.a.createElement(m.a.Text,null,"Made By ",o.a.createElement("a",{href:"https://wormwlrm.github.io",target:"_blank"},"wormwlrm")))))}}]),t}(a.Component),E=n(59),g=n(60),b=n(61),v=n(58),O=n(65),j=n(66),k=(n(51),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onChange,n=e.onHitEnter,a=e.onCreate,r=e.input;return console.log("TODOFORM RENDER"),o.a.createElement(v.a,{size:"lg",className:"todo-form"},o.a.createElement(O.a,{placeholder:"Enter something","aria-label":"Enter something",value:r,onChange:t,onKeyPress:n}),o.a.createElement(v.a.Append,null,o.a.createElement(j.a,{variant:"outline-secondary",onClick:a},"+")))}}]),t}(a.Component));k.defaultProps={input:"",onChange:function(){console.error("onChange undefined")},onCreate:function(){console.error("onCreate undefined")},onHitEnter:function(){console.error("onHitEnter undefined")}};var C=k,y=n(63),w=(n(53),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){console.log("TODOITEM RENDER");var e=this.props,t=e.onToggle,n=e.onDelete,a=e.todo;return o.a.createElement(y.a.Item,{className:"todo-item ".concat(a.checked?"checked":"")},o.a.createElement("div",{className:"todo-item-delete-button",onClick:function(e){n(a.id)}},"\u2716"),o.a.createElement("div",{className:"todo-item-value",onClick:function(e){t(a.id)}},a.value))}}]),t}(a.Component));w.defaultProps={todo:{id:"",value:"111",checked:!1},onToggle:function(){console.error("onToggle undefined")},onDelete:function(){console.error("onDelete undefined")}};var T=w,D=n(64),N=(n(54),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).id=3,n.state={input:"",todos:[{id:0,value:"Welcome",checked:!1},{id:1,value:"Hello",checked:!0},{id:2,value:"Farewell",checked:!1}]},n.onChange=function(e){n.setState({input:e.target.value})},n.onCreate=function(){var e=n.state,t=e.input,a=e.todos;t&&n.setState({input:"",todos:a.concat({id:n.id++,value:t,checked:!1})})},n.onHitEnter=function(e){"Enter"===e.key&&n.onCreate()},n.onDelete=function(e){var t=n.state.todos;n.setState({todos:t.filter(function(t){return t.id!==e})})},n.onToggle=function(e){var t=n.state.todos;n.setState({todos:t.map(function(t){return t.id===e&&(t.checked=!t.checked),t})})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.input,n=e.todos,a=this.onHitEnter,r=this.onCreate,c=this.onChange,i=this.onDelete,l=this.onToggle;return console.log("TODOLIST RENDER"),o.a.createElement(D.a,{className:"todo-list"},o.a.createElement(D.a.Body,null,o.a.createElement(C,{input:t,onHitEnter:a,onCreate:r,onChange:c}),o.a.createElement(D.a,null,o.a.createElement(y.a,{variant:"flush"},n.map(function(e){return o.a.createElement(T,{todo:e,key:e.id,onDelete:i,onToggle:l})})))))}}]),t}(a.Component)),H=(n(55),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("main",{className:"main bg-dark"},o.a.createElement(E.a,null,o.a.createElement(g.a,null,o.a.createElement(b.a,{xs:12,sm:{span:8,offset:2}},o.a.createElement(N,null)))))}}]),t}(a.Component)),R=(n(56),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement(p,null),o.a.createElement(H,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.af508e5e.chunk.js.map