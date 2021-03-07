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

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('true'),
      load = _useState9[0],
      setLoad = _useState9[1];

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
  }, [load]);
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
                setLoad(true);

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
            lineNumber: 91,
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
            lineNumber: 95,
            columnNumber: 21
          }
        }, "yes"), __jsx("button", {
          key: 2,
          className: "ui inverted red button",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 21
          }
        }, "no")],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
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
                  _context5.next = 3;
                  break;
                }

                _context5.next = 3;
                return voteInstance.methods.leaveElection(0).send({
                  from: currentUser
                });

              case 3:
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
      var startDate = new Date(currentVote.startDate * 1);
      var endDate = new Date(currentVote.endDate * 1);
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
      }, startDate.toUTCString().slice(0, 17), " to ", endDate.toUTCString().slice(0, 17)), __jsx("div", {
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

_s(Vote, "cRl2XEDL8ogkl1odxvwnvI/7Scs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VsZWN0aW9ucy92b3RlL3ZvdGUuanMiXSwibmFtZXMiOlsiVm90ZSIsIndlYjNJbnN0YW5jZSIsInVzZVN0YXRlIiwid2ViMyIsInNldFdlYjMiLCJ2b3RlQWRkcmVzcyIsInNldFZvdGVBZGRyZXNzIiwiY3VycmVudFZvdGUiLCJzZXRDdXJyZW50Vm90ZSIsInZvdGVJbnN0YW5jZSIsInNldFZvdGVJbnN0YW5jZSIsImNhbmRpZGF0ZXMiLCJzZXRDYW5kaWRhdGVzIiwiY3VycmVudFVzZXIiLCJzZXRDdXJyZW50VXNlciIsInZvdGluZyIsInNldFZvdGluZyIsImhhc1ZvdGVkIiwic2V0SGFzVm90ZWQiLCJsb2FkIiwic2V0TG9hZCIsInVzZUVmZmVjdCIsImluaXRXZWIzIiwiZ2V0V2ViMyIsImdldEVsZWN0aW9uQWRkcmVzcyIsInVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInBvcyIsImluZGV4T2YiLCJzbGljZSIsImNvbnNvbGUiLCJsb2ciLCJzZXR1cFZvdGUiLCJldGgiLCJDb250cmFjdCIsIlZvdGVDb250cmFjdCIsImFiaSIsImluc3RhbmNlIiwibWV0aG9kcyIsImN1cnJlbnRFbGVjdGlvbiIsImNhbGwiLCJnZXRBY2NvdW50cyIsImN1cnJlbnQiLCJnZXRFbGVjdGlvblZvdGVyIiwiY2FuZGlkYXRlc0NvdW50IiwiYXJyYXkiLCJpIiwiY2FuZGlkYXRlQXJyYXkiLCJwdXNoIiwiYWxlcnQiLCJlcnJvciIsImxvbmciLCJ3aWR0aCIsInRleEFsaWduIiwibWFyZ2luIiwiY29sb3IiLCJWb3RlTW9kYWwiLCJuYW1lIiwiYWRkcmVzcyIsInZvdGVGb3IiLCJzZW5kIiwiZnJvbSIsImxlYXZlRWxlY3Rpb24iLCJsZWF2ZXRoaXMiLCJkaXNwbGF5Q2FuZGlkYXRlcyIsIm1hcCIsImNhbmRpZGF0ZSIsImluZGV4IiwiY2FuZGlkYXRlQWRkciIsImRlc2NyaXB0aW9uIiwidm90ZWQiLCJmb3JtYXRWb3RlIiwic3RhcnREYXRlIiwiRGF0ZSIsImVuZERhdGUiLCJ0aXRsZSIsInRvVVRDU3RyaW5nIiwidGV4dEFsaWduIiwibnVtVm90ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNmLE1BQUlDLFlBQUo7O0FBRGUsa0JBRVNDLHNEQUFRLENBQUMsRUFBRCxDQUZqQjtBQUFBLE1BRVJDLElBRlE7QUFBQSxNQUVGQyxPQUZFOztBQUFBLG1CQUd1QkYsc0RBQVEsQ0FBQyxFQUFELENBSC9CO0FBQUEsTUFHUkcsV0FIUTtBQUFBLE1BR0tDLGNBSEw7O0FBQUEsbUJBSXVCSixzREFBUSxDQUFDLEVBQUQsQ0FKL0I7QUFBQSxNQUlSSyxXQUpRO0FBQUEsTUFJS0MsY0FKTDs7QUFBQSxtQkFLeUJOLHNEQUFRLENBQUMsRUFBRCxDQUxqQztBQUFBLE1BS1JPLFlBTFE7QUFBQSxNQUtNQyxlQUxOOztBQUFBLG1CQU1zQlIsc0RBQVEsQ0FBQyxFQUFELENBTjlCO0FBQUEsTUFNUlMsVUFOUTtBQUFBLE1BTUlDLGFBTko7O0FBQUEsbUJBT3dCVixzREFBUSxDQUFDLEVBQUQsQ0FQaEM7QUFBQSxNQU9SVyxXQVBRO0FBQUEsTUFPS0MsY0FQTDs7QUFBQSxtQkFRY1osc0RBQVEsQ0FBQyxLQUFELENBUnRCO0FBQUEsTUFRUmEsTUFSUTtBQUFBLE1BUUFDLFNBUkE7O0FBQUEsbUJBU2lCZCxzREFBUSxDQUFDLEtBQUQsQ0FUekI7QUFBQSxNQVNSZSxRQVRRO0FBQUEsTUFTRUMsV0FURjs7QUFBQSxtQkFVU2hCLHNEQUFRLENBQUMsTUFBRCxDQVZqQjtBQUFBLE1BVVJpQixJQVZRO0FBQUEsTUFVRkMsT0FWRTs7QUFZZkMseURBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDR0MsUUFESDtBQUFBO0FBQUE7O0FBQUE7QUFBQSxrTUFDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDeUJDLHdEQUFPLEVBRGhDOztBQUFBO0FBQ0l0Qiw0QkFESjtBQUVJRyx1QkFBTyxDQUFDSCxZQUFELENBQVA7O0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEWTtBQUFBO0FBQUE7O0FBS1osUUFBSXVCLGtCQUFrQjtBQUFBLGtNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNmQyxtQkFEZSxHQUNYQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBREw7QUFFZkMsbUJBRmUsR0FFWEosR0FBRyxDQUFDSyxPQUFKLENBQVksTUFBWixJQUFvQixDQUZUO0FBR3JCeEIsOEJBQWMsQ0FBQ21CLEdBQUcsQ0FBQ00sS0FBSixDQUFVRixHQUFWLENBQUQsQ0FBZDtBQUNBRyx1QkFBTyxDQUFDQyxHQUFSLENBQVk1QixXQUFaOztBQUpxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFsQm1CLGtCQUFrQjtBQUFBO0FBQUE7QUFBQSxPQUF0Qjs7QUFNQUYsWUFBUTtBQUNSRSxzQkFBa0I7QUFDckIsR0FiUSxFQWFQLENBQUNMLElBQUQsQ0FiTyxDQUFUO0FBZUFFLHlEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0dhLFNBREg7QUFBQTtBQUFBOztBQUFBO0FBQUEsb01BQ1o7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUNPL0IsSUFBSSxJQUFJLEVBRGY7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTStCLElBQUlBLElBQUksQ0FBQ2dDLEdBQUwsQ0FBU0MsUUFBYixDQUNuQkMsaURBQVksQ0FBQ0MsR0FETSxFQUVuQmpDLFdBRm1CLENBTi9COztBQUFBO0FBTWNrQyx3QkFOZDtBQVVRN0IsK0JBQWUsQ0FBQzZCLFFBQUQsQ0FBZjtBQVZSLCtCQVdRL0IsY0FYUjtBQUFBO0FBQUEsdUJBVzZCK0IsUUFBUSxDQUFDQyxPQUFULENBQWlCQyxlQUFqQixHQUFtQ0MsSUFBbkMsRUFYN0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFhMEJ2QyxJQUFJLENBQUNnQyxHQUFMLENBQVNRLFdBQVQsRUFiMUI7O0FBQUE7QUFBQTtBQUFBO0FBYVNDLHVCQWJUO0FBY1E5Qiw4QkFBYyxDQUFDOEIsT0FBRCxDQUFkO0FBZFIsK0JBZVExQixXQWZSO0FBQUE7QUFBQSx1QkFlMEJxQixRQUFRLENBQUNDLE9BQVQsQ0FBaUJLLGdCQUFqQixDQUFrQ0QsT0FBbEMsRUFBMkNGLElBQTNDLEVBZjFCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBZ0JzQ0gsUUFBUSxDQUFDQyxPQUFULENBQWlCTSxlQUFqQixHQUFtQ0osSUFBbkMsRUFoQnRDOztBQUFBO0FBZ0JjSSwrQkFoQmQ7QUFpQllDLHFCQWpCWixHQWlCb0IsRUFqQnBCO0FBa0JpQkMsaUJBbEJqQixHQWtCcUIsQ0FsQnJCOztBQUFBO0FBQUEsc0JBa0J3QkEsQ0FBQyxHQUFHRixlQWxCNUI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsK0JBbUJZQyxLQW5CWjtBQUFBO0FBQUEsdUJBbUI2QlIsUUFBUSxDQUFDQyxPQUFULENBQWlCUyxjQUFqQixDQUFnQ0QsQ0FBaEMsRUFBbUNOLElBQW5DLEVBbkI3Qjs7QUFBQTtBQUFBOztBQUFBLDZCQW1Ca0JRLElBbkJsQjs7QUFBQTtBQWtCNkNGLGlCQUFDLEVBbEI5QztBQUFBO0FBQUE7O0FBQUE7QUFxQlFwQyw2QkFBYSxDQUFDbUMsS0FBRCxDQUFiLENBckJSLENBc0JROztBQXRCUjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXdCSTtBQUNBSSxxQkFBSywwRUFBTDtBQUdBbkIsdUJBQU8sQ0FBQ29CLEtBQVI7O0FBNUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRFk7QUFBQTtBQUFBOztBQWdDWmxCLGFBQVM7QUFDWixHQWpDUSxFQWlDUCxDQUFDL0IsSUFBRCxDQWpDTyxDQUFUO0FBbUNBLE1BQU1rRCxJQUFJLEdBQUc7QUFDVEMsU0FBSyxFQUFFLEtBREU7QUFFVEMsWUFBUSxFQUFDLFFBRkE7QUFHVEMsVUFBTSxFQUFFLE1BSEM7QUFJVEMsU0FBSyxFQUFFO0FBSkUsR0FBYjs7QUFPQSxXQUFTQyxTQUFULENBQW1CQyxJQUFuQixFQUF3QkMsT0FBeEIsRUFBaUM7QUFDN0IsUUFBSUMsT0FBTztBQUFBLG1NQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDUHBELFlBRE87QUFBQTtBQUFBO0FBQUE7O0FBRU5PLHlCQUFTLENBQUMsSUFBRCxDQUFUO0FBRk07QUFBQSx1QkFHQVAsWUFBWSxDQUFDK0IsT0FBYixDQUFxQnFCLE9BQXJCLENBQTZCRCxPQUE3QixFQUFzQ0UsSUFBdEMsQ0FBMkM7QUFDN0NDLHNCQUFJLEVBQUVsRDtBQUR1QyxpQkFBM0MsQ0FIQTs7QUFBQTtBQU1ORyx5QkFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNBSSx1QkFBTyxDQUFDLElBQUQsQ0FBUDs7QUFQTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFQeUMsT0FBTztBQUFBO0FBQUE7QUFBQSxPQUFYOztBQVVBLFFBQUcsQ0FBQzVDLFFBQUosRUFBYTtBQUNULGFBQ0ksTUFBQyx1REFBRDtBQUNJLGVBQU8sRUFBRTtBQUFRLG1CQUFTLEVBQUMsc0NBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRGI7QUFFSSxjQUFNLEVBQUMsT0FGWDtBQUdJLGVBQU8sRUFBRSx1Q0FBc0MwQyxJQUF0QyxHQUEyQyxJQUh4RDtBQUlJLGVBQU8sRUFBRSxDQUNUO0FBQVEsYUFBRyxFQUFFLENBQWI7QUFBZ0IsbUJBQVMsRUFBQywwQkFBMUI7QUFBcUQsaUJBQU8sRUFBRUUsT0FBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUyxFQUVUO0FBQVEsYUFBRyxFQUFFLENBQWI7QUFBZ0IsbUJBQVMsRUFBQyx3QkFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGUyxDQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESjtBQVVILEtBWEQsTUFZSyxPQUFRLGtFQUFSO0FBQ1I7O0FBQ0QsV0FBVUcsYUFBVixHQUF5QjtBQUNuQixRQUFJQyxTQUFTO0FBQUEsbU1BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNUeEQsWUFEUztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQUVGQSxZQUFZLENBQUMrQixPQUFiLENBQXFCd0IsYUFBckIsQ0FBbUMsQ0FBbkMsRUFBc0NGLElBQXRDLENBQTJDO0FBQzdDQyxzQkFBSSxFQUFFbEQ7QUFEdUMsaUJBQTNDLENBRkU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVG9ELFNBQVM7QUFBQTtBQUFBO0FBQUEsT0FBYjs7QUFPQSxXQUNFLE1BQUMsdURBQUQ7QUFDSSxhQUFPLEVBQUU7QUFBUSxpQkFBUyxFQUFDLHNDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURiO0FBRUksWUFBTSxFQUFDLGdCQUZYO0FBR0ksYUFBTyxFQUFFLG1EQUhiO0FBSUksYUFBTyxFQUFFLENBQ1Q7QUFBUSxXQUFHLEVBQUUsQ0FBYjtBQUFnQixpQkFBUyxFQUFDLDBCQUExQjtBQUFvRCxlQUFPLEVBQUVBLFNBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUyxFQUVUO0FBQVEsV0FBRyxFQUFFLENBQWI7QUFBZ0IsaUJBQVMsRUFBQyx3QkFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZTLENBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGO0FBVUw7O0FBQ0QsV0FBU0MsaUJBQVQsR0FBNkI7QUFBQTs7QUFDekIsUUFBSXZELFVBQVUsSUFBSSxFQUFsQixFQUFxQjtBQUNqQixhQUFPO0FBQU0saUJBQVMsRUFBQyxNQUFoQjtBQUF1QixhQUFLLEVBQUUwQyxJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0s7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREosQ0FETCxDQUFQO0FBT0g7O0FBRUQsV0FBTzFDLFVBQVUsQ0FBQ3dELEdBQVgsQ0FBZSxVQUFDQyxTQUFELEVBQVdDLEtBQVg7QUFBQSxhQUN0QjtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUF1QixhQUFLLEVBQUVoQixJQUE5QjtBQUFvQyxXQUFHLEVBQUVnQixLQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLRCxTQUFTLENBQUNULElBRGYsT0FDc0JELFNBQVMsQ0FBQ1UsU0FBUyxDQUFDVCxJQUFYLEVBQWlCUyxTQUFTLENBQUNFLGFBQTNCLENBRC9CLENBREosRUFJSTtBQUFLLGlCQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLTixhQUFhLEVBRGxCLENBSkosRUFPSTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0tJLFNBQVMsQ0FBQ0UsYUFEZixDQVBKLEVBVUk7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLRixTQUFTLENBQUNHLFdBRGYsQ0FWSixDQURKLENBRHNCO0FBQUEsS0FBZixDQUFQO0FBb0JIOztBQUNELE1BQUlDLEtBQUo7O0FBQ0EsTUFBR3ZELFFBQUgsRUFBYTtBQUNUdUQsU0FBSyxHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBTTtBQUFHLGVBQVMsRUFBQywwQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU4sNEJBQVI7QUFDSCxHQUZELE1BRU87QUFDSEEsU0FBSyxHQUFHLGtFQUFSO0FBQ0g7O0FBRUQsV0FBU0MsVUFBVCxHQUFzQjtBQUNsQixRQUFJbEUsV0FBSixFQUFnQjtBQUNaLFVBQUltRSxTQUFTLEdBQUcsSUFBSUMsSUFBSixDQUFTcEUsV0FBVyxDQUFDbUUsU0FBWixHQUF3QixDQUFqQyxDQUFoQjtBQUNBLFVBQUlFLE9BQU8sR0FBRyxJQUFJRCxJQUFKLENBQVNwRSxXQUFXLENBQUNxRSxPQUFaLEdBQXNCLENBQS9CLENBQWQ7QUFDQSxhQUFPLG1FQUNIO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQXlCLGFBQUssRUFBRXZCLElBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQWtDLGFBQUssRUFBRztBQUFDSSxlQUFLLEVBQUU7QUFBUixTQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0tsRCxXQUFXLENBQUNzRSxLQURqQixFQUVJO0FBQU0saUJBQVMsRUFBQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWlDTCxLQUFqQyxDQUZKLENBREosRUFLSTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXVCRSxTQUFTLENBQUNJLFdBQVYsR0FBd0IvQyxLQUF4QixDQUE4QixDQUE5QixFQUFnQyxFQUFoQyxDQUF2QixVQUFnRTZDLE9BQU8sQ0FBQ0UsV0FBUixHQUFzQi9DLEtBQXRCLENBQTRCLENBQTVCLEVBQThCLEVBQTlCLENBQWhFLENBTEosRUFNSTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUF5QixhQUFLLEVBQUc7QUFBQ3VCLGVBQUssRUFBRTtBQUFSLFNBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJL0MsV0FBVyxDQUFDZ0UsV0FBaEIsQ0FEQSxDQURKLENBTkosQ0FESixFQWFJO0FBQUssYUFBSyxFQUFFO0FBQUNRLG1CQUFTLEVBQUMsUUFBWDtBQUFxQnZCLGdCQUFNLEVBQUMsTUFBNUI7QUFBb0NDLGVBQUssRUFBRTtBQUEzQyxTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQTtBQUFLLGlCQUFTLEVBQUUsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUE0QlMsaUJBQWlCLEVBQTdDLENBREEsRUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkEsRUFHQSxNQUFDLHdEQUFEO0FBQ0ksY0FBTSxFQUFFbkQsTUFEWjtBQUVJLGNBQU0sRUFBQyxVQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFIQSxDQWJKLEVBcUJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFyQkosRUF3Qkk7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBK0IsYUFBSyxFQUFHO0FBQUMwQyxlQUFLLEVBQUU7QUFBUixTQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBRyxpQkFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLEVBRUtsRCxXQUFXLENBQUN5RSxRQUZqQixXQXhCSixFQTRCSSxNQUFDLDRDQUFEO0FBQU0sYUFBSyw2QkFBdUIzRSxXQUF2QixDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFRLGlCQUFTLEVBQUMsc0NBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUs7QUFBRyxpQkFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFMLHdCQURKLENBREosQ0E1QkosQ0FERyxDQUFQO0FBcUNILEtBeENELE1BeUNJO0FBQ0EsYUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUFQO0FBQ0g7QUFDSjs7QUFFRCxTQUNJLG1FQUNJLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLb0UsVUFBVSxFQUFmLENBTEosQ0FESjtBQVNILENBaE5EOztHQUFNekUsSTs7S0FBQUEsSTtBQWlOU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZWxlY3Rpb25zL3ZvdGUvdm90ZS4xNWY2OTk2ZmQyNzZlYzczNmUxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlcidcclxuaW1wb3J0IGdldFdlYjMgZnJvbSBcIi4uLy4uLy4uL2dldFdlYjNcIjtcclxuaW1wb3J0IFZvdGVDb250cmFjdCBmcm9tIFwiLi4vLi4vLi4vY29udHJhY3RzL1ZvdGUuanNvblwiO1xyXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uLy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCB7IE1vZGFsLCBEaW1tZXIsIExvYWRlciwgSW1hZ2UsIFNlZ21lbnQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuY29uc3QgVm90ZSA9ICgpID0+IHtcclxuICAgIHZhciB3ZWIzSW5zdGFuY2U7XHJcbiAgICBjb25zdCBbd2ViMywgc2V0V2ViM10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdm90ZUFkZHJlc3MsIHNldFZvdGVBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2N1cnJlbnRWb3RlLCBzZXRDdXJyZW50Vm90ZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFt2b3RlSW5zdGFuY2UsIHNldFZvdGVJbnN0YW5jZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtjYW5kaWRhdGVzLCBzZXRDYW5kaWRhdGVzIF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyIF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdm90aW5nLCBzZXRWb3RpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2hhc1ZvdGVkLCBzZXRIYXNWb3RlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtsb2FkLCBzZXRMb2FkXSA9IHVzZVN0YXRlKCd0cnVlJylcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBpbml0V2ViMygpIHtcclxuICAgICAgICAgICAgd2ViM0luc3RhbmNlID0gYXdhaXQgZ2V0V2ViMygpO1xyXG4gICAgICAgICAgICBzZXRXZWIzKHdlYjNJbnN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBnZXRFbGVjdGlvbkFkZHJlc3MgPSBhc3luYygpID0+e1xyXG4gICAgICAgICAgICBjb25zdCB1cmw9d2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvcz11cmwuaW5kZXhPZigndm90ZScpKzU7XHJcbiAgICAgICAgICAgIHNldFZvdGVBZGRyZXNzKHVybC5zbGljZShwb3MpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codm90ZUFkZHJlc3MpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICBpbml0V2ViMygpO1xyXG4gICAgICAgIGdldEVsZWN0aW9uQWRkcmVzcygpO1xyXG4gICAgfSxbbG9hZF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gc2V0dXBWb3RlKCkge1xyXG4gICAgICAgICAgICBpZih3ZWIzID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IGF3YWl0IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgICAgICAgICAgICBWb3RlQ29udHJhY3QuYWJpLFxyXG4gICAgICAgICAgICAgICAgICAgIHZvdGVBZGRyZXNzXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgc2V0Vm90ZUluc3RhbmNlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRWb3RlKGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuY3VycmVudEVsZWN0aW9uKCkuY2FsbCgpKTtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50XHJcbiAgICAgICAgICAgICAgICBbY3VycmVudF0gPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpXHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50VXNlcihjdXJyZW50KVxyXG4gICAgICAgICAgICAgICAgc2V0SGFzVm90ZWQoYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5nZXRFbGVjdGlvblZvdGVyKGN1cnJlbnQpLmNhbGwoKSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbmRpZGF0ZXNDb3VudCA9IGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuY2FuZGlkYXRlc0NvdW50KCkuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFycmF5ID0gW11cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FuZGlkYXRlc0NvdW50OyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5LnB1c2goYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5jYW5kaWRhdGVBcnJheShpKS5jYWxsKCkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRDYW5kaWRhdGVzKGFycmF5KTtcclxuICAgICAgICAgICAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cclxuICAgICAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldHVwVm90ZSgpO1xyXG4gICAgfSxbd2ViM10pXHJcblxyXG4gICAgY29uc3QgbG9uZyA9IHtcclxuICAgICAgICB3aWR0aDogJzkwJScsXHJcbiAgICAgICAgdGV4QWxpZ246J2NlbnRlcicsXHJcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICAgICAgY29sb3I6ICcjZjAwMDAwJyxcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBWb3RlTW9kYWwobmFtZSxhZGRyZXNzKSB7XHJcbiAgICAgICAgdmFyIHZvdGVGb3IgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHZvdGVJbnN0YW5jZSl7XHJcbiAgICAgICAgICAgICAgICBzZXRWb3RpbmcodHJ1ZSlcclxuICAgICAgICAgICAgICAgIGF3YWl0IHZvdGVJbnN0YW5jZS5tZXRob2RzLnZvdGVGb3IoYWRkcmVzcykuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogY3VycmVudFVzZXJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBzZXRWb3RpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkKHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIWhhc1ZvdGVkKXtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9ezxidXR0b24gY2xhc3NOYW1lPVwidWkgcmlnaHQgZmxvYXRlZCBpbnZlcnRlZCByZWQgYnV0dG9uXCI+Vm90ZTwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9XCJWb3RlIVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17XCJhcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gdm90ZSBmb3IgXCIrIG5hbWUrXCIgP1wifVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17MX0gY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgZ3JlZW4gYnV0dG9uXCIgb25DbGljaz17dm90ZUZvcn0+eWVzPC9idXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXsyfSBjbGFzc05hbWU9XCJ1aSBpbnZlcnRlZCByZWQgYnV0dG9uXCIgPm5vPC9idXR0b24+XX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSByZXR1cm4gKDw+PC8+KVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gIGxlYXZlRWxlY3Rpb24oKXtcclxuICAgICAgICAgIHZhciBsZWF2ZXRoaXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYodm90ZUluc3RhbmNlKXtcclxuICAgICAgICAgICAgICAgICAgYXdhaXQgdm90ZUluc3RhbmNlLm1ldGhvZHMubGVhdmVFbGVjdGlvbigwKS5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgIGZyb206IGN1cnJlbnRVc2VyXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyPXs8YnV0dG9uIGNsYXNzTmFtZT1cInVpIHJpZ2h0IGZsb2F0ZWQgaW52ZXJ0ZWQgcmVkIGJ1dHRvblwiPkxlYXZlIEVsZWN0aW9uPC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPVwiTGVhdmUgRWxlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgY29udGVudD17XCJhcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbm8gbG9uZ2VyIGJlIGEgY2FuZGlkYXRlXCJ9XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17MX0gY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgZ3JlZW4gYnV0dG9uXCJvbkNsaWNrPXtsZWF2ZXRoaXN9PnllczwvYnV0dG9uPixcclxuICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXsyfSBjbGFzc05hbWU9XCJ1aSBpbnZlcnRlZCByZWQgYnV0dG9uXCIgPm5vPC9idXR0b24+XX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5Q2FuZGlkYXRlcygpIHtcclxuICAgICAgICBpZiAoY2FuZGlkYXRlcyA9PSBcIlwiKXtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgIGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17bG9uZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBubyBjYW5kaWRhdGVzIHlldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZXMubWFwKChjYW5kaWRhdGUsaW5kZXgpID0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgIHN0eWxlPXtsb25nfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IHVpIGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgY2xlYXJpbmcgc2VnbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYW5kaWRhdGUubmFtZX0ge1ZvdGVNb2RhbChjYW5kaWRhdGUubmFtZSwgY2FuZGlkYXRlLmNhbmRpZGF0ZUFkZHIpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlciBjbGVhcmluZyBzZWdtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2xlYXZlRWxlY3Rpb24oKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhbmRpZGF0ZS5jYW5kaWRhdGVBZGRyfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhbmRpZGF0ZS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIHZhciB2b3RlZDtcclxuICAgIGlmKGhhc1ZvdGVkKSB7XHJcbiAgICAgICAgdm90ZWQgPSA8c3Bhbj48aSBjbGFzc05hbWU9XCJmbG9hdGVkIGNoZWNrIGljb24gcmlnaHRcIj48L2k+IFlvdSBoYXZlIGFscmVhZHkgVm90ZWQ8L3NwYW4+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2b3RlZCA9IDw+PC8+XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZm9ybWF0Vm90ZSgpIHtcclxuICAgICAgICBpZiAoY3VycmVudFZvdGUpe1xyXG4gICAgICAgICAgICB2YXIgc3RhcnREYXRlID0gbmV3IERhdGUoY3VycmVudFZvdGUuc3RhcnREYXRlICogMSlcclxuICAgICAgICAgICAgdmFyIGVuZERhdGUgPSBuZXcgRGF0ZShjdXJyZW50Vm90ZS5lbmREYXRlICogMSlcclxuICAgICAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNhcmRcIiBzdHlsZT17bG9uZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyIGNvbnRhaW5lclwiIHN0eWxlPSB7e2NvbG9yOiAnI2YwMDAwMCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50Vm90ZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0ZWQgcmlnaHRcIj57dm90ZWR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhXCI+e3N0YXJ0RGF0ZS50b1VUQ1N0cmluZygpLnNsaWNlKDAsMTcpfSB0byB7ZW5kRGF0ZS50b1VUQ1N0cmluZygpLnNsaWNlKDAsMTcpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNhcmRcIiBzdHlsZT0ge3t3aWR0aDogJzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2N1cnJlbnRWb3RlLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInLCBtYXJnaW46JzUwcHgnLCBjb2xvcjogJyNmMDAwMDAnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwidWkgY2FyZHNcIj57ZGlzcGxheUNhbmRpZGF0ZXMoKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICA8TG9hZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17dm90aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmxpbmU9J2NlbnRlcmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4dHJhIGNvbnRlbnRcIiBzdHlsZT0ge3tjb2xvcjogJyNmMDAwMDAnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImNoZWNrIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50Vm90ZS5udW1Wb3Rlc30gVm90ZXNcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZSA9e2AvZWxlY3Rpb25zL2FwcGx5LyR7dm90ZUFkZHJlc3N9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZXh0cmEgY29udGVudCB1aSBpbnZlcnRlZCByZWQgYnV0dG9uXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aSBjbGFzc05hbWU9XCJwbHVzIGljb25cIj48L2k+IEFwcGx5IGFzIENhbmRpZGF0ZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gPGRpdj4gbG9hZGluZyB2b3RlIC4uLjwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8aDE+e2Zvcm1hdFZvdGUoKX08L2gxPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFZvdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=