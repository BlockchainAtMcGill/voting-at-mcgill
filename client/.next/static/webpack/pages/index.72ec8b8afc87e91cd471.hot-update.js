webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contracts/VoteFactory.json */ "./src/contracts/VoteFactory.json");
var _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/VoteFactory.json */ "./src/contracts/VoteFactory.json", 1);
/* harmony import */ var _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contracts/Vote.json */ "./src/contracts/Vote.json");
var _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/Vote.json */ "./src/contracts/Vote.json", 1);
/* harmony import */ var _getWeb3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../getWeb3 */ "./src/getWeb3.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");



var _jsxFileName = "C:\\Users\\foubroker\\PROJECT_VOTE\\voting-at-mcgill\\client\\src\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









 // CommonJS

__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  card: {
    width: '80%'
  }
});

function App() {
  _s();

  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      votesAddresses = _useState[0],
      setVotesAddresses = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      web3 = _useState2[0],
      setWeb3 = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      accounts = _useState3[0],
      setAccounts = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      contract = _useState4[0],
      setContract = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      voteContract = _useState5[0],
      setVoteContract = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // get web3
    function initWeb3() {
      return _initWeb.apply(this, arguments);
    }

    function _initWeb() {
      _initWeb = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var web3Instance;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_getWeb3__WEBPACK_IMPORTED_MODULE_6__["default"])();

              case 2:
                web3Instance = _context.sent;
                setWeb3(web3Instance);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _initWeb.apply(this, arguments);
    }

    initWeb3();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // get Factory contract
    function setup() {
      return _setup.apply(this, arguments);
    }

    function _setup() {
      _setup = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var networkId, deployedNetwork, instance;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(web3 == '')) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _context2.prev = 2;
                _context2.t0 = setAccounts;
                _context2.next = 6;
                return web3.eth.getAccounts();

              case 6:
                _context2.t1 = _context2.sent;
                (0, _context2.t0)(_context2.t1);
                _context2.next = 10;
                return web3.eth.net.getId();

              case 10:
                networkId = _context2.sent;
                deployedNetwork = _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_4__.networks[networkId];
                instance = new web3.eth.Contract(_contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_4__.abi, deployedNetwork && deployedNetwork.address);
                _context2.t2 = setAccounts;
                _context2.next = 16;
                return web3.eth.getAccounts();

              case 16:
                _context2.t3 = _context2.sent;
                (0, _context2.t2)(_context2.t3);
                setContract(instance); // Set web3, accounts, and contract to the state, and then proceed with an

                _context2.next = 25;
                break;

              case 21:
                _context2.prev = 21;
                _context2.t4 = _context2["catch"](2);
                // Catch any errors for any of the above operations.
                alert("Failed to load web3, accounts, or contract. Check console for details.");
                console.error(_context2.t4);

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 21]]);
      }));
      return _setup.apply(this, arguments);
    }

    setup();
  }, [web3]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    //just get Vote contract
    function setup() {
      return _setup2.apply(this, arguments);
    }

    function _setup2() {
      _setup2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var instance;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(web3 == '')) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                try {
                  // Get the contract instance.
                  instance = new web3.eth.Contract(_contracts_Vote_json__WEBPACK_IMPORTED_MODULE_5__.abi, votesAddresses[votesAddresses.length - 1]);
                  setVoteContract(instance); // Set web3, accounts, and contract to the state, and then proceed with an
                } catch (error) {
                  // Catch any errors for any of the above operations.
                  alert("Failed to load web3, accounts, or contract. Check console for details.");
                  console.error(error);
                }

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      return _setup2.apply(this, arguments);
    }

    setup();
  }, [contract, votesAddresses]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    //display available votes
    var displayVotes = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(contract == '')) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return");

              case 2:
                _context4.next = 4;
                return contract.methods.getDeployedVotes().call();

              case 4:
                response = _context4.sent;
                // Update state with the result.
                setVotesAddresses(response);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function displayVotes() {
        return _ref.apply(this, arguments);
      };
    }();

    displayVotes();
  }, [contract]);

  var displayInfo = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(address) {
      var instance;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!(web3 == '')) {
                _context5.next = 2;
                break;
              }

              return _context5.abrupt("return");

            case 2:
              _context5.prev = 2;
              // Get the contract instance.
              instance = new web3.eth.Contract(_contracts_Vote_json__WEBPACK_IMPORTED_MODULE_5__.abi, address);
              _context5.next = 6;
              return instance.methods.currentElection().call();

            case 6:
              return _context5.abrupt("return", _context5.sent);

            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](2);
              // Catch any errors for any of the above operations.
              alert("Failed to load web3, accounts, or contract. Check console for details.");
              console.error(_context5.t0);

            case 13:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[2, 9]]);
    }));

    return function displayInfo(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  function displayVoteList() {
    var _this = this;

    if (web3 == "") {
      return "waiting for votes to display...";
    } else if (votesAddresses == "") {
      return "no votes to display";
    }

    var renderedAddresses = [];
    votesAddresses.map(function (address) {
      displayInfo(address).then(function (newAddress) {
        return renderedAddresses.push(newAddress);
      });
    });

    for (var i = 0; i < votesAddresses; i++) {
      renderedAddresses[i]["address"] = votesAddresses[i];
    }

    console.log(renderedAddresses['0']);
    console.log(renderedAddresses[1]);
    return renderedAddresses.map(function (vote) {
      return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: vote.address,
        variant: "outlined",
        className: classes.card,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
        container: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
        item: true,
        xs: 10,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 15
        }
      }, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 35
        }
      }, vote.address)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
        item: true,
        xs: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 15
        }
      }, __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 17
        }
      }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        route: "/elections/apply/".concat(vote.address),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 19
        }
      }, "Apply as Candidate")), __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 17
        }
      }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        route: "/elections/vote/".concat(vote.address),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 19
        }
      }, "Vote"))))));
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_7__["Header"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }, displayVoteList())));
}

