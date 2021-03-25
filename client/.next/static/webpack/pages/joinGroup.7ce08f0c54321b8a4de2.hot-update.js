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
      }, group[0][0]), __jsx("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2pvaW5Hcm91cC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImNhcmQiLCJ3aWR0aCIsIkpvaW5Hcm91cCIsInVzZVN0YXRlIiwid2ViMyIsInNldFdlYjMiLCJncm91cHNJRCIsInNldEdyb3Vwc0lEIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsInJlbmRlcmVkR3JvdXBzIiwicmVuZGVyR3JvdXBzIiwidXNlRWZmZWN0IiwiaW5pdFdlYjMiLCJjb25zb2xlIiwibG9nIiwiZ2V0V2ViMyIsIndlYjNJbnN0YW5jZSIsInNldHVwIiwiZXRoIiwibmV0IiwiZ2V0SWQiLCJuZXR3b3JrSWQiLCJkZXBsb3llZE5ldHdvcmsiLCJWb3RlRmFjdG9yeUNvbnRyYWN0IiwibmV0d29ya3MiLCJpbnN0YW5jZSIsIkNvbnRyYWN0IiwiYWJpIiwiYWRkcmVzcyIsImFsZXJ0IiwiZXJyb3IiLCJjb252ZXJ0U3RyQXJyYXlUb0ludEFycmF5Iiwic3RyIiwic2VwIiwic3BsaXQiLCJtYXAiLCJ2YWwiLCJwYXJzZUludCIsImRpc3BsYXlWb3RlcyIsIm1ldGhvZHMiLCJnZXRFeGlzdGluZ0dyb3VwcyIsImNhbGwiLCJyZXNwb25zZSIsInRlbXAiLCJpIiwibGVuZ3RoIiwiZGlzcGxheUluZm8iLCJpZGVudGlmaWNhdGlvbiIsImdldEdyb3VwIiwicmVuZGVyVm90ZXMiLCJmb3JFYWNoIiwidGhlbiIsIm5ld0dyb3VwIiwiZ3JvdXAiLCJpbmRleCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxtQkFBTyxDQUFDLGtGQUFELENBQVA7O0FBRUEsSUFBTUMsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzNCQyxNQUFJLEVBQUU7QUFDSkMsU0FBSyxFQUFDO0FBREY7QUFE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Q0FEQSxDQURBO0FBRnVDO0FBQUEsR0FBbkIsQ0FBSCxHQVVuQixrRUFWRjtBQVdILENBL0dEOztHQUFNcEQsUzs7S0FBQUEsUztBQWlIU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvam9pbkdyb3VwLjdjZTA4ZjBjNTQzMjFiOGE0ZGUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVm90ZUZhY3RvcnlDb250cmFjdCBmcm9tIFwiLi4vY29udHJhY3RzL1ZvdGVGYWN0b3J5Lmpzb25cIjtcbmltcG9ydCBWb3RlQ29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlLmpzb25cIjtcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi9nZXRXZWIzXCI7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcblxucmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiKTtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIGNhcmQ6IHtcbiAgICB3aWR0aDonODAlJ1xuICB9XG59KTtcblxuY29uc3QgSm9pbkdyb3VwID0gKCkgPT4ge1xuICAgIGNvbnN0IFt3ZWIzLCBzZXRXZWIzXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2dyb3Vwc0lELCBzZXRHcm91cHNJRF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcmVuZGVyZWRHcm91cHMsIHJlbmRlckdyb3Vwc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHsvLyBnZXQgd2ViM1xuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXRXZWIzKCkge1xuICAgICAgY29uc29sZS5sb2coJ2luaXRpYWxpemluZyB3ZWIzJyk7XG4gICAgICBjb25zdCB3ZWIzSW5zdGFuY2UgPSBhd2FpdCBnZXRXZWIzKCk7XG4gICAgICBzZXRXZWIzKHdlYjNJbnN0YW5jZSlcbiAgICB9XG4gICAgaW5pdFdlYjMoKTtcbiAgfSxbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHsvLyBnZXQgRmFjdG9yeSBjb250cmFjdFxuICAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwKCkge1xuICAgICAgaWYod2ViMyA9PSBcIlwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1bmFibGUgdG8gZ2V0IGZhY3RvcnknKVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxuICAgICAgICBjb25zdCBuZXR3b3JrSWQgPSBhd2FpdCB3ZWIzLmV0aC5uZXQuZ2V0SWQoKTtcbiAgICAgICAgY29uc3QgZGVwbG95ZWROZXR3b3JrID0gVm90ZUZhY3RvcnlDb250cmFjdC5uZXR3b3Jrc1tuZXR3b3JrSWRdO1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcbiAgICAgICAgICBWb3RlRmFjdG9yeUNvbnRyYWN0LmFiaSxcbiAgICAgICAgICBkZXBsb3llZE5ldHdvcmsgJiYgZGVwbG95ZWROZXR3b3JrLmFkZHJlc3MsXG4gICAgICAgICk7XG4gICAgICAgIHNldENvbnRyYWN0KGluc3RhbmNlKTtcbiAgICBcbiAgICAgICAgLy8gU2V0IHdlYjMsIGFjY291bnRzLCBhbmQgY29udHJhY3QgdG8gdGhlIHN0YXRlLCBhbmQgdGhlbiBwcm9jZWVkIHdpdGggYW5cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cbiAgICAgICAgYWxlcnQoXG4gICAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxuICAgICAgICApO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgICBzZXR1cCgpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ29rJylcbiAgfSxbd2ViM10pO1xuXG4gIHZhciBjb252ZXJ0U3RyQXJyYXlUb0ludEFycmF5ID0gZnVuY3Rpb24oc3RyLCBzZXApIHtcblx0c2VwID0gdHlwZW9mIHNlcCAhPT0gJ3VuZGVmaW5lZCcgPyBzZXAgOiBcIiBcIjtcblx0cmV0dXJuIHN0ci5zcGxpdChzZXApLm1hcChmdW5jdGlvbih2YWwpIHtcblx0XHRyZXR1cm4gcGFyc2VJbnQodmFsLCAxMCk7XG5cdH0pO1xufVxuXG4gIHVzZUVmZmVjdCgoKT0+IHsvL2Rpc3BsYXkgYXZhaWxhYmxlIHZvdGVzIGFkZHJlc3Nlc1xuICAgIHZhciBkaXNwbGF5Vm90ZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZihjb250cmFjdCA9PSAnJyl7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5nZXRFeGlzdGluZ0dyb3VwcygpLmNhbGwoKTtcbiAgICAgIC8vIFVwZGF0ZSBzdGF0ZSB3aXRoIHRoZSByZXN1bHQuXG4gICAgICBjb25zdCB0ZW1wID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3BvbnNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRlbXBbaV0gPSBwYXJzZUludChyZXNwb25zZVtpXSk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyh0ZW1wKTtcbiAgICAgIHNldEdyb3Vwc0lEKHRlbXApO1xuICAgIH07XG4gICAgZGlzcGxheVZvdGVzKCk7XG4gIH0sW2NvbnRyYWN0XSk7XG4gIFxuXG4gIHZhciBkaXNwbGF5SW5mbyA9IGFzeW5jIChpZGVudGlmaWNhdGlvbikgPT4geyBcbiAgICBpZihncm91cHNJRCA9PSAnJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0R3JvdXAoaWRlbnRpZmljYXRpb24pLmNhbGwoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9O1xuICB1c2VFZmZlY3QoKCk9PiB7Ly9yZW5kZXIgdm90ZXNcbiAgICB2YXIgcmVuZGVyVm90ZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmICghZ3JvdXBzSUQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgZ3JvdXBzSUQuZm9yRWFjaChpZGVudGlmaWNhdGlvbiA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5SW5mbyhpZGVudGlmaWNhdGlvbikudGhlbihuZXdHcm91cCA9PiB7XG4gICAgICAgICAgICAgIHJlbmRlckdyb3VwcyhbLi4ucmVuZGVyZWRHcm91cHMsIG5ld0dyb3VwXSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIHJlbmRlclZvdGVzKCk7XG4gIH0sW2dyb3Vwc0lEXSk7XG5cbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIGlmKHJlbmRlcmVkR3JvdXBzICE9IFtdKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZW5kZXJlZEdyb3Vwcyk7XG4gICAgfVxuICB9LFtyZW5kZXJlZEdyb3Vwc10pO1xuXG4gICAgLy9yZXR1cm4gPGE+SGVsbG8gV29ybGQ8L2E+O1xuICAgIHJldHVybiByZW5kZXJlZEdyb3VwcyA/IHJlbmRlcmVkR3JvdXBzLm1hcCgoZ3JvdXAsIGluZGV4KSA9PiBcbiAgICAgICAgLy88TGluayBjbGFzc05hbWU9XCJ1aSBidXR0b25cIiByb3V0ZSA9e2AvZWxlY3Rpb25zL3ZvdGUvJHt2b3RlfWB9IGtleT17aW5kZXh9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGxpbmsgY2FyZFwiIHN0eWxlPXt7d2lkdGg6XCI4MCVcIiwgY29sb3I6ICcjZjAwMDAwJ319PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPntncm91cFswXVswXX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5oZWxsbzwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICApIDogPD48Lz5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEpvaW5Hcm91cDsiXSwic291cmNlUm9vdCI6IiJ9