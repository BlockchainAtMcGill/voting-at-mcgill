webpackHotUpdate_N_E("pages/newElection",{

/***/ "./src/pages/newElection.js":
/*!**********************************!*\
  !*** ./src/pages/newElection.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contracts/VoteFactory.json */ "./src/contracts/VoteFactory.json");
var _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/VoteFactory.json */ "./src/contracts/VoteFactory.json", 1);
/* harmony import */ var _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contracts/Vote.json */ "./src/contracts/Vote.json");
var _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/Vote.json */ "./src/contracts/Vote.json", 1);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _getWeb3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../getWeb3 */ "./src/getWeb3.js");
/* harmony import */ var _elections_vote_vote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./elections/vote/vote */ "./src/pages/elections/vote/vote.js");



var _jsxFileName = "C:\\Users\\foubroker\\PROJECT_VOTE\\voting-at-mcgill\\client\\src\\pages\\newElection.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var NewElection = function NewElection() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      voteAddress = _useState[0],
      setVoteAddress = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      web3 = _useState2[0],
      setWeb3 = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      accounts = _useState3[0],
      setAccounts = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      contract = _useState4[0],
      setContract = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      voteContract = _useState5[0],
      setVoteContract = _useState5[1];

  var electionTypes = [{
    value: 'majority',
    label: 'simple majority'
  }, {
    value: 'twoThirds',
    label: 'two thirds'
  }]; // var onSubmit = async () => {
  //
  // };

  var web3Instance;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    function initWeb3() {
      return _initWeb.apply(this, arguments);
    }

    function _initWeb() {
      _initWeb = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_getWeb3__WEBPACK_IMPORTED_MODULE_7__["default"])();

              case 2:
                web3Instance = _context.sent;
                setWeb3(web3Instance);

              case 4:
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

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      title = _useState6[0],
      setTitle = _useState6[1];

  var changeTitle = function changeTitle(event) {
    setTitle(event.target.value);
  };

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      startDate = _useState7[0],
      setStartDate = _useState7[1];

  var changeStartDate = function changeStartDate(event) {
    setStartDate(event.target.value);
  };

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      endDate = _useState8[0],
      setEndDate = _useState8[1];

  var changeEndDate = function changeEndDate(event) {
    setEndDate(event.target.value);
  };

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('majority'),
      electionType = _useState9[0],
      setElectionType = _useState9[1];

  var changeElectionType = function changeElectionType(event) {
    setElectionType(event.target.value);
  };

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      description = _useState10[0],
      setDescription = _useState10[1];

  var changeDescription = function changeDescription(event) {
    setDescription(event.target.value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // get Factory contract
    function setup() {
      return _setup.apply(this, arguments);
    }

    function _setup() {
      _setup = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var networkId, deployedNetwork, instance;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(web3 == '')) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _context2.prev = 2;
                _context2.t0 = setAccounts;
                _context2.next = 6;
                return web3.eth.getAccounts();

              case 6:
                _context2.t1 = _context2.sent;
                (0, _context2.t0)(_context2.t1);
                _context2.next = 10;
                return web3.eth.net.getId();

              case 10:
                networkId = _context2.sent;
                deployedNetwork = _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_4__.networks[networkId];
                instance = new web3.eth.Contract(_contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_4__.abi, deployedNetwork && deployedNetwork.address);
                setContract(instance); // Set web3, accounts, and contract to the state, and then proceed with an

                _context2.next = 20;
                break;

              case 16:
                _context2.prev = 16;
                _context2.t2 = _context2["catch"](2);
                // Catch any errors for any of the above operations.
                alert("Failed to load web3, accounts, or contract. Check console for details.");
                console.error(_context2.t2);

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 16]]);
      }));
      return _setup.apply(this, arguments);
    }

    setup();
  }, [web3]); // useEffect(() => {//just get Vote contract
  //     async function setup() {
  //         if(web3 == '' || !voteAddress) {
  //             return;
  //         }
  //         try {
  //             // Get the contract instance.
  //             const instance = new web3.eth.Contract(
  //                 VoteContract.abi,
  //                 voteAddress,
  //             );
  //             setVoteContract(instance);
  //             // Set web3, accounts, and contract to the state, and then proceed with an
  //         } catch (error) {
  //             // Catch any errors for any of the above operations.
  //             alert(
  //                 `Failed to load web3, accounts, or contract. Check console for details.`,
  //             );
  //             console.error(error);
  //         }
  //     }
  //     setup();
  //     console.log('you do be having an address ' + voteAddress);
  // },[contract,voteAddress]);
  // useEffect(() => {
  //     var createVote = async () => {
  //         if(contract == ''){
  //             return;
  //         }
  //         // Get the value from the contract to prove it worked.
  //         // uncomment to create votes, note that second await call wont run if first is run.
  //         await contract.methods.createVote(0).send({
  //             from: accounts[0]
  //         });
  //     };
  //     createVote();
  // },[contract]);

  var onSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(event) {
      var vote, addressOfVote, createVote, getElectionAddress, initializeElection, setUpElection, displayVote;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              event.preventDefault();

              createVote = /*#__PURE__*/function () {
                var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
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
                          return contract.methods.createVote(0).send({
                            from: accounts[0]
                          });

                        case 4:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function createVote() {
                  return _ref2.apply(this, arguments);
                };
              }();

              getElectionAddress = /*#__PURE__*/function () {
                var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
                  var response;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          if (!(contract == '')) {
                            _context4.next = 2;
                            break;
                          }

                          return _context4.abrupt("return");

                        case 2:
                          _context4.next = 4;
                          return contract.methods.getDeployedVotes().call();

                        case 4:
                          response = _context4.sent;
                          addressOfVote = response[response.length - 1];
                          _context4.next = 8;
                          return setVoteAddress(response[response.length - 1]);

                        case 8:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function getElectionAddress() {
                  return _ref3.apply(this, arguments);
                };
              }();

              initializeElection = /*#__PURE__*/function () {
                var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
                  var instance;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.prev = 0;
                          _context5.next = 3;
                          return new web3.eth.Contract(_contracts_Vote_json__WEBPACK_IMPORTED_MODULE_5__.abi, addressOfVote);

                        case 3:
                          instance = _context5.sent;
                          vote = instance;
                          setVoteContract(instance); // Set web3, accounts, and contract to the state, and then proceed with an

                          _context5.next = 12;
                          break;

                        case 8:
                          _context5.prev = 8;
                          _context5.t0 = _context5["catch"](0);
                          // Catch any errors for any of the above operations.
                          alert("Failed to load web3, accounts, or contract. Check console for details.");
                          console.error(_context5.t0);

                        case 12:
                          console.log(vote);

                        case 13:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5, null, [[0, 8]]);
                }));

                return function initializeElection() {
                  return _ref4.apply(this, arguments);
                };
              }();

              setUpElection = /*#__PURE__*/function () {
                var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          if (!(vote == '')) {
                            _context6.next = 3;
                            break;
                          }

                          console.log("voteContract dne");
                          return _context6.abrupt("return");

                        case 3:
                          _context6.next = 5;
                          return vote.methods.editElection(title, new Date(startDate).getTime(), new Date(endDate).getTime(), description, [0]);

                        case 5:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                return function setUpElection() {
                  return _ref5.apply(this, arguments);
                };
              }();

              displayVote = /*#__PURE__*/function () {
                var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
                  var summary;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.next = 2;
                          return vote.methods.currentElection().call();

                        case 2:
                          summary = _context7.sent;
                          console.log(summary);

                        case 4:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }));

                return function displayVote() {
                  return _ref6.apply(this, arguments);
                };
              }();

              _context8.next = 8;
              return createVote();

            case 8:
              _context8.next = 10;
              return getElectionAddress();

            case 10:
              _context8.next = 12;
              return initializeElection();

            case 12:
              _context8.next = 14;
              return setUpElection();

            case 14:
              _context8.next = 16;
              return displayVote();

            case 16:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }
  }), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 13
    }
  }, "New Election"), __jsx("form", {
    onSubmit: onSubmit,
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
    required: true,
    fullWidth: true,
    label: "Election title",
    variant: "outlined",
    value: title,
    onChange: changeTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
    label: "Start date",
    type: "date",
    variant: "outlined",
    InputLabelProps: {
      shrink: true
    },
    value: startDate,
    onChange: changeStartDate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
    required: true,
    label: "End date",
    type: "date",
    variant: "outlined",
    InputLabelProps: {
      shrink: true
    },
    value: endDate,
    onChange: changeEndDate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
    required: true,
    select: true,
    label: "Type of election",
    variant: "outlined",
    value: electionType,
    onChange: changeElectionType,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 21
    }
  }, electionTypes.map(function (option) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 29
      }
    }, option.label);
  }))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
    required: true,
    multiline: true,
    fullWidth: true,
    label: "Description",
    rows: 4,
    variant: "outlined",
    value: description,
    onChange: changeDescription,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 21
    }
  }, "Cancel"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    type: "submit",
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 21
    }
  }, "Publish Election"))));
};

