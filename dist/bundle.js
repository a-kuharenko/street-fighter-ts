/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var app_1 = __webpack_require__(/*! ./src/typescript/app */ "./src/typescript/app.ts");
__webpack_require__(/*! ./src/styles/styles.css */ "./src/styles/styles.css");
new app_1["default"]();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html,\nbody {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n}\n\n#root {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n}\n\n.fighters {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex: 1;\n    flex-wrap: wrap;\n    padding: 0 15px;\n}\n\n.fighter {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n}\n\n.fighter:hover {\n    box-shadow: 0 0 50px 10px rgba(0,0,0,0.06);\n    cursor: pointer;\n}\n\n.name {\n    align-self: center;\n    font-size: 21px;\n    margin-top: 20px;\n}\n\n.fighter-image {\n    height: 260px;\n}\n\n#loading-overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px;\n    background: rgba(255, 255, 255, 0.7);\n    visibility: hidden;\n}\n\n#details-form {\n    display: inline-block;\n    padding: 5px 5px 5px 5px;\n    width: 200px;\n    border: 1px solid black;\n    background: white ;\n    vertical-align: middle;\n  }\n\n#details-form-container {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 9999;\n    display: none;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n}\n\n#details-form-container:before {\n    display: inline-block;\n    height: 100%;\n    content: '';\n    vertical-align: middle;\n}\n\n#cover-div {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 9000;\n    width: 100%;\n    height: 100%;\n    background-color: gray;\n    opacity: 0.3;\n}\n\n#details-form input[name=\"num\"] {\n    display: inline-block;\n    margin: 5px;\n    width: 80px;\n    text-align: left\n}\n\n#start-button{\n    display: none;\n    background: yellow;\n    border: 5px solid green; \n}\n\n#start-button[disabled]{\n    border: 5px solid #c54;\n}\n\n#start-button img{\n    width: 130px;\n    height: 40px;\n}\n\n#health-bar1 {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    width: 200px;\n    height: 20px;\n    padding: 5px;\n    background: #ddd;\n    -webkit-border-radius: 5px;\n    -moz-border-radius: 5px;\n    border-radius: 5px;\n    position: relative;\n}\n\n#bar1 {\n    background: #c54;\n    width: 100%;\n    height: 10px;\n    position: relative;\n    \n    transition: width .5s linear;\n}\n  \n#hit1 {\n    background: rgba(255,255,255,0.6);\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    width: 0px;\n    \n    transition: width .5s linear;\n}\n\n#health-bar2 {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    width: 200px;\n    height: 20px;\n    padding: 5px;\n    background: #ddd;\n    -webkit-border-radius: 5px;\n    -moz-border-radius: 5px;\n    border-radius: 5px;\n    position: relative;\n}\n\n#bar2 {\n    background: #c54;\n    width: 100%;\n    height: 10px;\n    position: relative;\n    \n    transition: width .5s linear;\n}\n  \n#hit2 {\n    background: rgba(255,255,255,0.6);\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    width: 0px;\n    transition: width .5s linear;\n}\n\n#instruction{\n    margin-top:50px; \n    display: none;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/typescript/FightController.ts":
/*!*******************************************!*\
  !*** ./src/typescript/FightController.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Fighter_1 = __webpack_require__(/*! ./Fighter */ "./src/typescript/Fighter.ts");
