(window.webpackJsonpreminder=window.webpackJsonpreminder||[]).push([[0],{19:function(e,t,n){e.exports=n(33)},30:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),l=n.n(o),c=n(11),i=n(12),d=n(17),s=n(13),u=n(18),m=n(6),p=n(15),E=n.n(p),f=(n(30),function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={text:"",date:new Date},n.render_Reminders=function(){var e=n.props.reminders;if(e&&e.map)return a.a.createElement("ul",{className:"list-group"},e.map(function(e){return a.a.createElement("li",{className:"list-group-item",key:e.id},a.a.createElement("div",null,e.text),a.a.createElement("div",null,E()(new Date(e.date)).fromNow()),a.a.createElement("div",{className:"btn btn-danger",onClick:function(){return n.props.remove_reminder(e.id)}},"X"))}))},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props),console.log(this.state),a.a.createElement("div",{className:"App form-group"},a.a.createElement("div",null,a.a.createElement("h2",null,"What should I do ?")),a.a.createElement("input",{type:"text",className:"form-control",value:this.state.text,placeholder:"what U think about ....?",onChange:function(t){return e.setState({text:t.target.value})}}),a.a.createElement("input",{type:"datetime-local",className:"form-control",value:this.state.text,onChange:function(t){return e.setState({date:t.target.value})}}),a.a.createElement("button",{type:"button",className:"btn btn-primary btn-block",onClick:function(){e.props.add_reminder(e.state.text,e.state.date),e.setState({text:"",date:""})}},"Add Reminder"),this.render_Reminders(),a.a.createElement("button",{onClick:function(){return e.props.clear_reminder()},type:"button",className:"btn btn-danger btn-block"},"Clear"),a.a.createElement("div",null))}}]),t}(r.Component)),v=Object(m.b)(function(e){return{reminders:e}},{add_reminder:function(e,t){var n={type:"ADD_REMINDER",text:e,date:t};return console.log("Add Reminder",n),n},remove_reminder:function(e){var t={type:"REMOVE_REMINDER",id:e};return console.log("remove Reminder",t),t},clear_reminder:function(){var e={type:"CLEAR_REMINDER"};return console.log("clear Reminder",e),e}})(f),h=(n(31),n(5)),b=n(16),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=null;return"ADD_REMINDER"===t.type?(n=[].concat(Object(b.a)(e),[{text:t.text,date:t.date,id:Math.random()}]),console.log("from reducer",t),n):"REMOVE_REMINDER"===t.type?(n=e.filter(function(e){return e.id!==t.id}),console.log("from reducer",t),n):"CLEAR_REMINDER"===t.type?(n=[],console.log("from reducer",t),n):e};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(32);var R=Object(h.b)(g);l.a.render(a.a.createElement(m.a,{store:R},a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.68d099c7.chunk.js.map