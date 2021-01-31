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

  // const [web3, setWeb3] = useState('');
  // const [voteContract, setVoteContract] = useState('');
  var electionTypes = [{
    value: 'majority',
    label: 'simple majority'
  }, {
    value: 'twoThirds',
    label: 'two thirds'
  }]; // var web3Instance;
  // useEffect(() => {
  //     async function initWeb3() {
  //         web3Instance = await getWeb3();
  //         setWeb3(web3Instance);
  //     }
  //     initWeb3();
  // },[]);
  //please follow the course for a better implementation @Jing

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      title = _useState[0],
      setTitle = _useState[1];

  var changeTitle = function changeTitle(event) {
    setTitle(event.target.value);
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      startDate = _useState2[0],
      setStartDate = _useState2[1];

  var changeStartDate = function changeStartDate(event) {
    setStartDate(event.target.value);
  };

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      endDate = _useState3[0],
      setEndDate = _useState3[1];

  var changeEndDate = function changeEndDate(event) {
    setEndDate(event.target.value);
  };

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('majority'),
      electionType = _useState4[0],
      setElectionType = _useState4[1];

  var changeElectionType = function changeElectionType(event) {
    setElectionType(event.target.value);
  };

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      description = _useState5[0],
      setDescription = _useState5[1];

  var changeDescription = function changeDescription(event) {
    setDescription(event.target.value);
  };

  var onSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(event) {
      var web3, manager, factoryContract, voteContract, addressOfVote, initWeb3, setupVoteFactory, createVote, getElectionAddress, initializeElection, setUpElection, displayVote;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              event.preventDefault();

              initWeb3 = /*#__PURE__*/function () {
                var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          //initializes web3
                          console.log('initializing web3');
                          _context.next = 3;
                          return Object(_getWeb3__WEBPACK_IMPORTED_MODULE_7__["default"])();

                        case 3:
                          web3 = _context.sent;

                        case 4:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function initWeb3() {
                  return _ref2.apply(this, arguments);
                };
              }();

              setupVoteFactory = /*#__PURE__*/function () {
                var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
                  var networkId, deployedNetwork, instance;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          if (!(web3 == '')) {
                            _context2.next = 3;
                            break;
                          }

                          console.log('cringe');
                          return _context2.abrupt("return");

                        case 3:
                          _context2.prev = 3;
                          _context2.next = 6;
                          return web3.eth.getAccounts();

                        case 6:
                          console.log('setting up factory')[manager] = _context2.sent;
                          _context2.next = 9;
                          return web3.eth.net.getId();

                        case 9:
                          networkId = _context2.sent;
                          deployedNetwork = _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_4__.networks[networkId];
                          instance = new web3.eth.Contract(_contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_4__.abi, deployedNetwork && deployedNetwork.address);
                          factoryContract = instance; // Set web3, accounts, and contract to the state, and then proceed with an

                          _context2.next = 19;
                          break;

                        case 15:
                          _context2.prev = 15;
                          _context2.t0 = _context2["catch"](3);
                          // Catch any errors for any of the above operations.
                          alert("Failed to load web3, accounts, or contract. Check console for details.");
                          console.error(_context2.t0);

                        case 19:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, null, [[3, 15]]);
                }));

                return function setupVoteFactory() {
                  return _ref3.apply(this, arguments);
                };
              }();

              createVote = /*#__PURE__*/function () {
                var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          if (!(factoryContract == '')) {
                            _context3.next = 2;
                            break;
                          }

                          return _context3.abrupt("return");

                        case 2:
                          _context3.next = 4;
                          return factoryContract.methods.createVote(0).send({
                            from: manager
                          });

                        case 4:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function createVote() {
                  return _ref4.apply(this, arguments);
                };
              }();

              getElectionAddress = /*#__PURE__*/function () {
                var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
                  var response;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return factoryContract.methods.getDeployedVotes().call();

                        case 2:
                          response = _context4.sent;
                          addressOfVote = response[response.length - 1];

                        case 4:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function getElectionAddress() {
                  return _ref5.apply(this, arguments);
                };
              }();

              initializeElection = /*#__PURE__*/function () {
                var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
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
                          setVoteContract(instance); // voteContract = instance;

                          _context5.next = 11;
                          break;

                        case 7:
                          _context5.prev = 7;
                          _context5.t0 = _context5["catch"](0);
                          // Catch any errors for any of the above operations.
                          alert("Failed to load web3, accounts, or contract. Check console for details.");
                          console.error(_context5.t0);

                        case 11:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5, null, [[0, 7]]);
                }));

                return function initializeElection() {
                  return _ref6.apply(this, arguments);
                };
              }();

              setUpElection = /*#__PURE__*/function () {
                var _ref7 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          if (voteContract) {
                            _context6.next = 3;
                            break;
                          }

                          console.log("voteContract dne");
                          return _context6.abrupt("return");

                        case 3:
                          _context6.next = 5;
                          return voteContract.methods.editElection(title, new Date(startDate).getTime(), new Date(endDate).getTime(), description, [0]).send({
                            from: manager
                          });

                        case 5:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                return function setUpElection() {
                  return _ref7.apply(this, arguments);
                };
              }();

              displayVote = /*#__PURE__*/function () {
                var _ref8 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
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
                  return _ref8.apply(this, arguments);
                };
              }();

              _context8.next = 10;
              return initWeb3();

            case 10:
              _context8.next = 12;
              return connectWeb3();

            case 12:
              _context8.next = 14;
              return setupVoteFactory();

            case 14:
              _context8.next = 16;
              return createVote();

            case 16:
              _context8.next = 18;
              return getElectionAddress();

            case 18:
              _context8.next = 20;
              return initializeElection();

            case 20:
              _context8.next = 22;
              return setUpElection();

            case 22:
              _context8.next = 24;
              return displayVote();

            case 24:
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
      lineNumber: 152,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }, "New Election"), __jsx("form", {
    onSubmit: onSubmit,
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
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
      lineNumber: 160,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
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
      lineNumber: 170,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
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
      lineNumber: 183,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
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
      lineNumber: 194,
      columnNumber: 21
    }
  }, electionTypes.map(function (option) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 29
      }
    }, option.label);
  }))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
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
      lineNumber: 211,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 21
    }
  }, "Cancel"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    type: "submit",
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 21
    }
  }, "Publish Election"))));
};

