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



var _jsxFileName = "C:\\Users\\foubroker\\PROJECT_VOTE\\voting-at-mcgill\\client\\src\\pages\\newElection.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var NewElection = function NewElection() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      votesAddresses = _useState[0],
      setVotesAddresses = _useState[1];

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
                _context2.t2 = setAccounts;
                _context2.next = 16;
                return web3.eth.getAccounts();

              case 16:
                _context2.t3 = _context2.sent;
                (0, _context2.t2)(_context2.t3);
                setContract(instance); // Set web3, accounts, and contract to the state, and then proceed with an

                _context2.next = 25;
                break;

              case 21:
                _context2.prev = 21;
                _context2.t4 = _context2["catch"](2);
                // Catch any errors for any of the above operations.
                alert("Failed to load web3, accounts, or contract. Check console for details.");
                console.error(_context2.t4);

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 21]]);
      }));
      return _setup.apply(this, arguments);
    }

    setup();
  }, [web3]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    //just get Vote contract
    function setup() {
      return _setup2.apply(this, arguments);
    }

    function _setup2() {
      _setup2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var instance;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(web3 == '')) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                try {
                  // Get the contract instance.
                  instance = new web3.eth.Contract(_contracts_Vote_json__WEBPACK_IMPORTED_MODULE_5__.abi, votesAddresses[0]);
                  setVoteContract(instance); //console.log(voteContract);
                  //console.log(instance);
                  // Set web3, accounts, and contract to the state, and then proceed with an
                } catch (error) {
                  // Catch any errors for any of the above operations.
                  alert("Failed to load web3, accounts, or contract. Check console for details.");
                  console.error(error);
                }

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      return _setup2.apply(this, arguments);
    }

    setup();
  }, [contract, votesAddresses]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var createVote = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
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
                return contract.methods.createVote(0).send({
                  from: accounts[0]
                });

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function createVote() {
        return _ref.apply(this, arguments);
      };
    }();

    var displayVotes = /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(contract == '')) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return");

              case 2:
                _context5.next = 4;
                return contract.methods.getDeployedVotes().call();

              case 4:
                response = _context5.sent;
                // Update state with the result.
                //console.log("response is" + response);
                setVotesAddresses(response);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function displayVotes() {
        return _ref2.apply(this, arguments);
      };
    }();

    createVote();
    displayVotes();
  }, [contract]);

  var onSubmit = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(event) {
      var election, setUpElection, displayVote;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              event.preventDefault();
              console.log("in onSubmit"); //console.log(voteContract);

              setUpElection = /*#__PURE__*/function () {
                var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return voteContract.methods.editElection(title, new Date(startDate).getTime(), new Date(endDate).getTime(), description, [0]);

                        case 2:
                          setVoteContract(voteContract);
                          console.log(voteContract);

                        case 4:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                return function setUpElection() {
                  return _ref4.apply(this, arguments);
                };
              }();

              displayVote = /*#__PURE__*/function () {
                var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
                  var summary;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.next = 2;
                          return voteContract.methods.currentElection().call();

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
                  return _ref5.apply(this, arguments);
                };
              }(); //await createVote();


              _context8.next = 6;
              return setUpElection();

            case 6:
              _context8.next = 8;
              return displayVote();

            case 8:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function onSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }
  }), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 13
    }
  }, "New Election"), __jsx("form", {
    onSubmit: onSubmit,
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
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
      lineNumber: 206,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
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
      lineNumber: 216,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
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
      lineNumber: 229,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
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
      lineNumber: 240,
      columnNumber: 21
    }
  }, electionTypes.map(function (option) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 29
      }
    }, option.label);
  }))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
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
      lineNumber: 257,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 21
    }
  }, "Cancel"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    type: "submit",
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 21
    }
  }, "Publish Election"))));
};

