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
var _jsxFileName = "C:\\Users\\foubroker\\PROJECT_VOTE\\voting-at-mcgill\\client\\src\\components\\header.js";
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

module.exports = JSON.parse("{\"contractName\":\"Vote\",\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"managerOfVote\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"typeOf\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"candidateArray\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"candidateAddr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"numVotes\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"candidates\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"candidateAddr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"numVotes\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"candidatesAddresses\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"candidatesCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"currentElection\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"startDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endDate\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"numVotes\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"typeOfElection\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"currentPetition\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"startDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endDate\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"numSigned\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"manager\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"startDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endDate\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"typeOfElection\",\"type\":\"string\"}],\"name\":\"editElection\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"startDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endDate\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"}],\"name\":\"editPetition\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"candidateAddress\",\"type\":\"address\"}],\"name\":\"voteFor\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"current_date\",\"type\":\"uint256\"}],\"name\":\"enterElection\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"current_date\",\"type\":\"uint256\"}],\"name\":\"leaveElection\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"candaddr\",\"type\":\"address\"}],\"name\":\"get_candidates\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"candAddr\",\"type\":\"address\"}],\"name\":\"getCandidateVoters\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"voterAddr\",\"type\":\"address\"}],\"name\":\"getElectionVoter\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.7.4+commit.3f05b770\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"managerOfVote\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"typeOf\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"constructor\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"candidateArray\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"candidateAddr\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"numVotes\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"candidates\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"candidateAddr\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"numVotes\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"candidatesAddresses\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"candidatesCount\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"currentElection\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"title\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"startDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"endDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"numVotes\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"typeOfElection\\\",\\\"type\\\":\\\"string\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"currentPetition\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"title\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"startDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"endDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"numSigned\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"title\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"startDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"endDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"typeOfElection\\\",\\\"type\\\":\\\"string\\\"}],\\\"name\\\":\\\"editElection\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"title\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"startDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"endDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"}],\\\"name\\\":\\\"editPetition\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"current_date\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"enterElection\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"candAddr\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"getCandidateVoters\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address[]\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address[]\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"voterAddr\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"getElectionVoter\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"candaddr\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"get_candidates\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"current_date\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"leaveElection\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"manager\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"candidateAddress\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"voteFor\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"}],\\\"devdoc\\\":{\\\"kind\\\":\\\"dev\\\",\\\"methods\\\":{},\\\"version\\\":1},\\\"userdoc\\\":{\\\"kind\\\":\\\"user\\\",\\\"methods\\\":{},\\\"version\\\":1}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/Vote.sol\\\":\\\"Vote\\\"},\\\"evmVersion\\\":\\\"istanbul\\\",\\\"libraries\\\":{},\\\"metadata\\\":{\\\"bytecodeHash\\\":\\\"ipfs\\\"},\\\"optimizer\\\":{\\\"enabled\\\":false,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/Vote.sol\\\":{\\\"keccak256\\\":\\\"0xd7766b3be4a94dfe011a0c684b8e7f4240c93d7abaecd18dde80475fb619500b\\\",\\\"license\\\":\\\"UNLICENSED\\\",\\\"urls\\\":[\\\"bzz-raw://0c7caed57275a0e0adf6f75b9d6882ec95af0b9c658a43bdeaa3e17e39e0bb85\\\",\\\"dweb:/ipfs/QmajRXHW21pcVzcYTnKBTEzi66tSrndRYXJLtm48stpLAG\\\"]}},\\\"version\\\":1}\",\"bytecode\":\"0x608060405234801561001057600080fd5b506040516124333803806124338339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060001461009d5760016100a0565b60005b60ff166002819055505050612379806100ba6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80638ab66a9011610097578063da3550ee11610066578063da3550ee146109de578063dcfda00f14610a22578063e1c5fcc114610c1f578063fcae83a714610c79576100f5565b80638ab66a90146106a157806395115447146107ee578063ad0dcf9c14610887578063af47fb3f146109b0576100f5565b806367127e43116100d357806367127e4314610283578063691a675c146103e95780637432e63a146104ed578063869eae2314610545576100f5565b80632d35a8a2146100fa57806335a893a114610118578063481c6a751461024f575b600080fd5b610102610de9565b6040518082815260200191505060405180910390f35b6101446004803603602081101561012e57600080fd5b8101908080359060200190929190505050610def565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156101aa57808201518184015260208101905061018f565b50505050905090810190601f1680156101d75780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156102105780820151818401526020810190506101f5565b50505050905090810190601f16801561023d5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b610257610f7f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103e76004803603608081101561029957600080fd5b81019080803590602001906401000000008111156102b657600080fd5b8201836020820111156102c857600080fd5b803590602001918460018302840111640100000000831117156102ea57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803590602001909291908035906020019064010000000081111561036157600080fd5b82018360208201111561037357600080fd5b8035906020019184600183028401116401000000008311171561039557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610fa3565b005b6103f161105b565b604051808060200186815260200185815260200180602001848152602001838103835288818151815260200191508051906020019080838360005b8381101561044757808201518184015260208101905061042c565b50505050905090810190601f1680156104745780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b838110156104ad578082015181840152602081019050610492565b50505050905090810190601f1680156104da5780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b6105196004803603602081101561050357600080fd5b81019080803590602001909291905050506111af565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61069f6004803603606081101561055b57600080fd5b810190808035906020019064010000000081111561057857600080fd5b82018360208201111561058a57600080fd5b803590602001918460018302840111640100000000831117156105ac57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561060f57600080fd5b82018360208201111561062157600080fd5b8035906020019184600183028401116401000000008311171561064357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291905050506111ee565b005b6106e3600480360360208110156106b757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113f4565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561074957808201518184015260208101905061072e565b50505050905090810190601f1680156107765780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156107af578082015181840152602081019050610794565b50505050905090810190601f1680156107dc5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b6108306004803603602081101561080457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611574565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610873578082015181840152602081019050610858565b505050509050019250505060405180910390f35b6108c96004803603602081101561089d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611653565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b8381101561090d5780820151818401526020810190506108f2565b50505050905090810190601f16801561093a5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015610973578082015181840152602081019050610958565b50505050905090810190601f1680156109a05780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b6109dc600480360360208110156109c657600080fd5b810190808035906020019092919050505061182a565b005b610a20600480360360208110156109f457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611bb5565b005b610c1d600480360360a0811015610a3857600080fd5b8101908080359060200190640100000000811115610a5557600080fd5b820183602082011115610a6757600080fd5b80359060200191846001830284011164010000000083111715610a8957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291908035906020019092919080359060200190640100000000811115610b0057600080fd5b820183602082011115610b1257600080fd5b80359060200191846001830284011164010000000083111715610b3457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610b9757600080fd5b820183602082011115610ba957600080fd5b80359060200191846001830284011164010000000083111715610bcb57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611e1e565b005b610c6160048036036020811015610c3557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611ef0565b60405180821515815260200191505060405180910390f35b610c81611f56565b6040518080602001878152602001868152602001806020018581526020018060200184810384528a818151815260200191508051906020019080838360005b83811015610cdb578082015181840152602081019050610cc0565b50505050905090810190601f168015610d085780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610d41578082015181840152602081019050610d26565b50505050905090810190601f168015610d6e5780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b83811015610da7578082015181840152602081019050610d8c565b50505050905090810190601f168015610dd45780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b60015481565b60048181548110610dff57600080fd5b90600052602060002090600502016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ed75780601f10610eac57610100808354040283529160200191610ed7565b820191906000526020600020905b815481529060010190602001808311610eba57829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f755780601f10610f4a57610100808354040283529160200191610f75565b820191906000526020600020905b815481529060010190602001808311610f5857829003601f168201915b5050505050905084565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ffb57600080fd5b60016002541461100a57600080fd5b6000600d905084816000019080519060200190611028929190612148565b5083816001018190555082816002018190555081816003019080519060200190611053929190612148565b505050505050565b600d806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110f55780601f106110ca576101008083540402835291602001916110f5565b820191906000526020600020905b8154815290600101906020018083116110d857829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561119f5780601f106111745761010080835404028352916020019161119f565b820191906000526020600020905b81548152906001019060200180831161118257829003601f168201915b5050505050908060040154905085565b600581815481106111bf57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600254146111fd57600080fd5b60066001015481118015611215575060066002015481105b61121e57600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905083816003019080519060200190611279929190612148565b5082816004019080519060200190611292929190612148565b50338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060048190806001815401808255809150506001900390600052602060002090600502016000909190919091506000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001820154816001015560028201816002019080546113899291906121d6565b50600382018160030190805460018160011615610100020316600290046113b1929190612228565b50600482018160040190805460018160011615610100020316600290046113d9929190612228565b50505060016000815480929190600101919050555050505050565b60036020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114cc5780601f106114a1576101008083540402835291602001916114cc565b820191906000526020600020905b8154815290600101906020018083116114af57829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561156a5780601f1061153f5761010080835404028352916020019161156a565b820191906000526020600020905b81548152906001019060200180831161154d57829003601f168201915b5050505050905084565b606060006002541461158557600080fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020180548060200260200160405190810160405280929190818152602001828054801561164757602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116115fd575b50505050509050919050565b60608060006002541461166557600080fd5b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401818054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561177e5780601f106117535761010080835404028352916020019161177e565b820191906000526020600020905b81548152906001019060200180831161176157829003601f168201915b50505050509150808054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561181a5780601f106117ef5761010080835404028352916020019161181a565b820191906000526020600020905b8154815290600101906020018083116117fd57829003601f168201915b5050505050905091509150915091565b60006002541461183957600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050604051806020016040528060008152508160030190805190602001906118a3929190612148565b50604051806020016040528060008152508160040190805190602001906118cb929190612148565b50600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000905560028201600061194b91906122bd565b60038201600061195b91906122de565b60048201600061196b91906122de565b505060005b600480549050811015611b9d576004818154811061198a57fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415611b9057600460016004805490500381548110611a0457fe5b906000526020600020906005020160048281548110611a1f57fe5b90600052602060002090600502016000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600182015481600101556002820181600201908054611ab49291906121d6565b5060038201816003019080546001816001161561010002031660029004611adc929190612228565b5060048201816004019080546001816001161561010002031660029004611b04929190612228565b509050506004805480611b1357fe5b6001900381819060005260206000209060050201600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160009055600282016000611b6791906122bd565b600382016000611b7791906122de565b600482016000611b8791906122de565b50509055611b9d565b8080600101915050611970565b50600160008154809291906001900391905055505050565b600060025414611bc457600080fd5b600015156006800160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151415611e1b57600073ffffffffffffffffffffffffffffffffffffffff16600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611e1a5760016006800160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600660040160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611e7657600080fd5b600060025414611e8557600080fd5b60006006905085816000019080519060200190611ea3929190612148565b5084816001018190555083816002018190555082816003019080519060200190611ece929190612148565b5081816005019080519060200190611ee7929190612148565b50505050505050565b60008060025414611f0057600080fd5b6006800160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6006806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611ff05780601f10611fc557610100808354040283529160200191611ff0565b820191906000526020600020905b815481529060010190602001808311611fd357829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561209a5780601f1061206f5761010080835404028352916020019161209a565b820191906000526020600020905b81548152906001019060200180831161207d57829003601f168201915b505050505090806004015490806005018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561213e5780601f106121135761010080835404028352916020019161213e565b820191906000526020600020905b81548152906001019060200180831161212157829003601f168201915b5050505050905086565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928261217e57600085556121c5565b82601f1061219757805160ff19168380011785556121c5565b828001600101855582156121c5579182015b828111156121c45782518255916020019190600101906121a9565b5b5090506121d29190612326565b5090565b8280548282559060005260206000209081019282156122175760005260206000209182015b828111156122165782548255916001019190600101906121fb565b5b5090506122249190612326565b5090565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928261225e57600085556122ac565b82601f1061226f57805485556122ac565b828001600101855582156122ac57600052602060002091601f016020900482015b828111156122ab578254825591600101919060010190612290565b5b5090506122b99190612326565b5090565b50805460008255906000526020600020908101906122db9190612326565b50565b50805460018160011615610100020316600290046000825580601f106123045750612323565b601f0160209004906000526020600020908101906123229190612326565b5b50565b5b8082111561233f576000816000905550600101612327565b509056fea26469706673582212209dc101c5039a4455f87503182525aacee0a78da7b35af852e38c7c3852ddf1e364736f6c63430007040033\",\"deployedBytecode\":\"0x608060405234801561001057600080fd5b50600436106100f55760003560e01c80638ab66a9011610097578063da3550ee11610066578063da3550ee146109de578063dcfda00f14610a22578063e1c5fcc114610c1f578063fcae83a714610c79576100f5565b80638ab66a90146106a157806395115447146107ee578063ad0dcf9c14610887578063af47fb3f146109b0576100f5565b806367127e43116100d357806367127e4314610283578063691a675c146103e95780637432e63a146104ed578063869eae2314610545576100f5565b80632d35a8a2146100fa57806335a893a114610118578063481c6a751461024f575b600080fd5b610102610de9565b6040518082815260200191505060405180910390f35b6101446004803603602081101561012e57600080fd5b8101908080359060200190929190505050610def565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156101aa57808201518184015260208101905061018f565b50505050905090810190601f1680156101d75780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156102105780820151818401526020810190506101f5565b50505050905090810190601f16801561023d5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b610257610f7f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103e76004803603608081101561029957600080fd5b81019080803590602001906401000000008111156102b657600080fd5b8201836020820111156102c857600080fd5b803590602001918460018302840111640100000000831117156102ea57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803590602001909291908035906020019064010000000081111561036157600080fd5b82018360208201111561037357600080fd5b8035906020019184600183028401116401000000008311171561039557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610fa3565b005b6103f161105b565b604051808060200186815260200185815260200180602001848152602001838103835288818151815260200191508051906020019080838360005b8381101561044757808201518184015260208101905061042c565b50505050905090810190601f1680156104745780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b838110156104ad578082015181840152602081019050610492565b50505050905090810190601f1680156104da5780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b6105196004803603602081101561050357600080fd5b81019080803590602001909291905050506111af565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61069f6004803603606081101561055b57600080fd5b810190808035906020019064010000000081111561057857600080fd5b82018360208201111561058a57600080fd5b803590602001918460018302840111640100000000831117156105ac57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561060f57600080fd5b82018360208201111561062157600080fd5b8035906020019184600183028401116401000000008311171561064357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291905050506111ee565b005b6106e3600480360360208110156106b757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113f4565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561074957808201518184015260208101905061072e565b50505050905090810190601f1680156107765780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156107af578082015181840152602081019050610794565b50505050905090810190601f1680156107dc5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b6108306004803603602081101561080457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611574565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610873578082015181840152602081019050610858565b505050509050019250505060405180910390f35b6108c96004803603602081101561089d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611653565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b8381101561090d5780820151818401526020810190506108f2565b50505050905090810190601f16801561093a5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015610973578082015181840152602081019050610958565b50505050905090810190601f1680156109a05780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b6109dc600480360360208110156109c657600080fd5b810190808035906020019092919050505061182a565b005b610a20600480360360208110156109f457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611bb5565b005b610c1d600480360360a0811015610a3857600080fd5b8101908080359060200190640100000000811115610a5557600080fd5b820183602082011115610a6757600080fd5b80359060200191846001830284011164010000000083111715610a8957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291908035906020019092919080359060200190640100000000811115610b0057600080fd5b820183602082011115610b1257600080fd5b80359060200191846001830284011164010000000083111715610b3457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610b9757600080fd5b820183602082011115610ba957600080fd5b80359060200191846001830284011164010000000083111715610bcb57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611e1e565b005b610c6160048036036020811015610c3557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611ef0565b60405180821515815260200191505060405180910390f35b610c81611f56565b6040518080602001878152602001868152602001806020018581526020018060200184810384528a818151815260200191508051906020019080838360005b83811015610cdb578082015181840152602081019050610cc0565b50505050905090810190601f168015610d085780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610d41578082015181840152602081019050610d26565b50505050905090810190601f168015610d6e5780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b83811015610da7578082015181840152602081019050610d8c565b50505050905090810190601f168015610dd45780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b60015481565b60048181548110610dff57600080fd5b90600052602060002090600502016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ed75780601f10610eac57610100808354040283529160200191610ed7565b820191906000526020600020905b815481529060010190602001808311610eba57829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f755780601f10610f4a57610100808354040283529160200191610f75565b820191906000526020600020905b815481529060010190602001808311610f5857829003601f168201915b5050505050905084565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ffb57600080fd5b60016002541461100a57600080fd5b6000600d905084816000019080519060200190611028929190612148565b5083816001018190555082816002018190555081816003019080519060200190611053929190612148565b505050505050565b600d806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110f55780601f106110ca576101008083540402835291602001916110f5565b820191906000526020600020905b8154815290600101906020018083116110d857829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561119f5780601f106111745761010080835404028352916020019161119f565b820191906000526020600020905b81548152906001019060200180831161118257829003601f168201915b5050505050908060040154905085565b600581815481106111bf57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600254146111fd57600080fd5b60066001015481118015611215575060066002015481105b61121e57600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905083816003019080519060200190611279929190612148565b5082816004019080519060200190611292929190612148565b50338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060048190806001815401808255809150506001900390600052602060002090600502016000909190919091506000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001820154816001015560028201816002019080546113899291906121d6565b50600382018160030190805460018160011615610100020316600290046113b1929190612228565b50600482018160040190805460018160011615610100020316600290046113d9929190612228565b50505060016000815480929190600101919050555050505050565b60036020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114cc5780601f106114a1576101008083540402835291602001916114cc565b820191906000526020600020905b8154815290600101906020018083116114af57829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561156a5780601f1061153f5761010080835404028352916020019161156a565b820191906000526020600020905b81548152906001019060200180831161154d57829003601f168201915b5050505050905084565b606060006002541461158557600080fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020180548060200260200160405190810160405280929190818152602001828054801561164757602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116115fd575b50505050509050919050565b60608060006002541461166557600080fd5b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401818054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561177e5780601f106117535761010080835404028352916020019161177e565b820191906000526020600020905b81548152906001019060200180831161176157829003601f168201915b50505050509150808054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561181a5780601f106117ef5761010080835404028352916020019161181a565b820191906000526020600020905b8154815290600101906020018083116117fd57829003601f168201915b5050505050905091509150915091565b60006002541461183957600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050604051806020016040528060008152508160030190805190602001906118a3929190612148565b50604051806020016040528060008152508160040190805190602001906118cb929190612148565b50600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000905560028201600061194b91906122bd565b60038201600061195b91906122de565b60048201600061196b91906122de565b505060005b600480549050811015611b9d576004818154811061198a57fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415611b9057600460016004805490500381548110611a0457fe5b906000526020600020906005020160048281548110611a1f57fe5b90600052602060002090600502016000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600182015481600101556002820181600201908054611ab49291906121d6565b5060038201816003019080546001816001161561010002031660029004611adc929190612228565b5060048201816004019080546001816001161561010002031660029004611b04929190612228565b509050506004805480611b1357fe5b6001900381819060005260206000209060050201600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160009055600282016000611b6791906122bd565b600382016000611b7791906122de565b600482016000611b8791906122de565b50509055611b9d565b8080600101915050611970565b50600160008154809291906001900391905055505050565b600060025414611bc457600080fd5b600015156006800160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151415611e1b57600073ffffffffffffffffffffffffffffffffffffffff16600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611e1a5760016006800160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600660040160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611e7657600080fd5b600060025414611e8557600080fd5b60006006905085816000019080519060200190611ea3929190612148565b5084816001018190555083816002018190555082816003019080519060200190611ece929190612148565b5081816005019080519060200190611ee7929190612148565b50505050505050565b60008060025414611f0057600080fd5b6006800160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6006806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611ff05780601f10611fc557610100808354040283529160200191611ff0565b820191906000526020600020905b815481529060010190602001808311611fd357829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561209a5780601f1061206f5761010080835404028352916020019161209a565b820191906000526020600020905b81548152906001019060200180831161207d57829003601f168201915b505050505090806004015490806005018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561213e5780601f106121135761010080835404028352916020019161213e565b820191906000526020600020905b81548152906001019060200180831161212157829003601f168201915b5050505050905086565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928261217e57600085556121c5565b82601f1061219757805160ff19168380011785556121c5565b828001600101855582156121c5579182015b828111156121c45782518255916020019190600101906121a9565b5b5090506121d29190612326565b5090565b8280548282559060005260206000209081019282156122175760005260206000209182015b828111156122165782548255916001019190600101906121fb565b5b5090506122249190612326565b5090565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928261225e57600085556122ac565b82601f1061226f57805485556122ac565b828001600101855582156122ac57600052602060002091601f016020900482015b828111156122ab578254825591600101919060010190612290565b5b5090506122b99190612326565b5090565b50805460008255906000526020600020908101906122db9190612326565b50565b50805460018160011615610100020316600290046000825580601f106123045750612323565b601f0160209004906000526020600020908101906123229190612326565b5b50565b5b8082111561233f576000816000905550600101612327565b509056fea26469706673582212209dc101c5039a4455f87503182525aacee0a78da7b35af852e38c7c3852ddf1e364736f6c63430007040033\",\"immutableReferences\":{},\"generatedSources\":[],\"deployedGeneratedSources\":[],\"sourceMap\":\"68:5282:1:-:0;;;1506:193;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1633:13;1623:7;;:23;;;;;;;;;;;;;;;;;;1676:6;1671:1;:11;1670:21;;1690:1;1670:21;;;1686:1;1670:21;1657:34;;:10;:34;;;;1506:193;;68:5282;;;;;;\",\"deployedSourceMap\":\"68:5282:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;138:27;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1314:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;109:22;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;2115:326;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1466:31;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1354:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;2974:692;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1214:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4778:154;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4580:192;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3700:857;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2472:468;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1707:400;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;4938:148;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;1428:31;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;138:27;;;;:::o;1314:33::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;109:22::-;;;;;;;;;;;;:::o;2115:326::-;5147:7;;;;;;;;;;5133:21;;:10;:21;;;5125:30;;;;;;5323:1:::1;5309:10;;:15;5301:24;;;::::0;::::1;;2269:18:::2;2290:15;2269:36;;2326:5;2316:1;:7;;:15;;;;;;;;;;;;:::i;:::-;;2356:9;2342:1;:11;;:23;;;;2388:7;2376:1;:9;;:19;;;;2422:11;2406:1;:13;;:27;;;;;;;;;;;;:::i;:::-;;5336:1;2115:326:::0;;;;:::o;1466:31::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1354:36::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2974:692::-;5238:1;5224:10;;:15;5216:24;;;;;;3194:15:::1;:25;;;3179:12;:40;:82;;;;;3238:15;:23;;;3223:12;:38;3179:82;3171:91;;;::::0;::::1;;3300:34;3337:10;:22;3348:10;3337:22;;;;;;;;;;;;;;;3300:59;;3394:4;3370:16;:21;;:28;;;;;;;;;;;;:::i;:::-;;3440:11;3409:16;:28;;:42;;;;;;;;;;;;:::i;:::-;;3494:10;3462:16;:30;;;:42;;;;;;;;;;;;;;;;;;3549:14;3569:16;3549:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;3597:15;;:17;;;;;;;;;;;;;5251:1;2974:692:::0;;;:::o;1214:47::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;4778:154::-;4858:16;5238:1;5224:10;;:15;5216:24;;;;;;4895:10:::1;:20;4906:8;4895:20;;;;;;;;;;;;;;;4894:29;;4887:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4778:154:::0;;;:::o;4580:192::-;4656:13;4671;5238:1;5224:10;;:15;5216:24;;;;;;4704:10:::1;:20;4715:8;4704:20;;;;;;;;;;;;;;;:25;;4731:10;:20;4742:8;4731:20;;;;;;;;;;;;;;;:32;;4697:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4580:192:::0;;;:::o;3700:857::-;5238:1;5224:10;;:15;5216:24;;;;;;3983:34:::1;4020:10;:22;4031:10;4020:22;;;;;;;;;;;;;;;3983:59;;4053:26;;;;;;;;;;;::::0;:16:::1;:21;;:26;;;;;;;;;;;;:::i;:::-;;4090:33;;;;;;;;;;;::::0;:16:::1;:28;;:33;;;;;;;;;;;;:::i;:::-;;4215:10;:22;4226:10;4215:22;;;;;;;;;;;;;;;;4208:29:::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;4253:6;4248:274;4267:14;:21;;;;4265:1;:23;4248:274;;;4324:14;4339:1;4324:17;;;;;;;;;;;;;;;;;;:31;;;;;;;;;;;;4312:43;;:10;:43;;;4309:202;;;4393:14;4430:1;4408:14;:21;;;;:23;4393:39;;;;;;;;;;;;;;;;;;4375:14;4390:1;4375:17;;;;;;;;;;;;;;;;;;:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;4451:14;:20;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;4490:5;;4309:202;4290:3;;;;;;;4248:274;;;;4532:15;;:17;;;;;;;;;;;;;;5251:1;3700:857:::0;:::o;2472:468::-;5238:1;5224:10;;:15;5216:24;;;;;;2586:5:::1;2548:43;;:15;:22:::0;::::1;:34;2571:10;2548:34;;;;;;;;;;;;;;;;;;;;;;;;;:43;;;2545:388;;;2664:1;2610:56;;:10;:28;2621:16;2610:28;;;;;;;;;;;;;;;:42;;;;;;;;;;;;:56;;;2607:315;;2724:4;2686:15;:22:::0;::::1;:34;2709:10;2686:34;;;;;;;;;;;;;;;;:42;;;;;;;;;;;;;;;;;;2747:15;:24;;;:26;;;;;;;;;;;;;2793:10;:28;2804:16;2793:28;;;;;;;;;;;;;;;2792:39;;;:41;;;;;;;;;;;;;2853:10;:28;2864:16;2853:28;;;;;;;;;;;;;;;2852:37;;2895:10;2852:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2607:315;2545:388;2472:468:::0;:::o;1707:400::-;5147:7;;;;;;;;;;5133:21;;:10;:21;;;5125:30;;;;;;5238:1:::1;5224:10;;:15;5216:24;;;::::0;::::1;;1891:18:::2;1912:15;1891:36;;1948:5;1938:1;:7;;:15;;;;;;;;;;;;:::i;:::-;;1978:9;1964:1;:11;;:23;;;;2010:7;1998:1;:9;;:19;;;;2044:11;2028:1;:13;;:27;;;;;;;;;;;;:::i;:::-;;2085:14;2066:1;:16;;:33;;;;;;;;;;;;:::i;:::-;;5251:1;1707:400:::0;;;;;:::o;4938:148::-;5017:4;5238:1;5224:10;;:15;5216:24;;;;;;5043:15:::1;:22:::0;::::1;5042:35;5067:9;5042:35;;;;;;;;;;;;;;;;;;;;;;;;;5034:44;;4938:148:::0;;;:::o;1428:31::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o\",\"source\":\"pragma solidity ^0.7.4;\\r\\n//\\\"SPDX-License-Identifier: UNLICENSED\\\"\\r\\n\\r\\ncontract Vote{\\r\\n    //admin address\\r\\n    address public manager;\\r\\n    uint public candidatesCount;\\r\\n\\r\\n    struct user{\\r\\n        string name;\\r\\n        string email;\\r\\n        string password;\\r\\n        address userAddress;\\r\\n        address[] running;\\r\\n        address[] createdElection;\\r\\n        address[] createdPetition;\\r\\n        string userType;\\r\\n    }\\r\\n\\r\\n    struct candidate {\\r\\n        address candidateAddr;\\r\\n        uint numVotes;\\r\\n        address[] voters;\\r\\n        string name;\\r\\n        string description;\\r\\n    }\\r\\n\\r\\n    struct election {\\r\\n        string title;\\r\\n        uint startDate;\\r\\n        uint endDate;\\r\\n        string description;\\r\\n        //think about mapping?\\r\\n        uint numVotes;\\r\\n        string typeOfElection;\\r\\n        mapping(address => bool) voters ; //see if a voter has voted\\r\\n    }\\r\\n    struct petition{\\r\\n        string title;\\r\\n        uint startDate;\\r\\n        uint endDate;\\r\\n        string description;\\r\\n        uint numSigned;\\r\\n        mapping(address=>bool) signed; //see if a user has signed\\r\\n    }\\r\\n    uint typeOfVote; //0 for election and 1 for petition\\r\\n    // mapping(uint => election) public elections;\\r\\n    mapping(address => candidate) public candidates; //maps a candidate's address to the candidate\\r\\n    candidate[] public candidateArray;\\r\\n    address[] public candidatesAddresses;//should replace candidateArray\\r\\n    election public currentElection;\\r\\n    petition public currentPetition;\\r\\n\\r\\n    constructor (address managerOfVote, uint typeOf){   //how does one become an admin?\\r\\n        // constructor\\r\\n        manager = managerOfVote;\\r\\n        typeOfVote = (0 == typeOf) ? 0 : 1;\\r\\n    }\\r\\n\\r\\n    function editElection (string memory title, uint256 startDate, uint256 endDate, string memory description, string memory typeOfElection)\\r\\n    public restricted typeElection {\\r\\n        election storage e = currentElection;\\r\\n        e.title = title;\\r\\n        e.startDate = startDate;\\r\\n        e.endDate = endDate;\\r\\n        e.description = description;\\r\\n        e.typeOfElection = typeOfElection;\\r\\n    }\\r\\n\\r\\n    function editPetition (string memory title, uint256 startDate, uint256 endDate, string memory description)\\r\\n    public restricted typePetition {\\r\\n        petition storage p = currentPetition;\\r\\n        p.title = title;\\r\\n        p.startDate = startDate;\\r\\n        p.endDate = endDate;\\r\\n        p.description = description;\\r\\n    }\\r\\n //vote for a candidate\\r\\n    function voteFor(address candidateAddress) public typeElection{\\r\\n        if(currentElection.voters[msg.sender] == false){\\r\\n            if(candidates[candidateAddress].candidateAddr != address(0)){\\r\\n                currentElection.voters[msg.sender]  = true;\\r\\n                currentElection.numVotes++;\\r\\n                (candidates[candidateAddress]).numVotes++;\\r\\n                (candidates[candidateAddress]).voters.push(msg.sender);\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n    //enter as a candidate\\r\\n    function enterElection(string memory name, string memory description, uint256 current_date)\\r\\n    public typeElection {\\r\\n        //Check if the registration is before the required deadline\\r\\n        require(current_date > currentElection.startDate && current_date < currentElection.endDate);\\r\\n        //enter candidate\\r\\n        candidate storage currentCandidate = candidates[msg.sender];\\r\\n        currentCandidate.name = name;\\r\\n        currentCandidate.description = description;\\r\\n        currentCandidate.candidateAddr= msg.sender;\\r\\n        currentCandidate.voters;\\r\\n        candidateArray.push(currentCandidate);\\r\\n        candidatesCount++;\\r\\n        //candidateAddrs.push(msg.sender);\\r\\n    }\\r\\n\\r\\n    //leave the election\\r\\n    function leaveElection(uint256 current_date)\\r\\n    public typeElection {\\r\\n        //Check if the registration is before the required deadline\\r\\n        //require(current_date > currentElection.startDate && current_date <= currentElection.endDate);\\r\\n        //remove candidate\\r\\n        candidate storage currentCandidate = candidates[msg.sender];\\r\\n        currentCandidate.name = \\\"\\\";\\r\\n        currentCandidate.description = \\\"\\\";\\r\\n        //currentCandidate.candidateAddr= ;\\r\\n        //remove from array\\r\\n        delete candidates[msg.sender];\\r\\n        for (uint i = 0; i<candidateArray.length; i++){\\r\\n            if(msg.sender==candidateArray[i].candidateAddr){\\r\\n                candidateArray[i]=candidateArray[candidateArray.length-1];\\r\\n                candidateArray.pop();\\r\\n                break;\\r\\n            }\\r\\n        }\\r\\n        candidatesCount--;\\r\\n    }\\r\\n\\r\\n    //GETTERS\\r\\n    function get_candidates(address candaddr) public view typeElection returns (string memory, string memory) {\\r\\n        return(candidates[candaddr].name, candidates[candaddr].description);\\r\\n    }\\r\\n    function getCandidateVoters(address candAddr) public view typeElection returns (address[] memory) {\\r\\n        return((candidates[candAddr]).voters);\\r\\n    }\\r\\n    function getElectionVoter(address voterAddr) public view typeElection returns (bool) {\\r\\n        return ((currentElection.voters)[voterAddr]);\\r\\n    }\\r\\n    modifier restricted() {\\r\\n        require(msg.sender == manager);\\r\\n        _;\\r\\n    }\\r\\n    modifier typeElection() {\\r\\n        require(typeOfVote == 0);\\r\\n        _;\\r\\n    }\\r\\n    modifier typePetition() {\\r\\n        require(typeOfVote == 1);\\r\\n        _;\\r\\n    }\\r\\n\\r\\n}\\r\\n\",\"sourcePath\":\"C:\\\\Users\\\\foubroker\\\\PROJECT_VOTE\\\\voting-at-mcgill\\\\contracts\\\\Vote.sol\",\"ast\":{\"absolutePath\":\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/Vote.sol\",\"exportedSymbols\":{\"Vote\":[526]},\"id\":527,\"license\":\"UNLICENSED\",\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":38,\"literals\":[\"solidity\",\"^\",\"0.7\",\".4\"],\"nodeType\":\"PragmaDirective\",\"src\":\"0:23:1\"},{\"abstract\":false,\"baseContracts\":[],\"contractDependencies\":[],\"contractKind\":\"contract\",\"fullyImplemented\":true,\"id\":526,\"linearizedBaseContracts\":[526],\"name\":\"Vote\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"constant\":false,\"functionSelector\":\"481c6a75\",\"id\":40,\"mutability\":\"mutable\",\"name\":\"manager\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"109:22:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":39,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"109:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"2d35a8a2\",\"id\":42,\"mutability\":\"mutable\",\"name\":\"candidatesCount\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"138:27:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":41,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"138:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"public\"},{\"canonicalName\":\"Vote.user\",\"id\":62,\"members\":[{\"constant\":false,\"id\":44,\"mutability\":\"mutable\",\"name\":\"name\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"196:11:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":43,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"196:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":46,\"mutability\":\"mutable\",\"name\":\"email\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"218:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":45,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"218:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":48,\"mutability\":\"mutable\",\"name\":\"password\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"241:15:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":47,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"241:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":50,\"mutability\":\"mutable\",\"name\":\"userAddress\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"267:19:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":49,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"267:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":53,\"mutability\":\"mutable\",\"name\":\"running\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"297:17:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":51,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"297:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":52,\"nodeType\":\"ArrayTypeName\",\"src\":\"297:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":56,\"mutability\":\"mutable\",\"name\":\"createdElection\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"325:25:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":54,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"325:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":55,\"nodeType\":\"ArrayTypeName\",\"src\":\"325:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":59,\"mutability\":\"mutable\",\"name\":\"createdPetition\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"361:25:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":57,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"361:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":58,\"nodeType\":\"ArrayTypeName\",\"src\":\"361:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":61,\"mutability\":\"mutable\",\"name\":\"userType\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"397:15:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":60,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"397:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"name\":\"user\",\"nodeType\":\"StructDefinition\",\"scope\":526,\"src\":\"174:246:1\",\"visibility\":\"public\"},{\"canonicalName\":\"Vote.candidate\",\"id\":74,\"members\":[{\"constant\":false,\"id\":64,\"mutability\":\"mutable\",\"name\":\"candidateAddr\",\"nodeType\":\"VariableDeclaration\",\"scope\":74,\"src\":\"456:21:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":63,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"456:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":66,\"mutability\":\"mutable\",\"name\":\"numVotes\",\"nodeType\":\"VariableDeclaration\",\"scope\":74,\"src\":\"488:13:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":65,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"488:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":69,\"mutability\":\"mutable\",\"name\":\"voters\",\"nodeType\":\"VariableDeclaration\",\"scope\":74,\"src\":\"512:16:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":67,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"512:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":68,\"nodeType\":\"ArrayTypeName\",\"src\":\"512:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":71,\"mutability\":\"mutable\",\"name\":\"name\",\"nodeType\":\"VariableDeclaration\",\"scope\":74,\"src\":\"539:11:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":70,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"539:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":73,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":74,\"src\":\"561:18:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":72,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"561:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"name\":\"candidate\",\"nodeType\":\"StructDefinition\",\"scope\":526,\"src\":\"428:159:1\",\"visibility\":\"public\"},{\"canonicalName\":\"Vote.election\",\"id\":91,\"members\":[{\"constant\":false,\"id\":76,\"mutability\":\"mutable\",\"name\":\"title\",\"nodeType\":\"VariableDeclaration\",\"scope\":91,\"src\":\"622:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":75,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"622:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":78,\"mutability\":\"mutable\",\"name\":\"startDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":91,\"src\":\"645:14:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":77,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"645:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":80,\"mutability\":\"mutable\",\"name\":\"endDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":91,\"src\":\"670:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":79,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"670:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":82,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":91,\"src\":\"693:18:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":81,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"693:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":84,\"mutability\":\"mutable\",\"name\":\"numVotes\",\"nodeType\":\"VariableDeclaration\",\"scope\":91,\"src\":\"754:13:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":83,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"754:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":86,\"mutability\":\"mutable\",\"name\":\"typeOfElection\",\"nodeType\":\"VariableDeclaration\",\"scope\":91,\"src\":\"778:21:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":85,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"778:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":90,\"mutability\":\"mutable\",\"name\":\"voters\",\"nodeType\":\"VariableDeclaration\",\"scope\":91,\"src\":\"810:31:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"},\"typeName\":{\"id\":89,\"keyType\":{\"id\":87,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"818:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"810:24:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"},\"valueType\":{\"id\":88,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"829:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}},\"visibility\":\"internal\"}],\"name\":\"election\",\"nodeType\":\"StructDefinition\",\"scope\":526,\"src\":\"595:282:1\",\"visibility\":\"public\"},{\"canonicalName\":\"Vote.petition\",\"id\":106,\"members\":[{\"constant\":false,\"id\":93,\"mutability\":\"mutable\",\"name\":\"title\",\"nodeType\":\"VariableDeclaration\",\"scope\":106,\"src\":\"909:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":92,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"909:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":95,\"mutability\":\"mutable\",\"name\":\"startDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":106,\"src\":\"932:14:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":94,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"932:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":97,\"mutability\":\"mutable\",\"name\":\"endDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":106,\"src\":\"957:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":96,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"957:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":99,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":106,\"src\":\"980:18:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":98,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"980:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":101,\"mutability\":\"mutable\",\"name\":\"numSigned\",\"nodeType\":\"VariableDeclaration\",\"scope\":106,\"src\":\"1009:14:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":100,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1009:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":105,\"mutability\":\"mutable\",\"name\":\"signed\",\"nodeType\":\"VariableDeclaration\",\"scope\":106,\"src\":\"1034:29:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"},\"typeName\":{\"id\":104,\"keyType\":{\"id\":102,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1042:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"1034:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"},\"valueType\":{\"id\":103,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1051:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}},\"visibility\":\"internal\"}],\"name\":\"petition\",\"nodeType\":\"StructDefinition\",\"scope\":526,\"src\":\"883:215:1\",\"visibility\":\"public\"},{\"constant\":false,\"id\":108,\"mutability\":\"mutable\",\"name\":\"typeOfVote\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"1104:15:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":107,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1104:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"functionSelector\":\"8ab66a90\",\"id\":112,\"mutability\":\"mutable\",\"name\":\"candidates\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"1214:47:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate)\"},\"typeName\":{\"id\":111,\"keyType\":{\"id\":109,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1222:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"1214:29:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate)\"},\"valueType\":{\"id\":110,\"name\":\"candidate\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":74,\"src\":\"1233:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate\"}}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"35a893a1\",\"id\":115,\"mutability\":\"mutable\",\"name\":\"candidateArray\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"1314:33:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_struct$_candidate_$74_storage_$dyn_storage\",\"typeString\":\"struct Vote.candidate[]\"},\"typeName\":{\"baseType\":{\"id\":113,\"name\":\"candidate\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":74,\"src\":\"1314:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate\"}},\"id\":114,\"nodeType\":\"ArrayTypeName\",\"src\":\"1314:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_struct$_candidate_$74_storage_$dyn_storage_ptr\",\"typeString\":\"struct Vote.candidate[]\"}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"7432e63a\",\"id\":118,\"mutability\":\"mutable\",\"name\":\"candidatesAddresses\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"1354:36:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":116,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1354:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":117,\"nodeType\":\"ArrayTypeName\",\"src\":\"1354:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"fcae83a7\",\"id\":120,\"mutability\":\"mutable\",\"name\":\"currentElection\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"1428:31:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election\"},\"typeName\":{\"id\":119,\"name\":\"election\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":91,\"src\":\"1428:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election\"}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"691a675c\",\"id\":122,\"mutability\":\"mutable\",\"name\":\"currentPetition\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"1466:31:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage\",\"typeString\":\"struct Vote.petition\"},\"typeName\":{\"id\":121,\"name\":\"petition\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":106,\"src\":\"1466:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage_ptr\",\"typeString\":\"struct Vote.petition\"}},\"visibility\":\"public\"},{\"body\":{\"id\":143,\"nodeType\":\"Block\",\"src\":\"1554:145:1\",\"statements\":[{\"expression\":{\"id\":131,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":129,\"name\":\"manager\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":40,\"src\":\"1623:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":130,\"name\":\"managerOfVote\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":124,\"src\":\"1633:13:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"1623:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":132,\"nodeType\":\"ExpressionStatement\",\"src\":\"1623:23:1\"},{\"expression\":{\"id\":141,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":133,\"name\":\"typeOfVote\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":108,\"src\":\"1657:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"condition\":{\"components\":[{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":136,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"hexValue\":\"30\",\"id\":134,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1671:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"id\":135,\"name\":\"typeOf\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":126,\"src\":\"1676:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"1671:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"id\":137,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"1670:13:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"falseExpression\":{\"hexValue\":\"31\",\"id\":139,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1690:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"id\":140,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"Conditional\",\"src\":\"1670:21:1\",\"trueExpression\":{\"hexValue\":\"30\",\"id\":138,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1686:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint8\",\"typeString\":\"uint8\"}},\"src\":\"1657:34:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":142,\"nodeType\":\"ExpressionStatement\",\"src\":\"1657:34:1\"}]},\"id\":144,\"implemented\":true,\"kind\":\"constructor\",\"modifiers\":[],\"name\":\"\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":127,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":124,\"mutability\":\"mutable\",\"name\":\"managerOfVote\",\"nodeType\":\"VariableDeclaration\",\"scope\":144,\"src\":\"1519:21:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":123,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1519:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":126,\"mutability\":\"mutable\",\"name\":\"typeOf\",\"nodeType\":\"VariableDeclaration\",\"scope\":144,\"src\":\"1542:11:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":125,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1542:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"1518:36:1\"},\"returnParameters\":{\"id\":128,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1554:0:1\"},\"scope\":526,\"src\":\"1506:193:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":195,\"nodeType\":\"Block\",\"src\":\"1880:227:1\",\"statements\":[{\"assignments\":[162],\"declarations\":[{\"constant\":false,\"id\":162,\"mutability\":\"mutable\",\"name\":\"e\",\"nodeType\":\"VariableDeclaration\",\"scope\":195,\"src\":\"1891:18:1\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election\"},\"typeName\":{\"id\":161,\"name\":\"election\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":91,\"src\":\"1891:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election\"}},\"visibility\":\"internal\"}],\"id\":164,\"initialValue\":{\"id\":163,\"name\":\"currentElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":120,\"src\":\"1912:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"1891:36:1\"},{\"expression\":{\"id\":169,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":165,\"name\":\"e\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":162,\"src\":\"1938:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election storage pointer\"}},\"id\":167,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"title\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":76,\"src\":\"1938:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":168,\"name\":\"title\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":146,\"src\":\"1948:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"1938:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":170,\"nodeType\":\"ExpressionStatement\",\"src\":\"1938:15:1\"},{\"expression\":{\"id\":175,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":171,\"name\":\"e\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":162,\"src\":\"1964:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election storage pointer\"}},\"id\":173,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"startDate\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":78,\"src\":\"1964:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":174,\"name\":\"startDate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":148,\"src\":\"1978:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"1964:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":176,\"nodeType\":\"ExpressionStatement\",\"src\":\"1964:23:1\"},{\"expression\":{\"id\":181,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":177,\"name\":\"e\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":162,\"src\":\"1998:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election storage pointer\"}},\"id\":179,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"endDate\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":80,\"src\":\"1998:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":180,\"name\":\"endDate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":150,\"src\":\"2010:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"1998:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":182,\"nodeType\":\"ExpressionStatement\",\"src\":\"1998:19:1\"},{\"expression\":{\"id\":187,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":183,\"name\":\"e\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":162,\"src\":\"2028:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election storage pointer\"}},\"id\":185,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":82,\"src\":\"2028:13:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":186,\"name\":\"description\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":152,\"src\":\"2044:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"2028:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":188,\"nodeType\":\"ExpressionStatement\",\"src\":\"2028:27:1\"},{\"expression\":{\"id\":193,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":189,\"name\":\"e\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":162,\"src\":\"2066:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election storage pointer\"}},\"id\":191,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"typeOfElection\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":86,\"src\":\"2066:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":192,\"name\":\"typeOfElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":154,\"src\":\"2085:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"2066:33:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":194,\"nodeType\":\"ExpressionStatement\",\"src\":\"2066:33:1\"}]},\"functionSelector\":\"dcfda00f\",\"id\":196,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":157,\"modifierName\":{\"id\":156,\"name\":\"restricted\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":505,\"src\":\"1856:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"1856:10:1\"},{\"id\":159,\"modifierName\":{\"id\":158,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":515,\"src\":\"1867:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"1867:12:1\"}],\"name\":\"editElection\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":155,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":146,\"mutability\":\"mutable\",\"name\":\"title\",\"nodeType\":\"VariableDeclaration\",\"scope\":196,\"src\":\"1730:19:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":145,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1730:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":148,\"mutability\":\"mutable\",\"name\":\"startDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":196,\"src\":\"1751:17:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":147,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1751:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":150,\"mutability\":\"mutable\",\"name\":\"endDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":196,\"src\":\"1770:15:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":149,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1770:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":152,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":196,\"src\":\"1787:25:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":151,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1787:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":154,\"mutability\":\"mutable\",\"name\":\"typeOfElection\",\"nodeType\":\"VariableDeclaration\",\"scope\":196,\"src\":\"1814:28:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":153,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1814:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"src\":\"1729:114:1\"},\"returnParameters\":{\"id\":160,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1880:0:1\"},\"scope\":526,\"src\":\"1707:400:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":239,\"nodeType\":\"Block\",\"src\":\"2258:183:1\",\"statements\":[{\"assignments\":[212],\"declarations\":[{\"constant\":false,\"id\":212,\"mutability\":\"mutable\",\"name\":\"p\",\"nodeType\":\"VariableDeclaration\",\"scope\":239,\"src\":\"2269:18:1\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage_ptr\",\"typeString\":\"struct Vote.petition\"},\"typeName\":{\"id\":211,\"name\":\"petition\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":106,\"src\":\"2269:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage_ptr\",\"typeString\":\"struct Vote.petition\"}},\"visibility\":\"internal\"}],\"id\":214,\"initialValue\":{\"id\":213,\"name\":\"currentPetition\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":122,\"src\":\"2290:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage\",\"typeString\":\"struct Vote.petition storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"2269:36:1\"},{\"expression\":{\"id\":219,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":215,\"name\":\"p\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":212,\"src\":\"2316:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage_ptr\",\"typeString\":\"struct Vote.petition storage pointer\"}},\"id\":217,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"title\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":93,\"src\":\"2316:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":218,\"name\":\"title\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":198,\"src\":\"2326:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"2316:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":220,\"nodeType\":\"ExpressionStatement\",\"src\":\"2316:15:1\"},{\"expression\":{\"id\":225,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":221,\"name\":\"p\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":212,\"src\":\"2342:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage_ptr\",\"typeString\":\"struct Vote.petition storage pointer\"}},\"id\":223,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"startDate\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":95,\"src\":\"2342:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":224,\"name\":\"startDate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":200,\"src\":\"2356:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"2342:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":226,\"nodeType\":\"ExpressionStatement\",\"src\":\"2342:23:1\"},{\"expression\":{\"id\":231,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":227,\"name\":\"p\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":212,\"src\":\"2376:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage_ptr\",\"typeString\":\"struct Vote.petition storage pointer\"}},\"id\":229,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"endDate\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":97,\"src\":\"2376:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":230,\"name\":\"endDate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":202,\"src\":\"2388:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"2376:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":232,\"nodeType\":\"ExpressionStatement\",\"src\":\"2376:19:1\"},{\"expression\":{\"id\":237,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":233,\"name\":\"p\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":212,\"src\":\"2406:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage_ptr\",\"typeString\":\"struct Vote.petition storage pointer\"}},\"id\":235,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":99,\"src\":\"2406:13:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":236,\"name\":\"description\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":204,\"src\":\"2422:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"2406:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":238,\"nodeType\":\"ExpressionStatement\",\"src\":\"2406:27:1\"}]},\"functionSelector\":\"67127e43\",\"id\":240,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":207,\"modifierName\":{\"id\":206,\"name\":\"restricted\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":505,\"src\":\"2234:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"2234:10:1\"},{\"id\":209,\"modifierName\":{\"id\":208,\"name\":\"typePetition\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":525,\"src\":\"2245:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"2245:12:1\"}],\"name\":\"editPetition\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":205,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":198,\"mutability\":\"mutable\",\"name\":\"title\",\"nodeType\":\"VariableDeclaration\",\"scope\":240,\"src\":\"2138:19:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":197,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2138:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":200,\"mutability\":\"mutable\",\"name\":\"startDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":240,\"src\":\"2159:17:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":199,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2159:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":202,\"mutability\":\"mutable\",\"name\":\"endDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":240,\"src\":\"2178:15:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":201,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2178:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":204,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":240,\"src\":\"2195:25:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":203,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2195:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"src\":\"2137:84:1\"},\"returnParameters\":{\"id\":210,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2258:0:1\"},\"scope\":526,\"src\":\"2115:326:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":298,\"nodeType\":\"Block\",\"src\":\"2534:406:1\",\"statements\":[{\"condition\":{\"commonType\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"id\":253,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"baseExpression\":{\"expression\":{\"id\":247,\"name\":\"currentElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":120,\"src\":\"2548:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election storage ref\"}},\"id\":248,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"voters\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":90,\"src\":\"2548:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":251,\"indexExpression\":{\"expression\":{\"id\":249,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"2571:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":250,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"2571:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2548:34:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"hexValue\":\"66616c7365\",\"id\":252,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2586:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"false\"},\"src\":\"2548:43:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":297,\"nodeType\":\"IfStatement\",\"src\":\"2545:388:1\",\"trueBody\":{\"id\":296,\"nodeType\":\"Block\",\"src\":\"2592:341:1\",\"statements\":[{\"condition\":{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"id\":262,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"baseExpression\":{\"id\":254,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"2610:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":256,\"indexExpression\":{\"id\":255,\"name\":\"candidateAddress\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":242,\"src\":\"2621:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2610:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":257,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"candidateAddr\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":64,\"src\":\"2610:42:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"!=\",\"rightExpression\":{\"arguments\":[{\"hexValue\":\"30\",\"id\":260,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2664:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"}],\"id\":259,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"nodeType\":\"ElementaryTypeNameExpression\",\"src\":\"2656:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_type$_t_address_$\",\"typeString\":\"type(address)\"},\"typeName\":{\"id\":258,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2656:7:1\",\"typeDescriptions\":{}}},\"id\":261,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"typeConversion\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2656:10:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"2610:56:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":295,\"nodeType\":\"IfStatement\",\"src\":\"2607:315:1\",\"trueBody\":{\"id\":294,\"nodeType\":\"Block\",\"src\":\"2667:255:1\",\"statements\":[{\"expression\":{\"id\":270,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"expression\":{\"id\":263,\"name\":\"currentElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":120,\"src\":\"2686:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election storage ref\"}},\"id\":267,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"voters\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":90,\"src\":\"2686:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":268,\"indexExpression\":{\"expression\":{\"id\":265,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"2709:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":266,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"2709:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"2686:34:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"hexValue\":\"74727565\",\"id\":269,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2724:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"src\":\"2686:42:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":271,\"nodeType\":\"ExpressionStatement\",\"src\":\"2686:42:1\"},{\"expression\":{\"id\":275,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"2747:26:1\",\"subExpression\":{\"expression\":{\"id\":272,\"name\":\"currentElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":120,\"src\":\"2747:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election storage ref\"}},\"id\":274,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"numVotes\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":84,\"src\":\"2747:24:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":276,\"nodeType\":\"ExpressionStatement\",\"src\":\"2747:26:1\"},{\"expression\":{\"id\":282,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"2792:41:1\",\"subExpression\":{\"expression\":{\"components\":[{\"baseExpression\":{\"id\":277,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"2793:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":279,\"indexExpression\":{\"id\":278,\"name\":\"candidateAddress\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":242,\"src\":\"2804:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2793:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}}],\"id\":280,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"2792:30:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":281,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"numVotes\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":66,\"src\":\"2792:39:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":283,\"nodeType\":\"ExpressionStatement\",\"src\":\"2792:41:1\"},{\"expression\":{\"arguments\":[{\"expression\":{\"id\":290,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"2895:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":291,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"2895:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}],\"expression\":{\"expression\":{\"components\":[{\"baseExpression\":{\"id\":284,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"2853:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":286,\"indexExpression\":{\"id\":285,\"name\":\"candidateAddress\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":242,\"src\":\"2864:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2853:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}}],\"id\":287,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"2852:30:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":288,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"voters\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":69,\"src\":\"2852:37:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":289,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"push\",\"nodeType\":\"MemberAccess\",\"src\":\"2852:42:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypush_nonpayable$_t_address_$returns$__$\",\"typeString\":\"function (address)\"}},\"id\":292,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2852:54:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":293,\"nodeType\":\"ExpressionStatement\",\"src\":\"2852:54:1\"}]}}]}}]},\"functionSelector\":\"da3550ee\",\"id\":299,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":245,\"modifierName\":{\"id\":244,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":515,\"src\":\"2522:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"2522:12:1\"}],\"name\":\"voteFor\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":243,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":242,\"mutability\":\"mutable\",\"name\":\"candidateAddress\",\"nodeType\":\"VariableDeclaration\",\"scope\":299,\"src\":\"2489:24:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":241,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2489:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"src\":\"2488:26:1\"},\"returnParameters\":{\"id\":246,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2534:0:1\"},\"scope\":526,\"src\":\"2472:468:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":361,\"nodeType\":\"Block\",\"src\":\"3091:575:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"id\":319,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":314,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":311,\"name\":\"current_date\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":305,\"src\":\"3179:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\">\",\"rightExpression\":{\"expression\":{\"id\":312,\"name\":\"currentElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":120,\"src\":\"3194:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election storage ref\"}},\"id\":313,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"startDate\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":78,\"src\":\"3194:25:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"3179:40:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"&&\",\"rightExpression\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":318,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":315,\"name\":\"current_date\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":305,\"src\":\"3223:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<\",\"rightExpression\":{\"expression\":{\"id\":316,\"name\":\"currentElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":120,\"src\":\"3238:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election storage ref\"}},\"id\":317,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"endDate\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":80,\"src\":\"3238:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"3223:38:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"src\":\"3179:82:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":310,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"3171:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":320,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"3171:91:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":321,\"nodeType\":\"ExpressionStatement\",\"src\":\"3171:91:1\"},{\"assignments\":[323],\"declarations\":[{\"constant\":false,\"id\":323,\"mutability\":\"mutable\",\"name\":\"currentCandidate\",\"nodeType\":\"VariableDeclaration\",\"scope\":361,\"src\":\"3300:34:1\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate\"},\"typeName\":{\"id\":322,\"name\":\"candidate\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":74,\"src\":\"3300:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate\"}},\"visibility\":\"internal\"}],\"id\":328,\"initialValue\":{\"baseExpression\":{\"id\":324,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"3337:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":327,\"indexExpression\":{\"expression\":{\"id\":325,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3348:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":326,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"3348:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"3337:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"3300:59:1\"},{\"expression\":{\"id\":333,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":329,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":323,\"src\":\"3370:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}},\"id\":331,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":71,\"src\":\"3370:21:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":332,\"name\":\"name\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":301,\"src\":\"3394:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"3370:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":334,\"nodeType\":\"ExpressionStatement\",\"src\":\"3370:28:1\"},{\"expression\":{\"id\":339,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":335,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":323,\"src\":\"3409:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}},\"id\":337,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":73,\"src\":\"3409:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":338,\"name\":\"description\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":303,\"src\":\"3440:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"3409:42:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":340,\"nodeType\":\"ExpressionStatement\",\"src\":\"3409:42:1\"},{\"expression\":{\"id\":346,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":341,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":323,\"src\":\"3462:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}},\"id\":343,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"candidateAddr\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":64,\"src\":\"3462:30:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"expression\":{\"id\":344,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3494:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":345,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"3494:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"3462:42:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":347,\"nodeType\":\"ExpressionStatement\",\"src\":\"3462:42:1\"},{\"expression\":{\"expression\":{\"id\":348,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":323,\"src\":\"3515:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}},\"id\":350,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"voters\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":69,\"src\":\"3515:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":351,\"nodeType\":\"ExpressionStatement\",\"src\":\"3515:23:1\"},{\"expression\":{\"arguments\":[{\"id\":355,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":323,\"src\":\"3569:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}],\"expression\":{\"id\":352,\"name\":\"candidateArray\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"3549:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_struct$_candidate_$74_storage_$dyn_storage\",\"typeString\":\"struct Vote.candidate storage ref[] storage ref\"}},\"id\":354,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"push\",\"nodeType\":\"MemberAccess\",\"src\":\"3549:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypush_nonpayable$_t_struct$_candidate_$74_storage_$returns$__$\",\"typeString\":\"function (struct Vote.candidate storage ref)\"}},\"id\":356,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"3549:37:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":357,\"nodeType\":\"ExpressionStatement\",\"src\":\"3549:37:1\"},{\"expression\":{\"id\":359,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"3597:17:1\",\"subExpression\":{\"id\":358,\"name\":\"candidatesCount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":42,\"src\":\"3597:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":360,\"nodeType\":\"ExpressionStatement\",\"src\":\"3597:17:1\"}]},\"functionSelector\":\"869eae23\",\"id\":362,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":308,\"modifierName\":{\"id\":307,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":515,\"src\":\"3078:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"3078:12:1\"}],\"name\":\"enterElection\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":306,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":301,\"mutability\":\"mutable\",\"name\":\"name\",\"nodeType\":\"VariableDeclaration\",\"scope\":362,\"src\":\"2997:18:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":300,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2997:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":303,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":362,\"src\":\"3017:25:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":302,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3017:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":305,\"mutability\":\"mutable\",\"name\":\"current_date\",\"nodeType\":\"VariableDeclaration\",\"scope\":362,\"src\":\"3044:20:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":304,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3044:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"2996:69:1\"},\"returnParameters\":{\"id\":309,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"3091:0:1\"},\"scope\":526,\"src\":\"2974:692:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":436,\"nodeType\":\"Block\",\"src\":\"3770:787:1\",\"statements\":[{\"assignments\":[370],\"declarations\":[{\"constant\":false,\"id\":370,\"mutability\":\"mutable\",\"name\":\"currentCandidate\",\"nodeType\":\"VariableDeclaration\",\"scope\":436,\"src\":\"3983:34:1\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate\"},\"typeName\":{\"id\":369,\"name\":\"candidate\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":74,\"src\":\"3983:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate\"}},\"visibility\":\"internal\"}],\"id\":375,\"initialValue\":{\"baseExpression\":{\"id\":371,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"4020:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":374,\"indexExpression\":{\"expression\":{\"id\":372,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4031:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":373,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"4031:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4020:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"3983:59:1\"},{\"expression\":{\"id\":380,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":376,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":370,\"src\":\"4053:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}},\"id\":378,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":71,\"src\":\"4053:21:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"hexValue\":\"\",\"id\":379,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"4077:2:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470\",\"typeString\":\"literal_string \\\"\\\"\"},\"value\":\"\"},\"src\":\"4053:26:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":381,\"nodeType\":\"ExpressionStatement\",\"src\":\"4053:26:1\"},{\"expression\":{\"id\":386,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":382,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":370,\"src\":\"4090:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}},\"id\":384,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":73,\"src\":\"4090:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"hexValue\":\"\",\"id\":385,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"4121:2:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470\",\"typeString\":\"literal_string \\\"\\\"\"},\"value\":\"\"},\"src\":\"4090:33:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":387,\"nodeType\":\"ExpressionStatement\",\"src\":\"4090:33:1\"},{\"expression\":{\"id\":392,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"delete\",\"prefix\":true,\"src\":\"4208:29:1\",\"subExpression\":{\"baseExpression\":{\"id\":388,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"4215:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":391,\"indexExpression\":{\"expression\":{\"id\":389,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4226:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":390,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"4226:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"4215:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":393,\"nodeType\":\"ExpressionStatement\",\"src\":\"4208:29:1\"},{\"body\":{\"id\":431,\"nodeType\":\"Block\",\"src\":\"4294:228:1\",\"statements\":[{\"condition\":{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"id\":411,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"id\":405,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4312:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":406,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"4312:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"expression\":{\"baseExpression\":{\"id\":407,\"name\":\"candidateArray\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"4324:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_struct$_candidate_$74_storage_$dyn_storage\",\"typeString\":\"struct Vote.candidate storage ref[] storage ref\"}},\"id\":409,\"indexExpression\":{\"id\":408,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":395,\"src\":\"4339:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4324:17:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":410,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"candidateAddr\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":64,\"src\":\"4324:31:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"4312:43:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":430,\"nodeType\":\"IfStatement\",\"src\":\"4309:202:1\",\"trueBody\":{\"id\":429,\"nodeType\":\"Block\",\"src\":\"4356:155:1\",\"statements\":[{\"expression\":{\"id\":421,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"id\":412,\"name\":\"candidateArray\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"4375:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_struct$_candidate_$74_storage_$dyn_storage\",\"typeString\":\"struct Vote.candidate storage ref[] storage ref\"}},\"id\":414,\"indexExpression\":{\"id\":413,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":395,\"src\":\"4390:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"4375:17:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"baseExpression\":{\"id\":415,\"name\":\"candidateArray\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"4393:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_struct$_candidate_$74_storage_$dyn_storage\",\"typeString\":\"struct Vote.candidate storage ref[] storage ref\"}},\"id\":420,\"indexExpression\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":419,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"id\":416,\"name\":\"candidateArray\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"4408:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_struct$_candidate_$74_storage_$dyn_storage\",\"typeString\":\"struct Vote.candidate storage ref[] storage ref\"}},\"id\":417,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"src\":\"4408:21:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"-\",\"rightExpression\":{\"hexValue\":\"31\",\"id\":418,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"4430:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"src\":\"4408:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4393:39:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"src\":\"4375:57:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":422,\"nodeType\":\"ExpressionStatement\",\"src\":\"4375:57:1\"},{\"expression\":{\"arguments\":[],\"expression\":{\"argumentTypes\":[],\"expression\":{\"id\":423,\"name\":\"candidateArray\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"4451:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_struct$_candidate_$74_storage_$dyn_storage\",\"typeString\":\"struct Vote.candidate storage ref[] storage ref\"}},\"id\":425,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"pop\",\"nodeType\":\"MemberAccess\",\"src\":\"4451:18:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypop_nonpayable$__$returns$__$\",\"typeString\":\"function ()\"}},\"id\":426,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"4451:20:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":427,\"nodeType\":\"ExpressionStatement\",\"src\":\"4451:20:1\"},{\"id\":428,\"nodeType\":\"Break\",\"src\":\"4490:5:1\"}]}}]},\"condition\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":401,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":398,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":395,\"src\":\"4265:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<\",\"rightExpression\":{\"expression\":{\"id\":399,\"name\":\"candidateArray\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"4267:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_struct$_candidate_$74_storage_$dyn_storage\",\"typeString\":\"struct Vote.candidate storage ref[] storage ref\"}},\"id\":400,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"src\":\"4267:21:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"4265:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":432,\"initializationExpression\":{\"assignments\":[395],\"declarations\":[{\"constant\":false,\"id\":395,\"mutability\":\"mutable\",\"name\":\"i\",\"nodeType\":\"VariableDeclaration\",\"scope\":432,\"src\":\"4253:6:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":394,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4253:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"id\":397,\"initialValue\":{\"hexValue\":\"30\",\"id\":396,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"4262:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"4253:10:1\"},\"loopExpression\":{\"expression\":{\"id\":403,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"4290:3:1\",\"subExpression\":{\"id\":402,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":395,\"src\":\"4290:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":404,\"nodeType\":\"ExpressionStatement\",\"src\":\"4290:3:1\"},\"nodeType\":\"ForStatement\",\"src\":\"4248:274:1\"},{\"expression\":{\"id\":434,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"--\",\"prefix\":false,\"src\":\"4532:17:1\",\"subExpression\":{\"id\":433,\"name\":\"candidatesCount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":42,\"src\":\"4532:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":435,\"nodeType\":\"ExpressionStatement\",\"src\":\"4532:17:1\"}]},\"functionSelector\":\"af47fb3f\",\"id\":437,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":367,\"modifierName\":{\"id\":366,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":515,\"src\":\"3757:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"3757:12:1\"}],\"name\":\"leaveElection\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":365,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":364,\"mutability\":\"mutable\",\"name\":\"current_date\",\"nodeType\":\"VariableDeclaration\",\"scope\":437,\"src\":\"3723:20:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":363,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3723:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"3722:22:1\"},\"returnParameters\":{\"id\":368,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"3770:0:1\"},\"scope\":526,\"src\":\"3700:857:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":458,\"nodeType\":\"Block\",\"src\":\"4686:86:1\",\"statements\":[{\"expression\":{\"components\":[{\"expression\":{\"baseExpression\":{\"id\":448,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"4704:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":450,\"indexExpression\":{\"id\":449,\"name\":\"candaddr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":439,\"src\":\"4715:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4704:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":451,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":71,\"src\":\"4704:25:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},{\"expression\":{\"baseExpression\":{\"id\":452,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"4731:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":454,\"indexExpression\":{\"id\":453,\"name\":\"candaddr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":439,\"src\":\"4742:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4731:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":455,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":73,\"src\":\"4731:32:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}}],\"id\":456,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"4703:61:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$_t_string_storage_$_t_string_storage_$\",\"typeString\":\"tuple(string storage ref,string storage ref)\"}},\"functionReturnParameters\":447,\"id\":457,\"nodeType\":\"Return\",\"src\":\"4697:67:1\"}]},\"functionSelector\":\"ad0dcf9c\",\"id\":459,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":442,\"modifierName\":{\"id\":441,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":515,\"src\":\"4634:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"4634:12:1\"}],\"name\":\"get_candidates\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":440,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":439,\"mutability\":\"mutable\",\"name\":\"candaddr\",\"nodeType\":\"VariableDeclaration\",\"scope\":459,\"src\":\"4604:16:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":438,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4604:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"src\":\"4603:18:1\"},\"returnParameters\":{\"id\":447,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":444,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":459,\"src\":\"4656:13:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":443,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4656:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":446,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":459,\"src\":\"4671:13:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":445,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4671:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"src\":\"4655:30:1\"},\"scope\":526,\"src\":\"4580:192:1\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":476,\"nodeType\":\"Block\",\"src\":\"4876:56:1\",\"statements\":[{\"expression\":{\"components\":[{\"expression\":{\"components\":[{\"baseExpression\":{\"id\":469,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"4895:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":471,\"indexExpression\":{\"id\":470,\"name\":\"candAddr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":461,\"src\":\"4906:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4895:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}}],\"id\":472,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"4894:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":473,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"voters\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":69,\"src\":\"4894:29:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}}],\"id\":474,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"4893:31:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"functionReturnParameters\":468,\"id\":475,\"nodeType\":\"Return\",\"src\":\"4887:37:1\"}]},\"functionSelector\":\"95115447\",\"id\":477,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":464,\"modifierName\":{\"id\":463,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":515,\"src\":\"4836:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"4836:12:1\"}],\"name\":\"getCandidateVoters\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":462,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":461,\"mutability\":\"mutable\",\"name\":\"candAddr\",\"nodeType\":\"VariableDeclaration\",\"scope\":477,\"src\":\"4806:16:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":460,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4806:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"src\":\"4805:18:1\"},\"returnParameters\":{\"id\":468,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":467,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":477,\"src\":\"4858:16:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":465,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4858:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":466,\"nodeType\":\"ArrayTypeName\",\"src\":\"4858:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"}],\"src\":\"4857:18:1\"},\"scope\":526,\"src\":\"4778:154:1\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":493,\"nodeType\":\"Block\",\"src\":\"5023:63:1\",\"statements\":[{\"expression\":{\"components\":[{\"baseExpression\":{\"components\":[{\"expression\":{\"id\":486,\"name\":\"currentElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":120,\"src\":\"5043:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election storage ref\"}},\"id\":487,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"voters\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":90,\"src\":\"5043:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}}],\"id\":488,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"5042:24:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":490,\"indexExpression\":{\"id\":489,\"name\":\"voterAddr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":479,\"src\":\"5067:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"5042:35:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"id\":491,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"5041:37:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"functionReturnParameters\":485,\"id\":492,\"nodeType\":\"Return\",\"src\":\"5034:44:1\"}]},\"functionSelector\":\"e1c5fcc1\",\"id\":494,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":482,\"modifierName\":{\"id\":481,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":515,\"src\":\"4995:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"4995:12:1\"}],\"name\":\"getElectionVoter\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":480,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":479,\"mutability\":\"mutable\",\"name\":\"voterAddr\",\"nodeType\":\"VariableDeclaration\",\"scope\":494,\"src\":\"4964:17:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":478,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4964:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"src\":\"4963:19:1\"},\"returnParameters\":{\"id\":485,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":484,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":494,\"src\":\"5017:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":483,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5017:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"5016:6:1\"},\"scope\":526,\"src\":\"4938:148:1\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":504,\"nodeType\":\"Block\",\"src\":\"5114:61:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"id\":500,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"id\":497,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"5133:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":498,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"5133:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"id\":499,\"name\":\"manager\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":40,\"src\":\"5147:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"5133:21:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":496,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"5125:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":501,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5125:30:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":502,\"nodeType\":\"ExpressionStatement\",\"src\":\"5125:30:1\"},{\"id\":503,\"nodeType\":\"PlaceholderStatement\",\"src\":\"5166:1:1\"}]},\"id\":505,\"name\":\"restricted\",\"nodeType\":\"ModifierDefinition\",\"parameters\":{\"id\":495,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"5111:2:1\"},\"src\":\"5092:83:1\",\"virtual\":false,\"visibility\":\"internal\"},{\"body\":{\"id\":514,\"nodeType\":\"Block\",\"src\":\"5205:55:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":510,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":508,\"name\":\"typeOfVote\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":108,\"src\":\"5224:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"hexValue\":\"30\",\"id\":509,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5238:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"src\":\"5224:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":507,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"5216:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":511,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5216:24:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":512,\"nodeType\":\"ExpressionStatement\",\"src\":\"5216:24:1\"},{\"id\":513,\"nodeType\":\"PlaceholderStatement\",\"src\":\"5251:1:1\"}]},\"id\":515,\"name\":\"typeElection\",\"nodeType\":\"ModifierDefinition\",\"parameters\":{\"id\":506,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"5202:2:1\"},\"src\":\"5181:79:1\",\"virtual\":false,\"visibility\":\"internal\"},{\"body\":{\"id\":524,\"nodeType\":\"Block\",\"src\":\"5290:55:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":520,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":518,\"name\":\"typeOfVote\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":108,\"src\":\"5309:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"hexValue\":\"31\",\"id\":519,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5323:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"src\":\"5309:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":517,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"5301:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":521,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5301:24:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":522,\"nodeType\":\"ExpressionStatement\",\"src\":\"5301:24:1\"},{\"id\":523,\"nodeType\":\"PlaceholderStatement\",\"src\":\"5336:1:1\"}]},\"id\":525,\"name\":\"typePetition\",\"nodeType\":\"ModifierDefinition\",\"parameters\":{\"id\":516,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"5287:2:1\"},\"src\":\"5266:79:1\",\"virtual\":false,\"visibility\":\"internal\"}],\"scope\":527,\"src\":\"68:5282:1\"}],\"src\":\"0:5352:1\"},\"legacyAST\":{\"attributes\":{\"absolutePath\":\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/Vote.sol\",\"exportedSymbols\":{\"Vote\":[526]},\"license\":\"UNLICENSED\"},\"children\":[{\"attributes\":{\"literals\":[\"solidity\",\"^\",\"0.7\",\".4\"]},\"id\":38,\"name\":\"PragmaDirective\",\"src\":\"0:23:1\"},{\"attributes\":{\"abstract\":false,\"baseContracts\":[null],\"contractDependencies\":[null],\"contractKind\":\"contract\",\"fullyImplemented\":true,\"linearizedBaseContracts\":[526],\"name\":\"Vote\",\"scope\":527},\"children\":[{\"attributes\":{\"constant\":false,\"functionSelector\":\"481c6a75\",\"mutability\":\"mutable\",\"name\":\"manager\",\"scope\":526,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":39,\"name\":\"ElementaryTypeName\",\"src\":\"109:7:1\"}],\"id\":40,\"name\":\"VariableDeclaration\",\"src\":\"109:22:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"2d35a8a2\",\"mutability\":\"mutable\",\"name\":\"candidatesCount\",\"scope\":526,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":41,\"name\":\"ElementaryTypeName\",\"src\":\"138:4:1\"}],\"id\":42,\"name\":\"VariableDeclaration\",\"src\":\"138:27:1\"},{\"attributes\":{\"canonicalName\":\"Vote.user\",\"name\":\"user\",\"scope\":526,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"name\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":43,\"name\":\"ElementaryTypeName\",\"src\":\"196:6:1\"}],\"id\":44,\"name\":\"VariableDeclaration\",\"src\":\"196:11:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"email\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":45,\"name\":\"ElementaryTypeName\",\"src\":\"218:6:1\"}],\"id\":46,\"name\":\"VariableDeclaration\",\"src\":\"218:12:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"password\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":47,\"name\":\"ElementaryTypeName\",\"src\":\"241:6:1\"}],\"id\":48,\"name\":\"VariableDeclaration\",\"src\":\"241:15:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"userAddress\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":49,\"name\":\"ElementaryTypeName\",\"src\":\"267:7:1\"}],\"id\":50,\"name\":\"VariableDeclaration\",\"src\":\"267:19:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"running\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":51,\"name\":\"ElementaryTypeName\",\"src\":\"297:7:1\"}],\"id\":52,\"name\":\"ArrayTypeName\",\"src\":\"297:9:1\"}],\"id\":53,\"name\":\"VariableDeclaration\",\"src\":\"297:17:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"createdElection\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":54,\"name\":\"ElementaryTypeName\",\"src\":\"325:7:1\"}],\"id\":55,\"name\":\"ArrayTypeName\",\"src\":\"325:9:1\"}],\"id\":56,\"name\":\"VariableDeclaration\",\"src\":\"325:25:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"createdPetition\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":57,\"name\":\"ElementaryTypeName\",\"src\":\"361:7:1\"}],\"id\":58,\"name\":\"ArrayTypeName\",\"src\":\"361:9:1\"}],\"id\":59,\"name\":\"VariableDeclaration\",\"src\":\"361:25:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"userType\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":60,\"name\":\"ElementaryTypeName\",\"src\":\"397:6:1\"}],\"id\":61,\"name\":\"VariableDeclaration\",\"src\":\"397:15:1\"}],\"id\":62,\"name\":\"StructDefinition\",\"src\":\"174:246:1\"},{\"attributes\":{\"canonicalName\":\"Vote.candidate\",\"name\":\"candidate\",\"scope\":526,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"candidateAddr\",\"scope\":74,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":63,\"name\":\"ElementaryTypeName\",\"src\":\"456:7:1\"}],\"id\":64,\"name\":\"VariableDeclaration\",\"src\":\"456:21:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"numVotes\",\"scope\":74,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":65,\"name\":\"ElementaryTypeName\",\"src\":\"488:4:1\"}],\"id\":66,\"name\":\"VariableDeclaration\",\"src\":\"488:13:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"voters\",\"scope\":74,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":67,\"name\":\"ElementaryTypeName\",\"src\":\"512:7:1\"}],\"id\":68,\"name\":\"ArrayTypeName\",\"src\":\"512:9:1\"}],\"id\":69,\"name\":\"VariableDeclaration\",\"src\":\"512:16:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"name\",\"scope\":74,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":70,\"name\":\"ElementaryTypeName\",\"src\":\"539:6:1\"}],\"id\":71,\"name\":\"VariableDeclaration\",\"src\":\"539:11:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":74,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":72,\"name\":\"ElementaryTypeName\",\"src\":\"561:6:1\"}],\"id\":73,\"name\":\"VariableDeclaration\",\"src\":\"561:18:1\"}],\"id\":74,\"name\":\"StructDefinition\",\"src\":\"428:159:1\"},{\"attributes\":{\"canonicalName\":\"Vote.election\",\"name\":\"election\",\"scope\":526,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"title\",\"scope\":91,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":75,\"name\":\"ElementaryTypeName\",\"src\":\"622:6:1\"}],\"id\":76,\"name\":\"VariableDeclaration\",\"src\":\"622:12:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"startDate\",\"scope\":91,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":77,\"name\":\"ElementaryTypeName\",\"src\":\"645:4:1\"}],\"id\":78,\"name\":\"VariableDeclaration\",\"src\":\"645:14:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"endDate\",\"scope\":91,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":79,\"name\":\"ElementaryTypeName\",\"src\":\"670:4:1\"}],\"id\":80,\"name\":\"VariableDeclaration\",\"src\":\"670:12:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":91,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":81,\"name\":\"ElementaryTypeName\",\"src\":\"693:6:1\"}],\"id\":82,\"name\":\"VariableDeclaration\",\"src\":\"693:18:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"numVotes\",\"scope\":91,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":83,\"name\":\"ElementaryTypeName\",\"src\":\"754:4:1\"}],\"id\":84,\"name\":\"VariableDeclaration\",\"src\":\"754:13:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"typeOfElection\",\"scope\":91,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":85,\"name\":\"ElementaryTypeName\",\"src\":\"778:6:1\"}],\"id\":86,\"name\":\"VariableDeclaration\",\"src\":\"778:21:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"voters\",\"scope\":91,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"mapping(address => bool)\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"mapping(address => bool)\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"type\":\"address\"},\"id\":87,\"name\":\"ElementaryTypeName\",\"src\":\"818:7:1\"},{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":88,\"name\":\"ElementaryTypeName\",\"src\":\"829:4:1\"}],\"id\":89,\"name\":\"Mapping\",\"src\":\"810:24:1\"}],\"id\":90,\"name\":\"VariableDeclaration\",\"src\":\"810:31:1\"}],\"id\":91,\"name\":\"StructDefinition\",\"src\":\"595:282:1\"},{\"attributes\":{\"canonicalName\":\"Vote.petition\",\"name\":\"petition\",\"scope\":526,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"title\",\"scope\":106,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":92,\"name\":\"ElementaryTypeName\",\"src\":\"909:6:1\"}],\"id\":93,\"name\":\"VariableDeclaration\",\"src\":\"909:12:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"startDate\",\"scope\":106,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":94,\"name\":\"ElementaryTypeName\",\"src\":\"932:4:1\"}],\"id\":95,\"name\":\"VariableDeclaration\",\"src\":\"932:14:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"endDate\",\"scope\":106,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":96,\"name\":\"ElementaryTypeName\",\"src\":\"957:4:1\"}],\"id\":97,\"name\":\"VariableDeclaration\",\"src\":\"957:12:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":106,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":98,\"name\":\"ElementaryTypeName\",\"src\":\"980:6:1\"}],\"id\":99,\"name\":\"VariableDeclaration\",\"src\":\"980:18:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"numSigned\",\"scope\":106,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":100,\"name\":\"ElementaryTypeName\",\"src\":\"1009:4:1\"}],\"id\":101,\"name\":\"VariableDeclaration\",\"src\":\"1009:14:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"signed\",\"scope\":106,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"mapping(address => bool)\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"mapping(address => bool)\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"type\":\"address\"},\"id\":102,\"name\":\"ElementaryTypeName\",\"src\":\"1042:7:1\"},{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":103,\"name\":\"ElementaryTypeName\",\"src\":\"1051:4:1\"}],\"id\":104,\"name\":\"Mapping\",\"src\":\"1034:22:1\"}],\"id\":105,\"name\":\"VariableDeclaration\",\"src\":\"1034:29:1\"}],\"id\":106,\"name\":\"StructDefinition\",\"src\":\"883:215:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"typeOfVote\",\"scope\":526,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":107,\"name\":\"ElementaryTypeName\",\"src\":\"1104:4:1\"}],\"id\":108,\"name\":\"VariableDeclaration\",\"src\":\"1104:15:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"8ab66a90\",\"mutability\":\"mutable\",\"name\":\"candidates\",\"scope\":526,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"mapping(address => struct Vote.candidate)\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"type\":\"mapping(address => struct Vote.candidate)\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"type\":\"address\"},\"id\":109,\"name\":\"ElementaryTypeName\",\"src\":\"1222:7:1\"},{\"attributes\":{\"name\":\"candidate\",\"referencedDeclaration\":74,\"type\":\"struct Vote.candidate\"},\"id\":110,\"name\":\"UserDefinedTypeName\",\"src\":\"1233:9:1\"}],\"id\":111,\"name\":\"Mapping\",\"src\":\"1214:29:1\"}],\"id\":112,\"name\":\"VariableDeclaration\",\"src\":\"1214:47:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"35a893a1\",\"mutability\":\"mutable\",\"name\":\"candidateArray\",\"scope\":526,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"struct Vote.candidate[]\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"type\":\"struct Vote.candidate[]\"},\"children\":[{\"attributes\":{\"name\":\"candidate\",\"referencedDeclaration\":74,\"type\":\"struct Vote.candidate\"},\"id\":113,\"name\":\"UserDefinedTypeName\",\"src\":\"1314:9:1\"}],\"id\":114,\"name\":\"ArrayTypeName\",\"src\":\"1314:11:1\"}],\"id\":115,\"name\":\"VariableDeclaration\",\"src\":\"1314:33:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"7432e63a\",\"mutability\":\"mutable\",\"name\":\"candidatesAddresses\",\"scope\":526,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":116,\"name\":\"ElementaryTypeName\",\"src\":\"1354:7:1\"}],\"id\":117,\"name\":\"ArrayTypeName\",\"src\":\"1354:9:1\"}],\"id\":118,\"name\":\"VariableDeclaration\",\"src\":\"1354:36:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"fcae83a7\",\"mutability\":\"mutable\",\"name\":\"currentElection\",\"scope\":526,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"struct Vote.election\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"name\":\"election\",\"referencedDeclaration\":91,\"type\":\"struct Vote.election\"},\"id\":119,\"name\":\"UserDefinedTypeName\",\"src\":\"1428:8:1\"}],\"id\":120,\"name\":\"VariableDeclaration\",\"src\":\"1428:31:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"691a675c\",\"mutability\":\"mutable\",\"name\":\"currentPetition\",\"scope\":526,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"struct Vote.petition\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"name\":\"petition\",\"referencedDeclaration\":106,\"type\":\"struct Vote.petition\"},\"id\":121,\"name\":\"UserDefinedTypeName\",\"src\":\"1466:8:1\"}],\"id\":122,\"name\":\"VariableDeclaration\",\"src\":\"1466:31:1\"},{\"attributes\":{\"implemented\":true,\"isConstructor\":true,\"kind\":\"constructor\",\"modifiers\":[null],\"name\":\"\",\"scope\":526,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"managerOfVote\",\"scope\":144,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":123,\"name\":\"ElementaryTypeName\",\"src\":\"1519:7:1\"}],\"id\":124,\"name\":\"VariableDeclaration\",\"src\":\"1519:21:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"typeOf\",\"scope\":144,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":125,\"name\":\"ElementaryTypeName\",\"src\":\"1542:4:1\"}],\"id\":126,\"name\":\"VariableDeclaration\",\"src\":\"1542:11:1\"}],\"id\":127,\"name\":\"ParameterList\",\"src\":\"1518:36:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":128,\"name\":\"ParameterList\",\"src\":\"1554:0:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"address\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":40,\"type\":\"address\",\"value\":\"manager\"},\"id\":129,\"name\":\"Identifier\",\"src\":\"1623:7:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":124,\"type\":\"address\",\"value\":\"managerOfVote\"},\"id\":130,\"name\":\"Identifier\",\"src\":\"1633:13:1\"}],\"id\":131,\"name\":\"Assignment\",\"src\":\"1623:23:1\"}],\"id\":132,\"name\":\"ExpressionStatement\",\"src\":\"1623:23:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":108,\"type\":\"uint256\",\"value\":\"typeOfVote\"},\"id\":133,\"name\":\"Identifier\",\"src\":\"1657:10:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"uint8\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"hexvalue\":\"30\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 0\",\"value\":\"0\"},\"id\":134,\"name\":\"Literal\",\"src\":\"1671:1:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":126,\"type\":\"uint256\",\"value\":\"typeOf\"},\"id\":135,\"name\":\"Identifier\",\"src\":\"1676:6:1\"}],\"id\":136,\"name\":\"BinaryOperation\",\"src\":\"1671:11:1\"}],\"id\":137,\"name\":\"TupleExpression\",\"src\":\"1670:13:1\"},{\"attributes\":{\"hexvalue\":\"30\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 0\",\"value\":\"0\"},\"id\":138,\"name\":\"Literal\",\"src\":\"1686:1:1\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":139,\"name\":\"Literal\",\"src\":\"1690:1:1\"}],\"id\":140,\"name\":\"Conditional\",\"src\":\"1670:21:1\"}],\"id\":141,\"name\":\"Assignment\",\"src\":\"1657:34:1\"}],\"id\":142,\"name\":\"ExpressionStatement\",\"src\":\"1657:34:1\"}],\"id\":143,\"name\":\"Block\",\"src\":\"1554:145:1\"}],\"id\":144,\"name\":\"FunctionDefinition\",\"src\":\"1506:193:1\"},{\"attributes\":{\"functionSelector\":\"dcfda00f\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"editElection\",\"scope\":526,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"title\",\"scope\":196,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":145,\"name\":\"ElementaryTypeName\",\"src\":\"1730:6:1\"}],\"id\":146,\"name\":\"VariableDeclaration\",\"src\":\"1730:19:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"startDate\",\"scope\":196,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint256\",\"type\":\"uint256\"},\"id\":147,\"name\":\"ElementaryTypeName\",\"src\":\"1751:7:1\"}],\"id\":148,\"name\":\"VariableDeclaration\",\"src\":\"1751:17:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"endDate\",\"scope\":196,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint256\",\"type\":\"uint256\"},\"id\":149,\"name\":\"ElementaryTypeName\",\"src\":\"1770:7:1\"}],\"id\":150,\"name\":\"VariableDeclaration\",\"src\":\"1770:15:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":196,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":151,\"name\":\"ElementaryTypeName\",\"src\":\"1787:6:1\"}],\"id\":152,\"name\":\"VariableDeclaration\",\"src\":\"1787:25:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"typeOfElection\",\"scope\":196,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":153,\"name\":\"ElementaryTypeName\",\"src\":\"1814:6:1\"}],\"id\":154,\"name\":\"VariableDeclaration\",\"src\":\"1814:28:1\"}],\"id\":155,\"name\":\"ParameterList\",\"src\":\"1729:114:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":160,\"name\":\"ParameterList\",\"src\":\"1880:0:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":505,\"type\":\"modifier ()\",\"value\":\"restricted\"},\"id\":156,\"name\":\"Identifier\",\"src\":\"1856:10:1\"}],\"id\":157,\"name\":\"ModifierInvocation\",\"src\":\"1856:10:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":515,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":158,\"name\":\"Identifier\",\"src\":\"1867:12:1\"}],\"id\":159,\"name\":\"ModifierInvocation\",\"src\":\"1867:12:1\"},{\"children\":[{\"attributes\":{\"assignments\":[162]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"e\",\"scope\":195,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct Vote.election\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"election\",\"referencedDeclaration\":91,\"type\":\"struct Vote.election\"},\"id\":161,\"name\":\"UserDefinedTypeName\",\"src\":\"1891:8:1\"}],\"id\":162,\"name\":\"VariableDeclaration\",\"src\":\"1891:18:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":120,\"type\":\"struct Vote.election storage ref\",\"value\":\"currentElection\"},\"id\":163,\"name\":\"Identifier\",\"src\":\"1912:15:1\"}],\"id\":164,\"name\":\"VariableDeclarationStatement\",\"src\":\"1891:36:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"title\",\"referencedDeclaration\":76,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":162,\"type\":\"struct Vote.election storage pointer\",\"value\":\"e\"},\"id\":165,\"name\":\"Identifier\",\"src\":\"1938:1:1\"}],\"id\":167,\"name\":\"MemberAccess\",\"src\":\"1938:7:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":146,\"type\":\"string memory\",\"value\":\"title\"},\"id\":168,\"name\":\"Identifier\",\"src\":\"1948:5:1\"}],\"id\":169,\"name\":\"Assignment\",\"src\":\"1938:15:1\"}],\"id\":170,\"name\":\"ExpressionStatement\",\"src\":\"1938:15:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"startDate\",\"referencedDeclaration\":78,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":162,\"type\":\"struct Vote.election storage pointer\",\"value\":\"e\"},\"id\":171,\"name\":\"Identifier\",\"src\":\"1964:1:1\"}],\"id\":173,\"name\":\"MemberAccess\",\"src\":\"1964:11:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":148,\"type\":\"uint256\",\"value\":\"startDate\"},\"id\":174,\"name\":\"Identifier\",\"src\":\"1978:9:1\"}],\"id\":175,\"name\":\"Assignment\",\"src\":\"1964:23:1\"}],\"id\":176,\"name\":\"ExpressionStatement\",\"src\":\"1964:23:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"endDate\",\"referencedDeclaration\":80,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":162,\"type\":\"struct Vote.election storage pointer\",\"value\":\"e\"},\"id\":177,\"name\":\"Identifier\",\"src\":\"1998:1:1\"}],\"id\":179,\"name\":\"MemberAccess\",\"src\":\"1998:9:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":150,\"type\":\"uint256\",\"value\":\"endDate\"},\"id\":180,\"name\":\"Identifier\",\"src\":\"2010:7:1\"}],\"id\":181,\"name\":\"Assignment\",\"src\":\"1998:19:1\"}],\"id\":182,\"name\":\"ExpressionStatement\",\"src\":\"1998:19:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"description\",\"referencedDeclaration\":82,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":162,\"type\":\"struct Vote.election storage pointer\",\"value\":\"e\"},\"id\":183,\"name\":\"Identifier\",\"src\":\"2028:1:1\"}],\"id\":185,\"name\":\"MemberAccess\",\"src\":\"2028:13:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":152,\"type\":\"string memory\",\"value\":\"description\"},\"id\":186,\"name\":\"Identifier\",\"src\":\"2044:11:1\"}],\"id\":187,\"name\":\"Assignment\",\"src\":\"2028:27:1\"}],\"id\":188,\"name\":\"ExpressionStatement\",\"src\":\"2028:27:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"typeOfElection\",\"referencedDeclaration\":86,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":162,\"type\":\"struct Vote.election storage pointer\",\"value\":\"e\"},\"id\":189,\"name\":\"Identifier\",\"src\":\"2066:1:1\"}],\"id\":191,\"name\":\"MemberAccess\",\"src\":\"2066:16:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":154,\"type\":\"string memory\",\"value\":\"typeOfElection\"},\"id\":192,\"name\":\"Identifier\",\"src\":\"2085:14:1\"}],\"id\":193,\"name\":\"Assignment\",\"src\":\"2066:33:1\"}],\"id\":194,\"name\":\"ExpressionStatement\",\"src\":\"2066:33:1\"}],\"id\":195,\"name\":\"Block\",\"src\":\"1880:227:1\"}],\"id\":196,\"name\":\"FunctionDefinition\",\"src\":\"1707:400:1\"},{\"attributes\":{\"functionSelector\":\"67127e43\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"editPetition\",\"scope\":526,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"title\",\"scope\":240,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":197,\"name\":\"ElementaryTypeName\",\"src\":\"2138:6:1\"}],\"id\":198,\"name\":\"VariableDeclaration\",\"src\":\"2138:19:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"startDate\",\"scope\":240,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint256\",\"type\":\"uint256\"},\"id\":199,\"name\":\"ElementaryTypeName\",\"src\":\"2159:7:1\"}],\"id\":200,\"name\":\"VariableDeclaration\",\"src\":\"2159:17:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"endDate\",\"scope\":240,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint256\",\"type\":\"uint256\"},\"id\":201,\"name\":\"ElementaryTypeName\",\"src\":\"2178:7:1\"}],\"id\":202,\"name\":\"VariableDeclaration\",\"src\":\"2178:15:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":240,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":203,\"name\":\"ElementaryTypeName\",\"src\":\"2195:6:1\"}],\"id\":204,\"name\":\"VariableDeclaration\",\"src\":\"2195:25:1\"}],\"id\":205,\"name\":\"ParameterList\",\"src\":\"2137:84:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":210,\"name\":\"ParameterList\",\"src\":\"2258:0:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":505,\"type\":\"modifier ()\",\"value\":\"restricted\"},\"id\":206,\"name\":\"Identifier\",\"src\":\"2234:10:1\"}],\"id\":207,\"name\":\"ModifierInvocation\",\"src\":\"2234:10:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":525,\"type\":\"modifier ()\",\"value\":\"typePetition\"},\"id\":208,\"name\":\"Identifier\",\"src\":\"2245:12:1\"}],\"id\":209,\"name\":\"ModifierInvocation\",\"src\":\"2245:12:1\"},{\"children\":[{\"attributes\":{\"assignments\":[212]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"p\",\"scope\":239,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct Vote.petition\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"petition\",\"referencedDeclaration\":106,\"type\":\"struct Vote.petition\"},\"id\":211,\"name\":\"UserDefinedTypeName\",\"src\":\"2269:8:1\"}],\"id\":212,\"name\":\"VariableDeclaration\",\"src\":\"2269:18:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":122,\"type\":\"struct Vote.petition storage ref\",\"value\":\"currentPetition\"},\"id\":213,\"name\":\"Identifier\",\"src\":\"2290:15:1\"}],\"id\":214,\"name\":\"VariableDeclarationStatement\",\"src\":\"2269:36:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"title\",\"referencedDeclaration\":93,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":212,\"type\":\"struct Vote.petition storage pointer\",\"value\":\"p\"},\"id\":215,\"name\":\"Identifier\",\"src\":\"2316:1:1\"}],\"id\":217,\"name\":\"MemberAccess\",\"src\":\"2316:7:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":198,\"type\":\"string memory\",\"value\":\"title\"},\"id\":218,\"name\":\"Identifier\",\"src\":\"2326:5:1\"}],\"id\":219,\"name\":\"Assignment\",\"src\":\"2316:15:1\"}],\"id\":220,\"name\":\"ExpressionStatement\",\"src\":\"2316:15:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"startDate\",\"referencedDeclaration\":95,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":212,\"type\":\"struct Vote.petition storage pointer\",\"value\":\"p\"},\"id\":221,\"name\":\"Identifier\",\"src\":\"2342:1:1\"}],\"id\":223,\"name\":\"MemberAccess\",\"src\":\"2342:11:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":200,\"type\":\"uint256\",\"value\":\"startDate\"},\"id\":224,\"name\":\"Identifier\",\"src\":\"2356:9:1\"}],\"id\":225,\"name\":\"Assignment\",\"src\":\"2342:23:1\"}],\"id\":226,\"name\":\"ExpressionStatement\",\"src\":\"2342:23:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"endDate\",\"referencedDeclaration\":97,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":212,\"type\":\"struct Vote.petition storage pointer\",\"value\":\"p\"},\"id\":227,\"name\":\"Identifier\",\"src\":\"2376:1:1\"}],\"id\":229,\"name\":\"MemberAccess\",\"src\":\"2376:9:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":202,\"type\":\"uint256\",\"value\":\"endDate\"},\"id\":230,\"name\":\"Identifier\",\"src\":\"2388:7:1\"}],\"id\":231,\"name\":\"Assignment\",\"src\":\"2376:19:1\"}],\"id\":232,\"name\":\"ExpressionStatement\",\"src\":\"2376:19:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"description\",\"referencedDeclaration\":99,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":212,\"type\":\"struct Vote.petition storage pointer\",\"value\":\"p\"},\"id\":233,\"name\":\"Identifier\",\"src\":\"2406:1:1\"}],\"id\":235,\"name\":\"MemberAccess\",\"src\":\"2406:13:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":204,\"type\":\"string memory\",\"value\":\"description\"},\"id\":236,\"name\":\"Identifier\",\"src\":\"2422:11:1\"}],\"id\":237,\"name\":\"Assignment\",\"src\":\"2406:27:1\"}],\"id\":238,\"name\":\"ExpressionStatement\",\"src\":\"2406:27:1\"}],\"id\":239,\"name\":\"Block\",\"src\":\"2258:183:1\"}],\"id\":240,\"name\":\"FunctionDefinition\",\"src\":\"2115:326:1\"},{\"attributes\":{\"functionSelector\":\"da3550ee\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"voteFor\",\"scope\":526,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"candidateAddress\",\"scope\":299,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":241,\"name\":\"ElementaryTypeName\",\"src\":\"2489:7:1\"}],\"id\":242,\"name\":\"VariableDeclaration\",\"src\":\"2489:24:1\"}],\"id\":243,\"name\":\"ParameterList\",\"src\":\"2488:26:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":246,\"name\":\"ParameterList\",\"src\":\"2534:0:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":515,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":244,\"name\":\"Identifier\",\"src\":\"2522:12:1\"}],\"id\":245,\"name\":\"ModifierInvocation\",\"src\":\"2522:12:1\"},{\"children\":[{\"attributes\":{},\"children\":[{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"voters\",\"referencedDeclaration\":90,\"type\":\"mapping(address => bool)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":120,\"type\":\"struct Vote.election storage ref\",\"value\":\"currentElection\"},\"id\":247,\"name\":\"Identifier\",\"src\":\"2548:15:1\"}],\"id\":248,\"name\":\"MemberAccess\",\"src\":\"2548:22:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":249,\"name\":\"Identifier\",\"src\":\"2571:3:1\"}],\"id\":250,\"name\":\"MemberAccess\",\"src\":\"2571:10:1\"}],\"id\":251,\"name\":\"IndexAccess\",\"src\":\"2548:34:1\"},{\"attributes\":{\"hexvalue\":\"66616c7365\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"bool\",\"type\":\"bool\",\"value\":\"false\"},\"id\":252,\"name\":\"Literal\",\"src\":\"2586:5:1\"}],\"id\":253,\"name\":\"BinaryOperation\",\"src\":\"2548:43:1\"},{\"children\":[{\"attributes\":{},\"children\":[{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"!=\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"candidateAddr\",\"referencedDeclaration\":64,\"type\":\"address\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":254,\"name\":\"Identifier\",\"src\":\"2610:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":242,\"type\":\"address\",\"value\":\"candidateAddress\"},\"id\":255,\"name\":\"Identifier\",\"src\":\"2621:16:1\"}],\"id\":256,\"name\":\"IndexAccess\",\"src\":\"2610:28:1\"}],\"id\":257,\"name\":\"MemberAccess\",\"src\":\"2610:42:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"address payable\",\"type_conversion\":true},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"type\":\"type(address)\"},\"children\":[{\"attributes\":{\"name\":\"address\"},\"id\":258,\"name\":\"ElementaryTypeName\",\"src\":\"2656:7:1\"}],\"id\":259,\"name\":\"ElementaryTypeNameExpression\",\"src\":\"2656:7:1\"},{\"attributes\":{\"hexvalue\":\"30\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 0\",\"value\":\"0\"},\"id\":260,\"name\":\"Literal\",\"src\":\"2664:1:1\"}],\"id\":261,\"name\":\"FunctionCall\",\"src\":\"2656:10:1\"}],\"id\":262,\"name\":\"BinaryOperation\",\"src\":\"2610:56:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"voters\",\"referencedDeclaration\":90,\"type\":\"mapping(address => bool)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":120,\"type\":\"struct Vote.election storage ref\",\"value\":\"currentElection\"},\"id\":263,\"name\":\"Identifier\",\"src\":\"2686:15:1\"}],\"id\":267,\"name\":\"MemberAccess\",\"src\":\"2686:22:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":265,\"name\":\"Identifier\",\"src\":\"2709:3:1\"}],\"id\":266,\"name\":\"MemberAccess\",\"src\":\"2709:10:1\"}],\"id\":268,\"name\":\"IndexAccess\",\"src\":\"2686:34:1\"},{\"attributes\":{\"hexvalue\":\"74727565\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"bool\",\"type\":\"bool\",\"value\":\"true\"},\"id\":269,\"name\":\"Literal\",\"src\":\"2724:4:1\"}],\"id\":270,\"name\":\"Assignment\",\"src\":\"2686:42:1\"}],\"id\":271,\"name\":\"ExpressionStatement\",\"src\":\"2686:42:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"++\",\"prefix\":false,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"numVotes\",\"referencedDeclaration\":84,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":120,\"type\":\"struct Vote.election storage ref\",\"value\":\"currentElection\"},\"id\":272,\"name\":\"Identifier\",\"src\":\"2747:15:1\"}],\"id\":274,\"name\":\"MemberAccess\",\"src\":\"2747:24:1\"}],\"id\":275,\"name\":\"UnaryOperation\",\"src\":\"2747:26:1\"}],\"id\":276,\"name\":\"ExpressionStatement\",\"src\":\"2747:26:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"++\",\"prefix\":false,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"numVotes\",\"referencedDeclaration\":66,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":277,\"name\":\"Identifier\",\"src\":\"2793:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":242,\"type\":\"address\",\"value\":\"candidateAddress\"},\"id\":278,\"name\":\"Identifier\",\"src\":\"2804:16:1\"}],\"id\":279,\"name\":\"IndexAccess\",\"src\":\"2793:28:1\"}],\"id\":280,\"name\":\"TupleExpression\",\"src\":\"2792:30:1\"}],\"id\":281,\"name\":\"MemberAccess\",\"src\":\"2792:39:1\"}],\"id\":282,\"name\":\"UnaryOperation\",\"src\":\"2792:41:1\"}],\"id\":283,\"name\":\"ExpressionStatement\",\"src\":\"2792:41:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"push\",\"type\":\"function (address)\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"voters\",\"referencedDeclaration\":69,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":284,\"name\":\"Identifier\",\"src\":\"2853:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":242,\"type\":\"address\",\"value\":\"candidateAddress\"},\"id\":285,\"name\":\"Identifier\",\"src\":\"2864:16:1\"}],\"id\":286,\"name\":\"IndexAccess\",\"src\":\"2853:28:1\"}],\"id\":287,\"name\":\"TupleExpression\",\"src\":\"2852:30:1\"}],\"id\":288,\"name\":\"MemberAccess\",\"src\":\"2852:37:1\"}],\"id\":289,\"name\":\"MemberAccess\",\"src\":\"2852:42:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":290,\"name\":\"Identifier\",\"src\":\"2895:3:1\"}],\"id\":291,\"name\":\"MemberAccess\",\"src\":\"2895:10:1\"}],\"id\":292,\"name\":\"FunctionCall\",\"src\":\"2852:54:1\"}],\"id\":293,\"name\":\"ExpressionStatement\",\"src\":\"2852:54:1\"}],\"id\":294,\"name\":\"Block\",\"src\":\"2667:255:1\"}],\"id\":295,\"name\":\"IfStatement\",\"src\":\"2607:315:1\"}],\"id\":296,\"name\":\"Block\",\"src\":\"2592:341:1\"}],\"id\":297,\"name\":\"IfStatement\",\"src\":\"2545:388:1\"}],\"id\":298,\"name\":\"Block\",\"src\":\"2534:406:1\"}],\"id\":299,\"name\":\"FunctionDefinition\",\"src\":\"2472:468:1\"},{\"attributes\":{\"functionSelector\":\"869eae23\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"enterElection\",\"scope\":526,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"name\",\"scope\":362,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":300,\"name\":\"ElementaryTypeName\",\"src\":\"2997:6:1\"}],\"id\":301,\"name\":\"VariableDeclaration\",\"src\":\"2997:18:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":362,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":302,\"name\":\"ElementaryTypeName\",\"src\":\"3017:6:1\"}],\"id\":303,\"name\":\"VariableDeclaration\",\"src\":\"3017:25:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"current_date\",\"scope\":362,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint256\",\"type\":\"uint256\"},\"id\":304,\"name\":\"ElementaryTypeName\",\"src\":\"3044:7:1\"}],\"id\":305,\"name\":\"VariableDeclaration\",\"src\":\"3044:20:1\"}],\"id\":306,\"name\":\"ParameterList\",\"src\":\"2996:69:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":309,\"name\":\"ParameterList\",\"src\":\"3091:0:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":515,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":307,\"name\":\"Identifier\",\"src\":\"3078:12:1\"}],\"id\":308,\"name\":\"ModifierInvocation\",\"src\":\"3078:12:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"type\":\"function (bool) pure\",\"value\":\"require\"},\"id\":310,\"name\":\"Identifier\",\"src\":\"3171:7:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"&&\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\">\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":305,\"type\":\"uint256\",\"value\":\"current_date\"},\"id\":311,\"name\":\"Identifier\",\"src\":\"3179:12:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"startDate\",\"referencedDeclaration\":78,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":120,\"type\":\"struct Vote.election storage ref\",\"value\":\"currentElection\"},\"id\":312,\"name\":\"Identifier\",\"src\":\"3194:15:1\"}],\"id\":313,\"name\":\"MemberAccess\",\"src\":\"3194:25:1\"}],\"id\":314,\"name\":\"BinaryOperation\",\"src\":\"3179:40:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"<\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":305,\"type\":\"uint256\",\"value\":\"current_date\"},\"id\":315,\"name\":\"Identifier\",\"src\":\"3223:12:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"endDate\",\"referencedDeclaration\":80,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":120,\"type\":\"struct Vote.election storage ref\",\"value\":\"currentElection\"},\"id\":316,\"name\":\"Identifier\",\"src\":\"3238:15:1\"}],\"id\":317,\"name\":\"MemberAccess\",\"src\":\"3238:23:1\"}],\"id\":318,\"name\":\"BinaryOperation\",\"src\":\"3223:38:1\"}],\"id\":319,\"name\":\"BinaryOperation\",\"src\":\"3179:82:1\"}],\"id\":320,\"name\":\"FunctionCall\",\"src\":\"3171:91:1\"}],\"id\":321,\"name\":\"ExpressionStatement\",\"src\":\"3171:91:1\"},{\"attributes\":{\"assignments\":[323]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"currentCandidate\",\"scope\":361,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct Vote.candidate\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"candidate\",\"referencedDeclaration\":74,\"type\":\"struct Vote.candidate\"},\"id\":322,\"name\":\"UserDefinedTypeName\",\"src\":\"3300:9:1\"}],\"id\":323,\"name\":\"VariableDeclaration\",\"src\":\"3300:34:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":324,\"name\":\"Identifier\",\"src\":\"3337:10:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":325,\"name\":\"Identifier\",\"src\":\"3348:3:1\"}],\"id\":326,\"name\":\"MemberAccess\",\"src\":\"3348:10:1\"}],\"id\":327,\"name\":\"IndexAccess\",\"src\":\"3337:22:1\"}],\"id\":328,\"name\":\"VariableDeclarationStatement\",\"src\":\"3300:59:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"name\",\"referencedDeclaration\":71,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":323,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":329,\"name\":\"Identifier\",\"src\":\"3370:16:1\"}],\"id\":331,\"name\":\"MemberAccess\",\"src\":\"3370:21:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":301,\"type\":\"string memory\",\"value\":\"name\"},\"id\":332,\"name\":\"Identifier\",\"src\":\"3394:4:1\"}],\"id\":333,\"name\":\"Assignment\",\"src\":\"3370:28:1\"}],\"id\":334,\"name\":\"ExpressionStatement\",\"src\":\"3370:28:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"description\",\"referencedDeclaration\":73,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":323,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":335,\"name\":\"Identifier\",\"src\":\"3409:16:1\"}],\"id\":337,\"name\":\"MemberAccess\",\"src\":\"3409:28:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":303,\"type\":\"string memory\",\"value\":\"description\"},\"id\":338,\"name\":\"Identifier\",\"src\":\"3440:11:1\"}],\"id\":339,\"name\":\"Assignment\",\"src\":\"3409:42:1\"}],\"id\":340,\"name\":\"ExpressionStatement\",\"src\":\"3409:42:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"address\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"candidateAddr\",\"referencedDeclaration\":64,\"type\":\"address\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":323,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":341,\"name\":\"Identifier\",\"src\":\"3462:16:1\"}],\"id\":343,\"name\":\"MemberAccess\",\"src\":\"3462:30:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":344,\"name\":\"Identifier\",\"src\":\"3494:3:1\"}],\"id\":345,\"name\":\"MemberAccess\",\"src\":\"3494:10:1\"}],\"id\":346,\"name\":\"Assignment\",\"src\":\"3462:42:1\"}],\"id\":347,\"name\":\"ExpressionStatement\",\"src\":\"3462:42:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"voters\",\"referencedDeclaration\":69,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":323,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":348,\"name\":\"Identifier\",\"src\":\"3515:16:1\"}],\"id\":350,\"name\":\"MemberAccess\",\"src\":\"3515:23:1\"}],\"id\":351,\"name\":\"ExpressionStatement\",\"src\":\"3515:23:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"push\",\"type\":\"function (struct Vote.candidate storage ref)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"struct Vote.candidate storage ref[] storage ref\",\"value\":\"candidateArray\"},\"id\":352,\"name\":\"Identifier\",\"src\":\"3549:14:1\"}],\"id\":354,\"name\":\"MemberAccess\",\"src\":\"3549:19:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":323,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":355,\"name\":\"Identifier\",\"src\":\"3569:16:1\"}],\"id\":356,\"name\":\"FunctionCall\",\"src\":\"3549:37:1\"}],\"id\":357,\"name\":\"ExpressionStatement\",\"src\":\"3549:37:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"++\",\"prefix\":false,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":42,\"type\":\"uint256\",\"value\":\"candidatesCount\"},\"id\":358,\"name\":\"Identifier\",\"src\":\"3597:15:1\"}],\"id\":359,\"name\":\"UnaryOperation\",\"src\":\"3597:17:1\"}],\"id\":360,\"name\":\"ExpressionStatement\",\"src\":\"3597:17:1\"}],\"id\":361,\"name\":\"Block\",\"src\":\"3091:575:1\"}],\"id\":362,\"name\":\"FunctionDefinition\",\"src\":\"2974:692:1\"},{\"attributes\":{\"functionSelector\":\"af47fb3f\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"leaveElection\",\"scope\":526,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"current_date\",\"scope\":437,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint256\",\"type\":\"uint256\"},\"id\":363,\"name\":\"ElementaryTypeName\",\"src\":\"3723:7:1\"}],\"id\":364,\"name\":\"VariableDeclaration\",\"src\":\"3723:20:1\"}],\"id\":365,\"name\":\"ParameterList\",\"src\":\"3722:22:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":368,\"name\":\"ParameterList\",\"src\":\"3770:0:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":515,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":366,\"name\":\"Identifier\",\"src\":\"3757:12:1\"}],\"id\":367,\"name\":\"ModifierInvocation\",\"src\":\"3757:12:1\"},{\"children\":[{\"attributes\":{\"assignments\":[370]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"currentCandidate\",\"scope\":436,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct Vote.candidate\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"candidate\",\"referencedDeclaration\":74,\"type\":\"struct Vote.candidate\"},\"id\":369,\"name\":\"UserDefinedTypeName\",\"src\":\"3983:9:1\"}],\"id\":370,\"name\":\"VariableDeclaration\",\"src\":\"3983:34:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":371,\"name\":\"Identifier\",\"src\":\"4020:10:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":372,\"name\":\"Identifier\",\"src\":\"4031:3:1\"}],\"id\":373,\"name\":\"MemberAccess\",\"src\":\"4031:10:1\"}],\"id\":374,\"name\":\"IndexAccess\",\"src\":\"4020:22:1\"}],\"id\":375,\"name\":\"VariableDeclarationStatement\",\"src\":\"3983:59:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"name\",\"referencedDeclaration\":71,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":370,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":376,\"name\":\"Identifier\",\"src\":\"4053:16:1\"}],\"id\":378,\"name\":\"MemberAccess\",\"src\":\"4053:21:1\"},{\"attributes\":{\"hexvalue\":\"\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"string\",\"type\":\"literal_string \\\"\\\"\",\"value\":\"\"},\"id\":379,\"name\":\"Literal\",\"src\":\"4077:2:1\"}],\"id\":380,\"name\":\"Assignment\",\"src\":\"4053:26:1\"}],\"id\":381,\"name\":\"ExpressionStatement\",\"src\":\"4053:26:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"description\",\"referencedDeclaration\":73,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":370,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":382,\"name\":\"Identifier\",\"src\":\"4090:16:1\"}],\"id\":384,\"name\":\"MemberAccess\",\"src\":\"4090:28:1\"},{\"attributes\":{\"hexvalue\":\"\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"string\",\"type\":\"literal_string \\\"\\\"\",\"value\":\"\"},\"id\":385,\"name\":\"Literal\",\"src\":\"4121:2:1\"}],\"id\":386,\"name\":\"Assignment\",\"src\":\"4090:33:1\"}],\"id\":387,\"name\":\"ExpressionStatement\",\"src\":\"4090:33:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"delete\",\"prefix\":true,\"type\":\"tuple()\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":388,\"name\":\"Identifier\",\"src\":\"4215:10:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":389,\"name\":\"Identifier\",\"src\":\"4226:3:1\"}],\"id\":390,\"name\":\"MemberAccess\",\"src\":\"4226:10:1\"}],\"id\":391,\"name\":\"IndexAccess\",\"src\":\"4215:22:1\"}],\"id\":392,\"name\":\"UnaryOperation\",\"src\":\"4208:29:1\"}],\"id\":393,\"name\":\"ExpressionStatement\",\"src\":\"4208:29:1\"},{\"children\":[{\"attributes\":{\"assignments\":[395]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"i\",\"scope\":432,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":394,\"name\":\"ElementaryTypeName\",\"src\":\"4253:4:1\"}],\"id\":395,\"name\":\"VariableDeclaration\",\"src\":\"4253:6:1\"},{\"attributes\":{\"hexvalue\":\"30\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 0\",\"value\":\"0\"},\"id\":396,\"name\":\"Literal\",\"src\":\"4262:1:1\"}],\"id\":397,\"name\":\"VariableDeclarationStatement\",\"src\":\"4253:10:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"<\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":395,\"type\":\"uint256\",\"value\":\"i\"},\"id\":398,\"name\":\"Identifier\",\"src\":\"4265:1:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"length\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"struct Vote.candidate storage ref[] storage ref\",\"value\":\"candidateArray\"},\"id\":399,\"name\":\"Identifier\",\"src\":\"4267:14:1\"}],\"id\":400,\"name\":\"MemberAccess\",\"src\":\"4267:21:1\"}],\"id\":401,\"name\":\"BinaryOperation\",\"src\":\"4265:23:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"++\",\"prefix\":false,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":395,\"type\":\"uint256\",\"value\":\"i\"},\"id\":402,\"name\":\"Identifier\",\"src\":\"4290:1:1\"}],\"id\":403,\"name\":\"UnaryOperation\",\"src\":\"4290:3:1\"}],\"id\":404,\"name\":\"ExpressionStatement\",\"src\":\"4290:3:1\"},{\"children\":[{\"attributes\":{},\"children\":[{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":405,\"name\":\"Identifier\",\"src\":\"4312:3:1\"}],\"id\":406,\"name\":\"MemberAccess\",\"src\":\"4312:10:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"candidateAddr\",\"referencedDeclaration\":64,\"type\":\"address\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"struct Vote.candidate storage ref[] storage ref\",\"value\":\"candidateArray\"},\"id\":407,\"name\":\"Identifier\",\"src\":\"4324:14:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":395,\"type\":\"uint256\",\"value\":\"i\"},\"id\":408,\"name\":\"Identifier\",\"src\":\"4339:1:1\"}],\"id\":409,\"name\":\"IndexAccess\",\"src\":\"4324:17:1\"}],\"id\":410,\"name\":\"MemberAccess\",\"src\":\"4324:31:1\"}],\"id\":411,\"name\":\"BinaryOperation\",\"src\":\"4312:43:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"struct Vote.candidate storage ref[] storage ref\",\"value\":\"candidateArray\"},\"id\":412,\"name\":\"Identifier\",\"src\":\"4375:14:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":395,\"type\":\"uint256\",\"value\":\"i\"},\"id\":413,\"name\":\"Identifier\",\"src\":\"4390:1:1\"}],\"id\":414,\"name\":\"IndexAccess\",\"src\":\"4375:17:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"struct Vote.candidate storage ref[] storage ref\",\"value\":\"candidateArray\"},\"id\":415,\"name\":\"Identifier\",\"src\":\"4393:14:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"-\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"length\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"struct Vote.candidate storage ref[] storage ref\",\"value\":\"candidateArray\"},\"id\":416,\"name\":\"Identifier\",\"src\":\"4408:14:1\"}],\"id\":417,\"name\":\"MemberAccess\",\"src\":\"4408:21:1\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":418,\"name\":\"Literal\",\"src\":\"4430:1:1\"}],\"id\":419,\"name\":\"BinaryOperation\",\"src\":\"4408:23:1\"}],\"id\":420,\"name\":\"IndexAccess\",\"src\":\"4393:39:1\"}],\"id\":421,\"name\":\"Assignment\",\"src\":\"4375:57:1\"}],\"id\":422,\"name\":\"ExpressionStatement\",\"src\":\"4375:57:1\"},{\"children\":[{\"attributes\":{\"arguments\":[null],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[null],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"pop\",\"type\":\"function ()\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"struct Vote.candidate storage ref[] storage ref\",\"value\":\"candidateArray\"},\"id\":423,\"name\":\"Identifier\",\"src\":\"4451:14:1\"}],\"id\":425,\"name\":\"MemberAccess\",\"src\":\"4451:18:1\"}],\"id\":426,\"name\":\"FunctionCall\",\"src\":\"4451:20:1\"}],\"id\":427,\"name\":\"ExpressionStatement\",\"src\":\"4451:20:1\"},{\"id\":428,\"name\":\"Break\",\"src\":\"4490:5:1\"}],\"id\":429,\"name\":\"Block\",\"src\":\"4356:155:1\"}],\"id\":430,\"name\":\"IfStatement\",\"src\":\"4309:202:1\"}],\"id\":431,\"name\":\"Block\",\"src\":\"4294:228:1\"}],\"id\":432,\"name\":\"ForStatement\",\"src\":\"4248:274:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"--\",\"prefix\":false,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":42,\"type\":\"uint256\",\"value\":\"candidatesCount\"},\"id\":433,\"name\":\"Identifier\",\"src\":\"4532:15:1\"}],\"id\":434,\"name\":\"UnaryOperation\",\"src\":\"4532:17:1\"}],\"id\":435,\"name\":\"ExpressionStatement\",\"src\":\"4532:17:1\"}],\"id\":436,\"name\":\"Block\",\"src\":\"3770:787:1\"}],\"id\":437,\"name\":\"FunctionDefinition\",\"src\":\"3700:857:1\"},{\"attributes\":{\"functionSelector\":\"ad0dcf9c\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"get_candidates\",\"scope\":526,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"candaddr\",\"scope\":459,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":438,\"name\":\"ElementaryTypeName\",\"src\":\"4604:7:1\"}],\"id\":439,\"name\":\"VariableDeclaration\",\"src\":\"4604:16:1\"}],\"id\":440,\"name\":\"ParameterList\",\"src\":\"4603:18:1\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":459,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":443,\"name\":\"ElementaryTypeName\",\"src\":\"4656:6:1\"}],\"id\":444,\"name\":\"VariableDeclaration\",\"src\":\"4656:13:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":459,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":445,\"name\":\"ElementaryTypeName\",\"src\":\"4671:6:1\"}],\"id\":446,\"name\":\"VariableDeclaration\",\"src\":\"4671:13:1\"}],\"id\":447,\"name\":\"ParameterList\",\"src\":\"4655:30:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":515,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":441,\"name\":\"Identifier\",\"src\":\"4634:12:1\"}],\"id\":442,\"name\":\"ModifierInvocation\",\"src\":\"4634:12:1\"},{\"children\":[{\"attributes\":{\"functionReturnParameters\":447},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"tuple(string storage ref,string storage ref)\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"name\",\"referencedDeclaration\":71,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":448,\"name\":\"Identifier\",\"src\":\"4704:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":439,\"type\":\"address\",\"value\":\"candaddr\"},\"id\":449,\"name\":\"Identifier\",\"src\":\"4715:8:1\"}],\"id\":450,\"name\":\"IndexAccess\",\"src\":\"4704:20:1\"}],\"id\":451,\"name\":\"MemberAccess\",\"src\":\"4704:25:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"description\",\"referencedDeclaration\":73,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":452,\"name\":\"Identifier\",\"src\":\"4731:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":439,\"type\":\"address\",\"value\":\"candaddr\"},\"id\":453,\"name\":\"Identifier\",\"src\":\"4742:8:1\"}],\"id\":454,\"name\":\"IndexAccess\",\"src\":\"4731:20:1\"}],\"id\":455,\"name\":\"MemberAccess\",\"src\":\"4731:32:1\"}],\"id\":456,\"name\":\"TupleExpression\",\"src\":\"4703:61:1\"}],\"id\":457,\"name\":\"Return\",\"src\":\"4697:67:1\"}],\"id\":458,\"name\":\"Block\",\"src\":\"4686:86:1\"}],\"id\":459,\"name\":\"FunctionDefinition\",\"src\":\"4580:192:1\"},{\"attributes\":{\"functionSelector\":\"95115447\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"getCandidateVoters\",\"scope\":526,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"candAddr\",\"scope\":477,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":460,\"name\":\"ElementaryTypeName\",\"src\":\"4806:7:1\"}],\"id\":461,\"name\":\"VariableDeclaration\",\"src\":\"4806:16:1\"}],\"id\":462,\"name\":\"ParameterList\",\"src\":\"4805:18:1\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":477,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":465,\"name\":\"ElementaryTypeName\",\"src\":\"4858:7:1\"}],\"id\":466,\"name\":\"ArrayTypeName\",\"src\":\"4858:9:1\"}],\"id\":467,\"name\":\"VariableDeclaration\",\"src\":\"4858:16:1\"}],\"id\":468,\"name\":\"ParameterList\",\"src\":\"4857:18:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":515,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":463,\"name\":\"Identifier\",\"src\":\"4836:12:1\"}],\"id\":464,\"name\":\"ModifierInvocation\",\"src\":\"4836:12:1\"},{\"children\":[{\"attributes\":{\"functionReturnParameters\":468},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"voters\",\"referencedDeclaration\":69,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":469,\"name\":\"Identifier\",\"src\":\"4895:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":461,\"type\":\"address\",\"value\":\"candAddr\"},\"id\":470,\"name\":\"Identifier\",\"src\":\"4906:8:1\"}],\"id\":471,\"name\":\"IndexAccess\",\"src\":\"4895:20:1\"}],\"id\":472,\"name\":\"TupleExpression\",\"src\":\"4894:22:1\"}],\"id\":473,\"name\":\"MemberAccess\",\"src\":\"4894:29:1\"}],\"id\":474,\"name\":\"TupleExpression\",\"src\":\"4893:31:1\"}],\"id\":475,\"name\":\"Return\",\"src\":\"4887:37:1\"}],\"id\":476,\"name\":\"Block\",\"src\":\"4876:56:1\"}],\"id\":477,\"name\":\"FunctionDefinition\",\"src\":\"4778:154:1\"},{\"attributes\":{\"functionSelector\":\"e1c5fcc1\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"getElectionVoter\",\"scope\":526,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"voterAddr\",\"scope\":494,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":478,\"name\":\"ElementaryTypeName\",\"src\":\"4964:7:1\"}],\"id\":479,\"name\":\"VariableDeclaration\",\"src\":\"4964:17:1\"}],\"id\":480,\"name\":\"ParameterList\",\"src\":\"4963:19:1\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":494,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"bool\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":483,\"name\":\"ElementaryTypeName\",\"src\":\"5017:4:1\"}],\"id\":484,\"name\":\"VariableDeclaration\",\"src\":\"5017:4:1\"}],\"id\":485,\"name\":\"ParameterList\",\"src\":\"5016:6:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":515,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":481,\"name\":\"Identifier\",\"src\":\"4995:12:1\"}],\"id\":482,\"name\":\"ModifierInvocation\",\"src\":\"4995:12:1\"},{\"children\":[{\"attributes\":{\"functionReturnParameters\":485},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"mapping(address => bool)\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"voters\",\"referencedDeclaration\":90,\"type\":\"mapping(address => bool)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":120,\"type\":\"struct Vote.election storage ref\",\"value\":\"currentElection\"},\"id\":486,\"name\":\"Identifier\",\"src\":\"5043:15:1\"}],\"id\":487,\"name\":\"MemberAccess\",\"src\":\"5043:22:1\"}],\"id\":488,\"name\":\"TupleExpression\",\"src\":\"5042:24:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":479,\"type\":\"address\",\"value\":\"voterAddr\"},\"id\":489,\"name\":\"Identifier\",\"src\":\"5067:9:1\"}],\"id\":490,\"name\":\"IndexAccess\",\"src\":\"5042:35:1\"}],\"id\":491,\"name\":\"TupleExpression\",\"src\":\"5041:37:1\"}],\"id\":492,\"name\":\"Return\",\"src\":\"5034:44:1\"}],\"id\":493,\"name\":\"Block\",\"src\":\"5023:63:1\"}],\"id\":494,\"name\":\"FunctionDefinition\",\"src\":\"4938:148:1\"},{\"attributes\":{\"name\":\"restricted\",\"virtual\":false,\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":495,\"name\":\"ParameterList\",\"src\":\"5111:2:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"type\":\"function (bool) pure\",\"value\":\"require\"},\"id\":496,\"name\":\"Identifier\",\"src\":\"5125:7:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":497,\"name\":\"Identifier\",\"src\":\"5133:3:1\"}],\"id\":498,\"name\":\"MemberAccess\",\"src\":\"5133:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":40,\"type\":\"address\",\"value\":\"manager\"},\"id\":499,\"name\":\"Identifier\",\"src\":\"5147:7:1\"}],\"id\":500,\"name\":\"BinaryOperation\",\"src\":\"5133:21:1\"}],\"id\":501,\"name\":\"FunctionCall\",\"src\":\"5125:30:1\"}],\"id\":502,\"name\":\"ExpressionStatement\",\"src\":\"5125:30:1\"},{\"id\":503,\"name\":\"PlaceholderStatement\",\"src\":\"5166:1:1\"}],\"id\":504,\"name\":\"Block\",\"src\":\"5114:61:1\"}],\"id\":505,\"name\":\"ModifierDefinition\",\"src\":\"5092:83:1\"},{\"attributes\":{\"name\":\"typeElection\",\"virtual\":false,\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":506,\"name\":\"ParameterList\",\"src\":\"5202:2:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"type\":\"function (bool) pure\",\"value\":\"require\"},\"id\":507,\"name\":\"Identifier\",\"src\":\"5216:7:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":108,\"type\":\"uint256\",\"value\":\"typeOfVote\"},\"id\":508,\"name\":\"Identifier\",\"src\":\"5224:10:1\"},{\"attributes\":{\"hexvalue\":\"30\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 0\",\"value\":\"0\"},\"id\":509,\"name\":\"Literal\",\"src\":\"5238:1:1\"}],\"id\":510,\"name\":\"BinaryOperation\",\"src\":\"5224:15:1\"}],\"id\":511,\"name\":\"FunctionCall\",\"src\":\"5216:24:1\"}],\"id\":512,\"name\":\"ExpressionStatement\",\"src\":\"5216:24:1\"},{\"id\":513,\"name\":\"PlaceholderStatement\",\"src\":\"5251:1:1\"}],\"id\":514,\"name\":\"Block\",\"src\":\"5205:55:1\"}],\"id\":515,\"name\":\"ModifierDefinition\",\"src\":\"5181:79:1\"},{\"attributes\":{\"name\":\"typePetition\",\"virtual\":false,\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":516,\"name\":\"ParameterList\",\"src\":\"5287:2:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"type\":\"function (bool) pure\",\"value\":\"require\"},\"id\":517,\"name\":\"Identifier\",\"src\":\"5301:7:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":108,\"type\":\"uint256\",\"value\":\"typeOfVote\"},\"id\":518,\"name\":\"Identifier\",\"src\":\"5309:10:1\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":519,\"name\":\"Literal\",\"src\":\"5323:1:1\"}],\"id\":520,\"name\":\"BinaryOperation\",\"src\":\"5309:15:1\"}],\"id\":521,\"name\":\"FunctionCall\",\"src\":\"5301:24:1\"}],\"id\":522,\"name\":\"ExpressionStatement\",\"src\":\"5301:24:1\"},{\"id\":523,\"name\":\"PlaceholderStatement\",\"src\":\"5336:1:1\"}],\"id\":524,\"name\":\"Block\",\"src\":\"5290:55:1\"}],\"id\":525,\"name\":\"ModifierDefinition\",\"src\":\"5266:79:1\"}],\"id\":526,\"name\":\"ContractDefinition\",\"src\":\"68:5282:1\"}],\"id\":527,\"name\":\"SourceUnit\",\"src\":\"0:5352:1\"},\"compiler\":{\"name\":\"solc\",\"version\":\"0.7.4+commit.3f05b770.Emscripten.clang\"},\"networks\":{},\"schemaVersion\":\"3.3.3\",\"updatedAt\":\"2021-03-07T00:09:25.912Z\",\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}}");

