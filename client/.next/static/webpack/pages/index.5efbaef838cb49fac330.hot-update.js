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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      renderedAddresses = _useState4[0],
      renderAddresses = _useState4[1]; // var web3 = "";


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

    return votesAddresses ? votesAddresses.map(function (vote, index) {
      return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: index,
        variant: "outlined",
        className: classes.card,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
        container: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
        item: true,
        xs: 10,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 15
        }
      }, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 35
        }
      }, vote.title)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
        item: true,
        xs: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 15
        }
      }, __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 17
        }
      }, "Apply as Candidate"), __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
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
        lineNumber: 149,
        columnNumber: 37
      }
    }, renderedAddresses[0]) : console.log(JSON.stringify(renderedAddresses));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_7__["Header"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }, displayrenderedVotes()), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }
  }, displayVoteList())));
}

_s(App, "FC87PT/2rxOFGyidqitOp/ccUQU=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiY2FyZCIsIndpZHRoIiwiQXBwIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwid2ViMyIsInNldFdlYjMiLCJ2b3Rlc0FkZHJlc3NlcyIsInNldFZvdGVzQWRkcmVzc2VzIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsInJlbmRlcmVkQWRkcmVzc2VzIiwicmVuZGVyQWRkcmVzc2VzIiwidXNlRWZmZWN0IiwiaW5pdFdlYjMiLCJjb25zb2xlIiwibG9nIiwiZ2V0V2ViMyIsIndlYjNJbnN0YW5jZSIsInNldHVwIiwic2V0QWNjb3VudHMiLCJldGgiLCJnZXRBY2NvdW50cyIsIm5ldCIsImdldElkIiwibmV0d29ya0lkIiwiZGVwbG95ZWROZXR3b3JrIiwiVm90ZUZhY3RvcnlDb250cmFjdCIsIm5ldHdvcmtzIiwiaW5zdGFuY2UiLCJDb250cmFjdCIsImFiaSIsImFkZHJlc3MiLCJhbGVydCIsImVycm9yIiwiZGlzcGxheVZvdGVzIiwibWV0aG9kcyIsImdldERlcGxveWVkVm90ZXMiLCJjYWxsIiwicmVzcG9uc2UiLCJkaXNwbGF5SW5mbyIsIlZvdGVDb250cmFjdCIsImN1cnJlbnRFbGVjdGlvbiIsInJlbmRlclZvdGVzIiwidGVtcCIsImZvckVhY2giLCJ0aGVuIiwibmV3QWRkcmVzcyIsInB1c2giLCJkaXNwbGF5Vm90ZUxpc3QiLCJtYXAiLCJ2b3RlIiwiaW5kZXgiLCJ0aXRsZSIsImRpc3BsYXlyZW5kZXJlZFZvdGVzIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Q0FFQTs7QUFDQUEsbUJBQU8sQ0FBQyxrRkFBRCxDQUFQOztBQUVBLElBQU1DLFNB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QURGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORixDQUZGLENBREYsQ0FERixDQUR1QztBQUFBLEtBQW5CLENBQUgsR0FvQmYsa0VBcEJOO0FBcUJDOztBQUVELFdBQVNDLG9CQUFULEdBQWdDO0FBQzlCLFdBQU8zQyxpQkFBaUIsQ0FBQyxDQUFELENBQWpCLEdBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBTUEsaUJBQWlCLENBQUMsQ0FBRCxDQUF2QixDQUF2QixHQUEyREksT0FBTyxDQUFDQyxHQUFSLENBQVl1QyxJQUFJLENBQUNDLFNBQUwsQ0FBZTdDLGlCQUFmLENBQVosQ0FBbEU7QUFDRDs7QUFDSCxTQUNFLG1FQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUU7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPMkMsb0JBQW9CLEVBQTNCLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9MLGVBQWUsRUFBdEIsQ0FGRixDQU5GLENBREY7QUFhRDs7R0EvSVEvQyxHO1VBQ1NKLFM7OztLQURUSSxHO0FBaUpNQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZWZiYWVmODM4Y2I0OWZhYzMzMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBWb3RlRmFjdG9yeUNvbnRyYWN0IGZyb20gXCIuLi9jb250cmFjdHMvVm90ZUZhY3RvcnkuanNvblwiO1xyXG5pbXBvcnQgVm90ZUNvbnRyYWN0IGZyb20gXCIuLi9jb250cmFjdHMvVm90ZS5qc29uXCI7XHJcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi9nZXRXZWIzXCI7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uL3JvdXRlcydcclxuXHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuLy8gQ29tbW9uSlNcclxucmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiKTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIGNhcmQ6IHtcclxuICAgIHdpZHRoOic4MCUnXHJcbiAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW3dlYjMsIHNldFdlYjNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt2b3Rlc0FkZHJlc3Nlcywgc2V0Vm90ZXNBZGRyZXNzZXNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtyZW5kZXJlZEFkZHJlc3NlcywgcmVuZGVyQWRkcmVzc2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAvLyB2YXIgd2ViMyA9IFwiXCI7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7Ly8gZ2V0IHdlYjNcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXRXZWIzKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnaW5pdGlhbGl6aW5nIHdlYjMnKTtcclxuICAgICAgY29uc3Qgd2ViM0luc3RhbmNlID0gYXdhaXQgZ2V0V2ViMygpO1xyXG4gICAgICBzZXRXZWIzKHdlYjNJbnN0YW5jZSlcclxuICAgIH1cclxuICAgIGluaXRXZWIzKCk7XHJcbiAgfSxbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7Ly8gZ2V0IEZhY3RvcnkgY29udHJhY3RcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgICBpZih3ZWIzID09IFwiXCIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndW5hYmxlIHRvIGdldCBmYWN0JylcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWJsZSB0byBnZXQgZmFjdCcpXHJcbiAgICAgICAgc2V0QWNjb3VudHMoYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKSk7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBjb250cmFjdCBpbnN0YW5jZS5cclxuICAgICAgICBjb25zdCBuZXR3b3JrSWQgPSBhd2FpdCB3ZWIzLmV0aC5uZXQuZ2V0SWQoKTtcclxuICAgICAgICBjb25zdCBkZXBsb3llZE5ldHdvcmsgPSBWb3RlRmFjdG9yeUNvbnRyYWN0Lm5ldHdvcmtzW25ldHdvcmtJZF07XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXHJcbiAgICAgICAgICBWb3RlRmFjdG9yeUNvbnRyYWN0LmFiaSxcclxuICAgICAgICAgIGRlcGxveWVkTmV0d29yayAmJiBkZXBsb3llZE5ldHdvcmsuYWRkcmVzcyxcclxuICAgICAgICApO1xyXG4gICAgICAgIHNldENvbnRyYWN0KGluc3RhbmNlKTtcclxuICAgIFxyXG4gICAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxyXG4gICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICAgc2V0dXAoKTtcclxuICAgICAgY29uc29sZS5sb2coJ29rJylcclxuICB9LFt3ZWIzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+IHsvL2Rpc3BsYXkgYXZhaWxhYmxlIHZvdGVzXHJcbiAgICB2YXIgZGlzcGxheVZvdGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZihjb250cmFjdCA9PSAnJyl7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5nZXREZXBsb3llZFZvdGVzKCkuY2FsbCgpO1xyXG4gICAgICAvLyBVcGRhdGUgc3RhdGUgd2l0aCB0aGUgcmVzdWx0LlxyXG4gICAgICBzZXRWb3Rlc0FkZHJlc3NlcyhyZXNwb25zZSk7XHJcbiAgICB9O1xyXG4gICAgZGlzcGxheVZvdGVzKCk7XHJcbiAgfSxbY29udHJhY3RdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT4gey8vcmVuZGVyIHZvdGVzXHJcbiAgICB2YXIgZGlzcGxheUluZm8gPSBhc3luYyAoYWRkcmVzcykgPT4geyBcclxuICAgICAgaWYodm90ZXNBZGRyZXNzZXMgPT0gJycpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgICAgICAgVm90ZUNvbnRyYWN0LmFiaSxcclxuICAgICAgICAgIGFkZHJlc3NcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiAoYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5jdXJyZW50RWxlY3Rpb24oKS5jYWxsKCkpO1xyXG4gICAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxyXG4gICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB2YXIgcmVuZGVyVm90ZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF2b3Rlc0FkZHJlc3Nlcyl7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB0ZW1wID0gW11cclxuICAgICAgICB2b3Rlc0FkZHJlc3Nlcy5mb3JFYWNoKGFkZHJlc3MgPT4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5SW5mbyhhZGRyZXNzKS50aGVuKG5ld0FkZHJlc3MgPT5cclxuICAgICAgICAgICAgdGVtcC5wdXNoKG5ld0FkZHJlc3MpXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZW5kZXJBZGRyZXNzZXModGVtcCk7XHJcbiAgICAgIH1cclxuICAgICAgcmVuZGVyVm90ZXMoKTtcclxuICAgIH0sW3ZvdGVzQWRkcmVzc2VzXSk7XHJcblxyXG5cclxuICBmdW5jdGlvbiBkaXNwbGF5Vm90ZUxpc3QoKSB7XHJcbiAgICBpZih3ZWIzID09IFwiXCIpe1xyXG4gICAgICByZXR1cm4gXCJ3YWl0aW5nIGZvciB2b3RlcyB0byBkaXNwbGF5Li4uXCJcclxuICAgIH1cclxuICAgIGVsc2UgaWYodm90ZXNBZGRyZXNzZXMgPT0gXCJcIil7XHJcbiAgICAgIHJldHVybiBcIm5vIHZvdGVzIHRvIGRpc3BsYXlcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZvdGVzQWRkcmVzc2VzID8gdm90ZXNBZGRyZXNzZXMubWFwKCh2b3RlLCBpbmRleCkgPT4gXHJcbiAgICAgICAgPENhcmQga2V5PXtpbmRleH0gdmFyaWFudD1cIm91dGxpbmVkXCIgY2xhc3NOYW1lID17Y2xhc3Nlcy5jYXJkfT5cclxuICAgICAgICAgIDxDYXJkQ29udGVudCA+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzID17MTB9PjxzcGFuPnt2b3RlLnRpdGxlfTwvc3Bhbj48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cyA9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIHJvdXRlID17YC9lbGVjdGlvbnMvYXBwbHkvJHt2b3RlfWB9PiAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgQXBwbHkgYXMgQ2FuZGlkYXRlXHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8TGluayByb3V0ZSA9e2AvZWxlY3Rpb25zL3ZvdGUvJHt2b3RlfWB9PiAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgVm90ZVxyXG4gICAgICAgICAgICAgICAgICB7LyogPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICkgOiA8PjwvPlxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlyZW5kZXJlZFZvdGVzKCkge1xyXG4gICAgICByZXR1cm4gcmVuZGVyZWRBZGRyZXNzZXNbMF0gPyA8ZGl2PntyZW5kZXJlZEFkZHJlc3Nlc1swXX08L2Rpdj4gOiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZW5kZXJlZEFkZHJlc3NlcykpXHJcbiAgICB9XHJcbiAgcmV0dXJuKCBcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgIDxkaXY+eyBkaXNwbGF5cmVuZGVyZWRWb3RlcygpIH08L2Rpdj5cclxuICAgICAgICA8ZGl2PnsgZGlzcGxheVZvdGVMaXN0KCkgfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==