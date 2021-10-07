(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 41:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./content/menu.json
const menu_namespaceObject = JSON.parse('{"menu_item":[{"label":"Blog","visible":true,"path":"/blog"},{"label":"Talks","visible":false,"path":"/talks"}]}');
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/Layout.tsx






const {
  menu_item
} = menu_namespaceObject;
function Layout({
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("header", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "responsive-margin responsive-padding",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#!",
            className: "logo",
            children: "MyFirstBlog"
          })
        }), menu_item.filter(item => item.visible).map(item => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: item.path,
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#!",
            className: "button",
            children: item.label
          })
        }, item.path))]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("main", {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "responsive-margin responsive-padding",
        children: children
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("footer", {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "responsive-margin responsive-padding",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Created by "
          }), "Anne"]
        })
      })
    })]
  });
}
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
;// CONCATENATED MODULE: ./utils/gtag.ts
const pageview = url => {
  // @ts-ignore
  window.gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID, {
    page_path: url
  });
};
;// CONCATENATED MODULE: ./package.json
const package_namespaceObject = {"i8":"0.1.0"};
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const App = ({
  Component,
  pageProps
}) => {
  (0,external_react_.useEffect)(() => {
    if (!process.env.NEXT_PUBLIC_GA_TRACKING_ID) return;

    const handleRouteChange = url => {
      pageview(url);
    };

    router_default().events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router_default().events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        href: "favicon.ico",
        type: "image/x-icon"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: ["MyFirstBlog v", package_namespaceObject.i8]
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1,maximum-scale=1"
      }), process.env.NEXT_PUBLIC_GA_TRACKING_ID && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("script", {
          async: true,
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`
        }), /*#__PURE__*/jsx_runtime_.jsx("script", {
          dangerouslySetInnerHTML: {
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
          }
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Layout, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    })]
  });
};

/* harmony default export */ const _app = (App);

/***/ }),

/***/ 325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(41)));
module.exports = __webpack_exports__;

})();