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
      accounts = _useState2[0],
      setAccounts = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      contract = _useState3[0],
      setContract = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      voteContract = _useState4[0],
      setVoteContract = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      renderedAddresses = _useState5[0],
      renderAddresses = _useState5[1];

  var web3;
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
                web3 = web3Instance;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _initWeb.apply(this, arguments);
    }

    initWeb3(); // setup();
  }, []); // useEffect(() => {// get Factory contract
  //   async function setup() {
  //     if(web3 == "") {
  //       console.log('unable to get fact')
  //       return;
  //     }
  //     try {
  //       setAccounts(await web3.eth.getAccounts());
  //       // Get the contract instance.
  //       const networkId = await web3.eth.net.getId();
  //       const deployedNetwork = VoteFactoryContract.networks[networkId];
  //       const instance = new web3.eth.Contract(
  //         VoteFactoryContract.abi,
  //         deployedNetwork && deployedNetwork.address,
  //       );
  //       setAccounts(await web3.eth.getAccounts());
  //       setContract(instance);
  //       // Set web3, accounts, and contract to the state, and then proceed with an
  //     } catch (error) {
  //       // Catch any errors for any of the above operations.
  //       alert(
  //         `Failed to load web3, accounts, or contract. Check console for details.`,
  //       );
  //       console.error(error);
  //     }
  //   }
  //     setup();
  // },[web3]);

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    //just get Vote contract
    function setup() {
      return _setup.apply(this, arguments);
    }

    function _setup() {
      _setup = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var instance;
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
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return _setup.apply(this, arguments);
    }

    setup();
  }, [contract, votesAddresses]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    //display available votes
    var displayVotes = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(contract == '')) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _context3.next = 4;
                return contract.methods.getDeployedVotes().call();

              case 4:
                response = _context3.sent;
                // Update state with the result.
                setVotesAddresses(response);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
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
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(address) {
        var instance;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(votesAddresses == '')) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return");

              case 2:
                _context4.prev = 2;
                // Get the contract instance.
                instance = new web3.eth.Contract(_contracts_Vote_json__WEBPACK_IMPORTED_MODULE_5__.abi, address);
                _context4.next = 6;
                return instance.methods.currentElection().call();

              case 6:
                return _context4.abrupt("return", _context4.sent);

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](2);
                // Catch any errors for any of the above operations.
                alert("Failed to load web3, accounts, or contract. Check console for details.");
                console.error(_context4.t0);

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[2, 9]]);
      }));

      return function displayInfo(_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    var renderVotes = /*#__PURE__*/function () {
      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var temp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (votesAddresses) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return");

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
                return _context5.stop();
            }
          }
        }, _callee5);
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
    return renderedAddresses ? renderedAddresses.map(function (vote, index) {
      return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: index,
        variant: "outlined",
        className: classes.card,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
        container: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
        item: true,
        xs: 10,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 15
        }
      }, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 35
        }
      }, vote.title)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
        item: true,
        xs: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 15
        }
      }, __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 17
        }
      }, "Apply as Candidate"), __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 17
        }
      }, "Vote")))));
    }) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_7__["Header"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }
  }), __jsx("br", {
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
  }), __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }
  }, tryWeb3()), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }, displayVoteList())));
}

