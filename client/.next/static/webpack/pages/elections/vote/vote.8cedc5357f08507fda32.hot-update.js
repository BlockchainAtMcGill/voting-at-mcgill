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
                i = 0;

              case 31:
                if (!(i < candidatesCount)) {
                  _context3.next = 41;
                  break;
                }

                console.log(candidatesAddresses[i]);
                _context3.t4 = array;
                _context3.next = 36;
                return instance.methods.get_candidate(candidatesAddresses[i]).call();

              case 36:
                _context3.t5 = _context3.sent;

                _context3.t4.push.call(_context3.t4, _context3.t5);

              case 38:
                i++;
                _context3.next = 31;
                break;

              case 41:
                setCandidates(array);
                console.log(candidates); // Set web3, accounts, and contract to the state, and then proceed with an

                _context3.next = 49;
                break;

              case 45:
                _context3.prev = 45;
                _context3.t6 = _context3["catch"](2);
                // Catch any errors for any of the above operations.
                alert("Failed to load web3, accounts, or contract. Check console for details.");
                console.error(_context3.t6);

              case 49:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[2, 45]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VsZWN0aW9ucy92b3RlL3ZvdGUuanMiXSwibmFtZXMiOlsiVm90ZSIsIndlYjNJbnN0YW5jZSIsInVzZVN0YXRlIiwid2ViMyIsInNldFdlYjMiLCJ2b3RlQWRkcmVzcyIsInNldFZvdGVBZGRyZXNzIiwiY3VycmVudFZvdGUiLCJzZXRDdXJyZW50Vm90ZSIsInZvdGVJbnN0YW5jZSIsInNldFZvdGVJbnN0YW5jZSIsImNhbmRpZGF0ZXMiLCJzZXRDYW5kaWRhdGVzIiwiY3VycmVudFVzZXIiLCJzZXRDdXJyZW50VXNlciIsInZvdGluZyIsInNldFZvdGluZyIsImhhc1ZvdGVkIiwic2V0SGFzVm90ZWQiLCJsb2FkIiwic2V0TG9hZCIsInVzZUVmZmVjdCIsImluaXRXZWIzIiwiZ2V0V2ViMyIsImdldEVsZWN0aW9uQWRkcmVzcyIsInVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInBvcyIsImluZGV4T2YiLCJzbGljZSIsInNldHVwVm90ZSIsImV0aCIsIkNvbnRyYWN0IiwiVm90ZUNvbnRyYWN0IiwiYWJpIiwiaW5zdGFuY2UiLCJtZXRob2RzIiwiY3VycmVudEVsZWN0aW9uIiwiY2FsbCIsImdldEFjY291bnRzIiwiY3VycmVudCIsImdldEVsZWN0aW9uVm90ZXIiLCJnZXRDYW5kaWRhdGVzQWRkcmVzc2VzIiwiY2FuZGlkYXRlc0FkZHJlc3NlcyIsImNhbmRpZGF0ZXNDb3VudCIsImFycmF5IiwiaSIsImNvbnNvbGUiLCJsb2ciLCJnZXRfY2FuZGlkYXRlIiwicHVzaCIsImFsZXJ0IiwiZXJyb3IiLCJsb25nIiwid2lkdGgiLCJ0ZXhBbGlnbiIsIm1hcmdpbiIsImNvbG9yIiwiVm90ZU1vZGFsIiwibmFtZSIsImFkZHJlc3MiLCJ2b3RlRm9yIiwic2VuZCIsImZyb20iLCJsZWF2ZUVsZWN0aW9uIiwic3RhcnREYXRlIiwiRGF0ZSIsImN1cnJEYXRlIiwibGVhdmV0aGlzIiwiYXBwbHlFTGVjdGlvbiIsImRhdGEiLCJkaXNwbGF5UGVyIiwibmV3cm93IiwibWFwIiwiY2FuZGlkYXRlIiwiaW5kZXgiLCJudW1Wb3RlcyIsImNoYXJ0IiwidGV4dEFsaWduIiwiZGlzcGxheUNhbmRpZGF0ZXMiLCJjYW5kaWRhdGVBZGRyIiwiZGVzY3JpcHRpb24iLCJ2b3RlZCIsImZvcm1hdFZvdGUiLCJlbmREYXRlIiwidGl0bGUiLCJ0b1VUQ1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFZQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBRWYsTUFBSUMsWUFBSjs7QUFGZSxrQkFHU0Msc0RBQVEsQ0FBQyxFQUFELENBSGpCO0FBQUEsTUFHUkMsSUFIUTtBQUFBLE1BR0ZDLE9BSEU7O0FBQUEsbUJBSXVCRixzREFBUSxDQUFDLEVBQUQsQ0FKL0I7QUFBQSxNQUlSRyxXQUpRO0FBQUEsTUFJS0MsY0FKTDs7QUFBQSxtQkFLdUJKLHNEQUFRLENBQUMsRUFBRCxDQUwvQjtBQUFBLE1BS1JLLFdBTFE7QUFBQSxNQUtLQyxjQUxMOztBQUFBLG1CQU15Qk4sc0RBQVEsQ0FBQyxFQUFELENBTmpDO0FBQUEsTUFNUk8sWUFOUTtBQUFBLE1BTU1DLGVBTk47O0FBQUEsbUJBT3NCUixzREFBUSxDQUFDLEVBQUQsQ0FQOUI7QUFBQSxNQU9SUyxVQVBRO0FBQUEsTUFPSUMsYUFQSjs7QUFBQSxtQkFRd0JWLHNEQUFRLENBQUMsRUFBRCxDQVJoQztBQUFBLE1BUVJXLFdBUlE7QUFBQSxNQVFLQyxjQVJMOztBQUFBLG1CQVNjWixzREFBUSxDQUFDLEtBQUQsQ0FUdEI7QUFBQSxNQVNSYSxNQVRRO0FBQUEsTUFTQUMsU0FUQTs7QUFBQSxtQkFVaUJkLHNEQUFRLENBQUMsS0FBRCxDQVZ6QjtBQUFBLE1BVVJlLFFBVlE7QUFBQSxNQVVFQyxXQVZGOztBQUFBLG1CQVdTaEIs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QSxJQUhKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLTSxVQUFVLEVBQWYsQ0FMSixFQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixFQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixDQURKO0FBY0gsQ0F4U0Q7O0dBQU1yRixJOztLQUFBQSxJO0FBeVNTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbGVjdGlvbnMvdm90ZS92b3RlLjhjZWRjNTM1N2YwODUwN2ZkYTMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xyXG5pbXBvcnQgZ2V0V2ViMyBmcm9tIFwiLi4vLi4vLi4vZ2V0V2ViM1wiO1xyXG5pbXBvcnQgVm90ZUNvbnRyYWN0IGZyb20gXCIuLi8uLi8uLi9jb250cmFjdHMvVm90ZS5qc29uXCI7XHJcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vLi4vLi4vcm91dGVzJztcclxuaW1wb3J0IHsgTW9kYWwsIERpbW1lciwgTG9hZGVyLCBJbWFnZSwgU2VnbWVudCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQge1xyXG4gIFBpZUNoYXJ0LFxyXG4gIFBpZSxcclxuICBUb29sdGlwLFxyXG4gIEJhckNoYXJ0LFxyXG4gIFhBeGlzLFxyXG4gIFlBeGlzLFxyXG4gIExlZ2VuZCxcclxuICBDYXJ0ZXNpYW5HcmlkLFxyXG4gIEJhcixcclxufSBmcm9tIFwicmVjaGFydHNcIjtcclxuXHJcbmNvbnN0IFZvdGUgPSAoKSA9PiB7XHJcblxyXG4gICAgdmFyIHdlYjNJbnN0YW5jZTtcclxuICAgIGNvbnN0IFt3ZWIzLCBzZXRXZWIzXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt2b3RlQWRkcmVzcywgc2V0Vm90ZUFkZHJlc3NdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbY3VycmVudFZvdGUsIHNldEN1cnJlbnRWb3RlXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3ZvdGVJbnN0YW5jZSwgc2V0Vm90ZUluc3RhbmNlXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2NhbmRpZGF0ZXMsIHNldENhbmRpZGF0ZXMgXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXIgXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt2b3RpbmcsIHNldFZvdGluZyBdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaGFzVm90ZWQsIHNldEhhc1ZvdGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2xvYWQsIHNldExvYWRdID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGluaXRXZWIzKCkge1xyXG4gICAgICAgICAgICB3ZWIzSW5zdGFuY2UgPSBhd2FpdCBnZXRXZWIzKCk7XHJcbiAgICAgICAgICAgIHNldFdlYjMod2ViM0luc3RhbmNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGdldEVsZWN0aW9uQWRkcmVzcyA9IGFzeW5jKCkgPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHVybD13aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICAgICAgY29uc3QgcG9zPXVybC5pbmRleE9mKCd2b3RlJykrNTtcclxuICAgICAgICAgICAgc2V0Vm90ZUFkZHJlc3ModXJsLnNsaWNlKHBvcykpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICBpbml0V2ViMygpO1xyXG4gICAgICAgIGdldEVsZWN0aW9uQWRkcmVzcygpO1xyXG4gICAgfSxbbG9hZF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gc2V0dXBWb3RlKCkge1xyXG4gICAgICAgICAgICBpZih3ZWIzID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IGF3YWl0IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgICAgICAgICAgICBWb3RlQ29udHJhY3QuYWJpLFxyXG4gICAgICAgICAgICAgICAgICAgIHZvdGVBZGRyZXNzXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgc2V0Vm90ZUluc3RhbmNlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRWb3RlKGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuY3VycmVudEVsZWN0aW9uKCkuY2FsbCgpKTtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50XHJcbiAgICAgICAgICAgICAgICBbY3VycmVudF0gPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpXHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50VXNlcihjdXJyZW50KVxyXG4gICAgICAgICAgICAgICAgc2V0SGFzVm90ZWQoYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5nZXRFbGVjdGlvblZvdGVyKGN1cnJlbnQpLmNhbGwoKSlcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYW5kaWRhdGVzQWRkcmVzc2VzID0gYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5nZXRDYW5kaWRhdGVzQWRkcmVzc2VzKCkuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FuZGlkYXRlc0NvdW50ID0gYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5jYW5kaWRhdGVzQ291bnQoKS5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJyYXkgPSBbXVxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYW5kaWRhdGVzQ291bnQ7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2FuZGlkYXRlc0FkZHJlc3Nlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaChhd2FpdCBpbnN0YW5jZS5tZXRob2RzLmdldF9jYW5kaWRhdGUoY2FuZGlkYXRlc0FkZHJlc3Nlc1tpXSkuY2FsbCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldENhbmRpZGF0ZXMoYXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2FuZGlkYXRlcylcclxuICAgICAgICAgICAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cclxuICAgICAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldHVwVm90ZSgpO1xyXG4gICAgfSxbd2ViM10pXHJcblxyXG4gICAgY29uc3QgbG9uZyA9IHtcclxuICAgICAgICB3aWR0aDogJzkwJScsXHJcbiAgICAgICAgdGV4QWxpZ246J2NlbnRlcicsXHJcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICAgICAgY29sb3I6ICcjZjAwMDAwJyxcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBWb3RlTW9kYWwobmFtZSxhZGRyZXNzKSB7XHJcbiAgICAgICAgdmFyIHZvdGVGb3IgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHZvdGVJbnN0YW5jZSl7XHJcbiAgICAgICAgICAgICAgICBzZXRWb3RpbmcodHJ1ZSlcclxuICAgICAgICAgICAgICAgIGF3YWl0IHZvdGVJbnN0YW5jZS5tZXRob2RzLnZvdGVGb3IoYWRkcmVzcykuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogY3VycmVudFVzZXJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBzZXRWb3RpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkKCFsb2FkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFoYXNWb3RlZCl7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPXs8YnV0dG9uIGNsYXNzTmFtZT1cInVpIHJpZ2h0IGZsb2F0ZWQgaW52ZXJ0ZWQgcmVkIGJ1dHRvblwiPlZvdGU8L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiVm90ZSFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1wiYXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHZvdGUgZm9yIFwiKyBuYW1lK1wiID9cIn1cclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9ezF9IGNsYXNzTmFtZT1cInVpIGludmVydGVkIGdyZWVuIGJ1dHRvblwiIG9uQ2xpY2s9e3ZvdGVGb3J9PnllczwvYnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17Mn0gY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgcmVkIGJ1dHRvblwiID5ubzwvYnV0dG9uPl19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgcmV0dXJuICg8PjwvPilcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uICBsZWF2ZUVsZWN0aW9uKCl7XHJcbiAgICAgICAgICB2YXIgc3RhcnREYXRlID0gbmV3IERhdGUoY3VycmVudFZvdGUuc3RhcnREYXRlICogMSlcclxuICAgICAgICAgIHZhciBjdXJyRGF0ZT0gbmV3IERhdGUoKVxyXG4gICAgICAgICAgdmFyIGxlYXZldGhpcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICBpZih2b3RlSW5zdGFuY2Upe1xyXG4gICAgICAgICAgICAgICAgc2V0Vm90aW5nKHRydWUpXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB2b3RlSW5zdGFuY2UubWV0aG9kcy5sZWF2ZUVsZWN0aW9uKCkuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogY3VycmVudFVzZXJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBzZXRWb3RpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkKCFsb2FkKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKGN1cnJEYXRlPHN0YXJ0RGF0ZSl7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgIHRyaWdnZXI9ezxidXR0b24gY2xhc3NOYW1lPVwidWkgcmlnaHQgZmxvYXRlZCBpbnZlcnRlZCByZWQgYnV0dG9uXCI+TGVhdmUgRWxlY3Rpb248L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIkxlYXZlIEVsZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgY29udGVudD17XCJhcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbm8gbG9uZ2VyIGJlIGEgY2FuZGlkYXRlXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9ezF9IGNsYXNzTmFtZT1cInVpIGludmVydGVkIGdyZWVuIGJ1dHRvblwib25DbGljaz17bGVhdmV0aGlzfT55ZXM8L2J1dHRvbj4sXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXsyfSBjbGFzc05hbWU9XCJ1aSBpbnZlcnRlZCByZWQgYnV0dG9uXCIgPm5vPC9idXR0b24+XX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhcHBseUVMZWN0aW9uKCl7XHJcbiAgICAgIHZhciBzdGFydERhdGUgPSBuZXcgRGF0ZShjdXJyZW50Vm90ZS5zdGFydERhdGUgKiAxKVxyXG4gICAgICB2YXIgY3VyckRhdGU9IG5ldyBEYXRlKClcclxuICAgIC8vICAgaWYoY3VyckRhdGU8c3RhcnREYXRlKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICA8TGluayByb3V0ZSA9e2AvZWxlY3Rpb25zL2FwcGx5LyR7dm90ZUFkZHJlc3N9YH0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJleHRyYSBjb250ZW50IHVpIGludmVydGVkIHJlZCBidXR0b25cIiA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+PGkgY2xhc3NOYW1lPVwicGx1cyBpY29uXCI+PC9pPiBBcHBseSBhcyBDYW5kaWRhdGU8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApXHJcbiAgICAvLyAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGRhdGE9W107XHJcbiAgICAvKlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IHVpIGNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyIGNsZWFyaW5nIHNlZ21lbnRcIj5cclxuXHJcbiAgICAgICAgICB7Y2FuZGlkYXRlLm5hbWV9IHtWb3RlTW9kYWwoY2FuZGlkYXRlLm5hbWUsIGNhbmRpZGF0ZS5jYW5kaWRhdGVBZGRyKX06ICAgICAgICB7Y2FuZGlkYXRlLm51bVZvdGVzL2N1cnJlbnRWb3RlLm51bVZvdGVzKjEwMH0lXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gZGlzcGxheVBlcigpIHtcclxuICAgICAgICAgIHZhciBuZXdyb3c9e307XHJcbiAgICAgICAgICBpZiAoY2FuZGlkYXRlcyA9PSBcIlwiKXtcclxuICAgICAgICAgICAgICByZXR1cm4gPGRpdiAgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXtsb25nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vIGNhbmRpZGF0ZXMgeWV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBjYW5kaWRhdGVzLm1hcCgoY2FuZGlkYXRlLGluZGV4KSA9PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiICBzdHlsZT17bG9uZ30ga2V5PXtpbmRleH0+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9IHt7Y29sb3I6ICcjRkZGRkZGJ319PlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBuZXdyb3c9e30sXHJcbiAgICAgICAgICAgICAgbmV3cm93W2NhbmRpZGF0ZS5uYW1lXT1jYW5kaWRhdGUubnVtVm90ZXMsXHJcbiAgICAgICAgICAgICAgZGF0YS5wdXNoKG5ld3Jvdyl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2hhcnQoKXtcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICA8UGllQ2hhcnQgd2lkdGg9ezQwMH0gaGVpZ2h0PXs0MDB9PlxyXG4gICAgICAgICAgICAgICAgICAgICA8UGllXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YUtleT1cInVzZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBpc0FuaW1hdGlvbkFjdGl2ZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICBjeD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGN5PXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgb3V0ZXJSYWRpdXM9ezgwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjODg4NGQ4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCAvPlxyXG4gICAgICAgICAgICA8L1BpZUNoYXJ0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheUNhbmRpZGF0ZXMoKSB7XHJcbiAgICAgICAgaWYgKGNhbmRpZGF0ZXMgPT0gXCJcIil7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2ICBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e2xvbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm8gY2FuZGlkYXRlcyB5ZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjYW5kaWRhdGVzLm1hcCgoY2FuZGlkYXRlLGluZGV4KSA9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiICBzdHlsZT17bG9uZ30ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCB1aSBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyIGNsZWFyaW5nIHNlZ21lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2FuZGlkYXRlLm5hbWV9IHtWb3RlTW9kYWwoY2FuZGlkYXRlLm5hbWUsIGNhbmRpZGF0ZS5jYW5kaWRhdGVBZGRyKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgY2xlYXJpbmcgc2VnbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsZWF2ZUVsZWN0aW9uKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYW5kaWRhdGUuY2FuZGlkYXRlQWRkcn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYW5kaWRhdGUuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICB2YXIgdm90ZWQ7XHJcbiAgICBpZihoYXNWb3RlZCkge1xyXG4gICAgICAgIHZvdGVkID0gPHNwYW4+PGkgY2xhc3NOYW1lPVwiZmxvYXRlZCBjaGVjayBpY29uIHJpZ2h0XCI+PC9pPiBZb3UgaGF2ZSBhbHJlYWR5IFZvdGVkPC9zcGFuPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdm90ZWQgPSA8PjwvPlxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZvcm1hdFZvdGUoKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRWb3RlKXtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnRWb3RlLnN0YXJ0RGF0ZSAqIDEpXHJcbiAgICAgICAgICAgIHZhciBlbmREYXRlID0gbmV3IERhdGUoY3VycmVudFZvdGUuZW5kRGF0ZSAqIDEpXHJcbiAgICAgICAgICAgIHJldHVybiA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBjYXJkXCIgc3R5bGU9e2xvbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlciBjb250YWluZXJcIiBzdHlsZT0ge3tjb2xvcjogJyNmMDAwMDAnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFZvdGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdGVkIHJpZ2h0XCI+e3ZvdGVkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YVwiPntzdGFydERhdGUudG9VVENTdHJpbmcoKS5zbGljZSgwLDE3KX0gdG8ge2VuZERhdGUudG9VVENTdHJpbmcoKS5zbGljZSgwLDE3KX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBjYXJkXCIgc3R5bGU9IHt7d2lkdGg6ICcxMDAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntjdXJyZW50Vm90ZS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJywgbWFyZ2luOic1MHB4JywgY29sb3I6ICcjZjAwMDAwJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cInVpIGNhcmRzXCI+e2Rpc3BsYXlDYW5kaWRhdGVzKCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3ZvdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5saW5lPSdjZW50ZXJlZCdcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHRyYSBjb250ZW50XCIgc3R5bGU9IHt7Y29sb3I6ICcjZjAwMDAwJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJjaGVjayBpY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFZvdGUubnVtVm90ZXN9IFZvdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2FwcGx5RUxlY3Rpb24oKX1cclxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGlzcGxheVBlcigpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGFydCgpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gPGRpdj4gbG9hZGluZyB2b3RlIC4uLjwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8aDE+e2Zvcm1hdFZvdGUoKX08L2gxPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcblxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVm90ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==