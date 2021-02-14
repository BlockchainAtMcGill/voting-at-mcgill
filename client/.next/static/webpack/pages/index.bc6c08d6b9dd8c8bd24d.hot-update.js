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
    // Wait for loading completion to avoid race conditions with web3 injection timing.
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
              return window.eth_requestAccounts;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dldFdlYjMuanMiXSwibmFtZXMiOlsiZ2V0V2ViMyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV0aGVyZXVtIiwid2ViMyIsIldlYjMiLCJldGhfcmVxdWVzdEFjY291bnRzIiwiY29uc29sZSIsImxvZyIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFNBQ2QsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUMvQjtBQUNBQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLE1BQXhCLGdNQUFnQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRTFCRCxNQUFNLENBQUNFLFFBRm1CO0FBQUE7QUFBQTtBQUFBOztBQUd0QkMsa0JBSHNCLEdBR2YsSUFBSUMsMkNBQUosQ0FBU0osTUFBTSxDQUFDRSxRQUFoQixDQUhlO0FBQUE7QUFBQTtBQUFBLHFCQU1wQkYsTUFBTSxDQUFDSyxtQkFOYTs7QUFBQTtBQU8xQjtBQUNBUCxxQkFBTyxDQUFDSyxJQUFELENBQVA7QUFSMEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFVMUJKLG9CQUFNLGFBQU47O0FBVjBCO0FBQUE7QUFBQTs7QUFBQTtBQWE5QjtBQUNLLGtCQUFJQyxNQUFNLENBQUNHLElBQVgsRUFBaUI7QUFDcEI7QUFDTUEsb0JBRmMsR0FFUEgsTUFBTSxDQUFDRyxJQUZBO0FBR3BCRyx1QkFBTyxDQUFDQyxHQUFSLENBQVkseUJBQVo7QUFDQVQsdUJBQU8sQ0FBQ0ssSUFBRCxDQUFQO0FBQ0QsZUFMSSxDQU1MO0FBTkssbUJBT0E7QUFDR0ssMEJBREgsR0FDYyxJQUFJSiwyQ0FBSSxDQUFDSyxTQUFMLENBQWVDLFlBQW5CLENBQ2YsdUJBRGUsQ0FEZDtBQUlHUCx1QkFKSCxHQUlVLElBQUlDLDJDQUFKLENBQVNJLFFBQVQsQ0FKVjtBQUtIRix5QkFBTyxDQUFDQyxHQUFSLENBQVksOENBQVo7QUFDQVQseUJBQU8sQ0FBQ0ssS0FBRCxDQUFQO0FBQ0Q7O0FBNUI2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFoQztBQThCRCxHQWhDRCxDQURjO0FBQUEsQ0FBaEI7O0FBbUNlUCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iYzZjMDhkNmI5ZGQ4YzhiZDI0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcclxuXHJcbmNvbnN0IGdldFdlYjMgPSAoKSA9PlxyXG4gIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIC8vIFdhaXQgZm9yIGxvYWRpbmcgY29tcGxldGlvbiB0byBhdm9pZCByYWNlIGNvbmRpdGlvbnMgd2l0aCB3ZWIzIGluamVjdGlvbiB0aW1pbmcuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAvLyBNb2Rlcm4gZGFwcCBicm93c2Vycy4uLlxyXG4gICAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICAgICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIC8vIFJlcXVlc3QgYWNjb3VudCBhY2Nlc3MgaWYgbmVlZGVkXHJcbiAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoX3JlcXVlc3RBY2NvdW50cztcclxuICAgICAgICAgIC8vIEFjY2NvdW50cyBub3cgZXhwb3NlZFxyXG4gICAgICAgICAgcmVzb2x2ZSh3ZWIzKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gTGVnYWN5IGRhcHAgYnJvd3NlcnMuLi5cclxuICAgICAgZWxzZSBpZiAod2luZG93LndlYjMpIHtcclxuICAgICAgICAvLyBVc2UgTWlzdC9NZXRhTWFzaydzIHByb3ZpZGVyLlxyXG4gICAgICAgIGNvbnN0IHdlYjMgPSB3aW5kb3cud2ViMztcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkluamVjdGVkIHdlYjMgZGV0ZWN0ZWQuXCIpO1xyXG4gICAgICAgIHJlc29sdmUod2ViMyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gRmFsbGJhY2sgdG8gbG9jYWxob3N0OyB1c2UgZGV2IGNvbnNvbGUgcG9ydCBieSBkZWZhdWx0Li4uXHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlcihcclxuICAgICAgICAgIFwiaHR0cDovLzEyNy4wLjAuMTo4NTQ1XCJcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhwcm92aWRlcik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJObyB3ZWIzIGluc3RhbmNlIGluamVjdGVkLCB1c2luZyBMb2NhbCB3ZWIzLlwiKTtcclxuICAgICAgICByZXNvbHZlKHdlYjMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFdlYjM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=