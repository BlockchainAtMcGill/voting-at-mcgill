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
      contract = _useState3[0],
      setContract = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      voteContract = _useState4[0],
      setVoteContract = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      renderedAddresses = _useState5[0],
      renderAddresses = _useState5[1]; // var web3 = "";


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
                setContract(instance); // Set web3, accounts, and contract to the state, and then proceed with an

                _context2.next = 22;
                break;

              case 18:
                _context2.prev = 18;
                _context2.t2 = _context2["catch"](3);
                // Catch any errors for any of the above operations.
                alert("Failed to load web3, accounts, or contract. Check console for details.");
                console.error(_context2.t2);

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 18]]);
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

    return votesAddresses ? votesAddresses.map(function (vote, index) {
      return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: index,
        variant: "outlined",
        className: classes.card,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
        container: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
        item: true,
        xs: 10,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 15
        }
      }, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 35
        }
      }, vote.title)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
        item: true,
        xs: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 15
        }
      }, __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 17
        }
      }, "Apply as Candidate"), __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 17
        }
      }, "Vote")))));
    }) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null);
  }

  function displayrenderedVotes() {
    return renderedAddresses[0] ? __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 37
      }
    }, renderedAddresses[0]) : console.log(JSON.stringify(renderedAddresses));
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
  }, displayrenderedVotes()), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }, displayVoteList())));
}

