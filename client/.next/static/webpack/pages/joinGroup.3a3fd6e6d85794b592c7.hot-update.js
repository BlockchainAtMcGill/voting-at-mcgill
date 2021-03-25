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
                }, 100);

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
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7(event) {
      var joinGroup;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
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
                          return factoryContract.methods.joinGroup(groupID).send({
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

            case 2:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function onSubmit(_x2) {
      return _ref4.apply(this, arguments);
    };
  }(); //route ={`/elections/vote/${votesAddresses[index]}`} key={index}>


  return renderedGroups ? renderedGroups.map(function (group, index) {
    return __jsx(Button, {
      className: "ui button",
      onSubmit: onSubmit,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "ui card",
      style: styles.card,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 7
      }
    }, __jsx("span", {
      className: "right floated",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
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
        lineNumber: 160,
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
        lineNumber: 161,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: "content",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "header",
      style: styles.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 11
      }
    }, group[0])), __jsx("div", {
      className: "content",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }
    }, __jsx("span", {
      className: "right floated",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 11
      }
    }, __jsx("span", {
      style: styles.access,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 13
      }
    }, "join group"), __jsx("i", {
      className: "angle right icon huge",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "ui sub header",
      style: {
        marginLeft: 10
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 11
      }
    }, __jsx("i", {
      className: "checkmark icon small",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 13
      }
    }), "group"), __jsx("div", {
      className: "ui feed",
      style: {
        marginLeft: 10
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 11
      }
    }, group[1])))));
  }) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2pvaW5Hcm91cC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwic3R5bGVzIiwiY2FyZCIsIndpZHRoIiwibWFyZ2luIiwiY29sb3IiLCJtYXhIZWlnaHQiLCJtaW5IZWlnaHQiLCJjdXJzb3IiLCJ0aXRsZSIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImFjY2VzcyIsInBvc2l0aW9uIiwiaGVpZ2h0IiwiSm9pbkdyb3VwIiwidXNlU3RhdGUiLCJ3ZWIzIiwic2V0V2ViMyIsImdyb3Vwc0lEIiwic2V0R3JvdXBzSUQiLCJjb250cmFjdCIsInNldENvbnRyYWN0IiwicmVuZGVyZWRHcm91cHMiLCJyZW5kZXJHcm91cHMiLCJqb2luaW5nR3JvdXAiLCJzZXRKb2luaW5nR3JvdXAiLCJ1c2VyIiwidXNlRWZmZWN0IiwiaW5pdFdlYjMiLCJjb25zb2xlIiwibG9nIiwiZ2V0V2ViMyIsIndlYjNJbnN0YW5jZSIsInNldHVwIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJuZXQiLCJnZXRJZCIsIm5ldHdvcmtJZCIsImRlcGxveWVkTmV0d29yayIsIlZvdGVGYWN0b3J5Q29udHJhY3QiLCJuZXR3b3JrcyIsImluc3RhbmNlIiwiQ29udHJhY3QiLCJhYmkiLCJhZGRyZXNzIiwiYWxlcnQiLCJlcnJvciIsImRpc3BsYXlWb3RlcyIsIm1ldGhvZHMiLCJnZXRFeGlzdGluZ0dyb3VwcyIsImNhbGwiLCJyZXNwb25zZSIsInRlbXAiLCJpIiwibGVuZ3RoIiwicGFyc2VJbnQiLCJkaXNwbGF5SW5mbyIsImlkZW50aWZpY2F0aW9uIiwiZ2V0R3JvdXAiLCJyZW5kZXJWb3RlcyIsImZvckVhY2giLCJ0aGVuIiwibmV3R3JvdXAiLCJwdXNoIiwic2V0VGltZW91dCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImpvaW5Hcm91cCIsImZhY3RvcnlDb250cmFjdCIsImdy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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsZUFBUyxFQUFDLHNCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixVQVBGLEVBV0U7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUF5QixXQUFLLEVBQUU7QUFBQ0Esa0JBQVUsRUFBQztBQUFaLE9BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBbURxRSxLQUFLLENBQUMsQ0FBRCxDQUF4RCxDQVhGLENBWkYsQ0FERixDQURBLENBRDJDO0FBQUEsR0FBbkIsQ0FBSCxHQWdDckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFoQ0E7QUFpQ0gsQ0F4SkQ7O0dBQU0vRCxTOztLQUFBQSxTO0FBMEpTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9qb2luR3JvdXAuM2EzZmQ2ZTZkODU3OTRiNTkyYzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBWb3RlRmFjdG9yeUNvbnRyYWN0IGZyb20gXCIuLi9jb250cmFjdHMvVm90ZUZhY3RvcnkuanNvblwiO1xuaW1wb3J0IGdldFdlYjMgZnJvbSBcIi4uL2dldFdlYjNcIjtcbmltcG9ydCB7IEZvcm0sIExvYWRlciAgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi9yb3V0ZXMnXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcblxucmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiKTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBjYXJkOiB7XG4gICAgd2lkdGg6ICc5MCUnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgIGNvbG9yOiAnI2YwMDAwMCcsXG4gICAgbWF4SGVpZ2h0OiAyMDAsXG4gICAgbWluSGVpZ2h0OiAyMDAsXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgfSxcbiAgdGl0bGUgOiB7XG4gICAgZm9udFNpemU6IDM2LFxuICAgIGNvbG9yOiAnI0VEMUIyRicsXG4gICAgbWFyZ2luTGVmdDogMTAsXG4gICAgbWFyZ2luVG9wOiAxNSxcbiAgICBtYXJnaW5Cb3R0b206MTVcbiAgfSxcbiAgYWNjZXNzOntcbiAgICBwb3NpdGlvbjpcInJlbGF0aXZlXCIsXG4gICAgaGVpZ2h0OjM2LFxuICAgIGZvbnRTaXplOiAxNixcbiAgfVxufTtcblxuY29uc3QgSm9pbkdyb3VwID0gKCkgPT4ge1xuICBjb25zdCBbd2ViMywgc2V0V2ViM10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtncm91cHNJRCwgc2V0R3JvdXBzSURdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbY29udHJhY3QsIHNldENvbnRyYWN0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3JlbmRlcmVkR3JvdXBzLCByZW5kZXJHcm91cHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbam9pbmluZ0dyb3VwLCBzZXRKb2luaW5nR3JvdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHZhciB1c2VyO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7Ly8gZ2V0IHdlYjNcbiAgICBhc3luYyBmdW5jdGlvbiBpbml0V2ViMygpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdpbml0aWFsaXppbmcgd2ViMycpO1xuICAgICAgY29uc3Qgd2ViM0luc3RhbmNlID0gYXdhaXQgZ2V0V2ViMygpO1xuICAgICAgc2V0V2ViMyh3ZWIzSW5zdGFuY2UpXG4gICAgfVxuICAgIGluaXRXZWIzKCk7XG4gIH0sW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7Ly8gZ2V0IEZhY3RvcnkgY29udHJhY3RcbiAgICBhc3luYyBmdW5jdGlvbiBzZXR1cCgpIHtcbiAgICAgIGlmKHdlYjMgPT0gXCJcIikge1xuICAgICAgICBjb25zb2xlLmxvZygndW5hYmxlIHRvIGdldCBmYWN0b3J5JylcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgW3VzZXJdID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgLy8gR2V0IHRoZSBjb250cmFjdCBpbnN0YW5jZS5cbiAgICAgICAgY29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViMy5ldGgubmV0LmdldElkKCk7XG4gICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IFZvdGVGYWN0b3J5Q29udHJhY3QubmV0d29ya3NbbmV0d29ya0lkXTtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXG4gICAgICAgICAgVm90ZUZhY3RvcnlDb250cmFjdC5hYmksXG4gICAgICAgICAgZGVwbG95ZWROZXR3b3JrICYmIGRlcGxveWVkTmV0d29yay5hZGRyZXNzLFxuICAgICAgICApO1xuICAgICAgICBzZXRDb250cmFjdChpbnN0YW5jZSk7XG4gICAgXG4gICAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBDYXRjaCBhbnkgZXJyb3JzIGZvciBhbnkgb2YgdGhlIGFib3ZlIG9wZXJhdGlvbnMuXG4gICAgICAgIGFsZXJ0KFxuICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICAgICAgc2V0dXAoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdvaycpXG4gIH0sW3dlYjNdKTtcblxuICB1c2VFZmZlY3QoKCk9PiB7Ly9kaXNwbGF5IGF2YWlsYWJsZSB2b3RlcyBhZGRyZXNzZXNcbiAgICB2YXIgZGlzcGxheVZvdGVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYoY29udHJhY3QgPT0gJycpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmdldEV4aXN0aW5nR3JvdXBzKCkuY2FsbCgpO1xuICAgICAgLy8gVXBkYXRlIHN0YXRlIHdpdGggdGhlIHJlc3VsdC5cbiAgICAgIGNvbnN0IHRlbXAgPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzcG9uc2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGVtcFtpXSA9IHBhcnNlSW50KHJlc3BvbnNlW2ldKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHRlbXApO1xuICAgICAgc2V0R3JvdXBzSUQodGVtcCk7XG4gICAgfTtcbiAgICBkaXNwbGF5Vm90ZXMoKTtcbiAgfSxbY29udHJhY3RdKTtcbiAgXG5cbiAgdmFyIGRpc3BsYXlJbmZvID0gYXN5bmMgKGlkZW50aWZpY2F0aW9uKSA9PiB7IFxuICAgIGlmKGdyb3Vwc0lEID09ICcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgY29udHJhY3QubWV0aG9kcy5nZXRHcm91cChpZGVudGlmaWNhdGlvbikuY2FsbCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH07XG4gIHVzZUVmZmVjdCgoKT0+IHsvL3JlbmRlciB2b3Rlc1xuICAgIHZhciByZW5kZXJWb3RlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKCFncm91cHNJRCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGVtcCA9IFtdO1xuICAgICAgICBhd2FpdCBncm91cHNJRC5mb3JFYWNoKGlkZW50aWZpY2F0aW9uID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlJbmZvKGlkZW50aWZpY2F0aW9uKS50aGVuKG5ld0dyb3VwID0+IHtcbiAgICAgICAgICAgICAgdGVtcC5wdXNoKG5ld0dyb3VwKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICByZW5kZXJHcm91cHModGVtcCk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICB9XG4gICAgcmVuZGVyVm90ZXMoKTtcbiAgfSxbZ3JvdXBzSURdKTtcblxuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgaWYocmVuZGVyZWRHcm91cHMpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlbmRlcmVkR3JvdXBzKTtcbiAgICB9XG4gIH0sW3JlbmRlcmVkR3JvdXBzXSk7XG5cbiAgdmFyIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICAvLyBDYWxscyBWb3RlRmFjdG9yeSBDb250cmFjdCB0byBjcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgR3JvdXBcbiAgICB2YXIgam9pbkdyb3VwID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBzZXRKb2luaW5nR3JvdXAodHJ1ZSk7XG4gICAgICAgIGlmKGNvbnRyYWN0ID09ICcnKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBDYWxscyB0aGUgbWV0aG9kIGNyZWF0ZUdyb3VwIGZyb20gVm90ZUZhY3Rvcnkuc29sXG4gICAgICAgIGF3YWl0IGZhY3RvcnlDb250cmFjdC5tZXRob2RzLmpvaW5Hcm91cChncm91cElEKS5zZW5kKHtcbiAgICAgICAgICAgIGZyb206IHVzZXJcbiAgICAgICAgfSk7XG4gICAgICAgIHNldEpvaW5pbmdHcm91cChmYWxzZSk7XG4gICAgICAgIHNldExvYWQoIUxvYWQpO1xuICAgIH07IFxuICB9O1xuICAgIFxuICAgIC8vcm91dGUgPXtgL2VsZWN0aW9ucy92b3RlLyR7dm90ZXNBZGRyZXNzZXNbaW5kZXhdfWB9IGtleT17aW5kZXh9PlxuICAgIHJldHVybiByZW5kZXJlZEdyb3VwcyA/IHJlbmRlcmVkR3JvdXBzLm1hcCgoZ3JvdXAsIGluZGV4KSA9PiBcbiAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInVpIGJ1dHRvblwiIG9uU3VibWl0PXtvblN1Ym1pdH0ga2V5PXtpbmRleH0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBjYXJkXCIgc3R5bGU9e3N0eWxlcy5jYXJkfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodCBmbG9hdGVkXCI+XG4gICAgICAgICAge2dyb3VwWzJdfVxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInVzZXIgaWNvblwiIHN0eWxlPXt7bWFyZ2luOiAzfX0+PC9pPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImNpcmNsZSBvdXRsaW5lIGljb25cIiBzdHlsZT17e21hcmdpbjogM319PjwvaT5cbiAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCIgc3R5bGU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgICAgIHtncm91cFswXX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHQgZmxvYXRlZFwiPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5hY2Nlc3N9ID5qb2luIGdyb3VwPC9zcGFuPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYW5nbGUgcmlnaHQgaWNvbiBodWdlXCI+PC9pPlxuICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc3ViIGhlYWRlclwiIHN0eWxlPXt7bWFyZ2luTGVmdDoxMH19PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiY2hlY2ttYXJrIGljb24gc21hbGxcIj48L2k+ICBcbiAgICAgICAgICAgIGdyb3VwIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZmVlZFwiIHN0eWxlPXt7bWFyZ2luTGVmdDoxMH19PnsgZ3JvdXBbMV0gfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvQnV0dG9uPlxuKSA6IDxkaXY+IG5vIGdyb3VwcyBmb3VuZCA8L2Rpdj5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEpvaW5Hcm91cDsiXSwic291cmNlUm9vdCI6IiJ9