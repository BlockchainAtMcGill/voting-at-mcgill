webpackHotUpdate_N_E("pages/joinGroup",{

/***/ "./src/pages/joinGroup.js":
/*!********************************!*\
  !*** ./src/pages/joinGroup.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contracts/VoteFactory.json */ "./src/contracts/VoteFactory.json");
var _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/VoteFactory.json */ "./src/contracts/VoteFactory.json", 1);
/* harmony import */ var _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contracts/Vote.json */ "./src/contracts/Vote.json");
var _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/Vote.json */ "./src/contracts/Vote.json", 1);
/* harmony import */ var _getWeb3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../getWeb3 */ "./src/getWeb3.js");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "/home/wen_wong/voting-at-mcgill/client/src/pages/joinGroup.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  card: {
    width: '80%'
  }
});

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
                return Object(_getWeb3__WEBPACK_IMPORTED_MODULE_7__["default"])();

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
        var networkId, deployedNetwork, instance;
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
                return web3.eth.net.getId();

              case 6:
                networkId = _context2.sent;
                deployedNetwork = _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_5__.networks[networkId];
                instance = new web3.eth.Contract(_contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_5__.abi, deployedNetwork && deployedNetwork.address);
                setContract(instance); // Set web3, accounts, and contract to the state, and then proceed with an

                _context2.next = 16;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](3);
                // Catch any errors for any of the above operations.
                alert("Failed to load web3, accounts, or contract. Check console for details.");
                console.error(_context2.t0);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 12]]);
      }));
      return _setup.apply(this, arguments);
    }

    setup(); // console.log('ok')
  }, [web3]);

  var convertStrArrayToIntArray = function convertStrArrayToIntArray(str, sep) {
    sep = typeof sep !== 'undefined' ? sep : " ";
    return str.split(sep).map(function (val) {
      return parseInt(val, 10);
    });
  };

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
                _context5.next = 4;
                return groupsID.forEach(function (identification) {
                  displayInfo(identification).then(function (newGroup) {
                    renderGroups([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(renderedGroups), [newGroup]));
                  });
                });

              case 4:
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
    if (renderedGroups != []) {
      console.log(renderedGroups);
    }
  }, [renderedGroups]); //return <a>Hello World</a>;

  return renderedGroups ? renderedGroups.map(function (group, index) {
    return (//<Link className="ui button" route ={`/elections/vote/${vote}`} key={index}>
      __jsx("div", {
        className: "ui link card",
        style: {
          width: "80%",
          color: '#f00000'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "card",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "content",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "header",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }
      }, group[index][0]), __jsx("div", {
        className: "description",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 13
        }
      }, "hello"))))
    );
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null);
};

