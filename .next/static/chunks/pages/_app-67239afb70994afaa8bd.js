(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2167:function(e,n,t){"use strict";var r=t(3848);n.default=void 0;var o,i=(o=t(7294))&&o.__esModule?o:{default:o},a=t(1063),c=t(4651),s=t(7426);var u={};function l(e,n,t,r){if(e&&a.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=c.useRouter(),f=i.default.useMemo((function(){var n=a.resolveHref(o,e.href,!0),t=r(n,2),i=t[0],c=t[1];return{href:i,as:e.as?a.resolveHref(o,e.as):c||i}}),[o,e.href,e.as]),p=f.href,d=f.as,h=e.children,v=e.replace,g=e.shallow,m=e.scroll,y=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var b=(n=i.default.Children.only(h))&&"object"===typeof n&&n.ref,w=s.useIntersection({rootMargin:"200px"}),_=r(w,2),j=_[0],T=_[1],x=i.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);i.default.useEffect((function(){var e=T&&t&&a.isLocalURL(p),n="undefined"!==typeof y?y:o&&o.locale,r=u[p+"%"+d+(n?"%"+n:"")];e&&!r&&l(o,p,d,{locale:n})}),[d,p,T,y,t,o]);var E={ref:x,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,i,c,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),n[o?"replace":"push"](t,r,{shallow:i,locale:s,scroll:c}))}(e,o,p,d,v,g,m,y)},onMouseEnter:function(e){a.isLocalURL(p)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l(o,p,d,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var L="undefined"!==typeof y?y:o&&o.locale,C=o&&o.isLocaleDomain&&a.getDomainLocale(d,L,o&&o.locales,o&&o.domainLocales);E.href=C||a.addBasePath(a.addLocale(d,L,o&&o.defaultLocale))}return i.default.cloneElement(n,E)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3848);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,s=o.useRef(),u=o.useState(!1),l=r(u,2),f=l[0],p=l[1],d=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),t||f||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,i=r.observer,a=r.elements;return a.set(e,n),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[t,n,f]);return o.useEffect((function(){if(!a&&!f){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),[d,f]};var o=t(7294),i=t(3447),a="undefined"!==typeof IntersectionObserver;var c=new Map},247:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var r=t(2809),o=(t(3146),t(7294)),i=t(9008),a=t(1664),c=JSON.parse('{"p":[{"label":"Blog","visible":true,"path":"/blog"},{"label":"Talks","visible":false,"path":"/talks"}]}'),s=t(5893),u=c.p;function l(e){var n=e.children;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("header",{children:(0,s.jsxs)("div",{className:"responsive-margin responsive-padding",children:[(0,s.jsx)(a.default,{href:"/",passHref:!0,children:(0,s.jsx)("a",{href:"#!",className:"logo",children:"MyFirstBlog"})}),u.filter((function(e){return e.visible})).map((function(e){return(0,s.jsx)(a.default,{href:e.path,passHref:!0,children:(0,s.jsx)("a",{href:"#!",className:"button",children:e.label})},e.path)}))]})}),(0,s.jsx)("main",{children:(0,s.jsx)("div",{className:"responsive-margin responsive-padding",children:n})}),(0,s.jsx)("footer",{children:(0,s.jsx)("div",{className:"responsive-margin responsive-padding",children:(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{children:"Created by "}),"Anne"]})})})]})}var f=t(1163),p=t(4155),d="0.1.0",h=t(4155);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m=function(e){var n=e.Component,t=e.pageProps;return(0,o.useEffect)((function(){if(h.env.NEXT_PUBLIC_GA_TRACKING_ID){var e=function(e){!function(e){window.gtag("config",p.env.NEXT_PUBLIC_GA_TRACKING_ID,{page_path:e})}(e)};return f.default.events.on("routeChangeComplete",e),function(){f.default.events.off("routeChangeComplete",e)}}}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.default,{children:[(0,s.jsx)("link",{rel:"shortcut icon",href:"favicon.ico",type:"image/x-icon"}),(0,s.jsxs)("title",{children:["MyFirstBlog v",d]}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1,maximum-scale=1"}),h.env.NEXT_PUBLIC_GA_TRACKING_ID&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(h.env.NEXT_PUBLIC_GA_TRACKING_ID)}),(0,s.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(h.env.NEXT_PUBLIC_GA_TRACKING_ID,"', {\n              page_path: window.location.pathname,\n            });\n          ")}})]})]}),(0,s.jsx)(l,{children:(0,s.jsx)(n,g({},t))})]})}},6363:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(247)}])},3146:function(){},9008:function(e,n,t){e.exports=t(639)},1664:function(e,n,t){e.exports=t(2167)},1163:function(e,n,t){e.exports=t(4651)},4155:function(e){var n,t,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{t="function"===typeof clearTimeout?clearTimeout:i}catch(e){t=i}}();var c,s=[],u=!1,l=-1;function f(){u&&c&&(u=!1,c.length?s=c.concat(s):l=-1,s.length&&p())}function p(){if(!u){var e=a(f);u=!0;for(var n=s.length;n;){for(c=s,s=[];++l<n;)c&&c[l].run();l=-1,n=s.length}c=null,u=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===i||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(n){try{return t.call(null,e)}catch(n){return t.call(this,e)}}}(e)}}function d(e,n){this.fun=e,this.array=n}function h(){}r.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];s.push(new d(e,n)),1!==s.length||u||a(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},2809:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,{Z:function(){return r}})}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(6363),n(4651)}));var t=e.O();_N_E=t}]);