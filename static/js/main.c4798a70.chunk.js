(this["webpackJsonpgoogle-search-suggestions"]=this["webpackJsonpgoogle-search-suggestions"]||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){},16:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var n=s(2),c=s.n(n),i=s(4),a=s.n(i),o=s(5),r=s(7),g=s(8),u=s(6),l=(s(13),s(14),s(0)),h=function(e){var t=e.suggestionDetails,s=e.getSuggestion,n=t.suggestion;return Object(l.jsxs)("li",{className:"list-item",children:[Object(l.jsx)("p",{className:"sug-text",children:n}),Object(l.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png",alt:"arrow",className:"arrow-icon",onClick:function(){s(n)}})]})},j=function(e){Object(g.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={searchInput:""},e.onSearchInput=function(t){e.setState({searchInput:t.target.value})},e.getSuggestion=function(t){e.setState({searchInput:t})},e}return Object(r.a)(s,[{key:"render",value:function(){var e=this,t=this.props.suggestionsList,s=this.state.searchInput,n=t.filter((function(e){return e.suggestion.toLowerCase().includes(s.toLowerCase())}));return Object(l.jsx)("div",{className:"app-container",children:Object(l.jsxs)("div",{className:"google-container",children:[Object(l.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/google-logo.png",alt:"google logo",className:"google-logo"}),Object(l.jsxs)("div",{className:"search-container",children:[Object(l.jsxs)("div",{className:"search-icon-container",children:[Object(l.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/google-search-icon.png",alt:"search icon",className:"search-icon"}),Object(l.jsx)("input",{type:"search",className:"search-input",placeholder:"Search Google",onChange:this.onSearchInput,value:s})]}),Object(l.jsx)("ul",{children:n.map((function(t){return Object(l.jsx)(h,{suggestionDetails:t,getSuggestion:e.getSuggestion},t.id)}))})]})]})})}}]),s}(n.Component),p=j,d=(s(16),[{id:1,suggestion:"Price of Ethereum"},{id:2,suggestion:"Oculus Quest 2 specs"},{id:3,suggestion:"Tesla Share Price"},{id:4,suggestion:"Price of Ethereum today"},{id:5,suggestion:"Latest trends in AI"},{id:6,suggestion:"Latest trends in ML"}]),b=function(){return Object(l.jsx)(p,{suggestionsList:d})};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c4798a70.chunk.js.map