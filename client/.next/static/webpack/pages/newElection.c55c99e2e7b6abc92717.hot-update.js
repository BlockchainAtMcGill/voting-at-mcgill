webpackHotUpdate_N_E("pages/newElection",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

/***/ }),

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
/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contracts/VoteFactory.json */ "./src/contracts/VoteFactory.json");
var _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/VoteFactory.json */ "./src/contracts/VoteFactory.json", 1);
/* harmony import */ var _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contracts/Vote.json */ "./src/contracts/Vote.json");
var _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/Vote.json */ "./src/contracts/Vote.json", 1);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _getWeb3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../getWeb3 */ "./src/getWeb3.js");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);





var _jsxFileName = "C:\\Users\\foubroker\\Desktop\\BAM\\voting-at-mcgill-2\\client\\src\\pages\\newElection.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;








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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      web3 = _useState[0],
      setWeb3 = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      manager = _useState2[0],
      setManager = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      voteFactory = _useState3[0],
      setVoteFactory = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      title = _useState4[0],
      setTitle = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      startDate = _useState5[0],
      setStartDate = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      endDate = _useState6[0],
      setEndDate = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('majority'),
      electionType = _useState7[0],
      setElectionType = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      electionGroups = _useState8[0],
      setElectionGroups = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      description = _useState9[0],
      setDescription = _useState9[1]; // initializing web3


  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var web3Instance;

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
                return Object(_getWeb3__WEBPACK_IMPORTED_MODULE_9__["default"])();

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
  }, []); // Initializing VoteFactory contract

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    function setup() {
      return _setup.apply(this, arguments);
    }

    function _setup() {
      _setup = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var _yield$web3$eth$getAc, _yield$web3$eth$getAc2, user, networkId, deployedNetwork, instance;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(web3 == "")) {
                  _context2.next = 3;
                  break;
                }

                console.log('unable to get factory');
                return _context2.abrupt("return");

              case 3:
                _context2.prev = 3;
                _context2.next = 6;
                return web3.eth.getAccounts();

              case 6:
                _yield$web3$eth$getAc = _context2.sent;
                _yield$web3$eth$getAc2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_yield$web3$eth$getAc, 1);
                user = _yield$web3$eth$getAc2[0];
                setManager(user);
                _context2.next = 12;
                return web3.eth.net.getId();

              case 12:
                networkId = _context2.sent;
                deployedNetwork = _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_6__.networks[networkId];
                instance = new web3.eth.Contract(_contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_6__.abi, deployedNetwork && deployedNetwork.address);
                setVoteFactory(instance);
                _context2.next = 22;
                break;

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](3);
                alert("Failed to load web3, accounts, or contract. Check console for details.");
                console.error(_context2.t0);

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 18]]);
      }));
      return _setup.apply(this, arguments);
    }

    setup();
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
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee9(event) {
      var factoryContract, voteContract, addressOfVote, setupVoteFactory, createVote, getElectionAddress, initializeElection, setUpElection, displayVote;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              event.preventDefault();

              setupVoteFactory = /*#__PURE__*/function () {
                var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
                  var _ref3, _ref4, networkId, deployedNetwork, instance;

                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          if (!(web3 == '')) {
                            _context3.next = 2;
                            break;
                          }

                          return _context3.abrupt("return");

                        case 2:
                          _context3.prev = 2;

                          Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_3__["default"])("manager");

                          _context3.next = 6;
                          return web3.eth.getAccounts();

                        case 6:
                          _ref3 = _context3.sent;
                          _ref4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, 1);
                          manager = _ref4[0];
                          _context3.next = 11;
                          return web3.eth.net.getId();

                        case 11:
                          networkId = _context3.sent;
                          deployedNetwork = _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_6__.networks[networkId];
                          instance = new web3.eth.Contract(_contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_6__.abi, deployedNetwork && deployedNetwork.address);
                          factoryContract = instance; // Set web3, accounts, and contract to the state, and then proceed with an

                          _context3.next = 21;
                          break;

                        case 17:
                          _context3.prev = 17;
                          _context3.t0 = _context3["catch"](2);
                          // Catch any errors for any of the above operations.
                          alert("Failed to load web3, accounts, or contract. Check console for details.");
                          console.error(_context3.t0);

                        case 21:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3, null, [[2, 17]]);
                }));

                return function setupVoteFactory() {
                  return _ref2.apply(this, arguments);
                };
              }();

              createVote = /*#__PURE__*/function () {
                var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
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
                  return _ref5.apply(this, arguments);
                };
              }();

              getElectionAddress = /*#__PURE__*/function () {
                var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
                  var response;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
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
                  return _ref6.apply(this, arguments);
                };
              }();

              initializeElection = /*#__PURE__*/function () {
                var _ref7 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6() {
                  var instance;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.prev = 0;
                          _context6.next = 3;
                          return new web3.eth.Contract(_contracts_Vote_json__WEBPACK_IMPORTED_MODULE_7__.abi, addressOfVote);

                        case 3:
                          instance = _context6.sent;
                          voteContract = instance;
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
                  return _ref7.apply(this, arguments);
                };
              }();

              setUpElection = /*#__PURE__*/function () {
                var _ref8 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
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
                          return voteContract.methods.editElection(title, new Date(startDate).getTime(), new Date(endDate).getTime(), description, electionType).send({
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
                  return _ref8.apply(this, arguments);
                };
              }();

              displayVote = /*#__PURE__*/function () {
                var _ref9 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8() {
                  var summary;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
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
                  return _ref9.apply(this, arguments);
                };
              }();

              _context9.next = 9;
              return setupVoteFactory();

            case 9:
              _context9.next = 11;
              return createVote();

            case 11:
              _context9.next = 13;
              return getElectionAddress();

            case 13:
              _context9.next = 15;
              return initializeElection();

            case 15:
              _context9.next = 17;
              return setUpElection();

            case 17:
              _context9.next = 19;
              return displayVote();

            case 19:
              next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push("/");

            case 20:
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_5__["Header"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  }), __jsx("h1", {
    style: adminTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  }, "New Election"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"], {
    onSubmit: onSubmit,
    style: adminFields,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
    required: true,
    label: "Election title",
    value: title,
    onChange: function onChange(event) {
      return setTitle(event.target.value);
    },
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
      lineNumber: 188,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
    label: "Start date",
    type: "date",
    value: startDate,
    onChange: function onChange(event) {
      return setStartDate(event.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
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
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
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
      lineNumber: 200,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Select, {
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
      lineNumber: 208,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].TextArea, {
    required: true,
    label: "Description",
    value: description,
    onChange: function onChange(event) {
      return setDescription(event.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
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
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Button, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 21
    }
  }, "Cancel"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Button, {
    type: "submit",
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 21
    }
  }, "Publish Election"))));
};

