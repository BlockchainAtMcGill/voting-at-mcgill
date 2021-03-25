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
    return __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2pvaW5Hcm91cC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwic3R5bGVzIiwiY2FyZCIsIndpZHRoIiwibWFyZ2luIiwiY29sb3IiLCJtYXhIZWlnaHQiLCJtaW5IZWlnaHQiLCJjdXJzb3IiLCJ0aXRsZSIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImFjY2VzcyIsInBvc2l0aW9uIiwiaGVpZ2h0IiwiSm9pbkdyb3VwIiwidXNlU3RhdGUiLCJ3ZWIzIiwic2V0V2ViMyIsImdyb3Vwc0lEIiwic2V0R3JvdXBzSUQiLCJjb250cmFjdCIsInNldENvbnRyYWN0IiwicmVuZGVyZWRHcm91cHMiLCJyZW5kZXJHcm91cHMiLCJqb2luaW5nR3JvdXAiLCJzZXRKb2luaW5nR3JvdXAiLCJ1c2VyIiwidXNlRWZmZWN0IiwiaW5pdFdlYjMiLCJjb25zb2xlIiwibG9nIiwiZ2V0V2ViMyIsIndlYjNJbnN0YW5jZSIsInNldHVwIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJuZXQiLCJnZXRJZCIsIm5ldHdvcmtJZCIsImRlcGxveWVkTmV0d29yayIsIlZvdGVGYWN0b3J5Q29udHJhY3QiLCJuZXR3b3JrcyIsImluc3RhbmNlIiwiQ29udHJhY3QiLCJhYmkiLCJhZGRyZXNzIiwiYWxlcnQiLCJlcnJvciIsImRpc3BsYXlWb3RlcyIsIm1ldGhvZHMiLCJnZXRFeGlzdGluZ0dyb3VwcyIsImNhbGwiLCJyZXNwb25zZSIsInRlbXAiLCJpIiwibGVuZ3RoIiwicGFyc2VJbnQiLCJkaXNwbGF5SW5mbyIsImlkZW50aWZpY2F0aW9uIiwiZ2V0R3JvdXAiLCJyZW5kZXJWb3RlcyIsImZvckVhY2giLCJ0aGVuIiwibmV3R3JvdXAiLCJwdXNoIiwic2V0VGltZW91dCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImpvaW5Hcm91cCIsImZhY3RvcnlDb250cmFjdCIsImdy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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBQyxzQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsVUFQRixFQVdFO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBeUIsV0FBSyxFQUFFO0FBQUNBLGtCQUFVLEVBQUM7QUFBWixPQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW1EcUUsS0FBSyxDQUFDLENBQUQsQ0FBeEQsQ0FYRixDQVpGLENBREYsQ0FEQSxDQUQyQztBQUFBLEdBQW5CLENBQUgsR0FnQ3JCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBaENBO0FBaUNILENBeEpEOztHQUFNL0QsUzs7S0FBQUEsUztBQTBKU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvam9pbkdyb3VwLjdhMzUxN2I3OGY5MzY1ZjE4ZTU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVm90ZUZhY3RvcnlDb250cmFjdCBmcm9tIFwiLi4vY29udHJhY3RzL1ZvdGVGYWN0b3J5Lmpzb25cIjtcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi9nZXRXZWIzXCI7XG5pbXBvcnQgeyBGb3JtLCBMb2FkZXIgIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vcm91dGVzJ1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XG5cbnJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIik7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY2FyZDoge1xuICAgIHdpZHRoOiAnOTAlJyxcbiAgICBtYXJnaW46ICdhdXRvJyxcbiAgICBjb2xvcjogJyNmMDAwMDAnLFxuICAgIG1heEhlaWdodDogMjAwLFxuICAgIG1pbkhlaWdodDogMjAwLFxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gIH0sXG4gIHRpdGxlIDoge1xuICAgIGZvbnRTaXplOiAzNixcbiAgICBjb2xvcjogJyNFRDFCMkYnLFxuICAgIG1hcmdpbkxlZnQ6IDEwLFxuICAgIG1hcmdpblRvcDogMTUsXG4gICAgbWFyZ2luQm90dG9tOjE1XG4gIH0sXG4gIGFjY2Vzczp7XG4gICAgcG9zaXRpb246XCJyZWxhdGl2ZVwiLFxuICAgIGhlaWdodDozNixcbiAgICBmb250U2l6ZTogMTYsXG4gIH1cbn07XG5cbmNvbnN0IEpvaW5Hcm91cCA9ICgpID0+IHtcbiAgY29uc3QgW3dlYjMsIHNldFdlYjNdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZ3JvdXBzSUQsIHNldEdyb3Vwc0lEXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2NvbnRyYWN0LCBzZXRDb250cmFjdF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtyZW5kZXJlZEdyb3VwcywgcmVuZGVyR3JvdXBzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2pvaW5pbmdHcm91cCwgc2V0Sm9pbmluZ0dyb3VwXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB2YXIgdXNlcjtcblxuICB1c2VFZmZlY3QoKCkgPT4gey8vIGdldCB3ZWIzXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdFdlYjMoKSB7XG4gICAgICBjb25zb2xlLmxvZygnaW5pdGlhbGl6aW5nIHdlYjMnKTtcbiAgICAgIGNvbnN0IHdlYjNJbnN0YW5jZSA9IGF3YWl0IGdldFdlYjMoKTtcbiAgICAgIHNldFdlYjMod2ViM0luc3RhbmNlKVxuICAgIH1cbiAgICBpbml0V2ViMygpO1xuICB9LFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4gey8vIGdldCBGYWN0b3J5IGNvbnRyYWN0XG4gICAgYXN5bmMgZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgICBpZih3ZWIzID09IFwiXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3VuYWJsZSB0byBnZXQgZmFjdG9yeScpXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIFt1c2VyXSA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXG4gICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpO1xuICAgICAgICBjb25zdCBkZXBsb3llZE5ldHdvcmsgPSBWb3RlRmFjdG9yeUNvbnRyYWN0Lm5ldHdvcmtzW25ldHdvcmtJZF07XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxuICAgICAgICAgIFZvdGVGYWN0b3J5Q29udHJhY3QuYWJpLFxuICAgICAgICAgIGRlcGxveWVkTmV0d29yayAmJiBkZXBsb3llZE5ldHdvcmsuYWRkcmVzcyxcbiAgICAgICAgKTtcbiAgICAgICAgc2V0Q29udHJhY3QoaW5zdGFuY2UpO1xuICAgIFxuICAgICAgICAvLyBTZXQgd2ViMywgYWNjb3VudHMsIGFuZCBjb250cmFjdCB0byB0aGUgc3RhdGUsIGFuZCB0aGVuIHByb2NlZWQgd2l0aCBhblxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxuICAgICAgICBhbGVydChcbiAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICAgIHNldHVwKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnb2snKVxuICB9LFt3ZWIzXSk7XG5cbiAgdXNlRWZmZWN0KCgpPT4gey8vZGlzcGxheSBhdmFpbGFibGUgdm90ZXMgYWRkcmVzc2VzXG4gICAgdmFyIGRpc3BsYXlWb3RlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmKGNvbnRyYWN0ID09ICcnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5nZXRFeGlzdGluZ0dyb3VwcygpLmNhbGwoKTtcbiAgICAgIC8vIFVwZGF0ZSBzdGF0ZSB3aXRoIHRoZSByZXN1bHQuXG4gICAgICBjb25zdCB0ZW1wID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3BvbnNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRlbXBbaV0gPSBwYXJzZUludChyZXNwb25zZVtpXSk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyh0ZW1wKTtcbiAgICAgIHNldEdyb3Vwc0lEKHRlbXApO1xuICAgIH07XG4gICAgZGlzcGxheVZvdGVzKCk7XG4gIH0sW2NvbnRyYWN0XSk7XG4gIFxuXG4gIHZhciBkaXNwbGF5SW5mbyA9IGFzeW5jIChpZGVudGlmaWNhdGlvbikgPT4geyBcbiAgICBpZihncm91cHNJRCA9PSAnJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0R3JvdXAoaWRlbnRpZmljYXRpb24pLmNhbGwoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9O1xuICB1c2VFZmZlY3QoKCk9PiB7Ly9yZW5kZXIgdm90ZXNcbiAgICB2YXIgcmVuZGVyVm90ZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmICghZ3JvdXBzSUQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRlbXAgPSBbXTtcbiAgICAgICAgYXdhaXQgZ3JvdXBzSUQuZm9yRWFjaChpZGVudGlmaWNhdGlvbiA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5SW5mbyhpZGVudGlmaWNhdGlvbikudGhlbihuZXdHcm91cCA9PiB7XG4gICAgICAgICAgICAgIHRlbXAucHVzaChuZXdHcm91cCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgcmVuZGVyR3JvdXBzKHRlbXApO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgfVxuICAgIHJlbmRlclZvdGVzKCk7XG4gIH0sW2dyb3Vwc0lEXSk7XG5cbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIGlmKHJlbmRlcmVkR3JvdXBzKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZW5kZXJlZEdyb3Vwcyk7XG4gICAgfVxuICB9LFtyZW5kZXJlZEdyb3Vwc10pO1xuXG4gIHZhciBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgLy8gQ2FsbHMgVm90ZUZhY3RvcnkgQ29udHJhY3QgdG8gY3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEdyb3VwXG4gICAgdmFyIGpvaW5Hcm91cCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgc2V0Sm9pbmluZ0dyb3VwKHRydWUpO1xuICAgICAgICBpZihjb250cmFjdCA9PSAnJyl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2FsbHMgdGhlIG1ldGhvZCBjcmVhdGVHcm91cCBmcm9tIFZvdGVGYWN0b3J5LnNvbFxuICAgICAgICBhd2FpdCBmYWN0b3J5Q29udHJhY3QubWV0aG9kcy5qb2luR3JvdXAoZ3JvdXBJRCkuc2VuZCh7XG4gICAgICAgICAgICBmcm9tOiB1c2VyXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRKb2luaW5nR3JvdXAoZmFsc2UpO1xuICAgICAgICBzZXRMb2FkKCFMb2FkKTtcbiAgICB9OyBcbiAgfTtcbiAgICBcbiAgICAvL3JvdXRlID17YC9lbGVjdGlvbnMvdm90ZS8ke3ZvdGVzQWRkcmVzc2VzW2luZGV4XX1gfSBrZXk9e2luZGV4fT5cbiAgICByZXR1cm4gcmVuZGVyZWRHcm91cHMgPyByZW5kZXJlZEdyb3Vwcy5tYXAoKGdyb3VwLCBpbmRleCkgPT4gXG4gICAgPExpbmsgY2xhc3NOYW1lPVwidWkgYnV0dG9uXCIgb25TdWJtaXQ9e29uU3VibWl0fSBrZXk9e2luZGV4fT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNhcmRcIiBzdHlsZT17c3R5bGVzLmNhcmR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0IGZsb2F0ZWRcIj5cbiAgICAgICAgICB7Z3JvdXBbMl19XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwidXNlciBpY29uXCIgc3R5bGU9e3ttYXJnaW46IDN9fT48L2k+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiY2lyY2xlIG91dGxpbmUgaWNvblwiIHN0eWxlPXt7bWFyZ2luOiAzfX0+PC9pPlxuICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIiBzdHlsZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICAgICAge2dyb3VwWzBdfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodCBmbG9hdGVkXCI+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLmFjY2Vzc30gPmpvaW4gZ3JvdXA8L3NwYW4+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJhbmdsZSByaWdodCBpY29uIGh1Z2VcIj48L2k+XG4gICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzdWIgaGVhZGVyXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OjEwfX0+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJjaGVja21hcmsgaWNvbiBzbWFsbFwiPjwvaT4gIFxuICAgICAgICAgICAgZ3JvdXAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBmZWVkXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OjEwfX0+eyBncm91cFsxXSB9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9MaW5rPlxuKSA6IDxkaXY+IG5vIGdyb3VwcyBmb3VuZCA8L2Rpdj5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEpvaW5Hcm91cDsiXSwic291cmNlUm9vdCI6IiJ9