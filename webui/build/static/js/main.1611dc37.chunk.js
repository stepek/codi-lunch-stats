(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(t,e,a){t.exports=a(260)},126:function(t,e,a){},128:function(t,e,a){},260:function(t,e,a){"use strict";a.r(e);var n=a(1),o=a.n(n),r=a(50),i=a.n(r),c=(a(126),a(37)),s=a(68),l=a(105),u=a(106),m=a(119),d=a(107),h=a(120),f=a(265),p=a(264),y=a(258),v=a(259),w=a(262),b=a(104),M=a(261),k=a(108),E=a.n(k),g=a(41),O=a.n(g),j=(a(128),function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={data:[],legend:{},opacity:{}},a.tooltipFormatter=function(t){return a.formatTime(t)},a.tooltipLabelFormatter=function(t){return O()(t).format("DD MMMM YYYY")},a.handleMouseEnter=function(t){var e=t.dataKey,n=a.state.opacity;a.setState({opacity:Object(s.a)({},n,Object(c.a)({},e,1))})},a.handleMouseLeave=function(t){var e=t.dataKey,n=a.state.opacity;a.setState({opacity:Object(s.a)({},n,Object(c.a)({},e,.4))})},a}return Object(h.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("/arrivals/chart?lte=".concat(O()().subtract(30,"days").valueOf())).then(function(t){return t.json()}).then(function(e){return t.setState(e)})}},{key:"formatDate",value:function(t){return O()(t).format("DD MMM YYYY")}},{key:"formatTime",value:function(t){return O()(t).format("HH:mm:ss")}},{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"App"},o.a.createElement(f.a,{width:window.innerWidth,height:window.innerHeight,data:this.state.data,margin:{top:5,right:30,left:20,bottom:5}},o.a.createElement(p.a,{strokeDasharray:"3 3"}),o.a.createElement(y.a,{dataKey:"date",tickFormatter:this.formatDate}),o.a.createElement(v.a,{tickFormatter:this.formatTime,domain:["dataMin","dataMax"]}),o.a.createElement(w.a,{formatter:this.tooltipFormatter,labelFormatter:this.tooltipLabelFormatter}),o.a.createElement(b.a,{onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave}),Object.keys(this.state.legend).map(function(e,a){return o.a.createElement(M.a,{key:e,strokeOpacity:t.state.opacity[e]||.4,name:t.state.legend[e],type:"monotone",dataKey:e,stroke:E.a[700][a+1],dot:!1,connectNulls:!0})})))}}]),e}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[121,2,1]]]);
//# sourceMappingURL=main.1611dc37.chunk.js.map