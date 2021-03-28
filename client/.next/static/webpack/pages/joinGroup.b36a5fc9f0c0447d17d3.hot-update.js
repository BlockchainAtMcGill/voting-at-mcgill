webpackHotUpdate_N_E("pages/joinGroup",{

/***/ "./src/pages/joinGroup.js":
/*!********************************!*\
  !*** ./src/pages/joinGroup.js ***!
  \********************************/
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contracts/VoteFactory.json */ "./src/contracts/VoteFactory.json");
var _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/VoteFactory.json */ "./src/contracts/VoteFactory.json", 1);
/* harmony import */ var _getWeb3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../getWeb3 */ "./src/getWeb3.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_10__);




var _jsxFileName = "/home/wen_wong/voting-at-mcgill/client/src/pages/joinGroup.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;









__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");

var styles = {
  card: {
    width: '90%',
    margin: 'auto',
    color: '#f00000',
    maxHeight: 200,
    minHeight: 200,
    cursor: "pointer"
  },
  title: {
    fontSize: 36,
    color: '#ED1B2F',
    marginLeft: 10,
    marginTop: 15,
    marginBottom: 15
  },
  access: {
    position: "relative",
    height: 36,
    fontSize: 16
  }
};

var JoinGroup = function JoinGroup() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      web3 = _useState[0],
      setWeb3 = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      groupsID = _useState2[0],
      setGroupsID = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      contract = _useState3[0],
      setContract = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      renderedGroups = _useState4[0],
      renderGroups = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      joiningGroup = _useState5[0],
      setJoiningGroup = _useState5[1];

  var user;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    // get web3
    function initWeb3() {
      return _initWeb.apply(this, arguments);
    }

    function _initWeb() {
      _initWeb = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var web3Instance;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('initializing web3');
                _context.next = 3;
                return Object(_getWeb3__WEBPACK_IMPORTED_MODULE_6__["default"])();

              case 3:
                web3Instance = _context.sent;
                setWeb3(web3Instance);

              case 5:
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
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    // get Factory contract
    function setup() {
      return _setup.apply(this, arguments);
    }

    function _setup() {
      _setup = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var _yield$web3$eth$getAc, _yield$web3$eth$getAc2, networkId, deployedNetwork, instance;

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
                _context2.next = 11;
                return web3.eth.net.getId();

              case 11:
                networkId = _context2.sent;
                deployedNetwork = _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_5__.networks[networkId];
                instance = new web3.eth.Contract(_contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_5__.abi, deployedNetwork && deployedNetwork.address);
                setContract(instance); // Set web3, accounts, and contract to the state, and then proceed with an

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
      return _setup.apply(this, arguments);
    }

    setup(); // console.log('ok')
  }, [web3]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    //display available votes addresses
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
                return contract.methods.getExistingGroups().call();

              case 4:
                response = _context3.sent;
                // Update state with the result.
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

  var displayInfo = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(identification) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!(groupsID == '')) {
                _context4.next = 2;
                break;
              }

              return _context4.abrupt("return");

            case 2:
              _context4.prev = 2;
              _context4.next = 5;
              return contract.methods.getGroup(identification).call();

            case 5:
              return _context4.abrupt("return", _context4.sent);

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](2);
              console.error(_context4.t0);

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 8]]);
    }));

    return function displayInfo(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    //render votes
    var renderVotes = /*#__PURE__*/function () {
      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
        var temp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (groupsID) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return");

              case 2:
                temp = [];
                _context5.next = 5;
                return groupsID.forEach(function (identification) {
                  displayInfo(identification).then(function (newGroup) {
                    // Check if user has joined the group
                    temp.push(newGroup);
                  });
                });

              case 5:
                setTimeout(function () {
                  renderGroups(temp);
                }, 1000);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function renderVotes() {
        return _ref3.apply(this, arguments);
      };
    }();

    renderVotes();
  }, [groupsID]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (renderedGroups) {
      console.log(renderedGroups);
    }
  }, [renderedGroups]);

  var onSubmit = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8(event) {
      var joinGroup, displayJoin;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              event.preventDefault(); // Calls VoteFactory Contract to create a new instance of Group

              joinGroup = /*#__PURE__*/function () {
                var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          setJoiningGroup(true);

                          if (!(contract == '')) {
                            _context6.next = 3;
                            break;
                          }

                          return _context6.abrupt("return");

                        case 3:
                          _context6.next = 5;
                          return contract.methods.joinGroup(groupID).send({
                            from: user
                          });

                        case 5:
                          setJoiningGroup(false);
                          setLoad(!Load);

                        case 7:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                return function joinGroup() {
                  return _ref5.apply(this, arguments);
                };
              }();

              displayJoin = /*#__PURE__*/function () {
                var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7() {
                  var summary;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.next = 2;
                          return contract.methods.getUserGroup(groupID).call();

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

                return function displayJoin() {
                  return _ref6.apply(this, arguments);
                };
              }();

              _context8.next = 5;
              return setupVoteFactory();

            case 5:
              _context8.next = 7;
              return joinGroup();

            case 7:
              _context8.next = 9;
              return displayJoin();

            case 9:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function onSubmit(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  function displayGroupList() {
    var _this2 = this;

    if (web3 == "") {
      return "waiting for votes to display...";
    } else if (groupsID == "") {
      return "no groups to display";
    }

    return renderedGroups ? renderedGroups.map(function (group, index) {
      return __jsx("div", {
        className: "ui card",
        style: styles.card,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "card",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 7
        }
      }, __jsx("span", {
        className: "right floated",
        key: index,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 9
        }
      }, group[3], __jsx("i", {
        className: "user icon",
        style: {
          margin: 3
        },
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 11
        }
      }), __jsx("i", {
        className: "circle outline icon",
        style: {
          margin: 3
        },
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "content",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "header",
        style: styles.title,
        key: index,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 11
        }
      }, group[0])), __jsx("div", {
        className: "content",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 9
        }
      }, __jsx("span", {
        className: "right floated",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Button, {
        onSubmit: onSubmit,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 13
        }
      }, "Join Group")), __jsx("div", {
        className: "ui sub header",
        style: {
          marginLeft: 10
        },
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }
      }, __jsx("i", {
        className: "checkmark icon small",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 13
        }
      }), "group"), __jsx("div", {
        className: "ui feed",
        style: {
          marginLeft: 10
        },
        key: index,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 11
        }
      }, group[1]))));
    }) : __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 9
      }
    }, " no groups found ");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_8__["Header"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "App",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 9
    }
  }, displayGroupList())));
};

