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
      title = _useState4[0],
      setTitle = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      startDate = _useState5[0],
      setStartDate = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      endDate = _useState6[0],
      setEndDate = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('majority'),
      electionType = _useState7[0],
      setElectionType = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      electionGroups = _useState8[0],
      setElectionGroups = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      description = _useState9[0],
      setDescription = _useState9[1]; // initializing web3


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
      lineNumber: 189,
      columnNumber: 13
    }
  }), __jsx("br", {
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
  }), __jsx("h1", {
    style: adminTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }
  }, "New Election"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"], {
    onSubmit: onSubmit,
    style: adminFields,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
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
      lineNumber: 197,
      columnNumber: 21
    }
  })), __jsx("br", {
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
      lineNumber: 206,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
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
      lineNumber: 216,
      columnNumber: 21
    }
  })), __jsx("br", {
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
      lineNumber: 224,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
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
      lineNumber: 235,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Button, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 21
    }
  }, "Cancel"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Button, {
    type: "submit",
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 21
    }
  }, "Publish Election"))));
};

_s(NewElection, "Y1VVD5N69+m9/mrKhIMupl6U7uU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL25ld0VsZWN0aW9uLmpzIl0sIm5hbWVzIjpbImFkbWluVGl0bGUiLCJjb2xvciIsIm1hcmdpbkJvdHRvbSIsImZvbnRTaXplIiwidGV4dEFsaWduIiwiYWRtaW5GaWVsZHMiLCJtYXJnaW4iLCJOZXdFbGVjdGlvbiIsInVzZVN0YXRlIiwid2ViMyIsInNldFdlYjMiLCJtYW5hZ2VyIiwic2V0TWFuYWdlciIsInZvdGVGYWN0b3J5Iiwic2V0Vm90ZUZhY3RvcnkiLCJ0aXRsZSIsInNldFRpdGxlIiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJlbGVjdGlvblR5cGUiLCJzZXRFbGVjdGlvblR5cGUiLCJlbGVjdGlvbkdyb3VwcyIsInNldEVsZWN0aW9uR3JvdXBzIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsInVzZUVmZmVjdCIsIndlYjNJbnN0YW5jZSIsImluaXRXZWIzIiwiZ2V0V2ViMyIsInNldHVwIiwiY29uc29sZSIsImxvZyIsImV0aCIsImdldEFjY291bnRzIiwidXNlciIsIm5ldCIsImdldElkIiwibmV0d29ya0lkIiwiZGVwbG95ZWROZXR3b3JrIiwiVm90ZUZhY3RvcnlDb250cmFjdCIsIm5ldHdvcmtzIiwiaW5zdGFuY2UiLCJDb250cmFjdCIsImFiaSIsImFkZHJlc3MiLCJhbGVydCIsImVycm9yIiwiZGlzcGxheVZvdGVzIiwiY29udHJhY3QiLCJtZXRob2RzIiwiZ2V0VXNlckFsbEdyb3VwcyIsImNhbGwiLCJyZXNwb25zZSIsInRlbXAiLCJpIiwibGVuZ3RoIiwicGFyc2VJbnQiLCJzZXRHcm91cHNJRCIsImVsZWN0aW9uVHlwZXMiLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXR1cFZvdGVGYWN0b3J5IiwiZmFjdG9yeUNvbnRyYWN0IiwiY3JlYXRlVm90ZSIsInNlbmQiLCJmcm9tIiwiZ2V0RWxlY3Rpb25BZGRyZXNzIiwiZ2V0RGVwbG95ZWRWb3RlcyIsImFkZHJlc3NPZlZvdGUiLCJpbml0aWFsaXplRWxlY3Rpb24iLCJWb3RlQ29udHJhY3QiLCJ2b3RlQ29udHJhY3QiLCJzZXRVcEVsZWN0aW9uIiwiZWRpdEVsZWN0aW9uIiwiRGF0ZSIsImdldFRpbWUiLCJkaXNwbGF5Vm90ZSIsImN1cnJlbnRFbGVjdGlvbiIsInN1bW1hcnkiLCJSb3V0ZXIiLCJwdXNoIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRztBQUNmQyxPQUFLLEVBQUUsS0FEUTtBQUVmQyxjQUFZLEVBQUUsSUFGQztBQUdmQyxVQUFRLEVBQUUsS0FISztBQUlmQyxXQUFTLEVBQUU7QUFKSSxDQUFuQjtBQU9BLElBQU1DLFdBQVcsR0FBRztBQUNoQkMsUUFBTSxFQUFFO0FBRFEsQ0FBcEI7O0FBSUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUVFQyxzREFBUSxDQUFDLEVBQUQsQ0FGVjtBQUFBLE1BRWZDLElBRmU7QUFBQSxNQUVUQyxPQUZTOztBQUFBLG1CQUdRRixzREFBUSxDQUFDLEVBQUQsQ0FIaEI7QUFBQSxNQUdmRyxPQUhlO0FBQUEsTUFHTkMsVUFITTs7QUFBQSxtQkFJZ0JKLHNEQUFRLENBQUMsRUFBRCxDQUp4QjtBQUFBLE1BSWZLLFdBSmU7QUFBQSxNQUlGQyxjQUpFOztBQUFBLG1CQU9JTixzREFBUSxDQUFDLEVBQUQsQ0FQWjtBQUFBLE1BT2ZPLEtBUGU7QUFBQSxNQU9SQyxRQVBROztBQUFBLG1CQVFZUixzREFBUSxDQUFDLENBQUQsQ0FScEI7QUFBQSxNQVFmUyxTQVJlO0FBQUEsTUFRSkMsWUFSSTs7QUFBQSxtQkFTUVYsc0RBQVEsQ0FBQyxDQUFELENBVGhCO0FBQUEs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QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBNUJKLEVBc0NJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0Q0osRUF1Q0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQsQ0FBTSxRQUFOO0FBQWUsWUFBUSxNQUF2QjtBQUNhLFNBQUssRUFBQyxhQURuQjtBQUdhLFNBQUssRUFBRXRDLFdBSHBCO0FBSWEsWUFBUSxFQUFFLGtCQUFBd0MsS0FBSztBQUFBLGFBQUl2QyxjQUFjLENBQUN1QyxLQUFLLENBQUNzQixNQUFOLENBQWF4QixLQUFkLENBQWxCO0FBQUEsS0FKNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBdkNKLEVBZ0RJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoREosRUFpREk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVJLE1BQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsUUFBSSxFQUFDLFFBQWxCO0FBQTJCLFlBQVEsRUFBRUMsUUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSixDQWpESixDQVBKLENBREo7QUFrRUgsQ0F4T0Q7O0dBQU16RCxXOztLQUFBQSxXO0FBeU9TQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXdFbGVjdGlvbi5kYjZjN2NhMzE0Y2M5Yzg1ZjQxNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuaW1wb3J0IFZvdGVGYWN0b3J5Q29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlRmFjdG9yeS5qc29uXCI7XHJcbmltcG9ydCBWb3RlQ29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlLmpzb25cIjtcclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgZ2V0V2ViMyBmcm9tIFwiLi4vZ2V0V2ViM1wiO1xyXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBhZG1pblRpdGxlID0ge1xyXG4gICAgY29sb3I6IFwicmVkXCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiNSVcIixcclxuICAgIGZvbnRTaXplOiBcIjNlbVwiLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiXHJcbn07XHJcblxyXG5jb25zdCBhZG1pbkZpZWxkcyA9IHtcclxuICAgIG1hcmdpbjogXCJhdXRvIDUlIGF1dG8gNSVcIlxyXG59O1xyXG5cclxuY29uc3QgTmV3RWxlY3Rpb24gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3dlYjMsIHNldFdlYjNdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW21hbmFnZXIsIHNldE1hbmFnZXJdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZvdGVGYWN0b3J5LCBzZXRWb3RlRmFjdG9yeV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG5cclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbZWxlY3Rpb25UeXBlLCBzZXRFbGVjdGlvblR5cGVdID0gdXNlU3RhdGUoJ21ham9yaXR5Jyk7XHJcbiAgICBjb25zdCBbZWxlY3Rpb25Hcm91cHMsIHNldEVsZWN0aW9uR3JvdXBzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgXHJcbiAgICAvLyBpbml0aWFsaXppbmcgd2ViM1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB2YXIgd2ViM0luc3RhbmNlO1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGluaXRXZWIzKCkge1xyXG4gICAgICAgICAgICB3ZWIzSW5zdGFuY2UgPSBhd2FpdCBnZXRXZWIzKCk7XHJcbiAgICAgICAgICAgIHNldFdlYjMod2ViM0luc3RhbmNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5pdFdlYjMoKTtcclxuICAgIH0sW10pO1xyXG5cclxuICAgIC8vIEluaXRpYWxpemluZyBWb3RlRmFjdG9yeSBjb250cmFjdFxyXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgICAgICAgICBpZih3ZWIzID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5hYmxlIHRvIGdldCBmYWN0b3J5JylcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICB2YXIgW3VzZXJdID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICAgICAgICBzZXRNYW5hZ2VyKHVzZXIpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IFZvdGVGYWN0b3J5Q29udHJhY3QubmV0d29ya3NbbmV0d29ya0lkXTtcclxuICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgICAgICAgIFZvdGVGYWN0b3J5Q29udHJhY3QuYWJpLFxyXG4gICAgICAgICAgICAgICAgZGVwbG95ZWROZXR3b3JrICYmIGRlcGxveWVkTmV0d29yay5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgc2V0Vm90ZUZhY3RvcnkoaW5zdGFuY2UpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXR1cCgpO1xyXG5cclxuICAgIH0sW3dlYjNdKVxyXG5cclxuICAgIC8vIFJldHVybiBhbGwgZ3JvdXAgSURzIG9mIGEgdXNlciBhcyBhbiBhcnJheVxyXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgICAgIHZhciBkaXNwbGF5Vm90ZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYoY29udHJhY3QgPT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0VXNlckFsbEdyb3VwcygpLmNhbGwoKTtcclxuICAgICAgICBjb25zdCB0ZW1wID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXNwb25zZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0ZW1wW2ldID0gcGFyc2VJbnQocmVzcG9uc2VbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0ZW1wKTtcclxuICAgICAgICBzZXRHcm91cHNJRCh0ZW1wKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRpc3BsYXlWb3RlcygpO1xyXG4gICAgfSxbY29udHJhY3RdKTtcclxuXHJcbiAgICBjb25zdCBlbGVjdGlvblR5cGVzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAga2V5OiAnc20nLFxyXG4gICAgICAgICAgICB0ZXh0OiAnc2ltcGxlIG1ham9yaXR5JyxcclxuICAgICAgICAgICAgdmFsdWU6ICdtYWpvcml0eSdcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleTogJ3R0JyxcclxuICAgICAgICAgICAgdGV4dDogJ3R3byB0aGlyZHMnLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ3R3b1RoaXJkcydcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIHZhciBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGZhY3RvcnlDb250cmFjdDtcclxuICAgICAgICB2YXIgdm90ZUNvbnRyYWN0O1xyXG4gICAgICAgIHZhciBhZGRyZXNzT2ZWb3RlO1xyXG4gICAgICAgIHZhciBzZXR1cFZvdGVGYWN0b3J5ID0gYXN5bmMgKCkgPT4geyAvL2luaXRpYWxpemVzIHZvdGVGYWN0b3J5XHJcbiAgICAgICAgICAgIGlmKHdlYjMgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjb250cmFjdCBpbnN0YW5jZS5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVwbG95ZWROZXR3b3JrID0gVm90ZUZhY3RvcnlDb250cmFjdC5uZXR3b3Jrc1tuZXR3b3JrSWRdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgVm90ZUZhY3RvcnlDb250cmFjdC5hYmksXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwbG95ZWROZXR3b3JrICYmIGRlcGxveWVkTmV0d29yay5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGZhY3RvcnlDb250cmFjdCA9IGluc3RhbmNlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDYXRjaCBhbnkgZXJyb3JzIGZvciBhbnkgb2YgdGhlIGFib3ZlIG9wZXJhdGlvbnMuXHJcbiAgICAgICAgICAgICAgICBhbGVydChcclxuICAgICAgICAgICAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBjcmVhdGVWb3RlID0gYXN5bmMgKCkgPT4gey8vdXNlcyB2b3RlRmFjdG9yeSB0byBjcmVhdGUgVm90ZVxyXG4gICAgICAgICAgICBpZihmYWN0b3J5Q29udHJhY3QgPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgdmFsdWUgZnJvbSB0aGUgY29udHJhY3QgdG8gcHJvdmUgaXQgd29ya2VkLlxyXG4gICAgICAgICAgICBhd2FpdCBmYWN0b3J5Q29udHJhY3QubWV0aG9kcy5jcmVhdGVWb3RlKDApLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgZnJvbTogbWFuYWdlclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBnZXRFbGVjdGlvbkFkZHJlc3MgPSBhc3luYyAoKSA9PiB7Ly9jYWxscyB2b3RlRmFjdG9yeSBtZXRob2QgdG8gZ2V0IG5ldyBWb3RlIGFkZHJlc3NcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmYWN0b3J5Q29udHJhY3QubWV0aG9kcy5nZXREZXBsb3llZFZvdGVzKCkuY2FsbCgpO1xyXG4gICAgICAgICAgICBhZGRyZXNzT2ZWb3RlID0gcmVzcG9uc2VbcmVzcG9uc2UubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgaW5pdGlhbGl6ZUVsZWN0aW9uID0gYXN5bmMgKCkgPT4gey8vaW5pdGlhbGl6ZXMgdm90ZSBjb250cmFjdFxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjb250cmFjdCBpbnN0YW5jZS5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gYXdhaXQgbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIFZvdGVDb250cmFjdC5hYmksXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc09mVm90ZSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB2b3RlQ29udHJhY3QgPSBpbnN0YW5jZTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cclxuICAgICAgICAgICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHNldFVwRWxlY3Rpb24gPSBhc3luYygpID0+IHsvL2NhbGwgdG8gdm90ZSBjb250cmFjdCB0byBlZGl0IGVsZWN0aW9uXHJcbiAgICAgICAgICAgIGlmICghdm90ZUNvbnRyYWN0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZvdGVDb250cmFjdCBkbmVcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXdhaXQgdm90ZUNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAgICAgICAgIC5lZGl0RWxlY3Rpb24odGl0bGUsIG5ldyBEYXRlKHN0YXJ0RGF0ZSkuZ2V0VGltZSgpLCBuZXcgRGF0ZShlbmREYXRlKS5nZXRUaW1lKCksIGRlc2NyaXB0aW9uLCBlbGVjdGlvblR5cGUpXHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogbWFuYWdlclxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgZGlzcGxheVZvdGUgPSBhc3luYyAoKSA9PiB7IC8vIHRlc3RpbmcgcHVycG9zZXNcclxuICAgICAgICAgICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IHZvdGVDb250cmFjdC5tZXRob2RzLmN1cnJlbnRFbGVjdGlvbigpLmNhbGwoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3VtbWFyeSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBhd2FpdCBzZXR1cFZvdGVGYWN0b3J5KCk7XHJcbiAgICAgICAgYXdhaXQgY3JlYXRlVm90ZSgpO1xyXG4gICAgICAgIGF3YWl0IGdldEVsZWN0aW9uQWRkcmVzcygpO1xyXG4gICAgICAgIGF3YWl0IGluaXRpYWxpemVFbGVjdGlvbigpO1xyXG4gICAgICAgIGF3YWl0IHNldFVwRWxlY3Rpb24oKTtcclxuICAgICAgICBhd2FpdCBkaXNwbGF5Vm90ZSgpO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGgxIHN0eWxlPXthZG1pblRpdGxlfT5OZXcgRWxlY3Rpb248L2gxPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBzdHlsZT17YWRtaW5GaWVsZHN9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dCByZXF1aXJlZCBsYWJlbD1cIkVsZWN0aW9uIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0VGl0bGUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiU3RhcnQgZGF0ZVwiIHR5cGU9XCJkYXRlXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRTdGFydERhdGUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0IHJlcXVpcmVkIGxhYmVsPVwiRW5kIGRhdGVcIiB0eXBlPVwiZGF0ZVwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW5kRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldEVuZERhdGUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uU2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdUeXBlIG9mIGVsZWN0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtlbGVjdGlvblR5cGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVHlwZSBvZiBlbGVjdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VsZWN0aW9uVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldEVsZWN0aW9uVHlwZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5UZXh0QXJlYSByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldERlc2NyaXB0aW9uKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5CdXR0b24+Q2FuY2VsPC9Gb3JtLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5CdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uU3VibWl0PXtvblN1Ym1pdH0+UHVibGlzaCBFbGVjdGlvbjwvRm9ybS5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE5ld0VsZWN0aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9