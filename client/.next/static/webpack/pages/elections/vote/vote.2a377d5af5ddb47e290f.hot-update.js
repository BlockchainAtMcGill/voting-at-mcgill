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
                  _context3.next = 37;
                  break;
                }

                _context3.t4 = array;
                _context3.next = 32;
                return instance.methods.get_candidate(candidatesAddresses[i]);

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
            lineNumber: 106,
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
            lineNumber: 110,
            columnNumber: 21
          }
        }, "yes"), __jsx("button", {
          key: 2,
          className: "ui inverted red button",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 21
          }
        }, "no")],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
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
            lineNumber: 133,
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
            lineNumber: 137,
            columnNumber: 19
          }
        }, "yes"), __jsx("button", {
          key: 2,
          className: "ui inverted red button",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 19
          }
        }, "no")],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
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
        lineNumber: 148,
        columnNumber: 11
      }
    }, __jsx("button", {
      className: "extra content ui inverted red button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 15
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 19
      }
    }, __jsx("i", {
      className: "plus icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
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
          lineNumber: 169,
          columnNumber: 22
        }
      }, __jsx("div", {
        className: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 27
        }
      }, __jsx("div", {
        className: "header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
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
          lineNumber: 181,
          columnNumber: 11
        }
      }, __jsx("div", {
        style: {
          color: '#FFFFFF'
        },
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
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
        lineNumber: 196,
        columnNumber: 9
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_10__["PieChart"], {
      width: 400,
      height: 400,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
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
        lineNumber: 198,
        columnNumber: 22
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_10__["Tooltip"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
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
          lineNumber: 216,
          columnNumber: 20
        }
      }, __jsx("div", {
        className: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
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
          lineNumber: 226,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "content ui container",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "header clearing segment",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 17
        }
      }, candidate.name, " ", VoteModal(candidate.name, candidate.candidateAddr)), __jsx("div", {
        className: "header clearing segment",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 17
        }
      }, leaveElection()), __jsx("div", {
        className: "meta",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 17
        }
      }, candidate.candidateAddr), __jsx("div", {
        className: "description",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237,
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
        lineNumber: 248,
        columnNumber: 17
      }
    }, __jsx("i", {
      className: "floated check icon right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
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
          lineNumber: 258,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
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
          lineNumber: 260,
          columnNumber: 25
        }
      }, currentVote.title, __jsx("span", {
        className: "floated right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 29
        }
      }, voted)), __jsx("div", {
        className: "meta",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
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
          lineNumber: 265,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 29
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
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
          lineNumber: 271,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "ui cards",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 21
        }
      }, displayCandidates()), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 21
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Loader"], {
        active: voting,
        inline: "centered",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 21
        }
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
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
          lineNumber: 282,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "check icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 25
        }
      }), currentVote.numVotes, " Votes"), applyELection(), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 21
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 21
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 21
        }
      }), displayPer(), chart()));
    } else {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 20
        }
      }, " loading vote ...");
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 13
    }
  }), __jsx("br", {
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
  }), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 13
    }
  }, formatVote()), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VsZWN0aW9ucy92b3RlL3ZvdGUuanMiXSwibmFtZXMiOlsiVm90ZSIsIndlYjNJbnN0YW5jZSIsInVzZVN0YXRlIiwid2ViMyIsInNldFdlYjMiLCJ2b3RlQWRkcmVzcyIsInNldFZvdGVBZGRyZXNzIiwiY3VycmVudFZvdGUiLCJzZXRDdXJyZW50Vm90ZSIsInZvdGVJbnN0YW5jZSIsInNldFZvdGVJbnN0YW5jZSIsImNhbmRpZGF0ZXMiLCJzZXRDYW5kaWRhdGVzIiwiY3VycmVudFVzZXIiLCJzZXRDdXJyZW50VXNlciIsInZvdGluZyIsInNldFZvdGluZyIsImhhc1ZvdGVkIiwic2V0SGFzVm90ZWQiLCJsb2FkIiwic2V0TG9hZCIsInVzZUVmZmVjdCIsImluaXRXZWIzIiwiZ2V0V2ViMyIsImdldEVsZWN0aW9uQWRkcmVzcyIsInVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInBvcyIsImluZGV4T2YiLCJzbGljZSIsImNvbnNvbGUiLCJsb2ciLCJzZXR1cFZvdGUiLCJldGgiLCJDb250cmFjdCIsIlZvdGVDb250cmFjdCIsImFiaSIsImluc3RhbmNlIiwibWV0aG9kcyIsImN1cnJlbnRFbGVjdGlvbiIsImNhbGwiLCJnZXRBY2NvdW50cyIsImN1cnJlbnQiLCJnZXRFbGVjdGlvblZvdGVyIiwiZ2V0Q2FuZGlkYXRlc0FkZHJlc3NlcyIsImNhbmRpZGF0ZXNBZGRyZXNzZXMiLCJhcnJheSIsImkiLCJsZW5ndGgiLCJnZXRfY2FuZGlkYXRlIiwicHVzaCIsImFsZXJ0IiwiZXJyb3IiLCJsb25nIiwid2lkdGgiLCJ0ZXhBbGlnbiIsIm1hcmdpbiIsImNvbG9yIiwiVm90ZU1vZGFsIiwibmFtZSIsImFkZHJlc3MiLCJ2b3RlRm9yIiwic2VuZCIsImZyb20iLCJsZWF2ZUVsZWN0aW9uIiwic3RhcnREYXRlIiwiRGF0ZSIsImN1cnJEYXRlIiwibGVhdmV0aGlzIiwiYXBwbHlFTGVjdGlvbiIsImRhdGEiLCJkaXNwbGF5UGVyIiwibmV3cm93IiwibWFwIiwiY2FuZGlkYXRlIiwiaW5kZXgiLCJudW1Wb3RlcyIsImNoYXJ0IiwidGV4dEFsaWduIiwiZGlzcGxheUNhbmRpZGF0ZXMiLCJjYW5kaWRhdGVBZGRyIiwiZGVzY3JpcHRpb24iLCJ2b3RlZCIsImZvcm1hdFZvdGUiLCJlbmREYXRlIiwidGl0bGUiLCJ0b1VUQ1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFZQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBRWYsTUFBSUMsWUFBSjs7QUFGZSxrQkFHU0Msc0RBQVEsQ0FBQyxFQUFELENBSGpCO0FBQUEsTUFHUkMsSUFIUTtBQUFBLE1BR0ZDLE9BSEU7O0FBQUEsbUJBSXVCRixzREFBUSxDQUFDLEVBQUQsQ0FKL0I7QUFBQSxNQUlSRyxXQUpRO0FBQUEsTUFJS0MsY0FKTDs7QUFBQSxtQkFLdUJKLHNEQUFRLENBQUMsRUFBRCxDQUwvQjtBQUFBLE1BS1JLLFdBTFE7QUFBQSxNQUtLQyxjQUxMOztBQUFBLG1CQU15Qk4sc0RBQVEsQ0FBQyxFQUFELENBTmpDO0FBQUEsTUFNUk8sWUFOUTtBQUFBLE1BTU1DLGVBTk47O0FBQUEsbUJBT3NCUixzREFBUSxDQUFDLEVBQUQsQ0FQOUI7QUFBQSxNQU9SUyxVQVBRO0FBQUEsTUFPSUMsYUFQSjs7QUFBQSxtQkFRd0JWLHNEQUFRLENBQUMsRUFBRCxDQVJoQztBQUFBLE1BUVJXLFdBUlE7QUFBQSxNQVFLQyxjQVJMOztBQUFBLG1CQVNjWixzREFBUSxDQUFDLEtBQUQsQ0FUdEI7QUFBQSxNQVNSYSxNQVRRO0FBQUEsTUFTQUMsU0FUQTs7QUFBQSxtQkFVaUJkLHNEQUFRLENBQUMsS0FBRCxDQVZ6QjtBQUFBLE1BVVJlLFFBVlE7QUFBQSxNQVVFQyxXQVZGOztBQUFBLG1CQVdTaEIsc0RBQVEsQ0FB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QUxKLEVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLEVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLENBREo7QUFjSCxDQXRTRDs7R0FBTXJGLEk7O0tBQUFBLEk7QUF1U1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VsZWN0aW9ucy92b3RlL3ZvdGUuMmEzNzdkNWFmNWRkYjQ3ZTI5MGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInXHJcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi8uLi8uLi9nZXRXZWIzXCI7XHJcbmltcG9ydCBWb3RlQ29udHJhY3QgZnJvbSBcIi4uLy4uLy4uL2NvbnRyYWN0cy9Wb3RlLmpzb25cIjtcclxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi8uLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgeyBNb2RhbCwgRGltbWVyLCBMb2FkZXIsIEltYWdlLCBTZWdtZW50IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgUGllQ2hhcnQsXHJcbiAgUGllLFxyXG4gIFRvb2x0aXAsXHJcbiAgQmFyQ2hhcnQsXHJcbiAgWEF4aXMsXHJcbiAgWUF4aXMsXHJcbiAgTGVnZW5kLFxyXG4gIENhcnRlc2lhbkdyaWQsXHJcbiAgQmFyLFxyXG59IGZyb20gXCJyZWNoYXJ0c1wiO1xyXG5cclxuY29uc3QgVm90ZSA9ICgpID0+IHtcclxuXHJcbiAgICB2YXIgd2ViM0luc3RhbmNlO1xyXG4gICAgY29uc3QgW3dlYjMsIHNldFdlYjNdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZvdGVBZGRyZXNzLCBzZXRWb3RlQWRkcmVzc10gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtjdXJyZW50Vm90ZSwgc2V0Q3VycmVudFZvdGVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbdm90ZUluc3RhbmNlLCBzZXRWb3RlSW5zdGFuY2VdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbY2FuZGlkYXRlcywgc2V0Q2FuZGlkYXRlcyBdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlciBdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZvdGluZywgc2V0Vm90aW5nIF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtoYXNWb3RlZCwgc2V0SGFzVm90ZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbbG9hZCwgc2V0TG9hZF0gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gaW5pdFdlYjMoKSB7XHJcbiAgICAgICAgICAgIHdlYjNJbnN0YW5jZSA9IGF3YWl0IGdldFdlYjMoKTtcclxuICAgICAgICAgICAgc2V0V2ViMyh3ZWIzSW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZ2V0RWxlY3Rpb25BZGRyZXNzID0gYXN5bmMoKSA9PntcclxuICAgICAgICAgICAgY29uc3QgdXJsPXdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgICAgICBjb25zdCBwb3M9dXJsLmluZGV4T2YoJ3ZvdGUnKSs1O1xyXG4gICAgICAgICAgICBzZXRWb3RlQWRkcmVzcyh1cmwuc2xpY2UocG9zKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZvdGVBZGRyZXNzKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgaW5pdFdlYjMoKTtcclxuICAgICAgICBnZXRFbGVjdGlvbkFkZHJlc3MoKTtcclxuICAgIH0sW2xvYWRdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwVm90ZSgpIHtcclxuICAgICAgICAgICAgaWYod2ViMyA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBhd2FpdCBuZXcgd2ViMy5ldGguQ29udHJhY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgVm90ZUNvbnRyYWN0LmFiaSxcclxuICAgICAgICAgICAgICAgICAgICB2b3RlQWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHNldFZvdGVJbnN0YW5jZShpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50Vm90ZShhd2FpdCBpbnN0YW5jZS5tZXRob2RzLmN1cnJlbnRFbGVjdGlvbigpLmNhbGwoKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFxyXG4gICAgICAgICAgICAgICAgW2N1cnJlbnRdID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKVxyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFVzZXIoY3VycmVudClcclxuICAgICAgICAgICAgICAgIHNldEhhc1ZvdGVkKGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuZ2V0RWxlY3Rpb25Wb3RlcihjdXJyZW50KS5jYWxsKCkpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FuZGlkYXRlc0FkZHJlc3NlcyA9IGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuZ2V0Q2FuZGlkYXRlc0FkZHJlc3NlcygpLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGNhbmRpZGF0ZXNDb3VudCA9IGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuY2FuZGlkYXRlc0NvdW50KCkuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFycmF5ID0gW11cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FuZGlkYXRlc0FkZHJlc3Nlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaChhd2FpdCBpbnN0YW5jZS5tZXRob2RzLmdldF9jYW5kaWRhdGUoY2FuZGlkYXRlc0FkZHJlc3Nlc1tpXSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0Q2FuZGlkYXRlcyhhcnJheSk7XHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgd2ViMywgYWNjb3VudHMsIGFuZCBjb250cmFjdCB0byB0aGUgc3RhdGUsIGFuZCB0aGVuIHByb2NlZWQgd2l0aCBhblxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyBDYXRjaCBhbnkgZXJyb3JzIGZvciBhbnkgb2YgdGhlIGFib3ZlIG9wZXJhdGlvbnMuXHJcbiAgICAgICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXR1cFZvdGUoKTtcclxuICAgIH0sW3dlYjNdKVxyXG5cclxuICAgIGNvbnN0IGxvbmcgPSB7XHJcbiAgICAgICAgd2lkdGg6ICc5MCUnLFxyXG4gICAgICAgIHRleEFsaWduOidjZW50ZXInLFxyXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxyXG4gICAgICAgIGNvbG9yOiAnI2YwMDAwMCcsXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gVm90ZU1vZGFsKG5hbWUsYWRkcmVzcykge1xyXG4gICAgICAgIHZhciB2b3RlRm9yID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih2b3RlSW5zdGFuY2Upe1xyXG4gICAgICAgICAgICAgICAgc2V0Vm90aW5nKHRydWUpXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB2b3RlSW5zdGFuY2UubWV0aG9kcy52b3RlRm9yKGFkZHJlc3MpLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IGN1cnJlbnRVc2VyXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0Vm90aW5nKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgc2V0TG9hZCghbG9hZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighaGFzVm90ZWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj17PGJ1dHRvbiBjbGFzc05hbWU9XCJ1aSByaWdodCBmbG9hdGVkIGludmVydGVkIHJlZCBidXR0b25cIj5Wb3RlPC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIlZvdGUhXCJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcImFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byB2b3RlIGZvciBcIisgbmFtZStcIiA/XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXsxfSBjbGFzc05hbWU9XCJ1aSBpbnZlcnRlZCBncmVlbiBidXR0b25cIiBvbkNsaWNrPXt2b3RlRm9yfT55ZXM8L2J1dHRvbj4sXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9ezJ9IGNsYXNzTmFtZT1cInVpIGludmVydGVkIHJlZCBidXR0b25cIiA+bm88L2J1dHRvbj5dfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHJldHVybiAoPD48Lz4pXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiAgbGVhdmVFbGVjdGlvbigpe1xyXG4gICAgICAgICAgdmFyIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnRWb3RlLnN0YXJ0RGF0ZSAqIDEpXHJcbiAgICAgICAgICB2YXIgY3VyckRhdGU9IG5ldyBEYXRlKClcclxuICAgICAgICAgIHZhciBsZWF2ZXRoaXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYodm90ZUluc3RhbmNlKXtcclxuICAgICAgICAgICAgICAgIHNldFZvdGluZyh0cnVlKVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdm90ZUluc3RhbmNlLm1ldGhvZHMubGVhdmVFbGVjdGlvbigpLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IGN1cnJlbnRVc2VyXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0Vm90aW5nKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgc2V0TG9hZCghbG9hZClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihjdXJyRGF0ZTxzdGFydERhdGUpe1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICB0cmlnZ2VyPXs8YnV0dG9uIGNsYXNzTmFtZT1cInVpIHJpZ2h0IGZsb2F0ZWQgaW52ZXJ0ZWQgcmVkIGJ1dHRvblwiPkxlYXZlIEVsZWN0aW9uPC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICBoZWFkZXI9XCJMZWF2ZSBFbGVjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1wiYXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIG5vIGxvbmdlciBiZSBhIGNhbmRpZGF0ZVwifVxyXG4gICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXsxfSBjbGFzc05hbWU9XCJ1aSBpbnZlcnRlZCBncmVlbiBidXR0b25cIm9uQ2xpY2s9e2xlYXZldGhpc30+eWVzPC9idXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17Mn0gY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgcmVkIGJ1dHRvblwiID5ubzwvYnV0dG9uPl19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXBwbHlFTGVjdGlvbigpe1xyXG4gICAgICB2YXIgc3RhcnREYXRlID0gbmV3IERhdGUoY3VycmVudFZvdGUuc3RhcnREYXRlICogMSlcclxuICAgICAgdmFyIGN1cnJEYXRlPSBuZXcgRGF0ZSgpXHJcbiAgICAvLyAgIGlmKGN1cnJEYXRlPHN0YXJ0RGF0ZSl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgPExpbmsgcm91dGUgPXtgL2VsZWN0aW9ucy9hcHBseS8ke3ZvdGVBZGRyZXNzfWB9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZXh0cmEgY29udGVudCB1aSBpbnZlcnRlZCByZWQgYnV0dG9uXCIgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PjxpIGNsYXNzTmFtZT1cInBsdXMgaWNvblwiPjwvaT4gQXBwbHkgYXMgQ2FuZGlkYXRlPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKVxyXG4gICAgLy8gICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhPVtdO1xyXG4gICAgLypcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCB1aSBjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlciBjbGVhcmluZyBzZWdtZW50XCI+XHJcblxyXG4gICAgICAgICAge2NhbmRpZGF0ZS5uYW1lfSB7Vm90ZU1vZGFsKGNhbmRpZGF0ZS5uYW1lLCBjYW5kaWRhdGUuY2FuZGlkYXRlQWRkcil9OiAgICAgICAge2NhbmRpZGF0ZS5udW1Wb3Rlcy9jdXJyZW50Vm90ZS5udW1Wb3RlcyoxMDB9JVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlQZXIoKSB7XHJcbiAgICAgICAgICB2YXIgbmV3cm93PXt9O1xyXG4gICAgICAgICAgaWYgKGNhbmRpZGF0ZXMgPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgIGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17bG9uZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBubyBjYW5kaWRhdGVzIHlldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gY2FuZGlkYXRlcy5tYXAoKGNhbmRpZGF0ZSxpbmRleCkgPT5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiAgc3R5bGU9e2xvbmd9IGtleT17aW5kZXh9PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPSB7e2NvbG9yOiAnI0ZGRkZGRid9fT5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbmV3cm93PXt9LFxyXG4gICAgICAgICAgICAgIG5ld3Jvd1tjYW5kaWRhdGUubmFtZV09Y2FuZGlkYXRlLm51bVZvdGVzLFxyXG4gICAgICAgICAgICAgIGRhdGEucHVzaChuZXdyb3cpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgZnVuY3Rpb24gY2hhcnQoKXtcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICA8UGllQ2hhcnQgd2lkdGg9ezQwMH0gaGVpZ2h0PXs0MDB9PlxyXG4gICAgICAgICAgICAgICAgICAgICA8UGllXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YUtleT1cInVzZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBpc0FuaW1hdGlvbkFjdGl2ZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICBjeD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGN5PXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgb3V0ZXJSYWRpdXM9ezgwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjODg4NGQ4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCAvPlxyXG4gICAgICAgICAgICA8L1BpZUNoYXJ0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheUNhbmRpZGF0ZXMoKSB7XHJcbiAgICAgICAgaWYgKGNhbmRpZGF0ZXMgPT0gXCJcIil7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2ICBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e2xvbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm8gY2FuZGlkYXRlcyB5ZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjYW5kaWRhdGVzLm1hcCgoY2FuZGlkYXRlLGluZGV4KSA9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiICBzdHlsZT17bG9uZ30ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCB1aSBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyIGNsZWFyaW5nIHNlZ21lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2FuZGlkYXRlLm5hbWV9IHtWb3RlTW9kYWwoY2FuZGlkYXRlLm5hbWUsIGNhbmRpZGF0ZS5jYW5kaWRhdGVBZGRyKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgY2xlYXJpbmcgc2VnbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsZWF2ZUVsZWN0aW9uKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYW5kaWRhdGUuY2FuZGlkYXRlQWRkcn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYW5kaWRhdGUuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICB2YXIgdm90ZWQ7XHJcbiAgICBpZihoYXNWb3RlZCkge1xyXG4gICAgICAgIHZvdGVkID0gPHNwYW4+PGkgY2xhc3NOYW1lPVwiZmxvYXRlZCBjaGVjayBpY29uIHJpZ2h0XCI+PC9pPiBZb3UgaGF2ZSBhbHJlYWR5IFZvdGVkPC9zcGFuPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdm90ZWQgPSA8PjwvPlxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZvcm1hdFZvdGUoKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRWb3RlKXtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnRWb3RlLnN0YXJ0RGF0ZSAqIDEpXHJcbiAgICAgICAgICAgIHZhciBlbmREYXRlID0gbmV3IERhdGUoY3VycmVudFZvdGUuZW5kRGF0ZSAqIDEpXHJcbiAgICAgICAgICAgIHJldHVybiA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBjYXJkXCIgc3R5bGU9e2xvbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlciBjb250YWluZXJcIiBzdHlsZT0ge3tjb2xvcjogJyNmMDAwMDAnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFZvdGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdGVkIHJpZ2h0XCI+e3ZvdGVkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YVwiPntzdGFydERhdGUudG9VVENTdHJpbmcoKS5zbGljZSgwLDE3KX0gdG8ge2VuZERhdGUudG9VVENTdHJpbmcoKS5zbGljZSgwLDE3KX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBjYXJkXCIgc3R5bGU9IHt7d2lkdGg6ICcxMDAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntjdXJyZW50Vm90ZS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJywgbWFyZ2luOic1MHB4JywgY29sb3I6ICcjZjAwMDAwJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cInVpIGNhcmRzXCI+e2Rpc3BsYXlDYW5kaWRhdGVzKCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3ZvdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5saW5lPSdjZW50ZXJlZCdcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHRyYSBjb250ZW50XCIgc3R5bGU9IHt7Y29sb3I6ICcjZjAwMDAwJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJjaGVjayBpY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFZvdGUubnVtVm90ZXN9IFZvdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2FwcGx5RUxlY3Rpb24oKX1cclxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGlzcGxheVBlcigpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGFydCgpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gPGRpdj4gbG9hZGluZyB2b3RlIC4uLjwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8aDE+e2Zvcm1hdFZvdGUoKX08L2gxPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcblxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVm90ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==