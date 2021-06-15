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
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _getWeb3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../getWeb3 */ "./src/getWeb3.js");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);




var _jsxFileName = "C:\\Users\\foubroker\\Desktop\\BAM\\voting-at-mcgill-2\\client\\src\\pages\\newElection.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      web3 = _useState[0],
      setWeb3 = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      manager = _useState2[0],
      setManager = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      voteFactory = _useState3[0],
      setVoteFactory = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      groupsID = _useState4[0],
      setGroupsID = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      title = _useState5[0],
      setTitle = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      startDate = _useState6[0],
      setStartDate = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      endDate = _useState7[0],
      setEndDate = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('majority'),
      electionType = _useState8[0],
      setElectionType = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      electionGroups = _useState9[0],
      setElectionGroups = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      description = _useState10[0],
      setDescription = _useState10[1]; // initializing web3


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
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
  }, []); // Initializing VoteFactory contract

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
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
                deployedNetwork = _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_5__.networks[networkId];
                instance = new web3.eth.Contract(_contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_5__.abi, deployedNetwork && deployedNetwork.address);
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
  }, [web3]); // Return all group IDs of a user as an array

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var displayVotes = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
        var response, temp, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(contract == '')) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _context3.next = 4;
                return contract.methods.getUserAllGroups().call();

              case 4:
                response = _context3.sent;
                temp = [];

                for (i = 0; i < response.length; i++) {
                  temp[i] = parseInt(response[i]);
                }

                console.log(temp);
                setGroupsID(temp);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function displayVotes() {
        return _ref.apply(this, arguments);
      };
    }();

    displayVotes();
  }, [voteFactory]);
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
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee10(event) {
      var factoryContract, voteContract, addressOfVote, setupVoteFactory, createVote, getElectionAddress, initializeElection, setUpElection, displayVote;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              event.preventDefault();

              setupVoteFactory = /*#__PURE__*/function () {
                var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
                  var networkId, deployedNetwork, instance;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          if (!(web3 == '')) {
                            _context4.next = 2;
                            break;
                          }

                          return _context4.abrupt("return");

                        case 2:
                          _context4.prev = 2;
                          _context4.next = 5;
                          return web3.eth.net.getId();

                        case 5:
                          networkId = _context4.sent;
                          deployedNetwork = _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_5__.networks[networkId];
                          instance = new web3.eth.Contract(_contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_5__.abi, deployedNetwork && deployedNetwork.address);
                          factoryContract = instance; // Set web3, accounts, and contract to the state, and then proceed with an

                          _context4.next = 15;
                          break;

                        case 11:
                          _context4.prev = 11;
                          _context4.t0 = _context4["catch"](2);
                          // Catch any errors for any of the above operations.
                          alert("Failed to load web3, accounts, or contract. Check console for details.");
                          console.error(_context4.t0);

                        case 15:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4, null, [[2, 11]]);
                }));

                return function setupVoteFactory() {
                  return _ref3.apply(this, arguments);
                };
              }();

              createVote = /*#__PURE__*/function () {
                var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          if (!(factoryContract == '')) {
                            _context5.next = 2;
                            break;
                          }

                          return _context5.abrupt("return");

                        case 2:
                          _context5.next = 4;
                          return factoryContract.methods.createVote(0).send({
                            from: manager
                          });

                        case 4:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function createVote() {
                  return _ref4.apply(this, arguments);
                };
              }();

              getElectionAddress = /*#__PURE__*/function () {
                var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6() {
                  var response;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return factoryContract.methods.getDeployedVotes().call();

                        case 2:
                          response = _context6.sent;
                          addressOfVote = response[response.length - 1];

                        case 4:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                return function getElectionAddress() {
                  return _ref5.apply(this, arguments);
                };
              }();

              initializeElection = /*#__PURE__*/function () {
                var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7() {
                  var instance;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.prev = 0;
                          _context7.next = 3;
                          return new web3.eth.Contract(_contracts_Vote_json__WEBPACK_IMPORTED_MODULE_6__.abi, addressOfVote);

                        case 3:
                          instance = _context7.sent;
                          voteContract = instance;
                          _context7.next = 11;
                          break;

                        case 7:
                          _context7.prev = 7;
                          _context7.t0 = _context7["catch"](0);
                          // Catch any errors for any of the above operations.
                          alert("Failed to load web3, accounts, or contract. Check console for details.");
                          console.error(_context7.t0);

                        case 11:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7, null, [[0, 7]]);
                }));

                return function initializeElection() {
                  return _ref6.apply(this, arguments);
                };
              }();

              setUpElection = /*#__PURE__*/function () {
                var _ref7 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          if (voteContract) {
                            _context8.next = 3;
                            break;
                          }

                          console.log("voteContract dne");
                          return _context8.abrupt("return");

                        case 3:
                          _context8.next = 5;
                          return voteContract.methods.editElection(title, new Date(startDate).getTime(), new Date(endDate).getTime(), description, electionType).send({
                            from: manager
                          });

                        case 5:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee8);
                }));

                return function setUpElection() {
                  return _ref7.apply(this, arguments);
                };
              }();

              displayVote = /*#__PURE__*/function () {
                var _ref8 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee9() {
                  var summary;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          _context9.next = 2;
                          return voteContract.methods.currentElection().call();

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

                return function displayVote() {
                  return _ref8.apply(this, arguments);
                };
              }();

              _context10.next = 9;
              return setupVoteFactory();

            case 9:
              _context10.next = 11;
              return createVote();

            case 11:
              _context10.next = 13;
              return getElectionAddress();

            case 13:
              _context10.next = 15;
              return initializeElection();

            case 15:
              _context10.next = 17;
              return setUpElection();

            case 17:
              _context10.next = 19;
              return displayVote();

            case 19:
              next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/");

            case 20:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function onSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }
  }), __jsx("h1", {
    style: adminTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }
  }, "New Election"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"], {
    onSubmit: onSubmit,
    style: adminFields,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Input, {
    required: true,
    label: "Election title",
    value: title,
    onChange: function onChange(event) {
      return setTitle(event.target.value);
    },
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
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Input, {
    label: "Start date",
    type: "date",
    value: startDate,
    onChange: function onChange(event) {
      return setStartDate(event.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
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
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Input, {
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
      lineNumber: 217,
      columnNumber: 21
    }
  })), __jsx("br", {
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
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Select, {
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
      lineNumber: 225,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].TextArea, {
    required: true,
    label: "Description",
    value: description,
    onChange: function onChange(event) {
      return setDescription(event.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Button, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 21
    }
  }, "Cancel"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Button, {
    type: "submit",
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 21
    }
  }, "Publish Election"))));
};

