webpackHotUpdate_N_E("pages/newElection",{

/***/ "./src/pages/newElection.js":
/*!**********************************!*\
  !*** ./src/pages/newElection.js ***!
  \**********************************/
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
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contracts/VoteFactory.json */ "./src/contracts/VoteFactory.json");
var _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/VoteFactory.json */ "./src/contracts/VoteFactory.json", 1);
/* harmony import */ var _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contracts/Vote.json */ "./src/contracts/Vote.json");
var _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/Vote.json */ "./src/contracts/Vote.json", 1);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _getWeb3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../getWeb3 */ "./src/getWeb3.js");




var _jsxFileName = "C:\\Users\\foubroker\\PROJECT_VOTE\\voting-at-mcgill\\client\\src\\pages\\newElection.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







var NewElection = function NewElection() {
  _s();

  // const [web3, setWeb3] = useState('');
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      title = _useState[0],
      setTitle = _useState[1];

  var changeTitle = function changeTitle(event) {
    setTitle(event.target.value);
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      startDate = _useState2[0],
      setStartDate = _useState2[1];

  var changeStartDate = function changeStartDate(event) {
    setStartDate(event.target.value);
  };

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      endDate = _useState3[0],
      setEndDate = _useState3[1];

  var changeEndDate = function changeEndDate(event) {
    setEndDate(event.target.value);
  };

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('majority'),
      electionType = _useState4[0],
      setElectionType = _useState4[1];

  var changeElectionType = function changeElectionType(event) {
    setElectionType(event.target.value);
  };

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      description = _useState5[0],
      setDescription = _useState5[1];

  var changeDescription = function changeDescription(event) {
    setDescription(event.target.value);
  };

  var onSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8(event) {
      var web3, manager, factoryContract, voteContract, addressOfVote, initWeb3, setupVoteFactory, createVote, getElectionAddress, initializeElection, setUpElection, displayVote;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              event.preventDefault();

              initWeb3 = /*#__PURE__*/function () {
                var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          console.log('what');
                          _context.next = 3;
                          return Object(_getWeb3__WEBPACK_IMPORTED_MODULE_8__["default"])();

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
                var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
                  var _yield$web3$eth$getAc, _yield$web3$eth$getAc2, networkId, deployedNetwork, instance;

                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
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
                          _context2.next = 5;
                          return web3.eth.getAccounts();

                        case 5:
                          _yield$web3$eth$getAc = _context2.sent;
                          _yield$web3$eth$getAc2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_yield$web3$eth$getAc, 1);
                          manager = _yield$web3$eth$getAc2[0];
                          _context2.next = 10;
                          return web3.eth.net.getId();

                        case 10:
                          networkId = _context2.sent;
                          deployedNetwork = _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_5__.networks[networkId];
                          instance = new web3.eth.Contract(_contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_5__.abi, deployedNetwork && deployedNetwork.address);
                          factoryContract = instance; // Set web3, accounts, and contract to the state, and then proceed with an

                          _context2.next = 20;
                          break;

                        case 16:
                          _context2.prev = 16;
                          _context2.t0 = _context2["catch"](2);
                          // Catch any errors for any of the above operations.
                          alert("Failed to load web3, accounts, or contract. Check console for details.");
                          console.error(_context2.t0);

                        case 20:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, null, [[2, 16]]);
                }));

                return function setupVoteFactory() {
                  return _ref3.apply(this, arguments);
                };
              }();

              createVote = /*#__PURE__*/function () {
                var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
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
                var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
                  var response;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
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
                var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
                  var instance;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.prev = 0;
                          _context5.next = 3;
                          return new web3.eth.Contract(_contracts_Vote_json__WEBPACK_IMPORTED_MODULE_6__.abi, addressOfVote);

                        case 3:
                          instance = _context5.sent;
                          voteContract = instance;
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
                var _ref7 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
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
                var _ref8 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7() {
                  var summary;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
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
              return setupVoteFactory();

            case 12:
              _context8.next = 14;
              return createVote();

            case 14:
              _context8.next = 16;
              return getElectionAddress();

            case 16:
              _context8.next = 18;
              return initializeElection();

            case 18:
              _context8.next = 20;
              return setUpElection();

            case 20:
              _context8.next = 22;
              return displayVote();

            case 22:
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, "New Election"), __jsx("form", {
    onSubmit: onSubmit,
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
    required: true,
    fullWidth: true,
    label: "Election title",
    variant: "outlined",
    value: title,
    onChange: changeTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
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
      lineNumber: 165,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
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
      lineNumber: 178,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
    required: true,
    select: true,
    label: "Type of election",
    variant: "outlined",
    value: electionType,
    onChange: changeElectionType,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 21
    }
  }, electionTypes.map(function (option) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["MenuItem"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 29
      }
    }, option.label);
  }))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
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
      lineNumber: 206,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 21
    }
  }, "Cancel"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    type: "submit",
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL25ld0VsZWN0aW9uLmpzIl0sIm5hbWVzIjpbIk5ld0VsZWN0aW9uIiwiZWxlY3Rpb25UeXBlcyIsInZhbHVlIiwibGFiZWwiLCJ1c2VTdGF0ZSIsInRpdGxlIiwic2V0VGl0bGUiLCJjaGFuZ2VUaXRsZSIsImV2ZW50IiwidGFyZ2V0Iiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiY2hhbmdlU3RhcnREYXRlIiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJjaGFuZ2VFbmREYXRlIiwiZWxlY3Rpb25UeXBlIiwic2V0RWxlY3Rpb25UeXBlIiwiY2hhbmdlRWxlY3Rpb25UeXBlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImNoYW5nZURlc2NyaXB0aW9uIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImluaXRXZWIzIiwiY29uc29sZSIsImxvZyIsImdldFdlYjMiLCJ3ZWIzIiwic2V0dXBWb3RlRmFjdG9yeSIsImV0aCIsImdldEFjY291bnRzIiwibWFuYWdlciIsIm5ldCIsImdldElkIiwibmV0d29ya0lkIiwiZGVwbG95ZWROZXR3b3JrIiwiVm90ZUZhY3RvcnlDb250cmFjdCIsIm5ldHdvcmtzIiwiaW5zdGFuY2UiLCJDb250cmFjdCIsImFiaSIsImFkZHJlc3MiLCJmYWN0b3J5Q29udHJhY3QiLCJhbGVydCIsImVycm9yIiwiY3JlYXRlVm90ZSIsIm1ldGhvZHMiLCJzZW5kIiwiZnJvbSIsImdldEVsZWN0aW9uQWRkcmVzcyIsImdldERlcGxveWVkVm90ZXMiLCJjYWxsIiwicmVzcG9uc2UiLCJhZGRyZXNzT2ZWb3RlIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUVsZWN0aW9uIiwiVm90ZUNvbnRyYWN0Iiwidm90ZUNvbnRyYWN0Iiwic2V0VXBFbGVjdGlvbiIsImVkaXRFbGVjdGlvbiIsIkRhdGUiLCJnZXRUaW1lIiwiZGlzcGxheVZvdGUiLCJjdXJyZW50RWxlY3Rpb24iLCJzdW1t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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosRUFFSSxNQUFDLHdEQUFEO0FBQVUsUUFBSSxFQUFDLFFBQWY7QUFBd0IsWUFBUSxFQUFFQyxRQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZKLENBL0RKLENBUEosQ0FESjtBQWdGSCxDQXZORDs7R0FBTXRCLFc7O0tBQUFBLFc7QUF3TlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ld0VsZWN0aW9uLjkwYzZlMWI4YjIxYzYwN2I2MWEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5pbXBvcnQgVm90ZUZhY3RvcnlDb250cmFjdCBmcm9tIFwiLi4vY29udHJhY3RzL1ZvdGVGYWN0b3J5Lmpzb25cIjtcclxuaW1wb3J0IFZvdGVDb250cmFjdCBmcm9tIFwiLi4vY29udHJhY3RzL1ZvdGUuanNvblwiO1xyXG5pbXBvcnQgKiBhcyBtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgZ2V0V2ViMyBmcm9tIFwiLi4vZ2V0V2ViM1wiO1xyXG5cclxuXHJcblxyXG5jb25zdCBOZXdFbGVjdGlvbiA9ICgpID0+IHtcclxuXHJcbiAgICAvLyBjb25zdCBbd2ViMywgc2V0V2ViM10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBlbGVjdGlvblR5cGVzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFsdWU6ICdtYWpvcml0eScsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnc2ltcGxlIG1ham9yaXR5J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YWx1ZTogJ3R3b1RoaXJkcycsXHJcbiAgICAgICAgICAgIGxhYmVsOiAndHdvIHRoaXJkcydcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIC8vIHZhciB3ZWIzSW5zdGFuY2U7XHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIGFzeW5jIGZ1bmN0aW9uIGluaXRXZWIzKCkge1xyXG4gICAgLy8gICAgICAgICB3ZWIzSW5zdGFuY2UgPSBhd2FpdCBnZXRXZWIzKCk7XHJcbiAgICAvLyAgICAgICAgIHNldFdlYjMod2ViM0luc3RhbmNlKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgaW5pdFdlYjMoKTtcclxuICAgIC8vIH0sW10pO1xyXG5cclxuICAgIC8vcGxlYXNlIGZvbGxvdyB0aGUgY291cnNlIGZvciBhIGJldHRlciBpbXBsZW1lbnRhdGlvbiBASmluZ1xyXG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBjaGFuZ2VUaXRsZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldFRpdGxlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgY2hhbmdlU3RhcnREYXRlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0U3RhcnREYXRlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBjaGFuZ2VFbmREYXRlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0RW5kRGF0ZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IFtlbGVjdGlvblR5cGUsIHNldEVsZWN0aW9uVHlwZV0gPSB1c2VTdGF0ZSgnbWFqb3JpdHknKTtcclxuICAgIGNvbnN0IGNoYW5nZUVsZWN0aW9uVHlwZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldEVsZWN0aW9uVHlwZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgY2hhbmdlRGVzY3JpcHRpb24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXREZXNjcmlwdGlvbihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdmFyIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgd2ViM1xyXG4gICAgICAgIHZhciBtYW5hZ2VyXHJcbiAgICAgICAgdmFyIGZhY3RvcnlDb250cmFjdFxyXG4gICAgICAgIHZhciB2b3RlQ29udHJhY3Q7XHJcbiAgICAgICAgdmFyIGFkZHJlc3NPZlZvdGVcclxuICAgICAgICB2YXIgaW5pdFdlYjMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3aGF0JylcclxuICAgICAgICAgICAgd2ViMyA9IGF3YWl0IGdldFdlYjMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNldHVwVm90ZUZhY3RvcnkgPSBhc3luYyAoKSA9PiB7IC8vaW5pdGlhbGl6ZXMgdm90ZUZhY3RvcnlcclxuICAgICAgICAgICAgaWYod2ViMyA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBbbWFuYWdlcl0gPSAoYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViMy5ldGgubmV0LmdldElkKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXBsb3llZE5ldHdvcmsgPSBWb3RlRmFjdG9yeUNvbnRyYWN0Lm5ldHdvcmtzW25ldHdvcmtJZF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgICAgICAgICAgICBWb3RlRmFjdG9yeUNvbnRyYWN0LmFiaSxcclxuICAgICAgICAgICAgICAgICAgICBkZXBsb3llZE5ldHdvcmsgJiYgZGVwbG95ZWROZXR3b3JrLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgZmFjdG9yeUNvbnRyYWN0ID0gaW5zdGFuY2U7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2V0IHdlYjMsIGFjY291bnRzLCBhbmQgY29udHJhY3QgdG8gdGhlIHN0YXRlLCBhbmQgdGhlbiBwcm9jZWVkIHdpdGggYW5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cclxuICAgICAgICAgICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY3JlYXRlVm90ZSA9IGFzeW5jICgpID0+IHsvL3VzZXMgdm90ZUZhY3RvcnkgdG8gY3JlYXRlIFZvdGVcclxuICAgICAgICAgICAgaWYoZmFjdG9yeUNvbnRyYWN0ID09ICcnKXtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIHZhbHVlIGZyb20gdGhlIGNvbnRyYWN0IHRvIHByb3ZlIGl0IHdvcmtlZC5cclxuICAgICAgICAgICAgYXdhaXQgZmFjdG9yeUNvbnRyYWN0Lm1ldGhvZHMuY3JlYXRlVm90ZSgwKS5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGZyb206IG1hbmFnZXJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgZ2V0RWxlY3Rpb25BZGRyZXNzID0gYXN5bmMgKCkgPT4gey8vY2FsbHMgdm90ZUZhY3RvcnkgbWV0aG9kIHRvIGdldCBuZXcgVm90ZSBhZGRyZXNzXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmFjdG9yeUNvbnRyYWN0Lm1ldGhvZHMuZ2V0RGVwbG95ZWRWb3RlcygpLmNhbGwoKTtcclxuICAgICAgICAgICAgYWRkcmVzc09mVm90ZSA9IHJlc3BvbnNlW3Jlc3BvbnNlLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGluaXRpYWxpemVFbGVjdGlvbiA9IGFzeW5jICgpID0+IHsvL2luaXRpYWxpemVzIHZvdGUgY29udHJhY3RcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IGF3YWl0IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgICAgICAgICAgICBWb3RlQ29udHJhY3QuYWJpLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NPZlZvdGUsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdm90ZUNvbnRyYWN0ID0gaW5zdGFuY2U7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDYXRjaCBhbnkgZXJyb3JzIGZvciBhbnkgb2YgdGhlIGFib3ZlIG9wZXJhdGlvbnMuXHJcbiAgICAgICAgICAgICAgICBhbGVydChcclxuICAgICAgICAgICAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNldFVwRWxlY3Rpb24gPSBhc3luYygpID0+IHsvL2NhbGwgdG8gdm90ZSBjb250cmFjdCB0byBlZGl0IGVsZWN0aW9uXHJcbiAgICAgICAgICAgIGlmICghdm90ZUNvbnRyYWN0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZvdGVDb250cmFjdCBkbmVcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXdhaXQgdm90ZUNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAgICAgICAgIC5lZGl0RWxlY3Rpb24odGl0bGUsIG5ldyBEYXRlKHN0YXJ0RGF0ZSkuZ2V0VGltZSgpLCBuZXcgRGF0ZShlbmREYXRlKS5nZXRUaW1lKCksIGRlc2NyaXB0aW9uLCBbMF0pXHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogbWFuYWdlclxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgZGlzcGxheVZvdGUgPSBhc3luYyAoKSA9PiB7IC8vIHRlc3RpbmcgcHVycG9zZXNcclxuICAgICAgICAgICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IHZvdGVDb250cmFjdC5tZXRob2RzLmN1cnJlbnRFbGVjdGlvbigpLmNhbGwoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3VtbWFyeSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBhd2FpdCBpbml0V2ViMygpO1xyXG4gICAgICAgIGF3YWl0IHNldHVwVm90ZUZhY3RvcnkoKTtcclxuICAgICAgICBhd2FpdCBjcmVhdGVWb3RlKCk7XHJcbiAgICAgICAgYXdhaXQgZ2V0RWxlY3Rpb25BZGRyZXNzKCk7XHJcbiAgICAgICAgYXdhaXQgaW5pdGlhbGl6ZUVsZWN0aW9uKCk7XHJcbiAgICAgICAgYXdhaXQgc2V0VXBFbGVjdGlvbigpO1xyXG4gICAgICAgIGF3YWl0IGRpc3BsYXlWb3RlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxoMT5OZXcgRWxlY3Rpb248L2gxPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bS5UZXh0RmllbGQgcmVxdWlyZWQgZnVsbFdpZHRoIGxhYmVsPVwiRWxlY3Rpb24gdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvbS5UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bS5UZXh0RmllbGQgbGFiZWw9XCJTdGFydCBkYXRlXCIgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhcnREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlU3RhcnREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9tLlRleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxtLlRleHRGaWVsZCByZXF1aXJlZCBsYWJlbD1cIkVuZCBkYXRlXCIgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW5kRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUVuZERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxtLlRleHRGaWVsZCByZXF1aXJlZCBzZWxlY3QgbGFiZWw9XCJUeXBlIG9mIGVsZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VsZWN0aW9uVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUVsZWN0aW9uVHlwZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVjdGlvblR5cGVzLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bS5NZW51SXRlbSBrZXk9e29wdGlvbi52YWx1ZX0gdmFsdWU9e29wdGlvbi52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbS5NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tLlRleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKjxtLlRleHRGaWVsZCBsYWJlbD1cIlNlbGVjdCBncm91cHMgKHNvbWVvbmUgaGVscCB3aXRoIHRoZSBzZWFyY2ggYW5kIHNlbGVjdCBtdWx0aXBsZSBwbHopXCIgdmFyaWFudD1cIm91dGxpbmVkXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bS5UZXh0RmllbGQgcmVxdWlyZWQgbXVsdGlsaW5lIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bS5CdXR0b24+Q2FuY2VsPC9tLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8bS5CdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uU3VibWl0PXtvblN1Ym1pdH0+UHVibGlzaCBFbGVjdGlvbjwvbS5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTmV3RWxlY3Rpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=