_s(NewElection, "JCcJ9dwcG2WjdfgGb0a6cHKUriw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL25ld0VsZWN0aW9uLmpzIl0sIm5hbWVzIjpbIk5ld0VsZWN0aW9uIiwiZWxlY3Rpb25UeXBlcyIsInZhbHVlIiwibGFiZWwiLCJ1c2VTdGF0ZSIsInRpdGxlIiwic2V0VGl0bGUiLCJjaGFuZ2VUaXRsZSIsImV2ZW50IiwidGFyZ2V0Iiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiY2hhbmdlU3RhcnREYXRlIiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJjaGFuZ2VFbmREYXRlIiwiZWxlY3Rpb25UeXBlIiwic2V0RWxlY3Rpb25UeXBlIiwiY2hhbmdlRWxlY3Rpb25UeXBlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImNoYW5nZURlc2NyaXB0aW9uIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImluaXRXZWIzIiwiY29uc29sZSIsImxvZyIsImdldFdlYjMiLCJ3ZWIzIiwic2V0dXBWb3RlRmFjdG9yeSIsImV0aCIsImdldEFjY291bnRzIiwibWFuYWdlciIsIm5ldCIsImdldElkIiwibmV0d29ya0lkIiwiZGVwbG95ZWROZXR3b3JrIiwiVm90ZUZhY3RvcnlDb250cmFjdCIsIm5ldHdvcmtzIiwiaW5zdGFuY2UiLCJDb250cmFjdCIsImFiaSIsImFkZHJlc3MiLCJmYWN0b3J5Q29udHJhY3QiLCJhbGVydCIsImVycm9yIiwiY3JlYXRlVm90ZSIsIm1ldGhvZHMiLCJzZW5kIiwiZnJvbSIsImdldEVsZWN0aW9uQWRkcmVzcyIsImdldERlcGxveWVkVm90ZXMiLCJjYWxsIiwicmVzcG9uc2UiLCJhZGRyZXNzT2ZWb3RlIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUVsZWN0aW9uIiwiVm90ZUNvbnRyYWN0Iiwic2V0Vm90ZUNvbnRyYWN0Iiwic2V0VXBFbGVjdGlvbiIsInZvdGVDb250cmFjdCIsImVkaXRFbGVjdGlvbiIsIkRhdGUiLCJnZXRUaW1lIiwiZGlzcGxheVZvdGUiLCJjdXJy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O0FBSWEsU0FBSyxFQUFFZ0IsV0FKcEI7QUFLYSxZQUFRLEVBQUVFLGlCQUx2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FwREosRUE4REk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlESixFQStESTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosRUFFSSxNQUFDLHdEQUFEO0FBQVUsUUFBSSxFQUFDLFFBQWY7QUFBd0IsWUFBUSxFQUFFQyxRQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZKLENBL0RKLENBUEosQ0FESjtBQWdGSCxDQTVORDs7R0FBTXRCLFc7O0tBQUFBLFc7QUE2TlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ld0VsZWN0aW9uLjE0ZmI0NTQ1MjFjYmFlMGQxNjJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5pbXBvcnQgVm90ZUZhY3RvcnlDb250cmFjdCBmcm9tIFwiLi4vY29udHJhY3RzL1ZvdGVGYWN0b3J5Lmpzb25cIjtcclxuaW1wb3J0IFZvdGVDb250cmFjdCBmcm9tIFwiLi4vY29udHJhY3RzL1ZvdGUuanNvblwiO1xyXG5pbXBvcnQgKiBhcyBtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgZ2V0V2ViMyBmcm9tIFwiLi4vZ2V0V2ViM1wiO1xyXG5cclxuXHJcblxyXG5jb25zdCBOZXdFbGVjdGlvbiA9ICgpID0+IHtcclxuXHJcbiAgICAvLyBjb25zdCBbd2ViMywgc2V0V2ViM10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICAvLyBjb25zdCBbdm90ZUNvbnRyYWN0LCBzZXRWb3RlQ29udHJhY3RdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgZWxlY3Rpb25UeXBlcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbHVlOiAnbWFqb3JpdHknLFxyXG4gICAgICAgICAgICBsYWJlbDogJ3NpbXBsZSBtYWpvcml0eSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFsdWU6ICd0d29UaGlyZHMnLFxyXG4gICAgICAgICAgICBsYWJlbDogJ3R3byB0aGlyZHMnXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICAvLyB2YXIgd2ViM0luc3RhbmNlO1xyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBhc3luYyBmdW5jdGlvbiBpbml0V2ViMygpIHtcclxuICAgIC8vICAgICAgICAgd2ViM0luc3RhbmNlID0gYXdhaXQgZ2V0V2ViMygpO1xyXG4gICAgLy8gICAgICAgICBzZXRXZWIzKHdlYjNJbnN0YW5jZSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGluaXRXZWIzKCk7XHJcbiAgICAvLyB9LFtdKTtcclxuXHJcbiAgICAvL3BsZWFzZSBmb2xsb3cgdGhlIGNvdXJzZSBmb3IgYSBiZXR0ZXIgaW1wbGVtZW50YXRpb24gQEppbmdcclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgY2hhbmdlVGl0bGUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRUaXRsZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IFtzdGFydERhdGUsIHNldFN0YXJ0RGF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGNoYW5nZVN0YXJ0RGF0ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldFN0YXJ0RGF0ZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IFtlbmREYXRlLCBzZXRFbmREYXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgY2hhbmdlRW5kRGF0ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldEVuZERhdGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBbZWxlY3Rpb25UeXBlLCBzZXRFbGVjdGlvblR5cGVdID0gdXNlU3RhdGUoJ21ham9yaXR5Jyk7XHJcbiAgICBjb25zdCBjaGFuZ2VFbGVjdGlvblR5cGUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRFbGVjdGlvblR5cGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IGNoYW5nZURlc2NyaXB0aW9uID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0RGVzY3JpcHRpb24oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgd2ViM1xyXG4gICAgICAgIHZhciBtYW5hZ2VyXHJcbiAgICAgICAgdmFyIGZhY3RvcnlDb250cmFjdFxyXG4gICAgICAgIHZhciB2b3RlQ29udHJhY3Q7XHJcbiAgICAgICAgdmFyIGFkZHJlc3NPZlZvdGVcclxuXHJcbiAgICAgICAgdmFyIGluaXRXZWIzID0gYXN5bmMgKCkgPT4geyAvL2luaXRpYWxpemVzIHdlYjNcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2luaXRpYWxpemluZyB3ZWIzJylcclxuICAgICAgICAgICAgd2ViMyA9IGF3YWl0IGdldFdlYjMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNldHVwVm90ZUZhY3RvcnkgPSBhc3luYyAoKSA9PiB7IC8vaW5pdGlhbGl6ZXMgdm90ZUZhY3RvcnlcclxuICAgICAgICAgICAgaWYod2ViMyA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NyaW5nZScpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXR0aW5nIHVwIGZhY3RvcnknKVxyXG4gICAgICAgICAgICAgICAgW21hbmFnZXJdID0gKGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCkpO1xyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjb250cmFjdCBpbnN0YW5jZS5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVwbG95ZWROZXR3b3JrID0gVm90ZUZhY3RvcnlDb250cmFjdC5uZXR3b3Jrc1tuZXR3b3JrSWRdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgVm90ZUZhY3RvcnlDb250cmFjdC5hYmksXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwbG95ZWROZXR3b3JrICYmIGRlcGxveWVkTmV0d29yay5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGZhY3RvcnlDb250cmFjdCA9IGluc3RhbmNlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDYXRjaCBhbnkgZXJyb3JzIGZvciBhbnkgb2YgdGhlIGFib3ZlIG9wZXJhdGlvbnMuXHJcbiAgICAgICAgICAgICAgICBhbGVydChcclxuICAgICAgICAgICAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNyZWF0ZVZvdGUgPSBhc3luYyAoKSA9PiB7Ly91c2VzIHZvdGVGYWN0b3J5IHRvIGNyZWF0ZSBWb3RlXHJcbiAgICAgICAgICAgIGlmKGZhY3RvcnlDb250cmFjdCA9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gR2V0IHRoZSB2YWx1ZSBmcm9tIHRoZSBjb250cmFjdCB0byBwcm92ZSBpdCB3b3JrZWQuXHJcbiAgICAgICAgICAgIGF3YWl0IGZhY3RvcnlDb250cmFjdC5tZXRob2RzLmNyZWF0ZVZvdGUoMCkuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBmcm9tOiBtYW5hZ2VyXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGdldEVsZWN0aW9uQWRkcmVzcyA9IGFzeW5jICgpID0+IHsvL2NhbGxzIHZvdGVGYWN0b3J5IG1ldGhvZCB0byBnZXQgbmV3IFZvdGUgYWRkcmVzc1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZhY3RvcnlDb250cmFjdC5tZXRob2RzLmdldERlcGxveWVkVm90ZXMoKS5jYWxsKCk7XHJcbiAgICAgICAgICAgIGFkZHJlc3NPZlZvdGUgPSByZXNwb25zZVtyZXNwb25zZS5sZW5ndGggLSAxXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBpbml0aWFsaXplRWxlY3Rpb24gPSBhc3luYyAoKSA9PiB7Ly9pbml0aWFsaXplcyB2b3RlIGNvbnRyYWN0XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBhd2FpdCBuZXcgd2ViMy5ldGguQ29udHJhY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgVm90ZUNvbnRyYWN0LmFiaSxcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzT2ZWb3RlLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHNldFZvdGVDb250cmFjdChpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICAvLyB2b3RlQ29udHJhY3QgPSBpbnN0YW5jZTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cclxuICAgICAgICAgICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2V0VXBFbGVjdGlvbiA9IGFzeW5jKCkgPT4gey8vY2FsbCB0byB2b3RlIGNvbnRyYWN0IHRvIGVkaXQgZWxlY3Rpb25cclxuICAgICAgICAgICAgaWYgKCF2b3RlQ29udHJhY3QpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidm90ZUNvbnRyYWN0IGRuZVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhd2FpdCB2b3RlQ29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgICAgICAgICAgLmVkaXRFbGVjdGlvbih0aXRsZSwgbmV3IERhdGUoc3RhcnREYXRlKS5nZXRUaW1lKCksIG5ldyBEYXRlKGVuZERhdGUpLmdldFRpbWUoKSwgZGVzY3JpcHRpb24sIFswXSlcclxuICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBtYW5hZ2VyXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBkaXNwbGF5Vm90ZSA9IGFzeW5jICgpID0+IHsgLy8gdGVzdGluZyBwdXJwb3Nlc1xyXG4gICAgICAgICAgICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgdm90ZUNvbnRyYWN0Lm1ldGhvZHMuY3VycmVudEVsZWN0aW9uKCkuY2FsbCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdW1tYXJ5KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGF3YWl0IGluaXRXZWIzKCk7XHJcbiAgICAgICAgYXdhaXQgY29ubmVjdFdlYjMoKTtcclxuICAgICAgICBhd2FpdCBzZXR1cFZvdGVGYWN0b3J5KCk7XHJcbiAgICAgICAgYXdhaXQgY3JlYXRlVm90ZSgpO1xyXG4gICAgICAgIGF3YWl0IGdldEVsZWN0aW9uQWRkcmVzcygpO1xyXG4gICAgICAgIGF3YWl0IGluaXRpYWxpemVFbGVjdGlvbigpO1xyXG4gICAgICAgIGF3YWl0IHNldFVwRWxlY3Rpb24oKTtcclxuICAgICAgICBhd2FpdCBkaXNwbGF5Vm90ZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8aDE+TmV3IEVsZWN0aW9uPC9oMT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG0uVGV4dEZpZWxkIHJlcXVpcmVkIGZ1bGxXaWR0aCBsYWJlbD1cIkVsZWN0aW9uIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L20uVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG0uVGV4dEZpZWxkIGxhYmVsPVwiU3RhcnQgZGF0ZVwiIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVN0YXJ0RGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvbS5UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bS5UZXh0RmllbGQgcmVxdWlyZWQgbGFiZWw9XCJFbmQgZGF0ZVwiIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VFbmREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bS5UZXh0RmllbGQgcmVxdWlyZWQgc2VsZWN0IGxhYmVsPVwiVHlwZSBvZiBlbGVjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbGVjdGlvblR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VFbGVjdGlvblR5cGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZWxlY3Rpb25UeXBlcy5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG0uTWVudUl0ZW0ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L20uTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbS5UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7Lyo8bS5UZXh0RmllbGQgbGFiZWw9XCJTZWxlY3QgZ3JvdXBzIChzb21lb25lIGhlbHAgd2l0aCB0aGUgc2VhcmNoIGFuZCBzZWxlY3QgbXVsdGlwbGUgcGx6KVwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG0uVGV4dEZpZWxkIHJlcXVpcmVkIG11bHRpbGluZSBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZURlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG0uQnV0dG9uPkNhbmNlbDwvbS5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG0uQnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvblN1Ym1pdD17b25TdWJtaXR9PlB1Ymxpc2ggRWxlY3Rpb248L20uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5ld0VsZWN0aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9