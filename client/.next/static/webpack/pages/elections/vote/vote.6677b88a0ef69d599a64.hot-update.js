webpackHotUpdate_N_E("pages/elections/vote/vote",{

/***/ "./src/pages/elections/vote/vote.js":
/*!******************************************!*\
  !*** ./src/pages/elections/vote/vote.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/header */ "./src/components/header.js");
/* harmony import */ var _getWeb3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../getWeb3 */ "./src/getWeb3.js");
/* harmony import */ var _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../contracts/Vote.json */ "./src/contracts/Vote.json");
var _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../contracts/Vote.json */ "./src/contracts/Vote.json", 1);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\Users\\foubroker\\PROJECT_VOTE\\voting-at-mcgill\\client\\src\\pages\\elections\\vote\\vote.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var Vote = function Vote() {
  _s();

  var web3Instance;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      web3 = _useState[0],
      setWeb3 = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      voteAddress = _useState2[0],
      setVoteAddress = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      currentVote = _useState3[0],
      setCurrentVote = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      candidates = _useState4[0],
      setCandidates = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    function initWeb3() {
      return _initWeb.apply(this, arguments);
    }

    function _initWeb() {
      _initWeb = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(_getWeb3__WEBPACK_IMPORTED_MODULE_4__["default"])();

              case 2:
                web3Instance = _context2.sent;
                setWeb3(web3Instance);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return _initWeb.apply(this, arguments);
    }

    var getElectionAddress = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var url, pos;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = window.location.href;
                pos = url.indexOf('vote') + 5;
                setVoteAddress(url.slice(pos));
                console.log(voteAddress);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getElectionAddress() {
        return _ref.apply(this, arguments);
      };
    }();

    initWeb3();
    getElectionAddress();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    function setupVote() {
      return _setupVote.apply(this, arguments);
    }

    function _setupVote() {
      _setupVote = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var instance, array, i;
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
                _context3.prev = 2;
                _context3.next = 5;
                return new web3.eth.Contract(_contracts_Vote_json__WEBPACK_IMPORTED_MODULE_5__.abi, voteAddress);

              case 5:
                instance = _context3.sent;
                _context3.t0 = setCurrentVote;
                _context3.next = 9;
                return instance.methods.currentElection().call();

              case 9:
                _context3.t1 = _context3.sent;
                (0, _context3.t0)(_context3.t1);
                array = [];
                i = 0;

              case 13:
                if (!(i < 3)) {
                  _context3.next = 22;
                  break;
                }

                _context3.t2 = array;
                _context3.next = 17;
                return instance.methods.candidateArray(i).call();

              case 17:
                _context3.t3 = _context3.sent;

                _context3.t2.push.call(_context3.t2, _context3.t3);

              case 19:
                i++;
                _context3.next = 13;
                break;

              case 22:
                console.log(array);
                setCandidates(array); // Set web3, accounts, and contract to the state, and then proceed with an

                _context3.next = 30;
                break;

              case 26:
                _context3.prev = 26;
                _context3.t4 = _context3["catch"](2);
                // Catch any errors for any of the above operations.
                alert("Failed to load web3, accounts, or contract. Check console for details.");
                console.error(_context3.t4);

              case 30:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[2, 26]]);
      }));
      return _setupVote.apply(this, arguments);
    }

    setupVote();
  }, [web3]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log(candidates);
  }, [candidates]);
  var long = {
    width: '90%',
    texAlign: 'center',
    margin: 'auto'
  };

  function displayCandidates() {
    var _this2 = this;

    if (candidates == "") {
      return "no candidates yet";
    }

    return candidates.map(function (candidate, index) {
      return __jsx("i", {
        className: "user icon large",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }
      });
    });
  }

  function formatVote() {
    if (currentVote) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
        className: "ui card",
        style: long,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "header",
        style: {
          color: '#f00000'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 25
        }
      }, currentVote.title), __jsx("div", {
        className: "meta",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 25
        }
      }, Date(currentVote.startDate).slice(0, -42), " to ", Date(currentVote.endDate).slice(0, -42)), __jsx("div", {
        className: "ui card",
        style: {
          width: '100%'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 29
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 29
        }
      }, currentVote.description)))), __jsx("div", {
        style: {
          textAlign: 'center',
          margin: '50px',
          color: '#f00000'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }
      }, displayCandidates()), __jsx(_routes__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        route: "/elections/apply/".concat(voteAddress),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "plus icon large",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 70
        }
      }))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }
      }), __jsx("div", {
        className: "extra content",
        style: {
          color: '#f00000'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "check icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 25
        }
      }), currentVote.numVotes, " Votes")));
    } else {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 19
        }
      }, " loading vote ...");
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, formatVote()));
};

