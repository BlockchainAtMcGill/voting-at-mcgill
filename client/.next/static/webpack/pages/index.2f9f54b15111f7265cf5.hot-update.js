webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contracts/VoteFactory.json */ "./src/contracts/VoteFactory.json");
var _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/VoteFactory.json */ "./src/contracts/VoteFactory.json", 1);
/* harmony import */ var _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contracts/Vote.json */ "./src/contracts/Vote.json");
var _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/Vote.json */ "./src/contracts/Vote.json", 1);
/* harmony import */ var _getWeb3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../getWeb3 */ "./src/getWeb3.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_10__);




var _jsxFileName = "C:\\Users\\foubroker\\Desktop\\BAM\\voting-at-mcgill-2\\client\\src\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







 // CommonJS

__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");

var styles = {
  card: {
    width: '90%',
    texAlign: 'center',
    margin: 'auto',
    color: '#f00000'
  },
  title: {
    fontSize: 36,
    color: '#ED1B2F'
  }
};

function App() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      web3 = _useState[0],
      setWeb3 = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      votesAddresses = _useState2[0],
      setVotesAddresses = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      contract = _useState3[0],
      setContract = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      renderedAddresses = _useState4[0],
      renderAddresses = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    // get web3
    function initWeb3() {
      return _initWeb.apply(this, arguments);
    }

    function _initWeb() {
      _initWeb = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var web3Instance;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('initializing web3');
                _context.next = 3;
                return Object(_getWeb3__WEBPACK_IMPORTED_MODULE_7__["default"])();

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
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    // get Factory contract
    function setup() {
      return _setup.apply(this, arguments);
    }

    function _setup() {
      _setup = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var networkId, deployedNetwork, instance;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(web3 == "")) {
                  _context2.next = 3;
                  break;
                }

                console.log('unable to get factory');
                return _context2.abrupt("return");

              case 3:
                _context2.prev = 3;
                _context2.next = 6;
                return web3.eth.net.getId();

              case 6:
                networkId = _context2.sent;
                deployedNetwork = _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_5__.networks[networkId];
                instance = new web3.eth.Contract(_contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_5__.abi, deployedNetwork && deployedNetwork.address);
                setContract(instance); // Set web3, accounts, and contract to the state, and then proceed with an

                _context2.next = 16;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](3);
                // Catch any errors for any of the above operations.
                alert("Failed to load web3, accounts, or contract. Check console for details.");
                console.error(_context2.t0);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 12]]);
      }));
      return _setup.apply(this, arguments);
    }

    setup(); // console.log('ok')
  }, [web3]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    //display available votes addresses
    var displayVotes = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
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
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    //render votes
    var displayInfo = /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(address) {
        var instance;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
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
                instance = new web3.eth.Contract(_contracts_Vote_json__WEBPACK_IMPORTED_MODULE_6__.abi, address);
                _context4.next = 6;
                return instance.methods.currentElection().call();

              case 6:
                return _context4.abrupt("return", _context4.sent);

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](2);
                console.error(_context4.t0);

              case 12:
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
      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (votesAddresses) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return");

              case 2:
                _context5.next = 4;
                return votesAddresses.forEach(function (address) {
                  displayInfo(address).then(function (newAddress) {
                    renderAddresses([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(renderedAddresses), [newAddress]));
                  });
                });

              case 4:
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
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (renderedAddresses != []) {
      console.log(renderedAddresses);
    }
  }, [renderedAddresses]);

  function displayVoteList() {
    var _this = this;

    if (web3 == "") {
      return "waiting for votes to display...";
    } else if (votesAddresses == "") {
      return "no votes to display";
    }

    return renderedAddresses ? renderedAddresses.map(function (vote, index) {
      return __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        className: "ui button",
        route: "/elections/vote/".concat(votesAddresses[index]),
        key: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "ui card",
        style: styles.card,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "card",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }
      }, __jsx("span", {
        className: "right floated",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 15
        }
      }, vote.numVotes, __jsx("i", {
        className: "user icon",
        style: {
          margin: 3
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 17
        }
      }), __jsx("i", {
        className: "circle outline icon",
        style: {
          margin: 3
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: "content",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "header",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 17
        }
      }, "Election ", vote.title), __jsx("div", {
        className: "meta",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 19
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "description",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 17
        }
      }, "Click to Vote")))));
    }) : __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 11
      }
    }, "no votes found");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_8__["Header"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }
  }), __jsx("br", {
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
  }), __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 9
    }
  }, displayVoteList())));
}