_s(NewElection, "ciYT1f7pHLmQkInNRdA9kQ3BCgc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL25ld0VsZWN0aW9uLmpzIl0sIm5hbWVzIjpbIk5ld0VsZWN0aW9uIiwidXNlU3RhdGUiLCJ2b3Rlc0FkZHJlc3NlcyIsInNldFZvdGVzQWRkcmVzc2VzIiwid2ViMyIsInNldFdlYjMiLCJhY2NvdW50cyIsInNldEFjY291bnRzIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsInZvdGVDb250cmFjdCIsInNldFZvdGVDb250cmFjdCIsImVsZWN0aW9uVHlwZXMiLCJ2YWx1ZSIsImxhYmVsIiwid2ViM0luc3RhbmNlIiwidXNlRWZmZWN0IiwiaW5pdFdlYjMiLCJnZXRXZWIzIiwidGl0bGUiLCJzZXRUaXRsZSIsImNoYW5nZVRpdGxlIiwiZXZlbnQiLCJ0YXJnZXQiLCJzdGFydERhdGUiLCJzZXRTdGFydERhdGUiLCJjaGFuZ2VTdGFydERhdGUiLCJlbmREYXRlIiwic2V0RW5kRGF0ZSIsImNoYW5nZUVuZERhdGUiLCJlbGVjdGlvblR5cGUiLCJzZXRFbGVjdGlvblR5cGUiLCJjaGFuZ2VFbGVjdGlvblR5cGUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiY2hhbmdlRGVzY3JpcHRpb24iLCJzZXR1cCIsImV0aCIsImdldEFjY291bnRzIiwibmV0IiwiZ2V0SWQiLCJuZXR3b3JrSWQiLCJkZXBsb3llZE5ldHdvcmsiLCJWb3RlRmFjdG9yeUNvbnRyYWN0IiwibmV0d29ya3MiLCJpbnN0YW5jZSIsIkNvbnRyYWN0IiwiYWJpIiwiYWRkcmVzcyIsImFsZXJ0IiwiY29uc29sZSIsImVycm9yIiwiVm90ZUNvbnRyYWN0IiwiY3JlYXRlVm90ZSIsIm1ldGhvZHMiLCJzZW5kIiwiZnJvbSIsImRpc3BsYXlWb3RlcyIsImdldERlcGxveWVkVm90ZXMiLCJjYWxsIiwicmVzcG9uc2UiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwibG9nIiwic2V0VXBFbGVjdGlvbiIsImVkaXRFbGVjdGlvbiIsIkRhdGUiLCJnZXRUaW1lIiwiZGlzcGxheVZvdGUiLCJjdXJyZW50RWxlY3Rpb24iLCJzdW1tYXJ5Iiwic2hyaW5rIiwibWFwIiwib3B0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFFc0JDLHNEQUFRLENBQUMsRUFBRCxDQUY5QjtBQUFBLE1BRWZDLGNBRmU7QUFBQSxNQUVDQyxpQkFGRDs7QUFBQSxtQkFHRUYsc0RBQVEsQ0FBQyxFQUFELENBSFY7QUFBQSxNQUdmRyxJQUhlO0FBQUEsTUFHVEMsT0FIUzs7QUFBQSxtQkFJVUosc0RBQVEsQ0FBQyxFQUFELENBSmxCO0FBQUEsTUFJZkssUUFKZTtBQUFBLE1BSUxDLFdBSks7O0FBQUEsbUJBS1VOLHNEQUFRLENBQUMsRUFBRCxDQUxsQjtBQUFBLE1BS2ZPLFFBTGU7QUFBQSxNQUtMQyxXQUxLOztBQUFBLG1CQU1rQlIsc0RBQVEsQ0FBQyxFQUFELENBTjFCO0FBQUEsTUFNZlMsWUFOZTtBQUFBLE1BTURDLGVBTkM7O0FBT3RCLE1BQU1DLGFBQWEsR0FBRyxDQUNsQjtBQUNJQyxTQUFLLEVBQUUsVUFEWDtBQUVJQyxTQUFLLEVBQUU7QUFGWCxHQURrQixFQUtsQjtBQUNJRCxTQUFLLEVBQUUsV0FEWDtBQUVJQyxTQUFLLEVBQUU7QUFGWCxHQUxrQixDQUF0QixDQVBzQixDQW1CdEI7QUFDQTtBQUNBOztBQUVBLE1BQUlDLFlBQUo7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDR0MsUUFESDtBQUFBO0FBQUE7O0FBQUE7QUFBQSxrTUFDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDeUJDLHdEQUFPLEVBRGhDOztBQUFBO0FBQ0lILDRCQURKO0FBRUlWLHVCQUFPLENBQUNVLFlBQUQsQ0FBUDs7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSixDQS9ESixDQXZCSixDQURKO0FBa0dILENBNVFEOztHQUFNN0QsVzs7S0FBQUEsVztBQTZRU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3RWxlY3Rpb24uZGQzM2MwZWRjM2QyMDlmMjI1NDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCBWb3RlRmFjdG9yeUNvbnRyYWN0IGZyb20gXCIuLi9jb250cmFjdHMvVm90ZUZhY3RvcnkuanNvblwiO1xyXG5pbXBvcnQgVm90ZUNvbnRyYWN0IGZyb20gXCIuLi9jb250cmFjdHMvVm90ZS5qc29uXCI7XHJcbmltcG9ydCAqIGFzIG0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi9nZXRXZWIzXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IE5ld0VsZWN0aW9uID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt2b3Rlc0FkZHJlc3Nlcywgc2V0Vm90ZXNBZGRyZXNzZXNdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3dlYjMsIHNldFdlYjNdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2FjY291bnRzLCBzZXRBY2NvdW50c10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbY29udHJhY3QsIHNldENvbnRyYWN0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt2b3RlQ29udHJhY3QsIHNldFZvdGVDb250cmFjdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBlbGVjdGlvblR5cGVzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFsdWU6ICdtYWpvcml0eScsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnc2ltcGxlIG1ham9yaXR5J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YWx1ZTogJ3R3b1RoaXJkcycsXHJcbiAgICAgICAgICAgIGxhYmVsOiAndHdvIHRoaXJkcydcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuXHJcbiAgICAvLyB2YXIgb25TdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvL1xyXG4gICAgLy8gfTtcclxuXHJcbiAgICB2YXIgd2ViM0luc3RhbmNlO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBpbml0V2ViMygpIHtcclxuICAgICAgICAgICAgd2ViM0luc3RhbmNlID0gYXdhaXQgZ2V0V2ViMygpO1xyXG4gICAgICAgICAgICBzZXRXZWIzKHdlYjNJbnN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluaXRXZWIzKCk7XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IGNoYW5nZVRpdGxlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0VGl0bGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgY2hhbmdlU3RhcnREYXRlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0U3RhcnREYXRlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBjaGFuZ2VFbmREYXRlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0RW5kRGF0ZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IFtlbGVjdGlvblR5cGUsIHNldEVsZWN0aW9uVHlwZV0gPSB1c2VTdGF0ZSgnbWFqb3JpdHknKTtcclxuICAgIGNvbnN0IGNoYW5nZUVsZWN0aW9uVHlwZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldEVsZWN0aW9uVHlwZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IGNoYW5nZURlc2NyaXB0aW9uID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0RGVzY3JpcHRpb24oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHsvLyBnZXQgRmFjdG9yeSBjb250cmFjdFxyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgICAgICAgICBpZih3ZWIzID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHNldEFjY291bnRzKGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCkpO1xyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjb250cmFjdCBpbnN0YW5jZS5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVwbG95ZWROZXR3b3JrID0gVm90ZUZhY3RvcnlDb250cmFjdC5uZXR3b3Jrc1tuZXR3b3JrSWRdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgVm90ZUZhY3RvcnlDb250cmFjdC5hYmksXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwbG95ZWROZXR3b3JrICYmIGRlcGxveWVkTmV0d29yay5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHNldEFjY291bnRzKGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCkpO1xyXG4gICAgICAgICAgICAgICAgc2V0Q29udHJhY3QoaW5zdGFuY2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDYXRjaCBhbnkgZXJyb3JzIGZvciBhbnkgb2YgdGhlIGFib3ZlIG9wZXJhdGlvbnMuXHJcbiAgICAgICAgICAgICAgICBhbGVydChcclxuICAgICAgICAgICAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0dXAoKTtcclxuICAgIH0sW3dlYjNdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4gey8vanVzdCBnZXQgVm90ZSBjb250cmFjdFxyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgICAgICAgICBpZih3ZWIzID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgICAgICAgICAgICBWb3RlQ29udHJhY3QuYWJpLFxyXG4gICAgICAgICAgICAgICAgICAgIHZvdGVzQWRkcmVzc2VzWzBdLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHNldFZvdGVDb250cmFjdChpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHZvdGVDb250cmFjdCk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDYXRjaCBhbnkgZXJyb3JzIGZvciBhbnkgb2YgdGhlIGFib3ZlIG9wZXJhdGlvbnMuXHJcbiAgICAgICAgICAgICAgICBhbGVydChcclxuICAgICAgICAgICAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0dXAoKTtcclxuICAgIH0sW2NvbnRyYWN0LHZvdGVzQWRkcmVzc2VzXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB2YXIgY3JlYXRlVm90ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgaWYoY29udHJhY3QgPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgdmFsdWUgZnJvbSB0aGUgY29udHJhY3QgdG8gcHJvdmUgaXQgd29ya2VkLlxyXG4gICAgICAgICAgICAvLyB1bmNvbW1lbnQgdG8gY3JlYXRlIHZvdGVzLCBub3RlIHRoYXQgc2Vjb25kIGF3YWl0IGNhbGwgd29udCBydW4gaWYgZmlyc3QgaXMgcnVuLlxyXG4gICAgICAgICAgICBhd2FpdCBjb250cmFjdC5tZXRob2RzLmNyZWF0ZVZvdGUoMCkuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBkaXNwbGF5Vm90ZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGNvbnRyYWN0ID09ICcnKXtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0RGVwbG95ZWRWb3RlcygpLmNhbGwoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBzdGF0ZSB3aXRoIHRoZSByZXN1bHQuXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJyZXNwb25zZSBpc1wiICsgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBzZXRWb3Rlc0FkZHJlc3NlcyhyZXNwb25zZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjcmVhdGVWb3RlKCk7XHJcbiAgICAgICAgZGlzcGxheVZvdGVzKCk7XHJcbiAgICB9LFtjb250cmFjdF0pO1xyXG5cclxuXHJcbiAgICB2YXIgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImluIG9uU3VibWl0XCIpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codm90ZUNvbnRyYWN0KTtcclxuXHJcbiAgICAgICAgbGV0IGVsZWN0aW9uO1xyXG4gICAgICAgIHZhciBzZXRVcEVsZWN0aW9uID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgIGlmICh2b3RlQ29udHJhY3QgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidm90ZUNvbnRyYWN0IGRuZVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAqL1xyXG5cclxuICAgICAgICAgICAgLy9hd2FpdCB2b3RlQ29udHJhY3QubWV0aG9kcy5lZGl0RWxlY3Rpb24oXCJ0aXRsZVwiLCAxMjMsIDIzNCwgXCJoaGhcIiwgWzEsMiwzXSk7XHJcbiAgICAgICAgICAgIGF3YWl0IHZvdGVDb250cmFjdC5tZXRob2RzLmVkaXRFbGVjdGlvbih0aXRsZSwgbmV3IERhdGUoc3RhcnREYXRlKS5nZXRUaW1lKCksIG5ldyBEYXRlKGVuZERhdGUpLmdldFRpbWUoKSwgZGVzY3JpcHRpb24sIFswXSk7XHJcbiAgICAgICAgICAgIHNldFZvdGVDb250cmFjdCh2b3RlQ29udHJhY3QpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2b3RlQ29udHJhY3QpO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIGRpc3BsYXlWb3RlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IHZvdGVDb250cmFjdC5tZXRob2RzLmN1cnJlbnRFbGVjdGlvbigpLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1bW1hcnkpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy9hd2FpdCBjcmVhdGVWb3RlKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IHNldFVwRWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgYXdhaXQgZGlzcGxheVZvdGUoKTtcclxuXHJcblxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8aDE+TmV3IEVsZWN0aW9uPC9oMT5cclxuICAgICAgICAgICAgey8qXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVsZWN0aW9uIFRpdGxlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bS5UZXh0RmllbGQgbGFiZWw9XCJFbGVjdGlvbiB0aXRsZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkNob29zZSBEYXRlczo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkNob29zZSB0eXBlIG9mIGVsZWN0aW9uOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+Q2hvb3NlIGdyb3VwcyAob3B0aW9uYWwpOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+QWRkIGRlc2NyaXB0aW9uOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+Q2FuY2VsPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+UHVibGlzaCBFbGVjdGlvbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG0uVGV4dEZpZWxkIHJlcXVpcmVkIGZ1bGxXaWR0aCBsYWJlbD1cIkVsZWN0aW9uIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L20uVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG0uVGV4dEZpZWxkIGxhYmVsPVwiU3RhcnQgZGF0ZVwiIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVN0YXJ0RGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvbS5UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bS5UZXh0RmllbGQgcmVxdWlyZWQgbGFiZWw9XCJFbmQgZGF0ZVwiIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VFbmREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bS5UZXh0RmllbGQgcmVxdWlyZWQgc2VsZWN0IGxhYmVsPVwiVHlwZSBvZiBlbGVjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbGVjdGlvblR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VFbGVjdGlvblR5cGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZWxlY3Rpb25UeXBlcy5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG0uTWVudUl0ZW0ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L20uTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbS5UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7Lyo8bS5UZXh0RmllbGQgbGFiZWw9XCJTZWxlY3QgZ3JvdXBzIChzb21lb25lIGhlbHAgd2l0aCB0aGUgc2VhcmNoIGFuZCBzZWxlY3QgbXVsdGlwbGUgcGx6KVwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG0uVGV4dEZpZWxkIHJlcXVpcmVkIG11bHRpbGluZSBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZURlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG0uQnV0dG9uPkNhbmNlbDwvbS5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG0uQnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvblN1Ym1pdD17b25TdWJtaXR9PlB1Ymxpc2ggRWxlY3Rpb248L20uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTmV3RWxlY3Rpb247Il0sInNvdXJjZVJvb3QiOiIifQ==