_s(NewElection, "fhM2DPYKR1wZzWWoS/n0XsTCz2s=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL25ld0VsZWN0aW9uLmpzIl0sIm5hbWVzIjpbImFkbWluVGl0bGUiLCJjb2xvciIsIm1hcmdpbkJvdHRvbSIsImZvbnRTaXplIiwidGV4dEFsaWduIiwiYWRtaW5GaWVsZHMiLCJtYXJnaW4iLCJOZXdFbGVjdGlvbiIsInVzZVN0YXRlIiwid2ViMyIsInNldFdlYjMiLCJtYW5hZ2VyIiwic2V0TWFuYWdlciIsInZvdGVGYWN0b3J5Iiwic2V0Vm90ZUZhY3RvcnkiLCJncm91cHNJRCIsInNldEdyb3Vwc0lEIiwidGl0bGUiLCJzZXRUaXRsZSIsInN0YXJ0RGF0ZSIsInNldFN0YXJ0RGF0ZSIsImVuZERhdGUiLCJzZXRFbmREYXRlIiwiZWxlY3Rpb25UeXBlIiwic2V0RWxlY3Rpb25UeXBlIiwiZWxlY3Rpb25Hcm91cHMiLCJzZXRFbGVjdGlvbkdyb3VwcyIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJ1c2VFZmZlY3QiLCJ3ZWIzSW5zdGFuY2UiLCJpbml0V2ViMyIsImdldFdlYjMiLCJzZXR1cCIsImNvbnNvbGUiLCJsb2ciLCJldGgiLCJnZXRBY2NvdW50cyIsInVzZXIiLCJuZXQiLCJnZXRJZCIsIm5ldHdvcmtJZCIsImRlcGxveWVkTmV0d29yayIsIlZvdGVGYWN0b3J5Q29udHJhY3QiLCJuZXR3b3JrcyIsImluc3RhbmNlIiwiQ29udHJhY3QiLCJhYmkiLCJhZGRyZXNzIiwiYWxlcnQiLCJlcnJvciIsImRpc3BsYXlWb3RlcyIsImNvbnRyYWN0IiwibWV0aG9kcyIsImdldFVzZXJBbGxHcm91cHMiLCJjYWxsIiwicmVzcG9uc2UiLCJ0ZW1wIiwiaSIsImxlbmd0aCIsInBhcnNlSW50IiwiZWxlY3Rpb25UeXBlcyIsImtleSIsInRleHQiLCJ2YWx1ZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldHVwVm90ZUZhY3RvcnkiLCJmYWN0b3J5Q29udHJhY3QiLCJjcmVhdGVWb3RlIiwic2VuZCIsImZyb20iLCJnZXRFbGVjdGlvbkFkZHJlc3MiLCJnZXREZXBsb3llZFZvdGVzIiwiYWRkcmVzc09mVm90ZSIsImluaXRpYWxpemVFbGVjdGlvbiIsIlZvdGVDb250cmFjdCIsInZvdGVDb250cmFjdCIsInNldFVwRWxlY3Rpb24iLCJlZGl0RWxlY3Rpb24iLCJEYXRlIiwiZ2V0VGltZSIsImRpc3BsYXlWb3RlIiwiY3VycmVudEVsZWN0aW9uIiwic3VtbWFyeSIsIlJvdXRlciIsInB1c2giLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHO0FBQ2ZDLE9BQUssRUFBRSxLQURRO0FBRWZDLGNBQVksRUFBRSxJQUZDO0FBR2ZDLFVBQVEsRUFBRSxLQUhLO0FBSWZDLFdBQVMsRUFBRTtBQUpJLENBQW5CO0FBT0EsSUFBTUMsV0FBVyxHQUFHO0FBQ2hCQyxRQUFNLEVBQUU7QUFEUSxDQUFwQjs7QUFJQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBRUVDLHNEQUFRLENBQUMsRUFBRCxDQUZWO0FBQUEsTUFFZkMsSUFGZTtBQUFBLE1BRVRDLE9BRlM7O0FBQUEsbUJBR1FGLHNEQUFRLENBQUMsRUFBRCxDQUhoQjtBQUFBLE1BR2ZHLE9BSGU7QUFBQSxNQUdOQyxVQUhNOztBQUFBLG1CQUlnQkosc0RBQVEsQ0FBQyxFQUFELENBSnhCO0FBQUEsTUFJZkssV0FKZTtBQUFBLE1BSUZDLGNBSkU7O0FBQUEsbUJBS1VOLHNEQUFRLENBQUMsRUFBRCxDQUxsQjtBQUFBLE1BS2ZPLFFBTGU7QUFBQSxNQUtMQyxXQUxLOztBQUFBLG1CQVFJUixzREFBUSxDQUFDLEVBQUQsQ0FSWjtBQUFBLE1BUWZTLEtBUmU7QUFBQSxNQVFSQyxRQVJROztBQUFBLG1CQVNZVixzREFBUSxDQUFDLENBQUQs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QUFBQSxhQUFJMUMsZUFBZSxDQUFDMEMsS0FBSyxDQUFDc0IsTUFBTixDQUFheEIsS0FBZCxDQUFuQjtBQUFBLEtBTm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQTVCSixFQXNDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdENKLEVBdUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNEQUFELENBQU0sUUFBTjtBQUFlLFlBQVEsTUFBdkI7QUFDYSxTQUFLLEVBQUMsYUFEbkI7QUFHYSxTQUFLLEVBQUVyQyxXQUhwQjtBQUlhLFlBQVEsRUFBRSxrQkFBQXVDLEtBQUs7QUFBQSxhQUFJdEMsY0FBYyxDQUFDc0MsS0FBSyxDQUFDc0IsTUFBTixDQUFheEIsS0FBZCxDQUFsQjtBQUFBLEtBSjVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQXZDSixFQWdESTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaERKLEVBaURJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNEQUFELENBQU0sTUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosRUFFSSxNQUFDLHNEQUFELENBQU0sTUFBTjtBQUFhLFFBQUksRUFBQyxRQUFsQjtBQUEyQixZQUFRLEVBQUVDLFFBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkosQ0FqREosQ0FQSixDQURKO0FBa0VILENBek9EOztHQUFNMUQsVzs7S0FBQUEsVztBQTBPU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3RWxlY3Rpb24uYTc3ODBiNWRmZTI2OGNlZDE4ZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCBWb3RlRmFjdG9yeUNvbnRyYWN0IGZyb20gXCIuLi9jb250cmFjdHMvVm90ZUZhY3RvcnkuanNvblwiO1xyXG5pbXBvcnQgVm90ZUNvbnRyYWN0IGZyb20gXCIuLi9jb250cmFjdHMvVm90ZS5qc29uXCI7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IGdldFdlYjMgZnJvbSBcIi4uL2dldFdlYjNcIjtcclxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgYWRtaW5UaXRsZSA9IHtcclxuICAgIGNvbG9yOiBcInJlZFwiLFxyXG4gICAgbWFyZ2luQm90dG9tOiBcIjUlXCIsXHJcbiAgICBmb250U2l6ZTogXCIzZW1cIixcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIlxyXG59O1xyXG5cclxuY29uc3QgYWRtaW5GaWVsZHMgPSB7XHJcbiAgICBtYXJnaW46IFwiYXV0byA1JSBhdXRvIDUlXCJcclxufTtcclxuXHJcbmNvbnN0IE5ld0VsZWN0aW9uID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt3ZWIzLCBzZXRXZWIzXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFttYW5hZ2VyLCBzZXRNYW5hZ2VyXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt2b3RlRmFjdG9yeSwgc2V0Vm90ZUZhY3RvcnldID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2dyb3Vwc0lELCBzZXRHcm91cHNJRF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG5cclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbZWxlY3Rpb25UeXBlLCBzZXRFbGVjdGlvblR5cGVdID0gdXNlU3RhdGUoJ21ham9yaXR5Jyk7XHJcbiAgICBjb25zdCBbZWxlY3Rpb25Hcm91cHMsIHNldEVsZWN0aW9uR3JvdXBzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgXHJcbiAgICAvLyBpbml0aWFsaXppbmcgd2ViM1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB2YXIgd2ViM0luc3RhbmNlO1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGluaXRXZWIzKCkge1xyXG4gICAgICAgICAgICB3ZWIzSW5zdGFuY2UgPSBhd2FpdCBnZXRXZWIzKCk7XHJcbiAgICAgICAgICAgIHNldFdlYjMod2ViM0luc3RhbmNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5pdFdlYjMoKTtcclxuICAgIH0sW10pO1xyXG5cclxuICAgIC8vIEluaXRpYWxpemluZyBWb3RlRmFjdG9yeSBjb250cmFjdFxyXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgICAgICAgICBpZih3ZWIzID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5hYmxlIHRvIGdldCBmYWN0b3J5JylcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICB2YXIgW3VzZXJdID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICAgICAgICBzZXRNYW5hZ2VyKHVzZXIpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IFZvdGVGYWN0b3J5Q29udHJhY3QubmV0d29ya3NbbmV0d29ya0lkXTtcclxuICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgICAgICAgIFZvdGVGYWN0b3J5Q29udHJhY3QuYWJpLFxyXG4gICAgICAgICAgICAgICAgZGVwbG95ZWROZXR3b3JrICYmIGRlcGxveWVkTmV0d29yay5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgc2V0Vm90ZUZhY3RvcnkoaW5zdGFuY2UpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXR1cCgpO1xyXG5cclxuICAgIH0sW3dlYjNdKVxyXG5cclxuICAgIC8vIFJldHVybiBhbGwgZ3JvdXAgSURzIG9mIGEgdXNlciBhcyBhbiBhcnJheVxyXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgICAgIHZhciBkaXNwbGF5Vm90ZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYoY29udHJhY3QgPT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0VXNlckFsbEdyb3VwcygpLmNhbGwoKTtcclxuICAgICAgICBjb25zdCB0ZW1wID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXNwb25zZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0ZW1wW2ldID0gcGFyc2VJbnQocmVzcG9uc2VbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0ZW1wKTtcclxuICAgICAgICBzZXRHcm91cHNJRCh0ZW1wKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRpc3BsYXlWb3RlcygpO1xyXG4gICAgfSxbdm90ZUZhY3RvcnldKTtcclxuXHJcbiAgICBjb25zdCBlbGVjdGlvblR5cGVzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAga2V5OiAnc20nLFxyXG4gICAgICAgICAgICB0ZXh0OiAnc2ltcGxlIG1ham9yaXR5JyxcclxuICAgICAgICAgICAgdmFsdWU6ICdtYWpvcml0eSdcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleTogJ3R0JyxcclxuICAgICAgICAgICAgdGV4dDogJ3R3byB0aGlyZHMnLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ3R3b1RoaXJkcydcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIHZhciBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGZhY3RvcnlDb250cmFjdDtcclxuICAgICAgICB2YXIgdm90ZUNvbnRyYWN0O1xyXG4gICAgICAgIHZhciBhZGRyZXNzT2ZWb3RlO1xyXG4gICAgICAgIHZhciBzZXR1cFZvdGVGYWN0b3J5ID0gYXN5bmMgKCkgPT4geyAvL2luaXRpYWxpemVzIHZvdGVGYWN0b3J5XHJcbiAgICAgICAgICAgIGlmKHdlYjMgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjb250cmFjdCBpbnN0YW5jZS5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVwbG95ZWROZXR3b3JrID0gVm90ZUZhY3RvcnlDb250cmFjdC5uZXR3b3Jrc1tuZXR3b3JrSWRdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgVm90ZUZhY3RvcnlDb250cmFjdC5hYmksXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwbG95ZWROZXR3b3JrICYmIGRlcGxveWVkTmV0d29yay5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGZhY3RvcnlDb250cmFjdCA9IGluc3RhbmNlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDYXRjaCBhbnkgZXJyb3JzIGZvciBhbnkgb2YgdGhlIGFib3ZlIG9wZXJhdGlvbnMuXHJcbiAgICAgICAgICAgICAgICBhbGVydChcclxuICAgICAgICAgICAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBjcmVhdGVWb3RlID0gYXN5bmMgKCkgPT4gey8vdXNlcyB2b3RlRmFjdG9yeSB0byBjcmVhdGUgVm90ZVxyXG4gICAgICAgICAgICBpZihmYWN0b3J5Q29udHJhY3QgPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgdmFsdWUgZnJvbSB0aGUgY29udHJhY3QgdG8gcHJvdmUgaXQgd29ya2VkLlxyXG4gICAgICAgICAgICBhd2FpdCBmYWN0b3J5Q29udHJhY3QubWV0aG9kcy5jcmVhdGVWb3RlKDApLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgZnJvbTogbWFuYWdlclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBnZXRFbGVjdGlvbkFkZHJlc3MgPSBhc3luYyAoKSA9PiB7Ly9jYWxscyB2b3RlRmFjdG9yeSBtZXRob2QgdG8gZ2V0IG5ldyBWb3RlIGFkZHJlc3NcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmYWN0b3J5Q29udHJhY3QubWV0aG9kcy5nZXREZXBsb3llZFZvdGVzKCkuY2FsbCgpO1xyXG4gICAgICAgICAgICBhZGRyZXNzT2ZWb3RlID0gcmVzcG9uc2VbcmVzcG9uc2UubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgaW5pdGlhbGl6ZUVsZWN0aW9uID0gYXN5bmMgKCkgPT4gey8vaW5pdGlhbGl6ZXMgdm90ZSBjb250cmFjdFxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjb250cmFjdCBpbnN0YW5jZS5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gYXdhaXQgbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIFZvdGVDb250cmFjdC5hYmksXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc09mVm90ZSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB2b3RlQ29udHJhY3QgPSBpbnN0YW5jZTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cclxuICAgICAgICAgICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHNldFVwRWxlY3Rpb24gPSBhc3luYygpID0+IHsvL2NhbGwgdG8gdm90ZSBjb250cmFjdCB0byBlZGl0IGVsZWN0aW9uXHJcbiAgICAgICAgICAgIGlmICghdm90ZUNvbnRyYWN0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZvdGVDb250cmFjdCBkbmVcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXdhaXQgdm90ZUNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAgICAgICAgIC5lZGl0RWxlY3Rpb24odGl0bGUsIG5ldyBEYXRlKHN0YXJ0RGF0ZSkuZ2V0VGltZSgpLCBuZXcgRGF0ZShlbmREYXRlKS5nZXRUaW1lKCksIGRlc2NyaXB0aW9uLCBlbGVjdGlvblR5cGUpXHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogbWFuYWdlclxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgZGlzcGxheVZvdGUgPSBhc3luYyAoKSA9PiB7IC8vIHRlc3RpbmcgcHVycG9zZXNcclxuICAgICAgICAgICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IHZvdGVDb250cmFjdC5tZXRob2RzLmN1cnJlbnRFbGVjdGlvbigpLmNhbGwoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3VtbWFyeSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBhd2FpdCBzZXR1cFZvdGVGYWN0b3J5KCk7XHJcbiAgICAgICAgYXdhaXQgY3JlYXRlVm90ZSgpO1xyXG4gICAgICAgIGF3YWl0IGdldEVsZWN0aW9uQWRkcmVzcygpO1xyXG4gICAgICAgIGF3YWl0IGluaXRpYWxpemVFbGVjdGlvbigpO1xyXG4gICAgICAgIGF3YWl0IHNldFVwRWxlY3Rpb24oKTtcclxuICAgICAgICBhd2FpdCBkaXNwbGF5Vm90ZSgpO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGgxIHN0eWxlPXthZG1pblRpdGxlfT5OZXcgRWxlY3Rpb248L2gxPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBzdHlsZT17YWRtaW5GaWVsZHN9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dCByZXF1aXJlZCBsYWJlbD1cIkVsZWN0aW9uIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0VGl0bGUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiU3RhcnQgZGF0ZVwiIHR5cGU9XCJkYXRlXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRTdGFydERhdGUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0IHJlcXVpcmVkIGxhYmVsPVwiRW5kIGRhdGVcIiB0eXBlPVwiZGF0ZVwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW5kRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldEVuZERhdGUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uU2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdUeXBlIG9mIGVsZWN0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtlbGVjdGlvblR5cGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVHlwZSBvZiBlbGVjdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VsZWN0aW9uVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldEVsZWN0aW9uVHlwZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5UZXh0QXJlYSByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldERlc2NyaXB0aW9uKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5CdXR0b24+Q2FuY2VsPC9Gb3JtLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5CdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uU3VibWl0PXtvblN1Ym1pdH0+UHVibGlzaCBFbGVjdGlvbjwvRm9ybS5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE5ld0VsZWN0aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9