_s(App, "nB7L7soYGlGlhMsEHReoGR1F+Xo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJzdHlsZXMiLCJjYXJkIiwid2lkdGgiLCJ0ZXhBbGlnbiIsIm1hcmdpbiIsImNvbG9yIiwidGl0bGUiLCJmb250U2l6ZSIsIkFwcCIsInVzZVN0YXRlIiwid2ViMyIsInNldFdlYjMiLCJ2b3Rlc0FkZHJlc3NlcyIsInNldFZvdGVzQWRkcmVzc2VzIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsInJlbmRlcmVkQWRkcmVzc2VzIiwicmVuZGVyQWRkcmVzc2VzIiwidXNlRWZmZWN0IiwiaW5pdFdlYjMiLCJjb25zb2xlIiwibG9nIiwiZ2V0V2ViMyIsIndlYjNJbnN0YW5jZSIsInNldHVwIiwiZXRoIiwibmV0IiwiZ2V0SWQiLCJuZXR3b3JrSWQiLCJkZXBsb3llZE5ldHdvcmsiLCJWb3RlRmFjdG9yeUNvbnRyYWN0IiwibmV0d29ya3MiLCJpbnN0YW5jZSIsIkNvbnRyYWN0IiwiYWJpIiwiYWRkcmVzcyIsImFsZXJ0IiwiZXJyb3IiLCJkaXNwbGF5Vm90ZXMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRWb3RlcyIsImNhbGwiLCJyZXNwb25zZSIsImRpc3BsYXlJbmZvIiwiVm90ZUNvbnRyYWN0IiwiY3VycmVudEVsZWN0aW9uIiwicmVuZGVyVm90ZXMiLCJmb3JFYWNoIiwidGhlbiIsIm5ld0FkZHJlc3MiLCJkaXNwbGF5Vm90ZUxpc3QiLCJtYXAiLCJ2b3RlIiwiaW5kZXgiLCJudW1Wb3RlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQUEsbUJBQU8sQ0FBQyxrRkFBRCxDQUFQOztBQUdBLElBQU1DLE1BQU0sR0FBRztBQUNiQyxNQUFJLEVBQUU7QUFDSkMsU0FBSyxFQUFFLEtBREg7QUFFSkMsWUFBUSxFQUFDLFFBRkw7QUFH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aG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVm90ZUZhY3RvcnlDb250cmFjdCBmcm9tIFwiLi4vY29udHJhY3RzL1ZvdGVGYWN0b3J5Lmpzb25cIjtcclxuaW1wb3J0IFZvdGVDb250cmFjdCBmcm9tIFwiLi4vY29udHJhY3RzL1ZvdGUuanNvblwiO1xyXG5pbXBvcnQgZ2V0V2ViMyBmcm9tIFwiLi4vZ2V0V2ViM1wiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi9yb3V0ZXMnXHJcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xyXG4vLyBDb21tb25KU1xyXG5yZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIpO1xyXG5cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjYXJkOiB7XHJcbiAgICB3aWR0aDogJzkwJScsXHJcbiAgICB0ZXhBbGlnbjonY2VudGVyJyxcclxuICAgIG1hcmdpbjogJ2F1dG8nLFxyXG4gICAgY29sb3I6ICcjZjAwMDAwJyxcclxuICB9LFxyXG4gIHRpdGxlIDoge1xyXG4gICAgZm9udFNpemU6IDM2LFxyXG4gICAgY29sb3I6ICcjRUQxQjJGJ1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCBbd2ViMywgc2V0V2ViM10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3ZvdGVzQWRkcmVzc2VzLCBzZXRWb3Rlc0FkZHJlc3Nlc10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbnRyYWN0LCBzZXRDb250cmFjdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3JlbmRlcmVkQWRkcmVzc2VzLCByZW5kZXJBZGRyZXNzZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4gey8vIGdldCB3ZWIzXHJcbiAgICBhc3luYyBmdW5jdGlvbiBpbml0V2ViMygpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2luaXRpYWxpemluZyB3ZWIzJyk7XHJcbiAgICAgIGNvbnN0IHdlYjNJbnN0YW5jZSA9IGF3YWl0IGdldFdlYjMoKTtcclxuICAgICAgc2V0V2ViMyh3ZWIzSW5zdGFuY2UpXHJcbiAgICB9XHJcbiAgICBpbml0V2ViMygpO1xyXG4gIH0sW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4gey8vIGdldCBGYWN0b3J5IGNvbnRyYWN0XHJcbiAgICBhc3luYyBmdW5jdGlvbiBzZXR1cCgpIHtcclxuICAgICAgaWYod2ViMyA9PSBcIlwiKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3VuYWJsZSB0byBnZXQgZmFjdG9yeScpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBjb250cmFjdCBpbnN0YW5jZS5cclxuICAgICAgICBjb25zdCBuZXR3b3JrSWQgPSBhd2FpdCB3ZWIzLmV0aC5uZXQuZ2V0SWQoKTtcclxuICAgICAgICBjb25zdCBkZXBsb3llZE5ldHdvcmsgPSBWb3RlRmFjdG9yeUNvbnRyYWN0Lm5ldHdvcmtzW25ldHdvcmtJZF07XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXHJcbiAgICAgICAgICBWb3RlRmFjdG9yeUNvbnRyYWN0LmFiaSxcclxuICAgICAgICAgIGRlcGxveWVkTmV0d29yayAmJiBkZXBsb3llZE5ldHdvcmsuYWRkcmVzcyxcclxuICAgICAgICApO1xyXG4gICAgICAgIHNldENvbnRyYWN0KGluc3RhbmNlKTtcclxuICAgIFxyXG4gICAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxyXG4gICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICAgc2V0dXAoKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ29rJylcclxuICB9LFt3ZWIzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+IHsvL2Rpc3BsYXkgYXZhaWxhYmxlIHZvdGVzIGFkZHJlc3Nlc1xyXG4gICAgdmFyIGRpc3BsYXlWb3RlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYoY29udHJhY3QgPT0gJycpe1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0RGVwbG95ZWRWb3RlcygpLmNhbGwoKTtcclxuICAgICAgLy8gVXBkYXRlIHN0YXRlIHdpdGggdGhlIHJlc3VsdC5cclxuICAgICAgc2V0Vm90ZXNBZGRyZXNzZXMocmVzcG9uc2UpO1xyXG4gICAgfTtcclxuICAgIGRpc3BsYXlWb3RlcygpO1xyXG4gIH0sW2NvbnRyYWN0XSk7XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpPT4gey8vcmVuZGVyIHZvdGVzXHJcbiAgICB2YXIgZGlzcGxheUluZm8gPSBhc3luYyAoYWRkcmVzcykgPT4geyBcclxuICAgICAgaWYodm90ZXNBZGRyZXNzZXMgPT0gJycpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdHJ5IHsvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgICAgICAgVm90ZUNvbnRyYWN0LmFiaSxcclxuICAgICAgICAgIGFkZHJlc3NcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiAoYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5jdXJyZW50RWxlY3Rpb24oKS5jYWxsKCkpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIHJlbmRlclZvdGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmICghdm90ZXNBZGRyZXNzZXMpe1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCB2b3Rlc0FkZHJlc3Nlcy5mb3JFYWNoKGFkZHJlc3MgPT4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5SW5mbyhhZGRyZXNzKS50aGVuKG5ld0FkZHJlc3MgPT4ge1xyXG4gICAgICAgICAgICAgIHJlbmRlckFkZHJlc3NlcyhbLi4ucmVuZGVyZWRBZGRyZXNzZXMsIG5ld0FkZHJlc3NdKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICByZW5kZXJWb3RlcygpO1xyXG4gIH0sW3ZvdGVzQWRkcmVzc2VzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgIGlmKHJlbmRlcmVkQWRkcmVzc2VzICE9IFtdKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlbmRlcmVkQWRkcmVzc2VzKVxyXG4gICAgfVxyXG4gIH0sW3JlbmRlcmVkQWRkcmVzc2VzXSlcclxuXHJcblxyXG4gIGZ1bmN0aW9uIGRpc3BsYXlWb3RlTGlzdCgpIHtcclxuICAgIGlmKHdlYjMgPT0gXCJcIil7XHJcbiAgICAgIHJldHVybiBcIndhaXRpbmcgZm9yIHZvdGVzIHRvIGRpc3BsYXkuLi5cIlxyXG4gICAgfVxyXG4gICAgZWxzZSBpZih2b3Rlc0FkZHJlc3NlcyA9PSBcIlwiKXtcclxuICAgICAgcmV0dXJuIFwibm8gdm90ZXMgdG8gZGlzcGxheVwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVuZGVyZWRBZGRyZXNzZXMgPyByZW5kZXJlZEFkZHJlc3Nlcy5tYXAoKHZvdGUsIGluZGV4KSA9PiBcclxuICAgICAgICA8TGluayBjbGFzc05hbWU9XCJ1aSBidXR0b25cIiByb3V0ZSA9e2AvZWxlY3Rpb25zL3ZvdGUvJHt2b3Rlc0FkZHJlc3Nlc1tpbmRleF19YH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNhcmRcIiBzdHlsZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodCBmbG9hdGVkXCI+XHJcbiAgICAgICAgICAgICAgICB7dm90ZS5udW1Wb3Rlc31cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInVzZXIgaWNvblwiIHN0eWxlPXt7bWFyZ2luOiAzfX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiY2lyY2xlIG91dGxpbmUgaWNvblwiIHN0eWxlPXt7bWFyZ2luOiAzfX0+PC9pPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+RWxlY3Rpb24ge3ZvdGUudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPjwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIENsaWNrIHRvIFZvdGVcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKSA6IDxkaXY+bm8gdm90ZXMgZm91bmQ8L2Rpdj5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICByZXR1cm4oIFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgPGRpdj57IGRpc3BsYXlWb3RlTGlzdCgpIH08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=