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

module.exports = JSON.parse("{\"contractName\":\"Vote\",\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"managerOfVote\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"typeOf\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"candidates\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"candidateAddr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"numVotes\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"candidatesAddresses\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"candidatesCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"currentElection\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"startDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endDate\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"numVotes\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"typeOfElection\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"currentPetition\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"startDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endDate\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"numSigned\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"manager\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"startDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endDate\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"typeOfElection\",\"type\":\"string\"}],\"name\":\"editElection\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"startDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endDate\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"}],\"name\":\"editPetition\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"candidateAddress\",\"type\":\"address\"}],\"name\":\"voteFor\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"current_date\",\"type\":\"uint256\"}],\"name\":\"enterElection\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"leaveElection\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCandidatesAddresses\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"candaddr\",\"type\":\"address\"}],\"name\":\"get_candidate\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"candAddr\",\"type\":\"address\"}],\"name\":\"getCandidateVoters\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"voterAddr\",\"type\":\"address\"}],\"name\":\"getElectionVoter\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.7.4+commit.3f05b770\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"managerOfVote\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"typeOf\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"constructor\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"candidates\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"candidateAddr\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"numVotes\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"candidatesAddresses\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"candidatesCount\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"currentElection\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"title\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"startDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"endDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"numVotes\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"typeOfElection\\\",\\\"type\\\":\\\"string\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"currentPetition\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"title\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"startDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"endDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"numSigned\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"title\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"startDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"endDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"typeOfElection\\\",\\\"type\\\":\\\"string\\\"}],\\\"name\\\":\\\"editElection\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"title\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"startDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"endDate\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"}],\\\"name\\\":\\\"editPetition\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"current_date\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"enterElection\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"candAddr\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"getCandidateVoters\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address[]\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address[]\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"getCandidatesAddresses\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address[]\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address[]\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"voterAddr\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"getElectionVoter\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"candaddr\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"get_candidate\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"leaveElection\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"manager\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"candidateAddress\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"voteFor\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"}],\\\"devdoc\\\":{\\\"kind\\\":\\\"dev\\\",\\\"methods\\\":{},\\\"version\\\":1},\\\"userdoc\\\":{\\\"kind\\\":\\\"user\\\",\\\"methods\\\":{},\\\"version\\\":1}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"/C/Users/foubroker/Desktop/BAM/voting-at-mcgill-2/contracts/Vote.sol\\\":\\\"Vote\\\"},\\\"evmVersion\\\":\\\"istanbul\\\",\\\"libraries\\\":{},\\\"metadata\\\":{\\\"bytecodeHash\\\":\\\"ipfs\\\"},\\\"optimizer\\\":{\\\"enabled\\\":false,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"/C/Users/foubroker/Desktop/BAM/voting-at-mcgill-2/contracts/Vote.sol\\\":{\\\"keccak256\\\":\\\"0x4ff0ebfe5cd96eeb77de6239b054847f75ad7db7dffb0a64d5b6498a0170aa73\\\",\\\"license\\\":\\\"UNLICENSED\\\",\\\"urls\\\":[\\\"bzz-raw://a6b1aba94119e94d3aaf26ec3fa7162373ca2a2800e4e288ef41059c49ce3a4c\\\",\\\"dweb:/ipfs/QmQTDik5wSMYdyRawsTmQEVfR5phDaYrWRJvtbHAiAL2DD\\\"]}},\\\"version\\\":1}\",\"bytecode\":\"0x608060405234801561001057600080fd5b50604051611f39380380611f398339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060001461009d5760016100a0565b60005b60ff166002819055505050611e7f806100ba6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063869eae2311610097578063da3550ee11610066578063da3550ee146108e2578063dcfda00f14610926578063e1c5fcc114610b23578063fcae83a714610b7d576100f5565b8063869eae23146104775780638ab66a90146105d35780639511544714610720578063953ef76d146107b9576100f5565b8063481c6a75116100d3578063481c6a751461018157806367127e43146101b5578063691a675c1461031b5780637432e63a1461041f576100f5565b80632d35a8a2146100fa5780633f8cab7f14610118578063407bba4a14610177575b600080fd5b610102610ced565b6040518082815260200191505060405180910390f35b610120610cf3565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610163578082015181840152602081019050610148565b505050509050019250505060405180910390f35b61017f610d90565b005b610189610fb8565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610319600480360360808110156101cb57600080fd5b81019080803590602001906401000000008111156101e857600080fd5b8201836020820111156101fa57600080fd5b8035906020019184600183028401116401000000008311171561021c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803590602001909291908035906020019064010000000081111561029357600080fd5b8201836020820111156102a557600080fd5b803590602001918460018302840111640100000000831117156102c757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610fdc565b005b610323611094565b604051808060200186815260200185815260200180602001848152602001838103835288818151815260200191508051906020019080838360005b8381101561037957808201518184015260208101905061035e565b50505050905090810190601f1680156103a65780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b838110156103df5780820151818401526020810190506103c4565b50505050905090810190601f16801561040c5780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b61044b6004803603602081101561043557600080fd5b81019080803590602001909291905050506111e8565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6105d16004803603606081101561048d57600080fd5b81019080803590602001906401000000008111156104aa57600080fd5b8201836020820111156104bc57600080fd5b803590602001918460018302840111640100000000831117156104de57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561054157600080fd5b82018360208201111561055357600080fd5b8035906020019184600183028401116401000000008311171561057557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190505050611227565b005b610615600480360360208110156105e957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611369565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561067b578082015181840152602081019050610660565b50505050905090810190601f1680156106a85780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156106e15780820151818401526020810190506106c6565b50505050905090810190601f16801561070e5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b6107626004803603602081101561073657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506114e9565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156107a557808201518184015260208101905061078a565b505050509050019250505060405180910390f35b6107fb600480360360208110156107cf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115c8565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b8381101561083f578082015181840152602081019050610824565b50505050905090810190601f16801561086c5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156108a557808201518184015260208101905061088a565b50505050905090810190601f1680156108d25780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b610924600480360360208110156108f857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061179f565b005b610b21600480360360a081101561093c57600080fd5b810190808035906020019064010000000081111561095957600080fd5b82018360208201111561096b57600080fd5b8035906020019184600183028401116401000000008311171561098d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291908035906020019092919080359060200190640100000000811115610a0457600080fd5b820183602082011115610a1657600080fd5b80359060200191846001830284011164010000000083111715610a3857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610a9b57600080fd5b820183602082011115610aad57600080fd5b80359060200191846001830284011164010000000083111715610acf57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611a0a565b005b610b6560048036036020811015610b3957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611adc565b60405180821515815260200191505060405180910390f35b610b85611b43565b6040518080602001878152602001868152602001806020018581526020018060200184810384528a818151815260200191508051906020019080838360005b83811015610bdf578082015181840152602081019050610bc4565b50505050905090810190601f168015610c0c5780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610c45578082015181840152602081019050610c2a565b50505050905090810190601f168015610c725780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b83811015610cab578082015181840152602081019050610c90565b50505050905090810190601f168015610cd85780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b60015481565b6060600060025414610d0457600080fd5b6004805480602002602001604051908101604052809291908181526020018280548015610d8657602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610d3c575b5050505050905090565b600060025414610d9f57600080fd5b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160009055600282016000610e1e9190611d35565b600382016000610e2e9190611d56565b600482016000610e3e9190611d56565b505060005b600480549050811015610fa25760048181548110610e5d57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610f9557600460016004805490500381548110610ed057fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660048281548110610f0857fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506004805480610f5b57fe5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690559055610fa2565b8080600101915050610e43565b5060016000815480929190600190039190505550565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461103457600080fd5b60016002541461104357600080fd5b6000600c905084816000019080519060200190611061929190611d9e565b508381600101819055508281600201819055508181600301908051906020019061108c929190611d9e565b505050505050565b600c806000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561112e5780601f106111035761010080835404028352916020019161112e565b820191906000526020600020905b81548152906001019060200180831161111157829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111d85780601f106111ad576101008083540402835291602001916111d8565b820191906000526020600020905b8154815290600101906020018083116111bb57829003601f168201915b5050505050908060040154905085565b600481815481106111f857600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006002541461123657600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905083816003019080519060200190611291929190611d9e565b50828160040190805190602001906112aa929190611d9e565b50338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600081548092919060010191905055506004339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b60036020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114415780601f1061141657610100808354040283529160200191611441565b820191906000526020600020905b81548152906001019060200180831161142457829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114df5780601f106114b4576101008083540402835291602001916114df565b820191906000526020600020905b8154815290600101906020018083116114c257829003601f168201915b5050505050905084565b60606000600254146114fa57600080fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018054806020026020016040519081016040528092919081815260200182805480156115bc57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611572575b50505050509050919050565b6060806000600254146115da57600080fd5b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401818054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116f35780601f106116c8576101008083540402835291602001916116f3565b820191906000526020600020905b8154815290600101906020018083116116d657829003601f168201915b50505050509150808054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561178f5780601f106117645761010080835404028352916020019161178f565b820191906000526020600020905b81548152906001019060200180831161177257829003601f168201915b5050505050905091509150915091565b6000600254146117ae57600080fd5b60001515600560060160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151415611a0757600073ffffffffffffffffffffffffffffffffffffffff16600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611a06576001600560060160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600560040160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611a6257600080fd5b600060025414611a7157600080fd5b60006005905085816000019080519060200190611a8f929190611d9e565b5084816001018190555083816002018190555082816003019080519060200190611aba929190611d9e565b5081816005019080519060200190611ad3929190611d9e565b50505050505050565b60008060025414611aec57600080fd5b600560060160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6005806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611bdd5780601f10611bb257610100808354040283529160200191611bdd565b820191906000526020600020905b815481529060010190602001808311611bc057829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611c875780601f10611c5c57610100808354040283529160200191611c87565b820191906000526020600020905b815481529060010190602001808311611c6a57829003601f168201915b505050505090806004015490806005018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611d2b5780601f10611d0057610100808354040283529160200191611d2b565b820191906000526020600020905b815481529060010190602001808311611d0e57829003601f168201915b5050505050905086565b5080546000825590600052602060002090810190611d539190611e2c565b50565b50805460018160011615610100020316600290046000825580601f10611d7c5750611d9b565b601f016020900490600052602060002090810190611d9a9190611e2c565b5b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282611dd45760008555611e1b565b82601f10611ded57805160ff1916838001178555611e1b565b82800160010185558215611e1b579182015b82811115611e1a578251825591602001919060010190611dff565b5b509050611e289190611e2c565b5090565b5b80821115611e45576000816000905550600101611e2d565b509056fea264697066735822122010099a7f049435a44e84a518d6581b53ecf8bfce54da71f07ed0bf2d49db1e1064736f6c63430007040033\",\"deployedBytecode\":\"0x608060405234801561001057600080fd5b50600436106100f55760003560e01c8063869eae2311610097578063da3550ee11610066578063da3550ee146108e2578063dcfda00f14610926578063e1c5fcc114610b23578063fcae83a714610b7d576100f5565b8063869eae23146104775780638ab66a90146105d35780639511544714610720578063953ef76d146107b9576100f5565b8063481c6a75116100d3578063481c6a751461018157806367127e43146101b5578063691a675c1461031b5780637432e63a1461041f576100f5565b80632d35a8a2146100fa5780633f8cab7f14610118578063407bba4a14610177575b600080fd5b610102610ced565b6040518082815260200191505060405180910390f35b610120610cf3565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610163578082015181840152602081019050610148565b505050509050019250505060405180910390f35b61017f610d90565b005b610189610fb8565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610319600480360360808110156101cb57600080fd5b81019080803590602001906401000000008111156101e857600080fd5b8201836020820111156101fa57600080fd5b8035906020019184600183028401116401000000008311171561021c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803590602001909291908035906020019064010000000081111561029357600080fd5b8201836020820111156102a557600080fd5b803590602001918460018302840111640100000000831117156102c757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610fdc565b005b610323611094565b604051808060200186815260200185815260200180602001848152602001838103835288818151815260200191508051906020019080838360005b8381101561037957808201518184015260208101905061035e565b50505050905090810190601f1680156103a65780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b838110156103df5780820151818401526020810190506103c4565b50505050905090810190601f16801561040c5780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b61044b6004803603602081101561043557600080fd5b81019080803590602001909291905050506111e8565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6105d16004803603606081101561048d57600080fd5b81019080803590602001906401000000008111156104aa57600080fd5b8201836020820111156104bc57600080fd5b803590602001918460018302840111640100000000831117156104de57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561054157600080fd5b82018360208201111561055357600080fd5b8035906020019184600183028401116401000000008311171561057557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190505050611227565b005b610615600480360360208110156105e957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611369565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561067b578082015181840152602081019050610660565b50505050905090810190601f1680156106a85780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156106e15780820151818401526020810190506106c6565b50505050905090810190601f16801561070e5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b6107626004803603602081101561073657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506114e9565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156107a557808201518184015260208101905061078a565b505050509050019250505060405180910390f35b6107fb600480360360208110156107cf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115c8565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b8381101561083f578082015181840152602081019050610824565b50505050905090810190601f16801561086c5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156108a557808201518184015260208101905061088a565b50505050905090810190601f1680156108d25780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b610924600480360360208110156108f857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061179f565b005b610b21600480360360a081101561093c57600080fd5b810190808035906020019064010000000081111561095957600080fd5b82018360208201111561096b57600080fd5b8035906020019184600183028401116401000000008311171561098d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291908035906020019092919080359060200190640100000000811115610a0457600080fd5b820183602082011115610a1657600080fd5b80359060200191846001830284011164010000000083111715610a3857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610a9b57600080fd5b820183602082011115610aad57600080fd5b80359060200191846001830284011164010000000083111715610acf57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611a0a565b005b610b6560048036036020811015610b3957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611adc565b60405180821515815260200191505060405180910390f35b610b85611b43565b6040518080602001878152602001868152602001806020018581526020018060200184810384528a818151815260200191508051906020019080838360005b83811015610bdf578082015181840152602081019050610bc4565b50505050905090810190601f168015610c0c5780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610c45578082015181840152602081019050610c2a565b50505050905090810190601f168015610c725780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b83811015610cab578082015181840152602081019050610c90565b50505050905090810190601f168015610cd85780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b60015481565b6060600060025414610d0457600080fd5b6004805480602002602001604051908101604052809291908181526020018280548015610d8657602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610d3c575b5050505050905090565b600060025414610d9f57600080fd5b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160009055600282016000610e1e9190611d35565b600382016000610e2e9190611d56565b600482016000610e3e9190611d56565b505060005b600480549050811015610fa25760048181548110610e5d57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610f9557600460016004805490500381548110610ed057fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660048281548110610f0857fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506004805480610f5b57fe5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690559055610fa2565b8080600101915050610e43565b5060016000815480929190600190039190505550565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461103457600080fd5b60016002541461104357600080fd5b6000600c905084816000019080519060200190611061929190611d9e565b508381600101819055508281600201819055508181600301908051906020019061108c929190611d9e565b505050505050565b600c806000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561112e5780601f106111035761010080835404028352916020019161112e565b820191906000526020600020905b81548152906001019060200180831161111157829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111d85780601f106111ad576101008083540402835291602001916111d8565b820191906000526020600020905b8154815290600101906020018083116111bb57829003601f168201915b5050505050908060040154905085565b600481815481106111f857600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006002541461123657600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905083816003019080519060200190611291929190611d9e565b50828160040190805190602001906112aa929190611d9e565b50338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600081548092919060010191905055506004339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b60036020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114415780601f1061141657610100808354040283529160200191611441565b820191906000526020600020905b81548152906001019060200180831161142457829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114df5780601f106114b4576101008083540402835291602001916114df565b820191906000526020600020905b8154815290600101906020018083116114c257829003601f168201915b5050505050905084565b60606000600254146114fa57600080fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018054806020026020016040519081016040528092919081815260200182805480156115bc57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611572575b50505050509050919050565b6060806000600254146115da57600080fd5b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401818054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116f35780601f106116c8576101008083540402835291602001916116f3565b820191906000526020600020905b8154815290600101906020018083116116d657829003601f168201915b50505050509150808054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561178f5780601f106117645761010080835404028352916020019161178f565b820191906000526020600020905b81548152906001019060200180831161177257829003601f168201915b5050505050905091509150915091565b6000600254146117ae57600080fd5b60001515600560060160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151415611a0757600073ffffffffffffffffffffffffffffffffffffffff16600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611a06576001600560060160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600560040160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611a6257600080fd5b600060025414611a7157600080fd5b60006005905085816000019080519060200190611a8f929190611d9e565b5084816001018190555083816002018190555082816003019080519060200190611aba929190611d9e565b5081816005019080519060200190611ad3929190611d9e565b50505050505050565b60008060025414611aec57600080fd5b600560060160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6005806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611bdd5780601f10611bb257610100808354040283529160200191611bdd565b820191906000526020600020905b815481529060010190602001808311611bc057829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611c875780601f10611c5c57610100808354040283529160200191611c87565b820191906000526020600020905b815481529060010190602001808311611c6a57829003601f168201915b505050505090806004015490806005018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611d2b5780601f10611d0057610100808354040283529160200191611d2b565b820191906000526020600020905b815481529060010190602001808311611d0e57829003601f168201915b5050505050905086565b5080546000825590600052602060002090810190611d539190611e2c565b50565b50805460018160011615610100020316600290046000825580601f10611d7c5750611d9b565b601f016020900490600052602060002090810190611d9a9190611e2c565b5b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282611dd45760008555611e1b565b82601f10611ded57805160ff1916838001178555611e1b565b82800160010185558215611e1b579182015b82811115611e1a578251825591602001919060010190611dff565b5b509050611e289190611e2c565b5090565b5b80821115611e45576000816000905550600101611e2d565b509056fea264697066735822122010099a7f049435a44e84a518d6581b53ecf8bfce54da71f07ed0bf2d49db1e1064736f6c63430007040033\",\"immutableReferences\":{},\"generatedSources\":[],\"deployedGeneratedSources\":[],\"sourceMap\":\"68:5279:1:-:0;;;1535:193;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1662:13;1652:7;;:23;;;;;;;;;;;;;;;;;;1705:6;1700:1;:11;1699:21;;1719:1;1699:21;;;1715:1;1699:21;1686:34;;:10;:34;;;;1535:193;;68:5279;;;;;;\",\"deployedSourceMap\":\"68:5279:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;138:27;;;:::i;:::-;;;;;;;;;;;;;;;;;;;4441:131;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3781:637;;;:::i;:::-;;109:22;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;2144:326;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1495:31;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1383:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;3048:658;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1214:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4775:154;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4578:191;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2501:513;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1736:400;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;4935:148;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;1457:31;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;138:27;;;;:::o;4441:131::-;4509:16;5235:1;5221:10;;:15;5213:24;;;;;;4545:19:::1;4538:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4441:131:::0;:::o;3781:637::-;5235:1;5221:10;;:15;5213:24;;;;;;4060:10:::1;:22;4071:10;4060:22;;;;;;;;;;;;;;;;4053:29:::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;4098:6;4093:290;4112:19;:26;;;;4110:1;:28;4093:290;;;4174:19;4194:1;4174:22;;;;;;;;;;;;;;;;;;;;;;;;;4162:34;;:10;:34;;;4159:213;;;4239:19;4286:1;4259:19;:26;;;;:28;4239:49;;;;;;;;;;;;;;;;;;;;;;;;;4216:19;4236:1;4216:22;;;;;;;;;;;;;;;;:72;;;;;;;;;;;;;;;;;;4307:19;:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4351:5;;4159:213;4140:3;;;;;;;4093:290;;;;4393:15;;:17;;;;;;;;;;;;;;3781:637::o:0;109:22::-;;;;;;;;;;;;:::o;2144:326::-;5144:7;;;;;;;;;;5130:21;;:10;:21;;;5122:30;;;;;;5320:1:::1;5306:10;;:15;5298:24;;;::::0;::::1;;2298:18:::2;2319:15;2298:36;;2355:5;2345:1;:7;;:15;;;;;;;;;;;;:::i;:::-;;2385:9;2371:1;:11;;:23;;;;2417:7;2405:1;:9;;:19;;;;2451:11;2435:1;:13;;:27;;;;;;;;;;;;:::i;:::-;;5333:1;2144:326:::0;;;;:::o;1495:31::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1383:36::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;3048:658::-;5235:1;5221:10;;:15;5213:24;;;;;;3334:34:::1;3371:10;:22;3382:10;3371:22;;;;;;;;;;;;;;;3334:59;;3428:4;3404:16;:21;;:28;;;;;;;;;;;;:::i;:::-;;3474:11;3443:16;:28;;:42;;;;;;;;;;;;:::i;:::-;;3528:10;3496:16;:30;;;:42;;;;;;;;;;;;;;;;;;3634:15;;:17;;;;;;;;;;;;;3662:19;3687:10;3662:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5248:1;3048:658:::0;;;:::o;1214:47::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;4775:154::-;4855:16;5235:1;5221:10;;:15;5213:24;;;;;;4892:10:::1;:20;4903:8;4892:20;;;;;;;;;;;;;;;4891:29;;4884:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4775:154:::0;;;:::o;4578:191::-;4653:13;4668;5235:1;5221:10;;:15;5213:24;;;;;;4701:10:::1;:20;4712:8;4701:20;;;;;;;;;;;;;;;:25;;4728:10;:20;4739:8;4728:20;;;;;;;;;;;;;;;:32;;4694:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4578:191:::0;;;:::o;2501:513::-;5235:1;5221:10;;:15;5213:24;;;;;;2660:5:::1;2622:43;;:15;:22;;:34;2645:10;2622:34;;;;;;;;;;;;;;;;;;;;;;;;;:43;;;2619:388;;;2738:1;2684:56;;:10;:28;2695:16;2684:28;;;;;;;;;;;;;;;:42;;;;;;;;;;;;:56;;;2681:315;;2798:4;2760:15;:22;;:34;2783:10;2760:34;;;;;;;;;;;;;;;;:42;;;;;;;;;;;;;;;;;;2821:15;:24;;;:26;;;;;;;;;;;;;2867:10;:28;2878:16;2867:28;;;;;;;;;;;;;;;2866:39;;;:41;;;;;;;;;;;;;2927:10;:28;2938:16;2927:28;;;;;;;;;;;;;;;2926:37;;2969:10;2926:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2681:315;2619:388;2501:513:::0;:::o;1736:400::-;5144:7;;;;;;;;;;5130:21;;:10;:21;;;5122:30;;;;;;5235:1:::1;5221:10;;:15;5213:24;;;::::0;::::1;;1920:18:::2;1941:15;1920:36;;1977:5;1967:1;:7;;:15;;;;;;;;;;;;:::i;:::-;;2007:9;1993:1;:11;;:23;;;;2039:7;2027:1;:9;;:19;;;;2073:11;2057:1;:13;;:27;;;;;;;;;;;;:::i;:::-;;2114:14;2095:1;:16;;:33;;;;;;;;;;;;:::i;:::-;;5248:1;1736:400:::0;;;;;:::o;4935:148::-;5014:4;5235:1;5221:10;;:15;5213:24;;;;;;5040:15:::1;:22;;5039:35;5064:9;5039:35;;;;;;;;;;;;;;;;;;;;;;;;;5031:44;;4935:148:::0;;;:::o;1457:31::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o\",\"source\":\"pragma solidity ^0.7.4;\\r\\n//\\\"SPDX-License-Identifier: UNLICENSED\\\"\\r\\n\\r\\ncontract Vote{\\r\\n    //admin address\\r\\n    address public manager;\\r\\n    uint public candidatesCount;\\r\\n\\r\\n    struct user{\\r\\n        string name;\\r\\n        string email;\\r\\n        string password;\\r\\n        address userAddress;\\r\\n        address[] running;\\r\\n        address[] createdElection;\\r\\n        address[] createdPetition;\\r\\n        string userType;\\r\\n    }\\r\\n\\r\\n    struct candidate {\\r\\n        address candidateAddr;\\r\\n        uint numVotes;\\r\\n        address[] voters;\\r\\n        string name;\\r\\n        string description;\\r\\n    }\\r\\n\\r\\n    struct election {\\r\\n        string title;\\r\\n        uint startDate;\\r\\n        uint endDate;\\r\\n        string description;\\r\\n        //think about mapping?\\r\\n        uint numVotes;\\r\\n        string typeOfElection;\\r\\n        mapping(address => bool) voters ; //see if a voter has voted\\r\\n    }\\r\\n    struct petition{\\r\\n        string title;\\r\\n        uint startDate;\\r\\n        uint endDate;\\r\\n        string description;\\r\\n        uint numSigned;\\r\\n        mapping(address=>bool) signed; //see if a user has signed\\r\\n    }\\r\\n    uint typeOfVote; //0 for election and 1 for petition\\r\\n    // mapping(uint => election) public elections;\\r\\n    mapping(address => candidate) public candidates; //maps a candidate's address to the candidate\\r\\n    // candidate[] public candidateArray;// redundent but necessary\\r\\n    address[] public candidatesAddresses;//should replace candidateArray\\r\\n    election public currentElection;\\r\\n    petition public currentPetition;\\r\\n\\r\\n    constructor (address managerOfVote, uint typeOf){   //how does one become an admin?\\r\\n        // constructor\\r\\n        manager = managerOfVote;\\r\\n        typeOfVote = (0 == typeOf) ? 0 : 1;\\r\\n    }\\r\\n\\r\\n    function editElection (string memory title, uint256 startDate, uint256 endDate, string memory description, string memory typeOfElection)\\r\\n    public restricted typeElection {\\r\\n        election storage e = currentElection;\\r\\n        e.title = title;\\r\\n        e.startDate = startDate;\\r\\n        e.endDate = endDate;\\r\\n        e.description = description;\\r\\n        e.typeOfElection = typeOfElection;\\r\\n    }\\r\\n\\r\\n    function editPetition (string memory title, uint256 startDate, uint256 endDate, string memory description)\\r\\n    public restricted typePetition {\\r\\n        petition storage p = currentPetition;\\r\\n        p.title = title;\\r\\n        p.startDate = startDate;\\r\\n        p.endDate = endDate;\\r\\n        p.description = description;\\r\\n    }\\r\\n //vote for a candidate\\r\\n    function voteFor(address candidateAddress) public typeElection{\\r\\n        //needs to be between start end end\\r\\n        if(currentElection.voters[msg.sender] == false){\\r\\n            if(candidates[candidateAddress].candidateAddr != address(0)){\\r\\n                currentElection.voters[msg.sender]  = true;\\r\\n                currentElection.numVotes++;\\r\\n                (candidates[candidateAddress]).numVotes++;\\r\\n                (candidates[candidateAddress]).voters.push(msg.sender);\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n    //enter as a candidate\\r\\n    function enterElection(string memory name, string memory description,uint256 current_date)\\r\\n    public typeElection {\\r\\n        //Check if the registration is before the required deadline\\r\\n        // require(current_date < currentElection.startDate);\\r\\n        //enter candidate\\r\\n        candidate storage currentCandidate = candidates[msg.sender];\\r\\n        currentCandidate.name = name;\\r\\n        currentCandidate.description = description;\\r\\n        currentCandidate.candidateAddr= msg.sender;\\r\\n        currentCandidate.voters;\\r\\n        // candidateArray.push(currentCandidate);\\r\\n        candidatesCount++;\\r\\n        candidatesAddresses.push(msg.sender);\\r\\n    }\\r\\n\\r\\n    // ? current_date is not being used\\r\\n    //leave the election\\r\\n    function leaveElection()//uint256 current_date)\\r\\n    public typeElection {\\r\\n        //Check if the registration is before the required deadline\\r\\n        //require(current_date < currentElection.startDate);\\r\\n        //remove candidate\\r\\n        //remove from array\\r\\n        delete candidates[msg.sender];\\r\\n        for (uint i = 0; i<candidatesAddresses.length; i++){\\r\\n            if(msg.sender==candidatesAddresses[i]){\\r\\n                candidatesAddresses[i]=candidatesAddresses[candidatesAddresses.length-1];\\r\\n                candidatesAddresses.pop();\\r\\n                break;\\r\\n            }\\r\\n        }\\r\\n        candidatesCount--;\\r\\n    }\\r\\n\\r\\n    //GETTERS\\r\\n    function getCandidatesAddresses() public view typeElection returns (address[] memory) {\\r\\n        return candidatesAddresses;\\r\\n    }\\r\\n    function get_candidate(address candaddr) public view typeElection returns (string memory, string memory) {\\r\\n        return(candidates[candaddr].name, candidates[candaddr].description);\\r\\n    }\\r\\n    function getCandidateVoters(address candAddr) public view typeElection returns (address[] memory) {\\r\\n        return((candidates[candAddr]).voters);\\r\\n    }\\r\\n    function getElectionVoter(address voterAddr) public view typeElection returns (bool) {\\r\\n        return ((currentElection.voters)[voterAddr]);\\r\\n    }\\r\\n    modifier restricted() {\\r\\n        require(msg.sender == manager);\\r\\n        _;\\r\\n    }\\r\\n    modifier typeElection() {\\r\\n        require(typeOfVote == 0);\\r\\n        _;\\r\\n    }\\r\\n    modifier typePetition() {\\r\\n        require(typeOfVote == 1);\\r\\n        _;\\r\\n    }\\r\\n\\r\\n}\\r\\n\",\"sourcePath\":\"C:\\\\Users\\\\foubroker\\\\Desktop\\\\BAM\\\\voting-at-mcgill-2\\\\contracts\\\\Vote.sol\",\"ast\":{\"absolutePath\":\"/C/Users/foubroker/Desktop/BAM/voting-at-mcgill-2/contracts/Vote.sol\",\"exportedSymbols\":{\"Vote\":[501]},\"id\":502,\"license\":\"UNLICENSED\",\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":38,\"literals\":[\"solidity\",\"^\",\"0.7\",\".4\"],\"nodeType\":\"PragmaDirective\",\"src\":\"0:23:1\"},{\"abstract\":false,\"baseContracts\":[],\"contractDependencies\":[],\"contractKind\":\"contract\",\"fullyImplemented\":true,\"id\":501,\"linearizedBaseContracts\":[501],\"name\":\"Vote\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"constant\":false,\"functionSelector\":\"481c6a75\",\"id\":40,\"mutability\":\"mutable\",\"name\":\"manager\",\"nodeType\":\"VariableDeclaration\",\"scope\":501,\"src\":\"109:22:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":39,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"109:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"2d35a8a2\",\"id\":42,\"mutability\":\"mutable\",\"name\":\"candidatesCount\",\"nodeType\":\"VariableDeclaration\",\"scope\":501,\"src\":\"138:27:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":41,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"138:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"public\"},{\"canonicalName\":\"Vote.user\",\"id\":62,\"members\":[{\"constant\":false,\"id\":44,\"mutability\":\"mutable\",\"name\":\"name\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"196:11:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":43,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"196:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":46,\"mutability\":\"mutable\",\"name\":\"email\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"218:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":45,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"218:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":48,\"mutability\":\"mutable\",\"name\":\"password\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"241:15:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":47,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"241:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":50,\"mutability\":\"mutable\",\"name\":\"userAddress\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"267:19:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":49,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"267:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":53,\"mutability\":\"mutable\",\"name\":\"running\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"297:17:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":51,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"297:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":52,\"nodeType\":\"ArrayTypeName\",\"src\":\"297:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":56,\"mutability\":\"mutable\",\"name\":\"createdElection\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"325:25:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":54,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"325:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":55,\"nodeType\":\"ArrayTypeName\",\"src\":\"325:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":59,\"mutability\":\"mutable\",\"name\":\"createdPetition\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"361:25:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":57,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"361:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":58,\"nodeType\":\"ArrayTypeName\",\"src\":\"361:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":61,\"mutability\":\"mutable\",\"name\":\"userType\",\"nodeType\":\"VariableDeclaration\",\"scope\":62,\"src\":\"397:15:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":60,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"397:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"name\":\"user\",\"nodeType\":\"StructDefinition\",\"scope\":501,\"src\":\"174:246:1\",\"visibility\":\"public\"},{\"canonicalName\":\"Vote.candidate\",\"id\":74,\"members\":[{\"constant\":false,\"id\":64,\"mutability\":\"mutable\",\"name\":\"candidateAddr\",\"nodeType\":\"VariableDeclaration\",\"scope\":74,\"src\":\"456:21:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":63,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"456:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":66,\"mutability\":\"mutable\",\"name\":\"numVotes\",\"nodeType\":\"VariableDeclaration\",\"scope\":74,\"src\":\"488:13:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":65,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"488:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":69,\"mutability\":\"mutable\",\"name\":\"voters\",\"nodeType\":\"VariableDeclaration\",\"scope\":74,\"src\":\"512:16:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":67,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"512:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":68,\"nodeType\":\"ArrayTypeName\",\"src\":\"512:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":71,\"mutability\":\"mutable\",\"name\":\"name\",\"nodeType\":\"VariableDeclaration\",\"scope\":74,\"src\":\"539:11:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":70,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"539:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":73,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":74,\"src\":\"561:18:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":72,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"561:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"name\":\"candidate\",\"nodeType\":\"StructDefinition\",\"scope\":501,\"src\":\"428:159:1\",\"visibility\":\"public\"},{\"canonicalName\":\"Vote.election\",\"id\":91,\"members\":[{\"constant\":false,\"id\":76,\"mutability\":\"mutable\",\"name\":\"title\",\"nodeType\":\"VariableDeclaration\",\"scope\":91,\"src\":\"622:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":75,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"622:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":78,\"mutability\":\"mutable\",\"name\":\"startDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":91,\"src\":\"645:14:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":77,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"645:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":80,\"mutability\":\"mutable\",\"name\":\"endDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":91,\"src\":\"670:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":79,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"670:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":82,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":91,\"src\":\"693:18:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":81,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"693:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":84,\"mutability\":\"mutable\",\"name\":\"numVotes\",\"nodeType\":\"VariableDeclaration\",\"scope\":91,\"src\":\"754:13:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":83,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"754:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":86,\"mutability\":\"mutable\",\"name\":\"typeOfElection\",\"nodeType\":\"VariableDeclaration\",\"scope\":91,\"src\":\"778:21:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":85,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"778:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":90,\"mutability\":\"mutable\",\"name\":\"voters\",\"nodeType\":\"VariableDeclaration\",\"scope\":91,\"src\":\"810:31:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"},\"typeName\":{\"id\":89,\"keyType\":{\"id\":87,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"818:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"810:24:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"},\"valueType\":{\"id\":88,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"829:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}},\"visibility\":\"internal\"}],\"name\":\"election\",\"nodeType\":\"StructDefinition\",\"scope\":501,\"src\":\"595:282:1\",\"visibility\":\"public\"},{\"canonicalName\":\"Vote.petition\",\"id\":106,\"members\":[{\"constant\":false,\"id\":93,\"mutability\":\"mutable\",\"name\":\"title\",\"nodeType\":\"VariableDeclaration\",\"scope\":106,\"src\":\"909:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":92,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"909:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":95,\"mutability\":\"mutable\",\"name\":\"startDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":106,\"src\":\"932:14:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":94,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"932:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":97,\"mutability\":\"mutable\",\"name\":\"endDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":106,\"src\":\"957:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":96,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"957:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":99,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":106,\"src\":\"980:18:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":98,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"980:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":101,\"mutability\":\"mutable\",\"name\":\"numSigned\",\"nodeType\":\"VariableDeclaration\",\"scope\":106,\"src\":\"1009:14:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":100,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1009:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":105,\"mutability\":\"mutable\",\"name\":\"signed\",\"nodeType\":\"VariableDeclaration\",\"scope\":106,\"src\":\"1034:29:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"},\"typeName\":{\"id\":104,\"keyType\":{\"id\":102,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1042:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"1034:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"},\"valueType\":{\"id\":103,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1051:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}},\"visibility\":\"internal\"}],\"name\":\"petition\",\"nodeType\":\"StructDefinition\",\"scope\":501,\"src\":\"883:215:1\",\"visibility\":\"public\"},{\"constant\":false,\"id\":108,\"mutability\":\"mutable\",\"name\":\"typeOfVote\",\"nodeType\":\"VariableDeclaration\",\"scope\":501,\"src\":\"1104:15:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":107,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1104:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"functionSelector\":\"8ab66a90\",\"id\":112,\"mutability\":\"mutable\",\"name\":\"candidates\",\"nodeType\":\"VariableDeclaration\",\"scope\":501,\"src\":\"1214:47:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate)\"},\"typeName\":{\"id\":111,\"keyType\":{\"id\":109,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1222:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"1214:29:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate)\"},\"valueType\":{\"id\":110,\"name\":\"candidate\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":74,\"src\":\"1233:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate\"}}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"7432e63a\",\"id\":115,\"mutability\":\"mutable\",\"name\":\"candidatesAddresses\",\"nodeType\":\"VariableDeclaration\",\"scope\":501,\"src\":\"1383:36:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":113,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1383:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":114,\"nodeType\":\"ArrayTypeName\",\"src\":\"1383:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"fcae83a7\",\"id\":117,\"mutability\":\"mutable\",\"name\":\"currentElection\",\"nodeType\":\"VariableDeclaration\",\"scope\":501,\"src\":\"1457:31:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election\"},\"typeName\":{\"id\":116,\"name\":\"election\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":91,\"src\":\"1457:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election\"}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"691a675c\",\"id\":119,\"mutability\":\"mutable\",\"name\":\"currentPetition\",\"nodeType\":\"VariableDeclaration\",\"scope\":501,\"src\":\"1495:31:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage\",\"typeString\":\"struct Vote.petition\"},\"typeName\":{\"id\":118,\"name\":\"petition\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":106,\"src\":\"1495:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage_ptr\",\"typeString\":\"struct Vote.petition\"}},\"visibility\":\"public\"},{\"body\":{\"id\":140,\"nodeType\":\"Block\",\"src\":\"1583:145:1\",\"statements\":[{\"expression\":{\"id\":128,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":126,\"name\":\"manager\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":40,\"src\":\"1652:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":127,\"name\":\"managerOfVote\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":121,\"src\":\"1662:13:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"1652:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":129,\"nodeType\":\"ExpressionStatement\",\"src\":\"1652:23:1\"},{\"expression\":{\"id\":138,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":130,\"name\":\"typeOfVote\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":108,\"src\":\"1686:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"condition\":{\"components\":[{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":133,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"hexValue\":\"30\",\"id\":131,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1700:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"id\":132,\"name\":\"typeOf\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":123,\"src\":\"1705:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"1700:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"id\":134,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"1699:13:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"falseExpression\":{\"hexValue\":\"31\",\"id\":136,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1719:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"id\":137,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"Conditional\",\"src\":\"1699:21:1\",\"trueExpression\":{\"hexValue\":\"30\",\"id\":135,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1715:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint8\",\"typeString\":\"uint8\"}},\"src\":\"1686:34:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":139,\"nodeType\":\"ExpressionStatement\",\"src\":\"1686:34:1\"}]},\"id\":141,\"implemented\":true,\"kind\":\"constructor\",\"modifiers\":[],\"name\":\"\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":124,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":121,\"mutability\":\"mutable\",\"name\":\"managerOfVote\",\"nodeType\":\"VariableDeclaration\",\"scope\":141,\"src\":\"1548:21:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":120,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1548:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":123,\"mutability\":\"mutable\",\"name\":\"typeOf\",\"nodeType\":\"VariableDeclaration\",\"scope\":141,\"src\":\"1571:11:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":122,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1571:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"1547:36:1\"},\"returnParameters\":{\"id\":125,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1583:0:1\"},\"scope\":501,\"src\":\"1535:193:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":192,\"nodeType\":\"Block\",\"src\":\"1909:227:1\",\"statements\":[{\"assignments\":[159],\"declarations\":[{\"constant\":false,\"id\":159,\"mutability\":\"mutable\",\"name\":\"e\",\"nodeType\":\"VariableDeclaration\",\"scope\":192,\"src\":\"1920:18:1\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election\"},\"typeName\":{\"id\":158,\"name\":\"election\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":91,\"src\":\"1920:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election\"}},\"visibility\":\"internal\"}],\"id\":161,\"initialValue\":{\"id\":160,\"name\":\"currentElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":117,\"src\":\"1941:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"1920:36:1\"},{\"expression\":{\"id\":166,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":162,\"name\":\"e\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":159,\"src\":\"1967:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election storage pointer\"}},\"id\":164,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"title\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":76,\"src\":\"1967:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":165,\"name\":\"title\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":143,\"src\":\"1977:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"1967:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":167,\"nodeType\":\"ExpressionStatement\",\"src\":\"1967:15:1\"},{\"expression\":{\"id\":172,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":168,\"name\":\"e\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":159,\"src\":\"1993:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election storage pointer\"}},\"id\":170,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"startDate\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":78,\"src\":\"1993:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":171,\"name\":\"startDate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":145,\"src\":\"2007:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"1993:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":173,\"nodeType\":\"ExpressionStatement\",\"src\":\"1993:23:1\"},{\"expression\":{\"id\":178,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":174,\"name\":\"e\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":159,\"src\":\"2027:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election storage pointer\"}},\"id\":176,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"endDate\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":80,\"src\":\"2027:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":177,\"name\":\"endDate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":147,\"src\":\"2039:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"2027:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":179,\"nodeType\":\"ExpressionStatement\",\"src\":\"2027:19:1\"},{\"expression\":{\"id\":184,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":180,\"name\":\"e\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":159,\"src\":\"2057:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election storage pointer\"}},\"id\":182,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":82,\"src\":\"2057:13:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":183,\"name\":\"description\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":149,\"src\":\"2073:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"2057:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":185,\"nodeType\":\"ExpressionStatement\",\"src\":\"2057:27:1\"},{\"expression\":{\"id\":190,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":186,\"name\":\"e\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":159,\"src\":\"2095:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage_ptr\",\"typeString\":\"struct Vote.election storage pointer\"}},\"id\":188,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"typeOfElection\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":86,\"src\":\"2095:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":189,\"name\":\"typeOfElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":151,\"src\":\"2114:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"2095:33:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":191,\"nodeType\":\"ExpressionStatement\",\"src\":\"2095:33:1\"}]},\"functionSelector\":\"dcfda00f\",\"id\":193,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":154,\"modifierName\":{\"id\":153,\"name\":\"restricted\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":480,\"src\":\"1885:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"1885:10:1\"},{\"id\":156,\"modifierName\":{\"id\":155,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":490,\"src\":\"1896:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"1896:12:1\"}],\"name\":\"editElection\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":152,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":143,\"mutability\":\"mutable\",\"name\":\"title\",\"nodeType\":\"VariableDeclaration\",\"scope\":193,\"src\":\"1759:19:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":142,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1759:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":145,\"mutability\":\"mutable\",\"name\":\"startDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":193,\"src\":\"1780:17:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":144,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1780:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":147,\"mutability\":\"mutable\",\"name\":\"endDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":193,\"src\":\"1799:15:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":146,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1799:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":149,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":193,\"src\":\"1816:25:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":148,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1816:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":151,\"mutability\":\"mutable\",\"name\":\"typeOfElection\",\"nodeType\":\"VariableDeclaration\",\"scope\":193,\"src\":\"1843:28:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":150,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1843:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"src\":\"1758:114:1\"},\"returnParameters\":{\"id\":157,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1909:0:1\"},\"scope\":501,\"src\":\"1736:400:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":236,\"nodeType\":\"Block\",\"src\":\"2287:183:1\",\"statements\":[{\"assignments\":[209],\"declarations\":[{\"constant\":false,\"id\":209,\"mutability\":\"mutable\",\"name\":\"p\",\"nodeType\":\"VariableDeclaration\",\"scope\":236,\"src\":\"2298:18:1\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage_ptr\",\"typeString\":\"struct Vote.petition\"},\"typeName\":{\"id\":208,\"name\":\"petition\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":106,\"src\":\"2298:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage_ptr\",\"typeString\":\"struct Vote.petition\"}},\"visibility\":\"internal\"}],\"id\":211,\"initialValue\":{\"id\":210,\"name\":\"currentPetition\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":119,\"src\":\"2319:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage\",\"typeString\":\"struct Vote.petition storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"2298:36:1\"},{\"expression\":{\"id\":216,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":212,\"name\":\"p\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":209,\"src\":\"2345:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage_ptr\",\"typeString\":\"struct Vote.petition storage pointer\"}},\"id\":214,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"title\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":93,\"src\":\"2345:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":215,\"name\":\"title\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":195,\"src\":\"2355:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"2345:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":217,\"nodeType\":\"ExpressionStatement\",\"src\":\"2345:15:1\"},{\"expression\":{\"id\":222,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":218,\"name\":\"p\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":209,\"src\":\"2371:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage_ptr\",\"typeString\":\"struct Vote.petition storage pointer\"}},\"id\":220,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"startDate\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":95,\"src\":\"2371:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":221,\"name\":\"startDate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":197,\"src\":\"2385:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"2371:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":223,\"nodeType\":\"ExpressionStatement\",\"src\":\"2371:23:1\"},{\"expression\":{\"id\":228,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":224,\"name\":\"p\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":209,\"src\":\"2405:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage_ptr\",\"typeString\":\"struct Vote.petition storage pointer\"}},\"id\":226,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"endDate\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":97,\"src\":\"2405:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":227,\"name\":\"endDate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":199,\"src\":\"2417:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"2405:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":229,\"nodeType\":\"ExpressionStatement\",\"src\":\"2405:19:1\"},{\"expression\":{\"id\":234,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":230,\"name\":\"p\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":209,\"src\":\"2435:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_petition_$106_storage_ptr\",\"typeString\":\"struct Vote.petition storage pointer\"}},\"id\":232,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":99,\"src\":\"2435:13:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":233,\"name\":\"description\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":201,\"src\":\"2451:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"2435:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":235,\"nodeType\":\"ExpressionStatement\",\"src\":\"2435:27:1\"}]},\"functionSelector\":\"67127e43\",\"id\":237,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":204,\"modifierName\":{\"id\":203,\"name\":\"restricted\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":480,\"src\":\"2263:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"2263:10:1\"},{\"id\":206,\"modifierName\":{\"id\":205,\"name\":\"typePetition\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":500,\"src\":\"2274:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"2274:12:1\"}],\"name\":\"editPetition\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":202,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":195,\"mutability\":\"mutable\",\"name\":\"title\",\"nodeType\":\"VariableDeclaration\",\"scope\":237,\"src\":\"2167:19:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":194,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2167:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":197,\"mutability\":\"mutable\",\"name\":\"startDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":237,\"src\":\"2188:17:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":196,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2188:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":199,\"mutability\":\"mutable\",\"name\":\"endDate\",\"nodeType\":\"VariableDeclaration\",\"scope\":237,\"src\":\"2207:15:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":198,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2207:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":201,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":237,\"src\":\"2224:25:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":200,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2224:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"src\":\"2166:84:1\"},\"returnParameters\":{\"id\":207,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2287:0:1\"},\"scope\":501,\"src\":\"2144:326:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":295,\"nodeType\":\"Block\",\"src\":\"2563:451:1\",\"statements\":[{\"condition\":{\"commonType\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"id\":250,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"baseExpression\":{\"expression\":{\"id\":244,\"name\":\"currentElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":117,\"src\":\"2622:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election storage ref\"}},\"id\":245,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"voters\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":90,\"src\":\"2622:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":248,\"indexExpression\":{\"expression\":{\"id\":246,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"2645:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":247,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"2645:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2622:34:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"hexValue\":\"66616c7365\",\"id\":249,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2660:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"false\"},\"src\":\"2622:43:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":294,\"nodeType\":\"IfStatement\",\"src\":\"2619:388:1\",\"trueBody\":{\"id\":293,\"nodeType\":\"Block\",\"src\":\"2666:341:1\",\"statements\":[{\"condition\":{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"id\":259,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"baseExpression\":{\"id\":251,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"2684:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":253,\"indexExpression\":{\"id\":252,\"name\":\"candidateAddress\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":239,\"src\":\"2695:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2684:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":254,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"candidateAddr\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":64,\"src\":\"2684:42:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"!=\",\"rightExpression\":{\"arguments\":[{\"hexValue\":\"30\",\"id\":257,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2738:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"}],\"id\":256,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"nodeType\":\"ElementaryTypeNameExpression\",\"src\":\"2730:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_type$_t_address_$\",\"typeString\":\"type(address)\"},\"typeName\":{\"id\":255,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2730:7:1\",\"typeDescriptions\":{}}},\"id\":258,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"typeConversion\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2730:10:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"2684:56:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":292,\"nodeType\":\"IfStatement\",\"src\":\"2681:315:1\",\"trueBody\":{\"id\":291,\"nodeType\":\"Block\",\"src\":\"2741:255:1\",\"statements\":[{\"expression\":{\"id\":267,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"expression\":{\"id\":260,\"name\":\"currentElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":117,\"src\":\"2760:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election storage ref\"}},\"id\":264,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"voters\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":90,\"src\":\"2760:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":265,\"indexExpression\":{\"expression\":{\"id\":262,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"2783:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":263,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"2783:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"2760:34:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"hexValue\":\"74727565\",\"id\":266,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2798:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"src\":\"2760:42:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":268,\"nodeType\":\"ExpressionStatement\",\"src\":\"2760:42:1\"},{\"expression\":{\"id\":272,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"2821:26:1\",\"subExpression\":{\"expression\":{\"id\":269,\"name\":\"currentElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":117,\"src\":\"2821:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election storage ref\"}},\"id\":271,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"numVotes\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":84,\"src\":\"2821:24:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":273,\"nodeType\":\"ExpressionStatement\",\"src\":\"2821:26:1\"},{\"expression\":{\"id\":279,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"2866:41:1\",\"subExpression\":{\"expression\":{\"components\":[{\"baseExpression\":{\"id\":274,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"2867:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":276,\"indexExpression\":{\"id\":275,\"name\":\"candidateAddress\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":239,\"src\":\"2878:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2867:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}}],\"id\":277,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"2866:30:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":278,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"numVotes\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":66,\"src\":\"2866:39:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":280,\"nodeType\":\"ExpressionStatement\",\"src\":\"2866:41:1\"},{\"expression\":{\"arguments\":[{\"expression\":{\"id\":287,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"2969:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":288,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"2969:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}],\"expression\":{\"expression\":{\"components\":[{\"baseExpression\":{\"id\":281,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"2927:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":283,\"indexExpression\":{\"id\":282,\"name\":\"candidateAddress\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":239,\"src\":\"2938:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2927:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}}],\"id\":284,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"2926:30:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":285,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"voters\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":69,\"src\":\"2926:37:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":286,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"push\",\"nodeType\":\"MemberAccess\",\"src\":\"2926:42:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypush_nonpayable$_t_address_$returns$__$\",\"typeString\":\"function (address)\"}},\"id\":289,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2926:54:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":290,\"nodeType\":\"ExpressionStatement\",\"src\":\"2926:54:1\"}]}}]}}]},\"functionSelector\":\"da3550ee\",\"id\":296,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":242,\"modifierName\":{\"id\":241,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":490,\"src\":\"2551:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"2551:12:1\"}],\"name\":\"voteFor\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":240,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":239,\"mutability\":\"mutable\",\"name\":\"candidateAddress\",\"nodeType\":\"VariableDeclaration\",\"scope\":296,\"src\":\"2518:24:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":238,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2518:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"src\":\"2517:26:1\"},\"returnParameters\":{\"id\":243,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2563:0:1\"},\"scope\":501,\"src\":\"2501:513:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":347,\"nodeType\":\"Block\",\"src\":\"3164:542:1\",\"statements\":[{\"assignments\":[308],\"declarations\":[{\"constant\":false,\"id\":308,\"mutability\":\"mutable\",\"name\":\"currentCandidate\",\"nodeType\":\"VariableDeclaration\",\"scope\":347,\"src\":\"3334:34:1\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate\"},\"typeName\":{\"id\":307,\"name\":\"candidate\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":74,\"src\":\"3334:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate\"}},\"visibility\":\"internal\"}],\"id\":313,\"initialValue\":{\"baseExpression\":{\"id\":309,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"3371:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":312,\"indexExpression\":{\"expression\":{\"id\":310,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3382:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":311,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"3382:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"3371:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"3334:59:1\"},{\"expression\":{\"id\":318,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":314,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":308,\"src\":\"3404:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}},\"id\":316,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":71,\"src\":\"3404:21:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":317,\"name\":\"name\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":298,\"src\":\"3428:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"3404:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":319,\"nodeType\":\"ExpressionStatement\",\"src\":\"3404:28:1\"},{\"expression\":{\"id\":324,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":320,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":308,\"src\":\"3443:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}},\"id\":322,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":73,\"src\":\"3443:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":323,\"name\":\"description\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":300,\"src\":\"3474:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"3443:42:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":325,\"nodeType\":\"ExpressionStatement\",\"src\":\"3443:42:1\"},{\"expression\":{\"id\":331,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":326,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":308,\"src\":\"3496:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}},\"id\":328,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"candidateAddr\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":64,\"src\":\"3496:30:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"expression\":{\"id\":329,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3528:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":330,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"3528:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"3496:42:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":332,\"nodeType\":\"ExpressionStatement\",\"src\":\"3496:42:1\"},{\"expression\":{\"expression\":{\"id\":333,\"name\":\"currentCandidate\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":308,\"src\":\"3549:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage_ptr\",\"typeString\":\"struct Vote.candidate storage pointer\"}},\"id\":335,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"voters\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":69,\"src\":\"3549:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":336,\"nodeType\":\"ExpressionStatement\",\"src\":\"3549:23:1\"},{\"expression\":{\"id\":338,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"3634:17:1\",\"subExpression\":{\"id\":337,\"name\":\"candidatesCount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":42,\"src\":\"3634:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":339,\"nodeType\":\"ExpressionStatement\",\"src\":\"3634:17:1\"},{\"expression\":{\"arguments\":[{\"expression\":{\"id\":343,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3687:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":344,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"3687:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}],\"expression\":{\"id\":340,\"name\":\"candidatesAddresses\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"3662:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":342,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"push\",\"nodeType\":\"MemberAccess\",\"src\":\"3662:24:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypush_nonpayable$_t_address_$returns$__$\",\"typeString\":\"function (address)\"}},\"id\":345,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"3662:36:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":346,\"nodeType\":\"ExpressionStatement\",\"src\":\"3662:36:1\"}]},\"functionSelector\":\"869eae23\",\"id\":348,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":305,\"modifierName\":{\"id\":304,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":490,\"src\":\"3151:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"3151:12:1\"}],\"name\":\"enterElection\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":303,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":298,\"mutability\":\"mutable\",\"name\":\"name\",\"nodeType\":\"VariableDeclaration\",\"scope\":348,\"src\":\"3071:18:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":297,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3071:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":300,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":348,\"src\":\"3091:25:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":299,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3091:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":302,\"mutability\":\"mutable\",\"name\":\"current_date\",\"nodeType\":\"VariableDeclaration\",\"scope\":348,\"src\":\"3117:20:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":301,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3117:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"3070:68:1\"},\"returnParameters\":{\"id\":306,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"3164:0:1\"},\"scope\":501,\"src\":\"3048:658:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":400,\"nodeType\":\"Block\",\"src\":\"3854:564:1\",\"statements\":[{\"expression\":{\"id\":357,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"delete\",\"prefix\":true,\"src\":\"4053:29:1\",\"subExpression\":{\"baseExpression\":{\"id\":353,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"4060:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":356,\"indexExpression\":{\"expression\":{\"id\":354,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4071:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":355,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"4071:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"4060:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":358,\"nodeType\":\"ExpressionStatement\",\"src\":\"4053:29:1\"},{\"body\":{\"id\":395,\"nodeType\":\"Block\",\"src\":\"4144:239:1\",\"statements\":[{\"condition\":{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"id\":375,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"id\":370,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4162:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":371,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"4162:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"baseExpression\":{\"id\":372,\"name\":\"candidatesAddresses\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"4174:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":374,\"indexExpression\":{\"id\":373,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":360,\"src\":\"4194:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4174:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"4162:34:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":394,\"nodeType\":\"IfStatement\",\"src\":\"4159:213:1\",\"trueBody\":{\"id\":393,\"nodeType\":\"Block\",\"src\":\"4197:175:1\",\"statements\":[{\"expression\":{\"id\":385,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"id\":376,\"name\":\"candidatesAddresses\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"4216:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":378,\"indexExpression\":{\"id\":377,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":360,\"src\":\"4236:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"4216:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"baseExpression\":{\"id\":379,\"name\":\"candidatesAddresses\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"4239:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":384,\"indexExpression\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":383,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"id\":380,\"name\":\"candidatesAddresses\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"4259:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":381,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"src\":\"4259:26:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"-\",\"rightExpression\":{\"hexValue\":\"31\",\"id\":382,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"4286:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"src\":\"4259:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4239:49:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"4216:72:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":386,\"nodeType\":\"ExpressionStatement\",\"src\":\"4216:72:1\"},{\"expression\":{\"arguments\":[],\"expression\":{\"argumentTypes\":[],\"expression\":{\"id\":387,\"name\":\"candidatesAddresses\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"4307:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":389,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"pop\",\"nodeType\":\"MemberAccess\",\"src\":\"4307:23:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypop_nonpayable$__$returns$__$\",\"typeString\":\"function ()\"}},\"id\":390,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"4307:25:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":391,\"nodeType\":\"ExpressionStatement\",\"src\":\"4307:25:1\"},{\"id\":392,\"nodeType\":\"Break\",\"src\":\"4351:5:1\"}]}}]},\"condition\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":366,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":363,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":360,\"src\":\"4110:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<\",\"rightExpression\":{\"expression\":{\"id\":364,\"name\":\"candidatesAddresses\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"4112:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":365,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"src\":\"4112:26:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"4110:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":396,\"initializationExpression\":{\"assignments\":[360],\"declarations\":[{\"constant\":false,\"id\":360,\"mutability\":\"mutable\",\"name\":\"i\",\"nodeType\":\"VariableDeclaration\",\"scope\":396,\"src\":\"4098:6:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":359,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4098:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"id\":362,\"initialValue\":{\"hexValue\":\"30\",\"id\":361,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"4107:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"4098:10:1\"},\"loopExpression\":{\"expression\":{\"id\":368,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"4140:3:1\",\"subExpression\":{\"id\":367,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":360,\"src\":\"4140:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":369,\"nodeType\":\"ExpressionStatement\",\"src\":\"4140:3:1\"},\"nodeType\":\"ForStatement\",\"src\":\"4093:290:1\"},{\"expression\":{\"id\":398,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"--\",\"prefix\":false,\"src\":\"4393:17:1\",\"subExpression\":{\"id\":397,\"name\":\"candidatesCount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":42,\"src\":\"4393:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":399,\"nodeType\":\"ExpressionStatement\",\"src\":\"4393:17:1\"}]},\"functionSelector\":\"407bba4a\",\"id\":401,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":351,\"modifierName\":{\"id\":350,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":490,\"src\":\"3841:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"3841:12:1\"}],\"name\":\"leaveElection\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":349,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"3803:2:1\"},\"returnParameters\":{\"id\":352,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"3854:0:1\"},\"scope\":501,\"src\":\"3781:637:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":411,\"nodeType\":\"Block\",\"src\":\"4527:45:1\",\"statements\":[{\"expression\":{\"id\":409,\"name\":\"candidatesAddresses\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"4545:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"functionReturnParameters\":408,\"id\":410,\"nodeType\":\"Return\",\"src\":\"4538:26:1\"}]},\"functionSelector\":\"3f8cab7f\",\"id\":412,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":404,\"modifierName\":{\"id\":403,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":490,\"src\":\"4487:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"4487:12:1\"}],\"name\":\"getCandidatesAddresses\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":402,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"4472:2:1\"},\"returnParameters\":{\"id\":408,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":407,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":412,\"src\":\"4509:16:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":405,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4509:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":406,\"nodeType\":\"ArrayTypeName\",\"src\":\"4509:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"}],\"src\":\"4508:18:1\"},\"scope\":501,\"src\":\"4441:131:1\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":433,\"nodeType\":\"Block\",\"src\":\"4683:86:1\",\"statements\":[{\"expression\":{\"components\":[{\"expression\":{\"baseExpression\":{\"id\":423,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"4701:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":425,\"indexExpression\":{\"id\":424,\"name\":\"candaddr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":414,\"src\":\"4712:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4701:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":426,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":71,\"src\":\"4701:25:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},{\"expression\":{\"baseExpression\":{\"id\":427,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"4728:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":429,\"indexExpression\":{\"id\":428,\"name\":\"candaddr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":414,\"src\":\"4739:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4728:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":430,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":73,\"src\":\"4728:32:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}}],\"id\":431,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"4700:61:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$_t_string_storage_$_t_string_storage_$\",\"typeString\":\"tuple(string storage ref,string storage ref)\"}},\"functionReturnParameters\":422,\"id\":432,\"nodeType\":\"Return\",\"src\":\"4694:67:1\"}]},\"functionSelector\":\"953ef76d\",\"id\":434,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":417,\"modifierName\":{\"id\":416,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":490,\"src\":\"4631:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"4631:12:1\"}],\"name\":\"get_candidate\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":415,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":414,\"mutability\":\"mutable\",\"name\":\"candaddr\",\"nodeType\":\"VariableDeclaration\",\"scope\":434,\"src\":\"4601:16:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":413,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4601:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"src\":\"4600:18:1\"},\"returnParameters\":{\"id\":422,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":419,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":434,\"src\":\"4653:13:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":418,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4653:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":421,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":434,\"src\":\"4668:13:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":420,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4668:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"src\":\"4652:30:1\"},\"scope\":501,\"src\":\"4578:191:1\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":451,\"nodeType\":\"Block\",\"src\":\"4873:56:1\",\"statements\":[{\"expression\":{\"components\":[{\"expression\":{\"components\":[{\"baseExpression\":{\"id\":444,\"name\":\"candidates\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"4892:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_candidate_$74_storage_$\",\"typeString\":\"mapping(address => struct Vote.candidate storage ref)\"}},\"id\":446,\"indexExpression\":{\"id\":445,\"name\":\"candAddr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":436,\"src\":\"4903:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4892:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}}],\"id\":447,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"4891:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_candidate_$74_storage\",\"typeString\":\"struct Vote.candidate storage ref\"}},\"id\":448,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"voters\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":69,\"src\":\"4891:29:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}}],\"id\":449,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"4890:31:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"functionReturnParameters\":443,\"id\":450,\"nodeType\":\"Return\",\"src\":\"4884:37:1\"}]},\"functionSelector\":\"95115447\",\"id\":452,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":439,\"modifierName\":{\"id\":438,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":490,\"src\":\"4833:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"4833:12:1\"}],\"name\":\"getCandidateVoters\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":437,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":436,\"mutability\":\"mutable\",\"name\":\"candAddr\",\"nodeType\":\"VariableDeclaration\",\"scope\":452,\"src\":\"4803:16:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":435,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4803:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"src\":\"4802:18:1\"},\"returnParameters\":{\"id\":443,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":442,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":452,\"src\":\"4855:16:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":440,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4855:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":441,\"nodeType\":\"ArrayTypeName\",\"src\":\"4855:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"}],\"src\":\"4854:18:1\"},\"scope\":501,\"src\":\"4775:154:1\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":468,\"nodeType\":\"Block\",\"src\":\"5020:63:1\",\"statements\":[{\"expression\":{\"components\":[{\"baseExpression\":{\"components\":[{\"expression\":{\"id\":461,\"name\":\"currentElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":117,\"src\":\"5040:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_election_$91_storage\",\"typeString\":\"struct Vote.election storage ref\"}},\"id\":462,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"voters\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":90,\"src\":\"5040:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}}],\"id\":463,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"5039:24:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":465,\"indexExpression\":{\"id\":464,\"name\":\"voterAddr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":454,\"src\":\"5064:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"5039:35:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"id\":466,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"5038:37:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"functionReturnParameters\":460,\"id\":467,\"nodeType\":\"Return\",\"src\":\"5031:44:1\"}]},\"functionSelector\":\"e1c5fcc1\",\"id\":469,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":457,\"modifierName\":{\"id\":456,\"name\":\"typeElection\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":490,\"src\":\"4992:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"4992:12:1\"}],\"name\":\"getElectionVoter\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":455,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":454,\"mutability\":\"mutable\",\"name\":\"voterAddr\",\"nodeType\":\"VariableDeclaration\",\"scope\":469,\"src\":\"4961:17:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":453,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4961:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"src\":\"4960:19:1\"},\"returnParameters\":{\"id\":460,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":459,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":469,\"src\":\"5014:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":458,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5014:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"5013:6:1\"},\"scope\":501,\"src\":\"4935:148:1\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":479,\"nodeType\":\"Block\",\"src\":\"5111:61:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"id\":475,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"id\":472,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"5130:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":473,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"5130:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"id\":474,\"name\":\"manager\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":40,\"src\":\"5144:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"5130:21:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":471,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"5122:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":476,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5122:30:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":477,\"nodeType\":\"ExpressionStatement\",\"src\":\"5122:30:1\"},{\"id\":478,\"nodeType\":\"PlaceholderStatement\",\"src\":\"5163:1:1\"}]},\"id\":480,\"name\":\"restricted\",\"nodeType\":\"ModifierDefinition\",\"parameters\":{\"id\":470,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"5108:2:1\"},\"src\":\"5089:83:1\",\"virtual\":false,\"visibility\":\"internal\"},{\"body\":{\"id\":489,\"nodeType\":\"Block\",\"src\":\"5202:55:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":485,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":483,\"name\":\"typeOfVote\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":108,\"src\":\"5221:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"hexValue\":\"30\",\"id\":484,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5235:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"src\":\"5221:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":482,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"5213:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":486,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5213:24:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":487,\"nodeType\":\"ExpressionStatement\",\"src\":\"5213:24:1\"},{\"id\":488,\"nodeType\":\"PlaceholderStatement\",\"src\":\"5248:1:1\"}]},\"id\":490,\"name\":\"typeElection\",\"nodeType\":\"ModifierDefinition\",\"parameters\":{\"id\":481,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"5199:2:1\"},\"src\":\"5178:79:1\",\"virtual\":false,\"visibility\":\"internal\"},{\"body\":{\"id\":499,\"nodeType\":\"Block\",\"src\":\"5287:55:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":495,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":493,\"name\":\"typeOfVote\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":108,\"src\":\"5306:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"hexValue\":\"31\",\"id\":494,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5320:1:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"src\":\"5306:15:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":492,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"5298:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":496,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5298:24:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":497,\"nodeType\":\"ExpressionStatement\",\"src\":\"5298:24:1\"},{\"id\":498,\"nodeType\":\"PlaceholderStatement\",\"src\":\"5333:1:1\"}]},\"id\":500,\"name\":\"typePetition\",\"nodeType\":\"ModifierDefinition\",\"parameters\":{\"id\":491,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"5284:2:1\"},\"src\":\"5263:79:1\",\"virtual\":false,\"visibility\":\"internal\"}],\"scope\":502,\"src\":\"68:5279:1\"}],\"src\":\"0:5349:1\"},\"legacyAST\":{\"attributes\":{\"absolutePath\":\"/C/Users/foubroker/Desktop/BAM/voting-at-mcgill-2/contracts/Vote.sol\",\"exportedSymbols\":{\"Vote\":[501]},\"license\":\"UNLICENSED\"},\"children\":[{\"attributes\":{\"literals\":[\"solidity\",\"^\",\"0.7\",\".4\"]},\"id\":38,\"name\":\"PragmaDirective\",\"src\":\"0:23:1\"},{\"attributes\":{\"abstract\":false,\"baseContracts\":[null],\"contractDependencies\":[null],\"contractKind\":\"contract\",\"fullyImplemented\":true,\"linearizedBaseContracts\":[501],\"name\":\"Vote\",\"scope\":502},\"children\":[{\"attributes\":{\"constant\":false,\"functionSelector\":\"481c6a75\",\"mutability\":\"mutable\",\"name\":\"manager\",\"scope\":501,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":39,\"name\":\"ElementaryTypeName\",\"src\":\"109:7:1\"}],\"id\":40,\"name\":\"VariableDeclaration\",\"src\":\"109:22:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"2d35a8a2\",\"mutability\":\"mutable\",\"name\":\"candidatesCount\",\"scope\":501,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":41,\"name\":\"ElementaryTypeName\",\"src\":\"138:4:1\"}],\"id\":42,\"name\":\"VariableDeclaration\",\"src\":\"138:27:1\"},{\"attributes\":{\"canonicalName\":\"Vote.user\",\"name\":\"user\",\"scope\":501,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"name\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":43,\"name\":\"ElementaryTypeName\",\"src\":\"196:6:1\"}],\"id\":44,\"name\":\"VariableDeclaration\",\"src\":\"196:11:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"email\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":45,\"name\":\"ElementaryTypeName\",\"src\":\"218:6:1\"}],\"id\":46,\"name\":\"VariableDeclaration\",\"src\":\"218:12:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"password\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":47,\"name\":\"ElementaryTypeName\",\"src\":\"241:6:1\"}],\"id\":48,\"name\":\"VariableDeclaration\",\"src\":\"241:15:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"userAddress\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":49,\"name\":\"ElementaryTypeName\",\"src\":\"267:7:1\"}],\"id\":50,\"name\":\"VariableDeclaration\",\"src\":\"267:19:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"running\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":51,\"name\":\"ElementaryTypeName\",\"src\":\"297:7:1\"}],\"id\":52,\"name\":\"ArrayTypeName\",\"src\":\"297:9:1\"}],\"id\":53,\"name\":\"VariableDeclaration\",\"src\":\"297:17:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"createdElection\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":54,\"name\":\"ElementaryTypeName\",\"src\":\"325:7:1\"}],\"id\":55,\"name\":\"ArrayTypeName\",\"src\":\"325:9:1\"}],\"id\":56,\"name\":\"VariableDeclaration\",\"src\":\"325:25:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"createdPetition\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":57,\"name\":\"ElementaryTypeName\",\"src\":\"361:7:1\"}],\"id\":58,\"name\":\"ArrayTypeName\",\"src\":\"361:9:1\"}],\"id\":59,\"name\":\"VariableDeclaration\",\"src\":\"361:25:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"userType\",\"scope\":62,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":60,\"name\":\"ElementaryTypeName\",\"src\":\"397:6:1\"}],\"id\":61,\"name\":\"VariableDeclaration\",\"src\":\"397:15:1\"}],\"id\":62,\"name\":\"StructDefinition\",\"src\":\"174:246:1\"},{\"attributes\":{\"canonicalName\":\"Vote.candidate\",\"name\":\"candidate\",\"scope\":501,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"candidateAddr\",\"scope\":74,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":63,\"name\":\"ElementaryTypeName\",\"src\":\"456:7:1\"}],\"id\":64,\"name\":\"VariableDeclaration\",\"src\":\"456:21:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"numVotes\",\"scope\":74,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":65,\"name\":\"ElementaryTypeName\",\"src\":\"488:4:1\"}],\"id\":66,\"name\":\"VariableDeclaration\",\"src\":\"488:13:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"voters\",\"scope\":74,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":67,\"name\":\"ElementaryTypeName\",\"src\":\"512:7:1\"}],\"id\":68,\"name\":\"ArrayTypeName\",\"src\":\"512:9:1\"}],\"id\":69,\"name\":\"VariableDeclaration\",\"src\":\"512:16:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"name\",\"scope\":74,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":70,\"name\":\"ElementaryTypeName\",\"src\":\"539:6:1\"}],\"id\":71,\"name\":\"VariableDeclaration\",\"src\":\"539:11:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":74,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":72,\"name\":\"ElementaryTypeName\",\"src\":\"561:6:1\"}],\"id\":73,\"name\":\"VariableDeclaration\",\"src\":\"561:18:1\"}],\"id\":74,\"name\":\"StructDefinition\",\"src\":\"428:159:1\"},{\"attributes\":{\"canonicalName\":\"Vote.election\",\"name\":\"election\",\"scope\":501,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"title\",\"scope\":91,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":75,\"name\":\"ElementaryTypeName\",\"src\":\"622:6:1\"}],\"id\":76,\"name\":\"VariableDeclaration\",\"src\":\"622:12:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"startDate\",\"scope\":91,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":77,\"name\":\"ElementaryTypeName\",\"src\":\"645:4:1\"}],\"id\":78,\"name\":\"VariableDeclaration\",\"src\":\"645:14:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"endDate\",\"scope\":91,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":79,\"name\":\"ElementaryTypeName\",\"src\":\"670:4:1\"}],\"id\":80,\"name\":\"VariableDeclaration\",\"src\":\"670:12:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":91,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":81,\"name\":\"ElementaryTypeName\",\"src\":\"693:6:1\"}],\"id\":82,\"name\":\"VariableDeclaration\",\"src\":\"693:18:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"numVotes\",\"scope\":91,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":83,\"name\":\"ElementaryTypeName\",\"src\":\"754:4:1\"}],\"id\":84,\"name\":\"VariableDeclaration\",\"src\":\"754:13:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"typeOfElection\",\"scope\":91,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":85,\"name\":\"ElementaryTypeName\",\"src\":\"778:6:1\"}],\"id\":86,\"name\":\"VariableDeclaration\",\"src\":\"778:21:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"voters\",\"scope\":91,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"mapping(address => bool)\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"mapping(address => bool)\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"type\":\"address\"},\"id\":87,\"name\":\"ElementaryTypeName\",\"src\":\"818:7:1\"},{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":88,\"name\":\"ElementaryTypeName\",\"src\":\"829:4:1\"}],\"id\":89,\"name\":\"Mapping\",\"src\":\"810:24:1\"}],\"id\":90,\"name\":\"VariableDeclaration\",\"src\":\"810:31:1\"}],\"id\":91,\"name\":\"StructDefinition\",\"src\":\"595:282:1\"},{\"attributes\":{\"canonicalName\":\"Vote.petition\",\"name\":\"petition\",\"scope\":501,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"title\",\"scope\":106,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":92,\"name\":\"ElementaryTypeName\",\"src\":\"909:6:1\"}],\"id\":93,\"name\":\"VariableDeclaration\",\"src\":\"909:12:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"startDate\",\"scope\":106,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":94,\"name\":\"ElementaryTypeName\",\"src\":\"932:4:1\"}],\"id\":95,\"name\":\"VariableDeclaration\",\"src\":\"932:14:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"endDate\",\"scope\":106,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":96,\"name\":\"ElementaryTypeName\",\"src\":\"957:4:1\"}],\"id\":97,\"name\":\"VariableDeclaration\",\"src\":\"957:12:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":106,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":98,\"name\":\"ElementaryTypeName\",\"src\":\"980:6:1\"}],\"id\":99,\"name\":\"VariableDeclaration\",\"src\":\"980:18:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"numSigned\",\"scope\":106,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":100,\"name\":\"ElementaryTypeName\",\"src\":\"1009:4:1\"}],\"id\":101,\"name\":\"VariableDeclaration\",\"src\":\"1009:14:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"signed\",\"scope\":106,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"mapping(address => bool)\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"mapping(address => bool)\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"type\":\"address\"},\"id\":102,\"name\":\"ElementaryTypeName\",\"src\":\"1042:7:1\"},{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":103,\"name\":\"ElementaryTypeName\",\"src\":\"1051:4:1\"}],\"id\":104,\"name\":\"Mapping\",\"src\":\"1034:22:1\"}],\"id\":105,\"name\":\"VariableDeclaration\",\"src\":\"1034:29:1\"}],\"id\":106,\"name\":\"StructDefinition\",\"src\":\"883:215:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"typeOfVote\",\"scope\":501,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":107,\"name\":\"ElementaryTypeName\",\"src\":\"1104:4:1\"}],\"id\":108,\"name\":\"VariableDeclaration\",\"src\":\"1104:15:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"8ab66a90\",\"mutability\":\"mutable\",\"name\":\"candidates\",\"scope\":501,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"mapping(address => struct Vote.candidate)\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"type\":\"mapping(address => struct Vote.candidate)\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"type\":\"address\"},\"id\":109,\"name\":\"ElementaryTypeName\",\"src\":\"1222:7:1\"},{\"attributes\":{\"name\":\"candidate\",\"referencedDeclaration\":74,\"type\":\"struct Vote.candidate\"},\"id\":110,\"name\":\"UserDefinedTypeName\",\"src\":\"1233:9:1\"}],\"id\":111,\"name\":\"Mapping\",\"src\":\"1214:29:1\"}],\"id\":112,\"name\":\"VariableDeclaration\",\"src\":\"1214:47:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"7432e63a\",\"mutability\":\"mutable\",\"name\":\"candidatesAddresses\",\"scope\":501,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":113,\"name\":\"ElementaryTypeName\",\"src\":\"1383:7:1\"}],\"id\":114,\"name\":\"ArrayTypeName\",\"src\":\"1383:9:1\"}],\"id\":115,\"name\":\"VariableDeclaration\",\"src\":\"1383:36:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"fcae83a7\",\"mutability\":\"mutable\",\"name\":\"currentElection\",\"scope\":501,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"struct Vote.election\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"name\":\"election\",\"referencedDeclaration\":91,\"type\":\"struct Vote.election\"},\"id\":116,\"name\":\"UserDefinedTypeName\",\"src\":\"1457:8:1\"}],\"id\":117,\"name\":\"VariableDeclaration\",\"src\":\"1457:31:1\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"691a675c\",\"mutability\":\"mutable\",\"name\":\"currentPetition\",\"scope\":501,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"struct Vote.petition\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"name\":\"petition\",\"referencedDeclaration\":106,\"type\":\"struct Vote.petition\"},\"id\":118,\"name\":\"UserDefinedTypeName\",\"src\":\"1495:8:1\"}],\"id\":119,\"name\":\"VariableDeclaration\",\"src\":\"1495:31:1\"},{\"attributes\":{\"implemented\":true,\"isConstructor\":true,\"kind\":\"constructor\",\"modifiers\":[null],\"name\":\"\",\"scope\":501,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"managerOfVote\",\"scope\":141,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":120,\"name\":\"ElementaryTypeName\",\"src\":\"1548:7:1\"}],\"id\":121,\"name\":\"VariableDeclaration\",\"src\":\"1548:21:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"typeOf\",\"scope\":141,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":122,\"name\":\"ElementaryTypeName\",\"src\":\"1571:4:1\"}],\"id\":123,\"name\":\"VariableDeclaration\",\"src\":\"1571:11:1\"}],\"id\":124,\"name\":\"ParameterList\",\"src\":\"1547:36:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":125,\"name\":\"ParameterList\",\"src\":\"1583:0:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"address\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":40,\"type\":\"address\",\"value\":\"manager\"},\"id\":126,\"name\":\"Identifier\",\"src\":\"1652:7:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":121,\"type\":\"address\",\"value\":\"managerOfVote\"},\"id\":127,\"name\":\"Identifier\",\"src\":\"1662:13:1\"}],\"id\":128,\"name\":\"Assignment\",\"src\":\"1652:23:1\"}],\"id\":129,\"name\":\"ExpressionStatement\",\"src\":\"1652:23:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":108,\"type\":\"uint256\",\"value\":\"typeOfVote\"},\"id\":130,\"name\":\"Identifier\",\"src\":\"1686:10:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"uint8\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"hexvalue\":\"30\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 0\",\"value\":\"0\"},\"id\":131,\"name\":\"Literal\",\"src\":\"1700:1:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":123,\"type\":\"uint256\",\"value\":\"typeOf\"},\"id\":132,\"name\":\"Identifier\",\"src\":\"1705:6:1\"}],\"id\":133,\"name\":\"BinaryOperation\",\"src\":\"1700:11:1\"}],\"id\":134,\"name\":\"TupleExpression\",\"src\":\"1699:13:1\"},{\"attributes\":{\"hexvalue\":\"30\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 0\",\"value\":\"0\"},\"id\":135,\"name\":\"Literal\",\"src\":\"1715:1:1\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":136,\"name\":\"Literal\",\"src\":\"1719:1:1\"}],\"id\":137,\"name\":\"Conditional\",\"src\":\"1699:21:1\"}],\"id\":138,\"name\":\"Assignment\",\"src\":\"1686:34:1\"}],\"id\":139,\"name\":\"ExpressionStatement\",\"src\":\"1686:34:1\"}],\"id\":140,\"name\":\"Block\",\"src\":\"1583:145:1\"}],\"id\":141,\"name\":\"FunctionDefinition\",\"src\":\"1535:193:1\"},{\"attributes\":{\"functionSelector\":\"dcfda00f\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"editElection\",\"scope\":501,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"title\",\"scope\":193,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":142,\"name\":\"ElementaryTypeName\",\"src\":\"1759:6:1\"}],\"id\":143,\"name\":\"VariableDeclaration\",\"src\":\"1759:19:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"startDate\",\"scope\":193,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint256\",\"type\":\"uint256\"},\"id\":144,\"name\":\"ElementaryTypeName\",\"src\":\"1780:7:1\"}],\"id\":145,\"name\":\"VariableDeclaration\",\"src\":\"1780:17:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"endDate\",\"scope\":193,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint256\",\"type\":\"uint256\"},\"id\":146,\"name\":\"ElementaryTypeName\",\"src\":\"1799:7:1\"}],\"id\":147,\"name\":\"VariableDeclaration\",\"src\":\"1799:15:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":193,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":148,\"name\":\"ElementaryTypeName\",\"src\":\"1816:6:1\"}],\"id\":149,\"name\":\"VariableDeclaration\",\"src\":\"1816:25:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"typeOfElection\",\"scope\":193,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":150,\"name\":\"ElementaryTypeName\",\"src\":\"1843:6:1\"}],\"id\":151,\"name\":\"VariableDeclaration\",\"src\":\"1843:28:1\"}],\"id\":152,\"name\":\"ParameterList\",\"src\":\"1758:114:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":157,\"name\":\"ParameterList\",\"src\":\"1909:0:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":480,\"type\":\"modifier ()\",\"value\":\"restricted\"},\"id\":153,\"name\":\"Identifier\",\"src\":\"1885:10:1\"}],\"id\":154,\"name\":\"ModifierInvocation\",\"src\":\"1885:10:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":490,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":155,\"name\":\"Identifier\",\"src\":\"1896:12:1\"}],\"id\":156,\"name\":\"ModifierInvocation\",\"src\":\"1896:12:1\"},{\"children\":[{\"attributes\":{\"assignments\":[159]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"e\",\"scope\":192,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct Vote.election\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"election\",\"referencedDeclaration\":91,\"type\":\"struct Vote.election\"},\"id\":158,\"name\":\"UserDefinedTypeName\",\"src\":\"1920:8:1\"}],\"id\":159,\"name\":\"VariableDeclaration\",\"src\":\"1920:18:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":117,\"type\":\"struct Vote.election storage ref\",\"value\":\"currentElection\"},\"id\":160,\"name\":\"Identifier\",\"src\":\"1941:15:1\"}],\"id\":161,\"name\":\"VariableDeclarationStatement\",\"src\":\"1920:36:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"title\",\"referencedDeclaration\":76,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":159,\"type\":\"struct Vote.election storage pointer\",\"value\":\"e\"},\"id\":162,\"name\":\"Identifier\",\"src\":\"1967:1:1\"}],\"id\":164,\"name\":\"MemberAccess\",\"src\":\"1967:7:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":143,\"type\":\"string memory\",\"value\":\"title\"},\"id\":165,\"name\":\"Identifier\",\"src\":\"1977:5:1\"}],\"id\":166,\"name\":\"Assignment\",\"src\":\"1967:15:1\"}],\"id\":167,\"name\":\"ExpressionStatement\",\"src\":\"1967:15:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"startDate\",\"referencedDeclaration\":78,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":159,\"type\":\"struct Vote.election storage pointer\",\"value\":\"e\"},\"id\":168,\"name\":\"Identifier\",\"src\":\"1993:1:1\"}],\"id\":170,\"name\":\"MemberAccess\",\"src\":\"1993:11:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":145,\"type\":\"uint256\",\"value\":\"startDate\"},\"id\":171,\"name\":\"Identifier\",\"src\":\"2007:9:1\"}],\"id\":172,\"name\":\"Assignment\",\"src\":\"1993:23:1\"}],\"id\":173,\"name\":\"ExpressionStatement\",\"src\":\"1993:23:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"endDate\",\"referencedDeclaration\":80,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":159,\"type\":\"struct Vote.election storage pointer\",\"value\":\"e\"},\"id\":174,\"name\":\"Identifier\",\"src\":\"2027:1:1\"}],\"id\":176,\"name\":\"MemberAccess\",\"src\":\"2027:9:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":147,\"type\":\"uint256\",\"value\":\"endDate\"},\"id\":177,\"name\":\"Identifier\",\"src\":\"2039:7:1\"}],\"id\":178,\"name\":\"Assignment\",\"src\":\"2027:19:1\"}],\"id\":179,\"name\":\"ExpressionStatement\",\"src\":\"2027:19:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"description\",\"referencedDeclaration\":82,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":159,\"type\":\"struct Vote.election storage pointer\",\"value\":\"e\"},\"id\":180,\"name\":\"Identifier\",\"src\":\"2057:1:1\"}],\"id\":182,\"name\":\"MemberAccess\",\"src\":\"2057:13:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":149,\"type\":\"string memory\",\"value\":\"description\"},\"id\":183,\"name\":\"Identifier\",\"src\":\"2073:11:1\"}],\"id\":184,\"name\":\"Assignment\",\"src\":\"2057:27:1\"}],\"id\":185,\"name\":\"ExpressionStatement\",\"src\":\"2057:27:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"typeOfElection\",\"referencedDeclaration\":86,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":159,\"type\":\"struct Vote.election storage pointer\",\"value\":\"e\"},\"id\":186,\"name\":\"Identifier\",\"src\":\"2095:1:1\"}],\"id\":188,\"name\":\"MemberAccess\",\"src\":\"2095:16:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":151,\"type\":\"string memory\",\"value\":\"typeOfElection\"},\"id\":189,\"name\":\"Identifier\",\"src\":\"2114:14:1\"}],\"id\":190,\"name\":\"Assignment\",\"src\":\"2095:33:1\"}],\"id\":191,\"name\":\"ExpressionStatement\",\"src\":\"2095:33:1\"}],\"id\":192,\"name\":\"Block\",\"src\":\"1909:227:1\"}],\"id\":193,\"name\":\"FunctionDefinition\",\"src\":\"1736:400:1\"},{\"attributes\":{\"functionSelector\":\"67127e43\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"editPetition\",\"scope\":501,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"title\",\"scope\":237,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":194,\"name\":\"ElementaryTypeName\",\"src\":\"2167:6:1\"}],\"id\":195,\"name\":\"VariableDeclaration\",\"src\":\"2167:19:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"startDate\",\"scope\":237,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint256\",\"type\":\"uint256\"},\"id\":196,\"name\":\"ElementaryTypeName\",\"src\":\"2188:7:1\"}],\"id\":197,\"name\":\"VariableDeclaration\",\"src\":\"2188:17:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"endDate\",\"scope\":237,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint256\",\"type\":\"uint256\"},\"id\":198,\"name\":\"ElementaryTypeName\",\"src\":\"2207:7:1\"}],\"id\":199,\"name\":\"VariableDeclaration\",\"src\":\"2207:15:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":237,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":200,\"name\":\"ElementaryTypeName\",\"src\":\"2224:6:1\"}],\"id\":201,\"name\":\"VariableDeclaration\",\"src\":\"2224:25:1\"}],\"id\":202,\"name\":\"ParameterList\",\"src\":\"2166:84:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":207,\"name\":\"ParameterList\",\"src\":\"2287:0:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":480,\"type\":\"modifier ()\",\"value\":\"restricted\"},\"id\":203,\"name\":\"Identifier\",\"src\":\"2263:10:1\"}],\"id\":204,\"name\":\"ModifierInvocation\",\"src\":\"2263:10:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":500,\"type\":\"modifier ()\",\"value\":\"typePetition\"},\"id\":205,\"name\":\"Identifier\",\"src\":\"2274:12:1\"}],\"id\":206,\"name\":\"ModifierInvocation\",\"src\":\"2274:12:1\"},{\"children\":[{\"attributes\":{\"assignments\":[209]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"p\",\"scope\":236,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct Vote.petition\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"petition\",\"referencedDeclaration\":106,\"type\":\"struct Vote.petition\"},\"id\":208,\"name\":\"UserDefinedTypeName\",\"src\":\"2298:8:1\"}],\"id\":209,\"name\":\"VariableDeclaration\",\"src\":\"2298:18:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":119,\"type\":\"struct Vote.petition storage ref\",\"value\":\"currentPetition\"},\"id\":210,\"name\":\"Identifier\",\"src\":\"2319:15:1\"}],\"id\":211,\"name\":\"VariableDeclarationStatement\",\"src\":\"2298:36:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"title\",\"referencedDeclaration\":93,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":209,\"type\":\"struct Vote.petition storage pointer\",\"value\":\"p\"},\"id\":212,\"name\":\"Identifier\",\"src\":\"2345:1:1\"}],\"id\":214,\"name\":\"MemberAccess\",\"src\":\"2345:7:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":195,\"type\":\"string memory\",\"value\":\"title\"},\"id\":215,\"name\":\"Identifier\",\"src\":\"2355:5:1\"}],\"id\":216,\"name\":\"Assignment\",\"src\":\"2345:15:1\"}],\"id\":217,\"name\":\"ExpressionStatement\",\"src\":\"2345:15:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"startDate\",\"referencedDeclaration\":95,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":209,\"type\":\"struct Vote.petition storage pointer\",\"value\":\"p\"},\"id\":218,\"name\":\"Identifier\",\"src\":\"2371:1:1\"}],\"id\":220,\"name\":\"MemberAccess\",\"src\":\"2371:11:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":197,\"type\":\"uint256\",\"value\":\"startDate\"},\"id\":221,\"name\":\"Identifier\",\"src\":\"2385:9:1\"}],\"id\":222,\"name\":\"Assignment\",\"src\":\"2371:23:1\"}],\"id\":223,\"name\":\"ExpressionStatement\",\"src\":\"2371:23:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"endDate\",\"referencedDeclaration\":97,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":209,\"type\":\"struct Vote.petition storage pointer\",\"value\":\"p\"},\"id\":224,\"name\":\"Identifier\",\"src\":\"2405:1:1\"}],\"id\":226,\"name\":\"MemberAccess\",\"src\":\"2405:9:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":199,\"type\":\"uint256\",\"value\":\"endDate\"},\"id\":227,\"name\":\"Identifier\",\"src\":\"2417:7:1\"}],\"id\":228,\"name\":\"Assignment\",\"src\":\"2405:19:1\"}],\"id\":229,\"name\":\"ExpressionStatement\",\"src\":\"2405:19:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"description\",\"referencedDeclaration\":99,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":209,\"type\":\"struct Vote.petition storage pointer\",\"value\":\"p\"},\"id\":230,\"name\":\"Identifier\",\"src\":\"2435:1:1\"}],\"id\":232,\"name\":\"MemberAccess\",\"src\":\"2435:13:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":201,\"type\":\"string memory\",\"value\":\"description\"},\"id\":233,\"name\":\"Identifier\",\"src\":\"2451:11:1\"}],\"id\":234,\"name\":\"Assignment\",\"src\":\"2435:27:1\"}],\"id\":235,\"name\":\"ExpressionStatement\",\"src\":\"2435:27:1\"}],\"id\":236,\"name\":\"Block\",\"src\":\"2287:183:1\"}],\"id\":237,\"name\":\"FunctionDefinition\",\"src\":\"2144:326:1\"},{\"attributes\":{\"functionSelector\":\"da3550ee\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"voteFor\",\"scope\":501,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"candidateAddress\",\"scope\":296,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":238,\"name\":\"ElementaryTypeName\",\"src\":\"2518:7:1\"}],\"id\":239,\"name\":\"VariableDeclaration\",\"src\":\"2518:24:1\"}],\"id\":240,\"name\":\"ParameterList\",\"src\":\"2517:26:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":243,\"name\":\"ParameterList\",\"src\":\"2563:0:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":490,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":241,\"name\":\"Identifier\",\"src\":\"2551:12:1\"}],\"id\":242,\"name\":\"ModifierInvocation\",\"src\":\"2551:12:1\"},{\"children\":[{\"attributes\":{},\"children\":[{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"voters\",\"referencedDeclaration\":90,\"type\":\"mapping(address => bool)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":117,\"type\":\"struct Vote.election storage ref\",\"value\":\"currentElection\"},\"id\":244,\"name\":\"Identifier\",\"src\":\"2622:15:1\"}],\"id\":245,\"name\":\"MemberAccess\",\"src\":\"2622:22:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":246,\"name\":\"Identifier\",\"src\":\"2645:3:1\"}],\"id\":247,\"name\":\"MemberAccess\",\"src\":\"2645:10:1\"}],\"id\":248,\"name\":\"IndexAccess\",\"src\":\"2622:34:1\"},{\"attributes\":{\"hexvalue\":\"66616c7365\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"bool\",\"type\":\"bool\",\"value\":\"false\"},\"id\":249,\"name\":\"Literal\",\"src\":\"2660:5:1\"}],\"id\":250,\"name\":\"BinaryOperation\",\"src\":\"2622:43:1\"},{\"children\":[{\"attributes\":{},\"children\":[{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"!=\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"candidateAddr\",\"referencedDeclaration\":64,\"type\":\"address\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":251,\"name\":\"Identifier\",\"src\":\"2684:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":239,\"type\":\"address\",\"value\":\"candidateAddress\"},\"id\":252,\"name\":\"Identifier\",\"src\":\"2695:16:1\"}],\"id\":253,\"name\":\"IndexAccess\",\"src\":\"2684:28:1\"}],\"id\":254,\"name\":\"MemberAccess\",\"src\":\"2684:42:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"address payable\",\"type_conversion\":true},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"type\":\"type(address)\"},\"children\":[{\"attributes\":{\"name\":\"address\"},\"id\":255,\"name\":\"ElementaryTypeName\",\"src\":\"2730:7:1\"}],\"id\":256,\"name\":\"ElementaryTypeNameExpression\",\"src\":\"2730:7:1\"},{\"attributes\":{\"hexvalue\":\"30\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 0\",\"value\":\"0\"},\"id\":257,\"name\":\"Literal\",\"src\":\"2738:1:1\"}],\"id\":258,\"name\":\"FunctionCall\",\"src\":\"2730:10:1\"}],\"id\":259,\"name\":\"BinaryOperation\",\"src\":\"2684:56:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"voters\",\"referencedDeclaration\":90,\"type\":\"mapping(address => bool)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":117,\"type\":\"struct Vote.election storage ref\",\"value\":\"currentElection\"},\"id\":260,\"name\":\"Identifier\",\"src\":\"2760:15:1\"}],\"id\":264,\"name\":\"MemberAccess\",\"src\":\"2760:22:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":262,\"name\":\"Identifier\",\"src\":\"2783:3:1\"}],\"id\":263,\"name\":\"MemberAccess\",\"src\":\"2783:10:1\"}],\"id\":265,\"name\":\"IndexAccess\",\"src\":\"2760:34:1\"},{\"attributes\":{\"hexvalue\":\"74727565\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"bool\",\"type\":\"bool\",\"value\":\"true\"},\"id\":266,\"name\":\"Literal\",\"src\":\"2798:4:1\"}],\"id\":267,\"name\":\"Assignment\",\"src\":\"2760:42:1\"}],\"id\":268,\"name\":\"ExpressionStatement\",\"src\":\"2760:42:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"++\",\"prefix\":false,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"numVotes\",\"referencedDeclaration\":84,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":117,\"type\":\"struct Vote.election storage ref\",\"value\":\"currentElection\"},\"id\":269,\"name\":\"Identifier\",\"src\":\"2821:15:1\"}],\"id\":271,\"name\":\"MemberAccess\",\"src\":\"2821:24:1\"}],\"id\":272,\"name\":\"UnaryOperation\",\"src\":\"2821:26:1\"}],\"id\":273,\"name\":\"ExpressionStatement\",\"src\":\"2821:26:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"++\",\"prefix\":false,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"numVotes\",\"referencedDeclaration\":66,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":274,\"name\":\"Identifier\",\"src\":\"2867:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":239,\"type\":\"address\",\"value\":\"candidateAddress\"},\"id\":275,\"name\":\"Identifier\",\"src\":\"2878:16:1\"}],\"id\":276,\"name\":\"IndexAccess\",\"src\":\"2867:28:1\"}],\"id\":277,\"name\":\"TupleExpression\",\"src\":\"2866:30:1\"}],\"id\":278,\"name\":\"MemberAccess\",\"src\":\"2866:39:1\"}],\"id\":279,\"name\":\"UnaryOperation\",\"src\":\"2866:41:1\"}],\"id\":280,\"name\":\"ExpressionStatement\",\"src\":\"2866:41:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"push\",\"type\":\"function (address)\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"voters\",\"referencedDeclaration\":69,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":281,\"name\":\"Identifier\",\"src\":\"2927:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":239,\"type\":\"address\",\"value\":\"candidateAddress\"},\"id\":282,\"name\":\"Identifier\",\"src\":\"2938:16:1\"}],\"id\":283,\"name\":\"IndexAccess\",\"src\":\"2927:28:1\"}],\"id\":284,\"name\":\"TupleExpression\",\"src\":\"2926:30:1\"}],\"id\":285,\"name\":\"MemberAccess\",\"src\":\"2926:37:1\"}],\"id\":286,\"name\":\"MemberAccess\",\"src\":\"2926:42:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":287,\"name\":\"Identifier\",\"src\":\"2969:3:1\"}],\"id\":288,\"name\":\"MemberAccess\",\"src\":\"2969:10:1\"}],\"id\":289,\"name\":\"FunctionCall\",\"src\":\"2926:54:1\"}],\"id\":290,\"name\":\"ExpressionStatement\",\"src\":\"2926:54:1\"}],\"id\":291,\"name\":\"Block\",\"src\":\"2741:255:1\"}],\"id\":292,\"name\":\"IfStatement\",\"src\":\"2681:315:1\"}],\"id\":293,\"name\":\"Block\",\"src\":\"2666:341:1\"}],\"id\":294,\"name\":\"IfStatement\",\"src\":\"2619:388:1\"}],\"id\":295,\"name\":\"Block\",\"src\":\"2563:451:1\"}],\"id\":296,\"name\":\"FunctionDefinition\",\"src\":\"2501:513:1\"},{\"attributes\":{\"functionSelector\":\"869eae23\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"enterElection\",\"scope\":501,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"name\",\"scope\":348,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":297,\"name\":\"ElementaryTypeName\",\"src\":\"3071:6:1\"}],\"id\":298,\"name\":\"VariableDeclaration\",\"src\":\"3071:18:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":348,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":299,\"name\":\"ElementaryTypeName\",\"src\":\"3091:6:1\"}],\"id\":300,\"name\":\"VariableDeclaration\",\"src\":\"3091:25:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"current_date\",\"scope\":348,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint256\",\"type\":\"uint256\"},\"id\":301,\"name\":\"ElementaryTypeName\",\"src\":\"3117:7:1\"}],\"id\":302,\"name\":\"VariableDeclaration\",\"src\":\"3117:20:1\"}],\"id\":303,\"name\":\"ParameterList\",\"src\":\"3070:68:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":306,\"name\":\"ParameterList\",\"src\":\"3164:0:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":490,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":304,\"name\":\"Identifier\",\"src\":\"3151:12:1\"}],\"id\":305,\"name\":\"ModifierInvocation\",\"src\":\"3151:12:1\"},{\"children\":[{\"attributes\":{\"assignments\":[308]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"currentCandidate\",\"scope\":347,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct Vote.candidate\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"candidate\",\"referencedDeclaration\":74,\"type\":\"struct Vote.candidate\"},\"id\":307,\"name\":\"UserDefinedTypeName\",\"src\":\"3334:9:1\"}],\"id\":308,\"name\":\"VariableDeclaration\",\"src\":\"3334:34:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":309,\"name\":\"Identifier\",\"src\":\"3371:10:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":310,\"name\":\"Identifier\",\"src\":\"3382:3:1\"}],\"id\":311,\"name\":\"MemberAccess\",\"src\":\"3382:10:1\"}],\"id\":312,\"name\":\"IndexAccess\",\"src\":\"3371:22:1\"}],\"id\":313,\"name\":\"VariableDeclarationStatement\",\"src\":\"3334:59:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"name\",\"referencedDeclaration\":71,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":308,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":314,\"name\":\"Identifier\",\"src\":\"3404:16:1\"}],\"id\":316,\"name\":\"MemberAccess\",\"src\":\"3404:21:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":298,\"type\":\"string memory\",\"value\":\"name\"},\"id\":317,\"name\":\"Identifier\",\"src\":\"3428:4:1\"}],\"id\":318,\"name\":\"Assignment\",\"src\":\"3404:28:1\"}],\"id\":319,\"name\":\"ExpressionStatement\",\"src\":\"3404:28:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"description\",\"referencedDeclaration\":73,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":308,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":320,\"name\":\"Identifier\",\"src\":\"3443:16:1\"}],\"id\":322,\"name\":\"MemberAccess\",\"src\":\"3443:28:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":300,\"type\":\"string memory\",\"value\":\"description\"},\"id\":323,\"name\":\"Identifier\",\"src\":\"3474:11:1\"}],\"id\":324,\"name\":\"Assignment\",\"src\":\"3443:42:1\"}],\"id\":325,\"name\":\"ExpressionStatement\",\"src\":\"3443:42:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"address\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"candidateAddr\",\"referencedDeclaration\":64,\"type\":\"address\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":308,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":326,\"name\":\"Identifier\",\"src\":\"3496:16:1\"}],\"id\":328,\"name\":\"MemberAccess\",\"src\":\"3496:30:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":329,\"name\":\"Identifier\",\"src\":\"3528:3:1\"}],\"id\":330,\"name\":\"MemberAccess\",\"src\":\"3528:10:1\"}],\"id\":331,\"name\":\"Assignment\",\"src\":\"3496:42:1\"}],\"id\":332,\"name\":\"ExpressionStatement\",\"src\":\"3496:42:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"voters\",\"referencedDeclaration\":69,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":308,\"type\":\"struct Vote.candidate storage pointer\",\"value\":\"currentCandidate\"},\"id\":333,\"name\":\"Identifier\",\"src\":\"3549:16:1\"}],\"id\":335,\"name\":\"MemberAccess\",\"src\":\"3549:23:1\"}],\"id\":336,\"name\":\"ExpressionStatement\",\"src\":\"3549:23:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"++\",\"prefix\":false,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":42,\"type\":\"uint256\",\"value\":\"candidatesCount\"},\"id\":337,\"name\":\"Identifier\",\"src\":\"3634:15:1\"}],\"id\":338,\"name\":\"UnaryOperation\",\"src\":\"3634:17:1\"}],\"id\":339,\"name\":\"ExpressionStatement\",\"src\":\"3634:17:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"push\",\"type\":\"function (address)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"address[] storage ref\",\"value\":\"candidatesAddresses\"},\"id\":340,\"name\":\"Identifier\",\"src\":\"3662:19:1\"}],\"id\":342,\"name\":\"MemberAccess\",\"src\":\"3662:24:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":343,\"name\":\"Identifier\",\"src\":\"3687:3:1\"}],\"id\":344,\"name\":\"MemberAccess\",\"src\":\"3687:10:1\"}],\"id\":345,\"name\":\"FunctionCall\",\"src\":\"3662:36:1\"}],\"id\":346,\"name\":\"ExpressionStatement\",\"src\":\"3662:36:1\"}],\"id\":347,\"name\":\"Block\",\"src\":\"3164:542:1\"}],\"id\":348,\"name\":\"FunctionDefinition\",\"src\":\"3048:658:1\"},{\"attributes\":{\"functionSelector\":\"407bba4a\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"leaveElection\",\"scope\":501,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":349,\"name\":\"ParameterList\",\"src\":\"3803:2:1\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":352,\"name\":\"ParameterList\",\"src\":\"3854:0:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":490,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":350,\"name\":\"Identifier\",\"src\":\"3841:12:1\"}],\"id\":351,\"name\":\"ModifierInvocation\",\"src\":\"3841:12:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"delete\",\"prefix\":true,\"type\":\"tuple()\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":353,\"name\":\"Identifier\",\"src\":\"4060:10:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":354,\"name\":\"Identifier\",\"src\":\"4071:3:1\"}],\"id\":355,\"name\":\"MemberAccess\",\"src\":\"4071:10:1\"}],\"id\":356,\"name\":\"IndexAccess\",\"src\":\"4060:22:1\"}],\"id\":357,\"name\":\"UnaryOperation\",\"src\":\"4053:29:1\"}],\"id\":358,\"name\":\"ExpressionStatement\",\"src\":\"4053:29:1\"},{\"children\":[{\"attributes\":{\"assignments\":[360]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"i\",\"scope\":396,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":359,\"name\":\"ElementaryTypeName\",\"src\":\"4098:4:1\"}],\"id\":360,\"name\":\"VariableDeclaration\",\"src\":\"4098:6:1\"},{\"attributes\":{\"hexvalue\":\"30\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 0\",\"value\":\"0\"},\"id\":361,\"name\":\"Literal\",\"src\":\"4107:1:1\"}],\"id\":362,\"name\":\"VariableDeclarationStatement\",\"src\":\"4098:10:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"<\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":360,\"type\":\"uint256\",\"value\":\"i\"},\"id\":363,\"name\":\"Identifier\",\"src\":\"4110:1:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"length\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"address[] storage ref\",\"value\":\"candidatesAddresses\"},\"id\":364,\"name\":\"Identifier\",\"src\":\"4112:19:1\"}],\"id\":365,\"name\":\"MemberAccess\",\"src\":\"4112:26:1\"}],\"id\":366,\"name\":\"BinaryOperation\",\"src\":\"4110:28:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"++\",\"prefix\":false,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":360,\"type\":\"uint256\",\"value\":\"i\"},\"id\":367,\"name\":\"Identifier\",\"src\":\"4140:1:1\"}],\"id\":368,\"name\":\"UnaryOperation\",\"src\":\"4140:3:1\"}],\"id\":369,\"name\":\"ExpressionStatement\",\"src\":\"4140:3:1\"},{\"children\":[{\"attributes\":{},\"children\":[{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":370,\"name\":\"Identifier\",\"src\":\"4162:3:1\"}],\"id\":371,\"name\":\"MemberAccess\",\"src\":\"4162:10:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"address\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"address[] storage ref\",\"value\":\"candidatesAddresses\"},\"id\":372,\"name\":\"Identifier\",\"src\":\"4174:19:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":360,\"type\":\"uint256\",\"value\":\"i\"},\"id\":373,\"name\":\"Identifier\",\"src\":\"4194:1:1\"}],\"id\":374,\"name\":\"IndexAccess\",\"src\":\"4174:22:1\"}],\"id\":375,\"name\":\"BinaryOperation\",\"src\":\"4162:34:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"address\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"type\":\"address\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"address[] storage ref\",\"value\":\"candidatesAddresses\"},\"id\":376,\"name\":\"Identifier\",\"src\":\"4216:19:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":360,\"type\":\"uint256\",\"value\":\"i\"},\"id\":377,\"name\":\"Identifier\",\"src\":\"4236:1:1\"}],\"id\":378,\"name\":\"IndexAccess\",\"src\":\"4216:22:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"address\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"address[] storage ref\",\"value\":\"candidatesAddresses\"},\"id\":379,\"name\":\"Identifier\",\"src\":\"4239:19:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"-\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"length\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"address[] storage ref\",\"value\":\"candidatesAddresses\"},\"id\":380,\"name\":\"Identifier\",\"src\":\"4259:19:1\"}],\"id\":381,\"name\":\"MemberAccess\",\"src\":\"4259:26:1\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":382,\"name\":\"Literal\",\"src\":\"4286:1:1\"}],\"id\":383,\"name\":\"BinaryOperation\",\"src\":\"4259:28:1\"}],\"id\":384,\"name\":\"IndexAccess\",\"src\":\"4239:49:1\"}],\"id\":385,\"name\":\"Assignment\",\"src\":\"4216:72:1\"}],\"id\":386,\"name\":\"ExpressionStatement\",\"src\":\"4216:72:1\"},{\"children\":[{\"attributes\":{\"arguments\":[null],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[null],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"pop\",\"type\":\"function ()\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"address[] storage ref\",\"value\":\"candidatesAddresses\"},\"id\":387,\"name\":\"Identifier\",\"src\":\"4307:19:1\"}],\"id\":389,\"name\":\"MemberAccess\",\"src\":\"4307:23:1\"}],\"id\":390,\"name\":\"FunctionCall\",\"src\":\"4307:25:1\"}],\"id\":391,\"name\":\"ExpressionStatement\",\"src\":\"4307:25:1\"},{\"id\":392,\"name\":\"Break\",\"src\":\"4351:5:1\"}],\"id\":393,\"name\":\"Block\",\"src\":\"4197:175:1\"}],\"id\":394,\"name\":\"IfStatement\",\"src\":\"4159:213:1\"}],\"id\":395,\"name\":\"Block\",\"src\":\"4144:239:1\"}],\"id\":396,\"name\":\"ForStatement\",\"src\":\"4093:290:1\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"--\",\"prefix\":false,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":42,\"type\":\"uint256\",\"value\":\"candidatesCount\"},\"id\":397,\"name\":\"Identifier\",\"src\":\"4393:15:1\"}],\"id\":398,\"name\":\"UnaryOperation\",\"src\":\"4393:17:1\"}],\"id\":399,\"name\":\"ExpressionStatement\",\"src\":\"4393:17:1\"}],\"id\":400,\"name\":\"Block\",\"src\":\"3854:564:1\"}],\"id\":401,\"name\":\"FunctionDefinition\",\"src\":\"3781:637:1\"},{\"attributes\":{\"functionSelector\":\"3f8cab7f\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"getCandidatesAddresses\",\"scope\":501,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":402,\"name\":\"ParameterList\",\"src\":\"4472:2:1\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":412,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":405,\"name\":\"ElementaryTypeName\",\"src\":\"4509:7:1\"}],\"id\":406,\"name\":\"ArrayTypeName\",\"src\":\"4509:9:1\"}],\"id\":407,\"name\":\"VariableDeclaration\",\"src\":\"4509:16:1\"}],\"id\":408,\"name\":\"ParameterList\",\"src\":\"4508:18:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":490,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":403,\"name\":\"Identifier\",\"src\":\"4487:12:1\"}],\"id\":404,\"name\":\"ModifierInvocation\",\"src\":\"4487:12:1\"},{\"children\":[{\"attributes\":{\"functionReturnParameters\":408},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":115,\"type\":\"address[] storage ref\",\"value\":\"candidatesAddresses\"},\"id\":409,\"name\":\"Identifier\",\"src\":\"4545:19:1\"}],\"id\":410,\"name\":\"Return\",\"src\":\"4538:26:1\"}],\"id\":411,\"name\":\"Block\",\"src\":\"4527:45:1\"}],\"id\":412,\"name\":\"FunctionDefinition\",\"src\":\"4441:131:1\"},{\"attributes\":{\"functionSelector\":\"953ef76d\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"get_candidate\",\"scope\":501,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"candaddr\",\"scope\":434,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":413,\"name\":\"ElementaryTypeName\",\"src\":\"4601:7:1\"}],\"id\":414,\"name\":\"VariableDeclaration\",\"src\":\"4601:16:1\"}],\"id\":415,\"name\":\"ParameterList\",\"src\":\"4600:18:1\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":434,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":418,\"name\":\"ElementaryTypeName\",\"src\":\"4653:6:1\"}],\"id\":419,\"name\":\"VariableDeclaration\",\"src\":\"4653:13:1\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":434,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":420,\"name\":\"ElementaryTypeName\",\"src\":\"4668:6:1\"}],\"id\":421,\"name\":\"VariableDeclaration\",\"src\":\"4668:13:1\"}],\"id\":422,\"name\":\"ParameterList\",\"src\":\"4652:30:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":490,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":416,\"name\":\"Identifier\",\"src\":\"4631:12:1\"}],\"id\":417,\"name\":\"ModifierInvocation\",\"src\":\"4631:12:1\"},{\"children\":[{\"attributes\":{\"functionReturnParameters\":422},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"tuple(string storage ref,string storage ref)\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"name\",\"referencedDeclaration\":71,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":423,\"name\":\"Identifier\",\"src\":\"4701:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":414,\"type\":\"address\",\"value\":\"candaddr\"},\"id\":424,\"name\":\"Identifier\",\"src\":\"4712:8:1\"}],\"id\":425,\"name\":\"IndexAccess\",\"src\":\"4701:20:1\"}],\"id\":426,\"name\":\"MemberAccess\",\"src\":\"4701:25:1\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"description\",\"referencedDeclaration\":73,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":427,\"name\":\"Identifier\",\"src\":\"4728:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":414,\"type\":\"address\",\"value\":\"candaddr\"},\"id\":428,\"name\":\"Identifier\",\"src\":\"4739:8:1\"}],\"id\":429,\"name\":\"IndexAccess\",\"src\":\"4728:20:1\"}],\"id\":430,\"name\":\"MemberAccess\",\"src\":\"4728:32:1\"}],\"id\":431,\"name\":\"TupleExpression\",\"src\":\"4700:61:1\"}],\"id\":432,\"name\":\"Return\",\"src\":\"4694:67:1\"}],\"id\":433,\"name\":\"Block\",\"src\":\"4683:86:1\"}],\"id\":434,\"name\":\"FunctionDefinition\",\"src\":\"4578:191:1\"},{\"attributes\":{\"functionSelector\":\"95115447\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"getCandidateVoters\",\"scope\":501,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"candAddr\",\"scope\":452,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":435,\"name\":\"ElementaryTypeName\",\"src\":\"4803:7:1\"}],\"id\":436,\"name\":\"VariableDeclaration\",\"src\":\"4803:16:1\"}],\"id\":437,\"name\":\"ParameterList\",\"src\":\"4802:18:1\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":452,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":440,\"name\":\"ElementaryTypeName\",\"src\":\"4855:7:1\"}],\"id\":441,\"name\":\"ArrayTypeName\",\"src\":\"4855:9:1\"}],\"id\":442,\"name\":\"VariableDeclaration\",\"src\":\"4855:16:1\"}],\"id\":443,\"name\":\"ParameterList\",\"src\":\"4854:18:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":490,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":438,\"name\":\"Identifier\",\"src\":\"4833:12:1\"}],\"id\":439,\"name\":\"ModifierInvocation\",\"src\":\"4833:12:1\"},{\"children\":[{\"attributes\":{\"functionReturnParameters\":443},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"voters\",\"referencedDeclaration\":69,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct Vote.candidate storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":112,\"type\":\"mapping(address => struct Vote.candidate storage ref)\",\"value\":\"candidates\"},\"id\":444,\"name\":\"Identifier\",\"src\":\"4892:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":436,\"type\":\"address\",\"value\":\"candAddr\"},\"id\":445,\"name\":\"Identifier\",\"src\":\"4903:8:1\"}],\"id\":446,\"name\":\"IndexAccess\",\"src\":\"4892:20:1\"}],\"id\":447,\"name\":\"TupleExpression\",\"src\":\"4891:22:1\"}],\"id\":448,\"name\":\"MemberAccess\",\"src\":\"4891:29:1\"}],\"id\":449,\"name\":\"TupleExpression\",\"src\":\"4890:31:1\"}],\"id\":450,\"name\":\"Return\",\"src\":\"4884:37:1\"}],\"id\":451,\"name\":\"Block\",\"src\":\"4873:56:1\"}],\"id\":452,\"name\":\"FunctionDefinition\",\"src\":\"4775:154:1\"},{\"attributes\":{\"functionSelector\":\"e1c5fcc1\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"name\":\"getElectionVoter\",\"scope\":501,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"voterAddr\",\"scope\":469,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":453,\"name\":\"ElementaryTypeName\",\"src\":\"4961:7:1\"}],\"id\":454,\"name\":\"VariableDeclaration\",\"src\":\"4961:17:1\"}],\"id\":455,\"name\":\"ParameterList\",\"src\":\"4960:19:1\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":469,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"bool\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":458,\"name\":\"ElementaryTypeName\",\"src\":\"5014:4:1\"}],\"id\":459,\"name\":\"VariableDeclaration\",\"src\":\"5014:4:1\"}],\"id\":460,\"name\":\"ParameterList\",\"src\":\"5013:6:1\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":490,\"type\":\"modifier ()\",\"value\":\"typeElection\"},\"id\":456,\"name\":\"Identifier\",\"src\":\"4992:12:1\"}],\"id\":457,\"name\":\"ModifierInvocation\",\"src\":\"4992:12:1\"},{\"children\":[{\"attributes\":{\"functionReturnParameters\":460},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"mapping(address => bool)\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"voters\",\"referencedDeclaration\":90,\"type\":\"mapping(address => bool)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":117,\"type\":\"struct Vote.election storage ref\",\"value\":\"currentElection\"},\"id\":461,\"name\":\"Identifier\",\"src\":\"5040:15:1\"}],\"id\":462,\"name\":\"MemberAccess\",\"src\":\"5040:22:1\"}],\"id\":463,\"name\":\"TupleExpression\",\"src\":\"5039:24:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":454,\"type\":\"address\",\"value\":\"voterAddr\"},\"id\":464,\"name\":\"Identifier\",\"src\":\"5064:9:1\"}],\"id\":465,\"name\":\"IndexAccess\",\"src\":\"5039:35:1\"}],\"id\":466,\"name\":\"TupleExpression\",\"src\":\"5038:37:1\"}],\"id\":467,\"name\":\"Return\",\"src\":\"5031:44:1\"}],\"id\":468,\"name\":\"Block\",\"src\":\"5020:63:1\"}],\"id\":469,\"name\":\"FunctionDefinition\",\"src\":\"4935:148:1\"},{\"attributes\":{\"name\":\"restricted\",\"virtual\":false,\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":470,\"name\":\"ParameterList\",\"src\":\"5108:2:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"type\":\"function (bool) pure\",\"value\":\"require\"},\"id\":471,\"name\":\"Identifier\",\"src\":\"5122:7:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":472,\"name\":\"Identifier\",\"src\":\"5130:3:1\"}],\"id\":473,\"name\":\"MemberAccess\",\"src\":\"5130:10:1\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":40,\"type\":\"address\",\"value\":\"manager\"},\"id\":474,\"name\":\"Identifier\",\"src\":\"5144:7:1\"}],\"id\":475,\"name\":\"BinaryOperation\",\"src\":\"5130:21:1\"}],\"id\":476,\"name\":\"FunctionCall\",\"src\":\"5122:30:1\"}],\"id\":477,\"name\":\"ExpressionStatement\",\"src\":\"5122:30:1\"},{\"id\":478,\"name\":\"PlaceholderStatement\",\"src\":\"5163:1:1\"}],\"id\":479,\"name\":\"Block\",\"src\":\"5111:61:1\"}],\"id\":480,\"name\":\"ModifierDefinition\",\"src\":\"5089:83:1\"},{\"attributes\":{\"name\":\"typeElection\",\"virtual\":false,\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":481,\"name\":\"ParameterList\",\"src\":\"5199:2:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"type\":\"function (bool) pure\",\"value\":\"require\"},\"id\":482,\"name\":\"Identifier\",\"src\":\"5213:7:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":108,\"type\":\"uint256\",\"value\":\"typeOfVote\"},\"id\":483,\"name\":\"Identifier\",\"src\":\"5221:10:1\"},{\"attributes\":{\"hexvalue\":\"30\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 0\",\"value\":\"0\"},\"id\":484,\"name\":\"Literal\",\"src\":\"5235:1:1\"}],\"id\":485,\"name\":\"BinaryOperation\",\"src\":\"5221:15:1\"}],\"id\":486,\"name\":\"FunctionCall\",\"src\":\"5213:24:1\"}],\"id\":487,\"name\":\"ExpressionStatement\",\"src\":\"5213:24:1\"},{\"id\":488,\"name\":\"PlaceholderStatement\",\"src\":\"5248:1:1\"}],\"id\":489,\"name\":\"Block\",\"src\":\"5202:55:1\"}],\"id\":490,\"name\":\"ModifierDefinition\",\"src\":\"5178:79:1\"},{\"attributes\":{\"name\":\"typePetition\",\"virtual\":false,\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":491,\"name\":\"ParameterList\",\"src\":\"5284:2:1\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"type\":\"function (bool) pure\",\"value\":\"require\"},\"id\":492,\"name\":\"Identifier\",\"src\":\"5298:7:1\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":108,\"type\":\"uint256\",\"value\":\"typeOfVote\"},\"id\":493,\"name\":\"Identifier\",\"src\":\"5306:10:1\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":494,\"name\":\"Literal\",\"src\":\"5320:1:1\"}],\"id\":495,\"name\":\"BinaryOperation\",\"src\":\"5306:15:1\"}],\"id\":496,\"name\":\"FunctionCall\",\"src\":\"5298:24:1\"}],\"id\":497,\"name\":\"ExpressionStatement\",\"src\":\"5298:24:1\"},{\"id\":498,\"name\":\"PlaceholderStatement\",\"src\":\"5333:1:1\"}],\"id\":499,\"name\":\"Block\",\"src\":\"5287:55:1\"}],\"id\":500,\"name\":\"ModifierDefinition\",\"src\":\"5263:79:1\"}],\"id\":501,\"name\":\"ContractDefinition\",\"src\":\"68:5279:1\"}],\"id\":502,\"name\":\"SourceUnit\",\"src\":\"0:5349:1\"},\"compiler\":{\"name\":\"solc\",\"version\":\"0.7.4+commit.3f05b770.Emscripten.clang\"},\"networks\":{},\"schemaVersion\":\"3.3.3\",\"updatedAt\":\"2021-03-25T21:10:28.655Z\",\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}}");

/***/ }),

/***/ "./src/contracts/VoteFactory.json":
/*!****************************************!*\
  !*** ./src/contracts/VoteFactory.json ***!
  \****************************************/
/*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, immutableReferences, generatedSources, deployedGeneratedSources, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, networkType, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"contractName\":\"VoteFactory\",\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"deployedVotes\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"existingGroups\",\"outputs\":[{\"internalType\":\"uint32\",\"name\":\"\",\"type\":\"uint32\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"groupInfo\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"uint32\",\"name\":\"groupID\",\"type\":\"uint32\"}],\"name\":\"createGroup\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint32\",\"name\":\"groupID\",\"type\":\"uint32\"}],\"name\":\"registerGroup\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint32\",\"name\":\"indexGroup\",\"type\":\"uint32\"},{\"internalType\":\"uint32\",\"name\":\"indexMember\",\"type\":\"uint32\"},{\"internalType\":\"uint32\",\"name\":\"groupID\",\"type\":\"uint32\"}],\"name\":\"leaveGroup\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint32\",\"name\":\"groupID\",\"type\":\"uint32\"}],\"name\":\"isUserGroup\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[{\"internalType\":\"uint32\",\"name\":\"groupID\",\"type\":\"uint32\"}],\"name\":\"isGroup\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[{\"internalType\":\"uint32\",\"name\":\"index\",\"type\":\"uint32\"}],\"name\":\"getUserGroup\",\"outputs\":[{\"internalType\":\"uint32\",\"name\":\"\",\"type\":\"uint32\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[],\"name\":\"getUserAllGroups\",\"outputs\":[{\"internalType\":\"uint32[]\",\"name\":\"\",\"type\":\"uint32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[{\"internalType\":\"uint32\",\"name\":\"groupID\",\"type\":\"uint32\"}],\"name\":\"getAllMembers\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"id\",\"type\":\"uint8\"}],\"name\":\"getGroup\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[],\"name\":\"getExistingGroups\",\"outputs\":[{\"internalType\":\"uint32[]\",\"name\":\"\",\"type\":\"uint32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"email\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"password\",\"type\":\"string\"}],\"name\":\"registerUser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"typeOf\",\"type\":\"uint256\"}],\"name\":\"createVote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"password\",\"type\":\"string\"}],\"name\":\"loginUser\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"uint32[]\",\"name\":\"\",\"type\":\"uint32[]\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[],\"name\":\"getUser\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"uint32[]\",\"name\":\"\",\"type\":\"uint32[]\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[],\"name\":\"getDeployedVotes\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"a\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"b\",\"type\":\"string\"}],\"name\":\"compareStrings\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\",\"constant\":true}],\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.7.4+commit.3f05b770\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"a\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"b\\\",\\\"type\\\":\\\"string\\\"}],\\\"name\\\":\\\"compareStrings\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"pure\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint32\\\",\\\"name\\\":\\\"groupID\\\",\\\"type\\\":\\\"uint32\\\"}],\\\"name\\\":\\\"createGroup\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"typeOf\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"createVote\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"deployedVotes\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"existingGroups\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint32\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint32\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint32\\\",\\\"name\\\":\\\"groupID\\\",\\\"type\\\":\\\"uint32\\\"}],\\\"name\\\":\\\"getAllMembers\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address[]\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address[]\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"getDeployedVotes\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address[]\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address[]\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"getExistingGroups\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint32[]\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint32[]\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint8\\\",\\\"name\\\":\\\"id\\\",\\\"type\\\":\\\"uint8\\\"}],\\\"name\\\":\\\"getGroup\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"address[]\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address[]\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"getUser\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint32[]\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint32[]\\\"},{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"getUserAllGroups\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint32[]\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint32[]\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint32\\\",\\\"name\\\":\\\"index\\\",\\\"type\\\":\\\"uint32\\\"}],\\\"name\\\":\\\"getUserGroup\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint32\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint32\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"groupInfo\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"description\\\",\\\"type\\\":\\\"string\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint32\\\",\\\"name\\\":\\\"groupID\\\",\\\"type\\\":\\\"uint32\\\"}],\\\"name\\\":\\\"isGroup\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint32\\\",\\\"name\\\":\\\"groupID\\\",\\\"type\\\":\\\"uint32\\\"}],\\\"name\\\":\\\"isUserGroup\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint32\\\",\\\"name\\\":\\\"indexGroup\\\",\\\"type\\\":\\\"uint32\\\"},{\\\"internalType\\\":\\\"uint32\\\",\\\"name\\\":\\\"indexMember\\\",\\\"type\\\":\\\"uint32\\\"},{\\\"internalType\\\":\\\"uint32\\\",\\\"name\\\":\\\"groupID\\\",\\\"type\\\":\\\"uint32\\\"}],\\\"name\\\":\\\"leaveGroup\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"password\\\",\\\"type\\\":\\\"string\\\"}],\\\"name\\\":\\\"loginUser\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"uint32[]\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint32[]\\\"},{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint32\\\",\\\"name\\\":\\\"groupID\\\",\\\"type\\\":\\\"uint32\\\"}],\\\"name\\\":\\\"registerGroup\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"email\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"password\\\",\\\"type\\\":\\\"string\\\"}],\\\"name\\\":\\\"registerUser\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"}],\\\"devdoc\\\":{\\\"kind\\\":\\\"dev\\\",\\\"methods\\\":{},\\\"version\\\":1},\\\"userdoc\\\":{\\\"kind\\\":\\\"user\\\",\\\"methods\\\":{},\\\"version\\\":1}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"/C/Users/foubroker/Desktop/BAM/voting-at-mcgill-2/contracts/VoteFactory.sol\\\":\\\"VoteFactory\\\"},\\\"evmVersion\\\":\\\"istanbul\\\",\\\"libraries\\\":{},\\\"metadata\\\":{\\\"bytecodeHash\\\":\\\"ipfs\\\"},\\\"optimizer\\\":{\\\"enabled\\\":false,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"/C/Users/foubroker/Desktop/BAM/voting-at-mcgill-2/contracts/Vote.sol\\\":{\\\"keccak256\\\":\\\"0x4ff0ebfe5cd96eeb77de6239b054847f75ad7db7dffb0a64d5b6498a0170aa73\\\",\\\"license\\\":\\\"UNLICENSED\\\",\\\"urls\\\":[\\\"bzz-raw://a6b1aba94119e94d3aaf26ec3fa7162373ca2a2800e4e288ef41059c49ce3a4c\\\",\\\"dweb:/ipfs/QmQTDik5wSMYdyRawsTmQEVfR5phDaYrWRJvtbHAiAL2DD\\\"]},\\\"/C/Users/foubroker/Desktop/BAM/voting-at-mcgill-2/contracts/VoteFactory.sol\\\":{\\\"keccak256\\\":\\\"0x666b8ba07ccbe2d185d9007fec790e42a9c75c29a4171bafc2c8dee596b98665\\\",\\\"license\\\":\\\"UNLICENSED\\\",\\\"urls\\\":[\\\"bzz-raw://e9fa9557a30f4278791116444248917530b73a6a0160c61914746d41773048d0\\\",\\\"dweb:/ipfs/QmWp6LJmZzeGV3hvpy2mFPSnrwM3ya6da9diXpdMpVSbQA\\\"]}},\\\"version\\\":1}\",\"bytecode\":\"0x60806040526001600460006101000a81548163ffffffff021916908363ffffffff16021790555034801561003257600080fd5b506146b6806100426000396000f3fe608060405234801561001057600080fd5b50600436106101205760003560e01c8063b0f97938116100ad578063ca9cdfff11610071578063ca9cdfff14610c42578063d2f4a80214610ca1578063d637dcfa14610d00578063e670d80014610ee9578063fa954aa014610f3157610120565b8063b0f979381461084d578063b5008c0f146108d6578063bcab1fe314610920578063bed34bba14610a82578063c142ab0014610bea57610120565b80633f2e1f60116100f45780633f2e1f60146104bc57806364363720146105105780636638a0fa1461055e578063832880e7146106c3578063a9905aa01461080357610120565b806273d7ae1461012557806303d480f3146101845780631c14ce5e14610297578063338b474114610488575b600080fd5b61012d610f5f565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610170578082015181840152602081019050610155565b505050509050019250505060405180910390f35b6101b06004803603602081101561019a57600080fd5b8101908080359060200190929190505050610fe3565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b838110156101f45780820151818401526020810190506101d9565b50505050905090810190601f1680156102215780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561025a57808201518184015260208101905061023f565b50505050905090810190601f1680156102875780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b610350600480360360208110156102ad57600080fd5b81019080803590602001906401000000008111156102ca57600080fd5b8201836020820111156102dc57600080fd5b803590602001918460018302840111640100000000831117156102fe57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611137565b604051808060200180602001806020018515158152602001848103845288818151815260200191508051906020019080838360005b838110156103a0578082015181840152602081019050610385565b50505050905090810190601f1680156103cd5780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b838110156104065780820151818401526020810190506103eb565b50505050905090810190601f1680156104335780820380516001836020036101000a031916815260200191505b50848103825286818151815260200191508051906020019060200280838360005b8381101561046f578082015181840152602081019050610454565b5050505090500197505050505050505060405180910390f35b6104ba6004803603602081101561049e57600080fd5b81019080803563ffffffff169060200190929190505050611413565b005b61050e600480360360608110156104d257600080fd5b81019080803563ffffffff169060200190929190803563ffffffff169060200190929190803563ffffffff169060200190929190505050611636565b005b6105426004803603602081101561052657600080fd5b81019080803563ffffffff1690602001909291905050506118ca565b604051808263ffffffff16815260200191505060405180910390f35b61058d6004803603602081101561057457600080fd5b81019080803560ff169060200190929190505050611951565b60405180806020018060200180602001858152602001848103845288818151815260200191508051906020019080838360005b838110156105db5780820151818401526020810190506105c0565b50505050905090810190601f1680156106085780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610641578082015181840152602081019050610626565b50505050905090810190601f16801561066e5780820380516001836020036101000a031916815260200191505b50848103825286818151815260200191508051906020019060200280838360005b838110156106aa57808201518184015260208101905061068f565b5050505090500197505050505050505060405180910390f35b6106cb611b54565b604051808060200180602001806020018515158152602001848103845288818151815260200191508051906020019080838360005b8381101561071b578082015181840152602081019050610700565b50505050905090810190601f1680156107485780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610781578082015181840152602081019050610766565b50505050905090810190601f1680156107ae5780820380516001836020036101000a031916815260200191505b50848103825286818151815260200191508051906020019060200280838360005b838110156107ea5780820151818401526020810190506107cf565b5050505090500197505050505050505060405180910390f35b6108356004803603602081101561081957600080fd5b81019080803563ffffffff169060200190929190505050611d80565b60405180821515815260200191505060405180910390f35b61087f6004803603602081101561086357600080fd5b81019080803563ffffffff169060200190929190505050611e39565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156108c25780820151818401526020810190506108a7565b505050509050019250505060405180910390f35b610908600480360360208110156108ec57600080fd5b81019080803563ffffffff169060200190929190505050611ee8565b60405180821515815260200191505060405180910390f35b610a806004803603606081101561093657600080fd5b810190808035906020019064010000000081111561095357600080fd5b82018360208201111561096557600080fd5b8035906020019184600183028401116401000000008311171561098757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156109ea57600080fd5b8201836020820111156109fc57600080fd5b80359060200191846001830284011164010000000083111715610a1e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803563ffffffff169060200190929190505050611fc9565b005b610bd260048036036040811015610a9857600080fd5b8101908080359060200190640100000000811115610ab557600080fd5b820183602082011115610ac757600080fd5b80359060200191846001830284011164010000000083111715610ae957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610b4c57600080fd5b820183602082011115610b5e57600080fd5b80359060200191846001830284011164010000000083111715610b8057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050612204565b60405180821515815260200191505060405180910390f35b610c1660048036036020811015610c0057600080fd5b81019080803590602001909291905050506122f3565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610c4a612332565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610c8d578082015181840152602081019050610c72565b505050509050019250505060405180910390f35b610ca96123c0565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610cec578082015181840152602081019050610cd1565b505050509050019250505060405180910390f35b610ee760048036036060811015610d1657600080fd5b8101908080359060200190640100000000811115610d3357600080fd5b820183602082011115610d4557600080fd5b80359060200191846001830284011164010000000083111715610d6757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610dca57600080fd5b820183602082011115610ddc57600080fd5b80359060200191846001830284011164010000000083111715610dfe57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610e6157600080fd5b820183602082011115610e7357600080fd5b80359060200191846001830284011164010000000083111715610e9557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061248a565b005b610f1560048036036020811015610eff57600080fd5b8101908080359060200190929190505050612598565b604051808263ffffffff16815260200191505060405180910390f35b610f5d60048036036020811015610f4757600080fd5b81019080803590602001909291905050506125d2565b005b60606005805480602002602001604051908101604052809291908181526020018280548015610fd957602002820191906000526020600020906000905b82829054906101000a900463ffffffff1663ffffffff1681526020019060040190602082600301049283019260010382029150808411610f9c5790505b5050505050905090565b6000602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561108f5780601f106110645761010080835404028352916020019161108f565b820191906000526020600020905b81548152906001019060200180831161107257829003601f168201915b505050505090806001018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561112d5780601f106111025761010080835404028352916020019161112d565b820191906000526020600020905b81548152906001019060200180831161111057829003601f168201915b5050505050905082565b6060806060600080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905061122686826003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561121c5780601f106111f15761010080835404028352916020019161121c565b820191906000526020600020905b8154815290600101906020018083116111ff57829003601f168201915b5050505050612204565b61122f57600080fd5b8060010181600201826004018360050160009054906101000a900460ff16838054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112e25780601f106112b7576101008083540402835291602001916112e2565b820191906000526020600020905b8154815290600101906020018083116112c557829003601f168201915b50505050509350828054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561137e5780601f106113535761010080835404028352916020019161137e565b820191906000526020600020905b81548152906001019060200180831161136157829003601f168201915b50505050509250818054806020026020016040519081016040528092919081815260200182805480156113fc57602002820191906000526020600020906000905b82829054906101000a900463ffffffff1663ffffffff16815260200190600401906020826003010492830192600103820291508084116113bf5790505b505050505091509450945094509450509193509193565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008060008463ffffffff168152602001908152602001600020905060008363ffffffff16141561148657600080fd5b61153b816000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115215780601f106114f657610100808354040283529160200191611521565b820191906000526020600020905b81548152906001019060200180831161150457829003601f168201915b505050505060405180602001604052806000815250612204565b1561154557600080fd5b61154e83611d80565b1561155857600080fd5b816004018390806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908363ffffffff160217905550806002018260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008060008463ffffffff1681526020019081526020016000209050816004016001836004018054905003815481106116ae57fe5b90600052602060002090600891828204019190066004029054906101000a900463ffffffff16826004018663ffffffff16815481106116e957fe5b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908363ffffffff1602179055508160040160018360040180549050038154811061173557fe5b90600052602060002090600891828204019190066004026101000a81549063ffffffff02191690558160040180548061176a57fe5b60019003818190600052602060002090600891828204019190066004026101000a81549063ffffffff02191690559055806002016001826002018054905003815481106117b357fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16816002018563ffffffff16815481106117f357fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060020160018260020180549050038154811061185457fe5b9060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690558060020180548061188e57fe5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590555050505050565b600080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050806004018363ffffffff168154811061192357fe5b90600052602060002090600891828204019190066004029054906101000a900463ffffffff16915050919050565b60608060606000806000808760ff16815260200190815260200160002090508060000181600101826002018360020180549050838054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611a195780601f106119ee57610100808354040283529160200191611a19565b820191906000526020600020905b8154815290600101906020018083116119fc57829003601f168201915b50505050509350828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611ab55780601f10611a8a57610100808354040283529160200191611ab5565b820191906000526020600020905b815481529060010190602001808311611a9857829003601f168201915b5050505050925081805480602002602001604051908101604052809291908181526020018280548015611b3d57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611af3575b505050505091509450945094509450509193509193565b6060806060600080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010181600201826004018360050160009054906101000a900460ff16838054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611c505780601f10611c2557610100808354040283529160200191611c50565b820191906000526020600020905b815481529060010190602001808311611c3357829003601f168201915b50505050509350828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611cec5780601f10611cc157610100808354040283529160200191611cec565b820191906000526020600020905b815481529060010190602001808311611ccf57829003601f168201915b5050505050925081805480602002602001604051908101604052809291908181526020018280548015611d6a57602002820191906000526020600020906000905b82829054906101000a900463ffffffff1663ffffffff1681526020019060040190602082600301049283019260010382029150808411611d2d5790505b5050505050915094509450945094505090919293565b600080600090506000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060005b8160040180549050811015611e2e578463ffffffff16826004018281548110611df257fe5b90600052602060002090600891828204019190066004029054906101000a900463ffffffff1663ffffffff161492508080600101915050611dcd565b508192505050919050565b606060008060008463ffffffff168152602001908152602001600020905080600201805480602002602001604051908101604052809291908181526020018280548015611edb57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611e91575b5050505050915050919050565b6000806000808463ffffffff16815260200190815260200160002090506000611fbc826000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611fa25780601f10611f7757610100808354040283529160200191611fa2565b820191906000526020600020905b815481529060010190602001808311611f8557829003601f168201915b505050505060405180602001604052806000815250612204565b1590508092505050919050565b611fd36001611ee8565b6121275760008060006001815260200190815260200160002090506040518060400160405280600781526020017f53747564656e740000000000000000000000000000000000000000000000000081525081600001908051906020019061203b92919061268f565b506040518060400160405280600d81526020017f44656661756c742047726f75700000000000000000000000000000000000000081525081600101908051906020019061208992919061268f565b506001600081819054906101000a900463ffffffff168092919060010191906101000a81548163ffffffff021916908363ffffffff160217905550506005600460009054906101000a900463ffffffff1690806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908363ffffffff160217905550505b60008060008363ffffffff16815260200190815260200160002090508381600001908051906020019061215b92919061268f565b508281600101908051906020019061217492919061268f565b506001600081819054906101000a900463ffffffff168092919060010191906101000a81548163ffffffff021916908363ffffffff1602179055505060058290806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908363ffffffff16021790555050505050565b6000816040516020018082805190602001908083835b6020831061223d578051825260208201915060208101905060208303925061221a565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405280519060200120836040516020018082805190602001908083835b602083106122af578051825260208201915060208101905060208303925061228c565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040528051906020012014905092915050565b6002818154811061230357600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060028054806020026020016040519081016040528092919081815260200182805480156123b657602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161236c575b5050505050905090565b60606000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060040180548060200260200160405190810160405280929190818152602001828054801561247f57602002820191906000526020600020906000905b82829054906101000a900463ffffffff1663ffffffff16815260200190600401906020826003010492830192600103820291508084116124425790505b505050505091505090565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050838160010190805190602001906124e592919061268f565b50828160020190805190602001906124fe92919061268f565b508181600301908051906020019061251792919061268f565b50338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018160050160006101000a81548160ff0219169083151502179055506125826001611ee8565b15612592576125916001611413565b5b50505050565b600581815481106125a857600080fd5b9060005260206000209060089182820401919006600402915054906101000a900463ffffffff1681565b600033826040516125e29061271d565b808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051809103906000f080158015612625573d6000803e3d6000fd5b5090506002819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826126c5576000855561270c565b82601f106126de57805160ff191683800117855561270c565b8280016001018555821561270c579182015b8281111561270b5782518255916020019190600101906126f0565b5b509050612719919061272a565b5090565b611f398061274883390190565b5b8082111561274357600081600090555060010161272b565b509056fe608060405234801561001057600080fd5b50604051611f39380380611f398339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060001461009d5760016100a0565b60005b60ff166002819055505050611e7f806100ba6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063869eae2311610097578063da3550ee11610066578063da3550ee146108e2578063dcfda00f14610926578063e1c5fcc114610b23578063fcae83a714610b7d576100f5565b8063869eae23146104775780638ab66a90146105d35780639511544714610720578063953ef76d146107b9576100f5565b8063481c6a75116100d3578063481c6a751461018157806367127e43146101b5578063691a675c1461031b5780637432e63a1461041f576100f5565b80632d35a8a2146100fa5780633f8cab7f14610118578063407bba4a14610177575b600080fd5b610102610ced565b6040518082815260200191505060405180910390f35b610120610cf3565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610163578082015181840152602081019050610148565b505050509050019250505060405180910390f35b61017f610d90565b005b610189610fb8565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610319600480360360808110156101cb57600080fd5b81019080803590602001906401000000008111156101e857600080fd5b8201836020820111156101fa57600080fd5b8035906020019184600183028401116401000000008311171561021c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803590602001909291908035906020019064010000000081111561029357600080fd5b8201836020820111156102a557600080fd5b803590602001918460018302840111640100000000831117156102c757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610fdc565b005b610323611094565b604051808060200186815260200185815260200180602001848152602001838103835288818151815260200191508051906020019080838360005b8381101561037957808201518184015260208101905061035e565b50505050905090810190601f1680156103a65780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b838110156103df5780820151818401526020810190506103c4565b50505050905090810190601f16801561040c5780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b61044b6004803603602081101561043557600080fd5b81019080803590602001909291905050506111e8565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6105d16004803603606081101561048d57600080fd5b81019080803590602001906401000000008111156104aa57600080fd5b8201836020820111156104bc57600080fd5b803590602001918460018302840111640100000000831117156104de57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561054157600080fd5b82018360208201111561055357600080fd5b8035906020019184600183028401116401000000008311171561057557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190505050611227565b005b610615600480360360208110156105e957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611369565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561067b578082015181840152602081019050610660565b50505050905090810190601f1680156106a85780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156106e15780820151818401526020810190506106c6565b50505050905090810190601f16801561070e5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b6107626004803603602081101561073657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506114e9565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156107a557808201518184015260208101905061078a565b505050509050019250505060405180910390f35b6107fb600480360360208110156107cf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115c8565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b8381101561083f578082015181840152602081019050610824565b50505050905090810190601f16801561086c5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156108a557808201518184015260208101905061088a565b50505050905090810190601f1680156108d25780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b610924600480360360208110156108f857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061179f565b005b610b21600480360360a081101561093c57600080fd5b810190808035906020019064010000000081111561095957600080fd5b82018360208201111561096b57600080fd5b8035906020019184600183028401116401000000008311171561098d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291908035906020019092919080359060200190640100000000811115610a0457600080fd5b820183602082011115610a1657600080fd5b80359060200191846001830284011164010000000083111715610a3857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610a9b57600080fd5b820183602082011115610aad57600080fd5b80359060200191846001830284011164010000000083111715610acf57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611a0a565b005b610b6560048036036020811015610b3957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611adc565b60405180821515815260200191505060405180910390f35b610b85611b43565b6040518080602001878152602001868152602001806020018581526020018060200184810384528a818151815260200191508051906020019080838360005b83811015610bdf578082015181840152602081019050610bc4565b50505050905090810190601f168015610c0c5780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610c45578082015181840152602081019050610c2a565b50505050905090810190601f168015610c725780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b83811015610cab578082015181840152602081019050610c90565b50505050905090810190601f168015610cd85780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b60015481565b6060600060025414610d0457600080fd5b6004805480602002602001604051908101604052809291908181526020018280548015610d8657602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610d3c575b5050505050905090565b600060025414610d9f57600080fd5b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160009055600282016000610e1e9190611d35565b600382016000610e2e9190611d56565b600482016000610e3e9190611d56565b505060005b600480549050811015610fa25760048181548110610e5d57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610f9557600460016004805490500381548110610ed057fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660048281548110610f0857fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506004805480610f5b57fe5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690559055610fa2565b8080600101915050610e43565b5060016000815480929190600190039190505550565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461103457600080fd5b60016002541461104357600080fd5b6000600c905084816000019080519060200190611061929190611d9e565b508381600101819055508281600201819055508181600301908051906020019061108c929190611d9e565b505050505050565b600c806000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561112e5780601f106111035761010080835404028352916020019161112e565b820191906000526020600020905b81548152906001019060200180831161111157829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111d85780601f106111ad576101008083540402835291602001916111d8565b820191906000526020600020905b8154815290600101906020018083116111bb57829003601f168201915b5050505050908060040154905085565b600481815481106111f857600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006002541461123657600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905083816003019080519060200190611291929190611d9e565b50828160040190805190602001906112aa929190611d9e565b50338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600081548092919060010191905055506004339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b60036020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114415780601f1061141657610100808354040283529160200191611441565b820191906000526020600020905b81548152906001019060200180831161142457829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114df5780601f106114b4576101008083540402835291602001916114df565b820191906000526020600020905b8154815290600101906020018083116114c257829003601f168201915b5050505050905084565b60606000600254146114fa57600080fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018054806020026020016040519081016040528092919081815260200182805480156115bc57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611572575b50505050509050919050565b6060806000600254146115da57600080fd5b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401818054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116f35780601f106116c8576101008083540402835291602001916116f3565b820191906000526020600020905b8154815290600101906020018083116116d657829003601f168201915b50505050509150808054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561178f5780601f106117645761010080835404028352916020019161178f565b820191906000526020600020905b81548152906001019060200180831161177257829003601f168201915b5050505050905091509150915091565b6000600254146117ae57600080fd5b60001515600560060160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151415611a0757600073ffffffffffffffffffffffffffffffffffffffff16600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611a06576001600560060160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600560040160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611a6257600080fd5b600060025414611a7157600080fd5b60006005905085816000019080519060200190611a8f929190611d9e565b5084816001018190555083816002018190555082816003019080519060200190611aba929190611d9e565b5081816005019080519060200190611ad3929190611d9e565b50505050505050565b60008060025414611aec57600080fd5b600560060160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6005806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611bdd5780601f10611bb257610100808354040283529160200191611bdd565b820191906000526020600020905b815481529060010190602001808311611bc057829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611c875780601f10611c5c57610100808354040283529160200191611c87565b820191906000526020600020905b815481529060010190602001808311611c6a57829003601f168201915b505050505090806004015490806005018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611d2b5780601f10611d0057610100808354040283529160200191611d2b565b820191906000526020600020905b815481529060010190602001808311611d0e57829003601f168201915b5050505050905086565b5080546000825590600052602060002090810190611d539190611e2c565b50565b50805460018160011615610100020316600290046000825580601f10611d7c5750611d9b565b601f016020900490600052602060002090810190611d9a9190611e2c565b5b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282611dd45760008555611e1b565b82601f10611ded57805160ff1916838001178555611e1b565b82800160010185558215611e1b579182015b82811115611e1a578251825591602001919060010190611dff565b5b509050611e289190611e2c565b5090565b5b80821115611e45576000816000905550600101611e2d565b509056fea264697066735822122010099a7f049435a44e84a518d6581b53ecf8bfce54da71f07ed0bf2d49db1e1064736f6c63430007040033a26469706673582212206e5ed9cf81776d57abca6a54429feb6f2b8f67141f01cbfe6666703f814e194964736f6c63430007040033\",\"deployedBytecode\":\"0x608060405234801561001057600080fd5b50600436106101205760003560e01c8063b0f97938116100ad578063ca9cdfff11610071578063ca9cdfff14610c42578063d2f4a80214610ca1578063d637dcfa14610d00578063e670d80014610ee9578063fa954aa014610f3157610120565b8063b0f979381461084d578063b5008c0f146108d6578063bcab1fe314610920578063bed34bba14610a82578063c142ab0014610bea57610120565b80633f2e1f60116100f45780633f2e1f60146104bc57806364363720146105105780636638a0fa1461055e578063832880e7146106c3578063a9905aa01461080357610120565b806273d7ae1461012557806303d480f3146101845780631c14ce5e14610297578063338b474114610488575b600080fd5b61012d610f5f565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610170578082015181840152602081019050610155565b505050509050019250505060405180910390f35b6101b06004803603602081101561019a57600080fd5b8101908080359060200190929190505050610fe3565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b838110156101f45780820151818401526020810190506101d9565b50505050905090810190601f1680156102215780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561025a57808201518184015260208101905061023f565b50505050905090810190601f1680156102875780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b610350600480360360208110156102ad57600080fd5b81019080803590602001906401000000008111156102ca57600080fd5b8201836020820111156102dc57600080fd5b803590602001918460018302840111640100000000831117156102fe57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611137565b604051808060200180602001806020018515158152602001848103845288818151815260200191508051906020019080838360005b838110156103a0578082015181840152602081019050610385565b50505050905090810190601f1680156103cd5780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b838110156104065780820151818401526020810190506103eb565b50505050905090810190601f1680156104335780820380516001836020036101000a031916815260200191505b50848103825286818151815260200191508051906020019060200280838360005b8381101561046f578082015181840152602081019050610454565b5050505090500197505050505050505060405180910390f35b6104ba6004803603602081101561049e57600080fd5b81019080803563ffffffff169060200190929190505050611413565b005b61050e600480360360608110156104d257600080fd5b81019080803563ffffffff169060200190929190803563ffffffff169060200190929190803563ffffffff169060200190929190505050611636565b005b6105426004803603602081101561052657600080fd5b81019080803563ffffffff1690602001909291905050506118ca565b604051808263ffffffff16815260200191505060405180910390f35b61058d6004803603602081101561057457600080fd5b81019080803560ff169060200190929190505050611951565b60405180806020018060200180602001858152602001848103845288818151815260200191508051906020019080838360005b838110156105db5780820151818401526020810190506105c0565b50505050905090810190601f1680156106085780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610641578082015181840152602081019050610626565b50505050905090810190601f16801561066e5780820380516001836020036101000a031916815260200191505b50848103825286818151815260200191508051906020019060200280838360005b838110156106aa57808201518184015260208101905061068f565b5050505090500197505050505050505060405180910390f35b6106cb611b54565b604051808060200180602001806020018515158152602001848103845288818151815260200191508051906020019080838360005b8381101561071b578082015181840152602081019050610700565b50505050905090810190601f1680156107485780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610781578082015181840152602081019050610766565b50505050905090810190601f1680156107ae5780820380516001836020036101000a031916815260200191505b50848103825286818151815260200191508051906020019060200280838360005b838110156107ea5780820151818401526020810190506107cf565b5050505090500197505050505050505060405180910390f35b6108356004803603602081101561081957600080fd5b81019080803563ffffffff169060200190929190505050611d80565b60405180821515815260200191505060405180910390f35b61087f6004803603602081101561086357600080fd5b81019080803563ffffffff169060200190929190505050611e39565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156108c25780820151818401526020810190506108a7565b505050509050019250505060405180910390f35b610908600480360360208110156108ec57600080fd5b81019080803563ffffffff169060200190929190505050611ee8565b60405180821515815260200191505060405180910390f35b610a806004803603606081101561093657600080fd5b810190808035906020019064010000000081111561095357600080fd5b82018360208201111561096557600080fd5b8035906020019184600183028401116401000000008311171561098757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156109ea57600080fd5b8201836020820111156109fc57600080fd5b80359060200191846001830284011164010000000083111715610a1e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803563ffffffff169060200190929190505050611fc9565b005b610bd260048036036040811015610a9857600080fd5b8101908080359060200190640100000000811115610ab557600080fd5b820183602082011115610ac757600080fd5b80359060200191846001830284011164010000000083111715610ae957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610b4c57600080fd5b820183602082011115610b5e57600080fd5b80359060200191846001830284011164010000000083111715610b8057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050612204565b60405180821515815260200191505060405180910390f35b610c1660048036036020811015610c0057600080fd5b81019080803590602001909291905050506122f3565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610c4a612332565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610c8d578082015181840152602081019050610c72565b505050509050019250505060405180910390f35b610ca96123c0565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610cec578082015181840152602081019050610cd1565b505050509050019250505060405180910390f35b610ee760048036036060811015610d1657600080fd5b8101908080359060200190640100000000811115610d3357600080fd5b820183602082011115610d4557600080fd5b80359060200191846001830284011164010000000083111715610d6757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610dca57600080fd5b820183602082011115610ddc57600080fd5b80359060200191846001830284011164010000000083111715610dfe57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610e6157600080fd5b820183602082011115610e7357600080fd5b80359060200191846001830284011164010000000083111715610e9557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061248a565b005b610f1560048036036020811015610eff57600080fd5b8101908080359060200190929190505050612598565b604051808263ffffffff16815260200191505060405180910390f35b610f5d60048036036020811015610f4757600080fd5b81019080803590602001909291905050506125d2565b005b60606005805480602002602001604051908101604052809291908181526020018280548015610fd957602002820191906000526020600020906000905b82829054906101000a900463ffffffff1663ffffffff1681526020019060040190602082600301049283019260010382029150808411610f9c5790505b5050505050905090565b6000602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561108f5780601f106110645761010080835404028352916020019161108f565b820191906000526020600020905b81548152906001019060200180831161107257829003601f168201915b505050505090806001018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561112d5780601f106111025761010080835404028352916020019161112d565b820191906000526020600020905b81548152906001019060200180831161111057829003601f168201915b5050505050905082565b6060806060600080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905061122686826003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561121c5780601f106111f15761010080835404028352916020019161121c565b820191906000526020600020905b8154815290600101906020018083116111ff57829003601f168201915b5050505050612204565b61122f57600080fd5b8060010181600201826004018360050160009054906101000a900460ff16838054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112e25780601f106112b7576101008083540402835291602001916112e2565b820191906000526020600020905b8154815290600101906020018083116112c557829003601f168201915b50505050509350828054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561137e5780601f106113535761010080835404028352916020019161137e565b820191906000526020600020905b81548152906001019060200180831161136157829003601f168201915b50505050509250818054806020026020016040519081016040528092919081815260200182805480156113fc57602002820191906000526020600020906000905b82829054906101000a900463ffffffff1663ffffffff16815260200190600401906020826003010492830192600103820291508084116113bf5790505b505050505091509450945094509450509193509193565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008060008463ffffffff168152602001908152602001600020905060008363ffffffff16141561148657600080fd5b61153b816000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115215780601f106114f657610100808354040283529160200191611521565b820191906000526020600020905b81548152906001019060200180831161150457829003601f168201915b505050505060405180602001604052806000815250612204565b1561154557600080fd5b61154e83611d80565b1561155857600080fd5b816004018390806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908363ffffffff160217905550806002018260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008060008463ffffffff1681526020019081526020016000209050816004016001836004018054905003815481106116ae57fe5b90600052602060002090600891828204019190066004029054906101000a900463ffffffff16826004018663ffffffff16815481106116e957fe5b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908363ffffffff1602179055508160040160018360040180549050038154811061173557fe5b90600052602060002090600891828204019190066004026101000a81549063ffffffff02191690558160040180548061176a57fe5b60019003818190600052602060002090600891828204019190066004026101000a81549063ffffffff02191690559055806002016001826002018054905003815481106117b357fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16816002018563ffffffff16815481106117f357fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060020160018260020180549050038154811061185457fe5b9060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690558060020180548061188e57fe5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590555050505050565b600080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050806004018363ffffffff168154811061192357fe5b90600052602060002090600891828204019190066004029054906101000a900463ffffffff16915050919050565b60608060606000806000808760ff16815260200190815260200160002090508060000181600101826002018360020180549050838054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611a195780601f106119ee57610100808354040283529160200191611a19565b820191906000526020600020905b8154815290600101906020018083116119fc57829003601f168201915b50505050509350828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611ab55780601f10611a8a57610100808354040283529160200191611ab5565b820191906000526020600020905b815481529060010190602001808311611a9857829003601f168201915b5050505050925081805480602002602001604051908101604052809291908181526020018280548015611b3d57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611af3575b505050505091509450945094509450509193509193565b6060806060600080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010181600201826004018360050160009054906101000a900460ff16838054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611c505780601f10611c2557610100808354040283529160200191611c50565b820191906000526020600020905b815481529060010190602001808311611c3357829003601f168201915b50505050509350828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611cec5780601f10611cc157610100808354040283529160200191611cec565b820191906000526020600020905b815481529060010190602001808311611ccf57829003601f168201915b5050505050925081805480602002602001604051908101604052809291908181526020018280548015611d6a57602002820191906000526020600020906000905b82829054906101000a900463ffffffff1663ffffffff1681526020019060040190602082600301049283019260010382029150808411611d2d5790505b5050505050915094509450945094505090919293565b600080600090506000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060005b8160040180549050811015611e2e578463ffffffff16826004018281548110611df257fe5b90600052602060002090600891828204019190066004029054906101000a900463ffffffff1663ffffffff161492508080600101915050611dcd565b508192505050919050565b606060008060008463ffffffff168152602001908152602001600020905080600201805480602002602001604051908101604052809291908181526020018280548015611edb57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611e91575b5050505050915050919050565b6000806000808463ffffffff16815260200190815260200160002090506000611fbc826000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611fa25780601f10611f7757610100808354040283529160200191611fa2565b820191906000526020600020905b815481529060010190602001808311611f8557829003601f168201915b505050505060405180602001604052806000815250612204565b1590508092505050919050565b611fd36001611ee8565b6121275760008060006001815260200190815260200160002090506040518060400160405280600781526020017f53747564656e740000000000000000000000000000000000000000000000000081525081600001908051906020019061203b92919061268f565b506040518060400160405280600d81526020017f44656661756c742047726f75700000000000000000000000000000000000000081525081600101908051906020019061208992919061268f565b506001600081819054906101000a900463ffffffff168092919060010191906101000a81548163ffffffff021916908363ffffffff160217905550506005600460009054906101000a900463ffffffff1690806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908363ffffffff160217905550505b60008060008363ffffffff16815260200190815260200160002090508381600001908051906020019061215b92919061268f565b508281600101908051906020019061217492919061268f565b506001600081819054906101000a900463ffffffff168092919060010191906101000a81548163ffffffff021916908363ffffffff1602179055505060058290806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908363ffffffff16021790555050505050565b6000816040516020018082805190602001908083835b6020831061223d578051825260208201915060208101905060208303925061221a565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405280519060200120836040516020018082805190602001908083835b602083106122af578051825260208201915060208101905060208303925061228c565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040528051906020012014905092915050565b6002818154811061230357600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060028054806020026020016040519081016040528092919081815260200182805480156123b657602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161236c575b5050505050905090565b60606000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060040180548060200260200160405190810160405280929190818152602001828054801561247f57602002820191906000526020600020906000905b82829054906101000a900463ffffffff1663ffffffff16815260200190600401906020826003010492830192600103820291508084116124425790505b505050505091505090565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050838160010190805190602001906124e592919061268f565b50828160020190805190602001906124fe92919061268f565b508181600301908051906020019061251792919061268f565b50338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018160050160006101000a81548160ff0219169083151502179055506125826001611ee8565b15612592576125916001611413565b5b50505050565b600581815481106125a857600080fd5b9060005260206000209060089182820401919006600402915054906101000a900463ffffffff1681565b600033826040516125e29061271d565b808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051809103906000f080158015612625573d6000803e3d6000fd5b5090506002819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826126c5576000855561270c565b82601f106126de57805160ff191683800117855561270c565b8280016001018555821561270c579182015b8281111561270b5782518255916020019190600101906126f0565b5b509050612719919061272a565b5090565b611f398061274883390190565b5b8082111561274357600081600090555060010161272b565b509056fe608060405234801561001057600080fd5b50604051611f39380380611f398339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060001461009d5760016100a0565b60005b60ff166002819055505050611e7f806100ba6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063869eae2311610097578063da3550ee11610066578063da3550ee146108e2578063dcfda00f14610926578063e1c5fcc114610b23578063fcae83a714610b7d576100f5565b8063869eae23146104775780638ab66a90146105d35780639511544714610720578063953ef76d146107b9576100f5565b8063481c6a75116100d3578063481c6a751461018157806367127e43146101b5578063691a675c1461031b5780637432e63a1461041f576100f5565b80632d35a8a2146100fa5780633f8cab7f14610118578063407bba4a14610177575b600080fd5b610102610ced565b6040518082815260200191505060405180910390f35b610120610cf3565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610163578082015181840152602081019050610148565b505050509050019250505060405180910390f35b61017f610d90565b005b610189610fb8565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610319600480360360808110156101cb57600080fd5b81019080803590602001906401000000008111156101e857600080fd5b8201836020820111156101fa57600080fd5b8035906020019184600183028401116401000000008311171561021c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803590602001909291908035906020019064010000000081111561029357600080fd5b8201836020820111156102a557600080fd5b803590602001918460018302840111640100000000831117156102c757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610fdc565b005b610323611094565b604051808060200186815260200185815260200180602001848152602001838103835288818151815260200191508051906020019080838360005b8381101561037957808201518184015260208101905061035e565b50505050905090810190601f1680156103a65780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b838110156103df5780820151818401526020810190506103c4565b50505050905090810190601f16801561040c5780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b61044b6004803603602081101561043557600080fd5b81019080803590602001909291905050506111e8565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6105d16004803603606081101561048d57600080fd5b81019080803590602001906401000000008111156104aa57600080fd5b8201836020820111156104bc57600080fd5b803590602001918460018302840111640100000000831117156104de57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561054157600080fd5b82018360208201111561055357600080fd5b8035906020019184600183028401116401000000008311171561057557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190505050611227565b005b610615600480360360208110156105e957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611369565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561067b578082015181840152602081019050610660565b50505050905090810190601f1680156106a85780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156106e15780820151818401526020810190506106c6565b50505050905090810190601f16801561070e5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b6107626004803603602081101561073657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506114e9565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156107a557808201518184015260208101905061078a565b505050509050019250505060405180910390f35b6107fb600480360360208110156107cf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115c8565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b8381101561083f578082015181840152602081019050610824565b50505050905090810190601f16801561086c5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156108a557808201518184015260208101905061088a565b50505050905090810190601f1680156108d25780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b610924600480360360208110156108f857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061179f565b005b610b21600480360360a081101561093c57600080fd5b810190808035906020019064010000000081111561095957600080fd5b82018360208201111561096b57600080fd5b8035906020019184600183028401116401000000008311171561098d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291908035906020019092919080359060200190640100000000811115610a0457600080fd5b820183602082011115610a1657600080fd5b80359060200191846001830284011164010000000083111715610a3857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610a9b57600080fd5b820183602082011115610aad57600080fd5b80359060200191846001830284011164010000000083111715610acf57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611a0a565b005b610b6560048036036020811015610b3957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611adc565b60405180821515815260200191505060405180910390f35b610b85611b43565b6040518080602001878152602001868152602001806020018581526020018060200184810384528a818151815260200191508051906020019080838360005b83811015610bdf578082015181840152602081019050610bc4565b50505050905090810190601f168015610c0c5780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610c45578082015181840152602081019050610c2a565b50505050905090810190601f168015610c725780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b83811015610cab578082015181840152602081019050610c90565b50505050905090810190601f168015610cd85780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b60015481565b6060600060025414610d0457600080fd5b6004805480602002602001604051908101604052809291908181526020018280548015610d8657602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610d3c575b5050505050905090565b600060025414610d9f57600080fd5b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160009055600282016000610e1e9190611d35565b600382016000610e2e9190611d56565b600482016000610e3e9190611d56565b505060005b600480549050811015610fa25760048181548110610e5d57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610f9557600460016004805490500381548110610ed057fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660048281548110610f0857fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506004805480610f5b57fe5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690559055610fa2565b8080600101915050610e43565b5060016000815480929190600190039190505550565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461103457600080fd5b60016002541461104357600080fd5b6000600c905084816000019080519060200190611061929190611d9e565b508381600101819055508281600201819055508181600301908051906020019061108c929190611d9e565b505050505050565b600c806000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561112e5780601f106111035761010080835404028352916020019161112e565b820191906000526020600020905b81548152906001019060200180831161111157829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111d85780601f106111ad576101008083540402835291602001916111d8565b820191906000526020600020905b8154815290600101906020018083116111bb57829003601f168201915b5050505050908060040154905085565b600481815481106111f857600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006002541461123657600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905083816003019080519060200190611291929190611d9e565b50828160040190805190602001906112aa929190611d9e565b50338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600081548092919060010191905055506004339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b60036020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114415780601f1061141657610100808354040283529160200191611441565b820191906000526020600020905b81548152906001019060200180831161142457829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114df5780601f106114b4576101008083540402835291602001916114df565b820191906000526020600020905b8154815290600101906020018083116114c257829003601f168201915b5050505050905084565b60606000600254146114fa57600080fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018054806020026020016040519081016040528092919081815260200182805480156115bc57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611572575b50505050509050919050565b6060806000600254146115da57600080fd5b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401818054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116f35780601f106116c8576101008083540402835291602001916116f3565b820191906000526020600020905b8154815290600101906020018083116116d657829003601f168201915b50505050509150808054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561178f5780601f106117645761010080835404028352916020019161178f565b820191906000526020600020905b81548152906001019060200180831161177257829003601f168201915b5050505050905091509150915091565b6000600254146117ae57600080fd5b60001515600560060160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151415611a0757600073ffffffffffffffffffffffffffffffffffffffff16600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611a06576001600560060160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600560040160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008154809291906001019190505550600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611a6257600080fd5b600060025414611a7157600080fd5b60006005905085816000019080519060200190611a8f929190611d9e565b5084816001018190555083816002018190555082816003019080519060200190611aba929190611d9e565b5081816005019080519060200190611ad3929190611d9e565b50505050505050565b60008060025414611aec57600080fd5b600560060160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6005806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611bdd5780601f10611bb257610100808354040283529160200191611bdd565b820191906000526020600020905b815481529060010190602001808311611bc057829003601f168201915b505050505090806001015490806002015490806003018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611c875780601f10611c5c57610100808354040283529160200191611c87565b820191906000526020600020905b815481529060010190602001808311611c6a57829003601f168201915b505050505090806004015490806005018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611d2b5780601f10611d0057610100808354040283529160200191611d2b565b820191906000526020600020905b815481529060010190602001808311611d0e57829003601f168201915b5050505050905086565b5080546000825590600052602060002090810190611d539190611e2c565b50565b50805460018160011615610100020316600290046000825580601f10611d7c5750611d9b565b601f016020900490600052602060002090810190611d9a9190611e2c565b5b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282611dd45760008555611e1b565b82601f10611ded57805160ff1916838001178555611e1b565b82800160010185558215611e1b579182015b82811115611e1a578251825591602001919060010190611dff565b5b509050611e289190611e2c565b5090565b5b80821115611e45576000816000905550600101611e2d565b509056fea264697066735822122010099a7f049435a44e84a518d6581b53ecf8bfce54da71f07ed0bf2d49db1e1064736f6c63430007040033a26469706673582212206e5ed9cf81776d57abca6a54429feb6f2b8f67141f01cbfe6666703f814e194964736f6c63430007040033\",\"immutableReferences\":{},\"generatedSources\":[],\"deployedGeneratedSources\":[],\"sourceMap\":\"92:6643:2:-:0;;;935:1;911:25;;;;;;;;;;;;;;;;;;;;92:6643;;;;;;;;;;;;;;;;\",\"deployedSourceMap\":\"92:6643:2:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5000:106;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;723:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5669:324;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1984:467;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2863:572;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;4112:160;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;4760:228;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6034:209;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3491:299;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;4534:166;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3854:201;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;1255:606;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6548:181;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;828:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;6255:106;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4327:154;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5118:386;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1000:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;5512:151;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;5000:106;5049:15;5084:14;5077:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5000:106;:::o;723:45::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5669:324::-;5733:13;5748;5763:15;5780:4;5796:20;5819:8;:20;5828:10;5819:20;;;;;;;;;;;;;;;5796:43;;5857:36;5872:8;5882:1;:10;;5857:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:14;:36::i;:::-;5849:45;;;;;;5948:1;:6;;5956:1;:7;;5965:1;:8;;5975:1;:9;;;;;;;;;;;;5941:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5669:324;;;;;:::o;1984:467::-;2041:20;2064:8;:20;2073:10;2064:20;;;;;;;;;;;;;;;2041:43;;2095:21;2119:9;:18;2129:7;2119:18;;;;;;;;;;;;;2095:42;;2177:1;2166:7;:12;;;;2158:21;;;;;;2199:26;2214:1;:6;;2199:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:14;:26::i;:::-;2198:27;2190:36;;;;;;2281:20;2293:7;2281:11;:20::i;:::-;2280:21;2272:30;;;;;;2346:1;:8;;2360:7;2346:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2414:1;:9;;2429:1;:13;;;;;;;;;;;;2414:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1984:467;;;:::o;2863:572::-;2956:20;2979:8;:20;2988:10;2979:20;;;;;;;;;;;;;;;2956:43;;3010:21;3034:9;:18;3044:7;3034:18;;;;;;;;;;;;;3010:42;;3135:1;:8;;3162:1;3144;:8;;:15;;;;:19;3135:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3112:1;:8;;3121:10;3112:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;:52;;;;;;;;;;;;;;;;;;3182:1;:8;;3209:1;3191;:8;;:15;;;;:19;3182:29;;;;;;;;;;;;;;;;;;;;;;;;;;3175:36;;;;;;;;;;;3222:1;:8;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3321:1;:9;;3350:1;3331;:9;;:16;;;;:20;3321:31;;;;;;;;;;;;;;;;;;;;;;;;;3296:1;:9;;3306:11;3296:22;;;;;;;;;;;;;;;;;;:56;;;;;;;;;;;;;;;;;;3370:1;:9;;3399:1;3380;:9;;:16;;;;:20;3370:31;;;;;;;;;;;;;;;;3363:38;;;;;;;;;;;3412:1;:9;;:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2863:572;;;;;:::o;4112:160::-;4169:6;4188:20;4211:8;:20;4220:10;4211:20;;;;;;;;;;;;;;;4188:43;;4249:1;:8;;4258:5;4249:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4242:22;;;4112:160;;;:::o;4760:228::-;4808:13;4823;4838:16;4856:4;4873:21;4897:9;:13;4907:2;4897:13;;;;;;;;;;;;;4873:37;;4929:1;:6;;4937:1;:13;;4952:1;:9;;4963:1;:9;;:16;;;;4921:59;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4760:228;;;;;:::o;6034:209::-;6074:13;6089;6104:15;6121:4;6137:20;6160:8;:20;6169:10;6160:20;;;;;;;;;;;;;;;6137:43;;6198:1;:6;;6206:1;:7;;6215:1;:8;;6225:1;:9;;;;;;;;;;;;6191:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6034:209;;;;:::o;3491:299::-;3549:4;3566:13;3582:5;3566:21;;3598:20;3621:8;:20;3630:10;3621:20;;;;;;;;;;;;;;;3598:43;;3657:6;3652:105;3673:1;:8;;:15;;;;3669:1;:19;3652:105;;;3737:7;3722:22;;:1;:8;;3731:1;3722:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:22;;;3710:35;;3690:3;;;;;;;3652:105;;;;3774:8;3767:15;;;;3491:299;;;:::o;4534:166::-;4594:16;4623:21;4647:9;:18;4657:7;4647:18;;;;;;;;;;;;;4623:42;;4683:1;:9;;4676:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4534:166;;;:::o;3854:201::-;3908:4;3925:21;3949:9;:18;3959:7;3949:18;;;;;;;;;;;;;3925:42;;3978:12;3995:26;4010:1;:6;;3995:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:14;:26::i;:::-;3993:29;3978:44;;4040:7;4033:14;;;;3854:201;;;:::o;1255:606::-;1413:10;1421:1;1413:7;:10::i;:::-;1408:269;;1440:32;1475:9;:12;1485:1;1475:12;;;;;;;;;;;1440:47;;1502:29;;;;;;;;;;;;;;;;;:12;:17;;:29;;;;;;;;;;;;:::i;:::-;;1546:42;;;;;;;;;;;;;;;;;:12;:24;;:42;;;;;;;;;;;;:::i;:::-;;1603:10;;:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1630:14;1650;;;;;;;;;;;1630:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1408:269;;1687:21;1711:9;:18;1721:7;1711:18;;;;;;;;;;;;;1687:42;;1749:4;1740:1;:6;;:13;;;;;;;;;;;;:::i;:::-;;1780:11;1764:1;:13;;:27;;;;;;;;;;;;:::i;:::-;;1802:10;;:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1825:14;1845:7;1825:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1255:606;;;;:::o;6548:181::-;6627:4;6716:1;6698:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6688:32;;;;;;6680:1;6662:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6652:32;;;;;;:68;6644:77;;6548:181;;;;:::o;828:30::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;6255:106::-;6304:16;6340:13;6333:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6255:106;:::o;4327:154::-;4376:15;4404:20;4427:8;:20;4436:10;4427:20;;;;;;;;;;;;;;;4404:43;;4465:1;:8;;4458:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4327:154;:::o;5118:386::-;5223:20;5246:8;:20;5255:10;5246:20;;;;;;;;;;;;;;;5223:43;;5300:4;5291:1;:6;;:13;;;;;;;;;;;;:::i;:::-;;5325:5;5315:1;:7;;:15;;;;;;;;;;;;:::i;:::-;;5354:8;5341:1;:10;;:21;;;;;;;;;;;;:::i;:::-;;5390:10;5373:1;:13;;;:27;;;;;;;;;;;;;;;;;;5423:4;5411:1;:9;;;:16;;;;;;;;;;;;;;;;;;5442:10;5450:1;5442:7;:10::i;:::-;5438:59;;;5469:16;5483:1;5469:13;:16::i;:::-;5438:59;5118:386;;;;:::o;1000:30::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5512:151::-;5562:15;5597:10;5609:6;5588:28;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5562:55;;5628:13;5647:7;5628:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5512:151;;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o\",\"source\":\"pragma solidity ^0.7.4;\\r\\n\\r\\n//\\\"SPDX-License-Identifier: UNLICENSED\\\"\\r\\nimport \\\"./Vote.sol\\\";\\r\\n\\r\\ncontract VoteFactory{\\r\\n    \\r\\n    // Representation of an instance of Group\\r\\n    struct groupStruct {\\r\\n        string name;\\r\\n        string description;\\r\\n        address[] members; // NEW Assumption that members rarely quit      \\r\\n    }\\r\\n    \\r\\n    // Representation of an instance of User\\r\\n    struct userStruct {\\r\\n        address userAddress;\\r\\n        string name;\\r\\n        string email;\\r\\n        string password;\\r\\n        // address[] running;\\r\\n        // address[] createdElection;\\r\\n        // address[] createdPetition;\\r\\n        uint32[] groups; // NEW Assumption that users rarely quit\\r\\n        bool isAdmin;\\r\\n    }\\r\\n    \\r\\n    mapping(uint => groupStruct) public groupInfo; // KEY: groupID Value: group\\r\\n    uint32 groupCount;\\r\\n    address[] public deployedVotes;\\r\\n    mapping(address => userStruct) userInfo;\\r\\n    uint32 defaultGroupID = 1; // Use the getGroup(uint id) to access the default group\\r\\n    uint32[] public existingGroups; // NEW: Access all groups in the UI\\r\\n    \\r\\n    // Creates an instance of group and Updates the groupInfo mapping\\r\\n    // It also takes groupID as an input since the groupStruct(VALUE) is identified with a groupId(KEY)\\r\\n    function createGroup(string memory name, string memory description, uint32 groupID) public {\\r\\n        // IF statement to create a default group\\r\\n        if (!isGroup(1)) {\\r\\n            groupStruct storage studentGroup = groupInfo[1];\\r\\n            studentGroup.name = \\\"Student\\\";\\r\\n            studentGroup.description = \\\"Default Group\\\";\\r\\n            groupCount++;\\r\\n            existingGroups.push(defaultGroupID);\\r\\n        }\\r\\n        groupStruct storage g = groupInfo[groupID];\\r\\n        g.name = name;\\r\\n        g.description = description;\\r\\n        groupCount++;\\r\\n        existingGroups.push(groupID);\\r\\n    }\\r\\n\\r\\n    // Adds the groupID to the user's array of groups and Adds the user's address to the group's array of members\\r\\n    function registerGroup(uint32 groupID) public {\\r\\n        userStruct storage u = userInfo[msg.sender];\\r\\n        groupStruct storage g = groupInfo[groupID];\\r\\n        \\r\\n        require(groupID != 0);\\r\\n        require(!compareStrings(g.name, \\\"\\\")); // Validates the group's existence\\r\\n        require(!isUserGroup(groupID));\\r\\n        \\r\\n        //Update User\\r\\n        u.groups.push(groupID);\\r\\n        \\r\\n        // Update Group\\r\\n        g.members.push(u.userAddress);\\r\\n    }\\r\\n    \\r\\n    // Removes the groupID in the user's groups array and Removes the address in the group's member array\\r\\n    // using the Swap & Delete method (swaps the last element)\\r\\n    // Resources https://stackoverflow.com/questions/49051856/is-there-a-pop-functionality-for-solidity-arrays\\r\\n    // The inputs are very specific to prevent large computations (TO CHANGE DEPENDING ON PROJECT MANAGER'S CHOICE)\\r\\n    function leaveGroup(uint32 indexGroup, uint32 indexMember, uint32 groupID) public {\\r\\n        userStruct storage u = userInfo[msg.sender];\\r\\n        groupStruct storage g = groupInfo[groupID];\\r\\n        \\r\\n        // Remove the group from user\\r\\n        u.groups[indexGroup] = u.groups[u.groups.length - 1];\\r\\n        delete u.groups[u.groups.length - 1];\\r\\n        u.groups.pop();\\r\\n        \\r\\n        // Remove user from the group\\r\\n        g.members[indexMember] = g.members[g.members.length - 1];\\r\\n        delete g.members[g.members.length - 1];\\r\\n        g.members.pop();\\r\\n    }\\r\\n\\r\\n    // Verify if the user is part of the group\\r\\n    function isUserGroup(uint32 groupID) public view returns (bool) {\\r\\n        bool isStatus = false;\\r\\n        userStruct storage u = userInfo[msg.sender];\\r\\n        for (uint i = 0; i < u.groups.length; i++) {\\r\\n            isStatus = (u.groups[i] == groupID);\\r\\n        }\\r\\n        return isStatus;\\r\\n    }\\r\\n    \\r\\n    // Verify that the group exists in the mapping\\r\\n    function isGroup(uint32 groupID) public view returns (bool) {\\r\\n        groupStruct storage g = groupInfo[groupID];\\r\\n        bool isExist = !(compareStrings(g.name, \\\"\\\"));\\r\\n        return isExist;\\r\\n    }\\r\\n    \\r\\n    // Returns a specific group of the user\\r\\n    function getUserGroup(uint32 index) public view returns (uint32) {\\r\\n        userStruct storage u = userInfo[msg.sender];\\r\\n        return u.groups[index];\\r\\n    }\\r\\n    \\r\\n    // Returns the user's array of groups\\r\\n    function getUserAllGroups() public view returns (uint32[] memory) {\\r\\n        userStruct storage u = userInfo[msg.sender];\\r\\n        return u.groups;\\r\\n    }\\r\\n    \\r\\n    // Returns all members of the group\\r\\n    function getAllMembers(uint32 groupID) public view returns (address[] memory) {\\r\\n        groupStruct storage g = groupInfo[groupID];\\r\\n        return g.members;\\r\\n    }\\r\\n    \\r\\n    // Returns a specific group of the website\\r\\n    function getGroup(uint8 id) public view returns(string memory, string memory, address[] memory, uint) {\\r\\n        groupStruct storage g = groupInfo[id];\\r\\n        return (g.name, g.description, g.members, g.members.length);\\r\\n    }\\r\\n    \\r\\n    function getExistingGroups() public view returns(uint32[] memory) {\\r\\n        return existingGroups;\\r\\n    }\\r\\n    \\r\\n    function registerUser(string memory name, string memory email, string memory password) public {\\r\\n        userStruct storage u = userInfo[msg.sender]; //innitialize\\r\\n        u.name = name;\\r\\n        u.email = email;\\r\\n        u.password = password;\\r\\n        u.userAddress =  msg.sender;\\r\\n        u.isAdmin = true;\\r\\n        if (isGroup(1)) {\\r\\n            registerGroup(1);\\r\\n        }\\r\\n    }\\r\\n\\r\\n    function createVote(uint typeOf) public{\\r\\n        address newVote = address(new Vote(msg.sender, typeOf));\\r\\n        deployedVotes.push(newVote);\\r\\n    }\\r\\n    function loginUser(string memory password) public view returns (string memory, string memory, uint32[] memory, bool) {\\r\\n       userStruct storage u = userInfo[msg.sender];\\r\\n       require(compareStrings(password, u.password)); // NEW implemented the helper method\\r\\n       return(u.name, u.email, u.groups, u.isAdmin);\\r\\n    }\\r\\n\\r\\n    //NEED TO BE FIX (u.groups)\\r\\n    function getUser() public view returns (string memory, string memory, uint32[] memory, bool){\\r\\n        userStruct storage u = userInfo[msg.sender];\\r\\n        return(u.name, u.email, u.groups, u.isAdmin);\\r\\n    }\\r\\n    \\r\\n    function getDeployedVotes() public view returns (address[] memory) {\\r\\n        return deployedVotes;\\r\\n    }\\r\\n    \\r\\n    // Returns a boolean value of the comparison (HELPER METHOD)\\r\\n    // Based on https://ethereum.stackexchange.com/questions/30912/how-to-compare-strings-in-solidity/82739\\r\\n    function compareStrings(string memory a, string memory b) public pure returns (bool) {\\r\\n        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));\\r\\n    }   \\r\\n}\",\"sourcePath\":\"C:/Users/foubroker/Desktop/BAM/voting-at-mcgill-2/contracts/VoteFactory.sol\",\"ast\":{\"absolutePath\":\"/C/Users/foubroker/Desktop/BAM/voting-at-mcgill-2/contracts/VoteFactory.sol\",\"exportedSymbols\":{\"Vote\":[501],\"VoteFactory\":[1115]},\"id\":1116,\"license\":\"UNLICENSED\",\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":503,\"literals\":[\"solidity\",\"^\",\"0.7\",\".4\"],\"nodeType\":\"PragmaDirective\",\"src\":\"0:23:2\"},{\"absolutePath\":\"/C/Users/foubroker/Desktop/BAM/voting-at-mcgill-2/contracts/Vote.sol\",\"file\":\"./Vote.sol\",\"id\":504,\"nodeType\":\"ImportDirective\",\"scope\":1116,\"sourceUnit\":502,\"src\":\"68:20:2\",\"symbolAliases\":[],\"unitAlias\":\"\"},{\"abstract\":false,\"baseContracts\":[],\"contractDependencies\":[501],\"contractKind\":\"contract\",\"fullyImplemented\":true,\"id\":1115,\"linearizedBaseContracts\":[1115],\"name\":\"VoteFactory\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"canonicalName\":\"VoteFactory.groupStruct\",\"id\":512,\"members\":[{\"constant\":false,\"id\":506,\"mutability\":\"mutable\",\"name\":\"name\",\"nodeType\":\"VariableDeclaration\",\"scope\":512,\"src\":\"202:11:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":505,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"202:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":508,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":512,\"src\":\"224:18:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":507,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"224:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":511,\"mutability\":\"mutable\",\"name\":\"members\",\"nodeType\":\"VariableDeclaration\",\"scope\":512,\"src\":\"253:17:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":509,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"253:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":510,\"nodeType\":\"ArrayTypeName\",\"src\":\"253:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"}],\"name\":\"groupStruct\",\"nodeType\":\"StructDefinition\",\"scope\":1115,\"src\":\"172:155:2\",\"visibility\":\"public\"},{\"canonicalName\":\"VoteFactory.userStruct\",\"id\":526,\"members\":[{\"constant\":false,\"id\":514,\"mutability\":\"mutable\",\"name\":\"userAddress\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"414:19:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":513,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"414:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":516,\"mutability\":\"mutable\",\"name\":\"name\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"444:11:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":515,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"444:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":518,\"mutability\":\"mutable\",\"name\":\"email\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"466:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":517,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"466:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":520,\"mutability\":\"mutable\",\"name\":\"password\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"489:15:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":519,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"489:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":523,\"mutability\":\"mutable\",\"name\":\"groups\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"624:15:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage_ptr\",\"typeString\":\"uint32[]\"},\"typeName\":{\"baseType\":{\"id\":521,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"624:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"id\":522,\"nodeType\":\"ArrayTypeName\",\"src\":\"624:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage_ptr\",\"typeString\":\"uint32[]\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":525,\"mutability\":\"mutable\",\"name\":\"isAdmin\",\"nodeType\":\"VariableDeclaration\",\"scope\":526,\"src\":\"691:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":524,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"691:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"name\":\"userStruct\",\"nodeType\":\"StructDefinition\",\"scope\":1115,\"src\":\"385:326:2\",\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"03d480f3\",\"id\":530,\"mutability\":\"mutable\",\"name\":\"groupInfo\",\"nodeType\":\"VariableDeclaration\",\"scope\":1115,\"src\":\"723:45:2\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_groupStruct_$512_storage_$\",\"typeString\":\"mapping(uint256 => struct VoteFactory.groupStruct)\"},\"typeName\":{\"id\":529,\"keyType\":{\"id\":527,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"731:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Mapping\",\"src\":\"723:28:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_groupStruct_$512_storage_$\",\"typeString\":\"mapping(uint256 => struct VoteFactory.groupStruct)\"},\"valueType\":{\"id\":528,\"name\":\"groupStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":512,\"src\":\"739:11:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"}}},\"visibility\":\"public\"},{\"constant\":false,\"id\":532,\"mutability\":\"mutable\",\"name\":\"groupCount\",\"nodeType\":\"VariableDeclaration\",\"scope\":1115,\"src\":\"804:17:2\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"typeName\":{\"id\":531,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"804:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"visibility\":\"internal\"},{\"constant\":false,\"functionSelector\":\"c142ab00\",\"id\":535,\"mutability\":\"mutable\",\"name\":\"deployedVotes\",\"nodeType\":\"VariableDeclaration\",\"scope\":1115,\"src\":\"828:30:2\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":533,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"828:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":534,\"nodeType\":\"ArrayTypeName\",\"src\":\"828:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"public\"},{\"constant\":false,\"id\":539,\"mutability\":\"mutable\",\"name\":\"userInfo\",\"nodeType\":\"VariableDeclaration\",\"scope\":1115,\"src\":\"865:39:2\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_userStruct_$526_storage_$\",\"typeString\":\"mapping(address => struct VoteFactory.userStruct)\"},\"typeName\":{\"id\":538,\"keyType\":{\"id\":536,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"873:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"865:30:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_userStruct_$526_storage_$\",\"typeString\":\"mapping(address => struct VoteFactory.userStruct)\"},\"valueType\":{\"id\":537,\"name\":\"userStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":526,\"src\":\"884:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"}}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":542,\"mutability\":\"mutable\",\"name\":\"defaultGroupID\",\"nodeType\":\"VariableDeclaration\",\"scope\":1115,\"src\":\"911:25:2\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"typeName\":{\"id\":540,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"911:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"value\":{\"hexValue\":\"31\",\"id\":541,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"935:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"visibility\":\"internal\"},{\"constant\":false,\"functionSelector\":\"e670d800\",\"id\":545,\"mutability\":\"mutable\",\"name\":\"existingGroups\",\"nodeType\":\"VariableDeclaration\",\"scope\":1115,\"src\":\"1000:30:2\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[]\"},\"typeName\":{\"baseType\":{\"id\":543,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1000:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"id\":544,\"nodeType\":\"ArrayTypeName\",\"src\":\"1000:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage_ptr\",\"typeString\":\"uint32[]\"}},\"visibility\":\"public\"},{\"body\":{\"id\":614,\"nodeType\":\"Block\",\"src\":\"1346:515:2\",\"statements\":[{\"condition\":{\"id\":557,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"!\",\"prefix\":true,\"src\":\"1412:11:2\",\"subExpression\":{\"arguments\":[{\"hexValue\":\"31\",\"id\":555,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1421:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"}],\"id\":554,\"name\":\"isGroup\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":831,\"src\":\"1413:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_view$_t_uint32_$returns$_t_bool_$\",\"typeString\":\"function (uint32) view returns (bool)\"}},\"id\":556,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1413:10:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":586,\"nodeType\":\"IfStatement\",\"src\":\"1408:269:2\",\"trueBody\":{\"id\":585,\"nodeType\":\"Block\",\"src\":\"1425:252:2\",\"statements\":[{\"assignments\":[559],\"declarations\":[{\"constant\":false,\"id\":559,\"mutability\":\"mutable\",\"name\":\"studentGroup\",\"nodeType\":\"VariableDeclaration\",\"scope\":585,\"src\":\"1440:32:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"},\"typeName\":{\"id\":558,\"name\":\"groupStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":512,\"src\":\"1440:11:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"}},\"visibility\":\"internal\"}],\"id\":563,\"initialValue\":{\"baseExpression\":{\"id\":560,\"name\":\"groupInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":530,\"src\":\"1475:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_groupStruct_$512_storage_$\",\"typeString\":\"mapping(uint256 => struct VoteFactory.groupStruct storage ref)\"}},\"id\":562,\"indexExpression\":{\"hexValue\":\"31\",\"id\":561,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1485:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1475:12:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage\",\"typeString\":\"struct VoteFactory.groupStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"1440:47:2\"},{\"expression\":{\"id\":568,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":564,\"name\":\"studentGroup\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":559,\"src\":\"1502:12:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":566,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":506,\"src\":\"1502:17:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"hexValue\":\"53747564656e74\",\"id\":567,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1522:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_e898e77115f00dcda73cfc4c764c000e9321c213165627895a7e873dce9bd789\",\"typeString\":\"literal_string \\\"Student\\\"\"},\"value\":\"Student\"},\"src\":\"1502:29:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":569,\"nodeType\":\"ExpressionStatement\",\"src\":\"1502:29:2\"},{\"expression\":{\"id\":574,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":570,\"name\":\"studentGroup\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":559,\"src\":\"1546:12:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":572,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":508,\"src\":\"1546:24:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"hexValue\":\"44656661756c742047726f7570\",\"id\":573,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1573:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_f8635daad95d4fdb3fdc1212b14cae46909d34dec6cefda1e24815edd394df63\",\"typeString\":\"literal_string \\\"Default Group\\\"\"},\"value\":\"Default Group\"},\"src\":\"1546:42:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":575,\"nodeType\":\"ExpressionStatement\",\"src\":\"1546:42:2\"},{\"expression\":{\"id\":577,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"1603:12:2\",\"subExpression\":{\"id\":576,\"name\":\"groupCount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":532,\"src\":\"1603:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"id\":578,\"nodeType\":\"ExpressionStatement\",\"src\":\"1603:12:2\"},{\"expression\":{\"arguments\":[{\"id\":582,\"name\":\"defaultGroupID\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":542,\"src\":\"1650:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}],\"expression\":{\"id\":579,\"name\":\"existingGroups\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":545,\"src\":\"1630:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},\"id\":581,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"push\",\"nodeType\":\"MemberAccess\",\"src\":\"1630:19:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypush_nonpayable$_t_uint32_$returns$__$\",\"typeString\":\"function (uint32)\"}},\"id\":583,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1630:35:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":584,\"nodeType\":\"ExpressionStatement\",\"src\":\"1630:35:2\"}]}},{\"assignments\":[588],\"declarations\":[{\"constant\":false,\"id\":588,\"mutability\":\"mutable\",\"name\":\"g\",\"nodeType\":\"VariableDeclaration\",\"scope\":614,\"src\":\"1687:21:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"},\"typeName\":{\"id\":587,\"name\":\"groupStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":512,\"src\":\"1687:11:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"}},\"visibility\":\"internal\"}],\"id\":592,\"initialValue\":{\"baseExpression\":{\"id\":589,\"name\":\"groupInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":530,\"src\":\"1711:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_groupStruct_$512_storage_$\",\"typeString\":\"mapping(uint256 => struct VoteFactory.groupStruct storage ref)\"}},\"id\":591,\"indexExpression\":{\"id\":590,\"name\":\"groupID\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":551,\"src\":\"1721:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1711:18:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage\",\"typeString\":\"struct VoteFactory.groupStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"1687:42:2\"},{\"expression\":{\"id\":597,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":593,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":588,\"src\":\"1740:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":595,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":506,\"src\":\"1740:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":596,\"name\":\"name\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":547,\"src\":\"1749:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"1740:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":598,\"nodeType\":\"ExpressionStatement\",\"src\":\"1740:13:2\"},{\"expression\":{\"id\":603,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":599,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":588,\"src\":\"1764:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":601,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":508,\"src\":\"1764:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":602,\"name\":\"description\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":549,\"src\":\"1780:11:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"1764:27:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":604,\"nodeType\":\"ExpressionStatement\",\"src\":\"1764:27:2\"},{\"expression\":{\"id\":606,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"1802:12:2\",\"subExpression\":{\"id\":605,\"name\":\"groupCount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":532,\"src\":\"1802:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"id\":607,\"nodeType\":\"ExpressionStatement\",\"src\":\"1802:12:2\"},{\"expression\":{\"arguments\":[{\"id\":611,\"name\":\"groupID\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":551,\"src\":\"1845:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}],\"expression\":{\"id\":608,\"name\":\"existingGroups\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":545,\"src\":\"1825:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},\"id\":610,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"push\",\"nodeType\":\"MemberAccess\",\"src\":\"1825:19:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypush_nonpayable$_t_uint32_$returns$__$\",\"typeString\":\"function (uint32)\"}},\"id\":612,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1825:28:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":613,\"nodeType\":\"ExpressionStatement\",\"src\":\"1825:28:2\"}]},\"functionSelector\":\"bcab1fe3\",\"id\":615,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"createGroup\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":552,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":547,\"mutability\":\"mutable\",\"name\":\"name\",\"nodeType\":\"VariableDeclaration\",\"scope\":615,\"src\":\"1276:18:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":546,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1276:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":549,\"mutability\":\"mutable\",\"name\":\"description\",\"nodeType\":\"VariableDeclaration\",\"scope\":615,\"src\":\"1296:25:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":548,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1296:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":551,\"mutability\":\"mutable\",\"name\":\"groupID\",\"nodeType\":\"VariableDeclaration\",\"scope\":615,\"src\":\"1323:14:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"typeName\":{\"id\":550,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1323:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"visibility\":\"internal\"}],\"src\":\"1275:63:2\"},\"returnParameters\":{\"id\":553,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1346:0:2\"},\"scope\":1115,\"src\":\"1255:606:2\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":672,\"nodeType\":\"Block\",\"src\":\"2030:421:2\",\"statements\":[{\"assignments\":[621],\"declarations\":[{\"constant\":false,\"id\":621,\"mutability\":\"mutable\",\"name\":\"u\",\"nodeType\":\"VariableDeclaration\",\"scope\":672,\"src\":\"2041:20:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"},\"typeName\":{\"id\":620,\"name\":\"userStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":526,\"src\":\"2041:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"}},\"visibility\":\"internal\"}],\"id\":626,\"initialValue\":{\"baseExpression\":{\"id\":622,\"name\":\"userInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":539,\"src\":\"2064:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_userStruct_$526_storage_$\",\"typeString\":\"mapping(address => struct VoteFactory.userStruct storage ref)\"}},\"id\":625,\"indexExpression\":{\"expression\":{\"id\":623,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"2073:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":624,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"2073:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2064:20:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage\",\"typeString\":\"struct VoteFactory.userStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"2041:43:2\"},{\"assignments\":[628],\"declarations\":[{\"constant\":false,\"id\":628,\"mutability\":\"mutable\",\"name\":\"g\",\"nodeType\":\"VariableDeclaration\",\"scope\":672,\"src\":\"2095:21:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"},\"typeName\":{\"id\":627,\"name\":\"groupStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":512,\"src\":\"2095:11:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"}},\"visibility\":\"internal\"}],\"id\":632,\"initialValue\":{\"baseExpression\":{\"id\":629,\"name\":\"groupInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":530,\"src\":\"2119:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_groupStruct_$512_storage_$\",\"typeString\":\"mapping(uint256 => struct VoteFactory.groupStruct storage ref)\"}},\"id\":631,\"indexExpression\":{\"id\":630,\"name\":\"groupID\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":617,\"src\":\"2129:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2119:18:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage\",\"typeString\":\"struct VoteFactory.groupStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"2095:42:2\"},{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"id\":636,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":634,\"name\":\"groupID\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":617,\"src\":\"2166:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"!=\",\"rightExpression\":{\"hexValue\":\"30\",\"id\":635,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2177:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"src\":\"2166:12:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":633,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"2158:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":637,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2158:21:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":638,\"nodeType\":\"ExpressionStatement\",\"src\":\"2158:21:2\"},{\"expression\":{\"arguments\":[{\"id\":645,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"!\",\"prefix\":true,\"src\":\"2198:27:2\",\"subExpression\":{\"arguments\":[{\"expression\":{\"id\":641,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":628,\"src\":\"2214:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":642,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":506,\"src\":\"2214:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},{\"hexValue\":\"\",\"id\":643,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2222:2:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470\",\"typeString\":\"literal_string \\\"\\\"\"},\"value\":\"\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"},{\"typeIdentifier\":\"t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470\",\"typeString\":\"literal_string \\\"\\\"\"}],\"id\":640,\"name\":\"compareStrings\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1114,\"src\":\"2199:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bool_$\",\"typeString\":\"function (string memory,string memory) pure returns (bool)\"}},\"id\":644,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2199:26:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":639,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"2190:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":646,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2190:36:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":647,\"nodeType\":\"ExpressionStatement\",\"src\":\"2190:36:2\"},{\"expression\":{\"arguments\":[{\"id\":652,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"!\",\"prefix\":true,\"src\":\"2280:21:2\",\"subExpression\":{\"arguments\":[{\"id\":650,\"name\":\"groupID\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":617,\"src\":\"2293:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}],\"id\":649,\"name\":\"isUserGroup\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":805,\"src\":\"2281:11:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_view$_t_uint32_$returns$_t_bool_$\",\"typeString\":\"function (uint32) view returns (bool)\"}},\"id\":651,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2281:20:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":648,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"2272:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":653,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2272:30:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":654,\"nodeType\":\"ExpressionStatement\",\"src\":\"2272:30:2\"},{\"expression\":{\"arguments\":[{\"id\":660,\"name\":\"groupID\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":617,\"src\":\"2360:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}],\"expression\":{\"expression\":{\"id\":655,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":621,\"src\":\"2346:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":658,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"groups\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":523,\"src\":\"2346:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},\"id\":659,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"push\",\"nodeType\":\"MemberAccess\",\"src\":\"2346:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypush_nonpayable$_t_uint32_$returns$__$\",\"typeString\":\"function (uint32)\"}},\"id\":661,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2346:22:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":662,\"nodeType\":\"ExpressionStatement\",\"src\":\"2346:22:2\"},{\"expression\":{\"arguments\":[{\"expression\":{\"id\":668,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":621,\"src\":\"2429:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":669,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"userAddress\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":514,\"src\":\"2429:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"expression\":{\"expression\":{\"id\":663,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":628,\"src\":\"2414:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":666,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"members\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":511,\"src\":\"2414:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":667,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"push\",\"nodeType\":\"MemberAccess\",\"src\":\"2414:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypush_nonpayable$_t_address_$returns$__$\",\"typeString\":\"function (address)\"}},\"id\":670,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2414:29:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":671,\"nodeType\":\"ExpressionStatement\",\"src\":\"2414:29:2\"}]},\"functionSelector\":\"338b4741\",\"id\":673,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"registerGroup\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":618,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":617,\"mutability\":\"mutable\",\"name\":\"groupID\",\"nodeType\":\"VariableDeclaration\",\"scope\":673,\"src\":\"2007:14:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"typeName\":{\"id\":616,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2007:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"visibility\":\"internal\"}],\"src\":\"2006:16:2\"},\"returnParameters\":{\"id\":619,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2030:0:2\"},\"scope\":1115,\"src\":\"1984:467:2\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":759,\"nodeType\":\"Block\",\"src\":\"2945:490:2\",\"statements\":[{\"assignments\":[683],\"declarations\":[{\"constant\":false,\"id\":683,\"mutability\":\"mutable\",\"name\":\"u\",\"nodeType\":\"VariableDeclaration\",\"scope\":759,\"src\":\"2956:20:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"},\"typeName\":{\"id\":682,\"name\":\"userStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":526,\"src\":\"2956:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"}},\"visibility\":\"internal\"}],\"id\":688,\"initialValue\":{\"baseExpression\":{\"id\":684,\"name\":\"userInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":539,\"src\":\"2979:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_userStruct_$526_storage_$\",\"typeString\":\"mapping(address => struct VoteFactory.userStruct storage ref)\"}},\"id\":687,\"indexExpression\":{\"expression\":{\"id\":685,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"2988:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":686,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"2988:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2979:20:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage\",\"typeString\":\"struct VoteFactory.userStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"2956:43:2\"},{\"assignments\":[690],\"declarations\":[{\"constant\":false,\"id\":690,\"mutability\":\"mutable\",\"name\":\"g\",\"nodeType\":\"VariableDeclaration\",\"scope\":759,\"src\":\"3010:21:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"},\"typeName\":{\"id\":689,\"name\":\"groupStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":512,\"src\":\"3010:11:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"}},\"visibility\":\"internal\"}],\"id\":694,\"initialValue\":{\"baseExpression\":{\"id\":691,\"name\":\"groupInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":530,\"src\":\"3034:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_groupStruct_$512_storage_$\",\"typeString\":\"mapping(uint256 => struct VoteFactory.groupStruct storage ref)\"}},\"id\":693,\"indexExpression\":{\"id\":692,\"name\":\"groupID\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":679,\"src\":\"3044:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"3034:18:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage\",\"typeString\":\"struct VoteFactory.groupStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"3010:42:2\"},{\"expression\":{\"id\":708,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"expression\":{\"id\":695,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":683,\"src\":\"3112:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":698,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"groups\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":523,\"src\":\"3112:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},\"id\":699,\"indexExpression\":{\"id\":697,\"name\":\"indexGroup\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":675,\"src\":\"3121:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"3112:20:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"baseExpression\":{\"expression\":{\"id\":700,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":683,\"src\":\"3135:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":701,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"groups\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":523,\"src\":\"3135:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},\"id\":707,\"indexExpression\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":706,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"expression\":{\"id\":702,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":683,\"src\":\"3144:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":703,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"groups\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":523,\"src\":\"3144:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},\"id\":704,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"src\":\"3144:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"-\",\"rightExpression\":{\"hexValue\":\"31\",\"id\":705,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"3162:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"src\":\"3144:19:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"3135:29:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"src\":\"3112:52:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"id\":709,\"nodeType\":\"ExpressionStatement\",\"src\":\"3112:52:2\"},{\"expression\":{\"id\":718,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"delete\",\"prefix\":true,\"src\":\"3175:36:2\",\"subExpression\":{\"baseExpression\":{\"expression\":{\"id\":710,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":683,\"src\":\"3182:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":711,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"groups\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":523,\"src\":\"3182:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},\"id\":717,\"indexExpression\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":716,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"expression\":{\"id\":712,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":683,\"src\":\"3191:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":713,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"groups\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":523,\"src\":\"3191:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},\"id\":714,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"src\":\"3191:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"-\",\"rightExpression\":{\"hexValue\":\"31\",\"id\":715,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"3209:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"src\":\"3191:19:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"3182:29:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":719,\"nodeType\":\"ExpressionStatement\",\"src\":\"3175:36:2\"},{\"expression\":{\"arguments\":[],\"expression\":{\"argumentTypes\":[],\"expression\":{\"expression\":{\"id\":720,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":683,\"src\":\"3222:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":723,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"groups\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":523,\"src\":\"3222:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},\"id\":724,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"pop\",\"nodeType\":\"MemberAccess\",\"src\":\"3222:12:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypop_nonpayable$__$returns$__$\",\"typeString\":\"function ()\"}},\"id\":725,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"3222:14:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":726,\"nodeType\":\"ExpressionStatement\",\"src\":\"3222:14:2\"},{\"expression\":{\"id\":740,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"expression\":{\"id\":727,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":690,\"src\":\"3296:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":730,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"members\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":511,\"src\":\"3296:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":731,\"indexExpression\":{\"id\":729,\"name\":\"indexMember\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":677,\"src\":\"3306:11:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"3296:22:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"baseExpression\":{\"expression\":{\"id\":732,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":690,\"src\":\"3321:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":733,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"members\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":511,\"src\":\"3321:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":739,\"indexExpression\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":738,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"expression\":{\"id\":734,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":690,\"src\":\"3331:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":735,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"members\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":511,\"src\":\"3331:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":736,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"src\":\"3331:16:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"-\",\"rightExpression\":{\"hexValue\":\"31\",\"id\":737,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"3350:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"src\":\"3331:20:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"3321:31:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"3296:56:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":741,\"nodeType\":\"ExpressionStatement\",\"src\":\"3296:56:2\"},{\"expression\":{\"id\":750,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"delete\",\"prefix\":true,\"src\":\"3363:38:2\",\"subExpression\":{\"baseExpression\":{\"expression\":{\"id\":742,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":690,\"src\":\"3370:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":743,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"members\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":511,\"src\":\"3370:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":749,\"indexExpression\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":748,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"expression\":{\"id\":744,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":690,\"src\":\"3380:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":745,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"members\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":511,\"src\":\"3380:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":746,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"src\":\"3380:16:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"-\",\"rightExpression\":{\"hexValue\":\"31\",\"id\":747,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"3399:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"src\":\"3380:20:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"3370:31:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":751,\"nodeType\":\"ExpressionStatement\",\"src\":\"3363:38:2\"},{\"expression\":{\"arguments\":[],\"expression\":{\"argumentTypes\":[],\"expression\":{\"expression\":{\"id\":752,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":690,\"src\":\"3412:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":755,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"members\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":511,\"src\":\"3412:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":756,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"pop\",\"nodeType\":\"MemberAccess\",\"src\":\"3412:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypop_nonpayable$__$returns$__$\",\"typeString\":\"function ()\"}},\"id\":757,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"3412:15:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":758,\"nodeType\":\"ExpressionStatement\",\"src\":\"3412:15:2\"}]},\"functionSelector\":\"3f2e1f60\",\"id\":760,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"leaveGroup\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":680,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":675,\"mutability\":\"mutable\",\"name\":\"indexGroup\",\"nodeType\":\"VariableDeclaration\",\"scope\":760,\"src\":\"2883:17:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"typeName\":{\"id\":674,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2883:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":677,\"mutability\":\"mutable\",\"name\":\"indexMember\",\"nodeType\":\"VariableDeclaration\",\"scope\":760,\"src\":\"2902:18:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"typeName\":{\"id\":676,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2902:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":679,\"mutability\":\"mutable\",\"name\":\"groupID\",\"nodeType\":\"VariableDeclaration\",\"scope\":760,\"src\":\"2922:14:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"typeName\":{\"id\":678,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2922:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"visibility\":\"internal\"}],\"src\":\"2882:55:2\"},\"returnParameters\":{\"id\":681,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2945:0:2\"},\"scope\":1115,\"src\":\"2863:572:2\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":804,\"nodeType\":\"Block\",\"src\":\"3555:235:2\",\"statements\":[{\"assignments\":[768],\"declarations\":[{\"constant\":false,\"id\":768,\"mutability\":\"mutable\",\"name\":\"isStatus\",\"nodeType\":\"VariableDeclaration\",\"scope\":804,\"src\":\"3566:13:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":767,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3566:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"id\":770,\"initialValue\":{\"hexValue\":\"66616c7365\",\"id\":769,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"3582:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"false\"},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"3566:21:2\"},{\"assignments\":[772],\"declarations\":[{\"constant\":false,\"id\":772,\"mutability\":\"mutable\",\"name\":\"u\",\"nodeType\":\"VariableDeclaration\",\"scope\":804,\"src\":\"3598:20:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"},\"typeName\":{\"id\":771,\"name\":\"userStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":526,\"src\":\"3598:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"}},\"visibility\":\"internal\"}],\"id\":777,\"initialValue\":{\"baseExpression\":{\"id\":773,\"name\":\"userInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":539,\"src\":\"3621:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_userStruct_$526_storage_$\",\"typeString\":\"mapping(address => struct VoteFactory.userStruct storage ref)\"}},\"id\":776,\"indexExpression\":{\"expression\":{\"id\":774,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3630:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":775,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"3630:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"3621:20:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage\",\"typeString\":\"struct VoteFactory.userStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"3598:43:2\"},{\"body\":{\"id\":800,\"nodeType\":\"Block\",\"src\":\"3695:62:2\",\"statements\":[{\"expression\":{\"id\":798,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":790,\"name\":\"isStatus\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":768,\"src\":\"3710:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"components\":[{\"commonType\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"id\":796,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"baseExpression\":{\"expression\":{\"id\":791,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":772,\"src\":\"3722:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":792,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"groups\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":523,\"src\":\"3722:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},\"id\":794,\"indexExpression\":{\"id\":793,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":779,\"src\":\"3731:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"3722:11:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"id\":795,\"name\":\"groupID\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":762,\"src\":\"3737:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"src\":\"3722:22:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"id\":797,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"3721:24:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"src\":\"3710:35:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":799,\"nodeType\":\"ExpressionStatement\",\"src\":\"3710:35:2\"}]},\"condition\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":786,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":782,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":779,\"src\":\"3669:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<\",\"rightExpression\":{\"expression\":{\"expression\":{\"id\":783,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":772,\"src\":\"3673:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":784,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"groups\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":523,\"src\":\"3673:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},\"id\":785,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"src\":\"3673:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"3669:19:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":801,\"initializationExpression\":{\"assignments\":[779],\"declarations\":[{\"constant\":false,\"id\":779,\"mutability\":\"mutable\",\"name\":\"i\",\"nodeType\":\"VariableDeclaration\",\"scope\":801,\"src\":\"3657:6:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":778,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3657:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"id\":781,\"initialValue\":{\"hexValue\":\"30\",\"id\":780,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"3666:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"3657:10:2\"},\"loopExpression\":{\"expression\":{\"id\":788,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"3690:3:2\",\"subExpression\":{\"id\":787,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":779,\"src\":\"3690:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":789,\"nodeType\":\"ExpressionStatement\",\"src\":\"3690:3:2\"},\"nodeType\":\"ForStatement\",\"src\":\"3652:105:2\"},{\"expression\":{\"id\":802,\"name\":\"isStatus\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":768,\"src\":\"3774:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"functionReturnParameters\":766,\"id\":803,\"nodeType\":\"Return\",\"src\":\"3767:15:2\"}]},\"functionSelector\":\"a9905aa0\",\"id\":805,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"isUserGroup\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":763,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":762,\"mutability\":\"mutable\",\"name\":\"groupID\",\"nodeType\":\"VariableDeclaration\",\"scope\":805,\"src\":\"3512:14:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"typeName\":{\"id\":761,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3512:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"visibility\":\"internal\"}],\"src\":\"3511:16:2\"},\"returnParameters\":{\"id\":766,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":765,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":805,\"src\":\"3549:4:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":764,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3549:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"3548:6:2\"},\"scope\":1115,\"src\":\"3491:299:2\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":830,\"nodeType\":\"Block\",\"src\":\"3914:141:2\",\"statements\":[{\"assignments\":[813],\"declarations\":[{\"constant\":false,\"id\":813,\"mutability\":\"mutable\",\"name\":\"g\",\"nodeType\":\"VariableDeclaration\",\"scope\":830,\"src\":\"3925:21:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"},\"typeName\":{\"id\":812,\"name\":\"groupStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":512,\"src\":\"3925:11:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"}},\"visibility\":\"internal\"}],\"id\":817,\"initialValue\":{\"baseExpression\":{\"id\":814,\"name\":\"groupInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":530,\"src\":\"3949:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_groupStruct_$512_storage_$\",\"typeString\":\"mapping(uint256 => struct VoteFactory.groupStruct storage ref)\"}},\"id\":816,\"indexExpression\":{\"id\":815,\"name\":\"groupID\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":807,\"src\":\"3959:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"3949:18:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage\",\"typeString\":\"struct VoteFactory.groupStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"3925:42:2\"},{\"assignments\":[819],\"declarations\":[{\"constant\":false,\"id\":819,\"mutability\":\"mutable\",\"name\":\"isExist\",\"nodeType\":\"VariableDeclaration\",\"scope\":830,\"src\":\"3978:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":818,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3978:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"id\":827,\"initialValue\":{\"id\":826,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"!\",\"prefix\":true,\"src\":\"3993:29:2\",\"subExpression\":{\"components\":[{\"arguments\":[{\"expression\":{\"id\":821,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":813,\"src\":\"4010:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":822,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":506,\"src\":\"4010:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},{\"hexValue\":\"\",\"id\":823,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"4018:2:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470\",\"typeString\":\"literal_string \\\"\\\"\"},\"value\":\"\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"},{\"typeIdentifier\":\"t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470\",\"typeString\":\"literal_string \\\"\\\"\"}],\"id\":820,\"name\":\"compareStrings\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1114,\"src\":\"3995:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bool_$\",\"typeString\":\"function (string memory,string memory) pure returns (bool)\"}},\"id\":824,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"3995:26:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"id\":825,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"3994:28:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"3978:44:2\"},{\"expression\":{\"id\":828,\"name\":\"isExist\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":819,\"src\":\"4040:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"functionReturnParameters\":811,\"id\":829,\"nodeType\":\"Return\",\"src\":\"4033:14:2\"}]},\"functionSelector\":\"b5008c0f\",\"id\":831,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"isGroup\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":808,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":807,\"mutability\":\"mutable\",\"name\":\"groupID\",\"nodeType\":\"VariableDeclaration\",\"scope\":831,\"src\":\"3871:14:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"typeName\":{\"id\":806,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3871:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"visibility\":\"internal\"}],\"src\":\"3870:16:2\"},\"returnParameters\":{\"id\":811,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":810,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":831,\"src\":\"3908:4:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":809,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3908:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"3907:6:2\"},\"scope\":1115,\"src\":\"3854:201:2\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":850,\"nodeType\":\"Block\",\"src\":\"4177:95:2\",\"statements\":[{\"assignments\":[839],\"declarations\":[{\"constant\":false,\"id\":839,\"mutability\":\"mutable\",\"name\":\"u\",\"nodeType\":\"VariableDeclaration\",\"scope\":850,\"src\":\"4188:20:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"},\"typeName\":{\"id\":838,\"name\":\"userStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":526,\"src\":\"4188:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"}},\"visibility\":\"internal\"}],\"id\":844,\"initialValue\":{\"baseExpression\":{\"id\":840,\"name\":\"userInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":539,\"src\":\"4211:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_userStruct_$526_storage_$\",\"typeString\":\"mapping(address => struct VoteFactory.userStruct storage ref)\"}},\"id\":843,\"indexExpression\":{\"expression\":{\"id\":841,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4220:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":842,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"4220:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4211:20:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage\",\"typeString\":\"struct VoteFactory.userStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"4188:43:2\"},{\"expression\":{\"baseExpression\":{\"expression\":{\"id\":845,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":839,\"src\":\"4249:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":846,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"groups\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":523,\"src\":\"4249:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},\"id\":848,\"indexExpression\":{\"id\":847,\"name\":\"index\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":833,\"src\":\"4258:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4249:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"functionReturnParameters\":837,\"id\":849,\"nodeType\":\"Return\",\"src\":\"4242:22:2\"}]},\"functionSelector\":\"64363720\",\"id\":851,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getUserGroup\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":834,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":833,\"mutability\":\"mutable\",\"name\":\"index\",\"nodeType\":\"VariableDeclaration\",\"scope\":851,\"src\":\"4134:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"typeName\":{\"id\":832,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4134:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"visibility\":\"internal\"}],\"src\":\"4133:14:2\"},\"returnParameters\":{\"id\":837,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":836,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":851,\"src\":\"4169:6:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"typeName\":{\"id\":835,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4169:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"visibility\":\"internal\"}],\"src\":\"4168:8:2\"},\"scope\":1115,\"src\":\"4112:160:2\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":867,\"nodeType\":\"Block\",\"src\":\"4393:88:2\",\"statements\":[{\"assignments\":[858],\"declarations\":[{\"constant\":false,\"id\":858,\"mutability\":\"mutable\",\"name\":\"u\",\"nodeType\":\"VariableDeclaration\",\"scope\":867,\"src\":\"4404:20:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"},\"typeName\":{\"id\":857,\"name\":\"userStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":526,\"src\":\"4404:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"}},\"visibility\":\"internal\"}],\"id\":863,\"initialValue\":{\"baseExpression\":{\"id\":859,\"name\":\"userInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":539,\"src\":\"4427:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_userStruct_$526_storage_$\",\"typeString\":\"mapping(address => struct VoteFactory.userStruct storage ref)\"}},\"id\":862,\"indexExpression\":{\"expression\":{\"id\":860,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4436:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":861,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"4436:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4427:20:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage\",\"typeString\":\"struct VoteFactory.userStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"4404:43:2\"},{\"expression\":{\"expression\":{\"id\":864,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":858,\"src\":\"4465:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":865,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"groups\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":523,\"src\":\"4465:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},\"functionReturnParameters\":856,\"id\":866,\"nodeType\":\"Return\",\"src\":\"4458:15:2\"}]},\"functionSelector\":\"d2f4a802\",\"id\":868,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getUserAllGroups\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":852,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"4352:2:2\"},\"returnParameters\":{\"id\":856,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":855,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":868,\"src\":\"4376:15:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_memory_ptr\",\"typeString\":\"uint32[]\"},\"typeName\":{\"baseType\":{\"id\":853,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4376:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"id\":854,\"nodeType\":\"ArrayTypeName\",\"src\":\"4376:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage_ptr\",\"typeString\":\"uint32[]\"}},\"visibility\":\"internal\"}],\"src\":\"4375:17:2\"},\"scope\":1115,\"src\":\"4327:154:2\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":885,\"nodeType\":\"Block\",\"src\":\"4612:88:2\",\"statements\":[{\"assignments\":[877],\"declarations\":[{\"constant\":false,\"id\":877,\"mutability\":\"mutable\",\"name\":\"g\",\"nodeType\":\"VariableDeclaration\",\"scope\":885,\"src\":\"4623:21:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"},\"typeName\":{\"id\":876,\"name\":\"groupStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":512,\"src\":\"4623:11:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"}},\"visibility\":\"internal\"}],\"id\":881,\"initialValue\":{\"baseExpression\":{\"id\":878,\"name\":\"groupInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":530,\"src\":\"4647:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_groupStruct_$512_storage_$\",\"typeString\":\"mapping(uint256 => struct VoteFactory.groupStruct storage ref)\"}},\"id\":880,\"indexExpression\":{\"id\":879,\"name\":\"groupID\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":870,\"src\":\"4657:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4647:18:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage\",\"typeString\":\"struct VoteFactory.groupStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"4623:42:2\"},{\"expression\":{\"expression\":{\"id\":882,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":877,\"src\":\"4683:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":883,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"members\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":511,\"src\":\"4683:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"functionReturnParameters\":875,\"id\":884,\"nodeType\":\"Return\",\"src\":\"4676:16:2\"}]},\"functionSelector\":\"b0f97938\",\"id\":886,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getAllMembers\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":871,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":870,\"mutability\":\"mutable\",\"name\":\"groupID\",\"nodeType\":\"VariableDeclaration\",\"scope\":886,\"src\":\"4557:14:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"typeName\":{\"id\":869,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4557:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"visibility\":\"internal\"}],\"src\":\"4556:16:2\"},\"returnParameters\":{\"id\":875,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":874,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":886,\"src\":\"4594:16:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":872,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4594:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":873,\"nodeType\":\"ArrayTypeName\",\"src\":\"4594:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"}],\"src\":\"4593:18:2\"},\"scope\":1115,\"src\":\"4534:166:2\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":917,\"nodeType\":\"Block\",\"src\":\"4862:126:2\",\"statements\":[{\"assignments\":[901],\"declarations\":[{\"constant\":false,\"id\":901,\"mutability\":\"mutable\",\"name\":\"g\",\"nodeType\":\"VariableDeclaration\",\"scope\":917,\"src\":\"4873:21:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"},\"typeName\":{\"id\":900,\"name\":\"groupStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":512,\"src\":\"4873:11:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct\"}},\"visibility\":\"internal\"}],\"id\":905,\"initialValue\":{\"baseExpression\":{\"id\":902,\"name\":\"groupInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":530,\"src\":\"4897:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_uint256_$_t_struct$_groupStruct_$512_storage_$\",\"typeString\":\"mapping(uint256 => struct VoteFactory.groupStruct storage ref)\"}},\"id\":904,\"indexExpression\":{\"id\":903,\"name\":\"id\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":888,\"src\":\"4907:2:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint8\",\"typeString\":\"uint8\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4897:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage\",\"typeString\":\"struct VoteFactory.groupStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"4873:37:2\"},{\"expression\":{\"components\":[{\"expression\":{\"id\":906,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":901,\"src\":\"4929:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":907,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":506,\"src\":\"4929:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},{\"expression\":{\"id\":908,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":901,\"src\":\"4937:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":909,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"description\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":508,\"src\":\"4937:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},{\"expression\":{\"id\":910,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":901,\"src\":\"4952:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":911,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"members\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":511,\"src\":\"4952:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},{\"expression\":{\"expression\":{\"id\":912,\"name\":\"g\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":901,\"src\":\"4963:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_groupStruct_$512_storage_ptr\",\"typeString\":\"struct VoteFactory.groupStruct storage pointer\"}},\"id\":913,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"members\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":511,\"src\":\"4963:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":914,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"src\":\"4963:16:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"id\":915,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"4928:52:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$_t_string_storage_$_t_string_storage_$_t_array$_t_address_$dyn_storage_$_t_uint256_$\",\"typeString\":\"tuple(string storage ref,string storage ref,address[] storage ref,uint256)\"}},\"functionReturnParameters\":899,\"id\":916,\"nodeType\":\"Return\",\"src\":\"4921:59:2\"}]},\"functionSelector\":\"6638a0fa\",\"id\":918,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getGroup\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":889,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":888,\"mutability\":\"mutable\",\"name\":\"id\",\"nodeType\":\"VariableDeclaration\",\"scope\":918,\"src\":\"4778:8:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint8\",\"typeString\":\"uint8\"},\"typeName\":{\"id\":887,\"name\":\"uint8\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4778:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint8\",\"typeString\":\"uint8\"}},\"visibility\":\"internal\"}],\"src\":\"4777:10:2\"},\"returnParameters\":{\"id\":899,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":891,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":918,\"src\":\"4808:13:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":890,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4808:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":893,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":918,\"src\":\"4823:13:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":892,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4823:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":896,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":918,\"src\":\"4838:16:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":894,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4838:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":895,\"nodeType\":\"ArrayTypeName\",\"src\":\"4838:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":898,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":918,\"src\":\"4856:4:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":897,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4856:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"4807:54:2\"},\"scope\":1115,\"src\":\"4760:228:2\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":926,\"nodeType\":\"Block\",\"src\":\"5066:40:2\",\"statements\":[{\"expression\":{\"id\":924,\"name\":\"existingGroups\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":545,\"src\":\"5084:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},\"functionReturnParameters\":923,\"id\":925,\"nodeType\":\"Return\",\"src\":\"5077:21:2\"}]},\"functionSelector\":\"0073d7ae\",\"id\":927,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getExistingGroups\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":919,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"5026:2:2\"},\"returnParameters\":{\"id\":923,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":922,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":927,\"src\":\"5049:15:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_memory_ptr\",\"typeString\":\"uint32[]\"},\"typeName\":{\"baseType\":{\"id\":920,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5049:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"id\":921,\"nodeType\":\"ArrayTypeName\",\"src\":\"5049:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage_ptr\",\"typeString\":\"uint32[]\"}},\"visibility\":\"internal\"}],\"src\":\"5048:17:2\"},\"scope\":1115,\"src\":\"5000:106:2\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":983,\"nodeType\":\"Block\",\"src\":\"5212:292:2\",\"statements\":[{\"assignments\":[937],\"declarations\":[{\"constant\":false,\"id\":937,\"mutability\":\"mutable\",\"name\":\"u\",\"nodeType\":\"VariableDeclaration\",\"scope\":983,\"src\":\"5223:20:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"},\"typeName\":{\"id\":936,\"name\":\"userStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":526,\"src\":\"5223:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"}},\"visibility\":\"internal\"}],\"id\":942,\"initialValue\":{\"baseExpression\":{\"id\":938,\"name\":\"userInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":539,\"src\":\"5246:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_userStruct_$526_storage_$\",\"typeString\":\"mapping(address => struct VoteFactory.userStruct storage ref)\"}},\"id\":941,\"indexExpression\":{\"expression\":{\"id\":939,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"5255:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":940,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"5255:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"5246:20:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage\",\"typeString\":\"struct VoteFactory.userStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"5223:43:2\"},{\"expression\":{\"id\":947,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":943,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":937,\"src\":\"5291:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":945,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":516,\"src\":\"5291:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":946,\"name\":\"name\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":929,\"src\":\"5300:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"5291:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":948,\"nodeType\":\"ExpressionStatement\",\"src\":\"5291:13:2\"},{\"expression\":{\"id\":953,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":949,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":937,\"src\":\"5315:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":951,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"email\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":518,\"src\":\"5315:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":952,\"name\":\"email\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":931,\"src\":\"5325:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"5315:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":954,\"nodeType\":\"ExpressionStatement\",\"src\":\"5315:15:2\"},{\"expression\":{\"id\":959,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":955,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":937,\"src\":\"5341:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":957,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"password\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":520,\"src\":\"5341:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":958,\"name\":\"password\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":933,\"src\":\"5354:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"5341:21:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":960,\"nodeType\":\"ExpressionStatement\",\"src\":\"5341:21:2\"},{\"expression\":{\"id\":966,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":961,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":937,\"src\":\"5373:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":963,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"userAddress\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":514,\"src\":\"5373:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"expression\":{\"id\":964,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"5390:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":965,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"5390:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"5373:27:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":967,\"nodeType\":\"ExpressionStatement\",\"src\":\"5373:27:2\"},{\"expression\":{\"id\":972,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"id\":968,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":937,\"src\":\"5411:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":970,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"isAdmin\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":525,\"src\":\"5411:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"hexValue\":\"74727565\",\"id\":971,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5423:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"src\":\"5411:16:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":973,\"nodeType\":\"ExpressionStatement\",\"src\":\"5411:16:2\"},{\"condition\":{\"arguments\":[{\"hexValue\":\"31\",\"id\":975,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5450:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"}],\"id\":974,\"name\":\"isGroup\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":831,\"src\":\"5442:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_view$_t_uint32_$returns$_t_bool_$\",\"typeString\":\"function (uint32) view returns (bool)\"}},\"id\":976,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5442:10:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":982,\"nodeType\":\"IfStatement\",\"src\":\"5438:59:2\",\"trueBody\":{\"id\":981,\"nodeType\":\"Block\",\"src\":\"5454:43:2\",\"statements\":[{\"expression\":{\"arguments\":[{\"hexValue\":\"31\",\"id\":978,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5483:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"}],\"id\":977,\"name\":\"registerGroup\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":673,\"src\":\"5469:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_nonpayable$_t_uint32_$returns$__$\",\"typeString\":\"function (uint32)\"}},\"id\":979,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5469:16:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":980,\"nodeType\":\"ExpressionStatement\",\"src\":\"5469:16:2\"}]}}]},\"functionSelector\":\"d637dcfa\",\"id\":984,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"registerUser\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":934,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":929,\"mutability\":\"mutable\",\"name\":\"name\",\"nodeType\":\"VariableDeclaration\",\"scope\":984,\"src\":\"5140:18:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":928,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5140:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":931,\"mutability\":\"mutable\",\"name\":\"email\",\"nodeType\":\"VariableDeclaration\",\"scope\":984,\"src\":\"5160:19:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":930,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5160:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":933,\"mutability\":\"mutable\",\"name\":\"password\",\"nodeType\":\"VariableDeclaration\",\"scope\":984,\"src\":\"5181:22:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":932,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5181:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"src\":\"5139:65:2\"},\"returnParameters\":{\"id\":935,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"5212:0:2\"},\"scope\":1115,\"src\":\"5118:386:2\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":1007,\"nodeType\":\"Block\",\"src\":\"5551:112:2\",\"statements\":[{\"assignments\":[990],\"declarations\":[{\"constant\":false,\"id\":990,\"mutability\":\"mutable\",\"name\":\"newVote\",\"nodeType\":\"VariableDeclaration\",\"scope\":1007,\"src\":\"5562:15:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":989,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5562:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"id\":1000,\"initialValue\":{\"arguments\":[{\"arguments\":[{\"expression\":{\"id\":995,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"5597:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":996,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"5597:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},{\"id\":997,\"name\":\"typeOf\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":986,\"src\":\"5609:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":994,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"NewExpression\",\"src\":\"5588:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_creation_nonpayable$_t_address_$_t_uint256_$returns$_t_contract$_Vote_$501_$\",\"typeString\":\"function (address,uint256) returns (contract Vote)\"},\"typeName\":{\"id\":993,\"name\":\"Vote\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":501,\"src\":\"5592:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_Vote_$501\",\"typeString\":\"contract Vote\"}}},\"id\":998,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5588:28:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_Vote_$501\",\"typeString\":\"contract Vote\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_contract$_Vote_$501\",\"typeString\":\"contract Vote\"}],\"id\":992,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"nodeType\":\"ElementaryTypeNameExpression\",\"src\":\"5580:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_type$_t_address_$\",\"typeString\":\"type(address)\"},\"typeName\":{\"id\":991,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5580:7:2\",\"typeDescriptions\":{}}},\"id\":999,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"typeConversion\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5580:37:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"5562:55:2\"},{\"expression\":{\"arguments\":[{\"id\":1004,\"name\":\"newVote\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":990,\"src\":\"5647:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"expression\":{\"id\":1001,\"name\":\"deployedVotes\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":535,\"src\":\"5628:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":1003,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"push\",\"nodeType\":\"MemberAccess\",\"src\":\"5628:18:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypush_nonpayable$_t_address_$returns$__$\",\"typeString\":\"function (address)\"}},\"id\":1005,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5628:27:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":1006,\"nodeType\":\"ExpressionStatement\",\"src\":\"5628:27:2\"}]},\"functionSelector\":\"fa954aa0\",\"id\":1008,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"createVote\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":987,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":986,\"mutability\":\"mutable\",\"name\":\"typeOf\",\"nodeType\":\"VariableDeclaration\",\"scope\":1008,\"src\":\"5532:11:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":985,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5532:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"5531:13:2\"},\"returnParameters\":{\"id\":988,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"5551:0:2\"},\"scope\":1115,\"src\":\"5512:151:2\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":1047,\"nodeType\":\"Block\",\"src\":\"5786:207:2\",\"statements\":[{\"assignments\":[1023],\"declarations\":[{\"constant\":false,\"id\":1023,\"mutability\":\"mutable\",\"name\":\"u\",\"nodeType\":\"VariableDeclaration\",\"scope\":1047,\"src\":\"5796:20:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"},\"typeName\":{\"id\":1022,\"name\":\"userStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":526,\"src\":\"5796:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"}},\"visibility\":\"internal\"}],\"id\":1028,\"initialValue\":{\"baseExpression\":{\"id\":1024,\"name\":\"userInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":539,\"src\":\"5819:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_userStruct_$526_storage_$\",\"typeString\":\"mapping(address => struct VoteFactory.userStruct storage ref)\"}},\"id\":1027,\"indexExpression\":{\"expression\":{\"id\":1025,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"5828:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":1026,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"5828:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"5819:20:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage\",\"typeString\":\"struct VoteFactory.userStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"5796:43:2\"},{\"expression\":{\"arguments\":[{\"arguments\":[{\"id\":1031,\"name\":\"password\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1010,\"src\":\"5872:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},{\"expression\":{\"id\":1032,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1023,\"src\":\"5882:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":1033,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"password\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":520,\"src\":\"5882:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"},{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}],\"id\":1030,\"name\":\"compareStrings\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1114,\"src\":\"5857:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bool_$\",\"typeString\":\"function (string memory,string memory) pure returns (bool)\"}},\"id\":1034,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5857:36:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":1029,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"5849:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":1035,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5849:45:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":1036,\"nodeType\":\"ExpressionStatement\",\"src\":\"5849:45:2\"},{\"expression\":{\"components\":[{\"expression\":{\"id\":1037,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1023,\"src\":\"5948:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":1038,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":516,\"src\":\"5948:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},{\"expression\":{\"id\":1039,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1023,\"src\":\"5956:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":1040,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"email\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":518,\"src\":\"5956:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},{\"expression\":{\"id\":1041,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1023,\"src\":\"5965:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":1042,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"groups\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":523,\"src\":\"5965:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},{\"expression\":{\"id\":1043,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1023,\"src\":\"5975:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":1044,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"isAdmin\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":525,\"src\":\"5975:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"id\":1045,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"5947:38:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$_t_string_storage_$_t_string_storage_$_t_array$_t_uint32_$dyn_storage_$_t_bool_$\",\"typeString\":\"tuple(string storage ref,string storage ref,uint32[] storage ref,bool)\"}},\"functionReturnParameters\":1021,\"id\":1046,\"nodeType\":\"Return\",\"src\":\"5941:44:2\"}]},\"functionSelector\":\"1c14ce5e\",\"id\":1048,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"loginUser\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":1011,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":1010,\"mutability\":\"mutable\",\"name\":\"password\",\"nodeType\":\"VariableDeclaration\",\"scope\":1048,\"src\":\"5688:22:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":1009,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5688:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"src\":\"5687:24:2\"},\"returnParameters\":{\"id\":1021,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":1013,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":1048,\"src\":\"5733:13:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":1012,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5733:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":1015,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":1048,\"src\":\"5748:13:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":1014,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5748:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":1018,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":1048,\"src\":\"5763:15:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_memory_ptr\",\"typeString\":\"uint32[]\"},\"typeName\":{\"baseType\":{\"id\":1016,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5763:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"id\":1017,\"nodeType\":\"ArrayTypeName\",\"src\":\"5763:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage_ptr\",\"typeString\":\"uint32[]\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":1020,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":1048,\"src\":\"5780:4:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":1019,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5780:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"5732:53:2\"},\"scope\":1115,\"src\":\"5669:324:2\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":1077,\"nodeType\":\"Block\",\"src\":\"6126:117:2\",\"statements\":[{\"assignments\":[1061],\"declarations\":[{\"constant\":false,\"id\":1061,\"mutability\":\"mutable\",\"name\":\"u\",\"nodeType\":\"VariableDeclaration\",\"scope\":1077,\"src\":\"6137:20:2\",\"stateVariable\":false,\"storageLocation\":\"storage\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"},\"typeName\":{\"id\":1060,\"name\":\"userStruct\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":526,\"src\":\"6137:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct\"}},\"visibility\":\"internal\"}],\"id\":1066,\"initialValue\":{\"baseExpression\":{\"id\":1062,\"name\":\"userInfo\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":539,\"src\":\"6160:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_struct$_userStruct_$526_storage_$\",\"typeString\":\"mapping(address => struct VoteFactory.userStruct storage ref)\"}},\"id\":1065,\"indexExpression\":{\"expression\":{\"id\":1063,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"6169:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":1064,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"6169:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"6160:20:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage\",\"typeString\":\"struct VoteFactory.userStruct storage ref\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"6137:43:2\"},{\"expression\":{\"components\":[{\"expression\":{\"id\":1067,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1061,\"src\":\"6198:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":1068,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"name\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":516,\"src\":\"6198:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},{\"expression\":{\"id\":1069,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1061,\"src\":\"6206:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":1070,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"email\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":518,\"src\":\"6206:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},{\"expression\":{\"id\":1071,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1061,\"src\":\"6215:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":1072,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"groups\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":523,\"src\":\"6215:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage\",\"typeString\":\"uint32[] storage ref\"}},{\"expression\":{\"id\":1073,\"name\":\"u\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1061,\"src\":\"6225:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_userStruct_$526_storage_ptr\",\"typeString\":\"struct VoteFactory.userStruct storage pointer\"}},\"id\":1074,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"isAdmin\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":525,\"src\":\"6225:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"id\":1075,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"6197:38:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$_t_string_storage_$_t_string_storage_$_t_array$_t_uint32_$dyn_storage_$_t_bool_$\",\"typeString\":\"tuple(string storage ref,string storage ref,uint32[] storage ref,bool)\"}},\"functionReturnParameters\":1059,\"id\":1076,\"nodeType\":\"Return\",\"src\":\"6191:44:2\"}]},\"functionSelector\":\"832880e7\",\"id\":1078,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getUser\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":1049,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"6050:2:2\"},\"returnParameters\":{\"id\":1059,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":1051,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":1078,\"src\":\"6074:13:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":1050,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"6074:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":1053,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":1078,\"src\":\"6089:13:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":1052,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"6089:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":1056,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":1078,\"src\":\"6104:15:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_memory_ptr\",\"typeString\":\"uint32[]\"},\"typeName\":{\"baseType\":{\"id\":1054,\"name\":\"uint32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"6104:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}},\"id\":1055,\"nodeType\":\"ArrayTypeName\",\"src\":\"6104:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint32_$dyn_storage_ptr\",\"typeString\":\"uint32[]\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":1058,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":1078,\"src\":\"6121:4:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":1057,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"6121:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"6073:53:2\"},\"scope\":1115,\"src\":\"6034:209:2\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":1086,\"nodeType\":\"Block\",\"src\":\"6322:39:2\",\"statements\":[{\"expression\":{\"id\":1084,\"name\":\"deployedVotes\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":535,\"src\":\"6340:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"functionReturnParameters\":1083,\"id\":1085,\"nodeType\":\"Return\",\"src\":\"6333:20:2\"}]},\"functionSelector\":\"ca9cdfff\",\"id\":1087,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getDeployedVotes\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":1079,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"6280:2:2\"},\"returnParameters\":{\"id\":1083,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":1082,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":1087,\"src\":\"6304:16:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":1080,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"6304:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":1081,\"nodeType\":\"ArrayTypeName\",\"src\":\"6304:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"visibility\":\"internal\"}],\"src\":\"6303:18:2\"},\"scope\":1115,\"src\":\"6255:106:2\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":1113,\"nodeType\":\"Block\",\"src\":\"6633:96:2\",\"statements\":[{\"expression\":{\"components\":[{\"commonType\":{\"typeIdentifier\":\"t_bytes32\",\"typeString\":\"bytes32\"},\"id\":1110,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"arguments\":[{\"arguments\":[{\"components\":[{\"id\":1099,\"name\":\"a\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1089,\"src\":\"6680:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}}],\"id\":1100,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"6679:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}],\"expression\":{\"id\":1097,\"name\":\"abi\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-1,\"src\":\"6662:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_abi\",\"typeString\":\"abi\"}},\"id\":1098,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"memberName\":\"encodePacked\",\"nodeType\":\"MemberAccess\",\"src\":\"6662:16:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$\",\"typeString\":\"function () pure returns (bytes memory)\"}},\"id\":1101,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"6662:21:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_bytes_memory_ptr\",\"typeString\":\"bytes memory\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bytes_memory_ptr\",\"typeString\":\"bytes memory\"}],\"id\":1096,\"name\":\"keccak256\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-8,\"src\":\"6652:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$\",\"typeString\":\"function (bytes memory) pure returns (bytes32)\"}},\"id\":1102,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"6652:32:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_bytes32\",\"typeString\":\"bytes32\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"arguments\":[{\"arguments\":[{\"components\":[{\"id\":1106,\"name\":\"b\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":1091,\"src\":\"6716:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}}],\"id\":1107,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"6715:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}],\"expression\":{\"id\":1104,\"name\":\"abi\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-1,\"src\":\"6698:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_abi\",\"typeString\":\"abi\"}},\"id\":1105,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"memberName\":\"encodePacked\",\"nodeType\":\"MemberAccess\",\"src\":\"6698:16:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$\",\"typeString\":\"function () pure returns (bytes memory)\"}},\"id\":1108,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"6698:21:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_bytes_memory_ptr\",\"typeString\":\"bytes memory\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bytes_memory_ptr\",\"typeString\":\"bytes memory\"}],\"id\":1103,\"name\":\"keccak256\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-8,\"src\":\"6688:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$\",\"typeString\":\"function (bytes memory) pure returns (bytes32)\"}},\"id\":1109,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"6688:32:2\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_bytes32\",\"typeString\":\"bytes32\"}},\"src\":\"6652:68:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"id\":1111,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"6651:70:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"functionReturnParameters\":1095,\"id\":1112,\"nodeType\":\"Return\",\"src\":\"6644:77:2\"}]},\"functionSelector\":\"bed34bba\",\"id\":1114,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"compareStrings\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":1092,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":1089,\"mutability\":\"mutable\",\"name\":\"a\",\"nodeType\":\"VariableDeclaration\",\"scope\":1114,\"src\":\"6572:15:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":1088,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"6572:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":1091,\"mutability\":\"mutable\",\"name\":\"b\",\"nodeType\":\"VariableDeclaration\",\"scope\":1114,\"src\":\"6589:15:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":1090,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"6589:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"src\":\"6571:34:2\"},\"returnParameters\":{\"id\":1095,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":1094,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":1114,\"src\":\"6627:4:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":1093,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"6627:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"6626:6:2\"},\"scope\":1115,\"src\":\"6548:181:2\",\"stateMutability\":\"pure\",\"virtual\":false,\"visibility\":\"public\"}],\"scope\":1116,\"src\":\"92:6643:2\"}],\"src\":\"0:6735:2\"},\"legacyAST\":{\"attributes\":{\"absolutePath\":\"/C/Users/foubroker/Desktop/BAM/voting-at-mcgill-2/contracts/VoteFactory.sol\",\"exportedSymbols\":{\"Vote\":[501],\"VoteFactory\":[1115]},\"license\":\"UNLICENSED\"},\"children\":[{\"attributes\":{\"literals\":[\"solidity\",\"^\",\"0.7\",\".4\"]},\"id\":503,\"name\":\"PragmaDirective\",\"src\":\"0:23:2\"},{\"attributes\":{\"SourceUnit\":502,\"absolutePath\":\"/C/Users/foubroker/Desktop/BAM/voting-at-mcgill-2/contracts/Vote.sol\",\"file\":\"./Vote.sol\",\"scope\":1116,\"symbolAliases\":[null],\"unitAlias\":\"\"},\"id\":504,\"name\":\"ImportDirective\",\"src\":\"68:20:2\"},{\"attributes\":{\"abstract\":false,\"baseContracts\":[null],\"contractDependencies\":[501],\"contractKind\":\"contract\",\"fullyImplemented\":true,\"linearizedBaseContracts\":[1115],\"name\":\"VoteFactory\",\"scope\":1116},\"children\":[{\"attributes\":{\"canonicalName\":\"VoteFactory.groupStruct\",\"name\":\"groupStruct\",\"scope\":1115,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"name\",\"scope\":512,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":505,\"name\":\"ElementaryTypeName\",\"src\":\"202:6:2\"}],\"id\":506,\"name\":\"VariableDeclaration\",\"src\":\"202:11:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":512,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":507,\"name\":\"ElementaryTypeName\",\"src\":\"224:6:2\"}],\"id\":508,\"name\":\"VariableDeclaration\",\"src\":\"224:18:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"members\",\"scope\":512,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":509,\"name\":\"ElementaryTypeName\",\"src\":\"253:7:2\"}],\"id\":510,\"name\":\"ArrayTypeName\",\"src\":\"253:9:2\"}],\"id\":511,\"name\":\"VariableDeclaration\",\"src\":\"253:17:2\"}],\"id\":512,\"name\":\"StructDefinition\",\"src\":\"172:155:2\"},{\"attributes\":{\"canonicalName\":\"VoteFactory.userStruct\",\"name\":\"userStruct\",\"scope\":1115,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"userAddress\",\"scope\":526,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":513,\"name\":\"ElementaryTypeName\",\"src\":\"414:7:2\"}],\"id\":514,\"name\":\"VariableDeclaration\",\"src\":\"414:19:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"name\",\"scope\":526,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":515,\"name\":\"ElementaryTypeName\",\"src\":\"444:6:2\"}],\"id\":516,\"name\":\"VariableDeclaration\",\"src\":\"444:11:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"email\",\"scope\":526,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":517,\"name\":\"ElementaryTypeName\",\"src\":\"466:6:2\"}],\"id\":518,\"name\":\"VariableDeclaration\",\"src\":\"466:12:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"password\",\"scope\":526,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":519,\"name\":\"ElementaryTypeName\",\"src\":\"489:6:2\"}],\"id\":520,\"name\":\"VariableDeclaration\",\"src\":\"489:15:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"groups\",\"scope\":526,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint32[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"uint32[]\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":521,\"name\":\"ElementaryTypeName\",\"src\":\"624:6:2\"}],\"id\":522,\"name\":\"ArrayTypeName\",\"src\":\"624:8:2\"}],\"id\":523,\"name\":\"VariableDeclaration\",\"src\":\"624:15:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"isAdmin\",\"scope\":526,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"bool\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":524,\"name\":\"ElementaryTypeName\",\"src\":\"691:4:2\"}],\"id\":525,\"name\":\"VariableDeclaration\",\"src\":\"691:12:2\"}],\"id\":526,\"name\":\"StructDefinition\",\"src\":\"385:326:2\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"03d480f3\",\"mutability\":\"mutable\",\"name\":\"groupInfo\",\"scope\":1115,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"mapping(uint256 => struct VoteFactory.groupStruct)\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"type\":\"mapping(uint256 => struct VoteFactory.groupStruct)\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":527,\"name\":\"ElementaryTypeName\",\"src\":\"731:4:2\"},{\"attributes\":{\"name\":\"groupStruct\",\"referencedDeclaration\":512,\"type\":\"struct VoteFactory.groupStruct\"},\"id\":528,\"name\":\"UserDefinedTypeName\",\"src\":\"739:11:2\"}],\"id\":529,\"name\":\"Mapping\",\"src\":\"723:28:2\"}],\"id\":530,\"name\":\"VariableDeclaration\",\"src\":\"723:45:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"groupCount\",\"scope\":1115,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"uint32\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":531,\"name\":\"ElementaryTypeName\",\"src\":\"804:6:2\"}],\"id\":532,\"name\":\"VariableDeclaration\",\"src\":\"804:17:2\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"c142ab00\",\"mutability\":\"mutable\",\"name\":\"deployedVotes\",\"scope\":1115,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"address[]\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":533,\"name\":\"ElementaryTypeName\",\"src\":\"828:7:2\"}],\"id\":534,\"name\":\"ArrayTypeName\",\"src\":\"828:9:2\"}],\"id\":535,\"name\":\"VariableDeclaration\",\"src\":\"828:30:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"userInfo\",\"scope\":1115,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"mapping(address => struct VoteFactory.userStruct)\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"mapping(address => struct VoteFactory.userStruct)\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"type\":\"address\"},\"id\":536,\"name\":\"ElementaryTypeName\",\"src\":\"873:7:2\"},{\"attributes\":{\"name\":\"userStruct\",\"referencedDeclaration\":526,\"type\":\"struct VoteFactory.userStruct\"},\"id\":537,\"name\":\"UserDefinedTypeName\",\"src\":\"884:10:2\"}],\"id\":538,\"name\":\"Mapping\",\"src\":\"865:30:2\"}],\"id\":539,\"name\":\"VariableDeclaration\",\"src\":\"865:39:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"defaultGroupID\",\"scope\":1115,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"uint32\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":540,\"name\":\"ElementaryTypeName\",\"src\":\"911:6:2\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":541,\"name\":\"Literal\",\"src\":\"935:1:2\"}],\"id\":542,\"name\":\"VariableDeclaration\",\"src\":\"911:25:2\"},{\"attributes\":{\"constant\":false,\"functionSelector\":\"e670d800\",\"mutability\":\"mutable\",\"name\":\"existingGroups\",\"scope\":1115,\"stateVariable\":true,\"storageLocation\":\"default\",\"type\":\"uint32[]\",\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"type\":\"uint32[]\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":543,\"name\":\"ElementaryTypeName\",\"src\":\"1000:6:2\"}],\"id\":544,\"name\":\"ArrayTypeName\",\"src\":\"1000:8:2\"}],\"id\":545,\"name\":\"VariableDeclaration\",\"src\":\"1000:30:2\"},{\"attributes\":{\"functionSelector\":\"bcab1fe3\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"createGroup\",\"scope\":1115,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"name\",\"scope\":615,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":546,\"name\":\"ElementaryTypeName\",\"src\":\"1276:6:2\"}],\"id\":547,\"name\":\"VariableDeclaration\",\"src\":\"1276:18:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"description\",\"scope\":615,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":548,\"name\":\"ElementaryTypeName\",\"src\":\"1296:6:2\"}],\"id\":549,\"name\":\"VariableDeclaration\",\"src\":\"1296:25:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"groupID\",\"scope\":615,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint32\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":550,\"name\":\"ElementaryTypeName\",\"src\":\"1323:6:2\"}],\"id\":551,\"name\":\"VariableDeclaration\",\"src\":\"1323:14:2\"}],\"id\":552,\"name\":\"ParameterList\",\"src\":\"1275:63:2\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":553,\"name\":\"ParameterList\",\"src\":\"1346:0:2\"},{\"children\":[{\"attributes\":{},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"!\",\"prefix\":true,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"bool\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"}],\"overloadedDeclarations\":[null],\"referencedDeclaration\":831,\"type\":\"function (uint32) view returns (bool)\",\"value\":\"isGroup\"},\"id\":554,\"name\":\"Identifier\",\"src\":\"1413:7:2\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":555,\"name\":\"Literal\",\"src\":\"1421:1:2\"}],\"id\":556,\"name\":\"FunctionCall\",\"src\":\"1413:10:2\"}],\"id\":557,\"name\":\"UnaryOperation\",\"src\":\"1412:11:2\"},{\"children\":[{\"attributes\":{\"assignments\":[559]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"studentGroup\",\"scope\":585,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.groupStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"groupStruct\",\"referencedDeclaration\":512,\"type\":\"struct VoteFactory.groupStruct\"},\"id\":558,\"name\":\"UserDefinedTypeName\",\"src\":\"1440:11:2\"}],\"id\":559,\"name\":\"VariableDeclaration\",\"src\":\"1440:32:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.groupStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":530,\"type\":\"mapping(uint256 => struct VoteFactory.groupStruct storage ref)\",\"value\":\"groupInfo\"},\"id\":560,\"name\":\"Identifier\",\"src\":\"1475:9:2\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":561,\"name\":\"Literal\",\"src\":\"1485:1:2\"}],\"id\":562,\"name\":\"IndexAccess\",\"src\":\"1475:12:2\"}],\"id\":563,\"name\":\"VariableDeclarationStatement\",\"src\":\"1440:47:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"name\",\"referencedDeclaration\":506,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":559,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"studentGroup\"},\"id\":564,\"name\":\"Identifier\",\"src\":\"1502:12:2\"}],\"id\":566,\"name\":\"MemberAccess\",\"src\":\"1502:17:2\"},{\"attributes\":{\"hexvalue\":\"53747564656e74\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"string\",\"type\":\"literal_string \\\"Student\\\"\",\"value\":\"Student\"},\"id\":567,\"name\":\"Literal\",\"src\":\"1522:9:2\"}],\"id\":568,\"name\":\"Assignment\",\"src\":\"1502:29:2\"}],\"id\":569,\"name\":\"ExpressionStatement\",\"src\":\"1502:29:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"description\",\"referencedDeclaration\":508,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":559,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"studentGroup\"},\"id\":570,\"name\":\"Identifier\",\"src\":\"1546:12:2\"}],\"id\":572,\"name\":\"MemberAccess\",\"src\":\"1546:24:2\"},{\"attributes\":{\"hexvalue\":\"44656661756c742047726f7570\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"string\",\"type\":\"literal_string \\\"Default Group\\\"\",\"value\":\"Default Group\"},\"id\":573,\"name\":\"Literal\",\"src\":\"1573:15:2\"}],\"id\":574,\"name\":\"Assignment\",\"src\":\"1546:42:2\"}],\"id\":575,\"name\":\"ExpressionStatement\",\"src\":\"1546:42:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"++\",\"prefix\":false,\"type\":\"uint32\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":532,\"type\":\"uint32\",\"value\":\"groupCount\"},\"id\":576,\"name\":\"Identifier\",\"src\":\"1603:10:2\"}],\"id\":577,\"name\":\"UnaryOperation\",\"src\":\"1603:12:2\"}],\"id\":578,\"name\":\"ExpressionStatement\",\"src\":\"1603:12:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"push\",\"type\":\"function (uint32)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":545,\"type\":\"uint32[] storage ref\",\"value\":\"existingGroups\"},\"id\":579,\"name\":\"Identifier\",\"src\":\"1630:14:2\"}],\"id\":581,\"name\":\"MemberAccess\",\"src\":\"1630:19:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":542,\"type\":\"uint32\",\"value\":\"defaultGroupID\"},\"id\":582,\"name\":\"Identifier\",\"src\":\"1650:14:2\"}],\"id\":583,\"name\":\"FunctionCall\",\"src\":\"1630:35:2\"}],\"id\":584,\"name\":\"ExpressionStatement\",\"src\":\"1630:35:2\"}],\"id\":585,\"name\":\"Block\",\"src\":\"1425:252:2\"}],\"id\":586,\"name\":\"IfStatement\",\"src\":\"1408:269:2\"},{\"attributes\":{\"assignments\":[588]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"g\",\"scope\":614,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.groupStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"groupStruct\",\"referencedDeclaration\":512,\"type\":\"struct VoteFactory.groupStruct\"},\"id\":587,\"name\":\"UserDefinedTypeName\",\"src\":\"1687:11:2\"}],\"id\":588,\"name\":\"VariableDeclaration\",\"src\":\"1687:21:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.groupStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":530,\"type\":\"mapping(uint256 => struct VoteFactory.groupStruct storage ref)\",\"value\":\"groupInfo\"},\"id\":589,\"name\":\"Identifier\",\"src\":\"1711:9:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":551,\"type\":\"uint32\",\"value\":\"groupID\"},\"id\":590,\"name\":\"Identifier\",\"src\":\"1721:7:2\"}],\"id\":591,\"name\":\"IndexAccess\",\"src\":\"1711:18:2\"}],\"id\":592,\"name\":\"VariableDeclarationStatement\",\"src\":\"1687:42:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"name\",\"referencedDeclaration\":506,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":588,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":593,\"name\":\"Identifier\",\"src\":\"1740:1:2\"}],\"id\":595,\"name\":\"MemberAccess\",\"src\":\"1740:6:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":547,\"type\":\"string memory\",\"value\":\"name\"},\"id\":596,\"name\":\"Identifier\",\"src\":\"1749:4:2\"}],\"id\":597,\"name\":\"Assignment\",\"src\":\"1740:13:2\"}],\"id\":598,\"name\":\"ExpressionStatement\",\"src\":\"1740:13:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"description\",\"referencedDeclaration\":508,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":588,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":599,\"name\":\"Identifier\",\"src\":\"1764:1:2\"}],\"id\":601,\"name\":\"MemberAccess\",\"src\":\"1764:13:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":549,\"type\":\"string memory\",\"value\":\"description\"},\"id\":602,\"name\":\"Identifier\",\"src\":\"1780:11:2\"}],\"id\":603,\"name\":\"Assignment\",\"src\":\"1764:27:2\"}],\"id\":604,\"name\":\"ExpressionStatement\",\"src\":\"1764:27:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"++\",\"prefix\":false,\"type\":\"uint32\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":532,\"type\":\"uint32\",\"value\":\"groupCount\"},\"id\":605,\"name\":\"Identifier\",\"src\":\"1802:10:2\"}],\"id\":606,\"name\":\"UnaryOperation\",\"src\":\"1802:12:2\"}],\"id\":607,\"name\":\"ExpressionStatement\",\"src\":\"1802:12:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"push\",\"type\":\"function (uint32)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":545,\"type\":\"uint32[] storage ref\",\"value\":\"existingGroups\"},\"id\":608,\"name\":\"Identifier\",\"src\":\"1825:14:2\"}],\"id\":610,\"name\":\"MemberAccess\",\"src\":\"1825:19:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":551,\"type\":\"uint32\",\"value\":\"groupID\"},\"id\":611,\"name\":\"Identifier\",\"src\":\"1845:7:2\"}],\"id\":612,\"name\":\"FunctionCall\",\"src\":\"1825:28:2\"}],\"id\":613,\"name\":\"ExpressionStatement\",\"src\":\"1825:28:2\"}],\"id\":614,\"name\":\"Block\",\"src\":\"1346:515:2\"}],\"id\":615,\"name\":\"FunctionDefinition\",\"src\":\"1255:606:2\"},{\"attributes\":{\"functionSelector\":\"338b4741\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"registerGroup\",\"scope\":1115,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"groupID\",\"scope\":673,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint32\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":616,\"name\":\"ElementaryTypeName\",\"src\":\"2007:6:2\"}],\"id\":617,\"name\":\"VariableDeclaration\",\"src\":\"2007:14:2\"}],\"id\":618,\"name\":\"ParameterList\",\"src\":\"2006:16:2\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":619,\"name\":\"ParameterList\",\"src\":\"2030:0:2\"},{\"children\":[{\"attributes\":{\"assignments\":[621]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"u\",\"scope\":672,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.userStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"userStruct\",\"referencedDeclaration\":526,\"type\":\"struct VoteFactory.userStruct\"},\"id\":620,\"name\":\"UserDefinedTypeName\",\"src\":\"2041:10:2\"}],\"id\":621,\"name\":\"VariableDeclaration\",\"src\":\"2041:20:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.userStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":539,\"type\":\"mapping(address => struct VoteFactory.userStruct storage ref)\",\"value\":\"userInfo\"},\"id\":622,\"name\":\"Identifier\",\"src\":\"2064:8:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":623,\"name\":\"Identifier\",\"src\":\"2073:3:2\"}],\"id\":624,\"name\":\"MemberAccess\",\"src\":\"2073:10:2\"}],\"id\":625,\"name\":\"IndexAccess\",\"src\":\"2064:20:2\"}],\"id\":626,\"name\":\"VariableDeclarationStatement\",\"src\":\"2041:43:2\"},{\"attributes\":{\"assignments\":[628]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"g\",\"scope\":672,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.groupStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"groupStruct\",\"referencedDeclaration\":512,\"type\":\"struct VoteFactory.groupStruct\"},\"id\":627,\"name\":\"UserDefinedTypeName\",\"src\":\"2095:11:2\"}],\"id\":628,\"name\":\"VariableDeclaration\",\"src\":\"2095:21:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.groupStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":530,\"type\":\"mapping(uint256 => struct VoteFactory.groupStruct storage ref)\",\"value\":\"groupInfo\"},\"id\":629,\"name\":\"Identifier\",\"src\":\"2119:9:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":617,\"type\":\"uint32\",\"value\":\"groupID\"},\"id\":630,\"name\":\"Identifier\",\"src\":\"2129:7:2\"}],\"id\":631,\"name\":\"IndexAccess\",\"src\":\"2119:18:2\"}],\"id\":632,\"name\":\"VariableDeclarationStatement\",\"src\":\"2095:42:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"type\":\"function (bool) pure\",\"value\":\"require\"},\"id\":633,\"name\":\"Identifier\",\"src\":\"2158:7:2\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"!=\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":617,\"type\":\"uint32\",\"value\":\"groupID\"},\"id\":634,\"name\":\"Identifier\",\"src\":\"2166:7:2\"},{\"attributes\":{\"hexvalue\":\"30\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 0\",\"value\":\"0\"},\"id\":635,\"name\":\"Literal\",\"src\":\"2177:1:2\"}],\"id\":636,\"name\":\"BinaryOperation\",\"src\":\"2166:12:2\"}],\"id\":637,\"name\":\"FunctionCall\",\"src\":\"2158:21:2\"}],\"id\":638,\"name\":\"ExpressionStatement\",\"src\":\"2158:21:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"type\":\"function (bool) pure\",\"value\":\"require\"},\"id\":639,\"name\":\"Identifier\",\"src\":\"2190:7:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"!\",\"prefix\":true,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"bool\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"},{\"typeIdentifier\":\"t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470\",\"typeString\":\"literal_string \\\"\\\"\"}],\"overloadedDeclarations\":[null],\"referencedDeclaration\":1114,\"type\":\"function (string memory,string memory) pure returns (bool)\",\"value\":\"compareStrings\"},\"id\":640,\"name\":\"Identifier\",\"src\":\"2199:14:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"name\",\"referencedDeclaration\":506,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":628,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":641,\"name\":\"Identifier\",\"src\":\"2214:1:2\"}],\"id\":642,\"name\":\"MemberAccess\",\"src\":\"2214:6:2\"},{\"attributes\":{\"hexvalue\":\"\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"string\",\"type\":\"literal_string \\\"\\\"\",\"value\":\"\"},\"id\":643,\"name\":\"Literal\",\"src\":\"2222:2:2\"}],\"id\":644,\"name\":\"FunctionCall\",\"src\":\"2199:26:2\"}],\"id\":645,\"name\":\"UnaryOperation\",\"src\":\"2198:27:2\"}],\"id\":646,\"name\":\"FunctionCall\",\"src\":\"2190:36:2\"}],\"id\":647,\"name\":\"ExpressionStatement\",\"src\":\"2190:36:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"type\":\"function (bool) pure\",\"value\":\"require\"},\"id\":648,\"name\":\"Identifier\",\"src\":\"2272:7:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"!\",\"prefix\":true,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"bool\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}],\"overloadedDeclarations\":[null],\"referencedDeclaration\":805,\"type\":\"function (uint32) view returns (bool)\",\"value\":\"isUserGroup\"},\"id\":649,\"name\":\"Identifier\",\"src\":\"2281:11:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":617,\"type\":\"uint32\",\"value\":\"groupID\"},\"id\":650,\"name\":\"Identifier\",\"src\":\"2293:7:2\"}],\"id\":651,\"name\":\"FunctionCall\",\"src\":\"2281:20:2\"}],\"id\":652,\"name\":\"UnaryOperation\",\"src\":\"2280:21:2\"}],\"id\":653,\"name\":\"FunctionCall\",\"src\":\"2272:30:2\"}],\"id\":654,\"name\":\"ExpressionStatement\",\"src\":\"2272:30:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"push\",\"type\":\"function (uint32)\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"groups\",\"referencedDeclaration\":523,\"type\":\"uint32[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":621,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":655,\"name\":\"Identifier\",\"src\":\"2346:1:2\"}],\"id\":658,\"name\":\"MemberAccess\",\"src\":\"2346:8:2\"}],\"id\":659,\"name\":\"MemberAccess\",\"src\":\"2346:13:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":617,\"type\":\"uint32\",\"value\":\"groupID\"},\"id\":660,\"name\":\"Identifier\",\"src\":\"2360:7:2\"}],\"id\":661,\"name\":\"FunctionCall\",\"src\":\"2346:22:2\"}],\"id\":662,\"name\":\"ExpressionStatement\",\"src\":\"2346:22:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"push\",\"type\":\"function (address)\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"members\",\"referencedDeclaration\":511,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":628,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":663,\"name\":\"Identifier\",\"src\":\"2414:1:2\"}],\"id\":666,\"name\":\"MemberAccess\",\"src\":\"2414:9:2\"}],\"id\":667,\"name\":\"MemberAccess\",\"src\":\"2414:14:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"userAddress\",\"referencedDeclaration\":514,\"type\":\"address\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":621,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":668,\"name\":\"Identifier\",\"src\":\"2429:1:2\"}],\"id\":669,\"name\":\"MemberAccess\",\"src\":\"2429:13:2\"}],\"id\":670,\"name\":\"FunctionCall\",\"src\":\"2414:29:2\"}],\"id\":671,\"name\":\"ExpressionStatement\",\"src\":\"2414:29:2\"}],\"id\":672,\"name\":\"Block\",\"src\":\"2030:421:2\"}],\"id\":673,\"name\":\"FunctionDefinition\",\"src\":\"1984:467:2\"},{\"attributes\":{\"functionSelector\":\"3f2e1f60\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"leaveGroup\",\"scope\":1115,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"indexGroup\",\"scope\":760,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint32\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":674,\"name\":\"ElementaryTypeName\",\"src\":\"2883:6:2\"}],\"id\":675,\"name\":\"VariableDeclaration\",\"src\":\"2883:17:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"indexMember\",\"scope\":760,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint32\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":676,\"name\":\"ElementaryTypeName\",\"src\":\"2902:6:2\"}],\"id\":677,\"name\":\"VariableDeclaration\",\"src\":\"2902:18:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"groupID\",\"scope\":760,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint32\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":678,\"name\":\"ElementaryTypeName\",\"src\":\"2922:6:2\"}],\"id\":679,\"name\":\"VariableDeclaration\",\"src\":\"2922:14:2\"}],\"id\":680,\"name\":\"ParameterList\",\"src\":\"2882:55:2\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":681,\"name\":\"ParameterList\",\"src\":\"2945:0:2\"},{\"children\":[{\"attributes\":{\"assignments\":[683]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"u\",\"scope\":759,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.userStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"userStruct\",\"referencedDeclaration\":526,\"type\":\"struct VoteFactory.userStruct\"},\"id\":682,\"name\":\"UserDefinedTypeName\",\"src\":\"2956:10:2\"}],\"id\":683,\"name\":\"VariableDeclaration\",\"src\":\"2956:20:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.userStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":539,\"type\":\"mapping(address => struct VoteFactory.userStruct storage ref)\",\"value\":\"userInfo\"},\"id\":684,\"name\":\"Identifier\",\"src\":\"2979:8:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":685,\"name\":\"Identifier\",\"src\":\"2988:3:2\"}],\"id\":686,\"name\":\"MemberAccess\",\"src\":\"2988:10:2\"}],\"id\":687,\"name\":\"IndexAccess\",\"src\":\"2979:20:2\"}],\"id\":688,\"name\":\"VariableDeclarationStatement\",\"src\":\"2956:43:2\"},{\"attributes\":{\"assignments\":[690]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"g\",\"scope\":759,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.groupStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"groupStruct\",\"referencedDeclaration\":512,\"type\":\"struct VoteFactory.groupStruct\"},\"id\":689,\"name\":\"UserDefinedTypeName\",\"src\":\"3010:11:2\"}],\"id\":690,\"name\":\"VariableDeclaration\",\"src\":\"3010:21:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.groupStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":530,\"type\":\"mapping(uint256 => struct VoteFactory.groupStruct storage ref)\",\"value\":\"groupInfo\"},\"id\":691,\"name\":\"Identifier\",\"src\":\"3034:9:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":679,\"type\":\"uint32\",\"value\":\"groupID\"},\"id\":692,\"name\":\"Identifier\",\"src\":\"3044:7:2\"}],\"id\":693,\"name\":\"IndexAccess\",\"src\":\"3034:18:2\"}],\"id\":694,\"name\":\"VariableDeclarationStatement\",\"src\":\"3010:42:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"uint32\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"type\":\"uint32\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"groups\",\"referencedDeclaration\":523,\"type\":\"uint32[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":683,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":695,\"name\":\"Identifier\",\"src\":\"3112:1:2\"}],\"id\":698,\"name\":\"MemberAccess\",\"src\":\"3112:8:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":675,\"type\":\"uint32\",\"value\":\"indexGroup\"},\"id\":697,\"name\":\"Identifier\",\"src\":\"3121:10:2\"}],\"id\":699,\"name\":\"IndexAccess\",\"src\":\"3112:20:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"uint32\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"groups\",\"referencedDeclaration\":523,\"type\":\"uint32[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":683,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":700,\"name\":\"Identifier\",\"src\":\"3135:1:2\"}],\"id\":701,\"name\":\"MemberAccess\",\"src\":\"3135:8:2\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"-\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"length\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"groups\",\"referencedDeclaration\":523,\"type\":\"uint32[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":683,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":702,\"name\":\"Identifier\",\"src\":\"3144:1:2\"}],\"id\":703,\"name\":\"MemberAccess\",\"src\":\"3144:8:2\"}],\"id\":704,\"name\":\"MemberAccess\",\"src\":\"3144:15:2\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":705,\"name\":\"Literal\",\"src\":\"3162:1:2\"}],\"id\":706,\"name\":\"BinaryOperation\",\"src\":\"3144:19:2\"}],\"id\":707,\"name\":\"IndexAccess\",\"src\":\"3135:29:2\"}],\"id\":708,\"name\":\"Assignment\",\"src\":\"3112:52:2\"}],\"id\":709,\"name\":\"ExpressionStatement\",\"src\":\"3112:52:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"delete\",\"prefix\":true,\"type\":\"tuple()\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"type\":\"uint32\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"groups\",\"referencedDeclaration\":523,\"type\":\"uint32[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":683,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":710,\"name\":\"Identifier\",\"src\":\"3182:1:2\"}],\"id\":711,\"name\":\"MemberAccess\",\"src\":\"3182:8:2\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"-\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"length\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"groups\",\"referencedDeclaration\":523,\"type\":\"uint32[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":683,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":712,\"name\":\"Identifier\",\"src\":\"3191:1:2\"}],\"id\":713,\"name\":\"MemberAccess\",\"src\":\"3191:8:2\"}],\"id\":714,\"name\":\"MemberAccess\",\"src\":\"3191:15:2\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":715,\"name\":\"Literal\",\"src\":\"3209:1:2\"}],\"id\":716,\"name\":\"BinaryOperation\",\"src\":\"3191:19:2\"}],\"id\":717,\"name\":\"IndexAccess\",\"src\":\"3182:29:2\"}],\"id\":718,\"name\":\"UnaryOperation\",\"src\":\"3175:36:2\"}],\"id\":719,\"name\":\"ExpressionStatement\",\"src\":\"3175:36:2\"},{\"children\":[{\"attributes\":{\"arguments\":[null],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[null],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"pop\",\"type\":\"function ()\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"groups\",\"referencedDeclaration\":523,\"type\":\"uint32[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":683,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":720,\"name\":\"Identifier\",\"src\":\"3222:1:2\"}],\"id\":723,\"name\":\"MemberAccess\",\"src\":\"3222:8:2\"}],\"id\":724,\"name\":\"MemberAccess\",\"src\":\"3222:12:2\"}],\"id\":725,\"name\":\"FunctionCall\",\"src\":\"3222:14:2\"}],\"id\":726,\"name\":\"ExpressionStatement\",\"src\":\"3222:14:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"address\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"type\":\"address\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"members\",\"referencedDeclaration\":511,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":690,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":727,\"name\":\"Identifier\",\"src\":\"3296:1:2\"}],\"id\":730,\"name\":\"MemberAccess\",\"src\":\"3296:9:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":677,\"type\":\"uint32\",\"value\":\"indexMember\"},\"id\":729,\"name\":\"Identifier\",\"src\":\"3306:11:2\"}],\"id\":731,\"name\":\"IndexAccess\",\"src\":\"3296:22:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"address\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"members\",\"referencedDeclaration\":511,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":690,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":732,\"name\":\"Identifier\",\"src\":\"3321:1:2\"}],\"id\":733,\"name\":\"MemberAccess\",\"src\":\"3321:9:2\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"-\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"length\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"members\",\"referencedDeclaration\":511,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":690,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":734,\"name\":\"Identifier\",\"src\":\"3331:1:2\"}],\"id\":735,\"name\":\"MemberAccess\",\"src\":\"3331:9:2\"}],\"id\":736,\"name\":\"MemberAccess\",\"src\":\"3331:16:2\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":737,\"name\":\"Literal\",\"src\":\"3350:1:2\"}],\"id\":738,\"name\":\"BinaryOperation\",\"src\":\"3331:20:2\"}],\"id\":739,\"name\":\"IndexAccess\",\"src\":\"3321:31:2\"}],\"id\":740,\"name\":\"Assignment\",\"src\":\"3296:56:2\"}],\"id\":741,\"name\":\"ExpressionStatement\",\"src\":\"3296:56:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"delete\",\"prefix\":true,\"type\":\"tuple()\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"type\":\"address\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"members\",\"referencedDeclaration\":511,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":690,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":742,\"name\":\"Identifier\",\"src\":\"3370:1:2\"}],\"id\":743,\"name\":\"MemberAccess\",\"src\":\"3370:9:2\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"-\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"length\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"members\",\"referencedDeclaration\":511,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":690,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":744,\"name\":\"Identifier\",\"src\":\"3380:1:2\"}],\"id\":745,\"name\":\"MemberAccess\",\"src\":\"3380:9:2\"}],\"id\":746,\"name\":\"MemberAccess\",\"src\":\"3380:16:2\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":747,\"name\":\"Literal\",\"src\":\"3399:1:2\"}],\"id\":748,\"name\":\"BinaryOperation\",\"src\":\"3380:20:2\"}],\"id\":749,\"name\":\"IndexAccess\",\"src\":\"3370:31:2\"}],\"id\":750,\"name\":\"UnaryOperation\",\"src\":\"3363:38:2\"}],\"id\":751,\"name\":\"ExpressionStatement\",\"src\":\"3363:38:2\"},{\"children\":[{\"attributes\":{\"arguments\":[null],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[null],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"pop\",\"type\":\"function ()\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"members\",\"referencedDeclaration\":511,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":690,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":752,\"name\":\"Identifier\",\"src\":\"3412:1:2\"}],\"id\":755,\"name\":\"MemberAccess\",\"src\":\"3412:9:2\"}],\"id\":756,\"name\":\"MemberAccess\",\"src\":\"3412:13:2\"}],\"id\":757,\"name\":\"FunctionCall\",\"src\":\"3412:15:2\"}],\"id\":758,\"name\":\"ExpressionStatement\",\"src\":\"3412:15:2\"}],\"id\":759,\"name\":\"Block\",\"src\":\"2945:490:2\"}],\"id\":760,\"name\":\"FunctionDefinition\",\"src\":\"2863:572:2\"},{\"attributes\":{\"functionSelector\":\"a9905aa0\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"isUserGroup\",\"scope\":1115,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"groupID\",\"scope\":805,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint32\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":761,\"name\":\"ElementaryTypeName\",\"src\":\"3512:6:2\"}],\"id\":762,\"name\":\"VariableDeclaration\",\"src\":\"3512:14:2\"}],\"id\":763,\"name\":\"ParameterList\",\"src\":\"3511:16:2\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":805,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"bool\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":764,\"name\":\"ElementaryTypeName\",\"src\":\"3549:4:2\"}],\"id\":765,\"name\":\"VariableDeclaration\",\"src\":\"3549:4:2\"}],\"id\":766,\"name\":\"ParameterList\",\"src\":\"3548:6:2\"},{\"children\":[{\"attributes\":{\"assignments\":[768]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"isStatus\",\"scope\":804,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"bool\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":767,\"name\":\"ElementaryTypeName\",\"src\":\"3566:4:2\"}],\"id\":768,\"name\":\"VariableDeclaration\",\"src\":\"3566:13:2\"},{\"attributes\":{\"hexvalue\":\"66616c7365\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"bool\",\"type\":\"bool\",\"value\":\"false\"},\"id\":769,\"name\":\"Literal\",\"src\":\"3582:5:2\"}],\"id\":770,\"name\":\"VariableDeclarationStatement\",\"src\":\"3566:21:2\"},{\"attributes\":{\"assignments\":[772]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"u\",\"scope\":804,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.userStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"userStruct\",\"referencedDeclaration\":526,\"type\":\"struct VoteFactory.userStruct\"},\"id\":771,\"name\":\"UserDefinedTypeName\",\"src\":\"3598:10:2\"}],\"id\":772,\"name\":\"VariableDeclaration\",\"src\":\"3598:20:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.userStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":539,\"type\":\"mapping(address => struct VoteFactory.userStruct storage ref)\",\"value\":\"userInfo\"},\"id\":773,\"name\":\"Identifier\",\"src\":\"3621:8:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":774,\"name\":\"Identifier\",\"src\":\"3630:3:2\"}],\"id\":775,\"name\":\"MemberAccess\",\"src\":\"3630:10:2\"}],\"id\":776,\"name\":\"IndexAccess\",\"src\":\"3621:20:2\"}],\"id\":777,\"name\":\"VariableDeclarationStatement\",\"src\":\"3598:43:2\"},{\"children\":[{\"attributes\":{\"assignments\":[779]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"i\",\"scope\":801,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":778,\"name\":\"ElementaryTypeName\",\"src\":\"3657:4:2\"}],\"id\":779,\"name\":\"VariableDeclaration\",\"src\":\"3657:6:2\"},{\"attributes\":{\"hexvalue\":\"30\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 0\",\"value\":\"0\"},\"id\":780,\"name\":\"Literal\",\"src\":\"3666:1:2\"}],\"id\":781,\"name\":\"VariableDeclarationStatement\",\"src\":\"3657:10:2\"},{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"<\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":779,\"type\":\"uint256\",\"value\":\"i\"},\"id\":782,\"name\":\"Identifier\",\"src\":\"3669:1:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"length\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"groups\",\"referencedDeclaration\":523,\"type\":\"uint32[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":772,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":783,\"name\":\"Identifier\",\"src\":\"3673:1:2\"}],\"id\":784,\"name\":\"MemberAccess\",\"src\":\"3673:8:2\"}],\"id\":785,\"name\":\"MemberAccess\",\"src\":\"3673:15:2\"}],\"id\":786,\"name\":\"BinaryOperation\",\"src\":\"3669:19:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"++\",\"prefix\":false,\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":779,\"type\":\"uint256\",\"value\":\"i\"},\"id\":787,\"name\":\"Identifier\",\"src\":\"3690:1:2\"}],\"id\":788,\"name\":\"UnaryOperation\",\"src\":\"3690:3:2\"}],\"id\":789,\"name\":\"ExpressionStatement\",\"src\":\"3690:3:2\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":768,\"type\":\"bool\",\"value\":\"isStatus\"},\"id\":790,\"name\":\"Identifier\",\"src\":\"3710:8:2\"},{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_uint32\",\"typeString\":\"uint32\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"uint32\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"groups\",\"referencedDeclaration\":523,\"type\":\"uint32[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":772,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":791,\"name\":\"Identifier\",\"src\":\"3722:1:2\"}],\"id\":792,\"name\":\"MemberAccess\",\"src\":\"3722:8:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":779,\"type\":\"uint256\",\"value\":\"i\"},\"id\":793,\"name\":\"Identifier\",\"src\":\"3731:1:2\"}],\"id\":794,\"name\":\"IndexAccess\",\"src\":\"3722:11:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":762,\"type\":\"uint32\",\"value\":\"groupID\"},\"id\":795,\"name\":\"Identifier\",\"src\":\"3737:7:2\"}],\"id\":796,\"name\":\"BinaryOperation\",\"src\":\"3722:22:2\"}],\"id\":797,\"name\":\"TupleExpression\",\"src\":\"3721:24:2\"}],\"id\":798,\"name\":\"Assignment\",\"src\":\"3710:35:2\"}],\"id\":799,\"name\":\"ExpressionStatement\",\"src\":\"3710:35:2\"}],\"id\":800,\"name\":\"Block\",\"src\":\"3695:62:2\"}],\"id\":801,\"name\":\"ForStatement\",\"src\":\"3652:105:2\"},{\"attributes\":{\"functionReturnParameters\":766},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":768,\"type\":\"bool\",\"value\":\"isStatus\"},\"id\":802,\"name\":\"Identifier\",\"src\":\"3774:8:2\"}],\"id\":803,\"name\":\"Return\",\"src\":\"3767:15:2\"}],\"id\":804,\"name\":\"Block\",\"src\":\"3555:235:2\"}],\"id\":805,\"name\":\"FunctionDefinition\",\"src\":\"3491:299:2\"},{\"attributes\":{\"functionSelector\":\"b5008c0f\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"isGroup\",\"scope\":1115,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"groupID\",\"scope\":831,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint32\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":806,\"name\":\"ElementaryTypeName\",\"src\":\"3871:6:2\"}],\"id\":807,\"name\":\"VariableDeclaration\",\"src\":\"3871:14:2\"}],\"id\":808,\"name\":\"ParameterList\",\"src\":\"3870:16:2\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":831,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"bool\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":809,\"name\":\"ElementaryTypeName\",\"src\":\"3908:4:2\"}],\"id\":810,\"name\":\"VariableDeclaration\",\"src\":\"3908:4:2\"}],\"id\":811,\"name\":\"ParameterList\",\"src\":\"3907:6:2\"},{\"children\":[{\"attributes\":{\"assignments\":[813]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"g\",\"scope\":830,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.groupStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"groupStruct\",\"referencedDeclaration\":512,\"type\":\"struct VoteFactory.groupStruct\"},\"id\":812,\"name\":\"UserDefinedTypeName\",\"src\":\"3925:11:2\"}],\"id\":813,\"name\":\"VariableDeclaration\",\"src\":\"3925:21:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.groupStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":530,\"type\":\"mapping(uint256 => struct VoteFactory.groupStruct storage ref)\",\"value\":\"groupInfo\"},\"id\":814,\"name\":\"Identifier\",\"src\":\"3949:9:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":807,\"type\":\"uint32\",\"value\":\"groupID\"},\"id\":815,\"name\":\"Identifier\",\"src\":\"3959:7:2\"}],\"id\":816,\"name\":\"IndexAccess\",\"src\":\"3949:18:2\"}],\"id\":817,\"name\":\"VariableDeclarationStatement\",\"src\":\"3925:42:2\"},{\"attributes\":{\"assignments\":[819]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"isExist\",\"scope\":830,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"bool\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":818,\"name\":\"ElementaryTypeName\",\"src\":\"3978:4:2\"}],\"id\":819,\"name\":\"VariableDeclaration\",\"src\":\"3978:12:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"!\",\"prefix\":true,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"bool\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"},{\"typeIdentifier\":\"t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470\",\"typeString\":\"literal_string \\\"\\\"\"}],\"overloadedDeclarations\":[null],\"referencedDeclaration\":1114,\"type\":\"function (string memory,string memory) pure returns (bool)\",\"value\":\"compareStrings\"},\"id\":820,\"name\":\"Identifier\",\"src\":\"3995:14:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"name\",\"referencedDeclaration\":506,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":813,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":821,\"name\":\"Identifier\",\"src\":\"4010:1:2\"}],\"id\":822,\"name\":\"MemberAccess\",\"src\":\"4010:6:2\"},{\"attributes\":{\"hexvalue\":\"\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"string\",\"type\":\"literal_string \\\"\\\"\",\"value\":\"\"},\"id\":823,\"name\":\"Literal\",\"src\":\"4018:2:2\"}],\"id\":824,\"name\":\"FunctionCall\",\"src\":\"3995:26:2\"}],\"id\":825,\"name\":\"TupleExpression\",\"src\":\"3994:28:2\"}],\"id\":826,\"name\":\"UnaryOperation\",\"src\":\"3993:29:2\"}],\"id\":827,\"name\":\"VariableDeclarationStatement\",\"src\":\"3978:44:2\"},{\"attributes\":{\"functionReturnParameters\":811},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":819,\"type\":\"bool\",\"value\":\"isExist\"},\"id\":828,\"name\":\"Identifier\",\"src\":\"4040:7:2\"}],\"id\":829,\"name\":\"Return\",\"src\":\"4033:14:2\"}],\"id\":830,\"name\":\"Block\",\"src\":\"3914:141:2\"}],\"id\":831,\"name\":\"FunctionDefinition\",\"src\":\"3854:201:2\"},{\"attributes\":{\"functionSelector\":\"64363720\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"getUserGroup\",\"scope\":1115,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"index\",\"scope\":851,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint32\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":832,\"name\":\"ElementaryTypeName\",\"src\":\"4134:6:2\"}],\"id\":833,\"name\":\"VariableDeclaration\",\"src\":\"4134:12:2\"}],\"id\":834,\"name\":\"ParameterList\",\"src\":\"4133:14:2\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":851,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint32\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":835,\"name\":\"ElementaryTypeName\",\"src\":\"4169:6:2\"}],\"id\":836,\"name\":\"VariableDeclaration\",\"src\":\"4169:6:2\"}],\"id\":837,\"name\":\"ParameterList\",\"src\":\"4168:8:2\"},{\"children\":[{\"attributes\":{\"assignments\":[839]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"u\",\"scope\":850,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.userStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"userStruct\",\"referencedDeclaration\":526,\"type\":\"struct VoteFactory.userStruct\"},\"id\":838,\"name\":\"UserDefinedTypeName\",\"src\":\"4188:10:2\"}],\"id\":839,\"name\":\"VariableDeclaration\",\"src\":\"4188:20:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.userStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":539,\"type\":\"mapping(address => struct VoteFactory.userStruct storage ref)\",\"value\":\"userInfo\"},\"id\":840,\"name\":\"Identifier\",\"src\":\"4211:8:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":841,\"name\":\"Identifier\",\"src\":\"4220:3:2\"}],\"id\":842,\"name\":\"MemberAccess\",\"src\":\"4220:10:2\"}],\"id\":843,\"name\":\"IndexAccess\",\"src\":\"4211:20:2\"}],\"id\":844,\"name\":\"VariableDeclarationStatement\",\"src\":\"4188:43:2\"},{\"attributes\":{\"functionReturnParameters\":837},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"uint32\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"groups\",\"referencedDeclaration\":523,\"type\":\"uint32[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":839,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":845,\"name\":\"Identifier\",\"src\":\"4249:1:2\"}],\"id\":846,\"name\":\"MemberAccess\",\"src\":\"4249:8:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":833,\"type\":\"uint32\",\"value\":\"index\"},\"id\":847,\"name\":\"Identifier\",\"src\":\"4258:5:2\"}],\"id\":848,\"name\":\"IndexAccess\",\"src\":\"4249:15:2\"}],\"id\":849,\"name\":\"Return\",\"src\":\"4242:22:2\"}],\"id\":850,\"name\":\"Block\",\"src\":\"4177:95:2\"}],\"id\":851,\"name\":\"FunctionDefinition\",\"src\":\"4112:160:2\"},{\"attributes\":{\"functionSelector\":\"d2f4a802\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"getUserAllGroups\",\"scope\":1115,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":852,\"name\":\"ParameterList\",\"src\":\"4352:2:2\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":868,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"uint32[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"uint32[]\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":853,\"name\":\"ElementaryTypeName\",\"src\":\"4376:6:2\"}],\"id\":854,\"name\":\"ArrayTypeName\",\"src\":\"4376:8:2\"}],\"id\":855,\"name\":\"VariableDeclaration\",\"src\":\"4376:15:2\"}],\"id\":856,\"name\":\"ParameterList\",\"src\":\"4375:17:2\"},{\"children\":[{\"attributes\":{\"assignments\":[858]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"u\",\"scope\":867,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.userStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"userStruct\",\"referencedDeclaration\":526,\"type\":\"struct VoteFactory.userStruct\"},\"id\":857,\"name\":\"UserDefinedTypeName\",\"src\":\"4404:10:2\"}],\"id\":858,\"name\":\"VariableDeclaration\",\"src\":\"4404:20:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.userStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":539,\"type\":\"mapping(address => struct VoteFactory.userStruct storage ref)\",\"value\":\"userInfo\"},\"id\":859,\"name\":\"Identifier\",\"src\":\"4427:8:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":860,\"name\":\"Identifier\",\"src\":\"4436:3:2\"}],\"id\":861,\"name\":\"MemberAccess\",\"src\":\"4436:10:2\"}],\"id\":862,\"name\":\"IndexAccess\",\"src\":\"4427:20:2\"}],\"id\":863,\"name\":\"VariableDeclarationStatement\",\"src\":\"4404:43:2\"},{\"attributes\":{\"functionReturnParameters\":856},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"groups\",\"referencedDeclaration\":523,\"type\":\"uint32[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":858,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":864,\"name\":\"Identifier\",\"src\":\"4465:1:2\"}],\"id\":865,\"name\":\"MemberAccess\",\"src\":\"4465:8:2\"}],\"id\":866,\"name\":\"Return\",\"src\":\"4458:15:2\"}],\"id\":867,\"name\":\"Block\",\"src\":\"4393:88:2\"}],\"id\":868,\"name\":\"FunctionDefinition\",\"src\":\"4327:154:2\"},{\"attributes\":{\"functionSelector\":\"b0f97938\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"getAllMembers\",\"scope\":1115,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"groupID\",\"scope\":886,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint32\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":869,\"name\":\"ElementaryTypeName\",\"src\":\"4557:6:2\"}],\"id\":870,\"name\":\"VariableDeclaration\",\"src\":\"4557:14:2\"}],\"id\":871,\"name\":\"ParameterList\",\"src\":\"4556:16:2\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":886,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":872,\"name\":\"ElementaryTypeName\",\"src\":\"4594:7:2\"}],\"id\":873,\"name\":\"ArrayTypeName\",\"src\":\"4594:9:2\"}],\"id\":874,\"name\":\"VariableDeclaration\",\"src\":\"4594:16:2\"}],\"id\":875,\"name\":\"ParameterList\",\"src\":\"4593:18:2\"},{\"children\":[{\"attributes\":{\"assignments\":[877]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"g\",\"scope\":885,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.groupStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"groupStruct\",\"referencedDeclaration\":512,\"type\":\"struct VoteFactory.groupStruct\"},\"id\":876,\"name\":\"UserDefinedTypeName\",\"src\":\"4623:11:2\"}],\"id\":877,\"name\":\"VariableDeclaration\",\"src\":\"4623:21:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.groupStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":530,\"type\":\"mapping(uint256 => struct VoteFactory.groupStruct storage ref)\",\"value\":\"groupInfo\"},\"id\":878,\"name\":\"Identifier\",\"src\":\"4647:9:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":870,\"type\":\"uint32\",\"value\":\"groupID\"},\"id\":879,\"name\":\"Identifier\",\"src\":\"4657:7:2\"}],\"id\":880,\"name\":\"IndexAccess\",\"src\":\"4647:18:2\"}],\"id\":881,\"name\":\"VariableDeclarationStatement\",\"src\":\"4623:42:2\"},{\"attributes\":{\"functionReturnParameters\":875},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"members\",\"referencedDeclaration\":511,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":877,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":882,\"name\":\"Identifier\",\"src\":\"4683:1:2\"}],\"id\":883,\"name\":\"MemberAccess\",\"src\":\"4683:9:2\"}],\"id\":884,\"name\":\"Return\",\"src\":\"4676:16:2\"}],\"id\":885,\"name\":\"Block\",\"src\":\"4612:88:2\"}],\"id\":886,\"name\":\"FunctionDefinition\",\"src\":\"4534:166:2\"},{\"attributes\":{\"functionSelector\":\"6638a0fa\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"getGroup\",\"scope\":1115,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"id\",\"scope\":918,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint8\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint8\",\"type\":\"uint8\"},\"id\":887,\"name\":\"ElementaryTypeName\",\"src\":\"4778:5:2\"}],\"id\":888,\"name\":\"VariableDeclaration\",\"src\":\"4778:8:2\"}],\"id\":889,\"name\":\"ParameterList\",\"src\":\"4777:10:2\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":918,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":890,\"name\":\"ElementaryTypeName\",\"src\":\"4808:6:2\"}],\"id\":891,\"name\":\"VariableDeclaration\",\"src\":\"4808:13:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":918,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":892,\"name\":\"ElementaryTypeName\",\"src\":\"4823:6:2\"}],\"id\":893,\"name\":\"VariableDeclaration\",\"src\":\"4823:13:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":918,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":894,\"name\":\"ElementaryTypeName\",\"src\":\"4838:7:2\"}],\"id\":895,\"name\":\"ArrayTypeName\",\"src\":\"4838:9:2\"}],\"id\":896,\"name\":\"VariableDeclaration\",\"src\":\"4838:16:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":918,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":897,\"name\":\"ElementaryTypeName\",\"src\":\"4856:4:2\"}],\"id\":898,\"name\":\"VariableDeclaration\",\"src\":\"4856:4:2\"}],\"id\":899,\"name\":\"ParameterList\",\"src\":\"4807:54:2\"},{\"children\":[{\"attributes\":{\"assignments\":[901]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"g\",\"scope\":917,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.groupStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"groupStruct\",\"referencedDeclaration\":512,\"type\":\"struct VoteFactory.groupStruct\"},\"id\":900,\"name\":\"UserDefinedTypeName\",\"src\":\"4873:11:2\"}],\"id\":901,\"name\":\"VariableDeclaration\",\"src\":\"4873:21:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.groupStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":530,\"type\":\"mapping(uint256 => struct VoteFactory.groupStruct storage ref)\",\"value\":\"groupInfo\"},\"id\":902,\"name\":\"Identifier\",\"src\":\"4897:9:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":888,\"type\":\"uint8\",\"value\":\"id\"},\"id\":903,\"name\":\"Identifier\",\"src\":\"4907:2:2\"}],\"id\":904,\"name\":\"IndexAccess\",\"src\":\"4897:13:2\"}],\"id\":905,\"name\":\"VariableDeclarationStatement\",\"src\":\"4873:37:2\"},{\"attributes\":{\"functionReturnParameters\":899},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"tuple(string storage ref,string storage ref,address[] storage ref,uint256)\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"name\",\"referencedDeclaration\":506,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":901,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":906,\"name\":\"Identifier\",\"src\":\"4929:1:2\"}],\"id\":907,\"name\":\"MemberAccess\",\"src\":\"4929:6:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"description\",\"referencedDeclaration\":508,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":901,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":908,\"name\":\"Identifier\",\"src\":\"4937:1:2\"}],\"id\":909,\"name\":\"MemberAccess\",\"src\":\"4937:13:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"members\",\"referencedDeclaration\":511,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":901,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":910,\"name\":\"Identifier\",\"src\":\"4952:1:2\"}],\"id\":911,\"name\":\"MemberAccess\",\"src\":\"4952:9:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"length\",\"type\":\"uint256\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"members\",\"referencedDeclaration\":511,\"type\":\"address[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":901,\"type\":\"struct VoteFactory.groupStruct storage pointer\",\"value\":\"g\"},\"id\":912,\"name\":\"Identifier\",\"src\":\"4963:1:2\"}],\"id\":913,\"name\":\"MemberAccess\",\"src\":\"4963:9:2\"}],\"id\":914,\"name\":\"MemberAccess\",\"src\":\"4963:16:2\"}],\"id\":915,\"name\":\"TupleExpression\",\"src\":\"4928:52:2\"}],\"id\":916,\"name\":\"Return\",\"src\":\"4921:59:2\"}],\"id\":917,\"name\":\"Block\",\"src\":\"4862:126:2\"}],\"id\":918,\"name\":\"FunctionDefinition\",\"src\":\"4760:228:2\"},{\"attributes\":{\"functionSelector\":\"0073d7ae\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"getExistingGroups\",\"scope\":1115,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":919,\"name\":\"ParameterList\",\"src\":\"5026:2:2\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":927,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"uint32[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"uint32[]\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":920,\"name\":\"ElementaryTypeName\",\"src\":\"5049:6:2\"}],\"id\":921,\"name\":\"ArrayTypeName\",\"src\":\"5049:8:2\"}],\"id\":922,\"name\":\"VariableDeclaration\",\"src\":\"5049:15:2\"}],\"id\":923,\"name\":\"ParameterList\",\"src\":\"5048:17:2\"},{\"children\":[{\"attributes\":{\"functionReturnParameters\":923},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":545,\"type\":\"uint32[] storage ref\",\"value\":\"existingGroups\"},\"id\":924,\"name\":\"Identifier\",\"src\":\"5084:14:2\"}],\"id\":925,\"name\":\"Return\",\"src\":\"5077:21:2\"}],\"id\":926,\"name\":\"Block\",\"src\":\"5066:40:2\"}],\"id\":927,\"name\":\"FunctionDefinition\",\"src\":\"5000:106:2\"},{\"attributes\":{\"functionSelector\":\"d637dcfa\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"registerUser\",\"scope\":1115,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"name\",\"scope\":984,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":928,\"name\":\"ElementaryTypeName\",\"src\":\"5140:6:2\"}],\"id\":929,\"name\":\"VariableDeclaration\",\"src\":\"5140:18:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"email\",\"scope\":984,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":930,\"name\":\"ElementaryTypeName\",\"src\":\"5160:6:2\"}],\"id\":931,\"name\":\"VariableDeclaration\",\"src\":\"5160:19:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"password\",\"scope\":984,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":932,\"name\":\"ElementaryTypeName\",\"src\":\"5181:6:2\"}],\"id\":933,\"name\":\"VariableDeclaration\",\"src\":\"5181:22:2\"}],\"id\":934,\"name\":\"ParameterList\",\"src\":\"5139:65:2\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":935,\"name\":\"ParameterList\",\"src\":\"5212:0:2\"},{\"children\":[{\"attributes\":{\"assignments\":[937]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"u\",\"scope\":983,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.userStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"userStruct\",\"referencedDeclaration\":526,\"type\":\"struct VoteFactory.userStruct\"},\"id\":936,\"name\":\"UserDefinedTypeName\",\"src\":\"5223:10:2\"}],\"id\":937,\"name\":\"VariableDeclaration\",\"src\":\"5223:20:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.userStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":539,\"type\":\"mapping(address => struct VoteFactory.userStruct storage ref)\",\"value\":\"userInfo\"},\"id\":938,\"name\":\"Identifier\",\"src\":\"5246:8:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":939,\"name\":\"Identifier\",\"src\":\"5255:3:2\"}],\"id\":940,\"name\":\"MemberAccess\",\"src\":\"5255:10:2\"}],\"id\":941,\"name\":\"IndexAccess\",\"src\":\"5246:20:2\"}],\"id\":942,\"name\":\"VariableDeclarationStatement\",\"src\":\"5223:43:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"name\",\"referencedDeclaration\":516,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":937,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":943,\"name\":\"Identifier\",\"src\":\"5291:1:2\"}],\"id\":945,\"name\":\"MemberAccess\",\"src\":\"5291:6:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":929,\"type\":\"string memory\",\"value\":\"name\"},\"id\":946,\"name\":\"Identifier\",\"src\":\"5300:4:2\"}],\"id\":947,\"name\":\"Assignment\",\"src\":\"5291:13:2\"}],\"id\":948,\"name\":\"ExpressionStatement\",\"src\":\"5291:13:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"email\",\"referencedDeclaration\":518,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":937,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":949,\"name\":\"Identifier\",\"src\":\"5315:1:2\"}],\"id\":951,\"name\":\"MemberAccess\",\"src\":\"5315:7:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":931,\"type\":\"string memory\",\"value\":\"email\"},\"id\":952,\"name\":\"Identifier\",\"src\":\"5325:5:2\"}],\"id\":953,\"name\":\"Assignment\",\"src\":\"5315:15:2\"}],\"id\":954,\"name\":\"ExpressionStatement\",\"src\":\"5315:15:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"password\",\"referencedDeclaration\":520,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":937,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":955,\"name\":\"Identifier\",\"src\":\"5341:1:2\"}],\"id\":957,\"name\":\"MemberAccess\",\"src\":\"5341:10:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":933,\"type\":\"string memory\",\"value\":\"password\"},\"id\":958,\"name\":\"Identifier\",\"src\":\"5354:8:2\"}],\"id\":959,\"name\":\"Assignment\",\"src\":\"5341:21:2\"}],\"id\":960,\"name\":\"ExpressionStatement\",\"src\":\"5341:21:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"address\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"userAddress\",\"referencedDeclaration\":514,\"type\":\"address\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":937,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":961,\"name\":\"Identifier\",\"src\":\"5373:1:2\"}],\"id\":963,\"name\":\"MemberAccess\",\"src\":\"5373:13:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":964,\"name\":\"Identifier\",\"src\":\"5390:3:2\"}],\"id\":965,\"name\":\"MemberAccess\",\"src\":\"5390:10:2\"}],\"id\":966,\"name\":\"Assignment\",\"src\":\"5373:27:2\"}],\"id\":967,\"name\":\"ExpressionStatement\",\"src\":\"5373:27:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"=\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"member_name\":\"isAdmin\",\"referencedDeclaration\":525,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":937,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":968,\"name\":\"Identifier\",\"src\":\"5411:1:2\"}],\"id\":970,\"name\":\"MemberAccess\",\"src\":\"5411:9:2\"},{\"attributes\":{\"hexvalue\":\"74727565\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"bool\",\"type\":\"bool\",\"value\":\"true\"},\"id\":971,\"name\":\"Literal\",\"src\":\"5423:4:2\"}],\"id\":972,\"name\":\"Assignment\",\"src\":\"5411:16:2\"}],\"id\":973,\"name\":\"ExpressionStatement\",\"src\":\"5411:16:2\"},{\"attributes\":{},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"bool\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"}],\"overloadedDeclarations\":[null],\"referencedDeclaration\":831,\"type\":\"function (uint32) view returns (bool)\",\"value\":\"isGroup\"},\"id\":974,\"name\":\"Identifier\",\"src\":\"5442:7:2\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":975,\"name\":\"Literal\",\"src\":\"5450:1:2\"}],\"id\":976,\"name\":\"FunctionCall\",\"src\":\"5442:10:2\"},{\"children\":[{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"}],\"overloadedDeclarations\":[null],\"referencedDeclaration\":673,\"type\":\"function (uint32)\",\"value\":\"registerGroup\"},\"id\":977,\"name\":\"Identifier\",\"src\":\"5469:13:2\"},{\"attributes\":{\"hexvalue\":\"31\",\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"token\":\"number\",\"type\":\"int_const 1\",\"value\":\"1\"},\"id\":978,\"name\":\"Literal\",\"src\":\"5483:1:2\"}],\"id\":979,\"name\":\"FunctionCall\",\"src\":\"5469:16:2\"}],\"id\":980,\"name\":\"ExpressionStatement\",\"src\":\"5469:16:2\"}],\"id\":981,\"name\":\"Block\",\"src\":\"5454:43:2\"}],\"id\":982,\"name\":\"IfStatement\",\"src\":\"5438:59:2\"}],\"id\":983,\"name\":\"Block\",\"src\":\"5212:292:2\"}],\"id\":984,\"name\":\"FunctionDefinition\",\"src\":\"5118:386:2\"},{\"attributes\":{\"functionSelector\":\"fa954aa0\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"createVote\",\"scope\":1115,\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"typeOf\",\"scope\":1008,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"uint256\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"uint\",\"type\":\"uint256\"},\"id\":985,\"name\":\"ElementaryTypeName\",\"src\":\"5532:4:2\"}],\"id\":986,\"name\":\"VariableDeclaration\",\"src\":\"5532:11:2\"}],\"id\":987,\"name\":\"ParameterList\",\"src\":\"5531:13:2\"},{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":988,\"name\":\"ParameterList\",\"src\":\"5551:0:2\"},{\"children\":[{\"attributes\":{\"assignments\":[990]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"newVote\",\"scope\":1007,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"address\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":989,\"name\":\"ElementaryTypeName\",\"src\":\"5562:7:2\"}],\"id\":990,\"name\":\"VariableDeclaration\",\"src\":\"5562:15:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"address\",\"type_conversion\":true},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_contract$_Vote_$501\",\"typeString\":\"contract Vote\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"type\":\"type(address)\"},\"children\":[{\"attributes\":{\"name\":\"address\"},\"id\":991,\"name\":\"ElementaryTypeName\",\"src\":\"5580:7:2\"}],\"id\":992,\"name\":\"ElementaryTypeNameExpression\",\"src\":\"5580:7:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"contract Vote\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"function (address,uint256) returns (contract Vote)\"},\"children\":[{\"attributes\":{\"name\":\"Vote\",\"referencedDeclaration\":501,\"type\":\"contract Vote\"},\"id\":993,\"name\":\"UserDefinedTypeName\",\"src\":\"5592:4:2\"}],\"id\":994,\"name\":\"NewExpression\",\"src\":\"5588:8:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":995,\"name\":\"Identifier\",\"src\":\"5597:3:2\"}],\"id\":996,\"name\":\"MemberAccess\",\"src\":\"5597:10:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":986,\"type\":\"uint256\",\"value\":\"typeOf\"},\"id\":997,\"name\":\"Identifier\",\"src\":\"5609:6:2\"}],\"id\":998,\"name\":\"FunctionCall\",\"src\":\"5588:28:2\"}],\"id\":999,\"name\":\"FunctionCall\",\"src\":\"5580:37:2\"}],\"id\":1000,\"name\":\"VariableDeclarationStatement\",\"src\":\"5562:55:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"push\",\"type\":\"function (address)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":535,\"type\":\"address[] storage ref\",\"value\":\"deployedVotes\"},\"id\":1001,\"name\":\"Identifier\",\"src\":\"5628:13:2\"}],\"id\":1003,\"name\":\"MemberAccess\",\"src\":\"5628:18:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":990,\"type\":\"address\",\"value\":\"newVote\"},\"id\":1004,\"name\":\"Identifier\",\"src\":\"5647:7:2\"}],\"id\":1005,\"name\":\"FunctionCall\",\"src\":\"5628:27:2\"}],\"id\":1006,\"name\":\"ExpressionStatement\",\"src\":\"5628:27:2\"}],\"id\":1007,\"name\":\"Block\",\"src\":\"5551:112:2\"}],\"id\":1008,\"name\":\"FunctionDefinition\",\"src\":\"5512:151:2\"},{\"attributes\":{\"functionSelector\":\"1c14ce5e\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"loginUser\",\"scope\":1115,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"password\",\"scope\":1048,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":1009,\"name\":\"ElementaryTypeName\",\"src\":\"5688:6:2\"}],\"id\":1010,\"name\":\"VariableDeclaration\",\"src\":\"5688:22:2\"}],\"id\":1011,\"name\":\"ParameterList\",\"src\":\"5687:24:2\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":1048,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":1012,\"name\":\"ElementaryTypeName\",\"src\":\"5733:6:2\"}],\"id\":1013,\"name\":\"VariableDeclaration\",\"src\":\"5733:13:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":1048,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":1014,\"name\":\"ElementaryTypeName\",\"src\":\"5748:6:2\"}],\"id\":1015,\"name\":\"VariableDeclaration\",\"src\":\"5748:13:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":1048,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"uint32[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"uint32[]\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":1016,\"name\":\"ElementaryTypeName\",\"src\":\"5763:6:2\"}],\"id\":1017,\"name\":\"ArrayTypeName\",\"src\":\"5763:8:2\"}],\"id\":1018,\"name\":\"VariableDeclaration\",\"src\":\"5763:15:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":1048,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"bool\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":1019,\"name\":\"ElementaryTypeName\",\"src\":\"5780:4:2\"}],\"id\":1020,\"name\":\"VariableDeclaration\",\"src\":\"5780:4:2\"}],\"id\":1021,\"name\":\"ParameterList\",\"src\":\"5732:53:2\"},{\"children\":[{\"attributes\":{\"assignments\":[1023]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"u\",\"scope\":1047,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.userStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"userStruct\",\"referencedDeclaration\":526,\"type\":\"struct VoteFactory.userStruct\"},\"id\":1022,\"name\":\"UserDefinedTypeName\",\"src\":\"5796:10:2\"}],\"id\":1023,\"name\":\"VariableDeclaration\",\"src\":\"5796:20:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.userStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":539,\"type\":\"mapping(address => struct VoteFactory.userStruct storage ref)\",\"value\":\"userInfo\"},\"id\":1024,\"name\":\"Identifier\",\"src\":\"5819:8:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":1025,\"name\":\"Identifier\",\"src\":\"5828:3:2\"}],\"id\":1026,\"name\":\"MemberAccess\",\"src\":\"5828:10:2\"}],\"id\":1027,\"name\":\"IndexAccess\",\"src\":\"5819:20:2\"}],\"id\":1028,\"name\":\"VariableDeclarationStatement\",\"src\":\"5796:43:2\"},{\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"tuple()\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"type\":\"function (bool) pure\",\"value\":\"require\"},\"id\":1029,\"name\":\"Identifier\",\"src\":\"5849:7:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"bool\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"},{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}],\"overloadedDeclarations\":[null],\"referencedDeclaration\":1114,\"type\":\"function (string memory,string memory) pure returns (bool)\",\"value\":\"compareStrings\"},\"id\":1030,\"name\":\"Identifier\",\"src\":\"5857:14:2\"},{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":1010,\"type\":\"string memory\",\"value\":\"password\"},\"id\":1031,\"name\":\"Identifier\",\"src\":\"5872:8:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"password\",\"referencedDeclaration\":520,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":1023,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":1032,\"name\":\"Identifier\",\"src\":\"5882:1:2\"}],\"id\":1033,\"name\":\"MemberAccess\",\"src\":\"5882:10:2\"}],\"id\":1034,\"name\":\"FunctionCall\",\"src\":\"5857:36:2\"}],\"id\":1035,\"name\":\"FunctionCall\",\"src\":\"5849:45:2\"}],\"id\":1036,\"name\":\"ExpressionStatement\",\"src\":\"5849:45:2\"},{\"attributes\":{\"functionReturnParameters\":1021},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"tuple(string storage ref,string storage ref,uint32[] storage ref,bool)\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"name\",\"referencedDeclaration\":516,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":1023,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":1037,\"name\":\"Identifier\",\"src\":\"5948:1:2\"}],\"id\":1038,\"name\":\"MemberAccess\",\"src\":\"5948:6:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"email\",\"referencedDeclaration\":518,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":1023,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":1039,\"name\":\"Identifier\",\"src\":\"5956:1:2\"}],\"id\":1040,\"name\":\"MemberAccess\",\"src\":\"5956:7:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"groups\",\"referencedDeclaration\":523,\"type\":\"uint32[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":1023,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":1041,\"name\":\"Identifier\",\"src\":\"5965:1:2\"}],\"id\":1042,\"name\":\"MemberAccess\",\"src\":\"5965:8:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"isAdmin\",\"referencedDeclaration\":525,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":1023,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":1043,\"name\":\"Identifier\",\"src\":\"5975:1:2\"}],\"id\":1044,\"name\":\"MemberAccess\",\"src\":\"5975:9:2\"}],\"id\":1045,\"name\":\"TupleExpression\",\"src\":\"5947:38:2\"}],\"id\":1046,\"name\":\"Return\",\"src\":\"5941:44:2\"}],\"id\":1047,\"name\":\"Block\",\"src\":\"5786:207:2\"}],\"id\":1048,\"name\":\"FunctionDefinition\",\"src\":\"5669:324:2\"},{\"attributes\":{\"functionSelector\":\"832880e7\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"getUser\",\"scope\":1115,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":1049,\"name\":\"ParameterList\",\"src\":\"6050:2:2\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":1078,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":1050,\"name\":\"ElementaryTypeName\",\"src\":\"6074:6:2\"}],\"id\":1051,\"name\":\"VariableDeclaration\",\"src\":\"6074:13:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":1078,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":1052,\"name\":\"ElementaryTypeName\",\"src\":\"6089:6:2\"}],\"id\":1053,\"name\":\"VariableDeclaration\",\"src\":\"6089:13:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":1078,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"uint32[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"uint32[]\"},\"children\":[{\"attributes\":{\"name\":\"uint32\",\"type\":\"uint32\"},\"id\":1054,\"name\":\"ElementaryTypeName\",\"src\":\"6104:6:2\"}],\"id\":1055,\"name\":\"ArrayTypeName\",\"src\":\"6104:8:2\"}],\"id\":1056,\"name\":\"VariableDeclaration\",\"src\":\"6104:15:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":1078,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"bool\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":1057,\"name\":\"ElementaryTypeName\",\"src\":\"6121:4:2\"}],\"id\":1058,\"name\":\"VariableDeclaration\",\"src\":\"6121:4:2\"}],\"id\":1059,\"name\":\"ParameterList\",\"src\":\"6073:53:2\"},{\"children\":[{\"attributes\":{\"assignments\":[1061]},\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"u\",\"scope\":1077,\"stateVariable\":false,\"storageLocation\":\"storage\",\"type\":\"struct VoteFactory.userStruct\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"userStruct\",\"referencedDeclaration\":526,\"type\":\"struct VoteFactory.userStruct\"},\"id\":1060,\"name\":\"UserDefinedTypeName\",\"src\":\"6137:10:2\"}],\"id\":1061,\"name\":\"VariableDeclaration\",\"src\":\"6137:20:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"type\":\"struct VoteFactory.userStruct storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":539,\"type\":\"mapping(address => struct VoteFactory.userStruct storage ref)\",\"value\":\"userInfo\"},\"id\":1062,\"name\":\"Identifier\",\"src\":\"6160:8:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"sender\",\"type\":\"address payable\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-15,\"type\":\"msg\",\"value\":\"msg\"},\"id\":1063,\"name\":\"Identifier\",\"src\":\"6169:3:2\"}],\"id\":1064,\"name\":\"MemberAccess\",\"src\":\"6169:10:2\"}],\"id\":1065,\"name\":\"IndexAccess\",\"src\":\"6160:20:2\"}],\"id\":1066,\"name\":\"VariableDeclarationStatement\",\"src\":\"6137:43:2\"},{\"attributes\":{\"functionReturnParameters\":1059},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"tuple(string storage ref,string storage ref,uint32[] storage ref,bool)\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"name\",\"referencedDeclaration\":516,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":1061,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":1067,\"name\":\"Identifier\",\"src\":\"6198:1:2\"}],\"id\":1068,\"name\":\"MemberAccess\",\"src\":\"6198:6:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"email\",\"referencedDeclaration\":518,\"type\":\"string storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":1061,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":1069,\"name\":\"Identifier\",\"src\":\"6206:1:2\"}],\"id\":1070,\"name\":\"MemberAccess\",\"src\":\"6206:7:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"groups\",\"referencedDeclaration\":523,\"type\":\"uint32[] storage ref\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":1061,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":1071,\"name\":\"Identifier\",\"src\":\"6215:1:2\"}],\"id\":1072,\"name\":\"MemberAccess\",\"src\":\"6215:8:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"member_name\":\"isAdmin\",\"referencedDeclaration\":525,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":1061,\"type\":\"struct VoteFactory.userStruct storage pointer\",\"value\":\"u\"},\"id\":1073,\"name\":\"Identifier\",\"src\":\"6225:1:2\"}],\"id\":1074,\"name\":\"MemberAccess\",\"src\":\"6225:9:2\"}],\"id\":1075,\"name\":\"TupleExpression\",\"src\":\"6197:38:2\"}],\"id\":1076,\"name\":\"Return\",\"src\":\"6191:44:2\"}],\"id\":1077,\"name\":\"Block\",\"src\":\"6126:117:2\"}],\"id\":1078,\"name\":\"FunctionDefinition\",\"src\":\"6034:209:2\"},{\"attributes\":{\"functionSelector\":\"ca9cdfff\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"getDeployedVotes\",\"scope\":1115,\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"attributes\":{\"parameters\":[null]},\"children\":[],\"id\":1079,\"name\":\"ParameterList\",\"src\":\"6280:2:2\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":1087,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"address[]\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"type\":\"address[]\"},\"children\":[{\"attributes\":{\"name\":\"address\",\"stateMutability\":\"nonpayable\",\"type\":\"address\"},\"id\":1080,\"name\":\"ElementaryTypeName\",\"src\":\"6304:7:2\"}],\"id\":1081,\"name\":\"ArrayTypeName\",\"src\":\"6304:9:2\"}],\"id\":1082,\"name\":\"VariableDeclaration\",\"src\":\"6304:16:2\"}],\"id\":1083,\"name\":\"ParameterList\",\"src\":\"6303:18:2\"},{\"children\":[{\"attributes\":{\"functionReturnParameters\":1083},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":535,\"type\":\"address[] storage ref\",\"value\":\"deployedVotes\"},\"id\":1084,\"name\":\"Identifier\",\"src\":\"6340:13:2\"}],\"id\":1085,\"name\":\"Return\",\"src\":\"6333:20:2\"}],\"id\":1086,\"name\":\"Block\",\"src\":\"6322:39:2\"}],\"id\":1087,\"name\":\"FunctionDefinition\",\"src\":\"6255:106:2\"},{\"attributes\":{\"functionSelector\":\"bed34bba\",\"implemented\":true,\"isConstructor\":false,\"kind\":\"function\",\"modifiers\":[null],\"name\":\"compareStrings\",\"scope\":1115,\"stateMutability\":\"pure\",\"virtual\":false,\"visibility\":\"public\"},\"children\":[{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"a\",\"scope\":1114,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":1088,\"name\":\"ElementaryTypeName\",\"src\":\"6572:6:2\"}],\"id\":1089,\"name\":\"VariableDeclaration\",\"src\":\"6572:15:2\"},{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"b\",\"scope\":1114,\"stateVariable\":false,\"storageLocation\":\"memory\",\"type\":\"string\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"string\",\"type\":\"string\"},\"id\":1090,\"name\":\"ElementaryTypeName\",\"src\":\"6589:6:2\"}],\"id\":1091,\"name\":\"VariableDeclaration\",\"src\":\"6589:15:2\"}],\"id\":1092,\"name\":\"ParameterList\",\"src\":\"6571:34:2\"},{\"children\":[{\"attributes\":{\"constant\":false,\"mutability\":\"mutable\",\"name\":\"\",\"scope\":1114,\"stateVariable\":false,\"storageLocation\":\"default\",\"type\":\"bool\",\"visibility\":\"internal\"},\"children\":[{\"attributes\":{\"name\":\"bool\",\"type\":\"bool\"},\"id\":1093,\"name\":\"ElementaryTypeName\",\"src\":\"6627:4:2\"}],\"id\":1094,\"name\":\"VariableDeclaration\",\"src\":\"6627:4:2\"}],\"id\":1095,\"name\":\"ParameterList\",\"src\":\"6626:6:2\"},{\"children\":[{\"attributes\":{\"functionReturnParameters\":1095},\"children\":[{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"bool\"},\"children\":[{\"attributes\":{\"commonType\":{\"typeIdentifier\":\"t_bytes32\",\"typeString\":\"bytes32\"},\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"operator\":\"==\",\"type\":\"bool\"},\"children\":[{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"bytes32\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bytes_memory_ptr\",\"typeString\":\"bytes memory\"}],\"overloadedDeclarations\":[null],\"referencedDeclaration\":-8,\"type\":\"function (bytes memory) pure returns (bytes32)\",\"value\":\"keccak256\"},\"id\":1096,\"name\":\"Identifier\",\"src\":\"6652:9:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"bytes memory\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"member_name\":\"encodePacked\",\"type\":\"function () pure returns (bytes memory)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-1,\"type\":\"abi\",\"value\":\"abi\"},\"id\":1097,\"name\":\"Identifier\",\"src\":\"6662:3:2\"}],\"id\":1098,\"name\":\"MemberAccess\",\"src\":\"6662:16:2\"},{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"string memory\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":1089,\"type\":\"string memory\",\"value\":\"a\"},\"id\":1099,\"name\":\"Identifier\",\"src\":\"6680:1:2\"}],\"id\":1100,\"name\":\"TupleExpression\",\"src\":\"6679:3:2\"}],\"id\":1101,\"name\":\"FunctionCall\",\"src\":\"6662:21:2\"}],\"id\":1102,\"name\":\"FunctionCall\",\"src\":\"6652:32:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"bytes32\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bytes_memory_ptr\",\"typeString\":\"bytes memory\"}],\"overloadedDeclarations\":[null],\"referencedDeclaration\":-8,\"type\":\"function (bytes memory) pure returns (bytes32)\",\"value\":\"keccak256\"},\"id\":1103,\"name\":\"Identifier\",\"src\":\"6688:9:2\"},{\"attributes\":{\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"isStructConstructorCall\":false,\"lValueRequested\":false,\"names\":[null],\"tryCall\":false,\"type\":\"bytes memory\",\"type_conversion\":false},\"children\":[{\"attributes\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}],\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"member_name\":\"encodePacked\",\"type\":\"function () pure returns (bytes memory)\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":-1,\"type\":\"abi\",\"value\":\"abi\"},\"id\":1104,\"name\":\"Identifier\",\"src\":\"6698:3:2\"}],\"id\":1105,\"name\":\"MemberAccess\",\"src\":\"6698:16:2\"},{\"attributes\":{\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"type\":\"string memory\"},\"children\":[{\"attributes\":{\"overloadedDeclarations\":[null],\"referencedDeclaration\":1091,\"type\":\"string memory\",\"value\":\"b\"},\"id\":1106,\"name\":\"Identifier\",\"src\":\"6716:1:2\"}],\"id\":1107,\"name\":\"TupleExpression\",\"src\":\"6715:3:2\"}],\"id\":1108,\"name\":\"FunctionCall\",\"src\":\"6698:21:2\"}],\"id\":1109,\"name\":\"FunctionCall\",\"src\":\"6688:32:2\"}],\"id\":1110,\"name\":\"BinaryOperation\",\"src\":\"6652:68:2\"}],\"id\":1111,\"name\":\"TupleExpression\",\"src\":\"6651:70:2\"}],\"id\":1112,\"name\":\"Return\",\"src\":\"6644:77:2\"}],\"id\":1113,\"name\":\"Block\",\"src\":\"6633:96:2\"}],\"id\":1114,\"name\":\"FunctionDefinition\",\"src\":\"6548:181:2\"}],\"id\":1115,\"name\":\"ContractDefinition\",\"src\":\"92:6643:2\"}],\"id\":1116,\"name\":\"SourceUnit\",\"src\":\"0:6735:2\"},\"compiler\":{\"name\":\"solc\",\"version\":\"0.7.4+commit.3f05b770.Emscripten.clang\"},\"networks\":{\"5777\":{\"events\":{},\"links\":{},\"address\":\"0x321B13C986727C76e7370c021F619610398f3A36\",\"transactionHash\":\"0x45fd6baedc56839a48d232b8b08b59db87e70cf16e5e850e0348b96dd0757877\"}},\"schemaVersion\":\"3.3.3\",\"updatedAt\":\"2021-03-25T21:10:39.995Z\",\"networkType\":\"ethereum\",\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}}");

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
  var web3Instance;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function initWeb3() {
      web3Instance = await Object(_getWeb3__WEBPACK_IMPORTED_MODULE_5__["default"])();
      setWeb3(web3Instance);
    }

    initWeb3();
  }, []);
  const electionTypes = [{
    key: 'sm',
    text: 'simple majority',
    value: 'majority'
  }, {
    key: 'tt',
    text: 'two thirds',
    value: 'twoThirds'
  }];
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
      lineNumber: 140,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }), __jsx("h1", {
    style: adminTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, "New Election"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    onSubmit: onSubmit,
    style: adminFields,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
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
      lineNumber: 148,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
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
      lineNumber: 157,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
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
      lineNumber: 167,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
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
      lineNumber: 175,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
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
      lineNumber: 186,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Button, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 21
    }
  }, "Cancel"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Button, {
    type: "submit",
    onSubmit: onSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
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