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
      elections = _useState4[0],
      setElections = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      petitions = _useState5[0],
      setPetitions = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      currentUser = _useState6[0],
      setCurrentUser = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      youVoted = _useState7[0],
      setYouVoted = _useState7[1];

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
              return instance.methods.getElectionVoter(currentUser).call();

            case 16:
              _context4.t4 = _context4.sent;
              return _context4.abrupt("return", [_context4.t3, _context4.t4]);

            case 20:
              _context4.next = 22;
              return instance.methods.currentPetition().call();

            case 22:
              _context4.t5 = _context4.sent;
              _context4.next = 25;
              return instance.methods.getElectionVoter(currentUser).call();

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
        var tempElections, tempVoted, tempPetitions;
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
                tempElections = [];
                tempVoted = [];
                tempPetitions = [];
                _context5.next = 7;
                return votesAddresses.forEach(function (address) {
                  displayInfo(address).then(function (voteInfo) {
                    tempElections.push(voteInfo[0]);
                    tempVoted.push(voteInfo[1]);
                  });
                });

              case 7:
                setTimeout(function () {
                  setElections(tempElections);
                  setYouVoted(tempVoted);
                  setPetitions(tempPetitions);
                }, 1000);

              case 8:
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
  }, [votesAddresses]); // useEffect(()=> {
  //   if(renderedAddresses) {
  //     console.log(renderedAddresses);
  //     console.log(youVoted);
  //   }
  // },[renderedAddresses])

  function displayElectionsList() {
    var _this = this;

    if (web3 == "") {
      return "waiting for votes to display...";
    } else if (votesAddresses == "") {
      return "no votes to display";
    }

    return elections ? elections.map(function (vote, index) {
      return __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        className: "ui button",
        route: "/elections/vote/".concat(votesAddresses[index]),
        key: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "ui card",
        style: styles.card,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "card",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 15
        }
      }, __jsx("span", {
        className: "right floated",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
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
          lineNumber: 160,
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
          lineNumber: 161,
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
          lineNumber: 161,
          columnNumber: 99
        }
      })), __jsx("div", {
        className: "content",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "header",
        style: styles.title,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 19
        }
      }, vote.title, " -", new Date() < new Date(vote.startDate * 1) ? "starts on " + new Date(vote.startDate * 1).toUTCString().slice(0, 17) : new Date() >= new Date(vote.startDate * 1) && new Date() <= new Date(vote.endDate * 1) ? "ends on " + new Date(vote.endDate * 1).toUTCString().slice(0, 17) : "archived: " + new Date(vote.endDate * 1).toUTCString().slice(0, 17))), __jsx("div", {
        className: "content",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 17
        }
      }, __jsx("span", {
        className: "right floated",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 19
        }
      }, __jsx("span", {
        style: styles.access,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 21
        }
      }, "access vote"), __jsx("i", {
        className: "angle right icon huge",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
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
          lineNumber: 182,
          columnNumber: 19
        }
      }, __jsx("i", {
        className: "checkmark icon small",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
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
          lineNumber: 186,
          columnNumber: 19
        }
      }, vote.description)))));
    }) : __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 11
      }
    }, " no votes found ");
  }

  function displayPetitionsList() {
    var _this2 = this;

    if (web3 == "") {
      return "waiting for votes to display...";
    } else if (votesAddresses == "") {
      return "no votes to display";
    }

    return petitions ? petitions.map(function (vote, index) {
      return __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        className: "ui button",
        route: "/petitions/vote/".concat(votesAddresses[index]),
        key: index,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "ui card",
        style: styles.card,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "card",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 17
        }
      }, __jsx("span", {
        className: "right floated",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 19
        }
      }, vote.numVotes, __jsx("i", {
        className: "user icon",
        style: {
          margin: 3
        },
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 21
        }
      }), youVoted[index] ? __jsx("i", {
        className: "check circle icon",
        style: {
          margin: 3
        },
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 40
        }
      }) : __jsx("i", {
        className: "circle outline icon",
        style: {
          margin: 3
        },
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 101
        }
      })), __jsx("div", {
        className: "content",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "header",
        style: styles.title,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 21
        }
      }, vote.title, " -", new Date() < new Date(vote.startDate * 1) ? "starts on " + new Date(vote.startDate * 1).toUTCString().slice(0, 17) : new Date() >= new Date(vote.startDate * 1) && new Date() <= new Date(vote.endDate * 1) ? "ends on " + new Date(vote.endDate * 1).toUTCString().slice(0, 17) : "archived: " + new Date(vote.endDate * 1).toUTCString().slice(0, 17))), __jsx("div", {
        className: "content",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: "right floated",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 21
        }
      }, __jsx("span", {
        style: styles.access,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 23
        }
      }, "access vote"), __jsx("i", {
        className: "angle right icon huge",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 23
        }
      })), __jsx("div", {
        className: "ui sub header",
        style: {
          marginLeft: 10
        },
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "checkmark icon small",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 23
        }
      }), "petition"), __jsx("div", {
        className: "ui feed",
        style: {
          marginLeft: 10
        },
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 21
        }
      }, vote.description)))));
    }) : __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 13
      }
    }, " no votes found ");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_8__["Header"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 9
    }
  }, displayElectionsList()), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 9
    }
  }, displayPetitionsList())));
}

