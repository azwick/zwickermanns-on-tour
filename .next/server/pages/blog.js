(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Blog),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(826);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
;// CONCATENATED MODULE: external "glob"
const external_glob_namespaceObject = require("glob");
var external_glob_default = /*#__PURE__*/__webpack_require__.n(external_glob_namespaceObject);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(64);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(622);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./pages/blog.tsx








function Blog({
  posts
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "row",
    children: posts.map(post => /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "col-sm-12",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: post.metadata.slug,
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "card fluid",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#!",
              children: post.metadata.title
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: post.metadata.cover,
                alt: post.metadata.title
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: post.metadata.date
            })]
          })
        })
      })
    }, post.metadata.slug))
  });
}
async function getStaticProps() {
  const postsPath = external_path_default().join(process.cwd(), 'content', 'posts', '*.md');
  const paths = external_glob_default().sync(postsPath);
  const posts = paths.map(path => {
    const fileContent = external_fs_default().readFileSync(path, 'utf8');
    const {
      content,
      data
    } = external_gray_matter_default()(fileContent);

    if (data.published) {
      return {
        content,
        metadata: data
      };
    }

    return false;
  }).filter(Boolean);
  return {
    props: {
      posts
    }
  };
}

/***/ }),

/***/ 826:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 64:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

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

/***/ 622:
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(592)));
module.exports = __webpack_exports__;

})();