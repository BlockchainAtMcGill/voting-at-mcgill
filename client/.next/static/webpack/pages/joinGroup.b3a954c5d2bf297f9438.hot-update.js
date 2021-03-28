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
  }(); //route ={`/elections/vote/${votesAddresses[index]}`} key={index}>


  return renderedGroups ? renderedGroups.map(function (group, index) {
    return __jsx("div", {
      className: "ui card",
      style: styles.card,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 7
      }
    }, __jsx("span", {
      className: "right floated",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }
    }, group[2], __jsx("i", {
      className: "user icon",
      style: {
        margin: 3
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 11
      }
    }), __jsx("i", {
      className: "circle outline icon",
      style: {
        margin: 3
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: "content",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "header",
      style: styles.title,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 11
      }
    }, group[0])), __jsx("div", {
      className: "content",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 9
      }
    }, __jsx("span", {
      className: "right floated",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Button, {
      onSubmit: onSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 13
      }
    }, "Join Group")), __jsx("div", {
      className: "ui sub header",
      style: {
        marginLeft: 10
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 11
      }
    }, __jsx("i", {
      className: "checkmark icon small",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 13
      }
    }), "group"), __jsx("div", {
      className: "ui feed",
      style: {
        marginLeft: 10
      },
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 11
      }
    }, group[1]))));
  }) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 5
    }
  }, " no groups found ");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2pvaW5Hcm91cC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwic3R5bGVzIiwiY2FyZCIsIndpZHRoIiwibWFyZ2luIiwiY29sb3IiLCJtYXhIZWlnaHQiLCJtaW5IZWlnaHQiLCJjdXJzb3IiLCJ0aXRsZSIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImFjY2VzcyIsInBvc2l0aW9uIiwiaGVpZ2h0IiwiSm9pbkdyb3VwIiwidXNlU3RhdGUiLCJ3ZWIzIiwic2V0V2ViMyIsImdyb3Vwc0lEIiwic2V0R3JvdXBzSUQiLCJjb250cmFjdCIsInNldENvbnRyYWN0IiwicmVuZGVyZWRHcm91cHMiLCJyZW5kZXJHcm91cHMiLCJqb2luaW5nR3JvdXAiLCJzZXRKb2luaW5nR3JvdXAiLCJ1c2VyIiwidXNlRWZmZWN0IiwiaW5pdFdlYjMiLCJjb25zb2xlIiwibG9nIiwiZ2V0V2ViMyIsIndlYjNJbnN0YW5jZSIsInNldHVwIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJuZXQiLCJnZXRJZCIsIm5ldHdvcmtJZCIsImRlcGxveWVkTmV0d29yayIsIlZvdGVGYWN0b3J5Q29udHJhY3QiLCJuZXR3b3JrcyIsImluc3RhbmNlIiwiQ29udHJhY3QiLCJhYmkiLCJhZGRyZXNzIiwiYWxlcnQiLCJlcnJvciIsImRpc3BsYXlWb3RlcyIsIm1ldGhvZHMiLCJnZXRFeGlzdGluZ0dyb3VwcyIsImNhbGwiLCJyZXNwb25zZSIsInRlbXAiLCJpIiwibGVuZ3RoIiwicGFyc2VJbnQiLCJkaXNwbGF5SW5mbyIsImlkZW50aWZpY2F0aW9uIiwiZ2V0R3JvdXAiLCJyZW5kZXJWb3RlcyIsImZvckVhY2giLCJ0aGVuIiwibmV3R3JvdXAiLCJwdXNoIiwic2V0VGltZW91dCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImpvaW5Hcm91cCIsImdyb3VwSUQiLCJzZW5kIiwiZnJvbSIsInNldExvYWQiLCJMb2FkIiwiZGlzcGxheUpvaW4iLCJnZXRVc2VyR3JvdXAiLCJzdW1tYXJ5Iiwic2V0dXBWb3RlRmFjdG9yeSIsIm1hcCIsImdyb3VwIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLG1CQUFPLENBQUMsa0ZBQUQsQ0FBUDs7QUFFQSxJQUFNQyxNQUFNLEdBQUc7QUFDYkMsTUFBSSxFQUFFO0FBQ0pDLFNBQUssRUFBRSxLQURIO0FBRUpDLFVBQU0sRUFBRSxNQUZKO0FBR0pDLFNBQUssRUFBRSxTQUhIO0FBSUpDLGFBQVMsRUFBRSxHQUpQO0FBS0pDLGFBQVMsRUFBRSxHQUxQO0FBTUpDLFVBQU0sRUFBRTtBQU5KLEdBRE87QUFTYkMsT0FBSyxFQUFHO0FBQ05DLFlBQVEsRUFBRSxFQURKO0FBRU5MLFNBQUssRUFBRSxTQUZEO0FBR05NLGNBQVUsRUFBRSxFQUhOO0FBSU5DLGFBQVMsRUFBRSxFQUpMO0FBS05DLGdCQUFZLEVBQUM7QUFMUCxHQVRLO0FBZ0JiQyxRQUFNLEVBQUM7QUFDTEMsWUFBUSxFQUFDLFVBREo7QUFFTEMsVUFBTSxFQUFDLEVBRkY7QUFHTE4sWUFBUSxFQUFFO0FBSEw7QUFoQk0sQ0FBZjs7QUF1QkEsSUFBTU8sU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxDQUFDLEVBQUQsQ0FEVjtBQUFBLE1BQ2ZDLElBRGU7QUFBQSxNQUNUQyxPQURTOztBQUFBLG1CQUVVRixzREFBUSxDQUFDLEVBQUQsQ0FGbEI7QUFBQSxNQUVmRyxRQUZlO0FBQUEsTUFFTEMsV0FGSzs7QUFBQSxtQkFHVUosc0RBQVEsQ0FBQyxFQUFELENBSGxCO0FBQUEsTUFHZkssUUFIZTtBQUFBLE1BR0xDLFdBSEs7O0FBQUEsbUJBSWlCTixzREFBUSxDQUFDLEVBQUQsQ0FKekI7QUFBQSxNQUlmTyxjQUpl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O0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVFO0FBQU0sZUFBUyxFQUFDLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHNEQUFELENBQU0sTUFBTjtBQUFhLGNBQVEsRUFBRWQsUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQUZGLEVBTUU7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUErQixXQUFLLEVBQUU7QUFBQzFELGtCQUFVLEVBQUM7QUFBWixPQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUMsc0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLFVBTkYsRUFVRTtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQXlCLFdBQUssRUFBRTtBQUFDQSxrQkFBVSxFQUFDO0FBQVosT0FBaEM7QUFBaUQsU0FBRyxFQUFFeUUsS0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUErREQsS0FBSyxDQUFDLENBQUQsQ0FBcEUsQ0FWRixDQVpGLENBREYsQ0FEMkM7QUFBQSxHQUFuQixDQUFILEdBNEJyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQTVCQTtBQTZCSCxDQTdKRDs7R0FBTWxFLFM7O0tBQUFBLFM7QUErSlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2pvaW5Hcm91cC5iM2E5NTRjNWQyYmYyOTdmOTQzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFZvdGVGYWN0b3J5Q29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlRmFjdG9yeS5qc29uXCI7XG5pbXBvcnQgZ2V0V2ViMyBmcm9tIFwiLi4vZ2V0V2ViM1wiO1xuaW1wb3J0IHsgRm9ybSwgTG9hZGVyICB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uL3JvdXRlcydcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xuXG5yZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIpO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNhcmQ6IHtcbiAgICB3aWR0aDogJzkwJScsXG4gICAgbWFyZ2luOiAnYXV0bycsXG4gICAgY29sb3I6ICcjZjAwMDAwJyxcbiAgICBtYXhIZWlnaHQ6IDIwMCxcbiAgICBtaW5IZWlnaHQ6IDIwMCxcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICB9LFxuICB0aXRsZSA6IHtcbiAgICBmb250U2l6ZTogMzYsXG4gICAgY29sb3I6ICcjRUQxQjJGJyxcbiAgICBtYXJnaW5MZWZ0OiAxMCxcbiAgICBtYXJnaW5Ub3A6IDE1LFxuICAgIG1hcmdpbkJvdHRvbToxNVxuICB9LFxuICBhY2Nlc3M6e1xuICAgIHBvc2l0aW9uOlwicmVsYXRpdmVcIixcbiAgICBoZWlnaHQ6MzYsXG4gICAgZm9udFNpemU6IDE2LFxuICB9XG59O1xuXG5jb25zdCBKb2luR3JvdXAgPSAoKSA9PiB7XG4gIGNvbnN0IFt3ZWIzLCBzZXRXZWIzXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2dyb3Vwc0lELCBzZXRHcm91cHNJRF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcmVuZGVyZWRHcm91cHMsIHJlbmRlckdyb3Vwc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtqb2luaW5nR3JvdXAsIHNldEpvaW5pbmdHcm91cF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdmFyIHVzZXI7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHsvLyBnZXQgd2ViM1xuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXRXZWIzKCkge1xuICAgICAgY29uc29sZS5sb2coJ2luaXRpYWxpemluZyB3ZWIzJyk7XG4gICAgICBjb25zdCB3ZWIzSW5zdGFuY2UgPSBhd2FpdCBnZXRXZWIzKCk7XG4gICAgICBzZXRXZWIzKHdlYjNJbnN0YW5jZSlcbiAgICB9XG4gICAgaW5pdFdlYjMoKTtcbiAgfSxbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHsvLyBnZXQgRmFjdG9yeSBjb250cmFjdFxuICAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwKCkge1xuICAgICAgaWYod2ViMyA9PSBcIlwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1bmFibGUgdG8gZ2V0IGZhY3RvcnknKVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICBbdXNlcl0gPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxuICAgICAgICBjb25zdCBuZXR3b3JrSWQgPSBhd2FpdCB3ZWIzLmV0aC5uZXQuZ2V0SWQoKTtcbiAgICAgICAgY29uc3QgZGVwbG95ZWROZXR3b3JrID0gVm90ZUZhY3RvcnlDb250cmFjdC5uZXR3b3Jrc1tuZXR3b3JrSWRdO1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcbiAgICAgICAgICBWb3RlRmFjdG9yeUNvbnRyYWN0LmFiaSxcbiAgICAgICAgICBkZXBsb3llZE5ldHdvcmsgJiYgZGVwbG95ZWROZXR3b3JrLmFkZHJlc3MsXG4gICAgICAgICk7XG4gICAgICAgIHNldENvbnRyYWN0KGluc3RhbmNlKTtcbiAgICBcbiAgICAgICAgLy8gU2V0IHdlYjMsIGFjY291bnRzLCBhbmQgY29udHJhY3QgdG8gdGhlIHN0YXRlLCBhbmQgdGhlbiBwcm9jZWVkIHdpdGggYW5cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cbiAgICAgICAgYWxlcnQoXG4gICAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxuICAgICAgICApO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgICBzZXR1cCgpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ29rJylcbiAgfSxbd2ViM10pO1xuXG4gIHVzZUVmZmVjdCgoKT0+IHsvL2Rpc3BsYXkgYXZhaWxhYmxlIHZvdGVzIGFkZHJlc3Nlc1xuICAgIHZhciBkaXNwbGF5Vm90ZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZihjb250cmFjdCA9PSAnJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0RXhpc3RpbmdHcm91cHMoKS5jYWxsKCk7XG4gICAgICAvLyBVcGRhdGUgc3RhdGUgd2l0aCB0aGUgcmVzdWx0LlxuICAgICAgY29uc3QgdGVtcCA9IFtdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXNwb25zZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB0ZW1wW2ldID0gcGFyc2VJbnQocmVzcG9uc2VbaV0pO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2codGVtcCk7XG4gICAgICBzZXRHcm91cHNJRCh0ZW1wKTtcbiAgICB9O1xuICAgIGRpc3BsYXlWb3RlcygpO1xuICB9LFtjb250cmFjdF0pO1xuICBcblxuICB2YXIgZGlzcGxheUluZm8gPSBhc3luYyAoaWRlbnRpZmljYXRpb24pID0+IHsgXG4gICAgaWYoZ3JvdXBzSUQgPT0gJycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCBjb250cmFjdC5tZXRob2RzLmdldEdyb3VwKGlkZW50aWZpY2F0aW9uKS5jYWxsKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfTtcbiAgdXNlRWZmZWN0KCgpPT4gey8vcmVuZGVyIHZvdGVzXG4gICAgdmFyIHJlbmRlclZvdGVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAoIWdyb3Vwc0lEKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0ZW1wID0gW107XG4gICAgICAgIGF3YWl0IGdyb3Vwc0lELmZvckVhY2goaWRlbnRpZmljYXRpb24gPT4ge1xuICAgICAgICAgICAgZGlzcGxheUluZm8oaWRlbnRpZmljYXRpb24pLnRoZW4obmV3R3JvdXAgPT4ge1xuICAgICAgICAgICAgICB0ZW1wLnB1c2gobmV3R3JvdXApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgIHJlbmRlckdyb3Vwcyh0ZW1wKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9XG4gICAgcmVuZGVyVm90ZXMoKTtcbiAgfSxbZ3JvdXBzSURdKTtcblxuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgaWYocmVuZGVyZWRHcm91cHMpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlbmRlcmVkR3JvdXBzKTtcbiAgICB9XG4gIH0sW3JlbmRlcmVkR3JvdXBzXSk7XG5cbiAgdmFyIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICAvLyBDYWxscyBWb3RlRmFjdG9yeSBDb250cmFjdCB0byBjcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgR3JvdXBcbiAgICB2YXIgam9pbkdyb3VwID0gYXN5bmMgKCkgPT4ge1xuICAgICAgXG4gICAgICAgIHNldEpvaW5pbmdHcm91cCh0cnVlKTtcbiAgICAgICAgaWYoY29udHJhY3QgPT0gJycpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhbGxzIHRoZSBtZXRob2QgY3JlYXRlR3JvdXAgZnJvbSBWb3RlRmFjdG9yeS5zb2xcbiAgICAgICAgYXdhaXQgY29udHJhY3QubWV0aG9kcy5qb2luR3JvdXAoZ3JvdXBJRCkuc2VuZCh7XG4gICAgICAgICAgICBmcm9tOiB1c2VyXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRKb2luaW5nR3JvdXAoZmFsc2UpO1xuICAgICAgICBzZXRMb2FkKCFMb2FkKTtcbiAgICB9O1xuXG4gICAgdmFyIGRpc3BsYXlKb2luID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0VXNlckdyb3VwKGdyb3VwSUQpLmNhbGwoKTtcbiAgICAgIGNvbnNvbGUubG9nKHN1bW1hcnkpO1xuICB9O1xuICAgIGF3YWl0IHNldHVwVm90ZUZhY3RvcnkoKTtcbiAgICBhd2FpdCBqb2luR3JvdXAoKTtcbiAgICBhd2FpdCBkaXNwbGF5Sm9pbigpO1xuICB9O1xuICAgIFxuICAgIC8vcm91dGUgPXtgL2VsZWN0aW9ucy92b3RlLyR7dm90ZXNBZGRyZXNzZXNbaW5kZXhdfWB9IGtleT17aW5kZXh9PlxuICAgIHJldHVybiByZW5kZXJlZEdyb3VwcyA/IHJlbmRlcmVkR3JvdXBzLm1hcCgoZ3JvdXAsIGluZGV4KSA9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgY2FyZFwiIHN0eWxlPXtzdHlsZXMuY2FyZH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHQgZmxvYXRlZFwiIGtleT17aW5kZXh9PlxuICAgICAgICAgIHtncm91cFsyXX1cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ1c2VyIGljb25cIiBzdHlsZT17e21hcmdpbjogM319PjwvaT5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJjaXJjbGUgb3V0bGluZSBpY29uXCIgc3R5bGU9e3ttYXJnaW46IDN9fT48L2k+XG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiIHN0eWxlPXtzdHlsZXMudGl0bGV9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICB7Z3JvdXBbMF19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cblxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0IGZsb2F0ZWRcIj5cbiAgICAgICAgICAgIDxGb3JtLkJ1dHRvbiBvblN1Ym1pdD17b25TdWJtaXR9PkpvaW4gR3JvdXA8L0Zvcm0uQnV0dG9uPlxuICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc3ViIGhlYWRlclwiIHN0eWxlPXt7bWFyZ2luTGVmdDoxMH19PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiY2hlY2ttYXJrIGljb24gc21hbGxcIj48L2k+ICBcbiAgICAgICAgICAgIGdyb3VwIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZmVlZFwiIHN0eWxlPXt7bWFyZ2luTGVmdDoxMH19IGtleT17aW5kZXh9PnsgZ3JvdXBbMV0gfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKSA6IDxkaXY+IG5vIGdyb3VwcyBmb3VuZCA8L2Rpdj5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEpvaW5Hcm91cDsiXSwic291cmNlUm9vdCI6IiJ9