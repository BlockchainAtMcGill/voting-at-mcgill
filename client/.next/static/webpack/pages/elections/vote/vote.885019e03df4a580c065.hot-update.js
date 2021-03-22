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
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");




var _jsxFileName = "C:\\Users\\foubroker\\Desktop\\BAM\\voting-at-mcgill-2\\client\\src\\pages\\elections\\vote\\vote.js",
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

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
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

              case 3:
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
        var instance, current, _yield$web3$eth$getAc, _yield$web3$eth$getAc2, candidatesAddresses, candidatesCount, array, i;

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
                return instance.methods.getCandidatesAddresses().call();

              case 25:
                candidatesAddresses = _context3.sent;
                _context3.next = 28;
                return instance.methods.candidatesCount().call();

              case 28:
                candidatesCount = _context3.sent;
                array = [];
                _context3.t4 = console;
                _context3.next = 33;
                return instance.methods.get_candidate(0x7c015267cC4DB24615);

              case 33:
                _context3.t5 = _context3.sent;

                _context3.t4.log.call(_context3.t4, _context3.t5);

                i = 0;

              case 36:
                if (!(i < candidatesCount)) {
                  _context3.next = 46;
                  break;
                }

                console.log(candidatesAddresses[i]);
                _context3.t6 = array;
                _context3.next = 41;
                return instance.methods.get_candidate(candidatesAddresses[i]).call();

              case 41:
                _context3.t7 = _context3.sent;

                _context3.t6.push.call(_context3.t6, _context3.t7);

              case 43:
                i++;
                _context3.next = 36;
                break;

              case 46:
                setCandidates(array); // Set web3, accounts, and contract to the state, and then proceed with an

                _context3.next = 53;
                break;

              case 49:
                _context3.prev = 49;
                _context3.t8 = _context3["catch"](2);
                // Catch any errors for any of the above operations.
                alert("Failed to load web3, accounts, or contract. Check console for details.");
                console.error(_context3.t8);

              case 53:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[2, 49]]);
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
                setLoad(!load);

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
            lineNumber: 109,
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
            lineNumber: 113,
            columnNumber: 21
          }
        }, "yes"), __jsx("button", {
          key: 2,
          className: "ui inverted red button",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 21
          }
        }, "no")],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 17
        }
      });
    } else return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null);
  }

  function leaveElection() {
    var startDate = new Date(currentVote.startDate * 1);
    var currDate = new Date();

    var leavethis = /*#__PURE__*/function () {
      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!voteInstance) {
                  _context5.next = 6;
                  break;
                }

                setVoting(true);
                _context5.next = 4;
                return voteInstance.methods.leaveElection().send({
                  from: currentUser
                });

              case 4:
                setVoting(false);
                setLoad(!load);

              case 6:
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

    if (currDate < startDate) {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
        trigger: __jsx("button", {
          className: "ui right floated inverted red button",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 28
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
            lineNumber: 140,
            columnNumber: 19
          }
        }, "yes"), __jsx("button", {
          key: 2,
          className: "ui inverted red button",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 19
          }
        }, "no")],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 15
        }
      });
    }
  }

  function applyELection() {
    var startDate = new Date(currentVote.startDate * 1);
    var currDate = new Date(); //   if(currDate<startDate){

    return __jsx(_routes__WEBPACK_IMPORTED_MODULE_8__["Link"], {
      route: "/elections/apply/".concat(voteAddress),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 11
      }
    }, __jsx("button", {
      className: "extra content ui inverted red button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 15
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 19
      }
    }, __jsx("i", {
      className: "plus icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 24
      }
    }), " Apply as Candidate"))); //   }
  }

  var data = [];
  /*
  <div className="content ui container">
      <div className="header clearing segment">
          {candidate.name} {VoteModal(candidate.name, candidate.candidateAddr)}:        {candidate.numVotes/currentVote.numVotes*100}%
        </div>
  </div>
  */

  function displayPer() {
    var _this2 = this;

    var newrow = {};

    if (candidates == "") {
      return __jsx("div", {
        className: "card",
        style: long,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 22
        }
      }, __jsx("div", {
        className: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 27
        }
      }, __jsx("div", {
        className: "header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 31
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
          lineNumber: 184,
          columnNumber: 11
        }
      }, __jsx("div", {
        style: {
          color: '#FFFFFF'
        },
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 15
        }
      }, (newrow = {}, newrow[candidate.name] = candidate.numVotes, data.push(newrow))));
    });
  }

  function chart() {
    return __jsx("div", {
      style: {
        textAlign: "center"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 9
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_10__["PieChart"], {
      width: 400,
      height: 400,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 13
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_10__["Pie"], {
      dataKey: "users",
      isAnimationActive: false,
      data: data,
      cx: 200,
      cy: 200,
      outerRadius: 80,
      fill: "#8884d8",
      label: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 22
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_10__["Tooltip"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 22
      }
    })));
  }

  function displayCandidates() {
    var _this3 = this;

    if (candidates == "") {
      return __jsx("div", {
        className: "card",
        style: long,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 20
        }
      }, __jsx("div", {
        className: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 29
        }
      }, "no candidates yet")));
    }

    return candidates.map(function (candidate, index) {
      return __jsx("div", {
        className: "card",
        style: long,
        key: index,
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "content ui container",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "header clearing segment",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 17
        }
      }, candidate.name, " ", VoteModal(candidate.name, candidate.candidateAddr)), __jsx("div", {
        className: "header clearing segment",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 17
        }
      }, leaveElection()), __jsx("div", {
        className: "meta",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 17
        }
      }, candidate.candidateAddr), __jsx("div", {
        className: "description",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
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
        lineNumber: 250,
        columnNumber: 17
      }
    }, __jsx("i", {
      className: "floated check icon right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
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
          lineNumber: 260,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
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
          lineNumber: 262,
          columnNumber: 25
        }
      }, currentVote.title, __jsx("span", {
        className: "floated right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 29
        }
      }, voted)), __jsx("div", {
        className: "meta",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
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
          lineNumber: 267,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 29
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269,
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
          lineNumber: 273,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "ui cards",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 21
        }
      }, displayCandidates()), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 21
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Loader"], {
        active: voting,
        inline: "centered",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 21
        }
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281,
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
          lineNumber: 284,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "check icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 25
        }
      }), currentVote.numVotes, " Votes"), applyELection(), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 21
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 21
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 21
        }
      }), displayPer(), chart()));
    } else {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 20
        }
      }, " loading vote ...");
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 13
    }
  }), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 13
    }
  }, formatVote()), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 13
    }
  }));
};

