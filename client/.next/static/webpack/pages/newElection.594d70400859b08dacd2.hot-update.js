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
      setWeb3 = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      voteContract = _useState2[0],
      setVoteContract = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      contract = _useState3[0],
      setContract = _useState3[1];

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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      title = _useState4[0],
      setTitle = _useState4[1];

  var changeTitle = function changeTitle(event) {
    setTitle(event.target.value);
  };

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      startDate = _useState5[0],
      setStartDate = _useState5[1];

  var changeStartDate = function changeStartDate(event) {
    setStartDate(event.target.value);
  };

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      endDate = _useState6[0],
      setEndDate = _useState6[1];

  var changeEndDate = function changeEndDate(event) {
    setEndDate(event.target.value);
  };

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('majority'),
      electionType = _useState7[0],
      setElectionType = _useState7[1];

  var changeElectionType = function changeElectionType(event) {
    setElectionType(event.target.value);
  };

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      description = _useState8[0],
      setDescription = _useState8[1];

  var changeDescription = function changeDescription(event) {
    setDescription(event.target.value);
  }; // useEffect(() => {// get Factory contract
  //     async function setup() {
  //         if(web3 == '') {
  //             return;
  //         }
  //         try {
  //             setAccounts(await web3.eth.getAccounts());
  //             // Get the contract instance.
  //             const networkId = await web3.eth.net.getId();
  //             const deployedNetwork = VoteFactoryContract.networks[networkId];
  //             const instance = new web3.eth.Contract(
  //                 VoteFactoryContract.abi,
  //                 deployedNetwork && deployedNetwork.address,
  //             );
  //             setContract(instance);
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
  // },[web3]);


  var onSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(event) {
      var manager, factoryContract, vote, addressOfVote, setupVoteFactory, createVote, getElectionAddress, initializeElection, setUpElection, displayVote;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              event.preventDefault();
              vote = {
                value: ''
              };

              setupVoteFactory = /*#__PURE__*/function () {
                var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
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
                          _context2.next = 5;
                          return web3.eth.getAccounts();

                        case 5:
                          manager = _context2.sent;
                          _context2.next = 8;
                          return web3.eth.net.getId();

                        case 8:
                          networkId = _context2.sent;
                          deployedNetwork = _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_4__.networks[networkId];
                          instance = new web3.eth.Contract(_contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_4__.abi, deployedNetwork && deployedNetwork.address);
                          factoryContract = instance; // Set web3, accounts, and contract to the state, and then proceed with an

                          _context2.next = 18;
                          break;

                        case 14:
                          _context2.prev = 14;
                          _context2.t0 = _context2["catch"](2);
                          // Catch any errors for any of the above operations.
                          alert("Failed to load web3, accounts, or contract. Check console for details.");
                          console.error(_context2.t0);

                        case 18:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, null, [[2, 14]]);
                }));

                return function setupVoteFactory() {
                  return _ref2.apply(this, arguments);
                };
              }();

              createVote = /*#__PURE__*/function () {
                var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
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
                            from: manager[0]
                          });

                        case 4:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function createVote() {
                  return _ref3.apply(this, arguments);
                };
              }();

              getElectionAddress = /*#__PURE__*/function () {
                var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
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
                  return _ref4.apply(this, arguments);
                };
              }();

              initializeElection = /*#__PURE__*/function () {
                var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.prev = 0;
                          _context5.next = 3;
                          return new web3.eth.Contract(_contracts_Vote_json__WEBPACK_IMPORTED_MODULE_5__.abi, addressOfVote);

                        case 3:
                          vote.value = _context5.sent;
                          _context5.next = 10;
                          break;

                        case 6:
                          _context5.prev = 6;
                          _context5.t0 = _context5["catch"](0);
                          // Catch any errors for any of the above operations.
                          alert("Failed to load web3, accounts, or contract. Check console for details.");
                          console.error(_context5.t0);

                        case 10:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5, null, [[0, 6]]);
                }));

                return function initializeElection() {
                  return _ref5.apply(this, arguments);
                };
              }();

              setUpElection = /*#__PURE__*/function () {
                var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
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
                  return _ref6.apply(this, arguments);
                };
              }();

              displayVote = /*#__PURE__*/function () {
                var _ref7 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
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
                  return _ref7.apply(this, arguments);
                };
              }();

              _context8.next = 10;
              return setupVoteFactory();

            case 10:
              _context8.next = 12;
              return createVote();

            case 12:
              _context8.next = 14;
              return getElectionAddress();

            case 14:
              _context8.next = 16;
              return initializeElection();

            case 16:
              _context8.next = 18;
              return setUpElection();

            case 18:
              _context8.next = 20;
              return displayVote();

            case 20:
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
      lineNumber: 167,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  }), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  }, "New Election"), __jsx("form", {
    onSubmit: onSubmit,
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
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
      lineNumber: 175,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
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
      lineNumber: 185,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
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
      lineNumber: 198,
      columnNumber: 21
    }
  })), __jsx("br", {
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
      lineNumber: 209,
      columnNumber: 21
    }
  }, electionTypes.map(function (option) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 29
      }
    }, option.label);
  }))), __jsx("br", {
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
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
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
      lineNumber: 226,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 21
    }
  }, "Cancel"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    type: "submit",
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 21
    }
  }, "Publish Election"))));
};

_s(NewElection, "l2qbIQPP/Z0BNEVOfTxIKLsmeUE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL25ld0VsZWN0aW9uLmpzIl0sIm5hbWVzIjpbIk5ld0VsZWN0aW9uIiwidXNlU3RhdGUiLCJ3ZWIzIiwic2V0V2ViMyIsInZvdGVDb250cmFjdCIsInNldFZvdGVDb250cmFjdCIsImNvbnRyYWN0Iiwic2V0Q29udHJhY3QiLCJlbGVjdGlvblR5cGVzIiwidmFsdWUiLCJsYWJlbCIsIndlYjNJbnN0YW5jZSIsInVzZUVmZmVjdCIsImluaXRXZWIzIiwiZ2V0V2ViMyIsInRpdGxlIiwic2V0VGl0bGUiLCJjaGFuZ2VUaXRsZSIsImV2ZW50IiwidGFyZ2V0Iiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiY2hhbmdlU3RhcnREYXRlIiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJjaGFuZ2VFbmREYXRlIiwiZWxlY3Rpb25UeXBlIiwic2V0RWxlY3Rpb25UeXBlIiwiY2hhbmdlRWxlY3Rpb25UeXBlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImNoYW5nZURlc2NyaXB0aW9uIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInZvdGUiLCJzZXR1cFZvdGVGYWN0b3J5IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJtYW5hZ2VyIiwibmV0IiwiZ2V0SWQiLCJuZXR3b3JrSWQiLCJkZXBsb3llZE5ldHdvcmsiLCJWb3RlRmFjdG9yeUNvbnRyYWN0IiwibmV0d29ya3MiLCJpbnN0YW5jZSIsIkNvbnRyYWN0IiwiYWJpIiwiYWRkcmVzcyIsImZhY3RvcnlDb250cmFjdCIsImFsZXJ0IiwiY29uc29sZSIsImVycm9yIiwiY3JlYXRlVm90ZSIsIm1ldGhvZHMiLCJzZW5kIiwiZnJvbSIsImdldEVsZWN0aW9uQWRkcmVzcyIsImdldERlcGxveWVkVm90ZXMiLCJjYWxsIiwicmVzcG9uc2UiLCJhZGRyZXNzT2ZWb3RlIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUVsZWN0aW9uIiwiVm90ZUNvbnRyYWN0Iiwic2V0VXBFbGVjdGlvbiIsImxvZyIsImVkaXRFbGVjdGlvbiIsIkRhdGUiLCJnZXRUaW1lIiwiZGlzcGxheVZvdGUiLCJjdXJyZW50RWxlY3Rpb24iLCJzdW1tYXJ5Iiwic2hyaW5rIiwibWFwIiwib3B0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFFRUMsc0RBQVEsQ0FBQyxFQUFELENBRlY7QUFBQSxNQUVmQyxJQUZlO0FBQUEsTUFFVEMsT0FGUzs7QUFBQSxtQkFHa0JGLHNEQUFRLENBQUMsRUFBRCxDQUgxQjtBQUFBLE1BR2ZHLFlBSGU7QUFBQSxNQUdEQyxlQUhDOztBQUFBLG1CQUlVSixzREFBUSxDQUFDLEVBQUQsQ0FKbEI7QUFBQSxNQUlmSyxRQUplO0FBQUEsTUFJTEMsV0FKSzs7QUFLdEIsTUFBTUMsYUFBYSxHQUFHLENBQ2xCO0FBQ0lDLFNBQUssRUFBRSxVQURYO0FBRUlDLFNBQUssRUFBRTtBQUZYLEdBRGtCLEVBS2xCO0FBQ0lELFNBQUssRUFBRSxXQURYO0FBRUlDLFNBQUssRUFBRTtBQUZYLEdBTGtCLENBQXRCO0FBV0EsTUFBSUMsWUFBSjtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFBQSxhQUNHQyxRQURIO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGtNQUNaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUN5QkMsd0RBQU8sRUFEaEM7O0FBQUE7QUFDSUgsNEJBREo7QUFFSVIsdUJBQU8sQ0FBQ1EsWUFBRCxDQUFQOztBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRFk7QUFBQTtBQUFBOztBQUtaRSxZQUFRO0FBQ1gsR0FOUSxFQU1QLEVBTk8sQ0FBVCxDQWpCc0IsQ0F5QnRCOztBQXpCc0IsbUJBMEJJWixzREFBUSxDQUFDLEVBQUQsQ0ExQlo7QUFBQSxNQTBCZmMs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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhESixFQW1ESTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkRKLEVBb0RJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDJEQUFEO0FBQWEsWUFBUSxNQUFyQjtBQUFzQixhQUFTLE1BQS9CO0FBQWdDLGFBQVMsTUFBekM7QUFDYSxTQUFLLEVBQUMsYUFEbkI7QUFFYSxRQUFJLEVBQUUsQ0FGbkI7QUFHYSxXQUFPLEVBQUMsVUFIckI7QUFJYSxTQUFLLEVBQUVtQixXQUpwQjtBQUthLFlBQVEsRUFBRUUsaUJBTHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQXBESixFQThESTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBOURKLEVBK0RJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVJLE1BQUMsd0RBQUQ7QUFBVSxRQUFJLEVBQUMsUUFBZjtBQUF3QixZQUFRLEVBQUVDLFFBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkosQ0EvREosQ0FQSixDQURKO0FBZ0ZILENBM09EOztHQUFNaEMsVzs7S0FBQUEsVztBQTRPU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3RWxlY3Rpb24uNTk0ZDcwNDAwODU5YjA4ZGFjZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCBWb3RlRmFjdG9yeUNvbnRyYWN0IGZyb20gXCIuLi9jb250cmFjdHMvVm90ZUZhY3RvcnkuanNvblwiO1xyXG5pbXBvcnQgVm90ZUNvbnRyYWN0IGZyb20gXCIuLi9jb250cmFjdHMvVm90ZS5qc29uXCI7XHJcbmltcG9ydCAqIGFzIG0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi9nZXRXZWIzXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IE5ld0VsZWN0aW9uID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt3ZWIzLCBzZXRXZWIzXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt2b3RlQ29udHJhY3QsIHNldFZvdGVDb250cmFjdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbY29udHJhY3QsIHNldENvbnRyYWN0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IGVsZWN0aW9uVHlwZXMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YWx1ZTogJ21ham9yaXR5JyxcclxuICAgICAgICAgICAgbGFiZWw6ICdzaW1wbGUgbWFqb3JpdHknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbHVlOiAndHdvVGhpcmRzJyxcclxuICAgICAgICAgICAgbGFiZWw6ICd0d28gdGhpcmRzJ1xyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgdmFyIHdlYjNJbnN0YW5jZTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gaW5pdFdlYjMoKSB7XHJcbiAgICAgICAgICAgIHdlYjNJbnN0YW5jZSA9IGF3YWl0IGdldFdlYjMoKTtcclxuICAgICAgICAgICAgc2V0V2ViMyh3ZWIzSW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbml0V2ViMygpO1xyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgLy9wbGVhc2UgZm9sbG93IHRoZSBjb3Vyc2UgZm9yIGEgYmV0dGVyIGltcGxlbWVudGF0aW9uIEBKaW5nXHJcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IGNoYW5nZVRpdGxlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0VGl0bGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBjaGFuZ2VTdGFydERhdGUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRTdGFydERhdGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBbZW5kRGF0ZSwgc2V0RW5kRGF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGNoYW5nZUVuZERhdGUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRFbmREYXRlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgW2VsZWN0aW9uVHlwZSwgc2V0RWxlY3Rpb25UeXBlXSA9IHVzZVN0YXRlKCdtYWpvcml0eScpO1xyXG4gICAgY29uc3QgY2hhbmdlRWxlY3Rpb25UeXBlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0RWxlY3Rpb25UeXBlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBjaGFuZ2VEZXNjcmlwdGlvbiA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldERlc2NyaXB0aW9uKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7Ly8gZ2V0IEZhY3RvcnkgY29udHJhY3RcclxuICAgIC8vICAgICBhc3luYyBmdW5jdGlvbiBzZXR1cCgpIHtcclxuICAgIC8vICAgICAgICAgaWYod2ViMyA9PSAnJykge1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIHRyeSB7XHJcbiAgICAvLyAgICAgICAgICAgICBzZXRBY2NvdW50cyhhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpKTtcclxuICAgIC8vICAgICAgICAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXHJcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBuZXR3b3JrSWQgPSBhd2FpdCB3ZWIzLmV0aC5uZXQuZ2V0SWQoKTtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IFZvdGVGYWN0b3J5Q29udHJhY3QubmV0d29ya3NbbmV0d29ya0lkXTtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIFZvdGVGYWN0b3J5Q29udHJhY3QuYWJpLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGRlcGxveWVkTmV0d29yayAmJiBkZXBsb3llZE5ldHdvcmsuYWRkcmVzcyxcclxuICAgIC8vICAgICAgICAgICAgICk7XHJcbiAgICAvLyAgICAgICAgICAgICBzZXRDb250cmFjdChpbnN0YW5jZSk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgLy8gU2V0IHdlYjMsIGFjY291bnRzLCBhbmQgY29udHJhY3QgdG8gdGhlIHN0YXRlLCBhbmQgdGhlbiBwcm9jZWVkIHdpdGggYW5cclxuICAgIC8vICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vICAgICAgICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cclxuICAgIC8vICAgICAgICAgICAgIGFsZXJ0KFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcclxuICAgIC8vICAgICAgICAgICAgICk7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBzZXR1cCgpO1xyXG4gICAgLy8gfSxbd2ViM10pO1xyXG5cclxuICAgIHZhciBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIG1hbmFnZXJcclxuICAgICAgICB2YXIgZmFjdG9yeUNvbnRyYWN0XHJcbiAgICAgICAgdmFyIHZvdGUgPSB7dmFsdWUgOiAnJ307XHJcbiAgICAgICAgdmFyIGFkZHJlc3NPZlZvdGVcclxuICAgICAgICB2YXIgc2V0dXBWb3RlRmFjdG9yeSA9IGFzeW5jICgpID0+IHsgLy9pbml0aWFsaXplcyB2b3RlRmFjdG9yeVxyXG4gICAgICAgICAgICBpZih3ZWIzID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIG1hbmFnZXIgPSAoYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViMy5ldGgubmV0LmdldElkKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXBsb3llZE5ldHdvcmsgPSBWb3RlRmFjdG9yeUNvbnRyYWN0Lm5ldHdvcmtzW25ldHdvcmtJZF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgICAgICAgICAgICBWb3RlRmFjdG9yeUNvbnRyYWN0LmFiaSxcclxuICAgICAgICAgICAgICAgICAgICBkZXBsb3llZE5ldHdvcmsgJiYgZGVwbG95ZWROZXR3b3JrLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgZmFjdG9yeUNvbnRyYWN0ID0gaW5zdGFuY2U7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2V0IHdlYjMsIGFjY291bnRzLCBhbmQgY29udHJhY3QgdG8gdGhlIHN0YXRlLCBhbmQgdGhlbiBwcm9jZWVkIHdpdGggYW5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cclxuICAgICAgICAgICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY3JlYXRlVm90ZSA9IGFzeW5jICgpID0+IHsvL3VzZXMgdm90ZUZhY3RvcnkgdG8gY3JlYXRlIFZvdGVcclxuICAgICAgICAgICAgaWYoZmFjdG9yeUNvbnRyYWN0ID09ICcnKXtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIHZhbHVlIGZyb20gdGhlIGNvbnRyYWN0IHRvIHByb3ZlIGl0IHdvcmtlZC5cclxuICAgICAgICAgICAgYXdhaXQgZmFjdG9yeUNvbnRyYWN0Lm1ldGhvZHMuY3JlYXRlVm90ZSgwKS5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGZyb206IG1hbmFnZXJbMF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgZ2V0RWxlY3Rpb25BZGRyZXNzID0gYXN5bmMgKCkgPT4gey8vY2FsbHMgdm90ZUZhY3RvcnkgbWV0aG9kIHRvIGdldCBuZXcgVm90ZSBhZGRyZXNzXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmFjdG9yeUNvbnRyYWN0Lm1ldGhvZHMuZ2V0RGVwbG95ZWRWb3RlcygpLmNhbGwoKTtcclxuICAgICAgICAgICAgYWRkcmVzc09mVm90ZSA9IHJlc3BvbnNlW3Jlc3BvbnNlLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGluaXRpYWxpemVFbGVjdGlvbiA9IGFzeW5jICgpID0+IHsvL2luaXRpYWxpemVzIHZvdGUgY29udHJhY3RcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXHJcbiAgICAgICAgICAgICAgICB2b3RlLnZhbHVlID0gYXdhaXQgbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIFZvdGVDb250cmFjdC5hYmksXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc09mVm90ZSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAvLyBzZXRWb3RlQ29udHJhY3QoaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgLy8gdm90ZSA9IGluc3RhbmNlO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxyXG4gICAgICAgICAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzZXRVcEVsZWN0aW9uID0gYXN5bmMoKSA9PiB7Ly9jYWxsIHRvIHZvdGUgY29udHJhY3QgdG8gZWRpdCBlbGVjdGlvblxyXG4gICAgICAgICAgICBpZiAodm90ZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2b3RlQ29udHJhY3QgZG5lXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF3YWl0IHZvdGUubWV0aG9kc1xyXG4gICAgICAgICAgICAgICAgLmVkaXRFbGVjdGlvbih0aXRsZSwgbmV3IERhdGUoc3RhcnREYXRlKS5nZXRUaW1lKCksIG5ldyBEYXRlKGVuZERhdGUpLmdldFRpbWUoKSwgZGVzY3JpcHRpb24sIFswXSlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB2YXIgZGlzcGxheVZvdGUgPSBhc3luYyAoKSA9PiB7IC8vIHRlc3RpbmcgcHVycG9zZXNcclxuICAgICAgICAgICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IHZvdGUubWV0aG9kcy5jdXJyZW50RWxlY3Rpb24oKS5jYWxsKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1bW1hcnkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYXdhaXQgc2V0dXBWb3RlRmFjdG9yeSgpO1xyXG4gICAgICAgIGF3YWl0IGNyZWF0ZVZvdGUoKTtcclxuICAgICAgICBhd2FpdCBnZXRFbGVjdGlvbkFkZHJlc3MoKTtcclxuICAgICAgICBhd2FpdCBpbml0aWFsaXplRWxlY3Rpb24oKTtcclxuICAgICAgICBhd2FpdCBzZXRVcEVsZWN0aW9uKCk7XHJcbiAgICAgICAgYXdhaXQgZGlzcGxheVZvdGUoKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGgxPk5ldyBFbGVjdGlvbjwvaDE+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxtLlRleHRGaWVsZCByZXF1aXJlZCBmdWxsV2lkdGggbGFiZWw9XCJFbGVjdGlvbiB0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9tLlRleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxtLlRleHRGaWVsZCBsYWJlbD1cIlN0YXJ0IGRhdGVcIiB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VTdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L20uVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG0uVGV4dEZpZWxkIHJlcXVpcmVkIGxhYmVsPVwiRW5kIGRhdGVcIiB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbmREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlRW5kRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG0uVGV4dEZpZWxkIHJlcXVpcmVkIHNlbGVjdCBsYWJlbD1cIlR5cGUgb2YgZWxlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZWxlY3Rpb25UeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlRWxlY3Rpb25UeXBlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2VsZWN0aW9uVHlwZXMubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtLk1lbnVJdGVtIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tLk1lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L20uVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qPG0uVGV4dEZpZWxkIGxhYmVsPVwiU2VsZWN0IGdyb3VwcyAoc29tZW9uZSBoZWxwIHdpdGggdGhlIHNlYXJjaCBhbmQgc2VsZWN0IG11bHRpcGxlIHBseilcIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxtLlRleHRGaWVsZCByZXF1aXJlZCBtdWx0aWxpbmUgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VEZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxtLkJ1dHRvbj5DYW5jZWw8L20uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtLkJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25TdWJtaXQ9e29uU3VibWl0fT5QdWJsaXNoIEVsZWN0aW9uPC9tLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBOZXdFbGVjdGlvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==