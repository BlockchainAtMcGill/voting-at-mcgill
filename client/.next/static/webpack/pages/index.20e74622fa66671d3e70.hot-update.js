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

    console.log(renderedAddresses[0]);
    return renderedAddresses.map(function (vote) {
      return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: vote.address,
        variant: "outlined",
        className: classes.card,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
        container: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
        item: true,
        xs: 10,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 15
        }
      }, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 35
        }
      }, vote.address)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
        item: true,
        xs: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 15
        }
      }, __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 17
        }
      }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        route: "/elections/apply/".concat(vote.address),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 19
        }
      }, "Apply as Candidate")), __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 17
        }
      }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        route: "/elections/vote/".concat(vote.address),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 19
        }
      }, "Vote"))))));
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_7__["Header"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }
  }), __jsx("br", {
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
  }), __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiY2FyZCIsIndpZHRoIiwiQXBwIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwidm90ZXNBZGRyZXNzZXMiLCJzZXRWb3Rlc0FkZHJlc3NlcyIsIndlYjMiLCJzZXRXZWIzIiwiYWNjb3VudHMiLCJzZXRBY2NvdW50cyIsImNvbnRyYWN0Iiwic2V0Q29udHJhY3QiLCJ2b3RlQ29udHJhY3QiLCJzZXRWb3RlQ29udHJhY3QiLCJ1c2VFZmZlY3QiLCJpbml0V2ViMyIsImdldFdlYjMiLCJ3ZWIzSW5zdGFuY2UiLCJzZXR1cCIsImV0aCIsImdldEFjY291bnRzIiwibmV0IiwiZ2V0SWQiLCJuZXR3b3JrSWQiLCJkZXBsb3llZE5ldHdvcmsiLCJWb3RlRmFjdG9yeUNvbnRyYWN0IiwibmV0d29ya3MiLCJpbnN0YW5jZSIsIkNvbnRyYWN0IiwiYWJpIiwiYWRkcmVzcyIsImFsZXJ0IiwiY29uc29sZSIsImVycm9yIiwiVm90ZUNvbnRyYWN0IiwibGVuZ3RoIiwiZGlzcGxheVZvdGVzIiwibWV0aG9kcyIsImdldERlcGxveWVkVm90ZXMiLCJjYWxsIiwicmVzcG9uc2UiLCJkaXNwbGF5SW5mbyIsImN1cnJlbnRFbGVjdGlvbiIsImRpc3BsYXlWb3RlTGlzdCIsInJlbmRlcmVkQWRkcmVzc2VzIiwibWFwIiwidGhlbiIsIm5ld0FkZHJlc3MiLCJwdXNoIiwiaSIsImxvZyIsInZvdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0NBRUE7O0FBQ0FBLG1CQUFPLENBQUMsa0ZBQUQsQ0FBUDs7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDM0JDLE1BQUksRUFBRTtBQUNKQyxTQUFLLEVBQUM7QUFERjtBQURxQixDQUFELENBQTVCOztBQU1BLFNBQVNDLEdBQVQsR0FBZTtBQUFBOztBQUNiLE1BQU1DLE9BQU8sR0FBR0wsU0FBUyxFQUF6Qjs7QUFEYSxrQkFFK0JNLHNEQUFRLENBQUMsRUFBRCxDQUZ2QztBQUFBLE1BRU5DLGNBRk07QUFBQSxNQUVVQyxpQkFGVjs7QUFBQSxtQkFHV0Ysc0RBQVEsQ0FBQyxFQUFELENBSG5CO0FBQUEsTUFHTkcsSUFITTtBQUFBLE1BR0FDLE9BSEE7O0FBQUEsbUJBSW1CSixzREFBUSxDQUFDLEVBQUQsQ0FKM0I7QUFBQSxNQUlOSyxRQUpNO0FBQUEsTUFJSUMsV0FKSjs7QUFBQSxtQkFLbUJOLHNEQUFRLENBQUMsRUFBRCxDQUwzQjtBQUFBLE1BS05PLFFBTE07QUFBQSxNQUtJQyxXQUxKOztBQUFBLG1CQU0yQlIsc0RBQVEsQ0FBQyxFQUFELENBTm5DO0FBQUEsTUFNTlMsWUFOTTtBQUFBLE1BTVFDLGVBTlI7O0FBUWJDLHlEQUFTLENBQUMsWUFBTTtBQUFDO0FBQUQsYUFDQ0MsUUFERDtBQUFBO0FBQUE7O0FBQUE7QUFBQSxrTUFDZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUM2QkMsd0RBQU8sRUFEcEM7O0FBQUE7QUFDUUMsNEJBRFI7QUFFRVYsdUJBQU8sQ0FBQ1UsWUFBRCxDQUFQOztBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRGM7QUFBQTtBQUFBOztBQUtkRixZQUFRO0FBQ1QsR0FOUSxFQU1QLEVBTk8sQ0FBVDtBQVFBRCx5REFBUyxDQUFDLFlBQU07QUFBQztBQUFELGFBQ0NJLEtBREQ7QUFBQTtBQUFBOztBQUFBO0FBQUEsZ01BQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQ0taLElBQUksSUFBSSxFQURiO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQSwrQkFLSUcsV0FMSjtBQUFBO0FBQUEsdUJBS3NCSCxJQUFJLENBQUNhLEdBQUwsQ0FBU0MsV0FBVCxFQUx0Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU80QmQsSUFBSSxDQUFDYSxHQUFMLENBQVNFLEdBQVQsQ0FBYUMsS0FBYixFQVA1Qjs7QUFBQTtBQU9VQyx5QkFQVjtBQVFVQywrQkFSVixHQVE0QkMsd0RBQW1CLENBQUNDLFFBQXBCLENBQTZCSCxTQUE3QixDQVI1QjtBQVNVSSx3QkFUVixHQVNxQixJQUFJckIsSUFBSSxDQUFDYSxHQUFMLENBQVNTLFFBQWIsQ0FDZkgsd0RBQW1CLENBQUNJLEdBREwsRUFFZkwsZUFBZSxJQUFJQSxlQUFlLENBQUNNLE9BRnBCLENBVHJCO0FBQUEsK0JBYUlyQixXQWJKO0FBQUE7QUFBQSx1QkFhc0JILElBQUksQ0FBQ2EsR0FBTCxDQUFTQyxXQUFULEVBYnRCOztBQUFBO0FBQUE7QUFBQTtBQWNJVCwyQkFBVyxDQUFDZ0IsUUFBRCxDQUFYLENBZEosQ0FnQkk7O0FBaEJKO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBa0JJO0FBQ0FJLHFCQUFLLDBFQUFMO0FBR0FDLHVCQUFPLENBQUNDLEtBQVI7O0FBdEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRGM7QUFBQTtBQUFBOztBQTBCWmYsU0FBSztBQUNSLEdBM0JRLEVBMkJQLENBQUNaLElBQUQsQ0EzQk8sQ0FBVDtBQTZCQVEseURBQVMsQ0FBQyxZQUFNO0FBQUM7QUFBRCxhQUNDSSxLQUREO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGlNQUNkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUNLWixJQUFJLElBQUksRUFEYjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUlFLG9CQUFJO0FBQ0Y7QUFDTXFCLDBCQUZKLEdBRWUsSUFBSXJCLElBQUksQ0FBQ2EsR0FBTCxDQUFTUyxRQUFiLENBQ2ZNLGlEQUFZLENBQUNMLEdBREUsRUFFZnpCLGNBQWMsQ0FBQ0EsY0FBYyxDQUFDK0IsTUFBZixHQUFzQixDQUF2QixDQUZDLENBRmY7QUFNRnRCLGlDQUFlLENBQUNjLFFBQUQsQ0FBZixDQU5FLENBT0Y7QUFDRCxpQkFSRCxDQVFFLE9BQU9NLEtBQVAsRUFBYztBQUNkO0FBQ0FGLHVCQUFLLDBFQUFMO0FBR0FDLHlCQUFPLENBQUNDLEtBQVIsQ0FBY0EsS0FBZDtBQUNEOztBQWxCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURjO0FBQUE7QUFBQTs7QUFxQlpmLFNBQUs7QUFDUixHQXRCUSxFQXNCUCxDQUFDUixRQUFELEVBQVVOLGNBQVYsQ0F0Qk8sQ0FBVDtBQXdCQVUseURBQVMsQ0FBQyxZQUFLO0FBQUM7QUFDZCxRQUFJc0IsWUFBWTtBQUFBLGtNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUNkMUIsUUFBUSxJQUFJLEVBREU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBLHVCQUlNQSxRQUFRLENBQUMyQixPQUFULENBQWlCQyxnQkFBakIsR0FBb0NDLElBQXBDLEVBSk47O0FBQUE7QUFJWEMsd0JBSlc7QUFLakI7QUFDQW5DLGlDQUFpQixDQUFDbUMsUUFBRCxDQUFqQjs7QUFOaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBWkosWUFBWTtBQUFBO0FBQUE7QUFBQSxPQUFoQjs7QUFRQUEsZ0JBQVk7QUFDYixHQVZRLEVBVVAsQ0FBQzFCLFFBQUQsQ0FWTyxDQUFUOztBQVlBLE1BQUkrQixXQUFXO0FBQUEsaU1BQUcsa0JBQU9YLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ2J4QixJQUFJLElBQUksRUFESztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBS2Q7QUFDTXFCLHNCQU5RLEdBTUcsSUFBSXJCLElBQUksQ0FBQ2EsR0FBTCxDQUFTUyxRQUFiLENBQ2ZNLGlEQUFZLENBQUNMLEdBREUsRUFFZkMsT0FGZSxDQU5IO0FBQUE7QUFBQSxxQkFVQUgsUUFBUSxDQUFDVSxPQUFULENBQWlCSyxlQUFqQixHQUFtQ0gsSUFBbkMsRUFWQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWFkO0FBQ0FSLG1CQUFLLDBFQUFMO0FBR0FDLHFCQUFPLENBQUNDLEtBQVI7O0FBakJjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVhRLFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBZjs7QUF1QkEsV0FBU0UsZUFBVCxHQUEyQjtBQUFBOztBQUN6QixRQUFHckMsSUFBSSxJQUFJLEVBQVgsRUFBYztBQUNaLGFBQU8saUNBQVA7QUFDRCxLQUZELE1BR0ssSUFBR0YsY0FBYyxJQUFJLEVBQXJCLEVBQXdCO0FBQzNCLGFBQU8scUJBQVA7QUFDRDs7QUFDRCxRQUFJd0MsaUJBQWlCLEdBQUcsRUFBeEI7QUFDQXhDLGtCQUFjLENBQUN5QyxHQUFmLENBQW1CLFVBQUFmLE9BQU8sRUFBSTtBQUM1QlcsaUJBQVcsQ0FBQ1gsT0FBRCxDQUFYLENBQXFCZ0IsSUFBckIsQ0FBMEIsVUFBQUMsVUFBVTtBQUFBLGVBQ2xDSCxpQkFBaUIsQ0FBQ0ksSUFBbEIsQ0FBdUJELFVBQXZCLENBRGtDO0FBQUEsT0FBcEM7QUFHRCxLQUpEOztBQUtBLFNBQUksSUFBSUUsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFFN0MsY0FBaEIsRUFBK0I2QyxDQUFDLEVBQWhDLEVBQW1DO0FBQ2hDTCx1QkFBaUIsQ0FBQ0ssQ0FBRCxDQUFsQixDQUF1QixTQUF2QixJQUFvQzdDLGNBQWMsQ0FBQzZDLENBQUQsQ0FBbEQ7QUFDRDs7QUFDRGpCLFdBQU8sQ0FBQ2tCLEdBQVIsQ0FBWU4saUJBQWlCLENBQUMsQ0FBRCxDQUE3QjtBQUNBLFdBQU9BLGlCQUFpQixDQUFDQyxHQUFsQixDQUFzQixVQUFBTSxJQUFJO0FBQUEsYUFDN0IsTUFBQyw4REFBRDtBQUFNLFdBQUcsRUFBRUEsSUFBSSxDQUFDckIsT0FBaEI7QUFBeUIsZUFBTyxFQUFDLFVBQWpDO0FBQTRDLGlCQUFTLEVBQUc1QixPQUFPLENBQUNILElBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLCtEQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQywrREFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRyxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBT29ELElBQUksQ0FBQ3JCLE9BQVosQ0FBcEIsQ0FERixFQUVFLE1BQUMsK0RBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUcsQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLDRDQUFEO0FBQU0sYUFBSyw2QkFBdUJxQixJQUFJLENBQUNyQixPQUE1QixDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREYsQ0FERixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLDRDQUFEO0FBQU0sYUFBSyw0QkFBc0JxQixJQUFJLENBQUNyQixPQUEzQixDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FORixDQUZGLENBREYsQ0FERixDQUQ2QjtBQUFBLEtBQTFCLENBQVA7QUFxQkQ7O0FBR0QsU0FDRSxtRUFDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT2EsZUFBZSxFQUF0QixDQURGLENBTkYsQ0FERjtBQVlEOztHQTdKUTFDLEc7VUFDU0osUzs7O0tBRFRJLEc7QUErSk1BLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIwZTc0NjIyZmE2NjY3MWQzZTcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFZvdGVGYWN0b3J5Q29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlRmFjdG9yeS5qc29uXCI7XHJcbmltcG9ydCBWb3RlQ29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlLmpzb25cIjtcclxuaW1wb3J0IGdldFdlYjMgZnJvbSBcIi4uL2dldFdlYjNcIjtcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vcm91dGVzJ1xyXG5cclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG4vLyBDb21tb25KU1xyXG5yZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIpO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgY2FyZDoge1xyXG4gICAgd2lkdGg6JzgwJSdcclxuICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbdm90ZXNBZGRyZXNzZXMsIHNldFZvdGVzQWRkcmVzc2VzXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbd2ViMywgc2V0V2ViM10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2FjY291bnRzLCBzZXRBY2NvdW50c10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbnRyYWN0LCBzZXRDb250cmFjdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3ZvdGVDb250cmFjdCwgc2V0Vm90ZUNvbnRyYWN0XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsvLyBnZXQgd2ViM1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdFdlYjMoKSB7XHJcbiAgICAgIGNvbnN0IHdlYjNJbnN0YW5jZSA9IGF3YWl0IGdldFdlYjMoKVxyXG4gICAgICBzZXRXZWIzKHdlYjNJbnN0YW5jZSk7XHJcbiAgICB9XHJcbiAgICBpbml0V2ViMygpO1xyXG4gIH0sW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4gey8vIGdldCBGYWN0b3J5IGNvbnRyYWN0XHJcbiAgICBhc3luYyBmdW5jdGlvbiBzZXR1cCgpIHtcclxuICAgICAgaWYod2ViMyA9PSAnJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHNldEFjY291bnRzKGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCkpO1xyXG4gICAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXHJcbiAgICAgICAgY29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViMy5ldGgubmV0LmdldElkKCk7XHJcbiAgICAgICAgY29uc3QgZGVwbG95ZWROZXR3b3JrID0gVm90ZUZhY3RvcnlDb250cmFjdC5uZXR3b3Jrc1tuZXR3b3JrSWRdO1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgICAgICAgVm90ZUZhY3RvcnlDb250cmFjdC5hYmksXHJcbiAgICAgICAgICBkZXBsb3llZE5ldHdvcmsgJiYgZGVwbG95ZWROZXR3b3JrLmFkZHJlc3MsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRBY2NvdW50cyhhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpKTtcclxuICAgICAgICBzZXRDb250cmFjdChpbnN0YW5jZSk7XHJcbiAgICBcclxuICAgICAgICAvLyBTZXQgd2ViMywgYWNjb3VudHMsIGFuZCBjb250cmFjdCB0byB0aGUgc3RhdGUsIGFuZCB0aGVuIHByb2NlZWQgd2l0aCBhblxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cclxuICAgICAgICBhbGVydChcclxuICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAgIHNldHVwKCk7XHJcbiAgfSxbd2ViM10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4gey8vanVzdCBnZXQgVm90ZSBjb250cmFjdFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2V0dXAoKSB7XHJcbiAgICAgIGlmKHdlYjMgPT0gJycpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgICAgICAgVm90ZUNvbnRyYWN0LmFiaSxcclxuICAgICAgICAgIHZvdGVzQWRkcmVzc2VzW3ZvdGVzQWRkcmVzc2VzLmxlbmd0aC0xXSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHNldFZvdGVDb250cmFjdChpbnN0YW5jZSk7XHJcbiAgICAgICAgLy8gU2V0IHdlYjMsIGFjY291bnRzLCBhbmQgY29udHJhY3QgdG8gdGhlIHN0YXRlLCBhbmQgdGhlbiBwcm9jZWVkIHdpdGggYW5cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyBDYXRjaCBhbnkgZXJyb3JzIGZvciBhbnkgb2YgdGhlIGFib3ZlIG9wZXJhdGlvbnMuXHJcbiAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgICBzZXR1cCgpO1xyXG4gIH0sW2NvbnRyYWN0LHZvdGVzQWRkcmVzc2VzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+IHsvL2Rpc3BsYXkgYXZhaWxhYmxlIHZvdGVzXHJcbiAgICB2YXIgZGlzcGxheVZvdGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZihjb250cmFjdCA9PSAnJyl7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5nZXREZXBsb3llZFZvdGVzKCkuY2FsbCgpO1xyXG4gICAgICAvLyBVcGRhdGUgc3RhdGUgd2l0aCB0aGUgcmVzdWx0LlxyXG4gICAgICBzZXRWb3Rlc0FkZHJlc3NlcyhyZXNwb25zZSk7XHJcbiAgICB9O1xyXG4gICAgZGlzcGxheVZvdGVzKCk7XHJcbiAgfSxbY29udHJhY3RdKTtcclxuXHJcbiAgdmFyIGRpc3BsYXlJbmZvID0gYXN5bmMgKGFkZHJlc3MpID0+IHsgXHJcbiAgICBpZih3ZWIzID09ICcnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXHJcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgICAgIFZvdGVDb250cmFjdC5hYmksXHJcbiAgICAgICAgYWRkcmVzc1xyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gKGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuY3VycmVudEVsZWN0aW9uKCkuY2FsbCgpKTtcclxuICAgICAgLy8gU2V0IHdlYjMsIGFjY291bnRzLCBhbmQgY29udHJhY3QgdG8gdGhlIHN0YXRlLCBhbmQgdGhlbiBwcm9jZWVkIHdpdGggYW5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cclxuICAgICAgYWxlcnQoXHJcbiAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcblxyXG4gIGZ1bmN0aW9uIGRpc3BsYXlWb3RlTGlzdCgpIHtcclxuICAgIGlmKHdlYjMgPT0gXCJcIil7XHJcbiAgICAgIHJldHVybiBcIndhaXRpbmcgZm9yIHZvdGVzIHRvIGRpc3BsYXkuLi5cIlxyXG4gICAgfVxyXG4gICAgZWxzZSBpZih2b3Rlc0FkZHJlc3NlcyA9PSBcIlwiKXtcclxuICAgICAgcmV0dXJuIFwibm8gdm90ZXMgdG8gZGlzcGxheVwiXHJcbiAgICB9XHJcbiAgICB2YXIgcmVuZGVyZWRBZGRyZXNzZXMgPSBbXTtcclxuICAgIHZvdGVzQWRkcmVzc2VzLm1hcChhZGRyZXNzID0+IHtcclxuICAgICAgZGlzcGxheUluZm8oYWRkcmVzcykudGhlbihuZXdBZGRyZXNzID0+XHJcbiAgICAgICAgcmVuZGVyZWRBZGRyZXNzZXMucHVzaChuZXdBZGRyZXNzKVxyXG4gICAgICApXHJcbiAgICB9KVxyXG4gICAgZm9yKHZhciBpPTA7IGk8IHZvdGVzQWRkcmVzc2VzO2krKyl7XHJcbiAgICAgIChyZW5kZXJlZEFkZHJlc3Nlc1tpXSlbXCJhZGRyZXNzXCJdID0gdm90ZXNBZGRyZXNzZXNbaV07XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhyZW5kZXJlZEFkZHJlc3Nlc1swXSk7XHJcbiAgICByZXR1cm4gcmVuZGVyZWRBZGRyZXNzZXMubWFwKHZvdGUgPT4gXHJcbiAgICAgICAgPENhcmQga2V5PXt2b3RlLmFkZHJlc3N9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNsYXNzTmFtZSA9e2NsYXNzZXMuY2FyZH0+XHJcbiAgICAgICAgICA8Q2FyZENvbnRlbnQgPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cyA9ezEwfT48c3Bhbj57dm90ZS5hZGRyZXNzfTwvc3Bhbj48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cyA9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGUgPXtgL2VsZWN0aW9ucy9hcHBseS8ke3ZvdGUuYWRkcmVzc31gfT4gXHJcbiAgICAgICAgICAgICAgICAgICAgQXBwbHkgYXMgQ2FuZGlkYXRlXHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj4gIFxyXG4gICAgICAgICAgICAgICAgICA8TGluayByb3V0ZSA9e2AvZWxlY3Rpb25zL3ZvdGUvJHt2b3RlLmFkZHJlc3N9YH0+IFxyXG4gICAgICAgICAgICAgICAgICAgIFZvdGVcclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgIClcclxuICB9XHJcblxyXG4gIFxyXG4gIHJldHVybiggXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICA8ZGl2PnsgZGlzcGxheVZvdGVMaXN0KCkgfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==