/***/ }),

/***/ "./src/contracts/VoteFactory.json":
/*!****************************************!*\
  !*** ./src/contracts/VoteFactory.json ***!
  \****************************************/
/*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, immutableReferences, generatedSources, deployedGeneratedSources, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, networkType, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"contractName\":\"VoteFactory\",\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"deployedVotes\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"typeOf\",\"type\":\"uint256\"}],\"name\":\"createVote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getDeployedVotes\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true}],\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.7.4+commit.3f05b770\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"typeOf\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"createVote\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"deployedVotes\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"getDeployedVotes\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address[]\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address[]\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"}],\\\"devdoc\\\":{\\\"kind\\\":\\\"dev\\\",\\\"methods\\\":{},\\\"version\\\":1},\\\"userdoc\\\":{\\\"kind\\\":\\\"user\\\",\\\"methods\\\":{},\\\"version\\\":1}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/VoteFactory.sol\\\":\\\"VoteFactory\\\"},\\\"evmVersion\\\":\\\"istanbul\\\",\\\"libraries\\\":{},\\\"metadata\\\":{\\\"bytecodeHash\\\":\\\"ipfs\\\"},\\\"optimizer\\\":{\\\"enabled\\\":false,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/Vote.sol\\\":{\\\"keccak256\\\":\\\"0x8659d7064ef2a8af96dc77c92e56744e246e6c863f69ceb7c52b9fbfebc26ec1\\\",\\\"license\\\":\\\"UNLICENSED\\\",\\\"urls\\\":[\\\"bzz-raw://a71056be1774cb5e9b22a83ad255ca0a0199608346d019aa5ec01a587d2379a7\\\",\\\"dweb:/ipfs/QmcBE4NRfWvowa87r5RYPwVxo22awUn4Mp5vF3gkqLCNT1\\\"]},\\\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/VoteFactory.sol\\\":{\\\"keccak256\\\":\\\"0xdf24394d828a506241b0020ec64e8d6da9e87319de497033a194d5be397df84b\\\",\\\"license\\\":\\\"UNLICENSED\\\",\\\"urls\\\":[\\\"bzz-raw://d0e47e04d4bf4de24b39dbe20c11e087b54b2b79876ee3527ba8a5c27c47ee05\\\",\\\"dweb:/ipfs/QmfCurUxkxt1YYYc29NtKCbcqsD4H3XJj9PrrHEkExZ6AN\\\"]}},\\\"version\\\":1}\",\"bytecode\":\"0x608060405234801561001057600080fd5b50612d55806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063c142ab0014610046578063ca9cdfff1461009e578063fa954aa0146100fd575b600080fd5b6100726004803603602081101561005c57600080fd5b810190808035906020019092919050505061012b565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100a661016a565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156100e95780820151818401526020810190506100ce565b505050509050019250505060405180910390f35b6101296004803603602081101561011357600080fd5b81019080803590602001909291905050506101f8565b005b6000818154811061013b57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060008054806020026020016040519081016040528092919081815260200182805480156101ee57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116101a4575b5050505050905090565b60003382604051610208906102b5565b808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051809103906000f08015801561024b573d6000803e3d6000fd5b5090506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b612a5d806102c38339019056fe608060405234801561001057600080fd5b50604051612a5d380380612a5d8339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060001461009d5760016100a0565b60005b60ff1660028190555050506129a3806100ba6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80638ab66a90116100a2578063af47fb3f11610071578063af47fb3f14610c3a578063da3550ee14610c68578063dcfda00f14610cac578063e1c5fcc114610ea9578063fcae83a714610f035761010b565b80638ab66a90146108275780638e440c32146109745780639511544714610a78578063ad0dcf9c14610b115761010b565b806367127e43116100de57806367127e4314610409578063691a675c1461056f5780637432e63a14610673578063869eae23146106cb5761010b565b806304facd35146101105780632d35a8a21461028057806335a893a11461029e578063481c6a75146103d5575b600080fd5b610118611073565b6040518080602001878152602001868152602001806020018581526020018060200184810384528a818151815260200191508051906020019080838360005b83811015610172578082015181840152602081019050610157565b50505050905090810190601f16801561019f5780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b838110156101d85780820151818401526020810190506101bd565b50505050905090810190601f1680156102055780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b8381101561023e578082015181840152602081019050610223565b50505050905090810190601f16801561026b5780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b610288611296565b6040518082815260200191505060405180910390f35b6102ca600480360360208110156102b457600080fd5b810190808035906020019092919050505061129c565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015610330578082015181840152602081019050610315565b50505050905090810190601f16801561035d5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561039657808201518184015260208101905061037b565b50505050905090810190601f1680156103c35780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b6103dd61142c565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61056d6004803603608081101561041f57600080fd5b810190808035906020019064010000000081111561043c57600080fd5b82018360208201111561044e57600080fd5b8035906020019184600183028401116401000000008311171561047057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019092919080359060200190929190803590602001906401000000008111156104e757600080fd5b8201836020820111156104f957600080fd5b8035906020019184600183028401116401000000008311171561051b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611450565b005b610577611508565b604051808060200186815260200185815260200180602001848152602001838103835288818151815260200191508051906020019080838360005b838110156105cd5780820151818401526020810190506105b2565b50505050905090810190601f1680156105fa5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015610633578082015181840152602081019050610618565b50505050905090810190601f1680156106605780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b61069f6004803603602081101561068957600080fd5b810190808035906020019092919050505061165c565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610825600480360360608110156106e157600080fd5b81019080803590602001906401000000008111156106fe57600080fd5b82018360208201111561071057600080fd5b8035906020019184600183028401116401000000008311171561073257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561079557600080fd5b8201836020820111156107a757600080fd5b803590602001918460018302840111640100000000831117156107c957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019092919050505061169b565b005b6108696004803603602081101561083d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506118a1565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156108cf5780820151818401526020810190506108b4565b50505050905090810190601f1680156108fc5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561093557808201518184015260208101905061091a565b50505050905090810190601f1680156109625780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b61097c611a21565b604051808060200186815260200185815260200180602001848152602001838103835288818151815260200191508051906020019080838360005b838110156109d25780820151818401526020810190506109b7565b50505050905090810190601f1680156109ff5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015610a38578082015181840152602081019050610a1d565b50505050905090810190601f168015610a655780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b610aba60048036036020811015610a8e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611b9e565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610afd578082015181840152602081019050610ae2565b505050509050019250505060405180910390f35b610b5360048036036020811015610b2757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611c7d565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b83811015610b97578082015181840152602081019050610b7c565b50505050905090810190601f168015610bc45780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015610bfd578082015181840152602081019050610be2565b50505050905090810190601f168015610c2a5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b610c6660048036036020811015610c5057600080fd5b8101908080359060200190929190505050611e54565b005b610caa60048036036020811015610c7e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506121df565b005b610ea7600480360360a0811015610cc257600080fd5b8101908080359060200190640100000000811115610cdf57600080fd5b820183602082011115610cf157600080fd5b80359060200191846001830284011164010000000083111715610d1357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291908035906020019092919080359060200190640100000000811115610d8a57600080fd5b820183602082011115610d9c57600080fd5b80359060200191846001830284011164010000000083111715610dbe57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610e2157600080fd5b820183602082011115610e3357600080fd5b80359060200191846001830284011164010000000083111715610e5557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050612448565b005b610eeb60048036036020811015610ebf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061251a565b60405180821515815260200191505060405180910390f35b610f0b612580565b6040518080602001878152602001868152602001806020018581526020018060200184810384528a818151815260200191508051906020019080838360005b83811015610f65578082015181840152602081019050610f4a565b50505050905090810190601f168015610f925780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610fcb578082015181840152602081019050610fb0565b50505050905090810190601f168015610ff85780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b83811015611031578082015181840152602081019050611016565b50505050905090810190601f16801561105e5780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b606060008060606000606060006002541461108d57600080fd5b600660000160066001015460066002015460066003016006600401546006600501858054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111435780601f1061111857610100808354040283529160200191611143565b820191906000526020600020905b81548152906001019060200180831161112657829003601f168201915b50505050509550828054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111df5780601f106111b4576101008083540402835291602001916111df565b820191906000526020600020905b8154815290600101906020018083116111c257829003601f168201915b50505050509250808054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561127b5780601f106112505761010080835404028352916020019161127b565b820191906000526020600020905b81548152906001019060200180831161125e57829003601f168201915b50505050509050955095509550955095509550909192939495565b60015481565b600481815481106112ac57600080fd5b90600052602060002090600502016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113845780601f1061135957610100808354040283529160200191611384565b820191906000526020600020905b81548152906001019060200180831161136757829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114225780601f106113f757610100808354040283529160200191611422565b820191906000526020600020905b81548152906001019060200180831161140557829003601f168201915b5050505050905084565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146114a857600080fd5b6001600254146114b757600080fd5b6000600d9050848160000190805190602001906114d5929190612772565b5083816001018190555082816002018190555081816003019080519060200190611500929190612772565b505050505050565b600d806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115a25780601f10611577576101008083540402835291602001916115a2565b820191906000526020600020905b81548152906001019060200180831161158557829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561164c5780601f106116215761010080835404028352916020019161164c565b820191906000526020600020905b81548152906001019060200180831161162f57829003601f168201915b5050505050908060040154905085565b6005818154811061166c57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600254146116aa57600080fd5b600660010154811180156116c2575060066002015481105b6116cb57600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905083816003019080519060200190611726929190612772565b508281600401908051906020019061173f929190612772565b50338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060048190806001815401808255809150506001900390600052602060002090600502016000909190919091506000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600182015481600101556002820181600201908054611836929190612800565b506003820181600301908054600181600116156101000203166002900461185e929190612852565b5060048201816004019080546001816001161561010002031660029004611886929190612852565b50505060016000815480929190600101919050555050505050565b60036020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119795780601f1061194e57610100808354040283529160200191611979565b820191906000526020600020905b81548152906001019060200180831161195c57829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611a175780601f106119ec57610100808354040283529160200191611a17565b820191906000526020600020905b8154815290600101906020018083116119fa57829003601f168201915b5050505050905084565b606060008060606000600160025414611a3957600080fd5b600d600001600d60010154600d60020154600d600301600d60040154848054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611aea5780601f10611abf57610100808354040283529160200191611aea565b820191906000526020600020905b815481529060010190602001808311611acd57829003601f168201915b50505050509450818054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b865780601f10611b5b57610100808354040283529160200191611b86565b820191906000526020600020905b815481529060010190602001808311611b6957829003601f168201915b50505050509150945094509450945094509091929394565b6060600060025414611baf57600080fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201805480602002602001604051908101604052809291908181526020018280548015611c7157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611c27575b50505050509050919050565b606080600060025414611c8f57600080fd5b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401818054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611da85780601f10611d7d57610100808354040283529160200191611da8565b820191906000526020600020905b815481529060010190602001808311611d8b57829003601f168201915b50505050509150808054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611e445780601f10611e1957610100808354040283529160200191611e44565b820191906000526020600020905b815481529060010190602001808311611e2757829003601f168201915b5050505050905091509150915091565b600060025414611e6357600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060405180602001604052806000815250816003019080519060200190611ecd929190612772565b5060405180602001604052806000815250816004019080519060200190611ef5929190612772565b50600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160009055600282016000611f7591906128e7565b600382016000611f859190612908565b600482016000611f959190612908565b505060005b6004805490508110156121c75760048181548110611fb457fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156121ba5760046001600480549050038154811061202e57fe5b90600052602060002090600502016004828154811061204957fe5b90600052602060002090600502016000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001820154816001015560028201816002019080546120de929190612800565b5060038201816003019080546001816001161561010002031660029004612106929190612852565b506004820181600401908054600181600116156101000203166002900461212e929190612852565b50905050600480548061213d57fe5b6001900381819060005260206000209060050201600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000905560028201600061219191906128e7565b6003820160006121a19190612908565b6004820160006121b19190612908565b505090556121c7565b8080600101915050611f9a565b50600160008154809291906001900391905055505050565b6000600254146121ee57600080fd5b600015156006800160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515141561244557600073ffffffffffffffffffffffffffffffffffffffff16600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146124445760016006800160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600660040160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146124a057600080fd5b6000600254146124af57600080fd5b600060069050858160000190805190602001906124cd929190612772565b50848160010181905550838160020181905550828160030190805190602001906124f8929190612772565b5081816005019080519060200190612511929190612772565b50505050505050565b6000806002541461252a57600080fd5b6006800160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6006806000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561261a5780601f106125ef5761010080835404028352916020019161261a565b820191906000526020600020905b8154815290600101906020018083116125fd57829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156126c45780601f10612699576101008083540402835291602001916126c4565b820191906000526020600020905b8154815290600101906020018083116126a757829003601f168201915b505050505090806004015490806005018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156127685780601f1061273d57610100808354040283529160200191612768565b820191906000526020600020905b81548152906001019060200180831161274b57829003601f168201915b5050505050905086565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826127a857600085556127ef565b82601f106127c157805160ff19168380011785556127ef565b828001600101855582156127ef579182015b828111156127ee5782518255916020019190600101906127d3565b5b5090506127fc9190612950565b5090565b8280548282559060005260206000209081019282156128415760005260206000209182015b82811115612840578254825591600101919060010190612825565b5b50905061284e9190612950565b5090565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928261288857600085556128d6565b82601f1061289957805485556128d6565b828001600101855582156128d657600052602060002091601f016020900482015b828111156128d55782548255916001019190600101906128ba565b5b5090506128e39190612950565b5090565b50805460008255906000526020600020908101906129059190612950565b50565b50805460018160011615610100020316600290046000825580601f1061292e575061294d565b601f01602090049060005260206000209081019061294c9190612950565b5b50565b5b80821115612969576000816000905550600101612951565b509056fea264697066735822122049dd238002baed7c1b916d80833bba94b24be80d8cc1050cca5ecf309905e9a764736f6c63430007040033a26469706673582212206febd4eac1b5f2459cb37d7c1ea59fc98d75aa2b9f17a86a126a302d1c72b13c64736f6c63430007040033\",\"deployedBytecode\":\"0x608060405234801561001057600080fd5b50600436106100415760003560e01c8063c142ab0014610046578063ca9cdfff1461009e578063fa954aa0146100fd575b600080fd5b6100726004803603602081101561005c57600080fd5b810190808035906020019092919050505061012b565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100a661016a565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156100e95780820151818401526020810190506100ce565b505050509050019250505060405180910390f35b6101296004803603602081101561011357600080fd5b81019080803590602001909291905050506101f8565b005b6000818154811061013b57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060008054806020026020016040519081016040528092919081815260200182805480156101ee57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116101a4575b5050505050905090565b60003382604051610208906102b5565b808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051809103906000f08015801561024b573d6000803e3d6000fd5b5090506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b612a5d806102c38339019056fe608060405234801561001057600080fd5b50604051612a5d380380612a5d8339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060001461009d5760016100a0565b60005b60ff1660028190555050506129a3806100ba6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80638ab66a90116100a2578063af47fb3f11610071578063af47fb3f14610c3a578063da3550ee14610c68578063dcfda00f14610cac578063e1c5fcc114610ea9578063fcae83a714610f035761010b565b80638ab66a90146108275780638e440c32146109745780639511544714610a78578063ad0dcf9c14610b115761010b565b806367127e43116100de57806367127e4314610409578063691a675c1461056f5780637432e63a14610673578063869eae23146106cb5761010b565b806304facd35146101105780632d35a8a21461028057806335a893a11461029e578063481c6a75146103d5575b600080fd5b610118611073565b6040518080602001878152602001868152602001806020018581526020018060200184810384528a818151815260200191508051906020019080838360005b83811015610172578082015181840152602081019050610157565b50505050905090810190601f16801561019f5780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b838110156101d85780820151818401526020810190506101bd565b50505050905090810190601f1680156102055780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b8381101561023e578082015181840152602081019050610223565b50505050905090810190601f16801561026b5780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b610288611296565b6040518082815260200191505060405180910390f35b6102ca600480360360208110156102b457600080fd5b810190808035906020019092919050505061129c565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015610330578082015181840152602081019050610315565b50505050905090810190601f16801561035d5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561039657808201518184015260208101905061037b565b50505050905090810190601f1680156103c35780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b6103dd61142c565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61056d6004803603608081101561041f57600080fd5b810190808035906020019064010000000081111561043c57600080fd5b82018360208201111561044e57600080fd5b8035906020019184600183028401116401000000008311171561047057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019092919080359060200190929190803590602001906401000000008111156104e757600080fd5b8201836020820111156104f957600080fd5b8035906020019184600183028401116401000000008311171561051b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611450565b005b610577611508565b604051808060200186815260200185815260200180602001848152602001838103835288818151815260200191508051906020019080838360005b838110156105cd5780820151818401526020810190506105b2565b50505050905090810190601f1680156105fa5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015610633578082015181840152602081019050610618565b50505050905090810190601f1680156106605780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b61069f6004803603602081101561068957600080fd5b810190808035906020019092919050505061165c565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610825600480360360608110156106e157600080fd5b81019080803590602001906401000000008111156106fe57600080fd5b82018360208201111561071057600080fd5b8035906020019184600183028401116401000000008311171561073257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561079557600080fd5b8201836020820111156107a757600080fd5b803590602001918460018302840111640100000000831117156107c957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019092919050505061169b565b005b6108696004803603602081101561083d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506118a1565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156108cf5780820151818401526020810190506108b4565b50505050905090810190601f1680156108fc5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561093557808201518184015260208101905061091a565b50505050905090810190601f1680156109625780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b61097c611a21565b604051808060200186815260200185815260200180602001848152602001838103835288818151815260200191508051906020019080838360005b838110156109d25780820151818401526020810190506109b7565b50505050905090810190601f1680156109ff5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015610a38578082015181840152602081019050610a1d565b50505050905090810190601f168015610a655780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b610aba60048036036020811015610a8e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611b9e565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610afd578082015181840152602081019050610ae2565b505050509050019250505060405180910390f35b610b5360048036036020811015610b2757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611c7d565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b83811015610b97578082015181840152602081019050610b7c565b50505050905090810190601f168015610bc45780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015610bfd578082015181840152602081019050610be2565b50505050905090810190601f168015610c2a5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b610c6660048036036020811015610c5057600080fd5b8101908080359060200190929190505050611e54565b005b610caa60048036036020811015610c7e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506121df565b005b610ea7600480360360a0811015610cc257600080fd5b8101908080359060200190640100000000811115610cdf57600080fd5b820183602082011115610cf157600080fd5b80359060200191846001830284011164010000000083111715610d1357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291908035906020019092919080359060200190640100000000811115610d8a57600080fd5b820183602082011115610d9c57600080fd5b80359060200191846001830284011164010000000083111715610dbe57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610e2157600080fd5b820183602082011115610e3357600080fd5b80359060200191846001830284011164010000000083111715610e5557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050612448565b005b610eeb60048036036020811015610ebf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061251a565b60405180821515815260200191505060405180910390f35b610f0b612580565b6040518080602001878152602001868152602001806020018581526020018060200184810384528a818151815260200191508051906020019080838360005b83811015610f65578082015181840152602081019050610f4a565b50505050905090810190601f168015610f925780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610fcb578082015181840152602081019050610fb0565b50505050905090810190601f168015610ff85780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b83811015611031578082015181840152602081019050611016565b50505050905090810190601f16801561105e5780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b606060008060606000606060006002541461108d57600080fd5b600660000160066001015460066002015460066003016006600401546006600501858054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111435780601f1061111857610100808354040283529160200191611143565b820191906000526020600020905b81548152906001019060200180831161112657829003601f168201915b50505050509550828054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111df5780601f106111b4576101008083540402835291602001916111df565b820191906000526020600020905b8154815290600101906020018083116111c257829003601f168201915b50505050509250808054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561127b5780601f106112505761010080835404028352916020019161127b565b820191906000526020600020905b81548152906001019060200180831161125e57829003601f168201915b50505050509050955095509550955095509550909192939495565b60015481565b600481815481106112ac57600080fd5b90600052602060002090600502016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113845780601f1061135957610100808354040283529160200191611384565b820191906000526020600020905b81548152906001019060200180831161136757829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114225780601f106113f757610100808354040283529160200191611422565b820191906000526020600020905b81548152906001019060200180831161140557829003601f168201915b5050505050905084565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146114a857600080fd5b6001600254146114b757600080fd5b6000600d9050848160000190805190602001906114d5929190612772565b5083816001018190555082816002018190555081816003019080519060200190611500929190612772565b505050505050565b600d806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115a25780601f10611577576101008083540402835291602001916115a2565b820191906000526020600020905b81548152906001019060200180831161158557829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561164c5780601f106116215761010080835404028352916020019161164c565b820191906000526020600020905b81548152906001019060200180831161162f57829003601f168201915b5050505050908060040154905085565b6005818154811061166c57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600254146116aa57600080fd5b600660010154811180156116c2575060066002015481105b6116cb57600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905083816003019080519060200190611726929190612772565b508281600401908051906020019061173f929190612772565b50338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060048190806001815401808255809150506001900390600052602060002090600502016000909190919091506000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600182015481600101556002820181600201908054611836929190612800565b506003820181600301908054600181600116156101000203166002900461185e929190612852565b5060048201816004019080546001816001161561010002031660029004611886929190612852565b50505060016000815480929190600101919050555050505050565b60036020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119795780601f1061194e57610100808354040283529160200191611979565b820191906000526020600020905b81548152906001019060200180831161195c57829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611a175780601f106119ec57610100808354040283529160200191611a17565b820191906000526020600020905b8154815290600101906020018083116119fa57829003601f168201915b5050505050905084565b606060008060606000600160025414611a3957600080fd5b600d600001600d60010154600d60020154600d600301600d60040154848054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611aea5780601f10611abf57610100808354040283529160200191611aea565b820191906000526020600020905b815481529060010190602001808311611acd57829003601f168201915b50505050509450818054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b865780601f10611b5b57610100808354040283529160200191611b86565b820191906000526020600020905b815481529060010190602001808311611b6957829003601f168201915b50505050509150945094509450945094509091929394565b6060600060025414611baf57600080fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201805480602002602001604051908101604052809291908181526020018280548015611c7157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611c27575b50505050509050919050565b606080600060025414611c8f57600080fd5b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401818054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611da85780601f10611d7d57610100808354040283529160200191611da8565b820191906000526020600020905b815481529060010190602001808311611d8b57829003601f168201915b50505050509150808054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611e445780601f10611e1957610100808354040283529160200191611e44565b820191906000526020600020905b815481529060010190602001808311611e2757829003601f168201915b5050505050905091509150915091565b600060025414611e6357600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060405180602001604052806000815250816003019080519060200190611ecd929190612772565b5060405180602001604052806000815250816004019080519060200190611ef5929190612772565b50600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160009055600282016000611f7591906128e7565b600382016000611f859190612908565b600482016000611f959190612908565b505060005b6004805490508110156121c75760048181548110611fb457fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156121ba5760046001600480549050038154811061202e57fe5b90600052602060002090600502016004828154811061204957fe5b90600052602060002090600502016000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001820154816001015560028201816002019080546120de929190612800565b5060038201816003019080546001816001161561010002031660029004612106929190612852565b506004820181600401908054600181600116156101000203166002900461212e929190612852565b50905050600480548061213d57fe5b6001900381819060005260206000209060050201600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000905560028201600061219191906128e7565b6003820160006121a19190612908565b6004820160006121b19190612908565b505090556121c7565b8080600101915050611f9a565b50600160008154809291906001900391905055505050565b6000600254146121ee57600080fd5b600015156006800160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515141561244557600073ffffffffffffffffffffffffffffffffffffffff16600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146124445760016006800160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600660040160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146124a057600080fd5b6000600254146124af57600080fd5b600060069050858160000190805190602001906124cd929190612772565b50848160010181905550838160020181905550828160030190805190602001906124f8929190612772565b5081816005019080519060200190612511929190612772565b50505050505050565b6000806002541461252a57600080fd5b6006800160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6006806000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561261a5780601f106125ef5761010080835404028352916020019161261a565b820191906000526020600020905b8154815290600101906020018083116125fd57829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156126c45780601f10612699576101008083540402835291602001916126c4565b820191906000526020600020905b8154815290600101906020018083116126a757829003601f168201915b505050505090806004015490806005018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156127685780601f1061273d57610100808354040283529160200191612768565b820191906000526020600020905b81548152906001019060200180831161274b57829003601f168201915b5050505050905086565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826127a857600085556127ef565b82601f106127c157805160ff19168380011785556127ef565b828001600101855582156127ef579182015b828111156127ee5782518255916020019190600101906127d3565b5b5090506127fc9190612950565b5090565b8280548282559060005260206000209081019282156128415760005260206000209182015b82811115612840578254825591600101919060010190612825565b5b50905061284e9190612950565b5090565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928261288857600085556128d6565b82601f1061289957805485556128d6565b828001600101855582156128d657600052602060002091601f016020900482015b828111156128d55782548255916001019190600101906128ba565b5b5090506128e39190612950565b5090565b50805460008255906000526020600020908101906129059190612950565b50565b50805460018160011615610100020316600290046000825580601f1061292e575061294d565b601f01602090049060005260206000209081019061294c9190612950565b5b50565b5b80821115612969576000816000905550600101612951565b509056fea264697066735822122049dd238002baed7c1b916d80833bba94b24be80d8cc1050cca5ecf309905e9a764736f6c63430007040033a26469706673582212206febd4eac1b5f2459cb37d7c1ea59fc98d75aa2b9f17a86a126a302d1c72b13c64736f6c63430007040033\",\"immutableReferences\":{},\"generatedSources\":[],\"deployedGeneratedSources\":[],\"sourceMap\":\"93:346:2:-:0;;;;;;;;;;;;;;;;;;;\",\"deployedSourceMap\":\"93:346:2:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;120:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;322:106;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;163:151;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;120:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;322:106::-;371:16;407:13;400:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;322:106;:::o;163:151::-;213:15;248:10;260:6;239:28;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;213:55;;279:13;298:7;279:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;163:151;;:::o;-1:-1:-1:-;;;;;;;;:::o\",\"source\":\"pragma solidity ^0.7.4;\\r\\n//\\\"SPDX-License-Identifier: UNLICENSED\\\"\\r\\n\\r\\nimport \\\"./Vote.sol\\\";\\r\\n \\r\\ncontract VoteFactory{\\r\\n    address[] public deployedVotes;\\r\\n    \\r\\n    function createVote(uint typeOf) public{\\r\\n        address newVote = address(new Vote(msg.sender, typeOf));\\r\\n        deployedVotes.push(newVote);\\r\\n    }\\r\\n\\r\\n    function getDeployedVotes() public view returns (address[] memory) {\\r\\n        return deployedVotes;\\r\\n    }\\r\\n\\r\\n    \\r\\n}\\r\\n\\r\\n\",\"sourcePath\":\"C:/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/VoteFactory.sol\",\"ast\":{\"absolutePath\":\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/VoteFactory.sol\",\"exportedSymbols\":{\"Vote\":[586],\"VoteFactory\":[626]},\"id\":627,\"license\":\"UNLICENSED\",\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":588,\"literals\":[\"solidity\",\"^\",\"0.7\",\".4\"],\"nodeType\":\"PragmaDirective\",\"src\":\"0:23:2\"},{\"absolutePath\":\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/Vote.sol\",\"file\":\"./Vote.sol\",\"id\":589,\"nodeType\":\"ImportDirective\",\"scope\":627,\"sourceUnit\":587,\"src\":\"68:20:2\",\"symbolAliases\":[],\"unitAlias\":\"\"},{\"abstract\":false,\"baseContracts\":[],\"contractDependencies\":[586],\"contractKind\":\"contract\",\"fullyImplemented\":true,\"id\":626,\"linearizedBaseContracts\":[626],\"name\":\"VoteFactory\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"constant\":false,\"functionSelector\":\"c142ab00\",\"id\":592,\"mutability\":\"mutable\",\"name\":\"deployedVotes\",\"nodeType\":\"VariableDeclaration\",\"scope\":626,\"src\":\"120:30:2\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":590,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"120:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":591,\"nodeType\":\"ArrayTypeName\",\"src\":\"120:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"public\"},{\"body\":{\"id\":615,\"nodeType\":\"Block\",\"src\":\"202:112:2\",\"statements\":[{\"assignments\":[598],\"declarations\":[{\"constant\":false,\"id\":598,\"mutability\":\"mutable\",\"name\":\"newVote\",\"nodeType\":\"VariableDeclaration\",\"scope\":615,\"src\":\"213:15:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":597,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"213:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"id\":608,\"initialValue\":{\"arguments\":[{\"arguments\":[{\"expression\":{\"id\":603,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"248:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":604,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"248:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},{\"id\":605,\"name\":\"typeOf\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":594,\"src\":\"260:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":602,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"NewExpression\",\"src\":\"239:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_creation_nonpayable$_t_address_$_t_uint256_$returns$_t_contract$_Vote_$586_$\",\"typeString\":\"function (address,uint256) returns (contract Vote)\"},\"typeName\":{\"id\":601,\"name\":\"Vote\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":586,\"src\":\"243:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_Vote_$586\",\"typeString\":\"contract Vote\"}}},\"id\":606,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"239:28:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_Vote_$586\",\"typeString\":\"contract Vote\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_contract$_Vote_$586\",\"typeString\":\"contract Vote\"}],\"id\":600,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"nodeType\":\"ElementaryTypeNameExpression\",\"src\":\"231:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_type$_t_address_$\",\"typeString\":\"type(address)\"},\"typeName\":{\"id\":599,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"231:7:2\",\"typeDescriptions\":{}}},\"id\":607,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"typeConversion\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"231:37:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"213:55:2\"},{\"expression\":{\"arguments\":[{\"id\":612,\"name\":\"newVote\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":598,\"src\":\"298:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"expression\":{\"id\":609,\"name\":\"deployedVotes\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":592,\"src\":\"279:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":611,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"push\",\"nodeType\":\"MemberAccess\",\"src\":\"279:18:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypush_nonpayable$_t_address_$returns$__$\",\"typeString\":\"function (address)\"}},\"id\":613,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"279:27:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":614,\"nodeType\":\"ExpressionStatement\",\"src\":\"279:27:2\"}]},\"functionSelector\":\"fa954aa0\",\"id\":616,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"createVote\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":595,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":594,\"mutability\":\"mutable\",\"name\":\"typeOf\",\"nodeType\":\"VariableDeclaration\",\"scope\":616,\"src\":\"183:11:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":593,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"183:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"182:13:2\"},\"returnParameters\":{\"id\":596,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"202:0:2\"},\"scope\":626,\"src\":\"163:151:2\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":624,\"nodeType\":\"Block\",\"src\":\"389:39:2\",\"statements\":[{\"expression\":{\"id\":622,\"name\":\"deployedVotes\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":592,\"src\":\"407:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"functionReturnParameters\":621,\"id\":623,\"nodeType\":\"Return\",\"src\":\"400:20:2\"}]},\"functionSelector\":\"ca9cdfff\",\"id\":625,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getDeployedVotes\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":617,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"347:2:2\"},\"returnParameters\":{\"id\":621,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":620,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":625,\"src\":\"371:16:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":618,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"371:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":619,\"nodeType\":\"ArrayTypeName\",\"src\":\"371:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"}],\"src\":\"370:18:2\"},\"scope\":626,\"src\":\"322:106:2\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"}],\"scope\":627,\"src\":\"93:346:2\"}],\"src\":\"0:443:2\"},\"legacyAST\":{\"attributes\":{\"absolutePath\":\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/VoteFactory.sol\",\"exportedSymbols\":{\"Vote\":[586],\"VoteFactory\":[626]},\"license\":\"UNLICENSED\"},\"children\":[{\"attributes\":{\"literals\":[\"solidity\",\"^\",\"0.7\",\".4\"]},\"id\":588,\"name\":\"PragmaDirective\",\"src\":\"0:23:2\"},{\"attributes\":{\"SourceUnit\":587,\"absolutePath\":\"/C/Users/foubroker/PROJECT_VOTE/voting-at-mcgill/contracts/Vote.sol\",\"file\":\"./Vote.sol\",\"scope\":627,\"symbolAliases\":[null],\"unitAlias\":\"\"},\"id\":589,\"name\":\"ImportDirective\",\"src\":\"68:20:2\"},{\"attributes\":{\"abstract\":false,\"baseContracts\":[null],\"contractDependencies\":[586],\"contractKind\":\"contract\",\"fullyImplemented\":true,\"linearizedBaseContracts\":[626],\"name\":\"VoteFactory\",\"scope\":627},\"children\":[{\"attributes\":{\"constant\":false,\"functionSelector\":\"c142ab00\",\"mutability\":\"mutable\",\"name\":\"deployedVotes\",\"scope\":626,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":590,\"name\":\"ElementaryTypeName\",\"src\":\"120:7:2\"}],\"id\":591,\"name\":\"ArrayTypeName\",\"src\":\"120:9:2\"}],\"id\":592,\"name\":\"VariableDeclaration\",\"src\":\"120:30:2\"},{\"attributes\":{\"functionSelector\":\"fa954aa0\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"createVote\",\"scope\":626,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"typeOf\",\"scope\":616,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":593,\"name\":\"ElementaryTypeName\",\"src\":\"183:4:2\"}],\"id\":594,\"name\":\"VariableDeclaration\",\"src\":\"183:11:2\"}],\"id\":595,\"name\":\"ParameterList\",\"src\":\"182:13:2\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":596,\"name\":\"ParameterList\",\"src\":\"202:0:2\"},{\"children\":[{\"attributes\":{\"assignments\":[598]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"newVote\",\"scope\":615,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":597,\"name\":\"ElementaryTypeName\",\"src\":\"213:7:2\"}],\"id\":598,\"name\":\"VariableDeclaration\",\"src\":\"213:15:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"address\",\"type_conversion\":true},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_contract$_Vote_$586\",\"typeString\":\"contract Vote\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"type\":\"type(address)\"},\"children\":[{\"attributes\":{\"name\":\"address\"},\"id\":599,\"name\":\"ElementaryTypeName\",\"src\":\"231:7:2\"}],\"id\":600,\"name\":\"ElementaryTypeNameExpression\",\"src\":\"231:7:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"contract Vote\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"function (address,uint256) returns (contract Vote)\"},\"children\":[{\"attributes\":{\"name\":\"Vote\",\"referencedDeclaration\":586,\"type\":\"contract Vote\"},\"id\":601,\"name\":\"UserDefinedTypeName\",\"src\":\"243:4:2\"}],\"id\":602,\"name\":\"NewExpression\",\"src\":\"239:8:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":603,\"name\":\"Identifier\",\"src\":\"248:3:2\"}],\"id\":604,\"name\":\"MemberAccess\",\"src\":\"248:10:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":594,\"type\":\"uint256\",\"value\":\"typeOf\"},\"id\":605,\"name\":\"Identifier\",\"src\":\"260:6:2\"}],\"id\":606,\"name\":\"FunctionCall\",\"src\":\"239:28:2\"}],\"id\":607,\"name\":\"FunctionCall\",\"src\":\"231:37:2\"}],\"id\":608,\"name\":\"VariableDeclarationStatement\",\"src\":\"213:55:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"push\",\"type\":\"function (address)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":592,\"type\":\"address[] storage ref\",\"value\":\"deployedVotes\"},\"id\":609,\"name\":\"Identifier\",\"src\":\"279:13:2\"}],\"id\":611,\"name\":\"MemberAccess\",\"src\":\"279:18:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":598,\"type\":\"address\",\"value\":\"newVote\"},\"id\":612,\"name\":\"Identifier\",\"src\":\"298:7:2\"}],\"id\":613,\"name\":\"FunctionCall\",\"src\":\"279:27:2\"}],\"id\":614,\"name\":\"ExpressionStatement\",\"src\":\"279:27:2\"}],\"id\":615,\"name\":\"Block\",\"src\":\"202:112:2\"}],\"id\":616,\"name\":\"FunctionDefinition\",\"src\":\"163:151:2\"},{\"attributes\":{\"functionSelector\":\"ca9cdfff\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"getDeployedVotes\",\"scope\":626,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":617,\"name\":\"ParameterList\",\"src\":\"347:2:2\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":625,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":618,\"name\":\"ElementaryTypeName\",\"src\":\"371:7:2\"}],\"id\":619,\"name\":\"ArrayTypeName\",\"src\":\"371:9:2\"}],\"id\":620,\"name\":\"VariableDeclaration\",\"src\":\"371:16:2\"}],\"id\":621,\"name\":\"ParameterList\",\"src\":\"370:18:2\"},{\"children\":[{\"attributes\":{\"functionReturnParameters\":621},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":592,\"type\":\"address[] storage ref\",\"value\":\"deployedVotes\"},\"id\":622,\"name\":\"Identifier\",\"src\":\"407:13:2\"}],\"id\":623,\"name\":\"Return\",\"src\":\"400:20:2\"}],\"id\":624,\"name\":\"Block\",\"src\":\"389:39:2\"}],\"id\":625,\"name\":\"FunctionDefinition\",\"src\":\"322:106:2\"}],\"id\":626,\"name\":\"ContractDefinition\",\"src\":\"93:346:2\"}],\"id\":627,\"name\":\"SourceUnit\",\"src\":\"0:443:2\"},\"compiler\":{\"name\":\"solc\",\"version\":\"0.7.4+commit.3f05b770.Emscripten.clang\"},\"networks\":{\"5777\":{\"events\":{},\"links\":{},\"address\":\"0x753F3F7BaBbAB74B877581CB522872e8AD800B43\",\"transactionHash\":\"0x206d86a3580f4b718bf9045be16ea31bd9a4b0a39604c52ae0b2b9743ae2171f\"}},\"schemaVersion\":\"3.3.3\",\"updatedAt\":\"2021-03-07T00:09:35.381Z\",\"networkType\":\"ethereum\",\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}}");

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
var _jsxFileName = "C:\\Users\\foubroker\\PROJECT_VOTE\\voting-at-mcgill\\client\\src\\pages\\newElection.js";
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
  const electionTypes = [{
    key: 'sm',
    text: 'simple majority',
    value: 'majority'
  }, {
    key: 'tt',
    text: 'two thirds',
    value: 'twoThirds'
  }];
  var web3Instance;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function initWeb3() {
      web3Instance = await Object(_getWeb3__WEBPACK_IMPORTED_MODULE_5__["default"])();
      setWeb3(web3Instance);
    }

    initWeb3();
  }, []);
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
    0: description,
    1: setDescription
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  var onSubmit = async event => {
    event.preventDefault();
    var manager;
    var factoryContract;
    var voteContract;
    var addressOfVote; // var web3Instance;
    // async function initWeb3() {
    //     web3Instance = await getWeb3();
    //     setWeb3(web3Instance);
    // }
    // initWeb3();

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
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }), __jsx("h1", {
    style: adminTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, "New Election"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    onSubmit: onSubmit,
    style: adminFields,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
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
      lineNumber: 153,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
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
      lineNumber: 162,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
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
      lineNumber: 172,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
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
      lineNumber: 180,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
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
      lineNumber: 195,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Button, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 21
    }
  }, "Cancel"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Button, {
    type: "submit",
    onSubmit: onSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2V0V2ViMy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbmV3RWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2ViM1wiIl0sIm5hbWVzIjpbInByZWZldGNoZWQiLCJyb3V0ZXIiLCJlcnIiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsImNvbnNvbGUiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwibWFwIiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJ2YWx1ZSIsImxpbmsiLCJ3aW5kb3ciLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwicmVzIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsInNjcmlwdCIsInJlamVjdCIsIm1hcmtBc3NldEVycm9yIiwic3JjIiwib25CdWlsZE1hbmlmZXN0IiwiaWRsZVRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJyb3V0ZSIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0IiwiZmV0Y2giLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImlkIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJwYXRobmFtZVBhcnRzIiwibG9jYWxlcyIsImRldGVjdGVkTG9jYWxlIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJkYXRhIiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiX2lkeCIsInN0YXRlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJwYXJzZWQiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJtZXRob2QiLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5vdEZvdW5kUm91dGUiLCJhcHBDb21wIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwidmFsaWRhdGUiLCJwYXJzZWREZXN0aW5hdGlvbiIsImhhZExvY2FsZSIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJzdHJPckFycmF5IiwiY29tcGlsZU5vblBhdGgiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5IiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsImZzUGF0aG5hbWUiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiaGVhZGVyc0RhdGEiLCJsYWJlbCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJoZWFkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsb2dvIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJjb2xvciIsInRleHRBbGlnbiIsIndlYjMiLCJyaWdodCIsIkhlYWRlciIsImxvZ29TdHlsZSIsImRpc3BsYXlEZXNrdG9wIiwiZ2V0TWVudUJ1dHRvbnMiLCJjb25uZWN0aW9uIiwiY2xpY2tlZCIsImV0aGVyZXVtIiwicmVxdWVzdCIsInBvc2l0aW9uIiwiZ2V0V2ViMyIsIldlYjMiLCJldGhfcmVxdWVzdEFjY291bnRzIiwibG9nIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiLCJhZG1pblRpdGxlIiwibWFyZ2luQm90dG9tIiwiZm9udFNpemUiLCJhZG1pbkZpZWxkcyIsIm1hcmdpbiIsIk5ld0VsZWN0aW9uIiwic2V0V2ViMyIsInVzZVN0YXRlIiwiZWxlY3Rpb25UeXBlcyIsIndlYjNJbnN0YW5jZSIsInVzZUVmZmVjdCIsImluaXRXZWIzIiwidGl0bGUiLCJzZXRUaXRsZSIsInN0YXJ0RGF0ZSIsInNldFN0YXJ0RGF0ZSIsImVuZERhdGUiLCJzZXRFbmREYXRlIiwiZWxlY3Rpb25UeXBlIiwic2V0RWxlY3Rpb25UeXBlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJtYW5hZ2VyIiwiZmFjdG9yeUNvbnRyYWN0Iiwidm90ZUNvbnRyYWN0IiwiYWRkcmVzc09mVm90ZSIsInNldHVwVm90ZUZhY3RvcnkiLCJldGgiLCJnZXRBY2NvdW50cyIsIm5ldHdvcmtJZCIsIm5ldCIsImdldElkIiwiZGVwbG95ZWROZXR3b3JrIiwiVm90ZUZhY3RvcnlDb250cmFjdCIsIm5ldHdvcmtzIiwiQ29udHJhY3QiLCJhYmkiLCJhZGRyZXNzIiwiYWxlcnQiLCJjcmVhdGVWb3RlIiwibWV0aG9kcyIsInNlbmQiLCJmcm9tIiwiZ2V0RWxlY3Rpb25BZGRyZXNzIiwicmVzcG9uc2UiLCJnZXREZXBsb3llZFZvdGVzIiwiY2FsbCIsImxlbmd0aCIsImluaXRpYWxpemVFbGVjdGlvbiIsIlZvdGVDb250cmFjdCIsInNldFVwRWxlY3Rpb24iLCJlZGl0RWxlY3Rpb24iLCJn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QUFBQSxJQURKLENBNUJKLEVBc0NJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0Q0osRUF1Q0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZDSixFQTBDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUNKLEVBMkNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNEQUFELENBQU0sUUFBTjtBQUFlLFlBQVEsTUFBdkI7QUFDYSxTQUFLLEVBQUMsYUFEbkI7QUFHYSxTQUFLLEVBQUUwVyxXQUhwQjtBQUlhLFlBQVEsRUFBRWxiLEtBQUssSUFBSW1iLGNBQWMsQ0FBQ25iLEtBQUssQ0FBQ0MsTUFBTixDQUFhdUUsS0FBZCxDQUo5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0EzQ0osRUFvREk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBESixFQXFESTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzREFBRCxDQUFNLE1BQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUksTUFBQyxzREFBRCxDQUFNLE1BQU47QUFBYSxRQUFJLEVBQUMsUUFBbEI7QUFBMkIsWUFBUSxFQUFFNFcsUUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSixDQXJESixDQVBKLENBREo7QUFzRUgsQ0FqTUQ7O0FBa01lakIsMEVBQWYsRTs7Ozs7Ozs7Ozs7QUNyTkEsOEM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoicGFnZXMvbmV3RWxlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9uZXdFbGVjdGlvbi5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIC8vIEZJWE1FOiBwcm9wZXIgcm91dGUgYW5ub3VuY2luZyBhdCBSb3V0ZXIgbGV2ZWwsIG5vdCBMaW5rOlxuICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9IGdldERvbWFpbkxvY2FsZShcbiAgICAgIGFzLFxuICAgICAgY3VyTG9jYWxlLFxuICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzXG4gICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdElkbGVDYWxsYmFja1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL2J1aWxkL3dlYnBhY2svcGx1Z2lucy9idWlsZC1tYW5pZmVzdC1wbHVnaW4nXG5pbXBvcnQgZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZSdcbmltcG9ydCByZXF1ZXN0SWRsZUNhbGxiYWNrIGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVMb2FkZXJFbnRyeT5cbiAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cbn1cblxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaz86IEhUTUxMaW5rRWxlbWVudCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKSB8fFxuICAgICAgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpXG4gICAgKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBjYW5QcmVmZXRjaDogYm9vbGVhbiA9IGhhc1ByZWZldGNoKClcblxuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgbGluaz86IEhUTUxMaW5rRWxlbWVudFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICByZXR1cm4gcmVzKClcbiAgICB9XG5cbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgIGlmIChhcykgbGluayEuYXMgPSBhc1xuICAgIGxpbmshLnJlbCA9IGBwcmVmZXRjaGBcbiAgICBsaW5rIS5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG4gICAgbGluayEub25sb2FkID0gcmVzXG4gICAgbGluayEub25lcnJvciA9IHJlalxuXG4gICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICBsaW5rIS5ocmVmID0gaHJlZlxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxuICB9KVxufVxuXG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJylcbi8vIFRPRE86IHVuZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHt9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycj86IEVycm9yKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnJcbn1cblxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KFxuICBzcmM6IHN0cmluZyxcbiAgc2NyaXB0PzogSFRNTFNjcmlwdEVsZW1lbnRcbik6IFByb21pc2U8dW5rbm93bj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZVxuICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT5cbiAgICAgIHJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuXG4gICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcblxuICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgc2NyaXB0LnNyYyA9IHNyY1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9KVxufVxuXG5mdW5jdGlvbiBpZGxlVGltZW91dDxUPihtczogbnVtYmVyLCBlcnI6IEVycm9yKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgoX3Jlc29sdmUsIHJlamVjdCkgPT5cbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KGVyciksIG1zKSlcbiAgKVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdDogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiA9IG5ldyBQcm9taXNlPFxuICAgIENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICAgICAgY2IgJiYgY2IoKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIFByb21pc2UucmFjZShbXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIGlkbGVUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICAgICksXG4gIF0pXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IHNjcmlwdHMsIGNzcyB9ID0gYXdhaXQgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgY29uc3QgWywgc3R5bGVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICBdIGFzIGNvbnN0KVxuXG4gICAgICAgICAgY29uc3QgZW50cnlwb2ludDogUm91dGVFbnRyeXBvaW50ID0gYXdhaXQgUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgICAgIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLFxuICAgICAgICAgICAgaWRsZVRpbWVvdXQ8Um91dGVMb2FkZXJFbnRyeT4oXG4gICAgICAgICAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgICAgICAgICBtYXJrQXNzZXRFcnJvcihcbiAgICAgICAgICAgICAgICBuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pXG4gICAgICAgICAgY29uc3QgcmVzOiBSb3V0ZUxvYWRlckVudHJ5ID0gT2JqZWN0LmFzc2lnbjxcbiAgICAgICAgICAgIHsgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXSB9LFxuICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgPih7IHN0eWxlcyB9LCBlbnRyeXBvaW50KVxuICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlcnIgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgbGV0IGNuXG4gICAgICBpZiAoKGNuID0gKG5hdmlnYXRvciBhcyBhbnkpLmNvbm5lY3Rpb24pKSB7XG4gICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT5cbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGNhblByZWZldGNoXG4gICAgICAgICAgICAgID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpID0+IHByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpKVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMubG9hZFJvdXRlKHJvdXRlKSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgIC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgKVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm91dGVMb2FkZXJcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG4gICdpc1JlYWR5Jyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgcmVxdWVzdElkbGVDYWxsYmFjayBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgJiZcbiAgICAgIHBhdGggIT09ICcvJyArIGxvY2FsZVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgfHwgcGF0aCA9PT0gJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcblxuICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmxcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzPzogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID1cbiAgfCAoT21pdDxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdzdHlsZVNoZWV0cyc+ICYgeyBpbml0aWFsOiB0cnVlIH0pXG4gIHwgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoXG4gIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gIEFwcDogQXBwQ29tcG9uZW50LFxuICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiZcbiAgISEoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdiA9ICdfX25leHQnXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZVxuICAgIH0gY2F0Y2ggKG4pIHt9XG4gIH0pKClcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoKVxuICAgIClcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIHNjcm9sbCByZXNldCBiZWhhdmlvciB1bmxlc3MgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYmVcbiAgICAvLyBgZmFsc2VgISBUaGlzIG1ha2VzIHRoZSBiZWhhdmlvciBiZXR3ZWVuIHVzaW5nIGBSb3V0ZXIjcHVzaGAgYW5kIGFcbiAgICAvLyBgPExpbmsgLz5gIGNvbnNpc3RlbnQuXG4gICAgb3B0aW9ucy5zY3JvbGwgPSAhIShvcHRpb25zLnNjcm9sbCA/PyB0cnVlKVxuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IG9wdGlvbnMubG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID1cbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlXG4gICAgICAgICAgPyB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpXG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICBoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICkucGF0aG5hbWVcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2VcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsZXM/LmluY2x1ZGVzKHRoaXMubG9jYWxlISkpIHtcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgKVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFkaWROYXZpZ2F0ZSAmJlxuICAgICAgICAgIGRldGVjdGVkRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChcbiAgICAgICAgICBhZGRMb2NhbGUoZGVsQmFzZVBhdGgocGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUpLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwge1xuICAgICAgICAgICAgICBwYXRobmFtZTogbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgICAgICBoYXNCYXNlUGF0aChyZXNvbHZlZEFzKSA/IGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICAgICAgKS5wYXRobmFtZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUocmVzb2x2ZWRBcywgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMsIGZhbHNlKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fCAob3B0aW9ucy5zY3JvbGwgPyB7IHg6IDAsIHk6IDAgfSA6IG51bGwpXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGFyc2VkSHJlZi5wYXRobmFtZSEpXG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcywgZmFsc2UpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHVybCkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzUGF0aCxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlTm9uUGF0aCh2YWx1ZTogc3RyaW5nLCBwYXJhbXM6IFBhcmFtcyk6IHN0cmluZyB7XG4gIGlmICghdmFsdWUuaW5jbHVkZXMoJzonKSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocGFyYW1zKSkge1xuICAgIGlmICh2YWx1ZS5pbmNsdWRlcyhgOiR7a2V5fWApKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlXG4gICAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgIG5ldyBSZWdFeHAoYDoke2tleX1cXFxcKmAsICdnJyksXG4gICAgICAgICAgYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fQVNURVJJU0tTYFxuICAgICAgICApXG4gICAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgIG5ldyBSZWdFeHAoYDoke2tleX1cXFxcP2AsICdnJyksXG4gICAgICAgICAgYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fUVVFU1RJT05gXG4gICAgICAgIClcbiAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cChgOiR7a2V5fVxcXFwrYCwgJ2cnKSwgYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fUExVU2ApXG4gICAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgIG5ldyBSZWdFeHAoYDoke2tleX0oPyFcXFxcdylgLCAnZycpLFxuICAgICAgICAgIGAtLUVTQ0FQRURfUEFSQU1fQ09MT04ke2tleX1gXG4gICAgICAgIClcbiAgICB9XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZVxuICAgIC5yZXBsYWNlKC8oOnxcXCp8XFw/fFxcK3xcXCh8XFwpfFxce3xcXH0pL2csICdcXFxcJDEnKVxuICAgIC5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fUExVUy9nLCAnKycpXG4gICAgLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9DT0xPTi9nLCAnOicpXG4gICAgLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9RVUVTVElPTi9nLCAnPycpXG4gICAgLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9BU1RFUklTS1MvZywgJyonKVxuXG4gIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAvLyBjb3JyZWN0bHlcbiAgcmV0dXJuIHBhdGhUb1JlZ2V4cFxuICAgIC5jb21waWxlKGAvJHt2YWx1ZX1gLCB7IHZhbGlkYXRlOiBmYWxzZSB9KShwYXJhbXMpXG4gICAgLnN1YnN0cigxKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW5cbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgLy8gY2xvbmUgcXVlcnkgc28gd2UgZG9uJ3QgbW9kaWZ5IHRoZSBvcmlnaW5hbFxuICBxdWVyeSA9IE9iamVjdC5hc3NpZ24oe30sIHF1ZXJ5KVxuICBjb25zdCBoYWRMb2NhbGUgPSBxdWVyeS5fX25leHRMb2NhbGVcbiAgZGVsZXRlIHF1ZXJ5Ll9fbmV4dExvY2FsZVxuICBkZWxldGUgcXVlcnkuX19uZXh0RGVmYXVsdExvY2FsZVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gY29tcGlsZU5vblBhdGgodmFsdWUsIHBhcmFtcylcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBsZXQgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIC8vIHJlbW92ZSBpbnRlcm5hbCBwYXJhbSBmb3IgaTE4blxuICBpZiAoaGFkTG9jYWxlKSB7XG4gICAgcGFyYW1LZXlzID0gcGFyYW1LZXlzLmZpbHRlcigobmFtZSkgPT4gbmFtZSAhPT0gJ25leHRJbnRlcm5hbExvY2FsZScpXG4gIH1cblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0cnkge1xuICAgIG5ld1VybCA9IGRlc3RpbmF0aW9uQ29tcGlsZXIocGFyYW1zKVxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgKHBhcnNlZERlc3RpbmF0aW9uIGFzIGFueSkuc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhub3JtYWxpemVMb2NhbGVQYXRoKGFzUGF0aCwgbG9jYWxlcykucGF0aG5hbWUpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgY29uc3QgZnNQYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSxcbiAgICAgICAgICBsb2NhbGVzXG4gICAgICAgICkucGF0aG5hbWVcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMoZnNQYXRobmFtZSkpIHtcbiAgICAgICAgICBhc1BhdGggPSBmc1BhdGhuYW1lXG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihmc1BhdGhuYW1lKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYXNQYXRoID0gZnNQYXRobmFtZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGRlZmVyPzogc3RyaW5nW107IGVhZ2VyPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgXHJcbiAgICBBcHBCYXIsIFxyXG4gICAgVG9vbGJhciwgXHJcbiAgICBUeXBvZ3JhcGh5LCBcclxuICAgIG1ha2VTdHlsZXMsXHJcbiAgICBCdXR0b25cclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5jb25zdCBoZWFkZXJzRGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiSG9tZVwiLFxyXG4gICAgICBocmVmOiBcIi9ob21lXCIsXHJcbiAgICAgIGtleToxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJDcmVhdGUgVm90ZVwiLFxyXG4gICAgICBocmVmOiBcIi9hZG1pbkhvbWVcIixcclxuICAgICAga2V5OjJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIkFib3V0IFVzXCIsXHJcbiAgICAgIGhyZWY6IFwiL2Fib3V0VXNcIixcclxuICAgICAga2V5OjNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIkxvZyBPdXRcIixcclxuICAgICAgaHJlZjogXCIvbG9nb3V0XCIsXHJcbiAgICAgIGtleTo0XHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XHJcbiAgICBoZWFkZXI6IHtcclxuICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRUQxQjJGXCIsXHJcbiAgICB9LFxyXG4gICAgbG9nbzoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiV29yayBTYW5zLCBzYW5zLXNlcmlmXCIsXHJcbiAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgIGNvbG9yOiBcIiNGRkZFRkVcIixcclxuICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgICB9LFxyXG4gICAgd2ViMzoge1xyXG4gICAgICBmb250RmFtaWx5OiBcIldvcmsgU2Fucywgc2Fucy1zZXJpZlwiLFxyXG4gICAgICBjb2xvcjogXCIjRkZDMENCXCIsXHJcbiAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiLFxyXG4gICAgICByaWdodDogMFxyXG4gICAgfSxcclxuIH0pKTtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGhlYWRlciwgbG9nb1N0eWxlLCB3ZWIzIH0gPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCBkaXNwbGF5RGVza3RvcCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICAgIHtsb2dvfVxyXG4gICAgICAgICAgICB7Z2V0TWVudUJ1dHRvbnMoKX1cclxuICAgICAgICAgICAge2Nvbm5lY3Rpb259XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBsb2dvID0gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPEJ1dHRvbiBzdHlsZT17e2NvbG9yOlwiI0ZGRkVGRVwifX0gPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMVwiIGNsYXNzTmFtZT17bG9nb1N0eWxlfSA+XHJcbiAgICAgICAgICAgICAgTWNHaWxsIFZvdGVzXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICk7XHJcbiAgICBmdW5jdGlvbiBjbGlja2VkKCkge1xyXG4gICAgICBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gKFxyXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e2NsaWNrZWR9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXt3ZWIzfSA+XHJcbiAgICAgICAgICAgIENvbm5lY3QgdG8gV2ViM1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIClcclxuXHJcbiAgICBjb25zdCBnZXRNZW51QnV0dG9ucyA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIGhlYWRlcnNEYXRhLm1hcCgoeyBsYWJlbCwgaHJlZiB9KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxMaW5rIGhyZWYgPSB7aHJlZn0ga2V5ID17aHJlZn0+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB7Li4ue1xyXG4gICAgICAgICAgICAgICAga2V5OiBsYWJlbCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgIDxBcHBCYXIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiI0VEMUIyRlwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+e2Rpc3BsYXlEZXNrdG9wKCl9PC9BcHBCYXI+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG4iLCJpbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xyXG5cclxuY29uc3QgZ2V0V2ViMyA9IGFzeW5jKCkgPT57XHJcbiAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xyXG4gICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCB3aW5kb3cuZXRoX3JlcXVlc3RBY2NvdW50cztcclxuICAgICAgcmV0dXJuICh3ZWIzKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBlcnJvclxyXG4gICAgfVxyXG4gIH1cclxuICBlbHNlIGlmICh3aW5kb3cud2ViMykge1xyXG4gICAgY29uc3Qgd2ViMyA9IHdpbmRvdy53ZWIzO1xyXG4gICAgY29uc29sZS5sb2coXCJJbmplY3RlZCB3ZWIzIGRldGVjdGVkLlwiKTtcclxuICAgIHJlc29sdmUod2ViMyk7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgV2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyKFxyXG4gICAgICBcImh0dHA6Ly8xMjcuMC4wLjE6ODU0NVwiXHJcbiAgICApO1xyXG4gICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKHByb3ZpZGVyKTtcclxuICAgIGNvbnNvbGUubG9nKFwiTm8gd2ViMyBpbnN0YW5jZSBpbmplY3RlZCwgdXNpbmcgTG9jYWwgd2ViMy5cIik7XHJcbiAgICByZXNvbHZlKHdlYjMpO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBnZXRXZWIzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5pbXBvcnQgVm90ZUZhY3RvcnlDb250cmFjdCBmcm9tIFwiLi4vY29udHJhY3RzL1ZvdGVGYWN0b3J5Lmpzb25cIjtcclxuaW1wb3J0IFZvdGVDb250cmFjdCBmcm9tIFwiLi4vY29udHJhY3RzL1ZvdGUuanNvblwiO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi9nZXRXZWIzXCI7XHJcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xyXG5cclxuY29uc3QgYWRtaW5UaXRsZSA9IHtcclxuICAgIGNvbG9yOiBcInJlZFwiLFxyXG4gICAgbWFyZ2luQm90dG9tOiBcIjUlXCIsXHJcbiAgICBmb250U2l6ZTogXCIzZW1cIixcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIlxyXG59O1xyXG5cclxuY29uc3QgYWRtaW5GaWVsZHMgPSB7XHJcbiAgICBtYXJnaW46IFwiYXV0byA1JSBhdXRvIDUlXCJcclxufTtcclxuXHJcbmNvbnN0IE5ld0VsZWN0aW9uID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt3ZWIzLCBzZXRXZWIzXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IGVsZWN0aW9uVHlwZXMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBrZXk6ICdzbScsXHJcbiAgICAgICAgICAgIHRleHQ6ICdzaW1wbGUgbWFqb3JpdHknLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ21ham9yaXR5J1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAga2V5OiAndHQnLFxyXG4gICAgICAgICAgICB0ZXh0OiAndHdvIHRoaXJkcycsXHJcbiAgICAgICAgICAgIHZhbHVlOiAndHdvVGhpcmRzJ1xyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgdmFyIHdlYjNJbnN0YW5jZTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gaW5pdFdlYjMoKSB7XHJcbiAgICAgICAgICAgIHdlYjNJbnN0YW5jZSA9IGF3YWl0IGdldFdlYjMoKTtcclxuICAgICAgICAgICAgc2V0V2ViMyh3ZWIzSW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbml0V2ViMygpO1xyXG4gICAgfSxbXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbZWxlY3Rpb25UeXBlLCBzZXRFbGVjdGlvblR5cGVdID0gdXNlU3RhdGUoJ21ham9yaXR5Jyk7XHJcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICB2YXIgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBtYW5hZ2VyO1xyXG4gICAgICAgIHZhciBmYWN0b3J5Q29udHJhY3Q7XHJcbiAgICAgICAgdmFyIHZvdGVDb250cmFjdDtcclxuICAgICAgICB2YXIgYWRkcmVzc09mVm90ZTtcclxuICAgICAgICAvLyB2YXIgd2ViM0luc3RhbmNlO1xyXG5cclxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbiBpbml0V2ViMygpIHtcclxuICAgICAgICAvLyAgICAgd2ViM0luc3RhbmNlID0gYXdhaXQgZ2V0V2ViMygpO1xyXG4gICAgICAgIC8vICAgICBzZXRXZWIzKHdlYjNJbnN0YW5jZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGluaXRXZWIzKCk7XHJcbiAgICAgICAgdmFyIHNldHVwVm90ZUZhY3RvcnkgPSBhc3luYyAoKSA9PiB7IC8vaW5pdGlhbGl6ZXMgdm90ZUZhY3RvcnlcclxuICAgICAgICAgICAgaWYod2ViMyA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBbbWFuYWdlcl0gPSAoYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViMy5ldGgubmV0LmdldElkKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXBsb3llZE5ldHdvcmsgPSBWb3RlRmFjdG9yeUNvbnRyYWN0Lm5ldHdvcmtzW25ldHdvcmtJZF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgICAgICAgICAgICBWb3RlRmFjdG9yeUNvbnRyYWN0LmFiaSxcclxuICAgICAgICAgICAgICAgICAgICBkZXBsb3llZE5ldHdvcmsgJiYgZGVwbG95ZWROZXR3b3JrLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgZmFjdG9yeUNvbnRyYWN0ID0gaW5zdGFuY2U7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2V0IHdlYjMsIGFjY291bnRzLCBhbmQgY29udHJhY3QgdG8gdGhlIHN0YXRlLCBhbmQgdGhlbiBwcm9jZWVkIHdpdGggYW5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cclxuICAgICAgICAgICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGNyZWF0ZVZvdGUgPSBhc3luYyAoKSA9PiB7Ly91c2VzIHZvdGVGYWN0b3J5IHRvIGNyZWF0ZSBWb3RlXHJcbiAgICAgICAgICAgIGlmKGZhY3RvcnlDb250cmFjdCA9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gR2V0IHRoZSB2YWx1ZSBmcm9tIHRoZSBjb250cmFjdCB0byBwcm92ZSBpdCB3b3JrZWQuXHJcbiAgICAgICAgICAgIGF3YWl0IGZhY3RvcnlDb250cmFjdC5tZXRob2RzLmNyZWF0ZVZvdGUoMCkuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBmcm9tOiBtYW5hZ2VyXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGdldEVsZWN0aW9uQWRkcmVzcyA9IGFzeW5jICgpID0+IHsvL2NhbGxzIHZvdGVGYWN0b3J5IG1ldGhvZCB0byBnZXQgbmV3IFZvdGUgYWRkcmVzc1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZhY3RvcnlDb250cmFjdC5tZXRob2RzLmdldERlcGxveWVkVm90ZXMoKS5jYWxsKCk7XHJcbiAgICAgICAgICAgIGFkZHJlc3NPZlZvdGUgPSByZXNwb25zZVtyZXNwb25zZS5sZW5ndGggLSAxXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBpbml0aWFsaXplRWxlY3Rpb24gPSBhc3luYyAoKSA9PiB7Ly9pbml0aWFsaXplcyB2b3RlIGNvbnRyYWN0XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBhd2FpdCBuZXcgd2ViMy5ldGguQ29udHJhY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgVm90ZUNvbnRyYWN0LmFiaSxcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzT2ZWb3RlLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHZvdGVDb250cmFjdCA9IGluc3RhbmNlO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxyXG4gICAgICAgICAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgc2V0VXBFbGVjdGlvbiA9IGFzeW5jKCkgPT4gey8vY2FsbCB0byB2b3RlIGNvbnRyYWN0IHRvIGVkaXQgZWxlY3Rpb25cclxuICAgICAgICAgICAgaWYgKCF2b3RlQ29udHJhY3QpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidm90ZUNvbnRyYWN0IGRuZVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhd2FpdCB2b3RlQ29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgICAgICAgICAgLmVkaXRFbGVjdGlvbih0aXRsZSwgbmV3IERhdGUoc3RhcnREYXRlKS5nZXRUaW1lKCksIG5ldyBEYXRlKGVuZERhdGUpLmdldFRpbWUoKSwgZGVzY3JpcHRpb24sIGVsZWN0aW9uVHlwZSlcclxuICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBtYW5hZ2VyXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBkaXNwbGF5Vm90ZSA9IGFzeW5jICgpID0+IHsgLy8gdGVzdGluZyBwdXJwb3Nlc1xyXG4gICAgICAgICAgICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgdm90ZUNvbnRyYWN0Lm1ldGhvZHMuY3VycmVudEVsZWN0aW9uKCkuY2FsbCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdW1tYXJ5KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGF3YWl0IHNldHVwVm90ZUZhY3RvcnkoKTtcclxuICAgICAgICBhd2FpdCBjcmVhdGVWb3RlKCk7XHJcbiAgICAgICAgYXdhaXQgZ2V0RWxlY3Rpb25BZGRyZXNzKCk7XHJcbiAgICAgICAgYXdhaXQgaW5pdGlhbGl6ZUVsZWN0aW9uKCk7XHJcbiAgICAgICAgYXdhaXQgc2V0VXBFbGVjdGlvbigpO1xyXG4gICAgICAgIGF3YWl0IGRpc3BsYXlWb3RlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxoMSBzdHlsZT17YWRtaW5UaXRsZX0+TmV3IEVsZWN0aW9uPC9oMT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gc3R5bGU9e2FkbWluRmllbGRzfT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXQgcmVxdWlyZWQgbGFiZWw9XCJFbGVjdGlvbiB0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldFRpdGxlKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIlN0YXJ0IGRhdGVcIiB0eXBlPVwiZGF0ZVwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhcnREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0U3RhcnREYXRlKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dCByZXF1aXJlZCBsYWJlbD1cIkVuZCBkYXRlXCIgdHlwZT1cImRhdGVcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRFbmREYXRlKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLlNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nVHlwZSBvZiBlbGVjdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZWxlY3Rpb25UeXBlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1R5cGUgb2YgZWxlY3Rpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbGVjdGlvblR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRFbGVjdGlvblR5cGUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qPG0uVGV4dEZpZWxkIGxhYmVsPVwiU2VsZWN0IGdyb3VwcyAoc29tZW9uZSBoZWxwIHdpdGggdGhlIHNlYXJjaCBhbmQgc2VsZWN0IG11bHRpcGxlIHBseilcIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLlRleHRBcmVhIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVzY3JpcHRpb25cIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0RGVzY3JpcHRpb24oZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkJ1dHRvbj5DYW5jZWw8L0Zvcm0uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25TdWJtaXQ9e29uU3VibWl0fT5QdWJsaXNoIEVsZWN0aW9uPC9Gb3JtLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTmV3RWxlY3Rpb247XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYjNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==