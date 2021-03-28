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
      creatingGroup = _useState3[0],
      setCreatingGroup = _useState3[1]; // Call the contract


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      groupName = _useState4[0],
      setGroupName = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      description = _useState5[0],
      setDescription = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      groupID = _useState6[0],
      setGroupID = _useState6[1];

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
      var manager, factoryContract, setupVoteFactory, createGroup, displayGroup;
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
                          manager = _yield$web3$eth$getAc2[0];
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
                          setCreatingGroup(true);

                          if (!(factoryContract == '')) {
                            _context3.next = 3;
                            break;
                          }

                          return _context3.abrupt("return");

                        case 3:
                          _context3.next = 5;
                          return factoryContract.methods.createGroup(groupName, description, groupID).send({
                            from: manager
                          });

                        case 5:
                          setCreatingGroup(false);
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
                          return factoryContract.methods.getGroup(groupID).call();

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
    value: groupName,
    onChange: function onChange(event) {
      return setGroupName(event.target.value);
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
    value: description,
    onChange: function onChange(event) {
      return setDescription(event.target.value);
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
    value: groupID,
    onChange: function onChange(event) {
      return setGroupID(event.target.value);
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
    active: creatingGroup,
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

_s(RegisterUser, "kiTypCmlRvHTxx/urbOSjBsmguE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyVXNlci5qcyJdLCJuYW1lcyI6WyJhZG1pblRpdGxlIiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImFkbWluRmllbGRzIiwibWFyZ2luIiwiUmVnaXN0ZXJVc2VyIiwid2ViM0luc3RhbmNlIiwidXNlU3RhdGUiLCJ3ZWIzIiwic2V0V2ViMyIsIkxvYWQiLCJzZXRMb2FkIiwiY3JlYXRpbmdHcm91cCIsInNldENyZWF0aW5nR3JvdXAiLCJncm91cE5hbWUiLCJzZXRHcm91cE5hbWUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiZ3JvdXBJRCIsInNldEdyb3VwSUQiLCJ1c2VFZmZlY3QiLCJpbml0V2ViMyIsImdldFdlYjMiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXR1cFZvdGVGYWN0b3J5IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJtYW5hZ2VyIiwibmV0IiwiZ2V0SWQiLCJuZXR3b3JrSWQiLCJkZXBsb3llZE5ldHdvcmsiLCJWb3RlRmFjdG9yeUNvbnRyYWN0IiwibmV0d29ya3MiLCJpbnN0YW5jZSIsIkNvbnRyYWN0IiwiYWJpIiwiYWRkcmVzcyIsImZhY3RvcnlDb250cmFjdCIsImFsZXJ0IiwiY29uc29sZSIsImVycm9yIiwiY3JlYXRlR3JvdXAiLCJtZXRob2RzIiwic2VuZCIsImZyb20iLCJkaXNwbGF5R3JvdXAiLCJnZXRHcm91cCIsImNhbGwiLCJzdW1tYXJ5IiwibG9nIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUc7QUFDZkMsT0FBSyxFQUFFLEtBRFE7QUFFZkMsY0FBWSxFQUFFLElBRkM7QUFHZkMsVUFBUSxFQUFFLEtBSEs7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SyxLQUFLLENBQUM2QixNQUFOLENBQWFDLEtBQWQsQ0FBZDtBQUFBLEtBRjVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQWxCSixFQTBCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUJKLEVBMkJJLE1BQUMsd0RBQUQ7QUFDUSxVQUFNLEVBQUUxQyxhQURoQjtBQUVRLFVBQU0sRUFBQyxVQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQkosRUErQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQS9CSixFQWdDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzREFBRCxDQUFNLE1BQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUksTUFBQyxzREFBRCxDQUFNLE1BQU47QUFBYSxRQUFJLEVBQUMsUUFBbEI7QUFBMkIsWUFBUSxFQUFFVyxRQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLENBaENKLENBUEosQ0FESjtBQStDSCxDQTFIRDs7R0FBTWxCLFk7O0tBQUFBLFk7QUEySFNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdGVyVXNlci43NTE3YjNjOTY1YWY1ZGFhNjg1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgVm90ZUZhY3RvcnlDb250cmFjdCBmcm9tIFwiLi4vY29udHJhY3RzL1ZvdGVGYWN0b3J5Lmpzb25cIjtcbmltcG9ydCBWb3RlQ29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlLmpzb25cIjtcbmltcG9ydCB7IEZvcm0sIExvYWRlciAgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi9nZXRXZWIzXCI7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcblxuY29uc3QgYWRtaW5UaXRsZSA9IHtcbiAgICBjb2xvcjogXCJyZWRcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiNSVcIixcbiAgICBmb250U2l6ZTogXCIzZW1cIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbn07XG5cbmNvbnN0IGFkbWluRmllbGRzID0ge1xuICAgIG1hcmdpbjogXCJhdXRvIDUlIGF1dG8gNSVcIlxufTtcblxuY29uc3QgUmVnaXN0ZXJVc2VyID0gKCkgPT4ge1xuICAgIC8vIEJhc2ljXG4gICAgdmFyIHdlYjNJbnN0YW5jZTtcbiAgICBjb25zdCBbd2ViMywgc2V0V2ViM10gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW0xvYWQsIHNldExvYWRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW2NyZWF0aW5nR3JvdXAsIHNldENyZWF0aW5nR3JvdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLy8gQ2FsbCB0aGUgY29udHJhY3RcbiAgICBjb25zdCBbZ3JvdXBOYW1lLCBzZXRHcm91cE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtncm91cElELCBzZXRHcm91cElEXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGluaXRXZWIzKCkge1xuICAgICAgICAgICAgd2ViM0luc3RhbmNlID0gYXdhaXQgZ2V0V2ViMygpO1xuICAgICAgICAgICAgc2V0V2ViMyh3ZWIzSW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIGluaXRXZWIzKCk7XG4gICAgfSxbTG9hZF0pO1xuXG4gICAgdmFyIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBtYW5hZ2VyO1xuICAgICAgICB2YXIgZmFjdG9yeUNvbnRyYWN0O1xuICAgICAgICBcbiAgICAgICAgLy8gSW5pdGlhbGl6ZXMgVm90ZUZhY3RvcnkgQ29udHJhY3RcbiAgICAgICAgdmFyIHNldHVwVm90ZUZhY3RvcnkgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBpZih3ZWIzID09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBbbWFuYWdlcl0gPSAoYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKSk7XG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjb250cmFjdCBpbnN0YW5jZS5cbiAgICAgICAgICAgICAgICBjb25zdCBuZXR3b3JrSWQgPSBhd2FpdCB3ZWIzLmV0aC5uZXQuZ2V0SWQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXBsb3llZE5ldHdvcmsgPSBWb3RlRmFjdG9yeUNvbnRyYWN0Lm5ldHdvcmtzW25ldHdvcmtJZF07XG4gICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXG4gICAgICAgICAgICAgICAgICAgIFZvdGVGYWN0b3J5Q29udHJhY3QuYWJpLFxuICAgICAgICAgICAgICAgICAgICBkZXBsb3llZE5ldHdvcmsgJiYgZGVwbG95ZWROZXR3b3JrLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBmYWN0b3J5Q29udHJhY3QgPSBpbnN0YW5jZTtcblxuICAgICAgICAgICAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cbiAgICAgICAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgICAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIENhbGxzIFZvdGVGYWN0b3J5IENvbnRyYWN0IHRvIGNyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBHcm91cFxuICAgICAgICB2YXIgY3JlYXRlR3JvdXAgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBzZXRDcmVhdGluZ0dyb3VwKHRydWUpO1xuICAgICAgICAgICAgaWYoZmFjdG9yeUNvbnRyYWN0ID09ICcnKXtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDYWxscyB0aGUgbWV0aG9kIGNyZWF0ZUdyb3VwIGZyb20gVm90ZUZhY3Rvcnkuc29sXG4gICAgICAgICAgICBhd2FpdCBmYWN0b3J5Q29udHJhY3QubWV0aG9kcy5jcmVhdGVHcm91cChncm91cE5hbWUsIGRlc2NyaXB0aW9uLCBncm91cElEKS5zZW5kKHtcbiAgICAgICAgICAgICAgICBmcm9tOiBtYW5hZ2VyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldENyZWF0aW5nR3JvdXAoZmFsc2UpO1xuICAgICAgICAgICAgc2V0TG9hZCghTG9hZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gVmVyaWZ5IHRoZSB2YWx1ZXMgb2YgdGhlIG5ld2x5IGNyZWF0ZWQgaW5zdGFuY2Ugb2YgR3JvdXBcbiAgICAgICAgdmFyIGRpc3BsYXlHcm91cCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBmYWN0b3J5Q29udHJhY3QubWV0aG9kcy5nZXRHcm91cChncm91cElEKS5jYWxsKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdW1tYXJ5KTtcbiAgICAgICAgfTtcblxuICAgICAgICBhd2FpdCBzZXR1cFZvdGVGYWN0b3J5KCk7XG4gICAgICAgIGF3YWl0IGNyZWF0ZUdyb3VwKCk7XG4gICAgICAgIGF3YWl0IGRpc3BsYXlHcm91cCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWRlci8+XG4gICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICA8aDEgc3R5bGU9e2FkbWluVGl0bGV9PlJlZ2lzdGVyPC9oMT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBzdHlsZT17YWRtaW5GaWVsZHN9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0IHJlcXVpcmVkIGxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2dyb3VwTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRHcm91cE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5UZXh0QXJlYSByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0RGVzY3JpcHRpb24oZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dCByZXF1aXJlZCBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtncm91cElEfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldEdyb3VwSUQoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8TG9hZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2NyZWF0aW5nR3JvdXB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmxpbmU9J2NlbnRlcmVkJ1xuICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQnV0dG9uPkNhbmNlbDwvRm9ybS5CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25TdWJtaXQ9e29uU3VibWl0fT5SZWdpc3RlcjwvRm9ybS5CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvPlxuICAgIClcbn07XG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlclVzZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9