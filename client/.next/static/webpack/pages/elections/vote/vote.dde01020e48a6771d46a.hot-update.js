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




var _jsxFileName = "C:\\Users\\user\\Documents\\GitHub\\voting-at-mcgill\\voting-at-mcgill\\client\\src\\pages\\elections\\vote\\vote.js",
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

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      data = _useState11[0],
      setData = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      state = _useState12[0],
      setState = _useState12[1];

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
        var instance, current, _yield$web3$eth$getAc, _yield$web3$eth$getAc2, candidatesAddresses, candidatesCount, array, data, i, currcand;

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
                _context3.next = 9;
                return web3.eth.getAccounts();

              case 9:
                _yield$web3$eth$getAc = _context3.sent;
                _yield$web3$eth$getAc2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_yield$web3$eth$getAc, 1);
                current = _yield$web3$eth$getAc2[0];
                setCurrentUser(current);
                _context3.t0 = setHasVoted;
                _context3.next = 16;
                return instance.methods.getVoted(current).call();

              case 16:
                _context3.t1 = _context3.sent;
                (0, _context3.t0)(_context3.t1);
                _context3.next = 20;
                return instance.methods.getCandidatesAddresses().call();

              case 20:
                candidatesAddresses = _context3.sent;
                setCAddresses(candidatesAddresses);
                _context3.next = 24;
                return instance.methods.candidatesCount().call();

              case 24:
                candidatesCount = _context3.sent;
                array = [];
                data = [];
                i = 0;

              case 28:
                if (!(i < candidatesCount)) {
                  _context3.next = 42;
                  break;
                }

                console.log(candidatesAddresses[i]);
                _context3.next = 32;
                return instance.methods.get_candidate(candidatesAddresses[i]).call();

              case 32:
                currcand = _context3.sent;
                data.push({
                  name: currcand[0],
                  value: parseInt(currcand[2])
                });
                _context3.t2 = array;
                _context3.next = 37;
                return instance.methods.get_candidate(candidatesAddresses[i]).call();

              case 37:
                _context3.t3 = _context3.sent;

                _context3.t2.push.call(_context3.t2, _context3.t3);

              case 39:
                i++;
                _context3.next = 28;
                break;

              case 42:
                setData(data);
                setCandidates(array);
                console.log(array);
                _context3.t4 = setCurrentVote;
                _context3.next = 48;
                return instance.methods.getElection().call();

              case 48:
                _context3.t5 = _context3.sent;
                (0, _context3.t4)(_context3.t5);
                console.log(currentVote); // Set web3, accounts, and contract to the state, and then proceed with an

                _context3.next = 57;
                break;

              case 53:
                _context3.prev = 53;
                _context3.t6 = _context3["catch"](2);
                // Catch any errors for any of the above operations.
                alert("Failed to load web3, accounts, or contract. Check console for details.");
                console.error(_context3.t6);

              case 57:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[2, 53]]);
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
            lineNumber: 117,
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
            lineNumber: 121,
            columnNumber: 21
          }
        }, "yes"), __jsx("button", {
          key: 2,
          className: "ui inverted red button",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 21
          }
        }, "no")],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 17
        }
      });
    } else return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null);
  }

  function leaveElection() {
    var startDate = new Date(parseInt(currentVote[4]) * 1);
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
            lineNumber: 144,
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
            lineNumber: 148,
            columnNumber: 19
          }
        }, "yes"), __jsx("button", {
          key: 2,
          className: "ui inverted red button",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 19
          }
        }, "no")],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 15
        }
      });
    }
  }

  function applyELection() {
    var startDate = new Date(parseInt(currentVote[4]) * 1);
    var currDate = new Date(); //   if(currDate<startDate){

    return __jsx(_routes__WEBPACK_IMPORTED_MODULE_8__["Link"], {
      route: "/elections/apply/".concat(voteAddress),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 11
      }
    }, __jsx("button", {
      className: "extra content ui inverted red button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 15
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 19
      }
    }, __jsx("i", {
      className: "plus icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 24
      }
    }), " Apply as Candidate"))); //   }
  }
  /*
  <div className="content ui container">
      <div className="header clearing segment">
          {candidate.name} {VoteModal(candidate.name, candidate.candidateAddr)}:        {candidate.numVotes/currentVote.numVotes*100}%
        </div>
  </div>
  */


  function displayPer() {
    var newrow = {};
    var fewrow = {};

    if (candidates == "") {
      return __jsx("div", {
        className: "card",
        style: long,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 22
        }
      }, __jsx("div", {
        className: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 27
        }
      }, __jsx("div", {
        className: "header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 31
        }
      }, "No Results to Display")));
    } else {
      return __jsx("div", {
        className: "card",
        style: long,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 24
        }
      }, __jsx("div", {
        className: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 33
        }
      }, "Results")));
    }
  }

  console.log('here');
  console.log(data);

  function checkyboi() {
    var onChange = function onChange(e) {
      setState({
        view: e.target.checked
      });
    };

    var view = state.view;
    return __jsx("div", {
      class: "ui  floated compact segment",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 9
      }
    }, "Change your view to a ", view ? "Pie Chart" : "Bar Chart", " "), __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 11
      }
    }, __jsx("input", {
      type: "checkbox",
      checked: view,
      onChange: onChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 13
      }
    })));
  }

  function chart() {
    var _this2 = this;

    if (state == false) {
      return __jsx(recharts__WEBPACK_IMPORTED_MODULE_10__["ResponsiveContainer"], {
        width: "100%",
        height: 300,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 9
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_10__["PieChart"], {
        height: 300,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 13
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_10__["Pie"], {
        data: data,
        cx: "50%",
        cy: "50%",
        outerRadius: 100,
        fill: "#FF0000",
        dataKey: "value",
        label: function label(_ref4) {
          var cx = _ref4.cx,
              cy = _ref4.cy,
              midAngle = _ref4.midAngle,
              innerRadius = _ref4.innerRadius,
              outerRadius = _ref4.outerRadius,
              value = _ref4.value,
              index = _ref4.index;
          console.log("handling label?");
          var RADIAN = Math.PI / 180; // eslint-disable-next-line

          var radius = 25 + innerRadius + (outerRadius - innerRadius); // eslint-disable-next-line

          var x = cx + radius * Math.cos(-midAngle * RADIAN); // eslint-disable-next-line

          var y = cy + radius * Math.sin(-midAngle * RADIAN);
          return __jsx("text", {
            x: x,
            y: y,
            fill: "FF0000",
            textAnchor: x > cx ? "start" : "end",
            dominantBaseline: "central",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 21
            }
          }, data[index].name, " (", value, ")");
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 15
        }
      })));
    }

    if (state == true) {
      return __jsx(recharts__WEBPACK_IMPORTED_MODULE_10__["ResponsiveContainer"], {
        width: "100%",
        height: 300,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 9
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_10__["BarChart"], {
        width: 600,
        height: 400,
        data: data,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 11
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_10__["XAxis"], {
        datakey: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 13
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_10__["YAxis"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 13
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_10__["Tooltip"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 13
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_10__["Bar"], {
        dataKey: "value",
        fill: "#FF0000",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 13
        }
      })));
    }
  }

  function SimpleBarChart() {
    var _this3 = this;

    var fata = [{
      "AnswerRef": "one",
      "Text": "5 out of 50 throws",
      "Score": 0,
      "RespondentPercentage": 12,
      "Rank": 1
    }, {
      "AnswerRef": "two",
      "Text": "25 out of 50 throws",
      "Score": 0,
      "RespondentPercentage": 32,
      "Rank": 2
    }, {
      "AnswerRef": "three",
      "Text": "30 out of 50 throws",
      "Score": 1,
      "RespondentPercentage": 41,
      "Rank": 3
    }, {
      "AnswerRef": "four",
      "Text": "None of the above",
      "Score": 0,
      "RespondentPercentage": 16,
      "Rank": 4
    }];
    return __jsx(recharts__WEBPACK_IMPORTED_MODULE_10__["BarChart"], {
      width: "100%",
      height: 260,
      data: fata,
      margin: {
        top: 0,
        right: 0,
        left: 0,
        bottom: 25
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 16
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_10__["XAxis"], {
      dataKey: "Text",
      fontFamily: "sans-serif",
      tickSize: true,
      dy: "25",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 18
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_10__["YAxis"], {
      hide: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 18
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_10__["CartesianGrid"], {
      vertical: false,
      stroke: "#ebf3f0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 18
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_10__["Bar"], {
      dataKey: "RespondentPercentage",
      barSize: 170,
      fontFamily: "sans-serif",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 18
      }
    }, fata.map(function (entry, index) {
      return __jsx(recharts__WEBPACK_IMPORTED_MODULE_10__["Cell"], {
        fill: fata[index].AnswerRef === "three" ? '#61bf93' : '#ededed',
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 31
        }
      });
    })));
  }

  function displayCandidates() {
    var _this4 = this;

    if (candidates == "") {
      return __jsx("div", {
        className: "card",
        style: long,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 20
        }
      }, __jsx("div", {
        className: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 29
        }
      }, "no candidates yet")));
    }

    return candidates.map(function (candidate, index) {
      return __jsx("div", {
        className: "card",
        style: long,
        key: index,
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "content ui container",
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "header clearing segment",
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363,
          columnNumber: 17
        }
      }, candidate[0], " ", VoteModal(candidate[0], cAddresses[index])), __jsx("div", {
        className: "header clearing segment",
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366,
          columnNumber: 17
        }
      }, leaveElection()), __jsx("div", {
        className: "meta",
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 17
        }
      }, cAddresses[index]), __jsx("div", {
        className: "description",
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372,
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
        lineNumber: 383,
        columnNumber: 17
      }
    }, __jsx("i", {
      className: "floated check icon right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 23
      }
    }), " You have already Voted");
  } else {
    voted = __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null);
  }

  function formatVote() {
    if (currentVote[3] == currentVote[3]) {
      var startDate = new Date(parseInt(currentVote[4]) * 1);
      var endDate = new Date(parseInt(currentVote[5]) * 1);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
        className: "ui card",
        style: long,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394,
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
          lineNumber: 395,
          columnNumber: 25
        }
      }, currentVote[3], __jsx("span", {
        className: "floated right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397,
          columnNumber: 29
        }
      }, voted)), __jsx("div", {
        className: "meta",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399,
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
          lineNumber: 400,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401,
          columnNumber: 29
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402,
          columnNumber: 29
        }
      }, currentVote[6])))), __jsx("div", {
        style: {
          textAlign: 'center',
          margin: '50px',
          color: '#f00000'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "ui cards",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 21
        }
      }, displayCandidates()), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408,
          columnNumber: 21
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Loader"], {
        active: voting,
        inline: "centered",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 21
        }
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414,
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
          lineNumber: 417,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "check icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418,
          columnNumber: 25
        }
      }), parseInt(currentVote[7]), " Votes"), applyELection(), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422,
          columnNumber: 21
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423,
          columnNumber: 21
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424,
          columnNumber: 21
        }
      }), displayPer(), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427,
          columnNumber: 21
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428,
          columnNumber: 21
        }
      }), checkyboi(), chart(), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431,
          columnNumber: 21
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432,
          columnNumber: 21
        }
      })));
    } else {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438,
          columnNumber: 20
        }
      }, " loading vote ...");
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 13
    }
  }), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 13
    }
  }, formatVote()), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 13
    }
  }));
};

