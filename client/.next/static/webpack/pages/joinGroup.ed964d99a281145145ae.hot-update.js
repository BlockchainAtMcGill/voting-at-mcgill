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









__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js"); // Card UI details


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
}; // Initialize Join Group page

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

  var user; // Setup Web3 on the current page

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
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
  }, []); // Initializeing VoteFactory contract

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
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
                setContract(instance);
                _context2.next = 21;
                break;

              case 17:
                _context2.prev = 17;
                _context2.t0 = _context2["catch"](3);
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

    setup();
  }, [web3]); // Return all group IDs as an array

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
                return contract.methods.getExistingGroups().call();

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
          lineNumber: 174,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "card",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 7
        }
      }, __jsx("span", {
        className: "right floated",
        key: index,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
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
          lineNumber: 178,
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
          lineNumber: 179,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "content",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "header",
        style: styles.title,
        key: index,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 11
        }
      }, group[0])), __jsx("div", {
        className: "content",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 9
        }
      }, __jsx("span", {
        className: "right floated",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Button, {
        onSubmit: onSubmit,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
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
          lineNumber: 193,
          columnNumber: 11
        }
      }, __jsx("i", {
        className: "checkmark icon small",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
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
          lineNumber: 197,
          columnNumber: 11
        }
      }, group[1]))));
    }) : __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 9
      }
    }, " no groups found ");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_8__["Header"], {
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
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "App",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2pvaW5Hcm91cC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwic3R5bGVzIiwiY2FyZCIsIndpZHRoIiwibWFyZ2luIiwiY29sb3IiLCJtYXhIZWlnaHQiLCJtaW5IZWlnaHQiLCJjdXJzb3IiLCJ0aXRsZSIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImFjY2VzcyIsInBvc2l0aW9uIiwiaGVpZ2h0IiwiSm9pbkdyb3VwIiwidXNlU3RhdGUiLCJ3ZWIzIiwic2V0V2ViMyIsImdyb3Vwc0lEIiwic2V0R3JvdXBzSUQiLCJjb250cmFjdCIsInNldENvbnRyYWN0IiwicmVuZGVyZWRHcm91cHMiLCJyZW5kZXJHcm91cHMiLCJqb2luaW5nR3JvdXAiLCJzZXRKb2luaW5nR3JvdXAiLCJ1c2VyIiwidXNlRWZmZWN0IiwiaW5pdFdlYjMiLCJjb25zb2xlIiwibG9nIiwiZ2V0V2ViMyIsIndlYjNJbnN0YW5jZSIsInNldHVwIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJuZXQiLCJnZXRJZCIsIm5ldHdvcmtJZCIsImRlcGxveWVkTmV0d29yayIsIlZvdGVGYWN0b3J5Q29udHJhY3QiLCJuZXR3b3JrcyIsImluc3RhbmNlIiwiQ29udHJhY3QiLCJhYmkiLCJhZGRyZXNzIiwiYWxlcnQiLCJlcnJvciIsImRpc3BsYXlWb3RlcyIsIm1ldGhvZHMiLCJnZXRFeGlzdGluZ0dyb3VwcyIsImNhbGwiLCJyZXNwb25zZSIsInRlbXAiLCJpIiwibGVuZ3RoIiwicGFyc2VJbnQiLCJkaXNwbGF5SW5mbyIsImlkZW50aWZpY2F0aW9uIiwiZ2V0R3JvdXAiLCJyZW5kZXJWb3RlcyIsImZvckVhY2giLCJ0aGVuIiwibmV3R3JvdXAiLCJwdXNoIiwic2V0VGltZW91dCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImpvaW5Hcm91cCIsImdyb3VwSUQiLCJzZW5kIiwiZnJvbSIsInNldExvYWQiLCJMb2FkIiwiZGlzcGxheUpvaW4iLCJnZXRVc2VyR3JvdXAiLCJzdW1tYXJ5Iiwic2V0dXBWb3RlRmFjdG9yeSIsImRpc3BsYXlHcm91cExpc3QiLCJtYXAiLCJncm91cCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxtQkFBTyxDQUFDLGtGQUFELENBQVAsQyxDQUVBOzs7QUFDQSxJQUFNQyxNQUFNLEdBQUc7QUFDYkMsTUFBSSxFQUFFO0FBQ0pDLFNBQUssRUFBRSxLQURIO0FBRUpDLFVBQU0sRUFBRSxNQUZKO0FBR0pDLFNBQUssRUFBRSxTQUhIO0FBSUpDLGFBQVMsRUFBRSxHQUpQO0FBS0pDLGFBQVMsRUFBRSxHQUxQO0FBTUpDLFVBQU0sRUFBRTtBQU5KLEdBRE87QUFTYkMsT0FBSyxFQUFHO0FBQ05DLFlBQVEsRUFBRSxFQURKO0FBRU5MLFNBQUssRUFBRSxTQUZEO0FBR05NLGNBQVUsRUFBRSxFQUhOO0FBSU5DLGFBQVMsRUFBRSxFQUpMO0FBS05DLGdCQUFZLEVBQUM7QUFMUCxHQVRLO0FBZ0JiQyxRQUFNLEVBQUM7QUFDTEMsWUFBUSxFQUFDLFVBREo7QUFFTEMsVUFBTSxFQUFDLEVBRkY7QUFHTE4sWUFBUSxFQUFFO0FBSEw7QUFoQk0sQ0FBZixDLENBdUJBOztBQUNBLElBQU1PLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsQ0FBQyxFQUFELENBRFY7QUFBQSxNQUNmQyxJQURlO0FBQUEsTUFDVEMsT0FEUzs7QUFBQSxtQkFFVUYsc0RBQVEsQ0FBQyxFQUFELENBRmxCO0FBQUEsTUFFZkcsUUFGZTtBQUFBLE1BRUxDLFdBRks7O0FBQUEsbUJBR1VKLHNEQUFRLENBQUMsRUFBRCxDQUhsQjtBQUFBLE1BR2ZLLFFBSGU7QUFBQSxNQUdMQyxXQUhLOztBQUFBLG1CQUlpQk4sc0RB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QTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUU7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPRixnQkFBZ0IsRUFBdkIsQ0FERixDQU5GLENBREY7QUFZRCxDQW5MRDs7R0FBTWpFLFM7O0tBQUFBLFM7QUFxTFNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2pvaW5Hcm91cC5lZDk2NGQ5OWEyODExNDUxNDVhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFZvdGVGYWN0b3J5Q29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlRmFjdG9yeS5qc29uXCI7XG5pbXBvcnQgZ2V0V2ViMyBmcm9tIFwiLi4vZ2V0V2ViM1wiO1xuaW1wb3J0IHsgRm9ybSwgTG9hZGVyICB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uL3JvdXRlcydcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xuXG5yZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIpO1xuXG4vLyBDYXJkIFVJIGRldGFpbHNcbmNvbnN0IHN0eWxlcyA9IHtcbiAgY2FyZDoge1xuICAgIHdpZHRoOiAnOTAlJyxcbiAgICBtYXJnaW46ICdhdXRvJyxcbiAgICBjb2xvcjogJyNmMDAwMDAnLFxuICAgIG1heEhlaWdodDogMjAwLFxuICAgIG1pbkhlaWdodDogMjAwLFxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gIH0sXG4gIHRpdGxlIDoge1xuICAgIGZvbnRTaXplOiAzNixcbiAgICBjb2xvcjogJyNFRDFCMkYnLFxuICAgIG1hcmdpbkxlZnQ6IDEwLFxuICAgIG1hcmdpblRvcDogMTUsXG4gICAgbWFyZ2luQm90dG9tOjE1XG4gIH0sXG4gIGFjY2Vzczp7XG4gICAgcG9zaXRpb246XCJyZWxhdGl2ZVwiLFxuICAgIGhlaWdodDozNixcbiAgICBmb250U2l6ZTogMTYsXG4gIH1cbn07XG5cbi8vIEluaXRpYWxpemUgSm9pbiBHcm91cCBwYWdlXG5jb25zdCBKb2luR3JvdXAgPSAoKSA9PiB7XG4gIGNvbnN0IFt3ZWIzLCBzZXRXZWIzXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2dyb3Vwc0lELCBzZXRHcm91cHNJRF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcmVuZGVyZWRHcm91cHMsIHJlbmRlckdyb3Vwc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtqb2luaW5nR3JvdXAsIHNldEpvaW5pbmdHcm91cF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdmFyIHVzZXI7XG5cbiAgLy8gU2V0dXAgV2ViMyBvbiB0aGUgY3VycmVudCBwYWdlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdFdlYjMoKSB7XG4gICAgICBjb25zb2xlLmxvZygnaW5pdGlhbGl6aW5nIHdlYjMnKTtcbiAgICAgIGNvbnN0IHdlYjNJbnN0YW5jZSA9IGF3YWl0IGdldFdlYjMoKTtcbiAgICAgIHNldFdlYjMod2ViM0luc3RhbmNlKVxuICAgIH1cbiAgICBpbml0V2ViMygpO1xuICB9LFtdKTtcblxuICAvLyBJbml0aWFsaXplaW5nIFZvdGVGYWN0b3J5IGNvbnRyYWN0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgICBpZih3ZWIzID09IFwiXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3VuYWJsZSB0byBnZXQgZmFjdG9yeScpXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIFt1c2VyXSA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpO1xuICAgICAgICBjb25zdCBkZXBsb3llZE5ldHdvcmsgPSBWb3RlRmFjdG9yeUNvbnRyYWN0Lm5ldHdvcmtzW25ldHdvcmtJZF07XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxuICAgICAgICAgIFZvdGVGYWN0b3J5Q29udHJhY3QuYWJpLFxuICAgICAgICAgIGRlcGxveWVkTmV0d29yayAmJiBkZXBsb3llZE5ldHdvcmsuYWRkcmVzcyxcbiAgICAgICAgKTtcbiAgICAgICAgc2V0Q29udHJhY3QoaW5zdGFuY2UpO1xuICAgIFxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgYWxlcnQoXG4gICAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxuICAgICAgICApO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgICBzZXR1cCgpO1xuICB9LFt3ZWIzXSk7XG5cbiAgLy8gUmV0dXJuIGFsbCBncm91cCBJRHMgYXMgYW4gYXJyYXlcbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIHZhciBkaXNwbGF5Vm90ZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZihjb250cmFjdCA9PSAnJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0RXhpc3RpbmdHcm91cHMoKS5jYWxsKCk7XG4gICAgICBjb25zdCB0ZW1wID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3BvbnNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRlbXBbaV0gPSBwYXJzZUludChyZXNwb25zZVtpXSk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyh0ZW1wKTtcbiAgICAgIHNldEdyb3Vwc0lEKHRlbXApO1xuICAgIH07XG4gICAgZGlzcGxheVZvdGVzKCk7XG4gIH0sW2NvbnRyYWN0XSk7XG4gIFxuXG4gIFxuICB2YXIgZGlzcGxheUluZm8gPSBhc3luYyAoaWRlbnRpZmljYXRpb24pID0+IHsgXG4gICAgaWYoZ3JvdXBzSUQgPT0gJycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCBjb250cmFjdC5tZXRob2RzLmdldEdyb3VwKGlkZW50aWZpY2F0aW9uKS5jYWxsKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfTtcbiAgdXNlRWZmZWN0KCgpPT4gey8vcmVuZGVyIHZvdGVzXG4gICAgdmFyIHJlbmRlclZvdGVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAoIWdyb3Vwc0lEKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0ZW1wID0gW107XG4gICAgICAgIGF3YWl0IGdyb3Vwc0lELmZvckVhY2goaWRlbnRpZmljYXRpb24gPT4ge1xuICAgICAgICAgICAgZGlzcGxheUluZm8oaWRlbnRpZmljYXRpb24pLnRoZW4obmV3R3JvdXAgPT4ge1xuICAgICAgICAgICAgICAvLyBDaGVjayBpZiB1c2VyIGhhcyBqb2luZWQgdGhlIGdyb3VwXG4gICAgICAgICAgICAgIHRlbXAucHVzaChuZXdHcm91cCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgcmVuZGVyR3JvdXBzKHRlbXApO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH1cbiAgICByZW5kZXJWb3RlcygpO1xuICB9LFtncm91cHNJRF0pO1xuXG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBpZihyZW5kZXJlZEdyb3Vwcykge1xuICAgICAgY29uc29sZS5sb2cocmVuZGVyZWRHcm91cHMpO1xuICAgIH1cbiAgfSxbcmVuZGVyZWRHcm91cHNdKTtcblxuICB2YXIgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgIC8vIENhbGxzIFZvdGVGYWN0b3J5IENvbnRyYWN0IHRvIGNyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBHcm91cFxuICAgIHZhciBqb2luR3JvdXAgPSBhc3luYyAoKSA9PiB7XG4gICAgICBcbiAgICAgICAgc2V0Sm9pbmluZ0dyb3VwKHRydWUpO1xuICAgICAgICBpZihjb250cmFjdCA9PSAnJyl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2FsbHMgdGhlIG1ldGhvZCBjcmVhdGVHcm91cCBmcm9tIFZvdGVGYWN0b3J5LnNvbFxuICAgICAgICBhd2FpdCBjb250cmFjdC5tZXRob2RzLmpvaW5Hcm91cChncm91cElEKS5zZW5kKHtcbiAgICAgICAgICAgIGZyb206IHVzZXJcbiAgICAgICAgfSk7XG4gICAgICAgIHNldEpvaW5pbmdHcm91cChmYWxzZSk7XG4gICAgICAgIHNldExvYWQoIUxvYWQpO1xuICAgIH07XG5cbiAgICB2YXIgZGlzcGxheUpvaW4gPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5nZXRVc2VyR3JvdXAoZ3JvdXBJRCkuY2FsbCgpO1xuICAgICAgY29uc29sZS5sb2coc3VtbWFyeSk7XG4gIH07XG4gICAgYXdhaXQgc2V0dXBWb3RlRmFjdG9yeSgpO1xuICAgIGF3YWl0IGpvaW5Hcm91cCgpO1xuICAgIGF3YWl0IGRpc3BsYXlKb2luKCk7XG4gIH07XG4gIFxuICBmdW5jdGlvbiBkaXNwbGF5R3JvdXBMaXN0KCkge1xuICAgIGlmICh3ZWIzID09IFwiXCIpIHtcbiAgICAgIHJldHVybiBcIndhaXRpbmcgZm9yIHZvdGVzIHRvIGRpc3BsYXkuLi5cIjtcbiAgICB9XG5cbiAgICBlbHNlIGlmIChncm91cHNJRCA9PSBcIlwiKSB7XG4gICAgICByZXR1cm4gXCJubyBncm91cHMgdG8gZGlzcGxheVwiO1xuICAgIH1cblxuICAgIHJldHVybiByZW5kZXJlZEdyb3VwcyA/IHJlbmRlcmVkR3JvdXBzLm1hcCgoZ3JvdXAsIGluZGV4KSA9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgY2FyZFwiIHN0eWxlPXtzdHlsZXMuY2FyZH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHQgZmxvYXRlZFwiIGtleT17aW5kZXh9PlxuICAgICAgICAgIHtncm91cFszXX1cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ1c2VyIGljb25cIiBzdHlsZT17e21hcmdpbjogM319PjwvaT5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJjaXJjbGUgb3V0bGluZSBpY29uXCIgc3R5bGU9e3ttYXJnaW46IDN9fT48L2k+XG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiIHN0eWxlPXtzdHlsZXMudGl0bGV9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICB7Z3JvdXBbMF19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cblxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0IGZsb2F0ZWRcIj5cbiAgICAgICAgICAgIDxGb3JtLkJ1dHRvbiBvblN1Ym1pdD17b25TdWJtaXR9PkpvaW4gR3JvdXA8L0Zvcm0uQnV0dG9uPlxuICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc3ViIGhlYWRlclwiIHN0eWxlPXt7bWFyZ2luTGVmdDoxMH19PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiY2hlY2ttYXJrIGljb24gc21hbGxcIj48L2k+ICBcbiAgICAgICAgICAgIGdyb3VwIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZmVlZFwiIHN0eWxlPXt7bWFyZ2luTGVmdDoxMH19IGtleT17aW5kZXh9PnsgZ3JvdXBbMV0gfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICkgOiA8ZGl2PiBubyBncm91cHMgZm91bmQgPC9kaXY+XG4gIH1cblxuICByZXR1cm4oIFxuICAgIDw+XG4gICAgICA8SGVhZGVyPjwvSGVhZGVyPlxuICAgICAgPGJyPjwvYnI+XG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPGJyPjwvYnI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICA8ZGl2PnsgZGlzcGxheUdyb3VwTGlzdCgpIH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApOyBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEpvaW5Hcm91cDsiXSwic291cmNlUm9vdCI6IiJ9