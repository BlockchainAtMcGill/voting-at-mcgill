webpackHotUpdate_N_E("pages/elections/vote/vote",{

/***/ "./src/pages/elections/vote/vote.js":
/*!******************************************!*\
  !*** ./src/pages/elections/vote/vote.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/header */ "./src/components/header.js");
/* harmony import */ var _getWeb3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../getWeb3 */ "./src/getWeb3.js");
/* harmony import */ var _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../contracts/Vote.json */ "./src/contracts/Vote.json");
var _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../contracts/Vote.json */ "./src/contracts/Vote.json", 1);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");




var _jsxFileName = "C:\\Users\\foubroker\\PROJECT_VOTE\\voting-at-mcgill\\client\\src\\pages\\elections\\vote\\vote.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








var Vote = function Vote() {
  _s();

  var web3Instance;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      web3 = _useState[0],
      setWeb3 = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      voteAddress = _useState2[0],
      setVoteAddress = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      currentVote = _useState3[0],
      setCurrentVote = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      voteInstance = _useState4[0],
      setVoteInstance = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      candidates = _useState5[0],
      setCandidates = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      currentUser = _useState6[0],
      setCurrentUser = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      voting = _useState7[0],
      setVoting = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      hasVoted = _useState8[0],
      setHasVoted = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function initWeb3() {
      return _initWeb.apply(this, arguments);
    }

    function _initWeb() {
      _initWeb = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(_getWeb3__WEBPACK_IMPORTED_MODULE_5__["default"])();

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
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var url, pos;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
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
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function setupVote() {
      return _setupVote.apply(this, arguments);
    }

    function _setupVote() {
      _setupVote = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
        var instance, current, _yield$web3$eth$getAc, _yield$web3$eth$getAc2, candidatesCount, array, i;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
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
                return new web3.eth.Contract(_contracts_Vote_json__WEBPACK_IMPORTED_MODULE_6__.abi, voteAddress);

              case 5:
                instance = _context3.sent;
                setVoteInstance(instance);
                _context3.t0 = setCurrentVote;
                _context3.next = 10;
                return instance.methods.currentElection().call();

              case 10:
                _context3.t1 = _context3.sent;
                (0, _context3.t0)(_context3.t1);
                _context3.next = 14;
                return web3.eth.getAccounts();

              case 14:
                _yield$web3$eth$getAc = _context3.sent;
                _yield$web3$eth$getAc2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_yield$web3$eth$getAc, 1);
                current = _yield$web3$eth$getAc2[0];
                setCurrentUser(current);
                _context3.t2 = setHasVoted;
                _context3.next = 21;
                return instance.methods.getElectionVoter(current).call();

              case 21:
                _context3.t3 = _context3.sent;
                (0, _context3.t2)(_context3.t3);
                _context3.next = 25;
                return instance.methods.candidatesCount().call();

              case 25:
                candidatesCount = _context3.sent;
                array = [];
                i = 0;

              case 28:
                if (!(i < candidatesCount)) {
                  _context3.next = 37;
                  break;
                }

                _context3.t4 = array;
                _context3.next = 32;
                return instance.methods.candidateArray(i).call();

              case 32:
                _context3.t5 = _context3.sent;

                _context3.t4.push.call(_context3.t4, _context3.t5);

              case 34:
                i++;
                _context3.next = 28;
                break;

              case 37:
                setCandidates(array); // Set web3, accounts, and contract to the state, and then proceed with an

                _context3.next = 44;
                break;

              case 40:
                _context3.prev = 40;
                _context3.t6 = _context3["catch"](2);
                // Catch any errors for any of the above operations.
                alert("Failed to load web3, accounts, or contract. Check console for details.");
                console.error(_context3.t6);

              case 44:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[2, 40]]);
      }));
      return _setupVote.apply(this, arguments);
    }

    setupVote();
  }, [web3]);
  var long = {
    width: '90%',
    texAlign: 'center',
    margin: 'auto',
    color: '#f00000'
  };

  function VoteModal(name, address) {
    var voteFor = /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!voteInstance) {
                  _context4.next = 6;
                  break;
                }

                setVoting(true);
                _context4.next = 4;
                return voteInstance.methods.voteFor(address).send({
                  from: currentUser
                });

              case 4:
                setVoting(false);
                location.reload();

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function voteFor() {
        return _ref2.apply(this, arguments);
      };
    }();

    if (!hasVoted) {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
        trigger: __jsx("button", {
          className: "ui right floated inverted red button",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 30
          }
        }, "Vote"),
        header: "Vote!",
        content: "are you sure you want to vote for " + name + " ?",
        actions: [__jsx("button", {
          key: 1,
          className: "ui inverted green button",
          onClick: voteFor,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 21
          }
        }, "yes"), __jsx("button", {
          key: 2,
          className: "ui inverted red button",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 21
          }
        }, "no")],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 17
        }
      });
    } else return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null);
  }

  function leaveElection() {
    var leavethis = /*#__PURE__*/function () {
      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!voteInstance) {
                  _context5.next = 4;
                  break;
                }

                _context5.next = 3;
                return voteInstance.methods.leaveElection(0).send({
                  from: currentUser
                });

              case 3:
                location.reload();

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function leavethis() {
        return _ref3.apply(this, arguments);
      };
    }();

    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
      trigger: __jsx("button", {
        className: "ui right floated inverted red button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 26
        }
      }, "Leave Election"),
      header: "Leave Election",
      content: "are you sure you want to no longer be a candidate",
      actions: [__jsx("button", {
        key: 1,
        className: "ui inverted green button",
        onClick: leavethis,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 17
        }
      }, "yes"), __jsx("button", {
        key: 2,
        className: "ui inverted red button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 17
        }
      }, "no")],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 13
      }
    });
  }

  function displayCandidates() {
    var _this2 = this;

    if (candidates == "") {
      return __jsx("div", {
        className: "card",
        style: long,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 20
        }
      }, __jsx("div", {
        className: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 29
        }
      }, "no candidates yet")));
    }

    return candidates.map(function (candidate, index) {
      return __jsx("div", {
        className: "card",
        style: long,
        key: index,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "content ui container",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "header clearing segment",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 17
        }
      }, candidate.name, " ", VoteModal(candidate.name, candidate.candidateAddr)), __jsx("div", {
        className: "header clearing segment",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 17
        }
      }, leaveElection()), __jsx("div", {
        className: "meta",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 17
        }
      }, candidate.candidateAddr), __jsx("div", {
        className: "description",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 17
        }
      }, candidate.description)));
    });
  }

  var voted;

  if (hasVoted) {
    voted = __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }
    }, __jsx("i", {
      className: "floated check icon right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 23
      }
    }), " You have already Voted");
  } else {
    voted = __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null);
  }

  function formatVote() {
    if (currentVote) {
      var startDate = new Date(currentVote.startDate * 1000);
      var endDate = new Date(currentVote.endDate * 1000);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
        className: "ui card",
        style: long,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "header container",
        style: {
          color: '#f00000'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 25
        }
      }, currentVote.title, __jsx("span", {
        className: "floated right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 29
        }
      }, voted)), __jsx("div", {
        className: "meta",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 25
        }
      }, currentVote.startDate, " to ", endDate.toUTCString()), __jsx("div", {
        className: "ui card",
        style: {
          width: '100%'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 29
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
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
          lineNumber: 178,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "ui cards",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 21
        }
      }, displayCandidates()), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 21
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Loader"], {
        active: voting,
        inline: "centered",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 21
        }
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
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
          lineNumber: 189,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "check icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 25
        }
      }), currentVote.numVotes, " Votes"), __jsx(_routes__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        route: "/elections/apply/".concat(voteAddress),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 21
        }
      }, __jsx("button", {
        className: "extra content ui inverted red button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 25
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "plus icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 34
        }
      }), " Apply as Candidate")))));
    } else {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 20
        }
      }, " loading vote ...");
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 13
    }
  }), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 13
    }
  }, formatVote()));
};