_s(Vote, "C/XTQahmcqaYbApa5HS1T4Cffd4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VsZWN0aW9ucy92b3RlL3ZvdGUuanMiXSwibmFtZXMiOlsiVm90ZSIsIndlYjNJbnN0YW5jZSIsInVzZVN0YXRlIiwid2ViMyIsInNldFdlYjMiLCJ2b3RlQWRkcmVzcyIsInNldFZvdGVBZGRyZXNzIiwiY3VycmVudFZvdGUiLCJzZXRDdXJyZW50Vm90ZSIsInZvdGVJbnN0YW5jZSIsInNldFZvdGVJbnN0YW5jZSIsImNhbmRpZGF0ZXMiLCJzZXRDYW5kaWRhdGVzIiwiY3VycmVudFVzZXIiLCJzZXRDdXJyZW50VXNlciIsInZvdGluZyIsInNldFZvdGluZyIsImhhc1ZvdGVkIiwic2V0SGFzVm90ZWQiLCJsb2FkIiwic2V0TG9hZCIsImNBZGRyZXNzZXMiLCJzZXRDQWRkcmVzc2VzIiwiZGF0YSIsInNldERhdGEiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiaW5pdFdlYjMiLCJnZXRXZWIzIiwiZ2V0RWxlY3Rpb25BZGRyZXNzIiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicG9zIiwiaW5kZXhPZiIsInNsaWNlIiwic2V0dXBWb3RlIiwiZXRoIiwiQ29udHJhY3QiLCJWb3RlQ29udHJhY3QiLCJhYmkiLCJpbnN0YW5jZSIsImdldEFjY291bnRzIiwiY3VycmVudCIsIm1ldGhvZHMiLCJnZXRWb3RlZCIsImNhbGwiLCJnZXRDYW5kaWRhdGVzQWRkcmVzc2VzIiwiY2FuZGlkYXRlc0FkZHJlc3NlcyIsImNhbmRpZGF0ZXNDb3VudCIsImFycmF5IiwiaSIsImNvbnNvbGUiLCJsb2ciLCJnZXRfY2FuZGlkYXRlIiwiY3VycmNhbmQiLCJwdXNoIiwibmFtZSIsInZhbHVlIiwicGFyc2VJbnQiLCJnZXRFbGVjdGlvbiIsImFsZXJ0IiwiZXJyb3IiLCJsb25nIiwid2lkdGgiLCJ0ZXhBbGlnbiIsIm1hcmdpbiIsImNvbG9yIiwiVm90ZU1vZGFsIiwiYWRkcmVzcyIsInZvdGVGb3IiLCJzZW5kIiwiZnJvbSIsImxlYXZlRWxlY3Rpb24iLCJzdGFydERhdGUiLCJEYXRlIiwiY3VyckRhdGUiLCJsZWF2ZXRoaXMiLCJhcHBseUVMZWN0aW9uIiwiZGlzcGxheVBlciIsIm5ld3JvdyIsImZld3JvdyIsImNoZWNreWJvaSIsIm9uQ2hhbmdlIiwiZSIsInZpZXciLCJ0YXJnZXQiLCJjaGVja2VkIiwiY2hhcnQiLCJjeCIsImN5IiwibWlkQW5nbGUiLCJpbm5lclJhZGl1cyIsIm91dGVyUmFkaXVzIiwiaW5kZXgiLCJSQURJQU4iLCJNYXRoIiwiUEkiLCJyYWRpdXMiLCJ4IiwiY29zIiwieSIsInNpbiIsIlNpbXBsZUJhckNoYXJ0IiwiZmF0YSIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsIm1hcCIsImVudHJ5IiwiQW5zd2VyUmVmIiwiZGlzcGxheUNhbmRpZGF0ZXMiLCJjYW5kaWRhdGUiLCJ2b3RlZCIsImZvcm1hdFZvdGUiLCJlbmREYXRlIiwidG9VVENTdHJpbmciLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBWUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUVmLE1BQUlDLFlBQUo7O0FBRmUsa0JBR1NDLHNEQUFRLENBQUMsRUFBRCxDQUhqQjtBQUFBLE1BR1JDLElBSFE7QUFBQSxNQUdGQyxPQUhFOztBQUFBLG1CQUl1QkYsc0RBQVEsQ0FBQyxFQUFELENBSi9CO0FBQUEsTUFJUkcsV0FKUTtBQUFBLE1BSUtDLGNBSkw7O0FBQUEsbUJBS3VCSixzREFBUSxDQUFDLEVBQUQsQ0FML0I7QUFBQSxNQUtSSyxXQUxRO0FBQUEsTUFLS0MsY0FMTDs7QUFBQSxtQkFNeUJOLHNEQUFRLENBQUMsRUFBRCxDQU5qQztBQUFBLE1BTVJPLFlBTlE7QUFBQSxNQU1NQyxlQU5OOztBQUFBLG1CQU9zQlIsc0RBQVEsQ0FB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O0tBQUFBLEk7QUF1YlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VsZWN0aW9ucy92b3RlL3ZvdGUuZGRlMDEwMjBlNDhhNjc3MWQ0NmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGUsIENvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlcidcclxuaW1wb3J0IGdldFdlYjMgZnJvbSBcIi4uLy4uLy4uL2dldFdlYjNcIjtcclxuaW1wb3J0IFZvdGVDb250cmFjdCBmcm9tIFwiLi4vLi4vLi4vY29udHJhY3RzL1ZvdGUuanNvblwiO1xyXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uLy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCB7IE1vZGFsLCBEaW1tZXIsIExvYWRlciwgSW1hZ2UsIFNlZ21lbnQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IHtcclxuICBQaWVDaGFydCxcclxuICBQaWUsXHJcbiAgVG9vbHRpcCxcclxuICBCYXJDaGFydCxcclxuICBYQXhpcyxcclxuICBZQXhpcyxcclxuICBMZWdlbmQsXHJcbiAgQ2FydGVzaWFuR3JpZCxcclxuICBCYXIsIFJlc3BvbnNpdmVDb250YWluZXIsQ2VsbCxBbnN3ZXJSZWZcclxufSBmcm9tIFwicmVjaGFydHNcIjtcclxuXHJcbmNvbnN0IFZvdGUgPSAoKSA9PiB7XHJcblxyXG4gICAgdmFyIHdlYjNJbnN0YW5jZTtcclxuICAgIGNvbnN0IFt3ZWIzLCBzZXRXZWIzXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt2b3RlQWRkcmVzcywgc2V0Vm90ZUFkZHJlc3NdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbY3VycmVudFZvdGUsIHNldEN1cnJlbnRWb3RlXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3ZvdGVJbnN0YW5jZSwgc2V0Vm90ZUluc3RhbmNlXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2NhbmRpZGF0ZXMsIHNldENhbmRpZGF0ZXMgXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXIgXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt2b3RpbmcsIHNldFZvdGluZyBdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaGFzVm90ZWQsIHNldEhhc1ZvdGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2xvYWQsIHNldExvYWRdID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IFtjQWRkcmVzc2VzLCBzZXRDQWRkcmVzc2VzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBpbml0V2ViMygpIHtcclxuICAgICAgICAgICAgd2ViM0luc3RhbmNlID0gYXdhaXQgZ2V0V2ViMygpO1xyXG4gICAgICAgICAgICBzZXRXZWIzKHdlYjNJbnN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBnZXRFbGVjdGlvbkFkZHJlc3MgPSBhc3luYygpID0+e1xyXG4gICAgICAgICAgICBjb25zdCB1cmw9d2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvcz11cmwuaW5kZXhPZigndm90ZScpKzU7XHJcbiAgICAgICAgICAgIHNldFZvdGVBZGRyZXNzKHVybC5zbGljZShwb3MpKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgaW5pdFdlYjMoKTtcclxuICAgICAgICBnZXRFbGVjdGlvbkFkZHJlc3MoKTtcclxuICAgIH0sW2xvYWRdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwVm90ZSgpIHtcclxuICAgICAgICAgICAgaWYod2ViMyA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBhd2FpdCBuZXcgd2ViMy5ldGguQ29udHJhY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgVm90ZUNvbnRyYWN0LmFiaSxcclxuICAgICAgICAgICAgICAgICAgICB2b3RlQWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHNldFZvdGVJbnN0YW5jZShpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFxyXG4gICAgICAgICAgICAgICAgW2N1cnJlbnRdID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKVxyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFVzZXIoY3VycmVudClcclxuICAgICAgICAgICAgICAgIHNldEhhc1ZvdGVkKGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuZ2V0Vm90ZWQoY3VycmVudCkuY2FsbCgpKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbmRpZGF0ZXNBZGRyZXNzZXMgPSBhd2FpdCBpbnN0YW5jZS5tZXRob2RzLmdldENhbmRpZGF0ZXNBZGRyZXNzZXMoKS5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRDQWRkcmVzc2VzKGNhbmRpZGF0ZXNBZGRyZXNzZXMpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FuZGlkYXRlc0NvdW50ID0gYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5jYW5kaWRhdGVzQ291bnQoKS5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJyYXkgPSBbXVxyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPVtdXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbmRpZGF0ZXNDb3VudDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjYW5kaWRhdGVzQWRkcmVzc2VzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmNhbmQ9YXdhaXQgaW5zdGFuY2UubWV0aG9kcy5nZXRfY2FuZGlkYXRlKGNhbmRpZGF0ZXNBZGRyZXNzZXNbaV0pLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goeyBuYW1lOiBjdXJyY2FuZFswXSwgdmFsdWU6cGFyc2VJbnQoY3VycmNhbmRbMl0pIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuZ2V0X2NhbmRpZGF0ZShjYW5kaWRhdGVzQWRkcmVzc2VzW2ldKS5jYWxsKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldERhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRDYW5kaWRhdGVzKGFycmF5KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFycmF5KVxyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFZvdGUoYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5nZXRFbGVjdGlvbigpLmNhbGwoKSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRWb3RlKVxyXG4gICAgICAgICAgICAgICAgLy8gU2V0IHdlYjMsIGFjY291bnRzLCBhbmQgY29udHJhY3QgdG8gdGhlIHN0YXRlLCBhbmQgdGhlbiBwcm9jZWVkIHdpdGggYW5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxyXG4gICAgICAgICAgICBhbGVydChcclxuICAgICAgICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0dXBWb3RlKCk7XHJcbiAgICB9LFt3ZWIzXSlcclxuXHJcbiAgICBjb25zdCBsb25nID0ge1xyXG4gICAgICAgIHdpZHRoOiAnOTAlJyxcclxuICAgICAgICB0ZXhBbGlnbjonY2VudGVyJyxcclxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgICAgICBjb2xvcjogJyNmMDAwMDAnLFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFZvdGVNb2RhbChuYW1lLGFkZHJlc3MpIHtcclxuICAgICAgICB2YXIgdm90ZUZvciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgaWYodm90ZUluc3RhbmNlKXtcclxuICAgICAgICAgICAgICAgIHNldFZvdGluZyh0cnVlKVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdm90ZUluc3RhbmNlLm1ldGhvZHMudm90ZUZvcihhZGRyZXNzKS5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBjdXJyZW50VXNlclxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHNldFZvdGluZyhmYWxzZSlcclxuICAgICAgICAgICAgICAgIHNldExvYWQoIWxvYWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIWhhc1ZvdGVkKXtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9ezxidXR0b24gY2xhc3NOYW1lPVwidWkgcmlnaHQgZmxvYXRlZCBpbnZlcnRlZCByZWQgYnV0dG9uXCI+Vm90ZTwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9XCJWb3RlIVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17XCJhcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gdm90ZSBmb3IgXCIrIG5hbWUrXCIgP1wifVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17MX0gY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgZ3JlZW4gYnV0dG9uXCIgb25DbGljaz17dm90ZUZvcn0+eWVzPC9idXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXsyfSBjbGFzc05hbWU9XCJ1aSBpbnZlcnRlZCByZWQgYnV0dG9uXCIgPm5vPC9idXR0b24+XX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSByZXR1cm4gKDw+PC8+KVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gIGxlYXZlRWxlY3Rpb24oKXtcclxuICAgICAgICAgIHZhciBzdGFydERhdGUgPSBuZXcgRGF0ZShwYXJzZUludChjdXJyZW50Vm90ZVs0XSkgKiAxKVxyXG4gICAgICAgICAgdmFyIGN1cnJEYXRlPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICB2YXIgbGVhdmV0aGlzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmKHZvdGVJbnN0YW5jZSl7XHJcbiAgICAgICAgICAgICAgICBzZXRWb3RpbmcodHJ1ZSlcclxuICAgICAgICAgICAgICAgIGF3YWl0IHZvdGVJbnN0YW5jZS5tZXRob2RzLmxlYXZlRWxlY3Rpb24oKS5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBjdXJyZW50VXNlclxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHNldFZvdGluZyhmYWxzZSlcclxuICAgICAgICAgICAgICAgIHNldExvYWQoIWxvYWQpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoY3VyckRhdGU8c3RhcnREYXRlKXtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgdHJpZ2dlcj17PGJ1dHRvbiBjbGFzc05hbWU9XCJ1aSByaWdodCBmbG9hdGVkIGludmVydGVkIHJlZCBidXR0b25cIj5MZWF2ZSBFbGVjdGlvbjwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiTGVhdmUgRWxlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50PXtcImFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBubyBsb25nZXIgYmUgYSBjYW5kaWRhdGVcIn1cclxuICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17MX0gY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgZ3JlZW4gYnV0dG9uXCJvbkNsaWNrPXtsZWF2ZXRoaXN9PnllczwvYnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9ezJ9IGNsYXNzTmFtZT1cInVpIGludmVydGVkIHJlZCBidXR0b25cIiA+bm88L2J1dHRvbj5dfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFwcGx5RUxlY3Rpb24oKXtcclxuICAgICAgdmFyIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHBhcnNlSW50KGN1cnJlbnRWb3RlWzRdKSogMSlcclxuICAgICAgdmFyIGN1cnJEYXRlPSBuZXcgRGF0ZSgpXHJcbiAgICAvLyAgIGlmKGN1cnJEYXRlPHN0YXJ0RGF0ZSl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgPExpbmsgcm91dGUgPXtgL2VsZWN0aW9ucy9hcHBseS8ke3ZvdGVBZGRyZXNzfWB9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZXh0cmEgY29udGVudCB1aSBpbnZlcnRlZCByZWQgYnV0dG9uXCIgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PjxpIGNsYXNzTmFtZT1cInBsdXMgaWNvblwiPjwvaT4gQXBwbHkgYXMgQ2FuZGlkYXRlPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKVxyXG4gICAgLy8gICB9XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCB1aSBjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlciBjbGVhcmluZyBzZWdtZW50XCI+XHJcblxyXG4gICAgICAgICAge2NhbmRpZGF0ZS5uYW1lfSB7Vm90ZU1vZGFsKGNhbmRpZGF0ZS5uYW1lLCBjYW5kaWRhdGUuY2FuZGlkYXRlQWRkcil9OiAgICAgICAge2NhbmRpZGF0ZS5udW1Wb3Rlcy9jdXJyZW50Vm90ZS5udW1Wb3RlcyoxMDB9JVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlQZXIoKSB7XHJcbiAgICAgICAgICB2YXIgbmV3cm93PXt9O1xyXG4gICAgICAgICAgdmFyIGZld3Jvdz17fTtcclxuICAgICAgICAgIGlmIChjYW5kaWRhdGVzID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgIHJldHVybiA8ZGl2ICBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e2xvbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm8gUmVzdWx0cyB0byBEaXNwbGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2ICBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e2xvbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVzdWx0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ2hlcmUnKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgZnVuY3Rpb24gY2hlY2t5Ym9pKCl7XHJcbiAgICAgIHZhciBvbkNoYW5nZSA9IGUgPT57c2V0U3RhdGUoe3ZpZXc6ZS50YXJnZXQuY2hlY2tlZH0pfVxyXG4gICAgICBjb25zdCB7dmlld309IHN0YXRlXHJcbiAgICAgIHJldHVybihcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInVpICBmbG9hdGVkIGNvbXBhY3Qgc2VnbWVudFwiPlxyXG4gICAgICAgIDxoMT5DaGFuZ2UgeW91ciB2aWV3IHRvIGEge3ZpZXcgPyAgXCJQaWUgQ2hhcnRcIjogXCJCYXIgQ2hhcnRcIn0gPC9oMT5cclxuXHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXt2aWV3fVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hhcnQoKXtcclxuICAgICAgaWYgKHN0YXRlPT1mYWxzZSl7XHJcblxyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PXszMDB9PlxyXG4gICAgICAgICAgICA8UGllQ2hhcnQgaGVpZ2h0PXszMDB9PlxyXG4gICAgICAgICAgICAgIDxQaWVcclxuICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICBjeD1cIjUwJVwiXHJcbiAgICAgICAgICAgICAgICBjeT1cIjUwJVwiXHJcbiAgICAgICAgICAgICAgICBvdXRlclJhZGl1cz17MTAwfVxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNGRjAwMDBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YUtleT1cInZhbHVlXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPXsoe1xyXG4gICAgICAgICAgICAgICAgICBjeCxcclxuICAgICAgICAgICAgICAgICAgY3ksXHJcbiAgICAgICAgICAgICAgICAgIG1pZEFuZ2xlLFxyXG4gICAgICAgICAgICAgICAgICBpbm5lclJhZGl1cyxcclxuICAgICAgICAgICAgICAgICAgb3V0ZXJSYWRpdXMsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICBpbmRleFxyXG4gICAgICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsaW5nIGxhYmVsP1wiKTtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgUkFESUFOID0gTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IDI1ICsgaW5uZXJSYWRpdXMgKyAob3V0ZXJSYWRpdXMgLSBpbm5lclJhZGl1cyk7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICAgICAgICBjb25zdCB4ID0gY3ggKyByYWRpdXMgKiBNYXRoLmNvcygtbWlkQW5nbGUgKiBSQURJQU4pO1xyXG4gICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICAgICAgICAgICAgY29uc3QgeSA9IGN5ICsgcmFkaXVzICogTWF0aC5zaW4oLW1pZEFuZ2xlICogUkFESUFOKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRcclxuICAgICAgICAgICAgICAgICAgICAgIHg9e3h9XHJcbiAgICAgICAgICAgICAgICAgICAgICB5PXt5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIkZGMDAwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QW5jaG9yPXt4ID4gY3ggPyBcInN0YXJ0XCIgOiBcImVuZFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgZG9taW5hbnRCYXNlbGluZT1cImNlbnRyYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtkYXRhW2luZGV4XS5uYW1lfSAoe3ZhbHVlfSlcclxuICAgICAgICAgICAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvUGllQ2hhcnQ+XHJcbiAgICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxyXG4gICAgICApXHJcblxyXG4gICAgfVxyXG5cclxuICAgICAgaWYoc3RhdGU9PXRydWUpe1xyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PXszMDB9PlxyXG4gICAgICAgICAgPEJhckNoYXJ0IHdpZHRoID17NjAwfSBoZWlnaHQ9ezQwMH0gZGF0YT17ZGF0YX0+XHJcbiAgICAgICAgICAgIDxYQXhpcyBkYXRha2V5PVwibmFtZVwiLz5cclxuICAgICAgICAgICAgPFlBeGlzIC8+XHJcbiAgICAgICAgICAgIDxUb29sdGlwLz5cclxuICAgICAgICAgICAgPEJhciBkYXRhS2V5PVwidmFsdWVcIiBmaWxsPVwiI0ZGMDAwMFwiLz5cclxuICAgICAgICAgIDwvQmFyQ2hhcnQ+XHJcbiAgICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFNpbXBsZUJhckNoYXJ0KCl7XHJcbiAgICAgICAgICAgICAgY29uc3QgZmF0YSA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIFwiQW5zd2VyUmVmXCI6IFwib25lXCIsXHJcbiAgICAgICAgICAgICAgXCJUZXh0XCI6IFwiNSBvdXQgb2YgNTAgdGhyb3dzXCIsXHJcbiAgICAgICAgICAgICAgXCJTY29yZVwiOiAwLFxyXG4gICAgICAgICAgICAgIFwiUmVzcG9uZGVudFBlcmNlbnRhZ2VcIjogMTIsXHJcbiAgICAgICAgICAgICAgXCJSYW5rXCI6IDFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIFwiQW5zd2VyUmVmXCI6IFwidHdvXCIsXHJcbiAgICAgICAgICAgICAgXCJUZXh0XCI6IFwiMjUgb3V0IG9mIDUwIHRocm93c1wiLFxyXG4gICAgICAgICAgICAgIFwiU2NvcmVcIjogMCxcclxuICAgICAgICAgICAgICBcIlJlc3BvbmRlbnRQZXJjZW50YWdlXCI6IDMyLFxyXG4gICAgICAgICAgICAgIFwiUmFua1wiOiAyXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBcIkFuc3dlclJlZlwiOiBcInRocmVlXCIsXHJcbiAgICAgICAgICAgICAgXCJUZXh0XCI6IFwiMzAgb3V0IG9mIDUwIHRocm93c1wiLFxyXG4gICAgICAgICAgICAgIFwiU2NvcmVcIjogMSxcclxuICAgICAgICAgICAgICBcIlJlc3BvbmRlbnRQZXJjZW50YWdlXCI6IDQxLFxyXG4gICAgICAgICAgICAgIFwiUmFua1wiOiAzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBcIkFuc3dlclJlZlwiOiBcImZvdXJcIixcclxuICAgICAgICAgICAgICBcIlRleHRcIjogXCJOb25lIG9mIHRoZSBhYm92ZVwiLFxyXG4gICAgICAgICAgICAgIFwiU2NvcmVcIjogMCxcclxuICAgICAgICAgICAgICBcIlJlc3BvbmRlbnRQZXJjZW50YWdlXCI6IDE2LFxyXG4gICAgICAgICAgICAgIFwiUmFua1wiOiA0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICBcdDxCYXJDaGFydFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjYwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZmF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj17e3RvcDogMCwgcmlnaHQ6IDAsIGxlZnQ6IDAsIGJvdHRvbTogMjV9fT5cclxuICAgICAgICAgICAgICAgICA8WEF4aXNcclxuICAgICAgICAgICAgICAgICAgICAgZGF0YUtleT1cIlRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5PVwic2Fucy1zZXJpZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgIHRpY2tTaXplXHJcbiAgICAgICAgICAgICAgICAgICAgIGR5PScyNSdcclxuICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgIDxZQXhpcyBoaWRlLz5cclxuICAgICAgICAgICAgICAgICA8Q2FydGVzaWFuR3JpZFxyXG4gICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiNlYmYzZjBcIlxyXG4gICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgPEJhclxyXG4gICAgICAgICAgICAgICAgICAgICBkYXRhS2V5PVwiUmVzcG9uZGVudFBlcmNlbnRhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICBiYXJTaXplID17MTcwfVxyXG4gICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5PVwic2Fucy1zZXJpZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmYXRhLm1hcCgoZW50cnksIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDZWxsIGZpbGw9e2ZhdGFbaW5kZXhdLkFuc3dlclJlZiA9PT0gXCJ0aHJlZVwiID8gJyM2MWJmOTMnIDogJyNlZGVkZWQnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvQmFyPlxyXG4gICAgICAgICAgICAgICAgPC9CYXJDaGFydD5cclxuXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5Q2FuZGlkYXRlcygpIHtcclxuICAgICAgICBpZiAoY2FuZGlkYXRlcyA9PSBcIlwiKXtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgIGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17bG9uZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBubyBjYW5kaWRhdGVzIHlldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZXMubWFwKChjYW5kaWRhdGUsaW5kZXgpID0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgIHN0eWxlPXtsb25nfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IHVpIGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgY2xlYXJpbmcgc2VnbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYW5kaWRhdGVbMF19IHtWb3RlTW9kYWwoY2FuZGlkYXRlWzBdLCBjQWRkcmVzc2VzW2luZGV4XSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyIGNsZWFyaW5nIHNlZ21lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bGVhdmVFbGVjdGlvbigpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y0FkZHJlc3Nlc1tpbmRleF19XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2FuZGlkYXRlWzFdfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgdmFyIHZvdGVkO1xyXG4gICAgaWYoaGFzVm90ZWQpIHtcclxuICAgICAgICB2b3RlZCA9IDxzcGFuPjxpIGNsYXNzTmFtZT1cImZsb2F0ZWQgY2hlY2sgaWNvbiByaWdodFwiPjwvaT4gWW91IGhhdmUgYWxyZWFkeSBWb3RlZDwvc3Bhbj47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZvdGVkID0gPD48Lz5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmb3JtYXRWb3RlKCkge1xyXG4gICAgICAgIGlmIChjdXJyZW50Vm90ZVszXT09Y3VycmVudFZvdGVbM10pe1xyXG4gICAgICAgICAgICB2YXIgc3RhcnREYXRlID0gbmV3IERhdGUocGFyc2VJbnQoY3VycmVudFZvdGVbNF0pICogMSlcclxuICAgICAgICAgICAgdmFyIGVuZERhdGUgPSBuZXcgRGF0ZShwYXJzZUludChjdXJyZW50Vm90ZVs1XSkgKiAxKVxyXG4gICAgICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgY2FyZFwiIHN0eWxlPXtsb25nfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgY29udGFpbmVyXCIgc3R5bGU9IHt7Y29sb3I6ICcjZjAwMDAwJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRWb3RlWzNdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRlZCByaWdodFwiPnt2b3RlZH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFcIj57c3RhcnREYXRlLnRvVVRDU3RyaW5nKCkuc2xpY2UoMCwxNyl9IHRvIHtlbmREYXRlLnRvVVRDU3RyaW5nKCkuc2xpY2UoMCwxNyl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgY2FyZFwiIHN0eWxlPSB7e3dpZHRoOiAnMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y3VycmVudFZvdGVbNl19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicsIG1hcmdpbjonNTBweCcsIGNvbG9yOiAnI2YwMDAwMCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJ1aSBjYXJkc1wiPntkaXNwbGF5Q2FuZGlkYXRlcygpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2FkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXt2b3Rpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubGluZT0nY2VudGVyZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmEgY29udGVudFwiIHN0eWxlPSB7e2NvbG9yOiAnI2YwMDAwMCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiY2hlY2sgaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3BhcnNlSW50KGN1cnJlbnRWb3RlWzddKX0gVm90ZXNcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7YXBwbHlFTGVjdGlvbigpfVxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7ZGlzcGxheVBlcigpfVxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGVja3lib2koKX1cclxuICAgICAgICAgICAgICAgICAgICB7Y2hhcnQoKX1cclxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gPGRpdj4gbG9hZGluZyB2b3RlIC4uLjwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG5cclxuICAgICAgICAgICAgPGgxID57Zm9ybWF0Vm90ZSgpfTwvaDE+XHJcblxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcblxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVm90ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==