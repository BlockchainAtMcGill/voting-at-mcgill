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
        var instance, current, _yield$web3$eth$getAc, _yield$web3$eth$getAc2, candidatesAddresses, array, i;

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
                // const candidatesCount = await instance.methods.candidatesCount().call();
                array = [];
                i = 0;

              case 28:
                if (!(i < candidatesAddresses.length)) {
                  _context3.next = 42;
                  break;
                }

                _context3.t4 = console;
                _context3.next = 32;
                return instance.methods.get_candidate(candidatesAddresses[i]);

              case 32:
                _context3.t5 = _context3.sent;

                _context3.t4.log.call(_context3.t4, _context3.t5);

                _context3.t6 = array;
                _context3.next = 37;
                return instance.methods.get_candidate(candidatesAddresses[i]);

              case 37:
                _context3.t7 = _context3.sent;

                _context3.t6.push.call(_context3.t6, _context3.t7);

              case 39:
                i++;
                _context3.next = 28;
                break;

              case 42:
                setCandidates(array);
                console.log(array); // Set web3, accounts, and contract to the state, and then proceed with an

                _context3.next = 50;
                break;

              case 46:
                _context3.prev = 46;
                _context3.t8 = _context3["catch"](2);
                // Catch any errors for any of the above operations.
                alert("Failed to load web3, accounts, or contract. Check console for details.");
                console.error(_context3.t8);

              case 50:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[2, 46]]);
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
            lineNumber: 108,
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
            lineNumber: 112,
            columnNumber: 21
          }
        }, "yes"), __jsx("button", {
          key: 2,
          className: "ui inverted red button",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 21
          }
        }, "no")],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
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
            lineNumber: 135,
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
            lineNumber: 139,
            columnNumber: 19
          }
        }, "yes"), __jsx("button", {
          key: 2,
          className: "ui inverted red button",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 19
          }
        }, "no")],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
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
        lineNumber: 150,
        columnNumber: 11
      }
    }, __jsx("button", {
      className: "extra content ui inverted red button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 15
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 19
      }
    }, __jsx("i", {
      className: "plus icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
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
          lineNumber: 171,
          columnNumber: 22
        }
      }, __jsx("div", {
        className: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 27
        }
      }, __jsx("div", {
        className: "header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
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
          lineNumber: 183,
          columnNumber: 11
        }
      }, __jsx("div", {
        style: {
          color: '#FFFFFF'
        },
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 15
        }
      }, (newrow = {}, newrow[candidate.name] = candidate.numVotes, data.push(newrow))));
    });
  }

  console.log(data);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VsZWN0aW9ucy92b3RlL3ZvdGUuanMiXSwibmFtZXMiOlsiVm90ZSIsIndlYjNJbnN0YW5jZSIsInVzZVN0YXRlIiwid2ViMyIsInNldFdlYjMiLCJ2b3RlQWRkcmVzcyIsInNldFZvdGVBZGRyZXNzIiwiY3VycmVudFZvdGUiLCJzZXRDdXJyZW50Vm90ZSIsInZvdGVJbnN0YW5jZSIsInNldFZvdGVJbnN0YW5jZSIsImNhbmRpZGF0ZXMiLCJzZXRDYW5kaWRhdGVzIiwiY3VycmVudFVzZXIiLCJzZXRDdXJyZW50VXNlciIsInZvdGluZyIsInNldFZvdGluZyIsImhhc1ZvdGVkIiwic2V0SGFzVm90ZWQiLCJsb2FkIiwic2V0TG9hZCIsInVzZUVmZmVjdCIsImluaXRXZWIzIiwiZ2V0V2ViMyIsImdldEVsZWN0aW9uQWRkcmVzcyIsInVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInBvcyIsImluZGV4T2YiLCJzbGljZSIsImNvbnNvbGUiLCJsb2ciLCJzZXR1cFZvdGUiLCJldGgiLCJDb250cmFjdCIsIlZvdGVDb250cmFjdCIsImFiaSIsImluc3RhbmNlIiwibWV0aG9kcyIsImN1cnJlbnRFbGVjdGlvbiIsImNhbGwiLCJnZXRBY2NvdW50cyIsImN1cnJlbnQiLCJnZXRFbGVjdGlvblZvdGVyIiwiZ2V0Q2FuZGlkYXRlc0FkZHJlc3NlcyIsImNhbmRpZGF0ZXNBZGRyZXNzZXMiLCJhcnJheSIsImkiLCJsZW5ndGgiLCJnZXRfY2FuZGlkYXRlIiwicHVzaCIsImFsZXJ0IiwiZXJyb3IiLCJsb25nIiwid2lkdGgiLCJ0ZXhBbGlnbiIsIm1hcmdpbiIsImNvbG9yIiwiVm90ZU1vZGFsIiwibmFtZSIsImFkZHJlc3MiLCJ2b3RlRm9yIiwic2VuZCIsImZyb20iLCJsZWF2ZUVsZWN0aW9uIiwic3RhcnREYXRlIiwiRGF0ZSIsImN1cnJEYXRlIiwibGVhdmV0aGlzIiwiYXBwbHlFTGVjdGlvbiIsImRhdGEiLCJkaXNwbGF5UGVyIiwibmV3cm93IiwibWFwIiwiY2FuZGlkYXRlIiwiaW5kZXgiLCJudW1Wb3RlcyIsImNoYXJ0IiwidGV4dEFsaWduIiwiZGlzcGxheUNhbmRpZGF0ZXMiLCJjYW5kaWRhdGVBZGRyIiwiZGVzY3JpcHRpb24iLCJ2b3RlZCIsImZvcm1hdFZvdGUiLCJlbmREYXRlIiwidGl0bGUiLCJ0b1VUQ1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFZQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBRWYsTUFBSUMsWUFBSjs7QUFGZSxrQkFHU0Msc0RBQVEsQ0FBQyxFQUFELENBSGpCO0FBQUEsTUFHUkMsSUFIUTtBQUFBLE1BR0ZDLE9BSEU7O0FBQUEsbUJBSXVCRixzREFBUSxDQUFDLEVBQUQsQ0FKL0I7QUFBQSxNQUlSRyxXQUpRO0FBQUEsTUFJS0MsY0FKTDs7QUFBQSxtQkFLdUJKLHNEQUFRLENBQUMsRUFBRCxDQUwvQjtBQUFBLE1BS1JLLFdBTFE7QUFBQSxNQUtLQyxjQUxMOztBQUFBLG1CQU15Qk4sc0RBQVEsQ0FBQyxFQUFELENBTmpDO0FBQUEsTUFNUk8sWUFOUTtBQUFBLE1BTU1DLGVBTk47O0FBQUEsbUJBT3NCUixzREFBUSxDQUFDLEVBQUQsQ0FQOUI7QUFBQSxNQU9SUyxVQVBRO0FBQUEsTUFPSUMsYUFQSjs7QUFBQSxtQkFRd0JWLHNEQUFRLENBQUMsRUFBRCxDQVJoQztBQUFBLE1BUVJXLFdBUlE7QUFBQSxNQVFLQyxjQVJMOztBQUFBLG1CQVNjWixzREFBUSxDQUFDLEtBQUQsQ0FUdEI7QUFBQSxNQVNSYSxNQVRRO0FBQUEsTUFTQUMsU0FUQTs7QUFBQSxtQkFVaUJkLHNEQUFRLENBQUMsS0FBRCxDQVZ6QjtBQUFBLE1BVVJlLFFBVlE7QUFBQSxNQVVFQyxXQVZGOztBQUFBLG1CQVdTaEIsc0RBQVEsQ0FB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS00sVUFBVSxFQUFmLENBTEosRUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosRUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosQ0FESjtBQWNILENBeFNEOztHQUFNckYsSTs7S0FBQUEsSTtBQXlTU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZWxlY3Rpb25zL3ZvdGUvdm90ZS5hZWIzZGZjMzJhM2I5MGMwMzYzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlcidcclxuaW1wb3J0IGdldFdlYjMgZnJvbSBcIi4uLy4uLy4uL2dldFdlYjNcIjtcclxuaW1wb3J0IFZvdGVDb250cmFjdCBmcm9tIFwiLi4vLi4vLi4vY29udHJhY3RzL1ZvdGUuanNvblwiO1xyXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uLy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCB7IE1vZGFsLCBEaW1tZXIsIExvYWRlciwgSW1hZ2UsIFNlZ21lbnQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IHtcclxuICBQaWVDaGFydCxcclxuICBQaWUsXHJcbiAgVG9vbHRpcCxcclxuICBCYXJDaGFydCxcclxuICBYQXhpcyxcclxuICBZQXhpcyxcclxuICBMZWdlbmQsXHJcbiAgQ2FydGVzaWFuR3JpZCxcclxuICBCYXIsXHJcbn0gZnJvbSBcInJlY2hhcnRzXCI7XHJcblxyXG5jb25zdCBWb3RlID0gKCkgPT4ge1xyXG5cclxuICAgIHZhciB3ZWIzSW5zdGFuY2U7XHJcbiAgICBjb25zdCBbd2ViMywgc2V0V2ViM10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdm90ZUFkZHJlc3MsIHNldFZvdGVBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2N1cnJlbnRWb3RlLCBzZXRDdXJyZW50Vm90ZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFt2b3RlSW5zdGFuY2UsIHNldFZvdGVJbnN0YW5jZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtjYW5kaWRhdGVzLCBzZXRDYW5kaWRhdGVzIF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyIF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdm90aW5nLCBzZXRWb3RpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2hhc1ZvdGVkLCBzZXRIYXNWb3RlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtsb2FkLCBzZXRMb2FkXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBpbml0V2ViMygpIHtcclxuICAgICAgICAgICAgd2ViM0luc3RhbmNlID0gYXdhaXQgZ2V0V2ViMygpO1xyXG4gICAgICAgICAgICBzZXRXZWIzKHdlYjNJbnN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBnZXRFbGVjdGlvbkFkZHJlc3MgPSBhc3luYygpID0+e1xyXG4gICAgICAgICAgICBjb25zdCB1cmw9d2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvcz11cmwuaW5kZXhPZigndm90ZScpKzU7XHJcbiAgICAgICAgICAgIHNldFZvdGVBZGRyZXNzKHVybC5zbGljZShwb3MpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codm90ZUFkZHJlc3MpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICBpbml0V2ViMygpO1xyXG4gICAgICAgIGdldEVsZWN0aW9uQWRkcmVzcygpO1xyXG4gICAgfSxbbG9hZF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gc2V0dXBWb3RlKCkge1xyXG4gICAgICAgICAgICBpZih3ZWIzID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IGF3YWl0IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgICAgICAgICAgICBWb3RlQ29udHJhY3QuYWJpLFxyXG4gICAgICAgICAgICAgICAgICAgIHZvdGVBZGRyZXNzXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgc2V0Vm90ZUluc3RhbmNlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRWb3RlKGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuY3VycmVudEVsZWN0aW9uKCkuY2FsbCgpKTtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50XHJcbiAgICAgICAgICAgICAgICBbY3VycmVudF0gPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpXHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50VXNlcihjdXJyZW50KVxyXG4gICAgICAgICAgICAgICAgc2V0SGFzVm90ZWQoYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5nZXRFbGVjdGlvblZvdGVyKGN1cnJlbnQpLmNhbGwoKSlcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYW5kaWRhdGVzQWRkcmVzc2VzID0gYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5nZXRDYW5kaWRhdGVzQWRkcmVzc2VzKCkuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgY2FuZGlkYXRlc0NvdW50ID0gYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5jYW5kaWRhdGVzQ291bnQoKS5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJyYXkgPSBbXVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYW5kaWRhdGVzQWRkcmVzc2VzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhd2FpdCBpbnN0YW5jZS5tZXRob2RzLmdldF9jYW5kaWRhdGUoY2FuZGlkYXRlc0FkZHJlc3Nlc1tpXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaChhd2FpdCBpbnN0YW5jZS5tZXRob2RzLmdldF9jYW5kaWRhdGUoY2FuZGlkYXRlc0FkZHJlc3Nlc1tpXSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0Q2FuZGlkYXRlcyhhcnJheSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcnJheSlcclxuICAgICAgICAgICAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cclxuICAgICAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldHVwVm90ZSgpO1xyXG4gICAgfSxbd2ViM10pXHJcblxyXG4gICAgY29uc3QgbG9uZyA9IHtcclxuICAgICAgICB3aWR0aDogJzkwJScsXHJcbiAgICAgICAgdGV4QWxpZ246J2NlbnRlcicsXHJcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICAgICAgY29sb3I6ICcjZjAwMDAwJyxcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBWb3RlTW9kYWwobmFtZSxhZGRyZXNzKSB7XHJcbiAgICAgICAgdmFyIHZvdGVGb3IgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHZvdGVJbnN0YW5jZSl7XHJcbiAgICAgICAgICAgICAgICBzZXRWb3RpbmcodHJ1ZSlcclxuICAgICAgICAgICAgICAgIGF3YWl0IHZvdGVJbnN0YW5jZS5tZXRob2RzLnZvdGVGb3IoYWRkcmVzcykuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogY3VycmVudFVzZXJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBzZXRWb3RpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkKCFsb2FkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFoYXNWb3RlZCl7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPXs8YnV0dG9uIGNsYXNzTmFtZT1cInVpIHJpZ2h0IGZsb2F0ZWQgaW52ZXJ0ZWQgcmVkIGJ1dHRvblwiPlZvdGU8L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiVm90ZSFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1wiYXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHZvdGUgZm9yIFwiKyBuYW1lK1wiID9cIn1cclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9ezF9IGNsYXNzTmFtZT1cInVpIGludmVydGVkIGdyZWVuIGJ1dHRvblwiIG9uQ2xpY2s9e3ZvdGVGb3J9PnllczwvYnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17Mn0gY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgcmVkIGJ1dHRvblwiID5ubzwvYnV0dG9uPl19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgcmV0dXJuICg8PjwvPilcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uICBsZWF2ZUVsZWN0aW9uKCl7XHJcbiAgICAgICAgICB2YXIgc3RhcnREYXRlID0gbmV3IERhdGUoY3VycmVudFZvdGUuc3RhcnREYXRlICogMSlcclxuICAgICAgICAgIHZhciBjdXJyRGF0ZT0gbmV3IERhdGUoKVxyXG4gICAgICAgICAgdmFyIGxlYXZldGhpcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICBpZih2b3RlSW5zdGFuY2Upe1xyXG4gICAgICAgICAgICAgICAgc2V0Vm90aW5nKHRydWUpXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB2b3RlSW5zdGFuY2UubWV0aG9kcy5sZWF2ZUVsZWN0aW9uKCkuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogY3VycmVudFVzZXJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBzZXRWb3RpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkKCFsb2FkKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKGN1cnJEYXRlPHN0YXJ0RGF0ZSl7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgIHRyaWdnZXI9ezxidXR0b24gY2xhc3NOYW1lPVwidWkgcmlnaHQgZmxvYXRlZCBpbnZlcnRlZCByZWQgYnV0dG9uXCI+TGVhdmUgRWxlY3Rpb248L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIkxlYXZlIEVsZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgY29udGVudD17XCJhcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbm8gbG9uZ2VyIGJlIGEgY2FuZGlkYXRlXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9ezF9IGNsYXNzTmFtZT1cInVpIGludmVydGVkIGdyZWVuIGJ1dHRvblwib25DbGljaz17bGVhdmV0aGlzfT55ZXM8L2J1dHRvbj4sXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXsyfSBjbGFzc05hbWU9XCJ1aSBpbnZlcnRlZCByZWQgYnV0dG9uXCIgPm5vPC9idXR0b24+XX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhcHBseUVMZWN0aW9uKCl7XHJcbiAgICAgIHZhciBzdGFydERhdGUgPSBuZXcgRGF0ZShjdXJyZW50Vm90ZS5zdGFydERhdGUgKiAxKVxyXG4gICAgICB2YXIgY3VyckRhdGU9IG5ldyBEYXRlKClcclxuICAgIC8vICAgaWYoY3VyckRhdGU8c3RhcnREYXRlKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICA8TGluayByb3V0ZSA9e2AvZWxlY3Rpb25zL2FwcGx5LyR7dm90ZUFkZHJlc3N9YH0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJleHRyYSBjb250ZW50IHVpIGludmVydGVkIHJlZCBidXR0b25cIiA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+PGkgY2xhc3NOYW1lPVwicGx1cyBpY29uXCI+PC9pPiBBcHBseSBhcyBDYW5kaWRhdGU8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApXHJcbiAgICAvLyAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGRhdGE9W107XHJcbiAgICAvKlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IHVpIGNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyIGNsZWFyaW5nIHNlZ21lbnRcIj5cclxuXHJcbiAgICAgICAgICB7Y2FuZGlkYXRlLm5hbWV9IHtWb3RlTW9kYWwoY2FuZGlkYXRlLm5hbWUsIGNhbmRpZGF0ZS5jYW5kaWRhdGVBZGRyKX06ICAgICAgICB7Y2FuZGlkYXRlLm51bVZvdGVzL2N1cnJlbnRWb3RlLm51bVZvdGVzKjEwMH0lXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gZGlzcGxheVBlcigpIHtcclxuICAgICAgICAgIHZhciBuZXdyb3c9e307XHJcbiAgICAgICAgICBpZiAoY2FuZGlkYXRlcyA9PSBcIlwiKXtcclxuICAgICAgICAgICAgICByZXR1cm4gPGRpdiAgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXtsb25nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vIGNhbmRpZGF0ZXMgeWV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBjYW5kaWRhdGVzLm1hcCgoY2FuZGlkYXRlLGluZGV4KSA9PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiICBzdHlsZT17bG9uZ30ga2V5PXtpbmRleH0+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9IHt7Y29sb3I6ICcjRkZGRkZGJ319PlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBuZXdyb3c9e30sXHJcbiAgICAgICAgICAgICAgbmV3cm93W2NhbmRpZGF0ZS5uYW1lXT1jYW5kaWRhdGUubnVtVm90ZXMsXHJcbiAgICAgICAgICAgICAgZGF0YS5wdXNoKG5ld3Jvdyl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBmdW5jdGlvbiBjaGFydCgpe1xyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgIDxQaWVDaGFydCB3aWR0aD17NDAwfSBoZWlnaHQ9ezQwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxQaWVcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhS2V5PVwidXNlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGlzQW5pbWF0aW9uQWN0aXZlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGN4PXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgY3k9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICBvdXRlclJhZGl1cz17ODB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiM4ODg0ZDhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIC8+XHJcbiAgICAgICAgICAgIDwvUGllQ2hhcnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5Q2FuZGlkYXRlcygpIHtcclxuICAgICAgICBpZiAoY2FuZGlkYXRlcyA9PSBcIlwiKXtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgIGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17bG9uZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBubyBjYW5kaWRhdGVzIHlldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZXMubWFwKChjYW5kaWRhdGUsaW5kZXgpID0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgIHN0eWxlPXtsb25nfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IHVpIGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgY2xlYXJpbmcgc2VnbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYW5kaWRhdGUubmFtZX0ge1ZvdGVNb2RhbChjYW5kaWRhdGUubmFtZSwgY2FuZGlkYXRlLmNhbmRpZGF0ZUFkZHIpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlciBjbGVhcmluZyBzZWdtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2xlYXZlRWxlY3Rpb24oKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhbmRpZGF0ZS5jYW5kaWRhdGVBZGRyfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhbmRpZGF0ZS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIHZhciB2b3RlZDtcclxuICAgIGlmKGhhc1ZvdGVkKSB7XHJcbiAgICAgICAgdm90ZWQgPSA8c3Bhbj48aSBjbGFzc05hbWU9XCJmbG9hdGVkIGNoZWNrIGljb24gcmlnaHRcIj48L2k+IFlvdSBoYXZlIGFscmVhZHkgVm90ZWQ8L3NwYW4+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2b3RlZCA9IDw+PC8+XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZm9ybWF0Vm90ZSgpIHtcclxuICAgICAgICBpZiAoY3VycmVudFZvdGUpe1xyXG4gICAgICAgICAgICB2YXIgc3RhcnREYXRlID0gbmV3IERhdGUoY3VycmVudFZvdGUuc3RhcnREYXRlICogMSlcclxuICAgICAgICAgICAgdmFyIGVuZERhdGUgPSBuZXcgRGF0ZShjdXJyZW50Vm90ZS5lbmREYXRlICogMSlcclxuICAgICAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNhcmRcIiBzdHlsZT17bG9uZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyIGNvbnRhaW5lclwiIHN0eWxlPSB7e2NvbG9yOiAnI2YwMDAwMCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50Vm90ZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0ZWQgcmlnaHRcIj57dm90ZWR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhXCI+e3N0YXJ0RGF0ZS50b1VUQ1N0cmluZygpLnNsaWNlKDAsMTcpfSB0byB7ZW5kRGF0ZS50b1VUQ1N0cmluZygpLnNsaWNlKDAsMTcpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNhcmRcIiBzdHlsZT0ge3t3aWR0aDogJzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2N1cnJlbnRWb3RlLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInLCBtYXJnaW46JzUwcHgnLCBjb2xvcjogJyNmMDAwMDAnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwidWkgY2FyZHNcIj57ZGlzcGxheUNhbmRpZGF0ZXMoKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICA8TG9hZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17dm90aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmxpbmU9J2NlbnRlcmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4dHJhIGNvbnRlbnRcIiBzdHlsZT0ge3tjb2xvcjogJyNmMDAwMDAnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImNoZWNrIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50Vm90ZS5udW1Wb3Rlc30gVm90ZXNcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7YXBwbHlFTGVjdGlvbigpfVxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkaXNwbGF5UGVyKCl9XHJcbiAgICAgICAgICAgICAgICAgICAge2NoYXJ0KCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PiBsb2FkaW5nIHZvdGUgLi4uPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxoMT57Zm9ybWF0Vm90ZSgpfTwvaDE+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuXHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBWb3RlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9