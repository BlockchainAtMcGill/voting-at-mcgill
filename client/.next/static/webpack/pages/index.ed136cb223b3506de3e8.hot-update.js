webpackHotUpdate_N_E("pages/index",{

/***/ "./src/getWeb3.js":
/*!************************!*\
  !*** ./src/getWeb3.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ "./node_modules/web3/dist/web3.min.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);




var getWeb3 = function getWeb3() {
  return new Promise(function (resolve, reject) {
    var foo = null;

    if (true) {
      foo = window.localStorage.getItem("foo");
    } // Wait for loading completion to avoid race conditions with web3 injection timing.


    window.addEventListener("load", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var web3, _web, provider, _web2;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!window.ethereum) {
                _context.next = 13;
                break;
              }

              web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a(window.ethereum);
              _context.prev = 2;
              _context.next = 5;
              return window.ethereum.enable();

            case 5:
              // Acccounts now exposed
              resolve(web3);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](2);
              reject(_context.t0);

            case 11:
              _context.next = 14;
              break;

            case 13:
              // Legacy dapp browsers...
              if (window.web3) {
                // Use Mist/MetaMask's provider.
                _web = window.web3;
                console.log("Injected web3 detected.");
                resolve(_web);
              } // Fallback to localhost; use dev console port by default...
              else {
                  provider = new web3__WEBPACK_IMPORTED_MODULE_2___default.a.providers.HttpProvider("http://127.0.0.1:8545");
                  _web2 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a(provider);
                  console.log("No web3 instance injected, using Local web3.");
                  resolve(_web2);
                }

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 8]]);
    })));
  });
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dldFdlYjMuanMiXSwibmFtZXMiOlsiZ2V0V2ViMyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZm9vIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldGhlcmV1bSIsIndlYjMiLCJXZWIzIiwiZW5hYmxlIiwiY29uc29sZSIsImxvZyIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFNBQ2QsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUMvQixRQUFJQyxHQUFHLEdBQUcsSUFBVjs7QUFDQSxjQUFtQztBQUNqQ0EsU0FBRyxHQUFHQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLEtBQTVCLENBQU47QUFDRCxLQUo4QixDQUsvQjs7O0FBQ0FGLFVBQU0sQ0FBQ0csZ0JBQVAsQ0FBd0IsTUFBeEIsZ01BQWdDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFMUJILE1BQU0sQ0FBQ0ksUUFGbUI7QUFBQTtBQUFBO0FBQUE7O0FBR3RCQyxrQkFIc0IsR0FHZixJQUFJQywyQ0FBSixDQUFTTixNQUFNLENBQUNJLFFBQWhCLENBSGU7QUFBQTtBQUFBO0FBQUEscUJBTXBCSixNQUFNLENBQUNJLFFBQVAsQ0FBZ0JHLE1BQWhCLEVBTm9COztBQUFBO0FBTzFCO0FBQ0FWLHFCQUFPLENBQUNRLElBQUQsQ0FBUDtBQVIwQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVUxQlAsb0JBQU0sYUFBTjs7QUFWMEI7QUFBQTtBQUFBOztBQUFBO0FBYTlCO0FBQ0ssa0JBQUlFLE1BQU0sQ0FBQ0ssSUFBWCxFQUFpQjtBQUNwQjtBQUNNQSxvQkFGYyxHQUVQTCxNQUFNLENBQUNLLElBRkE7QUFHcEJHLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWjtBQUNBWix1QkFBTyxDQUFDUSxJQUFELENBQVA7QUFDRCxlQUxJLENBTUw7QUFOSyxtQkFPQTtBQUNHSywwQkFESCxHQUNjLElBQUlKLDJDQUFJLENBQUNLLFNBQUwsQ0FBZUMsWUFBbkIsQ0FDZix1QkFEZSxDQURkO0FBSUdQLHVCQUpILEdBSVUsSUFBSUMsMkNBQUosQ0FBU0ksUUFBVCxDQUpWO0FBS0hGLHlCQUFPLENBQUNDLEdBQVIsQ0FBWSw4Q0FBWjtBQUNBWix5QkFBTyxDQUFDUSxLQUFELENBQVA7QUFDRDs7QUE1QjZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWhDO0FBOEJELEdBcENELENBRGM7QUFBQSxDQUFoQjs7QUF1Q2VWLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVkMTM2Y2IyMjNiMzUwNmRlM2U4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xyXG5cclxuY29uc3QgZ2V0V2ViMyA9ICgpID0+XHJcbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgbGV0IGZvbyA9IG51bGw7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBmb28gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmb29cIik7XHJcbiAgICB9XHJcbiAgICAvLyBXYWl0IGZvciBsb2FkaW5nIGNvbXBsZXRpb24gdG8gYXZvaWQgcmFjZSBjb25kaXRpb25zIHdpdGggd2ViMyBpbmplY3Rpb24gdGltaW5nLlxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgLy8gTW9kZXJuIGRhcHAgYnJvd3NlcnMuLi5cclxuICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xyXG4gICAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAvLyBSZXF1ZXN0IGFjY291bnQgYWNjZXNzIGlmIG5lZWRlZFxyXG4gICAgICAgICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLmVuYWJsZSgpO1xyXG4gICAgICAgICAgLy8gQWNjY291bnRzIG5vdyBleHBvc2VkXHJcbiAgICAgICAgICByZXNvbHZlKHdlYjMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBMZWdhY3kgZGFwcCBicm93c2Vycy4uLlxyXG4gICAgICBlbHNlIGlmICh3aW5kb3cud2ViMykge1xyXG4gICAgICAgIC8vIFVzZSBNaXN0L01ldGFNYXNrJ3MgcHJvdmlkZXIuXHJcbiAgICAgICAgY29uc3Qgd2ViMyA9IHdpbmRvdy53ZWIzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW5qZWN0ZWQgd2ViMyBkZXRlY3RlZC5cIik7XHJcbiAgICAgICAgcmVzb2x2ZSh3ZWIzKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBGYWxsYmFjayB0byBsb2NhbGhvc3Q7IHVzZSBkZXYgY29uc29sZSBwb3J0IGJ5IGRlZmF1bHQuLi5cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgV2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyKFxyXG4gICAgICAgICAgXCJodHRwOi8vMTI3LjAuMC4xOjg1NDVcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKHByb3ZpZGVyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHdlYjMgaW5zdGFuY2UgaW5qZWN0ZWQsIHVzaW5nIExvY2FsIHdlYjMuXCIpO1xyXG4gICAgICAgIHJlc29sdmUod2ViMyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0V2ViMztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==