_s(JoinGroup, "o6SvP/+TZFPQW6LLIZfNW7VgzNY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2pvaW5Hcm91cC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImNhcmQiLCJ3aWR0aCIsIkpvaW5Hcm91cCIsInVzZVN0YXRlIiwid2ViMyIsInNldFdlYjMiLCJncm91cHNJRCIsInNldEdyb3Vwc0lEIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsInJlbmRlcmVkR3JvdXBzIiwicmVuZGVyR3JvdXBzIiwidXNlRWZmZWN0IiwiaW5pdFdlYjMiLCJjb25zb2xlIiwibG9nIiwiZ2V0V2ViMyIsIndlYjNJbnN0YW5jZSIsInNldHVwIiwiZXRoIiwibmV0IiwiZ2V0SWQiLCJuZXR3b3JrSWQiLCJkZXBsb3llZE5ldHdvcmsiLCJWb3RlRmFjdG9yeUNvbnRyYWN0IiwibmV0d29ya3MiLCJpbnN0YW5jZSIsIkNvbnRyYWN0IiwiYWJpIiwiYWRkcmVzcyIsImFsZXJ0IiwiZXJyb3IiLCJjb252ZXJ0U3RyQXJyYXlUb0ludEFycmF5Iiwic3RyIiwic2VwIiwic3BsaXQiLCJtYXAiLCJ2YWwiLCJwYXJzZUludCIsImRpc3BsYXlWb3RlcyIsIm1ldGhvZHMiLCJnZXRFeGlzdGluZ0dyb3VwcyIsImNhbGwiLCJyZXNwb25zZSIsInRlbXAiLCJpIiwibGVuZ3RoIiwiZGlzcGxheUluZm8iLCJpZGVudGlmaWNhdGlvbiIsImdldEdyb3VwIiwicmVuZGVyVm90ZXMiLCJmb3JFYWNoIiwidGhlbiIsIm5ld0dyb3VwIiwiZ3JvdXAiLCJpbmRleCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxtQkFBTyxDQUFDLGtGQUFELENBQVA7O0FBRUEsSUFBTUMsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzNCQyxNQUFJLEVBQUU7QUFDSkMsU0FBSyxFQUFDO0FBREY7QUFE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LENBREEsQ0FEQTtBQUZ1QztBQUFBLEdBQW5CLENBQUgsR0FXbkIsa0VBWEY7QUFZSCxDQWhIRDs7R0FBTXJELFM7O0tBQUFBLFM7QUFrSFNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2pvaW5Hcm91cC41NDc4OGNmNmIxOTM1MzQ5MmQ3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFZvdGVGYWN0b3J5Q29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlRmFjdG9yeS5qc29uXCI7XG5pbXBvcnQgVm90ZUNvbnRyYWN0IGZyb20gXCIuLi9jb250cmFjdHMvVm90ZS5qc29uXCI7XG5pbXBvcnQgZ2V0V2ViMyBmcm9tIFwiLi4vZ2V0V2ViM1wiO1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XG5cbnJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIik7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICBjYXJkOiB7XG4gICAgd2lkdGg6JzgwJSdcbiAgfVxufSk7XG5cbmNvbnN0IEpvaW5Hcm91cCA9ICgpID0+IHtcbiAgICBjb25zdCBbd2ViMywgc2V0V2ViM10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtncm91cHNJRCwgc2V0R3JvdXBzSURdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbY29udHJhY3QsIHNldENvbnRyYWN0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3JlbmRlcmVkR3JvdXBzLCByZW5kZXJHcm91cHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7Ly8gZ2V0IHdlYjNcbiAgICBhc3luYyBmdW5jdGlvbiBpbml0V2ViMygpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdpbml0aWFsaXppbmcgd2ViMycpO1xuICAgICAgY29uc3Qgd2ViM0luc3RhbmNlID0gYXdhaXQgZ2V0V2ViMygpO1xuICAgICAgc2V0V2ViMyh3ZWIzSW5zdGFuY2UpXG4gICAgfVxuICAgIGluaXRXZWIzKCk7XG4gIH0sW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7Ly8gZ2V0IEZhY3RvcnkgY29udHJhY3RcbiAgICBhc3luYyBmdW5jdGlvbiBzZXR1cCgpIHtcbiAgICAgIGlmKHdlYjMgPT0gXCJcIikge1xuICAgICAgICBjb25zb2xlLmxvZygndW5hYmxlIHRvIGdldCBmYWN0b3J5JylcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gR2V0IHRoZSBjb250cmFjdCBpbnN0YW5jZS5cbiAgICAgICAgY29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViMy5ldGgubmV0LmdldElkKCk7XG4gICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IFZvdGVGYWN0b3J5Q29udHJhY3QubmV0d29ya3NbbmV0d29ya0lkXTtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXG4gICAgICAgICAgVm90ZUZhY3RvcnlDb250cmFjdC5hYmksXG4gICAgICAgICAgZGVwbG95ZWROZXR3b3JrICYmIGRlcGxveWVkTmV0d29yay5hZGRyZXNzLFxuICAgICAgICApO1xuICAgICAgICBzZXRDb250cmFjdChpbnN0YW5jZSk7XG4gICAgXG4gICAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBDYXRjaCBhbnkgZXJyb3JzIGZvciBhbnkgb2YgdGhlIGFib3ZlIG9wZXJhdGlvbnMuXG4gICAgICAgIGFsZXJ0KFxuICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICAgICAgc2V0dXAoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdvaycpXG4gIH0sW3dlYjNdKTtcblxuICB2YXIgY29udmVydFN0ckFycmF5VG9JbnRBcnJheSA9IGZ1bmN0aW9uKHN0ciwgc2VwKSB7XG5cdHNlcCA9IHR5cGVvZiBzZXAgIT09ICd1bmRlZmluZWQnID8gc2VwIDogXCIgXCI7XG5cdHJldHVybiBzdHIuc3BsaXQoc2VwKS5tYXAoZnVuY3Rpb24odmFsKSB7XG5cdFx0cmV0dXJuIHBhcnNlSW50KHZhbCwgMTApO1xuXHR9KTtcbn1cblxuICB1c2VFZmZlY3QoKCk9PiB7Ly9kaXNwbGF5IGF2YWlsYWJsZSB2b3RlcyBhZGRyZXNzZXNcbiAgICB2YXIgZGlzcGxheVZvdGVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYoY29udHJhY3QgPT0gJycpe1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0RXhpc3RpbmdHcm91cHMoKS5jYWxsKCk7XG4gICAgICAvLyBVcGRhdGUgc3RhdGUgd2l0aCB0aGUgcmVzdWx0LlxuICAgICAgY29uc3QgdGVtcCA9IFtdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXNwb25zZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB0ZW1wW2ldID0gcGFyc2VJbnQocmVzcG9uc2VbaV0pO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2codGVtcCk7XG4gICAgICBzZXRHcm91cHNJRCh0ZW1wKTtcbiAgICB9O1xuICAgIGRpc3BsYXlWb3RlcygpO1xuICB9LFtjb250cmFjdF0pO1xuICBcblxuICB2YXIgZGlzcGxheUluZm8gPSBhc3luYyAoaWRlbnRpZmljYXRpb24pID0+IHsgXG4gICAgaWYoZ3JvdXBzSUQgPT0gJycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCBjb250cmFjdC5tZXRob2RzLmdldEdyb3VwKGlkZW50aWZpY2F0aW9uKS5jYWxsKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfTtcbiAgdXNlRWZmZWN0KCgpPT4gey8vcmVuZGVyIHZvdGVzXG4gICAgdmFyIHJlbmRlclZvdGVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAoIWdyb3Vwc0lEKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IGdyb3Vwc0lELmZvckVhY2goaWRlbnRpZmljYXRpb24gPT4ge1xuICAgICAgICAgICAgZGlzcGxheUluZm8oaWRlbnRpZmljYXRpb24pLnRoZW4obmV3R3JvdXAgPT4ge1xuICAgICAgICAgICAgICByZW5kZXJHcm91cHMoWy4uLnJlbmRlcmVkR3JvdXBzLCBuZXdHcm91cF0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICByZW5kZXJWb3RlcygpO1xuICB9LFtncm91cHNJRF0pO1xuXG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBpZihyZW5kZXJlZEdyb3VwcyAhPSBbXSkge1xuICAgICAgY29uc29sZS5sb2cocmVuZGVyZWRHcm91cHMpO1xuICAgIH1cbiAgfSxbcmVuZGVyZWRHcm91cHNdKTtcblxuICAgIC8vcmV0dXJuIDxhPkhlbGxvIFdvcmxkPC9hPjtcbiAgICByZXR1cm4gcmVuZGVyZWRHcm91cHMgPyByZW5kZXJlZEdyb3Vwcy5tYXAoKGdyb3VwLCBpbmRleCkgPT4gXG4gICAgICAgIC8vPExpbmsgY2xhc3NOYW1lPVwidWkgYnV0dG9uXCIgcm91dGUgPXtgL2VsZWN0aW9ucy92b3RlLyR7dm90ZX1gfSBrZXk9e2luZGV4fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBsaW5rIGNhcmRcIiBzdHlsZT17e3dpZHRoOlwiODAlXCIsIGNvbG9yOiAnI2YwMDAwMCd9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj57Z3JvdXBbaW5kZXhdWzBdfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPmhlbGxvXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgKSA6IDw+PC8+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBKb2luR3JvdXA7Il0sInNvdXJjZVJvb3QiOiIifQ==