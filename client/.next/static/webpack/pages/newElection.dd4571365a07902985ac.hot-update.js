webpackHotUpdate_N_E("pages/newElection",{

/***/ "./src/getWeb3.js":
/*!************************!*\
  !*** ./src/getWeb3.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "./node_modules/web3/dist/web3.min.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);


const getWeb3 = () => new Promise((resolve, reject) => {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  window.addEventListener("load", async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
      const web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(window.ethereum);

      try {
        // Request account access if needed
        await window.ethereum.enable(); // Acccounts now exposed

        resolve(web3);
      } catch (error) {
        reject(error);
      }
    } // Legacy dapp browsers...
    else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3;
        console.log("Injected web3 detected.");
        resolve(web3);
      } // Fallback to localhost; use dev console port by default...
      else {
          const provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider("http://127.0.0.1:8545");
          const web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);
          console.log("No web3 instance injected, using Local web3.");
          resolve(web3);
        }
  });
});

/* harmony default export */ __webpack_exports__["default"] = (getWeb3);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dldFdlYjMuanMiXSwibmFtZXMiOlsiZ2V0V2ViMyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV0aGVyZXVtIiwid2ViMyIsIldlYjMiLCJlbmFibGUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxNQUNkLElBQUlDLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7QUFDL0I7QUFDQUMsUUFBTSxDQUFDQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFZO0FBQzFDO0FBQ0EsUUFBSUQsTUFBTSxDQUFDRSxRQUFYLEVBQXFCO0FBQ25CLFlBQU1DLElBQUksR0FBRyxJQUFJQywyQ0FBSixDQUFTSixNQUFNLENBQUNFLFFBQWhCLENBQWI7O0FBQ0EsVUFBSTtBQUNGO0FBQ0EsY0FBTUYsTUFBTSxDQUFDRSxRQUFQLENBQWdCRyxNQUFoQixFQUFOLENBRkUsQ0FHRjs7QUFDQVAsZUFBTyxDQUFDSyxJQUFELENBQVA7QUFDRCxPQUxELENBS0UsT0FBT0csS0FBUCxFQUFjO0FBQ2RQLGNBQU0sQ0FBQ08sS0FBRCxDQUFOO0FBQ0Q7QUFDRixLQVZELENBV0E7QUFYQSxTQVlLLElBQUlOLE1BQU0sQ0FBQ0csSUFBWCxFQUFpQjtBQUNwQjtBQUNBLGNBQU1BLElBQUksR0FBR0gsTUFBTSxDQUFDRyxJQUFwQjtBQUNBSSxlQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWjtBQUNBVixlQUFPLENBQUNLLElBQUQsQ0FBUDtBQUNELE9BTEksQ0FNTDtBQU5LLFdBT0E7QUFDSCxnQkFBTU0sUUFBUSxHQUFHLElBQUlMLDJDQUFJLENBQUNNLFNBQUwsQ0FBZUMsWUFBbkIsQ0FDZix1QkFEZSxDQUFqQjtBQUdBLGdCQUFNUixJQUFJLEdBQUcsSUFBSUMsMkNBQUosQ0FBU0ssUUFBVCxDQUFiO0FBQ0FGLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSw4Q0FBWjtBQUNBVixpQkFBTyxDQUFDSyxJQUFELENBQVA7QUFDRDtBQUNGLEdBN0JEO0FBOEJELENBaENELENBREY7O0FBbUNlUCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXdFbGVjdGlvbi5kZDQ1NzEzNjVhMDc5MDI5ODVhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcclxuXHJcbmNvbnN0IGdldFdlYjMgPSAoKSA9PlxyXG4gIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIC8vIFdhaXQgZm9yIGxvYWRpbmcgY29tcGxldGlvbiB0byBhdm9pZCByYWNlIGNvbmRpdGlvbnMgd2l0aCB3ZWIzIGluamVjdGlvbiB0aW1pbmcuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAvLyBNb2Rlcm4gZGFwcCBicm93c2Vycy4uLlxyXG4gICAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICAgICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIC8vIFJlcXVlc3QgYWNjb3VudCBhY2Nlc3MgaWYgbmVlZGVkXHJcbiAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCk7XHJcbiAgICAgICAgICAvLyBBY2Njb3VudHMgbm93IGV4cG9zZWRcclxuICAgICAgICAgIHJlc29sdmUod2ViMyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIExlZ2FjeSBkYXBwIGJyb3dzZXJzLi4uXHJcbiAgICAgIGVsc2UgaWYgKHdpbmRvdy53ZWIzKSB7XHJcbiAgICAgICAgLy8gVXNlIE1pc3QvTWV0YU1hc2sncyBwcm92aWRlci5cclxuICAgICAgICBjb25zdCB3ZWIzID0gd2luZG93LndlYjM7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJbmplY3RlZCB3ZWIzIGRldGVjdGVkLlwiKTtcclxuICAgICAgICByZXNvbHZlKHdlYjMpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEZhbGxiYWNrIHRvIGxvY2FsaG9zdDsgdXNlIGRldiBjb25zb2xlIHBvcnQgYnkgZGVmYXVsdC4uLlxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoXHJcbiAgICAgICAgICBcImh0dHA6Ly8xMjcuMC4wLjE6ODU0NVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gd2ViMyBpbnN0YW5jZSBpbmplY3RlZCwgdXNpbmcgTG9jYWwgd2ViMy5cIik7XHJcbiAgICAgICAgcmVzb2x2ZSh3ZWIzKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRXZWIzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9