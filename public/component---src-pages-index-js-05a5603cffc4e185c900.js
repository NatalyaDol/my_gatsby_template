(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"284h":function(t,e,n){var o=n("cDf5");function a(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return a=function(){return t},t}t.exports=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==o(t)&&"function"!=typeof t)return{default:t};var e=a();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in t)if(Object.prototype.hasOwnProperty.call(t,l)){var i=r?Object.getOwnPropertyDescriptor(t,l):null;i&&(i.get||i.set)?Object.defineProperty(n,l,i):n[l]=t[l]}return n.default=t,e&&e.set(t,n),n}},GCtb:function(t,e,n){"use strict";n("OG14");var o=n("TqRt");e.__esModule=!0,e.changeLocale=e.navigate=e.default=void 0;var a=o(n("pVnL")),r=o(n("8OQS")),l=o(n("q1tI")),i=o(n("17x9")),u=n("Wbzz"),c=n("n83N"),f=function(t){var e=t.to,n=t.language,o=t.children,i=t.onClick,f=(0,r.default)(t,["to","language","children","onClick"]);return l.default.createElement(c.IntlContextConsumer,null,(function(t){var r=n||t.language,c=t.routed||n?"/"+r+e:""+e;return l.default.createElement(u.Link,(0,a.default)({},f,{to:c,onClick:function(t){n&&localStorage.setItem("gatsby-intl-language",n),i&&i(t)}}),o)}))};f.propTypes={children:i.default.node.isRequired,to:i.default.string,language:i.default.string},f.defaultProps={to:""};var s=f;e.default=s;e.navigate=function(t,e){if("undefined"!=typeof window){var n=window.___gatsbyIntl,o=n.language,a=n.routed?"/"+o+t:""+t;(0,u.navigate)(a,e)}};e.changeLocale=function(t,e){if("undefined"!=typeof window){var n=window.___gatsbyIntl.routed,o="/"+t+(e||function(t){if(!n)return t;var e=t.indexOf("/",1);return t.substring(e)}(window.location.pathname))+window.location.search;localStorage.setItem("gatsby-intl-language",t),(0,u.navigate)(o)}}},RXBc:function(t,e,n){"use strict";n.r(e);var o=n("q1tI"),a=n.n(o),r=n("Bl7J"),l=n("vrFN"),i=n("kCIJ");e.default=function(){var t=Object(i.useIntl)();return a.a.createElement(r.a,null,a.a.createElement(l.a,{title:"Home"}),"//     ",a.a.createElement("h1",null,"Hi people"),a.a.createElement(l.a,{title:t.formatMessage({id:"title"})}),a.a.createElement(i.Link,{to:"/page-2/"},t.formatMessage({id:"go_page2"})))}},cDf5:function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},e2gX:function(t,e,n){"use strict";var o=n("TqRt");e.__esModule=!0,e.default=void 0;var a=o(n("q1tI")),r=n("7++0");e.default=function(t){return function(e){return console.warn("withIntl is deprecated. Please use injectIntl instead."),a.default.createElement((0,r.injectIntl)(t),e)}}},kCIJ:function(t,e,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var o=n("TqRt"),a=n("284h");e.__esModule=!0;var r={Link:!0,withIntl:!0,navigate:!0,changeLocale:!0,IntlContextProvider:!0,IntlContextConsumer:!0};e.IntlContextConsumer=e.IntlContextProvider=e.changeLocale=e.navigate=e.withIntl=e.Link=void 0;var l=n("7++0");Object.keys(l).forEach((function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(r,t)||(e[t]=l[t]))}));var i=a(n("GCtb"));e.Link=i.default,e.navigate=i.navigate,e.changeLocale=i.changeLocale;var u=o(n("e2gX"));e.withIntl=u.default;var c=n("n83N");e.IntlContextProvider=c.IntlContextProvider,e.IntlContextConsumer=c.IntlContextConsumer}}]);
//# sourceMappingURL=component---src-pages-index-js-05a5603cffc4e185c900.js.map