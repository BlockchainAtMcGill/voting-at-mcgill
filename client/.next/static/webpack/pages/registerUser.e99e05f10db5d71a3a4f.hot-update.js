webpackHotUpdate_N_E("pages/registerUser",{

/***/ "./src/pages/registerUser.js":
/*!***********************************!*\
  !*** ./src/pages/registerUser.js ***!
  \***********************************/
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




var _jsxFileName = "/home/wen_wong/voting-at-mcgill/client/src/pages/registerUser.js",
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

var RegisterUser = function RegisterUser() {
  _s();

  // Basic
  var web3Instance;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      web3 = _useState[0],
      setWeb3 = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      Load = _useState2[0],
      setLoad = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      registeringUser = _useState3[0],
      setRegisteringUser = _useState3[1]; // Call the contract


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      username = _useState4[0],
      setUsername = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      email = _useState5[0],
      setEmail = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      password = _useState6[0],
      setPassword = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
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
  }, [Load]);

  var onSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(event) {
      var user, factoryContract, setupVoteFactory, createGroup, displayGroup;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              event.preventDefault();

              // Initializes VoteFactory Contract
              setupVoteFactory = /*#__PURE__*/function () {
                var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
                  var _yield$web3$eth$getAc, _yield$web3$eth$getAc2, networkId, deployedNetwork, instance;

                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
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
                          _yield$web3$eth$getAc = _context2.sent;
                          _yield$web3$eth$getAc2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_yield$web3$eth$getAc, 1);
                          user = _yield$web3$eth$getAc2[0];
                          _context2.next = 10;
                          return web3.eth.net.getId();

                        case 10:
                          networkId = _context2.sent;
                          deployedNetwork = _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_5__.networks[networkId];
                          instance = new web3.eth.Contract(_contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_5__.abi, deployedNetwork && deployedNetwork.address);
                          factoryContract = instance; // Set web3, accounts, and contract to the state, and then proceed with an

                          _context2.next = 20;
                          break;

                        case 16:
                          _context2.prev = 16;
                          _context2.t0 = _context2["catch"](2);
                          // Catch any errors for any of the above operations.
                          alert("Failed to load web3, accounts, or contract. Check console for details.");
                          console.error(_context2.t0);

                        case 20:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, null, [[2, 16]]);
                }));

                return function setupVoteFactory() {
                  return _ref2.apply(this, arguments);
                };
              }(); // Calls VoteFactory Contract to create a new instance of Group


              createGroup = /*#__PURE__*/function () {
                var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          setRegisteringUser(true);

                          if (!(factoryContract == '')) {
                            _context3.next = 3;
                            break;
                          }

                          return _context3.abrupt("return");

                        case 3:
                          _context3.next = 5;
                          return factoryContract.methods.registerUser(username, email, password, {
                            from: user
                          }).send({
                            from: user
                          });

                        case 5:
                          setRegisteringUser(false);
                          setLoad(!Load);

                        case 7:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function createGroup() {
                  return _ref3.apply(this, arguments);
                };
              }(); // Verify the values of the newly created instance of Group


              displayGroup = /*#__PURE__*/function () {
                var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
                  var summary;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return factoryContract.methods.getUser({
                            from: user
                          }).call();

                        case 2:
                          summary = _context4.sent;
                          console.log(summary);

                        case 4:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function displayGroup() {
                  return _ref4.apply(this, arguments);
                };
              }();

              _context5.next = 6;
              return setupVoteFactory();

            case 6:
              _context5.next = 8;
              return createGroup();

            case 8:
              _context5.next = 10;
              return displayGroup();

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }), __jsx("h1", {
    style: adminTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, "Register"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"], {
    onSubmit: onSubmit,
    style: adminFields,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Input, {
    required: true,
    label: "Username",
    value: username,
    onChange: function onChange(event) {
      return setUsername(event.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].TextArea, {
    required: true,
    label: "Email",
    value: email,
    onChange: function onChange(event) {
      return setEmail(event.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Input, {
    required: true,
    label: "Password",
    value: password,
    onChange: function onChange(event) {
      return setPassword(event.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Loader"], {
    active: registeringUser,
    inline: "centered",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Button, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 21
    }
  }, "Cancel"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Button, {
    type: "submit",
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 21
    }
  }, "Register"))));
};

_s(RegisterUser, "z/IPaJ74fkEIWkcDweo0yckMFJ0=");

_c = RegisterUser;
/* harmony default export */ __webpack_exports__["default"] = (RegisterUser);

var _c;

$RefreshReg$(_c, "RegisterUser");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyVXNlci5qcyJdLCJuYW1lcyI6WyJhZG1pblRpdGxlIiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImFkbWluRmllbGRzIiwibWFyZ2luIiwiUmVnaXN0ZXJVc2VyIiwid2ViM0luc3RhbmNlIiwidXNlU3RhdGUiLCJ3ZWIzIiwic2V0V2ViMyIsIkxvYWQiLCJzZXRMb2FkIiwicmVnaXN0ZXJpbmdVc2VyIiwic2V0UmVnaXN0ZXJpbmdVc2VyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwidXNlRWZmZWN0IiwiaW5pdFdlYjMiLCJnZXRXZWIzIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0dXBWb3RlRmFjdG9yeSIsImV0aCIsImdldEFjY291bnRzIiwidXNlciIsIm5ldCIsImdldElkIiwibmV0d29ya0lkIiwiZGVwbG95ZWROZXR3b3JrIiwiVm90ZUZhY3RvcnlDb250cmFjdCIsIm5ldHdvcmtzIiwiaW5zdGFuY2UiLCJDb250cmFjdCIsImFiaSIsImFkZHJlc3MiLCJmYWN0b3J5Q29udHJhY3QiLCJhbGVydCIsImNvbnNvbGUiLCJlcnJvciIsImNyZWF0ZUdyb3VwIiwibWV0aG9kcyIsInJlZ2lzdGVyVXNlciIsImZyb20iLCJzZW5kIiwiZGlzcGxheUdyb3VwIiwiZ2V0VXNlciIsImNhbGwiLCJzdW1tYXJ5IiwibG9nIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUc7QUFDZkMsT0FBSyxFQUFFLEtBRFE7QUFFZkMsY0FBWSxFQUFFLElBRkM7QUFHZkMsVUFBUSxFQUFFLEtB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RUFBRXJDLFFBRHBCO0FBRWEsWUFBUSxFQUFFLGtCQUFBTSxLQUFLO0FBQUEsYUFBSUwsV0FBVyxDQUFDSyxLQUFLLENBQUM4QixNQUFOLENBQWFDLEtBQWQsQ0FBZjtBQUFBLEtBRjVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQWxCSixFQTBCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUJKLEVBMkJJLE1BQUMsd0RBQUQ7QUFDUSxVQUFNLEVBQUUzQyxlQURoQjtBQUVRLFVBQU0sRUFBQyxVQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQkosRUErQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQS9CSixFQWdDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzREFBRCxDQUFNLE1BQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUksTUFBQyxzREFBRCxDQUFNLE1BQU47QUFBYSxRQUFJLEVBQUMsUUFBbEI7QUFBMkIsWUFBUSxFQUFFVyxRQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLENBaENKLENBUEosQ0FESjtBQStDSCxDQTlIRDs7R0FBTWxCLFk7O0tBQUFBLFk7QUErSFNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdGVyVXNlci5lOTllMDVmMTBkYjVkNzFhM2E0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgVm90ZUZhY3RvcnlDb250cmFjdCBmcm9tIFwiLi4vY29udHJhY3RzL1ZvdGVGYWN0b3J5Lmpzb25cIjtcbmltcG9ydCBWb3RlQ29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlLmpzb25cIjtcbmltcG9ydCB7IEZvcm0sIExvYWRlciAgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi9nZXRXZWIzXCI7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcblxuY29uc3QgYWRtaW5UaXRsZSA9IHtcbiAgICBjb2xvcjogXCJyZWRcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiNSVcIixcbiAgICBmb250U2l6ZTogXCIzZW1cIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbn07XG5cbmNvbnN0IGFkbWluRmllbGRzID0ge1xuICAgIG1hcmdpbjogXCJhdXRvIDUlIGF1dG8gNSVcIlxufTtcblxuY29uc3QgUmVnaXN0ZXJVc2VyID0gKCkgPT4ge1xuICAgIC8vIEJhc2ljXG4gICAgdmFyIHdlYjNJbnN0YW5jZTtcbiAgICBjb25zdCBbd2ViMywgc2V0V2ViM10gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW0xvYWQsIHNldExvYWRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3JlZ2lzdGVyaW5nVXNlciwgc2V0UmVnaXN0ZXJpbmdVc2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIC8vIENhbGwgdGhlIGNvbnRyYWN0XG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBpbml0V2ViMygpIHtcbiAgICAgICAgICAgIHdlYjNJbnN0YW5jZSA9IGF3YWl0IGdldFdlYjMoKTtcbiAgICAgICAgICAgIHNldFdlYjMod2ViM0luc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICBpbml0V2ViMygpO1xuICAgIH0sW0xvYWRdKTtcblxuICAgIHZhciBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgdXNlcjtcbiAgICAgICAgdmFyIGZhY3RvcnlDb250cmFjdDtcbiAgICAgICAgXG4gICAgICAgIC8vIEluaXRpYWxpemVzIFZvdGVGYWN0b3J5IENvbnRyYWN0XG4gICAgICAgIHZhciBzZXR1cFZvdGVGYWN0b3J5ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgaWYod2ViMyA9PSAnJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgW3VzZXJdID0gKGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCkpO1xuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXG4gICAgICAgICAgICAgICAgY29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViMy5ldGgubmV0LmdldElkKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVwbG95ZWROZXR3b3JrID0gVm90ZUZhY3RvcnlDb250cmFjdC5uZXR3b3Jrc1tuZXR3b3JrSWRdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxuICAgICAgICAgICAgICAgICAgICBWb3RlRmFjdG9yeUNvbnRyYWN0LmFiaSxcbiAgICAgICAgICAgICAgICAgICAgZGVwbG95ZWROZXR3b3JrICYmIGRlcGxveWVkTmV0d29yay5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgZmFjdG9yeUNvbnRyYWN0ID0gaW5zdGFuY2U7XG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgd2ViMywgYWNjb3VudHMsIGFuZCBjb250cmFjdCB0byB0aGUgc3RhdGUsIGFuZCB0aGVuIHByb2NlZWQgd2l0aCBhblxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBDYXRjaCBhbnkgZXJyb3JzIGZvciBhbnkgb2YgdGhlIGFib3ZlIG9wZXJhdGlvbnMuXG4gICAgICAgICAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBDYWxscyBWb3RlRmFjdG9yeSBDb250cmFjdCB0byBjcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgR3JvdXBcbiAgICAgICAgdmFyIGNyZWF0ZUdyb3VwID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgc2V0UmVnaXN0ZXJpbmdVc2VyKHRydWUpO1xuICAgICAgICAgICAgaWYoZmFjdG9yeUNvbnRyYWN0ID09ICcnKXtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDYWxscyB0aGUgbWV0aG9kIGNyZWF0ZUdyb3VwIGZyb20gVm90ZUZhY3Rvcnkuc29sXG4gICAgICAgICAgICBhd2FpdCBmYWN0b3J5Q29udHJhY3QubWV0aG9kcy5yZWdpc3RlclVzZXIodXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCwge1xuICAgICAgICAgICAgICAgIGZyb206IHVzZXJcbiAgICAgICAgICAgIH0pLnNlbmQoe1xuICAgICAgICAgICAgICAgIGZyb206IHVzZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0UmVnaXN0ZXJpbmdVc2VyKGZhbHNlKTtcbiAgICAgICAgICAgIHNldExvYWQoIUxvYWQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFZlcmlmeSB0aGUgdmFsdWVzIG9mIHRoZSBuZXdseSBjcmVhdGVkIGluc3RhbmNlIG9mIEdyb3VwXG4gICAgICAgIHZhciBkaXNwbGF5R3JvdXAgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgZmFjdG9yeUNvbnRyYWN0Lm1ldGhvZHMuZ2V0VXNlcih7XG4gICAgICAgICAgICAgICAgZnJvbTogdXNlclxuICAgICAgICAgICAgfSkuY2FsbCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3VtbWFyeSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgYXdhaXQgc2V0dXBWb3RlRmFjdG9yeSgpO1xuICAgICAgICBhd2FpdCBjcmVhdGVHcm91cCgpO1xuICAgICAgICBhd2FpdCBkaXNwbGF5R3JvdXAoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkZXIvPlxuICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgPGgxIHN0eWxlPXthZG1pblRpdGxlfT5SZWdpc3RlcjwvaDE+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gc3R5bGU9e2FkbWluRmllbGRzfT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dCByZXF1aXJlZCBsYWJlbD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRVc2VybmFtZShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICA+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLlRleHRBcmVhIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRFbWFpbChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0IHJlcXVpcmVkIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldFBhc3N3b3JkKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgID5cblxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPExvYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtyZWdpc3RlcmluZ1VzZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmxpbmU9J2NlbnRlcmVkJ1xuICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQnV0dG9uPkNhbmNlbDwvRm9ybS5CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25TdWJtaXQ9e29uU3VibWl0fT5SZWdpc3RlcjwvRm9ybS5CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvPlxuICAgIClcbn07XG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlclVzZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9