_s(Vote, "o+Lp4P7N3dd5GvtD28+vFOXGbRY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VsZWN0aW9ucy92b3RlL3ZvdGUuanMiXSwibmFtZXMiOlsiVm90ZSIsIndlYjNJbnN0YW5jZSIsInVzZVN0YXRlIiwid2ViMyIsInNldFdlYjMiLCJ2b3RlQWRkcmVzcyIsInNldFZvdGVBZGRyZXNzIiwiY3VycmVudFZvdGUiLCJzZXRDdXJyZW50Vm90ZSIsInZvdGVJbnN0YW5jZSIsInNldFZvdGVJbnN0YW5jZSIsImNhbmRpZGF0ZXMiLCJzZXRDYW5kaWRhdGVzIiwiY3VycmVudFVzZXIiLCJzZXRDdXJyZW50VXNlciIsInZvdGluZyIsInNldFZvdGluZyIsImhhc1ZvdGVkIiwic2V0SGFzVm90ZWQiLCJ1c2VFZmZlY3QiLCJpbml0V2ViMyIsImdldFdlYjMiLCJnZXRFbGVjdGlvbkFkZHJlc3MiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJwb3MiLCJpbmRleE9mIiwic2xpY2UiLCJjb25zb2xlIiwibG9nIiwic2V0dXBWb3RlIiwiZXRoIiwiQ29udHJhY3QiLCJWb3RlQ29udHJhY3QiLCJhYmkiLCJpbnN0YW5jZSIsIm1ldGhvZHMiLCJjdXJyZW50RWxlY3Rpb24iLCJjYWxsIiwiZ2V0QWNjb3VudHMiLCJjdXJyZW50IiwiZ2V0RWxlY3Rpb25Wb3RlciIsImNhbmRpZGF0ZXNDb3VudCIsImFycmF5IiwiaSIsImNhbmRpZGF0ZUFycmF5IiwicHVzaCIsImFsZXJ0IiwiZXJyb3IiLCJsb25nIiwid2lkdGgiLCJ0ZXhBbGlnbiIsIm1hcmdpbiIsImNvbG9yIiwiVm90ZU1vZGFsIiwibmFtZSIsImFkZHJlc3MiLCJ2b3RlRm9yIiwic2VuZCIsImZyb20iLCJyZWxvYWQiLCJsZWF2ZUVsZWN0aW9uIiwibGVhdmV0aGlzIiwiZGlzcGxheUNhbmRpZGF0ZXMiLCJtYXAiLCJjYW5kaWRhdGUiLCJpbmRleCIsImNhbmRpZGF0ZUFkZHIiLCJkZXNjcmlwdGlvbiIsInZvdGVkIiwiZm9ybWF0Vm90ZSIsInN0YXJ0RGF0ZSIsIkRhdGUiLCJlbmREYXRlIiwidGl0bGUiLCJ0b1VUQ1N0cmluZyIsInRleHRBbGlnbiIsIm51bVZvdGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDZixNQUFJQyxZQUFKOztBQURlLGtCQUVTQyxzREFBUSxDQUFDLEVBQUQsQ0FGakI7QUFBQSxNQUVSQyxJQUZRO0FBQUEsTUFFRkMsT0FGRTs7QUFBQSxtQkFHdUJGLHNEQUFRLENBQUMsRUFBRCxDQUgvQjtBQUFBLE1BR1JHLFdBSFE7QUFBQSxNQUdLQyxjQUhMOztBQUFBLG1CQUl1Qkosc0RBQVEsQ0FBQyxFQUFELENBSi9CO0FBQUEsTUFJUkssV0FKUTtBQUFBLE1BSUtDLGNBSkw7O0FBQUEsbUJBS3lCTixzREFBUSxDQUFDLEVBQUQsQ0FMakM7QUFBQSxNQUtSTyxZQUxRO0FBQUEsTUFLTUMsZUFMTjs7QUFBQSxtQkFNc0JSLHNEQUFRLENBQUMsRUFBRCxDQU45QjtBQUFBLE1BTVJTLFVBTlE7QUFBQSxNQU1JQyxhQU5KOztBQUFBLG1CQU93QlYsc0RBQVEsQ0FBQyxFQUFELENBUGhDO0FBQUEsTUFPUlcsV0FQUTtBQUFBLE1BT0tDLGNBUEw7O0FBQUEsbUJBUWNaLHNEQUFRLENBQUMsS0FBRCxDQVJ0QjtBQUFBLE1BUVJhLE1BUlE7QUFBQSxNQVFBQyxTQVJBOztBQUFBLG1CQVNpQmQsc0RBQVEsQ0FBQyxLQUFELENBVHpCO0FBQUEsTUFTUmUsUUFUUTtBQUFBLE1BU0VDLFdBVEY7O0FBV2ZDLHlEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0dDLFFBREg7QUFBQTtBQUFBOztBQUFBO0FBQUEsa01BQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ3lCQyx3REFBTyxFQURoQzs7QUFBQTtBQUNJcEIsNEJBREo7QUFF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QUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLO0FBQUcsaUJBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBTCx3QkFESixDQURKLENBNUJKLENBREcsQ0FBUDtBQXFDSCxLQXhDRCxNQXlDSTtBQUNBLGFBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBUDtBQUNIO0FBQ0o7O0FBRUQsU0FDSSxtRUFDSSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS21FLFVBQVUsRUFBZixDQUxKLENBREo7QUFTSCxDQWhORDs7R0FBTXhFLEk7O0tBQUFBLEk7QUFpTlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VsZWN0aW9ucy92b3RlL3ZvdGUuNzc5OThjMDNjNTI4NjdmYzVlY2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInXHJcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi8uLi8uLi9nZXRXZWIzXCI7XHJcbmltcG9ydCBWb3RlQ29udHJhY3QgZnJvbSBcIi4uLy4uLy4uL2NvbnRyYWN0cy9Wb3RlLmpzb25cIjtcclxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi8uLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgeyBNb2RhbCwgRGltbWVyLCBMb2FkZXIsIEltYWdlLCBTZWdtZW50IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmNvbnN0IFZvdGUgPSAoKSA9PiB7XHJcbiAgICB2YXIgd2ViM0luc3RhbmNlO1xyXG4gICAgY29uc3QgW3dlYjMsIHNldFdlYjNdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZvdGVBZGRyZXNzLCBzZXRWb3RlQWRkcmVzc10gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtjdXJyZW50Vm90ZSwgc2V0Q3VycmVudFZvdGVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbdm90ZUluc3RhbmNlLCBzZXRWb3RlSW5zdGFuY2VdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbY2FuZGlkYXRlcywgc2V0Q2FuZGlkYXRlcyBdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlciBdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZvdGluZywgc2V0Vm90aW5nIF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtoYXNWb3RlZCwgc2V0SGFzVm90ZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gaW5pdFdlYjMoKSB7XHJcbiAgICAgICAgICAgIHdlYjNJbnN0YW5jZSA9IGF3YWl0IGdldFdlYjMoKTtcclxuICAgICAgICAgICAgc2V0V2ViMyh3ZWIzSW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZ2V0RWxlY3Rpb25BZGRyZXNzID0gYXN5bmMoKSA9PntcclxuICAgICAgICAgICAgY29uc3QgdXJsPXdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgICAgICBjb25zdCBwb3M9dXJsLmluZGV4T2YoJ3ZvdGUnKSs1O1xyXG4gICAgICAgICAgICBzZXRWb3RlQWRkcmVzcyh1cmwuc2xpY2UocG9zKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZvdGVBZGRyZXNzKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgaW5pdFdlYjMoKTtcclxuICAgICAgICBnZXRFbGVjdGlvbkFkZHJlc3MoKTtcclxuICAgIH0sW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gc2V0dXBWb3RlKCkge1xyXG4gICAgICAgICAgICBpZih3ZWIzID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IGF3YWl0IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgICAgICAgICAgICBWb3RlQ29udHJhY3QuYWJpLFxyXG4gICAgICAgICAgICAgICAgICAgIHZvdGVBZGRyZXNzXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgc2V0Vm90ZUluc3RhbmNlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRWb3RlKGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuY3VycmVudEVsZWN0aW9uKCkuY2FsbCgpKTtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50XHJcbiAgICAgICAgICAgICAgICBbY3VycmVudF0gPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpXHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50VXNlcihjdXJyZW50KVxyXG4gICAgICAgICAgICAgICAgc2V0SGFzVm90ZWQoYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5nZXRFbGVjdGlvblZvdGVyKGN1cnJlbnQpLmNhbGwoKSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbmRpZGF0ZXNDb3VudCA9IGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuY2FuZGlkYXRlc0NvdW50KCkuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFycmF5ID0gW11cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FuZGlkYXRlc0NvdW50OyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5LnB1c2goYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5jYW5kaWRhdGVBcnJheShpKS5jYWxsKCkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRDYW5kaWRhdGVzKGFycmF5KTtcclxuICAgICAgICAgICAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cclxuICAgICAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldHVwVm90ZSgpO1xyXG4gICAgfSxbd2ViM10pXHJcblxyXG4gICAgY29uc3QgbG9uZyA9IHtcclxuICAgICAgICB3aWR0aDogJzkwJScsXHJcbiAgICAgICAgdGV4QWxpZ246J2NlbnRlcicsXHJcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICAgICAgY29sb3I6ICcjZjAwMDAwJyxcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBWb3RlTW9kYWwobmFtZSxhZGRyZXNzKSB7XHJcbiAgICAgICAgdmFyIHZvdGVGb3IgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHZvdGVJbnN0YW5jZSl7XHJcbiAgICAgICAgICAgICAgICBzZXRWb3RpbmcodHJ1ZSlcclxuICAgICAgICAgICAgICAgIGF3YWl0IHZvdGVJbnN0YW5jZS5tZXRob2RzLnZvdGVGb3IoYWRkcmVzcykuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogY3VycmVudFVzZXJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBzZXRWb3RpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFoYXNWb3RlZCl7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPXs8YnV0dG9uIGNsYXNzTmFtZT1cInVpIHJpZ2h0IGZsb2F0ZWQgaW52ZXJ0ZWQgcmVkIGJ1dHRvblwiPlZvdGU8L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiVm90ZSFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1wiYXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHZvdGUgZm9yIFwiKyBuYW1lK1wiID9cIn1cclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9ezF9IGNsYXNzTmFtZT1cInVpIGludmVydGVkIGdyZWVuIGJ1dHRvblwiIG9uQ2xpY2s9e3ZvdGVGb3J9PnllczwvYnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17Mn0gY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgcmVkIGJ1dHRvblwiID5ubzwvYnV0dG9uPl19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgcmV0dXJuICg8PjwvPilcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uICBsZWF2ZUVsZWN0aW9uKCl7XHJcbiAgICAgICAgICB2YXIgbGVhdmV0aGlzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmKHZvdGVJbnN0YW5jZSl7XHJcbiAgICAgICAgICAgICAgICAgIGF3YWl0IHZvdGVJbnN0YW5jZS5tZXRob2RzLmxlYXZlRWxlY3Rpb24oMCkuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmcm9tOiBjdXJyZW50VXNlclxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcj17PGJ1dHRvbiBjbGFzc05hbWU9XCJ1aSByaWdodCBmbG9hdGVkIGludmVydGVkIHJlZCBidXR0b25cIj5MZWF2ZSBFbGVjdGlvbjwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgIGhlYWRlcj1cIkxlYXZlIEVsZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1wiYXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIG5vIGxvbmdlciBiZSBhIGNhbmRpZGF0ZVwifVxyXG4gICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9ezF9IGNsYXNzTmFtZT1cInVpIGludmVydGVkIGdyZWVuIGJ1dHRvblwib25DbGljaz17bGVhdmV0aGlzfT55ZXM8L2J1dHRvbj4sXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17Mn0gY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgcmVkIGJ1dHRvblwiID5ubzwvYnV0dG9uPl19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZGlzcGxheUNhbmRpZGF0ZXMoKSB7XHJcbiAgICAgICAgaWYgKGNhbmRpZGF0ZXMgPT0gXCJcIil7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2ICBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e2xvbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm8gY2FuZGlkYXRlcyB5ZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjYW5kaWRhdGVzLm1hcCgoY2FuZGlkYXRlLGluZGV4KSA9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiICBzdHlsZT17bG9uZ30ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCB1aSBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyIGNsZWFyaW5nIHNlZ21lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2FuZGlkYXRlLm5hbWV9IHtWb3RlTW9kYWwoY2FuZGlkYXRlLm5hbWUsIGNhbmRpZGF0ZS5jYW5kaWRhdGVBZGRyKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgY2xlYXJpbmcgc2VnbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsZWF2ZUVsZWN0aW9uKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYW5kaWRhdGUuY2FuZGlkYXRlQWRkcn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYW5kaWRhdGUuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICB2YXIgdm90ZWQ7XHJcbiAgICBpZihoYXNWb3RlZCkge1xyXG4gICAgICAgIHZvdGVkID0gPHNwYW4+PGkgY2xhc3NOYW1lPVwiZmxvYXRlZCBjaGVjayBpY29uIHJpZ2h0XCI+PC9pPiBZb3UgaGF2ZSBhbHJlYWR5IFZvdGVkPC9zcGFuPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdm90ZWQgPSA8PjwvPlxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZvcm1hdFZvdGUoKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRWb3RlKXtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnRWb3RlLnN0YXJ0RGF0ZSAqIDEwMDApXHJcbiAgICAgICAgICAgIHZhciBlbmREYXRlID0gbmV3IERhdGUoY3VycmVudFZvdGUuZW5kRGF0ZSAqIDEwMDApXHJcbiAgICAgICAgICAgIHJldHVybiA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBjYXJkXCIgc3R5bGU9e2xvbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlciBjb250YWluZXJcIiBzdHlsZT0ge3tjb2xvcjogJyNmMDAwMDAnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFZvdGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdGVkIHJpZ2h0XCI+e3ZvdGVkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YVwiPntjdXJyZW50Vm90ZS5zdGFydERhdGV9IHRvIHtlbmREYXRlLnRvVVRDU3RyaW5nKCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgY2FyZFwiIHN0eWxlPSB7e3dpZHRoOiAnMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y3VycmVudFZvdGUuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicsIG1hcmdpbjonNTBweCcsIGNvbG9yOiAnI2YwMDAwMCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJ1aSBjYXJkc1wiPntkaXNwbGF5Q2FuZGlkYXRlcygpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2FkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXt2b3Rpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubGluZT0nY2VudGVyZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmEgY29udGVudFwiIHN0eWxlPSB7e2NvbG9yOiAnI2YwMDAwMCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiY2hlY2sgaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRWb3RlLm51bVZvdGVzfSBWb3Rlc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlID17YC9lbGVjdGlvbnMvYXBwbHkvJHt2b3RlQWRkcmVzc31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJleHRyYSBjb250ZW50IHVpIGludmVydGVkIHJlZCBidXR0b25cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpIGNsYXNzTmFtZT1cInBsdXMgaWNvblwiPjwvaT4gQXBwbHkgYXMgQ2FuZGlkYXRlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PiBsb2FkaW5nIHZvdGUgLi4uPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxoMT57Zm9ybWF0Vm90ZSgpfTwvaDE+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVm90ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==