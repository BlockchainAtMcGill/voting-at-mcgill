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
                          return factoryContract.methods.registerUser(username, email, password).send({
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
                          return factoryContract.methods.getUser().call();

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
      lineNumber: 97,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }), __jsx("h1", {
    style: adminTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, "Register"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"], {
    onSubmit: onSubmit,
    style: adminFields,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
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
      lineNumber: 105,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
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
      lineNumber: 114,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
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
      lineNumber: 122,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Loader"], {
    active: registeringUser,
    inline: "centered",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Button, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 21
    }
  }, "Cancel"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Button, {
    type: "submit",
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyVXNlci5qcyJdLCJuYW1lcyI6WyJhZG1pblRpdGxlIiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImFkbWluRmllbGRzIiwibWFyZ2luIiwiUmVnaXN0ZXJVc2VyIiwid2ViM0luc3RhbmNlIiwidXNlU3RhdGUiLCJ3ZWIzIiwic2V0V2ViMyIsIkxvYWQiLCJzZXRMb2FkIiwicmVnaXN0ZXJpbmdVc2VyIiwic2V0UmVnaXN0ZXJpbmdVc2VyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwidXNlRWZmZWN0IiwiaW5pdFdlYjMiLCJnZXRXZWIzIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0dXBWb3RlRmFjdG9yeSIsImV0aCIsImdldEFjY291bnRzIiwidXNlciIsIm5ldCIsImdldElkIiwibmV0d29ya0lkIiwiZGVwbG95ZWROZXR3b3JrIiwiVm90ZUZhY3RvcnlDb250cmFjdCIsIm5ldHdvcmtzIiwiaW5zdGFuY2UiLCJDb250cmFjdCIsImFiaSIsImFkZHJlc3MiLCJmYWN0b3J5Q29udHJhY3QiLCJhbGVydCIsImNvbnNvbGUiLCJlcnJvciIsImNyZWF0ZUdyb3VwIiwibWV0aG9kcyIsInJlZ2lzdGVyVXNlciIsInNlbmQiLCJmcm9tIiwiZGlzcGxheUdyb3VwIiwiZ2V0VXNlciIsImNhbGwiLCJzdW1tYXJ5IiwibG9nIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUc7QUFDZkMsT0FBSyxFQUFFLEtBRFE7QUFFZkMsY0FBWSxFQUFFLElBRkM7QUFHZkMsVUFBUSxFQUFFLEtB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TUFBTixDQUFhQyxLQUFkLENBQWY7QUFBQSxLQUY1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FsQkosRUEwQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTFCSixFQTJCSSxNQUFDLHdEQUFEO0FBQ1EsVUFBTSxFQUFFM0MsZUFEaEI7QUFFUSxVQUFNLEVBQUMsVUFGZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0JKLEVBK0JJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvQkosRUFnQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVJLE1BQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsUUFBSSxFQUFDLFFBQWxCO0FBQTJCLFlBQVEsRUFBRVcsUUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixDQWhDSixDQVBKLENBREo7QUErQ0gsQ0ExSEQ7O0dBQU1sQixZOztLQUFBQSxZO0FBMkhTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3RlclVzZXIuMmY2YTM3MzdjNDlhM2Y5ZDQ3MDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IFZvdGVGYWN0b3J5Q29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlRmFjdG9yeS5qc29uXCI7XG5pbXBvcnQgVm90ZUNvbnRyYWN0IGZyb20gXCIuLi9jb250cmFjdHMvVm90ZS5qc29uXCI7XG5pbXBvcnQgeyBGb3JtLCBMb2FkZXIgIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgZ2V0V2ViMyBmcm9tIFwiLi4vZ2V0V2ViM1wiO1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XG5cbmNvbnN0IGFkbWluVGl0bGUgPSB7XG4gICAgY29sb3I6IFwicmVkXCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjUlXCIsXG4gICAgZm9udFNpemU6IFwiM2VtXCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiXG59O1xuXG5jb25zdCBhZG1pbkZpZWxkcyA9IHtcbiAgICBtYXJnaW46IFwiYXV0byA1JSBhdXRvIDUlXCJcbn07XG5cbmNvbnN0IFJlZ2lzdGVyVXNlciA9ICgpID0+IHtcbiAgICAvLyBCYXNpY1xuICAgIHZhciB3ZWIzSW5zdGFuY2U7XG4gICAgY29uc3QgW3dlYjMsIHNldFdlYjNdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtMb2FkLCBzZXRMb2FkXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtyZWdpc3RlcmluZ1VzZXIsIHNldFJlZ2lzdGVyaW5nVXNlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAvLyBDYWxsIHRoZSBjb250cmFjdFxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gaW5pdFdlYjMoKSB7XG4gICAgICAgICAgICB3ZWIzSW5zdGFuY2UgPSBhd2FpdCBnZXRXZWIzKCk7XG4gICAgICAgICAgICBzZXRXZWIzKHdlYjNJbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgaW5pdFdlYjMoKTtcbiAgICB9LFtMb2FkXSk7XG5cbiAgICB2YXIgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIHVzZXI7XG4gICAgICAgIHZhciBmYWN0b3J5Q29udHJhY3Q7XG4gICAgICAgIFxuICAgICAgICAvLyBJbml0aWFsaXplcyBWb3RlRmFjdG9yeSBDb250cmFjdFxuICAgICAgICB2YXIgc2V0dXBWb3RlRmFjdG9yeSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGlmKHdlYjMgPT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIFt1c2VyXSA9IChhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpKTtcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxuICAgICAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IFZvdGVGYWN0b3J5Q29udHJhY3QubmV0d29ya3NbbmV0d29ya0lkXTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcbiAgICAgICAgICAgICAgICAgICAgVm90ZUZhY3RvcnlDb250cmFjdC5hYmksXG4gICAgICAgICAgICAgICAgICAgIGRlcGxveWVkTmV0d29yayAmJiBkZXBsb3llZE5ldHdvcmsuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGZhY3RvcnlDb250cmFjdCA9IGluc3RhbmNlO1xuXG4gICAgICAgICAgICAgICAgLy8gU2V0IHdlYjMsIGFjY291bnRzLCBhbmQgY29udHJhY3QgdG8gdGhlIHN0YXRlLCBhbmQgdGhlbiBwcm9jZWVkIHdpdGggYW5cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxuICAgICAgICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQ2FsbHMgVm90ZUZhY3RvcnkgQ29udHJhY3QgdG8gY3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEdyb3VwXG4gICAgICAgIHZhciBjcmVhdGVHcm91cCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHNldFJlZ2lzdGVyaW5nVXNlcih0cnVlKTtcbiAgICAgICAgICAgIGlmKGZhY3RvcnlDb250cmFjdCA9PSAnJyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2FsbHMgdGhlIG1ldGhvZCBjcmVhdGVHcm91cCBmcm9tIFZvdGVGYWN0b3J5LnNvbFxuICAgICAgICAgICAgYXdhaXQgZmFjdG9yeUNvbnRyYWN0Lm1ldGhvZHMucmVnaXN0ZXJVc2VyKHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQpLnNlbmQoe1xuICAgICAgICAgICAgICAgIGZyb206IHVzZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0UmVnaXN0ZXJpbmdVc2VyKGZhbHNlKTtcbiAgICAgICAgICAgIHNldExvYWQoIUxvYWQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFZlcmlmeSB0aGUgdmFsdWVzIG9mIHRoZSBuZXdseSBjcmVhdGVkIGluc3RhbmNlIG9mIEdyb3VwXG4gICAgICAgIHZhciBkaXNwbGF5R3JvdXAgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgZmFjdG9yeUNvbnRyYWN0Lm1ldGhvZHMuZ2V0VXNlcigpLmNhbGwoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1bW1hcnkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGF3YWl0IHNldHVwVm90ZUZhY3RvcnkoKTtcbiAgICAgICAgYXdhaXQgY3JlYXRlR3JvdXAoKTtcbiAgICAgICAgYXdhaXQgZGlzcGxheUdyb3VwKCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgIDxoMSBzdHlsZT17YWRtaW5UaXRsZX0+UmVnaXN0ZXI8L2gxPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IHN0eWxlPXthZG1pbkZpZWxkc30+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXQgcmVxdWlyZWQgbGFiZWw9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0VXNlcm5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5UZXh0QXJlYSByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0RW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dCByZXF1aXJlZCBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRQYXNzd29yZChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICA+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxMb2FkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17cmVnaXN0ZXJpbmdVc2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5saW5lPSdjZW50ZXJlZCdcbiAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkJ1dHRvbj5DYW5jZWw8L0Zvcm0uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5CdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uU3VibWl0PXtvblN1Ym1pdH0+UmVnaXN0ZXI8L0Zvcm0uQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8Lz5cbiAgICApXG59O1xuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJVc2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==