_s(Vote, "i9AcL4CarujMMPpGNP74S+h4ubo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VsZWN0aW9ucy92b3RlL3ZvdGUuanMiXSwibmFtZXMiOlsiVm90ZSIsIndlYjNJbnN0YW5jZSIsInVzZVN0YXRlIiwid2ViMyIsInNldFdlYjMiLCJ2b3RlQWRkcmVzcyIsInNldFZvdGVBZGRyZXNzIiwiY3VycmVudFZvdGUiLCJzZXRDdXJyZW50Vm90ZSIsInZvdGVJbnN0YW5jZSIsInNldFZvdGVJbnN0YW5jZSIsImNhbmRpZGF0ZXMiLCJzZXRDYW5kaWRhdGVzIiwiY3VycmVudFVzZXIiLCJzZXRDdXJyZW50VXNlciIsInZvdGluZyIsInNldFZvdGluZyIsImhhc1ZvdGVkIiwic2V0SGFzVm90ZWQiLCJsb2FkIiwic2V0TG9hZCIsInVzZUVmZmVjdCIsImluaXRXZWIzIiwiZ2V0V2ViMyIsImdldEVsZWN0aW9uQWRkcmVzcyIsInVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInBvcyIsImluZGV4T2YiLCJzbGljZSIsInNldHVwVm90ZSIsImV0aCIsIkNvbnRyYWN0IiwiVm90ZUNvbnRyYWN0IiwiYWJpIiwiaW5zdGFuY2UiLCJtZXRob2RzIiwiY3VycmVudEVsZWN0aW9uIiwiY2FsbCIsImdldEFjY291bnRzIiwiY3VycmVudCIsImdldEVsZWN0aW9uVm90ZXIiLCJnZXRDYW5kaWRhdGVzQWRkcmVzc2VzIiwiY2FuZGlkYXRlc0FkZHJlc3NlcyIsImNhbmRpZGF0ZXNDb3VudCIsImFycmF5IiwiY29uc29sZSIsImdldF9jYW5kaWRhdGUiLCJsb2ciLCJpIiwicHVzaCIsImFsZXJ0IiwiZXJyb3IiLCJsb25nIiwid2lkdGgiLCJ0ZXhBbGlnbiIsIm1hcmdpbiIsImNvbG9yIiwiVm90ZU1vZGFsIiwibmFtZSIsImFkZHJlc3MiLCJ2b3RlRm9yIiwic2VuZCIsImZyb20iLCJsZWF2ZUVsZWN0aW9uIiwic3RhcnREYXRlIiwiRGF0ZSIsImN1cnJEYXRlIiwibGVhdmV0aGlzIiwiYXBwbHlFTGVjdGlvbiIsImRhdGEiLCJkaXNwbGF5UGVyIiwibmV3cm93IiwibWFwIiwiY2FuZGlkYXRlIiwiaW5kZXgiLCJudW1Wb3RlcyIsImNoYXJ0IiwidGV4dEFsaWduIiwiZGlzcGxheUNhbmRpZGF0ZXMiLCJjYW5kaWRhdGVBZGRyIiwiZGVzY3JpcHRpb24iLCJ2b3RlZCIsImZvcm1hdFZvdGUiLCJlbmREYXRlIiwidGl0bGUiLCJ0b1VUQ1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFZQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBRWYsTUFBSUMsWUFBSjs7QUFGZSxrQkFHU0Msc0RBQVEsQ0FBQyxFQUFELENBSGpCO0FBQUEsTUFHUkMsSUFIUTtBQUFBLE1BR0ZDLE9BSEU7O0FBQUEsbUJBSXVCRixzREFBUSxDQUFDLEVBQUQsQ0FKL0I7QUFBQSxNQUlSRyxXQUpRO0FBQUEsTUFJS0MsY0FKTDs7QUFBQSxtQkFLdUJKLHNEQUFRLENBQUMsRUFBRCxDQUwvQjtBQUFBLE1BS1JLLFdBTFE7QUFBQSxNQUtLQyxjQUxMOztBQUFBLG1CQU15Qk4sc0RBQVEsQ0FBQyxFQUFELENBTmpDO0FBQUEsTUFNUk8sWUFOUTtBQUFBLE1BTU1DLGVBTk47O0FBQUEsbUJBT3NCUixzREFBUSxDQUFDLEVBQUQsQ0FQOUI7QUFBQSxNQU9SUyxVQVBRO0FBQUEsTUFPSUMsYUFQSjs7QUFBQSxtQkFRd0JWLHNEQUFRLENBQUMsRUFBRCxDQVJoQztBQUFBLE1BUVJXLFdBUlE7QUFBQSxNQVFLQyxjQVJMOztBQUFBLG1CQVNjWixzREFBUSxDQUFDLEtBQUQsQ0FUdEI7QUFBQSxNQVNSYSxNQVRRO0FBQUEsTUFTQUMsU0FUQTs7QUFBQSxtQkFVaUJkLHNEQUFRLENBQUMsS0FBRCxDQVZ6QjtBQUFBLE1BVVJlLFFBVlE7QUFBQSxNQVVFQyxXQVZGOztBQUFBLG1CQVdTaEIs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SixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS00sVUFBVSxFQUFmLENBTEosRUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosRUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosQ0FESjtBQWNILENBeFNEOztHQUFNckYsSTs7S0FBQUEsSTtBQXlTU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZWxlY3Rpb25zL3ZvdGUvdm90ZS44ODUwMTllMDNkZjRhNTgwYzA2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlcidcclxuaW1wb3J0IGdldFdlYjMgZnJvbSBcIi4uLy4uLy4uL2dldFdlYjNcIjtcclxuaW1wb3J0IFZvdGVDb250cmFjdCBmcm9tIFwiLi4vLi4vLi4vY29udHJhY3RzL1ZvdGUuanNvblwiO1xyXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uLy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCB7IE1vZGFsLCBEaW1tZXIsIExvYWRlciwgSW1hZ2UsIFNlZ21lbnQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IHtcclxuICBQaWVDaGFydCxcclxuICBQaWUsXHJcbiAgVG9vbHRpcCxcclxuICBCYXJDaGFydCxcclxuICBYQXhpcyxcclxuICBZQXhpcyxcclxuICBMZWdlbmQsXHJcbiAgQ2FydGVzaWFuR3JpZCxcclxuICBCYXIsXHJcbn0gZnJvbSBcInJlY2hhcnRzXCI7XHJcblxyXG5jb25zdCBWb3RlID0gKCkgPT4ge1xyXG5cclxuICAgIHZhciB3ZWIzSW5zdGFuY2U7XHJcbiAgICBjb25zdCBbd2ViMywgc2V0V2ViM10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdm90ZUFkZHJlc3MsIHNldFZvdGVBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2N1cnJlbnRWb3RlLCBzZXRDdXJyZW50Vm90ZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFt2b3RlSW5zdGFuY2UsIHNldFZvdGVJbnN0YW5jZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtjYW5kaWRhdGVzLCBzZXRDYW5kaWRhdGVzIF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyIF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdm90aW5nLCBzZXRWb3RpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2hhc1ZvdGVkLCBzZXRIYXNWb3RlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtsb2FkLCBzZXRMb2FkXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBpbml0V2ViMygpIHtcclxuICAgICAgICAgICAgd2ViM0luc3RhbmNlID0gYXdhaXQgZ2V0V2ViMygpO1xyXG4gICAgICAgICAgICBzZXRXZWIzKHdlYjNJbnN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBnZXRFbGVjdGlvbkFkZHJlc3MgPSBhc3luYygpID0+e1xyXG4gICAgICAgICAgICBjb25zdCB1cmw9d2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvcz11cmwuaW5kZXhPZigndm90ZScpKzU7XHJcbiAgICAgICAgICAgIHNldFZvdGVBZGRyZXNzKHVybC5zbGljZShwb3MpKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgaW5pdFdlYjMoKTtcclxuICAgICAgICBnZXRFbGVjdGlvbkFkZHJlc3MoKTtcclxuICAgIH0sW2xvYWRdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwVm90ZSgpIHtcclxuICAgICAgICAgICAgaWYod2ViMyA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBhd2FpdCBuZXcgd2ViMy5ldGguQ29udHJhY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgVm90ZUNvbnRyYWN0LmFiaSxcclxuICAgICAgICAgICAgICAgICAgICB2b3RlQWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHNldFZvdGVJbnN0YW5jZShpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50Vm90ZShhd2FpdCBpbnN0YW5jZS5tZXRob2RzLmN1cnJlbnRFbGVjdGlvbigpLmNhbGwoKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFxyXG4gICAgICAgICAgICAgICAgW2N1cnJlbnRdID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKVxyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFVzZXIoY3VycmVudClcclxuICAgICAgICAgICAgICAgIHNldEhhc1ZvdGVkKGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuZ2V0RWxlY3Rpb25Wb3RlcihjdXJyZW50KS5jYWxsKCkpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FuZGlkYXRlc0FkZHJlc3NlcyA9IGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuZ2V0Q2FuZGlkYXRlc0FkZHJlc3NlcygpLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbmRpZGF0ZXNDb3VudCA9IGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuY2FuZGlkYXRlc0NvdW50KCkuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFycmF5ID0gW11cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhd2FpdCBpbnN0YW5jZS5tZXRob2RzLmdldF9jYW5kaWRhdGUoMHg3YzAxNTI2N2NDNERCMjQ2MTUpKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYW5kaWRhdGVzQ291bnQ7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2FuZGlkYXRlc0FkZHJlc3Nlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaChhd2FpdCBpbnN0YW5jZS5tZXRob2RzLmdldF9jYW5kaWRhdGUoY2FuZGlkYXRlc0FkZHJlc3Nlc1tpXSkuY2FsbCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldENhbmRpZGF0ZXMoYXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgLy8gU2V0IHdlYjMsIGFjY291bnRzLCBhbmQgY29udHJhY3QgdG8gdGhlIHN0YXRlLCBhbmQgdGhlbiBwcm9jZWVkIHdpdGggYW5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxyXG4gICAgICAgICAgICBhbGVydChcclxuICAgICAgICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0dXBWb3RlKCk7XHJcbiAgICB9LFt3ZWIzXSlcclxuXHJcbiAgICBjb25zdCBsb25nID0ge1xyXG4gICAgICAgIHdpZHRoOiAnOTAlJyxcclxuICAgICAgICB0ZXhBbGlnbjonY2VudGVyJyxcclxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgICAgICBjb2xvcjogJyNmMDAwMDAnLFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFZvdGVNb2RhbChuYW1lLGFkZHJlc3MpIHtcclxuICAgICAgICB2YXIgdm90ZUZvciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgaWYodm90ZUluc3RhbmNlKXtcclxuICAgICAgICAgICAgICAgIHNldFZvdGluZyh0cnVlKVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdm90ZUluc3RhbmNlLm1ldGhvZHMudm90ZUZvcihhZGRyZXNzKS5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBjdXJyZW50VXNlclxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHNldFZvdGluZyhmYWxzZSlcclxuICAgICAgICAgICAgICAgIHNldExvYWQoIWxvYWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIWhhc1ZvdGVkKXtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9ezxidXR0b24gY2xhc3NOYW1lPVwidWkgcmlnaHQgZmxvYXRlZCBpbnZlcnRlZCByZWQgYnV0dG9uXCI+Vm90ZTwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9XCJWb3RlIVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17XCJhcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gdm90ZSBmb3IgXCIrIG5hbWUrXCIgP1wifVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17MX0gY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgZ3JlZW4gYnV0dG9uXCIgb25DbGljaz17dm90ZUZvcn0+eWVzPC9idXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXsyfSBjbGFzc05hbWU9XCJ1aSBpbnZlcnRlZCByZWQgYnV0dG9uXCIgPm5vPC9idXR0b24+XX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSByZXR1cm4gKDw+PC8+KVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gIGxlYXZlRWxlY3Rpb24oKXtcclxuICAgICAgICAgIHZhciBzdGFydERhdGUgPSBuZXcgRGF0ZShjdXJyZW50Vm90ZS5zdGFydERhdGUgKiAxKVxyXG4gICAgICAgICAgdmFyIGN1cnJEYXRlPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICB2YXIgbGVhdmV0aGlzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmKHZvdGVJbnN0YW5jZSl7XHJcbiAgICAgICAgICAgICAgICBzZXRWb3RpbmcodHJ1ZSlcclxuICAgICAgICAgICAgICAgIGF3YWl0IHZvdGVJbnN0YW5jZS5tZXRob2RzLmxlYXZlRWxlY3Rpb24oKS5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBjdXJyZW50VXNlclxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHNldFZvdGluZyhmYWxzZSlcclxuICAgICAgICAgICAgICAgIHNldExvYWQoIWxvYWQpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoY3VyckRhdGU8c3RhcnREYXRlKXtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgdHJpZ2dlcj17PGJ1dHRvbiBjbGFzc05hbWU9XCJ1aSByaWdodCBmbG9hdGVkIGludmVydGVkIHJlZCBidXR0b25cIj5MZWF2ZSBFbGVjdGlvbjwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiTGVhdmUgRWxlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50PXtcImFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBubyBsb25nZXIgYmUgYSBjYW5kaWRhdGVcIn1cclxuICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17MX0gY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgZ3JlZW4gYnV0dG9uXCJvbkNsaWNrPXtsZWF2ZXRoaXN9PnllczwvYnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9ezJ9IGNsYXNzTmFtZT1cInVpIGludmVydGVkIHJlZCBidXR0b25cIiA+bm88L2J1dHRvbj5dfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFwcGx5RUxlY3Rpb24oKXtcclxuICAgICAgdmFyIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnRWb3RlLnN0YXJ0RGF0ZSAqIDEpXHJcbiAgICAgIHZhciBjdXJyRGF0ZT0gbmV3IERhdGUoKVxyXG4gICAgLy8gICBpZihjdXJyRGF0ZTxzdGFydERhdGUpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgIDxMaW5rIHJvdXRlID17YC9lbGVjdGlvbnMvYXBwbHkvJHt2b3RlQWRkcmVzc31gfT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImV4dHJhIGNvbnRlbnQgdWkgaW52ZXJ0ZWQgcmVkIGJ1dHRvblwiID5cclxuICAgICAgICAgICAgICAgICAgPGRpdj48aSBjbGFzc05hbWU9XCJwbHVzIGljb25cIj48L2k+IEFwcGx5IGFzIENhbmRpZGF0ZTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIClcclxuICAgIC8vICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZGF0YT1bXTtcclxuICAgIC8qXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgdWkgY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgY2xlYXJpbmcgc2VnbWVudFwiPlxyXG5cclxuICAgICAgICAgIHtjYW5kaWRhdGUubmFtZX0ge1ZvdGVNb2RhbChjYW5kaWRhdGUubmFtZSwgY2FuZGlkYXRlLmNhbmRpZGF0ZUFkZHIpfTogICAgICAgIHtjYW5kaWRhdGUubnVtVm90ZXMvY3VycmVudFZvdGUubnVtVm90ZXMqMTAwfSVcclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5UGVyKCkge1xyXG4gICAgICAgICAgdmFyIG5ld3Jvdz17fTtcclxuICAgICAgICAgIGlmIChjYW5kaWRhdGVzID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgIHJldHVybiA8ZGl2ICBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e2xvbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm8gY2FuZGlkYXRlcyB5ZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZXMubWFwKChjYW5kaWRhdGUsaW5kZXgpID0+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgIHN0eWxlPXtsb25nfSBrZXk9e2luZGV4fT5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT0ge3tjb2xvcjogJyNGRkZGRkYnfX0+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5ld3Jvdz17fSxcclxuICAgICAgICAgICAgICBuZXdyb3dbY2FuZGlkYXRlLm5hbWVdPWNhbmRpZGF0ZS5udW1Wb3RlcyxcclxuICAgICAgICAgICAgICBkYXRhLnB1c2gobmV3cm93KX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjaGFydCgpe1xyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgIDxQaWVDaGFydCB3aWR0aD17NDAwfSBoZWlnaHQ9ezQwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxQaWVcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhS2V5PVwidXNlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGlzQW5pbWF0aW9uQWN0aXZlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGN4PXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgY3k9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICBvdXRlclJhZGl1cz17ODB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiM4ODg0ZDhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIC8+XHJcbiAgICAgICAgICAgIDwvUGllQ2hhcnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5Q2FuZGlkYXRlcygpIHtcclxuICAgICAgICBpZiAoY2FuZGlkYXRlcyA9PSBcIlwiKXtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgIGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17bG9uZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBubyBjYW5kaWRhdGVzIHlldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZXMubWFwKChjYW5kaWRhdGUsaW5kZXgpID0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgIHN0eWxlPXtsb25nfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IHVpIGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgY2xlYXJpbmcgc2VnbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYW5kaWRhdGUubmFtZX0ge1ZvdGVNb2RhbChjYW5kaWRhdGUubmFtZSwgY2FuZGlkYXRlLmNhbmRpZGF0ZUFkZHIpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlciBjbGVhcmluZyBzZWdtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2xlYXZlRWxlY3Rpb24oKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhbmRpZGF0ZS5jYW5kaWRhdGVBZGRyfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhbmRpZGF0ZS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIHZhciB2b3RlZDtcclxuICAgIGlmKGhhc1ZvdGVkKSB7XHJcbiAgICAgICAgdm90ZWQgPSA8c3Bhbj48aSBjbGFzc05hbWU9XCJmbG9hdGVkIGNoZWNrIGljb24gcmlnaHRcIj48L2k+IFlvdSBoYXZlIGFscmVhZHkgVm90ZWQ8L3NwYW4+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2b3RlZCA9IDw+PC8+XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZm9ybWF0Vm90ZSgpIHtcclxuICAgICAgICBpZiAoY3VycmVudFZvdGUpe1xyXG4gICAgICAgICAgICB2YXIgc3RhcnREYXRlID0gbmV3IERhdGUoY3VycmVudFZvdGUuc3RhcnREYXRlICogMSlcclxuICAgICAgICAgICAgdmFyIGVuZERhdGUgPSBuZXcgRGF0ZShjdXJyZW50Vm90ZS5lbmREYXRlICogMSlcclxuICAgICAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNhcmRcIiBzdHlsZT17bG9uZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyIGNvbnRhaW5lclwiIHN0eWxlPSB7e2NvbG9yOiAnI2YwMDAwMCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50Vm90ZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0ZWQgcmlnaHRcIj57dm90ZWR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhXCI+e3N0YXJ0RGF0ZS50b1VUQ1N0cmluZygpLnNsaWNlKDAsMTcpfSB0byB7ZW5kRGF0ZS50b1VUQ1N0cmluZygpLnNsaWNlKDAsMTcpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNhcmRcIiBzdHlsZT0ge3t3aWR0aDogJzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2N1cnJlbnRWb3RlLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInLCBtYXJnaW46JzUwcHgnLCBjb2xvcjogJyNmMDAwMDAnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwidWkgY2FyZHNcIj57ZGlzcGxheUNhbmRpZGF0ZXMoKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICA8TG9hZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17dm90aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmxpbmU9J2NlbnRlcmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4dHJhIGNvbnRlbnRcIiBzdHlsZT0ge3tjb2xvcjogJyNmMDAwMDAnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImNoZWNrIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50Vm90ZS5udW1Wb3Rlc30gVm90ZXNcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7YXBwbHlFTGVjdGlvbigpfVxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkaXNwbGF5UGVyKCl9XHJcbiAgICAgICAgICAgICAgICAgICAge2NoYXJ0KCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PiBsb2FkaW5nIHZvdGUgLi4uPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxoMT57Zm9ybWF0Vm90ZSgpfTwvaDE+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuXHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBWb3RlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9