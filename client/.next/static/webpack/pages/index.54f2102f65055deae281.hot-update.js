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
          lineNumber: 151,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "ui card",
        style: styles.card,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "card",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 15
        }
      }, __jsx("span", {
        className: "right floated",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
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
          lineNumber: 156,
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
          lineNumber: 157,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: "content",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "header",
        style: styles.title,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 19
        }
      }, vote.title, " - ", renderDate(vote.startDate, vote.endDate))), __jsx("div", {
        className: "content",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 17
        }
      }, __jsx("span", {
        className: "right floated",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 19
        }
      }, __jsx("span", {
        style: styles.access,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 21
        }
      }, "access vote"), __jsx("i", {
        className: "angle right icon huge",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
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
          lineNumber: 172,
          columnNumber: 19
        }
      }, __jsx("i", {
        className: "checkmark icon small",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
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
          lineNumber: 176,
          columnNumber: 19
        }
      }, vote.description)))));
    }) : __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 11
      }
    }, " no votes found ");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_8__["Header"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJzdHlsZXMiLCJjYXJkIiwid2lkdGgiLCJtYXJnaW4iLCJjb2xvciIsIm1heEhlaWdodCIsIm1pbkhlaWdodCIsImN1cnNvciIsInRpdGxlIiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiYWNjZXNzIiwicG9zaXRpb24iLCJoZWlnaHQiLCJBcHAiLCJ1c2VTdGF0ZSIsIndlYjMiLCJzZXRXZWIzIiwidm90ZXNBZGRyZXNzZXMiLCJzZXRWb3Rlc0FkZHJlc3NlcyIsImNvbnRyYWN0Iiwic2V0Q29udHJhY3QiLCJyZW5kZXJlZEFkZHJlc3NlcyIsInJlbmRlckFkZHJlc3NlcyIsImFsbFZvdGVzIiwiZ2V0QWxsVm90ZXMiLCJ1c2VFZmZlY3QiLCJpbml0V2ViMyIsImNvbnNvbGUiLCJsb2ciLCJnZXRXZWIzIiwid2ViM0luc3RhbmNlIiwic2V0dXAiLCJldGgiLCJuZXQiLCJnZXRJZCIsIm5ldHdvcmtJZCIsImRlcGxveWVkTmV0d29yayIsIlZvdGVGYWN0b3J5Q29udHJhY3QiLCJuZXR3b3JrcyIsImluc3RhbmNlIiwiQ29udHJhY3QiLCJhYmkiLCJhZGRyZXNzIiwiYWxlcnQiLCJlcnJvciIsImRpc3BsYXlWb3RlcyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZFZvdGVzIiwiY2FsbCIsInJlc3BvbnNlIiwiZGlzcGxheUluZm8iLCJWb3RlQ29udHJhY3QiLCJjdXJyZW50RWxlY3Rpb24iLCJyZW5kZXJWb3RlcyIsImZvckVhY2giLCJ0aGVuIiwibmV3QWRkcmVzcyIsInJlbmRlckRhdGUiLCJhU3RhcnREYXRlIiwiYUVuZERhdGUiLCJzdGFydERhdGUiLCJEYXRlIiwiZW5kRGF0ZSIsImN1cnJlbnREYXRlIiwidG9VVENTdHJpbmciLCJzbGljZSIsImRpc3BsYXlWb3RlTGlzdCIsIm1hcCIsInZvdGUiLCJp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LG9CQUFVLEVBQUM7QUFBWixTQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQW1ENkQsSUFBSSxDQUFDRyxXQUF4RCxDQVhGLENBWkYsQ0FERixDQURGLENBRDJDO0FBQUEsS0FBdEIsQ0FBSCxHQWdDbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFoQ047QUFpQ0M7O0FBRUgsU0FDRSxtRUFDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0wsZUFBZSxFQUF0QixDQURGLENBTkYsQ0FERjtBQVlEOztHQWpLUXJELEc7O0tBQUFBLEc7QUFtS01BLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU0ZjIxMDJmNjUwNTVkZWFlMjgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFZvdGVGYWN0b3J5Q29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlRmFjdG9yeS5qc29uXCI7XHJcbmltcG9ydCBWb3RlQ29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlLmpzb25cIjtcclxuaW1wb3J0IGdldFdlYjMgZnJvbSBcIi4uL2dldFdlYjNcIjtcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vcm91dGVzJ1xyXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcclxuLy8gQ29tbW9uSlNcclxucmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiKTtcclxuXHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY2FyZDoge1xyXG4gICAgd2lkdGg6ICc5MCUnLFxyXG4gICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICBjb2xvcjogJyNmMDAwMDAnLFxyXG4gICAgbWF4SGVpZ2h0OiAyMDAsXHJcbiAgICBtaW5IZWlnaHQ6IDIwMCxcclxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgfSxcclxuICB0aXRsZSA6IHtcclxuICAgIGZvbnRTaXplOiAzNixcclxuICAgIGNvbG9yOiAnI0VEMUIyRicsXHJcbiAgICBtYXJnaW5MZWZ0OiAxMCxcclxuICAgIG1hcmdpblRvcDogMTUsXHJcbiAgICBtYXJnaW5Cb3R0b206MTVcclxuICB9LFxyXG4gIGFjY2Vzczp7XHJcbiAgICBwb3NpdGlvbjpcInJlbGF0aXZlXCIsXHJcbiAgICBoZWlnaHQ6MzYsXHJcbiAgICBmb250U2l6ZTogMTYsXHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IFt3ZWIzLCBzZXRXZWIzXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdm90ZXNBZGRyZXNzZXMsIHNldFZvdGVzQWRkcmVzc2VzXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29udHJhY3QsIHNldENvbnRyYWN0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcmVuZGVyZWRBZGRyZXNzZXMsIHJlbmRlckFkZHJlc3Nlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2FsbFZvdGVzLCBnZXRBbGxWb3Rlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7Ly8gZ2V0IHdlYjNcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXRXZWIzKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnaW5pdGlhbGl6aW5nIHdlYjMnKTtcclxuICAgICAgY29uc3Qgd2ViM0luc3RhbmNlID0gYXdhaXQgZ2V0V2ViMygpO1xyXG4gICAgICBzZXRXZWIzKHdlYjNJbnN0YW5jZSlcclxuICAgIH1cclxuICAgIGluaXRXZWIzKCk7XHJcbiAgfSxbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7Ly8gZ2V0IEZhY3RvcnkgY29udHJhY3RcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgICBpZih3ZWIzID09IFwiXCIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndW5hYmxlIHRvIGdldCBmYWN0b3J5JylcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpO1xyXG4gICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IFZvdGVGYWN0b3J5Q29udHJhY3QubmV0d29ya3NbbmV0d29ya0lkXTtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgIFZvdGVGYWN0b3J5Q29udHJhY3QuYWJpLFxyXG4gICAgICAgICAgZGVwbG95ZWROZXR3b3JrICYmIGRlcGxveWVkTmV0d29yay5hZGRyZXNzLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0Q29udHJhY3QoaW5zdGFuY2UpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gU2V0IHdlYjMsIGFjY291bnRzLCBhbmQgY29udHJhY3QgdG8gdGhlIHN0YXRlLCBhbmQgdGhlbiBwcm9jZWVkIHdpdGggYW5cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyBDYXRjaCBhbnkgZXJyb3JzIGZvciBhbnkgb2YgdGhlIGFib3ZlIG9wZXJhdGlvbnMuXHJcbiAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgICBzZXR1cCgpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnb2snKVxyXG4gIH0sW3dlYjNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT4gey8vZGlzcGxheSBhdmFpbGFibGUgdm90ZXMgYWRkcmVzc2VzXHJcbiAgICB2YXIgZGlzcGxheVZvdGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZihjb250cmFjdCA9PSAnJyl7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5nZXREZXBsb3llZFZvdGVzKCkuY2FsbCgpO1xyXG4gICAgICAvLyBVcGRhdGUgc3RhdGUgd2l0aCB0aGUgcmVzdWx0LlxyXG4gICAgICBzZXRWb3Rlc0FkZHJlc3NlcyhyZXNwb25zZSk7XHJcbiAgICB9O1xyXG4gICAgZGlzcGxheVZvdGVzKCk7XHJcbiAgfSxbY29udHJhY3RdKTtcclxuXHJcbiAgdmFyIGRpc3BsYXlJbmZvID0gYXN5bmMgKGFkZHJlc3MpID0+IHsgXHJcbiAgICBpZih2b3Rlc0FkZHJlc3NlcyA9PSAnJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0cnkgey8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXHJcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgICAgIFZvdGVDb250cmFjdC5hYmksXHJcbiAgICAgICAgYWRkcmVzc1xyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gKGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuY3VycmVudEVsZWN0aW9uKCkuY2FsbCgpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpPT4gey8vcmVuZGVyIHZvdGVzXHJcbiAgICB2YXIgcmVuZGVyVm90ZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF2b3Rlc0FkZHJlc3Nlcyl7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IHZvdGVzQWRkcmVzc2VzLmZvckVhY2goYWRkcmVzcyA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlJbmZvKGFkZHJlc3MpLnRoZW4obmV3QWRkcmVzcyA9PiB7XHJcbiAgICAgICAgICAgICAgcmVuZGVyQWRkcmVzc2VzKFsuLi5yZW5kZXJlZEFkZHJlc3NlcywgbmV3QWRkcmVzc10pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIHJlbmRlclZvdGVzKCk7XHJcbiAgfSxbdm90ZXNBZGRyZXNzZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgaWYocmVuZGVyZWRBZGRyZXNzZXMpIHtcclxuICAgICAgY29uc29sZS5sb2cocmVuZGVyZWRBZGRyZXNzZXMpXHJcbiAgICB9XHJcbiAgfSxbcmVuZGVyZWRBZGRyZXNzZXNdKVxyXG5cclxuICBmdW5jdGlvbiByZW5kZXJEYXRlKGFTdGFydERhdGUsIGFFbmREYXRlKSB7XHJcbiAgICB2YXIgc3RhcnREYXRlID0gbmV3IERhdGUoc3RhcnREYXRlICogMSk7XHJcbiAgICB2YXIgZW5kRGF0ZSA9IG5ldyBEYXRlKGVuZERhdGUgKiAxKTtcclxuICAgIHZhciBjdXJyZW50RGF0ZT0gbmV3IERhdGUoKTtcclxuICAgIGlmKGN1cnJlbnREYXRlIDwgc3RhcnREYXRlKSB7XHJcbiAgICAgIHJldHVybiBcInN0YXJ0cyBvbiBcIiArIHN0YXJ0RGF0ZS50b1VUQ1N0cmluZygpLnNsaWNlKDAsMTcpO1xyXG4gICAgICB9XHJcbiAgICBlbHNlIGlmKGN1cnJlbnREYXRlID4gc3RhcnREYXRlICYmIGN1cnJlbnREYXRlIDwgZW5kRGF0ZSl7XHJcbiAgICAgIHJldHVybiBcImVuZHMgb24gXCIgKyBlbmREYXRlLnRvVVRDU3RyaW5nKCkuc2xpY2UoMCwxNyk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm4gXCJhcmNoaXZlZDogXCIgKyBlbmREYXRlLnRvVVRDU3RyaW5nKCkuc2xpY2UoMCwxNyk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBmdW5jdGlvbiBkaXNwbGF5Vm90ZUxpc3QoKSB7XHJcbiAgICBpZih3ZWIzID09IFwiXCIpe1xyXG4gICAgICByZXR1cm4gXCJ3YWl0aW5nIGZvciB2b3RlcyB0byBkaXNwbGF5Li4uXCJcclxuICAgIH1cclxuICAgIGVsc2UgaWYodm90ZXNBZGRyZXNzZXMgPT0gXCJcIil7XHJcbiAgICAgIHJldHVybiBcIm5vIHZvdGVzIHRvIGRpc3BsYXlcIlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZW5kZXJlZEFkZHJlc3NlcyA/IHJlbmRlcmVkQWRkcmVzc2VzLm1hcCgodm90ZSwgaW5kZXgpID0+IFxyXG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwidWkgYnV0dG9uXCIgcm91dGUgPXtgL2VsZWN0aW9ucy92b3RlLyR7dm90ZXNBZGRyZXNzZXNbaW5kZXhdfWB9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNhcmRcIiBzdHlsZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHQgZmxvYXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICB7dm90ZS5udW1Wb3Rlc31cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidXNlciBpY29uXCIgc3R5bGU9e3ttYXJnaW46IDN9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImNpcmNsZSBvdXRsaW5lIGljb25cIiBzdHlsZT17e21hcmdpbjogM319PjwvaT5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIiBzdHlsZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHt2b3RlLnRpdGxlfSAtIHtyZW5kZXJEYXRlKHZvdGUuc3RhcnREYXRlLCB2b3RlLmVuZERhdGUpfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodCBmbG9hdGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5hY2Nlc3N9ID5hY2Nlc3Mgdm90ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJhbmdsZSByaWdodCBpY29uIGh1Z2VcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc3ViIGhlYWRlclwiIHN0eWxlPXt7bWFyZ2luTGVmdDoxMH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImNoZWNrbWFyayBpY29uIHNtYWxsXCI+PC9pPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlY3Rpb24gXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGZlZWRcIiBzdHlsZT17e21hcmdpbkxlZnQ6MTB9fT57IHZvdGUuZGVzY3JpcHRpb24gfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgKSA6IDxkaXY+IG5vIHZvdGVzIGZvdW5kIDwvZGl2PlxyXG4gICAgfVxyXG5cclxuICByZXR1cm4oIFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgPGRpdj57IGRpc3BsYXlWb3RlTGlzdCgpIH08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=