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
    margin: 'auto',
    color: '#f00000',
    maxHeight: 200,
    minHeight: 200,
    cursor: "pointer"
  },
  title: {
    fontSize: 36,
    color: '#ED1B2F',
    marginLeft: 10,
    marginTop: 15,
    marginBottom: 15
  },
  access: {
    position: "relative",
    height: 36,
    fontSize: 16
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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      allVotes = _useState5[0],
      getAllVotes = _useState5[1];

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

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    //render votes
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
                    // temp.push(newAddress);
                    setTimeout(function () {//do what you need here
                    }, 10);
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
    if (renderedAddresses) {
      console.log(renderedAddresses);
    }
  }, [renderedAddresses]);

  function renderDate(aStartDate, aEndDate) {
    var startDate = new Date(startDate * 1);
    var endDate = new Date(endDate * 1);
    var currentDate = new Date();

    if (currentDate < startDate) {
      return "starts on " + startDate.toUTCString().slice(0, 17);
    } else if (currentDate > startDate && currentDate < endDate) {
      return "ends on " + endDate.toUTCString().slice(0, 17);
    } else {
      return "archived: " + endDate.toUTCString().slice(0, 17);
    }
  }

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
          lineNumber: 157,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "ui card",
        style: styles.card,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "card",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 15
        }
      }, __jsx("span", {
        className: "right floated",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 17
        }
      }, vote.numVotes, __jsx("i", {
        className: "user icon",
        style: {
          margin: 3
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 19
        }
      }), __jsx("i", {
        className: "circle outline icon",
        style: {
          margin: 3
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "content",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "header",
        style: styles.title,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 19
        }
      }, vote.title, " - ", renderDate(vote.startDate, vote.endDate))), __jsx("div", {
        className: "content",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 17
        }
      }, __jsx("span", {
        className: "right floated",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 19
        }
      }, __jsx("span", {
        style: styles.access,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 21
        }
      }, "access vote"), __jsx("i", {
        className: "angle right icon huge",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "ui sub header",
        style: {
          marginLeft: 10
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 19
        }
      }, __jsx("i", {
        className: "checkmark icon small",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 21
        }
      }), "election"), __jsx("div", {
        className: "ui feed",
        style: {
          marginLeft: 10
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 19
        }
      }, vote.description)))));
    }) : __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 11
      }
    }, " no votes found ");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_8__["Header"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 9
    }
  }, displayVoteList())));
}