_s(App, "OLa/w32w2xBblAnJFP4CdzASwCs=", false, function () {
  return [useStyles];
});

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiY2FyZCIsIndpZHRoIiwiQXBwIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwidm90ZXNBZGRyZXNzZXMiLCJzZXRWb3Rlc0FkZHJlc3NlcyIsIndlYjMiLCJzZXRXZWIzIiwiYWNjb3VudHMiLCJzZXRBY2NvdW50cyIsImNvbnRyYWN0Iiwic2V0Q29udHJhY3QiLCJ2b3RlQ29udHJhY3QiLCJzZXRWb3RlQ29udHJhY3QiLCJ1c2VFZmZlY3QiLCJpbml0V2ViMyIsImdldFdlYjMiLCJ3ZWIzSW5zdGFuY2UiLCJzZXR1cCIsImV0aCIsImdldEFjY291bnRzIiwibmV0IiwiZ2V0SWQiLCJuZXR3b3JrSWQiLCJkZXBsb3llZE5ldHdvcmsiLCJWb3RlRmFjdG9yeUNvbnRyYWN0IiwibmV0d29ya3MiLCJpbnN0YW5jZSIsIkNvbnRyYWN0IiwiYWJpIiwiYWRkcmVzcyIsImFsZXJ0IiwiY29uc29sZSIsImVycm9yIiwiVm90ZUNvbnRyYWN0IiwibGVuZ3RoIiwiZGlzcGxheVZvdGVzIiwibWV0aG9kcyIsImdldERlcGxveWVkVm90ZXMiLCJjYWxsIiwicmVzcG9uc2UiLCJkaXNwbGF5SW5mbyIsImN1cnJlbnRFbGVjdGlvbiIsImRpc3BsYXlWb3RlTGlzdCIsInJlbmRlcmVkQWRkcmVzc2VzIiwibWFwIiwidGhlbiIsIm5ld0FkZHJlc3MiLCJwdXNoIiwiaSIsImxvZyIsInZvdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0NBRUE7O0FBQ0FBLG1CQUFPLENBQUMsa0ZBQUQsQ0FBUDs7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDM0JDLE1BQUksRUFBRTtBQUNKQyxTQUFLLEVB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9hLGVBQWUsRUFBdEIsQ0FERixDQU5GLENBREY7QUFZRDs7R0E5SlExQyxHO1VBQ1NKLFM7OztLQURUSSxHO0FBZ0tNQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43MmVjOGI4YWZjODdlOTFjZDQ3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBWb3RlRmFjdG9yeUNvbnRyYWN0IGZyb20gXCIuLi9jb250cmFjdHMvVm90ZUZhY3RvcnkuanNvblwiO1xyXG5pbXBvcnQgVm90ZUNvbnRyYWN0IGZyb20gXCIuLi9jb250cmFjdHMvVm90ZS5qc29uXCI7XHJcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi9nZXRXZWIzXCI7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uL3JvdXRlcydcclxuXHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuLy8gQ29tbW9uSlNcclxucmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiKTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIGNhcmQ6IHtcclxuICAgIHdpZHRoOic4MCUnXHJcbiAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW3ZvdGVzQWRkcmVzc2VzLCBzZXRWb3Rlc0FkZHJlc3Nlc10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3dlYjMsIHNldFdlYjNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFthY2NvdW50cywgc2V0QWNjb3VudHNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt2b3RlQ29udHJhY3QsIHNldFZvdGVDb250cmFjdF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7Ly8gZ2V0IHdlYjNcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXRXZWIzKCkge1xyXG4gICAgICBjb25zdCB3ZWIzSW5zdGFuY2UgPSBhd2FpdCBnZXRXZWIzKClcclxuICAgICAgc2V0V2ViMyh3ZWIzSW5zdGFuY2UpO1xyXG4gICAgfVxyXG4gICAgaW5pdFdlYjMoKTtcclxuICB9LFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsvLyBnZXQgRmFjdG9yeSBjb250cmFjdFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2V0dXAoKSB7XHJcbiAgICAgIGlmKHdlYjMgPT0gJycpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBzZXRBY2NvdW50cyhhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpKTtcclxuICAgICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpO1xyXG4gICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IFZvdGVGYWN0b3J5Q29udHJhY3QubmV0d29ya3NbbmV0d29ya0lkXTtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgIFZvdGVGYWN0b3J5Q29udHJhY3QuYWJpLFxyXG4gICAgICAgICAgZGVwbG95ZWROZXR3b3JrICYmIGRlcGxveWVkTmV0d29yay5hZGRyZXNzLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0QWNjb3VudHMoYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKSk7XHJcbiAgICAgICAgc2V0Q29udHJhY3QoaW5zdGFuY2UpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gU2V0IHdlYjMsIGFjY291bnRzLCBhbmQgY29udHJhY3QgdG8gdGhlIHN0YXRlLCBhbmQgdGhlbiBwcm9jZWVkIHdpdGggYW5cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyBDYXRjaCBhbnkgZXJyb3JzIGZvciBhbnkgb2YgdGhlIGFib3ZlIG9wZXJhdGlvbnMuXHJcbiAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgICBzZXR1cCgpO1xyXG4gIH0sW3dlYjNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsvL2p1c3QgZ2V0IFZvdGUgY29udHJhY3RcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgICBpZih3ZWIzID09ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBjb250cmFjdCBpbnN0YW5jZS5cclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgIFZvdGVDb250cmFjdC5hYmksXHJcbiAgICAgICAgICB2b3Rlc0FkZHJlc3Nlc1t2b3Rlc0FkZHJlc3Nlcy5sZW5ndGgtMV0sXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRWb3RlQ29udHJhY3QoaW5zdGFuY2UpO1xyXG4gICAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxyXG4gICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICAgc2V0dXAoKTtcclxuICB9LFtjb250cmFjdCx2b3Rlc0FkZHJlc3Nlc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PiB7Ly9kaXNwbGF5IGF2YWlsYWJsZSB2b3Rlc1xyXG4gICAgdmFyIGRpc3BsYXlWb3RlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYoY29udHJhY3QgPT0gJycpe1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0RGVwbG95ZWRWb3RlcygpLmNhbGwoKTtcclxuICAgICAgLy8gVXBkYXRlIHN0YXRlIHdpdGggdGhlIHJlc3VsdC5cclxuICAgICAgc2V0Vm90ZXNBZGRyZXNzZXMocmVzcG9uc2UpO1xyXG4gICAgfTtcclxuICAgIGRpc3BsYXlWb3RlcygpO1xyXG4gIH0sW2NvbnRyYWN0XSk7XHJcblxyXG4gIHZhciBkaXNwbGF5SW5mbyA9IGFzeW5jIChhZGRyZXNzKSA9PiB7IFxyXG4gICAgaWYod2ViMyA9PSAnJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICBWb3RlQ29udHJhY3QuYWJpLFxyXG4gICAgICAgIGFkZHJlc3NcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIChhd2FpdCBpbnN0YW5jZS5tZXRob2RzLmN1cnJlbnRFbGVjdGlvbigpLmNhbGwoKSk7XHJcbiAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyBDYXRjaCBhbnkgZXJyb3JzIGZvciBhbnkgb2YgdGhlIGFib3ZlIG9wZXJhdGlvbnMuXHJcbiAgICAgIGFsZXJ0KFxyXG4gICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG5cclxuICBmdW5jdGlvbiBkaXNwbGF5Vm90ZUxpc3QoKSB7XHJcbiAgICBpZih3ZWIzID09IFwiXCIpe1xyXG4gICAgICByZXR1cm4gXCJ3YWl0aW5nIGZvciB2b3RlcyB0byBkaXNwbGF5Li4uXCJcclxuICAgIH1cclxuICAgIGVsc2UgaWYodm90ZXNBZGRyZXNzZXMgPT0gXCJcIil7XHJcbiAgICAgIHJldHVybiBcIm5vIHZvdGVzIHRvIGRpc3BsYXlcIlxyXG4gICAgfVxyXG4gICAgdmFyIHJlbmRlcmVkQWRkcmVzc2VzID0gW107XHJcbiAgICB2b3Rlc0FkZHJlc3Nlcy5tYXAoYWRkcmVzcyA9PiB7XHJcbiAgICAgIGRpc3BsYXlJbmZvKGFkZHJlc3MpLnRoZW4obmV3QWRkcmVzcyA9PlxyXG4gICAgICAgIHJlbmRlcmVkQWRkcmVzc2VzLnB1c2gobmV3QWRkcmVzcylcclxuICAgICAgKVxyXG4gICAgfSlcclxuICAgIGZvcih2YXIgaT0wOyBpPCB2b3Rlc0FkZHJlc3NlcztpKyspe1xyXG4gICAgICAocmVuZGVyZWRBZGRyZXNzZXNbaV0pW1wiYWRkcmVzc1wiXSA9IHZvdGVzQWRkcmVzc2VzW2ldO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cocmVuZGVyZWRBZGRyZXNzZXNbJzAnXSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZW5kZXJlZEFkZHJlc3Nlc1sxXSk7XHJcbiAgICByZXR1cm4gcmVuZGVyZWRBZGRyZXNzZXMubWFwKHZvdGUgPT4gXHJcbiAgICAgICAgPENhcmQga2V5PXt2b3RlLmFkZHJlc3N9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNsYXNzTmFtZSA9e2NsYXNzZXMuY2FyZH0+XHJcbiAgICAgICAgICA8Q2FyZENvbnRlbnQgPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cyA9ezEwfT48c3Bhbj57dm90ZS5hZGRyZXNzfTwvc3Bhbj48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cyA9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGUgPXtgL2VsZWN0aW9ucy9hcHBseS8ke3ZvdGUuYWRkcmVzc31gfT4gXHJcbiAgICAgICAgICAgICAgICAgICAgQXBwbHkgYXMgQ2FuZGlkYXRlXHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj4gIFxyXG4gICAgICAgICAgICAgICAgICA8TGluayByb3V0ZSA9e2AvZWxlY3Rpb25zL3ZvdGUvJHt2b3RlLmFkZHJlc3N9YH0+IFxyXG4gICAgICAgICAgICAgICAgICAgIFZvdGVcclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgIClcclxuICB9XHJcblxyXG4gIFxyXG4gIHJldHVybiggXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICA8ZGl2PnsgZGlzcGxheVZvdGVMaXN0KCkgfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==