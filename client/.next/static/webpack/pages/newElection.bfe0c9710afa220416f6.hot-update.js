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
                          _context.next = 2;
                          return Object(_getWeb3__WEBPACK_IMPORTED_MODULE_8__["default"])();

                        case 2:
                          web3 = _context.sent;

                        case 3:
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
                          _yield$web3$eth$getAc = _context2.sent;
                          _yield$web3$eth$getAc2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_yield$web3$eth$getAc, 1);
                          manager = _yield$web3$eth$getAc2[0];
                          _context2.next = 11;
                          return web3.eth.net.getId();

                        case 11:
                          networkId = _context2.sent;
                          deployedNetwork = _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_5__.networks[networkId];
                          instance = new web3.eth.Contract(_contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_5__.abi, deployedNetwork && deployedNetwork.address);
                          factoryContract = instance; // Set web3, accounts, and contract to the state, and then proceed with an

                          _context2.next = 21;
                          break;

                        case 17:
                          _context2.prev = 17;
                          _context2.t0 = _context2["catch"](3);
                          // Catch any errors for any of the above operations.
                          alert("Failed to load web3, accounts, or contract. Check console for details.");
                          console.error(_context2.t0);

                        case 21:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, null, [[3, 17]]);
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }), __jsx("br", {
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
  }), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }, "New Election"), __jsx("form", {
    onSubmit: onSubmit,
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
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
      lineNumber: 158,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
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
      lineNumber: 168,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
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
      lineNumber: 181,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
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
      lineNumber: 192,
      columnNumber: 21
    }
  }, electionTypes.map(function (option) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["MenuItem"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 29
      }
    }, option.label);
  }))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
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
      lineNumber: 209,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 21
    }
  }, "Cancel"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    type: "submit",
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL25ld0VsZWN0aW9uLmpzIl0sIm5hbWVzIjpbIk5ld0VsZWN0aW9uIiwiZWxlY3Rpb25UeXBlcyIsInZhbHVlIiwibGFiZWwiLCJ1c2VTdGF0ZSIsInRpdGxlIiwic2V0VGl0bGUiLCJjaGFuZ2VUaXRsZSIsImV2ZW50IiwidGFyZ2V0Iiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiY2hhbmdlU3RhcnREYXRlIiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJjaGFuZ2VFbmREYXRlIiwiZWxlY3Rpb25UeXBlIiwic2V0RWxlY3Rpb25UeXBlIiwiY2hhbmdlRWxlY3Rpb25UeXBlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImNoYW5nZURlc2NyaXB0aW9uIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImluaXRXZWIzIiwiZ2V0V2ViMyIsIndlYjMiLCJzZXR1cFZvdGVGYWN0b3J5IiwiY29uc29sZSIsImxvZyIsImV0aCIsImdldEFjY291bnRzIiwibWFuYWdlciIsIm5ldCIsImdldElkIiwibmV0d29ya0lkIiwiZGVwbG95ZWROZXR3b3JrIiwiVm90ZUZhY3RvcnlDb250cmFjdCIsIm5ldHdvcmtzIiwiaW5zdGFuY2UiLCJDb250cmFjdCIsImFiaSIsImFkZHJlc3MiLCJmYWN0b3J5Q29udHJhY3QiLCJhbGVydCIsImVycm9yIiwiY3JlYXRlVm90ZSIsIm1ldGhvZHMiLCJzZW5kIiwiZnJvbSIsImdldEVsZWN0aW9uQWRkcmVzcyIsImdldERlcGxveWVkVm90ZXMiLCJjYWxsIiwicmVzcG9uc2UiLCJhZGRyZXNzT2ZWb3RlIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUVsZWN0aW9uIiwiVm90ZUNvbnRyYWN0Iiwic2V0Vm90ZUNvbnRyYWN0Iiwic2V0VXBFbGVjdGlvbiIsInZvdGVDb250cmFjdCIsImVkaXRFbGVjdGlvbiIsIkRhdGUiLCJnZXRUaW1lIiwiZGlzcGxheVZvdGUiLCJjdXJy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QTtBQUFBO0FBQUE7QUFBQSxJQURKLENBcERKLEVBOERJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE5REosRUErREk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUksTUFBQyx3REFBRDtBQUFVLFFBQUksRUFBQyxRQUFmO0FBQXdCLFlBQVEsRUFBRUMsUUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSixDQS9ESixDQVBKLENBREo7QUFnRkgsQ0ExTkQ7O0dBQU10QixXOztLQUFBQSxXO0FBMk5TQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXdFbGVjdGlvbi5iZmUwYzk3MTBhZmEyMjA0MTZmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuaW1wb3J0IFZvdGVGYWN0b3J5Q29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlRmFjdG9yeS5qc29uXCI7XHJcbmltcG9ydCBWb3RlQ29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlLmpzb25cIjtcclxuaW1wb3J0ICogYXMgbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IGdldFdlYjMgZnJvbSBcIi4uL2dldFdlYjNcIjtcclxuXHJcblxyXG5cclxuY29uc3QgTmV3RWxlY3Rpb24gPSAoKSA9PiB7XHJcblxyXG4gICAgLy8gY29uc3QgW3dlYjMsIHNldFdlYjNdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgLy8gY29uc3QgW3ZvdGVDb250cmFjdCwgc2V0Vm90ZUNvbnRyYWN0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IGVsZWN0aW9uVHlwZXMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YWx1ZTogJ21ham9yaXR5JyxcclxuICAgICAgICAgICAgbGFiZWw6ICdzaW1wbGUgbWFqb3JpdHknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbHVlOiAndHdvVGhpcmRzJyxcclxuICAgICAgICAgICAgbGFiZWw6ICd0d28gdGhpcmRzJ1xyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgLy8gdmFyIHdlYjNJbnN0YW5jZTtcclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgYXN5bmMgZnVuY3Rpb24gaW5pdFdlYjMoKSB7XHJcbiAgICAvLyAgICAgICAgIHdlYjNJbnN0YW5jZSA9IGF3YWl0IGdldFdlYjMoKTtcclxuICAgIC8vICAgICAgICAgc2V0V2ViMyh3ZWIzSW5zdGFuY2UpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBpbml0V2ViMygpO1xyXG4gICAgLy8gfSxbXSk7XHJcblxyXG4gICAgLy9wbGVhc2UgZm9sbG93IHRoZSBjb3Vyc2UgZm9yIGEgYmV0dGVyIGltcGxlbWVudGF0aW9uIEBKaW5nXHJcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IGNoYW5nZVRpdGxlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0VGl0bGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBjaGFuZ2VTdGFydERhdGUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRTdGFydERhdGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBbZW5kRGF0ZSwgc2V0RW5kRGF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGNoYW5nZUVuZERhdGUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRFbmREYXRlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgW2VsZWN0aW9uVHlwZSwgc2V0RWxlY3Rpb25UeXBlXSA9IHVzZVN0YXRlKCdtYWpvcml0eScpO1xyXG4gICAgY29uc3QgY2hhbmdlRWxlY3Rpb25UeXBlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0RWxlY3Rpb25UeXBlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBjaGFuZ2VEZXNjcmlwdGlvbiA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldERlc2NyaXB0aW9uKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIHdlYjNcclxuICAgICAgICB2YXIgbWFuYWdlclxyXG4gICAgICAgIHZhciBmYWN0b3J5Q29udHJhY3RcclxuICAgICAgICB2YXIgdm90ZUNvbnRyYWN0O1xyXG4gICAgICAgIHZhciBhZGRyZXNzT2ZWb3RlXHJcblxyXG4gICAgICAgIHZhciBpbml0V2ViMyA9IGFzeW5jICgpID0+IHsgLy9pbml0aWFsaXplcyB3ZWIzXHJcbiAgICAgICAgICAgIHdlYjMgPSBhd2FpdCBnZXRXZWIzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzZXR1cFZvdGVGYWN0b3J5ID0gYXN5bmMgKCkgPT4geyAvL2luaXRpYWxpemVzIHZvdGVGYWN0b3J5XHJcbiAgICAgICAgICAgIGlmKHdlYjMgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjcmluZ2UnKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBbbWFuYWdlcl0gPSAoYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViMy5ldGgubmV0LmdldElkKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXBsb3llZE5ldHdvcmsgPSBWb3RlRmFjdG9yeUNvbnRyYWN0Lm5ldHdvcmtzW25ldHdvcmtJZF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgICAgICAgICAgICBWb3RlRmFjdG9yeUNvbnRyYWN0LmFiaSxcclxuICAgICAgICAgICAgICAgICAgICBkZXBsb3llZE5ldHdvcmsgJiYgZGVwbG95ZWROZXR3b3JrLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgZmFjdG9yeUNvbnRyYWN0ID0gaW5zdGFuY2U7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2V0IHdlYjMsIGFjY291bnRzLCBhbmQgY29udHJhY3QgdG8gdGhlIHN0YXRlLCBhbmQgdGhlbiBwcm9jZWVkIHdpdGggYW5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cclxuICAgICAgICAgICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY3JlYXRlVm90ZSA9IGFzeW5jICgpID0+IHsvL3VzZXMgdm90ZUZhY3RvcnkgdG8gY3JlYXRlIFZvdGVcclxuICAgICAgICAgICAgaWYoZmFjdG9yeUNvbnRyYWN0ID09ICcnKXtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIHZhbHVlIGZyb20gdGhlIGNvbnRyYWN0IHRvIHByb3ZlIGl0IHdvcmtlZC5cclxuICAgICAgICAgICAgYXdhaXQgZmFjdG9yeUNvbnRyYWN0Lm1ldGhvZHMuY3JlYXRlVm90ZSgwKS5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGZyb206IG1hbmFnZXJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgZ2V0RWxlY3Rpb25BZGRyZXNzID0gYXN5bmMgKCkgPT4gey8vY2FsbHMgdm90ZUZhY3RvcnkgbWV0aG9kIHRvIGdldCBuZXcgVm90ZSBhZGRyZXNzXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmFjdG9yeUNvbnRyYWN0Lm1ldGhvZHMuZ2V0RGVwbG95ZWRWb3RlcygpLmNhbGwoKTtcclxuICAgICAgICAgICAgYWRkcmVzc09mVm90ZSA9IHJlc3BvbnNlW3Jlc3BvbnNlLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGluaXRpYWxpemVFbGVjdGlvbiA9IGFzeW5jICgpID0+IHsvL2luaXRpYWxpemVzIHZvdGUgY29udHJhY3RcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IGF3YWl0IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgICAgICAgICAgICBWb3RlQ29udHJhY3QuYWJpLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NPZlZvdGUsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgc2V0Vm90ZUNvbnRyYWN0KGluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIC8vIHZvdGVDb250cmFjdCA9IGluc3RhbmNlO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxyXG4gICAgICAgICAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzZXRVcEVsZWN0aW9uID0gYXN5bmMoKSA9PiB7Ly9jYWxsIHRvIHZvdGUgY29udHJhY3QgdG8gZWRpdCBlbGVjdGlvblxyXG4gICAgICAgICAgICBpZiAoIXZvdGVDb250cmFjdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2b3RlQ29udHJhY3QgZG5lXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF3YWl0IHZvdGVDb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgICAgICAgICAuZWRpdEVsZWN0aW9uKHRpdGxlLCBuZXcgRGF0ZShzdGFydERhdGUpLmdldFRpbWUoKSwgbmV3IERhdGUoZW5kRGF0ZSkuZ2V0VGltZSgpLCBkZXNjcmlwdGlvbiwgWzBdKVxyXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IG1hbmFnZXJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGRpc3BsYXlWb3RlID0gYXN5bmMgKCkgPT4geyAvLyB0ZXN0aW5nIHB1cnBvc2VzXHJcbiAgICAgICAgICAgIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCB2b3RlQ29udHJhY3QubWV0aG9kcy5jdXJyZW50RWxlY3Rpb24oKS5jYWxsKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1bW1hcnkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYXdhaXQgaW5pdFdlYjMoKTtcclxuICAgICAgICBhd2FpdCBjb25uZWN0V2ViMygpO1xyXG4gICAgICAgIGF3YWl0IHNldHVwVm90ZUZhY3RvcnkoKTtcclxuICAgICAgICBhd2FpdCBjcmVhdGVWb3RlKCk7XHJcbiAgICAgICAgYXdhaXQgZ2V0RWxlY3Rpb25BZGRyZXNzKCk7XHJcbiAgICAgICAgYXdhaXQgaW5pdGlhbGl6ZUVsZWN0aW9uKCk7XHJcbiAgICAgICAgYXdhaXQgc2V0VXBFbGVjdGlvbigpO1xyXG4gICAgICAgIGF3YWl0IGRpc3BsYXlWb3RlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxoMT5OZXcgRWxlY3Rpb248L2gxPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bS5UZXh0RmllbGQgcmVxdWlyZWQgZnVsbFdpZHRoIGxhYmVsPVwiRWxlY3Rpb24gdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvbS5UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bS5UZXh0RmllbGQgbGFiZWw9XCJTdGFydCBkYXRlXCIgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhcnREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlU3RhcnREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9tLlRleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxtLlRleHRGaWVsZCByZXF1aXJlZCBsYWJlbD1cIkVuZCBkYXRlXCIgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW5kRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUVuZERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxtLlRleHRGaWVsZCByZXF1aXJlZCBzZWxlY3QgbGFiZWw9XCJUeXBlIG9mIGVsZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VsZWN0aW9uVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUVsZWN0aW9uVHlwZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVjdGlvblR5cGVzLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bS5NZW51SXRlbSBrZXk9e29wdGlvbi52YWx1ZX0gdmFsdWU9e29wdGlvbi52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbS5NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tLlRleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKjxtLlRleHRGaWVsZCBsYWJlbD1cIlNlbGVjdCBncm91cHMgKHNvbWVvbmUgaGVscCB3aXRoIHRoZSBzZWFyY2ggYW5kIHNlbGVjdCBtdWx0aXBsZSBwbHopXCIgdmFyaWFudD1cIm91dGxpbmVkXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bS5UZXh0RmllbGQgcmVxdWlyZWQgbXVsdGlsaW5lIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bS5CdXR0b24+Q2FuY2VsPC9tLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8bS5CdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uU3VibWl0PXtvblN1Ym1pdH0+UHVibGlzaCBFbGVjdGlvbjwvbS5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTmV3RWxlY3Rpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=