_s(App, "GGT9xwv9gKyOKcogNJsJB/ATUyc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJzdHlsZXMiLCJjYXJkIiwid2lkdGgiLCJtYXJnaW4iLCJjb2xvciIsIm1heEhlaWdodCIsIm1pbkhlaWdodCIsImN1cnNvciIsInRpdGxlIiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiYWNjZXNzIiwicG9zaXRpb24iLCJoZWlnaHQiLCJBcHAiLCJ1c2VTdGF0ZSIsIndlYjMiLCJzZXRXZWIzIiwidm90ZXNBZGRyZXNzZXMiLCJzZXRWb3Rlc0FkZHJlc3NlcyIsImNvbnRyYWN0Iiwic2V0Q29udHJhY3QiLCJyZW5kZXJlZEFkZHJlc3NlcyIsInJlbmRlckFkZHJlc3NlcyIsImFsbFZvdGVzIiwiZ2V0QWxsVm90ZXMiLCJ1c2VFZmZlY3QiLCJpbml0V2ViMyIsImNvbnNvbGUiLCJsb2ciLCJnZXRXZWIzIiwid2ViM0luc3RhbmNlIiwic2V0dXAiLCJldGgiLCJuZXQiLCJnZXRJZCIsIm5ldHdvcmtJZCIsImRlcGxveWVkTmV0d29yayIsIlZvdGVGYWN0b3J5Q29udHJhY3QiLCJuZXR3b3JrcyIsImluc3RhbmNlIiwiQ29udHJhY3QiLCJhYmkiLCJhZGRyZXNzIiwiYWxlcnQiLCJlcnJvciIsImRpc3BsYXlWb3RlcyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZFZvdGVzIiwiY2FsbCIsInJlc3BvbnNlIiwiZGlzcGxheUluZm8iLCJWb3RlQ29udHJhY3QiLCJjdXJyZW50RWxlY3Rpb24iLCJyZW5kZXJWb3RlcyIsImZvckVhY2giLCJ0aGVuIiwibmV3QWRkcmVzcyIsInNldFRpbWVvdXQiLCJyZW5kZXJEYXRlIiwiYVN0YXJ0RGF0ZSIsImFFbmREYXRlIiwic3RhcnREYXRlIiwiRGF0ZSIsImVuZERhdGUiLCJjdXJyZW50RGF0ZSIsInRvVVRDU3RyaW5nIiwic2xpY2UiLCJkaXNwbGF5Vm90ZUxpc3QiLCJt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QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLGFBUEYsRUFXRTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUF5QixhQUFLLEVBQUU7QUFBQ0Esb0JBQVUsRUFBQztBQUFaLFNBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBbUQ4RCxJQUFJLENBQUNHLFdBQXhELENBWEYsQ0FaRixDQURGLENBREYsQ0FEMkM7QUFBQSxLQUF0QixDQUFILEdBZ0NsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQWhDTjtBQWlDQzs7QUFFSCxTQUNFLG1FQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUU7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPTCxlQUFlLEVBQXRCLENBREYsQ0FORixDQURGO0FBWUQ7O0dBdktRdEQsRzs7S0FBQUEsRztBQXlLTUEsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTQ1MzY5MmRlYmViYWZkZDJlNDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVm90ZUZhY3RvcnlDb250cmFjdCBmcm9tIFwiLi4vY29udHJhY3RzL1ZvdGVGYWN0b3J5Lmpzb25cIjtcclxuaW1wb3J0IFZvdGVDb250cmFjdCBmcm9tIFwiLi4vY29udHJhY3RzL1ZvdGUuanNvblwiO1xyXG5pbXBvcnQgZ2V0V2ViMyBmcm9tIFwiLi4vZ2V0V2ViM1wiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi9yb3V0ZXMnXHJcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xyXG4vLyBDb21tb25KU1xyXG5yZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIpO1xyXG5cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjYXJkOiB7XHJcbiAgICB3aWR0aDogJzkwJScsXHJcbiAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgIGNvbG9yOiAnI2YwMDAwMCcsXHJcbiAgICBtYXhIZWlnaHQ6IDIwMCxcclxuICAgIG1pbkhlaWdodDogMjAwLFxyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICB9LFxyXG4gIHRpdGxlIDoge1xyXG4gICAgZm9udFNpemU6IDM2LFxyXG4gICAgY29sb3I6ICcjRUQxQjJGJyxcclxuICAgIG1hcmdpbkxlZnQ6IDEwLFxyXG4gICAgbWFyZ2luVG9wOiAxNSxcclxuICAgIG1hcmdpbkJvdHRvbToxNVxyXG4gIH0sXHJcbiAgYWNjZXNzOntcclxuICAgIHBvc2l0aW9uOlwicmVsYXRpdmVcIixcclxuICAgIGhlaWdodDozNixcclxuICAgIGZvbnRTaXplOiAxNixcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgY29uc3QgW3dlYjMsIHNldFdlYjNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt2b3Rlc0FkZHJlc3Nlcywgc2V0Vm90ZXNBZGRyZXNzZXNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtyZW5kZXJlZEFkZHJlc3NlcywgcmVuZGVyQWRkcmVzc2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYWxsVm90ZXMsIGdldEFsbFZvdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsvLyBnZXQgd2ViM1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdFdlYjMoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdpbml0aWFsaXppbmcgd2ViMycpO1xyXG4gICAgICBjb25zdCB3ZWIzSW5zdGFuY2UgPSBhd2FpdCBnZXRXZWIzKCk7XHJcbiAgICAgIHNldFdlYjMod2ViM0luc3RhbmNlKVxyXG4gICAgfVxyXG4gICAgaW5pdFdlYjMoKTtcclxuICB9LFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsvLyBnZXQgRmFjdG9yeSBjb250cmFjdFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2V0dXAoKSB7XHJcbiAgICAgIGlmKHdlYjMgPT0gXCJcIikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd1bmFibGUgdG8gZ2V0IGZhY3RvcnknKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXHJcbiAgICAgICAgY29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViMy5ldGgubmV0LmdldElkKCk7XHJcbiAgICAgICAgY29uc3QgZGVwbG95ZWROZXR3b3JrID0gVm90ZUZhY3RvcnlDb250cmFjdC5uZXR3b3Jrc1tuZXR3b3JrSWRdO1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgICAgICAgVm90ZUZhY3RvcnlDb250cmFjdC5hYmksXHJcbiAgICAgICAgICBkZXBsb3llZE5ldHdvcmsgJiYgZGVwbG95ZWROZXR3b3JrLmFkZHJlc3MsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRDb250cmFjdChpbnN0YW5jZSk7XHJcbiAgICBcclxuICAgICAgICAvLyBTZXQgd2ViMywgYWNjb3VudHMsIGFuZCBjb250cmFjdCB0byB0aGUgc3RhdGUsIGFuZCB0aGVuIHByb2NlZWQgd2l0aCBhblxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cclxuICAgICAgICBhbGVydChcclxuICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAgIHNldHVwKCk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdvaycpXHJcbiAgfSxbd2ViM10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PiB7Ly9kaXNwbGF5IGF2YWlsYWJsZSB2b3RlcyBhZGRyZXNzZXNcclxuICAgIHZhciBkaXNwbGF5Vm90ZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmKGNvbnRyYWN0ID09ICcnKXtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmdldERlcGxveWVkVm90ZXMoKS5jYWxsKCk7XHJcbiAgICAgIC8vIFVwZGF0ZSBzdGF0ZSB3aXRoIHRoZSByZXN1bHQuXHJcbiAgICAgIHNldFZvdGVzQWRkcmVzc2VzKHJlc3BvbnNlKTtcclxuICAgIH07XHJcbiAgICBkaXNwbGF5Vm90ZXMoKTtcclxuICB9LFtjb250cmFjdF0pO1xyXG5cclxuICB2YXIgZGlzcGxheUluZm8gPSBhc3luYyAoYWRkcmVzcykgPT4geyBcclxuICAgIGlmKHZvdGVzQWRkcmVzc2VzID09ICcnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRyeSB7Ly8gR2V0IHRoZSBjb250cmFjdCBpbnN0YW5jZS5cclxuICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXHJcbiAgICAgICAgVm90ZUNvbnRyYWN0LmFiaSxcclxuICAgICAgICBhZGRyZXNzXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiAoYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5jdXJyZW50RWxlY3Rpb24oKS5jYWxsKCkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCk9PiB7Ly9yZW5kZXIgdm90ZXNcclxuICAgIHZhciByZW5kZXJWb3RlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAoIXZvdGVzQWRkcmVzc2VzKXtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdmFyIHRlbXAgID0gW11cclxuICAgICAgICBhd2FpdCB2b3Rlc0FkZHJlc3Nlcy5mb3JFYWNoKGFkZHJlc3MgPT4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5SW5mbyhhZGRyZXNzKS50aGVuKG5ld0FkZHJlc3MgPT4ge1xyXG4gICAgICAgICAgICAgIC8vIHRlbXAucHVzaChuZXdBZGRyZXNzKTtcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAvL2RvIHdoYXQgeW91IG5lZWQgaGVyZVxyXG4gICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgICAgICAgcmVuZGVyQWRkcmVzc2VzKFsuLi5yZW5kZXJlZEFkZHJlc3NlcywgbmV3QWRkcmVzc10pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gcmVuZGVyQWRkcmVzc2VzKHRlbXApXHJcbiAgICAgIH1cclxuICAgIHJlbmRlclZvdGVzKCk7XHJcbiAgfSxbdm90ZXNBZGRyZXNzZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgaWYocmVuZGVyZWRBZGRyZXNzZXMpIHtcclxuICAgICAgY29uc29sZS5sb2cocmVuZGVyZWRBZGRyZXNzZXMpXHJcbiAgICB9XHJcbiAgfSxbcmVuZGVyZWRBZGRyZXNzZXNdKVxyXG5cclxuICBmdW5jdGlvbiByZW5kZXJEYXRlKGFTdGFydERhdGUsIGFFbmREYXRlKSB7XHJcbiAgICB2YXIgc3RhcnREYXRlID0gbmV3IERhdGUoc3RhcnREYXRlICogMSk7XHJcbiAgICB2YXIgZW5kRGF0ZSA9IG5ldyBEYXRlKGVuZERhdGUgKiAxKTtcclxuICAgIHZhciBjdXJyZW50RGF0ZT0gbmV3IERhdGUoKTtcclxuICAgIGlmKGN1cnJlbnREYXRlIDwgc3RhcnREYXRlKSB7XHJcbiAgICAgIHJldHVybiBcInN0YXJ0cyBvbiBcIiArIHN0YXJ0RGF0ZS50b1VUQ1N0cmluZygpLnNsaWNlKDAsMTcpO1xyXG4gICAgICB9XHJcbiAgICBlbHNlIGlmKGN1cnJlbnREYXRlID4gc3RhcnREYXRlICYmIGN1cnJlbnREYXRlIDwgZW5kRGF0ZSl7XHJcbiAgICAgIHJldHVybiBcImVuZHMgb24gXCIgKyBlbmREYXRlLnRvVVRDU3RyaW5nKCkuc2xpY2UoMCwxNyk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm4gXCJhcmNoaXZlZDogXCIgKyBlbmREYXRlLnRvVVRDU3RyaW5nKCkuc2xpY2UoMCwxNyk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBmdW5jdGlvbiBkaXNwbGF5Vm90ZUxpc3QoKSB7XHJcbiAgICBpZih3ZWIzID09IFwiXCIpe1xyXG4gICAgICByZXR1cm4gXCJ3YWl0aW5nIGZvciB2b3RlcyB0byBkaXNwbGF5Li4uXCJcclxuICAgIH1cclxuICAgIGVsc2UgaWYodm90ZXNBZGRyZXNzZXMgPT0gXCJcIil7XHJcbiAgICAgIHJldHVybiBcIm5vIHZvdGVzIHRvIGRpc3BsYXlcIlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZW5kZXJlZEFkZHJlc3NlcyA/IHJlbmRlcmVkQWRkcmVzc2VzLm1hcCgodm90ZSwgaW5kZXgpID0+IFxyXG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwidWkgYnV0dG9uXCIgcm91dGUgPXtgL2VsZWN0aW9ucy92b3RlLyR7dm90ZXNBZGRyZXNzZXNbaW5kZXhdfWB9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNhcmRcIiBzdHlsZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHQgZmxvYXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICB7dm90ZS5udW1Wb3Rlc31cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidXNlciBpY29uXCIgc3R5bGU9e3ttYXJnaW46IDN9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImNpcmNsZSBvdXRsaW5lIGljb25cIiBzdHlsZT17e21hcmdpbjogM319PjwvaT5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIiBzdHlsZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHt2b3RlLnRpdGxlfSAtIHtyZW5kZXJEYXRlKHZvdGUuc3RhcnREYXRlLCB2b3RlLmVuZERhdGUpfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodCBmbG9hdGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5hY2Nlc3N9ID5hY2Nlc3Mgdm90ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJhbmdsZSByaWdodCBpY29uIGh1Z2VcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc3ViIGhlYWRlclwiIHN0eWxlPXt7bWFyZ2luTGVmdDoxMH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImNoZWNrbWFyayBpY29uIHNtYWxsXCI+PC9pPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlY3Rpb24gXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGZlZWRcIiBzdHlsZT17e21hcmdpbkxlZnQ6MTB9fT57IHZvdGUuZGVzY3JpcHRpb24gfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgKSA6IDxkaXY+IG5vIHZvdGVzIGZvdW5kIDwvZGl2PlxyXG4gICAgfVxyXG5cclxuICByZXR1cm4oIFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgPGRpdj57IGRpc3BsYXlWb3RlTGlzdCgpIH08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=