var fightController = /** @class */ (function () {
    function fightController(fightersView) {
        var _this = this;
        var startButton = document.getElementById('start-button');
        startButton.style.display = 'block';
        document.getElementById('instruction').style.display = 'block';
        document.getElementById('startImg').style.display = 'block';
        startButton.addEventListener('click', function () { return _this._handleClickFight(fightersView); });
        this.inGame = false;
        this._choosed = fightersView.fight;
    }
    fightController.prototype._fight = function (fighters, callback) {
        var _this = this;
        var fighter1 = fighters[0], fighter2 = fighters[1];
        this._inizializeHpBars(fighter1, fighter2);
        var health1 = fighter1.health;
        var health2 = fighter2.health;
        var interval = setInterval(function () {
            if (+fighter1.health > 0 && +fighter2.health > 0) {
                var _a = _this._getDamage(fighter1, fighter2, health1), barWidth1 = _a[0], hitWidth1 = _a[1];
                var _b = _this._getDamage(fighter2, fighter1, health2), barWidth2 = _b[0], hitWidth2 = _b[1];
                _this._updateHpBars(barWidth1, hitWidth1, barWidth2, hitWidth2);
            }
            else {
                clearInterval(interval);
                callback(+fighter1.health > 0 ? fighter1 : fighter2);
            }
        }, 1000);
    };
    fightController.prototype._handleClickFight = function (fightersView) {
        var _this = this;
        if (!this.inGame) {
            var fighters = fightersView.fight.map(function (fighter) {
                return new Fighter_1["default"](fightersView.fightersDetailsMap.get(fighter._id));
            });
            document.getElementById('start-button').disabled = true;
            document.getElementById('hp').style.display = 'block';
            var winAudio_1 = new Audio("../../resources/sounds/victory.mp3");
            var startAudio = new Audio("../../resources/sounds/round1.mp3");
            startAudio.play();
            this.inGame = true;
            this._fight(fighters, function (winner) {
                _this._displayWinner(winner);
                _this.inGame = false;
                winAudio_1.play();
            });
        }
    };
    fightController.prototype._inizializeHpBars = function (fighter1, fighter2) {
        document.getElementById('name1').innerText = fighter1.name;
        document.getElementById('name2').innerText = fighter2.name;
        document.getElementById('bar1').style.width = '100%';
        document.getElementById('bar2').style.width = '100%';
        document.getElementById('winnerName').style.display = 'none';
    };
    fightController.prototype._updateHpBars = function (barWidth1, hitWidth1, barWidth2, hitWidth2) {
        var bar1 = document.getElementById('bar1');
        var hit1 = document.getElementById('hit1');
        var bar2 = document.getElementById('bar2');
        var hit2 = document.getElementById('hit2');
        hit1.style.width = hitWidth1 + "%";
        hit2.style.width = hitWidth2 + "%";
        setTimeout(function () {
            hit1.style.width = '0';
            bar1.style.width = (barWidth1 < 0 ? 0 : barWidth1) + "%";
            hit2.style.width = '0';
            bar2.style.width = (barWidth2 < 0 ? 0 : barWidth2) + "%";
        }, 500);
    };
    fightController.prototype._displayWinner = function (winner) {
        var winnerName = document.getElementById('winnerName');
        winnerName.style.display = 'block';
        winnerName.innerText = "Winner is " + winner.name + "!";
        if (this._choosed.length === 2)
            document.getElementById('start-button').disabled = false;
    };
    fightController.prototype._getDamage = function (fighter1, fighter2, health) {
        var damage1 = fighter2.getHitPower() - fighter1.getBlockPower();
        fighter1.health = (+fighter1.health - (damage1 > 0 ? damage1 : 0)).toString();
        var barWidth1 = (+fighter1.health / +health) * 100;
        var hitWidth1 = (damage1 / +health) * 100;
        return [barWidth1, hitWidth1];
    };
    return fightController;
}());
exports["default"] = fightController;


/***/ }),

/***/ "./src/typescript/Fighter.ts":
/*!***********************************!*\
  !*** ./src/typescript/Fighter.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Fighter = /** @class */ (function () {
    function Fighter(details) {
        this.name = '';
        this.health = '';
        this.attack = '';
        this.defense = '';
        this.source = '';
        this.name = details.name;
        this.health = details.health;
        this.attack = details.attack;
        this.defense = details.defense;
        this.source = details.source;
    }
    Fighter.prototype.getHitPower = function () {
        var criticalHitChance = getRandom(1, 3);
        return +this.attack * criticalHitChance;
    };
    Fighter.prototype.getBlockPower = function () {
        var dodgeChance = getRandom(1, 3);
        return +this.defense * dodgeChance;
    };
    return Fighter;
}());
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
exports["default"] = Fighter;


/***/ }),

/***/ "./src/typescript/app.ts":
/*!*******************************!*\
  !*** ./src/typescript/app.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var fightersView_1 = __webpack_require__(/*! ./fightersView */ "./src/typescript/fightersView.ts");
