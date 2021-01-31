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
      web3 = _useState[0],
      setWeb3 = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      votesAddresses = _useState2[0],
      setVotesAddresses = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      accounts = _useState3[0],
      setAccounts = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      contract = _useState4[0],
      setContract = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      voteContract = _useState5[0],
      setVoteContract = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      renderedAddresses = _useState6[0],
      renderAddresses = _useState6[1]; // var web3 = "";


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
                console.log('initializing web3');
                _context.next = 3;
                return Object(_getWeb3__WEBPACK_IMPORTED_MODULE_6__["default"])();

              case 3:
                web3Instance = _context.sent;
                setWeb3(web3Instance);

              case 5:
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
                if (!(web3 == "")) {
                  _context2.next = 3;
                  break;
                }

                console.log('unable to get fact');
                return _context2.abrupt("return");

              case 3:
                _context2.prev = 3;
                console.log('able to get fact');
                _context2.t0 = setAccounts;
                _context2.next = 8;
                return web3.eth.getAccounts();

              case 8:
                _context2.t1 = _context2.sent;
                (0, _context2.t0)(_context2.t1);
                _context2.next = 12;
                return web3.eth.net.getId();

              case 12:
                networkId = _context2.sent;
                deployedNetwork = _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_4__.networks[networkId];
                instance = new web3.eth.Contract(_contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_4__.abi, deployedNetwork && deployedNetwork.address);
                _context2.t2 = setAccounts;
                _context2.next = 18;
                return web3.eth.getAccounts();

              case 18:
                _context2.t3 = _context2.sent;
                (0, _context2.t2)(_context2.t3);
                setContract(instance); // Set web3, accounts, and contract to the state, and then proceed with an

                _context2.next = 27;
                break;

              case 23:
                _context2.prev = 23;
                _context2.t4 = _context2["catch"](3);
                // Catch any errors for any of the above operations.
                alert("Failed to load web3, accounts, or contract. Check console for details.");
                console.error(_context2.t4);

              case 27:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 23]]);
      }));
      return _setup.apply(this, arguments);
    }

    setup();
    console.log('ok');
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
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    //render votes
    var displayInfo = /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(address) {
        var instance;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(votesAddresses == '')) {
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

    var renderVotes = /*#__PURE__*/function () {
      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var temp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (votesAddresses) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt("return");

              case 2:
                temp = [];
                votesAddresses.forEach(function (address) {
                  displayInfo(address).then(function (newAddress) {
                    return temp.push(newAddress);
                  });
                });
                renderAddresses(temp);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function renderVotes() {
        return _ref3.apply(this, arguments);
      };
    }();

    renderVotes();
  }, [votesAddresses]);

  function displayVoteList() {
    var _this = this;

    if (web3 == "") {
      return "waiting for votes to display...";
    } else if (votesAddresses == "") {
      return "no votes to display";
    }

    console.log(JSON.stringify(renderedAddresses));
    console.log(renderedAddresses);
    return votesAddresses ? votesAddresses.map(function (vote, index) {
      return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: index,
        variant: "outlined",
        className: classes.card,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
        container: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
        item: true,
        xs: 10,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 15
        }
      }, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 35
        }
      }, vote.title)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
        item: true,
        xs: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 15
        }
      }, __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 17
        }
      }, "Apply as Candidate"), __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 17
        }
      }, "Vote")))));
    }) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_7__["Header"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 9
    }
  }, displayVoteList())));
}