_s(NewElection, "C+03X1lhRZ0S490JZ5yy7GoQ7e0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9uZXdFbGVjdGlvbi5qcyJdLCJuYW1lcyI6WyJhZG1pblRpdGxlIiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImFkbWluRmllbGRzIiwibWFyZ2luIiwiTmV3RWxlY3Rpb24iLCJ1c2VTdGF0ZSIsIndlYjMiLCJzZXRXZWIzIiwibWFuYWdlciIsInNldE1hbmFnZXIiLCJ2b3RlRmFjdG9yeSIsInNldFZvdGVGYWN0b3J5IiwidGl0bGUiLCJzZXRUaXRsZSIsInN0YXJ0RGF0ZSIsInNldFN0YXJ0RGF0ZSIsImVuZERhdGUiLCJzZXRFbmREYXRlIiwiZWxlY3Rpb25UeXBlIiwic2V0RWxlY3Rpb25UeXBlIiwiZWxlY3Rpb25Hcm91cHMiLCJzZXRFbGVjdGlvbkdyb3VwcyIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJ1c2VFZmZlY3QiLCJ3ZWIzSW5zdGFuY2UiLCJpbml0V2ViMyIsImdldFdlYjMiLCJzZXR1cCIsImNvbnNvbGUiLCJsb2ciLCJldGgiLCJnZXRBY2NvdW50cyIsInVzZXIiLCJuZXQiLCJnZXRJZCIsIm5ldHdvcmtJZCIsImRlcGxveWVkTmV0d29yayIsIlZvdGVGYWN0b3J5Q29udHJhY3QiLCJuZXR3b3JrcyIsImluc3RhbmNlIiwiQ29udHJhY3QiLCJhYmkiLCJhZGRyZXNzIiwiYWxlcnQiLCJlcnJvciIsImVsZWN0aW9uVHlwZXMiLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXR1cFZvdGVGYWN0b3J5IiwiZmFjdG9yeUNvbnRyYWN0IiwiY3JlYXRlVm90ZSIsIm1ldGhvZHMiLCJzZW5kIiwiZnJvbSIsImdldEVsZWN0aW9uQWRkcmVzcyIsImdldERlcGxveWVkVm90ZXMiLCJjYWxsIiwicmVzcG9uc2UiLCJhZGRyZXNzT2ZWb3RlIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUVsZWN0aW9uIiwiVm90ZUNvbnRyYWN0Iiwidm90ZUNvbnRyYWN0Iiwic2V0VXBFbGVjdGlvbiIsImVkaXRFbGVjdGlvbiIsIkRhdGUiLCJnZXRUaW1lIiwiZGlzcGxheVZvdGUiLCJjdXJyZW50RWxlY3Rpb24iLCJzdW1tYXJ5IiwiUm91dGVyIiwicHVzaCIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHO0FBQ2ZDLE9BQUssRUFBRSxLQURRO0FBRWZDLGNBQVksRUFBRSxJQUZDO0FBR2ZDLFVBQVEsRUFBRSxLQUhLO0FBSWZDLFdBQVMsRUFBRTtBQUpJLENBQW5CO0FBT0EsSUFBTUMsV0FBVyxHQUFHO0FBQ2hCQyxRQUFNLEVBQUU7QUFEUSxDQUFwQjs7QUFJQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBRUVDLHNEQUFRLENBQUMsRUFBRCxDQUZWO0FBQUEsTUFFZkMsSUFGZTtBQUFBLE1BRVRDLE9BRlM7O0FBQUEsbUJBR1FGLHNEQUFRLENBQUMsRUFBRCxDQUhoQjtBQUFBLE1BR2ZHLE9BSGU7QUFBQSxNQUdOQyxVQUhNOztBQUFBLG1CQUlnQkosc0RBQVEsQ0FBQyxFQUFELENBSnhCO0FBQUEsTUFJZkssV0FKZTtBQUFBLE1BSUZDLGNBSkU7O0FBQUEsbUJBT0lOLHNEQUFRLENBQUMsRUFBRCxDQVBaO0FBQUEsTUFPZk8sS0FQZTtBQUFBLE1BT1JDLFFBUFE7O0FBQUEsbUJBUVlSLHNEQUFRLENBQUMsQ0FBRCxDQVJwQjtBQUFBLE1BUWZTLFNBUmU7QUFBQSxNQVFKQyxZQVJJOztBQUFB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RUFFSSxNQUFDLHNEQUFELENBQU0sTUFBTjtBQUFhLFFBQUksRUFBQyxRQUFsQjtBQUEyQixZQUFRLEVBQUVDLFFBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkosQ0FqREosQ0FQSixDQURKO0FBa0VILENBeE5EOztHQUFNOUMsVzs7S0FBQUEsVztBQXlOU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3RWxlY3Rpb24uYzU1Yzk5ZTJlN2I2YWJjOTI3MTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9yZWFkT25seUVycm9yKG5hbWUpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiXFxcIlwiICsgbmFtZSArIFwiXFxcIiBpcyByZWFkLW9ubHlcIik7XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuaW1wb3J0IFZvdGVGYWN0b3J5Q29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlRmFjdG9yeS5qc29uXCI7XHJcbmltcG9ydCBWb3RlQ29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlLmpzb25cIjtcclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgZ2V0V2ViMyBmcm9tIFwiLi4vZ2V0V2ViM1wiO1xyXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBhZG1pblRpdGxlID0ge1xyXG4gICAgY29sb3I6IFwicmVkXCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiNSVcIixcclxuICAgIGZvbnRTaXplOiBcIjNlbVwiLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiXHJcbn07XHJcblxyXG5jb25zdCBhZG1pbkZpZWxkcyA9IHtcclxuICAgIG1hcmdpbjogXCJhdXRvIDUlIGF1dG8gNSVcIlxyXG59O1xyXG5cclxuY29uc3QgTmV3RWxlY3Rpb24gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3dlYjMsIHNldFdlYjNdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW21hbmFnZXIsIHNldE1hbmFnZXJdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZvdGVGYWN0b3J5LCBzZXRWb3RlRmFjdG9yeV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG5cclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbZWxlY3Rpb25UeXBlLCBzZXRFbGVjdGlvblR5cGVdID0gdXNlU3RhdGUoJ21ham9yaXR5Jyk7XHJcbiAgICBjb25zdCBbZWxlY3Rpb25Hcm91cHMsIHNldEVsZWN0aW9uR3JvdXBzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgXHJcbiAgICAvLyBpbml0aWFsaXppbmcgd2ViM1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB2YXIgd2ViM0luc3RhbmNlO1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGluaXRXZWIzKCkge1xyXG4gICAgICAgICAgICB3ZWIzSW5zdGFuY2UgPSBhd2FpdCBnZXRXZWIzKCk7XHJcbiAgICAgICAgICAgIHNldFdlYjMod2ViM0luc3RhbmNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5pdFdlYjMoKTtcclxuICAgIH0sW10pO1xyXG5cclxuICAgIC8vIEluaXRpYWxpemluZyBWb3RlRmFjdG9yeSBjb250cmFjdFxyXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgICAgICAgICBpZih3ZWIzID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5hYmxlIHRvIGdldCBmYWN0b3J5JylcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICB2YXIgW3VzZXJdID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICAgICAgICBzZXRNYW5hZ2VyKHVzZXIpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IFZvdGVGYWN0b3J5Q29udHJhY3QubmV0d29ya3NbbmV0d29ya0lkXTtcclxuICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgICAgICAgIFZvdGVGYWN0b3J5Q29udHJhY3QuYWJpLFxyXG4gICAgICAgICAgICAgICAgZGVwbG95ZWROZXR3b3JrICYmIGRlcGxveWVkTmV0d29yay5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgc2V0Vm90ZUZhY3RvcnkoaW5zdGFuY2UpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXR1cCgpO1xyXG5cclxuICAgIH0sW3dlYjNdKVxyXG5cclxuICAgIGNvbnN0IGVsZWN0aW9uVHlwZXMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBrZXk6ICdzbScsXHJcbiAgICAgICAgICAgIHRleHQ6ICdzaW1wbGUgbWFqb3JpdHknLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ21ham9yaXR5J1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAga2V5OiAndHQnLFxyXG4gICAgICAgICAgICB0ZXh0OiAndHdvIHRoaXJkcycsXHJcbiAgICAgICAgICAgIHZhbHVlOiAndHdvVGhpcmRzJ1xyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgdmFyIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgZmFjdG9yeUNvbnRyYWN0O1xyXG4gICAgICAgIHZhciB2b3RlQ29udHJhY3Q7XHJcbiAgICAgICAgdmFyIGFkZHJlc3NPZlZvdGU7XHJcbiAgICAgICAgdmFyIHNldHVwVm90ZUZhY3RvcnkgPSBhc3luYyAoKSA9PiB7IC8vaW5pdGlhbGl6ZXMgdm90ZUZhY3RvcnlcclxuICAgICAgICAgICAgaWYod2ViMyA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBbbWFuYWdlcl0gPSAoYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViMy5ldGgubmV0LmdldElkKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXBsb3llZE5ldHdvcmsgPSBWb3RlRmFjdG9yeUNvbnRyYWN0Lm5ldHdvcmtzW25ldHdvcmtJZF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgICAgICAgICAgICBWb3RlRmFjdG9yeUNvbnRyYWN0LmFiaSxcclxuICAgICAgICAgICAgICAgICAgICBkZXBsb3llZE5ldHdvcmsgJiYgZGVwbG95ZWROZXR3b3JrLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgZmFjdG9yeUNvbnRyYWN0ID0gaW5zdGFuY2U7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2V0IHdlYjMsIGFjY291bnRzLCBhbmQgY29udHJhY3QgdG8gdGhlIHN0YXRlLCBhbmQgdGhlbiBwcm9jZWVkIHdpdGggYW5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cclxuICAgICAgICAgICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGNyZWF0ZVZvdGUgPSBhc3luYyAoKSA9PiB7Ly91c2VzIHZvdGVGYWN0b3J5IHRvIGNyZWF0ZSBWb3RlXHJcbiAgICAgICAgICAgIGlmKGZhY3RvcnlDb250cmFjdCA9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gR2V0IHRoZSB2YWx1ZSBmcm9tIHRoZSBjb250cmFjdCB0byBwcm92ZSBpdCB3b3JrZWQuXHJcbiAgICAgICAgICAgIGF3YWl0IGZhY3RvcnlDb250cmFjdC5tZXRob2RzLmNyZWF0ZVZvdGUoMCkuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBmcm9tOiBtYW5hZ2VyXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGdldEVsZWN0aW9uQWRkcmVzcyA9IGFzeW5jICgpID0+IHsvL2NhbGxzIHZvdGVGYWN0b3J5IG1ldGhvZCB0byBnZXQgbmV3IFZvdGUgYWRkcmVzc1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZhY3RvcnlDb250cmFjdC5tZXRob2RzLmdldERlcGxveWVkVm90ZXMoKS5jYWxsKCk7XHJcbiAgICAgICAgICAgIGFkZHJlc3NPZlZvdGUgPSByZXNwb25zZVtyZXNwb25zZS5sZW5ndGggLSAxXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBpbml0aWFsaXplRWxlY3Rpb24gPSBhc3luYyAoKSA9PiB7Ly9pbml0aWFsaXplcyB2b3RlIGNvbnRyYWN0XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBhd2FpdCBuZXcgd2ViMy5ldGguQ29udHJhY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgVm90ZUNvbnRyYWN0LmFiaSxcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzT2ZWb3RlLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHZvdGVDb250cmFjdCA9IGluc3RhbmNlO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxyXG4gICAgICAgICAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgc2V0VXBFbGVjdGlvbiA9IGFzeW5jKCkgPT4gey8vY2FsbCB0byB2b3RlIGNvbnRyYWN0IHRvIGVkaXQgZWxlY3Rpb25cclxuICAgICAgICAgICAgaWYgKCF2b3RlQ29udHJhY3QpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidm90ZUNvbnRyYWN0IGRuZVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhd2FpdCB2b3RlQ29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgICAgICAgICAgLmVkaXRFbGVjdGlvbih0aXRsZSwgbmV3IERhdGUoc3RhcnREYXRlKS5nZXRUaW1lKCksIG5ldyBEYXRlKGVuZERhdGUpLmdldFRpbWUoKSwgZGVzY3JpcHRpb24sIGVsZWN0aW9uVHlwZSlcclxuICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBtYW5hZ2VyXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBkaXNwbGF5Vm90ZSA9IGFzeW5jICgpID0+IHsgLy8gdGVzdGluZyBwdXJwb3Nlc1xyXG4gICAgICAgICAgICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgdm90ZUNvbnRyYWN0Lm1ldGhvZHMuY3VycmVudEVsZWN0aW9uKCkuY2FsbCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdW1tYXJ5KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGF3YWl0IHNldHVwVm90ZUZhY3RvcnkoKTtcclxuICAgICAgICBhd2FpdCBjcmVhdGVWb3RlKCk7XHJcbiAgICAgICAgYXdhaXQgZ2V0RWxlY3Rpb25BZGRyZXNzKCk7XHJcbiAgICAgICAgYXdhaXQgaW5pdGlhbGl6ZUVsZWN0aW9uKCk7XHJcbiAgICAgICAgYXdhaXQgc2V0VXBFbGVjdGlvbigpO1xyXG4gICAgICAgIGF3YWl0IGRpc3BsYXlWb3RlKCk7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8aDEgc3R5bGU9e2FkbWluVGl0bGV9Pk5ldyBFbGVjdGlvbjwvaDE+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IHN0eWxlPXthZG1pbkZpZWxkc30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0IHJlcXVpcmVkIGxhYmVsPVwiRWxlY3Rpb24gdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRUaXRsZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJTdGFydCBkYXRlXCIgdHlwZT1cImRhdGVcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldFN0YXJ0RGF0ZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXQgcmVxdWlyZWQgbGFiZWw9XCJFbmQgZGF0ZVwiIHR5cGU9XCJkYXRlXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbmREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0RW5kRGF0ZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5TZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1R5cGUgb2YgZWxlY3Rpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2VsZWN0aW9uVHlwZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdUeXBlIG9mIGVsZWN0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZWxlY3Rpb25UeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0RWxlY3Rpb25UeXBlKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLlRleHRBcmVhIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVzY3JpcHRpb25cIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0RGVzY3JpcHRpb24oZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkJ1dHRvbj5DYW5jZWw8L0Zvcm0uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25TdWJtaXQ9e29uU3VibWl0fT5QdWJsaXNoIEVsZWN0aW9uPC9Gb3JtLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTmV3RWxlY3Rpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=