_s(JoinGroup, "CUQhhjOEyY2hnZVPLxPnM/nVvFQ=");

_c = JoinGroup;
/* harmony default export */ __webpack_exports__["default"] = (JoinGroup);

var _c;

$RefreshReg$(_c, "JoinGroup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2pvaW5Hcm91cC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwic3R5bGVzIiwiY2FyZCIsIndpZHRoIiwibWFyZ2luIiwiY29sb3IiLCJtYXhIZWlnaHQiLCJtaW5IZWlnaHQiLCJjdXJzb3IiLCJ0aXRsZSIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImFjY2VzcyIsInBvc2l0aW9uIiwiaGVpZ2h0IiwiSm9pbkdyb3VwIiwidXNlU3RhdGUiLCJ3ZWIzIiwic2V0V2ViMyIsImdyb3Vwc0lEIiwic2V0R3JvdXBzSUQiLCJjb250cmFjdCIsInNldENvbnRyYWN0IiwicmVuZGVyZWRHcm91cHMiLCJyZW5kZXJHcm91cHMiLCJqb2luaW5nR3JvdXAiLCJzZXRKb2luaW5nR3JvdXAiLCJ1c2VyIiwidXNlRWZmZWN0IiwiaW5pdFdlYjMiLCJjb25zb2xlIiwibG9nIiwiZ2V0V2ViMyIsIndlYjNJbnN0YW5jZSIsInNldHVwIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJuZXQiLCJnZXRJZCIsIm5ldHdvcmtJZCIsImRlcGxveWVkTmV0d29yayIsIlZvdGVGYWN0b3J5Q29udHJhY3QiLCJuZXR3b3JrcyIsImluc3RhbmNlIiwiQ29udHJhY3QiLCJhYmkiLCJhZGRyZXNzIiwiYWxlcnQiLCJlcnJvciIsImRpc3BsYXlWb3RlcyIsIm1ldGhvZHMiLCJnZXRFeGlzdGluZ0dyb3VwcyIsImNhbGwiLCJyZXNwb25zZSIsInRlbXAiLCJpIiwibGVuZ3RoIiwicGFyc2VJbnQiLCJkaXNwbGF5SW5mbyIsImlkZW50aWZpY2F0aW9uIiwiZ2V0R3JvdXAiLCJyZW5kZXJWb3RlcyIsImZvckVhY2giLCJ0aGVuIiwibmV3R3JvdXAiLCJwdXNoIiwic2V0VGltZW91dCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImpvaW5Hcm91cCIsImdyb3VwSUQiLCJzZW5kIiwiZnJvbSIsInNldExvYWQiLCJMb2FkIiwiZGlzcGxheUpvaW4iLCJnZXRVc2VyR3JvdXAiLCJzdW1tYXJ5Iiwic2V0dXBWb3RlRmFjdG9yeSIsImRpc3BsYXlHcm91cExpc3QiLCJtYXAiLCJncm91cCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxtQkFBTyxDQUFDLGtGQUFELENBQVA7O0FBRUEsSUFBTUMsTUFBTSxHQUFHO0FBQ2JDLE1BQUksRUFBRTtBQUNKQyxTQUFLLEVBQUUsS0FESDtBQUVKQyxVQUFNLEVBQUUsTUFGSjtBQUdKQyxTQUFLLEVBQUUsU0FISDtBQUlKQyxhQUFTLEVBQUUsR0FKUDtBQUtKQyxhQUFTLEVBQUUsR0FMUDtBQU1KQyxVQUFNLEVBQUU7QUFOSixHQURPO0FBU2JDLE9BQUssRUFBRztBQUNOQyxZQUFRLEVBQUUsRUFESjtBQUVOTCxTQUFLLEVBQUUsU0FGRDtBQUdOTSxjQUFVLEVBQUUsRUFITjtBQUlOQyxhQUFTLEVBQUUsRUFKTDtBQUtOQyxnQkFBWSxFQUFDO0FBTFAsR0FUSztBQWdCYkMsUUFBTSxFQUFDO0FBQ0xDLFlBQVEsRUFBQyxVQURKO0FBRUxDLFVBQU0sRUFBQyxFQUZGO0FBR0xOLFlBQVEsRUFBRTtBQUhMO0FBaEJNLENBQWY7O0FBdUJBLElBQU1PLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsQ0FBQyxFQUFELENBRFY7QUFBQSxNQUNmQyxJQURlO0FBQUEsTUFDVEMsT0FEUzs7QUFBQSxtQkFFVUYsc0RBQVEsQ0FBQyxFQUFELENBRmxCO0FBQUEsTUFFZkcsUUFGZTtBQUFBLE1BRUxDLFdBRks7O0FBQUEsbUJBR1VKLHNEQUFRLENBQUMsRUFBRCxDQUhsQjtBQUFBLE1BR2ZLLFFBSGU7QUFBQSxNQUdMQyxXQUhLOztBQUFBLG1CQUlpQk4sc0RBQVEsQ0FBQyxFQUFELENB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QTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0YsZ0JBQWdCLEVBQXZCLENBREYsQ0FORixDQURGO0FBYUQsQ0FyTEQ7O0dBQU1qRSxTOztLQUFBQSxTO0FBdUxTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9qb2luR3JvdXAuYjM2YTVmYzlmMGMwNDQ3ZDE3ZDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBWb3RlRmFjdG9yeUNvbnRyYWN0IGZyb20gXCIuLi9jb250cmFjdHMvVm90ZUZhY3RvcnkuanNvblwiO1xuaW1wb3J0IGdldFdlYjMgZnJvbSBcIi4uL2dldFdlYjNcIjtcbmltcG9ydCB7IEZvcm0sIExvYWRlciAgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi9yb3V0ZXMnXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcblxucmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiKTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBjYXJkOiB7XG4gICAgd2lkdGg6ICc5MCUnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgIGNvbG9yOiAnI2YwMDAwMCcsXG4gICAgbWF4SGVpZ2h0OiAyMDAsXG4gICAgbWluSGVpZ2h0OiAyMDAsXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgfSxcbiAgdGl0bGUgOiB7XG4gICAgZm9udFNpemU6IDM2LFxuICAgIGNvbG9yOiAnI0VEMUIyRicsXG4gICAgbWFyZ2luTGVmdDogMTAsXG4gICAgbWFyZ2luVG9wOiAxNSxcbiAgICBtYXJnaW5Cb3R0b206MTVcbiAgfSxcbiAgYWNjZXNzOntcbiAgICBwb3NpdGlvbjpcInJlbGF0aXZlXCIsXG4gICAgaGVpZ2h0OjM2LFxuICAgIGZvbnRTaXplOiAxNixcbiAgfVxufTtcblxuY29uc3QgSm9pbkdyb3VwID0gKCkgPT4ge1xuICBjb25zdCBbd2ViMywgc2V0V2ViM10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtncm91cHNJRCwgc2V0R3JvdXBzSURdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbY29udHJhY3QsIHNldENvbnRyYWN0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3JlbmRlcmVkR3JvdXBzLCByZW5kZXJHcm91cHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbam9pbmluZ0dyb3VwLCBzZXRKb2luaW5nR3JvdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHZhciB1c2VyO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7Ly8gZ2V0IHdlYjNcbiAgICBhc3luYyBmdW5jdGlvbiBpbml0V2ViMygpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdpbml0aWFsaXppbmcgd2ViMycpO1xuICAgICAgY29uc3Qgd2ViM0luc3RhbmNlID0gYXdhaXQgZ2V0V2ViMygpO1xuICAgICAgc2V0V2ViMyh3ZWIzSW5zdGFuY2UpXG4gICAgfVxuICAgIGluaXRXZWIzKCk7XG4gIH0sW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7Ly8gZ2V0IEZhY3RvcnkgY29udHJhY3RcbiAgICBhc3luYyBmdW5jdGlvbiBzZXR1cCgpIHtcbiAgICAgIGlmKHdlYjMgPT0gXCJcIikge1xuICAgICAgICBjb25zb2xlLmxvZygndW5hYmxlIHRvIGdldCBmYWN0b3J5JylcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgW3VzZXJdID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgLy8gR2V0IHRoZSBjb250cmFjdCBpbnN0YW5jZS5cbiAgICAgICAgY29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViMy5ldGgubmV0LmdldElkKCk7XG4gICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IFZvdGVGYWN0b3J5Q29udHJhY3QubmV0d29ya3NbbmV0d29ya0lkXTtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXG4gICAgICAgICAgVm90ZUZhY3RvcnlDb250cmFjdC5hYmksXG4gICAgICAgICAgZGVwbG95ZWROZXR3b3JrICYmIGRlcGxveWVkTmV0d29yay5hZGRyZXNzLFxuICAgICAgICApO1xuICAgICAgICBzZXRDb250cmFjdChpbnN0YW5jZSk7XG4gICAgXG4gICAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBDYXRjaCBhbnkgZXJyb3JzIGZvciBhbnkgb2YgdGhlIGFib3ZlIG9wZXJhdGlvbnMuXG4gICAgICAgIGFsZXJ0KFxuICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICAgICAgc2V0dXAoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdvaycpXG4gIH0sW3dlYjNdKTtcblxuICB1c2VFZmZlY3QoKCk9PiB7Ly9kaXNwbGF5IGF2YWlsYWJsZSB2b3RlcyBhZGRyZXNzZXNcbiAgICB2YXIgZGlzcGxheVZvdGVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYoY29udHJhY3QgPT0gJycpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmdldEV4aXN0aW5nR3JvdXBzKCkuY2FsbCgpO1xuICAgICAgLy8gVXBkYXRlIHN0YXRlIHdpdGggdGhlIHJlc3VsdC5cbiAgICAgIGNvbnN0IHRlbXAgPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzcG9uc2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGVtcFtpXSA9IHBhcnNlSW50KHJlc3BvbnNlW2ldKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHRlbXApO1xuICAgICAgc2V0R3JvdXBzSUQodGVtcCk7XG4gICAgfTtcbiAgICBkaXNwbGF5Vm90ZXMoKTtcbiAgfSxbY29udHJhY3RdKTtcbiAgXG5cbiAgdmFyIGRpc3BsYXlJbmZvID0gYXN5bmMgKGlkZW50aWZpY2F0aW9uKSA9PiB7IFxuICAgIGlmKGdyb3Vwc0lEID09ICcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgY29udHJhY3QubWV0aG9kcy5nZXRHcm91cChpZGVudGlmaWNhdGlvbikuY2FsbCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH07XG4gIHVzZUVmZmVjdCgoKT0+IHsvL3JlbmRlciB2b3Rlc1xuICAgIHZhciByZW5kZXJWb3RlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKCFncm91cHNJRCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGVtcCA9IFtdO1xuICAgICAgICBhd2FpdCBncm91cHNJRC5mb3JFYWNoKGlkZW50aWZpY2F0aW9uID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlJbmZvKGlkZW50aWZpY2F0aW9uKS50aGVuKG5ld0dyb3VwID0+IHtcbiAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdXNlciBoYXMgam9pbmVkIHRoZSBncm91cFxuICAgICAgICAgICAgICB0ZW1wLnB1c2gobmV3R3JvdXApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgIHJlbmRlckdyb3Vwcyh0ZW1wKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9XG4gICAgcmVuZGVyVm90ZXMoKTtcbiAgfSxbZ3JvdXBzSURdKTtcblxuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgaWYocmVuZGVyZWRHcm91cHMpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlbmRlcmVkR3JvdXBzKTtcbiAgICB9XG4gIH0sW3JlbmRlcmVkR3JvdXBzXSk7XG5cbiAgdmFyIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICAvLyBDYWxscyBWb3RlRmFjdG9yeSBDb250cmFjdCB0byBjcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgR3JvdXBcbiAgICB2YXIgam9pbkdyb3VwID0gYXN5bmMgKCkgPT4ge1xuICAgICAgXG4gICAgICAgIHNldEpvaW5pbmdHcm91cCh0cnVlKTtcbiAgICAgICAgaWYoY29udHJhY3QgPT0gJycpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhbGxzIHRoZSBtZXRob2QgY3JlYXRlR3JvdXAgZnJvbSBWb3RlRmFjdG9yeS5zb2xcbiAgICAgICAgYXdhaXQgY29udHJhY3QubWV0aG9kcy5qb2luR3JvdXAoZ3JvdXBJRCkuc2VuZCh7XG4gICAgICAgICAgICBmcm9tOiB1c2VyXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRKb2luaW5nR3JvdXAoZmFsc2UpO1xuICAgICAgICBzZXRMb2FkKCFMb2FkKTtcbiAgICB9O1xuXG4gICAgdmFyIGRpc3BsYXlKb2luID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0VXNlckdyb3VwKGdyb3VwSUQpLmNhbGwoKTtcbiAgICAgIGNvbnNvbGUubG9nKHN1bW1hcnkpO1xuICB9O1xuICAgIGF3YWl0IHNldHVwVm90ZUZhY3RvcnkoKTtcbiAgICBhd2FpdCBqb2luR3JvdXAoKTtcbiAgICBhd2FpdCBkaXNwbGF5Sm9pbigpO1xuICB9O1xuICBcbiAgZnVuY3Rpb24gZGlzcGxheUdyb3VwTGlzdCgpIHtcbiAgICBpZiAod2ViMyA9PSBcIlwiKSB7XG4gICAgICByZXR1cm4gXCJ3YWl0aW5nIGZvciB2b3RlcyB0byBkaXNwbGF5Li4uXCI7XG4gICAgfVxuXG4gICAgZWxzZSBpZiAoZ3JvdXBzSUQgPT0gXCJcIikge1xuICAgICAgcmV0dXJuIFwibm8gZ3JvdXBzIHRvIGRpc3BsYXlcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVuZGVyZWRHcm91cHMgPyByZW5kZXJlZEdyb3Vwcy5tYXAoKGdyb3VwLCBpbmRleCkgPT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNhcmRcIiBzdHlsZT17c3R5bGVzLmNhcmR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0IGZsb2F0ZWRcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICB7Z3JvdXBbM119XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwidXNlciBpY29uXCIgc3R5bGU9e3ttYXJnaW46IDN9fT48L2k+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiY2lyY2xlIG91dGxpbmUgaWNvblwiIHN0eWxlPXt7bWFyZ2luOiAzfX0+PC9pPlxuICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIiBzdHlsZT17c3R5bGVzLnRpdGxlfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAge2dyb3VwWzBdfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodCBmbG9hdGVkXCI+XG4gICAgICAgICAgICA8Rm9ybS5CdXR0b24gb25TdWJtaXQ9e29uU3VibWl0fT5Kb2luIEdyb3VwPC9Gb3JtLkJ1dHRvbj5cbiAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHN1YiBoZWFkZXJcIiBzdHlsZT17e21hcmdpbkxlZnQ6MTB9fT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImNoZWNrbWFyayBpY29uIHNtYWxsXCI+PC9pPiAgXG4gICAgICAgICAgICBncm91cCBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGZlZWRcIiBzdHlsZT17e21hcmdpbkxlZnQ6MTB9fSBrZXk9e2luZGV4fT57IGdyb3VwWzFdIH08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApIDogPGRpdj4gbm8gZ3JvdXBzIGZvdW5kIDwvZGl2PlxuICB9XG5cbiAgcmV0dXJuKCBcbiAgICA8PlxuICAgICAgPEhlYWRlcj48L0hlYWRlcj5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPGJyPjwvYnI+XG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgPGRpdj57IGRpc3BsYXlHcm91cExpc3QoKSB9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTsgXG4gICAgXG59O1xuXG5leHBvcnQgZGVmYXVsdCBKb2luR3JvdXA7Il0sInNvdXJjZVJvb3QiOiIifQ==