_s(App, "cgCbj9eGitWvi4B7lRYK1LJAPTg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiY2FyZCIsIndpZHRoIiwiQXBwIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwid2ViMyIsInNldFdlYjMiLCJ2b3Rlc0FkZHJlc3NlcyIsInNldFZvdGVzQWRkcmVzc2VzIiwiYWNjb3VudHMiLCJzZXRBY2NvdW50cyIsImNvbnRyYWN0Iiwic2V0Q29udHJhY3QiLCJ2b3RlQ29udHJhY3QiLCJzZXRWb3RlQ29udHJhY3QiLCJyZW5kZXJlZEFkZHJlc3NlcyIsInJlbmRlckFkZHJlc3NlcyIsInVzZUVmZmVjdCIsImluaXRXZWIzIiwiY29uc29sZSIsImxvZyIsImdldFdlYjMiLCJ3ZWIzSW5zdGFuY2UiLCJzZXR1cCIsImV0aCIsImdldEFjY291bnRzIiwibmV0IiwiZ2V0SWQiLCJuZXR3b3JrSWQiLCJkZXBsb3llZE5ldHdvcmsiLCJWb3RlRmFjdG9yeUNvbnRyYWN0IiwibmV0d29ya3MiLCJpbnN0YW5jZSIsIkNvbnRyYWN0IiwiYWJpIiwiYWRkcmVzcyIsImFsZXJ0IiwiZXJyb3IiLCJWb3RlQ29udHJhY3QiLCJsZW5ndGgiLCJkaXNwbGF5Vm90ZXMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRWb3RlcyIsImNhbGwiLCJyZXNwb25zZSIsImRpc3BsYXlJbmZvIiwiY3VycmVudEVsZWN0aW9uIiwicmVuZGVyVm90ZXMiLCJ0ZW1wIiwiZm9yRWFjaCIsInRoZW4iLCJuZXdBZGRyZXNzIiwicHVzaCIsImRpc3BsYXlWb3RlTGlzdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYXAiLCJ2b3RlIiwiaW5kZXgiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Q0FFQTs7QUFDQUEsbUJBQU8sQ0FBQyxrRkFBRCxDQUFQOztBQUVBLElBQU1DLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUMzQkMsTUFBSSxFQUFFO0FBQ0pDLFNBQUssRUFBQztBQURGO0FBRHFCLENBQUQsQ0FBNUI7O0FBTUEsU0FBU0MsR0FBVCxHQUFlO0FBQUE7O0FBQ2IsTUFBTUMsT0FBTyxHQUFHTCxTQUFTLEVBQXpCOztBQURhLGtCQUVXTSxzREFBUSxDQUFDLEVBQUQsQ0FGbkI7QUFBQSxNQUVOQyxJQUZNO0FBQUEsTUFFQUMsT0FGQTs7QUFBQSxtQkFHK0JGLHNEQUFRLENBQUMsRUFBRCxDQUh2QztBQUFBLE1BR05HLGNBSE07QUFBQSxNQUdVQyxpQkFIVjs7QUFBQSxtQkFJbUJKLHNEQUFRLENBQUMsRUFBRCxDQUozQjtBQUFBLE1BSU5LLFFBSk07QUFBQSxNQUlJQyxXQUpKOztBQUFBLG1CQUttQk4sc0RBQVEsQ0FBQyxFQUFELENBTDNCO0FBQUEsTUFLTk8sUUFMTTtBQUFBLE1BS0lDLFdBTEo7O0FBQUEsbUJBTTJCUixzREFBUSxDQUFDLEVBQUQsQ0FObkM7QUFBQSxNQU1OUyxZQU5NO0FBQUEsTUFNUUMsZUFOUjs7QUFBQSxtQkFPZ0NWLHNEQUFRLENBQUMsRUFBRCxDQVB4QztBQUFBLE1BT05XLGlCQVBNO0FBQUEsTUFPYUMsZUFQYixrQkFRYjs7O0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUFDO0FBQUQsYUFDQ0MsUUFERDtBQUFBO0FBQUE7O0FBQUE7QUFBQSxrTUFDZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBREY7QUFBQSx1QkFFNkJDLHdEQUFPLEVBRnBDOztBQUFBO0FBRVFDLDRCQUZSO0FBR0VoQix1QkFBTyxDQUFDZ0IsWUFBRCxDQUFQOztBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRGM7QUFBQTtBQUFBOztBQU1kSixZQUFRO0FBQ1QsR0FQUSxFQU9QLEVBUE8sQ0FBVDtBQVNBRCx5REFBUyxDQUFDLFlBQU07QUFBQztBQUFELGFBQ0NNLEtBREQ7QUFBQTtBQUFBOztBQUFBO0FBQUEsZ01BQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQ0tsQixJQUFJLElBQUksRUFEYjtBQUFBO0FBQUE7QUFBQTs7QUFFSWMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBRko7O0FBQUE7QUFBQTtBQU1JRCx1QkFBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFOSiwrQkFPSVYsV0FQSjtBQUFBO0FBQUEsdUJBT3NCTCxJQUFJLENBQUNtQixHQUFMLENBQVNDLFdBQVQsRUFQdEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFTNEJwQixJQUFJLENBQUNtQixHQUFMLENBQVNFLEdBQVQsQ0FBYUMsS0FBYixFQVQ1Qjs7QUFBQTtBQVNVQyx5QkFUVjtBQVVVQywrQkFWVixHQVU0QkMsd0RBQW1CLENBQUNDLFFBQXBCLENBQTZCSCxTQUE3QixDQVY1QjtBQVdVSSx3QkFYVixHQVdxQixJQUFJM0IsSUFBSSxDQUFDbUIsR0FBTCxDQUFTUyxRQUFiLENBQ2ZILHdEQUFtQixDQUFDSSxHQURMLEVBRWZMLGVBQWUsSUFBSUEsZUFBZSxDQUFDTSxPQUZwQixDQVhyQjtBQUFBLCtCQWVJekIsV0FmSjtBQUFBO0FBQUEsdUJBZXNCTCxJQUFJLENBQUNtQixHQUFMLENBQVNDLFdBQVQsRUFmdEI7O0FBQUE7QUFBQTtBQUFBO0FBZ0JJYiwyQkFBVyxDQUFDb0IsUUFBRCxDQUFYLENBaEJKLENBa0JJOztBQWxCSjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQW9CSTtBQUNBSSxxQkFBSywwRUFBTDtBQUdBakIsdUJBQU8sQ0FBQ2tCLEtBQVI7O0FBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRGM7QUFBQTtBQUFBOztBQTRCWmQsU0FBSztBQUNMSixXQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaO0FBQ0gsR0E5QlEsRUE4QlAsQ0FBQ2YsSUFBRCxDQTlCTyxDQUFUO0FBZ0NBWSx5REFBUyxDQUFDLFlBQU07QUFBQztBQUFELGFBQ0NNLEtBREQ7QUFBQTtBQUFBOztBQUFBO0FBQUEsaU1BQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQ0tsQixJQUFJLElBQUksRUFEYjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUlFLG9CQUFJO0FBQ0Y7QUFDTTJCLDBCQUZKLEdBRWUsSUFBSTNCLElBQUksQ0FBQ21CLEdBQUwsQ0FBU1MsUUFBYixDQUNmSyxpREFBWSxDQUFDSixHQURFLEVBRWYzQixjQUFjLENBQUNBLGNBQWMsQ0FBQ2dDLE1BQWYsR0FBc0IsQ0FBdkIsQ0FGQyxDQUZmO0FBTUZ6QixpQ0FBZSxDQUFDa0IsUUFBRCxDQUFmLENBTkUsQ0FPRjtBQUNELGlCQVJELENBUUUsT0FBT0ssS0FBUCxFQUFjO0FBQ2Q7QUFDQUQsdUJBQUssMEVBQUw7QUFHQWpCLHlCQUFPLENBQUNrQixLQUFSLENBQWNBLEtBQWQ7QUFDRDs7QUFsQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEYztBQUFBO0FBQUE7O0FBcUJaZCxTQUFLO0FBQ1IsR0F0QlEsRUFzQlAsQ0FBQ1osUUFBRCxFQUFVSixjQUFWLENBdEJPLENBQVQ7QUF3QkFVLHlEQUFTLENBQUMsWUFBSztBQUFDO0FBQ2QsUUFBSXVCLFlBQVk7QUFBQSxrTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFDZDdCLFFBQVEsSUFBSSxFQURFO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQSx1QkFJTUEsUUFBUSxDQUFDOEIsT0FBVCxDQUFpQkMsZ0JBQWpCLEdBQW9DQyxJQUFwQyxFQUpOOztBQUFBO0FBSVhDLHdCQUpXO0FBS2pCO0FBQ0FwQyxpQ0FBaUIsQ0FBQ29DLFFBQUQsQ0FBakI7O0FBTmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVpKLFlBQVk7QUFBQTtBQUFBO0FBQUEsT0FBaEI7O0FBUUFBLGdCQUFZO0FBQ2IsR0FWUSxFQVVQLENBQUM3QixRQUFELENBVk8sQ0FBVDtBQVlBTSx5REFBUyxDQUFDLFlBQUs7QUFBQztBQUNkLFFBQUk0QixXQUFXO0FBQUEsbU1BQUcsa0JBQU9WLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQ2I1QixjQUFjLElBQUksRUFETDtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBS2Q7QUFDTXlCLHdCQU5RLEdBTUcsSUFBSTNCLElBQUksQ0FBQ21CLEdBQUwsQ0FBU1MsUUFBYixDQUNmSyxpREFBWSxDQUFDSixHQURFLEVBRWZDLE9BRmUsQ0FOSDtBQUFBO0FBQUEsdUJBVUFILFFBQVEsQ0FBQ1MsT0FBVCxDQUFpQkssZUFBakIsR0FBbUNILElBQW5DLEVBVkE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFhZDtBQUNBUCxxQkFBSywwRUFBTDtBQUdBakIsdUJBQU8sQ0FBQ2tCLEtBQVI7O0FBakJjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVhRLFdBQVc7QUFBQTtBQUFBO0FBQUEsT0FBZjs7QUFvQkEsUUFBSUUsV0FBVztBQUFBLG1NQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNUeEMsY0FEUztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUlWeUMsb0JBSlUsR0FJSCxFQUpHO0FBS2R6Qyw4QkFBYyxDQUFDMEMsT0FBZixDQUF1QixVQUFBZCxPQUFPLEVBQUk7QUFDOUJVLDZCQUFXLENBQUNWLE9BQUQsQ0FBWCxDQUFxQmUsSUFBckIsQ0FBMEIsVUFBQUMsVUFBVTtBQUFBLDJCQUNwQ0gsSUFBSSxDQUFDSSxJQUFMLENBQVVELFVBQVYsQ0FEb0M7QUFBQSxtQkFBcEM7QUFHSCxpQkFKRDtBQUtBbkMsK0JBQWUsQ0FBQ2dDLElBQUQsQ0FBZjs7QUFWYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFYRCxXQUFXO0FBQUE7QUFBQTtBQUFBLE9BQWY7O0FBWUVBLGVBQVc7QUFDWixHQWxDTSxFQWtDTCxDQUFDeEMsY0FBRCxDQWxDSyxDQUFUOztBQXFDQSxXQUFTOEMsZUFBVCxHQUEyQjtBQUFBOztBQUN6QixRQUFHaEQsSUFBSSxJQUFJLEVBQVgsRUFBYztBQUNaLGFBQU8saUNBQVA7QUFDRCxLQUZELE1BR0ssSUFBR0UsY0FBYyxJQUFJLEVBQXJCLEVBQXdCO0FBQzNCLGFBQU8scUJBQVA7QUFDRDs7QUFDRFksV0FBTyxDQUFDQyxHQUFSLENBQVlrQyxJQUFJLENBQUNDLFNBQUwsQ0FBZXhDLGlCQUFmLENBQVo7QUFDQUksV0FBTyxDQUFDQyxHQUFSLENBQVlMLGlCQUFaO0FBQ0EsV0FBT1IsY0FBYyxHQUFHQSxjQUFjLENBQUNpRCxHQUFmLENBQW1CLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLGFBQ3ZDLE1BQUMsOERBQUQ7QUFBTSxXQUFHLEVBQUVBLEtBQVg7QUFBa0IsZUFBTyxFQUFDLFVBQTFCO0FBQXFDLGlCQUFTLEVBQUd2RCxPQUFPLENBQUNILElBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLCtEQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQywrREFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRyxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBT3lELElBQUksQ0FBQ0UsS0FBWixDQUFwQixDQURGLEVBRUUsTUFBQywrREFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRyxDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFERixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkYsQ0FGRixDQURGLENBREYsQ0FEdUM7QUFBQSxLQUFuQixDQUFILEdBb0JmLGtFQXBCTjtBQXFCRDs7QUFHRCxTQUNFLG1FQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUU7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPTixlQUFlLEVBQXRCLENBREYsQ0FORixDQURGO0FBWUQ7O0dBektRbkQsRztVQUNTSixTOzs7S0FEVEksRztBQTJLTUEsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGFjNGM3ZDY4ZDY3ZjM2MzZjNzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVm90ZUZhY3RvcnlDb250cmFjdCBmcm9tIFwiLi4vY29udHJhY3RzL1ZvdGVGYWN0b3J5Lmpzb25cIjtcclxuaW1wb3J0IFZvdGVDb250cmFjdCBmcm9tIFwiLi4vY29udHJhY3RzL1ZvdGUuanNvblwiO1xyXG5pbXBvcnQgZ2V0V2ViMyBmcm9tIFwiLi4vZ2V0V2ViM1wiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi9yb3V0ZXMnXHJcblxyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbi8vIENvbW1vbkpTXHJcbnJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIik7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICBjYXJkOiB7XHJcbiAgICB3aWR0aDonODAlJ1xyXG4gIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFt3ZWIzLCBzZXRXZWIzXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdm90ZXNBZGRyZXNzZXMsIHNldFZvdGVzQWRkcmVzc2VzXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbYWNjb3VudHMsIHNldEFjY291bnRzXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29udHJhY3QsIHNldENvbnRyYWN0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdm90ZUNvbnRyYWN0LCBzZXRWb3RlQ29udHJhY3RdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtyZW5kZXJlZEFkZHJlc3NlcywgcmVuZGVyQWRkcmVzc2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAvLyB2YXIgd2ViMyA9IFwiXCI7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7Ly8gZ2V0IHdlYjNcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXRXZWIzKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnaW5pdGlhbGl6aW5nIHdlYjMnKTtcclxuICAgICAgY29uc3Qgd2ViM0luc3RhbmNlID0gYXdhaXQgZ2V0V2ViMygpO1xyXG4gICAgICBzZXRXZWIzKHdlYjNJbnN0YW5jZSlcclxuICAgIH1cclxuICAgIGluaXRXZWIzKCk7XHJcbiAgfSxbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7Ly8gZ2V0IEZhY3RvcnkgY29udHJhY3RcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgICBpZih3ZWIzID09IFwiXCIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndW5hYmxlIHRvIGdldCBmYWN0JylcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWJsZSB0byBnZXQgZmFjdCcpXHJcbiAgICAgICAgc2V0QWNjb3VudHMoYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKSk7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBjb250cmFjdCBpbnN0YW5jZS5cclxuICAgICAgICBjb25zdCBuZXR3b3JrSWQgPSBhd2FpdCB3ZWIzLmV0aC5uZXQuZ2V0SWQoKTtcclxuICAgICAgICBjb25zdCBkZXBsb3llZE5ldHdvcmsgPSBWb3RlRmFjdG9yeUNvbnRyYWN0Lm5ldHdvcmtzW25ldHdvcmtJZF07XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXHJcbiAgICAgICAgICBWb3RlRmFjdG9yeUNvbnRyYWN0LmFiaSxcclxuICAgICAgICAgIGRlcGxveWVkTmV0d29yayAmJiBkZXBsb3llZE5ldHdvcmsuYWRkcmVzcyxcclxuICAgICAgICApO1xyXG4gICAgICAgIHNldEFjY291bnRzKGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCkpO1xyXG4gICAgICAgIHNldENvbnRyYWN0KGluc3RhbmNlKTtcclxuICAgIFxyXG4gICAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxyXG4gICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICAgc2V0dXAoKTtcclxuICAgICAgY29uc29sZS5sb2coJ29rJylcclxuICB9LFt3ZWIzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7Ly9qdXN0IGdldCBWb3RlIGNvbnRyYWN0XHJcbiAgICBhc3luYyBmdW5jdGlvbiBzZXR1cCgpIHtcclxuICAgICAgaWYod2ViMyA9PSAnJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXHJcbiAgICAgICAgICBWb3RlQ29udHJhY3QuYWJpLFxyXG4gICAgICAgICAgdm90ZXNBZGRyZXNzZXNbdm90ZXNBZGRyZXNzZXMubGVuZ3RoLTFdLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0Vm90ZUNvbnRyYWN0KGluc3RhbmNlKTtcclxuICAgICAgICAvLyBTZXQgd2ViMywgYWNjb3VudHMsIGFuZCBjb250cmFjdCB0byB0aGUgc3RhdGUsIGFuZCB0aGVuIHByb2NlZWQgd2l0aCBhblxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cclxuICAgICAgICBhbGVydChcclxuICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAgIHNldHVwKCk7XHJcbiAgfSxbY29udHJhY3Qsdm90ZXNBZGRyZXNzZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT4gey8vZGlzcGxheSBhdmFpbGFibGUgdm90ZXNcclxuICAgIHZhciBkaXNwbGF5Vm90ZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmKGNvbnRyYWN0ID09ICcnKXtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmdldERlcGxveWVkVm90ZXMoKS5jYWxsKCk7XHJcbiAgICAgIC8vIFVwZGF0ZSBzdGF0ZSB3aXRoIHRoZSByZXN1bHQuXHJcbiAgICAgIHNldFZvdGVzQWRkcmVzc2VzKHJlc3BvbnNlKTtcclxuICAgIH07XHJcbiAgICBkaXNwbGF5Vm90ZXMoKTtcclxuICB9LFtjb250cmFjdF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PiB7Ly9yZW5kZXIgdm90ZXNcclxuICAgIHZhciBkaXNwbGF5SW5mbyA9IGFzeW5jIChhZGRyZXNzKSA9PiB7IFxyXG4gICAgICBpZih2b3Rlc0FkZHJlc3NlcyA9PSAnJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXHJcbiAgICAgICAgICBWb3RlQ29udHJhY3QuYWJpLFxyXG4gICAgICAgICAgYWRkcmVzc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIChhd2FpdCBpbnN0YW5jZS5tZXRob2RzLmN1cnJlbnRFbGVjdGlvbigpLmNhbGwoKSk7XHJcbiAgICAgICAgLy8gU2V0IHdlYjMsIGFjY291bnRzLCBhbmQgY29udHJhY3QgdG8gdGhlIHN0YXRlLCBhbmQgdGhlbiBwcm9jZWVkIHdpdGggYW5cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyBDYXRjaCBhbnkgZXJyb3JzIGZvciBhbnkgb2YgdGhlIGFib3ZlIG9wZXJhdGlvbnMuXHJcbiAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHZhciByZW5kZXJWb3RlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAoIXZvdGVzQWRkcmVzc2VzKXtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHRlbXAgPSBbXVxyXG4gICAgICAgIHZvdGVzQWRkcmVzc2VzLmZvckVhY2goYWRkcmVzcyA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlJbmZvKGFkZHJlc3MpLnRoZW4obmV3QWRkcmVzcyA9PlxyXG4gICAgICAgICAgICB0ZW1wLnB1c2gobmV3QWRkcmVzcylcclxuICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJlbmRlckFkZHJlc3Nlcyh0ZW1wKTtcclxuICAgICAgfVxyXG4gICAgICByZW5kZXJWb3RlcygpO1xyXG4gICAgfSxbdm90ZXNBZGRyZXNzZXNdKTtcclxuXHJcblxyXG4gIGZ1bmN0aW9uIGRpc3BsYXlWb3RlTGlzdCgpIHtcclxuICAgIGlmKHdlYjMgPT0gXCJcIil7XHJcbiAgICAgIHJldHVybiBcIndhaXRpbmcgZm9yIHZvdGVzIHRvIGRpc3BsYXkuLi5cIlxyXG4gICAgfVxyXG4gICAgZWxzZSBpZih2b3Rlc0FkZHJlc3NlcyA9PSBcIlwiKXtcclxuICAgICAgcmV0dXJuIFwibm8gdm90ZXMgdG8gZGlzcGxheVwiXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZW5kZXJlZEFkZHJlc3NlcykpO1xyXG4gICAgY29uc29sZS5sb2cocmVuZGVyZWRBZGRyZXNzZXMpXHJcbiAgICByZXR1cm4gdm90ZXNBZGRyZXNzZXMgPyB2b3Rlc0FkZHJlc3Nlcy5tYXAoKHZvdGUsIGluZGV4KSA9PiBcclxuICAgICAgICA8Q2FyZCBrZXk9e2luZGV4fSB2YXJpYW50PVwib3V0bGluZWRcIiBjbGFzc05hbWUgPXtjbGFzc2VzLmNhcmR9PlxyXG4gICAgICAgICAgPENhcmRDb250ZW50ID5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHMgPXsxMH0+PHNwYW4+e3ZvdGUudGl0bGV9PC9zcGFuPjwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzID17Mn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB7LyogPExpbmsgcm91dGUgPXtgL2VsZWN0aW9ucy9hcHBseS8ke3ZvdGV9YH0+ICAqL31cclxuICAgICAgICAgICAgICAgICAgICBBcHBseSBhcyBDYW5kaWRhdGVcclxuICAgICAgICAgICAgICAgICAgey8qIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+ICBcclxuICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIHJvdXRlID17YC9lbGVjdGlvbnMvdm90ZS8ke3ZvdGV9YH0+ICAqL31cclxuICAgICAgICAgICAgICAgICAgICBWb3RlXHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgKSA6IDw+PC8+XHJcbiAgfVxyXG5cclxuICBcclxuICByZXR1cm4oIFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgPGRpdj57IGRpc3BsYXlWb3RlTGlzdCgpIH08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=