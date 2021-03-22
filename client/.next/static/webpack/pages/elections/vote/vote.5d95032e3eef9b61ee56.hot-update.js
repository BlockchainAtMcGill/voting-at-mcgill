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

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      cAddresses = _useState10[0],
      setCAddresses = _useState10[1];

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
                setCAddresses(candidatesAddresses);
                _context3.next = 29;
                return instance.methods.candidatesCount().call();

              case 29:
                candidatesCount = _context3.sent;
                array = [];
                i = 0;

              case 32:
                if (!(i < candidatesCount)) {
                  _context3.next = 42;
                  break;
                }

                console.log(candidatesAddresses[i]);
                _context3.t4 = array;
                _context3.next = 37;
                return instance.methods.get_candidate(candidatesAddresses[i]).call();

              case 37:
                _context3.t5 = _context3.sent;

                _context3.t4.push.call(_context3.t4, _context3.t5);

              case 39:
                i++;
                _context3.next = 32;
                break;

              case 42:
                setCandidates(array);
                console.log(candidates); // Set web3, accounts, and contract to the state, and then proceed with an

                _context3.next = 50;
                break;

              case 46:
                _context3.prev = 46;
                _context3.t6 = _context3["catch"](2);
                // Catch any errors for any of the above operations.
                alert("Failed to load web3, accounts, or contract. Check console for details.");
                console.error(_context3.t6);

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
            lineNumber: 111,
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
            lineNumber: 115,
            columnNumber: 21
          }
        }, "yes"), __jsx("button", {
          key: 2,
          className: "ui inverted red button",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 21
          }
        }, "no")],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
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
            lineNumber: 138,
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
            lineNumber: 142,
            columnNumber: 19
          }
        }, "yes"), __jsx("button", {
          key: 2,
          className: "ui inverted red button",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 19
          }
        }, "no")],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
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
        lineNumber: 153,
        columnNumber: 11
      }
    }, __jsx("button", {
      className: "extra content ui inverted red button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 15
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 19
      }
    }, __jsx("i", {
      className: "plus icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
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
          lineNumber: 174,
          columnNumber: 22
        }
      }, __jsx("div", {
        className: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 27
        }
      }, __jsx("div", {
        className: "header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
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
          lineNumber: 186,
          columnNumber: 11
        }
      }, __jsx("div", {
        style: {
          color: '#FFFFFF'
        },
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
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
        lineNumber: 200,
        columnNumber: 9
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_10__["PieChart"], {
      width: 400,
      height: 400,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
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
        lineNumber: 202,
        columnNumber: 22
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_10__["Tooltip"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
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
          lineNumber: 220,
          columnNumber: 20
        }
      }, __jsx("div", {
        className: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
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
          lineNumber: 230,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "content ui container",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "header clearing segment",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 17
        }
      }, candidate[0], " ", VoteModal(candidate[0], cAddresses[index])), __jsx("div", {
        className: "header clearing segment",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 17
        }
      }, leaveElection()), __jsx("div", {
        className: "meta",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 17
        }
      }, cAddresses[index]), __jsx("div", {
        className: "description",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 17
        }
      }, candidate[1])));
    });
  }

  var voted;

  if (hasVoted) {
    voted = __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 17
      }
    }, __jsx("i", {
      className: "floated check icon right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
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
          lineNumber: 262,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
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
          lineNumber: 264,
          columnNumber: 25
        }
      }, currentVote.title, __jsx("span", {
        className: "floated right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 29
        }
      }, voted)), __jsx("div", {
        className: "meta",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268,
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
          lineNumber: 269,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 29
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271,
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
          lineNumber: 275,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "ui cards",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 21
        }
      }, displayCandidates()), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 21
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Loader"], {
        active: voting,
        inline: "centered",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 21
        }
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
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
          lineNumber: 286,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "check icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 25
        }
      }), currentVote.numVotes, " Votes"), applyELection(), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 21
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 21
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 21
        }
      }), displayPer(), chart()));
    } else {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 20
        }
      }, " loading vote ...");
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["Header"], {
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
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 13
    }
  }), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 13
    }
  }, formatVote()), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 13
    }
  }));
};

