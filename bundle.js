/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./home-bg.jpg */ "./src/home-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./title-bg.jpg */ "./src/title-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    margin: 0;
    padding: 0;
    font-family: 'Outfit',Arial, Helvetica, sans-serif;
}

body, html{
    height: 100%;
}

body{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size:cover;
    background-position:-15%;
    overflow: scroll;
    background-repeat: no-repeat;
    /* max-height: 1vh; */
    background-attachment: fixed;
}
#content{
    height: 100%;
}
.header{
    width: 100%;
    height: 20%;
    background: rgb(209,236,255);
    background: radial-gradient(circle, rgba(209,236,255,0.773546918767507) 25%, rgba(0,88,142,0.7707457983193278) 80%);
    display: flex;
    justify-content: center;
}

.logo{
    width: 10%;
}

.navigation{
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 1%;
    padding-bottom: 1%;
}

.tab{
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 10%;
}

.tab li{
    border: 1px solid rgb(0, 88,142);
    background-color: azure;
    padding: 5px 10px;
    width: 10%;
    display: flex;
    justify-content: center;
    cursor: pointer;
    font-size: 1.2rem;
}

.tab .selected{
    color: azure;
    background-color: rgb(0, 88,142);
    font-weight: 600;
}

.tab li:hover{
    color: azure;
    background-color:black;
    font-weight: 900;
}

.sub-content{
    
    min-height: 65%;
    display: flex;
    justify-content: center;
}