_s(App, "zJm+dEnRukCjHVBDd9sI5tHpFvU=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiY2FyZCIsIndpZHRoIiwiQXBwIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwid2ViMyIsInNldFdlYjMiLCJ2b3Rlc0FkZHJlc3NlcyIsInNldFZvdGVzQWRkcmVzc2VzIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsInZvdGVDb250cmFjdCIsInNldFZvdGVDb250cmFjdCIsInJlbmRlcmVkQWRkcmVzc2VzIiwicmVuZGVyQWRkcmVzc2VzIiwidXNlRWZmZWN0IiwiaW5pdFdlYjMiLCJjb25zb2xlIiwibG9nIiwiZ2V0V2ViMyIsIndlYjNJbnN0YW5jZSIsInNldHVwIiwic2V0QWNjb3VudHMiLCJldGgiLCJnZXRBY2NvdW50cyIsIm5ldCIsImdldElkIiwibmV0d29ya0lkIiwiZGVwbG95ZWROZXR3b3JrIiwiVm90ZUZhY3RvcnlDb250cmFjdCIsIm5ldHdvcmtzIiwiaW5zdGFuY2UiLCJDb250cmFjdCIsImFiaSIsImFkZHJlc3MiLCJhbGVydCIsImVycm9yIiwiVm90ZUNvbnRyYWN0IiwibGVuZ3RoIiwiZGlzcGxheVZvdGVzIiwibWV0aG9kcyIsImdldERlcGxveWVkVm90ZXMiLCJjYWxsIiwicmVzcG9uc2UiLCJkaXNwbGF5SW5mbyIsImN1cnJlbnRFbGVjdGlvbiIsInJlbmRlclZvdGVzIiwidGVtcCIsImZvckVhY2giLCJ0aGVuIiwibmV3QWRkcmVzcyIsInB1c2giLCJkaXNwbGF5Vm90ZUxpc3QiLCJtYXAiLCJ2b3RlIiwiaW5kZXgiLCJ0aXRsZSIsImRpc3BsYXlyZW5kZXJlZFZvdGVzIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Q0FFQTs7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QUF2QixHQUEyREksT0FBTyxDQUFDQyxHQUFSLENBQVl3QyxJQUFJLENBQUNDLFNBQUwsQ0FBZTlDLGlCQUFmLENBQVosQ0FBbEU7QUFDRDs7QUFDSCxTQUNFLG1FQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUU7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPNEMsb0JBQW9CLEVBQTNCLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9MLGVBQWUsRUFBdEIsQ0FGRixDQU5GLENBREY7QUFhRDs7R0F4S1FsRCxHO1VBQ1NKLFM7OztLQURUSSxHO0FBMEtNQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZTEzYWI1NmJhMDczZWE1ZTE2Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBWb3RlRmFjdG9yeUNvbnRyYWN0IGZyb20gXCIuLi9jb250cmFjdHMvVm90ZUZhY3RvcnkuanNvblwiO1xyXG5pbXBvcnQgVm90ZUNvbnRyYWN0IGZyb20gXCIuLi9jb250cmFjdHMvVm90ZS5qc29uXCI7XHJcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi9nZXRXZWIzXCI7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uL3JvdXRlcydcclxuXHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuLy8gQ29tbW9uSlNcclxucmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiKTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIGNhcmQ6IHtcclxuICAgIHdpZHRoOic4MCUnXHJcbiAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW3dlYjMsIHNldFdlYjNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt2b3Rlc0FkZHJlc3Nlcywgc2V0Vm90ZXNBZGRyZXNzZXNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt2b3RlQ29udHJhY3QsIHNldFZvdGVDb250cmFjdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3JlbmRlcmVkQWRkcmVzc2VzLCByZW5kZXJBZGRyZXNzZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vIHZhciB3ZWIzID0gXCJcIjtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsvLyBnZXQgd2ViM1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdFdlYjMoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdpbml0aWFsaXppbmcgd2ViMycpO1xyXG4gICAgICBjb25zdCB3ZWIzSW5zdGFuY2UgPSBhd2FpdCBnZXRXZWIzKCk7XHJcbiAgICAgIHNldFdlYjMod2ViM0luc3RhbmNlKVxyXG4gICAgfVxyXG4gICAgaW5pdFdlYjMoKTtcclxuICB9LFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsvLyBnZXQgRmFjdG9yeSBjb250cmFjdFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2V0dXAoKSB7XHJcbiAgICAgIGlmKHdlYjMgPT0gXCJcIikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd1bmFibGUgdG8gZ2V0IGZhY3QnKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhYmxlIHRvIGdldCBmYWN0JylcclxuICAgICAgICBzZXRBY2NvdW50cyhhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpKTtcclxuICAgICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpO1xyXG4gICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IFZvdGVGYWN0b3J5Q29udHJhY3QubmV0d29ya3NbbmV0d29ya0lkXTtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgIFZvdGVGYWN0b3J5Q29udHJhY3QuYWJpLFxyXG4gICAgICAgICAgZGVwbG95ZWROZXR3b3JrICYmIGRlcGxveWVkTmV0d29yay5hZGRyZXNzLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0Q29udHJhY3QoaW5zdGFuY2UpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gU2V0IHdlYjMsIGFjY291bnRzLCBhbmQgY29udHJhY3QgdG8gdGhlIHN0YXRlLCBhbmQgdGhlbiBwcm9jZWVkIHdpdGggYW5cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyBDYXRjaCBhbnkgZXJyb3JzIGZvciBhbnkgb2YgdGhlIGFib3ZlIG9wZXJhdGlvbnMuXHJcbiAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgICBzZXR1cCgpO1xyXG4gICAgICBjb25zb2xlLmxvZygnb2snKVxyXG4gIH0sW3dlYjNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsvL2p1c3QgZ2V0IFZvdGUgY29udHJhY3RcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgICBpZih3ZWIzID09ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBjb250cmFjdCBpbnN0YW5jZS5cclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgIFZvdGVDb250cmFjdC5hYmksXHJcbiAgICAgICAgICB2b3Rlc0FkZHJlc3Nlc1t2b3Rlc0FkZHJlc3Nlcy5sZW5ndGgtMV0sXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRWb3RlQ29udHJhY3QoaW5zdGFuY2UpO1xyXG4gICAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxyXG4gICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICAgc2V0dXAoKTtcclxuICB9LFtjb250cmFjdCx2b3Rlc0FkZHJlc3Nlc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PiB7Ly9kaXNwbGF5IGF2YWlsYWJsZSB2b3Rlc1xyXG4gICAgdmFyIGRpc3BsYXlWb3RlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYoY29udHJhY3QgPT0gJycpe1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0RGVwbG95ZWRWb3RlcygpLmNhbGwoKTtcclxuICAgICAgLy8gVXBkYXRlIHN0YXRlIHdpdGggdGhlIHJlc3VsdC5cclxuICAgICAgc2V0Vm90ZXNBZGRyZXNzZXMocmVzcG9uc2UpO1xyXG4gICAgfTtcclxuICAgIGRpc3BsYXlWb3RlcygpO1xyXG4gIH0sW2NvbnRyYWN0XSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+IHsvL3JlbmRlciB2b3Rlc1xyXG4gICAgdmFyIGRpc3BsYXlJbmZvID0gYXN5bmMgKGFkZHJlc3MpID0+IHsgXHJcbiAgICAgIGlmKHZvdGVzQWRkcmVzc2VzID09ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBjb250cmFjdCBpbnN0YW5jZS5cclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgIFZvdGVDb250cmFjdC5hYmksXHJcbiAgICAgICAgICBhZGRyZXNzXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gKGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuY3VycmVudEVsZWN0aW9uKCkuY2FsbCgpKTtcclxuICAgICAgICAvLyBTZXQgd2ViMywgYWNjb3VudHMsIGFuZCBjb250cmFjdCB0byB0aGUgc3RhdGUsIGFuZCB0aGVuIHByb2NlZWQgd2l0aCBhblxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cclxuICAgICAgICBhbGVydChcclxuICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIHJlbmRlclZvdGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmICghdm90ZXNBZGRyZXNzZXMpe1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdGVtcCA9IFtdXHJcbiAgICAgICAgdm90ZXNBZGRyZXNzZXMuZm9yRWFjaChhZGRyZXNzID0+IHtcclxuICAgICAgICAgICAgZGlzcGxheUluZm8oYWRkcmVzcykudGhlbihuZXdBZGRyZXNzID0+XHJcbiAgICAgICAgICAgIHRlbXAucHVzaChuZXdBZGRyZXNzKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmVuZGVyQWRkcmVzc2VzKHRlbXApO1xyXG4gICAgICB9XHJcbiAgICAgIHJlbmRlclZvdGVzKCk7XHJcbiAgICB9LFt2b3Rlc0FkZHJlc3Nlc10pO1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gZGlzcGxheVZvdGVMaXN0KCkge1xyXG4gICAgaWYod2ViMyA9PSBcIlwiKXtcclxuICAgICAgcmV0dXJuIFwid2FpdGluZyBmb3Igdm90ZXMgdG8gZGlzcGxheS4uLlwiXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHZvdGVzQWRkcmVzc2VzID09IFwiXCIpe1xyXG4gICAgICByZXR1cm4gXCJubyB2b3RlcyB0byBkaXNwbGF5XCJcclxuICAgIH1cclxuICAgIHJldHVybiB2b3Rlc0FkZHJlc3NlcyA/IHZvdGVzQWRkcmVzc2VzLm1hcCgodm90ZSwgaW5kZXgpID0+IFxyXG4gICAgICAgIDxDYXJkIGtleT17aW5kZXh9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNsYXNzTmFtZSA9e2NsYXNzZXMuY2FyZH0+XHJcbiAgICAgICAgICA8Q2FyZENvbnRlbnQgPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cyA9ezEwfT48c3Bhbj57dm90ZS50aXRsZX08L3NwYW4+PC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHMgPXsyfT5cclxuICAgICAgICAgICAgICAgIDxkaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8TGluayByb3V0ZSA9e2AvZWxlY3Rpb25zL2FwcGx5LyR7dm90ZX1gfT4gICovfVxyXG4gICAgICAgICAgICAgICAgICAgIEFwcGx5IGFzIENhbmRpZGF0ZVxyXG4gICAgICAgICAgICAgICAgICB7LyogPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj4gIFxyXG4gICAgICAgICAgICAgICAgICB7LyogPExpbmsgcm91dGUgPXtgL2VsZWN0aW9ucy92b3RlLyR7dm90ZX1gfT4gICovfVxyXG4gICAgICAgICAgICAgICAgICAgIFZvdGVcclxuICAgICAgICAgICAgICAgICAgey8qIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICApIDogPD48Lz5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5cmVuZGVyZWRWb3RlcygpIHtcclxuICAgICAgcmV0dXJuIHJlbmRlcmVkQWRkcmVzc2VzWzBdID8gPGRpdj57cmVuZGVyZWRBZGRyZXNzZXNbMF19PC9kaXY+IDogY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVuZGVyZWRBZGRyZXNzZXMpKVxyXG4gICAgfVxyXG4gIHJldHVybiggXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICA8ZGl2PnsgZGlzcGxheXJlbmRlcmVkVm90ZXMoKSB9PC9kaXY+XHJcbiAgICAgICAgPGRpdj57IGRpc3BsYXlWb3RlTGlzdCgpIH08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=