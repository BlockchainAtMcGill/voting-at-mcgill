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
      web3 = _useState[0],
      setWeb3 = _useState[1]; // const [voteContract, setVoteContract] = useState('');


  var electionTypes = [{
    value: 'majority',
    label: 'simple majority'
  }, {
    value: 'twoThirds',
    label: 'two thirds'
  }];
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
  }, []); //please follow the course for a better implementation @Jing

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      title = _useState2[0],
      setTitle = _useState2[1];

  var changeTitle = function changeTitle(event) {
    setTitle(event.target.value);
  };

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      startDate = _useState3[0],
      setStartDate = _useState3[1];

  var changeStartDate = function changeStartDate(event) {
    setStartDate(event.target.value);
  };

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      endDate = _useState4[0],
      setEndDate = _useState4[1];

  var changeEndDate = function changeEndDate(event) {
    setEndDate(event.target.value);
  };

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('majority'),
      electionType = _useState5[0],
      setElectionType = _useState5[1];

  var changeElectionType = function changeElectionType(event) {
    setElectionType(event.target.value);
  };

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      description = _useState6[0],
      setDescription = _useState6[1];

  var changeDescription = function changeDescription(event) {
    setDescription(event.target.value);
  };

  var onSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(event) {
      var web3, manager, factoryContract, voteContract, addressOfVote, initWeb3, setupVoteFactory, createVote, getElectionAddress, initializeElection, setUpElection, displayVote;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              event.preventDefault();

              initWeb3 = /*#__PURE__*/function () {
                var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          //initializes web3
                          console.log('initializing web3');
                          _context2.next = 3;
                          return Object(_getWeb3__WEBPACK_IMPORTED_MODULE_7__["default"])();

                        case 3:
                          web3 = _context2.sent;

                        case 4:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function initWeb3() {
                  return _ref2.apply(this, arguments);
                };
              }();

              setupVoteFactory = /*#__PURE__*/function () {
                var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
                  var networkId, deployedNetwork, instance;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          if (!(web3 == '')) {
                            _context3.next = 3;
                            break;
                          }

                          console.log('cringe');
                          return _context3.abrupt("return");

                        case 3:
                          _context3.prev = 3;
                          _context3.next = 6;
                          return web3.eth.getAccounts();

                        case 6:
                          console.log('setting up factory')[manager] = _context3.sent;
                          _context3.next = 9;
                          return web3.eth.net.getId();

                        case 9:
                          networkId = _context3.sent;
                          deployedNetwork = _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_4__.networks[networkId];
                          instance = new web3.eth.Contract(_contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_4__.abi, deployedNetwork && deployedNetwork.address);
                          factoryContract = instance; // Set web3, accounts, and contract to the state, and then proceed with an

                          _context3.next = 19;
                          break;

                        case 15:
                          _context3.prev = 15;
                          _context3.t0 = _context3["catch"](3);
                          // Catch any errors for any of the above operations.
                          alert("Failed to load web3, accounts, or contract. Check console for details.");
                          console.error(_context3.t0);

                        case 19:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3, null, [[3, 15]]);
                }));

                return function setupVoteFactory() {
                  return _ref3.apply(this, arguments);
                };
              }();

              createVote = /*#__PURE__*/function () {
                var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          if (!(factoryContract == '')) {
                            _context4.next = 2;
                            break;
                          }

                          return _context4.abrupt("return");

                        case 2:
                          _context4.next = 4;
                          return factoryContract.methods.createVote(0).send({
                            from: manager
                          });

                        case 4:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function createVote() {
                  return _ref4.apply(this, arguments);
                };
              }();

              getElectionAddress = /*#__PURE__*/function () {
                var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
                  var response;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return factoryContract.methods.getDeployedVotes().call();

                        case 2:
                          response = _context5.sent;
                          addressOfVote = response[response.length - 1];

                        case 4:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function getElectionAddress() {
                  return _ref5.apply(this, arguments);
                };
              }();

              initializeElection = /*#__PURE__*/function () {
                var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
                  var instance;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.prev = 0;
                          _context6.next = 3;
                          return new web3.eth.Contract(_contracts_Vote_json__WEBPACK_IMPORTED_MODULE_5__.abi, addressOfVote);

                        case 3:
                          instance = _context6.sent;
                          setVoteContract(instance); // voteContract = instance;

                          _context6.next = 11;
                          break;

                        case 7:
                          _context6.prev = 7;
                          _context6.t0 = _context6["catch"](0);
                          // Catch any errors for any of the above operations.
                          alert("Failed to load web3, accounts, or contract. Check console for details.");
                          console.error(_context6.t0);

                        case 11:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6, null, [[0, 7]]);
                }));

                return function initializeElection() {
                  return _ref6.apply(this, arguments);
                };
              }();

              setUpElection = /*#__PURE__*/function () {
                var _ref7 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          if (voteContract) {
                            _context7.next = 3;
                            break;
                          }

                          console.log("voteContract dne");
                          return _context7.abrupt("return");

                        case 3:
                          _context7.next = 5;
                          return voteContract.methods.editElection(title, new Date(startDate).getTime(), new Date(endDate).getTime(), description, [0]).send({
                            from: manager
                          });

                        case 5:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }));

                return function setUpElection() {
                  return _ref7.apply(this, arguments);
                };
              }();

              displayVote = /*#__PURE__*/function () {
                var _ref8 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
                  var summary;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          _context8.next = 2;
                          return voteContract.methods.currentElection().call();

                        case 2:
                          summary = _context8.sent;
                          console.log(summary);

                        case 4:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee8);
                }));

                return function displayVote() {
                  return _ref8.apply(this, arguments);
                };
              }(); // await initWeb3();


              console.log('retard');
              _context9.next = 11;
              return setupVoteFactory();

            case 11:
              _context9.next = 13;
              return createVote();

            case 13:
              _context9.next = 15;
              return getElectionAddress();

            case 15:
              _context9.next = 17;
              return initializeElection();

            case 17:
              _context9.next = 19;
              return setUpElection();

            case 19:
              _context9.next = 21;
              return displayVote();

            case 21:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
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