.footer{
    height:5%;
    background-color:darkcyan;
    color: azure;
    padding: 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-text{
    background-color: rgba(0,0,0,0.5);
    color: azure;
    font-size: 2rem;
    margin: auto 10%;
    padding: 5% 10%; 
    text-align:justify;
}

.logo-text{
    color:aquamarine;
    font-weight: 900;
}

.item-image{
    width: 200px;
}

.menu-container{
    padding-top: 2%;
    margin: 1% 5%;
    width: 100%;
    border: 5px solid rgba(100, 100, 100, 1);
    border-radius: 16px;
    background-color: rgba(62, 85, 214, 0.5);
    box-shadow: 0px -2px 0px 0px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.menu-title{
    font-size: 2rem;
    border: 1px solid navy;
    width: 40%;
    border-radius: 10px;
    font-weight: 900;
    background-color: azure;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-repeat: no-repeat;
    background-size: cover;
}

.menu-container *{
    text-align: center;
}

.sub-menu-container{
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 1%;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center ;
}

.sub-menu-title{
    font-size: 1.4rem;
    border: 1px solid navy;
    width: 40%;
    border-radius: 10px;
    font-weight: 900;
    background-color: azure;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-repeat: no-repeat;
    background-size: cover;
}

.menu-list-container{
    padding: 2% 2%;
    display: flex;
    flex-wrap: wrap;
    gap: 5%;
    align-items: center;
    justify-content: space-evenly;
}

.item{
    border: 3px solid  black;
    border-radius: 16px;
    width: 400px;
    margin: 5%;
    background-color:cornflowerblue;
    padding-bottom: 2%;
}

.item-name{
    font-size: 1.4rem;
    margin: 2% auto;
    font-weight: 600;
}

.item-image{
    border-radius: 16px;
}

.item-description{
    margin-top: 1%;
}

.contact-title{
    margin: 2% auto;
    text-align: center;
    font-size: 2rem;
    font-weight: 900;
}

.contact-container{
    margin: 2%;
    border: 2px solid black;
    border-radius: 5px;
    padding: 5%;
    border: 5px solid rgba(100, 100, 100, 1);
    border-radius: 16px;
    background-color: rgba(62, 85, 214, 0.5);
    box-shadow: 0px -2px 0px 0px rgba(0, 0, 0, 0.3);
}

.contact{
    display: flex;
    align-items: center;
    gap: 2%;
    justify-content: start;
    width: 80%;
    margin-bottom: 10%;
}
.contact-details-box{
    display: flex;
    flex-direction: column;
    justify-content:center  ;
    align-items: center;
    margin-top: 3%;
}

.icon{
    width: 5%;
    margin-left: 20%;
}

.details{
    font-size: 1.6rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,UAAU;IACV,kDAAkD;AACtD;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,yDAAsC;IACtC,qBAAqB;IACrB,wBAAwB;IACxB,gBAAgB;IAChB,4BAA4B;IAC5B,qBAAqB;IACrB,4BAA4B;AAChC;AACA;IACI,YAAY;AAChB;AACA;IACI,WAAW;IACX,WAAW;IACX,4BAA4B;IAC5B,mHAAmH;IACnH,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,WAAW;IACX,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,QAAQ;AACZ;;AAEA;IACI,gCAAgC;IAChC,uBAAuB;IACvB,iBAAiB;IACjB,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,gCAAgC;IAChC,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;;IAEI,eAAe;IACf,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,SAAS;IACT,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,WAAW;IACX,wCAAwC;IACxC,mBAAmB;IACnB,wCAAwC;IACxC,+CAA+C;IAC/C,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,sBAAsB;IACtB,UAAU;IACV,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;IACvB,yDAAuC;IACvC,4BAA4B;IAC5B,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,cAAc;IACd,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,sBAAsB;IACtB,UAAU;IACV,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;IACvB,yDAAuC;IACvC,4BAA4B;IAC5B,sBAAsB;AAC1B;;AAEA;IACI,cAAc;IACd,aAAa;IACb,eAAe;IACf,OAAO;IACP,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,wBAAwB;IACxB,mBAAmB;IACnB,YAAY;IACZ,UAAU;IACV,+BAA+B;IAC/B,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,uBAAuB;IACvB,kBAAkB;IAClB,WAAW;IACX,wCAAwC;IACxC,mBAAmB;IACnB,wCAAwC;IACxC,+CAA+C;AACnD;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,OAAO;IACP,sBAAsB;IACtB,UAAU;IACV,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,wBAAwB;IACxB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;900&display=swap');\n\n*{\n    margin: 0;\n    padding: 0;\n    font-family: 'Outfit',Arial, Helvetica, sans-serif;\n}\n\nbody, html{\n    height: 100%;\n}\n\nbody{\n    background-image: url('./home-bg.jpg');\n    background-size:cover;\n    background-position:-15%;\n    overflow: scroll;\n    background-repeat: no-repeat;\n    /* max-height: 1vh; */\n    background-attachment: fixed;\n}\n#content{\n    height: 100%;\n}\n.header{\n    width: 100%;\n    height: 20%;\n    background: rgb(209,236,255);\n    background: radial-gradient(circle, rgba(209,236,255,0.773546918767507) 25%, rgba(0,88,142,0.7707457983193278) 80%);\n    display: flex;\n    justify-content: center;\n}\n\n.logo{\n    width: 10%;\n}\n\n.navigation{\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    padding-top: 1%;\n    padding-bottom: 1%;\n}\n\n.tab{\n    width: 100%;\n    list-style: none;\n    display: flex;\n    justify-content: center;\n    gap: 10%;\n}\n\n.tab li{\n    border: 1px solid rgb(0, 88,142);\n    background-color: azure;\n    padding: 5px 10px;\n    width: 10%;\n    display: flex;\n    justify-content: center;\n    cursor: pointer;\n    font-size: 1.2rem;\n}\n\n.tab .selected{\n    color: azure;\n    background-color: rgb(0, 88,142);\n    font-weight: 600;\n}\n\n.tab li:hover{\n    color: azure;\n    background-color:black;\n    font-weight: 900;\n}\n\n.sub-content{\n    \n    min-height: 65%;\n    display: flex;\n    justify-content: center;\n}\n\n.footer{\n    height:5%;\n    background-color:darkcyan;\n    color: azure;\n    padding: 10px auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.hero-text{\n    background-color: rgba(0,0,0,0.5);\n    color: azure;\n    font-size: 2rem;\n    margin: auto 10%;\n    padding: 5% 10%; \n    text-align:justify;\n}\n\n.logo-text{\n    color:aquamarine;\n    font-weight: 900;\n}\n\n.item-image{\n    width: 200px;\n}\n\n.menu-container{\n    padding-top: 2%;\n    margin: 1% 5%;\n    width: 100%;\n    border: 5px solid rgba(100, 100, 100, 1);\n    border-radius: 16px;\n    background-color: rgba(62, 85, 214, 0.5);\n    box-shadow: 0px -2px 0px 0px rgba(0, 0, 0, 0.3);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.menu-title{\n    font-size: 2rem;\n    border: 1px solid navy;\n    width: 40%;\n    border-radius: 10px;\n    font-weight: 900;\n    background-color: azure;\n    background-image: url(\"./title-bg.jpg\");\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.menu-container *{\n    text-align: center;\n}\n\n.sub-menu-container{\n    margin-left: 5%;\n    margin-right: 5%;\n    margin-top: 1%;\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    align-items: center ;\n}\n\n.sub-menu-title{\n    font-size: 1.4rem;\n    border: 1px solid navy;\n    width: 40%;\n    border-radius: 10px;\n    font-weight: 900;\n    background-color: azure;\n    background-image: url(\"./title-bg.jpg\");\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.menu-list-container{\n    padding: 2% 2%;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 5%;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.item{\n    border: 3px solid  black;\n    border-radius: 16px;\n    width: 400px;\n    margin: 5%;\n    background-color:cornflowerblue;\n    padding-bottom: 2%;\n}\n\n.item-name{\n    font-size: 1.4rem;\n    margin: 2% auto;\n    font-weight: 600;\n}\n\n.item-image{\n    border-radius: 16px;\n}\n\n.item-description{\n    margin-top: 1%;\n}\n\n.contact-title{\n    margin: 2% auto;\n    text-align: center;\n    font-size: 2rem;\n    font-weight: 900;\n}\n\n.contact-container{\n    margin: 2%;\n    border: 2px solid black;\n    border-radius: 5px;\n    padding: 5%;\n    border: 5px solid rgba(100, 100, 100, 1);\n    border-radius: 16px;\n    background-color: rgba(62, 85, 214, 0.5);\n    box-shadow: 0px -2px 0px 0px rgba(0, 0, 0, 0.3);\n}\n\n.contact{\n    display: flex;\n    align-items: center;\n    gap: 2%;\n    justify-content: start;\n    width: 80%;\n    margin-bottom: 10%;\n}\n.contact-details-box{\n    display: flex;\n    flex-direction: column;\n    justify-content:center  ;\n    align-items: center;\n    margin-top: 3%;\n}\n\n.icon{\n    width: 5%;\n    margin-left: 20%;\n}\n\n.details{\n    font-size: 1.6rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _phone_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone.png */ "./src/phone.png");
/* harmony import */ var _email_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email.png */ "./src/email.png");




function generateContact(){
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.clearSubContent)();
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.setActiveTab)("contact");
    let content = document.createElement("div");
    content.classList.add("contact-container","sub-content-container");
    let contactTitle = document.createElement("div");
    contactTitle.textContent = "Contact Us";
    contactTitle.classList.add("contact-title");
    content.appendChild(contactTitle);
    let contactDetailsBox = document.createElement("div");
    contactDetailsBox.classList.add("contact-details-box");
    contactDetailsBox.appendChild(generateContactSets(_phone_png__WEBPACK_IMPORTED_MODULE_1__,"1234567890","phone"));
    contactDetailsBox.appendChild(generateContactSets(_email_png__WEBPACK_IMPORTED_MODULE_2__,"goodluckfindingus@notreal.com","email"));
    content.appendChild(contactDetailsBox);
    let target = document.querySelector(".sub-content");
    target.appendChild(content);
}

function generateContactSets(imgSrc,text,iconId){
    let content = document.createElement("div");
    content.classList.add("contact");
    let iconImage = document.createElement("img");
    iconImage.classList.add("icon");
    iconImage.src = imgSrc;
    iconImage.id=iconId;
    let iconText = document.createElement("div");
    iconText.classList.add("details")
    iconText.textContent = text;
    content.appendChild(iconImage);
    content.appendChild(iconText);
    return content;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



function generateSubContent(){
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.clearSubContent)();
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.setActiveTab)("home");
    let parent = document.querySelector(".sub-content");
    let content = document.createElement("div");
    content.classList.add("sub-content-container","hero-text");
    content.textContent = "Dive into a world of exquisite flavors at ";
    let logoSpan = document.createElement("span");
    logoSpan.textContent = "Row Your Boat";
    logoSpan.classList.add("logo-text")
    content.append(logoSpan);
    let remainingText = document.createElement("span");
    remainingText.textContent = ", where the ocean meets your plate in a symphony of culinary delight. Our seafood sanctuary is a celebration of the finest catches from the deep blue, meticulously prepared to elevate your dining experience.";
    content.append(remainingText);
    parent.appendChild(content);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateSubContent);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearSubContent: () => (/* binding */ clearSubContent),
/* harmony export */   setActiveTab: () => (/* binding */ setActiveTab)
/* harmony export */ });
/* harmony import */ var _restaurant_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant-logo.png */ "./src/restaurant-logo.png");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





function clearSubContent(){
    let prevContent = document.querySelector(".sub-content-container");
    prevContent.remove();
}

function setActiveTab(tabName){
    let allTabs = document.querySelectorAll(".tab>li");
    allTabs.forEach(tab => tab.classList.remove("selected"));
    let activeTab = document.querySelector(`#${tabName}`);
    activeTab.classList.add("selected");
}



const generateTemplate = (function(){
    let finalContent = document.querySelector("#content");
    finalContent.appendChild(generateHeader());
    finalContent.appendChild(generateNav());
    let subContentDiv = document.createElement("div");
    subContentDiv.classList.add("sub-content");
    let subContentContainer = document.createElement("div");
    subContentContainer.classList.add("sub-content-container");
    subContentDiv.appendChild(subContentContainer);
    finalContent.appendChild(subContentDiv);
    (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
    finalContent.appendChild(generateFooter());
    let homeTab = document.querySelector("#home");
    homeTab.classList.add("selected");
    homeTab.addEventListener("click",()=>{
        (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
    })
    let menuTab = document.querySelector("#menu");
    menuTab.addEventListener("click",()=>{
        (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
    })
    let contactTab = document.querySelector("#contact");
    contactTab.addEventListener("click",()=>{
        (0,_contact__WEBPACK_IMPORTED_MODULE_4__["default"])();
    })


})();

function generateHeader(){
    let content = document.createElement("div");
    content.classList.add("header");
    let image = document.createElement("img");
    image.src = _restaurant_logo_png__WEBPACK_IMPORTED_MODULE_0__;
    image.alt = "Logo of Row Your Boat";
    image.classList.add("logo");
    content.appendChild(image);
    return content;
}

function generateNav(){
    let content = document.createElement("div");
    content.classList.add("navigation");
    let uList = document.createElement("ul");
    uList.classList.add("tab");
    let listItem1 = document.createElement("li");
    listItem1.id = "home";
    listItem1.textContent = "Home";
    uList.appendChild(listItem1);
    let listItem2 = document.createElement("li");
    listItem2.id = "menu";
    listItem2.textContent = "Menu";
    uList.appendChild(listItem2);
    let listItem3 = document.createElement("li");
    listItem3.id = "contact";
    listItem3.textContent = "Contact Us";
    uList.appendChild(listItem3);
    content.appendChild(uList);
    return content;
}



function generateFooter(){
    let content = document.createElement("div");
    content.classList.add("footer");
    content.textContent = "Created by Mohammed Shafeek, 2023";
    return content;
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _main_sushi_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-sushi.jpg */ "./src/main-sushi.jpg");
/* harmony import */ var _main_fishpot_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-fishpot.jpg */ "./src/main-fishpot.jpg");
/* harmony import */ var _main_grilled_fish_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-grilled-fish.jpg */ "./src/main-grilled-fish.jpg");
/* harmony import */ var _main_roasted_fish_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-roasted-fish.jpg */ "./src/main-roasted-fish.jpg");
/* harmony import */ var _main_sushi_platter_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-sushi-platter.jpg */ "./src/main-sushi-platter.jpg");