var fightersService_1 = __webpack_require__(/*! ./services/fightersService */ "./src/typescript/services/fightersService.ts");
var FightController_1 = __webpack_require__(/*! ./FightController */ "./src/typescript/FightController.ts");
var App = /** @class */ (function () {
    function App() {
        this._startApp();
    }
    App.prototype._startApp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fighters, fightersView, fightersElement, audio, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        App.loadingElement.style.visibility = 'visible';
                        return [4 /*yield*/, fightersService_1.fighterService.getFighters()];
                    case 1:
                        fighters = _a.sent();
                        fightersView = new fightersView_1["default"](fighters);
                        fightersElement = fightersView.element;
                        new FightController_1["default"](fightersView);
                        audio = new Audio("../../resources/sounds/soundtrack.mp3");
                        audio.loop = true;
                        audio.play();
                        App.rootElement.appendChild(fightersElement);
                        return [3 /*break*/, 4];
                    case 2:
                        error_1 = _a.sent();
                        console.warn(error_1);
                        App.rootElement.innerText = 'Failed to load data';
                        return [3 /*break*/, 4];
                    case 3:
                        App.loadingElement.style.visibility = 'hidden';
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    App.rootElement = document.getElementById('root');
    App.loadingElement = document.getElementById('loading-overlay');
    return App;
}());
exports["default"] = App;


/***/ }),

/***/ "./src/typescript/fighterView.ts":
/*!***************************************!*\
  !*** ./src/typescript/fighterView.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var view_1 = __webpack_require__(/*! ./view */ "./src/typescript/view.ts");
var FighterView = /** @class */ (function (_super) {
    __extends(FighterView, _super);
    function FighterView(fighter, handleClick) {
        var _this = _super.call(this) || this;
        _this._createFighter(fighter, handleClick);
        return _this;
    }
    FighterView.prototype._createFighter = function (fighter, handleClick) {
        var name = fighter.name, source = fighter.source;
        var nameElement = this._createName(name);
        var imageElement = this._createImage(source);
        this.element = this.createElement({ tagName: 'div', className: 'fighter' });
        this.element.append(imageElement, nameElement);
        this.element.addEventListener('click', function (event) { return handleClick(event, fighter); }, false);
    };
    FighterView.prototype._createName = function (name) {
        var nameElement = this.createElement({ tagName: 'span', className: 'name' });
        nameElement.innerText = name;
        return nameElement;
    };
    FighterView.prototype._createImage = function (source) {
        var attributes = { src: source };
        var imgElement = this.createElement({
            tagName: 'img',
            className: 'fighter-image',
            attributes: attributes
        });
        return imgElement;
    };
    return FighterView;
}(view_1["default"]));
exports["default"] = FighterView;


/***/ }),

/***/ "./src/typescript/fightersView.ts":
/*!****************************************!*\
  !*** ./src/typescript/fightersView.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var view_1 = __webpack_require__(/*! ./view */ "./src/typescript/view.ts");
var fighterView_1 = __webpack_require__(/*! ./fighterView */ "./src/typescript/fighterView.ts");
var fightersService_1 = __webpack_require__(/*! ./services/fightersService */ "./src/typescript/services/fightersService.ts");
var showDetails_1 = __webpack_require__(/*! ./showDetails */ "./src/typescript/showDetails.ts");
var FightersView = /** @class */ (function (_super) {
    __extends(FightersView, _super);
    function FightersView(fighters) {
        var _this = _super.call(this) || this;
        _this.fightersDetailsMap = new Map();
        _this.handleClick = _this.handleFighterClick.bind(_this);
        _this.createFighters(fighters);
        _this.fight = [];
        return _this;
    }
    FightersView.prototype.createFighters = function (fighters) {
        var _a;
        var _this = this;
        var fighterElements = fighters.map(function (fighter) {
            var fighterView = new fighterView_1["default"](fighter, _this.handleClick);
            return fighterView.element;
        });
        this.fighterElements = fighterElements;
        this.element = this.createElement({ tagName: 'div', className: 'fighters' });
        (_a = this.element).append.apply(_a, fighterElements);
    };
    FightersView.prototype._chooseFighter = function (fighter) {
        var defaultHEIGHT = '260px';
        var selectedHEIGHT = '320px';
        var borderSTYLE = '3px solid yellow';
        var imageElements = document.getElementsByClassName('fighter-image');
        var id = fighter._id - 1;
        var select = function (id, fighter) {
            this.fight.push(fighter);
            this.fighterElements[id].style.border = borderSTYLE;
            var imageElement = imageElements[id];
            imageElement.style.height = selectedHEIGHT;
        };
        select = select.bind(this);
        var unselect = function (id, fighter) {
            if (fighter)
                this.fight.splice(this.fight.indexOf(fighter), 1);
            this.fighterElements[id].style.border = '';
            var imageElement = imageElements[id];
            imageElement.style.height = defaultHEIGHT;
        };
        unselect = unselect.bind(this);
        if (!fighter.selected) {
            if (this.fight.length === 2) {
                var f1 = this.fight.shift();
                var id_1 = f1._id - 1;
                unselect(id_1, undefined);
                f1.selected = !f1.selected;
            }
            select(id, fighter);
        }
        else
            unselect(id, fighter);
        fighter.selected = !fighter.selected;
    };
    FightersView.prototype.handleFighterClick = function (event, fighter) {
        return __awaiter(this, void 0, void 0, function () {
            var details, startButton, startButton;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        details = this.fightersDetailsMap.get(fighter._id);
                        if (!!details) return [3 /*break*/, 2];
                        return [4 /*yield*/, fightersService_1.fighterService.getFighterDetails(fighter._id)];
                    case 1:
                        details = _a.sent();
                        fighter.selected = false;
                        _a.label = 2;
                    case 2:
                        !fighter.selected ? showDetails_1["default"](details, function (updatedDetails) {
                            details = updatedDetails;
                        }) : 0;
                        this.fightersDetailsMap.set(fighter._id, details);
                        this._chooseFighter(fighter);
                        if (this.fight.length === 2) {
                            startButton = document.getElementById('start-button');
                            startButton.disabled = false;
                        }
                        else {
                            startButton = document.getElementById('start-button');
                            startButton.disabled = true;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return FightersView;
}(view_1["default"]));
exports["default"] = FightersView;


/***/ }),

/***/ "./src/typescript/helpers/apiHelper.ts":
/*!*********************************************!*\
  !*** ./src/typescript/helpers/apiHelper.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var API_URL = 'https://api.github.com/repos/binary-studio-academy/stage-2-es6-for-everyone/contents/resources/api/';
function callApi(endpoind, method) {
    var url = API_URL + endpoind;
    var options = {
        method: method
    };
    return fetch(url, options)
        .then(function (response) {
        return response.ok ? response.json() : Promise.reject(Error('Failed to load'));
    })["catch"](function (error) {
        throw error;
    });
}
exports.callApi = callApi;


/***/ }),

