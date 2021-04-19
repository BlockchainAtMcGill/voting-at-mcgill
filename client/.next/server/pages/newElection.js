module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/newElection.js");
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
var _jsxFileName = "C:\\Users\\foubroker\\Desktop\\BAM\\voting-at-mcgill-2\\client\\src\\components\\header.js";
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
}, {
  label: "Register",
  href: "/registerUser",
  key: 5
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
        lineNumber: 61,
        columnNumber: 11
      }
    }, logo, getMenuButtons(), connection);
  };

  const logo = __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      color: "#FFFEFE"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    component: "h1",
    className: logoStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
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
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: web3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
          lineNumber: 91,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], _extends({
        key: label,
        color: "inherit"
      }, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }
      }), label));
    });
  };

  return __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
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
      lineNumber: 106,
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

module.exports = JSON.parse("{\"contractName\":\"Vote\",\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"managerOfVote\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"typeOf\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"candidates\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"candidateAddr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"numVotes\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"candidatesAddresses\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"candidatesCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"currentElection\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"startDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endDate\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"numVotes\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"typeOfElection\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"currentPetition\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"startDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endDate\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"numSigned\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"manager\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"typeOfVote\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"startDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endDate\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"typeOfElection\",\"type\":\"string\"}],\"name\":\"editElection\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"startDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endDate\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"}],\"name\":\"editPetition\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"candidateAddress\",\"type\":\"address\"}],\"name\":\"voteFor\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"current_date\",\"type\":\"uint256\"}],\"name\":\"enterElection\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"leaveElection\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCandidatesAddresses\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"candaddr\",\"type\":\"address\"}],\"name\":\"get_candidate\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"candAddr\",\"type\":\"address\"}],\"name\":\"getCandidateVoters\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"voterAddr\",\"type\":\"address\"}],\"name\":\"getVoted\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.7.4+commit.3f05b770\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"managerOfVote\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"typeOf\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"constructor\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"candidates\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"candidateAddr\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"numVotes\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"candidatesAddresses\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"candidatesCount\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"currentElection\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"title\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"startDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"endDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"numVotes\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"typeOfElection\\\",\\\"type\\\":\\\"string\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"currentPetition\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"title\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"startDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"endDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"numSigned\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"title\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"startDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"endDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"typeOfElection\\\",\\\"type\\\":\\\"string\\\"}],\\\"name\\\":\\\"editElection\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"title\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"startDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"endDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"}],\\\"name\\\":\\\"editPetition\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"current_date\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"enterElection\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"candAddr\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"getCandidateVoters\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address[]\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address[]\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"getCandidatesAddresses\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address[]\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address[]\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"voterAddr\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"getVoted\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"candaddr\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"get_candidate\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"leaveElection\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"manager\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"typeOfVote\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"candidateAddress\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"voteFor\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"}],\\\"devdoc\\\":{\\\"kind\\\":\\\"dev\\\",\\\"methods\\\":{},\\\"version\\\":1},\\\"userdoc\\\":{\\\"kind\\\":\\\"user\\\",\\\"methods\\\":{},\\\"version\\\":1}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"/C/Users/foubroker/Desktop/BAM/voting-at-mcgill-2/contracts/Vote.sol\\\":\\\"Vote\\\"},\\\"evmVersion\\\":\\\"istanbul\\\",\\\"libraries\\\":{},\\\"metadata\\\":{\\\"bytecodeHash\\\":\\\"ipfs\\\"},\\\"optimizer\\\":{\\\"enabled\\\":false,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"/C/Users/foubroker/Desktop/BAM/voting-at-mcgill-2/contracts/Vote.sol\\\":{\\\"keccak256\\\":\\\"0x9ba5ccc2b073506f4726796ed4e07f9c059181c83ddf02b6e23b02fa5fb2a2d0\\\",\\\"license\\\":\\\"UNLICENSED\\\",\\\"urls\\\":[\\\"bzz-raw://a401a008d5cd120af40c2f6ec3da2798805a5c2d9c93eb07272de7470d086634\\\",\\\"dweb:/ipfs/QmWZu6fMaqbjzP64e8Wso3GAY9opHNyh6Zh1rAiSoa7daH\\\"]}},\\\"version\\\":1}\",\"bytecode\":\"0x608060405234801561001057600080fd5b50604051611f8c380380611f8c8339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806002819055505050611ee6806100a66000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80637432e63a11610097578063953ef76d11610066578063953ef76d1461083c578063da3550ee1461096c578063dcfda00f146109b0578063fcae83a714610bad57610100565b80637432e63a146104a2578063869eae23146104fa5780638ab66a901461065657806395115447146107a357610100565b8063481c6a75116100d3578063481c6a75146101aa5780635aa82fbe146101de57806367127e4314610238578063691a675c1461039e57610100565b80632d35a8a21461010557806337cc0439146101235780633f8cab7f14610141578063407bba4a146101a0575b600080fd5b61010d610d1d565b6040518082815260200191505060405180910390f35b61012b610d23565b6040518082815260200191505060405180910390f35b610149610d29565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561018c578082015181840152602081019050610171565b505050509050019250505060405180910390f35b6101a8610dc6565b005b6101b2610fee565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610220600480360360208110156101f457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611012565b60405180821515815260200191505060405180910390f35b61039c6004803603608081101561024e57600080fd5b810190808035906020019064010000000081111561026b57600080fd5b82018360208201111561027d57600080fd5b8035906020019184600183028401116401000000008311171561029f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803590602001909291908035906020019064010000000081111561031657600080fd5b82018360208201111561032857600080fd5b8035906020019184600183028401116401000000008311171561034a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611068565b005b6103a6611120565b604051808060200186815260200185815260200180602001848152602001838103835288818151815260200191508051906020019080838360005b838110156103fc5780820151818401526020810190506103e1565b50505050905090810190601f1680156104295780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015610462578082015181840152602081019050610447565b50505050905090810190601f16801561048f5780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b6104ce600480360360208110156104b857600080fd5b8101908080359060200190929190505050611274565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6106546004803603606081101561051057600080fd5b810190808035906020019064010000000081111561052d57600080fd5b82018360208201111561053f57600080fd5b8035906020019184600183028401116401000000008311171561056157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156105c457600080fd5b8201836020820111156105d657600080fd5b803590602001918460018302840111640100000000831117156105f857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291905050506112b3565b005b6106986004803603602081101561066c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113f5565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156106fe5780820151818401526020810190506106e3565b50505050905090810190601f16801561072b5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015610764578082015181840152602081019050610749565b50505050905090810190601f1680156107915780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b6107e5600480360360208110156107b957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611575565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561082857808201518184015260208101905061080d565b505050509050019250505060405180910390f35b61087e6004803603602081101561085257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611654565b604051808060200180602001848152602001838103835286818151815260200191508051906020019080838360005b838110156108c85780820151818401526020810190506108ad565b50505050905090810190601f1680156108f55780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b8381101561092e578082015181840152602081019050610913565b50505050905090810190601f16801561095b5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b6109ae6004803603602081101561098257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611873565b005b610bab600480360360a08110156109c657600080fd5b81019080803590602001906401000000008111156109e357600080fd5b8201836020820111156109f557600080fd5b80359060200191846001830284011164010000000083111715610a1757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291908035906020019092919080359060200190640100000000811115610a8e57600080fd5b820183602082011115610aa057600080fd5b80359060200191846001830284011164010000000083111715610ac257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610b2557600080fd5b820183602082011115610b3757600080fd5b80359060200191846001830284011164010000000083111715610b5957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611ad8565b005b610bb5611baa565b6040518080602001878152602001868152602001806020018581526020018060200184810384528a818151815260200191508051906020019080838360005b83811015610c0f578082015181840152602081019050610bf4565b50505050905090810190601f168015610c3c5780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610c75578082015181840152602081019050610c5a565b50505050905090810190601f168015610ca25780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b83811015610cdb578082015181840152602081019050610cc0565b50505050905090810190601f168015610d085780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b60015481565b60025481565b6060600060025414610d3a57600080fd5b6005805480602002602001604051908101604052809291908181526020018280548015610dbc57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610d72575b5050505050905090565b600060025414610dd557600080fd5b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160009055600282016000610e549190611d9c565b600382016000610e649190611dbd565b600482016000610e749190611dbd565b505060005b600580549050811015610fd85760058181548110610e9357fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610fcb57600560016005805490500381548110610f0657fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660058281548110610f3e57fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506005805480610f9157fe5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690559055610fd8565b8080600101915050610e79565b5060016000815480929190600190039190505550565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146110c057600080fd5b6001600254146110cf57600080fd5b6000600c9050848160000190805190602001906110ed929190611e05565b5083816001018190555082816002018190555081816003019080519060200190611118929190611e05565b505050505050565b600c806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111ba5780601f1061118f576101008083540402835291602001916111ba565b820191906000526020600020905b81548152906001019060200180831161119d57829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112645780601f1061123957610100808354040283529160200191611264565b820191906000526020600020905b81548152906001019060200180831161124757829003601f168201915b5050505050908060040154905085565b6005818154811061128457600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600254146112c257600080fd5b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508381600301908051906020019061131d929190611e05565b5082816004019080519060200190611336929190611e05565b50338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600081548092919060010191905055506005339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b60046020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114cd5780601f106114a2576101008083540402835291602001916114cd565b820191906000526020600020905b8154815290600101906020018083116114b057829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561156b5780601f106115405761010080835404028352916020019161156b565b820191906000526020600020905b81548152906001019060200180831161154e57829003601f168201915b5050505050905084565b606060006002541461158657600080fd5b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020180548060200260200160405190810160405280929190818152602001828054801561164857602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116115fe575b50505050509050919050565b6060806000806002541461166757600080fd5b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154828054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156117c35780601f10611798576101008083540402835291602001916117c3565b820191906000526020600020905b8154815290600101906020018083116117a657829003601f168201915b50505050509250818054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561185f5780601f106118345761010080835404028352916020019161185f565b820191906000526020600020905b81548152906001019060200180831161184257829003601f168201915b505050505091509250925092509193909250565b60006002541461188257600080fd5b60001515600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151415611ad557600073ffffffffffffffffffffffffffffffffffffffff16600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611ad4576001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600660040160008154809291906001019190505550600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008154809291906001019190505550600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611b3057600080fd5b600060025414611b3f57600080fd5b60006006905085816000019080519060200190611b5d929190611e05565b5084816001018190555083816002018190555082816003019080519060200190611b88929190611e05565b5081816005019080519060200190611ba1929190611e05565b50505050505050565b6006806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611c445780601f10611c1957610100808354040283529160200191611c44565b820191906000526020600020905b815481529060010190602001808311611c2757829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611cee5780601f10611cc357610100808354040283529160200191611cee565b820191906000526020600020905b815481529060010190602001808311611cd157829003601f168201915b505050505090806004015490806005018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611d925780601f10611d6757610100808354040283529160200191611d92565b820191906000526020600020905b815481529060010190602001808311611d7557829003601f168201915b5050505050905086565b5080546000825590600052602060002090810190611dba9190611e93565b50565b50805460018160011615610100020316600290046000825580601f10611de35750611e02565b601f016020900490600052602060002090810190611e019190611e93565b5b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282611e3b5760008555611e82565b82601f10611e5457805160ff1916838001178555611e82565b82800160010185558215611e82579182015b82811115611e81578251825591602001919060010190611e66565b5b509050611e8f9190611e93565b5090565b5b80821115611eac576000816000905550600101611e94565b509056fea2646970667358221220236d0e7f5c65e30829daddc1d43b6e92867f164427dda94881a1c9a40eea550a64736f6c63430007040033\",\"deployedBytecode\":\"0x608060405234801561001057600080fd5b50600436106101005760003560e01c80637432e63a11610097578063953ef76d11610066578063953ef76d1461083c578063da3550ee1461096c578063dcfda00f146109b0578063fcae83a714610bad57610100565b80637432e63a146104a2578063869eae23146104fa5780638ab66a901461065657806395115447146107a357610100565b8063481c6a75116100d3578063481c6a75146101aa5780635aa82fbe146101de57806367127e4314610238578063691a675c1461039e57610100565b80632d35a8a21461010557806337cc0439146101235780633f8cab7f14610141578063407bba4a146101a0575b600080fd5b61010d610d1d565b6040518082815260200191505060405180910390f35b61012b610d23565b6040518082815260200191505060405180910390f35b610149610d29565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561018c578082015181840152602081019050610171565b505050509050019250505060405180910390f35b6101a8610dc6565b005b6101b2610fee565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610220600480360360208110156101f457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611012565b60405180821515815260200191505060405180910390f35b61039c6004803603608081101561024e57600080fd5b810190808035906020019064010000000081111561026b57600080fd5b82018360208201111561027d57600080fd5b8035906020019184600183028401116401000000008311171561029f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803590602001909291908035906020019064010000000081111561031657600080fd5b82018360208201111561032857600080fd5b8035906020019184600183028401116401000000008311171561034a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611068565b005b6103a6611120565b604051808060200186815260200185815260200180602001848152602001838103835288818151815260200191508051906020019080838360005b838110156103fc5780820151818401526020810190506103e1565b50505050905090810190601f1680156104295780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015610462578082015181840152602081019050610447565b50505050905090810190601f16801561048f5780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b6104ce600480360360208110156104b857600080fd5b8101908080359060200190929190505050611274565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6106546004803603606081101561051057600080fd5b810190808035906020019064010000000081111561052d57600080fd5b82018360208201111561053f57600080fd5b8035906020019184600183028401116401000000008311171561056157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156105c457600080fd5b8201836020820111156105d657600080fd5b803590602001918460018302840111640100000000831117156105f857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291905050506112b3565b005b6106986004803603602081101561066c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113f5565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156106fe5780820151818401526020810190506106e3565b50505050905090810190601f16801561072b5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015610764578082015181840152602081019050610749565b50505050905090810190601f1680156107915780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b6107e5600480360360208110156107b957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611575565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561082857808201518184015260208101905061080d565b505050509050019250505060405180910390f35b61087e6004803603602081101561085257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611654565b604051808060200180602001848152602001838103835286818151815260200191508051906020019080838360005b838110156108c85780820151818401526020810190506108ad565b50505050905090810190601f1680156108f55780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b8381101561092e578082015181840152602081019050610913565b50505050905090810190601f16801561095b5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b6109ae6004803603602081101561098257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611873565b005b610bab600480360360a08110156109c657600080fd5b81019080803590602001906401000000008111156109e357600080fd5b8201836020820111156109f557600080fd5b80359060200191846001830284011164010000000083111715610a1757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291908035906020019092919080359060200190640100000000811115610a8e57600080fd5b820183602082011115610aa057600080fd5b80359060200191846001830284011164010000000083111715610ac257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610b2557600080fd5b820183602082011115610b3757600080fd5b80359060200191846001830284011164010000000083111715610b5957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611ad8565b005b610bb5611baa565b6040518080602001878152602001868152602001806020018581526020018060200184810384528a818151815260200191508051906020019080838360005b83811015610c0f578082015181840152602081019050610bf4565b50505050905090810190601f168015610c3c5780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610c75578082015181840152602081019050610c5a565b50505050905090810190601f168015610ca25780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b83811015610cdb578082015181840152602081019050610cc0565b50505050905090810190601f168015610d085780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b60015481565b60025481565b6060600060025414610d3a57600080fd5b6005805480602002602001604051908101604052809291908181526020018280548015610dbc57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610d72575b5050505050905090565b600060025414610dd557600080fd5b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160009055600282016000610e549190611d9c565b600382016000610e649190611dbd565b600482016000610e749190611dbd565b505060005b600580549050811015610fd85760058181548110610e9357fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610fcb57600560016005805490500381548110610f0657fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660058281548110610f3e57fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506005805480610f9157fe5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690559055610fd8565b8080600101915050610e79565b5060016000815480929190600190039190505550565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146110c057600080fd5b6001600254146110cf57600080fd5b6000600c9050848160000190805190602001906110ed929190611e05565b5083816001018190555082816002018190555081816003019080519060200190611118929190611e05565b505050505050565b600c806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111ba5780601f1061118f576101008083540402835291602001916111ba565b820191906000526020600020905b81548152906001019060200180831161119d57829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112645780601f1061123957610100808354040283529160200191611264565b820191906000526020600020905b81548152906001019060200180831161124757829003601f168201915b5050505050908060040154905085565b6005818154811061128457600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600254146112c257600080fd5b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508381600301908051906020019061131d929190611e05565b5082816004019080519060200190611336929190611e05565b50338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600081548092919060010191905055506005339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b60046020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114cd5780601f106114a2576101008083540402835291602001916114cd565b820191906000526020600020905b8154815290600101906020018083116114b057829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561156b5780601f106115405761010080835404028352916020019161156b565b820191906000526020600020905b81548152906001019060200180831161154e57829003601f168201915b5050505050905084565b606060006002541461158657600080fd5b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020180548060200260200160405190810160405280929190818152602001828054801561164857602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116115fe575b50505050509050919050565b6060806000806002541461166757600080fd5b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154828054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156117c35780601f10611798576101008083540402835291602001916117c3565b820191906000526020600020905b8154815290600101906020018083116117a657829003601f168201915b50505050509250818054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561185f5780601f106118345761010080835404028352916020019161185f565b820191906000526020600020905b81548152906001019060200180831161184257829003601f168201915b505050505091509250925092509193909250565b60006002541461188257600080fd5b60001515600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151415611ad557600073ffffffffffffffffffffffffffffffffffffffff16600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611ad4576001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600660040160008154809291906001019190505550600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008154809291906001019190505550600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611b3057600080fd5b600060025414611b3f57600080fd5b60006006905085816000019080519060200190611b5d929190611e05565b5084816001018190555083816002018190555082816003019080519060200190611b88929190611e05565b5081816005019080519060200190611ba1929190611e05565b50505050505050565b6006806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611c445780601f10611c1957610100808354040283529160200191611c44565b820191906000526020600020905b815481529060010190602001808311611c2757829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611cee5780601f10611cc357610100808354040283529160200191611cee565b820191906000526020600020905b815481529060010190602001808311611cd157829003601f168201915b505050505090806004015490806005018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611d925780601f10611d6757610100808354040283529160200191611d92565b820191906000526020600020905b815481529060010190602001808311611d7557829003601f168201915b5050505050905086565b5080546000825590600052602060002090810190611dba9190611e93565b50565b50805460018160011615610100020316600290046000825580601f10611de35750611e02565b601f016020900490600052602060002090810190611e019190611e93565b5b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282611e3b5760008555611e82565b82601f10611e5457805160ff1916838001178555611e82565b82800160010185558215611e82579182015b82811115611e81578251825591602001919060010190611e66565b5b509050611e8f9190611e93565b5090565b5b80821115611eac576000816000905550600101611e94565b509056fea2646970667358221220236d0e7f5c65e30829daddc1d43b6e92867f164427dda94881a1c9a40eea550a64736f6c63430007040033\",\"immutableReferences\":{},\"generatedSources\":[],\"deployedGeneratedSources\":[],\"sourceMap\":\"68:5158:1:-:0;;;1467:178;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1594:13;1584:7;;:23;;;;;;;;;;;;;;;;;;1631:6;1618:10;:19;;;;1467:178;;68:5158;;;;;;\",\"deployedSourceMap\":\"68:5158:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;138:27;;;:::i;:::-;;;;;;;;;;;;;;;;;;;172:22;;;:::i;:::-;;;;;;;;;;;;;;;;;;;4324:131;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3664:637;;;:::i;:::-;;109:22;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;4856:106;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;2061:326;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1427:31;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1315:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;2931:658;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1146:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4696:154;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4461:229;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2418:479;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1653:400;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1389:31;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;138:27;;;;:::o;172:22::-;;;;:::o;4324:131::-;4392:16;5114:1;5100:10;;:15;5092:24;;;;;;4428:19:::1;4421:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4324:131:::0;:::o;3664:637::-;5114:1;5100:10;;:15;5092:24;;;;;;3943:10:::1;:22;3954:10;3943:22;;;;;;;;;;;;;;;;3936:29:::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;3981:6;3976:290;3995:19;:26;;;;3993:1;:28;3976:290;;;4057:19;4077:1;4057:22;;;;;;;;;;;;;;;;;;;;;;;;;4045:34;;:10;:34;;;4042:213;;;4122:19;4169:1;4142:19;:26;;;;:28;4122:49;;;;;;;;;;;;;;;;;;;;;;;;;4099:19;4119:1;4099:22;;;;;;;;;;;;;;;;:72;;;;;;;;;;;;;;;;;;4190:19;:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4234:5;;4042:213;4023:3;;;;;;;3976:290;;;;4276:15;;:17;;;;;;;;;;;;;;3664:637::o:0;109:22::-;;;;;;;;;;;;:::o;4856:106::-;4914:4;4938:5;:16;4944:9;4938:16;;;;;;;;;;;;;;;;;;;;;;;;;4931:23;;4856:106;;;:::o;2061:326::-;5023:7;;;;;;;;;;5009:21;;:10;:21;;;5001:30;;;;;;5199:1:::1;5185:10;;:15;5177:24;;;::::0;::::1;;2215:18:::2;2236:15;2215:36;;2272:5;2262:1;:7;;:15;;;;;;;;;;;;:::i;:::-;;2302:9;2288:1;:11;;:23;;;;2334:7;2322:1;:9;;:19;;;;2368:11;2352:1;:13;;:27;;;;;;;;;;;;:::i;:::-;;5212:1;2061:326:::0;;;;:::o;1427:31::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1315:36::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2931:658::-;5114:1;5100:10;;:15;5092:24;;;;;;3217:34:::1;3254:10;:22;3265:10;3254:22;;;;;;;;;;;;;;;3217:59;;3311:4;3287:16;:21;;:28;;;;;;;;;;;;:::i;:::-;;3357:11;3326:16;:28;;:42;;;;;;;;;;;;:::i;:::-;;3411:10;3379:16;:30;;;:42;;;;;;;;;;;;;;;;;;3517:15;;:17;;;;;;;;;;;;;3545:19;3570:10;3545:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5127:1;2931:658:::0;;;:::o;1146:47::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;4696:154::-;4776:16;5114:1;5100:10;;:15;5092:24;;;;;;4813:10:::1;:20;4824:8;4813:20;;;;;;;;;;;;;;;4812:29;;4805:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4696:154:::0;;;:::o;4461:229::-;4536:13;4551;4566:4;5114:1;5100:10;;:15;5092:24;;;;;;4591:10:::1;:20;4602:8;4591:20;;;;;;;;;;;;;;;:25;;4618:10;:20;4629:8;4618:20;;;;;;;;;;;;;;;:32;;4652:10;:20;4663:8;4652:20;;;;;;;;;;;;;;;:29;;;4584:98;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4461:229:::0;;;;;:::o;2418:479::-;5114:1;5100:10;;:15;5092:24;;;;;;2560:5:::1;2539:26;;:5;:17;2545:10;2539:17;;;;;;;;;;;;;;;;;;;;;;;;;:26;;;2536:354;;;2638:1;2584:56;;:10;:28;2595:16;2584:28;;;;;;;;;;;;;;;:42;;;;;;;;;;;;:56;;;2581:298;;2681:4;2660:5;:17;2666:10;2660:17;;;;;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;2704:15;:24;;;:26;;;;;;;;;;;;;2750:10;:28;2761:16;2750:28;;;;;;;;;;;;;;;2749:39;;;:41;;;;;;;;;;;;;2810:10;:28;2821:16;2810:28;;;;;;;;;;;;;;;2809:37;;2852:10;2809:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2581:298;2536:354;2418:479:::0;:::o;1653:400::-;5023:7;;;;;;;;;;5009:21;;:10;:21;;;5001:30;;;;;;5114:1:::1;5100:10;;:15;5092:24;;;::::0;::::1;;1837:18:::2;1858:15;1837:36;;1894:5;1884:1;:7;;:15;;;;;;;;;;;;:::i;:::-;;1924:9;1910:1;:11;;:23;;;;1956:7;1944:1;:9;;:19;;;;1990:11;1974:1;:13;;:27;;;;;;;;;;;;:::i;:::-;;2031:14;2012:1;:16;;:33;;;;;;;;;;;;:::i;:::-;;5127:1;1653:400:::0;;;;;:::o;1389:31::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o\",\"source\":\"pragma solidity ^0.7.4;\\r\\n//\\\"SPDX-License-Identifier: UNLICENSED\\\"\\r\\n\\r\\ncontract Vote{\\r\\n    //admin address\\r\\n    address public manager;\\r\\n    uint public candidatesCount;\\r\\n    uint public typeOfVote; //0 for election and 1 for petition\\r\\n    mapping(address=>bool) voted; //see if a user has signed\\r\\n\\r\\n    struct user{\\r\\n        string name;\\r\\n        string email;\\r\\n        string password;\\r\\n        address userAddress;\\r\\n        address[] running;\\r\\n        address[] createdElection;\\r\\n        address[] createdPetition;\\r\\n        string userType;\\r\\n    }\\r\\n\\r\\n    struct candidate {\\r\\n        address candidateAddr;\\r\\n        uint numVotes;\\r\\n        address[] voters;\\r\\n        string name;\\r\\n        string description;\\r\\n    }\\r\\n\\r\\n    struct election {\\r\\n        string title;\\r\\n        uint startDate;\\r\\n        uint endDate;\\r\\n        string description;\\r\\n        //think about mapping?\\r\\n        uint numVotes;\\r\\n        string typeOfElection;\\r\\n    }\\r\\n    struct petition{\\r\\n        string title;\\r\\n        uint startDate;\\r\\n        uint endDate;\\r\\n        string description;\\r\\n        uint numSigned;\\r\\n    }\\r\\n    // mapping(uint => election) public elections;\\r\\n    mapping(address => candidate) public candidates; //maps a candidate's address to the candidate\\r\\n    // candidate[] public candidateArray;// redundent but necessary\\r\\n    address[] public candidatesAddresses;//should replace candidateArray\\r\\n    election public currentElection;\\r\\n    petition public currentPetition;\\r\\n\\r\\n    constructor (address managerOfVote, uint typeOf){   //how does one become an admin?\\r\\n        // constructor\\r\\n        manager = managerOfVote;\\r\\n        typeOfVote = typeOf;\\r\\n    }\\r\\n\\r\\n    function editElection (string memory title, uint256 startDate, uint256 endDate, string memory description, string memory typeOfElection)\\r\\n    public restricted typeElection {\\r\\n        election storage e = currentElection;\\r\\n        e.title = title;\\r\\n        e.startDate = startDate;\\r\\n        e.endDate = endDate;\\r\\n        e.description = description;\\r\\n        e.typeOfElection = typeOfElection;\\r\\n    }\\r\\n\\r\\n    function editPetition (string memory title, uint256 startDate, uint256 endDate, string memory description)\\r\\n    public restricted typePetition {\\r\\n        petition storage p = currentPetition;\\r\\n        p.title = title;\\r\\n        p.startDate = startDate;\\r\\n        p.endDate = endDate;\\r\\n        p.description = description;\\r\\n    }\\r\\n //vote for a candidate\\r\\n    function voteFor(address candidateAddress) public typeElection{\\r\\n        //needs to be between start end end\\r\\n        if(voted[msg.sender] == false){\\r\\n            if(candidates[candidateAddress].candidateAddr != address(0)){\\r\\n                voted[msg.sender]  = true;\\r\\n                currentElection.numVotes++;\\r\\n                (candidates[candidateAddress]).numVotes++;\\r\\n                (candidates[candidateAddress]).voters.push(msg.sender);\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n    //enter as a candidate\\r\\n    function enterElection(string memory name, string memory description,uint256 current_date)\\r\\n    public typeElection {\\r\\n        //Check if the registration is before the required deadline\\r\\n        // require(current_date < currentElection.startDate);\\r\\n        //enter candidate\\r\\n        candidate storage currentCandidate = candidates[msg.sender];\\r\\n        currentCandidate.name = name;\\r\\n        currentCandidate.description = description;\\r\\n        currentCandidate.candidateAddr= msg.sender;\\r\\n        currentCandidate.voters;\\r\\n        // candidateArray.push(currentCandidate);\\r\\n        candidatesCount++;\\r\\n        candidatesAddresses.push(msg.sender);\\r\\n    }\\r\\n\\r\\n    // ? current_date is not being used\\r\\n    //leave the election\\r\\n    function leaveElection()//uint256 current_date)\\r\\n    public typeElection {\\r\\n        //Check if the registration is before the required deadline\\r\\n        //require(current_date < currentElection.startDate);\\r\\n        //remove candidate\\r\\n        //remove from array\\r\\n        delete candidates[msg.sender];\\r\\n        for (uint i = 0; i<candidatesAddresses.length; i++){\\r\\n            if(msg.sender==candidatesAddresses[i]){\\r\\n                candidatesAddresses[i]=candidatesAddresses[candidatesAddresses.length-1];\\r\\n                candidatesAddresses.pop();\\r\\n                break;\\r\\n            }\\r\\n        }\\r\\n        candidatesCount--;\\r\\n    }\\r\\n\\r\\n    //GETTERS\\r\\n    function getCandidatesAddresses() public view typeElection returns (address[] memory) {\\r\\n        return candidatesAddresses;\\r\\n    }\\r\\n    function get_candidate(address candaddr) public view typeElection returns (string memory, string memory, uint ) {\\r\\n        return(candidates[candaddr].name, candidates[candaddr].description, candidates[candaddr].numVotes);\\r\\n    }\\r\\n    function getCandidateVoters(address candAddr) public view typeElection returns (address[] memory) {\\r\\n        return((candidates[candAddr]).voters);\\r\\n    }\\r\\n    function getVoted(address voterAddr) public view returns (bool) {\\r\\n        return voted[voterAddr];\\r\\n    }\\r\\n    modifier restricted() {\\r\\n        require(msg.sender == manager);\\r\\n        _;\\r\\n    }\\r\\n    modifier typeElection() {\\r\\n        require(typeOfVote == 0);\\r\\n        _;\\r\\n    }\\r\\n    modifier typePetition() {\\r\\n        require(typeOfVote == 1);\\r\\n        _;\\r\\n    }\\r\\n\\r\\n}\\r\\n\",\"sourcePath\":\"C:\\\\Users\\\\foubroker\\\\Desktop\\\\BAM\\\\voting-at-mcgill-2\\\\contracts\\\\Vote.sol\",\"ast\":{\"absolutePath\":\"/C/Users/foubroker/Desktop/BAM/voting-at-mcgill-2/contracts/Vote.sol\",\"exportedSymbols\":{\"Vote\":[489]},\"id\":490,\"license\":\"UNLICENSED\",\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":38,\"literals\":[\"solidity\",\"^\",\"0.7\",\".4\"],\"nodeType\":\"PragmaDirective\",\"src\":\"0:23:1\"},{\"abstract\":false,\"baseContracts\":[],\"contractDependencies\":[],\"contractKind\":\"contract\",\"fullyImplemented\":true,\"id\":489,\"linearizedBaseContracts\":[489],\"name\":\"Vote\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"constant\":false,\"functionSelector\":\"481c6a75\",\"id\":40,\"mutability\":\"mutable\",\"name\":\"manager\",\"nodeType\":\"VariableDeclaration\",\"scope\":489,\"src\":\"109:22:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":39,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"109:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"2d35a8a2\",\"id\":42,\"mutability\":\"mutable\",\"name\":\"candidatesCount\",\"nodeType\":\"VariableDeclaration\",\"scope\":489,\"src\":\"138:27:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":41,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"138:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"37cc0439\",\"id\":44,\"mutability\":\"mutable\",\"name\":\"typeOfVote\",\"nodeType\":\"VariableDeclaration\",\"scope\":489,\"src\":\"172:22:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":43,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"172:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"public\"},{\"constant\":false,\"id\":48,\"mutability\":\"mutable\",\"name\":\"voted\",\"nodeType\":\"VariableDeclaration\",\"scope\":489,\"src\":\"237:28:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"},\"typeName\":{\"id\":47,\"keyType\":{\"id\":45,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"245:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"237:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"},\"valueType\":{\"id\":46,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"254:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}},\"visibility\":\"internal\"},{\"canonicalName\":\"Vote.user\",\"id\":68,\"members\":[{\"constant\":false,\"id\":50,\"mutability\":\"mutable\",\"name\":\"name\",\"nodeType\":\"VariableDeclaration\",\"scope\":68,\"src\":\"323:11:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":49,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"323:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":52,\"mutability\":\"mutable\",\"name\":\"email\",\"nodeType\":\"VariableDeclaration\",\"scope\":68,\"src\":\"345:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":51,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"345:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":54,\"mutability\":\"mutable\",\"name\":\"password\",\"nodeType\":\"VariableDeclaration\",\"scope\":68,\"src\":\"368:15:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":53,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"368:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":56,\"mutability\":\"mutable\",\"name\":\"userAddress\",\"nodeType\":\"VariableDeclaration\",\"scope\":68,\"src\":\"394:19:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":55,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"394:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":59,\"mutability\":\"mutable\",\"name\":\"running\",\"nodeType\":\"VariableDeclaration\",\"scope\":68,\"src\":\"424:17:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":57,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"424:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":58,\"nodeType\":\"ArrayTypeName\",\"src\":\"424:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":62,\"mutability\":\"mutable\",\"name\":\"createdElection\",\"nodeType\":\"VariableDeclaration\",\"scope\":68,\"src\":\"452:25:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":60,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"452:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":61,\"nodeType\":\"ArrayTypeName\",\"src\":\"452:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":65,\"mutability\":\"mutable\",\"name\":\"createdPetition\",\"nodeType\":\"VariableDeclaration\",\"scope\":68,\"src\":\"488:25:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":63,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"488:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":64,\"nodeType\":\"ArrayTypeName\",\"src\":\"488:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":67,\"mutability\":\"mutable\",\"name\":\"userType\",\"nodeType\":\"VariableDeclaration\",\"scope\":68,\"src\":\"524:15:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":66,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"524:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"name\":\"user\",\"nodeType\":\"StructDefinition\",\"scope\":489,\"src\":\"301:246:1\",\"visibility\":\"public\"},{\"canonicalName\":\"Vote.candidate\",\"id\":80,\"members\":[{\"constant\":false,\"id\":70,\"mutability\":\"mutable\",\"name\":\"candidateAddr\",\"nodeType\":\"VariableDeclaration\",\"scope\":80,\"src\":\"583:21:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":69,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"583:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":72,\"mutability\":\"mutable\",\"name\":\"numVotes\",\"nodeType\":\"VariableDeclaration\",\"scope\":80,\"src\":\"615:13:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":71,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"615:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":75,\"mutability\":\"mutable\",\"name\":\"voters\",\"nodeType\":\"VariableDeclaration\",\"scope\":80,\"src\":\"639:16:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":73,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"639:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":74,\"nodeType\":\"ArrayTypeName\",\"src\":\"639:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":77,\"mutability\":\"mutable\",\"name\":\"name\",\"nodeType\":\"VariableDeclaration\",\"scope\":80,\"src\":\"666:11:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":76,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"666:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":79,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":80,\"src\":\"688:18:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":78,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"688:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"name\":\"candidate\",\"nodeType\":\"StructDefinition\",\"scope\":489,\"src\":\"555:159:1\",\"visibility\":\"public\"},{\"canonicalName\":\"Vote.election\",\"id\":93,\"members\":[{\"constant\":false,\"id\":82,\"mutability\":\"mutable\",\"name\":\"title\",\"nodeType\":\"VariableDeclaration\",\"scope\":93,\"src\":\"749:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":81,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"749:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":84,\"mutability\":\"mutable\",\"name\":\"startDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":93,\"src\":\"772:14:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":83,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"772:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":86,\"mutability\":\"mutable\",\"name\":\"endDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":93,\"src\":\"797:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":85,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"797:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":88,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":93,\"src\":\"820:18:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":87,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"820:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":90,\"mutability\":\"mutable\",\"name\":\"numVotes\",\"nodeType\":\"VariableDeclaration\",\"scope\":93,\"src\":\"881:13:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":89,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"881:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":92,\"mutability\":\"mutable\",\"name\":\"typeOfElection\",\"nodeType\":\"VariableDeclaration\",\"scope\":93,\"src\":\"905:21:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":91,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"905:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"name\":\"election\",\"nodeType\":\"StructDefinition\",\"scope\":489,\"src\":\"722:212:1\",\"visibility\":\"public\"},{\"canonicalName\":\"Vote.petition\",\"id\":104,\"members\":[{\"constant\":false,\"id\":95,\"mutability\":\"mutable\",\"name\":\"title\",\"nodeType\":\"VariableDeclaration\",\"scope\":104,\"src\":\"966:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":94,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"966:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":97,\"mutability\":\"mutable\",\"name\":\"startDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":104,\"src\":\"989:14:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":96,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"989:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":99,\"mutability\":\"mutable\",\"name\":\"endDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":104,\"src\":\"1014:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":98,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1014:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":101,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":104,\"src\":\"1037:18:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":100,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1037:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":103,\"mutability\":\"mutable\",\"name\":\"numSigned\",\"nodeType\":\"VariableDeclaration\",\"scope\":104,\"src\":\"1066:14:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":102,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1066:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"name\":\"petition\",\"nodeType\":\"StructDefinition\",\"scope\":489,\"src\":\"940:148:1\",\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"8ab66a90\",\"id\":108,\"mutability\":\"mutable\",\"name\":\"candidates\",\"nodeType\":\"VariableDeclaration\",\"scope\":489,\"src\":\"1146:47:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$80_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate)\"},\"typeName\":{\"id\":107,\"keyType\":{\"id\":105,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1154:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"1146:29:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$80_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate)\"},\"valueType\":{\"id\":106,\"name\":\"candidate\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":80,\"src\":\"1165:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$80_storage_ptr\",\"typeString\":\"struct Vote.candidate\"}}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"7432e63a\",\"id\":111,\"mutability\":\"mutable\",\"name\":\"candidatesAddresses\",\"nodeType\":\"VariableDeclaration\",\"scope\":489,\"src\":\"1315:36:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":109,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1315:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":110,\"nodeType\":\"ArrayTypeName\",\"src\":\"1315:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"fcae83a7\",\"id\":113,\"mutability\":\"mutable\",\"name\":\"currentElection\",\"nodeType\":\"VariableDeclaration\",\"scope\":489,\"src\":\"1389:31:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$93_storage\",\"typeString\":\"struct Vote.election\"},\"typeName\":{\"id\":112,\"name\":\"election\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":93,\"src\":\"1389:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$93_storage_ptr\",\"typeString\":\"struct Vote.election\"}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"691a675c\",\"id\":115,\"mutability\":\"mutable\",\"name\":\"currentPetition\",\"nodeType\":\"VariableDeclaration\",\"scope\":489,\"src\":\"1427:31:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$104_storage\",\"typeString\":\"struct Vote.petition\"},\"typeName\":{\"id\":114,\"name\":\"petition\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":104,\"src\":\"1427:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$104_storage_ptr\",\"typeString\":\"struct Vote.petition\"}},\"visibility\":\"public\"},{\"body\":{\"id\":130,\"nodeType\":\"Block\",\"src\":\"1515:130:1\",\"statements\":[{\"expression\":{\"id\":124,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":122,\"name\":\"manager\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":40,\"src\":\"1584:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":123,\"name\":\"managerOfVote\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":117,\"src\":\"1594:13:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"1584:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":125,\"nodeType\":\"ExpressionStatement\",\"src\":\"1584:23:1\"},{\"expression\":{\"id\":128,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":126,\"name\":\"typeOfVote\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":44,\"src\":\"1618:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":127,\"name\":\"typeOf\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":119,\"src\":\"1631:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"1618:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":129,\"nodeType\":\"ExpressionStatement\",\"src\":\"1618:19:1\"}]},\"id\":131,\"implemented\":true,\"kind\":\"constructor\",\"modifiers\":[],\"name\":\"\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":120,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":117,\"mutability\":\"mutable\",\"name\":\"managerOfVote\",\"nodeType\":\"VariableDeclaration\",\"scope\":131,\"src\":\"1480:21:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":116,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1480:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":119,\"mutability\":\"mutable\",\"name\":\"typeOf\",\"nodeType\":\"VariableDeclaration\",\"scope\":131,\"src\":\"1503:11:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":118,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1503:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"1479:36:1\"},\"returnParameters\":{\"id\":121,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1515:0:1\"},\"scope\":489,\"src\":\"1467:178:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":182,\"nodeType\":\"Block\",\"src\":\"1826:227:1\",\"statements\":[{\"assignments\":[149],\"declarations\":[{\"constant\":false,\"id\":149,\"mutability\":\"mutable\",\"name\":\"e\",\"nodeType\":\"VariableDeclaration\",\"scope\":182,\"src\":\"1837:18:1\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$93_storage_ptr\",\"typeString\":\"struct Vote.election\"},\"typeName\":{\"id\":148,\"name\":\"election\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":93,\"src\":\"1837:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$93_storage_ptr\",\"typeString\":\"struct Vote.election\"}},\"visibility\":\"internal\"}],\"id\":151,\"initialValue\":{\"id\":150,\"name\":\"currentElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":113,\"src\":\"1858:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$93_storage\",\"typeString\":\"struct Vote.election storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"1837:36:1\"},{\"expression\":{\"id\":156,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":152,\"name\":\"e\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":149,\"src\":\"1884:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$93_storage_ptr\",\"typeString\":\"struct Vote.election storage pointer\"}},\"id\":154,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"title\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":82,\"src\":\"1884:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":155,\"name\":\"title\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":133,\"src\":\"1894:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"1884:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":157,\"nodeType\":\"ExpressionStatement\",\"src\":\"1884:15:1\"},{\"expression\":{\"id\":162,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":158,\"name\":\"e\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":149,\"src\":\"1910:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$93_storage_ptr\",\"typeString\":\"struct Vote.election storage pointer\"}},\"id\":160,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"startDate\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":84,\"src\":\"1910:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":161,\"name\":\"startDate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":135,\"src\":\"1924:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"1910:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":163,\"nodeType\":\"ExpressionStatement\",\"src\":\"1910:23:1\"},{\"expression\":{\"id\":168,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":164,\"name\":\"e\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":149,\"src\":\"1944:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$93_storage_ptr\",\"typeString\":\"struct Vote.election storage pointer\"}},\"id\":166,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"endDate\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":86,\"src\":\"1944:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":167,\"name\":\"endDate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":137,\"src\":\"1956:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"1944:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":169,\"nodeType\":\"ExpressionStatement\",\"src\":\"1944:19:1\"},{\"expression\":{\"id\":174,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":170,\"name\":\"e\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":149,\"src\":\"1974:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$93_storage_ptr\",\"typeString\":\"struct Vote.election storage pointer\"}},\"id\":172,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":88,\"src\":\"1974:13:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":173,\"name\":\"description\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":139,\"src\":\"1990:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"1974:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":175,\"nodeType\":\"ExpressionStatement\",\"src\":\"1974:27:1\"},{\"expression\":{\"id\":180,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":176,\"name\":\"e\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":149,\"src\":\"2012:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$93_storage_ptr\",\"typeString\":\"struct Vote.election storage pointer\"}},\"id\":178,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"typeOfElection\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":92,\"src\":\"2012:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":179,\"name\":\"typeOfElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":141,\"src\":\"2031:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"2012:33:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":181,\"nodeType\":\"ExpressionStatement\",\"src\":\"2012:33:1\"}]},\"functionSelector\":\"dcfda00f\",\"id\":183,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":144,\"modifierName\":{\"id\":143,\"name\":\"restricted\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":468,\"src\":\"1802:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"1802:10:1\"},{\"id\":146,\"modifierName\":{\"id\":145,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":478,\"src\":\"1813:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"1813:12:1\"}],\"name\":\"editElection\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":142,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":133,\"mutability\":\"mutable\",\"name\":\"title\",\"nodeType\":\"VariableDeclaration\",\"scope\":183,\"src\":\"1676:19:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":132,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1676:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":135,\"mutability\":\"mutable\",\"name\":\"startDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":183,\"src\":\"1697:17:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":134,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1697:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":137,\"mutability\":\"mutable\",\"name\":\"endDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":183,\"src\":\"1716:15:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":136,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1716:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":139,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":183,\"src\":\"1733:25:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":138,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1733:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":141,\"mutability\":\"mutable\",\"name\":\"typeOfElection\",\"nodeType\":\"VariableDeclaration\",\"scope\":183,\"src\":\"1760:28:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":140,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1760:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"src\":\"1675:114:1\"},\"returnParameters\":{\"id\":147,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1826:0:1\"},\"scope\":489,\"src\":\"1653:400:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":226,\"nodeType\":\"Block\",\"src\":\"2204:183:1\",\"statements\":[{\"assignments\":[199],\"declarations\":[{\"constant\":false,\"id\":199,\"mutability\":\"mutable\",\"name\":\"p\",\"nodeType\":\"VariableDeclaration\",\"scope\":226,\"src\":\"2215:18:1\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$104_storage_ptr\",\"typeString\":\"struct Vote.petition\"},\"typeName\":{\"id\":198,\"name\":\"petition\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":104,\"src\":\"2215:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$104_storage_ptr\",\"typeString\":\"struct Vote.petition\"}},\"visibility\":\"internal\"}],\"id\":201,\"initialValue\":{\"id\":200,\"name\":\"currentPetition\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"2236:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$104_storage\",\"typeString\":\"struct Vote.petition storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"2215:36:1\"},{\"expression\":{\"id\":206,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":202,\"name\":\"p\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":199,\"src\":\"2262:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$104_storage_ptr\",\"typeString\":\"struct Vote.petition storage pointer\"}},\"id\":204,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"title\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":95,\"src\":\"2262:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":205,\"name\":\"title\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":185,\"src\":\"2272:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"2262:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":207,\"nodeType\":\"ExpressionStatement\",\"src\":\"2262:15:1\"},{\"expression\":{\"id\":212,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":208,\"name\":\"p\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":199,\"src\":\"2288:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$104_storage_ptr\",\"typeString\":\"struct Vote.petition storage pointer\"}},\"id\":210,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"startDate\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":97,\"src\":\"2288:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":211,\"name\":\"startDate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":187,\"src\":\"2302:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"2288:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":213,\"nodeType\":\"ExpressionStatement\",\"src\":\"2288:23:1\"},{\"expression\":{\"id\":218,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":214,\"name\":\"p\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":199,\"src\":\"2322:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$104_storage_ptr\",\"typeString\":\"struct Vote.petition storage pointer\"}},\"id\":216,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"endDate\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":99,\"src\":\"2322:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":217,\"name\":\"endDate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":189,\"src\":\"2334:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"2322:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":219,\"nodeType\":\"ExpressionStatement\",\"src\":\"2322:19:1\"},{\"expression\":{\"id\":224,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":220,\"name\":\"p\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":199,\"src\":\"2352:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$104_storage_ptr\",\"typeString\":\"struct Vote.petition storage pointer\"}},\"id\":222,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":101,\"src\":\"2352:13:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":223,\"name\":\"description\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":191,\"src\":\"2368:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"2352:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":225,\"nodeType\":\"ExpressionStatement\",\"src\":\"2352:27:1\"}]},\"functionSelector\":\"67127e43\",\"id\":227,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":194,\"modifierName\":{\"id\":193,\"name\":\"restricted\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":468,\"src\":\"2180:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"2180:10:1\"},{\"id\":196,\"modifierName\":{\"id\":195,\"name\":\"typePetition\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":488,\"src\":\"2191:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"2191:12:1\"}],\"name\":\"editPetition\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":192,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":185,\"mutability\":\"mutable\",\"name\":\"title\",\"nodeType\":\"VariableDeclaration\",\"scope\":227,\"src\":\"2084:19:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":184,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2084:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":187,\"mutability\":\"mutable\",\"name\":\"startDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":227,\"src\":\"2105:17:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":186,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2105:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":189,\"mutability\":\"mutable\",\"name\":\"endDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":227,\"src\":\"2124:15:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":188,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2124:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":191,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":227,\"src\":\"2141:25:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":190,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2141:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"src\":\"2083:84:1\"},\"returnParameters\":{\"id\":197,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2204:0:1\"},\"scope\":489,\"src\":\"2061:326:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":282,\"nodeType\":\"Block\",\"src\":\"2480:417:1\",\"statements\":[{\"condition\":{\"commonType\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"id\":239,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"baseExpression\":{\"id\":234,\"name\":\"voted\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":48,\"src\":\"2539:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":237,\"indexExpression\":{\"expression\":{\"id\":235,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"2545:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":236,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"2545:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2539:17:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"hexValue\":\"66616c7365\",\"id\":238,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2560:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"false\"},\"src\":\"2539:26:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":281,\"nodeType\":\"IfStatement\",\"src\":\"2536:354:1\",\"trueBody\":{\"id\":280,\"nodeType\":\"Block\",\"src\":\"2566:324:1\",\"statements\":[{\"condition\":{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"id\":248,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"baseExpression\":{\"id\":240,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":108,\"src\":\"2584:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$80_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":242,\"indexExpression\":{\"id\":241,\"name\":\"candidateAddress\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":229,\"src\":\"2595:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2584:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$80_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":243,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"candidateAddr\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":70,\"src\":\"2584:42:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"!=\",\"rightExpression\":{\"arguments\":[{\"hexValue\":\"30\",\"id\":246,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2638:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"}],\"id\":245,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"nodeType\":\"ElementaryTypeNameExpression\",\"src\":\"2630:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_type$_t_address_$\",\"typeString\":\"type(address)\"},\"typeName\":{\"id\":244,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2630:7:1\",\"typeDescriptions\":{}}},\"id\":247,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"typeConversion\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2630:10:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"2584:56:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":279,\"nodeType\":\"IfStatement\",\"src\":\"2581:298:1\",\"trueBody\":{\"id\":278,\"nodeType\":\"Block\",\"src\":\"2641:238:1\",\"statements\":[{\"expression\":{\"id\":254,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"id\":249,\"name\":\"voted\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":48,\"src\":\"2660:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":252,\"indexExpression\":{\"expression\":{\"id\":250,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"2666:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":251,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"2666:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"2660:17:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"hexValue\":\"74727565\",\"id\":253,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2681:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"src\":\"2660:25:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":255,\"nodeType\":\"ExpressionStatement\",\"src\":\"2660:25:1\"},{\"expression\":{\"id\":259,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"2704:26:1\",\"subExpression\":{\"expression\":{\"id\":256,\"name\":\"currentElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":113,\"src\":\"2704:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$93_storage\",\"typeString\":\"struct Vote.election storage ref\"}},\"id\":258,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"numVotes\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":90,\"src\":\"2704:24:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":260,\"nodeType\":\"ExpressionStatement\",\"src\":\"2704:26:1\"},{\"expression\":{\"id\":266,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"2749:41:1\",\"subExpression\":{\"expression\":{\"components\":[{\"baseExpression\":{\"id\":261,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":108,\"src\":\"2750:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$80_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":263,\"indexExpression\":{\"id\":262,\"name\":\"candidateAddress\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":229,\"src\":\"2761:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2750:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$80_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}}],\"id\":264,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"2749:30:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$80_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":265,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"numVotes\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":72,\"src\":\"2749:39:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":267,\"nodeType\":\"ExpressionStatement\",\"src\":\"2749:41:1\"},{\"expression\":{\"arguments\":[{\"expression\":{\"id\":274,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"2852:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":275,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"2852:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}],\"expression\":{\"expression\":{\"components\":[{\"baseExpression\":{\"id\":268,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":108,\"src\":\"2810:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$80_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":270,\"indexExpression\":{\"id\":269,\"name\":\"candidateAddress\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":229,\"src\":\"2821:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2810:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$80_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}}],\"id\":271,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"2809:30:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$80_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":272,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"voters\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":75,\"src\":\"2809:37:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":273,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"push\",\"nodeType\":\"MemberAccess\",\"src\":\"2809:42:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypush_nonpayable$_t_address_$returns$__$\",\"typeString\":\"function (address)\"}},\"id\":276,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2809:54:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":277,\"nodeType\":\"ExpressionStatement\",\"src\":\"2809:54:1\"}]}}]}}]},\"functionSelector\":\"da3550ee\",\"id\":283,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":232,\"modifierName\":{\"id\":231,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":478,\"src\":\"2468:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"2468:12:1\"}],\"name\":\"voteFor\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":230,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":229,\"mutability\":\"mutable\",\"name\":\"candidateAddress\",\"nodeType\":\"VariableDeclaration\",\"scope\":283,\"src\":\"2435:24:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":228,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2435:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"src\":\"2434:26:1\"},\"returnParameters\":{\"id\":233,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2480:0:1\"},\"scope\":489,\"src\":\"2418:479:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":334,\"nodeType\":\"Block\",\"src\":\"3047:542:1\",\"statements\":[{\"assignments\":[295],\"declarations\":[{\"constant\":false,\"id\":295,\"mutability\":\"mutable\",\"name\":\"currentCandidate\",\"nodeType\":\"VariableDeclaration\",\"scope\":334,\"src\":\"3217:34:1\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$80_storage_ptr\",\"typeString\":\"struct Vote.candidate\"},\"typeName\":{\"id\":294,\"name\":\"candidate\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":80,\"src\":\"3217:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$80_storage_ptr\",\"typeString\":\"struct Vote.candidate\"}},\"visibility\":\"internal\"}],\"id\":300,\"initialValue\":{\"baseExpression\":{\"id\":296,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":108,\"src\":\"3254:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$80_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":299,\"indexExpression\":{\"expression\":{\"id\":297,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3265:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":298,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"3265:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"3254:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$80_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"3217:59:1\"},{\"expression\":{\"id\":305,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":301,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":295,\"src\":\"3287:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$80_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}},\"id\":303,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":77,\"src\":\"3287:21:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":304,\"name\":\"name\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":285,\"src\":\"3311:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"3287:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":306,\"nodeType\":\"ExpressionStatement\",\"src\":\"3287:28:1\"},{\"expression\":{\"id\":311,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":307,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":295,\"src\":\"3326:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$80_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}},\"id\":309,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":79,\"src\":\"3326:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":310,\"name\":\"description\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":287,\"src\":\"3357:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"3326:42:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":312,\"nodeType\":\"ExpressionStatement\",\"src\":\"3326:42:1\"},{\"expression\":{\"id\":318,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":313,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":295,\"src\":\"3379:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$80_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}},\"id\":315,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"candidateAddr\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":70,\"src\":\"3379:30:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"expression\":{\"id\":316,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3411:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":317,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"3411:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"3379:42:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":319,\"nodeType\":\"ExpressionStatement\",\"src\":\"3379:42:1\"},{\"expression\":{\"expression\":{\"id\":320,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":295,\"src\":\"3432:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$80_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}},\"id\":322,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"voters\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":75,\"src\":\"3432:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":323,\"nodeType\":\"ExpressionStatement\",\"src\":\"3432:23:1\"},{\"expression\":{\"id\":325,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"3517:17:1\",\"subExpression\":{\"id\":324,\"name\":\"candidatesCount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":42,\"src\":\"3517:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":326,\"nodeType\":\"ExpressionStatement\",\"src\":\"3517:17:1\"},{\"expression\":{\"arguments\":[{\"expression\":{\"id\":330,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3570:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":331,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"3570:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}],\"expression\":{\"id\":327,\"name\":\"candidatesAddresses\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":111,\"src\":\"3545:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":329,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"push\",\"nodeType\":\"MemberAccess\",\"src\":\"3545:24:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypush_nonpayable$_t_address_$returns$__$\",\"typeString\":\"function (address)\"}},\"id\":332,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"3545:36:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":333,\"nodeType\":\"ExpressionStatement\",\"src\":\"3545:36:1\"}]},\"functionSelector\":\"869eae23\",\"id\":335,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":292,\"modifierName\":{\"id\":291,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":478,\"src\":\"3034:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"3034:12:1\"}],\"name\":\"enterElection\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":290,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":285,\"mutability\":\"mutable\",\"name\":\"name\",\"nodeType\":\"VariableDeclaration\",\"scope\":335,\"src\":\"2954:18:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":284,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2954:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":287,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":335,\"src\":\"2974:25:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":286,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2974:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":289,\"mutability\":\"mutable\",\"name\":\"current_date\",\"nodeType\":\"VariableDeclaration\",\"scope\":335,\"src\":\"3000:20:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":288,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3000:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"2953:68:1\"},\"returnParameters\":{\"id\":293,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"3047:0:1\"},\"scope\":489,\"src\":\"2931:658:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":387,\"nodeType\":\"Block\",\"src\":\"3737:564:1\",\"statements\":[{\"expression\":{\"id\":344,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"delete\",\"prefix\":true,\"src\":\"3936:29:1\",\"subExpression\":{\"baseExpression\":{\"id\":340,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":108,\"src\":\"3943:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$80_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":343,\"indexExpression\":{\"expression\":{\"id\":341,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3954:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":342,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"3954:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"3943:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$80_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":345,\"nodeType\":\"ExpressionStatement\",\"src\":\"3936:29:1\"},{\"body\":{\"id\":382,\"nodeType\":\"Block\",\"src\":\"4027:239:1\",\"statements\":[{\"condition\":{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"id\":362,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"id\":357,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4045:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":358,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"4045:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"baseExpression\":{\"id\":359,\"name\":\"candidatesAddresses\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":111,\"src\":\"4057:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":361,\"indexExpression\":{\"id\":360,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":347,\"src\":\"4077:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4057:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"4045:34:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":381,\"nodeType\":\"IfStatement\",\"src\":\"4042:213:1\",\"trueBody\":{\"id\":380,\"nodeType\":\"Block\",\"src\":\"4080:175:1\",\"statements\":[{\"expression\":{\"id\":372,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"id\":363,\"name\":\"candidatesAddresses\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":111,\"src\":\"4099:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":365,\"indexExpression\":{\"id\":364,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":347,\"src\":\"4119:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"4099:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"baseExpression\":{\"id\":366,\"name\":\"candidatesAddresses\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":111,\"src\":\"4122:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":371,\"indexExpression\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":370,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"id\":367,\"name\":\"candidatesAddresses\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":111,\"src\":\"4142:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":368,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"src\":\"4142:26:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"-\",\"rightExpression\":{\"hexValue\":\"31\",\"id\":369,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"4169:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"src\":\"4142:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4122:49:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"4099:72:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":373,\"nodeType\":\"ExpressionStatement\",\"src\":\"4099:72:1\"},{\"expression\":{\"arguments\":[],\"expression\":{\"argumentTypes\":[],\"expression\":{\"id\":374,\"name\":\"candidatesAddresses\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":111,\"src\":\"4190:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":376,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"pop\",\"nodeType\":\"MemberAccess\",\"src\":\"4190:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypop_nonpayable$__$returns$__$\",\"typeString\":\"function ()\"}},\"id\":377,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"4190:25:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":378,\"nodeType\":\"ExpressionStatement\",\"src\":\"4190:25:1\"},{\"id\":379,\"nodeType\":\"Break\",\"src\":\"4234:5:1\"}]}}]},\"condition\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":353,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":350,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":347,\"src\":\"3993:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<\",\"rightExpression\":{\"expression\":{\"id\":351,\"name\":\"candidatesAddresses\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":111,\"src\":\"3995:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":352,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"src\":\"3995:26:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"3993:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":383,\"initializationExpression\":{\"assignments\":[347],\"declarations\":[{\"constant\":false,\"id\":347,\"mutability\":\"mutable\",\"name\":\"i\",\"nodeType\":\"VariableDeclaration\",\"scope\":383,\"src\":\"3981:6:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":346,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3981:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"id\":349,\"initialValue\":{\"hexValue\":\"30\",\"id\":348,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"3990:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"3981:10:1\"},\"loopExpression\":{\"expression\":{\"id\":355,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"4023:3:1\",\"subExpression\":{\"id\":354,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":347,\"src\":\"4023:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":356,\"nodeType\":\"ExpressionStatement\",\"src\":\"4023:3:1\"},\"nodeType\":\"ForStatement\",\"src\":\"3976:290:1\"},{\"expression\":{\"id\":385,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"--\",\"prefix\":false,\"src\":\"4276:17:1\",\"subExpression\":{\"id\":384,\"name\":\"candidatesCount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":42,\"src\":\"4276:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":386,\"nodeType\":\"ExpressionStatement\",\"src\":\"4276:17:1\"}]},\"functionSelector\":\"407bba4a\",\"id\":388,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":338,\"modifierName\":{\"id\":337,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":478,\"src\":\"3724:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"3724:12:1\"}],\"name\":\"leaveElection\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":336,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"3686:2:1\"},\"returnParameters\":{\"id\":339,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"3737:0:1\"},\"scope\":489,\"src\":\"3664:637:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":398,\"nodeType\":\"Block\",\"src\":\"4410:45:1\",\"statements\":[{\"expression\":{\"id\":396,\"name\":\"candidatesAddresses\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":111,\"src\":\"4428:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"functionReturnParameters\":395,\"id\":397,\"nodeType\":\"Return\",\"src\":\"4421:26:1\"}]},\"functionSelector\":\"3f8cab7f\",\"id\":399,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":391,\"modifierName\":{\"id\":390,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":478,\"src\":\"4370:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"4370:12:1\"}],\"name\":\"getCandidatesAddresses\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":389,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"4355:2:1\"},\"returnParameters\":{\"id\":395,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":394,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":399,\"src\":\"4392:16:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":392,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4392:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":393,\"nodeType\":\"ArrayTypeName\",\"src\":\"4392:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"}],\"src\":\"4391:18:1\"},\"scope\":489,\"src\":\"4324:131:1\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":426,\"nodeType\":\"Block\",\"src\":\"4573:117:1\",\"statements\":[{\"expression\":{\"components\":[{\"expression\":{\"baseExpression\":{\"id\":412,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":108,\"src\":\"4591:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$80_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":414,\"indexExpression\":{\"id\":413,\"name\":\"candaddr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":401,\"src\":\"4602:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4591:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$80_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":415,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":77,\"src\":\"4591:25:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},{\"expression\":{\"baseExpression\":{\"id\":416,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":108,\"src\":\"4618:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$80_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":418,\"indexExpression\":{\"id\":417,\"name\":\"candaddr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":401,\"src\":\"4629:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4618:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$80_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":419,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":79,\"src\":\"4618:32:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},{\"expression\":{\"baseExpression\":{\"id\":420,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":108,\"src\":\"4652:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$80_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":422,\"indexExpression\":{\"id\":421,\"name\":\"candaddr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":401,\"src\":\"4663:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4652:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$80_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":423,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"numVotes\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":72,\"src\":\"4652:29:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"id\":424,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"4590:92:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$_t_string_storage_$_t_string_storage_$_t_uint256_$\",\"typeString\":\"tuple(string storage ref,string storage ref,uint256)\"}},\"functionReturnParameters\":411,\"id\":425,\"nodeType\":\"Return\",\"src\":\"4584:98:1\"}]},\"functionSelector\":\"953ef76d\",\"id\":427,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":404,\"modifierName\":{\"id\":403,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":478,\"src\":\"4514:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"4514:12:1\"}],\"name\":\"get_candidate\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":402,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":401,\"mutability\":\"mutable\",\"name\":\"candaddr\",\"nodeType\":\"VariableDeclaration\",\"scope\":427,\"src\":\"4484:16:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":400,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4484:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"src\":\"4483:18:1\"},\"returnParameters\":{\"id\":411,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":406,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":427,\"src\":\"4536:13:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":405,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4536:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":408,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":427,\"src\":\"4551:13:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":407,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4551:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":410,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":427,\"src\":\"4566:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":409,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4566:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"4535:37:1\"},\"scope\":489,\"src\":\"4461:229:1\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":444,\"nodeType\":\"Block\",\"src\":\"4794:56:1\",\"statements\":[{\"expression\":{\"components\":[{\"expression\":{\"components\":[{\"baseExpression\":{\"id\":437,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":108,\"src\":\"4813:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$80_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":439,\"indexExpression\":{\"id\":438,\"name\":\"candAddr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":429,\"src\":\"4824:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4813:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$80_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}}],\"id\":440,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"4812:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$80_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":441,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"voters\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":75,\"src\":\"4812:29:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}}],\"id\":442,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"4811:31:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"functionReturnParameters\":436,\"id\":443,\"nodeType\":\"Return\",\"src\":\"4805:37:1\"}]},\"functionSelector\":\"95115447\",\"id\":445,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":432,\"modifierName\":{\"id\":431,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":478,\"src\":\"4754:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"4754:12:1\"}],\"name\":\"getCandidateVoters\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":430,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":429,\"mutability\":\"mutable\",\"name\":\"candAddr\",\"nodeType\":\"VariableDeclaration\",\"scope\":445,\"src\":\"4724:16:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":428,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4724:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"src\":\"4723:18:1\"},\"returnParameters\":{\"id\":436,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":435,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":445,\"src\":\"4776:16:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":433,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4776:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":434,\"nodeType\":\"ArrayTypeName\",\"src\":\"4776:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"}],\"src\":\"4775:18:1\"},\"scope\":489,\"src\":\"4696:154:1\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":456,\"nodeType\":\"Block\",\"src\":\"4920:42:1\",\"statements\":[{\"expression\":{\"baseExpression\":{\"id\":452,\"name\":\"voted\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":48,\"src\":\"4938:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":454,\"indexExpression\":{\"id\":453,\"name\":\"voterAddr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":447,\"src\":\"4944:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4938:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"functionReturnParameters\":451,\"id\":455,\"nodeType\":\"Return\",\"src\":\"4931:23:1\"}]},\"functionSelector\":\"5aa82fbe\",\"id\":457,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getVoted\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":448,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":447,\"mutability\":\"mutable\",\"name\":\"voterAddr\",\"nodeType\":\"VariableDeclaration\",\"scope\":457,\"src\":\"4874:17:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":446,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4874:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"src\":\"4873:19:1\"},\"returnParameters\":{\"id\":451,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":450,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":457,\"src\":\"4914:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":449,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4914:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"4913:6:1\"},\"scope\":489,\"src\":\"4856:106:1\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":467,\"nodeType\":\"Block\",\"src\":\"4990:61:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"id\":463,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"id\":460,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"5009:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":461,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"5009:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"id\":462,\"name\":\"manager\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":40,\"src\":\"5023:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"5009:21:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":459,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"5001:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":464,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5001:30:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":465,\"nodeType\":\"ExpressionStatement\",\"src\":\"5001:30:1\"},{\"id\":466,\"nodeType\":\"PlaceholderStatement\",\"src\":\"5042:1:1\"}]},\"id\":468,\"name\":\"restricted\",\"nodeType\":\"ModifierDefinition\",\"parameters\":{\"id\":458,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"4987:2:1\"},\"src\":\"4968:83:1\",\"virtual\":false,\"visibility\":\"internal\"},{\"body\":{\"id\":477,\"nodeType\":\"Block\",\"src\":\"5081:55:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":473,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":471,\"name\":\"typeOfVote\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":44,\"src\":\"5100:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"hexValue\":\"30\",\"id\":472,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5114:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"src\":\"5100:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":470,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"5092:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":474,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5092:24:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":475,\"nodeType\":\"ExpressionStatement\",\"src\":\"5092:24:1\"},{\"id\":476,\"nodeType\":\"PlaceholderStatement\",\"src\":\"5127:1:1\"}]},\"id\":478,\"name\":\"typeElection\",\"nodeType\":\"ModifierDefinition\",\"parameters\":{\"id\":469,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"5078:2:1\"},\"src\":\"5057:79:1\",\"virtual\":false,\"visibility\":\"internal\"},{\"body\":{\"id\":487,\"nodeType\":\"Block\",\"src\":\"5166:55:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":483,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":481,\"name\":\"typeOfVote\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":44,\"src\":\"5185:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"hexValue\":\"31\",\"id\":482,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5199:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"src\":\"5185:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":480,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"5177:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":484,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5177:24:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":485,\"nodeType\":\"ExpressionStatement\",\"src\":\"5177:24:1\"},{\"id\":486,\"nodeType\":\"PlaceholderStatement\",\"src\":\"5212:1:1\"}]},\"id\":488,\"name\":\"typePetition\",\"nodeType\":\"ModifierDefinition\",\"parameters\":{\"id\":479,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"5163:2:1\"},\"src\":\"5142:79:1\",\"virtual\":false,\"visibility\":\"internal\"}],\"scope\":490,\"src\":\"68:5158:1\"}],\"src\":\"0:5228:1\"},\"legacyAST\":{\"attributes\":{\"absolutePath\":\"/C/Users/foubroker/Desktop/BAM/voting-at-mcgill-2/contracts/Vote.sol\",\"exportedSymbols\":{\"Vote\":[489]},\"license\":\"UNLICENSED\"},\"children\":[{\"attributes\":{\"literals\":[\"solidity\",\"^\",\"0.7\",\".4\"]},\"id\":38,\"name\":\"PragmaDirective\",\"src\":\"0:23:1\"},{\"attributes\":{\"abstract\":false,\"baseContracts\":[null],\"contractDependencies\":[null],\"contractKind\":\"contract\",\"fullyImplemented\":true,\"linearizedBaseContracts\":[489],\"name\":\"Vote\",\"scope\":490},\"children\":[{\"attributes\":{\"constant\":false,\"functionSelector\":\"481c6a75\",\"mutability\":\"mutable\",\"name\":\"manager\",\"scope\":489,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":39,\"name\":\"ElementaryTypeName\",\"src\":\"109:7:1\"}],\"id\":40,\"name\":\"VariableDeclaration\",\"src\":\"109:22:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"2d35a8a2\",\"mutability\":\"mutable\",\"name\":\"candidatesCount\",\"scope\":489,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":41,\"name\":\"ElementaryTypeName\",\"src\":\"138:4:1\"}],\"id\":42,\"name\":\"VariableDeclaration\",\"src\":\"138:27:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"37cc0439\",\"mutability\":\"mutable\",\"name\":\"typeOfVote\",\"scope\":489,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":43,\"name\":\"ElementaryTypeName\",\"src\":\"172:4:1\"}],\"id\":44,\"name\":\"VariableDeclaration\",\"src\":\"172:22:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"voted\",\"scope\":489,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"mapping(address => bool)\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"mapping(address => bool)\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"type\":\"address\"},\"id\":45,\"name\":\"ElementaryTypeName\",\"src\":\"245:7:1\"},{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":46,\"name\":\"ElementaryTypeName\",\"src\":\"254:4:1\"}],\"id\":47,\"name\":\"Mapping\",\"src\":\"237:22:1\"}],\"id\":48,\"name\":\"VariableDeclaration\",\"src\":\"237:28:1\"},{\"attributes\":{\"canonicalName\":\"Vote.user\",\"name\":\"user\",\"scope\":489,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"name\",\"scope\":68,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":49,\"name\":\"ElementaryTypeName\",\"src\":\"323:6:1\"}],\"id\":50,\"name\":\"VariableDeclaration\",\"src\":\"323:11:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"email\",\"scope\":68,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":51,\"name\":\"ElementaryTypeName\",\"src\":\"345:6:1\"}],\"id\":52,\"name\":\"VariableDeclaration\",\"src\":\"345:12:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"password\",\"scope\":68,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":53,\"name\":\"ElementaryTypeName\",\"src\":\"368:6:1\"}],\"id\":54,\"name\":\"VariableDeclaration\",\"src\":\"368:15:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"userAddress\",\"scope\":68,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":55,\"name\":\"ElementaryTypeName\",\"src\":\"394:7:1\"}],\"id\":56,\"name\":\"VariableDeclaration\",\"src\":\"394:19:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"running\",\"scope\":68,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":57,\"name\":\"ElementaryTypeName\",\"src\":\"424:7:1\"}],\"id\":58,\"name\":\"ArrayTypeName\",\"src\":\"424:9:1\"}],\"id\":59,\"name\":\"VariableDeclaration\",\"src\":\"424:17:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"createdElection\",\"scope\":68,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":60,\"name\":\"ElementaryTypeName\",\"src\":\"452:7:1\"}],\"id\":61,\"name\":\"ArrayTypeName\",\"src\":\"452:9:1\"}],\"id\":62,\"name\":\"VariableDeclaration\",\"src\":\"452:25:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"createdPetition\",\"scope\":68,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":63,\"name\":\"ElementaryTypeName\",\"src\":\"488:7:1\"}],\"id\":64,\"name\":\"ArrayTypeName\",\"src\":\"488:9:1\"}],\"id\":65,\"name\":\"VariableDeclaration\",\"src\":\"488:25:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"userType\",\"scope\":68,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":66,\"name\":\"ElementaryTypeName\",\"src\":\"524:6:1\"}],\"id\":67,\"name\":\"VariableDeclaration\",\"src\":\"524:15:1\"}],\"id\":68,\"name\":\"StructDefinition\",\"src\":\"301:246:1\"},{\"attributes\":{\"canonicalName\":\"Vote.candidate\",\"name\":\"candidate\",\"scope\":489,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"candidateAddr\",\"scope\":80,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":69,\"name\":\"ElementaryTypeName\",\"src\":\"583:7:1\"}],\"id\":70,\"name\":\"VariableDeclaration\",\"src\":\"583:21:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"numVotes\",\"scope\":80,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":71,\"name\":\"ElementaryTypeName\",\"src\":\"615:4:1\"}],\"id\":72,\"name\":\"VariableDeclaration\",\"src\":\"615:13:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"voters\",\"scope\":80,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":73,\"name\":\"ElementaryTypeName\",\"src\":\"639:7:1\"}],\"id\":74,\"name\":\"ArrayTypeName\",\"src\":\"639:9:1\"}],\"id\":75,\"name\":\"VariableDeclaration\",\"src\":\"639:16:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"name\",\"scope\":80,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":76,\"name\":\"ElementaryTypeName\",\"src\":\"666:6:1\"}],\"id\":77,\"name\":\"VariableDeclaration\",\"src\":\"666:11:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":80,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":78,\"name\":\"ElementaryTypeName\",\"src\":\"688:6:1\"}],\"id\":79,\"name\":\"VariableDeclaration\",\"src\":\"688:18:1\"}],\"id\":80,\"name\":\"StructDefinition\",\"src\":\"555:159:1\"},{\"attributes\":{\"canonicalName\":\"Vote.election\",\"name\":\"election\",\"scope\":489,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"title\",\"scope\":93,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":81,\"name\":\"ElementaryTypeName\",\"src\":\"749:6:1\"}],\"id\":82,\"name\":\"VariableDeclaration\",\"src\":\"749:12:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"startDate\",\"scope\":93,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":83,\"name\":\"ElementaryTypeName\",\"src\":\"772:4:1\"}],\"id\":84,\"name\":\"VariableDeclaration\",\"src\":\"772:14:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"endDate\",\"scope\":93,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":85,\"name\":\"ElementaryTypeName\",\"src\":\"797:4:1\"}],\"id\":86,\"name\":\"VariableDeclaration\",\"src\":\"797:12:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":93,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":87,\"name\":\"ElementaryTypeName\",\"src\":\"820:6:1\"}],\"id\":88,\"name\":\"VariableDeclaration\",\"src\":\"820:18:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"numVotes\",\"scope\":93,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":89,\"name\":\"ElementaryTypeName\",\"src\":\"881:4:1\"}],\"id\":90,\"name\":\"VariableDeclaration\",\"src\":\"881:13:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"typeOfElection\",\"scope\":93,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":91,\"name\":\"ElementaryTypeName\",\"src\":\"905:6:1\"}],\"id\":92,\"name\":\"VariableDeclaration\",\"src\":\"905:21:1\"}],\"id\":93,\"name\":\"StructDefinition\",\"src\":\"722:212:1\"},{\"attributes\":{\"canonicalName\":\"Vote.petition\",\"name\":\"petition\",\"scope\":489,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"title\",\"scope\":104,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":94,\"name\":\"ElementaryTypeName\",\"src\":\"966:6:1\"}],\"id\":95,\"name\":\"VariableDeclaration\",\"src\":\"966:12:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"startDate\",\"scope\":104,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":96,\"name\":\"ElementaryTypeName\",\"src\":\"989:4:1\"}],\"id\":97,\"name\":\"VariableDeclaration\",\"src\":\"989:14:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"endDate\",\"scope\":104,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":98,\"name\":\"ElementaryTypeName\",\"src\":\"1014:4:1\"}],\"id\":99,\"name\":\"VariableDeclaration\",\"src\":\"1014:12:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":104,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":100,\"name\":\"ElementaryTypeName\",\"src\":\"1037:6:1\"}],\"id\":101,\"name\":\"VariableDeclaration\",\"src\":\"1037:18:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"numSigned\",\"scope\":104,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":102,\"name\":\"ElementaryTypeName\",\"src\":\"1066:4:1\"}],\"id\":103,\"name\":\"VariableDeclaration\",\"src\":\"1066:14:1\"}],\"id\":104,\"name\":\"StructDefinition\",\"src\":\"940:148:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"8ab66a90\",\"mutability\":\"mutable\",\"name\":\"candidates\",\"scope\":489,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"mapping(address => struct Vote.candidate)\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"type\":\"mapping(address => struct Vote.candidate)\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"type\":\"address\"},\"id\":105,\"name\":\"ElementaryTypeName\",\"src\":\"1154:7:1\"},{\"attributes\":{\"name\":\"candidate\",\"referencedDeclaration\":80,\"type\":\"struct Vote.candidate\"},\"id\":106,\"name\":\"UserDefinedTypeName\",\"src\":\"1165:9:1\"}],\"id\":107,\"name\":\"Mapping\",\"src\":\"1146:29:1\"}],\"id\":108,\"name\":\"VariableDeclaration\",\"src\":\"1146:47:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"7432e63a\",\"mutability\":\"mutable\",\"name\":\"candidatesAddresses\",\"scope\":489,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":109,\"name\":\"ElementaryTypeName\",\"src\":\"1315:7:1\"}],\"id\":110,\"name\":\"ArrayTypeName\",\"src\":\"1315:9:1\"}],\"id\":111,\"name\":\"VariableDeclaration\",\"src\":\"1315:36:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"fcae83a7\",\"mutability\":\"mutable\",\"name\":\"currentElection\",\"scope\":489,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"struct Vote.election\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"name\":\"election\",\"referencedDeclaration\":93,\"type\":\"struct Vote.election\"},\"id\":112,\"name\":\"UserDefinedTypeName\",\"src\":\"1389:8:1\"}],\"id\":113,\"name\":\"VariableDeclaration\",\"src\":\"1389:31:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"691a675c\",\"mutability\":\"mutable\",\"name\":\"currentPetition\",\"scope\":489,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"struct Vote.petition\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"name\":\"petition\",\"referencedDeclaration\":104,\"type\":\"struct Vote.petition\"},\"id\":114,\"name\":\"UserDefinedTypeName\",\"src\":\"1427:8:1\"}],\"id\":115,\"name\":\"VariableDeclaration\",\"src\":\"1427:31:1\"},{\"attributes\":{\"implemented\":true,\"isConstructor\":true,\"kind\":\"constructor\",\"modifiers\":[null],\"name\":\"\",\"scope\":489,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"managerOfVote\",\"scope\":131,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":116,\"name\":\"ElementaryTypeName\",\"src\":\"1480:7:1\"}],\"id\":117,\"name\":\"VariableDeclaration\",\"src\":\"1480:21:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"typeOf\",\"scope\":131,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":118,\"name\":\"ElementaryTypeName\",\"src\":\"1503:4:1\"}],\"id\":119,\"name\":\"VariableDeclaration\",\"src\":\"1503:11:1\"}],\"id\":120,\"name\":\"ParameterList\",\"src\":\"1479:36:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":121,\"name\":\"ParameterList\",\"src\":\"1515:0:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"address\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":40,\"type\":\"address\",\"value\":\"manager\"},\"id\":122,\"name\":\"Identifier\",\"src\":\"1584:7:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":117,\"type\":\"address\",\"value\":\"managerOfVote\"},\"id\":123,\"name\":\"Identifier\",\"src\":\"1594:13:1\"}],\"id\":124,\"name\":\"Assignment\",\"src\":\"1584:23:1\"}],\"id\":125,\"name\":\"ExpressionStatement\",\"src\":\"1584:23:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":44,\"type\":\"uint256\",\"value\":\"typeOfVote\"},\"id\":126,\"name\":\"Identifier\",\"src\":\"1618:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":119,\"type\":\"uint256\",\"value\":\"typeOf\"},\"id\":127,\"name\":\"Identifier\",\"src\":\"1631:6:1\"}],\"id\":128,\"name\":\"Assignment\",\"src\":\"1618:19:1\"}],\"id\":129,\"name\":\"ExpressionStatement\",\"src\":\"1618:19:1\"}],\"id\":130,\"name\":\"Block\",\"src\":\"1515:130:1\"}],\"id\":131,\"name\":\"FunctionDefinition\",\"src\":\"1467:178:1\"},{\"attributes\":{\"functionSelector\":\"dcfda00f\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"editElection\",\"scope\":489,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"title\",\"scope\":183,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":132,\"name\":\"ElementaryTypeName\",\"src\":\"1676:6:1\"}],\"id\":133,\"name\":\"VariableDeclaration\",\"src\":\"1676:19:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"startDate\",\"scope\":183,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint256\",\"type\":\"uint256\"},\"id\":134,\"name\":\"ElementaryTypeName\",\"src\":\"1697:7:1\"}],\"id\":135,\"name\":\"VariableDeclaration\",\"src\":\"1697:17:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"endDate\",\"scope\":183,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint256\",\"type\":\"uint256\"},\"id\":136,\"name\":\"ElementaryTypeName\",\"src\":\"1716:7:1\"}],\"id\":137,\"name\":\"VariableDeclaration\",\"src\":\"1716:15:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":183,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":138,\"name\":\"ElementaryTypeName\",\"src\":\"1733:6:1\"}],\"id\":139,\"name\":\"VariableDeclaration\",\"src\":\"1733:25:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"typeOfElection\",\"scope\":183,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":140,\"name\":\"ElementaryTypeName\",\"src\":\"1760:6:1\"}],\"id\":141,\"name\":\"VariableDeclaration\",\"src\":\"1760:28:1\"}],\"id\":142,\"name\":\"ParameterList\",\"src\":\"1675:114:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":147,\"name\":\"ParameterList\",\"src\":\"1826:0:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":468,\"type\":\"modifier ()\",\"value\":\"restricted\"},\"id\":143,\"name\":\"Identifier\",\"src\":\"1802:10:1\"}],\"id\":144,\"name\":\"ModifierInvocation\",\"src\":\"1802:10:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":478,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":145,\"name\":\"Identifier\",\"src\":\"1813:12:1\"}],\"id\":146,\"name\":\"ModifierInvocation\",\"src\":\"1813:12:1\"},{\"children\":[{\"attributes\":{\"assignments\":[149]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"e\",\"scope\":182,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct Vote.election\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"election\",\"referencedDeclaration\":93,\"type\":\"struct Vote.election\"},\"id\":148,\"name\":\"UserDefinedTypeName\",\"src\":\"1837:8:1\"}],\"id\":149,\"name\":\"VariableDeclaration\",\"src\":\"1837:18:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":113,\"type\":\"struct Vote.election storage ref\",\"value\":\"currentElection\"},\"id\":150,\"name\":\"Identifier\",\"src\":\"1858:15:1\"}],\"id\":151,\"name\":\"VariableDeclarationStatement\",\"src\":\"1837:36:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"title\",\"referencedDeclaration\":82,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":149,\"type\":\"struct Vote.election storage pointer\",\"value\":\"e\"},\"id\":152,\"name\":\"Identifier\",\"src\":\"1884:1:1\"}],\"id\":154,\"name\":\"MemberAccess\",\"src\":\"1884:7:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":133,\"type\":\"string memory\",\"value\":\"title\"},\"id\":155,\"name\":\"Identifier\",\"src\":\"1894:5:1\"}],\"id\":156,\"name\":\"Assignment\",\"src\":\"1884:15:1\"}],\"id\":157,\"name\":\"ExpressionStatement\",\"src\":\"1884:15:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"startDate\",\"referencedDeclaration\":84,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":149,\"type\":\"struct Vote.election storage pointer\",\"value\":\"e\"},\"id\":158,\"name\":\"Identifier\",\"src\":\"1910:1:1\"}],\"id\":160,\"name\":\"MemberAccess\",\"src\":\"1910:11:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":135,\"type\":\"uint256\",\"value\":\"startDate\"},\"id\":161,\"name\":\"Identifier\",\"src\":\"1924:9:1\"}],\"id\":162,\"name\":\"Assignment\",\"src\":\"1910:23:1\"}],\"id\":163,\"name\":\"ExpressionStatement\",\"src\":\"1910:23:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"endDate\",\"referencedDeclaration\":86,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":149,\"type\":\"struct Vote.election storage pointer\",\"value\":\"e\"},\"id\":164,\"name\":\"Identifier\",\"src\":\"1944:1:1\"}],\"id\":166,\"name\":\"MemberAccess\",\"src\":\"1944:9:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":137,\"type\":\"uint256\",\"value\":\"endDate\"},\"id\":167,\"name\":\"Identifier\",\"src\":\"1956:7:1\"}],\"id\":168,\"name\":\"Assignment\",\"src\":\"1944:19:1\"}],\"id\":169,\"name\":\"ExpressionStatement\",\"src\":\"1944:19:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"description\",\"referencedDeclaration\":88,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":149,\"type\":\"struct Vote.election storage pointer\",\"value\":\"e\"},\"id\":170,\"name\":\"Identifier\",\"src\":\"1974:1:1\"}],\"id\":172,\"name\":\"MemberAccess\",\"src\":\"1974:13:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":139,\"type\":\"string memory\",\"value\":\"description\"},\"id\":173,\"name\":\"Identifier\",\"src\":\"1990:11:1\"}],\"id\":174,\"name\":\"Assignment\",\"src\":\"1974:27:1\"}],\"id\":175,\"name\":\"ExpressionStatement\",\"src\":\"1974:27:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"typeOfElection\",\"referencedDeclaration\":92,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":149,\"type\":\"struct Vote.election storage pointer\",\"value\":\"e\"},\"id\":176,\"name\":\"Identifier\",\"src\":\"2012:1:1\"}],\"id\":178,\"name\":\"MemberAccess\",\"src\":\"2012:16:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":141,\"type\":\"string memory\",\"value\":\"typeOfElection\"},\"id\":179,\"name\":\"Identifier\",\"src\":\"2031:14:1\"}],\"id\":180,\"name\":\"Assignment\",\"src\":\"2012:33:1\"}],\"id\":181,\"name\":\"ExpressionStatement\",\"src\":\"2012:33:1\"}],\"id\":182,\"name\":\"Block\",\"src\":\"1826:227:1\"}],\"id\":183,\"name\":\"FunctionDefinition\",\"src\":\"1653:400:1\"},{\"attributes\":{\"functionSelector\":\"67127e43\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"editPetition\",\"scope\":489,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"title\",\"scope\":227,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":184,\"name\":\"ElementaryTypeName\",\"src\":\"2084:6:1\"}],\"id\":185,\"name\":\"VariableDeclaration\",\"src\":\"2084:19:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"startDate\",\"scope\":227,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint256\",\"type\":\"uint256\"},\"id\":186,\"name\":\"ElementaryTypeName\",\"src\":\"2105:7:1\"}],\"id\":187,\"name\":\"VariableDeclaration\",\"src\":\"2105:17:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"endDate\",\"scope\":227,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint256\",\"type\":\"uint256\"},\"id\":188,\"name\":\"ElementaryTypeName\",\"src\":\"2124:7:1\"}],\"id\":189,\"name\":\"VariableDeclaration\",\"src\":\"2124:15:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":227,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":190,\"name\":\"ElementaryTypeName\",\"src\":\"2141:6:1\"}],\"id\":191,\"name\":\"VariableDeclaration\",\"src\":\"2141:25:1\"}],\"id\":192,\"name\":\"ParameterList\",\"src\":\"2083:84:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":197,\"name\":\"ParameterList\",\"src\":\"2204:0:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":468,\"type\":\"modifier ()\",\"value\":\"restricted\"},\"id\":193,\"name\":\"Identifier\",\"src\":\"2180:10:1\"}],\"id\":194,\"name\":\"ModifierInvocation\",\"src\":\"2180:10:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":488,\"type\":\"modifier ()\",\"value\":\"typePetition\"},\"id\":195,\"name\":\"Identifier\",\"src\":\"2191:12:1\"}],\"id\":196,\"name\":\"ModifierInvocation\",\"src\":\"2191:12:1\"},{\"children\":[{\"attributes\":{\"assignments\":[199]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"p\",\"scope\":226,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct Vote.petition\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"petition\",\"referencedDeclaration\":104,\"type\":\"struct Vote.petition\"},\"id\":198,\"name\":\"UserDefinedTypeName\",\"src\":\"2215:8:1\"}],\"id\":199,\"name\":\"VariableDeclaration\",\"src\":\"2215:18:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"struct Vote.petition storage ref\",\"value\":\"currentPetition\"},\"id\":200,\"name\":\"Identifier\",\"src\":\"2236:15:1\"}],\"id\":201,\"name\":\"VariableDeclarationStatement\",\"src\":\"2215:36:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"title\",\"referencedDeclaration\":95,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":199,\"type\":\"struct Vote.petition storage pointer\",\"value\":\"p\"},\"id\":202,\"name\":\"Identifier\",\"src\":\"2262:1:1\"}],\"id\":204,\"name\":\"MemberAccess\",\"src\":\"2262:7:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":185,\"type\":\"string memory\",\"value\":\"title\"},\"id\":205,\"name\":\"Identifier\",\"src\":\"2272:5:1\"}],\"id\":206,\"name\":\"Assignment\",\"src\":\"2262:15:1\"}],\"id\":207,\"name\":\"ExpressionStatement\",\"src\":\"2262:15:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"startDate\",\"referencedDeclaration\":97,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":199,\"type\":\"struct Vote.petition storage pointer\",\"value\":\"p\"},\"id\":208,\"name\":\"Identifier\",\"src\":\"2288:1:1\"}],\"id\":210,\"name\":\"MemberAccess\",\"src\":\"2288:11:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":187,\"type\":\"uint256\",\"value\":\"startDate\"},\"id\":211,\"name\":\"Identifier\",\"src\":\"2302:9:1\"}],\"id\":212,\"name\":\"Assignment\",\"src\":\"2288:23:1\"}],\"id\":213,\"name\":\"ExpressionStatement\",\"src\":\"2288:23:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"endDate\",\"referencedDeclaration\":99,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":199,\"type\":\"struct Vote.petition storage pointer\",\"value\":\"p\"},\"id\":214,\"name\":\"Identifier\",\"src\":\"2322:1:1\"}],\"id\":216,\"name\":\"MemberAccess\",\"src\":\"2322:9:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":189,\"type\":\"uint256\",\"value\":\"endDate\"},\"id\":217,\"name\":\"Identifier\",\"src\":\"2334:7:1\"}],\"id\":218,\"name\":\"Assignment\",\"src\":\"2322:19:1\"}],\"id\":219,\"name\":\"ExpressionStatement\",\"src\":\"2322:19:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"description\",\"referencedDeclaration\":101,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":199,\"type\":\"struct Vote.petition storage pointer\",\"value\":\"p\"},\"id\":220,\"name\":\"Identifier\",\"src\":\"2352:1:1\"}],\"id\":222,\"name\":\"MemberAccess\",\"src\":\"2352:13:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":191,\"type\":\"string memory\",\"value\":\"description\"},\"id\":223,\"name\":\"Identifier\",\"src\":\"2368:11:1\"}],\"id\":224,\"name\":\"Assignment\",\"src\":\"2352:27:1\"}],\"id\":225,\"name\":\"ExpressionStatement\",\"src\":\"2352:27:1\"}],\"id\":226,\"name\":\"Block\",\"src\":\"2204:183:1\"}],\"id\":227,\"name\":\"FunctionDefinition\",\"src\":\"2061:326:1\"},{\"attributes\":{\"functionSelector\":\"da3550ee\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"voteFor\",\"scope\":489,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"candidateAddress\",\"scope\":283,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":228,\"name\":\"ElementaryTypeName\",\"src\":\"2435:7:1\"}],\"id\":229,\"name\":\"VariableDeclaration\",\"src\":\"2435:24:1\"}],\"id\":230,\"name\":\"ParameterList\",\"src\":\"2434:26:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":233,\"name\":\"ParameterList\",\"src\":\"2480:0:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":478,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":231,\"name\":\"Identifier\",\"src\":\"2468:12:1\"}],\"id\":232,\"name\":\"ModifierInvocation\",\"src\":\"2468:12:1\"},{\"children\":[{\"attributes\":{},\"children\":[{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":48,\"type\":\"mapping(address => bool)\",\"value\":\"voted\"},\"id\":234,\"name\":\"Identifier\",\"src\":\"2539:5:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":235,\"name\":\"Identifier\",\"src\":\"2545:3:1\"}],\"id\":236,\"name\":\"MemberAccess\",\"src\":\"2545:10:1\"}],\"id\":237,\"name\":\"IndexAccess\",\"src\":\"2539:17:1\"},{\"attributes\":{\"hexvalue\":\"66616c7365\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"bool\",\"type\":\"bool\",\"value\":\"false\"},\"id\":238,\"name\":\"Literal\",\"src\":\"2560:5:1\"}],\"id\":239,\"name\":\"BinaryOperation\",\"src\":\"2539:26:1\"},{\"children\":[{\"attributes\":{},\"children\":[{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"!=\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"candidateAddr\",\"referencedDeclaration\":70,\"type\":\"address\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":108,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":240,\"name\":\"Identifier\",\"src\":\"2584:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":229,\"type\":\"address\",\"value\":\"candidateAddress\"},\"id\":241,\"name\":\"Identifier\",\"src\":\"2595:16:1\"}],\"id\":242,\"name\":\"IndexAccess\",\"src\":\"2584:28:1\"}],\"id\":243,\"name\":\"MemberAccess\",\"src\":\"2584:42:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"address payable\",\"type_conversion\":true},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"type\":\"type(address)\"},\"children\":[{\"attributes\":{\"name\":\"address\"},\"id\":244,\"name\":\"ElementaryTypeName\",\"src\":\"2630:7:1\"}],\"id\":245,\"name\":\"ElementaryTypeNameExpression\",\"src\":\"2630:7:1\"},{\"attributes\":{\"hexvalue\":\"30\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 0\",\"value\":\"0\"},\"id\":246,\"name\":\"Literal\",\"src\":\"2638:1:1\"}],\"id\":247,\"name\":\"FunctionCall\",\"src\":\"2630:10:1\"}],\"id\":248,\"name\":\"BinaryOperation\",\"src\":\"2584:56:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":48,\"type\":\"mapping(address => bool)\",\"value\":\"voted\"},\"id\":249,\"name\":\"Identifier\",\"src\":\"2660:5:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":250,\"name\":\"Identifier\",\"src\":\"2666:3:1\"}],\"id\":251,\"name\":\"MemberAccess\",\"src\":\"2666:10:1\"}],\"id\":252,\"name\":\"IndexAccess\",\"src\":\"2660:17:1\"},{\"attributes\":{\"hexvalue\":\"74727565\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"bool\",\"type\":\"bool\",\"value\":\"true\"},\"id\":253,\"name\":\"Literal\",\"src\":\"2681:4:1\"}],\"id\":254,\"name\":\"Assignment\",\"src\":\"2660:25:1\"}],\"id\":255,\"name\":\"ExpressionStatement\",\"src\":\"2660:25:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"++\",\"prefix\":false,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"numVotes\",\"referencedDeclaration\":90,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":113,\"type\":\"struct Vote.election storage ref\",\"value\":\"currentElection\"},\"id\":256,\"name\":\"Identifier\",\"src\":\"2704:15:1\"}],\"id\":258,\"name\":\"MemberAccess\",\"src\":\"2704:24:1\"}],\"id\":259,\"name\":\"UnaryOperation\",\"src\":\"2704:26:1\"}],\"id\":260,\"name\":\"ExpressionStatement\",\"src\":\"2704:26:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"++\",\"prefix\":false,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"numVotes\",\"referencedDeclaration\":72,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":108,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":261,\"name\":\"Identifier\",\"src\":\"2750:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":229,\"type\":\"address\",\"value\":\"candidateAddress\"},\"id\":262,\"name\":\"Identifier\",\"src\":\"2761:16:1\"}],\"id\":263,\"name\":\"IndexAccess\",\"src\":\"2750:28:1\"}],\"id\":264,\"name\":\"TupleExpression\",\"src\":\"2749:30:1\"}],\"id\":265,\"name\":\"MemberAccess\",\"src\":\"2749:39:1\"}],\"id\":266,\"name\":\"UnaryOperation\",\"src\":\"2749:41:1\"}],\"id\":267,\"name\":\"ExpressionStatement\",\"src\":\"2749:41:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"push\",\"type\":\"function (address)\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"voters\",\"referencedDeclaration\":75,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":108,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":268,\"name\":\"Identifier\",\"src\":\"2810:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":229,\"type\":\"address\",\"value\":\"candidateAddress\"},\"id\":269,\"name\":\"Identifier\",\"src\":\"2821:16:1\"}],\"id\":270,\"name\":\"IndexAccess\",\"src\":\"2810:28:1\"}],\"id\":271,\"name\":\"TupleExpression\",\"src\":\"2809:30:1\"}],\"id\":272,\"name\":\"MemberAccess\",\"src\":\"2809:37:1\"}],\"id\":273,\"name\":\"MemberAccess\",\"src\":\"2809:42:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":274,\"name\":\"Identifier\",\"src\":\"2852:3:1\"}],\"id\":275,\"name\":\"MemberAccess\",\"src\":\"2852:10:1\"}],\"id\":276,\"name\":\"FunctionCall\",\"src\":\"2809:54:1\"}],\"id\":277,\"name\":\"ExpressionStatement\",\"src\":\"2809:54:1\"}],\"id\":278,\"name\":\"Block\",\"src\":\"2641:238:1\"}],\"id\":279,\"name\":\"IfStatement\",\"src\":\"2581:298:1\"}],\"id\":280,\"name\":\"Block\",\"src\":\"2566:324:1\"}],\"id\":281,\"name\":\"IfStatement\",\"src\":\"2536:354:1\"}],\"id\":282,\"name\":\"Block\",\"src\":\"2480:417:1\"}],\"id\":283,\"name\":\"FunctionDefinition\",\"src\":\"2418:479:1\"},{\"attributes\":{\"functionSelector\":\"869eae23\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"enterElection\",\"scope\":489,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"name\",\"scope\":335,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":284,\"name\":\"ElementaryTypeName\",\"src\":\"2954:6:1\"}],\"id\":285,\"name\":\"VariableDeclaration\",\"src\":\"2954:18:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":335,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":286,\"name\":\"ElementaryTypeName\",\"src\":\"2974:6:1\"}],\"id\":287,\"name\":\"VariableDeclaration\",\"src\":\"2974:25:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"current_date\",\"scope\":335,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint256\",\"type\":\"uint256\"},\"id\":288,\"name\":\"ElementaryTypeName\",\"src\":\"3000:7:1\"}],\"id\":289,\"name\":\"VariableDeclaration\",\"src\":\"3000:20:1\"}],\"id\":290,\"name\":\"ParameterList\",\"src\":\"2953:68:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":293,\"name\":\"ParameterList\",\"src\":\"3047:0:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":478,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":291,\"name\":\"Identifier\",\"src\":\"3034:12:1\"}],\"id\":292,\"name\":\"ModifierInvocation\",\"src\":\"3034:12:1\"},{\"children\":[{\"attributes\":{\"assignments\":[295]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"currentCandidate\",\"scope\":334,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct Vote.candidate\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"candidate\",\"referencedDeclaration\":80,\"type\":\"struct Vote.candidate\"},\"id\":294,\"name\":\"UserDefinedTypeName\",\"src\":\"3217:9:1\"}],\"id\":295,\"name\":\"VariableDeclaration\",\"src\":\"3217:34:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":108,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":296,\"name\":\"Identifier\",\"src\":\"3254:10:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":297,\"name\":\"Identifier\",\"src\":\"3265:3:1\"}],\"id\":298,\"name\":\"MemberAccess\",\"src\":\"3265:10:1\"}],\"id\":299,\"name\":\"IndexAccess\",\"src\":\"3254:22:1\"}],\"id\":300,\"name\":\"VariableDeclarationStatement\",\"src\":\"3217:59:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"name\",\"referencedDeclaration\":77,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":295,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":301,\"name\":\"Identifier\",\"src\":\"3287:16:1\"}],\"id\":303,\"name\":\"MemberAccess\",\"src\":\"3287:21:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":285,\"type\":\"string memory\",\"value\":\"name\"},\"id\":304,\"name\":\"Identifier\",\"src\":\"3311:4:1\"}],\"id\":305,\"name\":\"Assignment\",\"src\":\"3287:28:1\"}],\"id\":306,\"name\":\"ExpressionStatement\",\"src\":\"3287:28:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"description\",\"referencedDeclaration\":79,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":295,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":307,\"name\":\"Identifier\",\"src\":\"3326:16:1\"}],\"id\":309,\"name\":\"MemberAccess\",\"src\":\"3326:28:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":287,\"type\":\"string memory\",\"value\":\"description\"},\"id\":310,\"name\":\"Identifier\",\"src\":\"3357:11:1\"}],\"id\":311,\"name\":\"Assignment\",\"src\":\"3326:42:1\"}],\"id\":312,\"name\":\"ExpressionStatement\",\"src\":\"3326:42:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"address\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"candidateAddr\",\"referencedDeclaration\":70,\"type\":\"address\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":295,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":313,\"name\":\"Identifier\",\"src\":\"3379:16:1\"}],\"id\":315,\"name\":\"MemberAccess\",\"src\":\"3379:30:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":316,\"name\":\"Identifier\",\"src\":\"3411:3:1\"}],\"id\":317,\"name\":\"MemberAccess\",\"src\":\"3411:10:1\"}],\"id\":318,\"name\":\"Assignment\",\"src\":\"3379:42:1\"}],\"id\":319,\"name\":\"ExpressionStatement\",\"src\":\"3379:42:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"voters\",\"referencedDeclaration\":75,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":295,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":320,\"name\":\"Identifier\",\"src\":\"3432:16:1\"}],\"id\":322,\"name\":\"MemberAccess\",\"src\":\"3432:23:1\"}],\"id\":323,\"name\":\"ExpressionStatement\",\"src\":\"3432:23:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"++\",\"prefix\":false,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":42,\"type\":\"uint256\",\"value\":\"candidatesCount\"},\"id\":324,\"name\":\"Identifier\",\"src\":\"3517:15:1\"}],\"id\":325,\"name\":\"UnaryOperation\",\"src\":\"3517:17:1\"}],\"id\":326,\"name\":\"ExpressionStatement\",\"src\":\"3517:17:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"push\",\"type\":\"function (address)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":111,\"type\":\"address[] storage ref\",\"value\":\"candidatesAddresses\"},\"id\":327,\"name\":\"Identifier\",\"src\":\"3545:19:1\"}],\"id\":329,\"name\":\"MemberAccess\",\"src\":\"3545:24:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":330,\"name\":\"Identifier\",\"src\":\"3570:3:1\"}],\"id\":331,\"name\":\"MemberAccess\",\"src\":\"3570:10:1\"}],\"id\":332,\"name\":\"FunctionCall\",\"src\":\"3545:36:1\"}],\"id\":333,\"name\":\"ExpressionStatement\",\"src\":\"3545:36:1\"}],\"id\":334,\"name\":\"Block\",\"src\":\"3047:542:1\"}],\"id\":335,\"name\":\"FunctionDefinition\",\"src\":\"2931:658:1\"},{\"attributes\":{\"functionSelector\":\"407bba4a\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"leaveElection\",\"scope\":489,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":336,\"name\":\"ParameterList\",\"src\":\"3686:2:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":339,\"name\":\"ParameterList\",\"src\":\"3737:0:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":478,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":337,\"name\":\"Identifier\",\"src\":\"3724:12:1\"}],\"id\":338,\"name\":\"ModifierInvocation\",\"src\":\"3724:12:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"delete\",\"prefix\":true,\"type\":\"tuple()\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":108,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":340,\"name\":\"Identifier\",\"src\":\"3943:10:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":341,\"name\":\"Identifier\",\"src\":\"3954:3:1\"}],\"id\":342,\"name\":\"MemberAccess\",\"src\":\"3954:10:1\"}],\"id\":343,\"name\":\"IndexAccess\",\"src\":\"3943:22:1\"}],\"id\":344,\"name\":\"UnaryOperation\",\"src\":\"3936:29:1\"}],\"id\":345,\"name\":\"ExpressionStatement\",\"src\":\"3936:29:1\"},{\"children\":[{\"attributes\":{\"assignments\":[347]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"i\",\"scope\":383,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":346,\"name\":\"ElementaryTypeName\",\"src\":\"3981:4:1\"}],\"id\":347,\"name\":\"VariableDeclaration\",\"src\":\"3981:6:1\"},{\"attributes\":{\"hexvalue\":\"30\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 0\",\"value\":\"0\"},\"id\":348,\"name\":\"Literal\",\"src\":\"3990:1:1\"}],\"id\":349,\"name\":\"VariableDeclarationStatement\",\"src\":\"3981:10:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"<\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":347,\"type\":\"uint256\",\"value\":\"i\"},\"id\":350,\"name\":\"Identifier\",\"src\":\"3993:1:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"length\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":111,\"type\":\"address[] storage ref\",\"value\":\"candidatesAddresses\"},\"id\":351,\"name\":\"Identifier\",\"src\":\"3995:19:1\"}],\"id\":352,\"name\":\"MemberAccess\",\"src\":\"3995:26:1\"}],\"id\":353,\"name\":\"BinaryOperation\",\"src\":\"3993:28:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"++\",\"prefix\":false,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":347,\"type\":\"uint256\",\"value\":\"i\"},\"id\":354,\"name\":\"Identifier\",\"src\":\"4023:1:1\"}],\"id\":355,\"name\":\"UnaryOperation\",\"src\":\"4023:3:1\"}],\"id\":356,\"name\":\"ExpressionStatement\",\"src\":\"4023:3:1\"},{\"children\":[{\"attributes\":{},\"children\":[{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":357,\"name\":\"Identifier\",\"src\":\"4045:3:1\"}],\"id\":358,\"name\":\"MemberAccess\",\"src\":\"4045:10:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"address\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":111,\"type\":\"address[] storage ref\",\"value\":\"candidatesAddresses\"},\"id\":359,\"name\":\"Identifier\",\"src\":\"4057:19:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":347,\"type\":\"uint256\",\"value\":\"i\"},\"id\":360,\"name\":\"Identifier\",\"src\":\"4077:1:1\"}],\"id\":361,\"name\":\"IndexAccess\",\"src\":\"4057:22:1\"}],\"id\":362,\"name\":\"BinaryOperation\",\"src\":\"4045:34:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"address\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"type\":\"address\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":111,\"type\":\"address[] storage ref\",\"value\":\"candidatesAddresses\"},\"id\":363,\"name\":\"Identifier\",\"src\":\"4099:19:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":347,\"type\":\"uint256\",\"value\":\"i\"},\"id\":364,\"name\":\"Identifier\",\"src\":\"4119:1:1\"}],\"id\":365,\"name\":\"IndexAccess\",\"src\":\"4099:22:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"address\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":111,\"type\":\"address[] storage ref\",\"value\":\"candidatesAddresses\"},\"id\":366,\"name\":\"Identifier\",\"src\":\"4122:19:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"-\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"length\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":111,\"type\":\"address[] storage ref\",\"value\":\"candidatesAddresses\"},\"id\":367,\"name\":\"Identifier\",\"src\":\"4142:19:1\"}],\"id\":368,\"name\":\"MemberAccess\",\"src\":\"4142:26:1\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":369,\"name\":\"Literal\",\"src\":\"4169:1:1\"}],\"id\":370,\"name\":\"BinaryOperation\",\"src\":\"4142:28:1\"}],\"id\":371,\"name\":\"IndexAccess\",\"src\":\"4122:49:1\"}],\"id\":372,\"name\":\"Assignment\",\"src\":\"4099:72:1\"}],\"id\":373,\"name\":\"ExpressionStatement\",\"src\":\"4099:72:1\"},{\"children\":[{\"attributes\":{\"arguments\":[null],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[null],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"pop\",\"type\":\"function ()\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":111,\"type\":\"address[] storage ref\",\"value\":\"candidatesAddresses\"},\"id\":374,\"name\":\"Identifier\",\"src\":\"4190:19:1\"}],\"id\":376,\"name\":\"MemberAccess\",\"src\":\"4190:23:1\"}],\"id\":377,\"name\":\"FunctionCall\",\"src\":\"4190:25:1\"}],\"id\":378,\"name\":\"ExpressionStatement\",\"src\":\"4190:25:1\"},{\"id\":379,\"name\":\"Break\",\"src\":\"4234:5:1\"}],\"id\":380,\"name\":\"Block\",\"src\":\"4080:175:1\"}],\"id\":381,\"name\":\"IfStatement\",\"src\":\"4042:213:1\"}],\"id\":382,\"name\":\"Block\",\"src\":\"4027:239:1\"}],\"id\":383,\"name\":\"ForStatement\",\"src\":\"3976:290:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"--\",\"prefix\":false,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":42,\"type\":\"uint256\",\"value\":\"candidatesCount\"},\"id\":384,\"name\":\"Identifier\",\"src\":\"4276:15:1\"}],\"id\":385,\"name\":\"UnaryOperation\",\"src\":\"4276:17:1\"}],\"id\":386,\"name\":\"ExpressionStatement\",\"src\":\"4276:17:1\"}],\"id\":387,\"name\":\"Block\",\"src\":\"3737:564:1\"}],\"id\":388,\"name\":\"FunctionDefinition\",\"src\":\"3664:637:1\"},{\"attributes\":{\"functionSelector\":\"3f8cab7f\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"getCandidatesAddresses\",\"scope\":489,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":389,\"name\":\"ParameterList\",\"src\":\"4355:2:1\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":399,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":392,\"name\":\"ElementaryTypeName\",\"src\":\"4392:7:1\"}],\"id\":393,\"name\":\"ArrayTypeName\",\"src\":\"4392:9:1\"}],\"id\":394,\"name\":\"VariableDeclaration\",\"src\":\"4392:16:1\"}],\"id\":395,\"name\":\"ParameterList\",\"src\":\"4391:18:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":478,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":390,\"name\":\"Identifier\",\"src\":\"4370:12:1\"}],\"id\":391,\"name\":\"ModifierInvocation\",\"src\":\"4370:12:1\"},{\"children\":[{\"attributes\":{\"functionReturnParameters\":395},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":111,\"type\":\"address[] storage ref\",\"value\":\"candidatesAddresses\"},\"id\":396,\"name\":\"Identifier\",\"src\":\"4428:19:1\"}],\"id\":397,\"name\":\"Return\",\"src\":\"4421:26:1\"}],\"id\":398,\"name\":\"Block\",\"src\":\"4410:45:1\"}],\"id\":399,\"name\":\"FunctionDefinition\",\"src\":\"4324:131:1\"},{\"attributes\":{\"functionSelector\":\"953ef76d\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"get_candidate\",\"scope\":489,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"candaddr\",\"scope\":427,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":400,\"name\":\"ElementaryTypeName\",\"src\":\"4484:7:1\"}],\"id\":401,\"name\":\"VariableDeclaration\",\"src\":\"4484:16:1\"}],\"id\":402,\"name\":\"ParameterList\",\"src\":\"4483:18:1\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":427,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":405,\"name\":\"ElementaryTypeName\",\"src\":\"4536:6:1\"}],\"id\":406,\"name\":\"VariableDeclaration\",\"src\":\"4536:13:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":427,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":407,\"name\":\"ElementaryTypeName\",\"src\":\"4551:6:1\"}],\"id\":408,\"name\":\"VariableDeclaration\",\"src\":\"4551:13:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":427,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":409,\"name\":\"ElementaryTypeName\",\"src\":\"4566:4:1\"}],\"id\":410,\"name\":\"VariableDeclaration\",\"src\":\"4566:4:1\"}],\"id\":411,\"name\":\"ParameterList\",\"src\":\"4535:37:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":478,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":403,\"name\":\"Identifier\",\"src\":\"4514:12:1\"}],\"id\":404,\"name\":\"ModifierInvocation\",\"src\":\"4514:12:1\"},{\"children\":[{\"attributes\":{\"functionReturnParameters\":411},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"tuple(string storage ref,string storage ref,uint256)\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"name\",\"referencedDeclaration\":77,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":108,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":412,\"name\":\"Identifier\",\"src\":\"4591:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":401,\"type\":\"address\",\"value\":\"candaddr\"},\"id\":413,\"name\":\"Identifier\",\"src\":\"4602:8:1\"}],\"id\":414,\"name\":\"IndexAccess\",\"src\":\"4591:20:1\"}],\"id\":415,\"name\":\"MemberAccess\",\"src\":\"4591:25:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"description\",\"referencedDeclaration\":79,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":108,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":416,\"name\":\"Identifier\",\"src\":\"4618:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":401,\"type\":\"address\",\"value\":\"candaddr\"},\"id\":417,\"name\":\"Identifier\",\"src\":\"4629:8:1\"}],\"id\":418,\"name\":\"IndexAccess\",\"src\":\"4618:20:1\"}],\"id\":419,\"name\":\"MemberAccess\",\"src\":\"4618:32:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"numVotes\",\"referencedDeclaration\":72,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":108,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":420,\"name\":\"Identifier\",\"src\":\"4652:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":401,\"type\":\"address\",\"value\":\"candaddr\"},\"id\":421,\"name\":\"Identifier\",\"src\":\"4663:8:1\"}],\"id\":422,\"name\":\"IndexAccess\",\"src\":\"4652:20:1\"}],\"id\":423,\"name\":\"MemberAccess\",\"src\":\"4652:29:1\"}],\"id\":424,\"name\":\"TupleExpression\",\"src\":\"4590:92:1\"}],\"id\":425,\"name\":\"Return\",\"src\":\"4584:98:1\"}],\"id\":426,\"name\":\"Block\",\"src\":\"4573:117:1\"}],\"id\":427,\"name\":\"FunctionDefinition\",\"src\":\"4461:229:1\"},{\"attributes\":{\"functionSelector\":\"95115447\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"getCandidateVoters\",\"scope\":489,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"candAddr\",\"scope\":445,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":428,\"name\":\"ElementaryTypeName\",\"src\":\"4724:7:1\"}],\"id\":429,\"name\":\"VariableDeclaration\",\"src\":\"4724:16:1\"}],\"id\":430,\"name\":\"ParameterList\",\"src\":\"4723:18:1\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":445,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":433,\"name\":\"ElementaryTypeName\",\"src\":\"4776:7:1\"}],\"id\":434,\"name\":\"ArrayTypeName\",\"src\":\"4776:9:1\"}],\"id\":435,\"name\":\"VariableDeclaration\",\"src\":\"4776:16:1\"}],\"id\":436,\"name\":\"ParameterList\",\"src\":\"4775:18:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":478,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":431,\"name\":\"Identifier\",\"src\":\"4754:12:1\"}],\"id\":432,\"name\":\"ModifierInvocation\",\"src\":\"4754:12:1\"},{\"children\":[{\"attributes\":{\"functionReturnParameters\":436},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"voters\",\"referencedDeclaration\":75,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":108,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":437,\"name\":\"Identifier\",\"src\":\"4813:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":429,\"type\":\"address\",\"value\":\"candAddr\"},\"id\":438,\"name\":\"Identifier\",\"src\":\"4824:8:1\"}],\"id\":439,\"name\":\"IndexAccess\",\"src\":\"4813:20:1\"}],\"id\":440,\"name\":\"TupleExpression\",\"src\":\"4812:22:1\"}],\"id\":441,\"name\":\"MemberAccess\",\"src\":\"4812:29:1\"}],\"id\":442,\"name\":\"TupleExpression\",\"src\":\"4811:31:1\"}],\"id\":443,\"name\":\"Return\",\"src\":\"4805:37:1\"}],\"id\":444,\"name\":\"Block\",\"src\":\"4794:56:1\"}],\"id\":445,\"name\":\"FunctionDefinition\",\"src\":\"4696:154:1\"},{\"attributes\":{\"functionSelector\":\"5aa82fbe\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"getVoted\",\"scope\":489,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"voterAddr\",\"scope\":457,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":446,\"name\":\"ElementaryTypeName\",\"src\":\"4874:7:1\"}],\"id\":447,\"name\":\"VariableDeclaration\",\"src\":\"4874:17:1\"}],\"id\":448,\"name\":\"ParameterList\",\"src\":\"4873:19:1\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":457,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"bool\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":449,\"name\":\"ElementaryTypeName\",\"src\":\"4914:4:1\"}],\"id\":450,\"name\":\"VariableDeclaration\",\"src\":\"4914:4:1\"}],\"id\":451,\"name\":\"ParameterList\",\"src\":\"4913:6:1\"},{\"children\":[{\"attributes\":{\"functionReturnParameters\":451},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":48,\"type\":\"mapping(address => bool)\",\"value\":\"voted\"},\"id\":452,\"name\":\"Identifier\",\"src\":\"4938:5:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":447,\"type\":\"address\",\"value\":\"voterAddr\"},\"id\":453,\"name\":\"Identifier\",\"src\":\"4944:9:1\"}],\"id\":454,\"name\":\"IndexAccess\",\"src\":\"4938:16:1\"}],\"id\":455,\"name\":\"Return\",\"src\":\"4931:23:1\"}],\"id\":456,\"name\":\"Block\",\"src\":\"4920:42:1\"}],\"id\":457,\"name\":\"FunctionDefinition\",\"src\":\"4856:106:1\"},{\"attributes\":{\"name\":\"restricted\",\"virtual\":false,\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":458,\"name\":\"ParameterList\",\"src\":\"4987:2:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"type\":\"function (bool) pure\",\"value\":\"require\"},\"id\":459,\"name\":\"Identifier\",\"src\":\"5001:7:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":460,\"name\":\"Identifier\",\"src\":\"5009:3:1\"}],\"id\":461,\"name\":\"MemberAccess\",\"src\":\"5009:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":40,\"type\":\"address\",\"value\":\"manager\"},\"id\":462,\"name\":\"Identifier\",\"src\":\"5023:7:1\"}],\"id\":463,\"name\":\"BinaryOperation\",\"src\":\"5009:21:1\"}],\"id\":464,\"name\":\"FunctionCall\",\"src\":\"5001:30:1\"}],\"id\":465,\"name\":\"ExpressionStatement\",\"src\":\"5001:30:1\"},{\"id\":466,\"name\":\"PlaceholderStatement\",\"src\":\"5042:1:1\"}],\"id\":467,\"name\":\"Block\",\"src\":\"4990:61:1\"}],\"id\":468,\"name\":\"ModifierDefinition\",\"src\":\"4968:83:1\"},{\"attributes\":{\"name\":\"typeElection\",\"virtual\":false,\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":469,\"name\":\"ParameterList\",\"src\":\"5078:2:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"type\":\"function (bool) pure\",\"value\":\"require\"},\"id\":470,\"name\":\"Identifier\",\"src\":\"5092:7:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":44,\"type\":\"uint256\",\"value\":\"typeOfVote\"},\"id\":471,\"name\":\"Identifier\",\"src\":\"5100:10:1\"},{\"attributes\":{\"hexvalue\":\"30\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 0\",\"value\":\"0\"},\"id\":472,\"name\":\"Literal\",\"src\":\"5114:1:1\"}],\"id\":473,\"name\":\"BinaryOperation\",\"src\":\"5100:15:1\"}],\"id\":474,\"name\":\"FunctionCall\",\"src\":\"5092:24:1\"}],\"id\":475,\"name\":\"ExpressionStatement\",\"src\":\"5092:24:1\"},{\"id\":476,\"name\":\"PlaceholderStatement\",\"src\":\"5127:1:1\"}],\"id\":477,\"name\":\"Block\",\"src\":\"5081:55:1\"}],\"id\":478,\"name\":\"ModifierDefinition\",\"src\":\"5057:79:1\"},{\"attributes\":{\"name\":\"typePetition\",\"virtual\":false,\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":479,\"name\":\"ParameterList\",\"src\":\"5163:2:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"type\":\"function (bool) pure\",\"value\":\"require\"},\"id\":480,\"name\":\"Identifier\",\"src\":\"5177:7:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":44,\"type\":\"uint256\",\"value\":\"typeOfVote\"},\"id\":481,\"name\":\"Identifier\",\"src\":\"5185:10:1\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":482,\"name\":\"Literal\",\"src\":\"5199:1:1\"}],\"id\":483,\"name\":\"BinaryOperation\",\"src\":\"5185:15:1\"}],\"id\":484,\"name\":\"FunctionCall\",\"src\":\"5177:24:1\"}],\"id\":485,\"name\":\"ExpressionStatement\",\"src\":\"5177:24:1\"},{\"id\":486,\"name\":\"PlaceholderStatement\",\"src\":\"5212:1:1\"}],\"id\":487,\"name\":\"Block\",\"src\":\"5166:55:1\"}],\"id\":488,\"name\":\"ModifierDefinition\",\"src\":\"5142:79:1\"}],\"id\":489,\"name\":\"ContractDefinition\",\"src\":\"68:5158:1\"}],\"id\":490,\"name\":\"SourceUnit\",\"src\":\"0:5228:1\"},\"compiler\":{\"name\":\"solc\",\"version\":\"0.7.4+commit.3f05b770.Emscripten.clang\"},\"networks\":{},\"schemaVersion\":\"3.3.3\",\"updatedAt\":\"2021-04-01T21:41:54.589Z\",\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}}");

/***/ }),

/***/ "./src/contracts/VoteFactory.json":
/*!****************************************!*\
  !*** ./src/contracts/VoteFactory.json ***!
  \****************************************/
/*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, immutableReferences, generatedSources, deployedGeneratedSources, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, networkType, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"contractName\":\"VoteFactory\",\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"deployedVotes\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"existingGroups\",\"outputs\":[{\"internalType\":\"uint32\",\"name\":\"\",\"type\":\"uint32\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"groupInfo\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"uint32\",\"name\":\"groupID\",\"type\":\"uint32\"}],\"name\":\"createGroup\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint32\",\"name\":\"groupID\",\"type\":\"uint32\"}],\"name\":\"registerGroup\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint32\",\"name\":\"indexGroup\",\"type\":\"uint32\"},{\"internalType\":\"uint32\",\"name\":\"indexMember\",\"type\":\"uint32\"},{\"internalType\":\"uint32\",\"name\":\"groupID\",\"type\":\"uint32\"}],\"name\":\"leaveGroup\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint32\",\"name\":\"groupID\",\"type\":\"uint32\"}],\"name\":\"isUserGroup\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[{\"internalType\":\"uint32\",\"name\":\"groupID\",\"type\":\"uint32\"}],\"name\":\"isGroup\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[{\"internalType\":\"uint32\",\"name\":\"index\",\"type\":\"uint32\"}],\"name\":\"getUserGroup\",\"outputs\":[{\"internalType\":\"uint32\",\"name\":\"\",\"type\":\"uint32\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[],\"name\":\"getUserAllGroups\",\"outputs\":[{\"internalType\":\"uint32[]\",\"name\":\"\",\"type\":\"uint32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[{\"internalType\":\"uint32\",\"name\":\"groupID\",\"type\":\"uint32\"}],\"name\":\"getAllMembers\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"id\",\"type\":\"uint8\"}],\"name\":\"getGroup\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[],\"name\":\"getExistingGroups\",\"outputs\":[{\"internalType\":\"uint32[]\",\"name\":\"\",\"type\":\"uint32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"email\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"password\",\"type\":\"string\"}],\"name\":\"registerUser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"typeOf\",\"type\":\"uint256\"}],\"name\":\"createVote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"password\",\"type\":\"string\"}],\"name\":\"loginUser\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"uint32[]\",\"name\":\"\",\"type\":\"uint32[]\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[],\"name\":\"getUser\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"uint32[]\",\"name\":\"\",\"type\":\"uint32[]\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[],\"name\":\"getDeployedVotes\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"a\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"b\",\"type\":\"string\"}],\"name\":\"compareStrings\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\",\"constant\":true}],\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.7.4+commit.3f05b770\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"a\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"b\\\",\\\"type\\\":\\\"string\\\"}],\\\"name\\\":\\\"compareStrings\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"pure\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint32\\\",\\\"name\\\":\\\"groupID\\\",\\\"type\\\":\\\"uint32\\\"}],\\\"name\\\":\\\"createGroup\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"typeOf\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"createVote\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"deployedVotes\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"existingGroups\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint32\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint32\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint32\\\",\\\"name\\\":\\\"groupID\\\",\\\"type\\\":\\\"uint32\\\"}],\\\"name\\\":\\\"getAllMembers\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address[]\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address[]\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"getDeployedVotes\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address[]\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address[]\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"getExistingGroups\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint32[]\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint32[]\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint8\\\",\\\"name\\\":\\\"id\\\",\\\"type\\\":\\\"uint8\\\"}],\\\"name\\\":\\\"getGroup\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"address[]\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address[]\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"getUser\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint32[]\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint32[]\\\"},{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"getUserAllGroups\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint32[]\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint32[]\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint32\\\",\\\"name\\\":\\\"index\\\",\\\"type\\\":\\\"uint32\\\"}],\\\"name\\\":\\\"getUserGroup\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint32\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint32\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"groupInfo\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint32\\\",\\\"name\\\":\\\"groupID\\\",\\\"type\\\":\\\"uint32\\\"}],\\\"name\\\":\\\"isGroup\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint32\\\",\\\"name\\\":\\\"groupID\\\",\\\"type\\\":\\\"uint32\\\"}],\\\"name\\\":\\\"isUserGroup\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint32\\\",\\\"name\\\":\\\"indexGroup\\\",\\\"type\\\":\\\"uint32\\\"},{\\\"internalType\\\":\\\"uint32\\\",\\\"name\\\":\\\"indexMember\\\",\\\"type\\\":\\\"uint32\\\"},{\\\"internalType\\\":\\\"uint32\\\",\\\"name\\\":\\\"groupID\\\",\\\"type\\\":\\\"uint32\\\"}],\\\"name\\\":\\\"leaveGroup\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"password\\\",\\\"type\\\":\\\"string\\\"}],\\\"name\\\":\\\"loginUser\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint32[]\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint32[]\\\"},{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint32\\\",\\\"name\\\":\\\"groupID\\\",\\\"type\\\":\\\"uint32\\\"}],\\\"name\\\":\\\"registerGroup\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"email\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"password\\\",\\\"type\\\":\\\"string\\\"}],\\\"name\\\":\\\"registerUser\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"}],\\\"devdoc\\\":{\\\"kind\\\":\\\"dev\\\",\\\"methods\\\":{},\\\"version\\\":1},\\\"userdoc\\\":{\\\"kind\\\":\\\"user\\\",\\\"methods\\\":{},\\\"version\\\":1}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"/C/Users/foubroker/Desktop/BAM/voting-at-mcgill-2/contracts/VoteFactory.sol\\\":\\\"VoteFactory\\\"},\\\"evmVersion\\\":\\\"istanbul\\\",\\\"libraries\\\":{},\\\"metadata\\\":{\\\"bytecodeHash\\\":\\\"ipfs\\\"},\\\"optimizer\\\":{\\\"enabled\\\":false,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"/C/Users/foubroker/Desktop/BAM/voting-at-mcgill-2/contracts/Vote.sol\\\":{\\\"keccak256\\\":\\\"0x9ba5ccc2b073506f4726796ed4e07f9c059181c83ddf02b6e23b02fa5fb2a2d0\\\",\\\"license\\\":\\\"UNLICENSED\\\",\\\"urls\\\":[\\\"bzz-raw://a401a008d5cd120af40c2f6ec3da2798805a5c2d9c93eb07272de7470d086634\\\",\\\"dweb:/ipfs/QmWZu6fMaqbjzP64e8Wso3GAY9opHNyh6Zh1rAiSoa7daH\\\"]},\\\"/C/Users/foubroker/Desktop/BAM/voting-at-mcgill-2/contracts/VoteFactory.sol\\\":{\\\"keccak256\\\":\\\"0x666b8ba07ccbe2d185d9007fec790e42a9c75c29a4171bafc2c8dee596b98665\\\",\\\"license\\\":\\\"UNLICENSED\\\",\\\"urls\\\":[\\\"bzz-raw://e9fa9557a30f4278791116444248917530b73a6a0160c61914746d41773048d0\\\",\\\"dweb:/ipfs/QmWp6LJmZzeGV3hvpy2mFPSnrwM3ya6da9diXpdMpVSbQA\\\"]}},\\\"version\\\":1}\",\"bytecode\":\"0x60806040526001600460006101000a81548163ffffffff021916908363ffffffff16021790555034801561003257600080fd5b50614709806100426000396000f3fe608060405234801561001057600080fd5b50600436106101205760003560e01c8063b0f97938116100ad578063ca9cdfff11610071578063ca9cdfff14610c42578063d2f4a80214610ca1578063d637dcfa14610d00578063e670d80014610ee9578063fa954aa014610f3157610120565b8063b0f979381461084d578063b5008c0f146108d6578063bcab1fe314610920578063bed34bba14610a82578063c142ab0014610bea57610120565b80633f2e1f60116100f45780633f2e1f60146104bc57806364363720146105105780636638a0fa1461055e578063832880e7146106c3578063a9905aa01461080357610120565b806273d7ae1461012557806303d480f3146101845780631c14ce5e14610297578063338b474114610488575b600080fd5b61012d610f5f565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610170578082015181840152602081019050610155565b505050509050019250505060405180910390f35b6101b06004803603602081101561019a57600080fd5b8101908080359060200190929190505050610fe3565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b838110156101f45780820151818401526020810190506101d9565b50505050905090810190601f1680156102215780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561025a57808201518184015260208101905061023f565b50505050905090810190601f1680156102875780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b610350600480360360208110156102ad57600080fd5b81019080803590602001906401000000008111156102ca57600080fd5b8201836020820111156102dc57600080fd5b803590602001918460018302840111640100000000831117156102fe57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611137565b604051808060200180602001806020018515158152602001848103845288818151815260200191508051906020019080838360005b838110156103a0578082015181840152602081019050610385565b50505050905090810190601f1680156103cd5780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b838110156104065780820151818401526020810190506103eb565b50505050905090810190601f1680156104335780820380516001836020036101000a031916815260200191505b50848103825286818151815260200191508051906020019060200280838360005b8381101561046f578082015181840152602081019050610454565b5050505090500197505050505050505060405180910390f35b6104ba6004803603602081101561049e57600080fd5b81019080803563ffffffff169060200190929190505050611413565b005b61050e600480360360608110156104d257600080fd5b81019080803563ffffffff169060200190929190803563ffffffff169060200190929190803563ffffffff169060200190929190505050611636565b005b6105426004803603602081101561052657600080fd5b81019080803563ffffffff1690602001909291905050506118ca565b604051808263ffffffff16815260200191505060405180910390f35b61058d6004803603602081101561057457600080fd5b81019080803560ff169060200190929190505050611951565b60405180806020018060200180602001858152602001848103845288818151815260200191508051906020019080838360005b838110156105db5780820151818401526020810190506105c0565b50505050905090810190601f1680156106085780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610641578082015181840152602081019050610626565b50505050905090810190601f16801561066e5780820380516001836020036101000a031916815260200191505b50848103825286818151815260200191508051906020019060200280838360005b838110156106aa57808201518184015260208101905061068f565b5050505090500197505050505050505060405180910390f35b6106cb611b54565b604051808060200180602001806020018515158152602001848103845288818151815260200191508051906020019080838360005b8381101561071b578082015181840152602081019050610700565b50505050905090810190601f1680156107485780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610781578082015181840152602081019050610766565b50505050905090810190601f1680156107ae5780820380516001836020036101000a031916815260200191505b50848103825286818151815260200191508051906020019060200280838360005b838110156107ea5780820151818401526020810190506107cf565b5050505090500197505050505050505060405180910390f35b6108356004803603602081101561081957600080fd5b81019080803563ffffffff169060200190929190505050611d80565b60405180821515815260200191505060405180910390f35b61087f6004803603602081101561086357600080fd5b81019080803563ffffffff169060200190929190505050611e39565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156108c25780820151818401526020810190506108a7565b505050509050019250505060405180910390f35b610908600480360360208110156108ec57600080fd5b81019080803563ffffffff169060200190929190505050611ee8565b60405180821515815260200191505060405180910390f35b610a806004803603606081101561093657600080fd5b810190808035906020019064010000000081111561095357600080fd5b82018360208201111561096557600080fd5b8035906020019184600183028401116401000000008311171561098757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156109ea57600080fd5b8201836020820111156109fc57600080fd5b80359060200191846001830284011164010000000083111715610a1e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803563ffffffff169060200190929190505050611fc9565b005b610bd260048036036040811015610a9857600080fd5b8101908080359060200190640100000000811115610ab557600080fd5b820183602082011115610ac757600080fd5b80359060200191846001830284011164010000000083111715610ae957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610b4c57600080fd5b820183602082011115610b5e57600080fd5b80359060200191846001830284011164010000000083111715610b8057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050612204565b60405180821515815260200191505060405180910390f35b610c1660048036036020811015610c0057600080fd5b81019080803590602001909291905050506122f3565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610c4a612332565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610c8d578082015181840152602081019050610c72565b505050509050019250505060405180910390f35b610ca96123c0565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610cec578082015181840152602081019050610cd1565b505050509050019250505060405180910390f35b610ee760048036036060811015610d1657600080fd5b8101908080359060200190640100000000811115610d3357600080fd5b820183602082011115610d4557600080fd5b80359060200191846001830284011164010000000083111715610d6757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610dca57600080fd5b820183602082011115610ddc57600080fd5b80359060200191846001830284011164010000000083111715610dfe57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610e6157600080fd5b820183602082011115610e7357600080fd5b80359060200191846001830284011164010000000083111715610e9557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061248a565b005b610f1560048036036020811015610eff57600080fd5b8101908080359060200190929190505050612598565b604051808263ffffffff16815260200191505060405180910390f35b610f5d60048036036020811015610f4757600080fd5b81019080803590602001909291905050506125d2565b005b60606005805480602002602001604051908101604052809291908181526020018280548015610fd957602002820191906000526020600020906000905b82829054906101000a900463ffffffff1663ffffffff1681526020019060040190602082600301049283019260010382029150808411610f9c5790505b5050505050905090565b6000602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561108f5780601f106110645761010080835404028352916020019161108f565b820191906000526020600020905b81548152906001019060200180831161107257829003601f168201915b505050505090806001018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561112d5780601f106111025761010080835404028352916020019161112d565b820191906000526020600020905b81548152906001019060200180831161111057829003601f168201915b5050505050905082565b6060806060600080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905061122686826003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561121c5780601f106111f15761010080835404028352916020019161121c565b820191906000526020600020905b8154815290600101906020018083116111ff57829003601f168201915b5050505050612204565b61122f57600080fd5b8060010181600201826004018360050160009054906101000a900460ff16838054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112e25780601f106112b7576101008083540402835291602001916112e2565b820191906000526020600020905b8154815290600101906020018083116112c557829003601f168201915b50505050509350828054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561137e5780601f106113535761010080835404028352916020019161137e565b820191906000526020600020905b81548152906001019060200180831161136157829003601f168201915b50505050509250818054806020026020016040519081016040528092919081815260200182805480156113fc57602002820191906000526020600020906000905b82829054906101000a900463ffffffff1663ffffffff16815260200190600401906020826003010492830192600103820291508084116113bf5790505b505050505091509450945094509450509193509193565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008060008463ffffffff168152602001908152602001600020905060008363ffffffff16141561148657600080fd5b61153b816000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115215780601f106114f657610100808354040283529160200191611521565b820191906000526020600020905b81548152906001019060200180831161150457829003601f168201915b505050505060405180602001604052806000815250612204565b1561154557600080fd5b61154e83611d80565b1561155857600080fd5b816004018390806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908363ffffffff160217905550806002018260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008060008463ffffffff1681526020019081526020016000209050816004016001836004018054905003815481106116ae57fe5b90600052602060002090600891828204019190066004029054906101000a900463ffffffff16826004018663ffffffff16815481106116e957fe5b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908363ffffffff1602179055508160040160018360040180549050038154811061173557fe5b90600052602060002090600891828204019190066004026101000a81549063ffffffff02191690558160040180548061176a57fe5b60019003818190600052602060002090600891828204019190066004026101000a81549063ffffffff02191690559055806002016001826002018054905003815481106117b357fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16816002018563ffffffff16815481106117f357fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060020160018260020180549050038154811061185457fe5b9060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690558060020180548061188e57fe5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590555050505050565b600080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050806004018363ffffffff168154811061192357fe5b90600052602060002090600891828204019190066004029054906101000a900463ffffffff16915050919050565b60608060606000806000808760ff16815260200190815260200160002090508060000181600101826002018360020180549050838054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611a195780601f106119ee57610100808354040283529160200191611a19565b820191906000526020600020905b8154815290600101906020018083116119fc57829003601f168201915b50505050509350828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611ab55780601f10611a8a57610100808354040283529160200191611ab5565b820191906000526020600020905b815481529060010190602001808311611a9857829003601f168201915b5050505050925081805480602002602001604051908101604052809291908181526020018280548015611b3d57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611af3575b505050505091509450945094509450509193509193565b6060806060600080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010181600201826004018360050160009054906101000a900460ff16838054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611c505780601f10611c2557610100808354040283529160200191611c50565b820191906000526020600020905b815481529060010190602001808311611c3357829003601f168201915b50505050509350828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611cec5780601f10611cc157610100808354040283529160200191611cec565b820191906000526020600020905b815481529060010190602001808311611ccf57829003601f168201915b5050505050925081805480602002602001604051908101604052809291908181526020018280548015611d6a57602002820191906000526020600020906000905b82829054906101000a900463ffffffff1663ffffffff1681526020019060040190602082600301049283019260010382029150808411611d2d5790505b5050505050915094509450945094505090919293565b600080600090506000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060005b8160040180549050811015611e2e578463ffffffff16826004018281548110611df257fe5b90600052602060002090600891828204019190066004029054906101000a900463ffffffff1663ffffffff161492508080600101915050611dcd565b508192505050919050565b606060008060008463ffffffff168152602001908152602001600020905080600201805480602002602001604051908101604052809291908181526020018280548015611edb57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611e91575b5050505050915050919050565b6000806000808463ffffffff16815260200190815260200160002090506000611fbc826000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611fa25780601f10611f7757610100808354040283529160200191611fa2565b820191906000526020600020905b815481529060010190602001808311611f8557829003601f168201915b505050505060405180602001604052806000815250612204565b1590508092505050919050565b611fd36001611ee8565b6121275760008060006001815260200190815260200160002090506040518060400160405280600781526020017f53747564656e740000000000000000000000000000000000000000000000000081525081600001908051906020019061203b92919061268f565b506040518060400160405280600d81526020017f44656661756c742047726f75700000000000000000000000000000000000000081525081600101908051906020019061208992919061268f565b506001600081819054906101000a900463ffffffff168092919060010191906101000a81548163ffffffff021916908363ffffffff160217905550506005600460009054906101000a900463ffffffff1690806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908363ffffffff160217905550505b60008060008363ffffffff16815260200190815260200160002090508381600001908051906020019061215b92919061268f565b508281600101908051906020019061217492919061268f565b506001600081819054906101000a900463ffffffff168092919060010191906101000a81548163ffffffff021916908363ffffffff1602179055505060058290806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908363ffffffff16021790555050505050565b6000816040516020018082805190602001908083835b6020831061223d578051825260208201915060208101905060208303925061221a565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405280519060200120836040516020018082805190602001908083835b602083106122af578051825260208201915060208101905060208303925061228c565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040528051906020012014905092915050565b6002818154811061230357600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060028054806020026020016040519081016040528092919081815260200182805480156123b657602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161236c575b5050505050905090565b60606000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060040180548060200260200160405190810160405280929190818152602001828054801561247f57602002820191906000526020600020906000905b82829054906101000a900463ffffffff1663ffffffff16815260200190600401906020826003010492830192600103820291508084116124425790505b505050505091505090565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050838160010190805190602001906124e592919061268f565b50828160020190805190602001906124fe92919061268f565b508181600301908051906020019061251792919061268f565b50338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018160050160006101000a81548160ff0219169083151502179055506125826001611ee8565b15612592576125916001611413565b5b50505050565b600581815481106125a857600080fd5b9060005260206000209060089182820401919006600402915054906101000a900463ffffffff1681565b600033826040516125e29061271d565b808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051809103906000f080158015612625573d6000803e3d6000fd5b5090506002819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826126c5576000855561270c565b82601f106126de57805160ff191683800117855561270c565b8280016001018555821561270c579182015b8281111561270b5782518255916020019190600101906126f0565b5b509050612719919061272a565b5090565b611f8c8061274883390190565b5b8082111561274357600081600090555060010161272b565b509056fe608060405234801561001057600080fd5b50604051611f8c380380611f8c8339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806002819055505050611ee6806100a66000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80637432e63a11610097578063953ef76d11610066578063953ef76d1461083c578063da3550ee1461096c578063dcfda00f146109b0578063fcae83a714610bad57610100565b80637432e63a146104a2578063869eae23146104fa5780638ab66a901461065657806395115447146107a357610100565b8063481c6a75116100d3578063481c6a75146101aa5780635aa82fbe146101de57806367127e4314610238578063691a675c1461039e57610100565b80632d35a8a21461010557806337cc0439146101235780633f8cab7f14610141578063407bba4a146101a0575b600080fd5b61010d610d1d565b6040518082815260200191505060405180910390f35b61012b610d23565b6040518082815260200191505060405180910390f35b610149610d29565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561018c578082015181840152602081019050610171565b505050509050019250505060405180910390f35b6101a8610dc6565b005b6101b2610fee565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610220600480360360208110156101f457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611012565b60405180821515815260200191505060405180910390f35b61039c6004803603608081101561024e57600080fd5b810190808035906020019064010000000081111561026b57600080fd5b82018360208201111561027d57600080fd5b8035906020019184600183028401116401000000008311171561029f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803590602001909291908035906020019064010000000081111561031657600080fd5b82018360208201111561032857600080fd5b8035906020019184600183028401116401000000008311171561034a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611068565b005b6103a6611120565b604051808060200186815260200185815260200180602001848152602001838103835288818151815260200191508051906020019080838360005b838110156103fc5780820151818401526020810190506103e1565b50505050905090810190601f1680156104295780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015610462578082015181840152602081019050610447565b50505050905090810190601f16801561048f5780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b6104ce600480360360208110156104b857600080fd5b8101908080359060200190929190505050611274565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6106546004803603606081101561051057600080fd5b810190808035906020019064010000000081111561052d57600080fd5b82018360208201111561053f57600080fd5b8035906020019184600183028401116401000000008311171561056157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156105c457600080fd5b8201836020820111156105d657600080fd5b803590602001918460018302840111640100000000831117156105f857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291905050506112b3565b005b6106986004803603602081101561066c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113f5565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156106fe5780820151818401526020810190506106e3565b50505050905090810190601f16801561072b5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015610764578082015181840152602081019050610749565b50505050905090810190601f1680156107915780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b6107e5600480360360208110156107b957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611575565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561082857808201518184015260208101905061080d565b505050509050019250505060405180910390f35b61087e6004803603602081101561085257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611654565b604051808060200180602001848152602001838103835286818151815260200191508051906020019080838360005b838110156108c85780820151818401526020810190506108ad565b50505050905090810190601f1680156108f55780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b8381101561092e578082015181840152602081019050610913565b50505050905090810190601f16801561095b5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b6109ae6004803603602081101561098257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611873565b005b610bab600480360360a08110156109c657600080fd5b81019080803590602001906401000000008111156109e357600080fd5b8201836020820111156109f557600080fd5b80359060200191846001830284011164010000000083111715610a1757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291908035906020019092919080359060200190640100000000811115610a8e57600080fd5b820183602082011115610aa057600080fd5b80359060200191846001830284011164010000000083111715610ac257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610b2557600080fd5b820183602082011115610b3757600080fd5b80359060200191846001830284011164010000000083111715610b5957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611ad8565b005b610bb5611baa565b6040518080602001878152602001868152602001806020018581526020018060200184810384528a818151815260200191508051906020019080838360005b83811015610c0f578082015181840152602081019050610bf4565b50505050905090810190601f168015610c3c5780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610c75578082015181840152602081019050610c5a565b50505050905090810190601f168015610ca25780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b83811015610cdb578082015181840152602081019050610cc0565b50505050905090810190601f168015610d085780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b60015481565b60025481565b6060600060025414610d3a57600080fd5b6005805480602002602001604051908101604052809291908181526020018280548015610dbc57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610d72575b5050505050905090565b600060025414610dd557600080fd5b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160009055600282016000610e549190611d9c565b600382016000610e649190611dbd565b600482016000610e749190611dbd565b505060005b600580549050811015610fd85760058181548110610e9357fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610fcb57600560016005805490500381548110610f0657fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660058281548110610f3e57fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506005805480610f9157fe5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690559055610fd8565b8080600101915050610e79565b5060016000815480929190600190039190505550565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146110c057600080fd5b6001600254146110cf57600080fd5b6000600c9050848160000190805190602001906110ed929190611e05565b5083816001018190555082816002018190555081816003019080519060200190611118929190611e05565b505050505050565b600c806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111ba5780601f1061118f576101008083540402835291602001916111ba565b820191906000526020600020905b81548152906001019060200180831161119d57829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112645780601f1061123957610100808354040283529160200191611264565b820191906000526020600020905b81548152906001019060200180831161124757829003601f168201915b5050505050908060040154905085565b6005818154811061128457600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600254146112c257600080fd5b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508381600301908051906020019061131d929190611e05565b5082816004019080519060200190611336929190611e05565b50338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600081548092919060010191905055506005339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b60046020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114cd5780601f106114a2576101008083540402835291602001916114cd565b820191906000526020600020905b8154815290600101906020018083116114b057829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561156b5780601f106115405761010080835404028352916020019161156b565b820191906000526020600020905b81548152906001019060200180831161154e57829003601f168201915b5050505050905084565b606060006002541461158657600080fd5b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020180548060200260200160405190810160405280929190818152602001828054801561164857602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116115fe575b50505050509050919050565b6060806000806002541461166757600080fd5b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154828054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156117c35780601f10611798576101008083540402835291602001916117c3565b820191906000526020600020905b8154815290600101906020018083116117a657829003601f168201915b50505050509250818054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561185f5780601f106118345761010080835404028352916020019161185f565b820191906000526020600020905b81548152906001019060200180831161184257829003601f168201915b505050505091509250925092509193909250565b60006002541461188257600080fd5b60001515600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151415611ad557600073ffffffffffffffffffffffffffffffffffffffff16600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611ad4576001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600660040160008154809291906001019190505550600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008154809291906001019190505550600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611b3057600080fd5b600060025414611b3f57600080fd5b60006006905085816000019080519060200190611b5d929190611e05565b5084816001018190555083816002018190555082816003019080519060200190611b88929190611e05565b5081816005019080519060200190611ba1929190611e05565b50505050505050565b6006806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611c445780601f10611c1957610100808354040283529160200191611c44565b820191906000526020600020905b815481529060010190602001808311611c2757829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611cee5780601f10611cc357610100808354040283529160200191611cee565b820191906000526020600020905b815481529060010190602001808311611cd157829003601f168201915b505050505090806004015490806005018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611d925780601f10611d6757610100808354040283529160200191611d92565b820191906000526020600020905b815481529060010190602001808311611d7557829003601f168201915b5050505050905086565b5080546000825590600052602060002090810190611dba9190611e93565b50565b50805460018160011615610100020316600290046000825580601f10611de35750611e02565b601f016020900490600052602060002090810190611e019190611e93565b5b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282611e3b5760008555611e82565b82601f10611e5457805160ff1916838001178555611e82565b82800160010185558215611e82579182015b82811115611e81578251825591602001919060010190611e66565b5b509050611e8f9190611e93565b5090565b5b80821115611eac576000816000905550600101611e94565b509056fea2646970667358221220236d0e7f5c65e30829daddc1d43b6e92867f164427dda94881a1c9a40eea550a64736f6c63430007040033a2646970667358221220388fd85275c5e553f4daf8c9bc4dbf0170010dddc355b6e1b30060448b38111164736f6c63430007040033\",\"deployedBytecode\":\"0x608060405234801561001057600080fd5b50600436106101205760003560e01c8063b0f97938116100ad578063ca9cdfff11610071578063ca9cdfff14610c42578063d2f4a80214610ca1578063d637dcfa14610d00578063e670d80014610ee9578063fa954aa014610f3157610120565b8063b0f979381461084d578063b5008c0f146108d6578063bcab1fe314610920578063bed34bba14610a82578063c142ab0014610bea57610120565b80633f2e1f60116100f45780633f2e1f60146104bc57806364363720146105105780636638a0fa1461055e578063832880e7146106c3578063a9905aa01461080357610120565b806273d7ae1461012557806303d480f3146101845780631c14ce5e14610297578063338b474114610488575b600080fd5b61012d610f5f565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610170578082015181840152602081019050610155565b505050509050019250505060405180910390f35b6101b06004803603602081101561019a57600080fd5b8101908080359060200190929190505050610fe3565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b838110156101f45780820151818401526020810190506101d9565b50505050905090810190601f1680156102215780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561025a57808201518184015260208101905061023f565b50505050905090810190601f1680156102875780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b610350600480360360208110156102ad57600080fd5b81019080803590602001906401000000008111156102ca57600080fd5b8201836020820111156102dc57600080fd5b803590602001918460018302840111640100000000831117156102fe57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611137565b604051808060200180602001806020018515158152602001848103845288818151815260200191508051906020019080838360005b838110156103a0578082015181840152602081019050610385565b50505050905090810190601f1680156103cd5780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b838110156104065780820151818401526020810190506103eb565b50505050905090810190601f1680156104335780820380516001836020036101000a031916815260200191505b50848103825286818151815260200191508051906020019060200280838360005b8381101561046f578082015181840152602081019050610454565b5050505090500197505050505050505060405180910390f35b6104ba6004803603602081101561049e57600080fd5b81019080803563ffffffff169060200190929190505050611413565b005b61050e600480360360608110156104d257600080fd5b81019080803563ffffffff169060200190929190803563ffffffff169060200190929190803563ffffffff169060200190929190505050611636565b005b6105426004803603602081101561052657600080fd5b81019080803563ffffffff1690602001909291905050506118ca565b604051808263ffffffff16815260200191505060405180910390f35b61058d6004803603602081101561057457600080fd5b81019080803560ff169060200190929190505050611951565b60405180806020018060200180602001858152602001848103845288818151815260200191508051906020019080838360005b838110156105db5780820151818401526020810190506105c0565b50505050905090810190601f1680156106085780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610641578082015181840152602081019050610626565b50505050905090810190601f16801561066e5780820380516001836020036101000a031916815260200191505b50848103825286818151815260200191508051906020019060200280838360005b838110156106aa57808201518184015260208101905061068f565b5050505090500197505050505050505060405180910390f35b6106cb611b54565b604051808060200180602001806020018515158152602001848103845288818151815260200191508051906020019080838360005b8381101561071b578082015181840152602081019050610700565b50505050905090810190601f1680156107485780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610781578082015181840152602081019050610766565b50505050905090810190601f1680156107ae5780820380516001836020036101000a031916815260200191505b50848103825286818151815260200191508051906020019060200280838360005b838110156107ea5780820151818401526020810190506107cf565b5050505090500197505050505050505060405180910390f35b6108356004803603602081101561081957600080fd5b81019080803563ffffffff169060200190929190505050611d80565b60405180821515815260200191505060405180910390f35b61087f6004803603602081101561086357600080fd5b81019080803563ffffffff169060200190929190505050611e39565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156108c25780820151818401526020810190506108a7565b505050509050019250505060405180910390f35b610908600480360360208110156108ec57600080fd5b81019080803563ffffffff169060200190929190505050611ee8565b60405180821515815260200191505060405180910390f35b610a806004803603606081101561093657600080fd5b810190808035906020019064010000000081111561095357600080fd5b82018360208201111561096557600080fd5b8035906020019184600183028401116401000000008311171561098757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156109ea57600080fd5b8201836020820111156109fc57600080fd5b80359060200191846001830284011164010000000083111715610a1e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803563ffffffff169060200190929190505050611fc9565b005b610bd260048036036040811015610a9857600080fd5b8101908080359060200190640100000000811115610ab557600080fd5b820183602082011115610ac757600080fd5b80359060200191846001830284011164010000000083111715610ae957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610b4c57600080fd5b820183602082011115610b5e57600080fd5b80359060200191846001830284011164010000000083111715610b8057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050612204565b60405180821515815260200191505060405180910390f35b610c1660048036036020811015610c0057600080fd5b81019080803590602001909291905050506122f3565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610c4a612332565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610c8d578082015181840152602081019050610c72565b505050509050019250505060405180910390f35b610ca96123c0565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610cec578082015181840152602081019050610cd1565b505050509050019250505060405180910390f35b610ee760048036036060811015610d1657600080fd5b8101908080359060200190640100000000811115610d3357600080fd5b820183602082011115610d4557600080fd5b80359060200191846001830284011164010000000083111715610d6757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610dca57600080fd5b820183602082011115610ddc57600080fd5b80359060200191846001830284011164010000000083111715610dfe57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610e6157600080fd5b820183602082011115610e7357600080fd5b80359060200191846001830284011164010000000083111715610e9557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061248a565b005b610f1560048036036020811015610eff57600080fd5b8101908080359060200190929190505050612598565b604051808263ffffffff16815260200191505060405180910390f35b610f5d60048036036020811015610f4757600080fd5b81019080803590602001909291905050506125d2565b005b60606005805480602002602001604051908101604052809291908181526020018280548015610fd957602002820191906000526020600020906000905b82829054906101000a900463ffffffff1663ffffffff1681526020019060040190602082600301049283019260010382029150808411610f9c5790505b5050505050905090565b6000602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561108f5780601f106110645761010080835404028352916020019161108f565b820191906000526020600020905b81548152906001019060200180831161107257829003601f168201915b505050505090806001018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561112d5780601f106111025761010080835404028352916020019161112d565b820191906000526020600020905b81548152906001019060200180831161111057829003601f168201915b5050505050905082565b6060806060600080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905061122686826003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561121c5780601f106111f15761010080835404028352916020019161121c565b820191906000526020600020905b8154815290600101906020018083116111ff57829003601f168201915b5050505050612204565b61122f57600080fd5b8060010181600201826004018360050160009054906101000a900460ff16838054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112e25780601f106112b7576101008083540402835291602001916112e2565b820191906000526020600020905b8154815290600101906020018083116112c557829003601f168201915b50505050509350828054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561137e5780601f106113535761010080835404028352916020019161137e565b820191906000526020600020905b81548152906001019060200180831161136157829003601f168201915b50505050509250818054806020026020016040519081016040528092919081815260200182805480156113fc57602002820191906000526020600020906000905b82829054906101000a900463ffffffff1663ffffffff16815260200190600401906020826003010492830192600103820291508084116113bf5790505b505050505091509450945094509450509193509193565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008060008463ffffffff168152602001908152602001600020905060008363ffffffff16141561148657600080fd5b61153b816000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115215780601f106114f657610100808354040283529160200191611521565b820191906000526020600020905b81548152906001019060200180831161150457829003601f168201915b505050505060405180602001604052806000815250612204565b1561154557600080fd5b61154e83611d80565b1561155857600080fd5b816004018390806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908363ffffffff160217905550806002018260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008060008463ffffffff1681526020019081526020016000209050816004016001836004018054905003815481106116ae57fe5b90600052602060002090600891828204019190066004029054906101000a900463ffffffff16826004018663ffffffff16815481106116e957fe5b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908363ffffffff1602179055508160040160018360040180549050038154811061173557fe5b90600052602060002090600891828204019190066004026101000a81549063ffffffff02191690558160040180548061176a57fe5b60019003818190600052602060002090600891828204019190066004026101000a81549063ffffffff02191690559055806002016001826002018054905003815481106117b357fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16816002018563ffffffff16815481106117f357fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060020160018260020180549050038154811061185457fe5b9060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690558060020180548061188e57fe5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590555050505050565b600080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050806004018363ffffffff168154811061192357fe5b90600052602060002090600891828204019190066004029054906101000a900463ffffffff16915050919050565b60608060606000806000808760ff16815260200190815260200160002090508060000181600101826002018360020180549050838054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611a195780601f106119ee57610100808354040283529160200191611a19565b820191906000526020600020905b8154815290600101906020018083116119fc57829003601f168201915b50505050509350828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611ab55780601f10611a8a57610100808354040283529160200191611ab5565b820191906000526020600020905b815481529060010190602001808311611a9857829003601f168201915b5050505050925081805480602002602001604051908101604052809291908181526020018280548015611b3d57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611af3575b505050505091509450945094509450509193509193565b6060806060600080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010181600201826004018360050160009054906101000a900460ff16838054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611c505780601f10611c2557610100808354040283529160200191611c50565b820191906000526020600020905b815481529060010190602001808311611c3357829003601f168201915b50505050509350828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611cec5780601f10611cc157610100808354040283529160200191611cec565b820191906000526020600020905b815481529060010190602001808311611ccf57829003601f168201915b5050505050925081805480602002602001604051908101604052809291908181526020018280548015611d6a57602002820191906000526020600020906000905b82829054906101000a900463ffffffff1663ffffffff1681526020019060040190602082600301049283019260010382029150808411611d2d5790505b5050505050915094509450945094505090919293565b600080600090506000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060005b8160040180549050811015611e2e578463ffffffff16826004018281548110611df257fe5b90600052602060002090600891828204019190066004029054906101000a900463ffffffff1663ffffffff161492508080600101915050611dcd565b508192505050919050565b606060008060008463ffffffff168152602001908152602001600020905080600201805480602002602001604051908101604052809291908181526020018280548015611edb57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611e91575b5050505050915050919050565b6000806000808463ffffffff16815260200190815260200160002090506000611fbc826000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611fa25780601f10611f7757610100808354040283529160200191611fa2565b820191906000526020600020905b815481529060010190602001808311611f8557829003601f168201915b505050505060405180602001604052806000815250612204565b1590508092505050919050565b611fd36001611ee8565b6121275760008060006001815260200190815260200160002090506040518060400160405280600781526020017f53747564656e740000000000000000000000000000000000000000000000000081525081600001908051906020019061203b92919061268f565b506040518060400160405280600d81526020017f44656661756c742047726f75700000000000000000000000000000000000000081525081600101908051906020019061208992919061268f565b506001600081819054906101000a900463ffffffff168092919060010191906101000a81548163ffffffff021916908363ffffffff160217905550506005600460009054906101000a900463ffffffff1690806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908363ffffffff160217905550505b60008060008363ffffffff16815260200190815260200160002090508381600001908051906020019061215b92919061268f565b508281600101908051906020019061217492919061268f565b506001600081819054906101000a900463ffffffff168092919060010191906101000a81548163ffffffff021916908363ffffffff1602179055505060058290806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908363ffffffff16021790555050505050565b6000816040516020018082805190602001908083835b6020831061223d578051825260208201915060208101905060208303925061221a565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405280519060200120836040516020018082805190602001908083835b602083106122af578051825260208201915060208101905060208303925061228c565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040528051906020012014905092915050565b6002818154811061230357600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060028054806020026020016040519081016040528092919081815260200182805480156123b657602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161236c575b5050505050905090565b60606000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060040180548060200260200160405190810160405280929190818152602001828054801561247f57602002820191906000526020600020906000905b82829054906101000a900463ffffffff1663ffffffff16815260200190600401906020826003010492830192600103820291508084116124425790505b505050505091505090565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050838160010190805190602001906124e592919061268f565b50828160020190805190602001906124fe92919061268f565b508181600301908051906020019061251792919061268f565b50338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018160050160006101000a81548160ff0219169083151502179055506125826001611ee8565b15612592576125916001611413565b5b50505050565b600581815481106125a857600080fd5b9060005260206000209060089182820401919006600402915054906101000a900463ffffffff1681565b600033826040516125e29061271d565b808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051809103906000f080158015612625573d6000803e3d6000fd5b5090506002819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826126c5576000855561270c565b82601f106126de57805160ff191683800117855561270c565b8280016001018555821561270c579182015b8281111561270b5782518255916020019190600101906126f0565b5b509050612719919061272a565b5090565b611f8c8061274883390190565b5b8082111561274357600081600090555060010161272b565b509056fe608060405234801561001057600080fd5b50604051611f8c380380611f8c8339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806002819055505050611ee6806100a66000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80637432e63a11610097578063953ef76d11610066578063953ef76d1461083c578063da3550ee1461096c578063dcfda00f146109b0578063fcae83a714610bad57610100565b80637432e63a146104a2578063869eae23146104fa5780638ab66a901461065657806395115447146107a357610100565b8063481c6a75116100d3578063481c6a75146101aa5780635aa82fbe146101de57806367127e4314610238578063691a675c1461039e57610100565b80632d35a8a21461010557806337cc0439146101235780633f8cab7f14610141578063407bba4a146101a0575b600080fd5b61010d610d1d565b6040518082815260200191505060405180910390f35b61012b610d23565b6040518082815260200191505060405180910390f35b610149610d29565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561018c578082015181840152602081019050610171565b505050509050019250505060405180910390f35b6101a8610dc6565b005b6101b2610fee565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610220600480360360208110156101f457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611012565b60405180821515815260200191505060405180910390f35b61039c6004803603608081101561024e57600080fd5b810190808035906020019064010000000081111561026b57600080fd5b82018360208201111561027d57600080fd5b8035906020019184600183028401116401000000008311171561029f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803590602001909291908035906020019064010000000081111561031657600080fd5b82018360208201111561032857600080fd5b8035906020019184600183028401116401000000008311171561034a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611068565b005b6103a6611120565b604051808060200186815260200185815260200180602001848152602001838103835288818151815260200191508051906020019080838360005b838110156103fc5780820151818401526020810190506103e1565b50505050905090810190601f1680156104295780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015610462578082015181840152602081019050610447565b50505050905090810190601f16801561048f5780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b6104ce600480360360208110156104b857600080fd5b8101908080359060200190929190505050611274565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6106546004803603606081101561051057600080fd5b810190808035906020019064010000000081111561052d57600080fd5b82018360208201111561053f57600080fd5b8035906020019184600183028401116401000000008311171561056157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156105c457600080fd5b8201836020820111156105d657600080fd5b803590602001918460018302840111640100000000831117156105f857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291905050506112b3565b005b6106986004803603602081101561066c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113f5565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156106fe5780820151818401526020810190506106e3565b50505050905090810190601f16801561072b5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015610764578082015181840152602081019050610749565b50505050905090810190601f1680156107915780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b6107e5600480360360208110156107b957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611575565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561082857808201518184015260208101905061080d565b505050509050019250505060405180910390f35b61087e6004803603602081101561085257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611654565b604051808060200180602001848152602001838103835286818151815260200191508051906020019080838360005b838110156108c85780820151818401526020810190506108ad565b50505050905090810190601f1680156108f55780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b8381101561092e578082015181840152602081019050610913565b50505050905090810190601f16801561095b5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b6109ae6004803603602081101561098257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611873565b005b610bab600480360360a08110156109c657600080fd5b81019080803590602001906401000000008111156109e357600080fd5b8201836020820111156109f557600080fd5b80359060200191846001830284011164010000000083111715610a1757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291908035906020019092919080359060200190640100000000811115610a8e57600080fd5b820183602082011115610aa057600080fd5b80359060200191846001830284011164010000000083111715610ac257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610b2557600080fd5b820183602082011115610b3757600080fd5b80359060200191846001830284011164010000000083111715610b5957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611ad8565b005b610bb5611baa565b6040518080602001878152602001868152602001806020018581526020018060200184810384528a818151815260200191508051906020019080838360005b83811015610c0f578082015181840152602081019050610bf4565b50505050905090810190601f168015610c3c5780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610c75578082015181840152602081019050610c5a565b50505050905090810190601f168015610ca25780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b83811015610cdb578082015181840152602081019050610cc0565b50505050905090810190601f168015610d085780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b60015481565b60025481565b6060600060025414610d3a57600080fd5b6005805480602002602001604051908101604052809291908181526020018280548015610dbc57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610d72575b5050505050905090565b600060025414610dd557600080fd5b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160009055600282016000610e549190611d9c565b600382016000610e649190611dbd565b600482016000610e749190611dbd565b505060005b600580549050811015610fd85760058181548110610e9357fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610fcb57600560016005805490500381548110610f0657fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660058281548110610f3e57fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506005805480610f9157fe5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690559055610fd8565b8080600101915050610e79565b5060016000815480929190600190039190505550565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146110c057600080fd5b6001600254146110cf57600080fd5b6000600c9050848160000190805190602001906110ed929190611e05565b5083816001018190555082816002018190555081816003019080519060200190611118929190611e05565b505050505050565b600c806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111ba5780601f1061118f576101008083540402835291602001916111ba565b820191906000526020600020905b81548152906001019060200180831161119d57829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112645780601f1061123957610100808354040283529160200191611264565b820191906000526020600020905b81548152906001019060200180831161124757829003601f168201915b5050505050908060040154905085565b6005818154811061128457600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600254146112c257600080fd5b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508381600301908051906020019061131d929190611e05565b5082816004019080519060200190611336929190611e05565b50338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600081548092919060010191905055506005339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b60046020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114cd5780601f106114a2576101008083540402835291602001916114cd565b820191906000526020600020905b8154815290600101906020018083116114b057829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561156b5780601f106115405761010080835404028352916020019161156b565b820191906000526020600020905b81548152906001019060200180831161154e57829003601f168201915b5050505050905084565b606060006002541461158657600080fd5b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020180548060200260200160405190810160405280929190818152602001828054801561164857602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116115fe575b50505050509050919050565b6060806000806002541461166757600080fd5b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154828054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156117c35780601f10611798576101008083540402835291602001916117c3565b820191906000526020600020905b8154815290600101906020018083116117a657829003601f168201915b50505050509250818054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561185f5780601f106118345761010080835404028352916020019161185f565b820191906000526020600020905b81548152906001019060200180831161184257829003601f168201915b505050505091509250925092509193909250565b60006002541461188257600080fd5b60001515600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151415611ad557600073ffffffffffffffffffffffffffffffffffffffff16600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611ad4576001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600660040160008154809291906001019190505550600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008154809291906001019190505550600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611b3057600080fd5b600060025414611b3f57600080fd5b60006006905085816000019080519060200190611b5d929190611e05565b5084816001018190555083816002018190555082816003019080519060200190611b88929190611e05565b5081816005019080519060200190611ba1929190611e05565b50505050505050565b6006806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611c445780601f10611c1957610100808354040283529160200191611c44565b820191906000526020600020905b815481529060010190602001808311611c2757829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611cee5780601f10611cc357610100808354040283529160200191611cee565b820191906000526020600020905b815481529060010190602001808311611cd157829003601f168201915b505050505090806004015490806005018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611d925780601f10611d6757610100808354040283529160200191611d92565b820191906000526020600020905b815481529060010190602001808311611d7557829003601f168201915b5050505050905086565b5080546000825590600052602060002090810190611dba9190611e93565b50565b50805460018160011615610100020316600290046000825580601f10611de35750611e02565b601f016020900490600052602060002090810190611e019190611e93565b5b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282611e3b5760008555611e82565b82601f10611e5457805160ff1916838001178555611e82565b82800160010185558215611e82579182015b82811115611e81578251825591602001919060010190611e66565b5b509050611e8f9190611e93565b5090565b5b80821115611eac576000816000905550600101611e94565b509056fea2646970667358221220236d0e7f5c65e30829daddc1d43b6e92867f164427dda94881a1c9a40eea550a64736f6c63430007040033a2646970667358221220388fd85275c5e553f4daf8c9bc4dbf0170010dddc355b6e1b30060448b38111164736f6c63430007040033\",\"immutableReferences\":{},\"generatedSources\":[],\"deployedGeneratedSources\":[],\"sourceMap\":\"92:6643:2:-:0;;;935:1;911:25;;;;;;;;;;;;;;;;;;;;92:6643;;;;;;;;;;;;;;;;\",\"deployedSourceMap\":\"92:6643:2:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5000:106;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;723:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5669:324;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1984:467;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2863:572;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;4112:160;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;4760:228;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6034:209;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3491:299;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;4534:166;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3854:201;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;1255:606;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6548:181;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;828:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;6255:106;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4327:154;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5118:386;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1000:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;5512:151;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;5000:106;5049:15;5084:14;5077:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5000:106;:::o;723:45::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5669:324::-;5733:13;5748;5763:15;5780:4;5796:20;5819:8;:20;5828:10;5819:20;;;;;;;;;;;;;;;5796:43;;5857:36;5872:8;5882:1;:10;;5857:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:14;:36::i;:::-;5849:45;;;;;;5948:1;:6;;5956:1;:7;;5965:1;:8;;5975:1;:9;;;;;;;;;;;;5941:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5669:324;;;;;:::o;1984:467::-;2041:20;2064:8;:20;2073:10;2064:20;;;;;;;;;;;;;;;2041:43;;2095:21;2119:9;:18;2129:7;2119:18;;;;;;;;;;;;;2095:42;;2177:1;2166:7;:12;;;;2158:21;;;;;;2199:26;2214:1;:6;;2199:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:14;:26::i;:::-;2198:27;2190:36;;;;;;2281:20;2293:7;2281:11;:20::i;:::-;2280:21;2272:30;;;;;;2346:1;:8;;2360:7;2346:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2414:1;:9;;2429:1;:13;;;;;;;;;;;;2414:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1984:467;;;:::o;2863:572::-;2956:20;2979:8;:20;2988:10;2979:20;;;;;;;;;;;;;;;2956:43;;3010:21;3034:9;:18;3044:7;3034:18;;;;;;;;;;;;;3010:42;;3135:1;:8;;3162:1;3144;:8;;:15;;;;:19;3135:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3112:1;:8;;3121:10;3112:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;:52;;;;;;;;;;;;;;;;;;3182:1;:8;;3209:1;3191;:8;;:15;;;;:19;3182:29;;;;;;;;;;;;;;;;;;;;;;;;;;3175:36;;;;;;;;;;;3222:1;:8;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3321:1;:9;;3350:1;3331;:9;;:16;;;;:20;3321:31;;;;;;;;;;;;;;;;;;;;;;;;;3296:1;:9;;3306:11;3296:22;;;;;;;;;;;;;;;;;;:56;;;;;;;;;;;;;;;;;;3370:1;:9;;3399:1;3380;:9;;:16;;;;:20;3370:31;;;;;;;;;;;;;;;;3363:38;;;;;;;;;;;3412:1;:9;;:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2863:572;;;;;:::o;4112:160::-;4169:6;4188:20;4211:8;:20;4220:10;4211:20;;;;;;;;;;;;;;;4188:43;;4249:1;:8;;4258:5;4249:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4242:22;;;4112:160;;;:::o;4760:228::-;4808:13;4823;4838:16;4856:4;4873:21;4897:9;:13;4907:2;4897:13;;;;;;;;;;;;;4873:37;;4929:1;:6;;4937:1;:13;;4952:1;:9;;4963:1;:9;;:16;;;;4921:59;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4760:228;;;;;:::o;6034:209::-;6074:13;6089;6104:15;6121:4;6137:20;6160:8;:20;6169:10;6160:20;;;;;;;;;;;;;;;6137:43;;6198:1;:6;;6206:1;:7;;6215:1;:8;;6225:1;:9;;;;;;;;;;;;6191:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6034:209;;;;:::o;3491:299::-;3549:4;3566:13;3582:5;3566:21;;3598:20;3621:8;:20;3630:10;3621:20;;;;;;;;;;;;;;;3598:43;;3657:6;3652:105;3673:1;:8;;:15;;;;3669:1;:19;3652:105;;;3737:7;3722:22;;:1;:8;;3731:1;3722:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:22;;;3710:35;;3690:3;;;;;;;3652:105;;;;3774:8;3767:15;;;;3491:299;;;:::o;4534:166::-;4594:16;4623:21;4647:9;:18;4657:7;4647:18;;;;;;;;;;;;;4623:42;;4683:1;:9;;4676:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4534:166;;;:::o;3854:201::-;3908:4;3925:21;3949:9;:18;3959:7;3949:18;;;;;;;;;;;;;3925:42;;3978:12;3995:26;4010:1;:6;;3995:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:14;:26::i;:::-;3993:29;3978:44;;4040:7;4033:14;;;;3854:201;;;:::o;1255:606::-;1413:10;1421:1;1413:7;:10::i;:::-;1408:269;;1440:32;1475:9;:12;1485:1;1475:12;;;;;;;;;;;1440:47;;1502:29;;;;;;;;;;;;;;;;;:12;:17;;:29;;;;;;;;;;;;:::i;:::-;;1546:42;;;;;;;;;;;;;;;;;:12;:24;;:42;;;;;;;;;;;;:::i;:::-;;1603:10;;:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1630:14;1650;;;;;;;;;;;1630:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1408:269;;1687:21;1711:9;:18;1721:7;1711:18;;;;;;;;;;;;;1687:42;;1749:4;1740:1;:6;;:13;;;;;;;;;;;;:::i;:::-;;1780:11;1764:1;:13;;:27;;;;;;;;;;;;:::i;:::-;;1802:10;;:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1825:14;1845:7;1825:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1255:606;;;;:::o;6548:181::-;6627:4;6716:1;6698:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6688:32;;;;;;6680:1;6662:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6652:32;;;;;;:68;6644:77;;6548:181;;;;:::o;828:30::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;6255:106::-;6304:16;6340:13;6333:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6255:106;:::o;4327:154::-;4376:15;4404:20;4427:8;:20;4436:10;4427:20;;;;;;;;;;;;;;;4404:43;;4465:1;:8;;4458:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4327:154;:::o;5118:386::-;5223:20;5246:8;:20;5255:10;5246:20;;;;;;;;;;;;;;;5223:43;;5300:4;5291:1;:6;;:13;;;;;;;;;;;;:::i;:::-;;5325:5;5315:1;:7;;:15;;;;;;;;;;;;:::i;:::-;;5354:8;5341:1;:10;;:21;;;;;;;;;;;;:::i;:::-;;5390:10;5373:1;:13;;;:27;;;;;;;;;;;;;;;;;;5423:4;5411:1;:9;;;:16;;;;;;;;;;;;;;;;;;5442:10;5450:1;5442:7;:10::i;:::-;5438:59;;;5469:16;5483:1;5469:13;:16::i;:::-;5438:59;5118:386;;;;:::o;1000:30::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5512:151::-;5562:15;5597:10;5609:6;5588:28;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5562:55;;5628:13;5647:7;5628:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5512:151;;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o\",\"source\":\"pragma solidity ^0.7.4;\\r\\n\\r\\n//\\\"SPDX-License-Identifier: UNLICENSED\\\"\\r\\nimport \\\"./Vote.sol\\\";\\r\\n\\r\\ncontract VoteFactory{\\r\\n    \\r\\n    // Representation of an instance of Group\\r\\n    struct groupStruct {\\r\\n        string name;\\r\\n        string description;\\r\\n        address[] members; // NEW Assumption that members rarely quit      \\r\\n    }\\r\\n    \\r\\n    // Representation of an instance of User\\r\\n    struct userStruct {\\r\\n        address userAddress;\\r\\n        string name;\\r\\n        string email;\\r\\n        string password;\\r\\n        // address[] running;\\r\\n        // address[] createdElection;\\r\\n        // address[] createdPetition;\\r\\n        uint32[] groups; // NEW Assumption that users rarely quit\\r\\n        bool isAdmin;\\r\\n    }\\r\\n    \\r\\n    mapping(uint => groupStruct) public groupInfo; // KEY: groupID Value: group\\r\\n    uint32 groupCount;\\r\\n    address[] public deployedVotes;\\r\\n    mapping(address => userStruct) userInfo;\\r\\n    uint32 defaultGroupID = 1; // Use the getGroup(uint id) to access the default group\\r\\n    uint32[] public existingGroups; // NEW: Access all groups in the UI\\r\\n    \\r\\n    // Creates an instance of group and Updates the groupInfo mapping\\r\\n    // It also takes groupID as an input since the groupStruct(VALUE) is identified with a groupId(KEY)\\r\\n    function createGroup(string memory name, string memory description, uint32 groupID) public {\\r\\n        // IF statement to create a default group\\r\\n        if (!isGroup(1)) {\\r\\n            groupStruct storage studentGroup = groupInfo[1];\\r\\n            studentGroup.name = \\\"Student\\\";\\r\\n            studentGroup.description = \\\"Default Group\\\";\\r\\n            groupCount++;\\r\\n            existingGroups.push(defaultGroupID);\\r\\n        }\\r\\n        groupStruct storage g = groupInfo[groupID];\\r\\n        g.name = name;\\r\\n        g.description = description;\\r\\n        groupCount++;\\r\\n        existingGroups.push(groupID);\\r\\n    }\\r\\n\\r\\n    // Adds the groupID to the user's array of groups and Adds the user's address to the group's array of members\\r\\n    function registerGroup(uint32 groupID) public {\\r\\n        userStruct storage u = userInfo[msg.sender];\\r\\n        groupStruct storage g = groupInfo[groupID];\\r\\n        \\r\\n        require(groupID != 0);\\r\\n        require(!compareStrings(g.name, \\\"\\\")); // Validates the group's existence\\r\\n        require(!isUserGroup(groupID));\\r\\n        \\r\\n        //Update User\\r\\n        u.groups.push(groupID);\\r\\n        \\r\\n        // Update Group\\r\\n        g.members.push(u.userAddress);\\r\\n    }\\r\\n    \\r\\n    // Removes the groupID in the user's groups array and Removes the address in the group's member array\\r\\n    // using the Swap & Delete method (swaps the last element)\\r\\n    // Resources https://stackoverflow.com/questions/49051856/is-there-a-pop-functionality-for-solidity-arrays\\r\\n    // The inputs are very specific to prevent large computations (TO CHANGE DEPENDING ON PROJECT MANAGER'S CHOICE)\\r\\n    function leaveGroup(uint32 indexGroup, uint32 indexMember, uint32 groupID) public {\\r\\n        userStruct storage u = userInfo[msg.sender];\\r\\n        groupStruct storage g = groupInfo[groupID];\\r\\n        \\r\\n        // Remove the group from user\\r\\n        u.groups[indexGroup] = u.groups[u.groups.length - 1];\\r\\n        delete u.groups[u.groups.length - 1];\\r\\n        u.groups.pop();\\r\\n        \\r\\n        // Remove user from the group\\r\\n        g.members[indexMember] = g.members[g.members.length - 1];\\r\\n        delete g.members[g.members.length - 1];\\r\\n        g.members.pop();\\r\\n    }\\r\\n\\r\\n    // Verify if the user is part of the group\\r\\n    function isUserGroup(uint32 groupID) public view returns (bool) {\\r\\n        bool isStatus = false;\\r\\n        userStruct storage u = userInfo[msg.sender];\\r\\n        for (uint i = 0; i < u.groups.length; i++) {\\r\\n            isStatus = (u.groups[i] == groupID);\\r\\n        }\\r\\n        return isStatus;\\r\\n    }\\r\\n    \\r\\n    // Verify that the group exists in the mapping\\r\\n    function isGroup(uint32 groupID) public view returns (bool) {\\r\\n        groupStruct storage g = groupInfo[groupID];\\r\\n        bool isExist = !(compareStrings(g.name, \\\"\\\"));\\r\\n        return isExist;\\r\\n    }\\r\\n    \\r\\n    // Returns a specific group of the user\\r\\n    function getUserGroup(uint32 index) public view returns (uint32) {\\r\\n        userStruct storage u = userInfo[msg.sender];\\r\\n        return u.groups[index];\\r\\n    }\\r\\n    \\r\\n    // Returns the user's array of groups\\r\\n    function getUserAllGroups() public view returns (uint32[] memory) {\\r\\n        userStruct storage u = userInfo[msg.sender];\\r\\n        return u.groups;\\r\\n    }\\r\\n    \\r\\n    // Returns all members of the group\\r\\n    function getAllMembers(uint32 groupID) public view returns (address[] memory) {\\r\\n        groupStruct storage g = groupInfo[groupID];\\r\\n        return g.members;\\r\\n    }\\r\\n    \\r\\n    // Returns a specific group of the website\\r\\n    function getGroup(uint8 id) public view returns(string memory, string memory, address[] memory, uint) {\\r\\n        groupStruct storage g = groupInfo[id];\\r\\n        return (g.name, g.description, g.members, g.members.length);\\r\\n    }\\r\\n    \\r\\n    function getExistingGroups() public view returns(uint32[] memory) {\\r\\n        return existingGroups;\\r\\n    }\\r\\n    \\r\\n    function registerUser(string memory name, string memory email, string memory password) public {\\r\\n        userStruct storage u = userInfo[msg.sender]; //innitialize\\r\\n        u.name = name;\\r\\n        u.email = email;\\r\\n        u.password = password;\\r\\n        u.userAddress =  msg.sender;\\r\\n        u.isAdmin = true;\\r\\n        if (isGroup(1)) {\\r\\n            registerGroup(1);\\r\\n        }\\r\\n    }\\r\\n\\r\\n    function createVote(uint typeOf) public{\\r\\n        address newVote = address(new Vote(msg.sender, typeOf));\\r\\n        deployedVotes.push(newVote);\\r\\n    }\\r\\n    function loginUser(string memory password) public view returns (string memory, string memory, uint32[] memory, bool) {\\r\\n       userStruct storage u = userInfo[msg.sender];\\r\\n       require(compareStrings(password, u.password)); // NEW implemented the helper method\\r\\n       return(u.name, u.email, u.groups, u.isAdmin);\\r\\n    }\\r\\n\\r\\n    //NEED TO BE FIX (u.groups)\\r\\n    function getUser() public view returns (string memory, string memory, uint32[] memory, bool){\\r\\n        userStruct storage u = userInfo[msg.sender];\\r\\n        return(u.name, u.email, u.groups, u.isAdmin);\\r\\n    }\\r\\n    \\r\\n    function getDeployedVotes() public view returns (address[] memory) {\\r\\n        return deployedVotes;\\r\\n    }\\r\\n    \\r\\n    // Returns a boolean value of the comparison (HELPER METHOD)\\r\\n    // Based on https://ethereum.stackexchange.com/questions/30912/how-to-compare-strings-in-solidity/82739\\r\\n    function compareStrings(string memory a, string memory b) public pure returns (bool) {\\r\\n        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));\\r\\n    }   \\r\\n}\",\"sourcePath\":\"C:/Users/foubroker/Desktop/BAM/voting-at-mcgill-2/contracts/VoteFactory.sol\",\"ast\":{\"absolutePath\":\"/C/Users/foubroker/Desktop/BAM/voting-at-mcgill-2/contracts/VoteFactory.sol\",\"exportedSymbols\":{\"Vote\":[489],\"VoteFactory\":[1103]},\"id\":1104,\"license\":\"UNLICENSED\",\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":491,\"literals\":[\"solidity\",\"^\",\"0.7\",\".4\"],\"nodeType\":\"PragmaDirective\",\"src\":\"0:23:2\"},{\"absolutePath\":\"/C/Users/foubroker/Desktop/BAM/voting-at-mcgill-2/contracts/Vote.sol\",\"file\":\"./Vote.sol\",\"id\":492,\"nodeType\":\"ImportDirective\",\"scope\":1104,\"sourceUnit\":490,\"src\":\"68:20:2\",\"symbolAliases\":[],\"unitAlias\":\"\"},{\"abstract\":false,\"baseContracts\":[],\"contractDependencies\":[489],\"contractKind\":\"contract\",\"fullyImplemented\":true,\"id\":1103,\"linearizedBaseContracts\":[1103],\"name\":\"VoteFactory\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"canonicalName\":\"VoteFactory.groupStruct\",\"id\":500,\"members\":[{\"constant\":false,\"id\":494,\"mutability\":\"mutable\",\"name\":\"name\",\"nodeType\":\"VariableDeclaration\",\"scope\":500,\"src\":\"202:11:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":493,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"202:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":496,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":500,\"src\":\"224:18:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":495,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"224:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":499,\"mutability\":\"mutable\",\"name\":\"members\",\"nodeType\":\"VariableDeclaration\",\"scope\":500,\"src\":\"253:17:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":497,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"253:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":498,\"nodeType\":\"ArrayTypeName\",\"src\":\"253:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"}],\"name\":\"groupStruct\",\"nodeType\":\"StructDefinition\",\"scope\":1103,\"src\":\"172:155:2\",\"visibility\":\"public\"},{\"canonicalName\":\"VoteFactory.userStruct\",\"id\":514,\"members\":[{\"constant\":false,\"id\":502,\"mutability\":\"mutable\",\"name\":\"userAddress\",\"nodeType\":\"VariableDeclaration\",\"scope\":514,\"src\":\"414:19:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":501,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"414:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":504,\"mutability\":\"mutable\",\"name\":\"name\",\"nodeType\":\"VariableDeclaration\",\"scope\":514,\"src\":\"444:11:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":503,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"444:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":506,\"mutability\":\"mutable\",\"name\":\"email\",\"nodeType\":\"VariableDeclaration\",\"scope\":514,\"src\":\"466:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":505,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"466:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":508,\"mutability\":\"mutable\",\"name\":\"password\",\"nodeType\":\"VariableDeclaration\",\"scope\":514,\"src\":\"489:15:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":507,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"489:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":511,\"mutability\":\"mutable\",\"name\":\"groups\",\"nodeType\":\"VariableDeclaration\",\"scope\":514,\"src\":\"624:15:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage_ptr\",\"typeString\":\"uint32[]\"},\"typeName\":{\"baseType\":{\"id\":509,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"624:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"id\":510,\"nodeType\":\"ArrayTypeName\",\"src\":\"624:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage_ptr\",\"typeString\":\"uint32[]\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":513,\"mutability\":\"mutable\",\"name\":\"isAdmin\",\"nodeType\":\"VariableDeclaration\",\"scope\":514,\"src\":\"691:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":512,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"691:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"name\":\"userStruct\",\"nodeType\":\"StructDefinition\",\"scope\":1103,\"src\":\"385:326:2\",\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"03d480f3\",\"id\":518,\"mutability\":\"mutable\",\"name\":\"groupInfo\",\"nodeType\":\"VariableDeclaration\",\"scope\":1103,\"src\":\"723:45:2\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_groupStruct_$500_storage_$\",\"typeString\":\"mapping(uint256 => struct VoteFactory.groupStruct)\"},\"typeName\":{\"id\":517,\"keyType\":{\"id\":515,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"731:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Mapping\",\"src\":\"723:28:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_groupStruct_$500_storage_$\",\"typeString\":\"mapping(uint256 => struct VoteFactory.groupStruct)\"},\"valueType\":{\"id\":516,\"name\":\"groupStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":500,\"src\":\"739:11:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"}}},\"visibility\":\"public\"},{\"constant\":false,\"id\":520,\"mutability\":\"mutable\",\"name\":\"groupCount\",\"nodeType\":\"VariableDeclaration\",\"scope\":1103,\"src\":\"804:17:2\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"typeName\":{\"id\":519,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"804:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"visibility\":\"internal\"},{\"constant\":false,\"functionSelector\":\"c142ab00\",\"id\":523,\"mutability\":\"mutable\",\"name\":\"deployedVotes\",\"nodeType\":\"VariableDeclaration\",\"scope\":1103,\"src\":\"828:30:2\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":521,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"828:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":522,\"nodeType\":\"ArrayTypeName\",\"src\":\"828:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"public\"},{\"constant\":false,\"id\":527,\"mutability\":\"mutable\",\"name\":\"userInfo\",\"nodeType\":\"VariableDeclaration\",\"scope\":1103,\"src\":\"865:39:2\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_userStruct_$514_storage_$\",\"typeString\":\"mapping(address => struct VoteFactory.userStruct)\"},\"typeName\":{\"id\":526,\"keyType\":{\"id\":524,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"873:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"865:30:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_userStruct_$514_storage_$\",\"typeString\":\"mapping(address => struct VoteFactory.userStruct)\"},\"valueType\":{\"id\":525,\"name\":\"userStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":514,\"src\":\"884:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"}}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":530,\"mutability\":\"mutable\",\"name\":\"defaultGroupID\",\"nodeType\":\"VariableDeclaration\",\"scope\":1103,\"src\":\"911:25:2\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"typeName\":{\"id\":528,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"911:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"value\":{\"hexValue\":\"31\",\"id\":529,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"935:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"visibility\":\"internal\"},{\"constant\":false,\"functionSelector\":\"e670d800\",\"id\":533,\"mutability\":\"mutable\",\"name\":\"existingGroups\",\"nodeType\":\"VariableDeclaration\",\"scope\":1103,\"src\":\"1000:30:2\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[]\"},\"typeName\":{\"baseType\":{\"id\":531,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1000:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"id\":532,\"nodeType\":\"ArrayTypeName\",\"src\":\"1000:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage_ptr\",\"typeString\":\"uint32[]\"}},\"visibility\":\"public\"},{\"body\":{\"id\":602,\"nodeType\":\"Block\",\"src\":\"1346:515:2\",\"statements\":[{\"condition\":{\"id\":545,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"!\",\"prefix\":true,\"src\":\"1412:11:2\",\"subExpression\":{\"arguments\":[{\"hexValue\":\"31\",\"id\":543,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1421:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"}],\"id\":542,\"name\":\"isGroup\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":819,\"src\":\"1413:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_view$_t_uint32_$returns$_t_bool_$\",\"typeString\":\"function (uint32) view returns (bool)\"}},\"id\":544,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1413:10:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":574,\"nodeType\":\"IfStatement\",\"src\":\"1408:269:2\",\"trueBody\":{\"id\":573,\"nodeType\":\"Block\",\"src\":\"1425:252:2\",\"statements\":[{\"assignments\":[547],\"declarations\":[{\"constant\":false,\"id\":547,\"mutability\":\"mutable\",\"name\":\"studentGroup\",\"nodeType\":\"VariableDeclaration\",\"scope\":573,\"src\":\"1440:32:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"},\"typeName\":{\"id\":546,\"name\":\"groupStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":500,\"src\":\"1440:11:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"}},\"visibility\":\"internal\"}],\"id\":551,\"initialValue\":{\"baseExpression\":{\"id\":548,\"name\":\"groupInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":518,\"src\":\"1475:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_groupStruct_$500_storage_$\",\"typeString\":\"mapping(uint256 => struct VoteFactory.groupStruct storage ref)\"}},\"id\":550,\"indexExpression\":{\"hexValue\":\"31\",\"id\":549,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1485:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1475:12:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage\",\"typeString\":\"struct VoteFactory.groupStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"1440:47:2\"},{\"expression\":{\"id\":556,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":552,\"name\":\"studentGroup\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":547,\"src\":\"1502:12:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":554,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":494,\"src\":\"1502:17:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"hexValue\":\"53747564656e74\",\"id\":555,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1522:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_e898e77115f00dcda73cfc4c764c000e9321c213165627895a7e873dce9bd789\",\"typeString\":\"literal_string \\\"Student\\\"\"},\"value\":\"Student\"},\"src\":\"1502:29:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":557,\"nodeType\":\"ExpressionStatement\",\"src\":\"1502:29:2\"},{\"expression\":{\"id\":562,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":558,\"name\":\"studentGroup\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":547,\"src\":\"1546:12:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":560,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":496,\"src\":\"1546:24:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"hexValue\":\"44656661756c742047726f7570\",\"id\":561,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1573:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_f8635daad95d4fdb3fdc1212b14cae46909d34dec6cefda1e24815edd394df63\",\"typeString\":\"literal_string \\\"Default Group\\\"\"},\"value\":\"Default Group\"},\"src\":\"1546:42:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":563,\"nodeType\":\"ExpressionStatement\",\"src\":\"1546:42:2\"},{\"expression\":{\"id\":565,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"1603:12:2\",\"subExpression\":{\"id\":564,\"name\":\"groupCount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":520,\"src\":\"1603:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"id\":566,\"nodeType\":\"ExpressionStatement\",\"src\":\"1603:12:2\"},{\"expression\":{\"arguments\":[{\"id\":570,\"name\":\"defaultGroupID\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":530,\"src\":\"1650:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}],\"expression\":{\"id\":567,\"name\":\"existingGroups\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":533,\"src\":\"1630:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},\"id\":569,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"push\",\"nodeType\":\"MemberAccess\",\"src\":\"1630:19:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypush_nonpayable$_t_uint32_$returns$__$\",\"typeString\":\"function (uint32)\"}},\"id\":571,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1630:35:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":572,\"nodeType\":\"ExpressionStatement\",\"src\":\"1630:35:2\"}]}},{\"assignments\":[576],\"declarations\":[{\"constant\":false,\"id\":576,\"mutability\":\"mutable\",\"name\":\"g\",\"nodeType\":\"VariableDeclaration\",\"scope\":602,\"src\":\"1687:21:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"},\"typeName\":{\"id\":575,\"name\":\"groupStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":500,\"src\":\"1687:11:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"}},\"visibility\":\"internal\"}],\"id\":580,\"initialValue\":{\"baseExpression\":{\"id\":577,\"name\":\"groupInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":518,\"src\":\"1711:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_groupStruct_$500_storage_$\",\"typeString\":\"mapping(uint256 => struct VoteFactory.groupStruct storage ref)\"}},\"id\":579,\"indexExpression\":{\"id\":578,\"name\":\"groupID\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":539,\"src\":\"1721:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1711:18:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage\",\"typeString\":\"struct VoteFactory.groupStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"1687:42:2\"},{\"expression\":{\"id\":585,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":581,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":576,\"src\":\"1740:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":583,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":494,\"src\":\"1740:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":584,\"name\":\"name\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":535,\"src\":\"1749:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"1740:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":586,\"nodeType\":\"ExpressionStatement\",\"src\":\"1740:13:2\"},{\"expression\":{\"id\":591,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":587,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":576,\"src\":\"1764:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":589,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":496,\"src\":\"1764:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":590,\"name\":\"description\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":537,\"src\":\"1780:11:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"1764:27:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":592,\"nodeType\":\"ExpressionStatement\",\"src\":\"1764:27:2\"},{\"expression\":{\"id\":594,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"1802:12:2\",\"subExpression\":{\"id\":593,\"name\":\"groupCount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":520,\"src\":\"1802:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"id\":595,\"nodeType\":\"ExpressionStatement\",\"src\":\"1802:12:2\"},{\"expression\":{\"arguments\":[{\"id\":599,\"name\":\"groupID\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":539,\"src\":\"1845:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}],\"expression\":{\"id\":596,\"name\":\"existingGroups\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":533,\"src\":\"1825:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},\"id\":598,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"push\",\"nodeType\":\"MemberAccess\",\"src\":\"1825:19:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypush_nonpayable$_t_uint32_$returns$__$\",\"typeString\":\"function (uint32)\"}},\"id\":600,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1825:28:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":601,\"nodeType\":\"ExpressionStatement\",\"src\":\"1825:28:2\"}]},\"functionSelector\":\"bcab1fe3\",\"id\":603,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"createGroup\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":540,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":535,\"mutability\":\"mutable\",\"name\":\"name\",\"nodeType\":\"VariableDeclaration\",\"scope\":603,\"src\":\"1276:18:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":534,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1276:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":537,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":603,\"src\":\"1296:25:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":536,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1296:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":539,\"mutability\":\"mutable\",\"name\":\"groupID\",\"nodeType\":\"VariableDeclaration\",\"scope\":603,\"src\":\"1323:14:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"typeName\":{\"id\":538,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1323:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"visibility\":\"internal\"}],\"src\":\"1275:63:2\"},\"returnParameters\":{\"id\":541,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1346:0:2\"},\"scope\":1103,\"src\":\"1255:606:2\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":660,\"nodeType\":\"Block\",\"src\":\"2030:421:2\",\"statements\":[{\"assignments\":[609],\"declarations\":[{\"constant\":false,\"id\":609,\"mutability\":\"mutable\",\"name\":\"u\",\"nodeType\":\"VariableDeclaration\",\"scope\":660,\"src\":\"2041:20:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"},\"typeName\":{\"id\":608,\"name\":\"userStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":514,\"src\":\"2041:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"}},\"visibility\":\"internal\"}],\"id\":614,\"initialValue\":{\"baseExpression\":{\"id\":610,\"name\":\"userInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":527,\"src\":\"2064:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_userStruct_$514_storage_$\",\"typeString\":\"mapping(address => struct VoteFactory.userStruct storage ref)\"}},\"id\":613,\"indexExpression\":{\"expression\":{\"id\":611,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"2073:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":612,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"2073:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2064:20:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage\",\"typeString\":\"struct VoteFactory.userStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"2041:43:2\"},{\"assignments\":[616],\"declarations\":[{\"constant\":false,\"id\":616,\"mutability\":\"mutable\",\"name\":\"g\",\"nodeType\":\"VariableDeclaration\",\"scope\":660,\"src\":\"2095:21:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"},\"typeName\":{\"id\":615,\"name\":\"groupStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":500,\"src\":\"2095:11:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"}},\"visibility\":\"internal\"}],\"id\":620,\"initialValue\":{\"baseExpression\":{\"id\":617,\"name\":\"groupInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":518,\"src\":\"2119:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_groupStruct_$500_storage_$\",\"typeString\":\"mapping(uint256 => struct VoteFactory.groupStruct storage ref)\"}},\"id\":619,\"indexExpression\":{\"id\":618,\"name\":\"groupID\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":605,\"src\":\"2129:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2119:18:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage\",\"typeString\":\"struct VoteFactory.groupStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"2095:42:2\"},{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"id\":624,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":622,\"name\":\"groupID\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":605,\"src\":\"2166:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"!=\",\"rightExpression\":{\"hexValue\":\"30\",\"id\":623,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2177:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"src\":\"2166:12:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":621,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"2158:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":625,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2158:21:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":626,\"nodeType\":\"ExpressionStatement\",\"src\":\"2158:21:2\"},{\"expression\":{\"arguments\":[{\"id\":633,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"!\",\"prefix\":true,\"src\":\"2198:27:2\",\"subExpression\":{\"arguments\":[{\"expression\":{\"id\":629,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":616,\"src\":\"2214:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":630,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":494,\"src\":\"2214:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},{\"hexValue\":\"\",\"id\":631,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2222:2:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470\",\"typeString\":\"literal_string \\\"\\\"\"},\"value\":\"\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"},{\"typeIdentifier\":\"t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470\",\"typeString\":\"literal_string \\\"\\\"\"}],\"id\":628,\"name\":\"compareStrings\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1102,\"src\":\"2199:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bool_$\",\"typeString\":\"function (string memory,string memory) pure returns (bool)\"}},\"id\":632,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2199:26:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":627,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"2190:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":634,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2190:36:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":635,\"nodeType\":\"ExpressionStatement\",\"src\":\"2190:36:2\"},{\"expression\":{\"arguments\":[{\"id\":640,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"!\",\"prefix\":true,\"src\":\"2280:21:2\",\"subExpression\":{\"arguments\":[{\"id\":638,\"name\":\"groupID\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":605,\"src\":\"2293:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}],\"id\":637,\"name\":\"isUserGroup\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":793,\"src\":\"2281:11:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_view$_t_uint32_$returns$_t_bool_$\",\"typeString\":\"function (uint32) view returns (bool)\"}},\"id\":639,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2281:20:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":636,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"2272:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":641,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2272:30:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":642,\"nodeType\":\"ExpressionStatement\",\"src\":\"2272:30:2\"},{\"expression\":{\"arguments\":[{\"id\":648,\"name\":\"groupID\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":605,\"src\":\"2360:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}],\"expression\":{\"expression\":{\"id\":643,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":609,\"src\":\"2346:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":646,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"groups\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":511,\"src\":\"2346:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},\"id\":647,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"push\",\"nodeType\":\"MemberAccess\",\"src\":\"2346:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypush_nonpayable$_t_uint32_$returns$__$\",\"typeString\":\"function (uint32)\"}},\"id\":649,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2346:22:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":650,\"nodeType\":\"ExpressionStatement\",\"src\":\"2346:22:2\"},{\"expression\":{\"arguments\":[{\"expression\":{\"id\":656,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":609,\"src\":\"2429:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":657,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"userAddress\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":502,\"src\":\"2429:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"expression\":{\"expression\":{\"id\":651,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":616,\"src\":\"2414:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":654,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"members\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":499,\"src\":\"2414:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":655,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"push\",\"nodeType\":\"MemberAccess\",\"src\":\"2414:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypush_nonpayable$_t_address_$returns$__$\",\"typeString\":\"function (address)\"}},\"id\":658,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2414:29:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":659,\"nodeType\":\"ExpressionStatement\",\"src\":\"2414:29:2\"}]},\"functionSelector\":\"338b4741\",\"id\":661,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"registerGroup\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":606,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":605,\"mutability\":\"mutable\",\"name\":\"groupID\",\"nodeType\":\"VariableDeclaration\",\"scope\":661,\"src\":\"2007:14:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"typeName\":{\"id\":604,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2007:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"visibility\":\"internal\"}],\"src\":\"2006:16:2\"},\"returnParameters\":{\"id\":607,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2030:0:2\"},\"scope\":1103,\"src\":\"1984:467:2\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":747,\"nodeType\":\"Block\",\"src\":\"2945:490:2\",\"statements\":[{\"assignments\":[671],\"declarations\":[{\"constant\":false,\"id\":671,\"mutability\":\"mutable\",\"name\":\"u\",\"nodeType\":\"VariableDeclaration\",\"scope\":747,\"src\":\"2956:20:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"},\"typeName\":{\"id\":670,\"name\":\"userStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":514,\"src\":\"2956:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"}},\"visibility\":\"internal\"}],\"id\":676,\"initialValue\":{\"baseExpression\":{\"id\":672,\"name\":\"userInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":527,\"src\":\"2979:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_userStruct_$514_storage_$\",\"typeString\":\"mapping(address => struct VoteFactory.userStruct storage ref)\"}},\"id\":675,\"indexExpression\":{\"expression\":{\"id\":673,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"2988:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":674,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"2988:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2979:20:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage\",\"typeString\":\"struct VoteFactory.userStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"2956:43:2\"},{\"assignments\":[678],\"declarations\":[{\"constant\":false,\"id\":678,\"mutability\":\"mutable\",\"name\":\"g\",\"nodeType\":\"VariableDeclaration\",\"scope\":747,\"src\":\"3010:21:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"},\"typeName\":{\"id\":677,\"name\":\"groupStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":500,\"src\":\"3010:11:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"}},\"visibility\":\"internal\"}],\"id\":682,\"initialValue\":{\"baseExpression\":{\"id\":679,\"name\":\"groupInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":518,\"src\":\"3034:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_groupStruct_$500_storage_$\",\"typeString\":\"mapping(uint256 => struct VoteFactory.groupStruct storage ref)\"}},\"id\":681,\"indexExpression\":{\"id\":680,\"name\":\"groupID\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":667,\"src\":\"3044:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"3034:18:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage\",\"typeString\":\"struct VoteFactory.groupStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"3010:42:2\"},{\"expression\":{\"id\":696,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"expression\":{\"id\":683,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":671,\"src\":\"3112:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":686,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"groups\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":511,\"src\":\"3112:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},\"id\":687,\"indexExpression\":{\"id\":685,\"name\":\"indexGroup\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":663,\"src\":\"3121:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"3112:20:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"baseExpression\":{\"expression\":{\"id\":688,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":671,\"src\":\"3135:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":689,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"groups\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":511,\"src\":\"3135:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},\"id\":695,\"indexExpression\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":694,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"expression\":{\"id\":690,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":671,\"src\":\"3144:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":691,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"groups\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":511,\"src\":\"3144:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},\"id\":692,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"src\":\"3144:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"-\",\"rightExpression\":{\"hexValue\":\"31\",\"id\":693,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"3162:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"src\":\"3144:19:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"3135:29:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"src\":\"3112:52:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"id\":697,\"nodeType\":\"ExpressionStatement\",\"src\":\"3112:52:2\"},{\"expression\":{\"id\":706,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"delete\",\"prefix\":true,\"src\":\"3175:36:2\",\"subExpression\":{\"baseExpression\":{\"expression\":{\"id\":698,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":671,\"src\":\"3182:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":699,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"groups\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":511,\"src\":\"3182:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},\"id\":705,\"indexExpression\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":704,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"expression\":{\"id\":700,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":671,\"src\":\"3191:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":701,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"groups\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":511,\"src\":\"3191:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},\"id\":702,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"src\":\"3191:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"-\",\"rightExpression\":{\"hexValue\":\"31\",\"id\":703,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"3209:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"src\":\"3191:19:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"3182:29:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":707,\"nodeType\":\"ExpressionStatement\",\"src\":\"3175:36:2\"},{\"expression\":{\"arguments\":[],\"expression\":{\"argumentTypes\":[],\"expression\":{\"expression\":{\"id\":708,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":671,\"src\":\"3222:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":711,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"groups\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":511,\"src\":\"3222:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},\"id\":712,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"pop\",\"nodeType\":\"MemberAccess\",\"src\":\"3222:12:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypop_nonpayable$__$returns$__$\",\"typeString\":\"function ()\"}},\"id\":713,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"3222:14:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":714,\"nodeType\":\"ExpressionStatement\",\"src\":\"3222:14:2\"},{\"expression\":{\"id\":728,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"expression\":{\"id\":715,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":678,\"src\":\"3296:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":718,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"members\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":499,\"src\":\"3296:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":719,\"indexExpression\":{\"id\":717,\"name\":\"indexMember\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":665,\"src\":\"3306:11:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"3296:22:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"baseExpression\":{\"expression\":{\"id\":720,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":678,\"src\":\"3321:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":721,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"members\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":499,\"src\":\"3321:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":727,\"indexExpression\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":726,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"expression\":{\"id\":722,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":678,\"src\":\"3331:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":723,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"members\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":499,\"src\":\"3331:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":724,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"src\":\"3331:16:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"-\",\"rightExpression\":{\"hexValue\":\"31\",\"id\":725,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"3350:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"src\":\"3331:20:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"3321:31:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"3296:56:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":729,\"nodeType\":\"ExpressionStatement\",\"src\":\"3296:56:2\"},{\"expression\":{\"id\":738,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"delete\",\"prefix\":true,\"src\":\"3363:38:2\",\"subExpression\":{\"baseExpression\":{\"expression\":{\"id\":730,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":678,\"src\":\"3370:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":731,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"members\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":499,\"src\":\"3370:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":737,\"indexExpression\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":736,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"expression\":{\"id\":732,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":678,\"src\":\"3380:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":733,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"members\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":499,\"src\":\"3380:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":734,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"src\":\"3380:16:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"-\",\"rightExpression\":{\"hexValue\":\"31\",\"id\":735,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"3399:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"src\":\"3380:20:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"3370:31:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":739,\"nodeType\":\"ExpressionStatement\",\"src\":\"3363:38:2\"},{\"expression\":{\"arguments\":[],\"expression\":{\"argumentTypes\":[],\"expression\":{\"expression\":{\"id\":740,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":678,\"src\":\"3412:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":743,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"members\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":499,\"src\":\"3412:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":744,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"pop\",\"nodeType\":\"MemberAccess\",\"src\":\"3412:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypop_nonpayable$__$returns$__$\",\"typeString\":\"function ()\"}},\"id\":745,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"3412:15:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":746,\"nodeType\":\"ExpressionStatement\",\"src\":\"3412:15:2\"}]},\"functionSelector\":\"3f2e1f60\",\"id\":748,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"leaveGroup\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":668,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":663,\"mutability\":\"mutable\",\"name\":\"indexGroup\",\"nodeType\":\"VariableDeclaration\",\"scope\":748,\"src\":\"2883:17:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"typeName\":{\"id\":662,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2883:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":665,\"mutability\":\"mutable\",\"name\":\"indexMember\",\"nodeType\":\"VariableDeclaration\",\"scope\":748,\"src\":\"2902:18:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"typeName\":{\"id\":664,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2902:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":667,\"mutability\":\"mutable\",\"name\":\"groupID\",\"nodeType\":\"VariableDeclaration\",\"scope\":748,\"src\":\"2922:14:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"typeName\":{\"id\":666,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2922:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"visibility\":\"internal\"}],\"src\":\"2882:55:2\"},\"returnParameters\":{\"id\":669,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2945:0:2\"},\"scope\":1103,\"src\":\"2863:572:2\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":792,\"nodeType\":\"Block\",\"src\":\"3555:235:2\",\"statements\":[{\"assignments\":[756],\"declarations\":[{\"constant\":false,\"id\":756,\"mutability\":\"mutable\",\"name\":\"isStatus\",\"nodeType\":\"VariableDeclaration\",\"scope\":792,\"src\":\"3566:13:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":755,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3566:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"id\":758,\"initialValue\":{\"hexValue\":\"66616c7365\",\"id\":757,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"3582:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"false\"},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"3566:21:2\"},{\"assignments\":[760],\"declarations\":[{\"constant\":false,\"id\":760,\"mutability\":\"mutable\",\"name\":\"u\",\"nodeType\":\"VariableDeclaration\",\"scope\":792,\"src\":\"3598:20:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"},\"typeName\":{\"id\":759,\"name\":\"userStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":514,\"src\":\"3598:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"}},\"visibility\":\"internal\"}],\"id\":765,\"initialValue\":{\"baseExpression\":{\"id\":761,\"name\":\"userInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":527,\"src\":\"3621:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_userStruct_$514_storage_$\",\"typeString\":\"mapping(address => struct VoteFactory.userStruct storage ref)\"}},\"id\":764,\"indexExpression\":{\"expression\":{\"id\":762,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3630:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":763,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"3630:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"3621:20:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage\",\"typeString\":\"struct VoteFactory.userStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"3598:43:2\"},{\"body\":{\"id\":788,\"nodeType\":\"Block\",\"src\":\"3695:62:2\",\"statements\":[{\"expression\":{\"id\":786,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":778,\"name\":\"isStatus\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":756,\"src\":\"3710:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"components\":[{\"commonType\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"id\":784,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"baseExpression\":{\"expression\":{\"id\":779,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":760,\"src\":\"3722:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":780,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"groups\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":511,\"src\":\"3722:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},\"id\":782,\"indexExpression\":{\"id\":781,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":767,\"src\":\"3731:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"3722:11:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"id\":783,\"name\":\"groupID\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":750,\"src\":\"3737:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"src\":\"3722:22:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"id\":785,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"3721:24:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"src\":\"3710:35:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":787,\"nodeType\":\"ExpressionStatement\",\"src\":\"3710:35:2\"}]},\"condition\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":774,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":770,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":767,\"src\":\"3669:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<\",\"rightExpression\":{\"expression\":{\"expression\":{\"id\":771,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":760,\"src\":\"3673:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":772,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"groups\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":511,\"src\":\"3673:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},\"id\":773,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"src\":\"3673:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"3669:19:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":789,\"initializationExpression\":{\"assignments\":[767],\"declarations\":[{\"constant\":false,\"id\":767,\"mutability\":\"mutable\",\"name\":\"i\",\"nodeType\":\"VariableDeclaration\",\"scope\":789,\"src\":\"3657:6:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":766,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3657:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"id\":769,\"initialValue\":{\"hexValue\":\"30\",\"id\":768,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"3666:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"3657:10:2\"},\"loopExpression\":{\"expression\":{\"id\":776,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"3690:3:2\",\"subExpression\":{\"id\":775,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":767,\"src\":\"3690:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":777,\"nodeType\":\"ExpressionStatement\",\"src\":\"3690:3:2\"},\"nodeType\":\"ForStatement\",\"src\":\"3652:105:2\"},{\"expression\":{\"id\":790,\"name\":\"isStatus\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":756,\"src\":\"3774:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"functionReturnParameters\":754,\"id\":791,\"nodeType\":\"Return\",\"src\":\"3767:15:2\"}]},\"functionSelector\":\"a9905aa0\",\"id\":793,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"isUserGroup\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":751,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":750,\"mutability\":\"mutable\",\"name\":\"groupID\",\"nodeType\":\"VariableDeclaration\",\"scope\":793,\"src\":\"3512:14:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"typeName\":{\"id\":749,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3512:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"visibility\":\"internal\"}],\"src\":\"3511:16:2\"},\"returnParameters\":{\"id\":754,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":753,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":793,\"src\":\"3549:4:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":752,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3549:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"3548:6:2\"},\"scope\":1103,\"src\":\"3491:299:2\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":818,\"nodeType\":\"Block\",\"src\":\"3914:141:2\",\"statements\":[{\"assignments\":[801],\"declarations\":[{\"constant\":false,\"id\":801,\"mutability\":\"mutable\",\"name\":\"g\",\"nodeType\":\"VariableDeclaration\",\"scope\":818,\"src\":\"3925:21:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"},\"typeName\":{\"id\":800,\"name\":\"groupStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":500,\"src\":\"3925:11:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"}},\"visibility\":\"internal\"}],\"id\":805,\"initialValue\":{\"baseExpression\":{\"id\":802,\"name\":\"groupInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":518,\"src\":\"3949:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_groupStruct_$500_storage_$\",\"typeString\":\"mapping(uint256 => struct VoteFactory.groupStruct storage ref)\"}},\"id\":804,\"indexExpression\":{\"id\":803,\"name\":\"groupID\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":795,\"src\":\"3959:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"3949:18:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage\",\"typeString\":\"struct VoteFactory.groupStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"3925:42:2\"},{\"assignments\":[807],\"declarations\":[{\"constant\":false,\"id\":807,\"mutability\":\"mutable\",\"name\":\"isExist\",\"nodeType\":\"VariableDeclaration\",\"scope\":818,\"src\":\"3978:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":806,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3978:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"id\":815,\"initialValue\":{\"id\":814,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"!\",\"prefix\":true,\"src\":\"3993:29:2\",\"subExpression\":{\"components\":[{\"arguments\":[{\"expression\":{\"id\":809,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":801,\"src\":\"4010:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":810,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":494,\"src\":\"4010:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},{\"hexValue\":\"\",\"id\":811,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"4018:2:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470\",\"typeString\":\"literal_string \\\"\\\"\"},\"value\":\"\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"},{\"typeIdentifier\":\"t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470\",\"typeString\":\"literal_string \\\"\\\"\"}],\"id\":808,\"name\":\"compareStrings\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1102,\"src\":\"3995:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bool_$\",\"typeString\":\"function (string memory,string memory) pure returns (bool)\"}},\"id\":812,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"3995:26:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"id\":813,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"3994:28:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"3978:44:2\"},{\"expression\":{\"id\":816,\"name\":\"isExist\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":807,\"src\":\"4040:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"functionReturnParameters\":799,\"id\":817,\"nodeType\":\"Return\",\"src\":\"4033:14:2\"}]},\"functionSelector\":\"b5008c0f\",\"id\":819,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"isGroup\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":796,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":795,\"mutability\":\"mutable\",\"name\":\"groupID\",\"nodeType\":\"VariableDeclaration\",\"scope\":819,\"src\":\"3871:14:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"typeName\":{\"id\":794,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3871:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"visibility\":\"internal\"}],\"src\":\"3870:16:2\"},\"returnParameters\":{\"id\":799,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":798,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":819,\"src\":\"3908:4:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":797,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3908:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"3907:6:2\"},\"scope\":1103,\"src\":\"3854:201:2\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":838,\"nodeType\":\"Block\",\"src\":\"4177:95:2\",\"statements\":[{\"assignments\":[827],\"declarations\":[{\"constant\":false,\"id\":827,\"mutability\":\"mutable\",\"name\":\"u\",\"nodeType\":\"VariableDeclaration\",\"scope\":838,\"src\":\"4188:20:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"},\"typeName\":{\"id\":826,\"name\":\"userStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":514,\"src\":\"4188:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"}},\"visibility\":\"internal\"}],\"id\":832,\"initialValue\":{\"baseExpression\":{\"id\":828,\"name\":\"userInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":527,\"src\":\"4211:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_userStruct_$514_storage_$\",\"typeString\":\"mapping(address => struct VoteFactory.userStruct storage ref)\"}},\"id\":831,\"indexExpression\":{\"expression\":{\"id\":829,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4220:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":830,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"4220:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4211:20:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage\",\"typeString\":\"struct VoteFactory.userStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"4188:43:2\"},{\"expression\":{\"baseExpression\":{\"expression\":{\"id\":833,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":827,\"src\":\"4249:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":834,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"groups\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":511,\"src\":\"4249:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},\"id\":836,\"indexExpression\":{\"id\":835,\"name\":\"index\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":821,\"src\":\"4258:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4249:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"functionReturnParameters\":825,\"id\":837,\"nodeType\":\"Return\",\"src\":\"4242:22:2\"}]},\"functionSelector\":\"64363720\",\"id\":839,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getUserGroup\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":822,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":821,\"mutability\":\"mutable\",\"name\":\"index\",\"nodeType\":\"VariableDeclaration\",\"scope\":839,\"src\":\"4134:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"typeName\":{\"id\":820,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4134:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"visibility\":\"internal\"}],\"src\":\"4133:14:2\"},\"returnParameters\":{\"id\":825,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":824,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":839,\"src\":\"4169:6:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"typeName\":{\"id\":823,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4169:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"visibility\":\"internal\"}],\"src\":\"4168:8:2\"},\"scope\":1103,\"src\":\"4112:160:2\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":855,\"nodeType\":\"Block\",\"src\":\"4393:88:2\",\"statements\":[{\"assignments\":[846],\"declarations\":[{\"constant\":false,\"id\":846,\"mutability\":\"mutable\",\"name\":\"u\",\"nodeType\":\"VariableDeclaration\",\"scope\":855,\"src\":\"4404:20:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"},\"typeName\":{\"id\":845,\"name\":\"userStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":514,\"src\":\"4404:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"}},\"visibility\":\"internal\"}],\"id\":851,\"initialValue\":{\"baseExpression\":{\"id\":847,\"name\":\"userInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":527,\"src\":\"4427:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_userStruct_$514_storage_$\",\"typeString\":\"mapping(address => struct VoteFactory.userStruct storage ref)\"}},\"id\":850,\"indexExpression\":{\"expression\":{\"id\":848,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4436:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":849,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"4436:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4427:20:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage\",\"typeString\":\"struct VoteFactory.userStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"4404:43:2\"},{\"expression\":{\"expression\":{\"id\":852,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":846,\"src\":\"4465:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":853,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"groups\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":511,\"src\":\"4465:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},\"functionReturnParameters\":844,\"id\":854,\"nodeType\":\"Return\",\"src\":\"4458:15:2\"}]},\"functionSelector\":\"d2f4a802\",\"id\":856,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getUserAllGroups\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":840,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"4352:2:2\"},\"returnParameters\":{\"id\":844,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":843,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":856,\"src\":\"4376:15:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_memory_ptr\",\"typeString\":\"uint32[]\"},\"typeName\":{\"baseType\":{\"id\":841,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4376:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"id\":842,\"nodeType\":\"ArrayTypeName\",\"src\":\"4376:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage_ptr\",\"typeString\":\"uint32[]\"}},\"visibility\":\"internal\"}],\"src\":\"4375:17:2\"},\"scope\":1103,\"src\":\"4327:154:2\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":873,\"nodeType\":\"Block\",\"src\":\"4612:88:2\",\"statements\":[{\"assignments\":[865],\"declarations\":[{\"constant\":false,\"id\":865,\"mutability\":\"mutable\",\"name\":\"g\",\"nodeType\":\"VariableDeclaration\",\"scope\":873,\"src\":\"4623:21:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"},\"typeName\":{\"id\":864,\"name\":\"groupStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":500,\"src\":\"4623:11:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"}},\"visibility\":\"internal\"}],\"id\":869,\"initialValue\":{\"baseExpression\":{\"id\":866,\"name\":\"groupInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":518,\"src\":\"4647:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_groupStruct_$500_storage_$\",\"typeString\":\"mapping(uint256 => struct VoteFactory.groupStruct storage ref)\"}},\"id\":868,\"indexExpression\":{\"id\":867,\"name\":\"groupID\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":858,\"src\":\"4657:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4647:18:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage\",\"typeString\":\"struct VoteFactory.groupStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"4623:42:2\"},{\"expression\":{\"expression\":{\"id\":870,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":865,\"src\":\"4683:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":871,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"members\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":499,\"src\":\"4683:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"functionReturnParameters\":863,\"id\":872,\"nodeType\":\"Return\",\"src\":\"4676:16:2\"}]},\"functionSelector\":\"b0f97938\",\"id\":874,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getAllMembers\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":859,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":858,\"mutability\":\"mutable\",\"name\":\"groupID\",\"nodeType\":\"VariableDeclaration\",\"scope\":874,\"src\":\"4557:14:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"typeName\":{\"id\":857,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4557:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"visibility\":\"internal\"}],\"src\":\"4556:16:2\"},\"returnParameters\":{\"id\":863,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":862,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":874,\"src\":\"4594:16:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":860,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4594:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":861,\"nodeType\":\"ArrayTypeName\",\"src\":\"4594:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"}],\"src\":\"4593:18:2\"},\"scope\":1103,\"src\":\"4534:166:2\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":905,\"nodeType\":\"Block\",\"src\":\"4862:126:2\",\"statements\":[{\"assignments\":[889],\"declarations\":[{\"constant\":false,\"id\":889,\"mutability\":\"mutable\",\"name\":\"g\",\"nodeType\":\"VariableDeclaration\",\"scope\":905,\"src\":\"4873:21:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"},\"typeName\":{\"id\":888,\"name\":\"groupStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":500,\"src\":\"4873:11:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"}},\"visibility\":\"internal\"}],\"id\":893,\"initialValue\":{\"baseExpression\":{\"id\":890,\"name\":\"groupInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":518,\"src\":\"4897:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_groupStruct_$500_storage_$\",\"typeString\":\"mapping(uint256 => struct VoteFactory.groupStruct storage ref)\"}},\"id\":892,\"indexExpression\":{\"id\":891,\"name\":\"id\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":876,\"src\":\"4907:2:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint8\",\"typeString\":\"uint8\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4897:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage\",\"typeString\":\"struct VoteFactory.groupStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"4873:37:2\"},{\"expression\":{\"components\":[{\"expression\":{\"id\":894,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":889,\"src\":\"4929:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":895,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":494,\"src\":\"4929:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},{\"expression\":{\"id\":896,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":889,\"src\":\"4937:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":897,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":496,\"src\":\"4937:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},{\"expression\":{\"id\":898,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":889,\"src\":\"4952:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":899,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"members\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":499,\"src\":\"4952:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},{\"expression\":{\"expression\":{\"id\":900,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":889,\"src\":\"4963:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$500_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":901,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"members\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":499,\"src\":\"4963:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":902,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"src\":\"4963:16:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"id\":903,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"4928:52:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$_t_string_storage_$_t_string_storage_$_t_array$_t_address_$dyn_storage_$_t_uint256_$\",\"typeString\":\"tuple(string storage ref,string storage ref,address[] storage ref,uint256)\"}},\"functionReturnParameters\":887,\"id\":904,\"nodeType\":\"Return\",\"src\":\"4921:59:2\"}]},\"functionSelector\":\"6638a0fa\",\"id\":906,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getGroup\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":877,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":876,\"mutability\":\"mutable\",\"name\":\"id\",\"nodeType\":\"VariableDeclaration\",\"scope\":906,\"src\":\"4778:8:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint8\",\"typeString\":\"uint8\"},\"typeName\":{\"id\":875,\"name\":\"uint8\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4778:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint8\",\"typeString\":\"uint8\"}},\"visibility\":\"internal\"}],\"src\":\"4777:10:2\"},\"returnParameters\":{\"id\":887,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":879,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":906,\"src\":\"4808:13:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":878,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4808:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":881,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":906,\"src\":\"4823:13:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":880,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4823:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":884,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":906,\"src\":\"4838:16:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":882,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4838:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":883,\"nodeType\":\"ArrayTypeName\",\"src\":\"4838:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":886,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":906,\"src\":\"4856:4:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":885,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4856:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"4807:54:2\"},\"scope\":1103,\"src\":\"4760:228:2\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":914,\"nodeType\":\"Block\",\"src\":\"5066:40:2\",\"statements\":[{\"expression\":{\"id\":912,\"name\":\"existingGroups\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":533,\"src\":\"5084:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},\"functionReturnParameters\":911,\"id\":913,\"nodeType\":\"Return\",\"src\":\"5077:21:2\"}]},\"functionSelector\":\"0073d7ae\",\"id\":915,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getExistingGroups\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":907,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"5026:2:2\"},\"returnParameters\":{\"id\":911,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":910,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":915,\"src\":\"5049:15:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_memory_ptr\",\"typeString\":\"uint32[]\"},\"typeName\":{\"baseType\":{\"id\":908,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5049:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"id\":909,\"nodeType\":\"ArrayTypeName\",\"src\":\"5049:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage_ptr\",\"typeString\":\"uint32[]\"}},\"visibility\":\"internal\"}],\"src\":\"5048:17:2\"},\"scope\":1103,\"src\":\"5000:106:2\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":971,\"nodeType\":\"Block\",\"src\":\"5212:292:2\",\"statements\":[{\"assignments\":[925],\"declarations\":[{\"constant\":false,\"id\":925,\"mutability\":\"mutable\",\"name\":\"u\",\"nodeType\":\"VariableDeclaration\",\"scope\":971,\"src\":\"5223:20:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"},\"typeName\":{\"id\":924,\"name\":\"userStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":514,\"src\":\"5223:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"}},\"visibility\":\"internal\"}],\"id\":930,\"initialValue\":{\"baseExpression\":{\"id\":926,\"name\":\"userInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":527,\"src\":\"5246:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_userStruct_$514_storage_$\",\"typeString\":\"mapping(address => struct VoteFactory.userStruct storage ref)\"}},\"id\":929,\"indexExpression\":{\"expression\":{\"id\":927,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"5255:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":928,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"5255:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"5246:20:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage\",\"typeString\":\"struct VoteFactory.userStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"5223:43:2\"},{\"expression\":{\"id\":935,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":931,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":925,\"src\":\"5291:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":933,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":504,\"src\":\"5291:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":934,\"name\":\"name\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":917,\"src\":\"5300:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"5291:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":936,\"nodeType\":\"ExpressionStatement\",\"src\":\"5291:13:2\"},{\"expression\":{\"id\":941,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":937,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":925,\"src\":\"5315:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":939,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"email\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":506,\"src\":\"5315:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":940,\"name\":\"email\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":919,\"src\":\"5325:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"5315:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":942,\"nodeType\":\"ExpressionStatement\",\"src\":\"5315:15:2\"},{\"expression\":{\"id\":947,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":943,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":925,\"src\":\"5341:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":945,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"password\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":508,\"src\":\"5341:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":946,\"name\":\"password\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":921,\"src\":\"5354:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"5341:21:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":948,\"nodeType\":\"ExpressionStatement\",\"src\":\"5341:21:2\"},{\"expression\":{\"id\":954,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":949,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":925,\"src\":\"5373:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":951,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"userAddress\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":502,\"src\":\"5373:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"expression\":{\"id\":952,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"5390:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":953,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"5390:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"5373:27:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":955,\"nodeType\":\"ExpressionStatement\",\"src\":\"5373:27:2\"},{\"expression\":{\"id\":960,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":956,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":925,\"src\":\"5411:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":958,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"isAdmin\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":513,\"src\":\"5411:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"hexValue\":\"74727565\",\"id\":959,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5423:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"src\":\"5411:16:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":961,\"nodeType\":\"ExpressionStatement\",\"src\":\"5411:16:2\"},{\"condition\":{\"arguments\":[{\"hexValue\":\"31\",\"id\":963,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5450:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"}],\"id\":962,\"name\":\"isGroup\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":819,\"src\":\"5442:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_view$_t_uint32_$returns$_t_bool_$\",\"typeString\":\"function (uint32) view returns (bool)\"}},\"id\":964,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5442:10:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":970,\"nodeType\":\"IfStatement\",\"src\":\"5438:59:2\",\"trueBody\":{\"id\":969,\"nodeType\":\"Block\",\"src\":\"5454:43:2\",\"statements\":[{\"expression\":{\"arguments\":[{\"hexValue\":\"31\",\"id\":966,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5483:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"}],\"id\":965,\"name\":\"registerGroup\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":661,\"src\":\"5469:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_nonpayable$_t_uint32_$returns$__$\",\"typeString\":\"function (uint32)\"}},\"id\":967,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5469:16:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":968,\"nodeType\":\"ExpressionStatement\",\"src\":\"5469:16:2\"}]}}]},\"functionSelector\":\"d637dcfa\",\"id\":972,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"registerUser\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":922,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":917,\"mutability\":\"mutable\",\"name\":\"name\",\"nodeType\":\"VariableDeclaration\",\"scope\":972,\"src\":\"5140:18:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":916,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5140:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":919,\"mutability\":\"mutable\",\"name\":\"email\",\"nodeType\":\"VariableDeclaration\",\"scope\":972,\"src\":\"5160:19:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":918,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5160:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":921,\"mutability\":\"mutable\",\"name\":\"password\",\"nodeType\":\"VariableDeclaration\",\"scope\":972,\"src\":\"5181:22:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":920,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5181:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"src\":\"5139:65:2\"},\"returnParameters\":{\"id\":923,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"5212:0:2\"},\"scope\":1103,\"src\":\"5118:386:2\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":995,\"nodeType\":\"Block\",\"src\":\"5551:112:2\",\"statements\":[{\"assignments\":[978],\"declarations\":[{\"constant\":false,\"id\":978,\"mutability\":\"mutable\",\"name\":\"newVote\",\"nodeType\":\"VariableDeclaration\",\"scope\":995,\"src\":\"5562:15:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":977,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5562:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"id\":988,\"initialValue\":{\"arguments\":[{\"arguments\":[{\"expression\":{\"id\":983,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"5597:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":984,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"5597:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},{\"id\":985,\"name\":\"typeOf\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":974,\"src\":\"5609:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":982,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"NewExpression\",\"src\":\"5588:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_creation_nonpayable$_t_address_$_t_uint256_$returns$_t_contract$_Vote_$489_$\",\"typeString\":\"function (address,uint256) returns (contract Vote)\"},\"typeName\":{\"id\":981,\"name\":\"Vote\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":489,\"src\":\"5592:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_Vote_$489\",\"typeString\":\"contract Vote\"}}},\"id\":986,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5588:28:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_Vote_$489\",\"typeString\":\"contract Vote\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_contract$_Vote_$489\",\"typeString\":\"contract Vote\"}],\"id\":980,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"nodeType\":\"ElementaryTypeNameExpression\",\"src\":\"5580:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_type$_t_address_$\",\"typeString\":\"type(address)\"},\"typeName\":{\"id\":979,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5580:7:2\",\"typeDescriptions\":{}}},\"id\":987,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"typeConversion\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5580:37:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"5562:55:2\"},{\"expression\":{\"arguments\":[{\"id\":992,\"name\":\"newVote\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":978,\"src\":\"5647:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"expression\":{\"id\":989,\"name\":\"deployedVotes\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":523,\"src\":\"5628:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":991,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"push\",\"nodeType\":\"MemberAccess\",\"src\":\"5628:18:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypush_nonpayable$_t_address_$returns$__$\",\"typeString\":\"function (address)\"}},\"id\":993,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5628:27:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":994,\"nodeType\":\"ExpressionStatement\",\"src\":\"5628:27:2\"}]},\"functionSelector\":\"fa954aa0\",\"id\":996,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"createVote\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":975,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":974,\"mutability\":\"mutable\",\"name\":\"typeOf\",\"nodeType\":\"VariableDeclaration\",\"scope\":996,\"src\":\"5532:11:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":973,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5532:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"5531:13:2\"},\"returnParameters\":{\"id\":976,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"5551:0:2\"},\"scope\":1103,\"src\":\"5512:151:2\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":1035,\"nodeType\":\"Block\",\"src\":\"5786:207:2\",\"statements\":[{\"assignments\":[1011],\"declarations\":[{\"constant\":false,\"id\":1011,\"mutability\":\"mutable\",\"name\":\"u\",\"nodeType\":\"VariableDeclaration\",\"scope\":1035,\"src\":\"5796:20:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"},\"typeName\":{\"id\":1010,\"name\":\"userStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":514,\"src\":\"5796:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"}},\"visibility\":\"internal\"}],\"id\":1016,\"initialValue\":{\"baseExpression\":{\"id\":1012,\"name\":\"userInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":527,\"src\":\"5819:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_userStruct_$514_storage_$\",\"typeString\":\"mapping(address => struct VoteFactory.userStruct storage ref)\"}},\"id\":1015,\"indexExpression\":{\"expression\":{\"id\":1013,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"5828:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":1014,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"5828:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"5819:20:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage\",\"typeString\":\"struct VoteFactory.userStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"5796:43:2\"},{\"expression\":{\"arguments\":[{\"arguments\":[{\"id\":1019,\"name\":\"password\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":998,\"src\":\"5872:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},{\"expression\":{\"id\":1020,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1011,\"src\":\"5882:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":1021,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"password\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":508,\"src\":\"5882:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"},{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}],\"id\":1018,\"name\":\"compareStrings\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1102,\"src\":\"5857:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bool_$\",\"typeString\":\"function (string memory,string memory) pure returns (bool)\"}},\"id\":1022,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5857:36:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":1017,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"5849:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":1023,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5849:45:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":1024,\"nodeType\":\"ExpressionStatement\",\"src\":\"5849:45:2\"},{\"expression\":{\"components\":[{\"expression\":{\"id\":1025,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1011,\"src\":\"5948:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":1026,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":504,\"src\":\"5948:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},{\"expression\":{\"id\":1027,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1011,\"src\":\"5956:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":1028,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"email\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":506,\"src\":\"5956:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},{\"expression\":{\"id\":1029,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1011,\"src\":\"5965:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":1030,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"groups\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":511,\"src\":\"5965:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},{\"expression\":{\"id\":1031,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1011,\"src\":\"5975:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":1032,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"isAdmin\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":513,\"src\":\"5975:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"id\":1033,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"5947:38:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$_t_string_storage_$_t_string_storage_$_t_array$_t_uint32_$dyn_storage_$_t_bool_$\",\"typeString\":\"tuple(string storage ref,string storage ref,uint32[] storage ref,bool)\"}},\"functionReturnParameters\":1009,\"id\":1034,\"nodeType\":\"Return\",\"src\":\"5941:44:2\"}]},\"functionSelector\":\"1c14ce5e\",\"id\":1036,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"loginUser\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":999,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":998,\"mutability\":\"mutable\",\"name\":\"password\",\"nodeType\":\"VariableDeclaration\",\"scope\":1036,\"src\":\"5688:22:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":997,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5688:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"src\":\"5687:24:2\"},\"returnParameters\":{\"id\":1009,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":1001,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":1036,\"src\":\"5733:13:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":1000,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5733:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":1003,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":1036,\"src\":\"5748:13:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":1002,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5748:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":1006,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":1036,\"src\":\"5763:15:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_memory_ptr\",\"typeString\":\"uint32[]\"},\"typeName\":{\"baseType\":{\"id\":1004,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5763:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"id\":1005,\"nodeType\":\"ArrayTypeName\",\"src\":\"5763:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage_ptr\",\"typeString\":\"uint32[]\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":1008,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":1036,\"src\":\"5780:4:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":1007,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5780:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"5732:53:2\"},\"scope\":1103,\"src\":\"5669:324:2\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":1065,\"nodeType\":\"Block\",\"src\":\"6126:117:2\",\"statements\":[{\"assignments\":[1049],\"declarations\":[{\"constant\":false,\"id\":1049,\"mutability\":\"mutable\",\"name\":\"u\",\"nodeType\":\"VariableDeclaration\",\"scope\":1065,\"src\":\"6137:20:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"},\"typeName\":{\"id\":1048,\"name\":\"userStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":514,\"src\":\"6137:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"}},\"visibility\":\"internal\"}],\"id\":1054,\"initialValue\":{\"baseExpression\":{\"id\":1050,\"name\":\"userInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":527,\"src\":\"6160:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_userStruct_$514_storage_$\",\"typeString\":\"mapping(address => struct VoteFactory.userStruct storage ref)\"}},\"id\":1053,\"indexExpression\":{\"expression\":{\"id\":1051,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"6169:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":1052,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"6169:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"6160:20:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage\",\"typeString\":\"struct VoteFactory.userStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"6137:43:2\"},{\"expression\":{\"components\":[{\"expression\":{\"id\":1055,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1049,\"src\":\"6198:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":1056,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":504,\"src\":\"6198:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},{\"expression\":{\"id\":1057,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1049,\"src\":\"6206:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":1058,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"email\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":506,\"src\":\"6206:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},{\"expression\":{\"id\":1059,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1049,\"src\":\"6215:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":1060,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"groups\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":511,\"src\":\"6215:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},{\"expression\":{\"id\":1061,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1049,\"src\":\"6225:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$514_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":1062,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"isAdmin\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":513,\"src\":\"6225:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"id\":1063,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"6197:38:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$_t_string_storage_$_t_string_storage_$_t_array$_t_uint32_$dyn_storage_$_t_bool_$\",\"typeString\":\"tuple(string storage ref,string storage ref,uint32[] storage ref,bool)\"}},\"functionReturnParameters\":1047,\"id\":1064,\"nodeType\":\"Return\",\"src\":\"6191:44:2\"}]},\"functionSelector\":\"832880e7\",\"id\":1066,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getUser\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":1037,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"6050:2:2\"},\"returnParameters\":{\"id\":1047,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":1039,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":1066,\"src\":\"6074:13:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":1038,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"6074:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":1041,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":1066,\"src\":\"6089:13:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":1040,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"6089:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":1044,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":1066,\"src\":\"6104:15:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_memory_ptr\",\"typeString\":\"uint32[]\"},\"typeName\":{\"baseType\":{\"id\":1042,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"6104:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"id\":1043,\"nodeType\":\"ArrayTypeName\",\"src\":\"6104:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage_ptr\",\"typeString\":\"uint32[]\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":1046,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":1066,\"src\":\"6121:4:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":1045,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"6121:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"6073:53:2\"},\"scope\":1103,\"src\":\"6034:209:2\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":1074,\"nodeType\":\"Block\",\"src\":\"6322:39:2\",\"statements\":[{\"expression\":{\"id\":1072,\"name\":\"deployedVotes\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":523,\"src\":\"6340:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"functionReturnParameters\":1071,\"id\":1073,\"nodeType\":\"Return\",\"src\":\"6333:20:2\"}]},\"functionSelector\":\"ca9cdfff\",\"id\":1075,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getDeployedVotes\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":1067,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"6280:2:2\"},\"returnParameters\":{\"id\":1071,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":1070,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":1075,\"src\":\"6304:16:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":1068,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"6304:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":1069,\"nodeType\":\"ArrayTypeName\",\"src\":\"6304:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"}],\"src\":\"6303:18:2\"},\"scope\":1103,\"src\":\"6255:106:2\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":1101,\"nodeType\":\"Block\",\"src\":\"6633:96:2\",\"statements\":[{\"expression\":{\"components\":[{\"commonType\":{\"typeIdentifier\":\"t_bytes32\",\"typeString\":\"bytes32\"},\"id\":1098,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"arguments\":[{\"arguments\":[{\"components\":[{\"id\":1087,\"name\":\"a\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1077,\"src\":\"6680:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}}],\"id\":1088,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"6679:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}],\"expression\":{\"id\":1085,\"name\":\"abi\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-1,\"src\":\"6662:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_abi\",\"typeString\":\"abi\"}},\"id\":1086,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"memberName\":\"encodePacked\",\"nodeType\":\"MemberAccess\",\"src\":\"6662:16:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$\",\"typeString\":\"function () pure returns (bytes memory)\"}},\"id\":1089,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"6662:21:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_bytes_memory_ptr\",\"typeString\":\"bytes memory\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bytes_memory_ptr\",\"typeString\":\"bytes memory\"}],\"id\":1084,\"name\":\"keccak256\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-8,\"src\":\"6652:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$\",\"typeString\":\"function (bytes memory) pure returns (bytes32)\"}},\"id\":1090,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"6652:32:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_bytes32\",\"typeString\":\"bytes32\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"arguments\":[{\"arguments\":[{\"components\":[{\"id\":1094,\"name\":\"b\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1079,\"src\":\"6716:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}}],\"id\":1095,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"6715:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}],\"expression\":{\"id\":1092,\"name\":\"abi\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-1,\"src\":\"6698:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_abi\",\"typeString\":\"abi\"}},\"id\":1093,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"memberName\":\"encodePacked\",\"nodeType\":\"MemberAccess\",\"src\":\"6698:16:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$\",\"typeString\":\"function () pure returns (bytes memory)\"}},\"id\":1096,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"6698:21:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_bytes_memory_ptr\",\"typeString\":\"bytes memory\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bytes_memory_ptr\",\"typeString\":\"bytes memory\"}],\"id\":1091,\"name\":\"keccak256\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-8,\"src\":\"6688:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$\",\"typeString\":\"function (bytes memory) pure returns (bytes32)\"}},\"id\":1097,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"6688:32:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_bytes32\",\"typeString\":\"bytes32\"}},\"src\":\"6652:68:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"id\":1099,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"6651:70:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"functionReturnParameters\":1083,\"id\":1100,\"nodeType\":\"Return\",\"src\":\"6644:77:2\"}]},\"functionSelector\":\"bed34bba\",\"id\":1102,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"compareStrings\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":1080,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":1077,\"mutability\":\"mutable\",\"name\":\"a\",\"nodeType\":\"VariableDeclaration\",\"scope\":1102,\"src\":\"6572:15:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":1076,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"6572:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":1079,\"mutability\":\"mutable\",\"name\":\"b\",\"nodeType\":\"VariableDeclaration\",\"scope\":1102,\"src\":\"6589:15:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":1078,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"6589:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"src\":\"6571:34:2\"},\"returnParameters\":{\"id\":1083,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":1082,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":1102,\"src\":\"6627:4:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":1081,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"6627:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"6626:6:2\"},\"scope\":1103,\"src\":\"6548:181:2\",\"stateMutability\":\"pure\",\"virtual\":false,\"visibility\":\"public\"}],\"scope\":1104,\"src\":\"92:6643:2\"}],\"src\":\"0:6735:2\"},\"legacyAST\":{\"attributes\":{\"absolutePath\":\"/C/Users/foubroker/Desktop/BAM/voting-at-mcgill-2/contracts/VoteFactory.sol\",\"exportedSymbols\":{\"Vote\":[489],\"VoteFactory\":[1103]},\"license\":\"UNLICENSED\"},\"children\":[{\"attributes\":{\"literals\":[\"solidity\",\"^\",\"0.7\",\".4\"]},\"id\":491,\"name\":\"PragmaDirective\",\"src\":\"0:23:2\"},{\"attributes\":{\"SourceUnit\":490,\"absolutePath\":\"/C/Users/foubroker/Desktop/BAM/voting-at-mcgill-2/contracts/Vote.sol\",\"file\":\"./Vote.sol\",\"scope\":1104,\"symbolAliases\":[null],\"unitAlias\":\"\"},\"id\":492,\"name\":\"ImportDirective\",\"src\":\"68:20:2\"},{\"attributes\":{\"abstract\":false,\"baseContracts\":[null],\"contractDependencies\":[489],\"contractKind\":\"contract\",\"fullyImplemented\":true,\"linearizedBaseContracts\":[1103],\"name\":\"VoteFactory\",\"scope\":1104},\"children\":[{\"attributes\":{\"canonicalName\":\"VoteFactory.groupStruct\",\"name\":\"groupStruct\",\"scope\":1103,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"name\",\"scope\":500,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":493,\"name\":\"ElementaryTypeName\",\"src\":\"202:6:2\"}],\"id\":494,\"name\":\"VariableDeclaration\",\"src\":\"202:11:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":500,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":495,\"name\":\"ElementaryTypeName\",\"src\":\"224:6:2\"}],\"id\":496,\"name\":\"VariableDeclaration\",\"src\":\"224:18:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"members\",\"scope\":500,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":497,\"name\":\"ElementaryTypeName\",\"src\":\"253:7:2\"}],\"id\":498,\"name\":\"ArrayTypeName\",\"src\":\"253:9:2\"}],\"id\":499,\"name\":\"VariableDeclaration\",\"src\":\"253:17:2\"}],\"id\":500,\"name\":\"StructDefinition\",\"src\":\"172:155:2\"},{\"attributes\":{\"canonicalName\":\"VoteFactory.userStruct\",\"name\":\"userStruct\",\"scope\":1103,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"userAddress\",\"scope\":514,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":501,\"name\":\"ElementaryTypeName\",\"src\":\"414:7:2\"}],\"id\":502,\"name\":\"VariableDeclaration\",\"src\":\"414:19:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"name\",\"scope\":514,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":503,\"name\":\"ElementaryTypeName\",\"src\":\"444:6:2\"}],\"id\":504,\"name\":\"VariableDeclaration\",\"src\":\"444:11:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"email\",\"scope\":514,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":505,\"name\":\"ElementaryTypeName\",\"src\":\"466:6:2\"}],\"id\":506,\"name\":\"VariableDeclaration\",\"src\":\"466:12:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"password\",\"scope\":514,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":507,\"name\":\"ElementaryTypeName\",\"src\":\"489:6:2\"}],\"id\":508,\"name\":\"VariableDeclaration\",\"src\":\"489:15:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"groups\",\"scope\":514,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint32[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"uint32[]\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":509,\"name\":\"ElementaryTypeName\",\"src\":\"624:6:2\"}],\"id\":510,\"name\":\"ArrayTypeName\",\"src\":\"624:8:2\"}],\"id\":511,\"name\":\"VariableDeclaration\",\"src\":\"624:15:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"isAdmin\",\"scope\":514,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"bool\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":512,\"name\":\"ElementaryTypeName\",\"src\":\"691:4:2\"}],\"id\":513,\"name\":\"VariableDeclaration\",\"src\":\"691:12:2\"}],\"id\":514,\"name\":\"StructDefinition\",\"src\":\"385:326:2\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"03d480f3\",\"mutability\":\"mutable\",\"name\":\"groupInfo\",\"scope\":1103,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"mapping(uint256 => struct VoteFactory.groupStruct)\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"type\":\"mapping(uint256 => struct VoteFactory.groupStruct)\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":515,\"name\":\"ElementaryTypeName\",\"src\":\"731:4:2\"},{\"attributes\":{\"name\":\"groupStruct\",\"referencedDeclaration\":500,\"type\":\"struct VoteFactory.groupStruct\"},\"id\":516,\"name\":\"UserDefinedTypeName\",\"src\":\"739:11:2\"}],\"id\":517,\"name\":\"Mapping\",\"src\":\"723:28:2\"}],\"id\":518,\"name\":\"VariableDeclaration\",\"src\":\"723:45:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"groupCount\",\"scope\":1103,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"uint32\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":519,\"name\":\"ElementaryTypeName\",\"src\":\"804:6:2\"}],\"id\":520,\"name\":\"VariableDeclaration\",\"src\":\"804:17:2\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"c142ab00\",\"mutability\":\"mutable\",\"name\":\"deployedVotes\",\"scope\":1103,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":521,\"name\":\"ElementaryTypeName\",\"src\":\"828:7:2\"}],\"id\":522,\"name\":\"ArrayTypeName\",\"src\":\"828:9:2\"}],\"id\":523,\"name\":\"VariableDeclaration\",\"src\":\"828:30:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"userInfo\",\"scope\":1103,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"mapping(address => struct VoteFactory.userStruct)\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"mapping(address => struct VoteFactory.userStruct)\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"type\":\"address\"},\"id\":524,\"name\":\"ElementaryTypeName\",\"src\":\"873:7:2\"},{\"attributes\":{\"name\":\"userStruct\",\"referencedDeclaration\":514,\"type\":\"struct VoteFactory.userStruct\"},\"id\":525,\"name\":\"UserDefinedTypeName\",\"src\":\"884:10:2\"}],\"id\":526,\"name\":\"Mapping\",\"src\":\"865:30:2\"}],\"id\":527,\"name\":\"VariableDeclaration\",\"src\":\"865:39:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"defaultGroupID\",\"scope\":1103,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"uint32\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":528,\"name\":\"ElementaryTypeName\",\"src\":\"911:6:2\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":529,\"name\":\"Literal\",\"src\":\"935:1:2\"}],\"id\":530,\"name\":\"VariableDeclaration\",\"src\":\"911:25:2\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"e670d800\",\"mutability\":\"mutable\",\"name\":\"existingGroups\",\"scope\":1103,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"uint32[]\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"type\":\"uint32[]\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":531,\"name\":\"ElementaryTypeName\",\"src\":\"1000:6:2\"}],\"id\":532,\"name\":\"ArrayTypeName\",\"src\":\"1000:8:2\"}],\"id\":533,\"name\":\"VariableDeclaration\",\"src\":\"1000:30:2\"},{\"attributes\":{\"functionSelector\":\"bcab1fe3\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"createGroup\",\"scope\":1103,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"name\",\"scope\":603,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":534,\"name\":\"ElementaryTypeName\",\"src\":\"1276:6:2\"}],\"id\":535,\"name\":\"VariableDeclaration\",\"src\":\"1276:18:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":603,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":536,\"name\":\"ElementaryTypeName\",\"src\":\"1296:6:2\"}],\"id\":537,\"name\":\"VariableDeclaration\",\"src\":\"1296:25:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"groupID\",\"scope\":603,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint32\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":538,\"name\":\"ElementaryTypeName\",\"src\":\"1323:6:2\"}],\"id\":539,\"name\":\"VariableDeclaration\",\"src\":\"1323:14:2\"}],\"id\":540,\"name\":\"ParameterList\",\"src\":\"1275:63:2\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":541,\"name\":\"ParameterList\",\"src\":\"1346:0:2\"},{\"children\":[{\"attributes\":{},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"!\",\"prefix\":true,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"bool\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"}],\"overloadedDeclarations\":[null],\"referencedDeclaration\":819,\"type\":\"function (uint32) view returns (bool)\",\"value\":\"isGroup\"},\"id\":542,\"name\":\"Identifier\",\"src\":\"1413:7:2\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":543,\"name\":\"Literal\",\"src\":\"1421:1:2\"}],\"id\":544,\"name\":\"FunctionCall\",\"src\":\"1413:10:2\"}],\"id\":545,\"name\":\"UnaryOperation\",\"src\":\"1412:11:2\"},{\"children\":[{\"attributes\":{\"assignments\":[547]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"studentGroup\",\"scope\":573,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.groupStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"groupStruct\",\"referencedDeclaration\":500,\"type\":\"struct VoteFactory.groupStruct\"},\"id\":546,\"name\":\"UserDefinedTypeName\",\"src\":\"1440:11:2\"}],\"id\":547,\"name\":\"VariableDeclaration\",\"src\":\"1440:32:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.groupStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":518,\"type\":\"mapping(uint256 => struct VoteFactory.groupStruct storage ref)\",\"value\":\"groupInfo\"},\"id\":548,\"name\":\"Identifier\",\"src\":\"1475:9:2\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":549,\"name\":\"Literal\",\"src\":\"1485:1:2\"}],\"id\":550,\"name\":\"IndexAccess\",\"src\":\"1475:12:2\"}],\"id\":551,\"name\":\"VariableDeclarationStatement\",\"src\":\"1440:47:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"name\",\"referencedDeclaration\":494,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":547,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"studentGroup\"},\"id\":552,\"name\":\"Identifier\",\"src\":\"1502:12:2\"}],\"id\":554,\"name\":\"MemberAccess\",\"src\":\"1502:17:2\"},{\"attributes\":{\"hexvalue\":\"53747564656e74\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"string\",\"type\":\"literal_string \\\"Student\\\"\",\"value\":\"Student\"},\"id\":555,\"name\":\"Literal\",\"src\":\"1522:9:2\"}],\"id\":556,\"name\":\"Assignment\",\"src\":\"1502:29:2\"}],\"id\":557,\"name\":\"ExpressionStatement\",\"src\":\"1502:29:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"description\",\"referencedDeclaration\":496,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":547,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"studentGroup\"},\"id\":558,\"name\":\"Identifier\",\"src\":\"1546:12:2\"}],\"id\":560,\"name\":\"MemberAccess\",\"src\":\"1546:24:2\"},{\"attributes\":{\"hexvalue\":\"44656661756c742047726f7570\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"string\",\"type\":\"literal_string \\\"Default Group\\\"\",\"value\":\"Default Group\"},\"id\":561,\"name\":\"Literal\",\"src\":\"1573:15:2\"}],\"id\":562,\"name\":\"Assignment\",\"src\":\"1546:42:2\"}],\"id\":563,\"name\":\"ExpressionStatement\",\"src\":\"1546:42:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"++\",\"prefix\":false,\"type\":\"uint32\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":520,\"type\":\"uint32\",\"value\":\"groupCount\"},\"id\":564,\"name\":\"Identifier\",\"src\":\"1603:10:2\"}],\"id\":565,\"name\":\"UnaryOperation\",\"src\":\"1603:12:2\"}],\"id\":566,\"name\":\"ExpressionStatement\",\"src\":\"1603:12:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"push\",\"type\":\"function (uint32)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":533,\"type\":\"uint32[] storage ref\",\"value\":\"existingGroups\"},\"id\":567,\"name\":\"Identifier\",\"src\":\"1630:14:2\"}],\"id\":569,\"name\":\"MemberAccess\",\"src\":\"1630:19:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":530,\"type\":\"uint32\",\"value\":\"defaultGroupID\"},\"id\":570,\"name\":\"Identifier\",\"src\":\"1650:14:2\"}],\"id\":571,\"name\":\"FunctionCall\",\"src\":\"1630:35:2\"}],\"id\":572,\"name\":\"ExpressionStatement\",\"src\":\"1630:35:2\"}],\"id\":573,\"name\":\"Block\",\"src\":\"1425:252:2\"}],\"id\":574,\"name\":\"IfStatement\",\"src\":\"1408:269:2\"},{\"attributes\":{\"assignments\":[576]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"g\",\"scope\":602,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.groupStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"groupStruct\",\"referencedDeclaration\":500,\"type\":\"struct VoteFactory.groupStruct\"},\"id\":575,\"name\":\"UserDefinedTypeName\",\"src\":\"1687:11:2\"}],\"id\":576,\"name\":\"VariableDeclaration\",\"src\":\"1687:21:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.groupStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":518,\"type\":\"mapping(uint256 => struct VoteFactory.groupStruct storage ref)\",\"value\":\"groupInfo\"},\"id\":577,\"name\":\"Identifier\",\"src\":\"1711:9:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":539,\"type\":\"uint32\",\"value\":\"groupID\"},\"id\":578,\"name\":\"Identifier\",\"src\":\"1721:7:2\"}],\"id\":579,\"name\":\"IndexAccess\",\"src\":\"1711:18:2\"}],\"id\":580,\"name\":\"VariableDeclarationStatement\",\"src\":\"1687:42:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"name\",\"referencedDeclaration\":494,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":576,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":581,\"name\":\"Identifier\",\"src\":\"1740:1:2\"}],\"id\":583,\"name\":\"MemberAccess\",\"src\":\"1740:6:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":535,\"type\":\"string memory\",\"value\":\"name\"},\"id\":584,\"name\":\"Identifier\",\"src\":\"1749:4:2\"}],\"id\":585,\"name\":\"Assignment\",\"src\":\"1740:13:2\"}],\"id\":586,\"name\":\"ExpressionStatement\",\"src\":\"1740:13:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"description\",\"referencedDeclaration\":496,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":576,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":587,\"name\":\"Identifier\",\"src\":\"1764:1:2\"}],\"id\":589,\"name\":\"MemberAccess\",\"src\":\"1764:13:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":537,\"type\":\"string memory\",\"value\":\"description\"},\"id\":590,\"name\":\"Identifier\",\"src\":\"1780:11:2\"}],\"id\":591,\"name\":\"Assignment\",\"src\":\"1764:27:2\"}],\"id\":592,\"name\":\"ExpressionStatement\",\"src\":\"1764:27:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"++\",\"prefix\":false,\"type\":\"uint32\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":520,\"type\":\"uint32\",\"value\":\"groupCount\"},\"id\":593,\"name\":\"Identifier\",\"src\":\"1802:10:2\"}],\"id\":594,\"name\":\"UnaryOperation\",\"src\":\"1802:12:2\"}],\"id\":595,\"name\":\"ExpressionStatement\",\"src\":\"1802:12:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"push\",\"type\":\"function (uint32)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":533,\"type\":\"uint32[] storage ref\",\"value\":\"existingGroups\"},\"id\":596,\"name\":\"Identifier\",\"src\":\"1825:14:2\"}],\"id\":598,\"name\":\"MemberAccess\",\"src\":\"1825:19:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":539,\"type\":\"uint32\",\"value\":\"groupID\"},\"id\":599,\"name\":\"Identifier\",\"src\":\"1845:7:2\"}],\"id\":600,\"name\":\"FunctionCall\",\"src\":\"1825:28:2\"}],\"id\":601,\"name\":\"ExpressionStatement\",\"src\":\"1825:28:2\"}],\"id\":602,\"name\":\"Block\",\"src\":\"1346:515:2\"}],\"id\":603,\"name\":\"FunctionDefinition\",\"src\":\"1255:606:2\"},{\"attributes\":{\"functionSelector\":\"338b4741\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"registerGroup\",\"scope\":1103,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"groupID\",\"scope\":661,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint32\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":604,\"name\":\"ElementaryTypeName\",\"src\":\"2007:6:2\"}],\"id\":605,\"name\":\"VariableDeclaration\",\"src\":\"2007:14:2\"}],\"id\":606,\"name\":\"ParameterList\",\"src\":\"2006:16:2\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":607,\"name\":\"ParameterList\",\"src\":\"2030:0:2\"},{\"children\":[{\"attributes\":{\"assignments\":[609]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"u\",\"scope\":660,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.userStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"userStruct\",\"referencedDeclaration\":514,\"type\":\"struct VoteFactory.userStruct\"},\"id\":608,\"name\":\"UserDefinedTypeName\",\"src\":\"2041:10:2\"}],\"id\":609,\"name\":\"VariableDeclaration\",\"src\":\"2041:20:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.userStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":527,\"type\":\"mapping(address => struct VoteFactory.userStruct storage ref)\",\"value\":\"userInfo\"},\"id\":610,\"name\":\"Identifier\",\"src\":\"2064:8:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":611,\"name\":\"Identifier\",\"src\":\"2073:3:2\"}],\"id\":612,\"name\":\"MemberAccess\",\"src\":\"2073:10:2\"}],\"id\":613,\"name\":\"IndexAccess\",\"src\":\"2064:20:2\"}],\"id\":614,\"name\":\"VariableDeclarationStatement\",\"src\":\"2041:43:2\"},{\"attributes\":{\"assignments\":[616]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"g\",\"scope\":660,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.groupStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"groupStruct\",\"referencedDeclaration\":500,\"type\":\"struct VoteFactory.groupStruct\"},\"id\":615,\"name\":\"UserDefinedTypeName\",\"src\":\"2095:11:2\"}],\"id\":616,\"name\":\"VariableDeclaration\",\"src\":\"2095:21:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.groupStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":518,\"type\":\"mapping(uint256 => struct VoteFactory.groupStruct storage ref)\",\"value\":\"groupInfo\"},\"id\":617,\"name\":\"Identifier\",\"src\":\"2119:9:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":605,\"type\":\"uint32\",\"value\":\"groupID\"},\"id\":618,\"name\":\"Identifier\",\"src\":\"2129:7:2\"}],\"id\":619,\"name\":\"IndexAccess\",\"src\":\"2119:18:2\"}],\"id\":620,\"name\":\"VariableDeclarationStatement\",\"src\":\"2095:42:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"type\":\"function (bool) pure\",\"value\":\"require\"},\"id\":621,\"name\":\"Identifier\",\"src\":\"2158:7:2\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"!=\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":605,\"type\":\"uint32\",\"value\":\"groupID\"},\"id\":622,\"name\":\"Identifier\",\"src\":\"2166:7:2\"},{\"attributes\":{\"hexvalue\":\"30\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 0\",\"value\":\"0\"},\"id\":623,\"name\":\"Literal\",\"src\":\"2177:1:2\"}],\"id\":624,\"name\":\"BinaryOperation\",\"src\":\"2166:12:2\"}],\"id\":625,\"name\":\"FunctionCall\",\"src\":\"2158:21:2\"}],\"id\":626,\"name\":\"ExpressionStatement\",\"src\":\"2158:21:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"type\":\"function (bool) pure\",\"value\":\"require\"},\"id\":627,\"name\":\"Identifier\",\"src\":\"2190:7:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"!\",\"prefix\":true,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"bool\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"},{\"typeIdentifier\":\"t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470\",\"typeString\":\"literal_string \\\"\\\"\"}],\"overloadedDeclarations\":[null],\"referencedDeclaration\":1102,\"type\":\"function (string memory,string memory) pure returns (bool)\",\"value\":\"compareStrings\"},\"id\":628,\"name\":\"Identifier\",\"src\":\"2199:14:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"name\",\"referencedDeclaration\":494,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":616,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":629,\"name\":\"Identifier\",\"src\":\"2214:1:2\"}],\"id\":630,\"name\":\"MemberAccess\",\"src\":\"2214:6:2\"},{\"attributes\":{\"hexvalue\":\"\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"string\",\"type\":\"literal_string \\\"\\\"\",\"value\":\"\"},\"id\":631,\"name\":\"Literal\",\"src\":\"2222:2:2\"}],\"id\":632,\"name\":\"FunctionCall\",\"src\":\"2199:26:2\"}],\"id\":633,\"name\":\"UnaryOperation\",\"src\":\"2198:27:2\"}],\"id\":634,\"name\":\"FunctionCall\",\"src\":\"2190:36:2\"}],\"id\":635,\"name\":\"ExpressionStatement\",\"src\":\"2190:36:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"type\":\"function (bool) pure\",\"value\":\"require\"},\"id\":636,\"name\":\"Identifier\",\"src\":\"2272:7:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"!\",\"prefix\":true,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"bool\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}],\"overloadedDeclarations\":[null],\"referencedDeclaration\":793,\"type\":\"function (uint32) view returns (bool)\",\"value\":\"isUserGroup\"},\"id\":637,\"name\":\"Identifier\",\"src\":\"2281:11:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":605,\"type\":\"uint32\",\"value\":\"groupID\"},\"id\":638,\"name\":\"Identifier\",\"src\":\"2293:7:2\"}],\"id\":639,\"name\":\"FunctionCall\",\"src\":\"2281:20:2\"}],\"id\":640,\"name\":\"UnaryOperation\",\"src\":\"2280:21:2\"}],\"id\":641,\"name\":\"FunctionCall\",\"src\":\"2272:30:2\"}],\"id\":642,\"name\":\"ExpressionStatement\",\"src\":\"2272:30:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"push\",\"type\":\"function (uint32)\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"groups\",\"referencedDeclaration\":511,\"type\":\"uint32[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":609,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":643,\"name\":\"Identifier\",\"src\":\"2346:1:2\"}],\"id\":646,\"name\":\"MemberAccess\",\"src\":\"2346:8:2\"}],\"id\":647,\"name\":\"MemberAccess\",\"src\":\"2346:13:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":605,\"type\":\"uint32\",\"value\":\"groupID\"},\"id\":648,\"name\":\"Identifier\",\"src\":\"2360:7:2\"}],\"id\":649,\"name\":\"FunctionCall\",\"src\":\"2346:22:2\"}],\"id\":650,\"name\":\"ExpressionStatement\",\"src\":\"2346:22:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"push\",\"type\":\"function (address)\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"members\",\"referencedDeclaration\":499,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":616,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":651,\"name\":\"Identifier\",\"src\":\"2414:1:2\"}],\"id\":654,\"name\":\"MemberAccess\",\"src\":\"2414:9:2\"}],\"id\":655,\"name\":\"MemberAccess\",\"src\":\"2414:14:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"userAddress\",\"referencedDeclaration\":502,\"type\":\"address\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":609,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":656,\"name\":\"Identifier\",\"src\":\"2429:1:2\"}],\"id\":657,\"name\":\"MemberAccess\",\"src\":\"2429:13:2\"}],\"id\":658,\"name\":\"FunctionCall\",\"src\":\"2414:29:2\"}],\"id\":659,\"name\":\"ExpressionStatement\",\"src\":\"2414:29:2\"}],\"id\":660,\"name\":\"Block\",\"src\":\"2030:421:2\"}],\"id\":661,\"name\":\"FunctionDefinition\",\"src\":\"1984:467:2\"},{\"attributes\":{\"functionSelector\":\"3f2e1f60\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"leaveGroup\",\"scope\":1103,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"indexGroup\",\"scope\":748,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint32\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":662,\"name\":\"ElementaryTypeName\",\"src\":\"2883:6:2\"}],\"id\":663,\"name\":\"VariableDeclaration\",\"src\":\"2883:17:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"indexMember\",\"scope\":748,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint32\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":664,\"name\":\"ElementaryTypeName\",\"src\":\"2902:6:2\"}],\"id\":665,\"name\":\"VariableDeclaration\",\"src\":\"2902:18:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"groupID\",\"scope\":748,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint32\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":666,\"name\":\"ElementaryTypeName\",\"src\":\"2922:6:2\"}],\"id\":667,\"name\":\"VariableDeclaration\",\"src\":\"2922:14:2\"}],\"id\":668,\"name\":\"ParameterList\",\"src\":\"2882:55:2\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":669,\"name\":\"ParameterList\",\"src\":\"2945:0:2\"},{\"children\":[{\"attributes\":{\"assignments\":[671]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"u\",\"scope\":747,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.userStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"userStruct\",\"referencedDeclaration\":514,\"type\":\"struct VoteFactory.userStruct\"},\"id\":670,\"name\":\"UserDefinedTypeName\",\"src\":\"2956:10:2\"}],\"id\":671,\"name\":\"VariableDeclaration\",\"src\":\"2956:20:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.userStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":527,\"type\":\"mapping(address => struct VoteFactory.userStruct storage ref)\",\"value\":\"userInfo\"},\"id\":672,\"name\":\"Identifier\",\"src\":\"2979:8:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":673,\"name\":\"Identifier\",\"src\":\"2988:3:2\"}],\"id\":674,\"name\":\"MemberAccess\",\"src\":\"2988:10:2\"}],\"id\":675,\"name\":\"IndexAccess\",\"src\":\"2979:20:2\"}],\"id\":676,\"name\":\"VariableDeclarationStatement\",\"src\":\"2956:43:2\"},{\"attributes\":{\"assignments\":[678]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"g\",\"scope\":747,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.groupStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"groupStruct\",\"referencedDeclaration\":500,\"type\":\"struct VoteFactory.groupStruct\"},\"id\":677,\"name\":\"UserDefinedTypeName\",\"src\":\"3010:11:2\"}],\"id\":678,\"name\":\"VariableDeclaration\",\"src\":\"3010:21:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.groupStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":518,\"type\":\"mapping(uint256 => struct VoteFactory.groupStruct storage ref)\",\"value\":\"groupInfo\"},\"id\":679,\"name\":\"Identifier\",\"src\":\"3034:9:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":667,\"type\":\"uint32\",\"value\":\"groupID\"},\"id\":680,\"name\":\"Identifier\",\"src\":\"3044:7:2\"}],\"id\":681,\"name\":\"IndexAccess\",\"src\":\"3034:18:2\"}],\"id\":682,\"name\":\"VariableDeclarationStatement\",\"src\":\"3010:42:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"uint32\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"type\":\"uint32\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"groups\",\"referencedDeclaration\":511,\"type\":\"uint32[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":671,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":683,\"name\":\"Identifier\",\"src\":\"3112:1:2\"}],\"id\":686,\"name\":\"MemberAccess\",\"src\":\"3112:8:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":663,\"type\":\"uint32\",\"value\":\"indexGroup\"},\"id\":685,\"name\":\"Identifier\",\"src\":\"3121:10:2\"}],\"id\":687,\"name\":\"IndexAccess\",\"src\":\"3112:20:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"uint32\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"groups\",\"referencedDeclaration\":511,\"type\":\"uint32[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":671,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":688,\"name\":\"Identifier\",\"src\":\"3135:1:2\"}],\"id\":689,\"name\":\"MemberAccess\",\"src\":\"3135:8:2\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"-\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"length\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"groups\",\"referencedDeclaration\":511,\"type\":\"uint32[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":671,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":690,\"name\":\"Identifier\",\"src\":\"3144:1:2\"}],\"id\":691,\"name\":\"MemberAccess\",\"src\":\"3144:8:2\"}],\"id\":692,\"name\":\"MemberAccess\",\"src\":\"3144:15:2\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":693,\"name\":\"Literal\",\"src\":\"3162:1:2\"}],\"id\":694,\"name\":\"BinaryOperation\",\"src\":\"3144:19:2\"}],\"id\":695,\"name\":\"IndexAccess\",\"src\":\"3135:29:2\"}],\"id\":696,\"name\":\"Assignment\",\"src\":\"3112:52:2\"}],\"id\":697,\"name\":\"ExpressionStatement\",\"src\":\"3112:52:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"delete\",\"prefix\":true,\"type\":\"tuple()\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"type\":\"uint32\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"groups\",\"referencedDeclaration\":511,\"type\":\"uint32[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":671,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":698,\"name\":\"Identifier\",\"src\":\"3182:1:2\"}],\"id\":699,\"name\":\"MemberAccess\",\"src\":\"3182:8:2\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"-\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"length\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"groups\",\"referencedDeclaration\":511,\"type\":\"uint32[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":671,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":700,\"name\":\"Identifier\",\"src\":\"3191:1:2\"}],\"id\":701,\"name\":\"MemberAccess\",\"src\":\"3191:8:2\"}],\"id\":702,\"name\":\"MemberAccess\",\"src\":\"3191:15:2\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":703,\"name\":\"Literal\",\"src\":\"3209:1:2\"}],\"id\":704,\"name\":\"BinaryOperation\",\"src\":\"3191:19:2\"}],\"id\":705,\"name\":\"IndexAccess\",\"src\":\"3182:29:2\"}],\"id\":706,\"name\":\"UnaryOperation\",\"src\":\"3175:36:2\"}],\"id\":707,\"name\":\"ExpressionStatement\",\"src\":\"3175:36:2\"},{\"children\":[{\"attributes\":{\"arguments\":[null],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[null],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"pop\",\"type\":\"function ()\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"groups\",\"referencedDeclaration\":511,\"type\":\"uint32[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":671,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":708,\"name\":\"Identifier\",\"src\":\"3222:1:2\"}],\"id\":711,\"name\":\"MemberAccess\",\"src\":\"3222:8:2\"}],\"id\":712,\"name\":\"MemberAccess\",\"src\":\"3222:12:2\"}],\"id\":713,\"name\":\"FunctionCall\",\"src\":\"3222:14:2\"}],\"id\":714,\"name\":\"ExpressionStatement\",\"src\":\"3222:14:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"address\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"type\":\"address\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"members\",\"referencedDeclaration\":499,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":678,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":715,\"name\":\"Identifier\",\"src\":\"3296:1:2\"}],\"id\":718,\"name\":\"MemberAccess\",\"src\":\"3296:9:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":665,\"type\":\"uint32\",\"value\":\"indexMember\"},\"id\":717,\"name\":\"Identifier\",\"src\":\"3306:11:2\"}],\"id\":719,\"name\":\"IndexAccess\",\"src\":\"3296:22:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"address\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"members\",\"referencedDeclaration\":499,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":678,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":720,\"name\":\"Identifier\",\"src\":\"3321:1:2\"}],\"id\":721,\"name\":\"MemberAccess\",\"src\":\"3321:9:2\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"-\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"length\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"members\",\"referencedDeclaration\":499,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":678,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":722,\"name\":\"Identifier\",\"src\":\"3331:1:2\"}],\"id\":723,\"name\":\"MemberAccess\",\"src\":\"3331:9:2\"}],\"id\":724,\"name\":\"MemberAccess\",\"src\":\"3331:16:2\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":725,\"name\":\"Literal\",\"src\":\"3350:1:2\"}],\"id\":726,\"name\":\"BinaryOperation\",\"src\":\"3331:20:2\"}],\"id\":727,\"name\":\"IndexAccess\",\"src\":\"3321:31:2\"}],\"id\":728,\"name\":\"Assignment\",\"src\":\"3296:56:2\"}],\"id\":729,\"name\":\"ExpressionStatement\",\"src\":\"3296:56:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"delete\",\"prefix\":true,\"type\":\"tuple()\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"type\":\"address\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"members\",\"referencedDeclaration\":499,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":678,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":730,\"name\":\"Identifier\",\"src\":\"3370:1:2\"}],\"id\":731,\"name\":\"MemberAccess\",\"src\":\"3370:9:2\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"-\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"length\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"members\",\"referencedDeclaration\":499,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":678,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":732,\"name\":\"Identifier\",\"src\":\"3380:1:2\"}],\"id\":733,\"name\":\"MemberAccess\",\"src\":\"3380:9:2\"}],\"id\":734,\"name\":\"MemberAccess\",\"src\":\"3380:16:2\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":735,\"name\":\"Literal\",\"src\":\"3399:1:2\"}],\"id\":736,\"name\":\"BinaryOperation\",\"src\":\"3380:20:2\"}],\"id\":737,\"name\":\"IndexAccess\",\"src\":\"3370:31:2\"}],\"id\":738,\"name\":\"UnaryOperation\",\"src\":\"3363:38:2\"}],\"id\":739,\"name\":\"ExpressionStatement\",\"src\":\"3363:38:2\"},{\"children\":[{\"attributes\":{\"arguments\":[null],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[null],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"pop\",\"type\":\"function ()\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"members\",\"referencedDeclaration\":499,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":678,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":740,\"name\":\"Identifier\",\"src\":\"3412:1:2\"}],\"id\":743,\"name\":\"MemberAccess\",\"src\":\"3412:9:2\"}],\"id\":744,\"name\":\"MemberAccess\",\"src\":\"3412:13:2\"}],\"id\":745,\"name\":\"FunctionCall\",\"src\":\"3412:15:2\"}],\"id\":746,\"name\":\"ExpressionStatement\",\"src\":\"3412:15:2\"}],\"id\":747,\"name\":\"Block\",\"src\":\"2945:490:2\"}],\"id\":748,\"name\":\"FunctionDefinition\",\"src\":\"2863:572:2\"},{\"attributes\":{\"functionSelector\":\"a9905aa0\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"isUserGroup\",\"scope\":1103,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"groupID\",\"scope\":793,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint32\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":749,\"name\":\"ElementaryTypeName\",\"src\":\"3512:6:2\"}],\"id\":750,\"name\":\"VariableDeclaration\",\"src\":\"3512:14:2\"}],\"id\":751,\"name\":\"ParameterList\",\"src\":\"3511:16:2\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":793,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"bool\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":752,\"name\":\"ElementaryTypeName\",\"src\":\"3549:4:2\"}],\"id\":753,\"name\":\"VariableDeclaration\",\"src\":\"3549:4:2\"}],\"id\":754,\"name\":\"ParameterList\",\"src\":\"3548:6:2\"},{\"children\":[{\"attributes\":{\"assignments\":[756]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"isStatus\",\"scope\":792,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"bool\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":755,\"name\":\"ElementaryTypeName\",\"src\":\"3566:4:2\"}],\"id\":756,\"name\":\"VariableDeclaration\",\"src\":\"3566:13:2\"},{\"attributes\":{\"hexvalue\":\"66616c7365\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"bool\",\"type\":\"bool\",\"value\":\"false\"},\"id\":757,\"name\":\"Literal\",\"src\":\"3582:5:2\"}],\"id\":758,\"name\":\"VariableDeclarationStatement\",\"src\":\"3566:21:2\"},{\"attributes\":{\"assignments\":[760]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"u\",\"scope\":792,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.userStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"userStruct\",\"referencedDeclaration\":514,\"type\":\"struct VoteFactory.userStruct\"},\"id\":759,\"name\":\"UserDefinedTypeName\",\"src\":\"3598:10:2\"}],\"id\":760,\"name\":\"VariableDeclaration\",\"src\":\"3598:20:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.userStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":527,\"type\":\"mapping(address => struct VoteFactory.userStruct storage ref)\",\"value\":\"userInfo\"},\"id\":761,\"name\":\"Identifier\",\"src\":\"3621:8:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":762,\"name\":\"Identifier\",\"src\":\"3630:3:2\"}],\"id\":763,\"name\":\"MemberAccess\",\"src\":\"3630:10:2\"}],\"id\":764,\"name\":\"IndexAccess\",\"src\":\"3621:20:2\"}],\"id\":765,\"name\":\"VariableDeclarationStatement\",\"src\":\"3598:43:2\"},{\"children\":[{\"attributes\":{\"assignments\":[767]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"i\",\"scope\":789,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":766,\"name\":\"ElementaryTypeName\",\"src\":\"3657:4:2\"}],\"id\":767,\"name\":\"VariableDeclaration\",\"src\":\"3657:6:2\"},{\"attributes\":{\"hexvalue\":\"30\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 0\",\"value\":\"0\"},\"id\":768,\"name\":\"Literal\",\"src\":\"3666:1:2\"}],\"id\":769,\"name\":\"VariableDeclarationStatement\",\"src\":\"3657:10:2\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"<\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":767,\"type\":\"uint256\",\"value\":\"i\"},\"id\":770,\"name\":\"Identifier\",\"src\":\"3669:1:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"length\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"groups\",\"referencedDeclaration\":511,\"type\":\"uint32[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":760,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":771,\"name\":\"Identifier\",\"src\":\"3673:1:2\"}],\"id\":772,\"name\":\"MemberAccess\",\"src\":\"3673:8:2\"}],\"id\":773,\"name\":\"MemberAccess\",\"src\":\"3673:15:2\"}],\"id\":774,\"name\":\"BinaryOperation\",\"src\":\"3669:19:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"++\",\"prefix\":false,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":767,\"type\":\"uint256\",\"value\":\"i\"},\"id\":775,\"name\":\"Identifier\",\"src\":\"3690:1:2\"}],\"id\":776,\"name\":\"UnaryOperation\",\"src\":\"3690:3:2\"}],\"id\":777,\"name\":\"ExpressionStatement\",\"src\":\"3690:3:2\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":756,\"type\":\"bool\",\"value\":\"isStatus\"},\"id\":778,\"name\":\"Identifier\",\"src\":\"3710:8:2\"},{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"uint32\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"groups\",\"referencedDeclaration\":511,\"type\":\"uint32[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":760,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":779,\"name\":\"Identifier\",\"src\":\"3722:1:2\"}],\"id\":780,\"name\":\"MemberAccess\",\"src\":\"3722:8:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":767,\"type\":\"uint256\",\"value\":\"i\"},\"id\":781,\"name\":\"Identifier\",\"src\":\"3731:1:2\"}],\"id\":782,\"name\":\"IndexAccess\",\"src\":\"3722:11:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":750,\"type\":\"uint32\",\"value\":\"groupID\"},\"id\":783,\"name\":\"Identifier\",\"src\":\"3737:7:2\"}],\"id\":784,\"name\":\"BinaryOperation\",\"src\":\"3722:22:2\"}],\"id\":785,\"name\":\"TupleExpression\",\"src\":\"3721:24:2\"}],\"id\":786,\"name\":\"Assignment\",\"src\":\"3710:35:2\"}],\"id\":787,\"name\":\"ExpressionStatement\",\"src\":\"3710:35:2\"}],\"id\":788,\"name\":\"Block\",\"src\":\"3695:62:2\"}],\"id\":789,\"name\":\"ForStatement\",\"src\":\"3652:105:2\"},{\"attributes\":{\"functionReturnParameters\":754},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":756,\"type\":\"bool\",\"value\":\"isStatus\"},\"id\":790,\"name\":\"Identifier\",\"src\":\"3774:8:2\"}],\"id\":791,\"name\":\"Return\",\"src\":\"3767:15:2\"}],\"id\":792,\"name\":\"Block\",\"src\":\"3555:235:2\"}],\"id\":793,\"name\":\"FunctionDefinition\",\"src\":\"3491:299:2\"},{\"attributes\":{\"functionSelector\":\"b5008c0f\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"isGroup\",\"scope\":1103,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"groupID\",\"scope\":819,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint32\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":794,\"name\":\"ElementaryTypeName\",\"src\":\"3871:6:2\"}],\"id\":795,\"name\":\"VariableDeclaration\",\"src\":\"3871:14:2\"}],\"id\":796,\"name\":\"ParameterList\",\"src\":\"3870:16:2\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":819,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"bool\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":797,\"name\":\"ElementaryTypeName\",\"src\":\"3908:4:2\"}],\"id\":798,\"name\":\"VariableDeclaration\",\"src\":\"3908:4:2\"}],\"id\":799,\"name\":\"ParameterList\",\"src\":\"3907:6:2\"},{\"children\":[{\"attributes\":{\"assignments\":[801]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"g\",\"scope\":818,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.groupStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"groupStruct\",\"referencedDeclaration\":500,\"type\":\"struct VoteFactory.groupStruct\"},\"id\":800,\"name\":\"UserDefinedTypeName\",\"src\":\"3925:11:2\"}],\"id\":801,\"name\":\"VariableDeclaration\",\"src\":\"3925:21:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.groupStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":518,\"type\":\"mapping(uint256 => struct VoteFactory.groupStruct storage ref)\",\"value\":\"groupInfo\"},\"id\":802,\"name\":\"Identifier\",\"src\":\"3949:9:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":795,\"type\":\"uint32\",\"value\":\"groupID\"},\"id\":803,\"name\":\"Identifier\",\"src\":\"3959:7:2\"}],\"id\":804,\"name\":\"IndexAccess\",\"src\":\"3949:18:2\"}],\"id\":805,\"name\":\"VariableDeclarationStatement\",\"src\":\"3925:42:2\"},{\"attributes\":{\"assignments\":[807]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"isExist\",\"scope\":818,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"bool\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":806,\"name\":\"ElementaryTypeName\",\"src\":\"3978:4:2\"}],\"id\":807,\"name\":\"VariableDeclaration\",\"src\":\"3978:12:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"!\",\"prefix\":true,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"bool\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"},{\"typeIdentifier\":\"t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470\",\"typeString\":\"literal_string \\\"\\\"\"}],\"overloadedDeclarations\":[null],\"referencedDeclaration\":1102,\"type\":\"function (string memory,string memory) pure returns (bool)\",\"value\":\"compareStrings\"},\"id\":808,\"name\":\"Identifier\",\"src\":\"3995:14:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"name\",\"referencedDeclaration\":494,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":801,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":809,\"name\":\"Identifier\",\"src\":\"4010:1:2\"}],\"id\":810,\"name\":\"MemberAccess\",\"src\":\"4010:6:2\"},{\"attributes\":{\"hexvalue\":\"\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"string\",\"type\":\"literal_string \\\"\\\"\",\"value\":\"\"},\"id\":811,\"name\":\"Literal\",\"src\":\"4018:2:2\"}],\"id\":812,\"name\":\"FunctionCall\",\"src\":\"3995:26:2\"}],\"id\":813,\"name\":\"TupleExpression\",\"src\":\"3994:28:2\"}],\"id\":814,\"name\":\"UnaryOperation\",\"src\":\"3993:29:2\"}],\"id\":815,\"name\":\"VariableDeclarationStatement\",\"src\":\"3978:44:2\"},{\"attributes\":{\"functionReturnParameters\":799},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":807,\"type\":\"bool\",\"value\":\"isExist\"},\"id\":816,\"name\":\"Identifier\",\"src\":\"4040:7:2\"}],\"id\":817,\"name\":\"Return\",\"src\":\"4033:14:2\"}],\"id\":818,\"name\":\"Block\",\"src\":\"3914:141:2\"}],\"id\":819,\"name\":\"FunctionDefinition\",\"src\":\"3854:201:2\"},{\"attributes\":{\"functionSelector\":\"64363720\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"getUserGroup\",\"scope\":1103,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"index\",\"scope\":839,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint32\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":820,\"name\":\"ElementaryTypeName\",\"src\":\"4134:6:2\"}],\"id\":821,\"name\":\"VariableDeclaration\",\"src\":\"4134:12:2\"}],\"id\":822,\"name\":\"ParameterList\",\"src\":\"4133:14:2\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":839,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint32\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":823,\"name\":\"ElementaryTypeName\",\"src\":\"4169:6:2\"}],\"id\":824,\"name\":\"VariableDeclaration\",\"src\":\"4169:6:2\"}],\"id\":825,\"name\":\"ParameterList\",\"src\":\"4168:8:2\"},{\"children\":[{\"attributes\":{\"assignments\":[827]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"u\",\"scope\":838,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.userStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"userStruct\",\"referencedDeclaration\":514,\"type\":\"struct VoteFactory.userStruct\"},\"id\":826,\"name\":\"UserDefinedTypeName\",\"src\":\"4188:10:2\"}],\"id\":827,\"name\":\"VariableDeclaration\",\"src\":\"4188:20:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.userStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":527,\"type\":\"mapping(address => struct VoteFactory.userStruct storage ref)\",\"value\":\"userInfo\"},\"id\":828,\"name\":\"Identifier\",\"src\":\"4211:8:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":829,\"name\":\"Identifier\",\"src\":\"4220:3:2\"}],\"id\":830,\"name\":\"MemberAccess\",\"src\":\"4220:10:2\"}],\"id\":831,\"name\":\"IndexAccess\",\"src\":\"4211:20:2\"}],\"id\":832,\"name\":\"VariableDeclarationStatement\",\"src\":\"4188:43:2\"},{\"attributes\":{\"functionReturnParameters\":825},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"uint32\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"groups\",\"referencedDeclaration\":511,\"type\":\"uint32[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":827,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":833,\"name\":\"Identifier\",\"src\":\"4249:1:2\"}],\"id\":834,\"name\":\"MemberAccess\",\"src\":\"4249:8:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":821,\"type\":\"uint32\",\"value\":\"index\"},\"id\":835,\"name\":\"Identifier\",\"src\":\"4258:5:2\"}],\"id\":836,\"name\":\"IndexAccess\",\"src\":\"4249:15:2\"}],\"id\":837,\"name\":\"Return\",\"src\":\"4242:22:2\"}],\"id\":838,\"name\":\"Block\",\"src\":\"4177:95:2\"}],\"id\":839,\"name\":\"FunctionDefinition\",\"src\":\"4112:160:2\"},{\"attributes\":{\"functionSelector\":\"d2f4a802\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"getUserAllGroups\",\"scope\":1103,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":840,\"name\":\"ParameterList\",\"src\":\"4352:2:2\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":856,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"uint32[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"uint32[]\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":841,\"name\":\"ElementaryTypeName\",\"src\":\"4376:6:2\"}],\"id\":842,\"name\":\"ArrayTypeName\",\"src\":\"4376:8:2\"}],\"id\":843,\"name\":\"VariableDeclaration\",\"src\":\"4376:15:2\"}],\"id\":844,\"name\":\"ParameterList\",\"src\":\"4375:17:2\"},{\"children\":[{\"attributes\":{\"assignments\":[846]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"u\",\"scope\":855,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.userStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"userStruct\",\"referencedDeclaration\":514,\"type\":\"struct VoteFactory.userStruct\"},\"id\":845,\"name\":\"UserDefinedTypeName\",\"src\":\"4404:10:2\"}],\"id\":846,\"name\":\"VariableDeclaration\",\"src\":\"4404:20:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.userStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":527,\"type\":\"mapping(address => struct VoteFactory.userStruct storage ref)\",\"value\":\"userInfo\"},\"id\":847,\"name\":\"Identifier\",\"src\":\"4427:8:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":848,\"name\":\"Identifier\",\"src\":\"4436:3:2\"}],\"id\":849,\"name\":\"MemberAccess\",\"src\":\"4436:10:2\"}],\"id\":850,\"name\":\"IndexAccess\",\"src\":\"4427:20:2\"}],\"id\":851,\"name\":\"VariableDeclarationStatement\",\"src\":\"4404:43:2\"},{\"attributes\":{\"functionReturnParameters\":844},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"groups\",\"referencedDeclaration\":511,\"type\":\"uint32[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":846,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":852,\"name\":\"Identifier\",\"src\":\"4465:1:2\"}],\"id\":853,\"name\":\"MemberAccess\",\"src\":\"4465:8:2\"}],\"id\":854,\"name\":\"Return\",\"src\":\"4458:15:2\"}],\"id\":855,\"name\":\"Block\",\"src\":\"4393:88:2\"}],\"id\":856,\"name\":\"FunctionDefinition\",\"src\":\"4327:154:2\"},{\"attributes\":{\"functionSelector\":\"b0f97938\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"getAllMembers\",\"scope\":1103,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"groupID\",\"scope\":874,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint32\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":857,\"name\":\"ElementaryTypeName\",\"src\":\"4557:6:2\"}],\"id\":858,\"name\":\"VariableDeclaration\",\"src\":\"4557:14:2\"}],\"id\":859,\"name\":\"ParameterList\",\"src\":\"4556:16:2\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":874,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":860,\"name\":\"ElementaryTypeName\",\"src\":\"4594:7:2\"}],\"id\":861,\"name\":\"ArrayTypeName\",\"src\":\"4594:9:2\"}],\"id\":862,\"name\":\"VariableDeclaration\",\"src\":\"4594:16:2\"}],\"id\":863,\"name\":\"ParameterList\",\"src\":\"4593:18:2\"},{\"children\":[{\"attributes\":{\"assignments\":[865]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"g\",\"scope\":873,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.groupStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"groupStruct\",\"referencedDeclaration\":500,\"type\":\"struct VoteFactory.groupStruct\"},\"id\":864,\"name\":\"UserDefinedTypeName\",\"src\":\"4623:11:2\"}],\"id\":865,\"name\":\"VariableDeclaration\",\"src\":\"4623:21:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.groupStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":518,\"type\":\"mapping(uint256 => struct VoteFactory.groupStruct storage ref)\",\"value\":\"groupInfo\"},\"id\":866,\"name\":\"Identifier\",\"src\":\"4647:9:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":858,\"type\":\"uint32\",\"value\":\"groupID\"},\"id\":867,\"name\":\"Identifier\",\"src\":\"4657:7:2\"}],\"id\":868,\"name\":\"IndexAccess\",\"src\":\"4647:18:2\"}],\"id\":869,\"name\":\"VariableDeclarationStatement\",\"src\":\"4623:42:2\"},{\"attributes\":{\"functionReturnParameters\":863},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"members\",\"referencedDeclaration\":499,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":865,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":870,\"name\":\"Identifier\",\"src\":\"4683:1:2\"}],\"id\":871,\"name\":\"MemberAccess\",\"src\":\"4683:9:2\"}],\"id\":872,\"name\":\"Return\",\"src\":\"4676:16:2\"}],\"id\":873,\"name\":\"Block\",\"src\":\"4612:88:2\"}],\"id\":874,\"name\":\"FunctionDefinition\",\"src\":\"4534:166:2\"},{\"attributes\":{\"functionSelector\":\"6638a0fa\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"getGroup\",\"scope\":1103,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"id\",\"scope\":906,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint8\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint8\",\"type\":\"uint8\"},\"id\":875,\"name\":\"ElementaryTypeName\",\"src\":\"4778:5:2\"}],\"id\":876,\"name\":\"VariableDeclaration\",\"src\":\"4778:8:2\"}],\"id\":877,\"name\":\"ParameterList\",\"src\":\"4777:10:2\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":906,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":878,\"name\":\"ElementaryTypeName\",\"src\":\"4808:6:2\"}],\"id\":879,\"name\":\"VariableDeclaration\",\"src\":\"4808:13:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":906,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":880,\"name\":\"ElementaryTypeName\",\"src\":\"4823:6:2\"}],\"id\":881,\"name\":\"VariableDeclaration\",\"src\":\"4823:13:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":906,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":882,\"name\":\"ElementaryTypeName\",\"src\":\"4838:7:2\"}],\"id\":883,\"name\":\"ArrayTypeName\",\"src\":\"4838:9:2\"}],\"id\":884,\"name\":\"VariableDeclaration\",\"src\":\"4838:16:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":906,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":885,\"name\":\"ElementaryTypeName\",\"src\":\"4856:4:2\"}],\"id\":886,\"name\":\"VariableDeclaration\",\"src\":\"4856:4:2\"}],\"id\":887,\"name\":\"ParameterList\",\"src\":\"4807:54:2\"},{\"children\":[{\"attributes\":{\"assignments\":[889]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"g\",\"scope\":905,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.groupStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"groupStruct\",\"referencedDeclaration\":500,\"type\":\"struct VoteFactory.groupStruct\"},\"id\":888,\"name\":\"UserDefinedTypeName\",\"src\":\"4873:11:2\"}],\"id\":889,\"name\":\"VariableDeclaration\",\"src\":\"4873:21:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.groupStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":518,\"type\":\"mapping(uint256 => struct VoteFactory.groupStruct storage ref)\",\"value\":\"groupInfo\"},\"id\":890,\"name\":\"Identifier\",\"src\":\"4897:9:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":876,\"type\":\"uint8\",\"value\":\"id\"},\"id\":891,\"name\":\"Identifier\",\"src\":\"4907:2:2\"}],\"id\":892,\"name\":\"IndexAccess\",\"src\":\"4897:13:2\"}],\"id\":893,\"name\":\"VariableDeclarationStatement\",\"src\":\"4873:37:2\"},{\"attributes\":{\"functionReturnParameters\":887},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"tuple(string storage ref,string storage ref,address[] storage ref,uint256)\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"name\",\"referencedDeclaration\":494,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":889,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":894,\"name\":\"Identifier\",\"src\":\"4929:1:2\"}],\"id\":895,\"name\":\"MemberAccess\",\"src\":\"4929:6:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"description\",\"referencedDeclaration\":496,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":889,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":896,\"name\":\"Identifier\",\"src\":\"4937:1:2\"}],\"id\":897,\"name\":\"MemberAccess\",\"src\":\"4937:13:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"members\",\"referencedDeclaration\":499,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":889,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":898,\"name\":\"Identifier\",\"src\":\"4952:1:2\"}],\"id\":899,\"name\":\"MemberAccess\",\"src\":\"4952:9:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"length\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"members\",\"referencedDeclaration\":499,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":889,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":900,\"name\":\"Identifier\",\"src\":\"4963:1:2\"}],\"id\":901,\"name\":\"MemberAccess\",\"src\":\"4963:9:2\"}],\"id\":902,\"name\":\"MemberAccess\",\"src\":\"4963:16:2\"}],\"id\":903,\"name\":\"TupleExpression\",\"src\":\"4928:52:2\"}],\"id\":904,\"name\":\"Return\",\"src\":\"4921:59:2\"}],\"id\":905,\"name\":\"Block\",\"src\":\"4862:126:2\"}],\"id\":906,\"name\":\"FunctionDefinition\",\"src\":\"4760:228:2\"},{\"attributes\":{\"functionSelector\":\"0073d7ae\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"getExistingGroups\",\"scope\":1103,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":907,\"name\":\"ParameterList\",\"src\":\"5026:2:2\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":915,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"uint32[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"uint32[]\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":908,\"name\":\"ElementaryTypeName\",\"src\":\"5049:6:2\"}],\"id\":909,\"name\":\"ArrayTypeName\",\"src\":\"5049:8:2\"}],\"id\":910,\"name\":\"VariableDeclaration\",\"src\":\"5049:15:2\"}],\"id\":911,\"name\":\"ParameterList\",\"src\":\"5048:17:2\"},{\"children\":[{\"attributes\":{\"functionReturnParameters\":911},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":533,\"type\":\"uint32[] storage ref\",\"value\":\"existingGroups\"},\"id\":912,\"name\":\"Identifier\",\"src\":\"5084:14:2\"}],\"id\":913,\"name\":\"Return\",\"src\":\"5077:21:2\"}],\"id\":914,\"name\":\"Block\",\"src\":\"5066:40:2\"}],\"id\":915,\"name\":\"FunctionDefinition\",\"src\":\"5000:106:2\"},{\"attributes\":{\"functionSelector\":\"d637dcfa\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"registerUser\",\"scope\":1103,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"name\",\"scope\":972,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":916,\"name\":\"ElementaryTypeName\",\"src\":\"5140:6:2\"}],\"id\":917,\"name\":\"VariableDeclaration\",\"src\":\"5140:18:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"email\",\"scope\":972,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":918,\"name\":\"ElementaryTypeName\",\"src\":\"5160:6:2\"}],\"id\":919,\"name\":\"VariableDeclaration\",\"src\":\"5160:19:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"password\",\"scope\":972,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":920,\"name\":\"ElementaryTypeName\",\"src\":\"5181:6:2\"}],\"id\":921,\"name\":\"VariableDeclaration\",\"src\":\"5181:22:2\"}],\"id\":922,\"name\":\"ParameterList\",\"src\":\"5139:65:2\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":923,\"name\":\"ParameterList\",\"src\":\"5212:0:2\"},{\"children\":[{\"attributes\":{\"assignments\":[925]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"u\",\"scope\":971,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.userStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"userStruct\",\"referencedDeclaration\":514,\"type\":\"struct VoteFactory.userStruct\"},\"id\":924,\"name\":\"UserDefinedTypeName\",\"src\":\"5223:10:2\"}],\"id\":925,\"name\":\"VariableDeclaration\",\"src\":\"5223:20:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.userStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":527,\"type\":\"mapping(address => struct VoteFactory.userStruct storage ref)\",\"value\":\"userInfo\"},\"id\":926,\"name\":\"Identifier\",\"src\":\"5246:8:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":927,\"name\":\"Identifier\",\"src\":\"5255:3:2\"}],\"id\":928,\"name\":\"MemberAccess\",\"src\":\"5255:10:2\"}],\"id\":929,\"name\":\"IndexAccess\",\"src\":\"5246:20:2\"}],\"id\":930,\"name\":\"VariableDeclarationStatement\",\"src\":\"5223:43:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"name\",\"referencedDeclaration\":504,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":925,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":931,\"name\":\"Identifier\",\"src\":\"5291:1:2\"}],\"id\":933,\"name\":\"MemberAccess\",\"src\":\"5291:6:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":917,\"type\":\"string memory\",\"value\":\"name\"},\"id\":934,\"name\":\"Identifier\",\"src\":\"5300:4:2\"}],\"id\":935,\"name\":\"Assignment\",\"src\":\"5291:13:2\"}],\"id\":936,\"name\":\"ExpressionStatement\",\"src\":\"5291:13:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"email\",\"referencedDeclaration\":506,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":925,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":937,\"name\":\"Identifier\",\"src\":\"5315:1:2\"}],\"id\":939,\"name\":\"MemberAccess\",\"src\":\"5315:7:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":919,\"type\":\"string memory\",\"value\":\"email\"},\"id\":940,\"name\":\"Identifier\",\"src\":\"5325:5:2\"}],\"id\":941,\"name\":\"Assignment\",\"src\":\"5315:15:2\"}],\"id\":942,\"name\":\"ExpressionStatement\",\"src\":\"5315:15:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"password\",\"referencedDeclaration\":508,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":925,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":943,\"name\":\"Identifier\",\"src\":\"5341:1:2\"}],\"id\":945,\"name\":\"MemberAccess\",\"src\":\"5341:10:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":921,\"type\":\"string memory\",\"value\":\"password\"},\"id\":946,\"name\":\"Identifier\",\"src\":\"5354:8:2\"}],\"id\":947,\"name\":\"Assignment\",\"src\":\"5341:21:2\"}],\"id\":948,\"name\":\"ExpressionStatement\",\"src\":\"5341:21:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"address\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"userAddress\",\"referencedDeclaration\":502,\"type\":\"address\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":925,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":949,\"name\":\"Identifier\",\"src\":\"5373:1:2\"}],\"id\":951,\"name\":\"MemberAccess\",\"src\":\"5373:13:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":952,\"name\":\"Identifier\",\"src\":\"5390:3:2\"}],\"id\":953,\"name\":\"MemberAccess\",\"src\":\"5390:10:2\"}],\"id\":954,\"name\":\"Assignment\",\"src\":\"5373:27:2\"}],\"id\":955,\"name\":\"ExpressionStatement\",\"src\":\"5373:27:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"isAdmin\",\"referencedDeclaration\":513,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":925,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":956,\"name\":\"Identifier\",\"src\":\"5411:1:2\"}],\"id\":958,\"name\":\"MemberAccess\",\"src\":\"5411:9:2\"},{\"attributes\":{\"hexvalue\":\"74727565\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"bool\",\"type\":\"bool\",\"value\":\"true\"},\"id\":959,\"name\":\"Literal\",\"src\":\"5423:4:2\"}],\"id\":960,\"name\":\"Assignment\",\"src\":\"5411:16:2\"}],\"id\":961,\"name\":\"ExpressionStatement\",\"src\":\"5411:16:2\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"bool\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"}],\"overloadedDeclarations\":[null],\"referencedDeclaration\":819,\"type\":\"function (uint32) view returns (bool)\",\"value\":\"isGroup\"},\"id\":962,\"name\":\"Identifier\",\"src\":\"5442:7:2\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":963,\"name\":\"Literal\",\"src\":\"5450:1:2\"}],\"id\":964,\"name\":\"FunctionCall\",\"src\":\"5442:10:2\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"}],\"overloadedDeclarations\":[null],\"referencedDeclaration\":661,\"type\":\"function (uint32)\",\"value\":\"registerGroup\"},\"id\":965,\"name\":\"Identifier\",\"src\":\"5469:13:2\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":966,\"name\":\"Literal\",\"src\":\"5483:1:2\"}],\"id\":967,\"name\":\"FunctionCall\",\"src\":\"5469:16:2\"}],\"id\":968,\"name\":\"ExpressionStatement\",\"src\":\"5469:16:2\"}],\"id\":969,\"name\":\"Block\",\"src\":\"5454:43:2\"}],\"id\":970,\"name\":\"IfStatement\",\"src\":\"5438:59:2\"}],\"id\":971,\"name\":\"Block\",\"src\":\"5212:292:2\"}],\"id\":972,\"name\":\"FunctionDefinition\",\"src\":\"5118:386:2\"},{\"attributes\":{\"functionSelector\":\"fa954aa0\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"createVote\",\"scope\":1103,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"typeOf\",\"scope\":996,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":973,\"name\":\"ElementaryTypeName\",\"src\":\"5532:4:2\"}],\"id\":974,\"name\":\"VariableDeclaration\",\"src\":\"5532:11:2\"}],\"id\":975,\"name\":\"ParameterList\",\"src\":\"5531:13:2\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":976,\"name\":\"ParameterList\",\"src\":\"5551:0:2\"},{\"children\":[{\"attributes\":{\"assignments\":[978]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"newVote\",\"scope\":995,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":977,\"name\":\"ElementaryTypeName\",\"src\":\"5562:7:2\"}],\"id\":978,\"name\":\"VariableDeclaration\",\"src\":\"5562:15:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"address\",\"type_conversion\":true},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_contract$_Vote_$489\",\"typeString\":\"contract Vote\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"type\":\"type(address)\"},\"children\":[{\"attributes\":{\"name\":\"address\"},\"id\":979,\"name\":\"ElementaryTypeName\",\"src\":\"5580:7:2\"}],\"id\":980,\"name\":\"ElementaryTypeNameExpression\",\"src\":\"5580:7:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"contract Vote\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"function (address,uint256) returns (contract Vote)\"},\"children\":[{\"attributes\":{\"name\":\"Vote\",\"referencedDeclaration\":489,\"type\":\"contract Vote\"},\"id\":981,\"name\":\"UserDefinedTypeName\",\"src\":\"5592:4:2\"}],\"id\":982,\"name\":\"NewExpression\",\"src\":\"5588:8:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":983,\"name\":\"Identifier\",\"src\":\"5597:3:2\"}],\"id\":984,\"name\":\"MemberAccess\",\"src\":\"5597:10:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":974,\"type\":\"uint256\",\"value\":\"typeOf\"},\"id\":985,\"name\":\"Identifier\",\"src\":\"5609:6:2\"}],\"id\":986,\"name\":\"FunctionCall\",\"src\":\"5588:28:2\"}],\"id\":987,\"name\":\"FunctionCall\",\"src\":\"5580:37:2\"}],\"id\":988,\"name\":\"VariableDeclarationStatement\",\"src\":\"5562:55:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"push\",\"type\":\"function (address)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":523,\"type\":\"address[] storage ref\",\"value\":\"deployedVotes\"},\"id\":989,\"name\":\"Identifier\",\"src\":\"5628:13:2\"}],\"id\":991,\"name\":\"MemberAccess\",\"src\":\"5628:18:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":978,\"type\":\"address\",\"value\":\"newVote\"},\"id\":992,\"name\":\"Identifier\",\"src\":\"5647:7:2\"}],\"id\":993,\"name\":\"FunctionCall\",\"src\":\"5628:27:2\"}],\"id\":994,\"name\":\"ExpressionStatement\",\"src\":\"5628:27:2\"}],\"id\":995,\"name\":\"Block\",\"src\":\"5551:112:2\"}],\"id\":996,\"name\":\"FunctionDefinition\",\"src\":\"5512:151:2\"},{\"attributes\":{\"functionSelector\":\"1c14ce5e\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"loginUser\",\"scope\":1103,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"password\",\"scope\":1036,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":997,\"name\":\"ElementaryTypeName\",\"src\":\"5688:6:2\"}],\"id\":998,\"name\":\"VariableDeclaration\",\"src\":\"5688:22:2\"}],\"id\":999,\"name\":\"ParameterList\",\"src\":\"5687:24:2\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":1036,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":1000,\"name\":\"ElementaryTypeName\",\"src\":\"5733:6:2\"}],\"id\":1001,\"name\":\"VariableDeclaration\",\"src\":\"5733:13:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":1036,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":1002,\"name\":\"ElementaryTypeName\",\"src\":\"5748:6:2\"}],\"id\":1003,\"name\":\"VariableDeclaration\",\"src\":\"5748:13:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":1036,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"uint32[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"uint32[]\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":1004,\"name\":\"ElementaryTypeName\",\"src\":\"5763:6:2\"}],\"id\":1005,\"name\":\"ArrayTypeName\",\"src\":\"5763:8:2\"}],\"id\":1006,\"name\":\"VariableDeclaration\",\"src\":\"5763:15:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":1036,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"bool\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":1007,\"name\":\"ElementaryTypeName\",\"src\":\"5780:4:2\"}],\"id\":1008,\"name\":\"VariableDeclaration\",\"src\":\"5780:4:2\"}],\"id\":1009,\"name\":\"ParameterList\",\"src\":\"5732:53:2\"},{\"children\":[{\"attributes\":{\"assignments\":[1011]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"u\",\"scope\":1035,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.userStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"userStruct\",\"referencedDeclaration\":514,\"type\":\"struct VoteFactory.userStruct\"},\"id\":1010,\"name\":\"UserDefinedTypeName\",\"src\":\"5796:10:2\"}],\"id\":1011,\"name\":\"VariableDeclaration\",\"src\":\"5796:20:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.userStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":527,\"type\":\"mapping(address => struct VoteFactory.userStruct storage ref)\",\"value\":\"userInfo\"},\"id\":1012,\"name\":\"Identifier\",\"src\":\"5819:8:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":1013,\"name\":\"Identifier\",\"src\":\"5828:3:2\"}],\"id\":1014,\"name\":\"MemberAccess\",\"src\":\"5828:10:2\"}],\"id\":1015,\"name\":\"IndexAccess\",\"src\":\"5819:20:2\"}],\"id\":1016,\"name\":\"VariableDeclarationStatement\",\"src\":\"5796:43:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"type\":\"function (bool) pure\",\"value\":\"require\"},\"id\":1017,\"name\":\"Identifier\",\"src\":\"5849:7:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"bool\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"},{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}],\"overloadedDeclarations\":[null],\"referencedDeclaration\":1102,\"type\":\"function (string memory,string memory) pure returns (bool)\",\"value\":\"compareStrings\"},\"id\":1018,\"name\":\"Identifier\",\"src\":\"5857:14:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":998,\"type\":\"string memory\",\"value\":\"password\"},\"id\":1019,\"name\":\"Identifier\",\"src\":\"5872:8:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"password\",\"referencedDeclaration\":508,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":1011,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":1020,\"name\":\"Identifier\",\"src\":\"5882:1:2\"}],\"id\":1021,\"name\":\"MemberAccess\",\"src\":\"5882:10:2\"}],\"id\":1022,\"name\":\"FunctionCall\",\"src\":\"5857:36:2\"}],\"id\":1023,\"name\":\"FunctionCall\",\"src\":\"5849:45:2\"}],\"id\":1024,\"name\":\"ExpressionStatement\",\"src\":\"5849:45:2\"},{\"attributes\":{\"functionReturnParameters\":1009},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"tuple(string storage ref,string storage ref,uint32[] storage ref,bool)\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"name\",\"referencedDeclaration\":504,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":1011,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":1025,\"name\":\"Identifier\",\"src\":\"5948:1:2\"}],\"id\":1026,\"name\":\"MemberAccess\",\"src\":\"5948:6:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"email\",\"referencedDeclaration\":506,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":1011,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":1027,\"name\":\"Identifier\",\"src\":\"5956:1:2\"}],\"id\":1028,\"name\":\"MemberAccess\",\"src\":\"5956:7:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"groups\",\"referencedDeclaration\":511,\"type\":\"uint32[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":1011,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":1029,\"name\":\"Identifier\",\"src\":\"5965:1:2\"}],\"id\":1030,\"name\":\"MemberAccess\",\"src\":\"5965:8:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"isAdmin\",\"referencedDeclaration\":513,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":1011,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":1031,\"name\":\"Identifier\",\"src\":\"5975:1:2\"}],\"id\":1032,\"name\":\"MemberAccess\",\"src\":\"5975:9:2\"}],\"id\":1033,\"name\":\"TupleExpression\",\"src\":\"5947:38:2\"}],\"id\":1034,\"name\":\"Return\",\"src\":\"5941:44:2\"}],\"id\":1035,\"name\":\"Block\",\"src\":\"5786:207:2\"}],\"id\":1036,\"name\":\"FunctionDefinition\",\"src\":\"5669:324:2\"},{\"attributes\":{\"functionSelector\":\"832880e7\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"getUser\",\"scope\":1103,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":1037,\"name\":\"ParameterList\",\"src\":\"6050:2:2\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":1066,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":1038,\"name\":\"ElementaryTypeName\",\"src\":\"6074:6:2\"}],\"id\":1039,\"name\":\"VariableDeclaration\",\"src\":\"6074:13:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":1066,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":1040,\"name\":\"ElementaryTypeName\",\"src\":\"6089:6:2\"}],\"id\":1041,\"name\":\"VariableDeclaration\",\"src\":\"6089:13:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":1066,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"uint32[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"uint32[]\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":1042,\"name\":\"ElementaryTypeName\",\"src\":\"6104:6:2\"}],\"id\":1043,\"name\":\"ArrayTypeName\",\"src\":\"6104:8:2\"}],\"id\":1044,\"name\":\"VariableDeclaration\",\"src\":\"6104:15:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":1066,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"bool\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":1045,\"name\":\"ElementaryTypeName\",\"src\":\"6121:4:2\"}],\"id\":1046,\"name\":\"VariableDeclaration\",\"src\":\"6121:4:2\"}],\"id\":1047,\"name\":\"ParameterList\",\"src\":\"6073:53:2\"},{\"children\":[{\"attributes\":{\"assignments\":[1049]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"u\",\"scope\":1065,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.userStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"userStruct\",\"referencedDeclaration\":514,\"type\":\"struct VoteFactory.userStruct\"},\"id\":1048,\"name\":\"UserDefinedTypeName\",\"src\":\"6137:10:2\"}],\"id\":1049,\"name\":\"VariableDeclaration\",\"src\":\"6137:20:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.userStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":527,\"type\":\"mapping(address => struct VoteFactory.userStruct storage ref)\",\"value\":\"userInfo\"},\"id\":1050,\"name\":\"Identifier\",\"src\":\"6160:8:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":1051,\"name\":\"Identifier\",\"src\":\"6169:3:2\"}],\"id\":1052,\"name\":\"MemberAccess\",\"src\":\"6169:10:2\"}],\"id\":1053,\"name\":\"IndexAccess\",\"src\":\"6160:20:2\"}],\"id\":1054,\"name\":\"VariableDeclarationStatement\",\"src\":\"6137:43:2\"},{\"attributes\":{\"functionReturnParameters\":1047},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"tuple(string storage ref,string storage ref,uint32[] storage ref,bool)\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"name\",\"referencedDeclaration\":504,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":1049,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":1055,\"name\":\"Identifier\",\"src\":\"6198:1:2\"}],\"id\":1056,\"name\":\"MemberAccess\",\"src\":\"6198:6:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"email\",\"referencedDeclaration\":506,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":1049,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":1057,\"name\":\"Identifier\",\"src\":\"6206:1:2\"}],\"id\":1058,\"name\":\"MemberAccess\",\"src\":\"6206:7:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"groups\",\"referencedDeclaration\":511,\"type\":\"uint32[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":1049,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":1059,\"name\":\"Identifier\",\"src\":\"6215:1:2\"}],\"id\":1060,\"name\":\"MemberAccess\",\"src\":\"6215:8:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"isAdmin\",\"referencedDeclaration\":513,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":1049,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":1061,\"name\":\"Identifier\",\"src\":\"6225:1:2\"}],\"id\":1062,\"name\":\"MemberAccess\",\"src\":\"6225:9:2\"}],\"id\":1063,\"name\":\"TupleExpression\",\"src\":\"6197:38:2\"}],\"id\":1064,\"name\":\"Return\",\"src\":\"6191:44:2\"}],\"id\":1065,\"name\":\"Block\",\"src\":\"6126:117:2\"}],\"id\":1066,\"name\":\"FunctionDefinition\",\"src\":\"6034:209:2\"},{\"attributes\":{\"functionSelector\":\"ca9cdfff\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"getDeployedVotes\",\"scope\":1103,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":1067,\"name\":\"ParameterList\",\"src\":\"6280:2:2\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":1075,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":1068,\"name\":\"ElementaryTypeName\",\"src\":\"6304:7:2\"}],\"id\":1069,\"name\":\"ArrayTypeName\",\"src\":\"6304:9:2\"}],\"id\":1070,\"name\":\"VariableDeclaration\",\"src\":\"6304:16:2\"}],\"id\":1071,\"name\":\"ParameterList\",\"src\":\"6303:18:2\"},{\"children\":[{\"attributes\":{\"functionReturnParameters\":1071},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":523,\"type\":\"address[] storage ref\",\"value\":\"deployedVotes\"},\"id\":1072,\"name\":\"Identifier\",\"src\":\"6340:13:2\"}],\"id\":1073,\"name\":\"Return\",\"src\":\"6333:20:2\"}],\"id\":1074,\"name\":\"Block\",\"src\":\"6322:39:2\"}],\"id\":1075,\"name\":\"FunctionDefinition\",\"src\":\"6255:106:2\"},{\"attributes\":{\"functionSelector\":\"bed34bba\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"compareStrings\",\"scope\":1103,\"stateMutability\":\"pure\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"a\",\"scope\":1102,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":1076,\"name\":\"ElementaryTypeName\",\"src\":\"6572:6:2\"}],\"id\":1077,\"name\":\"VariableDeclaration\",\"src\":\"6572:15:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"b\",\"scope\":1102,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":1078,\"name\":\"ElementaryTypeName\",\"src\":\"6589:6:2\"}],\"id\":1079,\"name\":\"VariableDeclaration\",\"src\":\"6589:15:2\"}],\"id\":1080,\"name\":\"ParameterList\",\"src\":\"6571:34:2\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":1102,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"bool\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":1081,\"name\":\"ElementaryTypeName\",\"src\":\"6627:4:2\"}],\"id\":1082,\"name\":\"VariableDeclaration\",\"src\":\"6627:4:2\"}],\"id\":1083,\"name\":\"ParameterList\",\"src\":\"6626:6:2\"},{\"children\":[{\"attributes\":{\"functionReturnParameters\":1083},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_bytes32\",\"typeString\":\"bytes32\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"bytes32\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bytes_memory_ptr\",\"typeString\":\"bytes memory\"}],\"overloadedDeclarations\":[null],\"referencedDeclaration\":-8,\"type\":\"function (bytes memory) pure returns (bytes32)\",\"value\":\"keccak256\"},\"id\":1084,\"name\":\"Identifier\",\"src\":\"6652:9:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"bytes memory\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"member_name\":\"encodePacked\",\"type\":\"function () pure returns (bytes memory)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-1,\"type\":\"abi\",\"value\":\"abi\"},\"id\":1085,\"name\":\"Identifier\",\"src\":\"6662:3:2\"}],\"id\":1086,\"name\":\"MemberAccess\",\"src\":\"6662:16:2\"},{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"string memory\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":1077,\"type\":\"string memory\",\"value\":\"a\"},\"id\":1087,\"name\":\"Identifier\",\"src\":\"6680:1:2\"}],\"id\":1088,\"name\":\"TupleExpression\",\"src\":\"6679:3:2\"}],\"id\":1089,\"name\":\"FunctionCall\",\"src\":\"6662:21:2\"}],\"id\":1090,\"name\":\"FunctionCall\",\"src\":\"6652:32:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"bytes32\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bytes_memory_ptr\",\"typeString\":\"bytes memory\"}],\"overloadedDeclarations\":[null],\"referencedDeclaration\":-8,\"type\":\"function (bytes memory) pure returns (bytes32)\",\"value\":\"keccak256\"},\"id\":1091,\"name\":\"Identifier\",\"src\":\"6688:9:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"bytes memory\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"member_name\":\"encodePacked\",\"type\":\"function () pure returns (bytes memory)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-1,\"type\":\"abi\",\"value\":\"abi\"},\"id\":1092,\"name\":\"Identifier\",\"src\":\"6698:3:2\"}],\"id\":1093,\"name\":\"MemberAccess\",\"src\":\"6698:16:2\"},{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"string memory\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":1079,\"type\":\"string memory\",\"value\":\"b\"},\"id\":1094,\"name\":\"Identifier\",\"src\":\"6716:1:2\"}],\"id\":1095,\"name\":\"TupleExpression\",\"src\":\"6715:3:2\"}],\"id\":1096,\"name\":\"FunctionCall\",\"src\":\"6698:21:2\"}],\"id\":1097,\"name\":\"FunctionCall\",\"src\":\"6688:32:2\"}],\"id\":1098,\"name\":\"BinaryOperation\",\"src\":\"6652:68:2\"}],\"id\":1099,\"name\":\"TupleExpression\",\"src\":\"6651:70:2\"}],\"id\":1100,\"name\":\"Return\",\"src\":\"6644:77:2\"}],\"id\":1101,\"name\":\"Block\",\"src\":\"6633:96:2\"}],\"id\":1102,\"name\":\"FunctionDefinition\",\"src\":\"6548:181:2\"}],\"id\":1103,\"name\":\"ContractDefinition\",\"src\":\"92:6643:2\"}],\"id\":1104,\"name\":\"SourceUnit\",\"src\":\"0:6735:2\"},\"compiler\":{\"name\":\"solc\",\"version\":\"0.7.4+commit.3f05b770.Emscripten.clang\"},\"networks\":{\"5777\":{\"events\":{},\"links\":{},\"address\":\"0x49BDb4D2FC925aef7f34209083e84efdE7ccbf32\",\"transactionHash\":\"0x057e0bd0824c60613f746f2c32dfdf5ceb77827936726c8ea8e92448f1bfcfb8\"}},\"schemaVersion\":\"3.3.3\",\"updatedAt\":\"2021-04-01T21:42:06.854Z\",\"networkType\":\"ethereum\",\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}}");

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

/***/ "./src/pages/newElection.js":
/*!**********************************!*\
  !*** ./src/pages/newElection.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contracts/VoteFactory.json */ "./src/contracts/VoteFactory.json");
var _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/VoteFactory.json */ "./src/contracts/VoteFactory.json", 1);
/* harmony import */ var _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contracts/Vote.json */ "./src/contracts/Vote.json");
var _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/Vote.json */ "./src/contracts/Vote.json", 1);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _getWeb3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../getWeb3 */ "./src/getWeb3.js");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\foubroker\\Desktop\\BAM\\voting-at-mcgill-2\\client\\src\\pages\\newElection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const adminTitle = {
  color: "red",
  marginBottom: "5%",
  fontSize: "3em",
  textAlign: "center"
};
const adminFields = {
  margin: "auto 5% auto 5%"
};

const NewElection = () => {
  const {
    0: web3,
    1: setWeb3
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: manager,
    1: setManager
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: voteFactory,
    1: setVoteFactory
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: groupsID,
    1: setGroupsID
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: title,
    1: setTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: startDate,
    1: setStartDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: endDate,
    1: setEndDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: electionType,
    1: setElectionType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('majority');
  const {
    0: electionGroups,
    1: setElectionGroups
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: description,
    1: setDescription
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''); // initializing web3

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    var web3Instance;

    async function initWeb3() {
      web3Instance = await Object(_getWeb3__WEBPACK_IMPORTED_MODULE_5__["default"])();
      setWeb3(web3Instance);
    }

    initWeb3();
  }, []); // Initializing VoteFactory contract

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function setup() {
      if (web3 == "") {
        console.log('unable to get factory');
        return;
      }

      try {
        var [user] = await web3.eth.getAccounts();
        setManager(user);
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_2__.networks[networkId];
        const instance = new web3.eth.Contract(_contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_2__.abi, deployedNetwork && deployedNetwork.address);
        setVoteFactory(instance);
      } catch (error) {
        alert(`Failed to load web3, accounts, or contract. Check console for details.`);
        console.error(error);
      }
    }

    setup();
  }, [web3]); // Return all group IDs of a user as an array

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    var displayVotes = async () => {
      if (voteFactory == '') {
        return;
      }

      const response = await voteFactory.methods.getUserAllGroups().call();
      const temp = [];

      for (var i = 0; i < response.length; i++) {
        temp[i] = parseInt(response[i]);
      }

      console.log(temp);
      setGroupsID(temp);
    };

    displayVotes();
  }, [voteFactory]);
  const electionTypes = [{
    key: 'sm',
    text: 'simple majority',
    value: 'majority'
  }, {
    key: 'tt',
    text: 'two thirds',
    value: 'twoThirds'
  }];

  var onSubmit = async event => {
    event.preventDefault();
    var factoryContract;
    var voteContract;
    var addressOfVote;

    var setupVoteFactory = async () => {
      //initializes voteFactory
      if (web3 == '') {
        return;
      }

      try {
        // Get the contract instance.
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

    var createVote = async () => {
      //uses voteFactory to create Vote
      if (factoryContract == '') {
        return;
      } // Get the value from the contract to prove it worked.


      await factoryContract.methods.createVote(0).send({
        from: manager
      });
    };

    var getElectionAddress = async () => {
      //calls voteFactory method to get new Vote address
      const response = await factoryContract.methods.getDeployedVotes().call();
      addressOfVote = response[response.length - 1];
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

    var setUpElection = async () => {
      //call to vote contract to edit election
      if (!voteContract) {
        console.log("voteContract dne");
        return;
      }

      await voteContract.methods.editElection(title, new Date(startDate).getTime(), new Date(endDate).getTime(), description, electionType).send({
        from: manager
      });
    };

    var displayVote = async () => {
      // testing purposes
      const summary = await voteContract.methods.currentElection().call();
      console.log(summary);
    };

    await setupVoteFactory();
    await createVote();
    await getElectionAddress();
    await initializeElection();
    await setUpElection();
    await displayVote();
    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/");
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }
  }), __jsx("h1", {
    style: adminTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }
  }, "New Election"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    onSubmit: onSubmit,
    style: adminFields,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Input, {
    required: true,
    label: "Election title",
    value: title,
    onChange: event => setTitle(event.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Input, {
    label: "Start date",
    type: "date",
    value: startDate,
    onChange: event => setStartDate(event.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Input, {
    required: true,
    label: "End date",
    type: "date",
    value: endDate,
    onChange: event => setEndDate(event.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Select, {
    fluid: true,
    label: "Type of election",
    options: electionTypes,
    placeholder: "Type of election",
    value: electionType,
    onChange: event => setElectionType(event.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
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
      lineNumber: 236,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Button, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 21
    }
  }, "Cancel"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Button, {
    type: "submit",
    onSubmit: onSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 21
    }
  }, "Publish Election"))));
};

/* harmony default export */ __webpack_exports__["default"] = (NewElection);

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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