_s(NewElection, "gnik3RDCVxeqT/vQcV8aBdNRm7A=");

_c = NewElection;
/* harmony default export */ __webpack_exports__["default"] = (NewElection);

var _c;

$RefreshReg$(_c, "NewElection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL25ld0VsZWN0aW9uLmpzIl0sIm5hbWVzIjpbIk5ld0VsZWN0aW9uIiwidXNlU3RhdGUiLCJ2b3RlQWRkcmVzcyIsInNldFZvdGVBZGRyZXNzIiwid2ViMyIsInNldFdlYjMiLCJhY2NvdW50cyIsInNldEFjY291bnRzIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsInZvdGVDb250cmFjdCIsInNldFZvdGVDb250cmFjdCIsImVsZWN0aW9uVHlwZXMiLCJ2YWx1ZSIsImxhYmVsIiwid2ViM0luc3RhbmNlIiwidXNlRWZmZWN0IiwiaW5pdFdlYjMiLCJnZXRXZWIzIiwidGl0bGUiLCJzZXRUaXRsZSIsImNoYW5nZVRpdGxlIiwiZXZlbnQiLCJ0YXJnZXQiLCJzdGFydERhdGUiLCJzZXRTdGFydERhdGUiLCJjaGFuZ2VTdGFydERhdGUiLCJlbmREYXRlIiwic2V0RW5kRGF0ZSIsImNoYW5nZUVuZERhdGUiLCJlbGVjdGlvblR5cGUiLCJzZXRFbGVjdGlvblR5cGUiLCJjaGFuZ2VFbGVjdGlvblR5cGUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiY2hhbmdlRGVzY3JpcHRpb24iLCJzZXR1cCIsImV0aCIsImdldEFjY291bnRzIiwibmV0IiwiZ2V0SWQiLCJuZXR3b3JrSWQiLCJkZXBsb3llZE5ldHdvcmsiLCJWb3RlRmFjdG9yeUNvbnRyYWN0IiwibmV0d29ya3MiLCJpbnN0YW5jZSIsIkNvbnRyYWN0IiwiYWJpIiwiYWRkcmVzcyIsImFsZXJ0IiwiY29uc29sZSIsImVycm9yIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZVZvdGUiLCJtZXRob2RzIiwic2VuZCIsImZyb20iLCJnZXRFbGVjdGlvbkFkZHJlc3MiLCJnZXREZXBsb3llZFZvdGVzIiwiY2FsbCIsInJlc3BvbnNlIiwiYWRkcmVzc09mVm90ZSIsImxlbmd0aCIsImluaXRpYWxpemVFbGVjdGlvbiIsIlZvdGVDb250cmFjdCIsInZvdGUiLCJsb2ciLCJzZXRVcEVsZWN0aW9uIiwiZWRpdEVsZWN0aW9uIiwiRGF0ZSIsImdldFRpbWUiLCJkaXNwbGF5Vm90ZSIsImN1cnJlbnRFbGVjdGlvbiIsInN1bW1hcnkiLCJzaHJpbmsiLCJtYXAiLCJvcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUVnQkMsc0RBQVEsQ0FBQyxFQUFELENBRnhCO0FBQUEsTUFFZkMsV0FGZTtBQUFBLE1BRUZDLGNBRkU7O0FBQUEsbUJBR0VGLHNEQUFRLENBQUMsRUFBRCxDQUhWO0FBQUEsTUFHZkcsSUFIZTtBQUFBLE1BR1RDLE9BSFM7O0FBQUEsbUJBSVVKLHNEQUFRLENBQUMsRUFBRCxDQUpsQjtBQUFBLE1BSWZLLFFBSmU7QUFBQSxNQUlMQyxXQUpLOztBQUFBLG1CQUtVTixzREFBUSxDQUFDLEVBQUQsQ0FMbEI7QUFBQSxNQUtmTyxRQUxlO0FBQUEsTUFLTEMsV0FMSzs7QUFBQSxtQkFNa0JSLHNEQUFRLENBQUMsRUFBRCxDQU4xQjtBQUFBLE1BTWZTLFlBTmU7QUFBQSxNQU1EQyxlQU5DOztBQU90QixNQUFNQyxhQUFhLEdBQUcsQ0FDbEI7QUFDSUMsU0FBSyxFQUFFLFVBRFg7QUFFSUMsU0FBSyxFQUFFO0FBRlgsR0FEa0IsRUFLbEI7QUFDSUQsU0FBSyxFQUFFLFdBRFg7QUFFSUMsU0FBSyxFQUFFO0FBRlgsR0FMa0IsQ0FBdEIsQ0FQc0IsQ0FtQnRCO0FBQ0E7QUFDQTs7QUFFQSxNQUFJQyxZQUFKO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0dDLFFBREg7QUFBQTtBQUFBOztBQUFBO0FBQUEsa01BQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ3lCQyx3REFBTyxFQURoQzs7QUFBQTtBQUNJSCw0QkFE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QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVJLE1BQUMsd0RBQUQ7QUFBVSxRQUFJLEVBQUMsUUFBZjtBQUF3QixZQUFRLEVBQUVpQixRQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZKLENBL0RKLENBTkosQ0FESjtBQWlGSCxDQTFRRDs7R0FBTXBELFc7O0tBQUFBLFc7QUEyUVNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ld0VsZWN0aW9uLmYzYTI2OGMyODY2N2U4MDA2Y2Q0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5pbXBvcnQgVm90ZUZhY3RvcnlDb250cmFjdCBmcm9tIFwiLi4vY29udHJhY3RzL1ZvdGVGYWN0b3J5Lmpzb25cIjtcclxuaW1wb3J0IFZvdGVDb250cmFjdCBmcm9tIFwiLi4vY29udHJhY3RzL1ZvdGUuanNvblwiO1xyXG5pbXBvcnQgKiBhcyBtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgZ2V0V2ViMyBmcm9tIFwiLi4vZ2V0V2ViM1wiO1xyXG5pbXBvcnQgVm90ZSBmcm9tICcuL2VsZWN0aW9ucy92b3RlL3ZvdGUnO1xyXG5cclxuXHJcblxyXG5jb25zdCBOZXdFbGVjdGlvbiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdm90ZUFkZHJlc3MsIHNldFZvdGVBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt3ZWIzLCBzZXRXZWIzXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFthY2NvdW50cywgc2V0QWNjb3VudHNdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2NvbnRyYWN0LCBzZXRDb250cmFjdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdm90ZUNvbnRyYWN0LCBzZXRWb3RlQ29udHJhY3RdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgZWxlY3Rpb25UeXBlcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbHVlOiAnbWFqb3JpdHknLFxyXG4gICAgICAgICAgICBsYWJlbDogJ3NpbXBsZSBtYWpvcml0eSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFsdWU6ICd0d29UaGlyZHMnLFxyXG4gICAgICAgICAgICBsYWJlbDogJ3R3byB0aGlyZHMnXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcblxyXG4gICAgLy8gdmFyIG9uU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy9cclxuICAgIC8vIH07XHJcblxyXG4gICAgdmFyIHdlYjNJbnN0YW5jZTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gaW5pdFdlYjMoKSB7XHJcbiAgICAgICAgICAgIHdlYjNJbnN0YW5jZSA9IGF3YWl0IGdldFdlYjMoKTtcclxuICAgICAgICAgICAgc2V0V2ViMyh3ZWIzSW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbml0V2ViMygpO1xyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBjaGFuZ2VUaXRsZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldFRpdGxlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgY2hhbmdlU3RhcnREYXRlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0U3RhcnREYXRlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBjaGFuZ2VFbmREYXRlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0RW5kRGF0ZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IFtlbGVjdGlvblR5cGUsIHNldEVsZWN0aW9uVHlwZV0gPSB1c2VTdGF0ZSgnbWFqb3JpdHknKTtcclxuICAgIGNvbnN0IGNoYW5nZUVsZWN0aW9uVHlwZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldEVsZWN0aW9uVHlwZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgY2hhbmdlRGVzY3JpcHRpb24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXREZXNjcmlwdGlvbihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4gey8vIGdldCBGYWN0b3J5IGNvbnRyYWN0XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gc2V0dXAoKSB7XHJcbiAgICAgICAgICAgIGlmKHdlYjMgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgc2V0QWNjb3VudHMoYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViMy5ldGgubmV0LmdldElkKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXBsb3llZE5ldHdvcmsgPSBWb3RlRmFjdG9yeUNvbnRyYWN0Lm5ldHdvcmtzW25ldHdvcmtJZF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgICAgICAgICAgICBWb3RlRmFjdG9yeUNvbnRyYWN0LmFiaSxcclxuICAgICAgICAgICAgICAgICAgICBkZXBsb3llZE5ldHdvcmsgJiYgZGVwbG95ZWROZXR3b3JrLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgc2V0Q29udHJhY3QoaW5zdGFuY2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDYXRjaCBhbnkgZXJyb3JzIGZvciBhbnkgb2YgdGhlIGFib3ZlIG9wZXJhdGlvbnMuXHJcbiAgICAgICAgICAgICAgICBhbGVydChcclxuICAgICAgICAgICAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0dXAoKTtcclxuICAgIH0sW3dlYjNdKTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4gey8vanVzdCBnZXQgVm90ZSBjb250cmFjdFxyXG4gICAgLy8gICAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgLy8gICAgICAgICBpZih3ZWIzID09ICcnIHx8ICF2b3RlQWRkcmVzcykge1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIHRyeSB7XHJcbiAgICAvLyAgICAgICAgICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gICAgLy8gICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgVm90ZUNvbnRyYWN0LmFiaSxcclxuICAgIC8vICAgICAgICAgICAgICAgICB2b3RlQWRkcmVzcyxcclxuICAgIC8vICAgICAgICAgICAgICk7XHJcbiAgICAvLyAgICAgICAgICAgICBzZXRWb3RlQ29udHJhY3QoaW5zdGFuY2UpO1xyXG4gICAgLy8gICAgICAgICAgICAgLy8gU2V0IHdlYjMsIGFjY291bnRzLCBhbmQgY29udHJhY3QgdG8gdGhlIHN0YXRlLCBhbmQgdGhlbiBwcm9jZWVkIHdpdGggYW5cclxuICAgIC8vICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vICAgICAgICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cclxuICAgIC8vICAgICAgICAgICAgIGFsZXJ0KFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcclxuICAgIC8vICAgICAgICAgICAgICk7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBzZXR1cCgpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCd5b3UgZG8gYmUgaGF2aW5nIGFuIGFkZHJlc3MgJyArIHZvdGVBZGRyZXNzKTtcclxuICAgIC8vIH0sW2NvbnRyYWN0LHZvdGVBZGRyZXNzXSk7XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICB2YXIgY3JlYXRlVm90ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vICAgICAgICAgaWYoY29udHJhY3QgPT0gJycpe1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIC8vIEdldCB0aGUgdmFsdWUgZnJvbSB0aGUgY29udHJhY3QgdG8gcHJvdmUgaXQgd29ya2VkLlxyXG4gICAgLy8gICAgICAgICAvLyB1bmNvbW1lbnQgdG8gY3JlYXRlIHZvdGVzLCBub3RlIHRoYXQgc2Vjb25kIGF3YWl0IGNhbGwgd29udCBydW4gaWYgZmlyc3QgaXMgcnVuLlxyXG4gICAgLy8gICAgICAgICBhd2FpdCBjb250cmFjdC5tZXRob2RzLmNyZWF0ZVZvdGUoMCkuc2VuZCh7XHJcbiAgICAvLyAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vICAgICB9O1xyXG4gICAgLy8gICAgIGNyZWF0ZVZvdGUoKTtcclxuICAgIC8vIH0sW2NvbnRyYWN0XSk7XHJcblxyXG5cclxuICAgIHZhciBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIHZvdGU7XHJcbiAgICAgICAgdmFyIGFkZHJlc3NPZlZvdGVcclxuXHJcbiAgICAgICAgdmFyIGNyZWF0ZVZvdGUgPSBhc3luYyAoKSA9PiB7Ly91c2VzIHZvdGVGYWN0b3J5IHRvIGNyZWF0ZSBWb3RlXHJcbiAgICAgICAgICAgIGlmKGNvbnRyYWN0ID09ICcnKXtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIHZhbHVlIGZyb20gdGhlIGNvbnRyYWN0IHRvIHByb3ZlIGl0IHdvcmtlZC5cclxuICAgICAgICAgICAgYXdhaXQgY29udHJhY3QubWV0aG9kcy5jcmVhdGVWb3RlKDApLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgZ2V0RWxlY3Rpb25BZGRyZXNzID0gYXN5bmMgKCkgPT4gey8vY2FsbHMgdm90ZUZhY3RvcnkgbWV0aG9kIHRvIGdldCBuZXcgVm90ZSBhZGRyZXNzXHJcbiAgICAgICAgICAgIGlmKGNvbnRyYWN0ID09ICcnKXtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0RGVwbG95ZWRWb3RlcygpLmNhbGwoKTtcclxuICAgICAgICAgICAgYWRkcmVzc09mVm90ZSA9IHJlc3BvbnNlW3Jlc3BvbnNlLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICBhd2FpdCBzZXRWb3RlQWRkcmVzcyhyZXNwb25zZVtyZXNwb25zZS5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgaW5pdGlhbGl6ZUVsZWN0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjb250cmFjdCBpbnN0YW5jZS5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gYXdhaXQgbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIFZvdGVDb250cmFjdC5hYmksXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc09mVm90ZSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB2b3RlID0gaW5zdGFuY2U7XHJcbiAgICAgICAgICAgICAgICBzZXRWb3RlQ29udHJhY3QoaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgLy8gU2V0IHdlYjMsIGFjY291bnRzLCBhbmQgY29udHJhY3QgdG8gdGhlIHN0YXRlLCBhbmQgdGhlbiBwcm9jZWVkIHdpdGggYW5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cclxuICAgICAgICAgICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2b3RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNldFVwRWxlY3Rpb24gPSBhc3luYygpID0+IHtcclxuICAgICAgICAgICAgaWYgKHZvdGUgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidm90ZUNvbnRyYWN0IGRuZVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXdhaXQgdm90ZS5tZXRob2RzLmVkaXRFbGVjdGlvbih0aXRsZSwgbmV3IERhdGUoc3RhcnREYXRlKS5nZXRUaW1lKCksIG5ldyBEYXRlKGVuZERhdGUpLmdldFRpbWUoKSwgZGVzY3JpcHRpb24sIFswXSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGRpc3BsYXlWb3RlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgdm90ZS5tZXRob2RzLmN1cnJlbnRFbGVjdGlvbigpLmNhbGwoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3VtbWFyeSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYXdhaXQgY3JlYXRlVm90ZSgpO1xyXG4gICAgICAgIGF3YWl0IGdldEVsZWN0aW9uQWRkcmVzcygpO1xyXG4gICAgICAgIGF3YWl0IGluaXRpYWxpemVFbGVjdGlvbigpO1xyXG4gICAgICAgIGF3YWl0IHNldFVwRWxlY3Rpb24oKTtcclxuICAgICAgICBhd2FpdCBkaXNwbGF5Vm90ZSgpO1xyXG5cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxoMT5OZXcgRWxlY3Rpb248L2gxPlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxtLlRleHRGaWVsZCByZXF1aXJlZCBmdWxsV2lkdGggbGFiZWw9XCJFbGVjdGlvbiB0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9tLlRleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxtLlRleHRGaWVsZCBsYWJlbD1cIlN0YXJ0IGRhdGVcIiB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VTdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L20uVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG0uVGV4dEZpZWxkIHJlcXVpcmVkIGxhYmVsPVwiRW5kIGRhdGVcIiB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbmREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlRW5kRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG0uVGV4dEZpZWxkIHJlcXVpcmVkIHNlbGVjdCBsYWJlbD1cIlR5cGUgb2YgZWxlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZWxlY3Rpb25UeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlRWxlY3Rpb25UeXBlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2VsZWN0aW9uVHlwZXMubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtLk1lbnVJdGVtIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tLk1lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L20uVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qPG0uVGV4dEZpZWxkIGxhYmVsPVwiU2VsZWN0IGdyb3VwcyAoc29tZW9uZSBoZWxwIHdpdGggdGhlIHNlYXJjaCBhbmQgc2VsZWN0IG11bHRpcGxlIHBseilcIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxtLlRleHRGaWVsZCByZXF1aXJlZCBtdWx0aWxpbmUgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VEZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxtLkJ1dHRvbj5DYW5jZWw8L20uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtLkJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25TdWJtaXQ9e29uU3VibWl0fT5QdWJsaXNoIEVsZWN0aW9uPC9tLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5ld0VsZWN0aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9