_s(NewElection, "yqAXxnpSXjSaAAUjmkg77upuqrc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL25ld0VsZWN0aW9uLmpzIl0sIm5hbWVzIjpbIk5ld0VsZWN0aW9uIiwidXNlU3RhdGUiLCJ3ZWIzIiwic2V0V2ViMyIsImVsZWN0aW9uVHlwZXMiLCJ2YWx1ZSIsImxhYmVsIiwid2ViM0luc3RhbmNlIiwidXNlRWZmZWN0IiwiaW5pdFdlYjMiLCJnZXRXZWIzIiwidGl0bGUiLCJzZXRUaXRsZSIsImNoYW5nZVRpdGxlIiwiZXZlbnQiLCJ0YXJnZXQiLCJzdGFydERhdGUiLCJzZXRTdGFydERhdGUiLCJjaGFuZ2VTdGFydERhdGUiLCJlbmREYXRlIiwic2V0RW5kRGF0ZSIsImNoYW5nZUVuZERhdGUiLCJlbGVjdGlvblR5cGUiLCJzZXRFbGVjdGlvblR5cGUiLCJjaGFuZ2VFbGVjdGlvblR5cGUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiY2hhbmdlRGVzY3JpcHRpb24iLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInNldHVwVm90ZUZhY3RvcnkiLCJldGgiLCJnZXRBY2NvdW50cyIsIm1hbmFnZXIiLCJuZXQiLCJnZXRJZCIsIm5ldHdvcmtJZCIsImRlcGxveWVkTmV0d29yayIsIlZvdGVGYWN0b3J5Q29udHJhY3QiLCJuZXR3b3JrcyIsImluc3RhbmNlIiwiQ29udHJhY3QiLCJhYmkiLCJhZGRyZXNzIiwiZmFjdG9yeUNvbnRyYWN0IiwiYWxlcnQiLCJlcnJvciIsImNyZWF0ZVZvdGUiLCJtZXRob2RzIiwic2VuZCIsImZyb20iLCJnZXRFbGVjdGlvbkFkZHJlc3MiLCJnZXREZXBsb3llZFZvdGVzIiwiY2FsbCIsInJlc3BvbnNlIiwiYWRkcmVzc09mVm90ZSIsImxlbmd0aCIsImluaXRpYWxpemVFbGVjdGlvbiIsIlZvdGVDb250cmFjdCIsInNldFZvdGVDb250cmFjdCIsInNldFVwRWxlY3Rpb24iLCJ2b3RlQ29udHJhY3QiLCJlZGl0RWxlY3Rpb24iLCJEYXRlIiwiZ2V0VGltZSIsImRpc3BsYXlWb3RlIiwiY3VycmVudEVsZWN0aW9uIiwic3VtbWFyeSIsInNocmluayIsIm1hcCIsIm9wdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBRUVDLHNEQUFRLENBQUMsRUFBRCxDQUZWO0FBQUEsTUFFZkMsSUFGZTtBQUFBLE1BRVRDLE9BRlMsaUJBR3RCOzs7QUFDQSxNQUFNQyxhQUFhLEdBQUcsQ0FDbEI7QUFDSUMsU0FBSyxFQUFFLFVBRFg7QUFFSUMsU0FBSyxFQUFFO0FBRlgsR0FEa0IsRUFLbEI7QUFDSUQsU0FBSyxFQUFFLFdBRFg7QUFFSUMsU0FBSyxFQUFFO0FBRlgsR0FMa0IsQ0FBdEI7QUFXQSxNQUFJQyxZQUFKO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0dDLFFBREg7QUFBQTtBQUFBOztBQUFBO0FBQUEsa01BQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ3lCQyx3REFBTyxFQURoQzs7QUFBQTtBQUNJSCw0QkFESjtBQUVJSix1QkFBTyxDQUFDSSxZQUFELENBQVA7O0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEWTtBQUFBO0FBQUE7O0FBS1pFLFlBQVE7QUFDWCxHQU5RLEVBTVAsRUFOTyxDQUFULENBaEJzQixDQXdCdEI7O0FBeEJzQixtQkF5QklSLHNEQUFRLENBQUMsRUFBRCxDQXpCWjtBQUFBLE1BeUJmVSxLQXpCZTtBQUFBLE1BeUJSQyxRQXpCUTs7QUEwQnRCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUMzQkYsWUFBUSxDQUFDRSxLQUFLLENBQUNDLE1BQU4sQ0FBYVYsS0FBZCxDQUFSO0FBQ0gsR0FGRDs7QUExQnNCLG1CQTZCWUosc0RBQVEsQ0FB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvQ0osRUFnREk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhESixFQW1ESTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkRKLEVBb0RJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDJEQUFEO0FBQWEsWUFBUSxNQUFyQjtBQUFzQixhQUFTLE1BQS9CO0FBQWdDLGFBQVMsTUFBekM7QUFDYSxTQUFLLEVBQUMsYUFEbkI7QUFFYSxRQUFJLEVBQUUsQ0FGbkI7QUFHYSxXQUFPLEVBQUMsVUFIckI7QUFJYSxTQUFLLEVBQUVtQixXQUpwQjtBQUthLFlBQVEsRUFBRUUsaUJBTHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQXBESixFQThESTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBOURKLEVBK0RJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVJLE1BQUMsd0RBQUQ7QUFBVSxRQUFJLEVBQUMsUUFBZjtBQUF3QixZQUFRLEVBQUVDLFFBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkosQ0EvREosQ0FQSixDQURKO0FBZ0ZILENBNU5EOztHQUFNNUIsVzs7S0FBQUEsVztBQTZOU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3RWxlY3Rpb24uZmJkMTliYTk3NmRiZDExMjQ4NzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCBWb3RlRmFjdG9yeUNvbnRyYWN0IGZyb20gXCIuLi9jb250cmFjdHMvVm90ZUZhY3RvcnkuanNvblwiO1xyXG5pbXBvcnQgVm90ZUNvbnRyYWN0IGZyb20gXCIuLi9jb250cmFjdHMvVm90ZS5qc29uXCI7XHJcbmltcG9ydCAqIGFzIG0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi9nZXRXZWIzXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IE5ld0VsZWN0aW9uID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt3ZWIzLCBzZXRXZWIzXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIC8vIGNvbnN0IFt2b3RlQ29udHJhY3QsIHNldFZvdGVDb250cmFjdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBlbGVjdGlvblR5cGVzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFsdWU6ICdtYWpvcml0eScsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnc2ltcGxlIG1ham9yaXR5J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YWx1ZTogJ3R3b1RoaXJkcycsXHJcbiAgICAgICAgICAgIGxhYmVsOiAndHdvIHRoaXJkcydcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIHZhciB3ZWIzSW5zdGFuY2U7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGluaXRXZWIzKCkge1xyXG4gICAgICAgICAgICB3ZWIzSW5zdGFuY2UgPSBhd2FpdCBnZXRXZWIzKCk7XHJcbiAgICAgICAgICAgIHNldFdlYjMod2ViM0luc3RhbmNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5pdFdlYjMoKTtcclxuICAgIH0sW10pO1xyXG5cclxuICAgIC8vcGxlYXNlIGZvbGxvdyB0aGUgY291cnNlIGZvciBhIGJldHRlciBpbXBsZW1lbnRhdGlvbiBASmluZ1xyXG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBjaGFuZ2VUaXRsZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldFRpdGxlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgY2hhbmdlU3RhcnREYXRlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0U3RhcnREYXRlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBjaGFuZ2VFbmREYXRlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0RW5kRGF0ZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IFtlbGVjdGlvblR5cGUsIHNldEVsZWN0aW9uVHlwZV0gPSB1c2VTdGF0ZSgnbWFqb3JpdHknKTtcclxuICAgIGNvbnN0IGNoYW5nZUVsZWN0aW9uVHlwZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldEVsZWN0aW9uVHlwZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgY2hhbmdlRGVzY3JpcHRpb24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXREZXNjcmlwdGlvbihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciB3ZWIzXHJcbiAgICAgICAgdmFyIG1hbmFnZXJcclxuICAgICAgICB2YXIgZmFjdG9yeUNvbnRyYWN0XHJcbiAgICAgICAgdmFyIHZvdGVDb250cmFjdDtcclxuICAgICAgICB2YXIgYWRkcmVzc09mVm90ZVxyXG5cclxuICAgICAgICB2YXIgaW5pdFdlYjMgPSBhc3luYyAoKSA9PiB7IC8vaW5pdGlhbGl6ZXMgd2ViM1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW5pdGlhbGl6aW5nIHdlYjMnKVxyXG4gICAgICAgICAgICB3ZWIzID0gYXdhaXQgZ2V0V2ViMygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2V0dXBWb3RlRmFjdG9yeSA9IGFzeW5jICgpID0+IHsgLy9pbml0aWFsaXplcyB2b3RlRmFjdG9yeVxyXG4gICAgICAgICAgICBpZih3ZWIzID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY3JpbmdlJylcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldHRpbmcgdXAgZmFjdG9yeScpXHJcbiAgICAgICAgICAgICAgICBbbWFuYWdlcl0gPSAoYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViMy5ldGgubmV0LmdldElkKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXBsb3llZE5ldHdvcmsgPSBWb3RlRmFjdG9yeUNvbnRyYWN0Lm5ldHdvcmtzW25ldHdvcmtJZF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgICAgICAgICAgICBWb3RlRmFjdG9yeUNvbnRyYWN0LmFiaSxcclxuICAgICAgICAgICAgICAgICAgICBkZXBsb3llZE5ldHdvcmsgJiYgZGVwbG95ZWROZXR3b3JrLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgZmFjdG9yeUNvbnRyYWN0ID0gaW5zdGFuY2U7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2V0IHdlYjMsIGFjY291bnRzLCBhbmQgY29udHJhY3QgdG8gdGhlIHN0YXRlLCBhbmQgdGhlbiBwcm9jZWVkIHdpdGggYW5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cclxuICAgICAgICAgICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY3JlYXRlVm90ZSA9IGFzeW5jICgpID0+IHsvL3VzZXMgdm90ZUZhY3RvcnkgdG8gY3JlYXRlIFZvdGVcclxuICAgICAgICAgICAgaWYoZmFjdG9yeUNvbnRyYWN0ID09ICcnKXtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIHZhbHVlIGZyb20gdGhlIGNvbnRyYWN0IHRvIHByb3ZlIGl0IHdvcmtlZC5cclxuICAgICAgICAgICAgYXdhaXQgZmFjdG9yeUNvbnRyYWN0Lm1ldGhvZHMuY3JlYXRlVm90ZSgwKS5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGZyb206IG1hbmFnZXJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgZ2V0RWxlY3Rpb25BZGRyZXNzID0gYXN5bmMgKCkgPT4gey8vY2FsbHMgdm90ZUZhY3RvcnkgbWV0aG9kIHRvIGdldCBuZXcgVm90ZSBhZGRyZXNzXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmFjdG9yeUNvbnRyYWN0Lm1ldGhvZHMuZ2V0RGVwbG95ZWRWb3RlcygpLmNhbGwoKTtcclxuICAgICAgICAgICAgYWRkcmVzc09mVm90ZSA9IHJlc3BvbnNlW3Jlc3BvbnNlLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGluaXRpYWxpemVFbGVjdGlvbiA9IGFzeW5jICgpID0+IHsvL2luaXRpYWxpemVzIHZvdGUgY29udHJhY3RcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IGF3YWl0IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgICAgICAgICAgICBWb3RlQ29udHJhY3QuYWJpLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NPZlZvdGUsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgc2V0Vm90ZUNvbnRyYWN0KGluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIC8vIHZvdGVDb250cmFjdCA9IGluc3RhbmNlO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxyXG4gICAgICAgICAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzZXRVcEVsZWN0aW9uID0gYXN5bmMoKSA9PiB7Ly9jYWxsIHRvIHZvdGUgY29udHJhY3QgdG8gZWRpdCBlbGVjdGlvblxyXG4gICAgICAgICAgICBpZiAoIXZvdGVDb250cmFjdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2b3RlQ29udHJhY3QgZG5lXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF3YWl0IHZvdGVDb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgICAgICAgICAuZWRpdEVsZWN0aW9uKHRpdGxlLCBuZXcgRGF0ZShzdGFydERhdGUpLmdldFRpbWUoKSwgbmV3IERhdGUoZW5kRGF0ZSkuZ2V0VGltZSgpLCBkZXNjcmlwdGlvbiwgWzBdKVxyXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IG1hbmFnZXJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGRpc3BsYXlWb3RlID0gYXN5bmMgKCkgPT4geyAvLyB0ZXN0aW5nIHB1cnBvc2VzXHJcbiAgICAgICAgICAgIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCB2b3RlQ29udHJhY3QubWV0aG9kcy5jdXJyZW50RWxlY3Rpb24oKS5jYWxsKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1bW1hcnkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gYXdhaXQgaW5pdFdlYjMoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygncmV0YXJkJylcclxuICAgICAgICBhd2FpdCBzZXR1cFZvdGVGYWN0b3J5KCk7XHJcbiAgICAgICAgYXdhaXQgY3JlYXRlVm90ZSgpO1xyXG4gICAgICAgIGF3YWl0IGdldEVsZWN0aW9uQWRkcmVzcygpO1xyXG4gICAgICAgIGF3YWl0IGluaXRpYWxpemVFbGVjdGlvbigpO1xyXG4gICAgICAgIGF3YWl0IHNldFVwRWxlY3Rpb24oKTtcclxuICAgICAgICBhd2FpdCBkaXNwbGF5Vm90ZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8aDE+TmV3IEVsZWN0aW9uPC9oMT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG0uVGV4dEZpZWxkIHJlcXVpcmVkIGZ1bGxXaWR0aCBsYWJlbD1cIkVsZWN0aW9uIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L20uVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG0uVGV4dEZpZWxkIGxhYmVsPVwiU3RhcnQgZGF0ZVwiIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVN0YXJ0RGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvbS5UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bS5UZXh0RmllbGQgcmVxdWlyZWQgbGFiZWw9XCJFbmQgZGF0ZVwiIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VFbmREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bS5UZXh0RmllbGQgcmVxdWlyZWQgc2VsZWN0IGxhYmVsPVwiVHlwZSBvZiBlbGVjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbGVjdGlvblR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VFbGVjdGlvblR5cGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZWxlY3Rpb25UeXBlcy5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG0uTWVudUl0ZW0ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L20uTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbS5UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7Lyo8bS5UZXh0RmllbGQgbGFiZWw9XCJTZWxlY3QgZ3JvdXBzIChzb21lb25lIGhlbHAgd2l0aCB0aGUgc2VhcmNoIGFuZCBzZWxlY3QgbXVsdGlwbGUgcGx6KVwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG0uVGV4dEZpZWxkIHJlcXVpcmVkIG11bHRpbGluZSBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZURlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG0uQnV0dG9uPkNhbmNlbDwvbS5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG0uQnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvblN1Ym1pdD17b25TdWJtaXR9PlB1Ymxpc2ggRWxlY3Rpb248L20uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5ld0VsZWN0aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9