_s(Vote, "Dgdai6qGOA0Jq+CWx3QY01LkczY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VsZWN0aW9ucy92b3RlL3ZvdGUuanMiXSwibmFtZXMiOlsiVm90ZSIsIndlYjNJbnN0YW5jZSIsInVzZVN0YXRlIiwid2ViMyIsInNldFdlYjMiLCJ2b3RlQWRkcmVzcyIsInNldFZvdGVBZGRyZXNzIiwiY3VycmVudFZvdGUiLCJzZXRDdXJyZW50Vm90ZSIsInZvdGVJbnN0YW5jZSIsInNldFZvdGVJbnN0YW5jZSIsImNhbmRpZGF0ZXMiLCJzZXRDYW5kaWRhdGVzIiwiY3VycmVudFVzZXIiLCJzZXRDdXJyZW50VXNlciIsInZvdGluZyIsInNldFZvdGluZyIsImhhc1ZvdGVkIiwic2V0SGFzVm90ZWQiLCJsb2FkIiwic2V0TG9hZCIsImNBZGRyZXNzZXMiLCJzZXRDQWRkcmVzc2VzIiwidXNlRWZmZWN0IiwiaW5pdFdlYjMiLCJnZXRXZWIzIiwiZ2V0RWxlY3Rpb25BZGRyZXNzIiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicG9zIiwiaW5kZXhPZiIsInNsaWNlIiwic2V0dXBWb3RlIiwiZXRoIiwiQ29udHJhY3QiLCJWb3RlQ29udHJhY3QiLCJhYmkiLCJpbnN0YW5jZSIsIm1ldGhvZHMiLCJjdXJyZW50RWxlY3Rpb24iLCJjYWxsIiwiZ2V0QWNjb3VudHMiLCJjdXJyZW50IiwiZ2V0RWxlY3Rpb25Wb3RlciIsImdldENhbmRpZGF0ZXNBZGRyZXNzZXMiLCJjYW5kaWRhdGVzQWRkcmVzc2VzIiwiY2FuZGlkYXRlc0NvdW50IiwiYXJyYXkiLCJpIiwiY29uc29sZSIsImxvZyIsImdldF9jYW5kaWRhdGUiLCJwdXNoIiwiYWxlcnQiLCJlcnJvciIsImxvbmciLCJ3aWR0aCIsInRleEFsaWduIiwibWFyZ2luIiwiY29sb3IiLCJWb3RlTW9kYWwiLCJuYW1lIiwiYWRkcmVzcyIsInZvdGVGb3IiLCJzZW5kIiwiZnJvbSIsImxlYXZlRWxlY3Rpb24iLCJzdGFydERhdGUiLCJEYXRlIiwiY3VyckRhdGUiLCJsZWF2ZXRoaXMiLCJhcHBseUVMZWN0aW9uIiwiZGF0YSIsImRpc3BsYXlQZXIiLCJuZXdyb3ciLCJtYXAiLCJjYW5kaWRhdGUiLCJpbmRleCIsIm51bVZvdGVzIiwiY2hhcnQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5Q2FuZGlkYXRlcyIsInZvdGVkIiwiZm9ybWF0Vm90ZSIsImVuZERhdGUiLCJ0aXRsZSIsInRvVVRDU3RyaW5nIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBWUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUVmLE1BQUlDLFlBQUo7O0FBRmUsa0JBR1NDLHNEQUFRLENBQUMsRUFBRCxDQUhqQjtBQUFBLE1BR1JDLElBSFE7QUFBQSxNQUdGQyxPQUhFOztBQUFBLG1CQUl1QkYsc0RBQVEsQ0FBQyxFQUFELENBSi9CO0FBQUEsTUFJUkcsV0FKUTtBQUFBLE1BSUtDLGNBSkw7O0FBQUEsbUJBS3VCSixzREFBUSxDQUFDLEVBQUQsQ0FML0I7QUFBQSxNQUtSSyxXQUxRO0FBQUEsTUFLS0MsY0FMTDs7QUFBQSxtQkFNeUJOLHNEQUFRLENBQUMsRUFBRCxDQU5qQztBQUFBLE1BTVJPLFlBTlE7QUFBQSxNQU1NQyxlQU5OOztBQUFBLG1CQU9zQlIsc0RBQVEsQ0FBQyxFQUFELENBUDlCO0FBQUEsTUFPUlMsVUFQUTtBQUFBLE1BT0lDLGFBUEo7O0FBQUEsbUJBUXdCVixzREFBUSxDQUFDLEVBQUQsQ0FSaEM7QUFBQSxNQVFSVyxXQVJRO0FBQUEsTUFRS0MsY0FSTDs7QUFBQSxtQkFTY1osc0RBQVEsQ0FBQyxLQUFELENBVHRCO0FBQUEsTUFTUmEsTUFUUTtBQUFBLE1BU0FDLFNBVEE7O0FBQUEsbUJBVWlCZCxzREFBUSxDQUFDLEtBQUQsQ0FWekI7QUFBQSxNQVVSZSxRQVZRO0FBQUEsTUFVRUMsV0FWRjs7QUFBQSxtQkFXU2hCLHNEQUFRLENBQUMsSUFBRCxDQVhqQjtBQUFBLE1BV1JpQixJQVhRO0FBQUEsTUFXRkMsT0FYRTs7QUFBQSxvQkFZcUJsQixzREFBUSxDQUFDLEVBQUQsQ0FaN0I7QUFBQSxNQVlSbUIsVUFaUTtBQUFBLE1BWUlDLGFBWko7O0FBY2ZDLHlEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0dDLFFBREg7QUFBQTtBQUFBOztBQUFBO0FBQUEsa01BQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ3lCQyx3REFBTyxFQURoQzs7QUFBQTtBQUNJeEIsNEJBREo7QUFFSUcsdUJBQU8sQ0FBQ0gsWUFBRCxDQUFQOztBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRFk7QUFBQTtBQUFBOztBQUtaLFFBQUl5QixrQkFBa0I7QUFBQSxrTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZkMsbUJBRGUsR0FDWEMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQURMO0FBRWZDLG1CQUZlLEdBRVhKLEdBQUcsQ0FBQ0ssT0FBSixDQUFZLE1BQVosSUFBb0IsQ0FGVDtBQUdyQjFCLDhCQUFjLENBQUNxQixHQUFHLENBQUNNLEtBQUosQ0FBVUYsR0FBVixDQUFELENBQWQ7O0FBSHFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQWxCTCxrQkFBa0I7QUFBQTtBQUFBO0FBQUEsT0FBdEI7O0FBS0FGLFlBQVE7QUFDUkUsc0JBQWtCO0FBQ3JCLEdBWlEsRUFZUCxDQUFDUCxJQUFELENBWk8sQ0FBVDtBQWNBSSx5REFBUyxDQUFDLFlBQU07QUFBQSxhQUNHVyxTQURIO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG9NQUNaO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFDTy9CLElBQUksSUFBSSxFQURmO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU0rQixJQUFJQSxJQUFJLENBQUNnQyxHQUFMLENBQVNDLFFBQWIsQ0FDbkJDLGlEQUFZLENBQUNDLEdBRE0sRUFFbkJqQyxXQUZtQixDQU4vQjs7QUFBQTtBQU1ja0Msd0JBTmQ7QUFVUTdCLCtCQUFlLENBQUM2QixRQUFELENBQWY7QUFWUiwrQkFXUS9CLGNBWFI7QUFBQTtBQUFBLHVCQVc2QitCLFFBQVEsQ0FBQ0MsT0FBVCxDQUFpQkMsZUFBakIsR0FBbUNDLElBQW5DLEVBWDdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBYTBCdkMsSUFBSSxDQUFDZ0MsR0FBTCxDQUFTUSxXQUFULEVBYjFCOztBQUFBO0FBQUE7QUFBQTtBQWFTQyx1QkFiVDtBQWNROUIsOEJBQWMsQ0FBQzhCLE9BQUQsQ0FBZDtBQWRSLCtCQWVRMUIsV0FmUjtBQUFBO0FBQUEsdUJBZTBCcUIsUUFBUSxDQUFDQyxPQUFULENBQWlCSyxnQkFBakIsQ0FBa0NELE9BQWxDLEVBQTJDRixJQUEzQyxFQWYxQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWlCMENILFFBQVEsQ0FBQ0MsT0FBVCxDQUFpQk0sc0JBQWpCLEdBQTBDSixJQUExQyxFQWpCMUM7O0FBQUE7QUFpQmNLLG1DQWpCZDtBQWtCUXpCLDZCQUFhLENBQUN5QixtQkFBRCxDQUFiO0FBbEJSO0FBQUEsdUJBbUJzQ1IsUUFBUSxDQUFDQyxPQUFULENBQWlCUSxlQUFqQixHQUFtQ04sSUFBbkMsRUFuQnRDOztBQUFBO0FBbUJjTSwrQkFuQmQ7QUFvQllDLHFCQXBCWixHQW9Cb0IsRUFwQnBCO0FBdUJpQkMsaUJBdkJqQixHQXVCcUIsQ0F2QnJCOztBQUFBO0FBQUEsc0JBdUJ3QkEsQ0FBQyxHQUFHRixlQXZCNUI7QUFBQTtBQUFBO0FBQUE7O0FBd0JZRyx1QkFBTyxDQUFDQyxHQUFSLENBQVlMLG1CQUFtQixDQUFDRyxDQUFELENBQS9CO0FBeEJaLCtCQXlCWUQsS0F6Qlo7QUFBQTtBQUFBLHVCQXlCNkJWLFFBQVEsQ0FBQ0MsT0FBVCxDQUFpQmEsYUFBakIsQ0FBK0JOLG1CQUFtQixDQUFDRyxDQUFELENBQWxELEVBQXVEUixJQUF2RCxFQXpCN0I7O0FBQUE7QUFBQTs7QUFBQSw2QkF5QmtCWSxJQXpCbEI7O0FBQUE7QUF1QjZDSixpQkFBQyxFQXZCOUM7QUFBQTtBQUFBOztBQUFBO0FBMkJRdEMsNkJBQWEsQ0FBQ3FDLEtBQUQsQ0FBYjtBQUNBRSx1QkFBTyxDQUFDQyxHQUFSLENBQVl6QyxVQUFaLEVBNUJSLENBNkJROztBQTdCUjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQStCSTtBQUNBNEMscUJBQUssMEVBQUw7QUFHQUosdUJBQU8sQ0FBQ0ssS0FBUjs7QUFuQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEWTtBQUFBO0FBQUE7O0FBdUNadEIsYUFBUztBQUNaLEdBeENRLEVBd0NQLENBQUMvQixJQUFELENBeENPLENBQVQ7QUEwQ0EsTUFBTXNELElBQUksR0FBRztBQUNUQyxTQUFLLEVBQUUsS0FERTtBQUVUQyxZQUFRLEVBQUMsUUFGQTtBQUdUQyxVQUFNLEVBQUUsTUFIQztBQUlUQyxTQUFLLEVBQUU7QUFKRSxHQUFiOztBQU9BLFdBQVNDLFNBQVQsQ0FBbUJDLElBQW5CLEVBQXdCQyxPQUF4QixFQUFpQztBQUM3QixRQUFJQyxPQUFPO0FBQUEsbU1BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNQeEQsWUFETztBQUFBO0FBQUE7QUFBQTs7QUFFTk8seUJBQVMsQ0FBQyxJQUFELENBQVQ7QUFGTTtBQUFBLHVCQUdBUCxZQUFZLENBQUMrQixPQUFiLENBQXFCeUIsT0FBckIsQ0FBNkJELE9BQTdCLEVBQXNDRSxJQUF0QyxDQUEyQztBQUM3Q0Msc0JBQUksRUFBRXREO0FBRHVDLGlCQUEzQyxDQUhBOztBQUFBO0FBTU5HLHlCQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0FJLHVCQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUFQOztBQVBNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVA4QyxPQUFPO0FBQUE7QUFBQTtBQUFBLE9BQVg7O0FBVUEsUUFBRyxDQUFDaEQsUUFBSixFQUFhO0FBQ1QsYUFDSSxNQUFDLHVEQUFEO0FBQ0ksZUFBTyxFQUFFO0FBQVEsbUJBQVMsRUFBQyxzQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEYjtBQUVJLGNBQU0sRUFBQyxPQUZYO0FBR0ksZUFBTyxFQUFFLHVDQUFzQzhDLElBQXRDLEdBQTJDLElBSHhEO0FBSUksZUFBTyxFQUFFLENBQ1Q7QUFBUSxhQUFHLEVBQUUsQ0FBYjtBQUFnQixtQkFBUyxFQUFDLDBCQUExQjtBQUFxRCxpQkFBTyxFQUFFRSxPQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURTLEVBRVQ7QUFBUSxhQUFHLEVBQUUsQ0FBYjtBQUFnQixtQkFBUyxFQUFDLHdCQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZTLENBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKO0FBVUgsS0FYRCxNQVlLLE9BQVEsa0VBQVI7QUFDUjs7QUFDRCxXQUFVRyxhQUFWLEdBQXlCO0FBQ25CLFFBQUlDLFNBQVMsR0FBRyxJQUFJQyxJQUFKLENBQVMvRCxXQUFXLENBQUM4RCxTQUFaLEdBQXdCLENBQWpDLENBQWhCO0FBQ0EsUUFBSUUsUUFBUSxHQUFFLElBQUlELElBQUosRUFBZDs7QUFDQSxRQUFJRSxTQUFTO0FBQUEsbU1BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNUL0QsWUFEUztBQUFBO0FBQUE7QUFBQTs7QUFFVk8seUJBQVMsQ0FBQyxJQUFELENBQVQ7QUFGVTtBQUFBLHVCQUdKUCxZQUFZLENBQUMrQixPQUFiLENBQXFCNEIsYUFBckIsR0FBcUNGLElBQXJDLENBQTBDO0FBQzVDQyxzQkFBSSxFQUFFdEQ7QUFEc0MsaUJBQTFDLENBSEk7O0FBQUE7QUFNVkcseUJBQVMsQ0FBQyxLQUFELENBQVQ7QUFDQUksdUJBQU8sQ0FBQyxDQUFDRCxJQUFGLENBQVA7O0FBUFU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVHFELFNBQVM7QUFBQTtBQUFBO0FBQUEsT0FBYjs7QUFVQSxRQUFHRCxRQUFRLEdBQUNGLFNBQVosRUFBc0I7QUFDcEIsYUFDRSxNQUFDLHVEQUFEO0FBQ0ksZUFBTyxFQUFFO0FBQVEsbUJBQVMsRUFBQyxzQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFEYjtBQUVJLGNBQU0sRUFBQyxnQkFGWDtBQUdJLGVBQU8sRUFBRSxtREFIYjtBQUlJLGVBQU8sRUFBRSxDQUNUO0FBQVEsYUFBRyxFQUFFLENBQWI7QUFBZ0IsbUJBQVMsRUFBQywwQkFBMUI7QUFBb0QsaUJBQU8sRUFBRUcsU0FBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUyxFQUVUO0FBQVEsYUFBRyxFQUFFLENBQWI7QUFBZ0IsbUJBQVMsRUFBQyx3QkFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGUyxDQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERjtBQVVEO0FBQ047O0FBQ0QsV0FBU0MsYUFBVCxHQUF3QjtBQUN0QixRQUFJSixTQUFTLEdBQUcsSUFBSUMsSUFBSixDQUFTL0QsV0FBVyxDQUFDOEQsU0FBWixHQUF3QixDQUFqQyxDQUFoQjtBQUNBLFFBQUlFLFFBQVEsR0FBRSxJQUFJRCxJQUFKLEVBQWQsQ0FGc0IsQ0FHeEI7O0FBQ0ksV0FDRSxNQUFDLDRDQUFEO0FBQU0sV0FBSyw2QkFBdUJqRSxXQUF2QixDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFRLGVBQVMsRUFBQyxzQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSztBQUFHLGVBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTCx3QkFESixDQURKLENBREYsQ0FKb0IsQ0FXeEI7QUFDQzs7QUFDRCxNQUFNcUUsSUFBSSxHQUFDLEVBQVg7QUFDQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHSSxXQUFTQyxVQUFULEdBQXNCO0FBQUE7O0FBQ2hCLFFBQUlDLE1BQU0sR0FBQyxFQUFYOztBQUNBLFFBQUlqRSxVQUFVLElBQUksRUFBbEIsRUFBcUI7QUFDakIsYUFBTztBQUFNLGlCQUFTLEVBQUMsTUFBaEI7QUFBdUIsYUFBSyxFQUFFOEMsSUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURKLENBREwsQ0FBUDtBQVFIOztBQUVELFdBQU85QyxVQUFVLENBQUNrRSxHQUFYLENBQWUsVUFBQ0MsU0FBRCxFQUFXQyxLQUFYO0FBQUEsYUFFdEI7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBdUIsYUFBSyxFQUFFdEIsSUFBOUI7QUFBb0MsV0FBRyxFQUFFc0IsS0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVJO0FBQUssYUFBSyxFQUFHO0FBQUNsQixlQUFLLEVBQUU7QUFBUixTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFFQWUsTUFBTSxHQUFDLEVBQVAsRUFDQUEsTUFBTSxDQUFDRSxTQUFTLENBQUNmLElBQVgsQ0FBTixHQUF1QmUsU0FBUyxDQUFDRSxRQURqQyxFQUVBTixJQUFJLENBQUNwQixJQUFMLENBQVVzQixNQUFWLENBSkEsRUFGSixDQUZzQjtBQUFBLEtBQWYsQ0FBUDtBQWFMOztBQUNELFdBQVNLLEtBQVQsR0FBZ0I7QUFDZCxXQUNFO0FBQUssV0FBSyxFQUFFO0FBQUNDLGlCQUFTLEVBQUM7QUFBWCxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLGtEQUFEO0FBQVUsV0FBSyxFQUFFLEdBQWpCO0FBQXNCLFlBQU0sRUFBRSxHQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ1MsTUFBQyw2Q0FBRDtBQUNFLGFBQU8sRUFBQyxPQURWO0FBRUUsdUJBQWlCLEVBQUUsS0FGckI7QUFHRSxVQUFJLEVBQUVSLElBSFI7QUFJRSxRQUFFLEVBQUUsR0FKTjtBQUtFLFFBQUUsRUFBRSxHQUxOO0FBTUUsaUJBQVcsRUFBRSxFQU5mO0FBT0UsVUFBSSxFQUFDLFNBUFA7QUFRRSxXQUFLLE1BUlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURULEVBV1MsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BWFQsQ0FESixDQURGO0FBaUJEOztBQUVELFdBQVNTLGlCQUFULEdBQTZCO0FBQUE7O0FBQ3pCLFFBQUl4RSxVQUFVLElBQUksRUFBbEIsRUFBcUI7QUFDakIsYUFBTztBQUFNLGlCQUFTLEVBQUMsTUFBaEI7QUFBdUIsYUFBSyxFQUFFOEMsSUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURKLENBREwsQ0FBUDtBQU9IOztBQUVELFdBQU85QyxVQUFVLENBQUNrRSxHQUFYLENBQWUsVUFBQ0MsU0FBRCxFQUFXQyxLQUFYO0FBQUEsYUFDdEI7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBdUIsYUFBSyxFQUFFdEIsSUFBOUI7QUFBb0MsV0FBRyxFQUFFc0IsS0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDS0QsU0FBUyxDQUFDLENBQUQsQ0FEZCxPQUNvQmhCLFNBQVMsQ0FBQ2dCLFNBQVMsQ0FBQyxDQUFELENBQVYsRUFBZXpELFVBQVUsQ0FBQzBELEtBQUQsQ0FBekIsQ0FEN0IsQ0FESixFQUlJO0FBQUssaUJBQVMsRUFBQyx5QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0tYLGFBQWEsRUFEbEIsQ0FKSixFQU9JO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSy9DLFVBQVUsQ0FBQzBELEtBQUQsQ0FEZixDQVBKLEVBVUk7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLRCxTQUFTLENBQUMsQ0FBRCxDQURkLENBVkosQ0FESixDQURzQjtBQUFBLEtBQWYsQ0FBUDtBQW9CSDs7QUFDRCxNQUFJTSxLQUFKOztBQUNBLE1BQUduRSxRQUFILEVBQWE7QUFDVG1FLFNBQUssR0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU07QUFBRyxlQUFTLEVBQUMsMEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFOLDRCQUFSO0FBQ0gsR0FGRCxNQUVPO0FBQ0hBLFNBQUssR0FBRyxrRUFBUjtBQUNIOztBQUVELFdBQVNDLFVBQVQsR0FBc0I7QUFDbEIsUUFBSTlFLFdBQUosRUFBZ0I7QUFDWixVQUFJOEQsU0FBUyxHQUFHLElBQUlDLElBQUosQ0FBUy9ELFdBQVcsQ0FBQzhELFNBQVosR0FBd0IsQ0FBakMsQ0FBaEI7QUFDQSxVQUFJaUIsT0FBTyxHQUFHLElBQUloQixJQUFKLENBQVMvRCxXQUFXLENBQUMrRSxPQUFaLEdBQXNCLENBQS9CLENBQWQ7QUFDQSxhQUFPLG1FQUNIO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQXlCLGFBQUssRUFBRTdCLElBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQWtDLGFBQUssRUFBRztBQUFDSSxlQUFLLEVBQUU7QUFBUixTQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0t0RCxXQUFXLENBQUNnRixLQURqQixFQUVJO0FBQU0saUJBQVMsRUFBQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWlDSCxLQUFqQyxDQUZKLENBREosRUFLSTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXVCZixTQUFTLENBQUNtQixXQUFWLEdBQXdCdkQsS0FBeEIsQ0FBOEIsQ0FBOUIsRUFBZ0MsRUFBaEMsQ0FBdkIsVUFBZ0VxRCxPQUFPLENBQUNFLFdBQVIsR0FBc0J2RCxLQUF0QixDQUE0QixDQUE1QixFQUE4QixFQUE5QixDQUFoRSxDQUxKLEVBTUk7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBeUIsYUFBSyxFQUFHO0FBQUN5QixlQUFLLEVBQUU7QUFBUixTQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSW5ELFdBQVcsQ0FBQ2tGLFdBQWhCLENBREEsQ0FESixDQU5KLENBREosRUFhSTtBQUFLLGFBQUssRUFBRTtBQUFDUCxtQkFBUyxFQUFDLFFBQVg7QUFBcUJ0QixnQkFBTSxFQUFDLE1BQTVCO0FBQW9DQyxlQUFLLEVBQUU7QUFBM0MsU0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0E7QUFBSyxpQkFBUyxFQUFFLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBNEJzQixpQkFBaUIsRUFBN0MsQ0FEQSxFQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGQSxFQUdBLE1BQUMsd0RBQUQ7QUFDSSxjQUFNLEVBQUVwRSxNQURaO0FBRUksY0FBTSxFQUFDLFVBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUhBLENBYkosRUFxQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQXJCSixFQXdCSTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUErQixhQUFLLEVBQUc7QUFBQzhDLGVBQUssRUFBRTtBQUFSLFNBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFHLGlCQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosRUFFS3RELFdBQVcsQ0FBQ3lFLFFBRmpCLFdBeEJKLEVBNEJLUCxhQUFhLEVBNUJsQixFQTZCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBN0JKLEVBOEJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUE5QkosRUErQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQS9CSixFQWdDS0UsVUFBVSxFQWhDZixFQWlDS00sS0FBSyxFQWpDVixDQURHLENBQVA7QUFxQ0gsS0F4Q0QsTUF5Q0k7QUFDQSxhQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQVA7QUFDSDtBQUNKOztBQUVELFNBQ0ksbUVBQ0ksTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtJLFVBQVUsRUFBZixDQUxKLEVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLEVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLENBREo7QUFjSCxDQTFTRDs7R0FBTXJGLEk7O0tBQUFBLEk7QUEyU1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VsZWN0aW9ucy92b3RlL3ZvdGUuNWQ5NTAzMmUzZWVmOWI2MWVlNTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInXHJcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi8uLi8uLi9nZXRXZWIzXCI7XHJcbmltcG9ydCBWb3RlQ29udHJhY3QgZnJvbSBcIi4uLy4uLy4uL2NvbnRyYWN0cy9Wb3RlLmpzb25cIjtcclxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi8uLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgeyBNb2RhbCwgRGltbWVyLCBMb2FkZXIsIEltYWdlLCBTZWdtZW50IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgUGllQ2hhcnQsXHJcbiAgUGllLFxyXG4gIFRvb2x0aXAsXHJcbiAgQmFyQ2hhcnQsXHJcbiAgWEF4aXMsXHJcbiAgWUF4aXMsXHJcbiAgTGVnZW5kLFxyXG4gIENhcnRlc2lhbkdyaWQsXHJcbiAgQmFyLFxyXG59IGZyb20gXCJyZWNoYXJ0c1wiO1xyXG5cclxuY29uc3QgVm90ZSA9ICgpID0+IHtcclxuXHJcbiAgICB2YXIgd2ViM0luc3RhbmNlO1xyXG4gICAgY29uc3QgW3dlYjMsIHNldFdlYjNdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZvdGVBZGRyZXNzLCBzZXRWb3RlQWRkcmVzc10gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtjdXJyZW50Vm90ZSwgc2V0Q3VycmVudFZvdGVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbdm90ZUluc3RhbmNlLCBzZXRWb3RlSW5zdGFuY2VdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbY2FuZGlkYXRlcywgc2V0Q2FuZGlkYXRlcyBdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlciBdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZvdGluZywgc2V0Vm90aW5nIF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtoYXNWb3RlZCwgc2V0SGFzVm90ZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbbG9hZCwgc2V0TG9hZF0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgW2NBZGRyZXNzZXMsIHNldENBZGRyZXNzZXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBpbml0V2ViMygpIHtcclxuICAgICAgICAgICAgd2ViM0luc3RhbmNlID0gYXdhaXQgZ2V0V2ViMygpO1xyXG4gICAgICAgICAgICBzZXRXZWIzKHdlYjNJbnN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBnZXRFbGVjdGlvbkFkZHJlc3MgPSBhc3luYygpID0+e1xyXG4gICAgICAgICAgICBjb25zdCB1cmw9d2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvcz11cmwuaW5kZXhPZigndm90ZScpKzU7XHJcbiAgICAgICAgICAgIHNldFZvdGVBZGRyZXNzKHVybC5zbGljZShwb3MpKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgaW5pdFdlYjMoKTtcclxuICAgICAgICBnZXRFbGVjdGlvbkFkZHJlc3MoKTtcclxuICAgIH0sW2xvYWRdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwVm90ZSgpIHtcclxuICAgICAgICAgICAgaWYod2ViMyA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBhd2FpdCBuZXcgd2ViMy5ldGguQ29udHJhY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgVm90ZUNvbnRyYWN0LmFiaSxcclxuICAgICAgICAgICAgICAgICAgICB2b3RlQWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHNldFZvdGVJbnN0YW5jZShpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50Vm90ZShhd2FpdCBpbnN0YW5jZS5tZXRob2RzLmN1cnJlbnRFbGVjdGlvbigpLmNhbGwoKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFxyXG4gICAgICAgICAgICAgICAgW2N1cnJlbnRdID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKVxyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFVzZXIoY3VycmVudClcclxuICAgICAgICAgICAgICAgIHNldEhhc1ZvdGVkKGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuZ2V0RWxlY3Rpb25Wb3RlcihjdXJyZW50KS5jYWxsKCkpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FuZGlkYXRlc0FkZHJlc3NlcyA9IGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuZ2V0Q2FuZGlkYXRlc0FkZHJlc3NlcygpLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgIHNldENBZGRyZXNzZXMoY2FuZGlkYXRlc0FkZHJlc3Nlcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYW5kaWRhdGVzQ291bnQgPSBhd2FpdCBpbnN0YW5jZS5tZXRob2RzLmNhbmRpZGF0ZXNDb3VudCgpLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgIHZhciBhcnJheSA9IFtdXHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbmRpZGF0ZXNDb3VudDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjYW5kaWRhdGVzQWRkcmVzc2VzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuZ2V0X2NhbmRpZGF0ZShjYW5kaWRhdGVzQWRkcmVzc2VzW2ldKS5jYWxsKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0Q2FuZGlkYXRlcyhhcnJheSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjYW5kaWRhdGVzKVxyXG4gICAgICAgICAgICAgICAgLy8gU2V0IHdlYjMsIGFjY291bnRzLCBhbmQgY29udHJhY3QgdG8gdGhlIHN0YXRlLCBhbmQgdGhlbiBwcm9jZWVkIHdpdGggYW5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxyXG4gICAgICAgICAgICBhbGVydChcclxuICAgICAgICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0dXBWb3RlKCk7XHJcbiAgICB9LFt3ZWIzXSlcclxuXHJcbiAgICBjb25zdCBsb25nID0ge1xyXG4gICAgICAgIHdpZHRoOiAnOTAlJyxcclxuICAgICAgICB0ZXhBbGlnbjonY2VudGVyJyxcclxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgICAgICBjb2xvcjogJyNmMDAwMDAnLFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFZvdGVNb2RhbChuYW1lLGFkZHJlc3MpIHtcclxuICAgICAgICB2YXIgdm90ZUZvciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgaWYodm90ZUluc3RhbmNlKXtcclxuICAgICAgICAgICAgICAgIHNldFZvdGluZyh0cnVlKVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdm90ZUluc3RhbmNlLm1ldGhvZHMudm90ZUZvcihhZGRyZXNzKS5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBjdXJyZW50VXNlclxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHNldFZvdGluZyhmYWxzZSlcclxuICAgICAgICAgICAgICAgIHNldExvYWQoIWxvYWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIWhhc1ZvdGVkKXtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9ezxidXR0b24gY2xhc3NOYW1lPVwidWkgcmlnaHQgZmxvYXRlZCBpbnZlcnRlZCByZWQgYnV0dG9uXCI+Vm90ZTwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9XCJWb3RlIVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17XCJhcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gdm90ZSBmb3IgXCIrIG5hbWUrXCIgP1wifVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17MX0gY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgZ3JlZW4gYnV0dG9uXCIgb25DbGljaz17dm90ZUZvcn0+eWVzPC9idXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXsyfSBjbGFzc05hbWU9XCJ1aSBpbnZlcnRlZCByZWQgYnV0dG9uXCIgPm5vPC9idXR0b24+XX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSByZXR1cm4gKDw+PC8+KVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gIGxlYXZlRWxlY3Rpb24oKXtcclxuICAgICAgICAgIHZhciBzdGFydERhdGUgPSBuZXcgRGF0ZShjdXJyZW50Vm90ZS5zdGFydERhdGUgKiAxKVxyXG4gICAgICAgICAgdmFyIGN1cnJEYXRlPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICB2YXIgbGVhdmV0aGlzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmKHZvdGVJbnN0YW5jZSl7XHJcbiAgICAgICAgICAgICAgICBzZXRWb3RpbmcodHJ1ZSlcclxuICAgICAgICAgICAgICAgIGF3YWl0IHZvdGVJbnN0YW5jZS5tZXRob2RzLmxlYXZlRWxlY3Rpb24oKS5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBjdXJyZW50VXNlclxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHNldFZvdGluZyhmYWxzZSlcclxuICAgICAgICAgICAgICAgIHNldExvYWQoIWxvYWQpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoY3VyckRhdGU8c3RhcnREYXRlKXtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgdHJpZ2dlcj17PGJ1dHRvbiBjbGFzc05hbWU9XCJ1aSByaWdodCBmbG9hdGVkIGludmVydGVkIHJlZCBidXR0b25cIj5MZWF2ZSBFbGVjdGlvbjwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiTGVhdmUgRWxlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50PXtcImFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBubyBsb25nZXIgYmUgYSBjYW5kaWRhdGVcIn1cclxuICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17MX0gY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgZ3JlZW4gYnV0dG9uXCJvbkNsaWNrPXtsZWF2ZXRoaXN9PnllczwvYnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9ezJ9IGNsYXNzTmFtZT1cInVpIGludmVydGVkIHJlZCBidXR0b25cIiA+bm88L2J1dHRvbj5dfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFwcGx5RUxlY3Rpb24oKXtcclxuICAgICAgdmFyIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnRWb3RlLnN0YXJ0RGF0ZSAqIDEpXHJcbiAgICAgIHZhciBjdXJyRGF0ZT0gbmV3IERhdGUoKVxyXG4gICAgLy8gICBpZihjdXJyRGF0ZTxzdGFydERhdGUpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgIDxMaW5rIHJvdXRlID17YC9lbGVjdGlvbnMvYXBwbHkvJHt2b3RlQWRkcmVzc31gfT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImV4dHJhIGNvbnRlbnQgdWkgaW52ZXJ0ZWQgcmVkIGJ1dHRvblwiID5cclxuICAgICAgICAgICAgICAgICAgPGRpdj48aSBjbGFzc05hbWU9XCJwbHVzIGljb25cIj48L2k+IEFwcGx5IGFzIENhbmRpZGF0ZTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIClcclxuICAgIC8vICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZGF0YT1bXTtcclxuICAgIC8qXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgdWkgY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgY2xlYXJpbmcgc2VnbWVudFwiPlxyXG5cclxuICAgICAgICAgIHtjYW5kaWRhdGUubmFtZX0ge1ZvdGVNb2RhbChjYW5kaWRhdGUubmFtZSwgY2FuZGlkYXRlLmNhbmRpZGF0ZUFkZHIpfTogICAgICAgIHtjYW5kaWRhdGUubnVtVm90ZXMvY3VycmVudFZvdGUubnVtVm90ZXMqMTAwfSVcclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5UGVyKCkge1xyXG4gICAgICAgICAgdmFyIG5ld3Jvdz17fTtcclxuICAgICAgICAgIGlmIChjYW5kaWRhdGVzID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgIHJldHVybiA8ZGl2ICBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e2xvbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm8gY2FuZGlkYXRlcyB5ZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZXMubWFwKChjYW5kaWRhdGUsaW5kZXgpID0+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgIHN0eWxlPXtsb25nfSBrZXk9e2luZGV4fT5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT0ge3tjb2xvcjogJyNGRkZGRkYnfX0+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5ld3Jvdz17fSxcclxuICAgICAgICAgICAgICBuZXdyb3dbY2FuZGlkYXRlLm5hbWVdPWNhbmRpZGF0ZS5udW1Wb3RlcyxcclxuICAgICAgICAgICAgICBkYXRhLnB1c2gobmV3cm93KX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjaGFydCgpe1xyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgIDxQaWVDaGFydCB3aWR0aD17NDAwfSBoZWlnaHQ9ezQwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxQaWVcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhS2V5PVwidXNlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGlzQW5pbWF0aW9uQWN0aXZlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGN4PXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgY3k9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICBvdXRlclJhZGl1cz17ODB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiM4ODg0ZDhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIC8+XHJcbiAgICAgICAgICAgIDwvUGllQ2hhcnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5Q2FuZGlkYXRlcygpIHtcclxuICAgICAgICBpZiAoY2FuZGlkYXRlcyA9PSBcIlwiKXtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgIGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17bG9uZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBubyBjYW5kaWRhdGVzIHlldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZXMubWFwKChjYW5kaWRhdGUsaW5kZXgpID0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgIHN0eWxlPXtsb25nfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IHVpIGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgY2xlYXJpbmcgc2VnbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYW5kaWRhdGVbMF19IHtWb3RlTW9kYWwoY2FuZGlkYXRlWzBdLCBjQWRkcmVzc2VzW2luZGV4XSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyIGNsZWFyaW5nIHNlZ21lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bGVhdmVFbGVjdGlvbigpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y0FkZHJlc3Nlc1tpbmRleF19XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2FuZGlkYXRlWzFdfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgdmFyIHZvdGVkO1xyXG4gICAgaWYoaGFzVm90ZWQpIHtcclxuICAgICAgICB2b3RlZCA9IDxzcGFuPjxpIGNsYXNzTmFtZT1cImZsb2F0ZWQgY2hlY2sgaWNvbiByaWdodFwiPjwvaT4gWW91IGhhdmUgYWxyZWFkeSBWb3RlZDwvc3Bhbj47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZvdGVkID0gPD48Lz5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmb3JtYXRWb3RlKCkge1xyXG4gICAgICAgIGlmIChjdXJyZW50Vm90ZSl7XHJcbiAgICAgICAgICAgIHZhciBzdGFydERhdGUgPSBuZXcgRGF0ZShjdXJyZW50Vm90ZS5zdGFydERhdGUgKiAxKVxyXG4gICAgICAgICAgICB2YXIgZW5kRGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnRWb3RlLmVuZERhdGUgKiAxKVxyXG4gICAgICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgY2FyZFwiIHN0eWxlPXtsb25nfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgY29udGFpbmVyXCIgc3R5bGU9IHt7Y29sb3I6ICcjZjAwMDAwJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRWb3RlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRlZCByaWdodFwiPnt2b3RlZH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFcIj57c3RhcnREYXRlLnRvVVRDU3RyaW5nKCkuc2xpY2UoMCwxNyl9IHRvIHtlbmREYXRlLnRvVVRDU3RyaW5nKCkuc2xpY2UoMCwxNyl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgY2FyZFwiIHN0eWxlPSB7e3dpZHRoOiAnMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y3VycmVudFZvdGUuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicsIG1hcmdpbjonNTBweCcsIGNvbG9yOiAnI2YwMDAwMCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJ1aSBjYXJkc1wiPntkaXNwbGF5Q2FuZGlkYXRlcygpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2FkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXt2b3Rpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubGluZT0nY2VudGVyZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmEgY29udGVudFwiIHN0eWxlPSB7e2NvbG9yOiAnI2YwMDAwMCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiY2hlY2sgaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRWb3RlLm51bVZvdGVzfSBWb3Rlc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHthcHBseUVMZWN0aW9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAge2Rpc3BsYXlQZXIoKX1cclxuICAgICAgICAgICAgICAgICAgICB7Y2hhcnQoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXY+IGxvYWRpbmcgdm90ZSAuLi48L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGgxPntmb3JtYXRWb3RlKCl9PC9oMT5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFZvdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=