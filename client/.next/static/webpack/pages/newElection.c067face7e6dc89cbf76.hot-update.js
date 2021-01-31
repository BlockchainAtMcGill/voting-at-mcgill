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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      web3 = _useState[0],
      setWeb3 = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      voteContract = _useState2[0],
      setVoteContract = _useState2[1];

  var electionTypes = [{
    value: 'majority',
    label: 'simple majority'
  }, {
    value: 'twoThirds',
    label: 'two thirds'
  }];
  var web3Instance;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function initWeb3() {
      return _initWeb.apply(this, arguments);
    }

    function _initWeb() {
      _initWeb = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_getWeb3__WEBPACK_IMPORTED_MODULE_8__["default"])();

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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      title = _useState3[0],
      setTitle = _useState3[1];

  var changeTitle = function changeTitle(event) {
    setTitle(event.target.value);
  };

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      startDate = _useState4[0],
      setStartDate = _useState4[1];

  var changeStartDate = function changeStartDate(event) {
    setStartDate(event.target.value);
  };

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      endDate = _useState5[0],
      setEndDate = _useState5[1];

  var changeEndDate = function changeEndDate(event) {
    setEndDate(event.target.value);
  };

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('majority'),
      electionType = _useState6[0],
      setElectionType = _useState6[1];

  var changeElectionType = function changeElectionType(event) {
    setElectionType(event.target.value);
  };

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      description = _useState7[0],
      setDescription = _useState7[1];

  var changeDescription = function changeDescription(event) {
    setDescription(event.target.value);
  }; // useEffect(() => {// get Factory contract
  //     async function setup() {
  //         if(web3 == '') {
  //             return;
  //         }
  //         try {
  //             // setAccounts(await web3.eth.getAccounts());
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
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8(event) {
      var manager, factoryContract, addressOfVote, setupVoteFactory, createVote, getElectionAddress, initializeElection, setUpElection, displayVote;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              event.preventDefault();

              setupVoteFactory = /*#__PURE__*/function () {
                var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
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
                  return _ref2.apply(this, arguments);
                };
              }();

              createVote = /*#__PURE__*/function () {
                var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
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
                  return _ref3.apply(this, arguments);
                };
              }();

              getElectionAddress = /*#__PURE__*/function () {
                var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
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
                  return _ref4.apply(this, arguments);
                };
              }();

              initializeElection = /*#__PURE__*/function () {
                var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
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
                  return _ref5.apply(this, arguments);
                };
              }();

              setUpElection = /*#__PURE__*/function () {
                var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6() {
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
                            from: managerOfVote
                          });

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
                var _ref7 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7() {
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["Header"], {
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
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  }), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }, "New Election"), __jsx("form", {
    onSubmit: onSubmit,
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
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
      lineNumber: 178,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
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
      lineNumber: 188,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
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
      lineNumber: 201,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
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
      lineNumber: 212,
      columnNumber: 21
    }
  }, electionTypes.map(function (option) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["MenuItem"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 29
      }
    }, option.label);
  }))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 17
    }
  }), __jsx("br", {
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
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 21
    }
  }, "Cancel"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    type: "submit",
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 21
    }
  }, "Publish Election"))));
};