_s(App, "sTHi3TtVjXdE4aQeQIHxzQXBdOE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiY2FyZCIsIndpZHRoIiwiQXBwIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwidm90ZXNBZGRyZXNzZXMiLCJzZXRWb3Rlc0FkZHJlc3NlcyIsImFjY291bnRzIiwic2V0QWNjb3VudHMiLCJjb250cmFjdCIsInNldENvbnRyYWN0Iiwidm90ZUNvbnRyYWN0Iiwic2V0Vm90ZUNvbnRyYWN0IiwicmVuZGVyZWRBZGRyZXNzZXMiLCJyZW5kZXJBZGRyZXNzZXMiLCJ3ZWIzIiwidXNlRWZmZWN0IiwiaW5pdFdlYjMiLCJjb25zb2xlIiwibG9nIiwiZ2V0V2ViMyIsIndlYjNJbnN0YW5jZSIsInNldHVwIiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIlZvdGVDb250cmFjdCIsImFiaSIsImxlbmd0aCIsImVycm9yIiwiYWxlcnQiLCJkaXNwbGF5Vm90ZXMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRWb3RlcyIsImNhbGwiLCJyZXNwb25zZSIsImRpc3BsYXlJbmZvIiwiYWRkcmVzcyIsImN1cnJlbnRFbGVjdGlvbiIsInJlbmRlclZvdGVzIiwidGVtcCIsImZvckVhY2giLCJ0aGVuIiwibmV3QWRkcmVzcyIsInB1c2giLCJkaXNwbGF5Vm90ZUxpc3QiLCJKU09OIiwic3RyaW5naWZ5IiwibWFwIiwidm90ZSIsImluZGV4IiwidGl0bGUiLCJ0cnlXZWIzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtDQUVBOztBQUNBQSxtQkFBTyxDQUFDLGtGQUFELENBQVA7O0FBRUEsSUFBTUMsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzNCQyxNQUFJLEVBQUU7QUFDSkMsU0FBSyxFQUFDO0FBREY7QUFEcUIsQ0FBRCxDQUE1Qjs7QUFNQSxTQUFTQyxHQUFULEdBQWU7QUFBQTs7QUFDYixNQUFNQyxPQUFPLEdBQUdMLFNBQVMsRUFBekI7O0FBRGEsa0JBRStCTSxzREFBUSxDQUFDLEVBQUQsQ0FGdkM7QUFBQSxNQUVOQyxjQUZNO0FBQUEsTUFFVUMsaUJBRlY7O0FBQUEsbUJBR21CRixzREFBUSxDQUFDLEVBQUQsQ0FIM0I7QUFBQSxNQUdORyxRQUhNO0FBQUEsTUFHSUMsV0FISjs7QUFBQSxtQkFJbUJKLHNEQUFRLENBQUMsRUFBRCxDQUozQjtBQUFBLE1BSU5LLFFBSk07QUFBQSxNQUlJQyxXQUpKOztBQUFBLG1CQUsyQk4sc0RBQVEsQ0FBQyxFQUFELENBTG5DO0FBQUEsTUFLTk8sWUFMTTtBQUFBLE1BS1FDLGVBTFI7O0FBQUEsbUJBTWdDUixzREFBUSxDQUFDLEVBQUQsQ0FOeEM7QUFBQSxNQU1OUyxpQkFOTTtBQUFBLE1BTWFDLGVBTmI7O0FBT2IsTUFBSUMsSUFBSjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFBQztBQUFELGFBQ0NDLFFBREQ7QUFBQTtBQUFBOztBQUFBO0FBQUEsa01BQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQURGO0FBQUEsdUJBRTZCQyx3REFBTyxFQUZwQzs7QUFBQTtBQUVRQyw0QkFGUjtBQUdFTixvQkFBSSxHQUFHTSxZQUFQOztBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRGM7QUFBQTtBQUFBOztBQU1kSixZQUFRLEdBTk0sQ0FPZDtBQUNELEdBUlEsRUFRUCxFQVJPLENBQVQsQ0FUYSxDQW1CYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUQseURBQVMsQ0FBQyxZQUFNO0FBQUM7QUFBRCxhQUNDTSxLQUREO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGdNQUNkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUNLUCxJQUFJLElBQUksRUFEYjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUlFLG9CQUFJO0FBQ0Y7QUFDTVEsMEJBRkosR0FFZSxJQUFJUixJQUFJLENBQUNTLEdBQUwsQ0FBU0MsUUFBYixDQUNmQyxpREFBWSxDQUFDQyxHQURFLEVBRWZ0QixjQUFjLENBQUNBLGNBQWMsQ0FBQ3VCLE1BQWYsR0FBc0IsQ0FBdkIsQ0FGQyxDQUZmO0FBTUZoQixpQ0FBZSxDQUFDVyxRQUFELENBQWYsQ0FORSxDQU9GO0FBQ0QsaUJBUkQsQ0FRRSxPQUFPTSxLQUFQLEVBQWM7QUFDZDtBQUNBQyx1QkFBSywwRUFBTDtBQUdBWix5QkFBTyxDQUFDVyxLQUFSLENBQWNBLEtBQWQ7QUFDRDs7QUFsQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEYztBQUFBO0FBQUE7O0FBcUJaUCxTQUFLO0FBQ1IsR0F0QlEsRUFzQlAsQ0FBQ2IsUUFBRCxFQUFVSixjQUFWLENBdEJPLENBQVQ7QUF3QkFXLHlEQUFTLENBQUMsWUFBSztBQUFDO0FBQ2QsUUFBSWUsWUFBWTtBQUFBLGtNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUNkdEIsUUFBUSxJQUFJLEVBREU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBLHVCQUlNQSxRQUFRLENBQUN1QixPQUFULENBQWlCQyxnQkFBakIsR0FBb0NDLElBQXBDLEVBSk47O0FBQUE7QUFJWEMsd0JBSlc7QUFLakI7QUFDQTdCLGlDQUFpQixDQUFDNkIsUUFBRCxDQUFqQjs7QUFOaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBWkosWUFBWTtBQUFBO0FBQUE7QUFBQSxPQUFoQjs7QUFRQUEsZ0JBQVk7QUFDYixHQVZRLEVBVVAsQ0FBQ3RCLFFBQUQsQ0FWTyxDQUFUO0FBWUFPLHlEQUFTLENBQUMsWUFBSztBQUFDO0FBQ2QsUUFBSW9CLFdBQVc7QUFBQSxtTUFBRyxrQkFBT0MsT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFDYmhDLGNBQWMsSUFBSSxFQURMO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFLZDtBQUNNa0Isd0JBTlEsR0FNRyxJQUFJUixJQUFJLENBQUNTLEdBQUwsQ0FBU0MsUUFBYixDQUNmQyxpREFBWSxDQUFDQyxHQURFLEVBRWZVLE9BRmUsQ0FOSDtBQUFBO0FBQUEsdUJBVUFkLFFBQVEsQ0FBQ1MsT0FBVCxDQUFpQk0sZUFBakIsR0FBbUNKLElBQW5DLEVBVkE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFhZDtBQUNBSixxQkFBSywwRUFBTDtBQUdBWix1QkFBTyxDQUFDVyxLQUFSOztBQWpCYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFYTyxXQUFXO0FBQUE7QUFBQTtBQUFBLE9BQWY7O0FBb0JBLFFBQUlHLFdBQVc7QUFBQSxtTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDVGxDLGNBRFM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFJVm1DLG9CQUpVLEdBSUgsRUFKRztBQUtkbkMsOEJBQWMsQ0FBQ29DLE9BQWYsQ0FBdUIsVUFBQUosT0FBTyxFQUFJO0FBQzlCRCw2QkFBVyxDQUFDQyxPQUFELENBQVgsQ0FBcUJLLElBQXJCLENBQTBCLFVBQUFDLFVBQVU7QUFBQSwyQkFDcENILElBQUksQ0FBQ0ksSUFBTCxDQUFVRCxVQUFWLENBRG9DO0FBQUEsbUJBQXBDO0FBR0gsaUJBSkQ7QUFLQTdCLCtCQUFlLENBQUMwQixJQUFELENBQWY7O0FBVmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBWEQsV0FBVztBQUFBO0FBQUE7QUFBQSxPQUFmOztBQVlFQSxlQUFXO0FBQ1osR0FsQ00sRUFrQ0wsQ0FBQ2xDLGNBQUQsQ0FsQ0ssQ0FBVDs7QUFxQ0EsV0FBU3dDLGVBQVQsR0FBMkI7QUFBQTs7QUFDekIsUUFBRzlCLElBQUksSUFBSSxFQUFYLEVBQWM7QUFDWixhQUFPLGlDQUFQO0FBQ0QsS0FGRCxNQUdLLElBQUdWLGNBQWMsSUFBSSxFQUFyQixFQUF3QjtBQUMzQixhQUFPLHFCQUFQO0FBQ0Q7O0FBQ0RhLFdBQU8sQ0FBQ0MsR0FBUixDQUFZMkIsSUFBSSxDQUFDQyxTQUFMLENBQWVsQyxpQkFBZixDQUFaO0FBRUEsV0FBT0EsaUJBQWlCLEdBQUdBLGlCQUFpQixDQUFDbUMsR0FBbEIsQ0FBc0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsYUFDN0MsTUFBQyw4REFBRDtBQUFNLFdBQUcsRUFBRUEsS0FBWDtBQUFrQixlQUFPLEVBQUMsVUFBMUI7QUFBcUMsaUJBQVMsRUFBRy9DLE9BQU8sQ0FBQ0gsSUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsK0RBQUQ7QUFBTSxpQkFBUyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLCtEQUFEO0FBQU0sWUFBSSxNQUFWO0FBQVcsVUFBRSxFQUFHLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFPaUQsSUFBSSxDQUFDRSxLQUFaLENBQXBCLENBREYsRUFFRSxNQUFDLCtEQUFEO0FBQU0sWUFBSSxNQUFWO0FBQVcsVUFBRSxFQUFHLENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORixDQUZGLENBREYsQ0FERixDQUQ2QztBQUFBLEtBQXRCLENBQUgsR0FvQmxCLGtFQXBCTjtBQXFCRDs7QUFHRCxTQUNFLG1FQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUU7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPQyxPQUFPLEVBQWQsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT1AsZUFBZSxFQUF0QixDQUZGLENBTkYsQ0FERjtBQWFEOztHQXhLUTNDLEc7VUFDU0osUzs7O0tBRFRJLEc7QUEwS01BLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY0ODc4NDNiMjk5ZDEzOGExYWI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFZvdGVGYWN0b3J5Q29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlRmFjdG9yeS5qc29uXCI7XHJcbmltcG9ydCBWb3RlQ29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlLmpzb25cIjtcclxuaW1wb3J0IGdldFdlYjMgZnJvbSBcIi4uL2dldFdlYjNcIjtcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vcm91dGVzJ1xyXG5cclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG4vLyBDb21tb25KU1xyXG5yZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIpO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgY2FyZDoge1xyXG4gICAgd2lkdGg6JzgwJSdcclxuICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbdm90ZXNBZGRyZXNzZXMsIHNldFZvdGVzQWRkcmVzc2VzXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbYWNjb3VudHMsIHNldEFjY291bnRzXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29udHJhY3QsIHNldENvbnRyYWN0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdm90ZUNvbnRyYWN0LCBzZXRWb3RlQ29udHJhY3RdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtyZW5kZXJlZEFkZHJlc3NlcywgcmVuZGVyQWRkcmVzc2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICB2YXIgd2ViMztcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsvLyBnZXQgd2ViM1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdFdlYjMoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdpbml0aWFsaXppbmcgd2ViMycpXHJcbiAgICAgIGNvbnN0IHdlYjNJbnN0YW5jZSA9IGF3YWl0IGdldFdlYjMoKVxyXG4gICAgICB3ZWIzID0gd2ViM0luc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgaW5pdFdlYjMoKTtcclxuICAgIC8vIHNldHVwKCk7XHJcbiAgfSxbXSk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7Ly8gZ2V0IEZhY3RvcnkgY29udHJhY3RcclxuICAvLyAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwKCkge1xyXG4gIC8vICAgICBpZih3ZWIzID09IFwiXCIpIHtcclxuICAvLyAgICAgICBjb25zb2xlLmxvZygndW5hYmxlIHRvIGdldCBmYWN0JylcclxuICAvLyAgICAgICByZXR1cm47XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICAgdHJ5IHtcclxuICAvLyAgICAgICBzZXRBY2NvdW50cyhhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpKTtcclxuICAvLyAgICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gIC8vICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpO1xyXG4gIC8vICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IFZvdGVGYWN0b3J5Q29udHJhY3QubmV0d29ya3NbbmV0d29ya0lkXTtcclxuICAvLyAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAvLyAgICAgICAgIFZvdGVGYWN0b3J5Q29udHJhY3QuYWJpLFxyXG4gIC8vICAgICAgICAgZGVwbG95ZWROZXR3b3JrICYmIGRlcGxveWVkTmV0d29yay5hZGRyZXNzLFxyXG4gIC8vICAgICAgICk7XHJcbiAgLy8gICAgICAgc2V0QWNjb3VudHMoYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKSk7XHJcbiAgLy8gICAgICAgc2V0Q29udHJhY3QoaW5zdGFuY2UpO1xyXG4gICAgXHJcbiAgLy8gICAgICAgLy8gU2V0IHdlYjMsIGFjY291bnRzLCBhbmQgY29udHJhY3QgdG8gdGhlIHN0YXRlLCBhbmQgdGhlbiBwcm9jZWVkIHdpdGggYW5cclxuICAvLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAvLyAgICAgICAvLyBDYXRjaCBhbnkgZXJyb3JzIGZvciBhbnkgb2YgdGhlIGFib3ZlIG9wZXJhdGlvbnMuXHJcbiAgLy8gICAgICAgYWxlcnQoXHJcbiAgLy8gICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXHJcbiAgLy8gICAgICAgKTtcclxuICAvLyAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfVxyXG4gIC8vICAgICBzZXR1cCgpO1xyXG4gIC8vIH0sW3dlYjNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsvL2p1c3QgZ2V0IFZvdGUgY29udHJhY3RcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgICBpZih3ZWIzID09ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBjb250cmFjdCBpbnN0YW5jZS5cclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgIFZvdGVDb250cmFjdC5hYmksXHJcbiAgICAgICAgICB2b3Rlc0FkZHJlc3Nlc1t2b3Rlc0FkZHJlc3Nlcy5sZW5ndGgtMV0sXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRWb3RlQ29udHJhY3QoaW5zdGFuY2UpO1xyXG4gICAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxyXG4gICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICAgc2V0dXAoKTtcclxuICB9LFtjb250cmFjdCx2b3Rlc0FkZHJlc3Nlc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PiB7Ly9kaXNwbGF5IGF2YWlsYWJsZSB2b3Rlc1xyXG4gICAgdmFyIGRpc3BsYXlWb3RlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYoY29udHJhY3QgPT0gJycpe1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0RGVwbG95ZWRWb3RlcygpLmNhbGwoKTtcclxuICAgICAgLy8gVXBkYXRlIHN0YXRlIHdpdGggdGhlIHJlc3VsdC5cclxuICAgICAgc2V0Vm90ZXNBZGRyZXNzZXMocmVzcG9uc2UpO1xyXG4gICAgfTtcclxuICAgIGRpc3BsYXlWb3RlcygpO1xyXG4gIH0sW2NvbnRyYWN0XSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+IHsvL3JlbmRlciB2b3Rlc1xyXG4gICAgdmFyIGRpc3BsYXlJbmZvID0gYXN5bmMgKGFkZHJlc3MpID0+IHsgXHJcbiAgICAgIGlmKHZvdGVzQWRkcmVzc2VzID09ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBjb250cmFjdCBpbnN0YW5jZS5cclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgIFZvdGVDb250cmFjdC5hYmksXHJcbiAgICAgICAgICBhZGRyZXNzXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gKGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuY3VycmVudEVsZWN0aW9uKCkuY2FsbCgpKTtcclxuICAgICAgICAvLyBTZXQgd2ViMywgYWNjb3VudHMsIGFuZCBjb250cmFjdCB0byB0aGUgc3RhdGUsIGFuZCB0aGVuIHByb2NlZWQgd2l0aCBhblxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cclxuICAgICAgICBhbGVydChcclxuICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIHJlbmRlclZvdGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmICghdm90ZXNBZGRyZXNzZXMpe1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdGVtcCA9IFtdXHJcbiAgICAgICAgdm90ZXNBZGRyZXNzZXMuZm9yRWFjaChhZGRyZXNzID0+IHtcclxuICAgICAgICAgICAgZGlzcGxheUluZm8oYWRkcmVzcykudGhlbihuZXdBZGRyZXNzID0+XHJcbiAgICAgICAgICAgIHRlbXAucHVzaChuZXdBZGRyZXNzKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmVuZGVyQWRkcmVzc2VzKHRlbXApO1xyXG4gICAgICB9XHJcbiAgICAgIHJlbmRlclZvdGVzKCk7XHJcbiAgICB9LFt2b3Rlc0FkZHJlc3Nlc10pO1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gZGlzcGxheVZvdGVMaXN0KCkge1xyXG4gICAgaWYod2ViMyA9PSBcIlwiKXtcclxuICAgICAgcmV0dXJuIFwid2FpdGluZyBmb3Igdm90ZXMgdG8gZGlzcGxheS4uLlwiXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHZvdGVzQWRkcmVzc2VzID09IFwiXCIpe1xyXG4gICAgICByZXR1cm4gXCJubyB2b3RlcyB0byBkaXNwbGF5XCJcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlbmRlcmVkQWRkcmVzc2VzKSk7XHJcblxyXG4gICAgcmV0dXJuIHJlbmRlcmVkQWRkcmVzc2VzID8gcmVuZGVyZWRBZGRyZXNzZXMubWFwKCh2b3RlLCBpbmRleCkgPT4gXHJcbiAgICAgICAgPENhcmQga2V5PXtpbmRleH0gdmFyaWFudD1cIm91dGxpbmVkXCIgY2xhc3NOYW1lID17Y2xhc3Nlcy5jYXJkfT5cclxuICAgICAgICAgIDxDYXJkQ29udGVudCA+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzID17MTB9PjxzcGFuPnt2b3RlLnRpdGxlfTwvc3Bhbj48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cyA9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIHJvdXRlID17YC9lbGVjdGlvbnMvYXBwbHkvJHt2b3RlfWB9PiAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgQXBwbHkgYXMgQ2FuZGlkYXRlXHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8TGluayByb3V0ZSA9e2AvZWxlY3Rpb25zL3ZvdGUvJHt2b3RlfWB9PiAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgVm90ZVxyXG4gICAgICAgICAgICAgICAgICB7LyogPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICkgOiA8PjwvPlxyXG4gIH1cclxuXHJcbiAgXHJcbiAgcmV0dXJuKCBcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgIDxkaXY+eyB0cnlXZWIzKCkgfTwvZGl2PlxyXG4gICAgICAgIDxkaXY+eyBkaXNwbGF5Vm90ZUxpc3QoKSB9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9