function generateMenu(){
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.clearSubContent)();
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.setActiveTab)("menu");
    let finalContent = document.createElement("div");
    finalContent.classList.add("menu-container","sub-content-container");
    let menuTitle = document.createElement("div");
    menuTitle.classList.add("menu-title");
    menuTitle.textContent = "Menu";
    finalContent.appendChild(menuTitle);
    let subMenuContainer = document.createElement("div");
    subMenuContainer.classList.add("sub-menu-container");
    let subMenuTitle = document.createElement("div");
    subMenuTitle.classList.add("sub-menu-title");
    subMenuTitle.textContent = "Main Course";
    subMenuContainer.appendChild(subMenuTitle);
    let menuListContainer = setMenu();
    subMenuContainer.appendChild(menuListContainer);
    finalContent.appendChild(subMenuContainer);
    let subContent = document.querySelector(".sub-content");
    subContent.appendChild(finalContent);
}

function setMenu(){
    let content = document.createElement("div");
    content.classList.add("menu-list-container");
    const MainCourseMenu = [
        {
            title : "Sushi Alhaniya",
            image : _main_sushi_jpg__WEBPACK_IMPORTED_MODULE_1__,
            description : "Nothing special about it."
        },
        {
            title : "FishPot",
            image : _main_fishpot_jpg__WEBPACK_IMPORTED_MODULE_2__,
            description : "Yes, you guessed it right. Pot with fish inside it."
        },
        {
            title : "Grilled Fish with Potato",
            image : _main_grilled_fish_jpg__WEBPACK_IMPORTED_MODULE_3__,
            description : "Brilliant combination of grilled King fish and crispy potato wedges."
        },
        {
            title : "Roastiano Le Madeupe",
            image : _main_roasted_fish_jpg__WEBPACK_IMPORTED_MODULE_4__,
            description : "Roasted fish with a made up name to sound French."
        },
        {
            title : "Royal Sushi platter",
            image : _main_sushi_platter_jpg__WEBPACK_IMPORTED_MODULE_5__,
            description : "A gigantic platter of sushi varieties."
        }
    ]

    for(let i = 0; i<MainCourseMenu.length; i++){
        content.appendChild(createItem(MainCourseMenu[i]));
    }

    return content;
}

function createItem(item){
    let content = document.createElement("div");
    content.classList.add("item");
    let itemName = document.createElement("div");
    itemName.classList.add("item-name");
    itemName.textContent = item.title;
    let itemImage = document.createElement("img");
    itemImage.classList.add("item-image")
    itemImage.src = item.image;
    itemImage.alt = `An image of ${item.title}`;
    let itemDescription = document.createElement("div");
    itemDescription.classList.add("item-description");
    itemDescription.textContent = item.description;
    content.appendChild(itemName);
    content.appendChild(itemImage);
    content.appendChild(itemDescription);
    return content;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateMenu);

/***/ }),

/***/ "./src/email.png":
/*!***********************!*\
  !*** ./src/email.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51b08bcbb5af7a861c31.png";

/***/ }),

/***/ "./src/home-bg.jpg":
/*!*************************!*\
  !*** ./src/home-bg.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f1ee81a3b85b4b11c36.jpg";

/***/ }),

/***/ "./src/main-fishpot.jpg":
/*!******************************!*\
  !*** ./src/main-fishpot.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ecf71590f0fbdbbffe8.jpg";

/***/ }),

/***/ "./src/main-grilled-fish.jpg":
/*!***********************************!*\
  !*** ./src/main-grilled-fish.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1787e431b989823bcf87.jpg";

/***/ }),

/***/ "./src/main-roasted-fish.jpg":
/*!***********************************!*\
  !*** ./src/main-roasted-fish.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c8a457ad0333c143685c.jpg";

/***/ }),

/***/ "./src/main-sushi-platter.jpg":
/*!************************************!*\
  !*** ./src/main-sushi-platter.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b7eb792f8801091dff5.jpg";

/***/ }),

/***/ "./src/main-sushi.jpg":
/*!****************************!*\
  !*** ./src/main-sushi.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92f305849a99d4b730a1.jpg";

/***/ }),

/***/ "./src/phone.png":
/*!***********************!*\
  !*** ./src/phone.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "034ecdecc920fbfed324.png";

/***/ }),

/***/ "./src/restaurant-logo.png":
/*!*********************************!*\
  !*** ./src/restaurant-logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a956ad75003dd0109d68.png";

/***/ }),