_s(Vote, "3sMcdwCLrn8VKC5Yxv/9yg/MbiY=");

_c = Vote;
/* harmony default export */ __webpack_exports__["default"] = (Vote);

var _c;

$RefreshReg$(_c, "Vote");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VsZWN0aW9ucy92b3RlL3ZvdGUuanMiXSwibmFtZXMiOlsiVm90ZSIsIndlYjNJbnN0YW5jZSIsInVzZVN0YXRlIiwid2ViMyIsInNldFdlYjMiLCJ2b3RlQWRkcmVzcyIsInNldFZvdGVBZGRyZXNzIiwiY3VycmVudFZvdGUiLCJzZXRDdXJyZW50Vm90ZSIsImNhbmRpZGF0ZXMiLCJzZXRDYW5kaWRhdGVzIiwidXNlRWZmZWN0IiwiaW5pdFdlYjMiLCJnZXRXZWIzIiwiZ2V0RWxlY3Rpb25BZGRyZXNzIiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicG9zIiwiaW5kZXhPZiIsInNsaWNlIiwiY29uc29sZSIsImxvZyIsInNldHVwVm90ZSIsImV0aCIsIkNvbnRyYWN0IiwiVm90ZUNvbnRyYWN0IiwiYWJpIiwiaW5zdGFuY2UiLCJtZXRob2RzIiwiY3VycmVudEVsZWN0aW9uIiwiY2FsbCIsImFycmF5IiwiaSIsImNhbmRpZGF0ZUFycmF5IiwicHVzaCIsImFsZXJ0IiwiZXJyb3IiLCJsb25nIiwid2lkdGgiLCJ0ZXhBbGlnbiIsIm1hcmdpbiIsImRpc3BsYXlDYW5kaWRhdGVzIiwibWFwIiwiY2FuZGlkYXRlIiwiaW5kZXgiLCJmb3JtYXRWb3RlIiwiY29sb3IiLCJ0aXRsZSIsIkRhdGUiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiZGVzY3JpcHRpb24iLCJ0ZXh0QWxpZ24iLCJudW1Wb3RlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNmLE1BQUlDLFlBQUo7O0FBRGUsa0JBRVNDLHNEQUFRLENBQUMsRUFBRCxDQUZqQjtBQUFBLE1BRVJDLElBRlE7QUFBQSxNQUVGQyxPQUZFOztBQUFBLG1CQUd1QkYsc0RBQVEs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O0FBQUEsNkJBQU47QUFDSDtBQUNKOztBQUVELFNBQ0ksbUVBQ0ksTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtSLFVBQVUsRUFBZixDQUxKLENBREo7QUFTSCxDQTVHRDs7R0FBTS9DLEk7O0tBQUFBLEk7QUE2R1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VsZWN0aW9ucy92b3RlL3ZvdGUuNjY3N2I4OGEwZWY2OWQ1OTlhNjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInXHJcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi8uLi8uLi9nZXRXZWIzXCI7XHJcbmltcG9ydCBWb3RlQ29udHJhY3QgZnJvbSBcIi4uLy4uLy4uL2NvbnRyYWN0cy9Wb3RlLmpzb25cIjtcclxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi8uLi8uLi9yb3V0ZXMnXHJcbmNvbnN0IFZvdGUgPSAoKSA9PiB7XHJcbiAgICB2YXIgd2ViM0luc3RhbmNlO1xyXG4gICAgY29uc3QgW3dlYjMsIHNldFdlYjNdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZvdGVBZGRyZXNzLCBzZXRWb3RlQWRkcmVzc10gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtjdXJyZW50Vm90ZSwgc2V0Q3VycmVudFZvdGVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbY2FuZGlkYXRlcywgc2V0Q2FuZGlkYXRlcyBdID0gdXNlU3RhdGUoJycpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGluaXRXZWIzKCkge1xyXG4gICAgICAgICAgICB3ZWIzSW5zdGFuY2UgPSBhd2FpdCBnZXRXZWIzKCk7XHJcbiAgICAgICAgICAgIHNldFdlYjMod2ViM0luc3RhbmNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGdldEVsZWN0aW9uQWRkcmVzcyA9IGFzeW5jKCkgPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHVybD13aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICAgICAgY29uc3QgcG9zPXVybC5pbmRleE9mKCd2b3RlJykrNTtcclxuICAgICAgICAgICAgc2V0Vm90ZUFkZHJlc3ModXJsLnNsaWNlKHBvcykpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2b3RlQWRkcmVzcyk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIGluaXRXZWIzKCk7XHJcbiAgICAgICAgZ2V0RWxlY3Rpb25BZGRyZXNzKCk7XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwVm90ZSgpIHtcclxuICAgICAgICAgICAgaWYod2ViMyA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBhd2FpdCBuZXcgd2ViMy5ldGguQ29udHJhY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgVm90ZUNvbnRyYWN0LmFiaSxcclxuICAgICAgICAgICAgICAgICAgICB2b3RlQWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRWb3RlKGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuY3VycmVudEVsZWN0aW9uKCkuY2FsbCgpKTtcclxuICAgICAgICAgICAgICAgIHZhciBhcnJheSA9IFtdXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaChhd2FpdCBpbnN0YW5jZS5tZXRob2RzLmNhbmRpZGF0ZUFycmF5KGkpLmNhbGwoKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFycmF5KTtcclxuICAgICAgICAgICAgICAgIHNldENhbmRpZGF0ZXMoYXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgLy8gU2V0IHdlYjMsIGFjY291bnRzLCBhbmQgY29udHJhY3QgdG8gdGhlIHN0YXRlLCBhbmQgdGhlbiBwcm9jZWVkIHdpdGggYW5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxyXG4gICAgICAgICAgICBhbGVydChcclxuICAgICAgICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0dXBWb3RlKCk7XHJcbiAgICB9LFt3ZWIzXSlcclxuICAgIHVzZUVmZmVjdCgoKT0+e2NvbnNvbGUubG9nKGNhbmRpZGF0ZXMpfSxbY2FuZGlkYXRlc10pXHJcblxyXG4gICAgY29uc3QgbG9uZyA9IHtcclxuICAgICAgICB3aWR0aDogJzkwJScsXHJcbiAgICAgICAgdGV4QWxpZ246J2NlbnRlcicsXHJcbiAgICAgICAgbWFyZ2luOiAnYXV0bydcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlDYW5kaWRhdGVzKCkge1xyXG4gICAgICAgIGlmIChjYW5kaWRhdGVzID09IFwiXCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gXCJubyBjYW5kaWRhdGVzIHlldFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYW5kaWRhdGVzLm1hcCgoY2FuZGlkYXRlLGluZGV4KSA9PlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ1c2VyIGljb24gbGFyZ2VcIj48L2k+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZm9ybWF0Vm90ZSgpIHtcclxuICAgICAgICBpZiAoY3VycmVudFZvdGUpe1xyXG4gICAgICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgY2FyZFwiIHN0eWxlPXtsb25nfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIiBzdHlsZT0ge3tjb2xvcjogJyNmMDAwMDAnfX0+e2N1cnJlbnRWb3RlLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFcIj57RGF0ZShjdXJyZW50Vm90ZS5zdGFydERhdGUpLnNsaWNlKDAsLTQyKX0gdG8ge0RhdGUoY3VycmVudFZvdGUuZW5kRGF0ZSkuc2xpY2UoMCwtNDIpIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBjYXJkXCIgc3R5bGU9IHt7d2lkdGg6ICcxMDAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntjdXJyZW50Vm90ZS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJywgbWFyZ2luOic1MHB4JywgY29sb3I6ICcjZjAwMDAwJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntkaXNwbGF5Q2FuZGlkYXRlcygpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGkgY2xhc3NOYW1lPVwidXNlciBpY29uIGxhcmdlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInVzZXIgaWNvbiBsYXJnZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ1c2VyIGljb24gbGFyZ2VcIj48L2k+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlID17YC9lbGVjdGlvbnMvYXBwbHkvJHt2b3RlQWRkcmVzc31gfT48aSBjbGFzc05hbWU9XCJwbHVzIGljb24gbGFyZ2VcIj48L2k+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4dHJhIGNvbnRlbnRcIiBzdHlsZT0ge3tjb2xvcjogJyNmMDAwMDAnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImNoZWNrIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50Vm90ZS5udW1Wb3Rlc30gVm90ZXNcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuPGRpdj4gbG9hZGluZyB2b3RlIC4uLjwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8aDE+e2Zvcm1hdFZvdGUoKX08L2gxPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFZvdGU7Il0sInNvdXJjZVJvb3QiOiIifQ==