webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
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
      votes = _useState4[0],
      setVotes = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      currentUser = _useState5[0],
      setCurrentUser = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      youVoted = _useState6[0],
      setYouVoted = _useState6[1];

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
        var networkId, deployedNetwork, instance, _yield$web3$eth$getAc, _yield$web3$eth$getAc2, user;

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
                setContract(instance);
                _context2.next = 12;
                return web3.eth.getAccounts();

              case 12:
                _yield$web3$eth$getAc = _context2.sent;
                _yield$web3$eth$getAc2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_yield$web3$eth$getAc, 1);
                user = _yield$web3$eth$getAc2[0];
                setCurrentUser(user); // Set web3, accounts, and contract to the state, and then proceed with an

                _context2.next = 22;
                break;

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](3);
                // Catch any errors for any of the above operations.
                alert("Failed to load web3, accounts, or contract. Check console for details.");
                console.error(_context2.t0);

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 18]]);
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
              _context4.prev = 0;
              // Get the contract instance.
              instance = new web3.eth.Contract(_contracts_Vote_json__WEBPACK_IMPORTED_MODULE_6__.abi, address);
              _context4.t0 = console;
              _context4.next = 5;
              return instance.methods.typeOfVote().call();

            case 5:
              _context4.t1 = _context4.sent;

              _context4.t0.log.call(_context4.t0, _context4.t1);

              _context4.next = 9;
              return instance.methods.typeOfVote().call();

            case 9:
              _context4.t2 = _context4.sent;

              if (!(_context4.t2 == 0)) {
                _context4.next = 20;
                break;
              }

              _context4.next = 13;
              return instance.methods.currentElection().call();

            case 13:
              _context4.t3 = _context4.sent;
              _context4.next = 16;
              return instance.methods.getVoted(currentUser).call();

            case 16:
              _context4.t4 = _context4.sent;
              return _context4.abrupt("return", [_context4.t3, _context4.t4]);

            case 20:
              _context4.next = 22;
              return instance.methods.currentPetition().call();

            case 22:
              _context4.t5 = _context4.sent;
              _context4.next = 25;
              return instance.methods.getVoted(currentUser).call();

            case 25:
              _context4.t6 = _context4.sent;
              return _context4.abrupt("return", [_context4.t5, _context4.t6]);

            case 27:
              _context4.next = 32;
              break;

            case 29:
              _context4.prev = 29;
              _context4.t7 = _context4["catch"](0);
              console.error(_context4.t7);

            case 32:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 29]]);
    }));

    return function displayInfo(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    //render votes
    var renderVotes = /*#__PURE__*/function () {
      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
        var tempVotes, tempVoted;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(!votesAddresses || !currentUser)) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return");

              case 2:
                tempVotes = [];
                tempVoted = [];
                _context5.next = 6;
                return votesAddresses.forEach(function (address) {
                  displayInfo(address).then(function (voteInfo) {
                    tempVotes.push(voteInfo[0]);
                    tempVoted.push(voteInfo[1]);
                  });
                });

              case 6:
                setTimeout(function () {
                  setVotes(tempVotes);
                  setYouVoted(tempVoted);
                }, 1000);

              case 7:
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
    if (votes) {
      console.log(votes);
      console.log(youVoted);
    }
  }, [votes]);

  function displayElectionsList() {
    var _this = this;

    if (web3 == "") {
      return "waiting for votes to display...";
    } else if (votesAddresses == "") {
      return "no votes to display";
    }

    return votes ? votes.map(function (vote, index) {
      return __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        className: "ui button",
        route: "/".concat(vote.typeOfElection ? "elections" : "petitions", "/vote/").concat(votesAddresses[index]),
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
          lineNumber: 154,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "card",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 15
        }
      }, __jsx("span", {
        className: "right floated",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
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
          lineNumber: 158,
          columnNumber: 19
        }
      }), youVoted[index] ? __jsx("i", {
        className: "check circle icon",
        style: {
          margin: 3
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 38
        }
      }) : __jsx("i", {
        className: "circle outline icon",
        style: {
          margin: 3
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 99
        }
      })), __jsx("div", {
        className: "content",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "header",
        style: styles.title,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 19
        }
      }, vote.title, " -", new Date() < new Date(vote.startDate * 1) ? "starts on " + new Date(vote.startDate * 1).toUTCString().slice(0, 17) : new Date() >= new Date(vote.startDate * 1) && new Date() <= new Date(vote.endDate * 1) ? "ends on " + new Date(vote.endDate * 1).toUTCString().slice(0, 17) : "archived: " + new Date(vote.endDate * 1).toUTCString().slice(0, 17))), __jsx("div", {
        className: "content",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 17
        }
      }, __jsx("span", {
        className: "right floated",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 19
        }
      }, __jsx("span", {
        style: styles.access,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 21
        }
      }, "access vote"), __jsx("i", {
        className: "angle right icon huge",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
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
          lineNumber: 180,
          columnNumber: 19
        }
      }, __jsx("i", {
        className: "checkmark icon small",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 21
        }
      }), vote.typeOfElection ? "Election" : "Petition"), __jsx("div", {
        className: "ui feed",
        style: {
          marginLeft: 10
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 19
        }
      }, vote.description)))));
    }) : __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 11
      }
    }, " no votes found ");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_8__["Header"], {
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
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 9
    }
  }, displayElectionsList())));
}

