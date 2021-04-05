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
      setGroupsId = _useState4[1];

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
  }, [contract]);
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

_s(NewElection, "dkT88oHZMlH/+JnEqS559gqvbS8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL25ld0VsZWN0aW9uLmpzIl0sIm5hbWVzIjpbImFkbWluVGl0bGUiLCJjb2xvciIsIm1hcmdpbkJvdHRvbSIsImZvbnRTaXplIiwidGV4dEFsaWduIiwiYWRtaW5GaWVsZHMiLCJtYXJnaW4iLCJOZXdFbGVjdGlvbiIsInVzZVN0YXRlIiwid2ViMyIsInNldFdlYjMiLCJtYW5hZ2VyIiwic2V0TWFuYWdlciIsInZvdGVGYWN0b3J5Iiwic2V0Vm90ZUZhY3RvcnkiLCJncm91cHNJRCIsInNldEdyb3Vwc0lkIiwidGl0bGUiLCJzZXRUaXRsZSIsInN0YXJ0RGF0ZSIsInNldFN0YXJ0RGF0ZSIsImVuZERhdGUiLCJzZXRFbmREYXRlIiwiZWxlY3Rpb25UeXBlIiwic2V0RWxlY3Rpb25UeXBlIiwiZWxlY3Rpb25Hcm91cHMiLCJzZXRFbGVjdGlvbkdyb3VwcyIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJ1c2VFZmZlY3QiLCJ3ZWIzSW5zdGFuY2UiLCJpbml0V2ViMyIsImdldFdlYjMiLCJzZXR1cCIsImNvbnNvbGUiLCJsb2ciLCJldGgiLCJnZXRBY2NvdW50cyIsInVzZXIiLCJuZXQiLCJnZXRJZCIsIm5ldHdvcmtJZCIsImRlcGxveWVkTmV0d29yayIsIlZvdGVGYWN0b3J5Q29udHJhY3QiLCJuZXR3b3JrcyIsImluc3RhbmNlIiwiQ29udHJhY3QiLCJhYmkiLCJhZGRyZXNzIiwiYWxlcnQiLCJlcnJvciIsImRpc3BsYXlWb3RlcyIsImNvbnRyYWN0IiwibWV0aG9kcyIsImdldFVzZXJBbGxHcm91cHMiLCJjYWxsIiwicmVzcG9uc2UiLCJ0ZW1wIiwiaSIsImxlbmd0aCIsInBhcnNlSW50Iiwic2V0R3JvdXBzSUQiLCJlbGVjdGlvblR5cGVzIiwia2V5IiwidGV4dCIsInZhbHVlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0dXBWb3RlRmFjdG9yeSIsImZhY3RvcnlDb250cmFjdCIsImNyZWF0ZVZvdGUiLCJzZW5kIiwiZnJvbSIsImdldEVsZWN0aW9uQWRkcmVzcyIsImdldERlcGxveWVkVm90ZXMiLCJhZGRyZXNzT2ZWb3RlIiwiaW5pdGlhbGl6ZUVsZWN0aW9uIiwiVm90ZUNvbnRyYWN0Iiwidm90ZUNvbnRyYWN0Iiwic2V0VXBFbGVjdGlvbiIsImVkaXRFbGVjdGlvbiIsIkRhdGUiLCJnZXRUaW1lIiwiZGlzcGxheVZvdGUiLCJjdXJyZW50RWxlY3Rpb24iLCJzdW1tYXJ5IiwiUm91dGVyIiwicHVzaCIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUc7QUFDZkMsT0FBSyxFQUFFLEtBRFE7QUFFZkMsY0FBWSxFQUFFLElBRkM7QUFHZkMsVUFBUSxFQUFFLEtBSEs7QUFJZkMsV0FBUyxFQUFFO0FBSkksQ0FBbkI7QUFPQSxJQUFNQyxXQUFXLEdBQUc7QUFDaEJDLFFBQU0sRUFBRTtBQURRLENBQXBCOztBQUlBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFFRUMsc0RBQVEsQ0FBQyxFQUFELENBRlY7QUFBQSxNQUVmQyxJQUZlO0FBQUEsTUFFVEMsT0FGUzs7QUFBQSxtQkFHUUYsc0RBQVEsQ0FBQyxFQUFELENBSGhCO0FBQUEsTUFHZkcsT0FIZTtBQUFBLE1BR05DLFVBSE07O0FBQUEsbUJBSWdCSixzREFBUSxDQUFDLEVBQUQsQ0FKeEI7QUFBQSxNQUlmSyxXQUplO0FBQUEsTUFJRkMsY0FKRTs7QUFBQSxtQkFLVU4sc0RBQVEsQ0FBQyxFQUFELENBTGxCO0FBQUEsTUFLZk8sUUFMZTtBQUFBLE1BS0xDLFdBTEs7O0FBQUEsbUJBUUlSLHNEQUFRLENBQUMsRUFBRCxDQVJaO0FBQUEsTUFRZlMsS0FSZTtBQUFBLE1BUVJDLFFBUlE7O0FBQUEsbUJBU1lWLHNE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QUE0QyxLQUFLO0FBQUEsYUFBSTNDLGVBQWUsQ0FBQzJDLEtBQUssQ0FBQ3NCLE1BQU4sQ0FBYXhCLEtBQWQsQ0FBbkI7QUFBQSxLQU5uQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0E1QkosRUFzQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRDSixFQXVDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzREFBRCxDQUFNLFFBQU47QUFBZSxZQUFRLE1BQXZCO0FBQ2EsU0FBSyxFQUFDLGFBRG5CO0FBR2EsU0FBSyxFQUFFdEMsV0FIcEI7QUFJYSxZQUFRLEVBQUUsa0JBQUF3QyxLQUFLO0FBQUEsYUFBSXZDLGNBQWMsQ0FBQ3VDLEtBQUssQ0FBQ3NCLE1BQU4sQ0FBYXhCLEtBQWQsQ0FBbEI7QUFBQSxLQUo1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0F2Q0osRUFnREk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhESixFQWlESTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzREFBRCxDQUFNLE1BQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUksTUFBQyxzREFBRCxDQUFNLE1BQU47QUFBYSxRQUFJLEVBQUMsUUFBbEI7QUFBMkIsWUFBUSxFQUFFQyxRQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZKLENBakRKLENBUEosQ0FESjtBQWtFSCxDQXpPRDs7R0FBTTNELFc7O0tBQUFBLFc7QUEwT1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ld0VsZWN0aW9uLmUxYjE0MzgxZTliN2U2M2VlNmI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5pbXBvcnQgVm90ZUZhY3RvcnlDb250cmFjdCBmcm9tIFwiLi4vY29udHJhY3RzL1ZvdGVGYWN0b3J5Lmpzb25cIjtcclxuaW1wb3J0IFZvdGVDb250cmFjdCBmcm9tIFwiLi4vY29udHJhY3RzL1ZvdGUuanNvblwiO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi9nZXRXZWIzXCI7XHJcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IGFkbWluVGl0bGUgPSB7XHJcbiAgICBjb2xvcjogXCJyZWRcIixcclxuICAgIG1hcmdpbkJvdHRvbTogXCI1JVwiLFxyXG4gICAgZm9udFNpemU6IFwiM2VtXCIsXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcclxufTtcclxuXHJcbmNvbnN0IGFkbWluRmllbGRzID0ge1xyXG4gICAgbWFyZ2luOiBcImF1dG8gNSUgYXV0byA1JVwiXHJcbn07XHJcblxyXG5jb25zdCBOZXdFbGVjdGlvbiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbd2ViMywgc2V0V2ViM10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbWFuYWdlciwgc2V0TWFuYWdlcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdm90ZUZhY3RvcnksIHNldFZvdGVGYWN0b3J5XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtncm91cHNJRCwgc2V0R3JvdXBzSWRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuXHJcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzdGFydERhdGUsIHNldFN0YXJ0RGF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtlbmREYXRlLCBzZXRFbmREYXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2VsZWN0aW9uVHlwZSwgc2V0RWxlY3Rpb25UeXBlXSA9IHVzZVN0YXRlKCdtYWpvcml0eScpO1xyXG4gICAgY29uc3QgW2VsZWN0aW9uR3JvdXBzLCBzZXRFbGVjdGlvbkdyb3Vwc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIFxyXG4gICAgLy8gaW5pdGlhbGl6aW5nIHdlYjNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgdmFyIHdlYjNJbnN0YW5jZTtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBpbml0V2ViMygpIHtcclxuICAgICAgICAgICAgd2ViM0luc3RhbmNlID0gYXdhaXQgZ2V0V2ViMygpO1xyXG4gICAgICAgICAgICBzZXRXZWIzKHdlYjNJbnN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluaXRXZWIzKCk7XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXppbmcgVm90ZUZhY3RvcnkgY29udHJhY3RcclxuICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBzZXR1cCgpIHtcclxuICAgICAgICAgICAgaWYod2ViMyA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuYWJsZSB0byBnZXQgZmFjdG9yeScpXHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgdmFyIFt1c2VyXSA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgICAgICAgc2V0TWFuYWdlcih1c2VyKTtcclxuICAgICAgICAgICAgICBjb25zdCBuZXR3b3JrSWQgPSBhd2FpdCB3ZWIzLmV0aC5uZXQuZ2V0SWQoKTtcclxuICAgICAgICAgICAgICBjb25zdCBkZXBsb3llZE5ldHdvcmsgPSBWb3RlRmFjdG9yeUNvbnRyYWN0Lm5ldHdvcmtzW25ldHdvcmtJZF07XHJcbiAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXHJcbiAgICAgICAgICAgICAgICBWb3RlRmFjdG9yeUNvbnRyYWN0LmFiaSxcclxuICAgICAgICAgICAgICAgIGRlcGxveWVkTmV0d29yayAmJiBkZXBsb3llZE5ldHdvcmsuYWRkcmVzcyxcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIHNldFZvdGVGYWN0b3J5KGluc3RhbmNlKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0dXAoKTtcclxuXHJcbiAgICB9LFt3ZWIzXSlcclxuXHJcbiAgICAvLyBSZXR1cm4gYWxsIGdyb3VwIElEcyBvZiBhIHVzZXIgYXMgYW4gYXJyYXlcclxuICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAgICB2YXIgZGlzcGxheVZvdGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmKGNvbnRyYWN0ID09ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmdldFVzZXJBbGxHcm91cHMoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc3QgdGVtcCA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzcG9uc2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGVtcFtpXSA9IHBhcnNlSW50KHJlc3BvbnNlW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGVtcCk7XHJcbiAgICAgICAgc2V0R3JvdXBzSUQodGVtcCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkaXNwbGF5Vm90ZXMoKTtcclxuICAgIH0sW2NvbnRyYWN0XSk7XHJcblxyXG4gICAgY29uc3QgZWxlY3Rpb25UeXBlcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleTogJ3NtJyxcclxuICAgICAgICAgICAgdGV4dDogJ3NpbXBsZSBtYWpvcml0eScsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnbWFqb3JpdHknXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBrZXk6ICd0dCcsXHJcbiAgICAgICAgICAgIHRleHQ6ICd0d28gdGhpcmRzJyxcclxuICAgICAgICAgICAgdmFsdWU6ICd0d29UaGlyZHMnXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICB2YXIgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBmYWN0b3J5Q29udHJhY3Q7XHJcbiAgICAgICAgdmFyIHZvdGVDb250cmFjdDtcclxuICAgICAgICB2YXIgYWRkcmVzc09mVm90ZTtcclxuICAgICAgICB2YXIgc2V0dXBWb3RlRmFjdG9yeSA9IGFzeW5jICgpID0+IHsgLy9pbml0aWFsaXplcyB2b3RlRmFjdG9yeVxyXG4gICAgICAgICAgICBpZih3ZWIzID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXR3b3JrSWQgPSBhd2FpdCB3ZWIzLmV0aC5uZXQuZ2V0SWQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IFZvdGVGYWN0b3J5Q29udHJhY3QubmV0d29ya3NbbmV0d29ya0lkXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIFZvdGVGYWN0b3J5Q29udHJhY3QuYWJpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlcGxveWVkTmV0d29yayAmJiBkZXBsb3llZE5ldHdvcmsuYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBmYWN0b3J5Q29udHJhY3QgPSBpbnN0YW5jZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgd2ViMywgYWNjb3VudHMsIGFuZCBjb250cmFjdCB0byB0aGUgc3RhdGUsIGFuZCB0aGVuIHByb2NlZWQgd2l0aCBhblxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxyXG4gICAgICAgICAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgY3JlYXRlVm90ZSA9IGFzeW5jICgpID0+IHsvL3VzZXMgdm90ZUZhY3RvcnkgdG8gY3JlYXRlIFZvdGVcclxuICAgICAgICAgICAgaWYoZmFjdG9yeUNvbnRyYWN0ID09ICcnKXtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIHZhbHVlIGZyb20gdGhlIGNvbnRyYWN0IHRvIHByb3ZlIGl0IHdvcmtlZC5cclxuICAgICAgICAgICAgYXdhaXQgZmFjdG9yeUNvbnRyYWN0Lm1ldGhvZHMuY3JlYXRlVm90ZSgwKS5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGZyb206IG1hbmFnZXJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgZ2V0RWxlY3Rpb25BZGRyZXNzID0gYXN5bmMgKCkgPT4gey8vY2FsbHMgdm90ZUZhY3RvcnkgbWV0aG9kIHRvIGdldCBuZXcgVm90ZSBhZGRyZXNzXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmFjdG9yeUNvbnRyYWN0Lm1ldGhvZHMuZ2V0RGVwbG95ZWRWb3RlcygpLmNhbGwoKTtcclxuICAgICAgICAgICAgYWRkcmVzc09mVm90ZSA9IHJlc3BvbnNlW3Jlc3BvbnNlLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGluaXRpYWxpemVFbGVjdGlvbiA9IGFzeW5jICgpID0+IHsvL2luaXRpYWxpemVzIHZvdGUgY29udHJhY3RcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IGF3YWl0IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgICAgICAgICAgICBWb3RlQ29udHJhY3QuYWJpLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NPZlZvdGUsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdm90ZUNvbnRyYWN0ID0gaW5zdGFuY2U7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDYXRjaCBhbnkgZXJyb3JzIGZvciBhbnkgb2YgdGhlIGFib3ZlIG9wZXJhdGlvbnMuXHJcbiAgICAgICAgICAgICAgICBhbGVydChcclxuICAgICAgICAgICAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBzZXRVcEVsZWN0aW9uID0gYXN5bmMoKSA9PiB7Ly9jYWxsIHRvIHZvdGUgY29udHJhY3QgdG8gZWRpdCBlbGVjdGlvblxyXG4gICAgICAgICAgICBpZiAoIXZvdGVDb250cmFjdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2b3RlQ29udHJhY3QgZG5lXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF3YWl0IHZvdGVDb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgICAgICAgICAuZWRpdEVsZWN0aW9uKHRpdGxlLCBuZXcgRGF0ZShzdGFydERhdGUpLmdldFRpbWUoKSwgbmV3IERhdGUoZW5kRGF0ZSkuZ2V0VGltZSgpLCBkZXNjcmlwdGlvbiwgZWxlY3Rpb25UeXBlKVxyXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IG1hbmFnZXJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGRpc3BsYXlWb3RlID0gYXN5bmMgKCkgPT4geyAvLyB0ZXN0aW5nIHB1cnBvc2VzXHJcbiAgICAgICAgICAgIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCB2b3RlQ29udHJhY3QubWV0aG9kcy5jdXJyZW50RWxlY3Rpb24oKS5jYWxsKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1bW1hcnkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYXdhaXQgc2V0dXBWb3RlRmFjdG9yeSgpO1xyXG4gICAgICAgIGF3YWl0IGNyZWF0ZVZvdGUoKTtcclxuICAgICAgICBhd2FpdCBnZXRFbGVjdGlvbkFkZHJlc3MoKTtcclxuICAgICAgICBhd2FpdCBpbml0aWFsaXplRWxlY3Rpb24oKTtcclxuICAgICAgICBhd2FpdCBzZXRVcEVsZWN0aW9uKCk7XHJcbiAgICAgICAgYXdhaXQgZGlzcGxheVZvdGUoKTtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxoMSBzdHlsZT17YWRtaW5UaXRsZX0+TmV3IEVsZWN0aW9uPC9oMT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gc3R5bGU9e2FkbWluRmllbGRzfT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXQgcmVxdWlyZWQgbGFiZWw9XCJFbGVjdGlvbiB0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldFRpdGxlKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIlN0YXJ0IGRhdGVcIiB0eXBlPVwiZGF0ZVwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhcnREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0U3RhcnREYXRlKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dCByZXF1aXJlZCBsYWJlbD1cIkVuZCBkYXRlXCIgdHlwZT1cImRhdGVcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRFbmREYXRlKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLlNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nVHlwZSBvZiBlbGVjdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZWxlY3Rpb25UeXBlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1R5cGUgb2YgZWxlY3Rpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbGVjdGlvblR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRFbGVjdGlvblR5cGUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uVGV4dEFyZWEgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEZXNjcmlwdGlvblwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXREZXNjcmlwdGlvbihldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQnV0dG9uPkNhbmNlbDwvRm9ybS5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvblN1Ym1pdD17b25TdWJtaXR9PlB1Ymxpc2ggRWxlY3Rpb248L0Zvcm0uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBOZXdFbGVjdGlvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==