/***/ "./src/typescript/services/fightersService.ts":
/*!****************************************************!*\
  !*** ./src/typescript/services/fightersService.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var apiHelper_1 = __webpack_require__(/*! ../helpers/apiHelper */ "./src/typescript/helpers/apiHelper.ts");
var FighterService = /** @class */ (function () {
    function FighterService() {
    }
    FighterService.prototype.getFighters = function () {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint, apiResult, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        endpoint = 'fighters.json';
                        return [4 /*yield*/, apiHelper_1.callApi(endpoint, 'GET')];
                    case 1:
                        apiResult = _a.sent();
                        return [2 /*return*/, JSON.parse(atob(apiResult.content))];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FighterService.prototype.getFighterDetails = function (_id) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint, apiResult, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        endpoint = "details/fighter/" + _id + ".json";
                        return [4 /*yield*/, apiHelper_1.callApi(endpoint, 'GET')];
                    case 1:
                        apiResult = _a.sent();
                        return [2 /*return*/, JSON.parse(atob(apiResult.content))];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return FighterService;
}());
exports.fighterService = new FighterService();


/***/ }),

/***/ "./src/typescript/showDetails.ts":
/*!***************************************!*\
  !*** ./src/typescript/showDetails.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function showDetails(details, callback) {
    function showCover() {
        var coverDiv = document.createElement('div');
        coverDiv.id = 'cover-div';
        document.body.appendChild(coverDiv);
    }
    function hideCover() {
        document.body.removeChild(document.getElementById('cover-div'));
    }
    function complete(details) {
        hideCover();
        container.style.display = 'none';
        callback(details);
    }
    var inputs = [];
    var form = document.getElementById('details-form');
    var container = document.getElementById('details-form-container');
    showCover();
    for (var key in details) {
        var element = document.getElementById(key);
        if (element) {
            element.value = details[key];
            inputs.push(element);
        }
    }
    form.onsubmit = function () {
        inputs.forEach(function (input) { return details[input.id] = input.value; });
        complete(details);
        return false;
    };
    container.style.display = 'block';
}
exports["default"] = showDetails;


/***/ }),

/***/ "./src/typescript/view.ts":
/*!********************************!*\
  !*** ./src/typescript/view.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var View = /** @class */ (function () {
    function View() {
    }
    View.prototype.createElement = function (_a) {
        var tagName = _a.tagName, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.attributes, attributes = _c === void 0 ? {} : _c;
        var element = document.createElement(tagName);
        element.classList.add(className);
        Object.keys(attributes).forEach(function (key) { return element.setAttribute(key, attributes[key]); });
        return element;
    };
    return View;
}());
exports["default"] = View;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map