_s(App, "PdvYLxAQwE78i0cPqldLkWHW6eU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJzdHlsZXMiLCJjYXJkIiwid2lkdGgiLCJtYXJnaW4iLCJjb2xvciIsIm1heEhlaWdodCIsIm1pbkhlaWdodCIsImN1cnNvciIsInRpdGxlIiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiYWNjZXNzIiwicG9zaXRpb24iLCJoZWlnaHQiLCJBcHAiLCJ1c2VTdGF0ZSIsIndlYjMiLCJzZXRXZWIzIiwidm90ZXNBZGRyZXNzZXMiLCJzZXRWb3Rlc0FkZHJlc3NlcyIsImNvbnRyYWN0Iiwic2V0Q29udHJhY3QiLCJ2b3RlcyIsInNldFZvdGVzIiwiY3VycmVudFVzZXIiLCJzZXRDdXJyZW50VXNlciIsInlvdVZvdGVkIiwic2V0WW91Vm90ZWQiLCJ1c2VFZmZlY3QiLCJpbml0V2ViMyIsImNvbnNvbGUiLCJsb2ciLCJnZXRXZWIzIiwid2ViM0luc3RhbmNlIiwic2V0dXAiLCJldGgiLCJuZXQiLCJnZXRJZCIsIm5ldHdvcmtJZCIsImRlcGxveWVkTmV0d29yayIsIlZvdGVGYWN0b3J5Q29udHJhY3QiLCJuZXR3b3JrcyIsImluc3RhbmNlIiwiQ29udHJhY3QiLCJhYmkiLCJhZGRyZXNzIiwiZ2V0QWNjb3VudHMiLCJ1c2VyIiwiYWxlcnQiLCJlcnJvciIsImRpc3BsYXlWb3RlcyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZFZvdGVzIiwiY2FsbCIsInJlc3BvbnNlIiwiZGlzcGxheUluZm8iLCJWb3RlQ29udHJhY3QiLCJ0eXBlT2ZWb3RlIiwiY3VycmVudEVsZWN0aW9uIiwiZ2V0Vm90ZWQiLCJjdXJyZW50UGV0aXRpb24iLCJyZW5kZXJWb3RlcyIsInRlbXBWb3RlcyIsInRlbXBWb3RlZCIsImZvckVhY2giLCJ0aGVuIiwidm90ZUluZm8iLCJwdXNoIiwic2V0VGltZW91dCIsImRpc3BsYXlFbGVjdGlvbnNMaXN0IiwibWFwIiwidm90ZSIsImluZGV4IiwidHlwZU9mRWxlY3Rpb24iLCJudW1Wb3RlcyIsIkRhdGUiLCJzdGFydERhdGUiLCJ0b1VUQ1N0cmluZyIsInNsaWNlIiwiZW5kRGF0ZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBQSxtQkFBTyxDQUFDLGtGQUFELENBQVA7O0FBR0EsSUFBTUMsTUFBTSxHQUFHO0FBQ2JDLE1BQUksRUFBRTtBQUNKQyxTQUFLLEVBQUUsS0FESDtBQUVKQyxVQUFNLEVBQUUsTUFGSjtBQUdKQyxTQUFLLEVBQUUsU0FISDtBQUlKQyxhQUFTLEVBQUUsR0FKUDtBQUtKQyxhQUFTLEVBQUUsR0FMUDtBQU1KQyxVQUFNLEVBQUU7QUFOSixHQURPO0FBU2JDLE9BQUssRUFBRztBQUNOQyxZQUFRLEVBQUUsRUFESjtBQUVOTCxTQUFLLEVBQUUsU0FGRDtBQUdOTSxjQUFVLEVBQUUsRUFITjtBQUlOQyxhQUFTLEVBQUUsRUFKTDtBQUtOQyxnQkFBWSxFQUFDO0FBTFAsR0FUSztBQWdCYkMsUUFBTSxFQUFDO0FBQ0xDLFlBQVEsRUFBQyxVQURKO0FBRUxDLFVBQU0sRUFBQyxFQUZGO0FBR0xOLFlBQVEsRUFBRTtBQUhMO0FBaEJNLENBQWY7O0FBdUJBLFNBQVNPLEdBQVQsR0FBZTtBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFDLEVBQUQsQ0FEbkI7QUFBQSxNQUNOQyxJQURNO0FBQUEsTUFDQUMsT0FEQTs7QUFBQSxtQkFFK0JGLHNEQUFRLENBQUMsRUFBRCxDQUZ2QztBQUFBLE1BRU5HLGNBRk07QUFBQSxNQUVVQyxpQkFGVjs7QUFBQSxtQkFHbUJKLHNEQUFRLENBQUMsRUFBRCxDQUgzQjtBQUFBLE1BR05LLFFBSE07QUFBQSxNQUdJQyxXQUhKOztBQUFBLG1CQUlhTixzREFBUSxDQUFDLEVBQUQsQ0FKckI7QUFBQSxNQUlO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NWM0ZDc5NGQ5MDM0OGZlZWQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFZvdGVGYWN0b3J5Q29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlRmFjdG9yeS5qc29uXCI7XHJcbmltcG9ydCBWb3RlQ29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlLmpzb25cIjtcclxuaW1wb3J0IGdldFdlYjMgZnJvbSBcIi4uL2dldFdlYjNcIjtcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vcm91dGVzJ1xyXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcclxuLy8gQ29tbW9uSlNcclxucmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiKTtcclxuXHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY2FyZDoge1xyXG4gICAgd2lkdGg6ICc5MCUnLFxyXG4gICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICBjb2xvcjogJyNmMDAwMDAnLFxyXG4gICAgbWF4SGVpZ2h0OiAyMDAsXHJcbiAgICBtaW5IZWlnaHQ6IDIwMCxcclxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgfSxcclxuICB0aXRsZSA6IHtcclxuICAgIGZvbnRTaXplOiAzNixcclxuICAgIGNvbG9yOiAnI0VEMUIyRicsXHJcbiAgICBtYXJnaW5MZWZ0OiAxMCxcclxuICAgIG1hcmdpblRvcDogMTUsXHJcbiAgICBtYXJnaW5Cb3R0b206MTVcclxuICB9LFxyXG4gIGFjY2Vzczp7XHJcbiAgICBwb3NpdGlvbjpcInJlbGF0aXZlXCIsXHJcbiAgICBoZWlnaHQ6MzYsXHJcbiAgICBmb250U2l6ZTogMTYsXHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IFt3ZWIzLCBzZXRXZWIzXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdm90ZXNBZGRyZXNzZXMsIHNldFZvdGVzQWRkcmVzc2VzXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29udHJhY3QsIHNldENvbnRyYWN0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdm90ZXMsIHNldFZvdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbeW91Vm90ZWQsIHNldFlvdVZvdGVkXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsvLyBnZXQgd2ViM1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdFdlYjMoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdpbml0aWFsaXppbmcgd2ViMycpO1xyXG4gICAgICBjb25zdCB3ZWIzSW5zdGFuY2UgPSBhd2FpdCBnZXRXZWIzKCk7XHJcbiAgICAgIHNldFdlYjMod2ViM0luc3RhbmNlKVxyXG4gICAgfVxyXG4gICAgaW5pdFdlYjMoKTtcclxuICB9LFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsvLyBnZXQgRmFjdG9yeSBjb250cmFjdFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2V0dXAoKSB7XHJcbiAgICAgIGlmKHdlYjMgPT0gXCJcIikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd1bmFibGUgdG8gZ2V0IGZhY3RvcnknKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXHJcbiAgICAgICAgY29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViMy5ldGgubmV0LmdldElkKCk7XHJcbiAgICAgICAgY29uc3QgZGVwbG95ZWROZXR3b3JrID0gVm90ZUZhY3RvcnlDb250cmFjdC5uZXR3b3Jrc1tuZXR3b3JrSWRdO1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgICAgICAgVm90ZUZhY3RvcnlDb250cmFjdC5hYmksXHJcbiAgICAgICAgICBkZXBsb3llZE5ldHdvcmsgJiYgZGVwbG95ZWROZXR3b3JrLmFkZHJlc3MsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRDb250cmFjdChpbnN0YW5jZSk7XHJcbiAgICAgICAgY29uc3QgW3VzZXJdID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICBzZXRDdXJyZW50VXNlcih1c2VyKTtcclxuICAgIFxyXG4gICAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxyXG4gICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICAgc2V0dXAoKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ29rJylcclxuICB9LFt3ZWIzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+IHsvL2Rpc3BsYXkgYXZhaWxhYmxlIHZvdGVzIGFkZHJlc3Nlc1xyXG4gICAgdmFyIGRpc3BsYXlWb3RlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYoY29udHJhY3QgPT0gJycpe1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0RGVwbG95ZWRWb3RlcygpLmNhbGwoKTtcclxuICAgICAgLy8gVXBkYXRlIHN0YXRlIHdpdGggdGhlIHJlc3VsdC5cclxuICAgICAgc2V0Vm90ZXNBZGRyZXNzZXMocmVzcG9uc2UpO1xyXG4gICAgfTtcclxuICAgIGRpc3BsYXlWb3RlcygpO1xyXG4gIH0sW2NvbnRyYWN0XSk7XHJcblxyXG4gIHZhciBkaXNwbGF5SW5mbyA9IGFzeW5jIChhZGRyZXNzKSA9PiB7IFxyXG4gICAgdHJ5IHsvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICBWb3RlQ29udHJhY3QuYWJpLFxyXG4gICAgICAgIGFkZHJlc3NcclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS5sb2coYXdhaXQgaW5zdGFuY2UubWV0aG9kcy50eXBlT2ZWb3RlKCkuY2FsbCgpKVxyXG4gICAgICBpZigoYXdhaXQgaW5zdGFuY2UubWV0aG9kcy50eXBlT2ZWb3RlKCkuY2FsbCgpKSA9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFthd2FpdCBpbnN0YW5jZS5tZXRob2RzLmN1cnJlbnRFbGVjdGlvbigpLmNhbGwoKSwgYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5nZXRWb3RlZChjdXJyZW50VXNlcikuY2FsbCgpXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIHJldHVybiBbYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5jdXJyZW50UGV0aXRpb24oKS5jYWxsKCksIGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuZ2V0Vm90ZWQoY3VycmVudFVzZXIpLmNhbGwoKV1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT4gey8vcmVuZGVyIHZvdGVzXHJcbiAgICB2YXIgcmVuZGVyVm90ZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF2b3Rlc0FkZHJlc3NlcyB8fCAhY3VycmVudFVzZXIpe1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdGVtcFZvdGVzICA9IFtdO1xyXG4gICAgICAgIHZhciB0ZW1wVm90ZWQgPSBbXTtcclxuICAgICAgICBhd2FpdCB2b3Rlc0FkZHJlc3Nlcy5mb3JFYWNoKGFkZHJlc3MgPT4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5SW5mbyhhZGRyZXNzKS50aGVuKHZvdGVJbmZvID0+IHtcclxuICAgICAgICAgICAgICB0ZW1wVm90ZXMucHVzaCh2b3RlSW5mb1swXSk7XHJcbiAgICAgICAgICAgICAgdGVtcFZvdGVkLnB1c2godm90ZUluZm9bMV0pO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgc2V0Vm90ZXModGVtcFZvdGVzKTtcclxuICAgICAgICAgICAgc2V0WW91Vm90ZWQodGVtcFZvdGVkKTtcclxuICAgICAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgICAgfVxyXG4gICAgcmVuZGVyVm90ZXMoKTtcclxuICB9LFt2b3Rlc0FkZHJlc3Nlc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICBpZih2b3Rlcykge1xyXG4gICAgICBjb25zb2xlLmxvZyh2b3RlcylcclxuICAgICAgY29uc29sZS5sb2coeW91Vm90ZWQpO1xyXG4gICAgfVxyXG4gIH0sW3ZvdGVzXSlcclxuXHJcbiAgZnVuY3Rpb24gZGlzcGxheUVsZWN0aW9uc0xpc3QoKSB7XHJcbiAgICBpZih3ZWIzID09IFwiXCIpe1xyXG4gICAgICByZXR1cm4gXCJ3YWl0aW5nIGZvciB2b3RlcyB0byBkaXNwbGF5Li4uXCJcclxuICAgIH1cclxuICAgIGVsc2UgaWYodm90ZXNBZGRyZXNzZXMgPT0gXCJcIil7XHJcbiAgICAgIHJldHVybiBcIm5vIHZvdGVzIHRvIGRpc3BsYXlcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZvdGVzID8gdm90ZXMubWFwKCh2b3RlLCBpbmRleCkgPT4gXHJcbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJ1aSBidXR0b25cIiByb3V0ZSA9e2AvJHt2b3RlLnR5cGVPZkVsZWN0aW9uID8gXCJlbGVjdGlvbnNcIiA6IFwicGV0aXRpb25zXCIgfS92b3RlLyR7dm90ZXNBZGRyZXNzZXNbaW5kZXhdfWB9IGtleT17aW5kZXh9PlxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNhcmRcIiBzdHlsZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHQgZmxvYXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICB7dm90ZS5udW1Wb3Rlc31cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidXNlciBpY29uXCIgc3R5bGU9e3ttYXJnaW46IDN9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgIHt5b3VWb3RlZFtpbmRleF0gPyA8aSBjbGFzc05hbWU9XCJjaGVjayBjaXJjbGUgaWNvblwiIHN0eWxlPXt7bWFyZ2luOiAzfX0+PC9pPiAgOiA8aSBjbGFzc05hbWU9XCJjaXJjbGUgb3V0bGluZSBpY29uXCIgc3R5bGU9e3ttYXJnaW46IDN9fT48L2k+fVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIiBzdHlsZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHt2b3RlLnRpdGxlfSAtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyBuZXcgRGF0ZSgpIDwgbmV3IERhdGUodm90ZS5zdGFydERhdGUgKiAxKSA/IFwic3RhcnRzIG9uIFwiICsgbmV3IERhdGUodm90ZS5zdGFydERhdGUgKiAxKS50b1VUQ1N0cmluZygpLnNsaWNlKDAsMTcpIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAobmV3IERhdGUoKSA+PSBuZXcgRGF0ZSh2b3RlLnN0YXJ0RGF0ZSAqIDEpICYmIG5ldyBEYXRlKCkgPD0gbmV3IERhdGUodm90ZS5lbmREYXRlICogMSkgPyBcImVuZHMgb24gXCIgKyBuZXcgRGF0ZSh2b3RlLmVuZERhdGUgKiAxKS50b1VUQ1N0cmluZygpLnNsaWNlKDAsMTcpOlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFwiYXJjaGl2ZWQ6IFwiICsgbmV3IERhdGUodm90ZS5lbmREYXRlICogMSkudG9VVENTdHJpbmcoKS5zbGljZSgwLDE3KVxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodCBmbG9hdGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5hY2Nlc3N9ID5hY2Nlc3Mgdm90ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJhbmdsZSByaWdodCBpY29uIGh1Z2VcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc3ViIGhlYWRlclwiIHN0eWxlPXt7bWFyZ2luTGVmdDoxMH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImNoZWNrbWFyayBpY29uIHNtYWxsXCI+PC9pPiAgXHJcbiAgICAgICAgICAgICAgICAgICAge3ZvdGUudHlwZU9mRWxlY3Rpb24gPyAgXCJFbGVjdGlvblwiIDogXCJQZXRpdGlvblwiIH1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZmVlZFwiIHN0eWxlPXt7bWFyZ2luTGVmdDoxMH19Pnsgdm90ZS5kZXNjcmlwdGlvbiB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICApIDogPGRpdj4gbm8gdm90ZXMgZm91bmQgPC9kaXY+XHJcbiAgICB9XHJcblxyXG4gIHJldHVybiggXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICA8ZGl2PnsgZGlzcGxheUVsZWN0aW9uc0xpc3QoKSB9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9