/***/ "./src/title-bg.jpg":
/*!**************************!*\
  !*** ./src/title-bg.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88fe4705294c806770eb.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsdUdBQWdDO0FBQzVFLDRDQUE0Qyx5R0FBaUM7QUFDN0UsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiwrR0FBK0csSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLGtCQUFrQjtBQUNySix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FB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QSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9ob21lLWJnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vdGl0bGUtYmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PdXRmaXQ6d2dodEAxMDA7MjAwOzMwMDs0MDA7NTAwOzYwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6ICdPdXRmaXQnLEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHksIGh0bWx7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5e1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjotMTUlO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAvKiBtYXgtaGVpZ2h0OiAxdmg7ICovXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cbiNjb250ZW50e1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5oZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gICAgYmFja2dyb3VuZDogcmdiKDIwOSwyMzYsMjU1KTtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDIwOSwyMzYsMjU1LDAuNzczNTQ2OTE4NzY3NTA3KSAyNSUsIHJnYmEoMCw4OCwxNDIsMC43NzA3NDU3OTgzMTkzMjc4KSA4MCUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sb2dve1xuICAgIHdpZHRoOiAxMCU7XG59XG5cbi5uYXZpZ2F0aW9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDElO1xuICAgIHBhZGRpbmctYm90dG9tOiAxJTtcbn1cblxuLnRhYntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxMCU7XG59XG5cbi50YWIgbGl7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDg4LDE0Mik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgd2lkdGg6IDEwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLnRhYiAuc2VsZWN0ZWR7XG4gICAgY29sb3I6IGF6dXJlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA4OCwxNDIpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50YWIgbGk6aG92ZXJ7XG4gICAgY29sb3I6IGF6dXJlO1xuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLnN1Yi1jb250ZW50e1xuICAgIFxuICAgIG1pbi1oZWlnaHQ6IDY1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZm9vdGVye1xuICAgIGhlaWdodDo1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmRhcmtjeWFuO1xuICAgIGNvbG9yOiBhenVyZTtcbiAgICBwYWRkaW5nOiAxMHB4IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVyby10ZXh0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcbiAgICBjb2xvcjogYXp1cmU7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG1hcmdpbjogYXV0byAxMCU7XG4gICAgcGFkZGluZzogNSUgMTAlOyBcbiAgICB0ZXh0LWFsaWduOmp1c3RpZnk7XG59XG5cbi5sb2dvLXRleHR7XG4gICAgY29sb3I6YXF1YW1hcmluZTtcbiAgICBmb250LXdlaWdodDogOTAwO1xufVxuXG4uaXRlbS1pbWFnZXtcbiAgICB3aWR0aDogMjAwcHg7XG59XG5cbi5tZW51LWNvbnRhaW5lcntcbiAgICBwYWRkaW5nLXRvcDogMiU7XG4gICAgbWFyZ2luOiAxJSA1JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIDEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MiwgODUsIDIxNCwgMC41KTtcbiAgICBib3gtc2hhZG93OiAwcHggLTJweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lbnUtdGl0bGV7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIG5hdnk7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm1lbnUtY29udGFpbmVyICp7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3ViLW1lbnUtY29udGFpbmVye1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIG1hcmdpbi10b3A6IDElO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgO1xufVxuXG4uc3ViLW1lbnUtdGl0bGV7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgbmF2eTtcbiAgICB3aWR0aDogNDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubWVudS1saXN0LWNvbnRhaW5lcntcbiAgICBwYWRkaW5nOiAyJSAyJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDUlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5pdGVte1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW46IDUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6Y29ybmZsb3dlcmJsdWU7XG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xufVxuXG4uaXRlbS1uYW1le1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIG1hcmdpbjogMiUgYXV0bztcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaXRlbS1pbWFnZXtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuXG4uaXRlbS1kZXNjcmlwdGlvbntcbiAgICBtYXJnaW4tdG9wOiAxJTtcbn1cblxuLmNvbnRhY3QtdGl0bGV7XG4gICAgbWFyZ2luOiAyJSBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLmNvbnRhY3QtY29udGFpbmVye1xuICAgIG1hcmdpbjogMiU7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDUlO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgMSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYyLCA4NSwgMjE0LCAwLjUpO1xuICAgIGJveC1zaGFkb3c6IDBweCAtMnB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uY29udGFjdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xufVxuLmNvbnRhY3QtZGV0YWlscy1ib3h7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXIgIDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDMlO1xufVxuXG4uaWNvbntcbiAgICB3aWR0aDogNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cblxuLmRldGFpbHN7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseURBQXNDO0lBQ3RDLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixtSEFBbUg7SUFDbkgsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixXQUFXO0lBQ1gsd0NBQXdDO0lBQ3hDLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMsK0NBQStDO0lBQy9DLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHlEQUF1QztJQUN2Qyw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIseURBQXVDO0lBQ3ZDLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGVBQWU7SUFDZixPQUFPO0lBQ1AsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFVBQVU7SUFDViwrQkFBK0I7SUFDL0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHdDQUF3QztJQUN4QyxtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsT0FBTztJQUNQLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3V0Zml0OndnaHRAMTAwOzIwMDszMDA7NDAwOzUwMDs2MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdPdXRmaXQnLEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHksIGh0bWx7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2hvbWUtYmcuanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjotMTUlO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAvKiBtYXgtaGVpZ2h0OiAxdmg7ICovXFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcbiNjb250ZW50e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5oZWFkZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIwOSwyMzYsMjU1KTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyMDksMjM2LDI1NSwwLjc3MzU0NjkxODc2NzUwNykgMjUlLCByZ2JhKDAsODgsMTQyLDAuNzcwNzQ1Nzk4MzE5MzI3OCkgODAlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5sb2dve1xcbiAgICB3aWR0aDogMTAlO1xcbn1cXG5cXG4ubmF2aWdhdGlvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLXRvcDogMSU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxJTtcXG59XFxuXFxuLnRhYntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwJTtcXG59XFxuXFxuLnRhYiBsaXtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDg4LDE0Mik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgd2lkdGg6IDEwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi50YWIgLnNlbGVjdGVke1xcbiAgICBjb2xvcjogYXp1cmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA4OCwxNDIpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udGFiIGxpOmhvdmVye1xcbiAgICBjb2xvcjogYXp1cmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5zdWItY29udGVudHtcXG4gICAgXFxuICAgIG1pbi1oZWlnaHQ6IDY1JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXJ7XFxuICAgIGhlaWdodDo1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpkYXJrY3lhbjtcXG4gICAgY29sb3I6IGF6dXJlO1xcbiAgICBwYWRkaW5nOiAxMHB4IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVyby10ZXh0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxuICAgIGNvbG9yOiBhenVyZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBtYXJnaW46IGF1dG8gMTAlO1xcbiAgICBwYWRkaW5nOiA1JSAxMCU7IFxcbiAgICB0ZXh0LWFsaWduOmp1c3RpZnk7XFxufVxcblxcbi5sb2dvLXRleHR7XFxuICAgIGNvbG9yOmFxdWFtYXJpbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5pdGVtLWltYWdle1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5tZW51LWNvbnRhaW5lcntcXG4gICAgcGFkZGluZy10b3A6IDIlO1xcbiAgICBtYXJnaW46IDElIDUlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgxMDAsIDEwMCwgMTAwLCAxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MiwgODUsIDIxNCwgMC41KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IC0ycHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudS10aXRsZXtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBuYXZ5O1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL3RpdGxlLWJnLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIgKntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc3ViLW1lbnUtY29udGFpbmVye1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxuICAgIG1hcmdpbi10b3A6IDElO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyIDtcXG59XFxuXFxuLnN1Yi1tZW51LXRpdGxle1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbmF2eTtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi90aXRsZS1iZy5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLm1lbnUtbGlzdC1jb250YWluZXJ7XFxuICAgIHBhZGRpbmc6IDIlIDIlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogNSU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uaXRlbXtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIG1hcmdpbjogNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6Y29ybmZsb3dlcmJsdWU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcXG59XFxuXFxuLml0ZW0tbmFtZXtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIG1hcmdpbjogMiUgYXV0bztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLml0ZW0taW1hZ2V7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi5pdGVtLWRlc2NyaXB0aW9ue1xcbiAgICBtYXJnaW4tdG9wOiAxJTtcXG59XFxuXFxuLmNvbnRhY3QtdGl0bGV7XFxuICAgIG1hcmdpbjogMiUgYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5jb250YWN0LWNvbnRhaW5lcntcXG4gICAgbWFyZ2luOiAyJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNSU7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjIsIDg1LCAyMTQsIDAuNSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAtMnB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4uY29udGFjdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xcbn1cXG4uY29udGFjdC1kZXRhaWxzLWJveHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlciAgO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAzJTtcXG59XFxuXFxuLmljb257XFxuICAgIHdpZHRoOiA1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcXG59XFxuXFxuLmRldGFpbHN7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7Y2xlYXJTdWJDb250ZW50LHNldEFjdGl2ZVRhYn0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBQaG9uZSBmcm9tIFwiLi9waG9uZS5wbmdcIjtcbmltcG9ydCBFbWFpbCBmcm9tIFwiLi9lbWFpbC5wbmdcIjtcblxuZnVuY3Rpb24gZ2VuZXJhdGVDb250YWN0KCl7XG4gICAgY2xlYXJTdWJDb250ZW50KCk7XG4gICAgc2V0QWN0aXZlVGFiKFwiY29udGFjdFwiKTtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jb250YWluZXJcIixcInN1Yi1jb250ZW50LWNvbnRhaW5lclwiKTtcbiAgICBsZXQgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIjtcbiAgICBjb250YWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtdGl0bGVcIik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpO1xuICAgIGxldCBjb250YWN0RGV0YWlsc0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdERldGFpbHNCb3guY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtZGV0YWlscy1ib3hcIik7XG4gICAgY29udGFjdERldGFpbHNCb3guYXBwZW5kQ2hpbGQoZ2VuZXJhdGVDb250YWN0U2V0cyhQaG9uZSxcIjEyMzQ1Njc4OTBcIixcInBob25lXCIpKTtcbiAgICBjb250YWN0RGV0YWlsc0JveC5hcHBlbmRDaGlsZChnZW5lcmF0ZUNvbnRhY3RTZXRzKEVtYWlsLFwiZ29vZGx1Y2tmaW5kaW5ndXNAbm90cmVhbC5jb21cIixcImVtYWlsXCIpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3REZXRhaWxzQm94KTtcbiAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWItY29udGVudFwiKTtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ29udGFjdFNldHMoaW1nU3JjLHRleHQsaWNvbklkKXtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcbiAgICBsZXQgaWNvbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpY29uSW1hZ2UuY2xhc3NMaXN0LmFkZChcImljb25cIik7XG4gICAgaWNvbkltYWdlLnNyYyA9IGltZ1NyYztcbiAgICBpY29uSW1hZ2UuaWQ9aWNvbklkO1xuICAgIGxldCBpY29uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaWNvblRleHQuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIilcbiAgICBpY29uVGV4dC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpY29uSW1hZ2UpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaWNvblRleHQpO1xuICAgIHJldHVybiBjb250ZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUNvbnRhY3Q7IiwiaW1wb3J0IHtjbGVhclN1YkNvbnRlbnQsc2V0QWN0aXZlVGFifSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlU3ViQ29udGVudCgpe1xuICAgIGNsZWFyU3ViQ29udGVudCgpO1xuICAgIHNldEFjdGl2ZVRhYihcImhvbWVcIik7XG4gICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3ViLWNvbnRlbnRcIik7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcInN1Yi1jb250ZW50LWNvbnRhaW5lclwiLFwiaGVyby10ZXh0XCIpO1xuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIkRpdmUgaW50byBhIHdvcmxkIG9mIGV4cXVpc2l0ZSBmbGF2b3JzIGF0IFwiO1xuICAgIGxldCBsb2dvU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGxvZ29TcGFuLnRleHRDb250ZW50ID0gXCJSb3cgWW91ciBCb2F0XCI7XG4gICAgbG9nb1NwYW4uY2xhc3NMaXN0LmFkZChcImxvZ28tdGV4dFwiKVxuICAgIGNvbnRlbnQuYXBwZW5kKGxvZ29TcGFuKTtcbiAgICBsZXQgcmVtYWluaW5nVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHJlbWFpbmluZ1RleHQudGV4dENvbnRlbnQgPSBcIiwgd2hlcmUgdGhlIG9jZWFuIG1lZXRzIHlvdXIgcGxhdGUgaW4gYSBzeW1waG9ueSBvZiBjdWxpbmFyeSBkZWxpZ2h0LiBPdXIgc2VhZm9vZCBzYW5jdHVhcnkgaXMgYSBjZWxlYnJhdGlvbiBvZiB0aGUgZmluZXN0IGNhdGNoZXMgZnJvbSB0aGUgZGVlcCBibHVlLCBtZXRpY3Vsb3VzbHkgcHJlcGFyZWQgdG8gZWxldmF0ZSB5b3VyIGRpbmluZyBleHBlcmllbmNlLlwiO1xuICAgIGNvbnRlbnQuYXBwZW5kKHJlbWFpbmluZ1RleHQpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVTdWJDb250ZW50OyIsImltcG9ydCBMb2dvIGZyb20gXCIuL3Jlc3RhdXJhbnQtbG9nby5wbmdcIjtcbmltcG9ydCBnZW5lcmF0ZVN1YkNvbnRlbnRIb21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBnZW5lcmF0ZU1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZ2VuZXJhdGVDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcbmZ1bmN0aW9uIGNsZWFyU3ViQ29udGVudCgpe1xuICAgIGxldCBwcmV2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3ViLWNvbnRlbnQtY29udGFpbmVyXCIpO1xuICAgIHByZXZDb250ZW50LnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVUYWIodGFiTmFtZSl7XG4gICAgbGV0IGFsbFRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYj5saVwiKTtcbiAgICBhbGxUYWJzLmZvckVhY2godGFiID0+IHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIikpO1xuICAgIGxldCBhY3RpdmVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0YWJOYW1lfWApO1xuICAgIGFjdGl2ZVRhYi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG59XG5cbmV4cG9ydCB7Y2xlYXJTdWJDb250ZW50LHNldEFjdGl2ZVRhYn07XG5cbmNvbnN0IGdlbmVyYXRlVGVtcGxhdGUgPSAoZnVuY3Rpb24oKXtcbiAgICBsZXQgZmluYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGZpbmFsQ29udGVudC5hcHBlbmRDaGlsZChnZW5lcmF0ZUhlYWRlcigpKTtcbiAgICBmaW5hbENvbnRlbnQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVOYXYoKSk7XG4gICAgbGV0IHN1YkNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN1YkNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZChcInN1Yi1jb250ZW50XCIpO1xuICAgIGxldCBzdWJDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdWJDb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzdWItY29udGVudC1jb250YWluZXJcIik7XG4gICAgc3ViQ29udGVudERpdi5hcHBlbmRDaGlsZChzdWJDb250ZW50Q29udGFpbmVyKTtcbiAgICBmaW5hbENvbnRlbnQuYXBwZW5kQ2hpbGQoc3ViQ29udGVudERpdik7XG4gICAgZ2VuZXJhdGVTdWJDb250ZW50SG9tZSgpO1xuICAgIGZpbmFsQ29udGVudC5hcHBlbmRDaGlsZChnZW5lcmF0ZUZvb3RlcigpKTtcbiAgICBsZXQgaG9tZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZVwiKTtcbiAgICBob21lVGFiLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICBob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgICAgIGdlbmVyYXRlU3ViQ29udGVudEhvbWUoKTtcbiAgICB9KVxuICAgIGxldCBtZW51VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpO1xuICAgIG1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICAgICAgZ2VuZXJhdGVNZW51KCk7XG4gICAgfSlcbiAgICBsZXQgY29udGFjdFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdFwiKTtcbiAgICBjb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgICAgIGdlbmVyYXRlQ29udGFjdCgpO1xuICAgIH0pXG5cblxufSkoKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVIZWFkZXIoKXtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1hZ2Uuc3JjID0gTG9nbztcbiAgICBpbWFnZS5hbHQgPSBcIkxvZ28gb2YgUm93IFlvdXIgQm9hdFwiO1xuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIHJldHVybiBjb250ZW50O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZU5hdigpe1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJuYXZpZ2F0aW9uXCIpO1xuICAgIGxldCB1TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICB1TGlzdC5jbGFzc0xpc3QuYWRkKFwidGFiXCIpO1xuICAgIGxldCBsaXN0SXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGlzdEl0ZW0xLmlkID0gXCJob21lXCI7XG4gICAgbGlzdEl0ZW0xLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgdUxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0xKTtcbiAgICBsZXQgbGlzdEl0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpc3RJdGVtMi5pZCA9IFwibWVudVwiO1xuICAgIGxpc3RJdGVtMi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIHVMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtMik7XG4gICAgbGV0IGxpc3RJdGVtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaXN0SXRlbTMuaWQgPSBcImNvbnRhY3RcIjtcbiAgICBsaXN0SXRlbTMudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIjtcbiAgICB1TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbTMpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodUxpc3QpO1xuICAgIHJldHVybiBjb250ZW50O1xufVxuXG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVGb290ZXIoKXtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIkNyZWF0ZWQgYnkgTW9oYW1tZWQgU2hhZmVlaywgMjAyM1wiO1xuICAgIHJldHVybiBjb250ZW50O1xufVxuXG4iLCJpbXBvcnQge2NsZWFyU3ViQ29udGVudCxzZXRBY3RpdmVUYWJ9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgU3VzaGkgZnJvbSBcIi4vbWFpbi1zdXNoaS5qcGdcIlxuaW1wb3J0IEZpc2hQb3QgZnJvbSBcIi4vbWFpbi1maXNocG90LmpwZ1wiO1xuaW1wb3J0IEdyaWxsZWRGaXNoIGZyb20gXCIuL21haW4tZ3JpbGxlZC1maXNoLmpwZ1wiO1xuaW1wb3J0IFJvYXN0ZWRGaXNoIGZyb20gXCIuL21haW4tcm9hc3RlZC1maXNoLmpwZ1wiO1xuaW1wb3J0IFN1c2hpUGxhdHRlciBmcm9tIFwiLi9tYWluLXN1c2hpLXBsYXR0ZXIuanBnXCI7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTWVudSgpe1xuICAgIGNsZWFyU3ViQ29udGVudCgpO1xuICAgIHNldEFjdGl2ZVRhYihcIm1lbnVcIik7XG4gICAgbGV0IGZpbmFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZmluYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRhaW5lclwiLFwic3ViLWNvbnRlbnQtY29udGFpbmVyXCIpO1xuICAgIGxldCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKFwibWVudS10aXRsZVwiKTtcbiAgICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBmaW5hbENvbnRlbnQuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcbiAgICBsZXQgc3ViTWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3ViTWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic3ViLW1lbnUtY29udGFpbmVyXCIpO1xuICAgIGxldCBzdWJNZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN1Yk1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKFwic3ViLW1lbnUtdGl0bGVcIik7XG4gICAgc3ViTWVudVRpdGxlLnRleHRDb250ZW50ID0gXCJNYWluIENvdXJzZVwiO1xuICAgIHN1Yk1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViTWVudVRpdGxlKTtcbiAgICBsZXQgbWVudUxpc3RDb250YWluZXIgPSBzZXRNZW51KCk7XG4gICAgc3ViTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51TGlzdENvbnRhaW5lcik7XG4gICAgZmluYWxDb250ZW50LmFwcGVuZENoaWxkKHN1Yk1lbnVDb250YWluZXIpO1xuICAgIGxldCBzdWJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWItY29udGVudFwiKTtcbiAgICBzdWJDb250ZW50LmFwcGVuZENoaWxkKGZpbmFsQ29udGVudCk7XG59XG5cbmZ1bmN0aW9uIHNldE1lbnUoKXtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwibWVudS1saXN0LWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBNYWluQ291cnNlTWVudSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGUgOiBcIlN1c2hpIEFsaGFuaXlhXCIsXG4gICAgICAgICAgICBpbWFnZSA6IFN1c2hpLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBcIk5vdGhpbmcgc3BlY2lhbCBhYm91dCBpdC5cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IFwiRmlzaFBvdFwiLFxuICAgICAgICAgICAgaW1hZ2UgOiBGaXNoUG90LFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBcIlllcywgeW91IGd1ZXNzZWQgaXQgcmlnaHQuIFBvdCB3aXRoIGZpc2ggaW5zaWRlIGl0LlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlIDogXCJHcmlsbGVkIEZpc2ggd2l0aCBQb3RhdG9cIixcbiAgICAgICAgICAgIGltYWdlIDogR3JpbGxlZEZpc2gsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IFwiQnJpbGxpYW50IGNvbWJpbmF0aW9uIG9mIGdyaWxsZWQgS2luZyBmaXNoIGFuZCBjcmlzcHkgcG90YXRvIHdlZGdlcy5cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IFwiUm9hc3RpYW5vIExlIE1hZGV1cGVcIixcbiAgICAgICAgICAgIGltYWdlIDogUm9hc3RlZEZpc2gsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IFwiUm9hc3RlZCBmaXNoIHdpdGggYSBtYWRlIHVwIG5hbWUgdG8gc291bmQgRnJlbmNoLlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlIDogXCJSb3lhbCBTdXNoaSBwbGF0dGVyXCIsXG4gICAgICAgICAgICBpbWFnZSA6IFN1c2hpUGxhdHRlcixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogXCJBIGdpZ2FudGljIHBsYXR0ZXIgb2Ygc3VzaGkgdmFyaWV0aWVzLlwiXG4gICAgICAgIH1cbiAgICBdXG5cbiAgICBmb3IobGV0IGkgPSAwOyBpPE1haW5Db3Vyc2VNZW51Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVJdGVtKE1haW5Db3Vyc2VNZW51W2ldKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW0oaXRlbSl7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG4gICAgbGV0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKFwiaXRlbS1uYW1lXCIpO1xuICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcbiAgICBsZXQgaXRlbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpdGVtSW1hZ2UuY2xhc3NMaXN0LmFkZChcIml0ZW0taW1hZ2VcIilcbiAgICBpdGVtSW1hZ2Uuc3JjID0gaXRlbS5pbWFnZTtcbiAgICBpdGVtSW1hZ2UuYWx0ID0gYEFuIGltYWdlIG9mICR7aXRlbS50aXRsZX1gO1xuICAgIGxldCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiaXRlbS1kZXNjcmlwdGlvblwiKTtcbiAgICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbUltYWdlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlTWVudTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9