_s(App, "ggR2TDYvTRnU4ysrGAUzrg0Km6I=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJzdHlsZXMiLCJjYXJkIiwid2lkdGgiLCJtYXJnaW4iLCJjb2xvciIsIm1heEhlaWdodCIsIm1pbkhlaWdodCIsImN1cnNvciIsInRpdGxlIiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiYWNjZXNzIiwicG9zaXRpb24iLCJoZWlnaHQiLCJBcHAiLCJ1c2VTdGF0ZSIsIndlYjMiLCJzZXRXZWIzIiwidm90ZXNBZGRyZXNzZXMiLCJzZXRWb3Rlc0FkZHJlc3NlcyIsImNvbnRyYWN0Iiwic2V0Q29udHJhY3QiLCJlbGVjdGlvbnMiLCJzZXRFbGVjdGlvbnMiLCJwZXRpdGlvbnMiLCJzZXRQZXRpdGlvbnMiLCJjdXJyZW50VXNlciIsInNldEN1cnJlbnRVc2VyIiwieW91Vm90ZWQiLCJzZXRZb3VWb3RlZCIsInVzZUVmZmVjdCIsImluaXRXZWIzIiwiY29uc29sZSIsImxvZyIsImdldFdlYjMiLCJ3ZWIzSW5zdGFuY2UiLCJzZXR1cCIsImV0aCIsIm5ldCIsImdldElkIiwibmV0d29ya0lkIiwiZGVwbG95ZWROZXR3b3JrIiwiVm90ZUZhY3RvcnlDb250cmFjdCIsIm5ldHdvcmtzIiwiaW5zdGFuY2UiLCJDb250cmFjdCIsImFiaSIsImFkZHJlc3MiLCJnZXRBY2NvdW50cyIsInVzZXIiLCJhbGVydCIsImVycm9yIiwiZGlzcGxheVZvdGVzIiwibWV0aG9kcyIsImdldERlcGxveWVkVm90ZXMiLCJjYWxsIiwicmVzcG9uc2UiLCJkaXNwbGF5SW5mbyIsIlZvdGVDb250cmFjdCIsInR5cGVPZlZvdGUiLCJjdXJyZW50RWxlY3Rpb24iLCJnZXRFbGVjdGlvblZvdGVyIiwiY3VycmVudFBldGl0aW9uIiwicmVuZGVyVm90ZXMiLCJ0ZW1wRWxlY3Rpb25zIiwidGVtcFZvdGVkIiwidGVtcFBldGl0aW9ucyIsImZvckVhY2giLCJ0aGVuIiwidm90ZUluZm8iLCJwdXNoIiwic2V0VGltZW91dCIsImRpc3BsYXlFbGVjdGlvbnNMaXN0IiwibWFwIiwidm90ZSIsImluZGV4IiwibnVtVm90ZXMiLCJEYXRlIiwic3RhcnREYXRlIiwidG9VVENTdHJpbmciLCJzbGljZSIsImVuZERhdGUiLCJkZXNjcmlwdGlvbiIsImRpc3BsYXlQZXRpdGlvbnNMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBQSxtQkFBTyxDQUFDLGtGQUFELENBQVA7O0FBR0EsSUFBTUMsTUFBTSxHQUFHO0FBQ2JDLE1BQUksRUFBRTtBQUNKQyxTQUFLLEVBQUUsS0FESDtBQUVKQyxVQUFNLEVBQUUsTUFGSjtBQUdKQyxTQUFLLEVBQUUsU0FISDtBQUlKQyxhQUFTLEVBQUUsR0FKUDtBQUtKQyxhQUFTLEVBQUUsR0FMUDtBQU1KQyxVQUFNLEVBQUU7QUFOSixHQURPO0FBU2JDLE9BQUssRUFBRztBQUNOQyxZQUFRLEVBQUUsRUFESjtBQUVOTCxTQUFLLEVBQUUsU0FGRDtBQUdOTSxjQUFVLEVBQUUsRUFITjtBQUlOQyxhQUFTLEVBQUUsRUFKTDtBQUtOQyxnQkFBWSxFQUFDO0FBTFAsR0FUSztBQWdCYkMsUUFBTSxFQUFDO0FBQ0xDLFlBQVEsRUFBQyxVQURKO0FBRUxDLFVBQU0sRUFBQyxFQUZGO0FBR0xOLFlBQVEsRUFBRTtBQUhMO0FBaEJNLENBQWY7O0FBdUJBLFNBQVNPLEdBQVQsR0FBZTtBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFDLEVBQUQsQ0FEbkI7QUFBQSxNQUNOQyxJQURNO0FBQUEsTUFDQUMsT0FEQTs7QUFBQSxtQkFFK0JGLHNEQUFRLENBQUMsRUFBRCxDQUZ2QztBQUFBLE1BRU5HLGNBRk07QUFBQSxNQUVVQyxpQkFGVjs7QUFBQSxtQkFHbUJKLHNEQUFRLENBQUMsRUFBRCxDQUgzQjtBQUFBLE1B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LFNBQW1Ea0UsSUFBSSxDQUFDUSxXQUF4RCxDQVhGLENBbEJGLENBREYsQ0FERixDQUQyQjtBQUFBLEtBQWQsQ0FBSCxHQXNDVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQXRDTjtBQXVDQzs7QUFFTCxTQUNFLG1FQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUU7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPVixvQkFBb0IsRUFBM0IsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT1csb0JBQW9CLEVBQTNCLENBRkYsQ0FORixDQURGO0FBYUQ7O0dBN05RckUsRzs7S0FBQUEsRztBQStOTUEsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTE5Yjc2NThjNDJkNTBlZjU5MmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVm90ZUZhY3RvcnlDb250cmFjdCBmcm9tIFwiLi4vY29udHJhY3RzL1ZvdGVGYWN0b3J5Lmpzb25cIjtcclxuaW1wb3J0IFZvdGVDb250cmFjdCBmcm9tIFwiLi4vY29udHJhY3RzL1ZvdGUuanNvblwiO1xyXG5pbXBvcnQgZ2V0V2ViMyBmcm9tIFwiLi4vZ2V0V2ViM1wiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi9yb3V0ZXMnXHJcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xyXG4vLyBDb21tb25KU1xyXG5yZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIpO1xyXG5cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjYXJkOiB7XHJcbiAgICB3aWR0aDogJzkwJScsXHJcbiAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgIGNvbG9yOiAnI2YwMDAwMCcsXHJcbiAgICBtYXhIZWlnaHQ6IDIwMCxcclxuICAgIG1pbkhlaWdodDogMjAwLFxyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICB9LFxyXG4gIHRpdGxlIDoge1xyXG4gICAgZm9udFNpemU6IDM2LFxyXG4gICAgY29sb3I6ICcjRUQxQjJGJyxcclxuICAgIG1hcmdpbkxlZnQ6IDEwLFxyXG4gICAgbWFyZ2luVG9wOiAxNSxcclxuICAgIG1hcmdpbkJvdHRvbToxNVxyXG4gIH0sXHJcbiAgYWNjZXNzOntcclxuICAgIHBvc2l0aW9uOlwicmVsYXRpdmVcIixcclxuICAgIGhlaWdodDozNixcclxuICAgIGZvbnRTaXplOiAxNixcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgY29uc3QgW3dlYjMsIHNldFdlYjNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt2b3Rlc0FkZHJlc3Nlcywgc2V0Vm90ZXNBZGRyZXNzZXNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlbGVjdGlvbnMsIHNldEVsZWN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3BldGl0aW9ucywgc2V0UGV0aXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbeW91Vm90ZWQsIHNldFlvdVZvdGVkXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsvLyBnZXQgd2ViM1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdFdlYjMoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdpbml0aWFsaXppbmcgd2ViMycpO1xyXG4gICAgICBjb25zdCB3ZWIzSW5zdGFuY2UgPSBhd2FpdCBnZXRXZWIzKCk7XHJcbiAgICAgIHNldFdlYjMod2ViM0luc3RhbmNlKVxyXG4gICAgfVxyXG4gICAgaW5pdFdlYjMoKTtcclxuICB9LFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsvLyBnZXQgRmFjdG9yeSBjb250cmFjdFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2V0dXAoKSB7XHJcbiAgICAgIGlmKHdlYjMgPT0gXCJcIikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd1bmFibGUgdG8gZ2V0IGZhY3RvcnknKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXHJcbiAgICAgICAgY29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViMy5ldGgubmV0LmdldElkKCk7XHJcbiAgICAgICAgY29uc3QgZGVwbG95ZWROZXR3b3JrID0gVm90ZUZhY3RvcnlDb250cmFjdC5uZXR3b3Jrc1tuZXR3b3JrSWRdO1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgICAgICAgVm90ZUZhY3RvcnlDb250cmFjdC5hYmksXHJcbiAgICAgICAgICBkZXBsb3llZE5ldHdvcmsgJiYgZGVwbG95ZWROZXR3b3JrLmFkZHJlc3MsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRDb250cmFjdChpbnN0YW5jZSk7XHJcbiAgICAgICAgY29uc3QgW3VzZXJdID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICBzZXRDdXJyZW50VXNlcih1c2VyKTtcclxuICAgIFxyXG4gICAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxyXG4gICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICAgc2V0dXAoKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ29rJylcclxuICB9LFt3ZWIzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+IHsvL2Rpc3BsYXkgYXZhaWxhYmxlIHZvdGVzIGFkZHJlc3Nlc1xyXG4gICAgdmFyIGRpc3BsYXlWb3RlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYoY29udHJhY3QgPT0gJycpe1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0RGVwbG95ZWRWb3RlcygpLmNhbGwoKTtcclxuICAgICAgLy8gVXBkYXRlIHN0YXRlIHdpdGggdGhlIHJlc3VsdC5cclxuICAgICAgc2V0Vm90ZXNBZGRyZXNzZXMocmVzcG9uc2UpO1xyXG4gICAgfTtcclxuICAgIGRpc3BsYXlWb3RlcygpO1xyXG4gIH0sW2NvbnRyYWN0XSk7XHJcblxyXG4gIHZhciBkaXNwbGF5SW5mbyA9IGFzeW5jIChhZGRyZXNzKSA9PiB7IFxyXG4gICAgdHJ5IHsvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICBWb3RlQ29udHJhY3QuYWJpLFxyXG4gICAgICAgIGFkZHJlc3NcclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS5sb2coYXdhaXQgaW5zdGFuY2UubWV0aG9kcy50eXBlT2ZWb3RlKCkuY2FsbCgpKVxyXG4gICAgICBpZigoYXdhaXQgaW5zdGFuY2UubWV0aG9kcy50eXBlT2ZWb3RlKCkuY2FsbCgpKSA9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFthd2FpdCBpbnN0YW5jZS5tZXRob2RzLmN1cnJlbnRFbGVjdGlvbigpLmNhbGwoKSwgYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5nZXRFbGVjdGlvblZvdGVyKGN1cnJlbnRVc2VyKS5jYWxsKCldO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgcmV0dXJuIFthd2FpdCBpbnN0YW5jZS5tZXRob2RzLmN1cnJlbnRQZXRpdGlvbigpLmNhbGwoKSwgYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5nZXRFbGVjdGlvblZvdGVyKGN1cnJlbnRVc2VyKS5jYWxsKCldXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+IHsvL3JlbmRlciB2b3Rlc1xyXG4gICAgdmFyIHJlbmRlclZvdGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmICghdm90ZXNBZGRyZXNzZXMgfHwgIWN1cnJlbnRVc2VyKXtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHRlbXBFbGVjdGlvbnMgID0gW107XHJcbiAgICAgICAgdmFyIHRlbXBWb3RlZCA9IFtdO1xyXG4gICAgICAgIHZhciB0ZW1wUGV0aXRpb25zID0gW107XHJcbiAgICAgICAgYXdhaXQgdm90ZXNBZGRyZXNzZXMuZm9yRWFjaChhZGRyZXNzID0+IHtcclxuICAgICAgICAgICAgZGlzcGxheUluZm8oYWRkcmVzcykudGhlbih2b3RlSW5mbyA9PiB7XHJcbiAgICAgICAgICAgICAgdGVtcEVsZWN0aW9ucy5wdXNoKHZvdGVJbmZvWzBdKTtcclxuICAgICAgICAgICAgICB0ZW1wVm90ZWQucHVzaCh2b3RlSW5mb1sxXSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBzZXRFbGVjdGlvbnModGVtcEVsZWN0aW9ucyk7XHJcbiAgICAgICAgICAgIHNldFlvdVZvdGVkKHRlbXBWb3RlZCk7XHJcbiAgICAgICAgICAgIHNldFBldGl0aW9ucyh0ZW1wUGV0aXRpb25zKTtcclxuICAgICAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgICAgfVxyXG4gICAgcmVuZGVyVm90ZXMoKTtcclxuICB9LFt2b3Rlc0FkZHJlc3Nlc10pO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgLy8gICBpZihyZW5kZXJlZEFkZHJlc3Nlcykge1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhyZW5kZXJlZEFkZHJlc3Nlcyk7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKHlvdVZvdGVkKTtcclxuICAvLyAgIH1cclxuICAvLyB9LFtyZW5kZXJlZEFkZHJlc3Nlc10pXHJcblxyXG4gIGZ1bmN0aW9uIGRpc3BsYXlFbGVjdGlvbnNMaXN0KCkge1xyXG4gICAgaWYod2ViMyA9PSBcIlwiKXtcclxuICAgICAgcmV0dXJuIFwid2FpdGluZyBmb3Igdm90ZXMgdG8gZGlzcGxheS4uLlwiXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHZvdGVzQWRkcmVzc2VzID09IFwiXCIpe1xyXG4gICAgICByZXR1cm4gXCJubyB2b3RlcyB0byBkaXNwbGF5XCJcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZWxlY3Rpb25zID8gZWxlY3Rpb25zLm1hcCgodm90ZSwgaW5kZXgpID0+IFxyXG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwidWkgYnV0dG9uXCIgcm91dGUgPXtgL2VsZWN0aW9ucy92b3RlLyR7dm90ZXNBZGRyZXNzZXNbaW5kZXhdfWB9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNhcmRcIiBzdHlsZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHQgZmxvYXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICB7dm90ZS5udW1Wb3Rlc31cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidXNlciBpY29uXCIgc3R5bGU9e3ttYXJnaW46IDN9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgIHt5b3VWb3RlZFtpbmRleF0gPyA8aSBjbGFzc05hbWU9XCJjaGVjayBjaXJjbGUgaWNvblwiIHN0eWxlPXt7bWFyZ2luOiAzfX0+PC9pPiAgOiA8aSBjbGFzc05hbWU9XCJjaXJjbGUgb3V0bGluZSBpY29uXCIgc3R5bGU9e3ttYXJnaW46IDN9fT48L2k+fVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIiBzdHlsZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHt2b3RlLnRpdGxlfSAtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyBuZXcgRGF0ZSgpIDwgbmV3IERhdGUodm90ZS5zdGFydERhdGUgKiAxKSA/IFwic3RhcnRzIG9uIFwiICsgbmV3IERhdGUodm90ZS5zdGFydERhdGUgKiAxKS50b1VUQ1N0cmluZygpLnNsaWNlKDAsMTcpIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAobmV3IERhdGUoKSA+PSBuZXcgRGF0ZSh2b3RlLnN0YXJ0RGF0ZSAqIDEpICYmIG5ldyBEYXRlKCkgPD0gbmV3IERhdGUodm90ZS5lbmREYXRlICogMSkgPyBcImVuZHMgb24gXCIgKyBuZXcgRGF0ZSh2b3RlLmVuZERhdGUgKiAxKS50b1VUQ1N0cmluZygpLnNsaWNlKDAsMTcpOlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFwiYXJjaGl2ZWQ6IFwiICsgbmV3IERhdGUodm90ZS5lbmREYXRlICogMSkudG9VVENTdHJpbmcoKS5zbGljZSgwLDE3KVxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodCBmbG9hdGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5hY2Nlc3N9ID5hY2Nlc3Mgdm90ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJhbmdsZSByaWdodCBpY29uIGh1Z2VcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc3ViIGhlYWRlclwiIHN0eWxlPXt7bWFyZ2luTGVmdDoxMH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImNoZWNrbWFyayBpY29uIHNtYWxsXCI+PC9pPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlY3Rpb24gXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGZlZWRcIiBzdHlsZT17e21hcmdpbkxlZnQ6MTB9fT57IHZvdGUuZGVzY3JpcHRpb24gfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgKSA6IDxkaXY+IG5vIHZvdGVzIGZvdW5kIDwvZGl2PlxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlQZXRpdGlvbnNMaXN0KCkge1xyXG4gICAgICBpZih3ZWIzID09IFwiXCIpe1xyXG4gICAgICAgIHJldHVybiBcIndhaXRpbmcgZm9yIHZvdGVzIHRvIGRpc3BsYXkuLi5cIlxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYodm90ZXNBZGRyZXNzZXMgPT0gXCJcIil7XHJcbiAgICAgICAgcmV0dXJuIFwibm8gdm90ZXMgdG8gZGlzcGxheVwiXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgcmV0dXJuIHBldGl0aW9ucyA/IHBldGl0aW9ucy5tYXAoKHZvdGUsIGluZGV4KSA9PiBcclxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwidWkgYnV0dG9uXCIgcm91dGUgPXtgL3BldGl0aW9ucy92b3RlLyR7dm90ZXNBZGRyZXNzZXNbaW5kZXhdfWB9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgY2FyZFwiIHN0eWxlPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHQgZmxvYXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt2b3RlLm51bVZvdGVzfVxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInVzZXIgaWNvblwiIHN0eWxlPXt7bWFyZ2luOiAzfX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIHt5b3VWb3RlZFtpbmRleF0gPyA8aSBjbGFzc05hbWU9XCJjaGVjayBjaXJjbGUgaWNvblwiIHN0eWxlPXt7bWFyZ2luOiAzfX0+PC9pPiAgOiA8aSBjbGFzc05hbWU9XCJjaXJjbGUgb3V0bGluZSBpY29uXCIgc3R5bGU9e3ttYXJnaW46IDN9fT48L2k+fVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCIgc3R5bGU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt2b3RlLnRpdGxlfSAtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG5ldyBEYXRlKCkgPCBuZXcgRGF0ZSh2b3RlLnN0YXJ0RGF0ZSAqIDEpID8gXCJzdGFydHMgb24gXCIgKyBuZXcgRGF0ZSh2b3RlLnN0YXJ0RGF0ZSAqIDEpLnRvVVRDU3RyaW5nKCkuc2xpY2UoMCwxNykgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKG5ldyBEYXRlKCkgPj0gbmV3IERhdGUodm90ZS5zdGFydERhdGUgKiAxKSAmJiBuZXcgRGF0ZSgpIDw9IG5ldyBEYXRlKHZvdGUuZW5kRGF0ZSAqIDEpID8gXCJlbmRzIG9uIFwiICsgbmV3IERhdGUodm90ZS5lbmREYXRlICogMSkudG9VVENTdHJpbmcoKS5zbGljZSgwLDE3KTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJjaGl2ZWQ6IFwiICsgbmV3IERhdGUodm90ZS5lbmREYXRlICogMSkudG9VVENTdHJpbmcoKS5zbGljZSgwLDE3KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0IGZsb2F0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMuYWNjZXNzfSA+YWNjZXNzIHZvdGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJhbmdsZSByaWdodCBpY29uIGh1Z2VcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc3ViIGhlYWRlclwiIHN0eWxlPXt7bWFyZ2luTGVmdDoxMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiY2hlY2ttYXJrIGljb24gc21hbGxcIj48L2k+ICBcclxuICAgICAgICAgICAgICAgICAgICAgIHBldGl0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBmZWVkXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OjEwfX0+eyB2b3RlLmRlc2NyaXB0aW9uIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkgOiA8ZGl2PiBubyB2b3RlcyBmb3VuZCA8L2Rpdj5cclxuICAgICAgfVxyXG5cclxuICByZXR1cm4oIFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgPGRpdj57IGRpc3BsYXlFbGVjdGlvbnNMaXN0KCkgfTwvZGl2PlxyXG4gICAgICAgIDxkaXY+eyBkaXNwbGF5UGV0aXRpb25zTGlzdCgpIH08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=