webpackHotUpdate_N_E("pages/elections/apply/apply",{

/***/ "./src/pages/elections/apply/apply.js":
/*!********************************************!*\
  !*** ./src/pages/elections/apply/apply.js ***!
  \********************************************/
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
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/header */ "./src/components/header.js");
/* harmony import */ var _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../contracts/VoteFactory.json */ "./src/contracts/VoteFactory.json");
var _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../contracts/VoteFactory.json */ "./src/contracts/VoteFactory.json", 1);
/* harmony import */ var _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../contracts/Vote.json */ "./src/contracts/Vote.json");
var _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../contracts/Vote.json */ "./src/contracts/Vote.json", 1);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _getWeb3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../getWeb3 */ "./src/getWeb3.js");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);




var _jsxFileName = "C:\\Users\\foubroker\\Desktop\\BAM\\voting-at-mcgill-2\\client\\src\\pages\\elections\\apply\\apply.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








var candFields = {
  margin: "auto 5% auto 5%"
};
var candTitle = {
  color: "red",
  marginBottom: "5%",
  fontSize: "3em",
  textAlign: "center"
};

var Apply = function Apply() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      web3 = _useState[0],
      setWeb3 = _useState[1];

  var web3Instance;
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
  }, []); //please follow the course for a better implementation @Jing

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      candidateName = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      currentDate = _useState3[0],
      setCurrentDate = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      description = _useState4[0],
      setDescription = _useState4[1];

  var onSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7(event) {
      var manager, factoryContract, voteContract, addressOfVote, setupVoteFactory, getElectionAddress, initializeElection, setCandidate, displayCand, votePage;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              event.preventDefault();

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
              }();

              getElectionAddress = /*#__PURE__*/function () {
                var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
                  var url, pos;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          url = window.location.href;
                          pos = url.indexOf('y') + 2;
                          addressOfVote = url.slice(pos);
                          console.log(addressOfVote);

                        case 4:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function getElectionAddress() {
                  return _ref3.apply(this, arguments);
                };
              }();

              initializeElection = /*#__PURE__*/function () {
                var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
                  var instance;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.prev = 0;
                          _context4.next = 3;
                          return new web3.eth.Contract(_contracts_Vote_json__WEBPACK_IMPORTED_MODULE_6__.abi, addressOfVote);

                        case 3:
                          instance = _context4.sent;
                          voteContract = instance;
                          _context4.next = 11;
                          break;

                        case 7:
                          _context4.prev = 7;
                          _context4.t0 = _context4["catch"](0);
                          // Catch any errors for any of the above operations.
                          alert("Failed to load web3, accounts, or contract. Check console for details.");
                          console.error(_context4.t0);

                        case 11:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4, null, [[0, 7]]);
                }));

                return function initializeElection() {
                  return _ref4.apply(this, arguments);
                };
              }();

              setCandidate = /*#__PURE__*/function () {
                var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return voteContract.methods.enterElection(candidateName, description, new Date(currentDate).getTime()).send({
                            from: manager
                          });

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function setCandidate() {
                  return _ref5.apply(this, arguments);
                };
              }();

              displayCand = /*#__PURE__*/function () {
                var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6() {
                  var summary;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return voteContract.methods.get_candidate(manager).call();

                        case 2:
                          summary = _context6.sent;
                          console.log(summary);

                        case 4:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                return function displayCand() {
                  return _ref6.apply(this, arguments);
                };
              }();

              _context7.next = 8;
              return setupVoteFactory();

            case 8:
              _context7.next = 10;
              return getElectionAddress();

            case 10:
              _context7.next = 12;
              return initializeElection();

            case 12:
              _context7.next = 14;
              return setCandidate();

            case 14:
              _context7.next = 16;
              return displayCand();

            case 16:
              votePage = "/elections/vote/" + addressOfVote;
              next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push(votePage);

            case 18:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }), __jsx("h1", {
    style: candTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, "Run for Election"), __jsx("h3", {
    style: {
      color: "red"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, " "), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"], {
    onSubmit: onSubmit,
    style: candFields,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Input, {
    required: true,
    label: "Enter Name",
    value: candidateName,
    onChange: function onChange(event) {
      return setName(event.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
      lineNumber: 126,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Input, {
    label: "Current date",
    type: "date",
    value: currentDate,
    onChange: function onChange(event) {
      return setCurrentDate(event.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
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
      lineNumber: 139,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Button, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 21
    }
  }, "Cancel"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Button, {
    type: "submit",
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 21
    }
  }, "Run for Election"))));
};
/*Apply.getInitialProps = async (props) => {
    console.log(props.query.address)
    return {VoteContract: props.query.address}
  };
*/


_s(Apply, "ecTjlvFfVOQJWcISIHCddbwJXZg=");

_c = Apply;
/* harmony default export */ __webpack_exports__["default"] = (Apply);

var _c;

$RefreshReg$(_c, "Apply");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VsZWN0aW9ucy9hcHBseS9hcHBseS5qcyJdLCJuYW1lcyI6WyJjYW5kRmllbGRzIiwibWFyZ2luIiwiY2FuZFRpdGxlIiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSIsInRleHRBbGlnbiIsIkFwcGx5IiwidXNlU3RhdGUiLCJ3ZWIzIiwic2V0V2ViMyIsIndlYjNJbnN0YW5jZSIsInVzZUVmZmVjdCIsImluaXRXZWIzIiwiZ2V0V2ViMyIsImNhbmRpZGF0ZU5hbWUiLCJzZXROYW1lIiwiY3VycmVudERhdGUiLCJzZXRDdXJyZW50RGF0ZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXR1cFZvdGVGYWN0b3J5IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJtYW5hZ2VyIiwibmV0IiwiZ2V0SWQiLCJuZXR3b3JrSWQiLCJkZXBsb3llZE5ldHdvcmsiLCJWb3RlRmFjdG9yeUNvbnRyYWN0IiwibmV0d29ya3MiLCJpbnN0YW5jZSIsIkNvbnRyYWN0IiwiYWJpIiwiYWRkcmVzcyIsImZhY3RvcnlDb250cmFjdCIsImFsZXJ0IiwiY29uc29sZSIsImVycm9yIiwiZ2V0RWxlY3Rpb25BZGRyZXNzIiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicG9zIiwiaW5kZXhPZiIsImFkZHJlc3NPZlZvdGUiLCJzbGljZSIsImxvZyIsImluaXRpYWxpemVFbGVjdGlvbiIsIlZvdGVDb250cmFjdCIsInZvdGVDb250cmFjdCIsInNldENhbmRpZGF0ZSIsIm1ldGhvZHMiLCJlbnRlckVsZWN0aW9uIiwiRGF0ZSIsImdldFRpbWUiLCJzZW5kIiwiZnJvbSIsImRpc3BsYXlDYW5kIiwiZ2V0X2NhbmRpZGF0ZSIsImNhbGwiLCJzdW1tYXJ5Iiwidm90ZVBhZ2UiLCJSb3V0ZXIiLCJwdXNoIiwidGFyZ2V0IiwidmFsdWUiXSwi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QUE7QUFBQTtBQUFBO0FBQUEsSUFqQ0osRUFrQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVJLE1BQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsUUFBSSxFQUFDLFFBQWxCO0FBQTJCLFlBQVEsRUFBRWpELFFBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkosQ0FsQ0osQ0FQSixDQURKO0FBb0RILENBMUlEO0FBMklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztHQS9JTWQsSzs7S0FBQUEsSztBQWdKU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZWxlY3Rpb25zL2FwcGx5L2FwcGx5LmZlOWFhNDBhNjU0YTIwNDAwYTM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5pbXBvcnQgVm90ZUZhY3RvcnlDb250cmFjdCBmcm9tIFwiLi4vLi4vLi4vY29udHJhY3RzL1ZvdGVGYWN0b3J5Lmpzb25cIjtcclxuaW1wb3J0IFZvdGVDb250cmFjdCBmcm9tIFwiLi4vLi4vLi4vY29udHJhY3RzL1ZvdGUuanNvblwiO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi8uLi8uLi9nZXRXZWIzXCI7XHJcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IGNhbmRGaWVsZHMgPSB7XHJcbiAgICBtYXJnaW46IFwiYXV0byA1JSBhdXRvIDUlXCJcclxufTtcclxuY29uc3QgY2FuZFRpdGxlID0ge1xyXG4gICAgY29sb3I6IFwicmVkXCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiNSVcIixcclxuICAgIGZvbnRTaXplOiBcIjNlbVwiLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiXHJcbn07XHJcblxyXG5jb25zdCBBcHBseSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbd2ViMywgc2V0V2ViM10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICB2YXIgd2ViM0luc3RhbmNlO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBpbml0V2ViMygpIHtcclxuICAgICAgICAgICAgd2ViM0luc3RhbmNlID0gYXdhaXQgZ2V0V2ViMygpO1xyXG4gICAgICAgICAgICBzZXRXZWIzKHdlYjNJbnN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluaXRXZWIzKCk7XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICAvL3BsZWFzZSBmb2xsb3cgdGhlIGNvdXJzZSBmb3IgYSBiZXR0ZXIgaW1wbGVtZW50YXRpb24gQEppbmdcclxuICAgIGNvbnN0IFtjYW5kaWRhdGVOYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtjdXJyZW50RGF0ZSwgc2V0Q3VycmVudERhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICB2YXIgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB2YXIgbWFuYWdlclxyXG4gICAgICAgIHZhciBmYWN0b3J5Q29udHJhY3RcclxuICAgICAgICB2YXIgdm90ZUNvbnRyYWN0O1xyXG4gICAgICAgIHZhciBhZGRyZXNzT2ZWb3RlO1xyXG5cclxuICAgICAgICB2YXIgc2V0dXBWb3RlRmFjdG9yeSA9IGFzeW5jICgpID0+IHsgLy9pbml0aWFsaXplcyB2b3RlRmFjdG9yeVxyXG4gICAgICAgICAgICBpZih3ZWIzID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIFttYW5hZ2VyXSA9IChhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpKTtcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXR3b3JrSWQgPSBhd2FpdCB3ZWIzLmV0aC5uZXQuZ2V0SWQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IFZvdGVGYWN0b3J5Q29udHJhY3QubmV0d29ya3NbbmV0d29ya0lkXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIFZvdGVGYWN0b3J5Q29udHJhY3QuYWJpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlcGxveWVkTmV0d29yayAmJiBkZXBsb3llZE5ldHdvcmsuYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBmYWN0b3J5Q29udHJhY3QgPSBpbnN0YW5jZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgd2ViMywgYWNjb3VudHMsIGFuZCBjb250cmFjdCB0byB0aGUgc3RhdGUsIGFuZCB0aGVuIHByb2NlZWQgd2l0aCBhblxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxyXG4gICAgICAgICAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgZ2V0RWxlY3Rpb25BZGRyZXNzID0gYXN5bmMoKSA9PntcclxuICAgICAgICAgICAgY29uc3QgdXJsPXdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgICAgICBjb25zdCBwb3M9dXJsLmluZGV4T2YoJ3knKSsyO1xyXG4gICAgICAgICAgICBhZGRyZXNzT2ZWb3RlPSB1cmwuc2xpY2UocG9zKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYWRkcmVzc09mVm90ZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgaW5pdGlhbGl6ZUVsZWN0aW9uID0gYXN5bmMgKCkgPT4gey8vaW5pdGlhbGl6ZXMgdm90ZSBjb250cmFjdFxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjb250cmFjdCBpbnN0YW5jZS5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gYXdhaXQgbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIFZvdGVDb250cmFjdC5hYmksXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc09mVm90ZSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB2b3RlQ29udHJhY3QgPSBpbnN0YW5jZTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cclxuICAgICAgICAgICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHNldENhbmRpZGF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdm90ZUNvbnRyYWN0Lm1ldGhvZHMuZW50ZXJFbGVjdGlvbihjYW5kaWRhdGVOYW1lLCBkZXNjcmlwdGlvbiAsbmV3IERhdGUoY3VycmVudERhdGUpLmdldFRpbWUoKSkuc2VuZCh7ZnJvbTogbWFuYWdlcn0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGRpc3BsYXlDYW5kID0gYXN5bmMgKCkgPT4geyAvLyB0ZXN0aW5nIHB1cnBvc2VzXHJcbiAgICAgICAgICAgIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCB2b3RlQ29udHJhY3QubWV0aG9kcy5nZXRfY2FuZGlkYXRlKG1hbmFnZXIpLmNhbGwoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3VtbWFyeSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBhd2FpdCBzZXR1cFZvdGVGYWN0b3J5KCk7XHJcbiAgICAgICAgYXdhaXQgZ2V0RWxlY3Rpb25BZGRyZXNzKCk7XHJcbiAgICAgICAgYXdhaXQgaW5pdGlhbGl6ZUVsZWN0aW9uKCk7XHJcbiAgICAgICAgYXdhaXQgc2V0Q2FuZGlkYXRlKCk7XHJcbiAgICAgICAgYXdhaXQgZGlzcGxheUNhbmQoKTtcclxuICAgICAgICBjb25zdCB2b3RlUGFnZT0gXCIvZWxlY3Rpb25zL3ZvdGUvXCIrIGFkZHJlc3NPZlZvdGU7XHJcbiAgICAgICAgUm91dGVyLnB1c2godm90ZVBhZ2UpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxoMSBzdHlsZT0ge2NhbmRUaXRsZX0+UnVuIGZvciBFbGVjdGlvbjwvaDE+XHJcbiAgICAgICAgICAgIDxoMyBzdHlsZT17e2NvbG9yOiBcInJlZFwifX0+IDwvaDM+XHJcbiAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gc3R5bGU9e2NhbmRGaWVsZHN9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dCByZXF1aXJlZCBsYWJlbD1cIkVudGVyIE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2FuZGlkYXRlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJDdXJyZW50IGRhdGVcIiB0eXBlPVwiZGF0ZVwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VycmVudERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRDdXJyZW50RGF0ZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5UZXh0QXJlYSByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldERlc2NyaXB0aW9uKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5CdXR0b24+Q2FuY2VsPC9Gb3JtLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5CdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uU3VibWl0PXtvblN1Ym1pdH0+UnVuIGZvciBFbGVjdGlvbjwvRm9ybS5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgICApXHJcbn07XHJcbi8qQXBwbHkuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHByb3BzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcy5xdWVyeS5hZGRyZXNzKVxyXG4gICAgcmV0dXJuIHtWb3RlQ29udHJhY3Q6IHByb3BzLnF1ZXJ5LmFkZHJlc3N9XHJcbiAgfTtcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgQXBwbHk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=