_s(NewElection, "beQhFqIavysPn3fpYn7yohDDKwY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL25ld0VsZWN0aW9uLmpzIl0sIm5hbWVzIjpbIk5ld0VsZWN0aW9uIiwidXNlU3RhdGUiLCJ3ZWIzIiwic2V0V2ViMyIsInZvdGVDb250cmFjdCIsInNldFZvdGVDb250cmFjdCIsImVsZWN0aW9uVHlwZXMiLCJ2YWx1ZSIsImxhYmVsIiwid2ViM0luc3RhbmNlIiwidXNlRWZmZWN0IiwiaW5pdFdlYjMiLCJnZXRXZWIzIiwidGl0bGUiLCJzZXRUaXRsZSIsImNoYW5nZVRpdGxlIiwiZXZlbnQiLCJ0YXJnZXQiLCJzdGFydERhdGUiLCJzZXRTdGFydERhdGUiLCJjaGFuZ2VTdGFydERhdGUiLCJlbmREYXRlIiwic2V0RW5kRGF0ZSIsImNoYW5nZUVuZERhdGUiLCJlbGVjdGlvblR5cGUiLCJzZXRFbGVjdGlvblR5cGUiLCJjaGFuZ2VFbGVjdGlvblR5cGUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiY2hhbmdlRGVzY3JpcHRpb24iLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic2V0dXBWb3RlRmFjdG9yeSIsImV0aCIsImdldEFjY291bnRzIiwibWFuYWdlciIsIm5ldCIsImdldElkIiwibmV0d29ya0lkIiwiZGVwbG95ZWROZXR3b3JrIiwiVm90ZUZhY3RvcnlDb250cmFjdCIsIm5ldHdvcmtzIiwiaW5zdGFuY2UiLCJDb250cmFjdCIsImFiaSIsImFkZHJlc3MiLCJmYWN0b3J5Q29udHJhY3QiLCJhbGVydCIsImNvbnNvbGUiLCJlcnJvciIsImNyZWF0ZVZvdGUiLCJtZXRob2RzIiwic2VuZCIsImZyb20iLCJnZXRFbGVjdGlvbkFkZHJlc3MiLCJnZXREZXBsb3llZFZvdGVzIiwiY2FsbCIsInJlc3BvbnNlIiwiYWRkcmVzc09mVm90ZSIsImxlbmd0aCIsImluaXRpYWxpemVFbGVjdGlvbiIsIlZvdGVDb250cmFjdCIsInNldFVwRWxlY3Rpb24iLCJsb2ciLCJlZGl0RWxlY3Rpb24iLCJEYXRlIiwiZ2V0VGltZSIsIm1hbmFnZXJPZlZvdGUiLCJkaXNwbGF5Vm90ZSIsImN1cnJlbnRFbGVjdGlvbiIsInN1bW1hcnkiLCJzaHJpbmsiLCJtYXAiLCJvcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBRUVDLHNEQUFRLENBQUMsRUFBRCxDQUZWO0FBQUEsTUFFZkMsSUFGZTtBQUFBLE1BRVRDLE9BRlM7O0FBQUEsbUJBR2tCRixzREFBUSxDQUFDLEVBQUQsQ0FIMUI7QUFBQSxNQUdmRyxZQUhlO0FBQUEsTUFHREMsZUFIQzs7QUFJdEIsTUFBTUMsYUFBYSxHQUFHLENBQ2xCO0FBQ0lDLFNBQUssRUFBRSxVQURYO0FBRUlDLFNBQUssRUFBRTtBQUZYLEdBRGtCLEVBS2xCO0FBQ0lELFNBQUssRUFBRSxXQURYO0FBRUlDLFNBQUssRUFBRTtBQUZYLEdBTGtCLENBQXRCO0FBV0EsTUFBSUMsWUFBSjtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFBQSxhQUNHQyxRQURIO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGtNQUNaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUN5QkMsd0RBQU8sRUFEaEM7O0FBQUE7QUFDSUgsNEJBREo7QUFFSU4sdUJBQU8sQ0FBQ00sWUFBRCxDQUFQOztBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRFk7QUFBQTtBQUFBOztBQUtaRSxZQUFRO0FBQ1gsR0FOUSxFQU1QLEVBTk8sQ0FBVCxDQWhCc0IsQ0F3QnRCOztBQXhCc0IsbUJBeUJJVixzREFBUSxDQUFDLEVBQUQsQ0F6Qlo7QUFBQSxNQXlCZlksS0F6QmU7QUFBQSxNQXlCUkMsUUF6QlE7O0FBMEJ0QixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFDM0JG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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuREosRUFvREk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMkRBQUQ7QUFBYSxZQUFRLE1BQXJCO0FBQXNCLGFBQVMsTUFBL0I7QUFBZ0MsYUFBUyxNQUF6QztBQUNhLFNBQUssRUFBQyxhQURuQjtBQUVhLFFBQUksRUFBRSxDQUZuQjtBQUdhLFdBQU8sRUFBQyxVQUhyQjtBQUlhLFNBQUssRUFBRW1CLFdBSnBCO0FBS2EsWUFBUSxFQUFFRSxpQkFMdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBcERKLEVBOERJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE5REosRUErREk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUksTUFBQyx3REFBRDtBQUFVLFFBQUksRUFBQyxRQUFmO0FBQXdCLFlBQVEsRUFBRUMsUUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSixDQS9ESixDQVBKLENBREo7QUFnRkgsQ0E5T0Q7O0dBQU05QixXOztLQUFBQSxXO0FBK09TQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXdFbGVjdGlvbi5jMDY3ZmFjZTdlNmRjODljYmY3Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuaW1wb3J0IFZvdGVGYWN0b3J5Q29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlRmFjdG9yeS5qc29uXCI7XHJcbmltcG9ydCBWb3RlQ29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlLmpzb25cIjtcclxuaW1wb3J0ICogYXMgbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IGdldFdlYjMgZnJvbSBcIi4uL2dldFdlYjNcIjtcclxuXHJcblxyXG5cclxuY29uc3QgTmV3RWxlY3Rpb24gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3dlYjMsIHNldFdlYjNdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZvdGVDb250cmFjdCwgc2V0Vm90ZUNvbnRyYWN0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IGVsZWN0aW9uVHlwZXMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YWx1ZTogJ21ham9yaXR5JyxcclxuICAgICAgICAgICAgbGFiZWw6ICdzaW1wbGUgbWFqb3JpdHknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbHVlOiAndHdvVGhpcmRzJyxcclxuICAgICAgICAgICAgbGFiZWw6ICd0d28gdGhpcmRzJ1xyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgdmFyIHdlYjNJbnN0YW5jZTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gaW5pdFdlYjMoKSB7XHJcbiAgICAgICAgICAgIHdlYjNJbnN0YW5jZSA9IGF3YWl0IGdldFdlYjMoKTtcclxuICAgICAgICAgICAgc2V0V2ViMyh3ZWIzSW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbml0V2ViMygpO1xyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgLy9wbGVhc2UgZm9sbG93IHRoZSBjb3Vyc2UgZm9yIGEgYmV0dGVyIGltcGxlbWVudGF0aW9uIEBKaW5nXHJcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IGNoYW5nZVRpdGxlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0VGl0bGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBjaGFuZ2VTdGFydERhdGUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRTdGFydERhdGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBbZW5kRGF0ZSwgc2V0RW5kRGF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGNoYW5nZUVuZERhdGUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRFbmREYXRlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgW2VsZWN0aW9uVHlwZSwgc2V0RWxlY3Rpb25UeXBlXSA9IHVzZVN0YXRlKCdtYWpvcml0eScpO1xyXG4gICAgY29uc3QgY2hhbmdlRWxlY3Rpb25UeXBlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0RWxlY3Rpb25UeXBlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBjaGFuZ2VEZXNjcmlwdGlvbiA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldERlc2NyaXB0aW9uKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7Ly8gZ2V0IEZhY3RvcnkgY29udHJhY3RcclxuICAgIC8vICAgICBhc3luYyBmdW5jdGlvbiBzZXR1cCgpIHtcclxuICAgIC8vICAgICAgICAgaWYod2ViMyA9PSAnJykge1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIHRyeSB7XHJcbiAgICAvLyAgICAgICAgICAgICAvLyBzZXRBY2NvdW50cyhhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpKTtcclxuICAgIC8vICAgICAgICAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXHJcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBuZXR3b3JrSWQgPSBhd2FpdCB3ZWIzLmV0aC5uZXQuZ2V0SWQoKTtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IFZvdGVGYWN0b3J5Q29udHJhY3QubmV0d29ya3NbbmV0d29ya0lkXTtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIFZvdGVGYWN0b3J5Q29udHJhY3QuYWJpLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGRlcGxveWVkTmV0d29yayAmJiBkZXBsb3llZE5ldHdvcmsuYWRkcmVzcyxcclxuICAgIC8vICAgICAgICAgICAgICk7XHJcbiAgICAvLyAgICAgICAgICAgICBzZXRDb250cmFjdChpbnN0YW5jZSk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgLy8gU2V0IHdlYjMsIGFjY291bnRzLCBhbmQgY29udHJhY3QgdG8gdGhlIHN0YXRlLCBhbmQgdGhlbiBwcm9jZWVkIHdpdGggYW5cclxuICAgIC8vICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vICAgICAgICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cclxuICAgIC8vICAgICAgICAgICAgIGFsZXJ0KFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcclxuICAgIC8vICAgICAgICAgICAgICk7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBzZXR1cCgpO1xyXG4gICAgLy8gfSxbd2ViM10pO1xyXG5cclxuICAgIHZhciBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIG1hbmFnZXJcclxuICAgICAgICB2YXIgZmFjdG9yeUNvbnRyYWN0XHJcbiAgICAgICAgLy8gdmFyIHZvdGVDb250cmFjdDtcclxuICAgICAgICB2YXIgYWRkcmVzc09mVm90ZVxyXG4gICAgICAgIHZhciBzZXR1cFZvdGVGYWN0b3J5ID0gYXN5bmMgKCkgPT4geyAvL2luaXRpYWxpemVzIHZvdGVGYWN0b3J5XHJcbiAgICAgICAgICAgIGlmKHdlYjMgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgW21hbmFnZXJdID0gKGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCkpO1xyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjb250cmFjdCBpbnN0YW5jZS5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVwbG95ZWROZXR3b3JrID0gVm90ZUZhY3RvcnlDb250cmFjdC5uZXR3b3Jrc1tuZXR3b3JrSWRdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgVm90ZUZhY3RvcnlDb250cmFjdC5hYmksXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwbG95ZWROZXR3b3JrICYmIGRlcGxveWVkTmV0d29yay5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGZhY3RvcnlDb250cmFjdCA9IGluc3RhbmNlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDYXRjaCBhbnkgZXJyb3JzIGZvciBhbnkgb2YgdGhlIGFib3ZlIG9wZXJhdGlvbnMuXHJcbiAgICAgICAgICAgICAgICBhbGVydChcclxuICAgICAgICAgICAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNyZWF0ZVZvdGUgPSBhc3luYyAoKSA9PiB7Ly91c2VzIHZvdGVGYWN0b3J5IHRvIGNyZWF0ZSBWb3RlXHJcbiAgICAgICAgICAgIGlmKGZhY3RvcnlDb250cmFjdCA9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gR2V0IHRoZSB2YWx1ZSBmcm9tIHRoZSBjb250cmFjdCB0byBwcm92ZSBpdCB3b3JrZWQuXHJcbiAgICAgICAgICAgIGF3YWl0IGZhY3RvcnlDb250cmFjdC5tZXRob2RzLmNyZWF0ZVZvdGUoMCkuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBmcm9tOiBtYW5hZ2VyXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGdldEVsZWN0aW9uQWRkcmVzcyA9IGFzeW5jICgpID0+IHsvL2NhbGxzIHZvdGVGYWN0b3J5IG1ldGhvZCB0byBnZXQgbmV3IFZvdGUgYWRkcmVzc1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZhY3RvcnlDb250cmFjdC5tZXRob2RzLmdldERlcGxveWVkVm90ZXMoKS5jYWxsKCk7XHJcbiAgICAgICAgICAgIGFkZHJlc3NPZlZvdGUgPSByZXNwb25zZVtyZXNwb25zZS5sZW5ndGggLSAxXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBpbml0aWFsaXplRWxlY3Rpb24gPSBhc3luYyAoKSA9PiB7Ly9pbml0aWFsaXplcyB2b3RlIGNvbnRyYWN0XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBhd2FpdCBuZXcgd2ViMy5ldGguQ29udHJhY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgVm90ZUNvbnRyYWN0LmFiaSxcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzT2ZWb3RlLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHNldFZvdGVDb250cmFjdChpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICAvLyB2b3RlQ29udHJhY3QgPSBpbnN0YW5jZTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cclxuICAgICAgICAgICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2V0VXBFbGVjdGlvbiA9IGFzeW5jKCkgPT4gey8vY2FsbCB0byB2b3RlIGNvbnRyYWN0IHRvIGVkaXQgZWxlY3Rpb25cclxuICAgICAgICAgICAgaWYgKCF2b3RlQ29udHJhY3QpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidm90ZUNvbnRyYWN0IGRuZVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhd2FpdCB2b3RlQ29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgICAgICAgICAgLmVkaXRFbGVjdGlvbih0aXRsZSwgbmV3IERhdGUoc3RhcnREYXRlKS5nZXRUaW1lKCksIG5ldyBEYXRlKGVuZERhdGUpLmdldFRpbWUoKSwgZGVzY3JpcHRpb24sIFswXSlcclxuICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBtYW5hZ2VyT2ZWb3RlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgZGlzcGxheVZvdGUgPSBhc3luYyAoKSA9PiB7IC8vIHRlc3RpbmcgcHVycG9zZXNcclxuICAgICAgICAgICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IHZvdGVDb250cmFjdC5tZXRob2RzLmN1cnJlbnRFbGVjdGlvbigpLmNhbGwoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3VtbWFyeSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBhd2FpdCBzZXR1cFZvdGVGYWN0b3J5KCk7XHJcbiAgICAgICAgYXdhaXQgY3JlYXRlVm90ZSgpO1xyXG4gICAgICAgIGF3YWl0IGdldEVsZWN0aW9uQWRkcmVzcygpO1xyXG4gICAgICAgIGF3YWl0IGluaXRpYWxpemVFbGVjdGlvbigpO1xyXG4gICAgICAgIGF3YWl0IHNldFVwRWxlY3Rpb24oKTtcclxuICAgICAgICBhd2FpdCBkaXNwbGF5Vm90ZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8aDE+TmV3IEVsZWN0aW9uPC9oMT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG0uVGV4dEZpZWxkIHJlcXVpcmVkIGZ1bGxXaWR0aCBsYWJlbD1cIkVsZWN0aW9uIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L20uVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG0uVGV4dEZpZWxkIGxhYmVsPVwiU3RhcnQgZGF0ZVwiIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVN0YXJ0RGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvbS5UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bS5UZXh0RmllbGQgcmVxdWlyZWQgbGFiZWw9XCJFbmQgZGF0ZVwiIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VFbmREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bS5UZXh0RmllbGQgcmVxdWlyZWQgc2VsZWN0IGxhYmVsPVwiVHlwZSBvZiBlbGVjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbGVjdGlvblR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VFbGVjdGlvblR5cGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZWxlY3Rpb25UeXBlcy5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG0uTWVudUl0ZW0ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L20uTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbS5UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7Lyo8bS5UZXh0RmllbGQgbGFiZWw9XCJTZWxlY3QgZ3JvdXBzIChzb21lb25lIGhlbHAgd2l0aCB0aGUgc2VhcmNoIGFuZCBzZWxlY3QgbXVsdGlwbGUgcGx6KVwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG0uVGV4dEZpZWxkIHJlcXVpcmVkIG11bHRpbGluZSBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZURlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG0uQnV0dG9uPkNhbmNlbDwvbS5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG0uQnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvblN1Ym1pdD17b25TdWJtaXR9PlB1Ymxpc2ggRWxlY3Rpb248L20uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5ld0VsZWN0aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9