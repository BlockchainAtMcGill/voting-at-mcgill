module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/elections/apply/apply.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const localeDomain = (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if ( true && as.startsWith('/')) {
      resolvedAs = (0, _resolveRewrites.default)(addBasePath(addLocale(delBasePath((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname), this.locale)), pages, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname, this.locales);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: (0, _normalizeLocalePath.normalizeLocalePath)(hasBasePath(resolvedAs) ? delBasePath(resolvedAs) : resolvedAs, this.locales).pathname
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://err.sh/next.js/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, addBasePath(addLocale(resolvedAs, this.locale)), routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (options.scroll ? {
        x: 0,
        y: 0
      } : null)).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.compileNonPath = compileNonPath;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function compileNonPath(value, params) {
  if (!value.includes(':')) {
    return value;
  }

  for (const key of Object.keys(params)) {
    if (value.includes(`:${key}`)) {
      value = value.replace(new RegExp(`:${key}\\*`, 'g'), `:${key}--ESCAPED_PARAM_ASTERISKS`).replace(new RegExp(`:${key}\\?`, 'g'), `:${key}--ESCAPED_PARAM_QUESTION`).replace(new RegExp(`:${key}\\+`, 'g'), `:${key}--ESCAPED_PARAM_PLUS`).replace(new RegExp(`:${key}(?!\\w)`, 'g'), `--ESCAPED_PARAM_COLON${key}`);
    }
  }

  value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*'); // the value needs to start with a forward-slash to be compiled
  // correctly

  return pathToRegexp.compile(`/${value}`, {
    validate: false
  })(params).substr(1);
}

function prepareDestination(destination, params, query, appendParamsToQuery) {
  let parsedDestination = {}; // clone query so we don't modify the original

  query = Object.assign({}, query);
  const hadLocale = query.__nextLocale;
  delete query.__nextLocale;
  delete query.__nextDefaultLocale;

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = compileNonPath(value, params);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  let paramKeys = Object.keys(params); // remove internal param for i18n

  if (hadLocale) {
    paramKeys = paramKeys.filter(name => name !== 'nextInternalLocale');
  }

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  try {
    newUrl = destinationCompiler(params);
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _normalizeLocalePath = __webpack_require__(/*! ../../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, rewrites, query, resolveHref, locales) {
  if (!pages.includes((0, _normalizeLocalePath.normalizeLocalePath)(asPath, locales).pathname)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);
        const fsPathname = (0, _normalizeLocalePath.normalizeLocalePath)((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath), locales).pathname;

        if (pages.includes(fsPathname)) {
          asPath = fsPathname; // check if we now match a page as this means we are done
          // resolving the rewrites

          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(fsPathname);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          asPath = fsPathname;
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/wen_wong/voting-at-mcgill/client/src/components/header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const headersData = [{
  label: "Home",
  href: "/home",
  key: 1
}, {
  label: "Create Vote",
  href: "/adminHome",
  key: 2
}, {
  label: "About Us",
  href: "/aboutUs",
  key: 3
}, {
  label: "Log Out",
  href: "/logout",
  key: 4
}];
const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(() => ({
  header: {
    backgroundColor: "#ED1B2F"
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left"
  },
  web3: {
    fontFamily: "Work Sans, sans-serif",
    color: "#FFC0CB",
    textAlign: "right",
    right: 0
  }
}));
const Header = () => {
  const {
    header,
    logoStyle,
    web3
  } = useStyles();

  const displayDesktop = () => {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }
    }, logo, getMenuButtons(), connection);
  };

  const logo = __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      color: "#FFFEFE"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    component: "h1",
    className: logoStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, "McGill Votes")));

  function clicked() {
    ethereum.request({
      method: 'eth_requestAccounts'
    });
  }

  const connection = __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: clicked,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: web3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, "Connect to Web3"));

  const getMenuButtons = () => {
    return headersData.map(({
      label,
      href
    }) => {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: href,
        key: href,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], _extends({
        key: label,
        color: "inherit"
      }, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }
      }), label));
    });
  };

  return __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
    style: {
      backgroundColor: "#ED1B2F",
      position: "absolute"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, displayDesktop()));
};

/***/ }),

/***/ "./src/contracts/Vote.json":
/*!*********************************!*\
  !*** ./src/contracts/Vote.json ***!
  \*********************************/
/*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, immutableReferences, generatedSources, deployedGeneratedSources, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, devdoc, userdoc, default */
/***/ (function(module) {

<<<<<<< HEAD
module.exports = JSON.parse("{\"contractName\":\"Vote\",\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"managerOfVote\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"typeOf\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"candidateArray\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"candidateAddr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"numVotes\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"candidates\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"candidateAddr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"numVotes\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"candidatesAddresses\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"candidatesCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"currentElection\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"startDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endDate\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"numVotes\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"typeOfElection\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"currentPetition\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"startDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endDate\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"numSigned\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"manager\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"startDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endDate\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"typeOfElection\",\"type\":\"string\"}],\"name\":\"editElection\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"startDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endDate\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"}],\"name\":\"editPetition\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"candidateAddress\",\"type\":\"address\"}],\"name\":\"voteFor\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"current_date\",\"type\":\"uint256\"}],\"name\":\"enterElection\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"current_date\",\"type\":\"uint256\"}],\"name\":\"leaveElection\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"candaddr\",\"type\":\"address\"}],\"name\":\"get_candidates\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"candAddr\",\"type\":\"address\"}],\"name\":\"getCandidateVoters\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"voterAddr\",\"type\":\"address\"}],\"name\":\"getElectionVoter\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.7.4+commit.3f05b770\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"managerOfVote\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"typeOf\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"constructor\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"candidateArray\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"candidateAddr\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"numVotes\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"candidates\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"candidateAddr\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"numVotes\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"candidatesAddresses\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"candidatesCount\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"currentElection\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"title\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"startDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"endDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"numVotes\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"typeOfElection\\\",\\\"type\\\":\\\"string\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"currentPetition\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"title\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"startDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"endDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"numSigned\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"title\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"startDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"endDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"typeOfElection\\\",\\\"type\\\":\\\"string\\\"}],\\\"name\\\":\\\"editElection\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"title\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"startDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"endDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"}],\\\"name\\\":\\\"editPetition\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"current_date\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"enterElection\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"candAddr\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"getCandidateVoters\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address[]\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address[]\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"voterAddr\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"getElectionVoter\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"candaddr\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"get_candidates\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"current_date\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"leaveElection\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"manager\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"candidateAddress\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"voteFor\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"}],\\\"devdoc\\\":{\\\"kind\\\":\\\"dev\\\",\\\"methods\\\":{},\\\"version\\\":1},\\\"userdoc\\\":{\\\"kind\\\":\\\"user\\\",\\\"methods\\\":{},\\\"version\\\":1}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"/home/wen_wong/voting-at-mcgill/contracts/Vote.sol\\\":\\\"Vote\\\"},\\\"evmVersion\\\":\\\"istanbul\\\",\\\"libraries\\\":{},\\\"metadata\\\":{\\\"bytecodeHash\\\":\\\"ipfs\\\"},\\\"optimizer\\\":{\\\"enabled\\\":false,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"/home/wen_wong/voting-at-mcgill/contracts/Vote.sol\\\":{\\\"keccak256\\\":\\\"0x112a144e4fe76d032cc1d7c9c1b0a2d4c2e8d7734f1793238f0a6e8dad05b1da\\\",\\\"license\\\":\\\"UNLICENSED\\\",\\\"urls\\\":[\\\"bzz-raw://fc939b602e2ed5db218964b9ba7d5fa4f6f656f815dccc2752b378d19a569ff6\\\",\\\"dweb:/ipfs/QmT67z4FAa17s2CkYUhPFC2UWbChv5MxiitEkBTgJjaUyn\\\"]}},\\\"version\\\":1}\",\"bytecode\":\"0x608060405234801561001057600080fd5b506040516124333803806124338339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060001461009d5760016100a0565b60005b60ff166002819055505050612379806100ba6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80638ab66a9011610097578063da3550ee11610066578063da3550ee146109de578063dcfda00f14610a22578063e1c5fcc114610c1f578063fcae83a714610c79576100f5565b80638ab66a90146106a157806395115447146107ee578063ad0dcf9c14610887578063af47fb3f146109b0576100f5565b806367127e43116100d357806367127e4314610283578063691a675c146103e95780637432e63a146104ed578063869eae2314610545576100f5565b80632d35a8a2146100fa57806335a893a114610118578063481c6a751461024f575b600080fd5b610102610de9565b6040518082815260200191505060405180910390f35b6101446004803603602081101561012e57600080fd5b8101908080359060200190929190505050610def565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156101aa57808201518184015260208101905061018f565b50505050905090810190601f1680156101d75780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156102105780820151818401526020810190506101f5565b50505050905090810190601f16801561023d5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b610257610f7f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103e76004803603608081101561029957600080fd5b81019080803590602001906401000000008111156102b657600080fd5b8201836020820111156102c857600080fd5b803590602001918460018302840111640100000000831117156102ea57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803590602001909291908035906020019064010000000081111561036157600080fd5b82018360208201111561037357600080fd5b8035906020019184600183028401116401000000008311171561039557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610fa3565b005b6103f161105b565b604051808060200186815260200185815260200180602001848152602001838103835288818151815260200191508051906020019080838360005b8381101561044757808201518184015260208101905061042c565b50505050905090810190601f1680156104745780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b838110156104ad578082015181840152602081019050610492565b50505050905090810190601f1680156104da5780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b6105196004803603602081101561050357600080fd5b81019080803590602001909291905050506111af565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61069f6004803603606081101561055b57600080fd5b810190808035906020019064010000000081111561057857600080fd5b82018360208201111561058a57600080fd5b803590602001918460018302840111640100000000831117156105ac57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561060f57600080fd5b82018360208201111561062157600080fd5b8035906020019184600183028401116401000000008311171561064357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291905050506111ee565b005b6106e3600480360360208110156106b757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113f4565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561074957808201518184015260208101905061072e565b50505050905090810190601f1680156107765780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156107af578082015181840152602081019050610794565b50505050905090810190601f1680156107dc5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b6108306004803603602081101561080457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611574565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610873578082015181840152602081019050610858565b505050509050019250505060405180910390f35b6108c96004803603602081101561089d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611653565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b8381101561090d5780820151818401526020810190506108f2565b50505050905090810190601f16801561093a5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015610973578082015181840152602081019050610958565b50505050905090810190601f1680156109a05780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b6109dc600480360360208110156109c657600080fd5b810190808035906020019092919050505061182a565b005b610a20600480360360208110156109f457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611bb5565b005b610c1d600480360360a0811015610a3857600080fd5b8101908080359060200190640100000000811115610a5557600080fd5b820183602082011115610a6757600080fd5b80359060200191846001830284011164010000000083111715610a8957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291908035906020019092919080359060200190640100000000811115610b0057600080fd5b820183602082011115610b1257600080fd5b80359060200191846001830284011164010000000083111715610b3457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610b9757600080fd5b820183602082011115610ba957600080fd5b80359060200191846001830284011164010000000083111715610bcb57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611e1e565b005b610c6160048036036020811015610c3557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611ef0565b60405180821515815260200191505060405180910390f35b610c81611f56565b6040518080602001878152602001868152602001806020018581526020018060200184810384528a818151815260200191508051906020019080838360005b83811015610cdb578082015181840152602081019050610cc0565b50505050905090810190601f168015610d085780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610d41578082015181840152602081019050610d26565b50505050905090810190601f168015610d6e5780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b83811015610da7578082015181840152602081019050610d8c565b50505050905090810190601f168015610dd45780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b60015481565b60048181548110610dff57600080fd5b90600052602060002090600502016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ed75780601f10610eac57610100808354040283529160200191610ed7565b820191906000526020600020905b815481529060010190602001808311610eba57829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f755780601f10610f4a57610100808354040283529160200191610f75565b820191906000526020600020905b815481529060010190602001808311610f5857829003601f168201915b5050505050905084565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ffb57600080fd5b60016002541461100a57600080fd5b6000600d905084816000019080519060200190611028929190612148565b5083816001018190555082816002018190555081816003019080519060200190611053929190612148565b505050505050565b600d806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110f55780601f106110ca576101008083540402835291602001916110f5565b820191906000526020600020905b8154815290600101906020018083116110d857829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561119f5780601f106111745761010080835404028352916020019161119f565b820191906000526020600020905b81548152906001019060200180831161118257829003601f168201915b5050505050908060040154905085565b600581815481106111bf57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600254146111fd57600080fd5b60066001015481118015611215575060066002015481105b61121e57600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905083816003019080519060200190611279929190612148565b5082816004019080519060200190611292929190612148565b50338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060048190806001815401808255809150506001900390600052602060002090600502016000909190919091506000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001820154816001015560028201816002019080546113899291906121d6565b50600382018160030190805460018160011615610100020316600290046113b1929190612228565b50600482018160040190805460018160011615610100020316600290046113d9929190612228565b50505060016000815480929190600101919050555050505050565b60036020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114cc5780601f106114a1576101008083540402835291602001916114cc565b820191906000526020600020905b8154815290600101906020018083116114af57829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561156a5780601f1061153f5761010080835404028352916020019161156a565b820191906000526020600020905b81548152906001019060200180831161154d57829003601f168201915b5050505050905084565b606060006002541461158557600080fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020180548060200260200160405190810160405280929190818152602001828054801561164757602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116115fd575b50505050509050919050565b60608060006002541461166557600080fd5b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401818054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561177e5780601f106117535761010080835404028352916020019161177e565b820191906000526020600020905b81548152906001019060200180831161176157829003601f168201915b50505050509150808054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561181a5780601f106117ef5761010080835404028352916020019161181a565b820191906000526020600020905b8154815290600101906020018083116117fd57829003601f168201915b5050505050905091509150915091565b60006002541461183957600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050604051806020016040528060008152508160030190805190602001906118a3929190612148565b50604051806020016040528060008152508160040190805190602001906118cb929190612148565b50600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000905560028201600061194b91906122bd565b60038201600061195b91906122de565b60048201600061196b91906122de565b505060005b600480549050811015611b9d576004818154811061198a57fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415611b9057600460016004805490500381548110611a0457fe5b906000526020600020906005020160048281548110611a1f57fe5b90600052602060002090600502016000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600182015481600101556002820181600201908054611ab49291906121d6565b5060038201816003019080546001816001161561010002031660029004611adc929190612228565b5060048201816004019080546001816001161561010002031660029004611b04929190612228565b509050506004805480611b1357fe5b6001900381819060005260206000209060050201600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160009055600282016000611b6791906122bd565b600382016000611b7791906122de565b600482016000611b8791906122de565b50509055611b9d565b8080600101915050611970565b50600160008154809291906001900391905055505050565b600060025414611bc457600080fd5b600015156006800160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151415611e1b57600073ffffffffffffffffffffffffffffffffffffffff16600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611e1a5760016006800160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600660040160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611e7657600080fd5b600060025414611e8557600080fd5b60006006905085816000019080519060200190611ea3929190612148565b5084816001018190555083816002018190555082816003019080519060200190611ece929190612148565b5081816005019080519060200190611ee7929190612148565b50505050505050565b60008060025414611f0057600080fd5b6006800160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6006806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611ff05780601f10611fc557610100808354040283529160200191611ff0565b820191906000526020600020905b815481529060010190602001808311611fd357829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561209a5780601f1061206f5761010080835404028352916020019161209a565b820191906000526020600020905b81548152906001019060200180831161207d57829003601f168201915b505050505090806004015490806005018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561213e5780601f106121135761010080835404028352916020019161213e565b820191906000526020600020905b81548152906001019060200180831161212157829003601f168201915b5050505050905086565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928261217e57600085556121c5565b82601f1061219757805160ff19168380011785556121c5565b828001600101855582156121c5579182015b828111156121c45782518255916020019190600101906121a9565b5b5090506121d29190612326565b5090565b8280548282559060005260206000209081019282156122175760005260206000209182015b828111156122165782548255916001019190600101906121fb565b5b5090506122249190612326565b5090565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928261225e57600085556122ac565b82601f1061226f57805485556122ac565b828001600101855582156122ac57600052602060002091601f016020900482015b828111156122ab578254825591600101919060010190612290565b5b5090506122b99190612326565b5090565b50805460008255906000526020600020908101906122db9190612326565b50565b50805460018160011615610100020316600290046000825580601f106123045750612323565b601f0160209004906000526020600020908101906123229190612326565b5b50565b5b8082111561233f576000816000905550600101612327565b509056fea264697066735822122004c0e30aff92258bab81bae02f898dea3dd636d23cf07367da17c9f145fdd59164736f6c63430007040033\",\"deployedBytecode\":\"0x608060405234801561001057600080fd5b50600436106100f55760003560e01c80638ab66a9011610097578063da3550ee11610066578063da3550ee146109de578063dcfda00f14610a22578063e1c5fcc114610c1f578063fcae83a714610c79576100f5565b80638ab66a90146106a157806395115447146107ee578063ad0dcf9c14610887578063af47fb3f146109b0576100f5565b806367127e43116100d357806367127e4314610283578063691a675c146103e95780637432e63a146104ed578063869eae2314610545576100f5565b80632d35a8a2146100fa57806335a893a114610118578063481c6a751461024f575b600080fd5b610102610de9565b6040518082815260200191505060405180910390f35b6101446004803603602081101561012e57600080fd5b8101908080359060200190929190505050610def565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156101aa57808201518184015260208101905061018f565b50505050905090810190601f1680156101d75780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156102105780820151818401526020810190506101f5565b50505050905090810190601f16801561023d5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b610257610f7f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103e76004803603608081101561029957600080fd5b81019080803590602001906401000000008111156102b657600080fd5b8201836020820111156102c857600080fd5b803590602001918460018302840111640100000000831117156102ea57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803590602001909291908035906020019064010000000081111561036157600080fd5b82018360208201111561037357600080fd5b8035906020019184600183028401116401000000008311171561039557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610fa3565b005b6103f161105b565b604051808060200186815260200185815260200180602001848152602001838103835288818151815260200191508051906020019080838360005b8381101561044757808201518184015260208101905061042c565b50505050905090810190601f1680156104745780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b838110156104ad578082015181840152602081019050610492565b50505050905090810190601f1680156104da5780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b6105196004803603602081101561050357600080fd5b81019080803590602001909291905050506111af565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61069f6004803603606081101561055b57600080fd5b810190808035906020019064010000000081111561057857600080fd5b82018360208201111561058a57600080fd5b803590602001918460018302840111640100000000831117156105ac57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561060f57600080fd5b82018360208201111561062157600080fd5b8035906020019184600183028401116401000000008311171561064357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291905050506111ee565b005b6106e3600480360360208110156106b757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113f4565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561074957808201518184015260208101905061072e565b50505050905090810190601f1680156107765780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156107af578082015181840152602081019050610794565b50505050905090810190601f1680156107dc5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b6108306004803603602081101561080457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611574565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610873578082015181840152602081019050610858565b505050509050019250505060405180910390f35b6108c96004803603602081101561089d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611653565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b8381101561090d5780820151818401526020810190506108f2565b50505050905090810190601f16801561093a5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015610973578082015181840152602081019050610958565b50505050905090810190601f1680156109a05780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b6109dc600480360360208110156109c657600080fd5b810190808035906020019092919050505061182a565b005b610a20600480360360208110156109f457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611bb5565b005b610c1d600480360360a0811015610a3857600080fd5b8101908080359060200190640100000000811115610a5557600080fd5b820183602082011115610a6757600080fd5b80359060200191846001830284011164010000000083111715610a8957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291908035906020019092919080359060200190640100000000811115610b0057600080fd5b820183602082011115610b1257600080fd5b80359060200191846001830284011164010000000083111715610b3457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610b9757600080fd5b820183602082011115610ba957600080fd5b80359060200191846001830284011164010000000083111715610bcb57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611e1e565b005b610c6160048036036020811015610c3557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611ef0565b60405180821515815260200191505060405180910390f35b610c81611f56565b6040518080602001878152602001868152602001806020018581526020018060200184810384528a818151815260200191508051906020019080838360005b83811015610cdb578082015181840152602081019050610cc0565b50505050905090810190601f168015610d085780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610d41578082015181840152602081019050610d26565b50505050905090810190601f168015610d6e5780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b83811015610da7578082015181840152602081019050610d8c565b50505050905090810190601f168015610dd45780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b60015481565b60048181548110610dff57600080fd5b90600052602060002090600502016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ed75780601f10610eac57610100808354040283529160200191610ed7565b820191906000526020600020905b815481529060010190602001808311610eba57829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f755780601f10610f4a57610100808354040283529160200191610f75565b820191906000526020600020905b815481529060010190602001808311610f5857829003601f168201915b5050505050905084565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ffb57600080fd5b60016002541461100a57600080fd5b6000600d905084816000019080519060200190611028929190612148565b5083816001018190555082816002018190555081816003019080519060200190611053929190612148565b505050505050565b600d806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110f55780601f106110ca576101008083540402835291602001916110f5565b820191906000526020600020905b8154815290600101906020018083116110d857829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561119f5780601f106111745761010080835404028352916020019161119f565b820191906000526020600020905b81548152906001019060200180831161118257829003601f168201915b5050505050908060040154905085565b600581815481106111bf57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600254146111fd57600080fd5b60066001015481118015611215575060066002015481105b61121e57600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905083816003019080519060200190611279929190612148565b5082816004019080519060200190611292929190612148565b50338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060048190806001815401808255809150506001900390600052602060002090600502016000909190919091506000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001820154816001015560028201816002019080546113899291906121d6565b50600382018160030190805460018160011615610100020316600290046113b1929190612228565b50600482018160040190805460018160011615610100020316600290046113d9929190612228565b50505060016000815480929190600101919050555050505050565b60036020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114cc5780601f106114a1576101008083540402835291602001916114cc565b820191906000526020600020905b8154815290600101906020018083116114af57829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561156a5780601f1061153f5761010080835404028352916020019161156a565b820191906000526020600020905b81548152906001019060200180831161154d57829003601f168201915b5050505050905084565b606060006002541461158557600080fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020180548060200260200160405190810160405280929190818152602001828054801561164757602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116115fd575b50505050509050919050565b60608060006002541461166557600080fd5b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401818054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561177e5780601f106117535761010080835404028352916020019161177e565b820191906000526020600020905b81548152906001019060200180831161176157829003601f168201915b50505050509150808054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561181a5780601f106117ef5761010080835404028352916020019161181a565b820191906000526020600020905b8154815290600101906020018083116117fd57829003601f168201915b5050505050905091509150915091565b60006002541461183957600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050604051806020016040528060008152508160030190805190602001906118a3929190612148565b50604051806020016040528060008152508160040190805190602001906118cb929190612148565b50600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000905560028201600061194b91906122bd565b60038201600061195b91906122de565b60048201600061196b91906122de565b505060005b600480549050811015611b9d576004818154811061198a57fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415611b9057600460016004805490500381548110611a0457fe5b906000526020600020906005020160048281548110611a1f57fe5b90600052602060002090600502016000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600182015481600101556002820181600201908054611ab49291906121d6565b5060038201816003019080546001816001161561010002031660029004611adc929190612228565b5060048201816004019080546001816001161561010002031660029004611b04929190612228565b509050506004805480611b1357fe5b6001900381819060005260206000209060050201600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160009055600282016000611b6791906122bd565b600382016000611b7791906122de565b600482016000611b8791906122de565b50509055611b9d565b8080600101915050611970565b50600160008154809291906001900391905055505050565b600060025414611bc457600080fd5b600015156006800160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151415611e1b57600073ffffffffffffffffffffffffffffffffffffffff16600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611e1a5760016006800160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600660040160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611e7657600080fd5b600060025414611e8557600080fd5b60006006905085816000019080519060200190611ea3929190612148565b5084816001018190555083816002018190555082816003019080519060200190611ece929190612148565b5081816005019080519060200190611ee7929190612148565b50505050505050565b60008060025414611f0057600080fd5b6006800160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6006806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611ff05780601f10611fc557610100808354040283529160200191611ff0565b820191906000526020600020905b815481529060010190602001808311611fd357829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561209a5780601f1061206f5761010080835404028352916020019161209a565b820191906000526020600020905b81548152906001019060200180831161207d57829003601f168201915b505050505090806004015490806005018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561213e5780601f106121135761010080835404028352916020019161213e565b820191906000526020600020905b81548152906001019060200180831161212157829003601f168201915b5050505050905086565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928261217e57600085556121c5565b82601f1061219757805160ff19168380011785556121c5565b828001600101855582156121c5579182015b828111156121c45782518255916020019190600101906121a9565b5b5090506121d29190612326565b5090565b8280548282559060005260206000209081019282156122175760005260206000209182015b828111156122165782548255916001019190600101906121fb565b5b5090506122249190612326565b5090565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928261225e57600085556122ac565b82601f1061226f57805485556122ac565b828001600101855582156122ac57600052602060002091601f016020900482015b828111156122ab578254825591600101919060010190612290565b5b5090506122b99190612326565b5090565b50805460008255906000526020600020908101906122db9190612326565b50565b50805460018160011615610100020316600290046000825580601f106123045750612323565b601f0160209004906000526020600020908101906123229190612326565b5b50565b5b8082111561233f576000816000905550600101612327565b509056fea264697066735822122004c0e30aff92258bab81bae02f898dea3dd636d23cf07367da17c9f145fdd59164736f6c63430007040033\",\"immutableReferences\":{},\"generatedSources\":[],\"deployedGeneratedSources\":[],\"sourceMap\":\"65:5136:1:-:0;;;1453:189;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1578:13;1568:7;;:23;;;;;;;;;;;;;;;;;;1620:6;1615:1;:11;1614:21;;1634:1;1614:21;;;1630:1;1614:21;1601:34;;:10;:34;;;;1453:189;;65:5136;;;;;;\",\"deployedSourceMap\":\"65:5136:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;132:27;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1266:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;104:22;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;2046:319;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1415:31;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1305:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;2885:679;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1167:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4648:152;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4453:190;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3595:838;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2394:459;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1648:392;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;4805:146;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;1378:31;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;132:27;;;;:::o;1266:33::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;104:22::-;;;;;;;;;;;;:::o;2046:319::-;5010:7;;;;;;;;;;4996:21;;:10;:21;;;4988:30;;;;;;5178:1:::1;5164:10;;:15;5156:24;;;::::0;::::1;;2198:18:::2;2219:15;2198:36;;2254:5;2244:1;:7;;:15;;;;;;;;;;;;:::i;:::-;;2283:9;2269:1;:11;;:23;;;;2314:7;2302:1;:9;;:19;;;;2347:11;2331:1;:13;;:27;;;;;;;;;;;;:::i;:::-;;5190:1;2046:319:::0;;;;:::o;1415:31::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1305:36::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2885:679::-;5097:1;5083:10;;:15;5075:24;;;;;;3102:15:::1;:25;;;3087:12;:40;:82;;;;;3146:15;:23;;;3131:12;:38;3087:82;3079:91;;;::::0;::::1;;3206:34;3243:10;:22;3254:10;3243:22;;;;;;;;;;;;;;;3206:59;;3299:4;3275:16;:21;;:28;;;;;;;;;;;;:::i;:::-;;3344:11;3313:16;:28;;:42;;;;;;;;;;;;:::i;:::-;;3397:10;3365:16;:30;;;:42;;;;;;;;;;;;;;;;;;3450:14;3470:16;3450:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;3497:15;;:17;;;;;;;;;;;;;5109:1;2885:679:::0;;;:::o;1167:47::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;4648:152::-;4728:16;5097:1;5083:10;;:15;5075:24;;;;;;4764:10:::1;:20;4775:8;4764:20;;;;;;;;;;;;;;;4763:29;;4756:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4648:152:::0;;;:::o;4453:190::-;4529:13;4544;5097:1;5083:10;;:15;5075:24;;;;;;4576:10:::1;:20;4587:8;4576:20;;;;;;;;;;;;;;;:25;;4603:10;:20;4614:8;4603:20;;;;;;;;;;;;;;;:32;;4569:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4453:190:::0;;;:::o;3595:838::-;5097:1;5083:10;;:15;5075:24;;;;;;3873:34:::1;3910:10;:22;3921:10;3910:22;;;;;;;;;;;;;;;3873:59;;3942:26;;;;;;;;;;;::::0;:16:::1;:21;;:26;;;;;;;;;;;;:::i;:::-;;3978:33;;;;;;;;;;;::::0;:16:::1;:28;;:33;;;;;;;;;;;;:::i;:::-;;4100:10;:22;4111:10;4100:22;;;;;;;;;;;;;;;;4093:29:::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;4137:6;4132:268;4151:14;:21;;;;4149:1;:23;4132:268;;;4207:14;4222:1;4207:17;;;;;;;;;;;;;;;;;;:31;;;;;;;;;;;;4195:43;;:10;:43;;;4192:198;;;4275:14;4312:1;4290:14;:21;;;;:23;4275:39;;;;;;;;;;;;;;;;;;4257:14;4272:1;4257:17;;;;;;;;;;;;;;;;;;:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;4332:14;:20;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;4370:5;;4192:198;4174:3;;;;;;;4132:268;;;;4409:15;;:17;;;;;;;;;;;;;;5109:1;3595:838:::0;:::o;2394:459::-;5097:1;5083:10;;:15;5075:24;;;;;;2507:5:::1;2469:43;;:15;:22:::0;::::1;:34;2492:10;2469:34;;;;;;;;;;;;;;;;;;;;;;;;;:43;;;2466:381;;;2584:1;2530:56;;:10;:28;2541:16;2530:28;;;;;;;;;;;;;;;:42;;;;;;;;;;;;:56;;;2527:310;;2643:4;2605:15;:22:::0;::::1;:34;2628:10;2605:34;;;;;;;;;;;;;;;;:42;;;;;;;;;;;;;;;;;;2665:15;:24;;;:26;;;;;;;;;;;;;2710:10;:28;2721:16;2710:28;;;;;;;;;;;;;;;2709:39;;;:41;;;;;;;;;;;;;2769:10;:28;2780:16;2769:28;;;;;;;;;;;;;;;2768:37;;2811:10;2768:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2527:310;2466:381;2394:459:::0;:::o;1648:392::-;5010:7;;;;;;;;;;4996:21;;:10;:21;;;4988:30;;;;;;5097:1:::1;5083:10;;:15;5075:24;;;::::0;::::1;;1830:18:::2;1851:15;1830:36;;1886:5;1876:1;:7;;:15;;;;;;;;;;;;:::i;:::-;;1915:9;1901:1;:11;;:23;;;;1946:7;1934:1;:9;;:19;;;;1979:11;1963:1;:13;;:27;;;;;;;;;;;;:::i;:::-;;2019:14;2000:1;:16;;:33;;;;;;;;;;;;:::i;:::-;;5109:1;1648:392:::0;;;;;:::o;4805:146::-;4884:4;5097:1;5083:10;;:15;5075:24;;;;;;4909:15:::1;:22:::0;::::1;4908:35;4933:9;4908:35;;;;;;;;;;;;;;;;;;;;;;;;;4900:44;;4805:146:::0;;;:::o;1378:31::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o\",\"source\":\"pragma solidity ^0.7.4;\\n//\\\"SPDX-License-Identifier: UNLICENSED\\\"\\n\\ncontract Vote{\\n    //admin address\\n    address public manager;\\n    uint public candidatesCount;\\n\\n    struct user{\\n        string name;\\n        string email;\\n        string password;\\n        address userAddress;\\n        address[] running;\\n        address[] createdElection;\\n        address[] createdPetition;\\n        string userType;\\n    }\\n\\n    struct candidate {\\n        address candidateAddr;\\n        uint numVotes;\\n        address[] voters;\\n        string name;\\n        string description;\\n    }\\n\\n    struct election {\\n        string title;\\n        uint startDate;\\n        uint endDate;\\n        string description;\\n        //think about mapping?\\n        uint numVotes;\\n        string typeOfElection;\\n        mapping(address => bool) voters ; //see if a voter has voted\\n    }\\n    struct petition{\\n        string title;\\n        uint startDate;\\n        uint endDate;\\n        string description;\\n        uint numSigned;\\n        mapping(address=>bool) signed; //see if a user has signed\\n    }\\n    uint typeOfVote; //0 for election and 1 for petition\\n    // mapping(uint => election) public elections;\\n    mapping(address => candidate) public candidates; //maps a candidate's address to the candidate\\n    candidate[] public candidateArray;\\n    address[] public candidatesAddresses;//should replace candidateArray\\n    election public currentElection;\\n    petition public currentPetition;\\n\\n    constructor (address managerOfVote, uint typeOf){   //how does one become an admin?\\n        // constructor\\n        manager = managerOfVote;\\n        typeOfVote = (0 == typeOf) ? 0 : 1;\\n    }\\n\\n    function editElection (string memory title, uint256 startDate, uint256 endDate, string memory description, string memory typeOfElection)\\n    public restricted typeElection {\\n        election storage e = currentElection;\\n        e.title = title;\\n        e.startDate = startDate;\\n        e.endDate = endDate;\\n        e.description = description;\\n        e.typeOfElection = typeOfElection;\\n    }\\n\\n    function editPetition (string memory title, uint256 startDate, uint256 endDate, string memory description)\\n    public restricted typePetition {\\n        petition storage p = currentPetition;\\n        p.title = title;\\n        p.startDate = startDate;\\n        p.endDate = endDate;\\n        p.description = description;\\n    }\\n //vote for a candidate\\n    function voteFor(address candidateAddress) public typeElection{\\n        if(currentElection.voters[msg.sender] == false){\\n            if(candidates[candidateAddress].candidateAddr != address(0)){\\n                currentElection.voters[msg.sender]  = true;\\n                currentElection.numVotes++;\\n                (candidates[candidateAddress]).numVotes++;\\n                (candidates[candidateAddress]).voters.push(msg.sender);\\n            }\\n        }\\n    }\\n    //enter as a candidate\\n    function enterElection(string memory name, string memory description, uint256 current_date)\\n    public typeElection {\\n        //Check if the registration is before the required deadline\\n        require(current_date > currentElection.startDate && current_date < currentElection.endDate);\\n        //enter candidate\\n        candidate storage currentCandidate = candidates[msg.sender];\\n        currentCandidate.name = name;\\n        currentCandidate.description = description;\\n        currentCandidate.candidateAddr= msg.sender;\\n        currentCandidate.voters;\\n        candidateArray.push(currentCandidate);\\n        candidatesCount++;\\n        //candidateAddrs.push(msg.sender);\\n    }\\n\\n    //leave the election\\n    function leaveElection(uint256 current_date)\\n    public typeElection {\\n        //Check if the registration is before the required deadline\\n        //require(current_date > currentElection.startDate && current_date <= currentElection.endDate);\\n        //remove candidate\\n        candidate storage currentCandidate = candidates[msg.sender];\\n        currentCandidate.name = \\\"\\\";\\n        currentCandidate.description = \\\"\\\";\\n        //currentCandidate.candidateAddr= ;\\n        //remove from array\\n        delete candidates[msg.sender];\\n        for (uint i = 0; i<candidateArray.length; i++){\\n            if(msg.sender==candidateArray[i].candidateAddr){\\n                candidateArray[i]=candidateArray[candidateArray.length-1];\\n                candidateArray.pop();\\n                break;\\n            }\\n        }\\n        candidatesCount--;\\n    }\\n\\n    //GETTERS\\n    function get_candidates(address candaddr) public view typeElection returns (string memory, string memory) {\\n        return(candidates[candaddr].name, candidates[candaddr].description);\\n    }\\n    function getCandidateVoters(address candAddr) public view typeElection returns (address[] memory) {\\n        return((candidates[candAddr]).voters);\\n    }\\n    function getElectionVoter(address voterAddr) public view typeElection returns (bool) {\\n        return ((currentElection.voters)[voterAddr]);\\n    }\\n    modifier restricted() {\\n        require(msg.sender == manager);\\n        _;\\n    }\\n    modifier typeElection() {\\n        require(typeOfVote == 0);\\n        _;\\n    }\\n    modifier typePetition() {\\n        require(typeOfVote == 1);\\n        _;\\n    }\\n\\n}\\n\",\"sourcePath\":\"/home/wen_wong/voting-at-mcgill/contracts/Vote.sol\",\"ast\":{\"absolutePath\":\"/home/wen_wong/voting-at-mcgill/contracts/Vote.sol\",\"exportedSymbols\":{\"Vote\":[526]},\"id\":527,\"license\":\"UNLICENSED\",\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":38,\"literals\":[\"solidity\",\"^\",\"0.7\",\".4\"],\"nodeType\":\"PragmaDirective\",\"src\":\"0:23:1\"},{\"abstract\":false,\"baseContracts\":[],\"contractDependencies\":[],\"contractKind\":\"contract\",\"fullyImplemented\":true,\"id\":526,\"linearizedBaseContracts\":[526],\"name\":\"Vote\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"constant\":false,\"functionSelector\":\"481c6a75\",\"id\":40,\"mutability\":\"mutable\",\"name\":\"manager\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"104:22:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":39,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"104:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"2d35a8a2\",\"id\":42,\"mutability\":\"mutable\",\"name\":\"candidatesCount\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"132:27:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":41,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"132:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"public\"},{\"canonicalName\":\"Vote.user\",\"id\":62,\"members\":[{\"constant\":false,\"id\":44,\"mutability\":\"mutable\",\"name\":\"name\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"187:11:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":43,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"187:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":46,\"mutability\":\"mutable\",\"name\":\"email\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"208:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":45,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"208:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":48,\"mutability\":\"mutable\",\"name\":\"password\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"230:15:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":47,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"230:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":50,\"mutability\":\"mutable\",\"name\":\"userAddress\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"255:19:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":49,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"255:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":53,\"mutability\":\"mutable\",\"name\":\"running\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"284:17:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":51,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"284:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":52,\"nodeType\":\"ArrayTypeName\",\"src\":\"284:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":56,\"mutability\":\"mutable\",\"name\":\"createdElection\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"311:25:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":54,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"311:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":55,\"nodeType\":\"ArrayTypeName\",\"src\":\"311:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":59,\"mutability\":\"mutable\",\"name\":\"createdPetition\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"346:25:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":57,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"346:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":58,\"nodeType\":\"ArrayTypeName\",\"src\":\"346:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":61,\"mutability\":\"mutable\",\"name\":\"userType\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"381:15:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":60,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"381:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"name\":\"user\",\"nodeType\":\"StructDefinition\",\"scope\":526,\"src\":\"166:237:1\",\"visibility\":\"public\"},{\"canonicalName\":\"Vote.candidate\",\"id\":74,\"members\":[{\"constant\":false,\"id\":64,\"mutability\":\"mutable\",\"name\":\"candidateAddr\",\"nodeType\":\"VariableDeclaration\",\"scope\":74,\"src\":\"436:21:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":63,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"436:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":66,\"mutability\":\"mutable\",\"name\":\"numVotes\",\"nodeType\":\"VariableDeclaration\",\"scope\":74,\"src\":\"467:13:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":65,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"467:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":69,\"mutability\":\"mutable\",\"name\":\"voters\",\"nodeType\":\"VariableDeclaration\",\"scope\":74,\"src\":\"490:16:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":67,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"490:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":68,\"nodeType\":\"ArrayTypeName\",\"src\":\"490:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":71,\"mutability\":\"mutable\",\"name\":\"name\",\"nodeType\":\"VariableDeclaration\",\"scope\":74,\"src\":\"516:11:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":70,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"516:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":73,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":74,\"src\":\"537:18:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":72,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"537:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"name\":\"candidate\",\"nodeType\":\"StructDefinition\",\"scope\":526,\"src\":\"409:153:1\",\"visibility\":\"public\"},{\"canonicalName\":\"Vote.election\",\"id\":91,\"members\":[{\"constant\":false,\"id\":76,\"mutability\":\"mutable\",\"name\":\"title\",\"nodeType\":\"VariableDeclaration\",\"scope\":91,\"src\":\"594:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":75,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"594:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":78,\"mutability\":\"mutable\",\"name\":\"startDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":91,\"src\":\"616:14:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":77,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"616:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":80,\"mutability\":\"mutable\",\"name\":\"endDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":91,\"src\":\"640:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":79,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"640:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":82,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":91,\"src\":\"662:18:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":81,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"662:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":84,\"mutability\":\"mutable\",\"name\":\"numVotes\",\"nodeType\":\"VariableDeclaration\",\"scope\":91,\"src\":\"721:13:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":83,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"721:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":86,\"mutability\":\"mutable\",\"name\":\"typeOfElection\",\"nodeType\":\"VariableDeclaration\",\"scope\":91,\"src\":\"744:21:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":85,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"744:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":90,\"mutability\":\"mutable\",\"name\":\"voters\",\"nodeType\":\"VariableDeclaration\",\"scope\":91,\"src\":\"775:31:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"},\"typeName\":{\"id\":89,\"keyType\":{\"id\":87,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"783:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"775:24:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"},\"valueType\":{\"id\":88,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"794:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}},\"visibility\":\"internal\"}],\"name\":\"election\",\"nodeType\":\"StructDefinition\",\"scope\":526,\"src\":\"568:273:1\",\"visibility\":\"public\"},{\"canonicalName\":\"Vote.petition\",\"id\":106,\"members\":[{\"constant\":false,\"id\":93,\"mutability\":\"mutable\",\"name\":\"title\",\"nodeType\":\"VariableDeclaration\",\"scope\":106,\"src\":\"871:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":92,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"871:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":95,\"mutability\":\"mutable\",\"name\":\"startDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":106,\"src\":\"893:14:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":94,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"893:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":97,\"mutability\":\"mutable\",\"name\":\"endDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":106,\"src\":\"917:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":96,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"917:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":99,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":106,\"src\":\"939:18:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":98,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"939:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":101,\"mutability\":\"mutable\",\"name\":\"numSigned\",\"nodeType\":\"VariableDeclaration\",\"scope\":106,\"src\":\"967:14:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":100,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"967:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":105,\"mutability\":\"mutable\",\"name\":\"signed\",\"nodeType\":\"VariableDeclaration\",\"scope\":106,\"src\":\"991:29:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"},\"typeName\":{\"id\":104,\"keyType\":{\"id\":102,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"999:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"991:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"},\"valueType\":{\"id\":103,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1008:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}},\"visibility\":\"internal\"}],\"name\":\"petition\",\"nodeType\":\"StructDefinition\",\"scope\":526,\"src\":\"846:208:1\",\"visibility\":\"public\"},{\"constant\":false,\"id\":108,\"mutability\":\"mutable\",\"name\":\"typeOfVote\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"1059:15:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":107,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1059:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"functionSelector\":\"8ab66a90\",\"id\":112,\"mutability\":\"mutable\",\"name\":\"candidates\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"1167:47:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate)\"},\"typeName\":{\"id\":111,\"keyType\":{\"id\":109,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1175:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"1167:29:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate)\"},\"valueType\":{\"id\":110,\"name\":\"candidate\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":74,\"src\":\"1186:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate\"}}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"35a893a1\",\"id\":115,\"mutability\":\"mutable\",\"name\":\"candidateArray\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"1266:33:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_struct$_candidate_$74_storage_$dyn_storage\",\"typeString\":\"struct Vote.candidate[]\"},\"typeName\":{\"baseType\":{\"id\":113,\"name\":\"candidate\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":74,\"src\":\"1266:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate\"}},\"id\":114,\"nodeType\":\"ArrayTypeName\",\"src\":\"1266:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_struct$_candidate_$74_storage_$dyn_storage_ptr\",\"typeString\":\"struct Vote.candidate[]\"}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"7432e63a\",\"id\":118,\"mutability\":\"mutable\",\"name\":\"candidatesAddresses\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"1305:36:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":116,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1305:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":117,\"nodeType\":\"ArrayTypeName\",\"src\":\"1305:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"fcae83a7\",\"id\":120,\"mutability\":\"mutable\",\"name\":\"currentElection\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"1378:31:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election\"},\"typeName\":{\"id\":119,\"name\":\"election\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":91,\"src\":\"1378:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election\"}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"691a675c\",\"id\":122,\"mutability\":\"mutable\",\"name\":\"currentPetition\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"1415:31:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage\",\"typeString\":\"struct Vote.petition\"},\"typeName\":{\"id\":121,\"name\":\"petition\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":106,\"src\":\"1415:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage_ptr\",\"typeString\":\"struct Vote.petition\"}},\"visibility\":\"public\"},{\"body\":{\"id\":143,\"nodeType\":\"Block\",\"src\":\"1501:141:1\",\"statements\":[{\"expression\":{\"id\":131,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":129,\"name\":\"manager\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":40,\"src\":\"1568:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":130,\"name\":\"managerOfVote\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":124,\"src\":\"1578:13:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"1568:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":132,\"nodeType\":\"ExpressionStatement\",\"src\":\"1568:23:1\"},{\"expression\":{\"id\":141,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":133,\"name\":\"typeOfVote\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":108,\"src\":\"1601:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"condition\":{\"components\":[{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":136,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"hexValue\":\"30\",\"id\":134,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1615:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"id\":135,\"name\":\"typeOf\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":126,\"src\":\"1620:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"1615:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"id\":137,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"1614:13:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"falseExpression\":{\"hexValue\":\"31\",\"id\":139,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1634:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"id\":140,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"Conditional\",\"src\":\"1614:21:1\",\"trueExpression\":{\"hexValue\":\"30\",\"id\":138,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1630:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint8\",\"typeString\":\"uint8\"}},\"src\":\"1601:34:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":142,\"nodeType\":\"ExpressionStatement\",\"src\":\"1601:34:1\"}]},\"id\":144,\"implemented\":true,\"kind\":\"constructor\",\"modifiers\":[],\"name\":\"\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":127,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":124,\"mutability\":\"mutable\",\"name\":\"managerOfVote\",\"nodeType\":\"VariableDeclaration\",\"scope\":144,\"src\":\"1466:21:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":123,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1466:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":126,\"mutability\":\"mutable\",\"name\":\"typeOf\",\"nodeType\":\"VariableDeclaration\",\"scope\":144,\"src\":\"1489:11:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":125,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1489:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"1465:36:1\"},\"returnParameters\":{\"id\":128,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1501:0:1\"},\"scope\":526,\"src\":\"1453:189:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":195,\"nodeType\":\"Block\",\"src\":\"1820:220:1\",\"statements\":[{\"assignments\":[162],\"declarations\":[{\"constant\":false,\"id\":162,\"mutability\":\"mutable\",\"name\":\"e\",\"nodeType\":\"VariableDeclaration\",\"scope\":195,\"src\":\"1830:18:1\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election\"},\"typeName\":{\"id\":161,\"name\":\"election\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":91,\"src\":\"1830:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election\"}},\"visibility\":\"internal\"}],\"id\":164,\"initialValue\":{\"id\":163,\"name\":\"currentElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":120,\"src\":\"1851:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"1830:36:1\"},{\"expression\":{\"id\":169,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":165,\"name\":\"e\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":162,\"src\":\"1876:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election storage pointer\"}},\"id\":167,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"title\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":76,\"src\":\"1876:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":168,\"name\":\"title\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":146,\"src\":\"1886:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"1876:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":170,\"nodeType\":\"ExpressionStatement\",\"src\":\"1876:15:1\"},{\"expression\":{\"id\":175,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":171,\"name\":\"e\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":162,\"src\":\"1901:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election storage pointer\"}},\"id\":173,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"startDate\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":78,\"src\":\"1901:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":174,\"name\":\"startDate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":148,\"src\":\"1915:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"1901:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":176,\"nodeType\":\"ExpressionStatement\",\"src\":\"1901:23:1\"},{\"expression\":{\"id\":181,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":177,\"name\":\"e\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":162,\"src\":\"1934:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election storage pointer\"}},\"id\":179,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"endDate\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":80,\"src\":\"1934:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":180,\"name\":\"endDate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":150,\"src\":\"1946:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"1934:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":182,\"nodeType\":\"ExpressionStatement\",\"src\":\"1934:19:1\"},{\"expression\":{\"id\":187,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":183,\"name\":\"e\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":162,\"src\":\"1963:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election storage pointer\"}},\"id\":185,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":82,\"src\":\"1963:13:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":186,\"name\":\"description\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":152,\"src\":\"1979:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"1963:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":188,\"nodeType\":\"ExpressionStatement\",\"src\":\"1963:27:1\"},{\"expression\":{\"id\":193,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":189,\"name\":\"e\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":162,\"src\":\"2000:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election storage pointer\"}},\"id\":191,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"typeOfElection\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":86,\"src\":\"2000:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":192,\"name\":\"typeOfElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":154,\"src\":\"2019:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"2000:33:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":194,\"nodeType\":\"ExpressionStatement\",\"src\":\"2000:33:1\"}]},\"functionSelector\":\"dcfda00f\",\"id\":196,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":157,\"modifierName\":{\"id\":156,\"name\":\"restricted\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":505,\"src\":\"1796:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"1796:10:1\"},{\"id\":159,\"modifierName\":{\"id\":158,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":515,\"src\":\"1807:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"1807:12:1\"}],\"name\":\"editElection\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":155,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":146,\"mutability\":\"mutable\",\"name\":\"title\",\"nodeType\":\"VariableDeclaration\",\"scope\":196,\"src\":\"1671:19:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":145,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1671:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":148,\"mutability\":\"mutable\",\"name\":\"startDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":196,\"src\":\"1692:17:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":147,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1692:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":150,\"mutability\":\"mutable\",\"name\":\"endDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":196,\"src\":\"1711:15:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":149,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1711:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":152,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":196,\"src\":\"1728:25:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":151,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1728:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":154,\"mutability\":\"mutable\",\"name\":\"typeOfElection\",\"nodeType\":\"VariableDeclaration\",\"scope\":196,\"src\":\"1755:28:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":153,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1755:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"src\":\"1670:114:1\"},\"returnParameters\":{\"id\":160,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1820:0:1\"},\"scope\":526,\"src\":\"1648:392:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":239,\"nodeType\":\"Block\",\"src\":\"2188:177:1\",\"statements\":[{\"assignments\":[212],\"declarations\":[{\"constant\":false,\"id\":212,\"mutability\":\"mutable\",\"name\":\"p\",\"nodeType\":\"VariableDeclaration\",\"scope\":239,\"src\":\"2198:18:1\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage_ptr\",\"typeString\":\"struct Vote.petition\"},\"typeName\":{\"id\":211,\"name\":\"petition\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":106,\"src\":\"2198:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage_ptr\",\"typeString\":\"struct Vote.petition\"}},\"visibility\":\"internal\"}],\"id\":214,\"initialValue\":{\"id\":213,\"name\":\"currentPetition\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":122,\"src\":\"2219:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage\",\"typeString\":\"struct Vote.petition storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"2198:36:1\"},{\"expression\":{\"id\":219,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":215,\"name\":\"p\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":212,\"src\":\"2244:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage_ptr\",\"typeString\":\"struct Vote.petition storage pointer\"}},\"id\":217,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"title\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":93,\"src\":\"2244:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":218,\"name\":\"title\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":198,\"src\":\"2254:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"2244:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":220,\"nodeType\":\"ExpressionStatement\",\"src\":\"2244:15:1\"},{\"expression\":{\"id\":225,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":221,\"name\":\"p\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":212,\"src\":\"2269:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage_ptr\",\"typeString\":\"struct Vote.petition storage pointer\"}},\"id\":223,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"startDate\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":95,\"src\":\"2269:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":224,\"name\":\"startDate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":200,\"src\":\"2283:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"2269:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":226,\"nodeType\":\"ExpressionStatement\",\"src\":\"2269:23:1\"},{\"expression\":{\"id\":231,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":227,\"name\":\"p\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":212,\"src\":\"2302:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage_ptr\",\"typeString\":\"struct Vote.petition storage pointer\"}},\"id\":229,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"endDate\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":97,\"src\":\"2302:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":230,\"name\":\"endDate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":202,\"src\":\"2314:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"2302:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":232,\"nodeType\":\"ExpressionStatement\",\"src\":\"2302:19:1\"},{\"expression\":{\"id\":237,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":233,\"name\":\"p\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":212,\"src\":\"2331:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage_ptr\",\"typeString\":\"struct Vote.petition storage pointer\"}},\"id\":235,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":99,\"src\":\"2331:13:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":236,\"name\":\"description\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":204,\"src\":\"2347:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"2331:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":238,\"nodeType\":\"ExpressionStatement\",\"src\":\"2331:27:1\"}]},\"functionSelector\":\"67127e43\",\"id\":240,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":207,\"modifierName\":{\"id\":206,\"name\":\"restricted\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":505,\"src\":\"2164:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"2164:10:1\"},{\"id\":209,\"modifierName\":{\"id\":208,\"name\":\"typePetition\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":525,\"src\":\"2175:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"2175:12:1\"}],\"name\":\"editPetition\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":205,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":198,\"mutability\":\"mutable\",\"name\":\"title\",\"nodeType\":\"VariableDeclaration\",\"scope\":240,\"src\":\"2069:19:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":197,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2069:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":200,\"mutability\":\"mutable\",\"name\":\"startDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":240,\"src\":\"2090:17:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":199,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2090:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":202,\"mutability\":\"mutable\",\"name\":\"endDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":240,\"src\":\"2109:15:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":201,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2109:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":204,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":240,\"src\":\"2126:25:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":203,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2126:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"src\":\"2068:84:1\"},\"returnParameters\":{\"id\":210,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2188:0:1\"},\"scope\":526,\"src\":\"2046:319:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":298,\"nodeType\":\"Block\",\"src\":\"2456:397:1\",\"statements\":[{\"condition\":{\"commonType\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"id\":253,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"baseExpression\":{\"expression\":{\"id\":247,\"name\":\"currentElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":120,\"src\":\"2469:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election storage ref\"}},\"id\":248,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"voters\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":90,\"src\":\"2469:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":251,\"indexExpression\":{\"expression\":{\"id\":249,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"2492:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":250,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"2492:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2469:34:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"hexValue\":\"66616c7365\",\"id\":252,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2507:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"false\"},\"src\":\"2469:43:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":297,\"nodeType\":\"IfStatement\",\"src\":\"2466:381:1\",\"trueBody\":{\"id\":296,\"nodeType\":\"Block\",\"src\":\"2513:334:1\",\"statements\":[{\"condition\":{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"id\":262,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"baseExpression\":{\"id\":254,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"2530:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":256,\"indexExpression\":{\"id\":255,\"name\":\"candidateAddress\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":242,\"src\":\"2541:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2530:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":257,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"candidateAddr\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":64,\"src\":\"2530:42:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"!=\",\"rightExpression\":{\"arguments\":[{\"hexValue\":\"30\",\"id\":260,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2584:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"}],\"id\":259,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"nodeType\":\"ElementaryTypeNameExpression\",\"src\":\"2576:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_type$_t_address_$\",\"typeString\":\"type(address)\"},\"typeName\":{\"id\":258,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2576:7:1\",\"typeDescriptions\":{}}},\"id\":261,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"typeConversion\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2576:10:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"2530:56:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":295,\"nodeType\":\"IfStatement\",\"src\":\"2527:310:1\",\"trueBody\":{\"id\":294,\"nodeType\":\"Block\",\"src\":\"2587:250:1\",\"statements\":[{\"expression\":{\"id\":270,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"expression\":{\"id\":263,\"name\":\"currentElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":120,\"src\":\"2605:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election storage ref\"}},\"id\":267,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"voters\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":90,\"src\":\"2605:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":268,\"indexExpression\":{\"expression\":{\"id\":265,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"2628:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":266,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"2628:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"2605:34:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"hexValue\":\"74727565\",\"id\":269,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2643:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"src\":\"2605:42:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":271,\"nodeType\":\"ExpressionStatement\",\"src\":\"2605:42:1\"},{\"expression\":{\"id\":275,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"2665:26:1\",\"subExpression\":{\"expression\":{\"id\":272,\"name\":\"currentElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":120,\"src\":\"2665:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election storage ref\"}},\"id\":274,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"numVotes\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":84,\"src\":\"2665:24:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":276,\"nodeType\":\"ExpressionStatement\",\"src\":\"2665:26:1\"},{\"expression\":{\"id\":282,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"2709:41:1\",\"subExpression\":{\"expression\":{\"components\":[{\"baseExpression\":{\"id\":277,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"2710:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":279,\"indexExpression\":{\"id\":278,\"name\":\"candidateAddress\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":242,\"src\":\"2721:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2710:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}}],\"id\":280,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"2709:30:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":281,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"numVotes\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":66,\"src\":\"2709:39:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":283,\"nodeType\":\"ExpressionStatement\",\"src\":\"2709:41:1\"},{\"expression\":{\"arguments\":[{\"expression\":{\"id\":290,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"2811:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":291,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"2811:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}],\"expression\":{\"expression\":{\"components\":[{\"baseExpression\":{\"id\":284,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"2769:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":286,\"indexExpression\":{\"id\":285,\"name\":\"candidateAddress\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":242,\"src\":\"2780:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2769:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}}],\"id\":287,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"2768:30:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":288,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"voters\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":69,\"src\":\"2768:37:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":289,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"push\",\"nodeType\":\"MemberAccess\",\"src\":\"2768:42:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypush_nonpayable$_t_address_$returns$__$\",\"typeString\":\"function (address)\"}},\"id\":292,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2768:54:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":293,\"nodeType\":\"ExpressionStatement\",\"src\":\"2768:54:1\"}]}}]}}]},\"functionSelector\":\"da3550ee\",\"id\":299,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":245,\"modifierName\":{\"id\":244,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":515,\"src\":\"2444:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"2444:12:1\"}],\"name\":\"voteFor\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":243,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":242,\"mutability\":\"mutable\",\"name\":\"candidateAddress\",\"nodeType\":\"VariableDeclaration\",\"scope\":299,\"src\":\"2411:24:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":241,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2411:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"src\":\"2410:26:1\"},\"returnParameters\":{\"id\":246,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2456:0:1\"},\"scope\":526,\"src\":\"2394:459:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":361,\"nodeType\":\"Block\",\"src\":\"3001:563:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"id\":319,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":314,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":311,\"name\":\"current_date\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":305,\"src\":\"3087:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\">\",\"rightExpression\":{\"expression\":{\"id\":312,\"name\":\"currentElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":120,\"src\":\"3102:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election storage ref\"}},\"id\":313,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"startDate\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":78,\"src\":\"3102:25:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"3087:40:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"&&\",\"rightExpression\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":318,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":315,\"name\":\"current_date\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":305,\"src\":\"3131:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<\",\"rightExpression\":{\"expression\":{\"id\":316,\"name\":\"currentElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":120,\"src\":\"3146:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election storage ref\"}},\"id\":317,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"endDate\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":80,\"src\":\"3146:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"3131:38:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"src\":\"3087:82:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":310,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"3079:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":320,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"3079:91:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":321,\"nodeType\":\"ExpressionStatement\",\"src\":\"3079:91:1\"},{\"assignments\":[323],\"declarations\":[{\"constant\":false,\"id\":323,\"mutability\":\"mutable\",\"name\":\"currentCandidate\",\"nodeType\":\"VariableDeclaration\",\"scope\":361,\"src\":\"3206:34:1\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate\"},\"typeName\":{\"id\":322,\"name\":\"candidate\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":74,\"src\":\"3206:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate\"}},\"visibility\":\"internal\"}],\"id\":328,\"initialValue\":{\"baseExpression\":{\"id\":324,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"3243:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":327,\"indexExpression\":{\"expression\":{\"id\":325,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3254:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":326,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"3254:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"3243:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"3206:59:1\"},{\"expression\":{\"id\":333,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":329,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":323,\"src\":\"3275:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}},\"id\":331,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":71,\"src\":\"3275:21:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":332,\"name\":\"name\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":301,\"src\":\"3299:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"3275:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":334,\"nodeType\":\"ExpressionStatement\",\"src\":\"3275:28:1\"},{\"expression\":{\"id\":339,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":335,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":323,\"src\":\"3313:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}},\"id\":337,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":73,\"src\":\"3313:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":338,\"name\":\"description\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":303,\"src\":\"3344:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"3313:42:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":340,\"nodeType\":\"ExpressionStatement\",\"src\":\"3313:42:1\"},{\"expression\":{\"id\":346,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":341,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":323,\"src\":\"3365:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}},\"id\":343,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"candidateAddr\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":64,\"src\":\"3365:30:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"expression\":{\"id\":344,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3397:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":345,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"3397:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"3365:42:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":347,\"nodeType\":\"ExpressionStatement\",\"src\":\"3365:42:1\"},{\"expression\":{\"expression\":{\"id\":348,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":323,\"src\":\"3417:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}},\"id\":350,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"voters\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":69,\"src\":\"3417:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":351,\"nodeType\":\"ExpressionStatement\",\"src\":\"3417:23:1\"},{\"expression\":{\"arguments\":[{\"id\":355,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":323,\"src\":\"3470:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}],\"expression\":{\"id\":352,\"name\":\"candidateArray\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"3450:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_struct$_candidate_$74_storage_$dyn_storage\",\"typeString\":\"struct Vote.candidate storage ref[] storage ref\"}},\"id\":354,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"push\",\"nodeType\":\"MemberAccess\",\"src\":\"3450:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypush_nonpayable$_t_struct$_candidate_$74_storage_$returns$__$\",\"typeString\":\"function (struct Vote.candidate storage ref)\"}},\"id\":356,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"3450:37:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":357,\"nodeType\":\"ExpressionStatement\",\"src\":\"3450:37:1\"},{\"expression\":{\"id\":359,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"3497:17:1\",\"subExpression\":{\"id\":358,\"name\":\"candidatesCount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":42,\"src\":\"3497:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":360,\"nodeType\":\"ExpressionStatement\",\"src\":\"3497:17:1\"}]},\"functionSelector\":\"869eae23\",\"id\":362,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":308,\"modifierName\":{\"id\":307,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":515,\"src\":\"2988:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"2988:12:1\"}],\"name\":\"enterElection\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":306,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":301,\"mutability\":\"mutable\",\"name\":\"name\",\"nodeType\":\"VariableDeclaration\",\"scope\":362,\"src\":\"2908:18:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":300,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2908:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":303,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":362,\"src\":\"2928:25:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":302,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2928:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":305,\"mutability\":\"mutable\",\"name\":\"current_date\",\"nodeType\":\"VariableDeclaration\",\"scope\":362,\"src\":\"2955:20:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":304,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2955:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"2907:69:1\"},\"returnParameters\":{\"id\":309,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"3001:0:1\"},\"scope\":526,\"src\":\"2885:679:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":436,\"nodeType\":\"Block\",\"src\":\"3664:769:1\",\"statements\":[{\"assignments\":[370],\"declarations\":[{\"constant\":false,\"id\":370,\"mutability\":\"mutable\",\"name\":\"currentCandidate\",\"nodeType\":\"VariableDeclaration\",\"scope\":436,\"src\":\"3873:34:1\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate\"},\"typeName\":{\"id\":369,\"name\":\"candidate\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":74,\"src\":\"3873:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate\"}},\"visibility\":\"internal\"}],\"id\":375,\"initialValue\":{\"baseExpression\":{\"id\":371,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"3910:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":374,\"indexExpression\":{\"expression\":{\"id\":372,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3921:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":373,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"3921:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"3910:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"3873:59:1\"},{\"expression\":{\"id\":380,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":376,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":370,\"src\":\"3942:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}},\"id\":378,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":71,\"src\":\"3942:21:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"hexValue\":\"\",\"id\":379,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"3966:2:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470\",\"typeString\":\"literal_string \\\"\\\"\"},\"value\":\"\"},\"src\":\"3942:26:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":381,\"nodeType\":\"ExpressionStatement\",\"src\":\"3942:26:1\"},{\"expression\":{\"id\":386,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":382,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":370,\"src\":\"3978:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}},\"id\":384,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":73,\"src\":\"3978:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"hexValue\":\"\",\"id\":385,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"4009:2:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470\",\"typeString\":\"literal_string \\\"\\\"\"},\"value\":\"\"},\"src\":\"3978:33:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":387,\"nodeType\":\"ExpressionStatement\",\"src\":\"3978:33:1\"},{\"expression\":{\"id\":392,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"delete\",\"prefix\":true,\"src\":\"4093:29:1\",\"subExpression\":{\"baseExpression\":{\"id\":388,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"4100:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":391,\"indexExpression\":{\"expression\":{\"id\":389,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4111:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":390,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"4111:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"4100:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":393,\"nodeType\":\"ExpressionStatement\",\"src\":\"4093:29:1\"},{\"body\":{\"id\":431,\"nodeType\":\"Block\",\"src\":\"4178:222:1\",\"statements\":[{\"condition\":{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"id\":411,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"id\":405,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4195:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":406,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"4195:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"expression\":{\"baseExpression\":{\"id\":407,\"name\":\"candidateArray\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"4207:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_struct$_candidate_$74_storage_$dyn_storage\",\"typeString\":\"struct Vote.candidate storage ref[] storage ref\"}},\"id\":409,\"indexExpression\":{\"id\":408,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":395,\"src\":\"4222:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4207:17:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":410,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"candidateAddr\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":64,\"src\":\"4207:31:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"4195:43:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":430,\"nodeType\":\"IfStatement\",\"src\":\"4192:198:1\",\"trueBody\":{\"id\":429,\"nodeType\":\"Block\",\"src\":\"4239:151:1\",\"statements\":[{\"expression\":{\"id\":421,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"id\":412,\"name\":\"candidateArray\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"4257:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_struct$_candidate_$74_storage_$dyn_storage\",\"typeString\":\"struct Vote.candidate storage ref[] storage ref\"}},\"id\":414,\"indexExpression\":{\"id\":413,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":395,\"src\":\"4272:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"4257:17:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"baseExpression\":{\"id\":415,\"name\":\"candidateArray\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"4275:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_struct$_candidate_$74_storage_$dyn_storage\",\"typeString\":\"struct Vote.candidate storage ref[] storage ref\"}},\"id\":420,\"indexExpression\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":419,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"id\":416,\"name\":\"candidateArray\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"4290:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_struct$_candidate_$74_storage_$dyn_storage\",\"typeString\":\"struct Vote.candidate storage ref[] storage ref\"}},\"id\":417,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"src\":\"4290:21:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"-\",\"rightExpression\":{\"hexValue\":\"31\",\"id\":418,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"4312:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"src\":\"4290:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4275:39:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"src\":\"4257:57:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":422,\"nodeType\":\"ExpressionStatement\",\"src\":\"4257:57:1\"},{\"expression\":{\"arguments\":[],\"expression\":{\"argumentTypes\":[],\"expression\":{\"id\":423,\"name\":\"candidateArray\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"4332:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_struct$_candidate_$74_storage_$dyn_storage\",\"typeString\":\"struct Vote.candidate storage ref[] storage ref\"}},\"id\":425,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"pop\",\"nodeType\":\"MemberAccess\",\"src\":\"4332:18:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypop_nonpayable$__$returns$__$\",\"typeString\":\"function ()\"}},\"id\":426,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"4332:20:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":427,\"nodeType\":\"ExpressionStatement\",\"src\":\"4332:20:1\"},{\"id\":428,\"nodeType\":\"Break\",\"src\":\"4370:5:1\"}]}}]},\"condition\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":401,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":398,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":395,\"src\":\"4149:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<\",\"rightExpression\":{\"expression\":{\"id\":399,\"name\":\"candidateArray\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"4151:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_struct$_candidate_$74_storage_$dyn_storage\",\"typeString\":\"struct Vote.candidate storage ref[] storage ref\"}},\"id\":400,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"src\":\"4151:21:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"4149:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":432,\"initializationExpression\":{\"assignments\":[395],\"declarations\":[{\"constant\":false,\"id\":395,\"mutability\":\"mutable\",\"name\":\"i\",\"nodeType\":\"VariableDeclaration\",\"scope\":432,\"src\":\"4137:6:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":394,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4137:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"id\":397,\"initialValue\":{\"hexValue\":\"30\",\"id\":396,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"4146:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"4137:10:1\"},\"loopExpression\":{\"expression\":{\"id\":403,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"4174:3:1\",\"subExpression\":{\"id\":402,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":395,\"src\":\"4174:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":404,\"nodeType\":\"ExpressionStatement\",\"src\":\"4174:3:1\"},\"nodeType\":\"ForStatement\",\"src\":\"4132:268:1\"},{\"expression\":{\"id\":434,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"--\",\"prefix\":false,\"src\":\"4409:17:1\",\"subExpression\":{\"id\":433,\"name\":\"candidatesCount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":42,\"src\":\"4409:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":435,\"nodeType\":\"ExpressionStatement\",\"src\":\"4409:17:1\"}]},\"functionSelector\":\"af47fb3f\",\"id\":437,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":367,\"modifierName\":{\"id\":366,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":515,\"src\":\"3651:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"3651:12:1\"}],\"name\":\"leaveElection\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":365,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":364,\"mutability\":\"mutable\",\"name\":\"current_date\",\"nodeType\":\"VariableDeclaration\",\"scope\":437,\"src\":\"3618:20:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":363,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3618:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"3617:22:1\"},\"returnParameters\":{\"id\":368,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"3664:0:1\"},\"scope\":526,\"src\":\"3595:838:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":458,\"nodeType\":\"Block\",\"src\":\"4559:84:1\",\"statements\":[{\"expression\":{\"components\":[{\"expression\":{\"baseExpression\":{\"id\":448,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"4576:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":450,\"indexExpression\":{\"id\":449,\"name\":\"candaddr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":439,\"src\":\"4587:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4576:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":451,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":71,\"src\":\"4576:25:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},{\"expression\":{\"baseExpression\":{\"id\":452,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"4603:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":454,\"indexExpression\":{\"id\":453,\"name\":\"candaddr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":439,\"src\":\"4614:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4603:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":455,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":73,\"src\":\"4603:32:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}}],\"id\":456,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"4575:61:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$_t_string_storage_$_t_string_storage_$\",\"typeString\":\"tuple(string storage ref,string storage ref)\"}},\"functionReturnParameters\":447,\"id\":457,\"nodeType\":\"Return\",\"src\":\"4569:67:1\"}]},\"functionSelector\":\"ad0dcf9c\",\"id\":459,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":442,\"modifierName\":{\"id\":441,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":515,\"src\":\"4507:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"4507:12:1\"}],\"name\":\"get_candidates\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":440,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":439,\"mutability\":\"mutable\",\"name\":\"candaddr\",\"nodeType\":\"VariableDeclaration\",\"scope\":459,\"src\":\"4477:16:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":438,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4477:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"src\":\"4476:18:1\"},\"returnParameters\":{\"id\":447,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":444,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":459,\"src\":\"4529:13:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":443,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4529:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":446,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":459,\"src\":\"4544:13:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":445,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4544:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"src\":\"4528:30:1\"},\"scope\":526,\"src\":\"4453:190:1\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":476,\"nodeType\":\"Block\",\"src\":\"4746:54:1\",\"statements\":[{\"expression\":{\"components\":[{\"expression\":{\"components\":[{\"baseExpression\":{\"id\":469,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"4764:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":471,\"indexExpression\":{\"id\":470,\"name\":\"candAddr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":461,\"src\":\"4775:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4764:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}}],\"id\":472,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"4763:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":473,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"voters\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":69,\"src\":\"4763:29:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}}],\"id\":474,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"4762:31:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"functionReturnParameters\":468,\"id\":475,\"nodeType\":\"Return\",\"src\":\"4756:37:1\"}]},\"functionSelector\":\"95115447\",\"id\":477,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":464,\"modifierName\":{\"id\":463,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":515,\"src\":\"4706:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"4706:12:1\"}],\"name\":\"getCandidateVoters\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":462,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":461,\"mutability\":\"mutable\",\"name\":\"candAddr\",\"nodeType\":\"VariableDeclaration\",\"scope\":477,\"src\":\"4676:16:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":460,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4676:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"src\":\"4675:18:1\"},\"returnParameters\":{\"id\":468,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":467,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":477,\"src\":\"4728:16:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":465,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4728:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":466,\"nodeType\":\"ArrayTypeName\",\"src\":\"4728:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"}],\"src\":\"4727:18:1\"},\"scope\":526,\"src\":\"4648:152:1\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":493,\"nodeType\":\"Block\",\"src\":\"4890:61:1\",\"statements\":[{\"expression\":{\"components\":[{\"baseExpression\":{\"components\":[{\"expression\":{\"id\":486,\"name\":\"currentElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":120,\"src\":\"4909:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election storage ref\"}},\"id\":487,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"voters\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":90,\"src\":\"4909:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}}],\"id\":488,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"4908:24:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":490,\"indexExpression\":{\"id\":489,\"name\":\"voterAddr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":479,\"src\":\"4933:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4908:35:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"id\":491,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"4907:37:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"functionReturnParameters\":485,\"id\":492,\"nodeType\":\"Return\",\"src\":\"4900:44:1\"}]},\"functionSelector\":\"e1c5fcc1\",\"id\":494,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":482,\"modifierName\":{\"id\":481,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":515,\"src\":\"4862:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"4862:12:1\"}],\"name\":\"getElectionVoter\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":480,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":479,\"mutability\":\"mutable\",\"name\":\"voterAddr\",\"nodeType\":\"VariableDeclaration\",\"scope\":494,\"src\":\"4831:17:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":478,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4831:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"src\":\"4830:19:1\"},\"returnParameters\":{\"id\":485,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":484,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":494,\"src\":\"4884:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":483,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4884:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"4883:6:1\"},\"scope\":526,\"src\":\"4805:146:1\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":504,\"nodeType\":\"Block\",\"src\":\"4978:58:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"id\":500,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"id\":497,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4996:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":498,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"4996:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"id\":499,\"name\":\"manager\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":40,\"src\":\"5010:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"4996:21:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":496,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"4988:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":501,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"4988:30:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":502,\"nodeType\":\"ExpressionStatement\",\"src\":\"4988:30:1\"},{\"id\":503,\"nodeType\":\"PlaceholderStatement\",\"src\":\"5028:1:1\"}]},\"id\":505,\"name\":\"restricted\",\"nodeType\":\"ModifierDefinition\",\"parameters\":{\"id\":495,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"4975:2:1\"},\"src\":\"4956:80:1\",\"virtual\":false,\"visibility\":\"internal\"},{\"body\":{\"id\":514,\"nodeType\":\"Block\",\"src\":\"5065:52:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":510,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":508,\"name\":\"typeOfVote\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":108,\"src\":\"5083:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"hexValue\":\"30\",\"id\":509,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5097:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"src\":\"5083:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":507,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"5075:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":511,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5075:24:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":512,\"nodeType\":\"ExpressionStatement\",\"src\":\"5075:24:1\"},{\"id\":513,\"nodeType\":\"PlaceholderStatement\",\"src\":\"5109:1:1\"}]},\"id\":515,\"name\":\"typeElection\",\"nodeType\":\"ModifierDefinition\",\"parameters\":{\"id\":506,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"5062:2:1\"},\"src\":\"5041:76:1\",\"virtual\":false,\"visibility\":\"internal\"},{\"body\":{\"id\":524,\"nodeType\":\"Block\",\"src\":\"5146:52:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":520,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":518,\"name\":\"typeOfVote\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":108,\"src\":\"5164:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"hexValue\":\"31\",\"id\":519,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5178:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"src\":\"5164:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":517,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"5156:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":521,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5156:24:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":522,\"nodeType\":\"ExpressionStatement\",\"src\":\"5156:24:1\"},{\"id\":523,\"nodeType\":\"PlaceholderStatement\",\"src\":\"5190:1:1\"}]},\"id\":525,\"name\":\"typePetition\",\"nodeType\":\"ModifierDefinition\",\"parameters\":{\"id\":516,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"5143:2:1\"},\"src\":\"5122:76:1\",\"virtual\":false,\"visibility\":\"internal\"}],\"scope\":527,\"src\":\"65:5136:1\"}],\"src\":\"0:5202:1\"},\"legacyAST\":{\"attributes\":{\"absolutePath\":\"/home/wen_wong/voting-at-mcgill/contracts/Vote.sol\",\"exportedSymbols\":{\"Vote\":[526]},\"license\":\"UNLICENSED\"},\"children\":[{\"attributes\":{\"literals\":[\"solidity\",\"^\",\"0.7\",\".4\"]},\"id\":38,\"name\":\"PragmaDirective\",\"src\":\"0:23:1\"},{\"attributes\":{\"abstract\":false,\"baseContracts\":[null],\"contractDependencies\":[null],\"contractKind\":\"contract\",\"fullyImplemented\":true,\"linearizedBaseContracts\":[526],\"name\":\"Vote\",\"scope\":527},\"children\":[{\"attributes\":{\"constant\":false,\"functionSelector\":\"481c6a75\",\"mutability\":\"mutable\",\"name\":\"manager\",\"scope\":526,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":39,\"name\":\"ElementaryTypeName\",\"src\":\"104:7:1\"}],\"id\":40,\"name\":\"VariableDeclaration\",\"src\":\"104:22:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"2d35a8a2\",\"mutability\":\"mutable\",\"name\":\"candidatesCount\",\"scope\":526,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":41,\"name\":\"ElementaryTypeName\",\"src\":\"132:4:1\"}],\"id\":42,\"name\":\"VariableDeclaration\",\"src\":\"132:27:1\"},{\"attributes\":{\"canonicalName\":\"Vote.user\",\"name\":\"user\",\"scope\":526,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"name\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":43,\"name\":\"ElementaryTypeName\",\"src\":\"187:6:1\"}],\"id\":44,\"name\":\"VariableDeclaration\",\"src\":\"187:11:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"email\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":45,\"name\":\"ElementaryTypeName\",\"src\":\"208:6:1\"}],\"id\":46,\"name\":\"VariableDeclaration\",\"src\":\"208:12:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"password\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":47,\"name\":\"ElementaryTypeName\",\"src\":\"230:6:1\"}],\"id\":48,\"name\":\"VariableDeclaration\",\"src\":\"230:15:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"userAddress\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":49,\"name\":\"ElementaryTypeName\",\"src\":\"255:7:1\"}],\"id\":50,\"name\":\"VariableDeclaration\",\"src\":\"255:19:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"running\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":51,\"name\":\"ElementaryTypeName\",\"src\":\"284:7:1\"}],\"id\":52,\"name\":\"ArrayTypeName\",\"src\":\"284:9:1\"}],\"id\":53,\"name\":\"VariableDeclaration\",\"src\":\"284:17:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"createdElection\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":54,\"name\":\"ElementaryTypeName\",\"src\":\"311:7:1\"}],\"id\":55,\"name\":\"ArrayTypeName\",\"src\":\"311:9:1\"}],\"id\":56,\"name\":\"VariableDeclaration\",\"src\":\"311:25:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"createdPetition\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":57,\"name\":\"ElementaryTypeName\",\"src\":\"346:7:1\"}],\"id\":58,\"name\":\"ArrayTypeName\",\"src\":\"346:9:1\"}],\"id\":59,\"name\":\"VariableDeclaration\",\"src\":\"346:25:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"userType\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":60,\"name\":\"ElementaryTypeName\",\"src\":\"381:6:1\"}],\"id\":61,\"name\":\"VariableDeclaration\",\"src\":\"381:15:1\"}],\"id\":62,\"name\":\"StructDefinition\",\"src\":\"166:237:1\"},{\"attributes\":{\"canonicalName\":\"Vote.candidate\",\"name\":\"candidate\",\"scope\":526,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"candidateAddr\",\"scope\":74,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":63,\"name\":\"ElementaryTypeName\",\"src\":\"436:7:1\"}],\"id\":64,\"name\":\"VariableDeclaration\",\"src\":\"436:21:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"numVotes\",\"scope\":74,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":65,\"name\":\"ElementaryTypeName\",\"src\":\"467:4:1\"}],\"id\":66,\"name\":\"VariableDeclaration\",\"src\":\"467:13:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"voters\",\"scope\":74,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":67,\"name\":\"ElementaryTypeName\",\"src\":\"490:7:1\"}],\"id\":68,\"name\":\"ArrayTypeName\",\"src\":\"490:9:1\"}],\"id\":69,\"name\":\"VariableDeclaration\",\"src\":\"490:16:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"name\",\"scope\":74,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":70,\"name\":\"ElementaryTypeName\",\"src\":\"516:6:1\"}],\"id\":71,\"name\":\"VariableDeclaration\",\"src\":\"516:11:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":74,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":72,\"name\":\"ElementaryTypeName\",\"src\":\"537:6:1\"}],\"id\":73,\"name\":\"VariableDeclaration\",\"src\":\"537:18:1\"}],\"id\":74,\"name\":\"StructDefinition\",\"src\":\"409:153:1\"},{\"attributes\":{\"canonicalName\":\"Vote.election\",\"name\":\"election\",\"scope\":526,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"title\",\"scope\":91,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":75,\"name\":\"ElementaryTypeName\",\"src\":\"594:6:1\"}],\"id\":76,\"name\":\"VariableDeclaration\",\"src\":\"594:12:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"startDate\",\"scope\":91,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":77,\"name\":\"ElementaryTypeName\",\"src\":\"616:4:1\"}],\"id\":78,\"name\":\"VariableDeclaration\",\"src\":\"616:14:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"endDate\",\"scope\":91,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":79,\"name\":\"ElementaryTypeName\",\"src\":\"640:4:1\"}],\"id\":80,\"name\":\"VariableDeclaration\",\"src\":\"640:12:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":91,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":81,\"name\":\"ElementaryTypeName\",\"src\":\"662:6:1\"}],\"id\":82,\"name\":\"VariableDeclaration\",\"src\":\"662:18:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"numVotes\",\"scope\":91,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":83,\"name\":\"ElementaryTypeName\",\"src\":\"721:4:1\"}],\"id\":84,\"name\":\"VariableDeclaration\",\"src\":\"721:13:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"typeOfElection\",\"scope\":91,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":85,\"name\":\"ElementaryTypeName\",\"src\":\"744:6:1\"}],\"id\":86,\"name\":\"VariableDeclaration\",\"src\":\"744:21:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"voters\",\"scope\":91,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"mapping(address => bool)\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"mapping(address => bool)\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"type\":\"address\"},\"id\":87,\"name\":\"ElementaryTypeName\",\"src\":\"783:7:1\"},{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":88,\"name\":\"ElementaryTypeName\",\"src\":\"794:4:1\"}],\"id\":89,\"name\":\"Mapping\",\"src\":\"775:24:1\"}],\"id\":90,\"name\":\"VariableDeclaration\",\"src\":\"775:31:1\"}],\"id\":91,\"name\":\"StructDefinition\",\"src\":\"568:273:1\"},{\"attributes\":{\"canonicalName\":\"Vote.petition\",\"name\":\"petition\",\"scope\":526,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"title\",\"scope\":106,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":92,\"name\":\"ElementaryTypeName\",\"src\":\"871:6:1\"}],\"id\":93,\"name\":\"VariableDeclaration\",\"src\":\"871:12:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"startDate\",\"scope\":106,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":94,\"name\":\"ElementaryTypeName\",\"src\":\"893:4:1\"}],\"id\":95,\"name\":\"VariableDeclaration\",\"src\":\"893:14:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"endDate\",\"scope\":106,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":96,\"name\":\"ElementaryTypeName\",\"src\":\"917:4:1\"}],\"id\":97,\"name\":\"VariableDeclaration\",\"src\":\"917:12:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":106,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":98,\"name\":\"ElementaryTypeName\",\"src\":\"939:6:1\"}],\"id\":99,\"name\":\"VariableDeclaration\",\"src\":\"939:18:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"numSigned\",\"scope\":106,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":100,\"name\":\"ElementaryTypeName\",\"src\":\"967:4:1\"}],\"id\":101,\"name\":\"VariableDeclaration\",\"src\":\"967:14:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"signed\",\"scope\":106,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"mapping(address => bool)\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"mapping(address => bool)\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"type\":\"address\"},\"id\":102,\"name\":\"ElementaryTypeName\",\"src\":\"999:7:1\"},{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":103,\"name\":\"ElementaryTypeName\",\"src\":\"1008:4:1\"}],\"id\":104,\"name\":\"Mapping\",\"src\":\"991:22:1\"}],\"id\":105,\"name\":\"VariableDeclaration\",\"src\":\"991:29:1\"}],\"id\":106,\"name\":\"StructDefinition\",\"src\":\"846:208:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"typeOfVote\",\"scope\":526,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":107,\"name\":\"ElementaryTypeName\",\"src\":\"1059:4:1\"}],\"id\":108,\"name\":\"VariableDeclaration\",\"src\":\"1059:15:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"8ab66a90\",\"mutability\":\"mutable\",\"name\":\"candidates\",\"scope\":526,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"mapping(address => struct Vote.candidate)\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"type\":\"mapping(address => struct Vote.candidate)\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"type\":\"address\"},\"id\":109,\"name\":\"ElementaryTypeName\",\"src\":\"1175:7:1\"},{\"attributes\":{\"name\":\"candidate\",\"referencedDeclaration\":74,\"type\":\"struct Vote.candidate\"},\"id\":110,\"name\":\"UserDefinedTypeName\",\"src\":\"1186:9:1\"}],\"id\":111,\"name\":\"Mapping\",\"src\":\"1167:29:1\"}],\"id\":112,\"name\":\"VariableDeclaration\",\"src\":\"1167:47:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"35a893a1\",\"mutability\":\"mutable\",\"name\":\"candidateArray\",\"scope\":526,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"struct Vote.candidate[]\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"type\":\"struct Vote.candidate[]\"},\"children\":[{\"attributes\":{\"name\":\"candidate\",\"referencedDeclaration\":74,\"type\":\"struct Vote.candidate\"},\"id\":113,\"name\":\"UserDefinedTypeName\",\"src\":\"1266:9:1\"}],\"id\":114,\"name\":\"ArrayTypeName\",\"src\":\"1266:11:1\"}],\"id\":115,\"name\":\"VariableDeclaration\",\"src\":\"1266:33:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"7432e63a\",\"mutability\":\"mutable\",\"name\":\"candidatesAddresses\",\"scope\":526,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":116,\"name\":\"ElementaryTypeName\",\"src\":\"1305:7:1\"}],\"id\":117,\"name\":\"ArrayTypeName\",\"src\":\"1305:9:1\"}],\"id\":118,\"name\":\"VariableDeclaration\",\"src\":\"1305:36:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"fcae83a7\",\"mutability\":\"mutable\",\"name\":\"currentElection\",\"scope\":526,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"struct Vote.election\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"name\":\"election\",\"referencedDeclaration\":91,\"type\":\"struct Vote.election\"},\"id\":119,\"name\":\"UserDefinedTypeName\",\"src\":\"1378:8:1\"}],\"id\":120,\"name\":\"VariableDeclaration\",\"src\":\"1378:31:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"691a675c\",\"mutability\":\"mutable\",\"name\":\"currentPetition\",\"scope\":526,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"struct Vote.petition\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"name\":\"petition\",\"referencedDeclaration\":106,\"type\":\"struct Vote.petition\"},\"id\":121,\"name\":\"UserDefinedTypeName\",\"src\":\"1415:8:1\"}],\"id\":122,\"name\":\"VariableDeclaration\",\"src\":\"1415:31:1\"},{\"attributes\":{\"implemented\":true,\"isConstructor\":true,\"kind\":\"constructor\",\"modifiers\":[null],\"name\":\"\",\"scope\":526,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"managerOfVote\",\"scope\":144,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":123,\"name\":\"ElementaryTypeName\",\"src\":\"1466:7:1\"}],\"id\":124,\"name\":\"VariableDeclaration\",\"src\":\"1466:21:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"typeOf\",\"scope\":144,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":125,\"name\":\"ElementaryTypeName\",\"src\":\"1489:4:1\"}],\"id\":126,\"name\":\"VariableDeclaration\",\"src\":\"1489:11:1\"}],\"id\":127,\"name\":\"ParameterList\",\"src\":\"1465:36:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":128,\"name\":\"ParameterList\",\"src\":\"1501:0:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"address\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":40,\"type\":\"address\",\"value\":\"manager\"},\"id\":129,\"name\":\"Identifier\",\"src\":\"1568:7:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":124,\"type\":\"address\",\"value\":\"managerOfVote\"},\"id\":130,\"name\":\"Identifier\",\"src\":\"1578:13:1\"}],\"id\":131,\"name\":\"Assignment\",\"src\":\"1568:23:1\"}],\"id\":132,\"name\":\"ExpressionStatement\",\"src\":\"1568:23:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":108,\"type\":\"uint256\",\"value\":\"typeOfVote\"},\"id\":133,\"name\":\"Identifier\",\"src\":\"1601:10:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"uint8\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"hexvalue\":\"30\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 0\",\"value\":\"0\"},\"id\":134,\"name\":\"Literal\",\"src\":\"1615:1:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":126,\"type\":\"uint256\",\"value\":\"typeOf\"},\"id\":135,\"name\":\"Identifier\",\"src\":\"1620:6:1\"}],\"id\":136,\"name\":\"BinaryOperation\",\"src\":\"1615:11:1\"}],\"id\":137,\"name\":\"TupleExpression\",\"src\":\"1614:13:1\"},{\"attributes\":{\"hexvalue\":\"30\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 0\",\"value\":\"0\"},\"id\":138,\"name\":\"Literal\",\"src\":\"1630:1:1\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":139,\"name\":\"Literal\",\"src\":\"1634:1:1\"}],\"id\":140,\"name\":\"Conditional\",\"src\":\"1614:21:1\"}],\"id\":141,\"name\":\"Assignment\",\"src\":\"1601:34:1\"}],\"id\":142,\"name\":\"ExpressionStatement\",\"src\":\"1601:34:1\"}],\"id\":143,\"name\":\"Block\",\"src\":\"1501:141:1\"}],\"id\":144,\"name\":\"FunctionDefinition\",\"src\":\"1453:189:1\"},{\"attributes\":{\"functionSelector\":\"dcfda00f\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"editElection\",\"scope\":526,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"title\",\"scope\":196,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":145,\"name\":\"ElementaryTypeName\",\"src\":\"1671:6:1\"}],\"id\":146,\"name\":\"VariableDeclaration\",\"src\":\"1671:19:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"startDate\",\"scope\":196,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint256\",\"type\":\"uint256\"},\"id\":147,\"name\":\"ElementaryTypeName\",\"src\":\"1692:7:1\"}],\"id\":148,\"name\":\"VariableDeclaration\",\"src\":\"1692:17:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"endDate\",\"scope\":196,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint256\",\"type\":\"uint256\"},\"id\":149,\"name\":\"ElementaryTypeName\",\"src\":\"1711:7:1\"}],\"id\":150,\"name\":\"VariableDeclaration\",\"src\":\"1711:15:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":196,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":151,\"name\":\"ElementaryTypeName\",\"src\":\"1728:6:1\"}],\"id\":152,\"name\":\"VariableDeclaration\",\"src\":\"1728:25:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"typeOfElection\",\"scope\":196,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":153,\"name\":\"ElementaryTypeName\",\"src\":\"1755:6:1\"}],\"id\":154,\"name\":\"VariableDeclaration\",\"src\":\"1755:28:1\"}],\"id\":155,\"name\":\"ParameterList\",\"src\":\"1670:114:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":160,\"name\":\"ParameterList\",\"src\":\"1820:0:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":505,\"type\":\"modifier ()\",\"value\":\"restricted\"},\"id\":156,\"name\":\"Identifier\",\"src\":\"1796:10:1\"}],\"id\":157,\"name\":\"ModifierInvocation\",\"src\":\"1796:10:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":515,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":158,\"name\":\"Identifier\",\"src\":\"1807:12:1\"}],\"id\":159,\"name\":\"ModifierInvocation\",\"src\":\"1807:12:1\"},{\"children\":[{\"attributes\":{\"assignments\":[162]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"e\",\"scope\":195,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct Vote.election\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"election\",\"referencedDeclaration\":91,\"type\":\"struct Vote.election\"},\"id\":161,\"name\":\"UserDefinedTypeName\",\"src\":\"1830:8:1\"}],\"id\":162,\"name\":\"VariableDeclaration\",\"src\":\"1830:18:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":120,\"type\":\"struct Vote.election storage ref\",\"value\":\"currentElection\"},\"id\":163,\"name\":\"Identifier\",\"src\":\"1851:15:1\"}],\"id\":164,\"name\":\"VariableDeclarationStatement\",\"src\":\"1830:36:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"title\",\"referencedDeclaration\":76,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":162,\"type\":\"struct Vote.election storage pointer\",\"value\":\"e\"},\"id\":165,\"name\":\"Identifier\",\"src\":\"1876:1:1\"}],\"id\":167,\"name\":\"MemberAccess\",\"src\":\"1876:7:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":146,\"type\":\"string memory\",\"value\":\"title\"},\"id\":168,\"name\":\"Identifier\",\"src\":\"1886:5:1\"}],\"id\":169,\"name\":\"Assignment\",\"src\":\"1876:15:1\"}],\"id\":170,\"name\":\"ExpressionStatement\",\"src\":\"1876:15:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"startDate\",\"referencedDeclaration\":78,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":162,\"type\":\"struct Vote.election storage pointer\",\"value\":\"e\"},\"id\":171,\"name\":\"Identifier\",\"src\":\"1901:1:1\"}],\"id\":173,\"name\":\"MemberAccess\",\"src\":\"1901:11:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":148,\"type\":\"uint256\",\"value\":\"startDate\"},\"id\":174,\"name\":\"Identifier\",\"src\":\"1915:9:1\"}],\"id\":175,\"name\":\"Assignment\",\"src\":\"1901:23:1\"}],\"id\":176,\"name\":\"ExpressionStatement\",\"src\":\"1901:23:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"endDate\",\"referencedDeclaration\":80,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":162,\"type\":\"struct Vote.election storage pointer\",\"value\":\"e\"},\"id\":177,\"name\":\"Identifier\",\"src\":\"1934:1:1\"}],\"id\":179,\"name\":\"MemberAccess\",\"src\":\"1934:9:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":150,\"type\":\"uint256\",\"value\":\"endDate\"},\"id\":180,\"name\":\"Identifier\",\"src\":\"1946:7:1\"}],\"id\":181,\"name\":\"Assignment\",\"src\":\"1934:19:1\"}],\"id\":182,\"name\":\"ExpressionStatement\",\"src\":\"1934:19:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"description\",\"referencedDeclaration\":82,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":162,\"type\":\"struct Vote.election storage pointer\",\"value\":\"e\"},\"id\":183,\"name\":\"Identifier\",\"src\":\"1963:1:1\"}],\"id\":185,\"name\":\"MemberAccess\",\"src\":\"1963:13:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":152,\"type\":\"string memory\",\"value\":\"description\"},\"id\":186,\"name\":\"Identifier\",\"src\":\"1979:11:1\"}],\"id\":187,\"name\":\"Assignment\",\"src\":\"1963:27:1\"}],\"id\":188,\"name\":\"ExpressionStatement\",\"src\":\"1963:27:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"typeOfElection\",\"referencedDeclaration\":86,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":162,\"type\":\"struct Vote.election storage pointer\",\"value\":\"e\"},\"id\":189,\"name\":\"Identifier\",\"src\":\"2000:1:1\"}],\"id\":191,\"name\":\"MemberAccess\",\"src\":\"2000:16:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":154,\"type\":\"string memory\",\"value\":\"typeOfElection\"},\"id\":192,\"name\":\"Identifier\",\"src\":\"2019:14:1\"}],\"id\":193,\"name\":\"Assignment\",\"src\":\"2000:33:1\"}],\"id\":194,\"name\":\"ExpressionStatement\",\"src\":\"2000:33:1\"}],\"id\":195,\"name\":\"Block\",\"src\":\"1820:220:1\"}],\"id\":196,\"name\":\"FunctionDefinition\",\"src\":\"1648:392:1\"},{\"attributes\":{\"functionSelector\":\"67127e43\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"editPetition\",\"scope\":526,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"title\",\"scope\":240,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":197,\"name\":\"ElementaryTypeName\",\"src\":\"2069:6:1\"}],\"id\":198,\"name\":\"VariableDeclaration\",\"src\":\"2069:19:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"startDate\",\"scope\":240,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint256\",\"type\":\"uint256\"},\"id\":199,\"name\":\"ElementaryTypeName\",\"src\":\"2090:7:1\"}],\"id\":200,\"name\":\"VariableDeclaration\",\"src\":\"2090:17:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"endDate\",\"scope\":240,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint256\",\"type\":\"uint256\"},\"id\":201,\"name\":\"ElementaryTypeName\",\"src\":\"2109:7:1\"}],\"id\":202,\"name\":\"VariableDeclaration\",\"src\":\"2109:15:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":240,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":203,\"name\":\"ElementaryTypeName\",\"src\":\"2126:6:1\"}],\"id\":204,\"name\":\"VariableDeclaration\",\"src\":\"2126:25:1\"}],\"id\":205,\"name\":\"ParameterList\",\"src\":\"2068:84:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":210,\"name\":\"ParameterList\",\"src\":\"2188:0:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":505,\"type\":\"modifier ()\",\"value\":\"restricted\"},\"id\":206,\"name\":\"Identifier\",\"src\":\"2164:10:1\"}],\"id\":207,\"name\":\"ModifierInvocation\",\"src\":\"2164:10:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":525,\"type\":\"modifier ()\",\"value\":\"typePetition\"},\"id\":208,\"name\":\"Identifier\",\"src\":\"2175:12:1\"}],\"id\":209,\"name\":\"ModifierInvocation\",\"src\":\"2175:12:1\"},{\"children\":[{\"attributes\":{\"assignments\":[212]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"p\",\"scope\":239,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct Vote.petition\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"petition\",\"referencedDeclaration\":106,\"type\":\"struct Vote.petition\"},\"id\":211,\"name\":\"UserDefinedTypeName\",\"src\":\"2198:8:1\"}],\"id\":212,\"name\":\"VariableDeclaration\",\"src\":\"2198:18:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":122,\"type\":\"struct Vote.petition storage ref\",\"value\":\"currentPetition\"},\"id\":213,\"name\":\"Identifier\",\"src\":\"2219:15:1\"}],\"id\":214,\"name\":\"VariableDeclarationStatement\",\"src\":\"2198:36:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"title\",\"referencedDeclaration\":93,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":212,\"type\":\"struct Vote.petition storage pointer\",\"value\":\"p\"},\"id\":215,\"name\":\"Identifier\",\"src\":\"2244:1:1\"}],\"id\":217,\"name\":\"MemberAccess\",\"src\":\"2244:7:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":198,\"type\":\"string memory\",\"value\":\"title\"},\"id\":218,\"name\":\"Identifier\",\"src\":\"2254:5:1\"}],\"id\":219,\"name\":\"Assignment\",\"src\":\"2244:15:1\"}],\"id\":220,\"name\":\"ExpressionStatement\",\"src\":\"2244:15:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"startDate\",\"referencedDeclaration\":95,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":212,\"type\":\"struct Vote.petition storage pointer\",\"value\":\"p\"},\"id\":221,\"name\":\"Identifier\",\"src\":\"2269:1:1\"}],\"id\":223,\"name\":\"MemberAccess\",\"src\":\"2269:11:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":200,\"type\":\"uint256\",\"value\":\"startDate\"},\"id\":224,\"name\":\"Identifier\",\"src\":\"2283:9:1\"}],\"id\":225,\"name\":\"Assignment\",\"src\":\"2269:23:1\"}],\"id\":226,\"name\":\"ExpressionStatement\",\"src\":\"2269:23:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"endDate\",\"referencedDeclaration\":97,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":212,\"type\":\"struct Vote.petition storage pointer\",\"value\":\"p\"},\"id\":227,\"name\":\"Identifier\",\"src\":\"2302:1:1\"}],\"id\":229,\"name\":\"MemberAccess\",\"src\":\"2302:9:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":202,\"type\":\"uint256\",\"value\":\"endDate\"},\"id\":230,\"name\":\"Identifier\",\"src\":\"2314:7:1\"}],\"id\":231,\"name\":\"Assignment\",\"src\":\"2302:19:1\"}],\"id\":232,\"name\":\"ExpressionStatement\",\"src\":\"2302:19:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"description\",\"referencedDeclaration\":99,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":212,\"type\":\"struct Vote.petition storage pointer\",\"value\":\"p\"},\"id\":233,\"name\":\"Identifier\",\"src\":\"2331:1:1\"}],\"id\":235,\"name\":\"MemberAccess\",\"src\":\"2331:13:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":204,\"type\":\"string memory\",\"value\":\"description\"},\"id\":236,\"name\":\"Identifier\",\"src\":\"2347:11:1\"}],\"id\":237,\"name\":\"Assignment\",\"src\":\"2331:27:1\"}],\"id\":238,\"name\":\"ExpressionStatement\",\"src\":\"2331:27:1\"}],\"id\":239,\"name\":\"Block\",\"src\":\"2188:177:1\"}],\"id\":240,\"name\":\"FunctionDefinition\",\"src\":\"2046:319:1\"},{\"attributes\":{\"functionSelector\":\"da3550ee\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"voteFor\",\"scope\":526,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"candidateAddress\",\"scope\":299,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":241,\"name\":\"ElementaryTypeName\",\"src\":\"2411:7:1\"}],\"id\":242,\"name\":\"VariableDeclaration\",\"src\":\"2411:24:1\"}],\"id\":243,\"name\":\"ParameterList\",\"src\":\"2410:26:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":246,\"name\":\"ParameterList\",\"src\":\"2456:0:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":515,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":244,\"name\":\"Identifier\",\"src\":\"2444:12:1\"}],\"id\":245,\"name\":\"ModifierInvocation\",\"src\":\"2444:12:1\"},{\"children\":[{\"attributes\":{},\"children\":[{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"voters\",\"referencedDeclaration\":90,\"type\":\"mapping(address => bool)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":120,\"type\":\"struct Vote.election storage ref\",\"value\":\"currentElection\"},\"id\":247,\"name\":\"Identifier\",\"src\":\"2469:15:1\"}],\"id\":248,\"name\":\"MemberAccess\",\"src\":\"2469:22:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":249,\"name\":\"Identifier\",\"src\":\"2492:3:1\"}],\"id\":250,\"name\":\"MemberAccess\",\"src\":\"2492:10:1\"}],\"id\":251,\"name\":\"IndexAccess\",\"src\":\"2469:34:1\"},{\"attributes\":{\"hexvalue\":\"66616c7365\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"bool\",\"type\":\"bool\",\"value\":\"false\"},\"id\":252,\"name\":\"Literal\",\"src\":\"2507:5:1\"}],\"id\":253,\"name\":\"BinaryOperation\",\"src\":\"2469:43:1\"},{\"children\":[{\"attributes\":{},\"children\":[{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"!=\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"candidateAddr\",\"referencedDeclaration\":64,\"type\":\"address\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":254,\"name\":\"Identifier\",\"src\":\"2530:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":242,\"type\":\"address\",\"value\":\"candidateAddress\"},\"id\":255,\"name\":\"Identifier\",\"src\":\"2541:16:1\"}],\"id\":256,\"name\":\"IndexAccess\",\"src\":\"2530:28:1\"}],\"id\":257,\"name\":\"MemberAccess\",\"src\":\"2530:42:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"address payable\",\"type_conversion\":true},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"type\":\"type(address)\"},\"children\":[{\"attributes\":{\"name\":\"address\"},\"id\":258,\"name\":\"ElementaryTypeName\",\"src\":\"2576:7:1\"}],\"id\":259,\"name\":\"ElementaryTypeNameExpression\",\"src\":\"2576:7:1\"},{\"attributes\":{\"hexvalue\":\"30\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 0\",\"value\":\"0\"},\"id\":260,\"name\":\"Literal\",\"src\":\"2584:1:1\"}],\"id\":261,\"name\":\"FunctionCall\",\"src\":\"2576:10:1\"}],\"id\":262,\"name\":\"BinaryOperation\",\"src\":\"2530:56:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"voters\",\"referencedDeclaration\":90,\"type\":\"mapping(address => bool)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":120,\"type\":\"struct Vote.election storage ref\",\"value\":\"currentElection\"},\"id\":263,\"name\":\"Identifier\",\"src\":\"2605:15:1\"}],\"id\":267,\"name\":\"MemberAccess\",\"src\":\"2605:22:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":265,\"name\":\"Identifier\",\"src\":\"2628:3:1\"}],\"id\":266,\"name\":\"MemberAccess\",\"src\":\"2628:10:1\"}],\"id\":268,\"name\":\"IndexAccess\",\"src\":\"2605:34:1\"},{\"attributes\":{\"hexvalue\":\"74727565\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"bool\",\"type\":\"bool\",\"value\":\"true\"},\"id\":269,\"name\":\"Literal\",\"src\":\"2643:4:1\"}],\"id\":270,\"name\":\"Assignment\",\"src\":\"2605:42:1\"}],\"id\":271,\"name\":\"ExpressionStatement\",\"src\":\"2605:42:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"++\",\"prefix\":false,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"numVotes\",\"referencedDeclaration\":84,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":120,\"type\":\"struct Vote.election storage ref\",\"value\":\"currentElection\"},\"id\":272,\"name\":\"Identifier\",\"src\":\"2665:15:1\"}],\"id\":274,\"name\":\"MemberAccess\",\"src\":\"2665:24:1\"}],\"id\":275,\"name\":\"UnaryOperation\",\"src\":\"2665:26:1\"}],\"id\":276,\"name\":\"ExpressionStatement\",\"src\":\"2665:26:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"++\",\"prefix\":false,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"numVotes\",\"referencedDeclaration\":66,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":277,\"name\":\"Identifier\",\"src\":\"2710:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":242,\"type\":\"address\",\"value\":\"candidateAddress\"},\"id\":278,\"name\":\"Identifier\",\"src\":\"2721:16:1\"}],\"id\":279,\"name\":\"IndexAccess\",\"src\":\"2710:28:1\"}],\"id\":280,\"name\":\"TupleExpression\",\"src\":\"2709:30:1\"}],\"id\":281,\"name\":\"MemberAccess\",\"src\":\"2709:39:1\"}],\"id\":282,\"name\":\"UnaryOperation\",\"src\":\"2709:41:1\"}],\"id\":283,\"name\":\"ExpressionStatement\",\"src\":\"2709:41:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"push\",\"type\":\"function (address)\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"voters\",\"referencedDeclaration\":69,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":284,\"name\":\"Identifier\",\"src\":\"2769:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":242,\"type\":\"address\",\"value\":\"candidateAddress\"},\"id\":285,\"name\":\"Identifier\",\"src\":\"2780:16:1\"}],\"id\":286,\"name\":\"IndexAccess\",\"src\":\"2769:28:1\"}],\"id\":287,\"name\":\"TupleExpression\",\"src\":\"2768:30:1\"}],\"id\":288,\"name\":\"MemberAccess\",\"src\":\"2768:37:1\"}],\"id\":289,\"name\":\"MemberAccess\",\"src\":\"2768:42:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":290,\"name\":\"Identifier\",\"src\":\"2811:3:1\"}],\"id\":291,\"name\":\"MemberAccess\",\"src\":\"2811:10:1\"}],\"id\":292,\"name\":\"FunctionCall\",\"src\":\"2768:54:1\"}],\"id\":293,\"name\":\"ExpressionStatement\",\"src\":\"2768:54:1\"}],\"id\":294,\"name\":\"Block\",\"src\":\"2587:250:1\"}],\"id\":295,\"name\":\"IfStatement\",\"src\":\"2527:310:1\"}],\"id\":296,\"name\":\"Block\",\"src\":\"2513:334:1\"}],\"id\":297,\"name\":\"IfStatement\",\"src\":\"2466:381:1\"}],\"id\":298,\"name\":\"Block\",\"src\":\"2456:397:1\"}],\"id\":299,\"name\":\"FunctionDefinition\",\"src\":\"2394:459:1\"},{\"attributes\":{\"functionSelector\":\"869eae23\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"enterElection\",\"scope\":526,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"name\",\"scope\":362,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":300,\"name\":\"ElementaryTypeName\",\"src\":\"2908:6:1\"}],\"id\":301,\"name\":\"VariableDeclaration\",\"src\":\"2908:18:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":362,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":302,\"name\":\"ElementaryTypeName\",\"src\":\"2928:6:1\"}],\"id\":303,\"name\":\"VariableDeclaration\",\"src\":\"2928:25:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"current_date\",\"scope\":362,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint256\",\"type\":\"uint256\"},\"id\":304,\"name\":\"ElementaryTypeName\",\"src\":\"2955:7:1\"}],\"id\":305,\"name\":\"VariableDeclaration\",\"src\":\"2955:20:1\"}],\"id\":306,\"name\":\"ParameterList\",\"src\":\"2907:69:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":309,\"name\":\"ParameterList\",\"src\":\"3001:0:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":515,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":307,\"name\":\"Identifier\",\"src\":\"2988:12:1\"}],\"id\":308,\"name\":\"ModifierInvocation\",\"src\":\"2988:12:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"type\":\"function (bool) pure\",\"value\":\"require\"},\"id\":310,\"name\":\"Identifier\",\"src\":\"3079:7:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"&&\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\">\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":305,\"type\":\"uint256\",\"value\":\"current_date\"},\"id\":311,\"name\":\"Identifier\",\"src\":\"3087:12:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"startDate\",\"referencedDeclaration\":78,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":120,\"type\":\"struct Vote.election storage ref\",\"value\":\"currentElection\"},\"id\":312,\"name\":\"Identifier\",\"src\":\"3102:15:1\"}],\"id\":313,\"name\":\"MemberAccess\",\"src\":\"3102:25:1\"}],\"id\":314,\"name\":\"BinaryOperation\",\"src\":\"3087:40:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"<\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":305,\"type\":\"uint256\",\"value\":\"current_date\"},\"id\":315,\"name\":\"Identifier\",\"src\":\"3131:12:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"endDate\",\"referencedDeclaration\":80,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":120,\"type\":\"struct Vote.election storage ref\",\"value\":\"currentElection\"},\"id\":316,\"name\":\"Identifier\",\"src\":\"3146:15:1\"}],\"id\":317,\"name\":\"MemberAccess\",\"src\":\"3146:23:1\"}],\"id\":318,\"name\":\"BinaryOperation\",\"src\":\"3131:38:1\"}],\"id\":319,\"name\":\"BinaryOperation\",\"src\":\"3087:82:1\"}],\"id\":320,\"name\":\"FunctionCall\",\"src\":\"3079:91:1\"}],\"id\":321,\"name\":\"ExpressionStatement\",\"src\":\"3079:91:1\"},{\"attributes\":{\"assignments\":[323]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"currentCandidate\",\"scope\":361,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct Vote.candidate\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"candidate\",\"referencedDeclaration\":74,\"type\":\"struct Vote.candidate\"},\"id\":322,\"name\":\"UserDefinedTypeName\",\"src\":\"3206:9:1\"}],\"id\":323,\"name\":\"VariableDeclaration\",\"src\":\"3206:34:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":324,\"name\":\"Identifier\",\"src\":\"3243:10:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":325,\"name\":\"Identifier\",\"src\":\"3254:3:1\"}],\"id\":326,\"name\":\"MemberAccess\",\"src\":\"3254:10:1\"}],\"id\":327,\"name\":\"IndexAccess\",\"src\":\"3243:22:1\"}],\"id\":328,\"name\":\"VariableDeclarationStatement\",\"src\":\"3206:59:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"name\",\"referencedDeclaration\":71,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":323,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":329,\"name\":\"Identifier\",\"src\":\"3275:16:1\"}],\"id\":331,\"name\":\"MemberAccess\",\"src\":\"3275:21:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":301,\"type\":\"string memory\",\"value\":\"name\"},\"id\":332,\"name\":\"Identifier\",\"src\":\"3299:4:1\"}],\"id\":333,\"name\":\"Assignment\",\"src\":\"3275:28:1\"}],\"id\":334,\"name\":\"ExpressionStatement\",\"src\":\"3275:28:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"description\",\"referencedDeclaration\":73,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":323,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":335,\"name\":\"Identifier\",\"src\":\"3313:16:1\"}],\"id\":337,\"name\":\"MemberAccess\",\"src\":\"3313:28:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":303,\"type\":\"string memory\",\"value\":\"description\"},\"id\":338,\"name\":\"Identifier\",\"src\":\"3344:11:1\"}],\"id\":339,\"name\":\"Assignment\",\"src\":\"3313:42:1\"}],\"id\":340,\"name\":\"ExpressionStatement\",\"src\":\"3313:42:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"address\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"candidateAddr\",\"referencedDeclaration\":64,\"type\":\"address\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":323,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":341,\"name\":\"Identifier\",\"src\":\"3365:16:1\"}],\"id\":343,\"name\":\"MemberAccess\",\"src\":\"3365:30:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":344,\"name\":\"Identifier\",\"src\":\"3397:3:1\"}],\"id\":345,\"name\":\"MemberAccess\",\"src\":\"3397:10:1\"}],\"id\":346,\"name\":\"Assignment\",\"src\":\"3365:42:1\"}],\"id\":347,\"name\":\"ExpressionStatement\",\"src\":\"3365:42:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"voters\",\"referencedDeclaration\":69,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":323,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":348,\"name\":\"Identifier\",\"src\":\"3417:16:1\"}],\"id\":350,\"name\":\"MemberAccess\",\"src\":\"3417:23:1\"}],\"id\":351,\"name\":\"ExpressionStatement\",\"src\":\"3417:23:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"push\",\"type\":\"function (struct Vote.candidate storage ref)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"struct Vote.candidate storage ref[] storage ref\",\"value\":\"candidateArray\"},\"id\":352,\"name\":\"Identifier\",\"src\":\"3450:14:1\"}],\"id\":354,\"name\":\"MemberAccess\",\"src\":\"3450:19:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":323,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":355,\"name\":\"Identifier\",\"src\":\"3470:16:1\"}],\"id\":356,\"name\":\"FunctionCall\",\"src\":\"3450:37:1\"}],\"id\":357,\"name\":\"ExpressionStatement\",\"src\":\"3450:37:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"++\",\"prefix\":false,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":42,\"type\":\"uint256\",\"value\":\"candidatesCount\"},\"id\":358,\"name\":\"Identifier\",\"src\":\"3497:15:1\"}],\"id\":359,\"name\":\"UnaryOperation\",\"src\":\"3497:17:1\"}],\"id\":360,\"name\":\"ExpressionStatement\",\"src\":\"3497:17:1\"}],\"id\":361,\"name\":\"Block\",\"src\":\"3001:563:1\"}],\"id\":362,\"name\":\"FunctionDefinition\",\"src\":\"2885:679:1\"},{\"attributes\":{\"functionSelector\":\"af47fb3f\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"leaveElection\",\"scope\":526,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"current_date\",\"scope\":437,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint256\",\"type\":\"uint256\"},\"id\":363,\"name\":\"ElementaryTypeName\",\"src\":\"3618:7:1\"}],\"id\":364,\"name\":\"VariableDeclaration\",\"src\":\"3618:20:1\"}],\"id\":365,\"name\":\"ParameterList\",\"src\":\"3617:22:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":368,\"name\":\"ParameterList\",\"src\":\"3664:0:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":515,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":366,\"name\":\"Identifier\",\"src\":\"3651:12:1\"}],\"id\":367,\"name\":\"ModifierInvocation\",\"src\":\"3651:12:1\"},{\"children\":[{\"attributes\":{\"assignments\":[370]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"currentCandidate\",\"scope\":436,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct Vote.candidate\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"candidate\",\"referencedDeclaration\":74,\"type\":\"struct Vote.candidate\"},\"id\":369,\"name\":\"UserDefinedTypeName\",\"src\":\"3873:9:1\"}],\"id\":370,\"name\":\"VariableDeclaration\",\"src\":\"3873:34:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":371,\"name\":\"Identifier\",\"src\":\"3910:10:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":372,\"name\":\"Identifier\",\"src\":\"3921:3:1\"}],\"id\":373,\"name\":\"MemberAccess\",\"src\":\"3921:10:1\"}],\"id\":374,\"name\":\"IndexAccess\",\"src\":\"3910:22:1\"}],\"id\":375,\"name\":\"VariableDeclarationStatement\",\"src\":\"3873:59:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"name\",\"referencedDeclaration\":71,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":370,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":376,\"name\":\"Identifier\",\"src\":\"3942:16:1\"}],\"id\":378,\"name\":\"MemberAccess\",\"src\":\"3942:21:1\"},{\"attributes\":{\"hexvalue\":\"\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"string\",\"type\":\"literal_string \\\"\\\"\",\"value\":\"\"},\"id\":379,\"name\":\"Literal\",\"src\":\"3966:2:1\"}],\"id\":380,\"name\":\"Assignment\",\"src\":\"3942:26:1\"}],\"id\":381,\"name\":\"ExpressionStatement\",\"src\":\"3942:26:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"description\",\"referencedDeclaration\":73,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":370,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":382,\"name\":\"Identifier\",\"src\":\"3978:16:1\"}],\"id\":384,\"name\":\"MemberAccess\",\"src\":\"3978:28:1\"},{\"attributes\":{\"hexvalue\":\"\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"string\",\"type\":\"literal_string \\\"\\\"\",\"value\":\"\"},\"id\":385,\"name\":\"Literal\",\"src\":\"4009:2:1\"}],\"id\":386,\"name\":\"Assignment\",\"src\":\"3978:33:1\"}],\"id\":387,\"name\":\"ExpressionStatement\",\"src\":\"3978:33:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"delete\",\"prefix\":true,\"type\":\"tuple()\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":388,\"name\":\"Identifier\",\"src\":\"4100:10:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":389,\"name\":\"Identifier\",\"src\":\"4111:3:1\"}],\"id\":390,\"name\":\"MemberAccess\",\"src\":\"4111:10:1\"}],\"id\":391,\"name\":\"IndexAccess\",\"src\":\"4100:22:1\"}],\"id\":392,\"name\":\"UnaryOperation\",\"src\":\"4093:29:1\"}],\"id\":393,\"name\":\"ExpressionStatement\",\"src\":\"4093:29:1\"},{\"children\":[{\"attributes\":{\"assignments\":[395]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"i\",\"scope\":432,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":394,\"name\":\"ElementaryTypeName\",\"src\":\"4137:4:1\"}],\"id\":395,\"name\":\"VariableDeclaration\",\"src\":\"4137:6:1\"},{\"attributes\":{\"hexvalue\":\"30\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 0\",\"value\":\"0\"},\"id\":396,\"name\":\"Literal\",\"src\":\"4146:1:1\"}],\"id\":397,\"name\":\"VariableDeclarationStatement\",\"src\":\"4137:10:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"<\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":395,\"type\":\"uint256\",\"value\":\"i\"},\"id\":398,\"name\":\"Identifier\",\"src\":\"4149:1:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"length\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"struct Vote.candidate storage ref[] storage ref\",\"value\":\"candidateArray\"},\"id\":399,\"name\":\"Identifier\",\"src\":\"4151:14:1\"}],\"id\":400,\"name\":\"MemberAccess\",\"src\":\"4151:21:1\"}],\"id\":401,\"name\":\"BinaryOperation\",\"src\":\"4149:23:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"++\",\"prefix\":false,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":395,\"type\":\"uint256\",\"value\":\"i\"},\"id\":402,\"name\":\"Identifier\",\"src\":\"4174:1:1\"}],\"id\":403,\"name\":\"UnaryOperation\",\"src\":\"4174:3:1\"}],\"id\":404,\"name\":\"ExpressionStatement\",\"src\":\"4174:3:1\"},{\"children\":[{\"attributes\":{},\"children\":[{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":405,\"name\":\"Identifier\",\"src\":\"4195:3:1\"}],\"id\":406,\"name\":\"MemberAccess\",\"src\":\"4195:10:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"candidateAddr\",\"referencedDeclaration\":64,\"type\":\"address\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"struct Vote.candidate storage ref[] storage ref\",\"value\":\"candidateArray\"},\"id\":407,\"name\":\"Identifier\",\"src\":\"4207:14:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":395,\"type\":\"uint256\",\"value\":\"i\"},\"id\":408,\"name\":\"Identifier\",\"src\":\"4222:1:1\"}],\"id\":409,\"name\":\"IndexAccess\",\"src\":\"4207:17:1\"}],\"id\":410,\"name\":\"MemberAccess\",\"src\":\"4207:31:1\"}],\"id\":411,\"name\":\"BinaryOperation\",\"src\":\"4195:43:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"struct Vote.candidate storage ref[] storage ref\",\"value\":\"candidateArray\"},\"id\":412,\"name\":\"Identifier\",\"src\":\"4257:14:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":395,\"type\":\"uint256\",\"value\":\"i\"},\"id\":413,\"name\":\"Identifier\",\"src\":\"4272:1:1\"}],\"id\":414,\"name\":\"IndexAccess\",\"src\":\"4257:17:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"struct Vote.candidate storage ref[] storage ref\",\"value\":\"candidateArray\"},\"id\":415,\"name\":\"Identifier\",\"src\":\"4275:14:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"-\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"length\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"struct Vote.candidate storage ref[] storage ref\",\"value\":\"candidateArray\"},\"id\":416,\"name\":\"Identifier\",\"src\":\"4290:14:1\"}],\"id\":417,\"name\":\"MemberAccess\",\"src\":\"4290:21:1\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":418,\"name\":\"Literal\",\"src\":\"4312:1:1\"}],\"id\":419,\"name\":\"BinaryOperation\",\"src\":\"4290:23:1\"}],\"id\":420,\"name\":\"IndexAccess\",\"src\":\"4275:39:1\"}],\"id\":421,\"name\":\"Assignment\",\"src\":\"4257:57:1\"}],\"id\":422,\"name\":\"ExpressionStatement\",\"src\":\"4257:57:1\"},{\"children\":[{\"attributes\":{\"arguments\":[null],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[null],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"pop\",\"type\":\"function ()\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"struct Vote.candidate storage ref[] storage ref\",\"value\":\"candidateArray\"},\"id\":423,\"name\":\"Identifier\",\"src\":\"4332:14:1\"}],\"id\":425,\"name\":\"MemberAccess\",\"src\":\"4332:18:1\"}],\"id\":426,\"name\":\"FunctionCall\",\"src\":\"4332:20:1\"}],\"id\":427,\"name\":\"ExpressionStatement\",\"src\":\"4332:20:1\"},{\"id\":428,\"name\":\"Break\",\"src\":\"4370:5:1\"}],\"id\":429,\"name\":\"Block\",\"src\":\"4239:151:1\"}],\"id\":430,\"name\":\"IfStatement\",\"src\":\"4192:198:1\"}],\"id\":431,\"name\":\"Block\",\"src\":\"4178:222:1\"}],\"id\":432,\"name\":\"ForStatement\",\"src\":\"4132:268:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"--\",\"prefix\":false,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":42,\"type\":\"uint256\",\"value\":\"candidatesCount\"},\"id\":433,\"name\":\"Identifier\",\"src\":\"4409:15:1\"}],\"id\":434,\"name\":\"UnaryOperation\",\"src\":\"4409:17:1\"}],\"id\":435,\"name\":\"ExpressionStatement\",\"src\":\"4409:17:1\"}],\"id\":436,\"name\":\"Block\",\"src\":\"3664:769:1\"}],\"id\":437,\"name\":\"FunctionDefinition\",\"src\":\"3595:838:1\"},{\"attributes\":{\"functionSelector\":\"ad0dcf9c\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"get_candidates\",\"scope\":526,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"candaddr\",\"scope\":459,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":438,\"name\":\"ElementaryTypeName\",\"src\":\"4477:7:1\"}],\"id\":439,\"name\":\"VariableDeclaration\",\"src\":\"4477:16:1\"}],\"id\":440,\"name\":\"ParameterList\",\"src\":\"4476:18:1\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":459,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":443,\"name\":\"ElementaryTypeName\",\"src\":\"4529:6:1\"}],\"id\":444,\"name\":\"VariableDeclaration\",\"src\":\"4529:13:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":459,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":445,\"name\":\"ElementaryTypeName\",\"src\":\"4544:6:1\"}],\"id\":446,\"name\":\"VariableDeclaration\",\"src\":\"4544:13:1\"}],\"id\":447,\"name\":\"ParameterList\",\"src\":\"4528:30:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":515,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":441,\"name\":\"Identifier\",\"src\":\"4507:12:1\"}],\"id\":442,\"name\":\"ModifierInvocation\",\"src\":\"4507:12:1\"},{\"children\":[{\"attributes\":{\"functionReturnParameters\":447},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"tuple(string storage ref,string storage ref)\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"name\",\"referencedDeclaration\":71,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":448,\"name\":\"Identifier\",\"src\":\"4576:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":439,\"type\":\"address\",\"value\":\"candaddr\"},\"id\":449,\"name\":\"Identifier\",\"src\":\"4587:8:1\"}],\"id\":450,\"name\":\"IndexAccess\",\"src\":\"4576:20:1\"}],\"id\":451,\"name\":\"MemberAccess\",\"src\":\"4576:25:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"description\",\"referencedDeclaration\":73,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":452,\"name\":\"Identifier\",\"src\":\"4603:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":439,\"type\":\"address\",\"value\":\"candaddr\"},\"id\":453,\"name\":\"Identifier\",\"src\":\"4614:8:1\"}],\"id\":454,\"name\":\"IndexAccess\",\"src\":\"4603:20:1\"}],\"id\":455,\"name\":\"MemberAccess\",\"src\":\"4603:32:1\"}],\"id\":456,\"name\":\"TupleExpression\",\"src\":\"4575:61:1\"}],\"id\":457,\"name\":\"Return\",\"src\":\"4569:67:1\"}],\"id\":458,\"name\":\"Block\",\"src\":\"4559:84:1\"}],\"id\":459,\"name\":\"FunctionDefinition\",\"src\":\"4453:190:1\"},{\"attributes\":{\"functionSelector\":\"95115447\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"getCandidateVoters\",\"scope\":526,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"candAddr\",\"scope\":477,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":460,\"name\":\"ElementaryTypeName\",\"src\":\"4676:7:1\"}],\"id\":461,\"name\":\"VariableDeclaration\",\"src\":\"4676:16:1\"}],\"id\":462,\"name\":\"ParameterList\",\"src\":\"4675:18:1\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":477,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":465,\"name\":\"ElementaryTypeName\",\"src\":\"4728:7:1\"}],\"id\":466,\"name\":\"ArrayTypeName\",\"src\":\"4728:9:1\"}],\"id\":467,\"name\":\"VariableDeclaration\",\"src\":\"4728:16:1\"}],\"id\":468,\"name\":\"ParameterList\",\"src\":\"4727:18:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":515,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":463,\"name\":\"Identifier\",\"src\":\"4706:12:1\"}],\"id\":464,\"name\":\"ModifierInvocation\",\"src\":\"4706:12:1\"},{\"children\":[{\"attributes\":{\"functionReturnParameters\":468},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"voters\",\"referencedDeclaration\":69,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":469,\"name\":\"Identifier\",\"src\":\"4764:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":461,\"type\":\"address\",\"value\":\"candAddr\"},\"id\":470,\"name\":\"Identifier\",\"src\":\"4775:8:1\"}],\"id\":471,\"name\":\"IndexAccess\",\"src\":\"4764:20:1\"}],\"id\":472,\"name\":\"TupleExpression\",\"src\":\"4763:22:1\"}],\"id\":473,\"name\":\"MemberAccess\",\"src\":\"4763:29:1\"}],\"id\":474,\"name\":\"TupleExpression\",\"src\":\"4762:31:1\"}],\"id\":475,\"name\":\"Return\",\"src\":\"4756:37:1\"}],\"id\":476,\"name\":\"Block\",\"src\":\"4746:54:1\"}],\"id\":477,\"name\":\"FunctionDefinition\",\"src\":\"4648:152:1\"},{\"attributes\":{\"functionSelector\":\"e1c5fcc1\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"getElectionVoter\",\"scope\":526,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"voterAddr\",\"scope\":494,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":478,\"name\":\"ElementaryTypeName\",\"src\":\"4831:7:1\"}],\"id\":479,\"name\":\"VariableDeclaration\",\"src\":\"4831:17:1\"}],\"id\":480,\"name\":\"ParameterList\",\"src\":\"4830:19:1\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":494,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"bool\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":483,\"name\":\"ElementaryTypeName\",\"src\":\"4884:4:1\"}],\"id\":484,\"name\":\"VariableDeclaration\",\"src\":\"4884:4:1\"}],\"id\":485,\"name\":\"ParameterList\",\"src\":\"4883:6:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":515,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":481,\"name\":\"Identifier\",\"src\":\"4862:12:1\"}],\"id\":482,\"name\":\"ModifierInvocation\",\"src\":\"4862:12:1\"},{\"children\":[{\"attributes\":{\"functionReturnParameters\":485},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"mapping(address => bool)\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"voters\",\"referencedDeclaration\":90,\"type\":\"mapping(address => bool)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":120,\"type\":\"struct Vote.election storage ref\",\"value\":\"currentElection\"},\"id\":486,\"name\":\"Identifier\",\"src\":\"4909:15:1\"}],\"id\":487,\"name\":\"MemberAccess\",\"src\":\"4909:22:1\"}],\"id\":488,\"name\":\"TupleExpression\",\"src\":\"4908:24:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":479,\"type\":\"address\",\"value\":\"voterAddr\"},\"id\":489,\"name\":\"Identifier\",\"src\":\"4933:9:1\"}],\"id\":490,\"name\":\"IndexAccess\",\"src\":\"4908:35:1\"}],\"id\":491,\"name\":\"TupleExpression\",\"src\":\"4907:37:1\"}],\"id\":492,\"name\":\"Return\",\"src\":\"4900:44:1\"}],\"id\":493,\"name\":\"Block\",\"src\":\"4890:61:1\"}],\"id\":494,\"name\":\"FunctionDefinition\",\"src\":\"4805:146:1\"},{\"attributes\":{\"name\":\"restricted\",\"virtual\":false,\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":495,\"name\":\"ParameterList\",\"src\":\"4975:2:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"type\":\"function (bool) pure\",\"value\":\"require\"},\"id\":496,\"name\":\"Identifier\",\"src\":\"4988:7:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":497,\"name\":\"Identifier\",\"src\":\"4996:3:1\"}],\"id\":498,\"name\":\"MemberAccess\",\"src\":\"4996:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":40,\"type\":\"address\",\"value\":\"manager\"},\"id\":499,\"name\":\"Identifier\",\"src\":\"5010:7:1\"}],\"id\":500,\"name\":\"BinaryOperation\",\"src\":\"4996:21:1\"}],\"id\":501,\"name\":\"FunctionCall\",\"src\":\"4988:30:1\"}],\"id\":502,\"name\":\"ExpressionStatement\",\"src\":\"4988:30:1\"},{\"id\":503,\"name\":\"PlaceholderStatement\",\"src\":\"5028:1:1\"}],\"id\":504,\"name\":\"Block\",\"src\":\"4978:58:1\"}],\"id\":505,\"name\":\"ModifierDefinition\",\"src\":\"4956:80:1\"},{\"attributes\":{\"name\":\"typeElection\",\"virtual\":false,\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":506,\"name\":\"ParameterList\",\"src\":\"5062:2:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"type\":\"function (bool) pure\",\"value\":\"require\"},\"id\":507,\"name\":\"Identifier\",\"src\":\"5075:7:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":108,\"type\":\"uint256\",\"value\":\"typeOfVote\"},\"id\":508,\"name\":\"Identifier\",\"src\":\"5083:10:1\"},{\"attributes\":{\"hexvalue\":\"30\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 0\",\"value\":\"0\"},\"id\":509,\"name\":\"Literal\",\"src\":\"5097:1:1\"}],\"id\":510,\"name\":\"BinaryOperation\",\"src\":\"5083:15:1\"}],\"id\":511,\"name\":\"FunctionCall\",\"src\":\"5075:24:1\"}],\"id\":512,\"name\":\"ExpressionStatement\",\"src\":\"5075:24:1\"},{\"id\":513,\"name\":\"PlaceholderStatement\",\"src\":\"5109:1:1\"}],\"id\":514,\"name\":\"Block\",\"src\":\"5065:52:1\"}],\"id\":515,\"name\":\"ModifierDefinition\",\"src\":\"5041:76:1\"},{\"attributes\":{\"name\":\"typePetition\",\"virtual\":false,\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":516,\"name\":\"ParameterList\",\"src\":\"5143:2:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"type\":\"function (bool) pure\",\"value\":\"require\"},\"id\":517,\"name\":\"Identifier\",\"src\":\"5156:7:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":108,\"type\":\"uint256\",\"value\":\"typeOfVote\"},\"id\":518,\"name\":\"Identifier\",\"src\":\"5164:10:1\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":519,\"name\":\"Literal\",\"src\":\"5178:1:1\"}],\"id\":520,\"name\":\"BinaryOperation\",\"src\":\"5164:15:1\"}],\"id\":521,\"name\":\"FunctionCall\",\"src\":\"5156:24:1\"}],\"id\":522,\"name\":\"ExpressionStatement\",\"src\":\"5156:24:1\"},{\"id\":523,\"name\":\"PlaceholderStatement\",\"src\":\"5190:1:1\"}],\"id\":524,\"name\":\"Block\",\"src\":\"5146:52:1\"}],\"id\":525,\"name\":\"ModifierDefinition\",\"src\":\"5122:76:1\"}],\"id\":526,\"name\":\"ContractDefinition\",\"src\":\"65:5136:1\"}],\"id\":527,\"name\":\"SourceUnit\",\"src\":\"0:5202:1\"},\"compiler\":{\"name\":\"solc\",\"version\":\"0.7.4+commit.3f05b770.Emscripten.clang\"},\"networks\":{},\"schemaVersion\":\"3.3.4\",\"updatedAt\":\"2021-03-07T01:03:22.772Z\",\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}}");
=======
module.exports = JSON.parse("{\"contractName\":\"Vote\",\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"managerOfVote\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"typeOf\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"candidateArray\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"candidateAddr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"numVotes\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"candidates\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"candidateAddr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"numVotes\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"candidatesAddresses\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"candidatesCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"currentElection\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"startDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endDate\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"numVotes\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"typeOfElection\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"currentPetition\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"startDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endDate\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"numSigned\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"manager\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"startDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endDate\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"typeOfElection\",\"type\":\"string\"}],\"name\":\"editElection\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"startDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endDate\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"}],\"name\":\"editPetition\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"candidateAddress\",\"type\":\"address\"}],\"name\":\"voteFor\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"current_date\",\"type\":\"uint256\"}],\"name\":\"enterElection\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"current_date\",\"type\":\"uint256\"}],\"name\":\"leaveElection\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"candaddr\",\"type\":\"address\"}],\"name\":\"get_candidates\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"candAddr\",\"type\":\"address\"}],\"name\":\"getCandidateVoters\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"voterAddr\",\"type\":\"address\"}],\"name\":\"getElectionVoter\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.7.4+commit.3f05b770\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"managerOfVote\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"typeOf\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"constructor\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"candidateArray\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"candidateAddr\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"numVotes\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"candidates\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"candidateAddr\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"numVotes\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"candidatesAddresses\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"candidatesCount\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"currentElection\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"title\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"startDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"endDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"numVotes\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"typeOfElection\\\",\\\"type\\\":\\\"string\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"currentPetition\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"title\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"startDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"endDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"numSigned\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"title\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"startDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"endDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"typeOfElection\\\",\\\"type\\\":\\\"string\\\"}],\\\"name\\\":\\\"editElection\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"title\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"startDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"endDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"}],\\\"name\\\":\\\"editPetition\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"current_date\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"enterElection\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"candAddr\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"getCandidateVoters\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address[]\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address[]\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"voterAddr\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"getElectionVoter\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"candaddr\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"get_candidates\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"current_date\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"leaveElection\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"manager\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"candidateAddress\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"voteFor\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"}],\\\"devdoc\\\":{\\\"kind\\\":\\\"dev\\\",\\\"methods\\\":{},\\\"version\\\":1},\\\"userdoc\\\":{\\\"kind\\\":\\\"user\\\",\\\"methods\\\":{},\\\"version\\\":1}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/Vote.sol\\\":\\\"Vote\\\"},\\\"evmVersion\\\":\\\"istanbul\\\",\\\"libraries\\\":{},\\\"metadata\\\":{\\\"bytecodeHash\\\":\\\"ipfs\\\"},\\\"optimizer\\\":{\\\"enabled\\\":false,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/Vote.sol\\\":{\\\"keccak256\\\":\\\"0x8e893011a708a1d76ff106749c9ae7db58af439fd1b0b17f892a482ba39f2d8b\\\",\\\"license\\\":\\\"UNLICENSED\\\",\\\"urls\\\":[\\\"bzz-raw://152aa8fab5e68cbf284d33e043f4c92865f1f60e878d846b49442667818a570d\\\",\\\"dweb:/ipfs/QmSTaYeJ6TNacF2ZHxYHpjdDyiV31FCWDHE2yY3D8TDRmy\\\"]}},\\\"version\\\":1}\",\"bytecode\":\"0x608060405234801561001057600080fd5b506040516124333803806124338339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060001461009d5760016100a0565b60005b60ff166002819055505050612379806100ba6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80638ab66a9011610097578063da3550ee11610066578063da3550ee146109de578063dcfda00f14610a22578063e1c5fcc114610c1f578063fcae83a714610c79576100f5565b80638ab66a90146106a157806395115447146107ee578063ad0dcf9c14610887578063af47fb3f146109b0576100f5565b806367127e43116100d357806367127e4314610283578063691a675c146103e95780637432e63a146104ed578063869eae2314610545576100f5565b80632d35a8a2146100fa57806335a893a114610118578063481c6a751461024f575b600080fd5b610102610de9565b6040518082815260200191505060405180910390f35b6101446004803603602081101561012e57600080fd5b8101908080359060200190929190505050610def565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156101aa57808201518184015260208101905061018f565b50505050905090810190601f1680156101d75780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156102105780820151818401526020810190506101f5565b50505050905090810190601f16801561023d5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b610257610f7f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103e76004803603608081101561029957600080fd5b81019080803590602001906401000000008111156102b657600080fd5b8201836020820111156102c857600080fd5b803590602001918460018302840111640100000000831117156102ea57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803590602001909291908035906020019064010000000081111561036157600080fd5b82018360208201111561037357600080fd5b8035906020019184600183028401116401000000008311171561039557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610fa3565b005b6103f161105b565b604051808060200186815260200185815260200180602001848152602001838103835288818151815260200191508051906020019080838360005b8381101561044757808201518184015260208101905061042c565b50505050905090810190601f1680156104745780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b838110156104ad578082015181840152602081019050610492565b50505050905090810190601f1680156104da5780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b6105196004803603602081101561050357600080fd5b81019080803590602001909291905050506111af565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61069f6004803603606081101561055b57600080fd5b810190808035906020019064010000000081111561057857600080fd5b82018360208201111561058a57600080fd5b803590602001918460018302840111640100000000831117156105ac57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561060f57600080fd5b82018360208201111561062157600080fd5b8035906020019184600183028401116401000000008311171561064357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291905050506111ee565b005b6106e3600480360360208110156106b757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113f4565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561074957808201518184015260208101905061072e565b50505050905090810190601f1680156107765780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156107af578082015181840152602081019050610794565b50505050905090810190601f1680156107dc5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b6108306004803603602081101561080457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611574565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610873578082015181840152602081019050610858565b505050509050019250505060405180910390f35b6108c96004803603602081101561089d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611653565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b8381101561090d5780820151818401526020810190506108f2565b50505050905090810190601f16801561093a5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015610973578082015181840152602081019050610958565b50505050905090810190601f1680156109a05780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b6109dc600480360360208110156109c657600080fd5b810190808035906020019092919050505061182a565b005b610a20600480360360208110156109f457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611bb5565b005b610c1d600480360360a0811015610a3857600080fd5b8101908080359060200190640100000000811115610a5557600080fd5b820183602082011115610a6757600080fd5b80359060200191846001830284011164010000000083111715610a8957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291908035906020019092919080359060200190640100000000811115610b0057600080fd5b820183602082011115610b1257600080fd5b80359060200191846001830284011164010000000083111715610b3457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610b9757600080fd5b820183602082011115610ba957600080fd5b80359060200191846001830284011164010000000083111715610bcb57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611e1e565b005b610c6160048036036020811015610c3557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611ef0565b60405180821515815260200191505060405180910390f35b610c81611f56565b6040518080602001878152602001868152602001806020018581526020018060200184810384528a818151815260200191508051906020019080838360005b83811015610cdb578082015181840152602081019050610cc0565b50505050905090810190601f168015610d085780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610d41578082015181840152602081019050610d26565b50505050905090810190601f168015610d6e5780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b83811015610da7578082015181840152602081019050610d8c565b50505050905090810190601f168015610dd45780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b60015481565b60048181548110610dff57600080fd5b90600052602060002090600502016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ed75780601f10610eac57610100808354040283529160200191610ed7565b820191906000526020600020905b815481529060010190602001808311610eba57829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f755780601f10610f4a57610100808354040283529160200191610f75565b820191906000526020600020905b815481529060010190602001808311610f5857829003601f168201915b5050505050905084565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ffb57600080fd5b60016002541461100a57600080fd5b6000600d905084816000019080519060200190611028929190612148565b5083816001018190555082816002018190555081816003019080519060200190611053929190612148565b505050505050565b600d806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110f55780601f106110ca576101008083540402835291602001916110f5565b820191906000526020600020905b8154815290600101906020018083116110d857829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561119f5780601f106111745761010080835404028352916020019161119f565b820191906000526020600020905b81548152906001019060200180831161118257829003601f168201915b5050505050908060040154905085565b600581815481106111bf57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600254146111fd57600080fd5b60066001015481118015611215575060066002015481105b61121e57600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905083816003019080519060200190611279929190612148565b5082816004019080519060200190611292929190612148565b50338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060048190806001815401808255809150506001900390600052602060002090600502016000909190919091506000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001820154816001015560028201816002019080546113899291906121d6565b50600382018160030190805460018160011615610100020316600290046113b1929190612228565b50600482018160040190805460018160011615610100020316600290046113d9929190612228565b50505060016000815480929190600101919050555050505050565b60036020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114cc5780601f106114a1576101008083540402835291602001916114cc565b820191906000526020600020905b8154815290600101906020018083116114af57829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561156a5780601f1061153f5761010080835404028352916020019161156a565b820191906000526020600020905b81548152906001019060200180831161154d57829003601f168201915b5050505050905084565b606060006002541461158557600080fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020180548060200260200160405190810160405280929190818152602001828054801561164757602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116115fd575b50505050509050919050565b60608060006002541461166557600080fd5b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401818054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561177e5780601f106117535761010080835404028352916020019161177e565b820191906000526020600020905b81548152906001019060200180831161176157829003601f168201915b50505050509150808054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561181a5780601f106117ef5761010080835404028352916020019161181a565b820191906000526020600020905b8154815290600101906020018083116117fd57829003601f168201915b5050505050905091509150915091565b60006002541461183957600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050604051806020016040528060008152508160030190805190602001906118a3929190612148565b50604051806020016040528060008152508160040190805190602001906118cb929190612148565b50600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000905560028201600061194b91906122bd565b60038201600061195b91906122de565b60048201600061196b91906122de565b505060005b600480549050811015611b9d576004818154811061198a57fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415611b9057600460016004805490500381548110611a0457fe5b906000526020600020906005020160048281548110611a1f57fe5b90600052602060002090600502016000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600182015481600101556002820181600201908054611ab49291906121d6565b5060038201816003019080546001816001161561010002031660029004611adc929190612228565b5060048201816004019080546001816001161561010002031660029004611b04929190612228565b509050506004805480611b1357fe5b6001900381819060005260206000209060050201600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160009055600282016000611b6791906122bd565b600382016000611b7791906122de565b600482016000611b8791906122de565b50509055611b9d565b8080600101915050611970565b50600160008154809291906001900391905055505050565b600060025414611bc457600080fd5b600015156006800160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151415611e1b57600073ffffffffffffffffffffffffffffffffffffffff16600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611e1a5760016006800160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600660040160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611e7657600080fd5b600060025414611e8557600080fd5b60006006905085816000019080519060200190611ea3929190612148565b5084816001018190555083816002018190555082816003019080519060200190611ece929190612148565b5081816005019080519060200190611ee7929190612148565b50505050505050565b60008060025414611f0057600080fd5b6006800160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6006806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611ff05780601f10611fc557610100808354040283529160200191611ff0565b820191906000526020600020905b815481529060010190602001808311611fd357829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561209a5780601f1061206f5761010080835404028352916020019161209a565b820191906000526020600020905b81548152906001019060200180831161207d57829003601f168201915b505050505090806004015490806005018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561213e5780601f106121135761010080835404028352916020019161213e565b820191906000526020600020905b81548152906001019060200180831161212157829003601f168201915b5050505050905086565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928261217e57600085556121c5565b82601f1061219757805160ff19168380011785556121c5565b828001600101855582156121c5579182015b828111156121c45782518255916020019190600101906121a9565b5b5090506121d29190612326565b5090565b8280548282559060005260206000209081019282156122175760005260206000209182015b828111156122165782548255916001019190600101906121fb565b5b5090506122249190612326565b5090565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928261225e57600085556122ac565b82601f1061226f57805485556122ac565b828001600101855582156122ac57600052602060002091601f016020900482015b828111156122ab578254825591600101919060010190612290565b5b5090506122b99190612326565b5090565b50805460008255906000526020600020908101906122db9190612326565b50565b50805460018160011615610100020316600290046000825580601f106123045750612323565b601f0160209004906000526020600020908101906123229190612326565b5b50565b5b8082111561233f576000816000905550600101612327565b509056fea2646970667358221220efce3801bf5f922b4f4acfbf332e264c7283bff301bbf55393d40f8806ad277864736f6c63430007040033\",\"deployedBytecode\":\"0x608060405234801561001057600080fd5b50600436106100f55760003560e01c80638ab66a9011610097578063da3550ee11610066578063da3550ee146109de578063dcfda00f14610a22578063e1c5fcc114610c1f578063fcae83a714610c79576100f5565b80638ab66a90146106a157806395115447146107ee578063ad0dcf9c14610887578063af47fb3f146109b0576100f5565b806367127e43116100d357806367127e4314610283578063691a675c146103e95780637432e63a146104ed578063869eae2314610545576100f5565b80632d35a8a2146100fa57806335a893a114610118578063481c6a751461024f575b600080fd5b610102610de9565b6040518082815260200191505060405180910390f35b6101446004803603602081101561012e57600080fd5b8101908080359060200190929190505050610def565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156101aa57808201518184015260208101905061018f565b50505050905090810190601f1680156101d75780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156102105780820151818401526020810190506101f5565b50505050905090810190601f16801561023d5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b610257610f7f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103e76004803603608081101561029957600080fd5b81019080803590602001906401000000008111156102b657600080fd5b8201836020820111156102c857600080fd5b803590602001918460018302840111640100000000831117156102ea57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803590602001909291908035906020019064010000000081111561036157600080fd5b82018360208201111561037357600080fd5b8035906020019184600183028401116401000000008311171561039557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610fa3565b005b6103f161105b565b604051808060200186815260200185815260200180602001848152602001838103835288818151815260200191508051906020019080838360005b8381101561044757808201518184015260208101905061042c565b50505050905090810190601f1680156104745780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b838110156104ad578082015181840152602081019050610492565b50505050905090810190601f1680156104da5780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b6105196004803603602081101561050357600080fd5b81019080803590602001909291905050506111af565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61069f6004803603606081101561055b57600080fd5b810190808035906020019064010000000081111561057857600080fd5b82018360208201111561058a57600080fd5b803590602001918460018302840111640100000000831117156105ac57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561060f57600080fd5b82018360208201111561062157600080fd5b8035906020019184600183028401116401000000008311171561064357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291905050506111ee565b005b6106e3600480360360208110156106b757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113f4565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561074957808201518184015260208101905061072e565b50505050905090810190601f1680156107765780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156107af578082015181840152602081019050610794565b50505050905090810190601f1680156107dc5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b6108306004803603602081101561080457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611574565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610873578082015181840152602081019050610858565b505050509050019250505060405180910390f35b6108c96004803603602081101561089d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611653565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b8381101561090d5780820151818401526020810190506108f2565b50505050905090810190601f16801561093a5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015610973578082015181840152602081019050610958565b50505050905090810190601f1680156109a05780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b6109dc600480360360208110156109c657600080fd5b810190808035906020019092919050505061182a565b005b610a20600480360360208110156109f457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611bb5565b005b610c1d600480360360a0811015610a3857600080fd5b8101908080359060200190640100000000811115610a5557600080fd5b820183602082011115610a6757600080fd5b80359060200191846001830284011164010000000083111715610a8957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291908035906020019092919080359060200190640100000000811115610b0057600080fd5b820183602082011115610b1257600080fd5b80359060200191846001830284011164010000000083111715610b3457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610b9757600080fd5b820183602082011115610ba957600080fd5b80359060200191846001830284011164010000000083111715610bcb57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611e1e565b005b610c6160048036036020811015610c3557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611ef0565b60405180821515815260200191505060405180910390f35b610c81611f56565b6040518080602001878152602001868152602001806020018581526020018060200184810384528a818151815260200191508051906020019080838360005b83811015610cdb578082015181840152602081019050610cc0565b50505050905090810190601f168015610d085780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610d41578082015181840152602081019050610d26565b50505050905090810190601f168015610d6e5780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b83811015610da7578082015181840152602081019050610d8c565b50505050905090810190601f168015610dd45780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b60015481565b60048181548110610dff57600080fd5b90600052602060002090600502016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ed75780601f10610eac57610100808354040283529160200191610ed7565b820191906000526020600020905b815481529060010190602001808311610eba57829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f755780601f10610f4a57610100808354040283529160200191610f75565b820191906000526020600020905b815481529060010190602001808311610f5857829003601f168201915b5050505050905084565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ffb57600080fd5b60016002541461100a57600080fd5b6000600d905084816000019080519060200190611028929190612148565b5083816001018190555082816002018190555081816003019080519060200190611053929190612148565b505050505050565b600d806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110f55780601f106110ca576101008083540402835291602001916110f5565b820191906000526020600020905b8154815290600101906020018083116110d857829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561119f5780601f106111745761010080835404028352916020019161119f565b820191906000526020600020905b81548152906001019060200180831161118257829003601f168201915b5050505050908060040154905085565b600581815481106111bf57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600254146111fd57600080fd5b60066001015481118015611215575060066002015481105b61121e57600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905083816003019080519060200190611279929190612148565b5082816004019080519060200190611292929190612148565b50338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060048190806001815401808255809150506001900390600052602060002090600502016000909190919091506000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001820154816001015560028201816002019080546113899291906121d6565b50600382018160030190805460018160011615610100020316600290046113b1929190612228565b50600482018160040190805460018160011615610100020316600290046113d9929190612228565b50505060016000815480929190600101919050555050505050565b60036020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114cc5780601f106114a1576101008083540402835291602001916114cc565b820191906000526020600020905b8154815290600101906020018083116114af57829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561156a5780601f1061153f5761010080835404028352916020019161156a565b820191906000526020600020905b81548152906001019060200180831161154d57829003601f168201915b5050505050905084565b606060006002541461158557600080fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020180548060200260200160405190810160405280929190818152602001828054801561164757602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116115fd575b50505050509050919050565b60608060006002541461166557600080fd5b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401818054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561177e5780601f106117535761010080835404028352916020019161177e565b820191906000526020600020905b81548152906001019060200180831161176157829003601f168201915b50505050509150808054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561181a5780601f106117ef5761010080835404028352916020019161181a565b820191906000526020600020905b8154815290600101906020018083116117fd57829003601f168201915b5050505050905091509150915091565b60006002541461183957600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050604051806020016040528060008152508160030190805190602001906118a3929190612148565b50604051806020016040528060008152508160040190805190602001906118cb929190612148565b50600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000905560028201600061194b91906122bd565b60038201600061195b91906122de565b60048201600061196b91906122de565b505060005b600480549050811015611b9d576004818154811061198a57fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415611b9057600460016004805490500381548110611a0457fe5b906000526020600020906005020160048281548110611a1f57fe5b90600052602060002090600502016000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600182015481600101556002820181600201908054611ab49291906121d6565b5060038201816003019080546001816001161561010002031660029004611adc929190612228565b5060048201816004019080546001816001161561010002031660029004611b04929190612228565b509050506004805480611b1357fe5b6001900381819060005260206000209060050201600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160009055600282016000611b6791906122bd565b600382016000611b7791906122de565b600482016000611b8791906122de565b50509055611b9d565b8080600101915050611970565b50600160008154809291906001900391905055505050565b600060025414611bc457600080fd5b600015156006800160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151415611e1b57600073ffffffffffffffffffffffffffffffffffffffff16600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611e1a5760016006800160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600660040160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611e7657600080fd5b600060025414611e8557600080fd5b60006006905085816000019080519060200190611ea3929190612148565b5084816001018190555083816002018190555082816003019080519060200190611ece929190612148565b5081816005019080519060200190611ee7929190612148565b50505050505050565b60008060025414611f0057600080fd5b6006800160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6006806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611ff05780601f10611fc557610100808354040283529160200191611ff0565b820191906000526020600020905b815481529060010190602001808311611fd357829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561209a5780601f1061206f5761010080835404028352916020019161209a565b820191906000526020600020905b81548152906001019060200180831161207d57829003601f168201915b505050505090806004015490806005018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561213e5780601f106121135761010080835404028352916020019161213e565b820191906000526020600020905b81548152906001019060200180831161212157829003601f168201915b5050505050905086565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928261217e57600085556121c5565b82601f1061219757805160ff19168380011785556121c5565b828001600101855582156121c5579182015b828111156121c45782518255916020019190600101906121a9565b5b5090506121d29190612326565b5090565b8280548282559060005260206000209081019282156122175760005260206000209182015b828111156122165782548255916001019190600101906121fb565b5b5090506122249190612326565b5090565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928261225e57600085556122ac565b82601f1061226f57805485556122ac565b828001600101855582156122ac57600052602060002091601f016020900482015b828111156122ab578254825591600101919060010190612290565b5b5090506122b99190612326565b5090565b50805460008255906000526020600020908101906122db9190612326565b50565b50805460018160011615610100020316600290046000825580601f106123045750612323565b601f0160209004906000526020600020908101906123229190612326565b5b50565b5b8082111561233f576000816000905550600101612327565b509056fea2646970667358221220efce3801bf5f922b4f4acfbf332e264c7283bff301bbf55393d40f8806ad277864736f6c63430007040033\",\"immutableReferences\":{},\"generatedSources\":[],\"deployedGeneratedSources\":[],\"sourceMap\":\"68:5297:1:-:0;;;1521:193;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1648:13;1638:7;;:23;;;;;;;;;;;;;;;;;;1691:6;1686:1;:11;1685:21;;1705:1;1685:21;;;1701:1;1685:21;1672:34;;:10;:34;;;;1521:193;;68:5297;;;;;;\",\"deployedSourceMap\":\"68:5297:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;138:27;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1314:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;109:22;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;2130:326;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1481:31;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1369:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;2989:692;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1214:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4793:154;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4595:192;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3715:857;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2487:468;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1722:400;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;4953:148;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;1443:31;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;138:27;;;;:::o;1314:33::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;109:22::-;;;;;;;;;;;;:::o;2130:326::-;5162:7;;;;;;;;;;5148:21;;:10;:21;;;5140:30;;;;;;5338:1:::1;5324:10;;:15;5316:24;;;::::0;::::1;;2284:18:::2;2305:15;2284:36;;2341:5;2331:1;:7;;:15;;;;;;;;;;;;:::i;:::-;;2371:9;2357:1;:11;;:23;;;;2403:7;2391:1;:9;;:19;;;;2437:11;2421:1;:13;;:27;;;;;;;;;;;;:::i;:::-;;5351:1;2130:326:::0;;;;:::o;1481:31::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1369:36::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2989:692::-;5253:1;5239:10;;:15;5231:24;;;;;;3209:15:::1;:25;;;3194:12;:40;:82;;;;;3253:15;:23;;;3238:12;:38;3194:82;3186:91;;;::::0;::::1;;3315:34;3352:10;:22;3363:10;3352:22;;;;;;;;;;;;;;;3315:59;;3409:4;3385:16;:21;;:28;;;;;;;;;;;;:::i;:::-;;3455:11;3424:16;:28;;:42;;;;;;;;;;;;:::i;:::-;;3509:10;3477:16;:30;;;:42;;;;;;;;;;;;;;;;;;3564:14;3584:16;3564:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;3612:15;;:17;;;;;;;;;;;;;5266:1;2989:692:::0;;;:::o;1214:47::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;4793:154::-;4873:16;5253:1;5239:10;;:15;5231:24;;;;;;4910:10:::1;:20;4921:8;4910:20;;;;;;;;;;;;;;;4909:29;;4902:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4793:154:::0;;;:::o;4595:192::-;4671:13;4686;5253:1;5239:10;;:15;5231:24;;;;;;4719:10:::1;:20;4730:8;4719:20;;;;;;;;;;;;;;;:25;;4746:10;:20;4757:8;4746:20;;;;;;;;;;;;;;;:32;;4712:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4595:192:::0;;;:::o;3715:857::-;5253:1;5239:10;;:15;5231:24;;;;;;3998:34:::1;4035:10;:22;4046:10;4035:22;;;;;;;;;;;;;;;3998:59;;4068:26;;;;;;;;;;;::::0;:16:::1;:21;;:26;;;;;;;;;;;;:::i;:::-;;4105:33;;;;;;;;;;;::::0;:16:::1;:28;;:33;;;;;;;;;;;;:::i;:::-;;4230:10;:22;4241:10;4230:22;;;;;;;;;;;;;;;;4223:29:::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;4268:6;4263:274;4282:14;:21;;;;4280:1;:23;4263:274;;;4339:14;4354:1;4339:17;;;;;;;;;;;;;;;;;;:31;;;;;;;;;;;;4327:43;;:10;:43;;;4324:202;;;4408:14;4445:1;4423:14;:21;;;;:23;4408:39;;;;;;;;;;;;;;;;;;4390:14;4405:1;4390:17;;;;;;;;;;;;;;;;;;:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;4466:14;:20;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;4505:5;;4324:202;4305:3;;;;;;;4263:274;;;;4547:15;;:17;;;;;;;;;;;;;;5266:1;3715:857:::0;:::o;2487:468::-;5253:1;5239:10;;:15;5231:24;;;;;;2601:5:::1;2563:43;;:15;:22:::0;::::1;:34;2586:10;2563:34;;;;;;;;;;;;;;;;;;;;;;;;;:43;;;2560:388;;;2679:1;2625:56;;:10;:28;2636:16;2625:28;;;;;;;;;;;;;;;:42;;;;;;;;;;;;:56;;;2622:315;;2739:4;2701:15;:22:::0;::::1;:34;2724:10;2701:34;;;;;;;;;;;;;;;;:42;;;;;;;;;;;;;;;;;;2762:15;:24;;;:26;;;;;;;;;;;;;2808:10;:28;2819:16;2808:28;;;;;;;;;;;;;;;2807:39;;;:41;;;;;;;;;;;;;2868:10;:28;2879:16;2868:28;;;;;;;;;;;;;;;2867:37;;2910:10;2867:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2622:315;2560:388;2487:468:::0;:::o;1722:400::-;5162:7;;;;;;;;;;5148:21;;:10;:21;;;5140:30;;;;;;5253:1:::1;5239:10;;:15;5231:24;;;::::0;::::1;;1906:18:::2;1927:15;1906:36;;1963:5;1953:1;:7;;:15;;;;;;;;;;;;:::i;:::-;;1993:9;1979:1;:11;;:23;;;;2025:7;2013:1;:9;;:19;;;;2059:11;2043:1;:13;;:27;;;;;;;;;;;;:::i;:::-;;2100:14;2081:1;:16;;:33;;;;;;;;;;;;:::i;:::-;;5266:1;1722:400:::0;;;;;:::o;4953:148::-;5032:4;5253:1;5239:10;;:15;5231:24;;;;;;5058:15:::1;:22:::0;::::1;5057:35;5082:9;5057:35;;;;;;;;;;;;;;;;;;;;;;;;;5049:44;;4953:148:::0;;;:::o;1443:31::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o\",\"source\":\"pragma solidity ^0.7.4;\\r\\n//\\\"SPDX-License-Identifier: UNLICENSED\\\"\\r\\n\\r\\ncontract Vote{\\r\\n    //admin address\\r\\n    address public manager;\\r\\n    uint public candidatesCount;\\r\\n\\r\\n    struct user{\\r\\n        string name;\\r\\n        string email;\\r\\n        string password;\\r\\n        address userAddress;\\r\\n        address[] running;\\r\\n        address[] createdElection;\\r\\n        address[] createdPetition;\\r\\n        string userType;\\r\\n    }\\r\\n\\r\\n    struct candidate {\\r\\n        address candidateAddr;\\r\\n        uint numVotes;\\r\\n        address[] voters;\\r\\n        string name;\\r\\n        string description;\\r\\n    }\\r\\n\\r\\n    struct election {\\r\\n        string title;\\r\\n        uint startDate;\\r\\n        uint endDate;\\r\\n        string description;\\r\\n        //think about mapping?\\r\\n        uint numVotes;\\r\\n        string typeOfElection;\\r\\n        mapping(address => bool) voters ; //see if a voter has voted\\r\\n    }\\r\\n    struct petition{\\r\\n        string title;\\r\\n        uint startDate;\\r\\n        uint endDate;\\r\\n        string description;\\r\\n        uint numSigned;\\r\\n        mapping(address=>bool) signed; //see if a user has signed\\r\\n    }\\r\\n    uint typeOfVote; //0 for election and 1 for petition\\r\\n    // mapping(uint => election) public elections;\\r\\n    mapping(address => candidate) public candidates; //maps a candidate's address to the candidate\\r\\n    candidate[] public candidateArray;// DO ON SUNDAY\\r\\n    address[] public candidatesAddresses;//should replace candidateArray\\r\\n    election public currentElection;\\r\\n    petition public currentPetition;\\r\\n\\r\\n    constructor (address managerOfVote, uint typeOf){   //how does one become an admin?\\r\\n        // constructor\\r\\n        manager = managerOfVote;\\r\\n        typeOfVote = (0 == typeOf) ? 0 : 1;\\r\\n    }\\r\\n\\r\\n    function editElection (string memory title, uint256 startDate, uint256 endDate, string memory description, string memory typeOfElection)\\r\\n    public restricted typeElection {\\r\\n        election storage e = currentElection;\\r\\n        e.title = title;\\r\\n        e.startDate = startDate;\\r\\n        e.endDate = endDate;\\r\\n        e.description = description;\\r\\n        e.typeOfElection = typeOfElection;\\r\\n    }\\r\\n\\r\\n    function editPetition (string memory title, uint256 startDate, uint256 endDate, string memory description)\\r\\n    public restricted typePetition {\\r\\n        petition storage p = currentPetition;\\r\\n        p.title = title;\\r\\n        p.startDate = startDate;\\r\\n        p.endDate = endDate;\\r\\n        p.description = description;\\r\\n    }\\r\\n //vote for a candidate\\r\\n    function voteFor(address candidateAddress) public typeElection{\\r\\n        if(currentElection.voters[msg.sender] == false){\\r\\n            if(candidates[candidateAddress].candidateAddr != address(0)){\\r\\n                currentElection.voters[msg.sender]  = true;\\r\\n                currentElection.numVotes++;\\r\\n                (candidates[candidateAddress]).numVotes++;\\r\\n                (candidates[candidateAddress]).voters.push(msg.sender);\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n    //enter as a candidate\\r\\n    function enterElection(string memory name, string memory description, uint256 current_date)\\r\\n    public typeElection {\\r\\n        //Check if the registration is before the required deadline\\r\\n        require(current_date > currentElection.startDate && current_date < currentElection.endDate);\\r\\n        //enter candidate\\r\\n        candidate storage currentCandidate = candidates[msg.sender];\\r\\n        currentCandidate.name = name;\\r\\n        currentCandidate.description = description;\\r\\n        currentCandidate.candidateAddr= msg.sender;\\r\\n        currentCandidate.voters;\\r\\n        candidateArray.push(currentCandidate);\\r\\n        candidatesCount++;\\r\\n        //candidateAddrs.push(msg.sender);\\r\\n    }\\r\\n\\r\\n    //leave the election\\r\\n    function leaveElection(uint256 current_date)\\r\\n    public typeElection {\\r\\n        //Check if the registration is before the required deadline\\r\\n        //require(current_date > currentElection.startDate && current_date <= currentElection.endDate);\\r\\n        //remove candidate\\r\\n        candidate storage currentCandidate = candidates[msg.sender];\\r\\n        currentCandidate.name = \\\"\\\";\\r\\n        currentCandidate.description = \\\"\\\";\\r\\n        //currentCandidate.candidateAddr= ;\\r\\n        //remove from array\\r\\n        delete candidates[msg.sender];\\r\\n        for (uint i = 0; i<candidateArray.length; i++){\\r\\n            if(msg.sender==candidateArray[i].candidateAddr){\\r\\n                candidateArray[i]=candidateArray[candidateArray.length-1];\\r\\n                candidateArray.pop();\\r\\n                break;\\r\\n            }\\r\\n        }\\r\\n        candidatesCount--;\\r\\n    }\\r\\n\\r\\n    //GETTERS\\r\\n    function get_candidates(address candaddr) public view typeElection returns (string memory, string memory) {\\r\\n        return(candidates[candaddr].name, candidates[candaddr].description);\\r\\n    }\\r\\n    function getCandidateVoters(address candAddr) public view typeElection returns (address[] memory) {\\r\\n        return((candidates[candAddr]).voters);\\r\\n    }\\r\\n    function getElectionVoter(address voterAddr) public view typeElection returns (bool) {\\r\\n        return ((currentElection.voters)[voterAddr]);\\r\\n    }\\r\\n    modifier restricted() {\\r\\n        require(msg.sender == manager);\\r\\n        _;\\r\\n    }\\r\\n    modifier typeElection() {\\r\\n        require(typeOfVote == 0);\\r\\n        _;\\r\\n    }\\r\\n    modifier typePetition() {\\r\\n        require(typeOfVote == 1);\\r\\n        _;\\r\\n    }\\r\\n\\r\\n}\\r\\n\",\"sourcePath\":\"C:\\\\Users\\\\foubroker\\\\PROJECT_VOTE\\\\voting-at-mcgill\\\\contracts\\\\Vote.sol\",\"ast\":{\"absolutePath\":\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/Vote.sol\",\"exportedSymbols\":{\"Vote\":[526]},\"id\":527,\"license\":\"UNLICENSED\",\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":38,\"literals\":[\"solidity\",\"^\",\"0.7\",\".4\"],\"nodeType\":\"PragmaDirective\",\"src\":\"0:23:1\"},{\"abstract\":false,\"baseContracts\":[],\"contractDependencies\":[],\"contractKind\":\"contract\",\"fullyImplemented\":true,\"id\":526,\"linearizedBaseContracts\":[526],\"name\":\"Vote\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"constant\":false,\"functionSelector\":\"481c6a75\",\"id\":40,\"mutability\":\"mutable\",\"name\":\"manager\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"109:22:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":39,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"109:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"2d35a8a2\",\"id\":42,\"mutability\":\"mutable\",\"name\":\"candidatesCount\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"138:27:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":41,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"138:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"public\"},{\"canonicalName\":\"Vote.user\",\"id\":62,\"members\":[{\"constant\":false,\"id\":44,\"mutability\":\"mutable\",\"name\":\"name\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"196:11:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":43,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"196:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":46,\"mutability\":\"mutable\",\"name\":\"email\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"218:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":45,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"218:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":48,\"mutability\":\"mutable\",\"name\":\"password\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"241:15:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":47,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"241:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":50,\"mutability\":\"mutable\",\"name\":\"userAddress\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"267:19:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":49,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"267:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":53,\"mutability\":\"mutable\",\"name\":\"running\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"297:17:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":51,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"297:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":52,\"nodeType\":\"ArrayTypeName\",\"src\":\"297:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":56,\"mutability\":\"mutable\",\"name\":\"createdElection\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"325:25:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":54,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"325:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":55,\"nodeType\":\"ArrayTypeName\",\"src\":\"325:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":59,\"mutability\":\"mutable\",\"name\":\"createdPetition\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"361:25:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":57,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"361:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":58,\"nodeType\":\"ArrayTypeName\",\"src\":\"361:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":61,\"mutability\":\"mutable\",\"name\":\"userType\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"397:15:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":60,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"397:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"name\":\"user\",\"nodeType\":\"StructDefinition\",\"scope\":526,\"src\":\"174:246:1\",\"visibility\":\"public\"},{\"canonicalName\":\"Vote.candidate\",\"id\":74,\"members\":[{\"constant\":false,\"id\":64,\"mutability\":\"mutable\",\"name\":\"candidateAddr\",\"nodeType\":\"VariableDeclaration\",\"scope\":74,\"src\":\"456:21:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":63,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"456:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":66,\"mutability\":\"mutable\",\"name\":\"numVotes\",\"nodeType\":\"VariableDeclaration\",\"scope\":74,\"src\":\"488:13:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":65,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"488:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":69,\"mutability\":\"mutable\",\"name\":\"voters\",\"nodeType\":\"VariableDeclaration\",\"scope\":74,\"src\":\"512:16:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":67,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"512:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":68,\"nodeType\":\"ArrayTypeName\",\"src\":\"512:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":71,\"mutability\":\"mutable\",\"name\":\"name\",\"nodeType\":\"VariableDeclaration\",\"scope\":74,\"src\":\"539:11:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":70,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"539:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":73,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":74,\"src\":\"561:18:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":72,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"561:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"name\":\"candidate\",\"nodeType\":\"StructDefinition\",\"scope\":526,\"src\":\"428:159:1\",\"visibility\":\"public\"},{\"canonicalName\":\"Vote.election\",\"id\":91,\"members\":[{\"constant\":false,\"id\":76,\"mutability\":\"mutable\",\"name\":\"title\",\"nodeType\":\"VariableDeclaration\",\"scope\":91,\"src\":\"622:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":75,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"622:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":78,\"mutability\":\"mutable\",\"name\":\"startDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":91,\"src\":\"645:14:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":77,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"645:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":80,\"mutability\":\"mutable\",\"name\":\"endDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":91,\"src\":\"670:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":79,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"670:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":82,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":91,\"src\":\"693:18:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":81,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"693:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":84,\"mutability\":\"mutable\",\"name\":\"numVotes\",\"nodeType\":\"VariableDeclaration\",\"scope\":91,\"src\":\"754:13:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":83,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"754:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":86,\"mutability\":\"mutable\",\"name\":\"typeOfElection\",\"nodeType\":\"VariableDeclaration\",\"scope\":91,\"src\":\"778:21:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":85,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"778:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":90,\"mutability\":\"mutable\",\"name\":\"voters\",\"nodeType\":\"VariableDeclaration\",\"scope\":91,\"src\":\"810:31:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"},\"typeName\":{\"id\":89,\"keyType\":{\"id\":87,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"818:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"810:24:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"},\"valueType\":{\"id\":88,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"829:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}},\"visibility\":\"internal\"}],\"name\":\"election\",\"nodeType\":\"StructDefinition\",\"scope\":526,\"src\":\"595:282:1\",\"visibility\":\"public\"},{\"canonicalName\":\"Vote.petition\",\"id\":106,\"members\":[{\"constant\":false,\"id\":93,\"mutability\":\"mutable\",\"name\":\"title\",\"nodeType\":\"VariableDeclaration\",\"scope\":106,\"src\":\"909:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":92,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"909:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":95,\"mutability\":\"mutable\",\"name\":\"startDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":106,\"src\":\"932:14:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":94,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"932:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":97,\"mutability\":\"mutable\",\"name\":\"endDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":106,\"src\":\"957:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":96,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"957:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":99,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":106,\"src\":\"980:18:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":98,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"980:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":101,\"mutability\":\"mutable\",\"name\":\"numSigned\",\"nodeType\":\"VariableDeclaration\",\"scope\":106,\"src\":\"1009:14:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":100,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1009:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":105,\"mutability\":\"mutable\",\"name\":\"signed\",\"nodeType\":\"VariableDeclaration\",\"scope\":106,\"src\":\"1034:29:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"},\"typeName\":{\"id\":104,\"keyType\":{\"id\":102,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1042:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"1034:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"},\"valueType\":{\"id\":103,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1051:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}},\"visibility\":\"internal\"}],\"name\":\"petition\",\"nodeType\":\"StructDefinition\",\"scope\":526,\"src\":\"883:215:1\",\"visibility\":\"public\"},{\"constant\":false,\"id\":108,\"mutability\":\"mutable\",\"name\":\"typeOfVote\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"1104:15:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":107,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1104:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"functionSelector\":\"8ab66a90\",\"id\":112,\"mutability\":\"mutable\",\"name\":\"candidates\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"1214:47:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate)\"},\"typeName\":{\"id\":111,\"keyType\":{\"id\":109,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1222:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"1214:29:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate)\"},\"valueType\":{\"id\":110,\"name\":\"candidate\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":74,\"src\":\"1233:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate\"}}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"35a893a1\",\"id\":115,\"mutability\":\"mutable\",\"name\":\"candidateArray\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"1314:33:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_struct$_candidate_$74_storage_$dyn_storage\",\"typeString\":\"struct Vote.candidate[]\"},\"typeName\":{\"baseType\":{\"id\":113,\"name\":\"candidate\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":74,\"src\":\"1314:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate\"}},\"id\":114,\"nodeType\":\"ArrayTypeName\",\"src\":\"1314:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_struct$_candidate_$74_storage_$dyn_storage_ptr\",\"typeString\":\"struct Vote.candidate[]\"}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"7432e63a\",\"id\":118,\"mutability\":\"mutable\",\"name\":\"candidatesAddresses\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"1369:36:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":116,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1369:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":117,\"nodeType\":\"ArrayTypeName\",\"src\":\"1369:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"fcae83a7\",\"id\":120,\"mutability\":\"mutable\",\"name\":\"currentElection\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"1443:31:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election\"},\"typeName\":{\"id\":119,\"name\":\"election\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":91,\"src\":\"1443:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election\"}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"691a675c\",\"id\":122,\"mutability\":\"mutable\",\"name\":\"currentPetition\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"1481:31:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage\",\"typeString\":\"struct Vote.petition\"},\"typeName\":{\"id\":121,\"name\":\"petition\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":106,\"src\":\"1481:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage_ptr\",\"typeString\":\"struct Vote.petition\"}},\"visibility\":\"public\"},{\"body\":{\"id\":143,\"nodeType\":\"Block\",\"src\":\"1569:145:1\",\"statements\":[{\"expression\":{\"id\":131,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":129,\"name\":\"manager\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":40,\"src\":\"1638:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":130,\"name\":\"managerOfVote\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":124,\"src\":\"1648:13:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"1638:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":132,\"nodeType\":\"ExpressionStatement\",\"src\":\"1638:23:1\"},{\"expression\":{\"id\":141,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":133,\"name\":\"typeOfVote\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":108,\"src\":\"1672:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"condition\":{\"components\":[{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":136,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"hexValue\":\"30\",\"id\":134,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1686:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"id\":135,\"name\":\"typeOf\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":126,\"src\":\"1691:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"1686:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"id\":137,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"1685:13:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"falseExpression\":{\"hexValue\":\"31\",\"id\":139,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1705:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"id\":140,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"Conditional\",\"src\":\"1685:21:1\",\"trueExpression\":{\"hexValue\":\"30\",\"id\":138,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1701:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint8\",\"typeString\":\"uint8\"}},\"src\":\"1672:34:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":142,\"nodeType\":\"ExpressionStatement\",\"src\":\"1672:34:1\"}]},\"id\":144,\"implemented\":true,\"kind\":\"constructor\",\"modifiers\":[],\"name\":\"\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":127,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":124,\"mutability\":\"mutable\",\"name\":\"managerOfVote\",\"nodeType\":\"VariableDeclaration\",\"scope\":144,\"src\":\"1534:21:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":123,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1534:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":126,\"mutability\":\"mutable\",\"name\":\"typeOf\",\"nodeType\":\"VariableDeclaration\",\"scope\":144,\"src\":\"1557:11:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":125,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1557:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"1533:36:1\"},\"returnParameters\":{\"id\":128,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1569:0:1\"},\"scope\":526,\"src\":\"1521:193:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":195,\"nodeType\":\"Block\",\"src\":\"1895:227:1\",\"statements\":[{\"assignments\":[162],\"declarations\":[{\"constant\":false,\"id\":162,\"mutability\":\"mutable\",\"name\":\"e\",\"nodeType\":\"VariableDeclaration\",\"scope\":195,\"src\":\"1906:18:1\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election\"},\"typeName\":{\"id\":161,\"name\":\"election\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":91,\"src\":\"1906:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election\"}},\"visibility\":\"internal\"}],\"id\":164,\"initialValue\":{\"id\":163,\"name\":\"currentElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":120,\"src\":\"1927:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"1906:36:1\"},{\"expression\":{\"id\":169,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":165,\"name\":\"e\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":162,\"src\":\"1953:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election storage pointer\"}},\"id\":167,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"title\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":76,\"src\":\"1953:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":168,\"name\":\"title\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":146,\"src\":\"1963:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"1953:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":170,\"nodeType\":\"ExpressionStatement\",\"src\":\"1953:15:1\"},{\"expression\":{\"id\":175,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":171,\"name\":\"e\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":162,\"src\":\"1979:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election storage pointer\"}},\"id\":173,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"startDate\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":78,\"src\":\"1979:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":174,\"name\":\"startDate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":148,\"src\":\"1993:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"1979:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":176,\"nodeType\":\"ExpressionStatement\",\"src\":\"1979:23:1\"},{\"expression\":{\"id\":181,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":177,\"name\":\"e\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":162,\"src\":\"2013:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election storage pointer\"}},\"id\":179,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"endDate\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":80,\"src\":\"2013:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":180,\"name\":\"endDate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":150,\"src\":\"2025:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"2013:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":182,\"nodeType\":\"ExpressionStatement\",\"src\":\"2013:19:1\"},{\"expression\":{\"id\":187,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":183,\"name\":\"e\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":162,\"src\":\"2043:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election storage pointer\"}},\"id\":185,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":82,\"src\":\"2043:13:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":186,\"name\":\"description\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":152,\"src\":\"2059:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"2043:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":188,\"nodeType\":\"ExpressionStatement\",\"src\":\"2043:27:1\"},{\"expression\":{\"id\":193,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":189,\"name\":\"e\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":162,\"src\":\"2081:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election storage pointer\"}},\"id\":191,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"typeOfElection\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":86,\"src\":\"2081:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":192,\"name\":\"typeOfElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":154,\"src\":\"2100:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"2081:33:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":194,\"nodeType\":\"ExpressionStatement\",\"src\":\"2081:33:1\"}]},\"functionSelector\":\"dcfda00f\",\"id\":196,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":157,\"modifierName\":{\"id\":156,\"name\":\"restricted\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":505,\"src\":\"1871:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"1871:10:1\"},{\"id\":159,\"modifierName\":{\"id\":158,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":515,\"src\":\"1882:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"1882:12:1\"}],\"name\":\"editElection\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":155,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":146,\"mutability\":\"mutable\",\"name\":\"title\",\"nodeType\":\"VariableDeclaration\",\"scope\":196,\"src\":\"1745:19:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":145,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1745:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":148,\"mutability\":\"mutable\",\"name\":\"startDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":196,\"src\":\"1766:17:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":147,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1766:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":150,\"mutability\":\"mutable\",\"name\":\"endDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":196,\"src\":\"1785:15:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":149,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1785:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":152,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":196,\"src\":\"1802:25:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":151,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1802:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":154,\"mutability\":\"mutable\",\"name\":\"typeOfElection\",\"nodeType\":\"VariableDeclaration\",\"scope\":196,\"src\":\"1829:28:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":153,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1829:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"src\":\"1744:114:1\"},\"returnParameters\":{\"id\":160,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1895:0:1\"},\"scope\":526,\"src\":\"1722:400:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":239,\"nodeType\":\"Block\",\"src\":\"2273:183:1\",\"statements\":[{\"assignments\":[212],\"declarations\":[{\"constant\":false,\"id\":212,\"mutability\":\"mutable\",\"name\":\"p\",\"nodeType\":\"VariableDeclaration\",\"scope\":239,\"src\":\"2284:18:1\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage_ptr\",\"typeString\":\"struct Vote.petition\"},\"typeName\":{\"id\":211,\"name\":\"petition\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":106,\"src\":\"2284:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage_ptr\",\"typeString\":\"struct Vote.petition\"}},\"visibility\":\"internal\"}],\"id\":214,\"initialValue\":{\"id\":213,\"name\":\"currentPetition\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":122,\"src\":\"2305:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage\",\"typeString\":\"struct Vote.petition storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"2284:36:1\"},{\"expression\":{\"id\":219,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":215,\"name\":\"p\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":212,\"src\":\"2331:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage_ptr\",\"typeString\":\"struct Vote.petition storage pointer\"}},\"id\":217,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"title\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":93,\"src\":\"2331:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":218,\"name\":\"title\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":198,\"src\":\"2341:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"2331:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":220,\"nodeType\":\"ExpressionStatement\",\"src\":\"2331:15:1\"},{\"expression\":{\"id\":225,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":221,\"name\":\"p\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":212,\"src\":\"2357:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage_ptr\",\"typeString\":\"struct Vote.petition storage pointer\"}},\"id\":223,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"startDate\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":95,\"src\":\"2357:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":224,\"name\":\"startDate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":200,\"src\":\"2371:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"2357:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":226,\"nodeType\":\"ExpressionStatement\",\"src\":\"2357:23:1\"},{\"expression\":{\"id\":231,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":227,\"name\":\"p\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":212,\"src\":\"2391:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage_ptr\",\"typeString\":\"struct Vote.petition storage pointer\"}},\"id\":229,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"endDate\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":97,\"src\":\"2391:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":230,\"name\":\"endDate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":202,\"src\":\"2403:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"2391:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":232,\"nodeType\":\"ExpressionStatement\",\"src\":\"2391:19:1\"},{\"expression\":{\"id\":237,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":233,\"name\":\"p\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":212,\"src\":\"2421:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage_ptr\",\"typeString\":\"struct Vote.petition storage pointer\"}},\"id\":235,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":99,\"src\":\"2421:13:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":236,\"name\":\"description\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":204,\"src\":\"2437:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"2421:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":238,\"nodeType\":\"ExpressionStatement\",\"src\":\"2421:27:1\"}]},\"functionSelector\":\"67127e43\",\"id\":240,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":207,\"modifierName\":{\"id\":206,\"name\":\"restricted\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":505,\"src\":\"2249:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"2249:10:1\"},{\"id\":209,\"modifierName\":{\"id\":208,\"name\":\"typePetition\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":525,\"src\":\"2260:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"2260:12:1\"}],\"name\":\"editPetition\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":205,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":198,\"mutability\":\"mutable\",\"name\":\"title\",\"nodeType\":\"VariableDeclaration\",\"scope\":240,\"src\":\"2153:19:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":197,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2153:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":200,\"mutability\":\"mutable\",\"name\":\"startDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":240,\"src\":\"2174:17:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":199,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2174:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":202,\"mutability\":\"mutable\",\"name\":\"endDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":240,\"src\":\"2193:15:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":201,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2193:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":204,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":240,\"src\":\"2210:25:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":203,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2210:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"src\":\"2152:84:1\"},\"returnParameters\":{\"id\":210,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2273:0:1\"},\"scope\":526,\"src\":\"2130:326:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":298,\"nodeType\":\"Block\",\"src\":\"2549:406:1\",\"statements\":[{\"condition\":{\"commonType\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"id\":253,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"baseExpression\":{\"expression\":{\"id\":247,\"name\":\"currentElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":120,\"src\":\"2563:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election storage ref\"}},\"id\":248,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"voters\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":90,\"src\":\"2563:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":251,\"indexExpression\":{\"expression\":{\"id\":249,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"2586:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":250,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"2586:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2563:34:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"hexValue\":\"66616c7365\",\"id\":252,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2601:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"false\"},\"src\":\"2563:43:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":297,\"nodeType\":\"IfStatement\",\"src\":\"2560:388:1\",\"trueBody\":{\"id\":296,\"nodeType\":\"Block\",\"src\":\"2607:341:1\",\"statements\":[{\"condition\":{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"id\":262,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"baseExpression\":{\"id\":254,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"2625:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":256,\"indexExpression\":{\"id\":255,\"name\":\"candidateAddress\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":242,\"src\":\"2636:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2625:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":257,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"candidateAddr\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":64,\"src\":\"2625:42:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"!=\",\"rightExpression\":{\"arguments\":[{\"hexValue\":\"30\",\"id\":260,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2679:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"}],\"id\":259,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"nodeType\":\"ElementaryTypeNameExpression\",\"src\":\"2671:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_type$_t_address_$\",\"typeString\":\"type(address)\"},\"typeName\":{\"id\":258,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2671:7:1\",\"typeDescriptions\":{}}},\"id\":261,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"typeConversion\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2671:10:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"2625:56:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":295,\"nodeType\":\"IfStatement\",\"src\":\"2622:315:1\",\"trueBody\":{\"id\":294,\"nodeType\":\"Block\",\"src\":\"2682:255:1\",\"statements\":[{\"expression\":{\"id\":270,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"expression\":{\"id\":263,\"name\":\"currentElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":120,\"src\":\"2701:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election storage ref\"}},\"id\":267,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"voters\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":90,\"src\":\"2701:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":268,\"indexExpression\":{\"expression\":{\"id\":265,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"2724:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":266,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"2724:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"2701:34:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"hexValue\":\"74727565\",\"id\":269,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2739:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"src\":\"2701:42:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":271,\"nodeType\":\"ExpressionStatement\",\"src\":\"2701:42:1\"},{\"expression\":{\"id\":275,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"2762:26:1\",\"subExpression\":{\"expression\":{\"id\":272,\"name\":\"currentElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":120,\"src\":\"2762:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election storage ref\"}},\"id\":274,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"numVotes\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":84,\"src\":\"2762:24:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":276,\"nodeType\":\"ExpressionStatement\",\"src\":\"2762:26:1\"},{\"expression\":{\"id\":282,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"2807:41:1\",\"subExpression\":{\"expression\":{\"components\":[{\"baseExpression\":{\"id\":277,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"2808:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":279,\"indexExpression\":{\"id\":278,\"name\":\"candidateAddress\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":242,\"src\":\"2819:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2808:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}}],\"id\":280,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"2807:30:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":281,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"numVotes\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":66,\"src\":\"2807:39:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":283,\"nodeType\":\"ExpressionStatement\",\"src\":\"2807:41:1\"},{\"expression\":{\"arguments\":[{\"expression\":{\"id\":290,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"2910:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":291,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"2910:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}],\"expression\":{\"expression\":{\"components\":[{\"baseExpression\":{\"id\":284,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"2868:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":286,\"indexExpression\":{\"id\":285,\"name\":\"candidateAddress\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":242,\"src\":\"2879:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2868:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}}],\"id\":287,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"2867:30:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":288,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"voters\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":69,\"src\":\"2867:37:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":289,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"push\",\"nodeType\":\"MemberAccess\",\"src\":\"2867:42:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypush_nonpayable$_t_address_$returns$__$\",\"typeString\":\"function (address)\"}},\"id\":292,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2867:54:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":293,\"nodeType\":\"ExpressionStatement\",\"src\":\"2867:54:1\"}]}}]}}]},\"functionSelector\":\"da3550ee\",\"id\":299,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":245,\"modifierName\":{\"id\":244,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":515,\"src\":\"2537:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"2537:12:1\"}],\"name\":\"voteFor\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":243,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":242,\"mutability\":\"mutable\",\"name\":\"candidateAddress\",\"nodeType\":\"VariableDeclaration\",\"scope\":299,\"src\":\"2504:24:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":241,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2504:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"src\":\"2503:26:1\"},\"returnParameters\":{\"id\":246,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2549:0:1\"},\"scope\":526,\"src\":\"2487:468:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":361,\"nodeType\":\"Block\",\"src\":\"3106:575:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"id\":319,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":314,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":311,\"name\":\"current_date\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":305,\"src\":\"3194:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\">\",\"rightExpression\":{\"expression\":{\"id\":312,\"name\":\"currentElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":120,\"src\":\"3209:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election storage ref\"}},\"id\":313,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"startDate\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":78,\"src\":\"3209:25:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"3194:40:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"&&\",\"rightExpression\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":318,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":315,\"name\":\"current_date\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":305,\"src\":\"3238:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<\",\"rightExpression\":{\"expression\":{\"id\":316,\"name\":\"currentElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":120,\"src\":\"3253:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election storage ref\"}},\"id\":317,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"endDate\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":80,\"src\":\"3253:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"3238:38:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"src\":\"3194:82:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":310,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"3186:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":320,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"3186:91:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":321,\"nodeType\":\"ExpressionStatement\",\"src\":\"3186:91:1\"},{\"assignments\":[323],\"declarations\":[{\"constant\":false,\"id\":323,\"mutability\":\"mutable\",\"name\":\"currentCandidate\",\"nodeType\":\"VariableDeclaration\",\"scope\":361,\"src\":\"3315:34:1\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate\"},\"typeName\":{\"id\":322,\"name\":\"candidate\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":74,\"src\":\"3315:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate\"}},\"visibility\":\"internal\"}],\"id\":328,\"initialValue\":{\"baseExpression\":{\"id\":324,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"3352:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":327,\"indexExpression\":{\"expression\":{\"id\":325,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3363:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":326,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"3363:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"3352:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"3315:59:1\"},{\"expression\":{\"id\":333,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":329,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":323,\"src\":\"3385:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}},\"id\":331,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":71,\"src\":\"3385:21:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":332,\"name\":\"name\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":301,\"src\":\"3409:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"3385:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":334,\"nodeType\":\"ExpressionStatement\",\"src\":\"3385:28:1\"},{\"expression\":{\"id\":339,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":335,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":323,\"src\":\"3424:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}},\"id\":337,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":73,\"src\":\"3424:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":338,\"name\":\"description\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":303,\"src\":\"3455:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"3424:42:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":340,\"nodeType\":\"ExpressionStatement\",\"src\":\"3424:42:1\"},{\"expression\":{\"id\":346,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":341,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":323,\"src\":\"3477:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}},\"id\":343,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"candidateAddr\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":64,\"src\":\"3477:30:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"expression\":{\"id\":344,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3509:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":345,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"3509:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"3477:42:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":347,\"nodeType\":\"ExpressionStatement\",\"src\":\"3477:42:1\"},{\"expression\":{\"expression\":{\"id\":348,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":323,\"src\":\"3530:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}},\"id\":350,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"voters\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":69,\"src\":\"3530:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":351,\"nodeType\":\"ExpressionStatement\",\"src\":\"3530:23:1\"},{\"expression\":{\"arguments\":[{\"id\":355,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":323,\"src\":\"3584:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}],\"expression\":{\"id\":352,\"name\":\"candidateArray\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"3564:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_struct$_candidate_$74_storage_$dyn_storage\",\"typeString\":\"struct Vote.candidate storage ref[] storage ref\"}},\"id\":354,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"push\",\"nodeType\":\"MemberAccess\",\"src\":\"3564:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypush_nonpayable$_t_struct$_candidate_$74_storage_$returns$__$\",\"typeString\":\"function (struct Vote.candidate storage ref)\"}},\"id\":356,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"3564:37:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":357,\"nodeType\":\"ExpressionStatement\",\"src\":\"3564:37:1\"},{\"expression\":{\"id\":359,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"3612:17:1\",\"subExpression\":{\"id\":358,\"name\":\"candidatesCount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":42,\"src\":\"3612:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":360,\"nodeType\":\"ExpressionStatement\",\"src\":\"3612:17:1\"}]},\"functionSelector\":\"869eae23\",\"id\":362,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":308,\"modifierName\":{\"id\":307,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":515,\"src\":\"3093:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"3093:12:1\"}],\"name\":\"enterElection\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":306,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":301,\"mutability\":\"mutable\",\"name\":\"name\",\"nodeType\":\"VariableDeclaration\",\"scope\":362,\"src\":\"3012:18:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":300,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3012:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":303,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":362,\"src\":\"3032:25:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":302,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3032:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":305,\"mutability\":\"mutable\",\"name\":\"current_date\",\"nodeType\":\"VariableDeclaration\",\"scope\":362,\"src\":\"3059:20:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":304,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3059:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"3011:69:1\"},\"returnParameters\":{\"id\":309,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"3106:0:1\"},\"scope\":526,\"src\":\"2989:692:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":436,\"nodeType\":\"Block\",\"src\":\"3785:787:1\",\"statements\":[{\"assignments\":[370],\"declarations\":[{\"constant\":false,\"id\":370,\"mutability\":\"mutable\",\"name\":\"currentCandidate\",\"nodeType\":\"VariableDeclaration\",\"scope\":436,\"src\":\"3998:34:1\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate\"},\"typeName\":{\"id\":369,\"name\":\"candidate\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":74,\"src\":\"3998:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate\"}},\"visibility\":\"internal\"}],\"id\":375,\"initialValue\":{\"baseExpression\":{\"id\":371,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"4035:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":374,\"indexExpression\":{\"expression\":{\"id\":372,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4046:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":373,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"4046:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4035:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"3998:59:1\"},{\"expression\":{\"id\":380,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":376,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":370,\"src\":\"4068:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}},\"id\":378,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":71,\"src\":\"4068:21:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"hexValue\":\"\",\"id\":379,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"4092:2:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470\",\"typeString\":\"literal_string \\\"\\\"\"},\"value\":\"\"},\"src\":\"4068:26:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":381,\"nodeType\":\"ExpressionStatement\",\"src\":\"4068:26:1\"},{\"expression\":{\"id\":386,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":382,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":370,\"src\":\"4105:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}},\"id\":384,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":73,\"src\":\"4105:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"hexValue\":\"\",\"id\":385,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"4136:2:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470\",\"typeString\":\"literal_string \\\"\\\"\"},\"value\":\"\"},\"src\":\"4105:33:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":387,\"nodeType\":\"ExpressionStatement\",\"src\":\"4105:33:1\"},{\"expression\":{\"id\":392,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"delete\",\"prefix\":true,\"src\":\"4223:29:1\",\"subExpression\":{\"baseExpression\":{\"id\":388,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"4230:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":391,\"indexExpression\":{\"expression\":{\"id\":389,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4241:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":390,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"4241:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"4230:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":393,\"nodeType\":\"ExpressionStatement\",\"src\":\"4223:29:1\"},{\"body\":{\"id\":431,\"nodeType\":\"Block\",\"src\":\"4309:228:1\",\"statements\":[{\"condition\":{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"id\":411,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"id\":405,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4327:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":406,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"4327:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"expression\":{\"baseExpression\":{\"id\":407,\"name\":\"candidateArray\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"4339:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_struct$_candidate_$74_storage_$dyn_storage\",\"typeString\":\"struct Vote.candidate storage ref[] storage ref\"}},\"id\":409,\"indexExpression\":{\"id\":408,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":395,\"src\":\"4354:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4339:17:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":410,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"candidateAddr\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":64,\"src\":\"4339:31:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"4327:43:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":430,\"nodeType\":\"IfStatement\",\"src\":\"4324:202:1\",\"trueBody\":{\"id\":429,\"nodeType\":\"Block\",\"src\":\"4371:155:1\",\"statements\":[{\"expression\":{\"id\":421,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"id\":412,\"name\":\"candidateArray\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"4390:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_struct$_candidate_$74_storage_$dyn_storage\",\"typeString\":\"struct Vote.candidate storage ref[] storage ref\"}},\"id\":414,\"indexExpression\":{\"id\":413,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":395,\"src\":\"4405:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"4390:17:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"baseExpression\":{\"id\":415,\"name\":\"candidateArray\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"4408:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_struct$_candidate_$74_storage_$dyn_storage\",\"typeString\":\"struct Vote.candidate storage ref[] storage ref\"}},\"id\":420,\"indexExpression\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":419,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"id\":416,\"name\":\"candidateArray\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"4423:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_struct$_candidate_$74_storage_$dyn_storage\",\"typeString\":\"struct Vote.candidate storage ref[] storage ref\"}},\"id\":417,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"src\":\"4423:21:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"-\",\"rightExpression\":{\"hexValue\":\"31\",\"id\":418,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"4445:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"src\":\"4423:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4408:39:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"src\":\"4390:57:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":422,\"nodeType\":\"ExpressionStatement\",\"src\":\"4390:57:1\"},{\"expression\":{\"arguments\":[],\"expression\":{\"argumentTypes\":[],\"expression\":{\"id\":423,\"name\":\"candidateArray\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"4466:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_struct$_candidate_$74_storage_$dyn_storage\",\"typeString\":\"struct Vote.candidate storage ref[] storage ref\"}},\"id\":425,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"pop\",\"nodeType\":\"MemberAccess\",\"src\":\"4466:18:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypop_nonpayable$__$returns$__$\",\"typeString\":\"function ()\"}},\"id\":426,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"4466:20:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":427,\"nodeType\":\"ExpressionStatement\",\"src\":\"4466:20:1\"},{\"id\":428,\"nodeType\":\"Break\",\"src\":\"4505:5:1\"}]}}]},\"condition\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":401,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":398,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":395,\"src\":\"4280:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<\",\"rightExpression\":{\"expression\":{\"id\":399,\"name\":\"candidateArray\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"4282:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_struct$_candidate_$74_storage_$dyn_storage\",\"typeString\":\"struct Vote.candidate storage ref[] storage ref\"}},\"id\":400,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"src\":\"4282:21:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"4280:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":432,\"initializationExpression\":{\"assignments\":[395],\"declarations\":[{\"constant\":false,\"id\":395,\"mutability\":\"mutable\",\"name\":\"i\",\"nodeType\":\"VariableDeclaration\",\"scope\":432,\"src\":\"4268:6:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":394,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4268:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"id\":397,\"initialValue\":{\"hexValue\":\"30\",\"id\":396,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"4277:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"4268:10:1\"},\"loopExpression\":{\"expression\":{\"id\":403,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"4305:3:1\",\"subExpression\":{\"id\":402,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":395,\"src\":\"4305:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":404,\"nodeType\":\"ExpressionStatement\",\"src\":\"4305:3:1\"},\"nodeType\":\"ForStatement\",\"src\":\"4263:274:1\"},{\"expression\":{\"id\":434,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"--\",\"prefix\":false,\"src\":\"4547:17:1\",\"subExpression\":{\"id\":433,\"name\":\"candidatesCount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":42,\"src\":\"4547:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":435,\"nodeType\":\"ExpressionStatement\",\"src\":\"4547:17:1\"}]},\"functionSelector\":\"af47fb3f\",\"id\":437,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":367,\"modifierName\":{\"id\":366,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":515,\"src\":\"3772:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"3772:12:1\"}],\"name\":\"leaveElection\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":365,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":364,\"mutability\":\"mutable\",\"name\":\"current_date\",\"nodeType\":\"VariableDeclaration\",\"scope\":437,\"src\":\"3738:20:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":363,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3738:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"3737:22:1\"},\"returnParameters\":{\"id\":368,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"3785:0:1\"},\"scope\":526,\"src\":\"3715:857:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":458,\"nodeType\":\"Block\",\"src\":\"4701:86:1\",\"statements\":[{\"expression\":{\"components\":[{\"expression\":{\"baseExpression\":{\"id\":448,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"4719:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":450,\"indexExpression\":{\"id\":449,\"name\":\"candaddr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":439,\"src\":\"4730:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4719:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":451,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":71,\"src\":\"4719:25:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},{\"expression\":{\"baseExpression\":{\"id\":452,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"4746:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":454,\"indexExpression\":{\"id\":453,\"name\":\"candaddr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":439,\"src\":\"4757:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4746:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":455,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":73,\"src\":\"4746:32:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}}],\"id\":456,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"4718:61:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$_t_string_storage_$_t_string_storage_$\",\"typeString\":\"tuple(string storage ref,string storage ref)\"}},\"functionReturnParameters\":447,\"id\":457,\"nodeType\":\"Return\",\"src\":\"4712:67:1\"}]},\"functionSelector\":\"ad0dcf9c\",\"id\":459,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":442,\"modifierName\":{\"id\":441,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":515,\"src\":\"4649:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"4649:12:1\"}],\"name\":\"get_candidates\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":440,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":439,\"mutability\":\"mutable\",\"name\":\"candaddr\",\"nodeType\":\"VariableDeclaration\",\"scope\":459,\"src\":\"4619:16:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":438,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4619:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"src\":\"4618:18:1\"},\"returnParameters\":{\"id\":447,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":444,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":459,\"src\":\"4671:13:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":443,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4671:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":446,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":459,\"src\":\"4686:13:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":445,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4686:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"src\":\"4670:30:1\"},\"scope\":526,\"src\":\"4595:192:1\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":476,\"nodeType\":\"Block\",\"src\":\"4891:56:1\",\"statements\":[{\"expression\":{\"components\":[{\"expression\":{\"components\":[{\"baseExpression\":{\"id\":469,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"4910:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":471,\"indexExpression\":{\"id\":470,\"name\":\"candAddr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":461,\"src\":\"4921:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4910:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}}],\"id\":472,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"4909:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":473,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"voters\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":69,\"src\":\"4909:29:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}}],\"id\":474,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"4908:31:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"functionReturnParameters\":468,\"id\":475,\"nodeType\":\"Return\",\"src\":\"4902:37:1\"}]},\"functionSelector\":\"95115447\",\"id\":477,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":464,\"modifierName\":{\"id\":463,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":515,\"src\":\"4851:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"4851:12:1\"}],\"name\":\"getCandidateVoters\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":462,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":461,\"mutability\":\"mutable\",\"name\":\"candAddr\",\"nodeType\":\"VariableDeclaration\",\"scope\":477,\"src\":\"4821:16:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":460,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4821:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"src\":\"4820:18:1\"},\"returnParameters\":{\"id\":468,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":467,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":477,\"src\":\"4873:16:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":465,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4873:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":466,\"nodeType\":\"ArrayTypeName\",\"src\":\"4873:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"}],\"src\":\"4872:18:1\"},\"scope\":526,\"src\":\"4793:154:1\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":493,\"nodeType\":\"Block\",\"src\":\"5038:63:1\",\"statements\":[{\"expression\":{\"components\":[{\"baseExpression\":{\"components\":[{\"expression\":{\"id\":486,\"name\":\"currentElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":120,\"src\":\"5058:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election storage ref\"}},\"id\":487,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"voters\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":90,\"src\":\"5058:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}}],\"id\":488,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"5057:24:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":490,\"indexExpression\":{\"id\":489,\"name\":\"voterAddr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":479,\"src\":\"5082:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"5057:35:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"id\":491,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"5056:37:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"functionReturnParameters\":485,\"id\":492,\"nodeType\":\"Return\",\"src\":\"5049:44:1\"}]},\"functionSelector\":\"e1c5fcc1\",\"id\":494,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":482,\"modifierName\":{\"id\":481,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":515,\"src\":\"5010:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"5010:12:1\"}],\"name\":\"getElectionVoter\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":480,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":479,\"mutability\":\"mutable\",\"name\":\"voterAddr\",\"nodeType\":\"VariableDeclaration\",\"scope\":494,\"src\":\"4979:17:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":478,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4979:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"src\":\"4978:19:1\"},\"returnParameters\":{\"id\":485,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":484,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":494,\"src\":\"5032:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":483,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5032:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"5031:6:1\"},\"scope\":526,\"src\":\"4953:148:1\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":504,\"nodeType\":\"Block\",\"src\":\"5129:61:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"id\":500,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"id\":497,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"5148:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":498,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"5148:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"id\":499,\"name\":\"manager\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":40,\"src\":\"5162:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"5148:21:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":496,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"5140:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":501,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5140:30:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":502,\"nodeType\":\"ExpressionStatement\",\"src\":\"5140:30:1\"},{\"id\":503,\"nodeType\":\"PlaceholderStatement\",\"src\":\"5181:1:1\"}]},\"id\":505,\"name\":\"restricted\",\"nodeType\":\"ModifierDefinition\",\"parameters\":{\"id\":495,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"5126:2:1\"},\"src\":\"5107:83:1\",\"virtual\":false,\"visibility\":\"internal\"},{\"body\":{\"id\":514,\"nodeType\":\"Block\",\"src\":\"5220:55:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":510,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":508,\"name\":\"typeOfVote\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":108,\"src\":\"5239:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"hexValue\":\"30\",\"id\":509,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5253:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"src\":\"5239:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":507,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"5231:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":511,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5231:24:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":512,\"nodeType\":\"ExpressionStatement\",\"src\":\"5231:24:1\"},{\"id\":513,\"nodeType\":\"PlaceholderStatement\",\"src\":\"5266:1:1\"}]},\"id\":515,\"name\":\"typeElection\",\"nodeType\":\"ModifierDefinition\",\"parameters\":{\"id\":506,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"5217:2:1\"},\"src\":\"5196:79:1\",\"virtual\":false,\"visibility\":\"internal\"},{\"body\":{\"id\":524,\"nodeType\":\"Block\",\"src\":\"5305:55:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":520,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":518,\"name\":\"typeOfVote\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":108,\"src\":\"5324:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"hexValue\":\"31\",\"id\":519,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5338:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"src\":\"5324:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":517,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"5316:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":521,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5316:24:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":522,\"nodeType\":\"ExpressionStatement\",\"src\":\"5316:24:1\"},{\"id\":523,\"nodeType\":\"PlaceholderStatement\",\"src\":\"5351:1:1\"}]},\"id\":525,\"name\":\"typePetition\",\"nodeType\":\"ModifierDefinition\",\"parameters\":{\"id\":516,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"5302:2:1\"},\"src\":\"5281:79:1\",\"virtual\":false,\"visibility\":\"internal\"}],\"scope\":527,\"src\":\"68:5297:1\"}],\"src\":\"0:5367:1\"},\"legacyAST\":{\"attributes\":{\"absolutePath\":\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/Vote.sol\",\"exportedSymbols\":{\"Vote\":[526]},\"license\":\"UNLICENSED\"},\"children\":[{\"attributes\":{\"literals\":[\"solidity\",\"^\",\"0.7\",\".4\"]},\"id\":38,\"name\":\"PragmaDirective\",\"src\":\"0:23:1\"},{\"attributes\":{\"abstract\":false,\"baseContracts\":[null],\"contractDependencies\":[null],\"contractKind\":\"contract\",\"fullyImplemented\":true,\"linearizedBaseContracts\":[526],\"name\":\"Vote\",\"scope\":527},\"children\":[{\"attributes\":{\"constant\":false,\"functionSelector\":\"481c6a75\",\"mutability\":\"mutable\",\"name\":\"manager\",\"scope\":526,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":39,\"name\":\"ElementaryTypeName\",\"src\":\"109:7:1\"}],\"id\":40,\"name\":\"VariableDeclaration\",\"src\":\"109:22:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"2d35a8a2\",\"mutability\":\"mutable\",\"name\":\"candidatesCount\",\"scope\":526,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":41,\"name\":\"ElementaryTypeName\",\"src\":\"138:4:1\"}],\"id\":42,\"name\":\"VariableDeclaration\",\"src\":\"138:27:1\"},{\"attributes\":{\"canonicalName\":\"Vote.user\",\"name\":\"user\",\"scope\":526,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"name\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":43,\"name\":\"ElementaryTypeName\",\"src\":\"196:6:1\"}],\"id\":44,\"name\":\"VariableDeclaration\",\"src\":\"196:11:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"email\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":45,\"name\":\"ElementaryTypeName\",\"src\":\"218:6:1\"}],\"id\":46,\"name\":\"VariableDeclaration\",\"src\":\"218:12:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"password\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":47,\"name\":\"ElementaryTypeName\",\"src\":\"241:6:1\"}],\"id\":48,\"name\":\"VariableDeclaration\",\"src\":\"241:15:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"userAddress\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":49,\"name\":\"ElementaryTypeName\",\"src\":\"267:7:1\"}],\"id\":50,\"name\":\"VariableDeclaration\",\"src\":\"267:19:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"running\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":51,\"name\":\"ElementaryTypeName\",\"src\":\"297:7:1\"}],\"id\":52,\"name\":\"ArrayTypeName\",\"src\":\"297:9:1\"}],\"id\":53,\"name\":\"VariableDeclaration\",\"src\":\"297:17:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"createdElection\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":54,\"name\":\"ElementaryTypeName\",\"src\":\"325:7:1\"}],\"id\":55,\"name\":\"ArrayTypeName\",\"src\":\"325:9:1\"}],\"id\":56,\"name\":\"VariableDeclaration\",\"src\":\"325:25:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"createdPetition\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":57,\"name\":\"ElementaryTypeName\",\"src\":\"361:7:1\"}],\"id\":58,\"name\":\"ArrayTypeName\",\"src\":\"361:9:1\"}],\"id\":59,\"name\":\"VariableDeclaration\",\"src\":\"361:25:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"userType\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":60,\"name\":\"ElementaryTypeName\",\"src\":\"397:6:1\"}],\"id\":61,\"name\":\"VariableDeclaration\",\"src\":\"397:15:1\"}],\"id\":62,\"name\":\"StructDefinition\",\"src\":\"174:246:1\"},{\"attributes\":{\"canonicalName\":\"Vote.candidate\",\"name\":\"candidate\",\"scope\":526,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"candidateAddr\",\"scope\":74,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":63,\"name\":\"ElementaryTypeName\",\"src\":\"456:7:1\"}],\"id\":64,\"name\":\"VariableDeclaration\",\"src\":\"456:21:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"numVotes\",\"scope\":74,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":65,\"name\":\"ElementaryTypeName\",\"src\":\"488:4:1\"}],\"id\":66,\"name\":\"VariableDeclaration\",\"src\":\"488:13:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"voters\",\"scope\":74,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":67,\"name\":\"ElementaryTypeName\",\"src\":\"512:7:1\"}],\"id\":68,\"name\":\"ArrayTypeName\",\"src\":\"512:9:1\"}],\"id\":69,\"name\":\"VariableDeclaration\",\"src\":\"512:16:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"name\",\"scope\":74,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":70,\"name\":\"ElementaryTypeName\",\"src\":\"539:6:1\"}],\"id\":71,\"name\":\"VariableDeclaration\",\"src\":\"539:11:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":74,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":72,\"name\":\"ElementaryTypeName\",\"src\":\"561:6:1\"}],\"id\":73,\"name\":\"VariableDeclaration\",\"src\":\"561:18:1\"}],\"id\":74,\"name\":\"StructDefinition\",\"src\":\"428:159:1\"},{\"attributes\":{\"canonicalName\":\"Vote.election\",\"name\":\"election\",\"scope\":526,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"title\",\"scope\":91,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":75,\"name\":\"ElementaryTypeName\",\"src\":\"622:6:1\"}],\"id\":76,\"name\":\"VariableDeclaration\",\"src\":\"622:12:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"startDate\",\"scope\":91,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":77,\"name\":\"ElementaryTypeName\",\"src\":\"645:4:1\"}],\"id\":78,\"name\":\"VariableDeclaration\",\"src\":\"645:14:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"endDate\",\"scope\":91,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":79,\"name\":\"ElementaryTypeName\",\"src\":\"670:4:1\"}],\"id\":80,\"name\":\"VariableDeclaration\",\"src\":\"670:12:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":91,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":81,\"name\":\"ElementaryTypeName\",\"src\":\"693:6:1\"}],\"id\":82,\"name\":\"VariableDeclaration\",\"src\":\"693:18:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"numVotes\",\"scope\":91,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":83,\"name\":\"ElementaryTypeName\",\"src\":\"754:4:1\"}],\"id\":84,\"name\":\"VariableDeclaration\",\"src\":\"754:13:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"typeOfElection\",\"scope\":91,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":85,\"name\":\"ElementaryTypeName\",\"src\":\"778:6:1\"}],\"id\":86,\"name\":\"VariableDeclaration\",\"src\":\"778:21:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"voters\",\"scope\":91,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"mapping(address => bool)\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"mapping(address => bool)\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"type\":\"address\"},\"id\":87,\"name\":\"ElementaryTypeName\",\"src\":\"818:7:1\"},{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":88,\"name\":\"ElementaryTypeName\",\"src\":\"829:4:1\"}],\"id\":89,\"name\":\"Mapping\",\"src\":\"810:24:1\"}],\"id\":90,\"name\":\"VariableDeclaration\",\"src\":\"810:31:1\"}],\"id\":91,\"name\":\"StructDefinition\",\"src\":\"595:282:1\"},{\"attributes\":{\"canonicalName\":\"Vote.petition\",\"name\":\"petition\",\"scope\":526,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"title\",\"scope\":106,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":92,\"name\":\"ElementaryTypeName\",\"src\":\"909:6:1\"}],\"id\":93,\"name\":\"VariableDeclaration\",\"src\":\"909:12:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"startDate\",\"scope\":106,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":94,\"name\":\"ElementaryTypeName\",\"src\":\"932:4:1\"}],\"id\":95,\"name\":\"VariableDeclaration\",\"src\":\"932:14:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"endDate\",\"scope\":106,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":96,\"name\":\"ElementaryTypeName\",\"src\":\"957:4:1\"}],\"id\":97,\"name\":\"VariableDeclaration\",\"src\":\"957:12:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":106,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":98,\"name\":\"ElementaryTypeName\",\"src\":\"980:6:1\"}],\"id\":99,\"name\":\"VariableDeclaration\",\"src\":\"980:18:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"numSigned\",\"scope\":106,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":100,\"name\":\"ElementaryTypeName\",\"src\":\"1009:4:1\"}],\"id\":101,\"name\":\"VariableDeclaration\",\"src\":\"1009:14:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"signed\",\"scope\":106,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"mapping(address => bool)\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"mapping(address => bool)\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"type\":\"address\"},\"id\":102,\"name\":\"ElementaryTypeName\",\"src\":\"1042:7:1\"},{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":103,\"name\":\"ElementaryTypeName\",\"src\":\"1051:4:1\"}],\"id\":104,\"name\":\"Mapping\",\"src\":\"1034:22:1\"}],\"id\":105,\"name\":\"VariableDeclaration\",\"src\":\"1034:29:1\"}],\"id\":106,\"name\":\"StructDefinition\",\"src\":\"883:215:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"typeOfVote\",\"scope\":526,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":107,\"name\":\"ElementaryTypeName\",\"src\":\"1104:4:1\"}],\"id\":108,\"name\":\"VariableDeclaration\",\"src\":\"1104:15:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"8ab66a90\",\"mutability\":\"mutable\",\"name\":\"candidates\",\"scope\":526,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"mapping(address => struct Vote.candidate)\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"type\":\"mapping(address => struct Vote.candidate)\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"type\":\"address\"},\"id\":109,\"name\":\"ElementaryTypeName\",\"src\":\"1222:7:1\"},{\"attributes\":{\"name\":\"candidate\",\"referencedDeclaration\":74,\"type\":\"struct Vote.candidate\"},\"id\":110,\"name\":\"UserDefinedTypeName\",\"src\":\"1233:9:1\"}],\"id\":111,\"name\":\"Mapping\",\"src\":\"1214:29:1\"}],\"id\":112,\"name\":\"VariableDeclaration\",\"src\":\"1214:47:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"35a893a1\",\"mutability\":\"mutable\",\"name\":\"candidateArray\",\"scope\":526,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"struct Vote.candidate[]\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"type\":\"struct Vote.candidate[]\"},\"children\":[{\"attributes\":{\"name\":\"candidate\",\"referencedDeclaration\":74,\"type\":\"struct Vote.candidate\"},\"id\":113,\"name\":\"UserDefinedTypeName\",\"src\":\"1314:9:1\"}],\"id\":114,\"name\":\"ArrayTypeName\",\"src\":\"1314:11:1\"}],\"id\":115,\"name\":\"VariableDeclaration\",\"src\":\"1314:33:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"7432e63a\",\"mutability\":\"mutable\",\"name\":\"candidatesAddresses\",\"scope\":526,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":116,\"name\":\"ElementaryTypeName\",\"src\":\"1369:7:1\"}],\"id\":117,\"name\":\"ArrayTypeName\",\"src\":\"1369:9:1\"}],\"id\":118,\"name\":\"VariableDeclaration\",\"src\":\"1369:36:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"fcae83a7\",\"mutability\":\"mutable\",\"name\":\"currentElection\",\"scope\":526,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"struct Vote.election\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"name\":\"election\",\"referencedDeclaration\":91,\"type\":\"struct Vote.election\"},\"id\":119,\"name\":\"UserDefinedTypeName\",\"src\":\"1443:8:1\"}],\"id\":120,\"name\":\"VariableDeclaration\",\"src\":\"1443:31:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"691a675c\",\"mutability\":\"mutable\",\"name\":\"currentPetition\",\"scope\":526,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"struct Vote.petition\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"name\":\"petition\",\"referencedDeclaration\":106,\"type\":\"struct Vote.petition\"},\"id\":121,\"name\":\"UserDefinedTypeName\",\"src\":\"1481:8:1\"}],\"id\":122,\"name\":\"VariableDeclaration\",\"src\":\"1481:31:1\"},{\"attributes\":{\"implemented\":true,\"isConstructor\":true,\"kind\":\"constructor\",\"modifiers\":[null],\"name\":\"\",\"scope\":526,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"managerOfVote\",\"scope\":144,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":123,\"name\":\"ElementaryTypeName\",\"src\":\"1534:7:1\"}],\"id\":124,\"name\":\"VariableDeclaration\",\"src\":\"1534:21:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"typeOf\",\"scope\":144,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":125,\"name\":\"ElementaryTypeName\",\"src\":\"1557:4:1\"}],\"id\":126,\"name\":\"VariableDeclaration\",\"src\":\"1557:11:1\"}],\"id\":127,\"name\":\"ParameterList\",\"src\":\"1533:36:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":128,\"name\":\"ParameterList\",\"src\":\"1569:0:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"address\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":40,\"type\":\"address\",\"value\":\"manager\"},\"id\":129,\"name\":\"Identifier\",\"src\":\"1638:7:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":124,\"type\":\"address\",\"value\":\"managerOfVote\"},\"id\":130,\"name\":\"Identifier\",\"src\":\"1648:13:1\"}],\"id\":131,\"name\":\"Assignment\",\"src\":\"1638:23:1\"}],\"id\":132,\"name\":\"ExpressionStatement\",\"src\":\"1638:23:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":108,\"type\":\"uint256\",\"value\":\"typeOfVote\"},\"id\":133,\"name\":\"Identifier\",\"src\":\"1672:10:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"uint8\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"hexvalue\":\"30\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 0\",\"value\":\"0\"},\"id\":134,\"name\":\"Literal\",\"src\":\"1686:1:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":126,\"type\":\"uint256\",\"value\":\"typeOf\"},\"id\":135,\"name\":\"Identifier\",\"src\":\"1691:6:1\"}],\"id\":136,\"name\":\"BinaryOperation\",\"src\":\"1686:11:1\"}],\"id\":137,\"name\":\"TupleExpression\",\"src\":\"1685:13:1\"},{\"attributes\":{\"hexvalue\":\"30\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 0\",\"value\":\"0\"},\"id\":138,\"name\":\"Literal\",\"src\":\"1701:1:1\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":139,\"name\":\"Literal\",\"src\":\"1705:1:1\"}],\"id\":140,\"name\":\"Conditional\",\"src\":\"1685:21:1\"}],\"id\":141,\"name\":\"Assignment\",\"src\":\"1672:34:1\"}],\"id\":142,\"name\":\"ExpressionStatement\",\"src\":\"1672:34:1\"}],\"id\":143,\"name\":\"Block\",\"src\":\"1569:145:1\"}],\"id\":144,\"name\":\"FunctionDefinition\",\"src\":\"1521:193:1\"},{\"attributes\":{\"functionSelector\":\"dcfda00f\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"editElection\",\"scope\":526,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"title\",\"scope\":196,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":145,\"name\":\"ElementaryTypeName\",\"src\":\"1745:6:1\"}],\"id\":146,\"name\":\"VariableDeclaration\",\"src\":\"1745:19:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"startDate\",\"scope\":196,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint256\",\"type\":\"uint256\"},\"id\":147,\"name\":\"ElementaryTypeName\",\"src\":\"1766:7:1\"}],\"id\":148,\"name\":\"VariableDeclaration\",\"src\":\"1766:17:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"endDate\",\"scope\":196,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint256\",\"type\":\"uint256\"},\"id\":149,\"name\":\"ElementaryTypeName\",\"src\":\"1785:7:1\"}],\"id\":150,\"name\":\"VariableDeclaration\",\"src\":\"1785:15:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":196,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":151,\"name\":\"ElementaryTypeName\",\"src\":\"1802:6:1\"}],\"id\":152,\"name\":\"VariableDeclaration\",\"src\":\"1802:25:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"typeOfElection\",\"scope\":196,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":153,\"name\":\"ElementaryTypeName\",\"src\":\"1829:6:1\"}],\"id\":154,\"name\":\"VariableDeclaration\",\"src\":\"1829:28:1\"}],\"id\":155,\"name\":\"ParameterList\",\"src\":\"1744:114:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":160,\"name\":\"ParameterList\",\"src\":\"1895:0:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":505,\"type\":\"modifier ()\",\"value\":\"restricted\"},\"id\":156,\"name\":\"Identifier\",\"src\":\"1871:10:1\"}],\"id\":157,\"name\":\"ModifierInvocation\",\"src\":\"1871:10:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":515,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":158,\"name\":\"Identifier\",\"src\":\"1882:12:1\"}],\"id\":159,\"name\":\"ModifierInvocation\",\"src\":\"1882:12:1\"},{\"children\":[{\"attributes\":{\"assignments\":[162]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"e\",\"scope\":195,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct Vote.election\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"election\",\"referencedDeclaration\":91,\"type\":\"struct Vote.election\"},\"id\":161,\"name\":\"UserDefinedTypeName\",\"src\":\"1906:8:1\"}],\"id\":162,\"name\":\"VariableDeclaration\",\"src\":\"1906:18:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":120,\"type\":\"struct Vote.election storage ref\",\"value\":\"currentElection\"},\"id\":163,\"name\":\"Identifier\",\"src\":\"1927:15:1\"}],\"id\":164,\"name\":\"VariableDeclarationStatement\",\"src\":\"1906:36:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"title\",\"referencedDeclaration\":76,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":162,\"type\":\"struct Vote.election storage pointer\",\"value\":\"e\"},\"id\":165,\"name\":\"Identifier\",\"src\":\"1953:1:1\"}],\"id\":167,\"name\":\"MemberAccess\",\"src\":\"1953:7:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":146,\"type\":\"string memory\",\"value\":\"title\"},\"id\":168,\"name\":\"Identifier\",\"src\":\"1963:5:1\"}],\"id\":169,\"name\":\"Assignment\",\"src\":\"1953:15:1\"}],\"id\":170,\"name\":\"ExpressionStatement\",\"src\":\"1953:15:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"startDate\",\"referencedDeclaration\":78,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":162,\"type\":\"struct Vote.election storage pointer\",\"value\":\"e\"},\"id\":171,\"name\":\"Identifier\",\"src\":\"1979:1:1\"}],\"id\":173,\"name\":\"MemberAccess\",\"src\":\"1979:11:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":148,\"type\":\"uint256\",\"value\":\"startDate\"},\"id\":174,\"name\":\"Identifier\",\"src\":\"1993:9:1\"}],\"id\":175,\"name\":\"Assignment\",\"src\":\"1979:23:1\"}],\"id\":176,\"name\":\"ExpressionStatement\",\"src\":\"1979:23:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"endDate\",\"referencedDeclaration\":80,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":162,\"type\":\"struct Vote.election storage pointer\",\"value\":\"e\"},\"id\":177,\"name\":\"Identifier\",\"src\":\"2013:1:1\"}],\"id\":179,\"name\":\"MemberAccess\",\"src\":\"2013:9:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":150,\"type\":\"uint256\",\"value\":\"endDate\"},\"id\":180,\"name\":\"Identifier\",\"src\":\"2025:7:1\"}],\"id\":181,\"name\":\"Assignment\",\"src\":\"2013:19:1\"}],\"id\":182,\"name\":\"ExpressionStatement\",\"src\":\"2013:19:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"description\",\"referencedDeclaration\":82,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":162,\"type\":\"struct Vote.election storage pointer\",\"value\":\"e\"},\"id\":183,\"name\":\"Identifier\",\"src\":\"2043:1:1\"}],\"id\":185,\"name\":\"MemberAccess\",\"src\":\"2043:13:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":152,\"type\":\"string memory\",\"value\":\"description\"},\"id\":186,\"name\":\"Identifier\",\"src\":\"2059:11:1\"}],\"id\":187,\"name\":\"Assignment\",\"src\":\"2043:27:1\"}],\"id\":188,\"name\":\"ExpressionStatement\",\"src\":\"2043:27:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"typeOfElection\",\"referencedDeclaration\":86,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":162,\"type\":\"struct Vote.election storage pointer\",\"value\":\"e\"},\"id\":189,\"name\":\"Identifier\",\"src\":\"2081:1:1\"}],\"id\":191,\"name\":\"MemberAccess\",\"src\":\"2081:16:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":154,\"type\":\"string memory\",\"value\":\"typeOfElection\"},\"id\":192,\"name\":\"Identifier\",\"src\":\"2100:14:1\"}],\"id\":193,\"name\":\"Assignment\",\"src\":\"2081:33:1\"}],\"id\":194,\"name\":\"ExpressionStatement\",\"src\":\"2081:33:1\"}],\"id\":195,\"name\":\"Block\",\"src\":\"1895:227:1\"}],\"id\":196,\"name\":\"FunctionDefinition\",\"src\":\"1722:400:1\"},{\"attributes\":{\"functionSelector\":\"67127e43\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"editPetition\",\"scope\":526,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"title\",\"scope\":240,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":197,\"name\":\"ElementaryTypeName\",\"src\":\"2153:6:1\"}],\"id\":198,\"name\":\"VariableDeclaration\",\"src\":\"2153:19:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"startDate\",\"scope\":240,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint256\",\"type\":\"uint256\"},\"id\":199,\"name\":\"ElementaryTypeName\",\"src\":\"2174:7:1\"}],\"id\":200,\"name\":\"VariableDeclaration\",\"src\":\"2174:17:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"endDate\",\"scope\":240,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint256\",\"type\":\"uint256\"},\"id\":201,\"name\":\"ElementaryTypeName\",\"src\":\"2193:7:1\"}],\"id\":202,\"name\":\"VariableDeclaration\",\"src\":\"2193:15:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":240,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":203,\"name\":\"ElementaryTypeName\",\"src\":\"2210:6:1\"}],\"id\":204,\"name\":\"VariableDeclaration\",\"src\":\"2210:25:1\"}],\"id\":205,\"name\":\"ParameterList\",\"src\":\"2152:84:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":210,\"name\":\"ParameterList\",\"src\":\"2273:0:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":505,\"type\":\"modifier ()\",\"value\":\"restricted\"},\"id\":206,\"name\":\"Identifier\",\"src\":\"2249:10:1\"}],\"id\":207,\"name\":\"ModifierInvocation\",\"src\":\"2249:10:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":525,\"type\":\"modifier ()\",\"value\":\"typePetition\"},\"id\":208,\"name\":\"Identifier\",\"src\":\"2260:12:1\"}],\"id\":209,\"name\":\"ModifierInvocation\",\"src\":\"2260:12:1\"},{\"children\":[{\"attributes\":{\"assignments\":[212]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"p\",\"scope\":239,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct Vote.petition\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"petition\",\"referencedDeclaration\":106,\"type\":\"struct Vote.petition\"},\"id\":211,\"name\":\"UserDefinedTypeName\",\"src\":\"2284:8:1\"}],\"id\":212,\"name\":\"VariableDeclaration\",\"src\":\"2284:18:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":122,\"type\":\"struct Vote.petition storage ref\",\"value\":\"currentPetition\"},\"id\":213,\"name\":\"Identifier\",\"src\":\"2305:15:1\"}],\"id\":214,\"name\":\"VariableDeclarationStatement\",\"src\":\"2284:36:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"title\",\"referencedDeclaration\":93,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":212,\"type\":\"struct Vote.petition storage pointer\",\"value\":\"p\"},\"id\":215,\"name\":\"Identifier\",\"src\":\"2331:1:1\"}],\"id\":217,\"name\":\"MemberAccess\",\"src\":\"2331:7:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":198,\"type\":\"string memory\",\"value\":\"title\"},\"id\":218,\"name\":\"Identifier\",\"src\":\"2341:5:1\"}],\"id\":219,\"name\":\"Assignment\",\"src\":\"2331:15:1\"}],\"id\":220,\"name\":\"ExpressionStatement\",\"src\":\"2331:15:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"startDate\",\"referencedDeclaration\":95,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":212,\"type\":\"struct Vote.petition storage pointer\",\"value\":\"p\"},\"id\":221,\"name\":\"Identifier\",\"src\":\"2357:1:1\"}],\"id\":223,\"name\":\"MemberAccess\",\"src\":\"2357:11:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":200,\"type\":\"uint256\",\"value\":\"startDate\"},\"id\":224,\"name\":\"Identifier\",\"src\":\"2371:9:1\"}],\"id\":225,\"name\":\"Assignment\",\"src\":\"2357:23:1\"}],\"id\":226,\"name\":\"ExpressionStatement\",\"src\":\"2357:23:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"endDate\",\"referencedDeclaration\":97,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":212,\"type\":\"struct Vote.petition storage pointer\",\"value\":\"p\"},\"id\":227,\"name\":\"Identifier\",\"src\":\"2391:1:1\"}],\"id\":229,\"name\":\"MemberAccess\",\"src\":\"2391:9:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":202,\"type\":\"uint256\",\"value\":\"endDate\"},\"id\":230,\"name\":\"Identifier\",\"src\":\"2403:7:1\"}],\"id\":231,\"name\":\"Assignment\",\"src\":\"2391:19:1\"}],\"id\":232,\"name\":\"ExpressionStatement\",\"src\":\"2391:19:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"description\",\"referencedDeclaration\":99,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":212,\"type\":\"struct Vote.petition storage pointer\",\"value\":\"p\"},\"id\":233,\"name\":\"Identifier\",\"src\":\"2421:1:1\"}],\"id\":235,\"name\":\"MemberAccess\",\"src\":\"2421:13:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":204,\"type\":\"string memory\",\"value\":\"description\"},\"id\":236,\"name\":\"Identifier\",\"src\":\"2437:11:1\"}],\"id\":237,\"name\":\"Assignment\",\"src\":\"2421:27:1\"}],\"id\":238,\"name\":\"ExpressionStatement\",\"src\":\"2421:27:1\"}],\"id\":239,\"name\":\"Block\",\"src\":\"2273:183:1\"}],\"id\":240,\"name\":\"FunctionDefinition\",\"src\":\"2130:326:1\"},{\"attributes\":{\"functionSelector\":\"da3550ee\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"voteFor\",\"scope\":526,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"candidateAddress\",\"scope\":299,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":241,\"name\":\"ElementaryTypeName\",\"src\":\"2504:7:1\"}],\"id\":242,\"name\":\"VariableDeclaration\",\"src\":\"2504:24:1\"}],\"id\":243,\"name\":\"ParameterList\",\"src\":\"2503:26:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":246,\"name\":\"ParameterList\",\"src\":\"2549:0:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":515,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":244,\"name\":\"Identifier\",\"src\":\"2537:12:1\"}],\"id\":245,\"name\":\"ModifierInvocation\",\"src\":\"2537:12:1\"},{\"children\":[{\"attributes\":{},\"children\":[{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"voters\",\"referencedDeclaration\":90,\"type\":\"mapping(address => bool)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":120,\"type\":\"struct Vote.election storage ref\",\"value\":\"currentElection\"},\"id\":247,\"name\":\"Identifier\",\"src\":\"2563:15:1\"}],\"id\":248,\"name\":\"MemberAccess\",\"src\":\"2563:22:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":249,\"name\":\"Identifier\",\"src\":\"2586:3:1\"}],\"id\":250,\"name\":\"MemberAccess\",\"src\":\"2586:10:1\"}],\"id\":251,\"name\":\"IndexAccess\",\"src\":\"2563:34:1\"},{\"attributes\":{\"hexvalue\":\"66616c7365\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"bool\",\"type\":\"bool\",\"value\":\"false\"},\"id\":252,\"name\":\"Literal\",\"src\":\"2601:5:1\"}],\"id\":253,\"name\":\"BinaryOperation\",\"src\":\"2563:43:1\"},{\"children\":[{\"attributes\":{},\"children\":[{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"!=\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"candidateAddr\",\"referencedDeclaration\":64,\"type\":\"address\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":254,\"name\":\"Identifier\",\"src\":\"2625:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":242,\"type\":\"address\",\"value\":\"candidateAddress\"},\"id\":255,\"name\":\"Identifier\",\"src\":\"2636:16:1\"}],\"id\":256,\"name\":\"IndexAccess\",\"src\":\"2625:28:1\"}],\"id\":257,\"name\":\"MemberAccess\",\"src\":\"2625:42:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"address payable\",\"type_conversion\":true},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"type\":\"type(address)\"},\"children\":[{\"attributes\":{\"name\":\"address\"},\"id\":258,\"name\":\"ElementaryTypeName\",\"src\":\"2671:7:1\"}],\"id\":259,\"name\":\"ElementaryTypeNameExpression\",\"src\":\"2671:7:1\"},{\"attributes\":{\"hexvalue\":\"30\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 0\",\"value\":\"0\"},\"id\":260,\"name\":\"Literal\",\"src\":\"2679:1:1\"}],\"id\":261,\"name\":\"FunctionCall\",\"src\":\"2671:10:1\"}],\"id\":262,\"name\":\"BinaryOperation\",\"src\":\"2625:56:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"voters\",\"referencedDeclaration\":90,\"type\":\"mapping(address => bool)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":120,\"type\":\"struct Vote.election storage ref\",\"value\":\"currentElection\"},\"id\":263,\"name\":\"Identifier\",\"src\":\"2701:15:1\"}],\"id\":267,\"name\":\"MemberAccess\",\"src\":\"2701:22:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":265,\"name\":\"Identifier\",\"src\":\"2724:3:1\"}],\"id\":266,\"name\":\"MemberAccess\",\"src\":\"2724:10:1\"}],\"id\":268,\"name\":\"IndexAccess\",\"src\":\"2701:34:1\"},{\"attributes\":{\"hexvalue\":\"74727565\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"bool\",\"type\":\"bool\",\"value\":\"true\"},\"id\":269,\"name\":\"Literal\",\"src\":\"2739:4:1\"}],\"id\":270,\"name\":\"Assignment\",\"src\":\"2701:42:1\"}],\"id\":271,\"name\":\"ExpressionStatement\",\"src\":\"2701:42:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"++\",\"prefix\":false,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"numVotes\",\"referencedDeclaration\":84,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":120,\"type\":\"struct Vote.election storage ref\",\"value\":\"currentElection\"},\"id\":272,\"name\":\"Identifier\",\"src\":\"2762:15:1\"}],\"id\":274,\"name\":\"MemberAccess\",\"src\":\"2762:24:1\"}],\"id\":275,\"name\":\"UnaryOperation\",\"src\":\"2762:26:1\"}],\"id\":276,\"name\":\"ExpressionStatement\",\"src\":\"2762:26:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"++\",\"prefix\":false,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"numVotes\",\"referencedDeclaration\":66,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":277,\"name\":\"Identifier\",\"src\":\"2808:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":242,\"type\":\"address\",\"value\":\"candidateAddress\"},\"id\":278,\"name\":\"Identifier\",\"src\":\"2819:16:1\"}],\"id\":279,\"name\":\"IndexAccess\",\"src\":\"2808:28:1\"}],\"id\":280,\"name\":\"TupleExpression\",\"src\":\"2807:30:1\"}],\"id\":281,\"name\":\"MemberAccess\",\"src\":\"2807:39:1\"}],\"id\":282,\"name\":\"UnaryOperation\",\"src\":\"2807:41:1\"}],\"id\":283,\"name\":\"ExpressionStatement\",\"src\":\"2807:41:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"push\",\"type\":\"function (address)\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"voters\",\"referencedDeclaration\":69,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":284,\"name\":\"Identifier\",\"src\":\"2868:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":242,\"type\":\"address\",\"value\":\"candidateAddress\"},\"id\":285,\"name\":\"Identifier\",\"src\":\"2879:16:1\"}],\"id\":286,\"name\":\"IndexAccess\",\"src\":\"2868:28:1\"}],\"id\":287,\"name\":\"TupleExpression\",\"src\":\"2867:30:1\"}],\"id\":288,\"name\":\"MemberAccess\",\"src\":\"2867:37:1\"}],\"id\":289,\"name\":\"MemberAccess\",\"src\":\"2867:42:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":290,\"name\":\"Identifier\",\"src\":\"2910:3:1\"}],\"id\":291,\"name\":\"MemberAccess\",\"src\":\"2910:10:1\"}],\"id\":292,\"name\":\"FunctionCall\",\"src\":\"2867:54:1\"}],\"id\":293,\"name\":\"ExpressionStatement\",\"src\":\"2867:54:1\"}],\"id\":294,\"name\":\"Block\",\"src\":\"2682:255:1\"}],\"id\":295,\"name\":\"IfStatement\",\"src\":\"2622:315:1\"}],\"id\":296,\"name\":\"Block\",\"src\":\"2607:341:1\"}],\"id\":297,\"name\":\"IfStatement\",\"src\":\"2560:388:1\"}],\"id\":298,\"name\":\"Block\",\"src\":\"2549:406:1\"}],\"id\":299,\"name\":\"FunctionDefinition\",\"src\":\"2487:468:1\"},{\"attributes\":{\"functionSelector\":\"869eae23\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"enterElection\",\"scope\":526,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"name\",\"scope\":362,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":300,\"name\":\"ElementaryTypeName\",\"src\":\"3012:6:1\"}],\"id\":301,\"name\":\"VariableDeclaration\",\"src\":\"3012:18:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":362,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":302,\"name\":\"ElementaryTypeName\",\"src\":\"3032:6:1\"}],\"id\":303,\"name\":\"VariableDeclaration\",\"src\":\"3032:25:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"current_date\",\"scope\":362,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint256\",\"type\":\"uint256\"},\"id\":304,\"name\":\"ElementaryTypeName\",\"src\":\"3059:7:1\"}],\"id\":305,\"name\":\"VariableDeclaration\",\"src\":\"3059:20:1\"}],\"id\":306,\"name\":\"ParameterList\",\"src\":\"3011:69:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":309,\"name\":\"ParameterList\",\"src\":\"3106:0:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":515,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":307,\"name\":\"Identifier\",\"src\":\"3093:12:1\"}],\"id\":308,\"name\":\"ModifierInvocation\",\"src\":\"3093:12:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"type\":\"function (bool) pure\",\"value\":\"require\"},\"id\":310,\"name\":\"Identifier\",\"src\":\"3186:7:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"&&\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\">\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":305,\"type\":\"uint256\",\"value\":\"current_date\"},\"id\":311,\"name\":\"Identifier\",\"src\":\"3194:12:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"startDate\",\"referencedDeclaration\":78,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":120,\"type\":\"struct Vote.election storage ref\",\"value\":\"currentElection\"},\"id\":312,\"name\":\"Identifier\",\"src\":\"3209:15:1\"}],\"id\":313,\"name\":\"MemberAccess\",\"src\":\"3209:25:1\"}],\"id\":314,\"name\":\"BinaryOperation\",\"src\":\"3194:40:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"<\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":305,\"type\":\"uint256\",\"value\":\"current_date\"},\"id\":315,\"name\":\"Identifier\",\"src\":\"3238:12:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"endDate\",\"referencedDeclaration\":80,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":120,\"type\":\"struct Vote.election storage ref\",\"value\":\"currentElection\"},\"id\":316,\"name\":\"Identifier\",\"src\":\"3253:15:1\"}],\"id\":317,\"name\":\"MemberAccess\",\"src\":\"3253:23:1\"}],\"id\":318,\"name\":\"BinaryOperation\",\"src\":\"3238:38:1\"}],\"id\":319,\"name\":\"BinaryOperation\",\"src\":\"3194:82:1\"}],\"id\":320,\"name\":\"FunctionCall\",\"src\":\"3186:91:1\"}],\"id\":321,\"name\":\"ExpressionStatement\",\"src\":\"3186:91:1\"},{\"attributes\":{\"assignments\":[323]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"currentCandidate\",\"scope\":361,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct Vote.candidate\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"candidate\",\"referencedDeclaration\":74,\"type\":\"struct Vote.candidate\"},\"id\":322,\"name\":\"UserDefinedTypeName\",\"src\":\"3315:9:1\"}],\"id\":323,\"name\":\"VariableDeclaration\",\"src\":\"3315:34:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":324,\"name\":\"Identifier\",\"src\":\"3352:10:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":325,\"name\":\"Identifier\",\"src\":\"3363:3:1\"}],\"id\":326,\"name\":\"MemberAccess\",\"src\":\"3363:10:1\"}],\"id\":327,\"name\":\"IndexAccess\",\"src\":\"3352:22:1\"}],\"id\":328,\"name\":\"VariableDeclarationStatement\",\"src\":\"3315:59:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"name\",\"referencedDeclaration\":71,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":323,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":329,\"name\":\"Identifier\",\"src\":\"3385:16:1\"}],\"id\":331,\"name\":\"MemberAccess\",\"src\":\"3385:21:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":301,\"type\":\"string memory\",\"value\":\"name\"},\"id\":332,\"name\":\"Identifier\",\"src\":\"3409:4:1\"}],\"id\":333,\"name\":\"Assignment\",\"src\":\"3385:28:1\"}],\"id\":334,\"name\":\"ExpressionStatement\",\"src\":\"3385:28:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"description\",\"referencedDeclaration\":73,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":323,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":335,\"name\":\"Identifier\",\"src\":\"3424:16:1\"}],\"id\":337,\"name\":\"MemberAccess\",\"src\":\"3424:28:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":303,\"type\":\"string memory\",\"value\":\"description\"},\"id\":338,\"name\":\"Identifier\",\"src\":\"3455:11:1\"}],\"id\":339,\"name\":\"Assignment\",\"src\":\"3424:42:1\"}],\"id\":340,\"name\":\"ExpressionStatement\",\"src\":\"3424:42:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"address\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"candidateAddr\",\"referencedDeclaration\":64,\"type\":\"address\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":323,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":341,\"name\":\"Identifier\",\"src\":\"3477:16:1\"}],\"id\":343,\"name\":\"MemberAccess\",\"src\":\"3477:30:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":344,\"name\":\"Identifier\",\"src\":\"3509:3:1\"}],\"id\":345,\"name\":\"MemberAccess\",\"src\":\"3509:10:1\"}],\"id\":346,\"name\":\"Assignment\",\"src\":\"3477:42:1\"}],\"id\":347,\"name\":\"ExpressionStatement\",\"src\":\"3477:42:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"voters\",\"referencedDeclaration\":69,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":323,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":348,\"name\":\"Identifier\",\"src\":\"3530:16:1\"}],\"id\":350,\"name\":\"MemberAccess\",\"src\":\"3530:23:1\"}],\"id\":351,\"name\":\"ExpressionStatement\",\"src\":\"3530:23:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"push\",\"type\":\"function (struct Vote.candidate storage ref)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"struct Vote.candidate storage ref[] storage ref\",\"value\":\"candidateArray\"},\"id\":352,\"name\":\"Identifier\",\"src\":\"3564:14:1\"}],\"id\":354,\"name\":\"MemberAccess\",\"src\":\"3564:19:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":323,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":355,\"name\":\"Identifier\",\"src\":\"3584:16:1\"}],\"id\":356,\"name\":\"FunctionCall\",\"src\":\"3564:37:1\"}],\"id\":357,\"name\":\"ExpressionStatement\",\"src\":\"3564:37:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"++\",\"prefix\":false,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":42,\"type\":\"uint256\",\"value\":\"candidatesCount\"},\"id\":358,\"name\":\"Identifier\",\"src\":\"3612:15:1\"}],\"id\":359,\"name\":\"UnaryOperation\",\"src\":\"3612:17:1\"}],\"id\":360,\"name\":\"ExpressionStatement\",\"src\":\"3612:17:1\"}],\"id\":361,\"name\":\"Block\",\"src\":\"3106:575:1\"}],\"id\":362,\"name\":\"FunctionDefinition\",\"src\":\"2989:692:1\"},{\"attributes\":{\"functionSelector\":\"af47fb3f\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"leaveElection\",\"scope\":526,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"current_date\",\"scope\":437,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint256\",\"type\":\"uint256\"},\"id\":363,\"name\":\"ElementaryTypeName\",\"src\":\"3738:7:1\"}],\"id\":364,\"name\":\"VariableDeclaration\",\"src\":\"3738:20:1\"}],\"id\":365,\"name\":\"ParameterList\",\"src\":\"3737:22:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":368,\"name\":\"ParameterList\",\"src\":\"3785:0:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":515,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":366,\"name\":\"Identifier\",\"src\":\"3772:12:1\"}],\"id\":367,\"name\":\"ModifierInvocation\",\"src\":\"3772:12:1\"},{\"children\":[{\"attributes\":{\"assignments\":[370]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"currentCandidate\",\"scope\":436,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct Vote.candidate\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"candidate\",\"referencedDeclaration\":74,\"type\":\"struct Vote.candidate\"},\"id\":369,\"name\":\"UserDefinedTypeName\",\"src\":\"3998:9:1\"}],\"id\":370,\"name\":\"VariableDeclaration\",\"src\":\"3998:34:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":371,\"name\":\"Identifier\",\"src\":\"4035:10:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":372,\"name\":\"Identifier\",\"src\":\"4046:3:1\"}],\"id\":373,\"name\":\"MemberAccess\",\"src\":\"4046:10:1\"}],\"id\":374,\"name\":\"IndexAccess\",\"src\":\"4035:22:1\"}],\"id\":375,\"name\":\"VariableDeclarationStatement\",\"src\":\"3998:59:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"name\",\"referencedDeclaration\":71,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":370,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":376,\"name\":\"Identifier\",\"src\":\"4068:16:1\"}],\"id\":378,\"name\":\"MemberAccess\",\"src\":\"4068:21:1\"},{\"attributes\":{\"hexvalue\":\"\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"string\",\"type\":\"literal_string \\\"\\\"\",\"value\":\"\"},\"id\":379,\"name\":\"Literal\",\"src\":\"4092:2:1\"}],\"id\":380,\"name\":\"Assignment\",\"src\":\"4068:26:1\"}],\"id\":381,\"name\":\"ExpressionStatement\",\"src\":\"4068:26:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"description\",\"referencedDeclaration\":73,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":370,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":382,\"name\":\"Identifier\",\"src\":\"4105:16:1\"}],\"id\":384,\"name\":\"MemberAccess\",\"src\":\"4105:28:1\"},{\"attributes\":{\"hexvalue\":\"\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"string\",\"type\":\"literal_string \\\"\\\"\",\"value\":\"\"},\"id\":385,\"name\":\"Literal\",\"src\":\"4136:2:1\"}],\"id\":386,\"name\":\"Assignment\",\"src\":\"4105:33:1\"}],\"id\":387,\"name\":\"ExpressionStatement\",\"src\":\"4105:33:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"delete\",\"prefix\":true,\"type\":\"tuple()\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":388,\"name\":\"Identifier\",\"src\":\"4230:10:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":389,\"name\":\"Identifier\",\"src\":\"4241:3:1\"}],\"id\":390,\"name\":\"MemberAccess\",\"src\":\"4241:10:1\"}],\"id\":391,\"name\":\"IndexAccess\",\"src\":\"4230:22:1\"}],\"id\":392,\"name\":\"UnaryOperation\",\"src\":\"4223:29:1\"}],\"id\":393,\"name\":\"ExpressionStatement\",\"src\":\"4223:29:1\"},{\"children\":[{\"attributes\":{\"assignments\":[395]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"i\",\"scope\":432,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":394,\"name\":\"ElementaryTypeName\",\"src\":\"4268:4:1\"}],\"id\":395,\"name\":\"VariableDeclaration\",\"src\":\"4268:6:1\"},{\"attributes\":{\"hexvalue\":\"30\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 0\",\"value\":\"0\"},\"id\":396,\"name\":\"Literal\",\"src\":\"4277:1:1\"}],\"id\":397,\"name\":\"VariableDeclarationStatement\",\"src\":\"4268:10:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"<\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":395,\"type\":\"uint256\",\"value\":\"i\"},\"id\":398,\"name\":\"Identifier\",\"src\":\"4280:1:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"length\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"struct Vote.candidate storage ref[] storage ref\",\"value\":\"candidateArray\"},\"id\":399,\"name\":\"Identifier\",\"src\":\"4282:14:1\"}],\"id\":400,\"name\":\"MemberAccess\",\"src\":\"4282:21:1\"}],\"id\":401,\"name\":\"BinaryOperation\",\"src\":\"4280:23:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"++\",\"prefix\":false,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":395,\"type\":\"uint256\",\"value\":\"i\"},\"id\":402,\"name\":\"Identifier\",\"src\":\"4305:1:1\"}],\"id\":403,\"name\":\"UnaryOperation\",\"src\":\"4305:3:1\"}],\"id\":404,\"name\":\"ExpressionStatement\",\"src\":\"4305:3:1\"},{\"children\":[{\"attributes\":{},\"children\":[{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":405,\"name\":\"Identifier\",\"src\":\"4327:3:1\"}],\"id\":406,\"name\":\"MemberAccess\",\"src\":\"4327:10:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"candidateAddr\",\"referencedDeclaration\":64,\"type\":\"address\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"struct Vote.candidate storage ref[] storage ref\",\"value\":\"candidateArray\"},\"id\":407,\"name\":\"Identifier\",\"src\":\"4339:14:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":395,\"type\":\"uint256\",\"value\":\"i\"},\"id\":408,\"name\":\"Identifier\",\"src\":\"4354:1:1\"}],\"id\":409,\"name\":\"IndexAccess\",\"src\":\"4339:17:1\"}],\"id\":410,\"name\":\"MemberAccess\",\"src\":\"4339:31:1\"}],\"id\":411,\"name\":\"BinaryOperation\",\"src\":\"4327:43:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"struct Vote.candidate storage ref[] storage ref\",\"value\":\"candidateArray\"},\"id\":412,\"name\":\"Identifier\",\"src\":\"4390:14:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":395,\"type\":\"uint256\",\"value\":\"i\"},\"id\":413,\"name\":\"Identifier\",\"src\":\"4405:1:1\"}],\"id\":414,\"name\":\"IndexAccess\",\"src\":\"4390:17:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"struct Vote.candidate storage ref[] storage ref\",\"value\":\"candidateArray\"},\"id\":415,\"name\":\"Identifier\",\"src\":\"4408:14:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"-\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"length\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"struct Vote.candidate storage ref[] storage ref\",\"value\":\"candidateArray\"},\"id\":416,\"name\":\"Identifier\",\"src\":\"4423:14:1\"}],\"id\":417,\"name\":\"MemberAccess\",\"src\":\"4423:21:1\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":418,\"name\":\"Literal\",\"src\":\"4445:1:1\"}],\"id\":419,\"name\":\"BinaryOperation\",\"src\":\"4423:23:1\"}],\"id\":420,\"name\":\"IndexAccess\",\"src\":\"4408:39:1\"}],\"id\":421,\"name\":\"Assignment\",\"src\":\"4390:57:1\"}],\"id\":422,\"name\":\"ExpressionStatement\",\"src\":\"4390:57:1\"},{\"children\":[{\"attributes\":{\"arguments\":[null],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[null],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"pop\",\"type\":\"function ()\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"struct Vote.candidate storage ref[] storage ref\",\"value\":\"candidateArray\"},\"id\":423,\"name\":\"Identifier\",\"src\":\"4466:14:1\"}],\"id\":425,\"name\":\"MemberAccess\",\"src\":\"4466:18:1\"}],\"id\":426,\"name\":\"FunctionCall\",\"src\":\"4466:20:1\"}],\"id\":427,\"name\":\"ExpressionStatement\",\"src\":\"4466:20:1\"},{\"id\":428,\"name\":\"Break\",\"src\":\"4505:5:1\"}],\"id\":429,\"name\":\"Block\",\"src\":\"4371:155:1\"}],\"id\":430,\"name\":\"IfStatement\",\"src\":\"4324:202:1\"}],\"id\":431,\"name\":\"Block\",\"src\":\"4309:228:1\"}],\"id\":432,\"name\":\"ForStatement\",\"src\":\"4263:274:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"--\",\"prefix\":false,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":42,\"type\":\"uint256\",\"value\":\"candidatesCount\"},\"id\":433,\"name\":\"Identifier\",\"src\":\"4547:15:1\"}],\"id\":434,\"name\":\"UnaryOperation\",\"src\":\"4547:17:1\"}],\"id\":435,\"name\":\"ExpressionStatement\",\"src\":\"4547:17:1\"}],\"id\":436,\"name\":\"Block\",\"src\":\"3785:787:1\"}],\"id\":437,\"name\":\"FunctionDefinition\",\"src\":\"3715:857:1\"},{\"attributes\":{\"functionSelector\":\"ad0dcf9c\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"get_candidates\",\"scope\":526,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"candaddr\",\"scope\":459,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":438,\"name\":\"ElementaryTypeName\",\"src\":\"4619:7:1\"}],\"id\":439,\"name\":\"VariableDeclaration\",\"src\":\"4619:16:1\"}],\"id\":440,\"name\":\"ParameterList\",\"src\":\"4618:18:1\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":459,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":443,\"name\":\"ElementaryTypeName\",\"src\":\"4671:6:1\"}],\"id\":444,\"name\":\"VariableDeclaration\",\"src\":\"4671:13:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":459,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":445,\"name\":\"ElementaryTypeName\",\"src\":\"4686:6:1\"}],\"id\":446,\"name\":\"VariableDeclaration\",\"src\":\"4686:13:1\"}],\"id\":447,\"name\":\"ParameterList\",\"src\":\"4670:30:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":515,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":441,\"name\":\"Identifier\",\"src\":\"4649:12:1\"}],\"id\":442,\"name\":\"ModifierInvocation\",\"src\":\"4649:12:1\"},{\"children\":[{\"attributes\":{\"functionReturnParameters\":447},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"tuple(string storage ref,string storage ref)\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"name\",\"referencedDeclaration\":71,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":448,\"name\":\"Identifier\",\"src\":\"4719:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":439,\"type\":\"address\",\"value\":\"candaddr\"},\"id\":449,\"name\":\"Identifier\",\"src\":\"4730:8:1\"}],\"id\":450,\"name\":\"IndexAccess\",\"src\":\"4719:20:1\"}],\"id\":451,\"name\":\"MemberAccess\",\"src\":\"4719:25:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"description\",\"referencedDeclaration\":73,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":452,\"name\":\"Identifier\",\"src\":\"4746:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":439,\"type\":\"address\",\"value\":\"candaddr\"},\"id\":453,\"name\":\"Identifier\",\"src\":\"4757:8:1\"}],\"id\":454,\"name\":\"IndexAccess\",\"src\":\"4746:20:1\"}],\"id\":455,\"name\":\"MemberAccess\",\"src\":\"4746:32:1\"}],\"id\":456,\"name\":\"TupleExpression\",\"src\":\"4718:61:1\"}],\"id\":457,\"name\":\"Return\",\"src\":\"4712:67:1\"}],\"id\":458,\"name\":\"Block\",\"src\":\"4701:86:1\"}],\"id\":459,\"name\":\"FunctionDefinition\",\"src\":\"4595:192:1\"},{\"attributes\":{\"functionSelector\":\"95115447\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"getCandidateVoters\",\"scope\":526,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"candAddr\",\"scope\":477,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":460,\"name\":\"ElementaryTypeName\",\"src\":\"4821:7:1\"}],\"id\":461,\"name\":\"VariableDeclaration\",\"src\":\"4821:16:1\"}],\"id\":462,\"name\":\"ParameterList\",\"src\":\"4820:18:1\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":477,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":465,\"name\":\"ElementaryTypeName\",\"src\":\"4873:7:1\"}],\"id\":466,\"name\":\"ArrayTypeName\",\"src\":\"4873:9:1\"}],\"id\":467,\"name\":\"VariableDeclaration\",\"src\":\"4873:16:1\"}],\"id\":468,\"name\":\"ParameterList\",\"src\":\"4872:18:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":515,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":463,\"name\":\"Identifier\",\"src\":\"4851:12:1\"}],\"id\":464,\"name\":\"ModifierInvocation\",\"src\":\"4851:12:1\"},{\"children\":[{\"attributes\":{\"functionReturnParameters\":468},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"voters\",\"referencedDeclaration\":69,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":469,\"name\":\"Identifier\",\"src\":\"4910:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":461,\"type\":\"address\",\"value\":\"candAddr\"},\"id\":470,\"name\":\"Identifier\",\"src\":\"4921:8:1\"}],\"id\":471,\"name\":\"IndexAccess\",\"src\":\"4910:20:1\"}],\"id\":472,\"name\":\"TupleExpression\",\"src\":\"4909:22:1\"}],\"id\":473,\"name\":\"MemberAccess\",\"src\":\"4909:29:1\"}],\"id\":474,\"name\":\"TupleExpression\",\"src\":\"4908:31:1\"}],\"id\":475,\"name\":\"Return\",\"src\":\"4902:37:1\"}],\"id\":476,\"name\":\"Block\",\"src\":\"4891:56:1\"}],\"id\":477,\"name\":\"FunctionDefinition\",\"src\":\"4793:154:1\"},{\"attributes\":{\"functionSelector\":\"e1c5fcc1\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"getElectionVoter\",\"scope\":526,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"voterAddr\",\"scope\":494,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":478,\"name\":\"ElementaryTypeName\",\"src\":\"4979:7:1\"}],\"id\":479,\"name\":\"VariableDeclaration\",\"src\":\"4979:17:1\"}],\"id\":480,\"name\":\"ParameterList\",\"src\":\"4978:19:1\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":494,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"bool\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":483,\"name\":\"ElementaryTypeName\",\"src\":\"5032:4:1\"}],\"id\":484,\"name\":\"VariableDeclaration\",\"src\":\"5032:4:1\"}],\"id\":485,\"name\":\"ParameterList\",\"src\":\"5031:6:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":515,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":481,\"name\":\"Identifier\",\"src\":\"5010:12:1\"}],\"id\":482,\"name\":\"ModifierInvocation\",\"src\":\"5010:12:1\"},{\"children\":[{\"attributes\":{\"functionReturnParameters\":485},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"mapping(address => bool)\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"voters\",\"referencedDeclaration\":90,\"type\":\"mapping(address => bool)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":120,\"type\":\"struct Vote.election storage ref\",\"value\":\"currentElection\"},\"id\":486,\"name\":\"Identifier\",\"src\":\"5058:15:1\"}],\"id\":487,\"name\":\"MemberAccess\",\"src\":\"5058:22:1\"}],\"id\":488,\"name\":\"TupleExpression\",\"src\":\"5057:24:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":479,\"type\":\"address\",\"value\":\"voterAddr\"},\"id\":489,\"name\":\"Identifier\",\"src\":\"5082:9:1\"}],\"id\":490,\"name\":\"IndexAccess\",\"src\":\"5057:35:1\"}],\"id\":491,\"name\":\"TupleExpression\",\"src\":\"5056:37:1\"}],\"id\":492,\"name\":\"Return\",\"src\":\"5049:44:1\"}],\"id\":493,\"name\":\"Block\",\"src\":\"5038:63:1\"}],\"id\":494,\"name\":\"FunctionDefinition\",\"src\":\"4953:148:1\"},{\"attributes\":{\"name\":\"restricted\",\"virtual\":false,\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":495,\"name\":\"ParameterList\",\"src\":\"5126:2:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"type\":\"function (bool) pure\",\"value\":\"require\"},\"id\":496,\"name\":\"Identifier\",\"src\":\"5140:7:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":497,\"name\":\"Identifier\",\"src\":\"5148:3:1\"}],\"id\":498,\"name\":\"MemberAccess\",\"src\":\"5148:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":40,\"type\":\"address\",\"value\":\"manager\"},\"id\":499,\"name\":\"Identifier\",\"src\":\"5162:7:1\"}],\"id\":500,\"name\":\"BinaryOperation\",\"src\":\"5148:21:1\"}],\"id\":501,\"name\":\"FunctionCall\",\"src\":\"5140:30:1\"}],\"id\":502,\"name\":\"ExpressionStatement\",\"src\":\"5140:30:1\"},{\"id\":503,\"name\":\"PlaceholderStatement\",\"src\":\"5181:1:1\"}],\"id\":504,\"name\":\"Block\",\"src\":\"5129:61:1\"}],\"id\":505,\"name\":\"ModifierDefinition\",\"src\":\"5107:83:1\"},{\"attributes\":{\"name\":\"typeElection\",\"virtual\":false,\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":506,\"name\":\"ParameterList\",\"src\":\"5217:2:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"type\":\"function (bool) pure\",\"value\":\"require\"},\"id\":507,\"name\":\"Identifier\",\"src\":\"5231:7:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":108,\"type\":\"uint256\",\"value\":\"typeOfVote\"},\"id\":508,\"name\":\"Identifier\",\"src\":\"5239:10:1\"},{\"attributes\":{\"hexvalue\":\"30\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 0\",\"value\":\"0\"},\"id\":509,\"name\":\"Literal\",\"src\":\"5253:1:1\"}],\"id\":510,\"name\":\"BinaryOperation\",\"src\":\"5239:15:1\"}],\"id\":511,\"name\":\"FunctionCall\",\"src\":\"5231:24:1\"}],\"id\":512,\"name\":\"ExpressionStatement\",\"src\":\"5231:24:1\"},{\"id\":513,\"name\":\"PlaceholderStatement\",\"src\":\"5266:1:1\"}],\"id\":514,\"name\":\"Block\",\"src\":\"5220:55:1\"}],\"id\":515,\"name\":\"ModifierDefinition\",\"src\":\"5196:79:1\"},{\"attributes\":{\"name\":\"typePetition\",\"virtual\":false,\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":516,\"name\":\"ParameterList\",\"src\":\"5302:2:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"type\":\"function (bool) pure\",\"value\":\"require\"},\"id\":517,\"name\":\"Identifier\",\"src\":\"5316:7:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":108,\"type\":\"uint256\",\"value\":\"typeOfVote\"},\"id\":518,\"name\":\"Identifier\",\"src\":\"5324:10:1\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":519,\"name\":\"Literal\",\"src\":\"5338:1:1\"}],\"id\":520,\"name\":\"BinaryOperation\",\"src\":\"5324:15:1\"}],\"id\":521,\"name\":\"FunctionCall\",\"src\":\"5316:24:1\"}],\"id\":522,\"name\":\"ExpressionStatement\",\"src\":\"5316:24:1\"},{\"id\":523,\"name\":\"PlaceholderStatement\",\"src\":\"5351:1:1\"}],\"id\":524,\"name\":\"Block\",\"src\":\"5305:55:1\"}],\"id\":525,\"name\":\"ModifierDefinition\",\"src\":\"5281:79:1\"}],\"id\":526,\"name\":\"ContractDefinition\",\"src\":\"68:5297:1\"}],\"id\":527,\"name\":\"SourceUnit\",\"src\":\"0:5367:1\"},\"compiler\":{\"name\":\"solc\",\"version\":\"0.7.4+commit.3f05b770.Emscripten.clang\"},\"networks\":{},\"schemaVersion\":\"3.3.3\",\"updatedAt\":\"2021-03-07T03:54:08.257Z\",\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}}");
>>>>>>> 5826188c812f97fcc429c5f3f2d2ce52defab077

/***/ }),

/***/ "./src/contracts/VoteFactory.json":
/*!****************************************!*\
  !*** ./src/contracts/VoteFactory.json ***!
  \****************************************/
/*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, immutableReferences, generatedSources, deployedGeneratedSources, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, networkType, devdoc, userdoc, default */
/***/ (function(module) {

<<<<<<< HEAD
module.exports = JSON.parse("{\"contractName\":\"VoteFactory\",\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"deployedVotes\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"typeOf\",\"type\":\"uint256\"}],\"name\":\"createVote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getDeployedVotes\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true}],\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.7.4+commit.3f05b770\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"typeOf\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"createVote\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"deployedVotes\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"getDeployedVotes\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address[]\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address[]\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"}],\\\"devdoc\\\":{\\\"kind\\\":\\\"dev\\\",\\\"methods\\\":{},\\\"version\\\":1},\\\"userdoc\\\":{\\\"kind\\\":\\\"user\\\",\\\"methods\\\":{},\\\"version\\\":1}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/VoteFactory.sol\\\":\\\"VoteFactory\\\"},\\\"evmVersion\\\":\\\"istanbul\\\",\\\"libraries\\\":{},\\\"metadata\\\":{\\\"bytecodeHash\\\":\\\"ipfs\\\"},\\\"optimizer\\\":{\\\"enabled\\\":false,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/Vote.sol\\\":{\\\"keccak256\\\":\\\"0x8659d7064ef2a8af96dc77c92e56744e246e6c863f69ceb7c52b9fbfebc26ec1\\\",\\\"license\\\":\\\"UNLICENSED\\\",\\\"urls\\\":[\\\"bzz-raw://a71056be1774cb5e9b22a83ad255ca0a0199608346d019aa5ec01a587d2379a7\\\",\\\"dweb:/ipfs/QmcBE4NRfWvowa87r5RYPwVxo22awUn4Mp5vF3gkqLCNT1\\\"]},\\\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/VoteFactory.sol\\\":{\\\"keccak256\\\":\\\"0xdf24394d828a506241b0020ec64e8d6da9e87319de497033a194d5be397df84b\\\",\\\"license\\\":\\\"UNLICENSED\\\",\\\"urls\\\":[\\\"bzz-raw://d0e47e04d4bf4de24b39dbe20c11e087b54b2b79876ee3527ba8a5c27c47ee05\\\",\\\"dweb:/ipfs/QmfCurUxkxt1YYYc29NtKCbcqsD4H3XJj9PrrHEkExZ6AN\\\"]}},\\\"version\\\":1}\",\"bytecode\":\"0x608060405234801561001057600080fd5b50612d55806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063c142ab0014610046578063ca9cdfff1461009e578063fa954aa0146100fd575b600080fd5b6100726004803603602081101561005c57600080fd5b810190808035906020019092919050505061012b565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100a661016a565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156100e95780820151818401526020810190506100ce565b505050509050019250505060405180910390f35b6101296004803603602081101561011357600080fd5b81019080803590602001909291905050506101f8565b005b6000818154811061013b57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060008054806020026020016040519081016040528092919081815260200182805480156101ee57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116101a4575b5050505050905090565b60003382604051610208906102b5565b808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051809103906000f08015801561024b573d6000803e3d6000fd5b5090506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b612a5d806102c38339019056fe608060405234801561001057600080fd5b50604051612a5d380380612a5d8339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060001461009d5760016100a0565b60005b60ff1660028190555050506129a3806100ba6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80638ab66a90116100a2578063af47fb3f11610071578063af47fb3f14610c3a578063da3550ee14610c68578063dcfda00f14610cac578063e1c5fcc114610ea9578063fcae83a714610f035761010b565b80638ab66a90146108275780638e440c32146109745780639511544714610a78578063ad0dcf9c14610b115761010b565b806367127e43116100de57806367127e4314610409578063691a675c1461056f5780637432e63a14610673578063869eae23146106cb5761010b565b806304facd35146101105780632d35a8a21461028057806335a893a11461029e578063481c6a75146103d5575b600080fd5b610118611073565b6040518080602001878152602001868152602001806020018581526020018060200184810384528a818151815260200191508051906020019080838360005b83811015610172578082015181840152602081019050610157565b50505050905090810190601f16801561019f5780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b838110156101d85780820151818401526020810190506101bd565b50505050905090810190601f1680156102055780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b8381101561023e578082015181840152602081019050610223565b50505050905090810190601f16801561026b5780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b610288611296565b6040518082815260200191505060405180910390f35b6102ca600480360360208110156102b457600080fd5b810190808035906020019092919050505061129c565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015610330578082015181840152602081019050610315565b50505050905090810190601f16801561035d5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561039657808201518184015260208101905061037b565b50505050905090810190601f1680156103c35780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b6103dd61142c565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61056d6004803603608081101561041f57600080fd5b810190808035906020019064010000000081111561043c57600080fd5b82018360208201111561044e57600080fd5b8035906020019184600183028401116401000000008311171561047057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019092919080359060200190929190803590602001906401000000008111156104e757600080fd5b8201836020820111156104f957600080fd5b8035906020019184600183028401116401000000008311171561051b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611450565b005b610577611508565b604051808060200186815260200185815260200180602001848152602001838103835288818151815260200191508051906020019080838360005b838110156105cd5780820151818401526020810190506105b2565b50505050905090810190601f1680156105fa5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015610633578082015181840152602081019050610618565b50505050905090810190601f1680156106605780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b61069f6004803603602081101561068957600080fd5b810190808035906020019092919050505061165c565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610825600480360360608110156106e157600080fd5b81019080803590602001906401000000008111156106fe57600080fd5b82018360208201111561071057600080fd5b8035906020019184600183028401116401000000008311171561073257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561079557600080fd5b8201836020820111156107a757600080fd5b803590602001918460018302840111640100000000831117156107c957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019092919050505061169b565b005b6108696004803603602081101561083d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506118a1565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156108cf5780820151818401526020810190506108b4565b50505050905090810190601f1680156108fc5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561093557808201518184015260208101905061091a565b50505050905090810190601f1680156109625780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b61097c611a21565b604051808060200186815260200185815260200180602001848152602001838103835288818151815260200191508051906020019080838360005b838110156109d25780820151818401526020810190506109b7565b50505050905090810190601f1680156109ff5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015610a38578082015181840152602081019050610a1d565b50505050905090810190601f168015610a655780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b610aba60048036036020811015610a8e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611b9e565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610afd578082015181840152602081019050610ae2565b505050509050019250505060405180910390f35b610b5360048036036020811015610b2757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611c7d565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b83811015610b97578082015181840152602081019050610b7c565b50505050905090810190601f168015610bc45780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015610bfd578082015181840152602081019050610be2565b50505050905090810190601f168015610c2a5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b610c6660048036036020811015610c5057600080fd5b8101908080359060200190929190505050611e54565b005b610caa60048036036020811015610c7e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506121df565b005b610ea7600480360360a0811015610cc257600080fd5b8101908080359060200190640100000000811115610cdf57600080fd5b820183602082011115610cf157600080fd5b80359060200191846001830284011164010000000083111715610d1357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291908035906020019092919080359060200190640100000000811115610d8a57600080fd5b820183602082011115610d9c57600080fd5b80359060200191846001830284011164010000000083111715610dbe57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610e2157600080fd5b820183602082011115610e3357600080fd5b80359060200191846001830284011164010000000083111715610e5557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050612448565b005b610eeb60048036036020811015610ebf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061251a565b60405180821515815260200191505060405180910390f35b610f0b612580565b6040518080602001878152602001868152602001806020018581526020018060200184810384528a818151815260200191508051906020019080838360005b83811015610f65578082015181840152602081019050610f4a565b50505050905090810190601f168015610f925780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610fcb578082015181840152602081019050610fb0565b50505050905090810190601f168015610ff85780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b83811015611031578082015181840152602081019050611016565b50505050905090810190601f16801561105e5780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b606060008060606000606060006002541461108d57600080fd5b600660000160066001015460066002015460066003016006600401546006600501858054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111435780601f1061111857610100808354040283529160200191611143565b820191906000526020600020905b81548152906001019060200180831161112657829003601f168201915b50505050509550828054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111df5780601f106111b4576101008083540402835291602001916111df565b820191906000526020600020905b8154815290600101906020018083116111c257829003601f168201915b50505050509250808054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561127b5780601f106112505761010080835404028352916020019161127b565b820191906000526020600020905b81548152906001019060200180831161125e57829003601f168201915b50505050509050955095509550955095509550909192939495565b60015481565b600481815481106112ac57600080fd5b90600052602060002090600502016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113845780601f1061135957610100808354040283529160200191611384565b820191906000526020600020905b81548152906001019060200180831161136757829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114225780601f106113f757610100808354040283529160200191611422565b820191906000526020600020905b81548152906001019060200180831161140557829003601f168201915b5050505050905084565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146114a857600080fd5b6001600254146114b757600080fd5b6000600d9050848160000190805190602001906114d5929190612772565b5083816001018190555082816002018190555081816003019080519060200190611500929190612772565b505050505050565b600d806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115a25780601f10611577576101008083540402835291602001916115a2565b820191906000526020600020905b81548152906001019060200180831161158557829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561164c5780601f106116215761010080835404028352916020019161164c565b820191906000526020600020905b81548152906001019060200180831161162f57829003601f168201915b5050505050908060040154905085565b6005818154811061166c57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600254146116aa57600080fd5b600660010154811180156116c2575060066002015481105b6116cb57600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905083816003019080519060200190611726929190612772565b508281600401908051906020019061173f929190612772565b50338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060048190806001815401808255809150506001900390600052602060002090600502016000909190919091506000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600182015481600101556002820181600201908054611836929190612800565b506003820181600301908054600181600116156101000203166002900461185e929190612852565b5060048201816004019080546001816001161561010002031660029004611886929190612852565b50505060016000815480929190600101919050555050505050565b60036020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119795780601f1061194e57610100808354040283529160200191611979565b820191906000526020600020905b81548152906001019060200180831161195c57829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611a175780601f106119ec57610100808354040283529160200191611a17565b820191906000526020600020905b8154815290600101906020018083116119fa57829003601f168201915b5050505050905084565b606060008060606000600160025414611a3957600080fd5b600d600001600d60010154600d60020154600d600301600d60040154848054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611aea5780601f10611abf57610100808354040283529160200191611aea565b820191906000526020600020905b815481529060010190602001808311611acd57829003601f168201915b50505050509450818054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b865780601f10611b5b57610100808354040283529160200191611b86565b820191906000526020600020905b815481529060010190602001808311611b6957829003601f168201915b50505050509150945094509450945094509091929394565b6060600060025414611baf57600080fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201805480602002602001604051908101604052809291908181526020018280548015611c7157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611c27575b50505050509050919050565b606080600060025414611c8f57600080fd5b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401818054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611da85780601f10611d7d57610100808354040283529160200191611da8565b820191906000526020600020905b815481529060010190602001808311611d8b57829003601f168201915b50505050509150808054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611e445780601f10611e1957610100808354040283529160200191611e44565b820191906000526020600020905b815481529060010190602001808311611e2757829003601f168201915b5050505050905091509150915091565b600060025414611e6357600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060405180602001604052806000815250816003019080519060200190611ecd929190612772565b5060405180602001604052806000815250816004019080519060200190611ef5929190612772565b50600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160009055600282016000611f7591906128e7565b600382016000611f859190612908565b600482016000611f959190612908565b505060005b6004805490508110156121c75760048181548110611fb457fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156121ba5760046001600480549050038154811061202e57fe5b90600052602060002090600502016004828154811061204957fe5b90600052602060002090600502016000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001820154816001015560028201816002019080546120de929190612800565b5060038201816003019080546001816001161561010002031660029004612106929190612852565b506004820181600401908054600181600116156101000203166002900461212e929190612852565b50905050600480548061213d57fe5b6001900381819060005260206000209060050201600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000905560028201600061219191906128e7565b6003820160006121a19190612908565b6004820160006121b19190612908565b505090556121c7565b8080600101915050611f9a565b50600160008154809291906001900391905055505050565b6000600254146121ee57600080fd5b600015156006800160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515141561244557600073ffffffffffffffffffffffffffffffffffffffff16600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146124445760016006800160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600660040160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146124a057600080fd5b6000600254146124af57600080fd5b600060069050858160000190805190602001906124cd929190612772565b50848160010181905550838160020181905550828160030190805190602001906124f8929190612772565b5081816005019080519060200190612511929190612772565b50505050505050565b6000806002541461252a57600080fd5b6006800160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6006806000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561261a5780601f106125ef5761010080835404028352916020019161261a565b820191906000526020600020905b8154815290600101906020018083116125fd57829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156126c45780601f10612699576101008083540402835291602001916126c4565b820191906000526020600020905b8154815290600101906020018083116126a757829003601f168201915b505050505090806004015490806005018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156127685780601f1061273d57610100808354040283529160200191612768565b820191906000526020600020905b81548152906001019060200180831161274b57829003601f168201915b5050505050905086565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826127a857600085556127ef565b82601f106127c157805160ff19168380011785556127ef565b828001600101855582156127ef579182015b828111156127ee5782518255916020019190600101906127d3565b5b5090506127fc9190612950565b5090565b8280548282559060005260206000209081019282156128415760005260206000209182015b82811115612840578254825591600101919060010190612825565b5b50905061284e9190612950565b5090565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928261288857600085556128d6565b82601f1061289957805485556128d6565b828001600101855582156128d657600052602060002091601f016020900482015b828111156128d55782548255916001019190600101906128ba565b5b5090506128e39190612950565b5090565b50805460008255906000526020600020908101906129059190612950565b50565b50805460018160011615610100020316600290046000825580601f1061292e575061294d565b601f01602090049060005260206000209081019061294c9190612950565b5b50565b5b80821115612969576000816000905550600101612951565b509056fea264697066735822122049dd238002baed7c1b916d80833bba94b24be80d8cc1050cca5ecf309905e9a764736f6c63430007040033a26469706673582212206febd4eac1b5f2459cb37d7c1ea59fc98d75aa2b9f17a86a126a302d1c72b13c64736f6c63430007040033\",\"deployedBytecode\":\"0x608060405234801561001057600080fd5b50600436106100415760003560e01c8063c142ab0014610046578063ca9cdfff1461009e578063fa954aa0146100fd575b600080fd5b6100726004803603602081101561005c57600080fd5b810190808035906020019092919050505061012b565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100a661016a565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156100e95780820151818401526020810190506100ce565b505050509050019250505060405180910390f35b6101296004803603602081101561011357600080fd5b81019080803590602001909291905050506101f8565b005b6000818154811061013b57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060008054806020026020016040519081016040528092919081815260200182805480156101ee57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116101a4575b5050505050905090565b60003382604051610208906102b5565b808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051809103906000f08015801561024b573d6000803e3d6000fd5b5090506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b612a5d806102c38339019056fe608060405234801561001057600080fd5b50604051612a5d380380612a5d8339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060001461009d5760016100a0565b60005b60ff1660028190555050506129a3806100ba6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80638ab66a90116100a2578063af47fb3f11610071578063af47fb3f14610c3a578063da3550ee14610c68578063dcfda00f14610cac578063e1c5fcc114610ea9578063fcae83a714610f035761010b565b80638ab66a90146108275780638e440c32146109745780639511544714610a78578063ad0dcf9c14610b115761010b565b806367127e43116100de57806367127e4314610409578063691a675c1461056f5780637432e63a14610673578063869eae23146106cb5761010b565b806304facd35146101105780632d35a8a21461028057806335a893a11461029e578063481c6a75146103d5575b600080fd5b610118611073565b6040518080602001878152602001868152602001806020018581526020018060200184810384528a818151815260200191508051906020019080838360005b83811015610172578082015181840152602081019050610157565b50505050905090810190601f16801561019f5780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b838110156101d85780820151818401526020810190506101bd565b50505050905090810190601f1680156102055780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b8381101561023e578082015181840152602081019050610223565b50505050905090810190601f16801561026b5780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b610288611296565b6040518082815260200191505060405180910390f35b6102ca600480360360208110156102b457600080fd5b810190808035906020019092919050505061129c565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015610330578082015181840152602081019050610315565b50505050905090810190601f16801561035d5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561039657808201518184015260208101905061037b565b50505050905090810190601f1680156103c35780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b6103dd61142c565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61056d6004803603608081101561041f57600080fd5b810190808035906020019064010000000081111561043c57600080fd5b82018360208201111561044e57600080fd5b8035906020019184600183028401116401000000008311171561047057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019092919080359060200190929190803590602001906401000000008111156104e757600080fd5b8201836020820111156104f957600080fd5b8035906020019184600183028401116401000000008311171561051b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611450565b005b610577611508565b604051808060200186815260200185815260200180602001848152602001838103835288818151815260200191508051906020019080838360005b838110156105cd5780820151818401526020810190506105b2565b50505050905090810190601f1680156105fa5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015610633578082015181840152602081019050610618565b50505050905090810190601f1680156106605780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b61069f6004803603602081101561068957600080fd5b810190808035906020019092919050505061165c565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610825600480360360608110156106e157600080fd5b81019080803590602001906401000000008111156106fe57600080fd5b82018360208201111561071057600080fd5b8035906020019184600183028401116401000000008311171561073257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561079557600080fd5b8201836020820111156107a757600080fd5b803590602001918460018302840111640100000000831117156107c957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019092919050505061169b565b005b6108696004803603602081101561083d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506118a1565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156108cf5780820151818401526020810190506108b4565b50505050905090810190601f1680156108fc5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561093557808201518184015260208101905061091a565b50505050905090810190601f1680156109625780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b61097c611a21565b604051808060200186815260200185815260200180602001848152602001838103835288818151815260200191508051906020019080838360005b838110156109d25780820151818401526020810190506109b7565b50505050905090810190601f1680156109ff5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015610a38578082015181840152602081019050610a1d565b50505050905090810190601f168015610a655780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b610aba60048036036020811015610a8e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611b9e565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610afd578082015181840152602081019050610ae2565b505050509050019250505060405180910390f35b610b5360048036036020811015610b2757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611c7d565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b83811015610b97578082015181840152602081019050610b7c565b50505050905090810190601f168015610bc45780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015610bfd578082015181840152602081019050610be2565b50505050905090810190601f168015610c2a5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b610c6660048036036020811015610c5057600080fd5b8101908080359060200190929190505050611e54565b005b610caa60048036036020811015610c7e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506121df565b005b610ea7600480360360a0811015610cc257600080fd5b8101908080359060200190640100000000811115610cdf57600080fd5b820183602082011115610cf157600080fd5b80359060200191846001830284011164010000000083111715610d1357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291908035906020019092919080359060200190640100000000811115610d8a57600080fd5b820183602082011115610d9c57600080fd5b80359060200191846001830284011164010000000083111715610dbe57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610e2157600080fd5b820183602082011115610e3357600080fd5b80359060200191846001830284011164010000000083111715610e5557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050612448565b005b610eeb60048036036020811015610ebf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061251a565b60405180821515815260200191505060405180910390f35b610f0b612580565b6040518080602001878152602001868152602001806020018581526020018060200184810384528a818151815260200191508051906020019080838360005b83811015610f65578082015181840152602081019050610f4a565b50505050905090810190601f168015610f925780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610fcb578082015181840152602081019050610fb0565b50505050905090810190601f168015610ff85780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b83811015611031578082015181840152602081019050611016565b50505050905090810190601f16801561105e5780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b606060008060606000606060006002541461108d57600080fd5b600660000160066001015460066002015460066003016006600401546006600501858054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111435780601f1061111857610100808354040283529160200191611143565b820191906000526020600020905b81548152906001019060200180831161112657829003601f168201915b50505050509550828054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111df5780601f106111b4576101008083540402835291602001916111df565b820191906000526020600020905b8154815290600101906020018083116111c257829003601f168201915b50505050509250808054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561127b5780601f106112505761010080835404028352916020019161127b565b820191906000526020600020905b81548152906001019060200180831161125e57829003601f168201915b50505050509050955095509550955095509550909192939495565b60015481565b600481815481106112ac57600080fd5b90600052602060002090600502016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113845780601f1061135957610100808354040283529160200191611384565b820191906000526020600020905b81548152906001019060200180831161136757829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114225780601f106113f757610100808354040283529160200191611422565b820191906000526020600020905b81548152906001019060200180831161140557829003601f168201915b5050505050905084565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146114a857600080fd5b6001600254146114b757600080fd5b6000600d9050848160000190805190602001906114d5929190612772565b5083816001018190555082816002018190555081816003019080519060200190611500929190612772565b505050505050565b600d806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115a25780601f10611577576101008083540402835291602001916115a2565b820191906000526020600020905b81548152906001019060200180831161158557829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561164c5780601f106116215761010080835404028352916020019161164c565b820191906000526020600020905b81548152906001019060200180831161162f57829003601f168201915b5050505050908060040154905085565b6005818154811061166c57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600254146116aa57600080fd5b600660010154811180156116c2575060066002015481105b6116cb57600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905083816003019080519060200190611726929190612772565b508281600401908051906020019061173f929190612772565b50338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060048190806001815401808255809150506001900390600052602060002090600502016000909190919091506000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600182015481600101556002820181600201908054611836929190612800565b506003820181600301908054600181600116156101000203166002900461185e929190612852565b5060048201816004019080546001816001161561010002031660029004611886929190612852565b50505060016000815480929190600101919050555050505050565b60036020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119795780601f1061194e57610100808354040283529160200191611979565b820191906000526020600020905b81548152906001019060200180831161195c57829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611a175780601f106119ec57610100808354040283529160200191611a17565b820191906000526020600020905b8154815290600101906020018083116119fa57829003601f168201915b5050505050905084565b606060008060606000600160025414611a3957600080fd5b600d600001600d60010154600d60020154600d600301600d60040154848054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611aea5780601f10611abf57610100808354040283529160200191611aea565b820191906000526020600020905b815481529060010190602001808311611acd57829003601f168201915b50505050509450818054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b865780601f10611b5b57610100808354040283529160200191611b86565b820191906000526020600020905b815481529060010190602001808311611b6957829003601f168201915b50505050509150945094509450945094509091929394565b6060600060025414611baf57600080fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201805480602002602001604051908101604052809291908181526020018280548015611c7157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611c27575b50505050509050919050565b606080600060025414611c8f57600080fd5b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401818054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611da85780601f10611d7d57610100808354040283529160200191611da8565b820191906000526020600020905b815481529060010190602001808311611d8b57829003601f168201915b50505050509150808054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611e445780601f10611e1957610100808354040283529160200191611e44565b820191906000526020600020905b815481529060010190602001808311611e2757829003601f168201915b5050505050905091509150915091565b600060025414611e6357600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060405180602001604052806000815250816003019080519060200190611ecd929190612772565b5060405180602001604052806000815250816004019080519060200190611ef5929190612772565b50600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160009055600282016000611f7591906128e7565b600382016000611f859190612908565b600482016000611f959190612908565b505060005b6004805490508110156121c75760048181548110611fb457fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156121ba5760046001600480549050038154811061202e57fe5b90600052602060002090600502016004828154811061204957fe5b90600052602060002090600502016000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001820154816001015560028201816002019080546120de929190612800565b5060038201816003019080546001816001161561010002031660029004612106929190612852565b506004820181600401908054600181600116156101000203166002900461212e929190612852565b50905050600480548061213d57fe5b6001900381819060005260206000209060050201600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000905560028201600061219191906128e7565b6003820160006121a19190612908565b6004820160006121b19190612908565b505090556121c7565b8080600101915050611f9a565b50600160008154809291906001900391905055505050565b6000600254146121ee57600080fd5b600015156006800160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515141561244557600073ffffffffffffffffffffffffffffffffffffffff16600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146124445760016006800160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600660040160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146124a057600080fd5b6000600254146124af57600080fd5b600060069050858160000190805190602001906124cd929190612772565b50848160010181905550838160020181905550828160030190805190602001906124f8929190612772565b5081816005019080519060200190612511929190612772565b50505050505050565b6000806002541461252a57600080fd5b6006800160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6006806000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561261a5780601f106125ef5761010080835404028352916020019161261a565b820191906000526020600020905b8154815290600101906020018083116125fd57829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156126c45780601f10612699576101008083540402835291602001916126c4565b820191906000526020600020905b8154815290600101906020018083116126a757829003601f168201915b505050505090806004015490806005018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156127685780601f1061273d57610100808354040283529160200191612768565b820191906000526020600020905b81548152906001019060200180831161274b57829003601f168201915b5050505050905086565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826127a857600085556127ef565b82601f106127c157805160ff19168380011785556127ef565b828001600101855582156127ef579182015b828111156127ee5782518255916020019190600101906127d3565b5b5090506127fc9190612950565b5090565b8280548282559060005260206000209081019282156128415760005260206000209182015b82811115612840578254825591600101919060010190612825565b5b50905061284e9190612950565b5090565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928261288857600085556128d6565b82601f1061289957805485556128d6565b828001600101855582156128d657600052602060002091601f016020900482015b828111156128d55782548255916001019190600101906128ba565b5b5090506128e39190612950565b5090565b50805460008255906000526020600020908101906129059190612950565b50565b50805460018160011615610100020316600290046000825580601f1061292e575061294d565b601f01602090049060005260206000209081019061294c9190612950565b5b50565b5b80821115612969576000816000905550600101612951565b509056fea264697066735822122049dd238002baed7c1b916d80833bba94b24be80d8cc1050cca5ecf309905e9a764736f6c63430007040033a26469706673582212206febd4eac1b5f2459cb37d7c1ea59fc98d75aa2b9f17a86a126a302d1c72b13c64736f6c63430007040033\",\"immutableReferences\":{},\"generatedSources\":[],\"deployedGeneratedSources\":[],\"sourceMap\":\"93:346:2:-:0;;;;;;;;;;;;;;;;;;;\",\"deployedSourceMap\":\"93:346:2:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;120:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;322:106;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;163:151;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;120:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;322:106::-;371:16;407:13;400:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;322:106;:::o;163:151::-;213:15;248:10;260:6;239:28;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;213:55;;279:13;298:7;279:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;163:151;;:::o;-1:-1:-1:-;;;;;;;;:::o\",\"source\":\"pragma solidity ^0.7.4;\\r\\n//\\\"SPDX-License-Identifier: UNLICENSED\\\"\\r\\n\\r\\nimport \\\"./Vote.sol\\\";\\r\\n \\r\\ncontract VoteFactory{\\r\\n    address[] public deployedVotes;\\r\\n    \\r\\n    function createVote(uint typeOf) public{\\r\\n        address newVote = address(new Vote(msg.sender, typeOf));\\r\\n        deployedVotes.push(newVote);\\r\\n    }\\r\\n\\r\\n    function getDeployedVotes() public view returns (address[] memory) {\\r\\n        return deployedVotes;\\r\\n    }\\r\\n\\r\\n    \\r\\n}\\r\\n\\r\\n\",\"sourcePath\":\"C:/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/VoteFactory.sol\",\"ast\":{\"absolutePath\":\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/VoteFactory.sol\",\"exportedSymbols\":{\"Vote\":[586],\"VoteFactory\":[626]},\"id\":627,\"license\":\"UNLICENSED\",\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":588,\"literals\":[\"solidity\",\"^\",\"0.7\",\".4\"],\"nodeType\":\"PragmaDirective\",\"src\":\"0:23:2\"},{\"absolutePath\":\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/Vote.sol\",\"file\":\"./Vote.sol\",\"id\":589,\"nodeType\":\"ImportDirective\",\"scope\":627,\"sourceUnit\":587,\"src\":\"68:20:2\",\"symbolAliases\":[],\"unitAlias\":\"\"},{\"abstract\":false,\"baseContracts\":[],\"contractDependencies\":[586],\"contractKind\":\"contract\",\"fullyImplemented\":true,\"id\":626,\"linearizedBaseContracts\":[626],\"name\":\"VoteFactory\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"constant\":false,\"functionSelector\":\"c142ab00\",\"id\":592,\"mutability\":\"mutable\",\"name\":\"deployedVotes\",\"nodeType\":\"VariableDeclaration\",\"scope\":626,\"src\":\"120:30:2\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":590,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"120:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":591,\"nodeType\":\"ArrayTypeName\",\"src\":\"120:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"public\"},{\"body\":{\"id\":615,\"nodeType\":\"Block\",\"src\":\"202:112:2\",\"statements\":[{\"assignments\":[598],\"declarations\":[{\"constant\":false,\"id\":598,\"mutability\":\"mutable\",\"name\":\"newVote\",\"nodeType\":\"VariableDeclaration\",\"scope\":615,\"src\":\"213:15:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":597,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"213:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"id\":608,\"initialValue\":{\"arguments\":[{\"arguments\":[{\"expression\":{\"id\":603,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"248:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":604,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"248:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},{\"id\":605,\"name\":\"typeOf\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":594,\"src\":\"260:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":602,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"NewExpression\",\"src\":\"239:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_creation_nonpayable$_t_address_$_t_uint256_$returns$_t_contract$_Vote_$586_$\",\"typeString\":\"function (address,uint256) returns (contract Vote)\"},\"typeName\":{\"id\":601,\"name\":\"Vote\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":586,\"src\":\"243:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_Vote_$586\",\"typeString\":\"contract Vote\"}}},\"id\":606,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"239:28:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_Vote_$586\",\"typeString\":\"contract Vote\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_contract$_Vote_$586\",\"typeString\":\"contract Vote\"}],\"id\":600,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"nodeType\":\"ElementaryTypeNameExpression\",\"src\":\"231:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_type$_t_address_$\",\"typeString\":\"type(address)\"},\"typeName\":{\"id\":599,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"231:7:2\",\"typeDescriptions\":{}}},\"id\":607,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"typeConversion\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"231:37:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"213:55:2\"},{\"expression\":{\"arguments\":[{\"id\":612,\"name\":\"newVote\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":598,\"src\":\"298:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"expression\":{\"id\":609,\"name\":\"deployedVotes\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":592,\"src\":\"279:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":611,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"push\",\"nodeType\":\"MemberAccess\",\"src\":\"279:18:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypush_nonpayable$_t_address_$returns$__$\",\"typeString\":\"function (address)\"}},\"id\":613,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"279:27:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":614,\"nodeType\":\"ExpressionStatement\",\"src\":\"279:27:2\"}]},\"functionSelector\":\"fa954aa0\",\"id\":616,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"createVote\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":595,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":594,\"mutability\":\"mutable\",\"name\":\"typeOf\",\"nodeType\":\"VariableDeclaration\",\"scope\":616,\"src\":\"183:11:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":593,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"183:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"182:13:2\"},\"returnParameters\":{\"id\":596,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"202:0:2\"},\"scope\":626,\"src\":\"163:151:2\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":624,\"nodeType\":\"Block\",\"src\":\"389:39:2\",\"statements\":[{\"expression\":{\"id\":622,\"name\":\"deployedVotes\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":592,\"src\":\"407:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"functionReturnParameters\":621,\"id\":623,\"nodeType\":\"Return\",\"src\":\"400:20:2\"}]},\"functionSelector\":\"ca9cdfff\",\"id\":625,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getDeployedVotes\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":617,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"347:2:2\"},\"returnParameters\":{\"id\":621,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":620,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":625,\"src\":\"371:16:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":618,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"371:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":619,\"nodeType\":\"ArrayTypeName\",\"src\":\"371:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"}],\"src\":\"370:18:2\"},\"scope\":626,\"src\":\"322:106:2\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"}],\"scope\":627,\"src\":\"93:346:2\"}],\"src\":\"0:443:2\"},\"legacyAST\":{\"attributes\":{\"absolutePath\":\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/VoteFactory.sol\",\"exportedSymbols\":{\"Vote\":[586],\"VoteFactory\":[626]},\"license\":\"UNLICENSED\"},\"children\":[{\"attributes\":{\"literals\":[\"solidity\",\"^\",\"0.7\",\".4\"]},\"id\":588,\"name\":\"PragmaDirective\",\"src\":\"0:23:2\"},{\"attributes\":{\"SourceUnit\":587,\"absolutePath\":\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/Vote.sol\",\"file\":\"./Vote.sol\",\"scope\":627,\"symbolAliases\":[null],\"unitAlias\":\"\"},\"id\":589,\"name\":\"ImportDirective\",\"src\":\"68:20:2\"},{\"attributes\":{\"abstract\":false,\"baseContracts\":[null],\"contractDependencies\":[586],\"contractKind\":\"contract\",\"fullyImplemented\":true,\"linearizedBaseContracts\":[626],\"name\":\"VoteFactory\",\"scope\":627},\"children\":[{\"attributes\":{\"constant\":false,\"functionSelector\":\"c142ab00\",\"mutability\":\"mutable\",\"name\":\"deployedVotes\",\"scope\":626,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":590,\"name\":\"ElementaryTypeName\",\"src\":\"120:7:2\"}],\"id\":591,\"name\":\"ArrayTypeName\",\"src\":\"120:9:2\"}],\"id\":592,\"name\":\"VariableDeclaration\",\"src\":\"120:30:2\"},{\"attributes\":{\"functionSelector\":\"fa954aa0\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"createVote\",\"scope\":626,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"typeOf\",\"scope\":616,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":593,\"name\":\"ElementaryTypeName\",\"src\":\"183:4:2\"}],\"id\":594,\"name\":\"VariableDeclaration\",\"src\":\"183:11:2\"}],\"id\":595,\"name\":\"ParameterList\",\"src\":\"182:13:2\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":596,\"name\":\"ParameterList\",\"src\":\"202:0:2\"},{\"children\":[{\"attributes\":{\"assignments\":[598]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"newVote\",\"scope\":615,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":597,\"name\":\"ElementaryTypeName\",\"src\":\"213:7:2\"}],\"id\":598,\"name\":\"VariableDeclaration\",\"src\":\"213:15:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"address\",\"type_conversion\":true},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_contract$_Vote_$586\",\"typeString\":\"contract Vote\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"type\":\"type(address)\"},\"children\":[{\"attributes\":{\"name\":\"address\"},\"id\":599,\"name\":\"ElementaryTypeName\",\"src\":\"231:7:2\"}],\"id\":600,\"name\":\"ElementaryTypeNameExpression\",\"src\":\"231:7:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"contract Vote\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"function (address,uint256) returns (contract Vote)\"},\"children\":[{\"attributes\":{\"name\":\"Vote\",\"referencedDeclaration\":586,\"type\":\"contract Vote\"},\"id\":601,\"name\":\"UserDefinedTypeName\",\"src\":\"243:4:2\"}],\"id\":602,\"name\":\"NewExpression\",\"src\":\"239:8:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":603,\"name\":\"Identifier\",\"src\":\"248:3:2\"}],\"id\":604,\"name\":\"MemberAccess\",\"src\":\"248:10:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":594,\"type\":\"uint256\",\"value\":\"typeOf\"},\"id\":605,\"name\":\"Identifier\",\"src\":\"260:6:2\"}],\"id\":606,\"name\":\"FunctionCall\",\"src\":\"239:28:2\"}],\"id\":607,\"name\":\"FunctionCall\",\"src\":\"231:37:2\"}],\"id\":608,\"name\":\"VariableDeclarationStatement\",\"src\":\"213:55:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"push\",\"type\":\"function (address)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":592,\"type\":\"address[] storage ref\",\"value\":\"deployedVotes\"},\"id\":609,\"name\":\"Identifier\",\"src\":\"279:13:2\"}],\"id\":611,\"name\":\"MemberAccess\",\"src\":\"279:18:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":598,\"type\":\"address\",\"value\":\"newVote\"},\"id\":612,\"name\":\"Identifier\",\"src\":\"298:7:2\"}],\"id\":613,\"name\":\"FunctionCall\",\"src\":\"279:27:2\"}],\"id\":614,\"name\":\"ExpressionStatement\",\"src\":\"279:27:2\"}],\"id\":615,\"name\":\"Block\",\"src\":\"202:112:2\"}],\"id\":616,\"name\":\"FunctionDefinition\",\"src\":\"163:151:2\"},{\"attributes\":{\"functionSelector\":\"ca9cdfff\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"getDeployedVotes\",\"scope\":626,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":617,\"name\":\"ParameterList\",\"src\":\"347:2:2\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":625,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":618,\"name\":\"ElementaryTypeName\",\"src\":\"371:7:2\"}],\"id\":619,\"name\":\"ArrayTypeName\",\"src\":\"371:9:2\"}],\"id\":620,\"name\":\"VariableDeclaration\",\"src\":\"371:16:2\"}],\"id\":621,\"name\":\"ParameterList\",\"src\":\"370:18:2\"},{\"children\":[{\"attributes\":{\"functionReturnParameters\":621},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":592,\"type\":\"address[] storage ref\",\"value\":\"deployedVotes\"},\"id\":622,\"name\":\"Identifier\",\"src\":\"407:13:2\"}],\"id\":623,\"name\":\"Return\",\"src\":\"400:20:2\"}],\"id\":624,\"name\":\"Block\",\"src\":\"389:39:2\"}],\"id\":625,\"name\":\"FunctionDefinition\",\"src\":\"322:106:2\"}],\"id\":626,\"name\":\"ContractDefinition\",\"src\":\"93:346:2\"}],\"id\":627,\"name\":\"SourceUnit\",\"src\":\"0:443:2\"},\"compiler\":{\"name\":\"solc\",\"version\":\"0.7.4+commit.3f05b770.Emscripten.clang\"},\"networks\":{\"5777\":{\"events\":{},\"links\":{},\"address\":\"0xC5D33A597cE80fE8Cc3A1c64adbE32fb11D59BE2\",\"transactionHash\":\"0x5a306caea3bb04ed71539b6af4a1c3d78fb765a983d6a387dbe01ded0d792d0d\"}},\"schemaVersion\":\"3.3.4\",\"updatedAt\":\"2021-03-07T01:03:54.128Z\",\"networkType\":\"ethereum\",\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}}");
=======
module.exports = JSON.parse("{\"contractName\":\"VoteFactory\",\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"deployedVotes\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"typeOf\",\"type\":\"uint256\"}],\"name\":\"createVote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getDeployedVotes\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true}],\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.7.4+commit.3f05b770\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"typeOf\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"createVote\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"deployedVotes\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"getDeployedVotes\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address[]\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address[]\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"}],\\\"devdoc\\\":{\\\"kind\\\":\\\"dev\\\",\\\"methods\\\":{},\\\"version\\\":1},\\\"userdoc\\\":{\\\"kind\\\":\\\"user\\\",\\\"methods\\\":{},\\\"version\\\":1}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/VoteFactory.sol\\\":\\\"VoteFactory\\\"},\\\"evmVersion\\\":\\\"istanbul\\\",\\\"libraries\\\":{},\\\"metadata\\\":{\\\"bytecodeHash\\\":\\\"ipfs\\\"},\\\"optimizer\\\":{\\\"enabled\\\":false,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/Vote.sol\\\":{\\\"keccak256\\\":\\\"0x8659d7064ef2a8af96dc77c92e56744e246e6c863f69ceb7c52b9fbfebc26ec1\\\",\\\"license\\\":\\\"UNLICENSED\\\",\\\"urls\\\":[\\\"bzz-raw://a71056be1774cb5e9b22a83ad255ca0a0199608346d019aa5ec01a587d2379a7\\\",\\\"dweb:/ipfs/QmcBE4NRfWvowa87r5RYPwVxo22awUn4Mp5vF3gkqLCNT1\\\"]},\\\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/VoteFactory.sol\\\":{\\\"keccak256\\\":\\\"0xdf24394d828a506241b0020ec64e8d6da9e87319de497033a194d5be397df84b\\\",\\\"license\\\":\\\"UNLICENSED\\\",\\\"urls\\\":[\\\"bzz-raw://d0e47e04d4bf4de24b39dbe20c11e087b54b2b79876ee3527ba8a5c27c47ee05\\\",\\\"dweb:/ipfs/QmfCurUxkxt1YYYc29NtKCbcqsD4H3XJj9PrrHEkExZ6AN\\\"]}},\\\"version\\\":1}\",\"bytecode\":\"0x608060405234801561001057600080fd5b50612d55806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063c142ab0014610046578063ca9cdfff1461009e578063fa954aa0146100fd575b600080fd5b6100726004803603602081101561005c57600080fd5b810190808035906020019092919050505061012b565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100a661016a565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156100e95780820151818401526020810190506100ce565b505050509050019250505060405180910390f35b6101296004803603602081101561011357600080fd5b81019080803590602001909291905050506101f8565b005b6000818154811061013b57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060008054806020026020016040519081016040528092919081815260200182805480156101ee57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116101a4575b5050505050905090565b60003382604051610208906102b5565b808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051809103906000f08015801561024b573d6000803e3d6000fd5b5090506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b612a5d806102c38339019056fe608060405234801561001057600080fd5b50604051612a5d380380612a5d8339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060001461009d5760016100a0565b60005b60ff1660028190555050506129a3806100ba6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80638ab66a90116100a2578063af47fb3f11610071578063af47fb3f14610c3a578063da3550ee14610c68578063dcfda00f14610cac578063e1c5fcc114610ea9578063fcae83a714610f035761010b565b80638ab66a90146108275780638e440c32146109745780639511544714610a78578063ad0dcf9c14610b115761010b565b806367127e43116100de57806367127e4314610409578063691a675c1461056f5780637432e63a14610673578063869eae23146106cb5761010b565b806304facd35146101105780632d35a8a21461028057806335a893a11461029e578063481c6a75146103d5575b600080fd5b610118611073565b6040518080602001878152602001868152602001806020018581526020018060200184810384528a818151815260200191508051906020019080838360005b83811015610172578082015181840152602081019050610157565b50505050905090810190601f16801561019f5780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b838110156101d85780820151818401526020810190506101bd565b50505050905090810190601f1680156102055780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b8381101561023e578082015181840152602081019050610223565b50505050905090810190601f16801561026b5780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b610288611296565b6040518082815260200191505060405180910390f35b6102ca600480360360208110156102b457600080fd5b810190808035906020019092919050505061129c565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015610330578082015181840152602081019050610315565b50505050905090810190601f16801561035d5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561039657808201518184015260208101905061037b565b50505050905090810190601f1680156103c35780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b6103dd61142c565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61056d6004803603608081101561041f57600080fd5b810190808035906020019064010000000081111561043c57600080fd5b82018360208201111561044e57600080fd5b8035906020019184600183028401116401000000008311171561047057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019092919080359060200190929190803590602001906401000000008111156104e757600080fd5b8201836020820111156104f957600080fd5b8035906020019184600183028401116401000000008311171561051b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611450565b005b610577611508565b604051808060200186815260200185815260200180602001848152602001838103835288818151815260200191508051906020019080838360005b838110156105cd5780820151818401526020810190506105b2565b50505050905090810190601f1680156105fa5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015610633578082015181840152602081019050610618565b50505050905090810190601f1680156106605780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b61069f6004803603602081101561068957600080fd5b810190808035906020019092919050505061165c565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610825600480360360608110156106e157600080fd5b81019080803590602001906401000000008111156106fe57600080fd5b82018360208201111561071057600080fd5b8035906020019184600183028401116401000000008311171561073257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561079557600080fd5b8201836020820111156107a757600080fd5b803590602001918460018302840111640100000000831117156107c957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019092919050505061169b565b005b6108696004803603602081101561083d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506118a1565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156108cf5780820151818401526020810190506108b4565b50505050905090810190601f1680156108fc5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561093557808201518184015260208101905061091a565b50505050905090810190601f1680156109625780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b61097c611a21565b604051808060200186815260200185815260200180602001848152602001838103835288818151815260200191508051906020019080838360005b838110156109d25780820151818401526020810190506109b7565b50505050905090810190601f1680156109ff5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015610a38578082015181840152602081019050610a1d565b50505050905090810190601f168015610a655780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b610aba60048036036020811015610a8e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611b9e565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610afd578082015181840152602081019050610ae2565b505050509050019250505060405180910390f35b610b5360048036036020811015610b2757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611c7d565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b83811015610b97578082015181840152602081019050610b7c565b50505050905090810190601f168015610bc45780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015610bfd578082015181840152602081019050610be2565b50505050905090810190601f168015610c2a5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b610c6660048036036020811015610c5057600080fd5b8101908080359060200190929190505050611e54565b005b610caa60048036036020811015610c7e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506121df565b005b610ea7600480360360a0811015610cc257600080fd5b8101908080359060200190640100000000811115610cdf57600080fd5b820183602082011115610cf157600080fd5b80359060200191846001830284011164010000000083111715610d1357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291908035906020019092919080359060200190640100000000811115610d8a57600080fd5b820183602082011115610d9c57600080fd5b80359060200191846001830284011164010000000083111715610dbe57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610e2157600080fd5b820183602082011115610e3357600080fd5b80359060200191846001830284011164010000000083111715610e5557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050612448565b005b610eeb60048036036020811015610ebf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061251a565b60405180821515815260200191505060405180910390f35b610f0b612580565b6040518080602001878152602001868152602001806020018581526020018060200184810384528a818151815260200191508051906020019080838360005b83811015610f65578082015181840152602081019050610f4a565b50505050905090810190601f168015610f925780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610fcb578082015181840152602081019050610fb0565b50505050905090810190601f168015610ff85780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b83811015611031578082015181840152602081019050611016565b50505050905090810190601f16801561105e5780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b606060008060606000606060006002541461108d57600080fd5b600660000160066001015460066002015460066003016006600401546006600501858054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111435780601f1061111857610100808354040283529160200191611143565b820191906000526020600020905b81548152906001019060200180831161112657829003601f168201915b50505050509550828054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111df5780601f106111b4576101008083540402835291602001916111df565b820191906000526020600020905b8154815290600101906020018083116111c257829003601f168201915b50505050509250808054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561127b5780601f106112505761010080835404028352916020019161127b565b820191906000526020600020905b81548152906001019060200180831161125e57829003601f168201915b50505050509050955095509550955095509550909192939495565b60015481565b600481815481106112ac57600080fd5b90600052602060002090600502016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113845780601f1061135957610100808354040283529160200191611384565b820191906000526020600020905b81548152906001019060200180831161136757829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114225780601f106113f757610100808354040283529160200191611422565b820191906000526020600020905b81548152906001019060200180831161140557829003601f168201915b5050505050905084565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146114a857600080fd5b6001600254146114b757600080fd5b6000600d9050848160000190805190602001906114d5929190612772565b5083816001018190555082816002018190555081816003019080519060200190611500929190612772565b505050505050565b600d806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115a25780601f10611577576101008083540402835291602001916115a2565b820191906000526020600020905b81548152906001019060200180831161158557829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561164c5780601f106116215761010080835404028352916020019161164c565b820191906000526020600020905b81548152906001019060200180831161162f57829003601f168201915b5050505050908060040154905085565b6005818154811061166c57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600254146116aa57600080fd5b600660010154811180156116c2575060066002015481105b6116cb57600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905083816003019080519060200190611726929190612772565b508281600401908051906020019061173f929190612772565b50338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060048190806001815401808255809150506001900390600052602060002090600502016000909190919091506000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600182015481600101556002820181600201908054611836929190612800565b506003820181600301908054600181600116156101000203166002900461185e929190612852565b5060048201816004019080546001816001161561010002031660029004611886929190612852565b50505060016000815480929190600101919050555050505050565b60036020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119795780601f1061194e57610100808354040283529160200191611979565b820191906000526020600020905b81548152906001019060200180831161195c57829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611a175780601f106119ec57610100808354040283529160200191611a17565b820191906000526020600020905b8154815290600101906020018083116119fa57829003601f168201915b5050505050905084565b606060008060606000600160025414611a3957600080fd5b600d600001600d60010154600d60020154600d600301600d60040154848054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611aea5780601f10611abf57610100808354040283529160200191611aea565b820191906000526020600020905b815481529060010190602001808311611acd57829003601f168201915b50505050509450818054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b865780601f10611b5b57610100808354040283529160200191611b86565b820191906000526020600020905b815481529060010190602001808311611b6957829003601f168201915b50505050509150945094509450945094509091929394565b6060600060025414611baf57600080fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201805480602002602001604051908101604052809291908181526020018280548015611c7157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611c27575b50505050509050919050565b606080600060025414611c8f57600080fd5b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401818054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611da85780601f10611d7d57610100808354040283529160200191611da8565b820191906000526020600020905b815481529060010190602001808311611d8b57829003601f168201915b50505050509150808054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611e445780601f10611e1957610100808354040283529160200191611e44565b820191906000526020600020905b815481529060010190602001808311611e2757829003601f168201915b5050505050905091509150915091565b600060025414611e6357600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060405180602001604052806000815250816003019080519060200190611ecd929190612772565b5060405180602001604052806000815250816004019080519060200190611ef5929190612772565b50600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160009055600282016000611f7591906128e7565b600382016000611f859190612908565b600482016000611f959190612908565b505060005b6004805490508110156121c75760048181548110611fb457fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156121ba5760046001600480549050038154811061202e57fe5b90600052602060002090600502016004828154811061204957fe5b90600052602060002090600502016000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001820154816001015560028201816002019080546120de929190612800565b5060038201816003019080546001816001161561010002031660029004612106929190612852565b506004820181600401908054600181600116156101000203166002900461212e929190612852565b50905050600480548061213d57fe5b6001900381819060005260206000209060050201600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000905560028201600061219191906128e7565b6003820160006121a19190612908565b6004820160006121b19190612908565b505090556121c7565b8080600101915050611f9a565b50600160008154809291906001900391905055505050565b6000600254146121ee57600080fd5b600015156006800160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515141561244557600073ffffffffffffffffffffffffffffffffffffffff16600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146124445760016006800160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600660040160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146124a057600080fd5b6000600254146124af57600080fd5b600060069050858160000190805190602001906124cd929190612772565b50848160010181905550838160020181905550828160030190805190602001906124f8929190612772565b5081816005019080519060200190612511929190612772565b50505050505050565b6000806002541461252a57600080fd5b6006800160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6006806000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561261a5780601f106125ef5761010080835404028352916020019161261a565b820191906000526020600020905b8154815290600101906020018083116125fd57829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156126c45780601f10612699576101008083540402835291602001916126c4565b820191906000526020600020905b8154815290600101906020018083116126a757829003601f168201915b505050505090806004015490806005018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156127685780601f1061273d57610100808354040283529160200191612768565b820191906000526020600020905b81548152906001019060200180831161274b57829003601f168201915b5050505050905086565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826127a857600085556127ef565b82601f106127c157805160ff19168380011785556127ef565b828001600101855582156127ef579182015b828111156127ee5782518255916020019190600101906127d3565b5b5090506127fc9190612950565b5090565b8280548282559060005260206000209081019282156128415760005260206000209182015b82811115612840578254825591600101919060010190612825565b5b50905061284e9190612950565b5090565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928261288857600085556128d6565b82601f1061289957805485556128d6565b828001600101855582156128d657600052602060002091601f016020900482015b828111156128d55782548255916001019190600101906128ba565b5b5090506128e39190612950565b5090565b50805460008255906000526020600020908101906129059190612950565b50565b50805460018160011615610100020316600290046000825580601f1061292e575061294d565b601f01602090049060005260206000209081019061294c9190612950565b5b50565b5b80821115612969576000816000905550600101612951565b509056fea264697066735822122049dd238002baed7c1b916d80833bba94b24be80d8cc1050cca5ecf309905e9a764736f6c63430007040033a26469706673582212206febd4eac1b5f2459cb37d7c1ea59fc98d75aa2b9f17a86a126a302d1c72b13c64736f6c63430007040033\",\"deployedBytecode\":\"0x608060405234801561001057600080fd5b50600436106100415760003560e01c8063c142ab0014610046578063ca9cdfff1461009e578063fa954aa0146100fd575b600080fd5b6100726004803603602081101561005c57600080fd5b810190808035906020019092919050505061012b565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100a661016a565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156100e95780820151818401526020810190506100ce565b505050509050019250505060405180910390f35b6101296004803603602081101561011357600080fd5b81019080803590602001909291905050506101f8565b005b6000818154811061013b57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060008054806020026020016040519081016040528092919081815260200182805480156101ee57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116101a4575b5050505050905090565b60003382604051610208906102b5565b808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051809103906000f08015801561024b573d6000803e3d6000fd5b5090506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b612a5d806102c38339019056fe608060405234801561001057600080fd5b50604051612a5d380380612a5d8339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060001461009d5760016100a0565b60005b60ff1660028190555050506129a3806100ba6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80638ab66a90116100a2578063af47fb3f11610071578063af47fb3f14610c3a578063da3550ee14610c68578063dcfda00f14610cac578063e1c5fcc114610ea9578063fcae83a714610f035761010b565b80638ab66a90146108275780638e440c32146109745780639511544714610a78578063ad0dcf9c14610b115761010b565b806367127e43116100de57806367127e4314610409578063691a675c1461056f5780637432e63a14610673578063869eae23146106cb5761010b565b806304facd35146101105780632d35a8a21461028057806335a893a11461029e578063481c6a75146103d5575b600080fd5b610118611073565b6040518080602001878152602001868152602001806020018581526020018060200184810384528a818151815260200191508051906020019080838360005b83811015610172578082015181840152602081019050610157565b50505050905090810190601f16801561019f5780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b838110156101d85780820151818401526020810190506101bd565b50505050905090810190601f1680156102055780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b8381101561023e578082015181840152602081019050610223565b50505050905090810190601f16801561026b5780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b610288611296565b6040518082815260200191505060405180910390f35b6102ca600480360360208110156102b457600080fd5b810190808035906020019092919050505061129c565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015610330578082015181840152602081019050610315565b50505050905090810190601f16801561035d5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561039657808201518184015260208101905061037b565b50505050905090810190601f1680156103c35780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b6103dd61142c565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61056d6004803603608081101561041f57600080fd5b810190808035906020019064010000000081111561043c57600080fd5b82018360208201111561044e57600080fd5b8035906020019184600183028401116401000000008311171561047057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019092919080359060200190929190803590602001906401000000008111156104e757600080fd5b8201836020820111156104f957600080fd5b8035906020019184600183028401116401000000008311171561051b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611450565b005b610577611508565b604051808060200186815260200185815260200180602001848152602001838103835288818151815260200191508051906020019080838360005b838110156105cd5780820151818401526020810190506105b2565b50505050905090810190601f1680156105fa5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015610633578082015181840152602081019050610618565b50505050905090810190601f1680156106605780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b61069f6004803603602081101561068957600080fd5b810190808035906020019092919050505061165c565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610825600480360360608110156106e157600080fd5b81019080803590602001906401000000008111156106fe57600080fd5b82018360208201111561071057600080fd5b8035906020019184600183028401116401000000008311171561073257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561079557600080fd5b8201836020820111156107a757600080fd5b803590602001918460018302840111640100000000831117156107c957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019092919050505061169b565b005b6108696004803603602081101561083d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506118a1565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156108cf5780820151818401526020810190506108b4565b50505050905090810190601f1680156108fc5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561093557808201518184015260208101905061091a565b50505050905090810190601f1680156109625780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b61097c611a21565b604051808060200186815260200185815260200180602001848152602001838103835288818151815260200191508051906020019080838360005b838110156109d25780820151818401526020810190506109b7565b50505050905090810190601f1680156109ff5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015610a38578082015181840152602081019050610a1d565b50505050905090810190601f168015610a655780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b610aba60048036036020811015610a8e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611b9e565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610afd578082015181840152602081019050610ae2565b505050509050019250505060405180910390f35b610b5360048036036020811015610b2757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611c7d565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b83811015610b97578082015181840152602081019050610b7c565b50505050905090810190601f168015610bc45780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015610bfd578082015181840152602081019050610be2565b50505050905090810190601f168015610c2a5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b610c6660048036036020811015610c5057600080fd5b8101908080359060200190929190505050611e54565b005b610caa60048036036020811015610c7e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506121df565b005b610ea7600480360360a0811015610cc257600080fd5b8101908080359060200190640100000000811115610cdf57600080fd5b820183602082011115610cf157600080fd5b80359060200191846001830284011164010000000083111715610d1357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291908035906020019092919080359060200190640100000000811115610d8a57600080fd5b820183602082011115610d9c57600080fd5b80359060200191846001830284011164010000000083111715610dbe57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610e2157600080fd5b820183602082011115610e3357600080fd5b80359060200191846001830284011164010000000083111715610e5557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050612448565b005b610eeb60048036036020811015610ebf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061251a565b60405180821515815260200191505060405180910390f35b610f0b612580565b6040518080602001878152602001868152602001806020018581526020018060200184810384528a818151815260200191508051906020019080838360005b83811015610f65578082015181840152602081019050610f4a565b50505050905090810190601f168015610f925780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610fcb578082015181840152602081019050610fb0565b50505050905090810190601f168015610ff85780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b83811015611031578082015181840152602081019050611016565b50505050905090810190601f16801561105e5780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b606060008060606000606060006002541461108d57600080fd5b600660000160066001015460066002015460066003016006600401546006600501858054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111435780601f1061111857610100808354040283529160200191611143565b820191906000526020600020905b81548152906001019060200180831161112657829003601f168201915b50505050509550828054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111df5780601f106111b4576101008083540402835291602001916111df565b820191906000526020600020905b8154815290600101906020018083116111c257829003601f168201915b50505050509250808054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561127b5780601f106112505761010080835404028352916020019161127b565b820191906000526020600020905b81548152906001019060200180831161125e57829003601f168201915b50505050509050955095509550955095509550909192939495565b60015481565b600481815481106112ac57600080fd5b90600052602060002090600502016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113845780601f1061135957610100808354040283529160200191611384565b820191906000526020600020905b81548152906001019060200180831161136757829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114225780601f106113f757610100808354040283529160200191611422565b820191906000526020600020905b81548152906001019060200180831161140557829003601f168201915b5050505050905084565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146114a857600080fd5b6001600254146114b757600080fd5b6000600d9050848160000190805190602001906114d5929190612772565b5083816001018190555082816002018190555081816003019080519060200190611500929190612772565b505050505050565b600d806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115a25780601f10611577576101008083540402835291602001916115a2565b820191906000526020600020905b81548152906001019060200180831161158557829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561164c5780601f106116215761010080835404028352916020019161164c565b820191906000526020600020905b81548152906001019060200180831161162f57829003601f168201915b5050505050908060040154905085565b6005818154811061166c57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600254146116aa57600080fd5b600660010154811180156116c2575060066002015481105b6116cb57600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905083816003019080519060200190611726929190612772565b508281600401908051906020019061173f929190612772565b50338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060048190806001815401808255809150506001900390600052602060002090600502016000909190919091506000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600182015481600101556002820181600201908054611836929190612800565b506003820181600301908054600181600116156101000203166002900461185e929190612852565b5060048201816004019080546001816001161561010002031660029004611886929190612852565b50505060016000815480929190600101919050555050505050565b60036020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119795780601f1061194e57610100808354040283529160200191611979565b820191906000526020600020905b81548152906001019060200180831161195c57829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611a175780601f106119ec57610100808354040283529160200191611a17565b820191906000526020600020905b8154815290600101906020018083116119fa57829003601f168201915b5050505050905084565b606060008060606000600160025414611a3957600080fd5b600d600001600d60010154600d60020154600d600301600d60040154848054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611aea5780601f10611abf57610100808354040283529160200191611aea565b820191906000526020600020905b815481529060010190602001808311611acd57829003601f168201915b50505050509450818054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b865780601f10611b5b57610100808354040283529160200191611b86565b820191906000526020600020905b815481529060010190602001808311611b6957829003601f168201915b50505050509150945094509450945094509091929394565b6060600060025414611baf57600080fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201805480602002602001604051908101604052809291908181526020018280548015611c7157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611c27575b50505050509050919050565b606080600060025414611c8f57600080fd5b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401818054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611da85780601f10611d7d57610100808354040283529160200191611da8565b820191906000526020600020905b815481529060010190602001808311611d8b57829003601f168201915b50505050509150808054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611e445780601f10611e1957610100808354040283529160200191611e44565b820191906000526020600020905b815481529060010190602001808311611e2757829003601f168201915b5050505050905091509150915091565b600060025414611e6357600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060405180602001604052806000815250816003019080519060200190611ecd929190612772565b5060405180602001604052806000815250816004019080519060200190611ef5929190612772565b50600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160009055600282016000611f7591906128e7565b600382016000611f859190612908565b600482016000611f959190612908565b505060005b6004805490508110156121c75760048181548110611fb457fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156121ba5760046001600480549050038154811061202e57fe5b90600052602060002090600502016004828154811061204957fe5b90600052602060002090600502016000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001820154816001015560028201816002019080546120de929190612800565b5060038201816003019080546001816001161561010002031660029004612106929190612852565b506004820181600401908054600181600116156101000203166002900461212e929190612852565b50905050600480548061213d57fe5b6001900381819060005260206000209060050201600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000905560028201600061219191906128e7565b6003820160006121a19190612908565b6004820160006121b19190612908565b505090556121c7565b8080600101915050611f9a565b50600160008154809291906001900391905055505050565b6000600254146121ee57600080fd5b600015156006800160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515141561244557600073ffffffffffffffffffffffffffffffffffffffff16600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146124445760016006800160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600660040160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146124a057600080fd5b6000600254146124af57600080fd5b600060069050858160000190805190602001906124cd929190612772565b50848160010181905550838160020181905550828160030190805190602001906124f8929190612772565b5081816005019080519060200190612511929190612772565b50505050505050565b6000806002541461252a57600080fd5b6006800160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6006806000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561261a5780601f106125ef5761010080835404028352916020019161261a565b820191906000526020600020905b8154815290600101906020018083116125fd57829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156126c45780601f10612699576101008083540402835291602001916126c4565b820191906000526020600020905b8154815290600101906020018083116126a757829003601f168201915b505050505090806004015490806005018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156127685780601f1061273d57610100808354040283529160200191612768565b820191906000526020600020905b81548152906001019060200180831161274b57829003601f168201915b5050505050905086565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826127a857600085556127ef565b82601f106127c157805160ff19168380011785556127ef565b828001600101855582156127ef579182015b828111156127ee5782518255916020019190600101906127d3565b5b5090506127fc9190612950565b5090565b8280548282559060005260206000209081019282156128415760005260206000209182015b82811115612840578254825591600101919060010190612825565b5b50905061284e9190612950565b5090565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928261288857600085556128d6565b82601f1061289957805485556128d6565b828001600101855582156128d657600052602060002091601f016020900482015b828111156128d55782548255916001019190600101906128ba565b5b5090506128e39190612950565b5090565b50805460008255906000526020600020908101906129059190612950565b50565b50805460018160011615610100020316600290046000825580601f1061292e575061294d565b601f01602090049060005260206000209081019061294c9190612950565b5b50565b5b80821115612969576000816000905550600101612951565b509056fea264697066735822122049dd238002baed7c1b916d80833bba94b24be80d8cc1050cca5ecf309905e9a764736f6c63430007040033a26469706673582212206febd4eac1b5f2459cb37d7c1ea59fc98d75aa2b9f17a86a126a302d1c72b13c64736f6c63430007040033\",\"immutableReferences\":{},\"generatedSources\":[],\"deployedGeneratedSources\":[],\"sourceMap\":\"93:346:2:-:0;;;;;;;;;;;;;;;;;;;\",\"deployedSourceMap\":\"93:346:2:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;120:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;322:106;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;163:151;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;120:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;322:106::-;371:16;407:13;400:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;322:106;:::o;163:151::-;213:15;248:10;260:6;239:28;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;213:55;;279:13;298:7;279:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;163:151;;:::o;-1:-1:-1:-;;;;;;;;:::o\",\"source\":\"pragma solidity ^0.7.4;\\r\\n//\\\"SPDX-License-Identifier: UNLICENSED\\\"\\r\\n\\r\\nimport \\\"./Vote.sol\\\";\\r\\n \\r\\ncontract VoteFactory{\\r\\n    address[] public deployedVotes;\\r\\n    \\r\\n    function createVote(uint typeOf) public{\\r\\n        address newVote = address(new Vote(msg.sender, typeOf));\\r\\n        deployedVotes.push(newVote);\\r\\n    }\\r\\n\\r\\n    function getDeployedVotes() public view returns (address[] memory) {\\r\\n        return deployedVotes;\\r\\n    }\\r\\n\\r\\n    \\r\\n}\\r\\n\\r\\n\",\"sourcePath\":\"C:/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/VoteFactory.sol\",\"ast\":{\"absolutePath\":\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/VoteFactory.sol\",\"exportedSymbols\":{\"Vote\":[586],\"VoteFactory\":[626]},\"id\":627,\"license\":\"UNLICENSED\",\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":588,\"literals\":[\"solidity\",\"^\",\"0.7\",\".4\"],\"nodeType\":\"PragmaDirective\",\"src\":\"0:23:2\"},{\"absolutePath\":\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/Vote.sol\",\"file\":\"./Vote.sol\",\"id\":589,\"nodeType\":\"ImportDirective\",\"scope\":627,\"sourceUnit\":587,\"src\":\"68:20:2\",\"symbolAliases\":[],\"unitAlias\":\"\"},{\"abstract\":false,\"baseContracts\":[],\"contractDependencies\":[586],\"contractKind\":\"contract\",\"fullyImplemented\":true,\"id\":626,\"linearizedBaseContracts\":[626],\"name\":\"VoteFactory\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"constant\":false,\"functionSelector\":\"c142ab00\",\"id\":592,\"mutability\":\"mutable\",\"name\":\"deployedVotes\",\"nodeType\":\"VariableDeclaration\",\"scope\":626,\"src\":\"120:30:2\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":590,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"120:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":591,\"nodeType\":\"ArrayTypeName\",\"src\":\"120:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"public\"},{\"body\":{\"id\":615,\"nodeType\":\"Block\",\"src\":\"202:112:2\",\"statements\":[{\"assignments\":[598],\"declarations\":[{\"constant\":false,\"id\":598,\"mutability\":\"mutable\",\"name\":\"newVote\",\"nodeType\":\"VariableDeclaration\",\"scope\":615,\"src\":\"213:15:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":597,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"213:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"id\":608,\"initialValue\":{\"arguments\":[{\"arguments\":[{\"expression\":{\"id\":603,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"248:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":604,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"248:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},{\"id\":605,\"name\":\"typeOf\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":594,\"src\":\"260:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":602,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"NewExpression\",\"src\":\"239:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_creation_nonpayable$_t_address_$_t_uint256_$returns$_t_contract$_Vote_$586_$\",\"typeString\":\"function (address,uint256) returns (contract Vote)\"},\"typeName\":{\"id\":601,\"name\":\"Vote\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":586,\"src\":\"243:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_Vote_$586\",\"typeString\":\"contract Vote\"}}},\"id\":606,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"239:28:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_Vote_$586\",\"typeString\":\"contract Vote\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_contract$_Vote_$586\",\"typeString\":\"contract Vote\"}],\"id\":600,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"nodeType\":\"ElementaryTypeNameExpression\",\"src\":\"231:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_type$_t_address_$\",\"typeString\":\"type(address)\"},\"typeName\":{\"id\":599,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"231:7:2\",\"typeDescriptions\":{}}},\"id\":607,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"typeConversion\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"231:37:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"213:55:2\"},{\"expression\":{\"arguments\":[{\"id\":612,\"name\":\"newVote\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":598,\"src\":\"298:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"expression\":{\"id\":609,\"name\":\"deployedVotes\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":592,\"src\":\"279:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":611,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"push\",\"nodeType\":\"MemberAccess\",\"src\":\"279:18:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypush_nonpayable$_t_address_$returns$__$\",\"typeString\":\"function (address)\"}},\"id\":613,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"279:27:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":614,\"nodeType\":\"ExpressionStatement\",\"src\":\"279:27:2\"}]},\"functionSelector\":\"fa954aa0\",\"id\":616,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"createVote\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":595,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":594,\"mutability\":\"mutable\",\"name\":\"typeOf\",\"nodeType\":\"VariableDeclaration\",\"scope\":616,\"src\":\"183:11:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":593,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"183:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"182:13:2\"},\"returnParameters\":{\"id\":596,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"202:0:2\"},\"scope\":626,\"src\":\"163:151:2\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":624,\"nodeType\":\"Block\",\"src\":\"389:39:2\",\"statements\":[{\"expression\":{\"id\":622,\"name\":\"deployedVotes\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":592,\"src\":\"407:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"functionReturnParameters\":621,\"id\":623,\"nodeType\":\"Return\",\"src\":\"400:20:2\"}]},\"functionSelector\":\"ca9cdfff\",\"id\":625,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getDeployedVotes\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":617,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"347:2:2\"},\"returnParameters\":{\"id\":621,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":620,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":625,\"src\":\"371:16:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":618,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"371:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":619,\"nodeType\":\"ArrayTypeName\",\"src\":\"371:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"}],\"src\":\"370:18:2\"},\"scope\":626,\"src\":\"322:106:2\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"}],\"scope\":627,\"src\":\"93:346:2\"}],\"src\":\"0:443:2\"},\"legacyAST\":{\"attributes\":{\"absolutePath\":\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/VoteFactory.sol\",\"exportedSymbols\":{\"Vote\":[586],\"VoteFactory\":[626]},\"license\":\"UNLICENSED\"},\"children\":[{\"attributes\":{\"literals\":[\"solidity\",\"^\",\"0.7\",\".4\"]},\"id\":588,\"name\":\"PragmaDirective\",\"src\":\"0:23:2\"},{\"attributes\":{\"SourceUnit\":587,\"absolutePath\":\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/Vote.sol\",\"file\":\"./Vote.sol\",\"scope\":627,\"symbolAliases\":[null],\"unitAlias\":\"\"},\"id\":589,\"name\":\"ImportDirective\",\"src\":\"68:20:2\"},{\"attributes\":{\"abstract\":false,\"baseContracts\":[null],\"contractDependencies\":[586],\"contractKind\":\"contract\",\"fullyImplemented\":true,\"linearizedBaseContracts\":[626],\"name\":\"VoteFactory\",\"scope\":627},\"children\":[{\"attributes\":{\"constant\":false,\"functionSelector\":\"c142ab00\",\"mutability\":\"mutable\",\"name\":\"deployedVotes\",\"scope\":626,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":590,\"name\":\"ElementaryTypeName\",\"src\":\"120:7:2\"}],\"id\":591,\"name\":\"ArrayTypeName\",\"src\":\"120:9:2\"}],\"id\":592,\"name\":\"VariableDeclaration\",\"src\":\"120:30:2\"},{\"attributes\":{\"functionSelector\":\"fa954aa0\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"createVote\",\"scope\":626,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"typeOf\",\"scope\":616,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":593,\"name\":\"ElementaryTypeName\",\"src\":\"183:4:2\"}],\"id\":594,\"name\":\"VariableDeclaration\",\"src\":\"183:11:2\"}],\"id\":595,\"name\":\"ParameterList\",\"src\":\"182:13:2\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":596,\"name\":\"ParameterList\",\"src\":\"202:0:2\"},{\"children\":[{\"attributes\":{\"assignments\":[598]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"newVote\",\"scope\":615,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":597,\"name\":\"ElementaryTypeName\",\"src\":\"213:7:2\"}],\"id\":598,\"name\":\"VariableDeclaration\",\"src\":\"213:15:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"address\",\"type_conversion\":true},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_contract$_Vote_$586\",\"typeString\":\"contract Vote\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"type\":\"type(address)\"},\"children\":[{\"attributes\":{\"name\":\"address\"},\"id\":599,\"name\":\"ElementaryTypeName\",\"src\":\"231:7:2\"}],\"id\":600,\"name\":\"ElementaryTypeNameExpression\",\"src\":\"231:7:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"contract Vote\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"function (address,uint256) returns (contract Vote)\"},\"children\":[{\"attributes\":{\"name\":\"Vote\",\"referencedDeclaration\":586,\"type\":\"contract Vote\"},\"id\":601,\"name\":\"UserDefinedTypeName\",\"src\":\"243:4:2\"}],\"id\":602,\"name\":\"NewExpression\",\"src\":\"239:8:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":603,\"name\":\"Identifier\",\"src\":\"248:3:2\"}],\"id\":604,\"name\":\"MemberAccess\",\"src\":\"248:10:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":594,\"type\":\"uint256\",\"value\":\"typeOf\"},\"id\":605,\"name\":\"Identifier\",\"src\":\"260:6:2\"}],\"id\":606,\"name\":\"FunctionCall\",\"src\":\"239:28:2\"}],\"id\":607,\"name\":\"FunctionCall\",\"src\":\"231:37:2\"}],\"id\":608,\"name\":\"VariableDeclarationStatement\",\"src\":\"213:55:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"push\",\"type\":\"function (address)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":592,\"type\":\"address[] storage ref\",\"value\":\"deployedVotes\"},\"id\":609,\"name\":\"Identifier\",\"src\":\"279:13:2\"}],\"id\":611,\"name\":\"MemberAccess\",\"src\":\"279:18:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":598,\"type\":\"address\",\"value\":\"newVote\"},\"id\":612,\"name\":\"Identifier\",\"src\":\"298:7:2\"}],\"id\":613,\"name\":\"FunctionCall\",\"src\":\"279:27:2\"}],\"id\":614,\"name\":\"ExpressionStatement\",\"src\":\"279:27:2\"}],\"id\":615,\"name\":\"Block\",\"src\":\"202:112:2\"}],\"id\":616,\"name\":\"FunctionDefinition\",\"src\":\"163:151:2\"},{\"attributes\":{\"functionSelector\":\"ca9cdfff\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"getDeployedVotes\",\"scope\":626,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":617,\"name\":\"ParameterList\",\"src\":\"347:2:2\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":625,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":618,\"name\":\"ElementaryTypeName\",\"src\":\"371:7:2\"}],\"id\":619,\"name\":\"ArrayTypeName\",\"src\":\"371:9:2\"}],\"id\":620,\"name\":\"VariableDeclaration\",\"src\":\"371:16:2\"}],\"id\":621,\"name\":\"ParameterList\",\"src\":\"370:18:2\"},{\"children\":[{\"attributes\":{\"functionReturnParameters\":621},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":592,\"type\":\"address[] storage ref\",\"value\":\"deployedVotes\"},\"id\":622,\"name\":\"Identifier\",\"src\":\"407:13:2\"}],\"id\":623,\"name\":\"Return\",\"src\":\"400:20:2\"}],\"id\":624,\"name\":\"Block\",\"src\":\"389:39:2\"}],\"id\":625,\"name\":\"FunctionDefinition\",\"src\":\"322:106:2\"}],\"id\":626,\"name\":\"ContractDefinition\",\"src\":\"93:346:2\"}],\"id\":627,\"name\":\"SourceUnit\",\"src\":\"0:443:2\"},\"compiler\":{\"name\":\"solc\",\"version\":\"0.7.4+commit.3f05b770.Emscripten.clang\"},\"networks\":{\"5777\":{\"events\":{},\"links\":{},\"address\":\"0x753F3F7BaBbAB74B877581CB522872e8AD800B43\",\"transactionHash\":\"0x206d86a3580f4b718bf9045be16ea31bd9a4b0a39604c52ae0b2b9743ae2171f\"}},\"schemaVersion\":\"3.3.3\",\"updatedAt\":\"2021-03-07T03:54:22.383Z\",\"networkType\":\"ethereum\",\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}}");
>>>>>>> 5826188c812f97fcc429c5f3f2d2ce52defab077

/***/ }),

/***/ "./src/getWeb3.js":
/*!************************!*\
  !*** ./src/getWeb3.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);


const getWeb3 = async () => {
  if (window.ethereum) {
    const web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(window.ethereum);

    try {
      await window.eth_requestAccounts;
      return web3;
    } catch (error) {
      return error;
    }
  } else if (window.web3) {
    const web3 = window.web3;
    console.log("Injected web3 detected.");
    resolve(web3);
  } else {
    const provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider("http://127.0.0.1:8545");
    const web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);
    console.log("No web3 instance injected, using Local web3.");
    resolve(web3);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (getWeb3);

/***/ }),

/***/ "./src/pages/elections/apply/apply.js":
/*!********************************************!*\
  !*** ./src/pages/elections/apply/apply.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/header */ "./src/components/header.js");
/* harmony import */ var _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../contracts/VoteFactory.json */ "./src/contracts/VoteFactory.json");
var _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../contracts/VoteFactory.json */ "./src/contracts/VoteFactory.json", 1);
/* harmony import */ var _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../contracts/Vote.json */ "./src/contracts/Vote.json");
var _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../contracts/Vote.json */ "./src/contracts/Vote.json", 1);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _getWeb3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../getWeb3 */ "./src/getWeb3.js");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/wen_wong/voting-at-mcgill/client/src/pages/elections/apply/apply.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const candFields = {
  margin: "auto 5% auto 5%"
};
const candTitle = {
  color: "red",
  marginBottom: "5%",
  fontSize: "3em",
  textAlign: "center"
};

const Apply = () => {
  const {
    0: web3,
    1: setWeb3
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  var web3Instance;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function initWeb3() {
      web3Instance = await Object(_getWeb3__WEBPACK_IMPORTED_MODULE_5__["default"])();
      setWeb3(web3Instance);
    }

    initWeb3();
  }, []); //please follow the course for a better implementation @Jing

  const {
    0: candidateName,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: currentDate,
    1: setCurrentDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: description,
    1: setDescription
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  var onSubmit = async event => {
    event.preventDefault();
    var manager;
    var factoryContract;
    var voteContract;
    var addressOfVote;

    var setupVoteFactory = async () => {
      //initializes voteFactory
      if (web3 == '') {
        return;
      }

      try {
        [manager] = await web3.eth.getAccounts(); // Get the contract instance.

        const networkId = await web3.eth.net.getId();
        const deployedNetwork = _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_2__.networks[networkId];
        const instance = new web3.eth.Contract(_contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_2__.abi, deployedNetwork && deployedNetwork.address);
        factoryContract = instance; // Set web3, accounts, and contract to the state, and then proceed with an
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(`Failed to load web3, accounts, or contract. Check console for details.`);
        console.error(error);
      }
    };

    var getElectionAddress = async () => {
      const url = window.location.href;
      const pos = url.indexOf('y') + 2;
      addressOfVote = url.slice(pos);
      console.log(addressOfVote);
    };

    var initializeElection = async () => {
      //initializes vote contract
      try {
        // Get the contract instance.
        const instance = await new web3.eth.Contract(_contracts_Vote_json__WEBPACK_IMPORTED_MODULE_3__.abi, addressOfVote);
        voteContract = instance;
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(`Failed to load web3, accounts, or contract. Check console for details.`);
        console.error(error);
      }
    };

    var setCandidate = async () => {
      await voteContract.methods.enterElection(candidateName, description, new Date(currentDate).getTime()).send({
        from: manager
      });
    };

    var displayCand = async () => {
      // testing purposes
      const summary = await voteContract.methods.get_candidates(manager).call();
      console.log(summary);
    };

    await setupVoteFactory();
    await getElectionAddress();
    await initializeElection();
    await setCandidate();
    await displayCand();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }), __jsx("h1", {
    style: candTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, "Run for Election"), __jsx("h3", {
    style: {
      color: "red"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, " "), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    onSubmit: onSubmit,
    style: candFields,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Input, {
    required: true,
    label: "Enter Name",
    value: candidateName,
    onChange: event => setName(event.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Input, {
    label: "Current date",
    type: "date",
    value: currentDate,
    onChange: event => setCurrentDate(event.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].TextArea, {
    required: true,
    label: "Description",
    value: description,
    onChange: event => setDescription(event.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Button, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 21
    }
  }, "Cancel"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Button, {
    type: "submit",
    onSubmit: onSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 21
    }
  }, "Run for Election"))));
};
/*Apply.getInitialProps = async (props) => {
    console.log(props.query.address)
    return {VoteContract: props.query.address}
  };
*/


/* harmony default export */ __webpack_exports__["default"] = (Apply);

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });