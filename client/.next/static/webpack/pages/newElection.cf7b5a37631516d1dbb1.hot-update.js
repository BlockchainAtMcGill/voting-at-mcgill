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
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _getWeb3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../getWeb3 */ "./src/getWeb3.js");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "C:\\Users\\foubroker\\Desktop\\BAM\\voting-at-mcgill-2\\client\\src\\pages\\newElection.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var adminTitle = {
  color: "red",
  marginBottom: "5%",
  fontSize: "3em",
  textAlign: "center"
};
var adminFields = {
  margin: "auto 5% auto 5%"
};

var NewElection = function NewElection() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      web3 = _useState[0],
      setWeb3 = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      manager = _useState2[0],
      setManager = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      factoryContract = _useState3[0],
      setFactoryContract = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      title = _useState4[0],
      setTitle = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      startDate = _useState5[0],
      setStartDate = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      endDate = _useState6[0],
      setEndDate = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('majority'),
      electionType = _useState7[0],
      setElectionType = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      electionGroups = _useState8[0],
      setElectionGroups = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      description = _useState9[0],
      setDescription = _useState9[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var web3Instance;

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
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var setupVoteFactory = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var voteManager, networkId, deployedNetwork, instance;
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
                voteManager = _context2.sent;
                setManager(voteManager); // Get the contract instance.

                _context2.next = 9;
                return web3.eth.net.getId();

              case 9:
                networkId = _context2.sent;
                deployedNetwork = _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_4__.networks[networkId];
                instance = new web3.eth.Contract(_contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_4__.abi, deployedNetwork && deployedNetwork.address);
                setFactoryContract(instance); // Set web3, accounts, and contract to the state, and then proceed with an

                _context2.next = 19;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](2);
                // Catch any errors for any of the above operations.
                alert("Failed to load web3, accounts, or contract. Check console for details.");
                console.error(_context2.t0);

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 15]]);
      }));

      return function setupVoteFactory() {
        return _ref.apply(this, arguments);
      };
    }();

    setupVoteFactory();
    console.log();
  }, [web3]);
  var electionTypes = [{
    key: 'sm',
    text: 'simple majority',
    value: 'majority'
  }, {
    key: 'tt',
    text: 'two thirds',
    value: 'twoThirds'
  }];

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(event) {
      var voteContract, addressOfVote, createVote, getElectionAddress, initializeElection, setUpElection, displayVote;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              event.preventDefault();

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
                  return _ref5.apply(this, arguments);
                };
              }();

              setUpElection = /*#__PURE__*/function () {
                var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
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
                          return voteContract.methods.editElection(title, new Date(startDate).getTime(), new Date(endDate).getTime(), description, electionType).send({
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
              next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/");

            case 17:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function onSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__["Header"], {
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
    style: adminTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, "New Election"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"], {
    onSubmit: onSubmit,
    style: adminFields,
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
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Input, {
    required: true,
    label: "Election title",
    value: title,
    onChange: function onChange(event) {
      return setTitle(event.target.value);
    },
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
      lineNumber: 162,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Input, {
    label: "Start date",
    type: "date",
    value: startDate,
    onChange: function onChange(event) {
      return setStartDate(event.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Input, {
    required: true,
    label: "End date",
    type: "date",
    value: endDate,
    onChange: function onChange(event) {
      return setEndDate(event.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Select, {
    fluid: true,
    label: "Type of election",
    options: electionTypes,
    placeholder: "Type of election",
    value: electionType,
    onChange: function onChange(event) {
      return setElectionType(event.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].TextArea, {
    required: true,
    label: "Description",
    value: description,
    onChange: function onChange(event) {
      return setDescription(event.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Button, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 21
    }
  }, "Cancel"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Button, {
    type: "submit",
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 21
    }
  }, "Publish Election"))));
};

_s(NewElection, "rbZdXjnOY63c0mUmWFZQ3J+FLaY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL25ld0VsZWN0aW9uLmpzIl0sIm5hbWVzIjpbImFkbWluVGl0bGUiLCJjb2xvciIsIm1hcmdpbkJvdHRvbSIsImZvbnRTaXplIiwidGV4dEFsaWduIiwiYWRtaW5GaWVsZHMiLCJtYXJnaW4iLCJOZXdFbGVjdGlvbiIsInVzZVN0YXRlIiwid2ViMyIsInNldFdlYjMiLCJtYW5hZ2VyIiwic2V0TWFuYWdlciIsImZhY3RvcnlDb250cmFjdCIsInNldEZhY3RvcnlDb250cmFjdCIsInRpdGxlIiwic2V0VGl0bGUiLCJzdGFydERhdGUiLCJzZXRTdGFydERhdGUiLCJlbmREYXRlIiwic2V0RW5kRGF0ZSIsImVsZWN0aW9uVHlwZSIsInNldEVsZWN0aW9uVHlwZSIsImVsZWN0aW9uR3JvdXBzIiwic2V0RWxlY3Rpb25Hcm91cHMiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwidXNlRWZmZWN0Iiwid2ViM0luc3RhbmNlIiwiaW5pdFdlYjMiLCJnZXRXZWIzIiwic2V0dXBWb3RlRmFjdG9yeSIsImV0aCIsImdldEFjY291bnRzIiwidm90ZU1hbmFnZXIiLCJuZXQiLCJnZXRJZCIsIm5ldHdvcmtJZCIsImRlcGxveWVkTmV0d29yayIsIlZvdGVGYWN0b3J5Q29udHJhY3QiLCJuZXR3b3JrcyIsImluc3RhbmNlIiwiQ29udHJhY3QiLCJhYmkiLCJhZGRyZXNzIiwiYWxlcnQiLCJjb25zb2xlIiwiZXJyb3IiLCJsb2ciLCJlbGVjdGlvblR5cGVzIiwia2V5IiwidGV4dCIsInZhbHVlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlVm90ZSIsIm1ldGhvZHMiLCJzZW5kIiwiZnJvbSIsImdldEVsZWN0aW9uQWRkcmVzcyIsImdldERlcGxveWVkVm90ZXMiLCJjYWxsIiwicmVzcG9uc2UiLCJhZGRyZXNzT2ZWb3RlIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUVsZWN0aW9uIiwiVm90ZUNvbnRyYWN0Iiwidm90ZUNvbnRyYWN0Iiwic2V0VXBFbGVjdGlvbiIsImVkaXRFbGVjdGlvbiIsIkRhdGUiLCJnZXRUaW1lIiwiZGlzcGxheVZvdGUiLCJjdXJyZW50RWxlY3Rpb24iLCJzdW1tYXJ5IiwiUm91dGVyIiwicHVzaCIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHO0FBQ2ZDLE9BQUssRUFBRSxLQURRO0FBRWZDLGNBQVksRUFBRSxJQUZDO0FBR2ZDLFVBQVEsRUFBRSxLQUhLO0FBSWZDLFdBQVMsRUFBRTtBQUpJLENBQW5CO0FBT0EsSUFBTUMsV0FBVyxHQUFHO0FBQ2hCQyxRQUFNLEVBQUU7QUFEUSxDQUFwQjs7QUFJQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBRUVDLHNEQUFRLENBQUMsRUFBRCxDQUZWO0FBQUEsTUFFZkMsSUFGZTtBQUFBLE1BRVRDLE9BRlM7O0FBQUEsbUJBR1FGLHNEQUFRLENBQUMsRUFBRCxDQUhoQjtBQUFBLE1BR2ZHLE9BSGU7QUFBQSxNQUdOQyxVQUhNOztBQUFBLG1CQUl3Qkosc0RBQVEsQ0FBQyxFQUFELENBSmhDO0FBQUEsTUFJZkssZUFKZTtBQUFBLE1BSUVDLGtCQUpGOztBQUFBLG1CQU1JTixzREFBUSxDQUFDLEVBQUQsQ0FOWjtBQUFBLE1BTWZPLEtBTmU7QUFBQSxNQU1SQyxRQU5ROztBQUFBLG1CQU9ZUixzREFBUSxDQUFDLENBQUQsQ0FQcEI7QUFBQSxNQU9mUyxTQVBlO0FBQUEsTUFPSkMsWUFQSTs7QUFBQSxtQkFRUVYsc0RBQVEsQ0FBQyxDQUFELENBUmhCO0FBQUEsTUFRZlcsT0FSZTtBQUFBLE1BUU5DLFVBUk07O0FBQUEsbUJBU2tCWixzREFBUSxDQUFDLFVBQUQsQ0FUMUI7QUFBQSxNQVNmYSxZQVRlO0FBQUEsTUFTREMsZUFU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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVJLE1BQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsUUFBSSxFQUFDLFFBQWxCO0FBQTJCLFlBQVEsRUFBRUMsUUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSixDQWpESixDQVBKLENBREo7QUFrRUgsQ0E5TEQ7O0dBQU05QyxXOztLQUFBQSxXO0FBK0xTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXdFbGVjdGlvbi5jZjdiNWEzNzYzMTUxNmQxZGJiMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuaW1wb3J0IFZvdGVGYWN0b3J5Q29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlRmFjdG9yeS5qc29uXCI7XHJcbmltcG9ydCBWb3RlQ29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlLmpzb25cIjtcclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgZ2V0V2ViMyBmcm9tIFwiLi4vZ2V0V2ViM1wiO1xyXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBhZG1pblRpdGxlID0ge1xyXG4gICAgY29sb3I6IFwicmVkXCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiNSVcIixcclxuICAgIGZvbnRTaXplOiBcIjNlbVwiLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiXHJcbn07XHJcblxyXG5jb25zdCBhZG1pbkZpZWxkcyA9IHtcclxuICAgIG1hcmdpbjogXCJhdXRvIDUlIGF1dG8gNSVcIlxyXG59O1xyXG5cclxuY29uc3QgTmV3RWxlY3Rpb24gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3dlYjMsIHNldFdlYjNdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW21hbmFnZXIsIHNldE1hbmFnZXJdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2ZhY3RvcnlDb250cmFjdCwgc2V0RmFjdG9yeUNvbnRyYWN0XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzdGFydERhdGUsIHNldFN0YXJ0RGF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtlbmREYXRlLCBzZXRFbmREYXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2VsZWN0aW9uVHlwZSwgc2V0RWxlY3Rpb25UeXBlXSA9IHVzZVN0YXRlKCdtYWpvcml0eScpO1xyXG4gICAgY29uc3QgW2VsZWN0aW9uR3JvdXBzLCBzZXRFbGVjdGlvbkdyb3Vwc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHZhciB3ZWIzSW5zdGFuY2U7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gaW5pdFdlYjMoKSB7XHJcbiAgICAgICAgICAgIHdlYjNJbnN0YW5jZSA9IGF3YWl0IGdldFdlYjMoKTtcclxuICAgICAgICAgICAgc2V0V2ViMyh3ZWIzSW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbml0V2ViMygpO1xyXG4gICAgfSxbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICAgICAgdmFyIHNldHVwVm90ZUZhY3RvcnkgPSBhc3luYyAoKSA9PiB7IC8vaW5pdGlhbGl6ZXMgdm90ZUZhY3RvcnlcclxuICAgICAgICAgICAgaWYod2ViMyA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdm90ZU1hbmFnZXIgPSAoYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRNYW5hZ2VyKHZvdGVNYW5hZ2VyKTtcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXR3b3JrSWQgPSBhd2FpdCB3ZWIzLmV0aC5uZXQuZ2V0SWQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IFZvdGVGYWN0b3J5Q29udHJhY3QubmV0d29ya3NbbmV0d29ya0lkXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIFZvdGVGYWN0b3J5Q29udHJhY3QuYWJpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlcGxveWVkTmV0d29yayAmJiBkZXBsb3llZE5ldHdvcmsuYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBzZXRGYWN0b3J5Q29udHJhY3QoaW5zdGFuY2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDYXRjaCBhbnkgZXJyb3JzIGZvciBhbnkgb2YgdGhlIGFib3ZlIG9wZXJhdGlvbnMuXHJcbiAgICAgICAgICAgICAgICBhbGVydChcclxuICAgICAgICAgICAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldHVwVm90ZUZhY3RvcnkoKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coKVxyXG4gICAgfSxbd2ViM10pXHJcblxyXG4gICAgY29uc3QgZWxlY3Rpb25UeXBlcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleTogJ3NtJyxcclxuICAgICAgICAgICAgdGV4dDogJ3NpbXBsZSBtYWpvcml0eScsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnbWFqb3JpdHknXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBrZXk6ICd0dCcsXHJcbiAgICAgICAgICAgIHRleHQ6ICd0d28gdGhpcmRzJyxcclxuICAgICAgICAgICAgdmFsdWU6ICd0d29UaGlyZHMnXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICB2YXIgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciB2b3RlQ29udHJhY3Q7XHJcbiAgICAgICAgdmFyIGFkZHJlc3NPZlZvdGU7XHJcblxyXG4gICAgICAgIHZhciBjcmVhdGVWb3RlID0gYXN5bmMgKCkgPT4gey8vdXNlcyB2b3RlRmFjdG9yeSB0byBjcmVhdGUgVm90ZVxyXG4gICAgICAgICAgICBpZihmYWN0b3J5Q29udHJhY3QgPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgdmFsdWUgZnJvbSB0aGUgY29udHJhY3QgdG8gcHJvdmUgaXQgd29ya2VkLlxyXG4gICAgICAgICAgICBhd2FpdCBmYWN0b3J5Q29udHJhY3QubWV0aG9kcy5jcmVhdGVWb3RlKDApLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgZnJvbTogbWFuYWdlclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBnZXRFbGVjdGlvbkFkZHJlc3MgPSBhc3luYyAoKSA9PiB7Ly9jYWxscyB2b3RlRmFjdG9yeSBtZXRob2QgdG8gZ2V0IG5ldyBWb3RlIGFkZHJlc3NcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmYWN0b3J5Q29udHJhY3QubWV0aG9kcy5nZXREZXBsb3llZFZvdGVzKCkuY2FsbCgpO1xyXG4gICAgICAgICAgICBhZGRyZXNzT2ZWb3RlID0gcmVzcG9uc2VbcmVzcG9uc2UubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgaW5pdGlhbGl6ZUVsZWN0aW9uID0gYXN5bmMgKCkgPT4gey8vaW5pdGlhbGl6ZXMgdm90ZSBjb250cmFjdFxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjb250cmFjdCBpbnN0YW5jZS5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gYXdhaXQgbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIFZvdGVDb250cmFjdC5hYmksXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc09mVm90ZSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB2b3RlQ29udHJhY3QgPSBpbnN0YW5jZTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cclxuICAgICAgICAgICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHNldFVwRWxlY3Rpb24gPSBhc3luYygpID0+IHsvL2NhbGwgdG8gdm90ZSBjb250cmFjdCB0byBlZGl0IGVsZWN0aW9uXHJcbiAgICAgICAgICAgIGlmICghdm90ZUNvbnRyYWN0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZvdGVDb250cmFjdCBkbmVcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXdhaXQgdm90ZUNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAgICAgICAgIC5lZGl0RWxlY3Rpb24odGl0bGUsIG5ldyBEYXRlKHN0YXJ0RGF0ZSkuZ2V0VGltZSgpLCBuZXcgRGF0ZShlbmREYXRlKS5nZXRUaW1lKCksIGRlc2NyaXB0aW9uLCBlbGVjdGlvblR5cGUpXHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogbWFuYWdlclxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgZGlzcGxheVZvdGUgPSBhc3luYyAoKSA9PiB7IC8vIHRlc3RpbmcgcHVycG9zZXNcclxuICAgICAgICAgICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IHZvdGVDb250cmFjdC5tZXRob2RzLmN1cnJlbnRFbGVjdGlvbigpLmNhbGwoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3VtbWFyeSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBhd2FpdCBjcmVhdGVWb3RlKCk7XHJcbiAgICAgICAgYXdhaXQgZ2V0RWxlY3Rpb25BZGRyZXNzKCk7XHJcbiAgICAgICAgYXdhaXQgaW5pdGlhbGl6ZUVsZWN0aW9uKCk7XHJcbiAgICAgICAgYXdhaXQgc2V0VXBFbGVjdGlvbigpO1xyXG4gICAgICAgIGF3YWl0IGRpc3BsYXlWb3RlKCk7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8aDEgc3R5bGU9e2FkbWluVGl0bGV9Pk5ldyBFbGVjdGlvbjwvaDE+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IHN0eWxlPXthZG1pbkZpZWxkc30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0IHJlcXVpcmVkIGxhYmVsPVwiRWxlY3Rpb24gdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRUaXRsZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJTdGFydCBkYXRlXCIgdHlwZT1cImRhdGVcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldFN0YXJ0RGF0ZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXQgcmVxdWlyZWQgbGFiZWw9XCJFbmQgZGF0ZVwiIHR5cGU9XCJkYXRlXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbmREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0RW5kRGF0ZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5TZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1R5cGUgb2YgZWxlY3Rpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2VsZWN0aW9uVHlwZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdUeXBlIG9mIGVsZWN0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZWxlY3Rpb25UeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0RWxlY3Rpb25UeXBlKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLlRleHRBcmVhIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVzY3JpcHRpb25cIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0RGVzY3JpcHRpb24oZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkJ1dHRvbj5DYW5jZWw8L0Zvcm0uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25TdWJtaXQ9e29uU3VibWl0fT5QdWJsaXNoIEVsZWN0aW9uPC9Gb3JtLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTmV3RWxlY3Rpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=