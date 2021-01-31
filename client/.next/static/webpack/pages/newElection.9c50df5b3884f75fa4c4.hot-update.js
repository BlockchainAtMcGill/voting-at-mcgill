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
                          setVoteContract(instance);
                          vote = instance;
                          _context5.next = 12;
                          break;

                        case 8:
                          _context5.prev = 8;
                          _context5.t0 = _context5["catch"](0);
                          // Catch any errors for any of the above operations.
                          alert("Failed to load web3, accounts, or contract. Check console for details.");
                          console.error(_context5.t0);

                        case 12:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5, null, [[0, 8]]);
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

              _context8.next = 9;
              return setupVoteFactory();

            case 9:
              _context8.next = 11;
              return createVote();

            case 11:
              _context8.next = 13;
              return getElectionAddress();

            case 13:
              _context8.next = 15;
              return initializeElection();

            case 15:
              _context8.next = 17;
              return setUpElection();

            case 17:
              _context8.next = 19;
              return displayVote();

            case 19:
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

  var display = /*#__PURE__*/function () {
    var _ref8 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
      var summary;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_5__.methods.currentElection().call();

            case 2:
              summary = _context9.sent;
              console.log(summary);

            case 4:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function display() {
      return _ref8.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__["Header"], {
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
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }
  }), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  }, "New Election"), __jsx(Button, {
    onClick: display,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }), __jsx("form", {
    onSubmit: onSubmit,
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
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
      lineNumber: 177,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
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
      lineNumber: 187,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
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
      lineNumber: 200,
      columnNumber: 21
    }
  })), __jsx("br", {
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
    select: true,
    label: "Type of election",
    variant: "outlined",
    value: electionType,
    onChange: changeElectionType,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 21
    }
  }, electionTypes.map(function (option) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 29
      }
    }, option.label);
  }))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 17
    }
  }), __jsx("br", {
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
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 21
    }
  }, "Cancel"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    type: "submit",
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL25ld0VsZWN0aW9uLmpzIl0sIm5hbWVzIjpbIk5ld0VsZWN0aW9uIiwidXNlU3RhdGUiLCJ3ZWIzIiwic2V0V2ViMyIsInZvdGVDb250cmFjdCIsInNldFZvdGVDb250cmFjdCIsImNvbnRyYWN0Iiwic2V0Q29udHJhY3QiLCJlbGVjdGlvblR5cGVzIiwidmFsdWUiLCJsYWJlbCIsIndlYjNJbnN0YW5jZSIsInVzZUVmZmVjdCIsImluaXRXZWIzIiwiZ2V0V2ViMyIsInRpdGxlIiwic2V0VGl0bGUiLCJjaGFuZ2VUaXRsZSIsImV2ZW50IiwidGFyZ2V0Iiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiY2hhbmdlU3RhcnREYXRlIiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJjaGFuZ2VFbmREYXRlIiwiZWxlY3Rpb25UeXBlIiwic2V0RWxlY3Rpb25UeXBlIiwiY2hhbmdlRWxlY3Rpb25UeXBlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImNoYW5nZURlc2NyaXB0aW9uIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInNldHVwVm90ZUZhY3RvcnkiLCJldGgiLCJnZXRBY2NvdW50cyIsIm1hbmFnZXIiLCJuZXQiLCJnZXRJZCIsIm5ldHdvcmtJZCIsImRlcGxveWVkTmV0d29yayIsIlZvdGVGYWN0b3J5Q29udHJhY3QiLCJuZXR3b3JrcyIsImluc3RhbmNlIiwiQ29udHJhY3QiLCJhYmkiLCJhZGRyZXNzIiwiZmFjdG9yeUNvbnRyYWN0IiwiYWxlcnQiLCJjb25zb2xlIiwiZXJyb3IiLCJjcmVhdGVWb3RlIiwibWV0aG9kcyIsInNlbmQiLCJmcm9tIiwiZ2V0RWxlY3Rpb25BZGRyZXNzIiwiZ2V0RGVwbG95ZWRWb3RlcyIsImNhbGwiLCJyZXNwb25zZSIsImFkZHJlc3NPZlZvdGUiLCJsZW5ndGgiLCJpbml0aWFsaXplRWxlY3Rpb24iLCJWb3RlQ29udHJhY3QiLCJ2b3RlIiwic2V0VXBFbGVjdGlvbiIsImxvZyIsImVkaXRFbGVjdGlvbiIsIkRhdGUiLCJnZXRUaW1lIiwiZGlzcGxheVZvdGUiLCJjdXJyZW50RWxlY3Rpb24iLCJzdW1tYXJ5IiwiZGlzcGxheSIsInNocmluayIsIm1hcCIsIm9wdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBRUVDLHNEQUFRLENBQUMsRUFBRCxDQUZWO0FBQUEsTUFFZkMsSUFGZTtBQUFBLE1BRVRDLE9BRlM7O0FBQUEsbUJBR2tCRixzREFBUSxDQUFDLEVBQUQsQ0FIMUI7QUFBQSxNQUdmRyxZQUhlO0FBQUEsTUFHREMsZUFIQzs7QUFBQSxtQkFJVUosc0RBQVEsQ0FBQyxFQUFELENBSmxCO0FBQUEsTUFJZkssUUFKZTtBQUFBLE1BSUxDLFdBSks7O0FBS3RCLE1BQU1DLGFBQWEsR0FBRyxDQUNsQjtBQUNJQyxTQUFLLEVBQUUsVUFEWDtBQUVJQyxTQUFLLEVBQUU7QUFGWCxHQURrQixFQUtsQjtBQUNJRCxTQUFLLEVBQUUsV0FEWDtBQUVJQyxTQUFLLEVBQUU7QUFGWCxHQUxrQixDQUF0QjtBQVdBLE1BQUlDLFlBQUo7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDR0MsUUFESDtBQUFBO0FBQUE7O0FBQUE7QUFBQSxrTUFDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDeUJDLHdEQUFPLEVBRGhDOztBQUFBO0FBQ0lILDRCQURKO0FBRUlSLHVCQUFPLENBQUNRLFlBQUQsQ0FBUDs7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURZO0FBQUE7QUFBQTs7QUFLWkUsWUFBUTtBQUNYLEdBTlEsRUFNUCxFQU5PLENBQVQsQ0FqQnNCLENBeUJ0Qjs7QUF6QnNCLG1CQTBCSVosc0RBQVEsQ0FBQyxFQUFELENBMUJaO0FB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSixDQS9ESixDQVBKLENBREo7QUFnRkgsQ0E3T0Q7O0dBQU1oQyxXOztLQUFBQSxXO0FBOE9TQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXdFbGVjdGlvbi45YzUwZGY1YjM4ODRmNzVmYTRjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuaW1wb3J0IFZvdGVGYWN0b3J5Q29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlRmFjdG9yeS5qc29uXCI7XHJcbmltcG9ydCBWb3RlQ29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlLmpzb25cIjtcclxuaW1wb3J0ICogYXMgbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IGdldFdlYjMgZnJvbSBcIi4uL2dldFdlYjNcIjtcclxuXHJcblxyXG5cclxuY29uc3QgTmV3RWxlY3Rpb24gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3dlYjMsIHNldFdlYjNdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZvdGVDb250cmFjdCwgc2V0Vm90ZUNvbnRyYWN0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtjb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgZWxlY3Rpb25UeXBlcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbHVlOiAnbWFqb3JpdHknLFxyXG4gICAgICAgICAgICBsYWJlbDogJ3NpbXBsZSBtYWpvcml0eSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFsdWU6ICd0d29UaGlyZHMnLFxyXG4gICAgICAgICAgICBsYWJlbDogJ3R3byB0aGlyZHMnXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICB2YXIgd2ViM0luc3RhbmNlO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBpbml0V2ViMygpIHtcclxuICAgICAgICAgICAgd2ViM0luc3RhbmNlID0gYXdhaXQgZ2V0V2ViMygpO1xyXG4gICAgICAgICAgICBzZXRXZWIzKHdlYjNJbnN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluaXRXZWIzKCk7XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICAvL3BsZWFzZSBmb2xsb3cgdGhlIGNvdXJzZSBmb3IgYSBiZXR0ZXIgaW1wbGVtZW50YXRpb24gQEppbmdcclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgY2hhbmdlVGl0bGUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRUaXRsZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IFtzdGFydERhdGUsIHNldFN0YXJ0RGF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGNoYW5nZVN0YXJ0RGF0ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldFN0YXJ0RGF0ZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IFtlbmREYXRlLCBzZXRFbmREYXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgY2hhbmdlRW5kRGF0ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldEVuZERhdGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBbZWxlY3Rpb25UeXBlLCBzZXRFbGVjdGlvblR5cGVdID0gdXNlU3RhdGUoJ21ham9yaXR5Jyk7XHJcbiAgICBjb25zdCBjaGFuZ2VFbGVjdGlvblR5cGUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRFbGVjdGlvblR5cGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IGNoYW5nZURlc2NyaXB0aW9uID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0RGVzY3JpcHRpb24oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHsvLyBnZXQgRmFjdG9yeSBjb250cmFjdFxyXG4gICAgLy8gICAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgLy8gICAgICAgICBpZih3ZWIzID09ICcnKSB7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgdHJ5IHtcclxuICAgIC8vICAgICAgICAgICAgIHNldEFjY291bnRzKGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCkpO1xyXG4gICAgLy8gICAgICAgICAgICAgLy8gR2V0IHRoZSBjb250cmFjdCBpbnN0YW5jZS5cclxuICAgIC8vICAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpO1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc3QgZGVwbG95ZWROZXR3b3JrID0gVm90ZUZhY3RvcnlDb250cmFjdC5uZXR3b3Jrc1tuZXR3b3JrSWRdO1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgVm90ZUZhY3RvcnlDb250cmFjdC5hYmksXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZGVwbG95ZWROZXR3b3JrICYmIGRlcGxveWVkTmV0d29yay5hZGRyZXNzLFxyXG4gICAgLy8gICAgICAgICAgICAgKTtcclxuICAgIC8vICAgICAgICAgICAgIHNldENvbnRyYWN0KGluc3RhbmNlKTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAvLyBTZXQgd2ViMywgYWNjb3VudHMsIGFuZCBjb250cmFjdCB0byB0aGUgc3RhdGUsIGFuZCB0aGVuIHByb2NlZWQgd2l0aCBhblxyXG4gICAgLy8gICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gICAgICAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxyXG4gICAgLy8gICAgICAgICAgICAgYWxlcnQoXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxyXG4gICAgLy8gICAgICAgICAgICAgKTtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHNldHVwKCk7XHJcbiAgICAvLyB9LFt3ZWIzXSk7XHJcblxyXG4gICAgdmFyIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgbWFuYWdlclxyXG4gICAgICAgIHZhciBmYWN0b3J5Q29udHJhY3RcclxuICAgICAgICB2YXIgdm90ZTtcclxuICAgICAgICB2YXIgYWRkcmVzc09mVm90ZVxyXG4gICAgICAgIHZhciBzZXR1cFZvdGVGYWN0b3J5ID0gYXN5bmMgKCkgPT4geyAvL2luaXRpYWxpemVzIHZvdGVGYWN0b3J5XHJcbiAgICAgICAgICAgIGlmKHdlYjMgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbWFuYWdlciA9IChhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpKTtcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXR3b3JrSWQgPSBhd2FpdCB3ZWIzLmV0aC5uZXQuZ2V0SWQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IFZvdGVGYWN0b3J5Q29udHJhY3QubmV0d29ya3NbbmV0d29ya0lkXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIFZvdGVGYWN0b3J5Q29udHJhY3QuYWJpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlcGxveWVkTmV0d29yayAmJiBkZXBsb3llZE5ldHdvcmsuYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBmYWN0b3J5Q29udHJhY3QgPSBpbnN0YW5jZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgd2ViMywgYWNjb3VudHMsIGFuZCBjb250cmFjdCB0byB0aGUgc3RhdGUsIGFuZCB0aGVuIHByb2NlZWQgd2l0aCBhblxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxyXG4gICAgICAgICAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjcmVhdGVWb3RlID0gYXN5bmMgKCkgPT4gey8vdXNlcyB2b3RlRmFjdG9yeSB0byBjcmVhdGUgVm90ZVxyXG4gICAgICAgICAgICBpZihmYWN0b3J5Q29udHJhY3QgPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgdmFsdWUgZnJvbSB0aGUgY29udHJhY3QgdG8gcHJvdmUgaXQgd29ya2VkLlxyXG4gICAgICAgICAgICBhd2FpdCBmYWN0b3J5Q29udHJhY3QubWV0aG9kcy5jcmVhdGVWb3RlKDApLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgZnJvbTogbWFuYWdlclswXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBnZXRFbGVjdGlvbkFkZHJlc3MgPSBhc3luYyAoKSA9PiB7Ly9jYWxscyB2b3RlRmFjdG9yeSBtZXRob2QgdG8gZ2V0IG5ldyBWb3RlIGFkZHJlc3NcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmYWN0b3J5Q29udHJhY3QubWV0aG9kcy5nZXREZXBsb3llZFZvdGVzKCkuY2FsbCgpO1xyXG4gICAgICAgICAgICBhZGRyZXNzT2ZWb3RlID0gcmVzcG9uc2VbcmVzcG9uc2UubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgaW5pdGlhbGl6ZUVsZWN0aW9uID0gYXN5bmMgKCkgPT4gey8vaW5pdGlhbGl6ZXMgdm90ZSBjb250cmFjdFxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjb250cmFjdCBpbnN0YW5jZS5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gYXdhaXQgbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIFZvdGVDb250cmFjdC5hYmksXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc09mVm90ZSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBzZXRWb3RlQ29udHJhY3QoaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgdm90ZSA9IGluc3RhbmNlO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxyXG4gICAgICAgICAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzZXRVcEVsZWN0aW9uID0gYXN5bmMoKSA9PiB7Ly9jYWxsIHRvIHZvdGUgY29udHJhY3QgdG8gZWRpdCBlbGVjdGlvblxyXG4gICAgICAgICAgICBpZiAodm90ZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2b3RlQ29udHJhY3QgZG5lXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF3YWl0IHZvdGUubWV0aG9kcy5lZGl0RWxlY3Rpb24odGl0bGUsIG5ldyBEYXRlKHN0YXJ0RGF0ZSkuZ2V0VGltZSgpLCBuZXcgRGF0ZShlbmREYXRlKS5nZXRUaW1lKCksIGRlc2NyaXB0aW9uLCBbMF0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGRpc3BsYXlWb3RlID0gYXN5bmMgKCkgPT4geyAvLyB0ZXN0aW5nIHB1cnBvc2VzXHJcbiAgICAgICAgICAgIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCB2b3RlLm1ldGhvZHMuY3VycmVudEVsZWN0aW9uKCkuY2FsbCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdW1tYXJ5KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGF3YWl0IHNldHVwVm90ZUZhY3RvcnkoKTtcclxuICAgICAgICBhd2FpdCBjcmVhdGVWb3RlKCk7XHJcbiAgICAgICAgYXdhaXQgZ2V0RWxlY3Rpb25BZGRyZXNzKCk7XHJcbiAgICAgICAgYXdhaXQgaW5pdGlhbGl6ZUVsZWN0aW9uKCk7XHJcbiAgICAgICAgYXdhaXQgc2V0VXBFbGVjdGlvbigpO1xyXG4gICAgICAgIGF3YWl0IGRpc3BsYXlWb3RlKCk7XHJcbiAgICB9O1xyXG4gICAgdmFyIGRpc3BsYXkgPSBhc3luYyAoKSA9PiB7IC8vIHRlc3RpbmcgcHVycG9zZXNcclxuICAgICAgICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgVm90ZUNvbnRyYWN0Lm1ldGhvZHMuY3VycmVudEVsZWN0aW9uKCkuY2FsbCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHN1bW1hcnkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxoMT5OZXcgRWxlY3Rpb248L2gxPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2Rpc3BsYXl9PjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxtLlRleHRGaWVsZCByZXF1aXJlZCBmdWxsV2lkdGggbGFiZWw9XCJFbGVjdGlvbiB0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9tLlRleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxtLlRleHRGaWVsZCBsYWJlbD1cIlN0YXJ0IGRhdGVcIiB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VTdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L20uVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG0uVGV4dEZpZWxkIHJlcXVpcmVkIGxhYmVsPVwiRW5kIGRhdGVcIiB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbmREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlRW5kRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG0uVGV4dEZpZWxkIHJlcXVpcmVkIHNlbGVjdCBsYWJlbD1cIlR5cGUgb2YgZWxlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZWxlY3Rpb25UeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlRWxlY3Rpb25UeXBlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2VsZWN0aW9uVHlwZXMubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtLk1lbnVJdGVtIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tLk1lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L20uVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qPG0uVGV4dEZpZWxkIGxhYmVsPVwiU2VsZWN0IGdyb3VwcyAoc29tZW9uZSBoZWxwIHdpdGggdGhlIHNlYXJjaCBhbmQgc2VsZWN0IG11bHRpcGxlIHBseilcIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxtLlRleHRGaWVsZCByZXF1aXJlZCBtdWx0aWxpbmUgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VEZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxtLkJ1dHRvbj5DYW5jZWw8L20uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtLkJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25TdWJtaXQ9e29uU3VibWl0fT5QdWJsaXNoIEVsZWN0aW9uPC9tLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBOZXdFbGVjdGlvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==