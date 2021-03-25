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
      __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 9
        }
      }, group[1])
    );
  } // <div className="ui link card" style={{width:"80%", color: '#f00000'}}>
  // <div className="card">
  // <div className="content">
  //     <div className="header">{group[0][0]}</div>
  //     <div className="description">hello</div>
  // </div>
  // </div>
  // </div>
  ) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2pvaW5Hcm91cC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImNhcmQiLCJ3aWR0aCIsIkpvaW5Hcm91cCIsInVzZVN0YXRlIiwid2ViMyIsInNldFdlYjMiLCJncm91cHNJRCIsInNldEdyb3Vwc0lEIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsInJlbmRlcmVkR3JvdXBzIiwicmVuZGVyR3JvdXBzIiwidXNlRWZmZWN0IiwiaW5pdFdlYjMiLCJjb25zb2xlIiwibG9nIiwiZ2V0V2ViMyIsIndlYjNJbnN0YW5jZSIsInNldHVwIiwiZXRoIiwibmV0IiwiZ2V0SWQiLCJuZXR3b3JrSWQiLCJkZXBsb3llZE5ldHdvcmsiLCJWb3RlRmFjdG9yeUNvbnRyYWN0IiwibmV0d29ya3MiLCJpbnN0YW5jZSIsIkNvbnRyYWN0IiwiYWJpIiwiYWRkcmVzcyIsImFsZXJ0IiwiZXJyb3IiLCJjb252ZXJ0U3RyQXJyYXlUb0ludEFycmF5Iiwic3RyIiwic2VwIiwic3BsaXQiLCJtYXAiLCJ2YWwiLCJwYXJzZUludCIsImRpc3BsYXlWb3RlcyIsIm1ldGhvZHMiLCJnZXRFeGlzdGluZ0dyb3VwcyIsImNhbGwiLCJyZXNwb25zZSIsInRlbXAiLCJpIiwibGVuZ3RoIiwiZGlzcGxheUluZm8iLCJpZGVudGlmaWNhdGlvbiIsImdldEdyb3VwIiwicmVuZGVyVm90ZXMiLCJmb3JFYWNoIiwidGhlbiIsIm5ld0dyb3VwIiwiZ3JvdXAiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsbUJBQU8sQ0FBQyxrRkFBRCxDQUFQOztBQUVBLElBQU1DLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUMzQkMsTUFBSSxFQUFFO0FBQ0pDLFNBQUssRUFBQztBQURGO0FBRHFCLENBQUQs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RCxDQUFYLENBQTRCSSxJQUE1QixDQUFpQyxVQUFBQyxRQUFRLEVBQUk7QUFDM0MxQyxnQ0FBWSx3R0FBS0QsY0FBTCxJQUFxQjJDLFFBQXJCLEdBQVo7QUFDSCxtQkFGQztBQUdILGlCQUpLLENBSlE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBWEgsV0FBVztBQUFBO0FBQUE7QUFBQSxPQUFmOztBQVVBQSxlQUFXO0FBQ1osR0FaUSxFQVlQLENBQUM1QyxRQUFELENBWk8sQ0FBVDtBQWNBTSx5REFBUyxDQUFDLFlBQUs7QUFDYixRQUFHRixjQUFjLElBQUksRUFBckIsRUFBeUI7QUFDdkJJLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTCxjQUFaO0FBQ0Q7QUFDRixHQUpRLEVBSVAsQ0FBQ0EsY0FBRCxDQUpPLENBQVQsQ0E3RnNCLENBbUdwQjs7QUFDQSxTQUFPQSxjQUFjLEdBQUdBLGNBQWMsQ0FBQzBCLEdBQWYsQ0FBbUIsVUFBQ2tCLEtBQUQsRUFBUUMsS0FBUjtBQUFBLFdBQ3ZDO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHRCxLQUFLLENBQUMsQ0FBRCxDQURSO0FBRnVDO0FBQUEsR0FBbkIsQ0FLcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpvQixHQUFILEdBYW5CLGtFQWJGO0FBY0gsQ0FsSEQ7O0dBQU1wRCxTOztLQUFBQSxTO0FBb0hTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9qb2luR3JvdXAuMjM4NzRkYzBhMzAwYzg3OGJlYTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBWb3RlRmFjdG9yeUNvbnRyYWN0IGZyb20gXCIuLi9jb250cmFjdHMvVm90ZUZhY3RvcnkuanNvblwiO1xuaW1wb3J0IFZvdGVDb250cmFjdCBmcm9tIFwiLi4vY29udHJhY3RzL1ZvdGUuanNvblwiO1xuaW1wb3J0IGdldFdlYjMgZnJvbSBcIi4uL2dldFdlYjNcIjtcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xuXG5yZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIpO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgY2FyZDoge1xuICAgIHdpZHRoOic4MCUnXG4gIH1cbn0pO1xuXG5jb25zdCBKb2luR3JvdXAgPSAoKSA9PiB7XG4gICAgY29uc3QgW3dlYjMsIHNldFdlYjNdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZ3JvdXBzSUQsIHNldEdyb3Vwc0lEXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2NvbnRyYWN0LCBzZXRDb250cmFjdF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtyZW5kZXJlZEdyb3VwcywgcmVuZGVyR3JvdXBzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4gey8vIGdldCB3ZWIzXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdFdlYjMoKSB7XG4gICAgICBjb25zb2xlLmxvZygnaW5pdGlhbGl6aW5nIHdlYjMnKTtcbiAgICAgIGNvbnN0IHdlYjNJbnN0YW5jZSA9IGF3YWl0IGdldFdlYjMoKTtcbiAgICAgIHNldFdlYjMod2ViM0luc3RhbmNlKVxuICAgIH1cbiAgICBpbml0V2ViMygpO1xuICB9LFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4gey8vIGdldCBGYWN0b3J5IGNvbnRyYWN0XG4gICAgYXN5bmMgZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgICBpZih3ZWIzID09IFwiXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3VuYWJsZSB0byBnZXQgZmFjdG9yeScpXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXG4gICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpO1xuICAgICAgICBjb25zdCBkZXBsb3llZE5ldHdvcmsgPSBWb3RlRmFjdG9yeUNvbnRyYWN0Lm5ldHdvcmtzW25ldHdvcmtJZF07XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxuICAgICAgICAgIFZvdGVGYWN0b3J5Q29udHJhY3QuYWJpLFxuICAgICAgICAgIGRlcGxveWVkTmV0d29yayAmJiBkZXBsb3llZE5ldHdvcmsuYWRkcmVzcyxcbiAgICAgICAgKTtcbiAgICAgICAgc2V0Q29udHJhY3QoaW5zdGFuY2UpO1xuICAgIFxuICAgICAgICAvLyBTZXQgd2ViMywgYWNjb3VudHMsIGFuZCBjb250cmFjdCB0byB0aGUgc3RhdGUsIGFuZCB0aGVuIHByb2NlZWQgd2l0aCBhblxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxuICAgICAgICBhbGVydChcbiAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICAgIHNldHVwKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnb2snKVxuICB9LFt3ZWIzXSk7XG5cbiAgdmFyIGNvbnZlcnRTdHJBcnJheVRvSW50QXJyYXkgPSBmdW5jdGlvbihzdHIsIHNlcCkge1xuXHRzZXAgPSB0eXBlb2Ygc2VwICE9PSAndW5kZWZpbmVkJyA/IHNlcCA6IFwiIFwiO1xuXHRyZXR1cm4gc3RyLnNwbGl0KHNlcCkubWFwKGZ1bmN0aW9uKHZhbCkge1xuXHRcdHJldHVybiBwYXJzZUludCh2YWwsIDEwKTtcblx0fSk7XG59XG5cbiAgdXNlRWZmZWN0KCgpPT4gey8vZGlzcGxheSBhdmFpbGFibGUgdm90ZXMgYWRkcmVzc2VzXG4gICAgdmFyIGRpc3BsYXlWb3RlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmKGNvbnRyYWN0ID09ICcnKXtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmdldEV4aXN0aW5nR3JvdXBzKCkuY2FsbCgpO1xuICAgICAgLy8gVXBkYXRlIHN0YXRlIHdpdGggdGhlIHJlc3VsdC5cbiAgICAgIGNvbnN0IHRlbXAgPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzcG9uc2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGVtcFtpXSA9IHBhcnNlSW50KHJlc3BvbnNlW2ldKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHRlbXApO1xuICAgICAgc2V0R3JvdXBzSUQodGVtcCk7XG4gICAgfTtcbiAgICBkaXNwbGF5Vm90ZXMoKTtcbiAgfSxbY29udHJhY3RdKTtcbiAgXG5cbiAgdmFyIGRpc3BsYXlJbmZvID0gYXN5bmMgKGlkZW50aWZpY2F0aW9uKSA9PiB7IFxuICAgIGlmKGdyb3Vwc0lEID09ICcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgY29udHJhY3QubWV0aG9kcy5nZXRHcm91cChpZGVudGlmaWNhdGlvbikuY2FsbCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH07XG4gIHVzZUVmZmVjdCgoKT0+IHsvL3JlbmRlciB2b3Rlc1xuICAgIHZhciByZW5kZXJWb3RlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKCFncm91cHNJRCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBncm91cHNJRC5mb3JFYWNoKGlkZW50aWZpY2F0aW9uID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlJbmZvKGlkZW50aWZpY2F0aW9uKS50aGVuKG5ld0dyb3VwID0+IHtcbiAgICAgICAgICAgICAgcmVuZGVyR3JvdXBzKFsuLi5yZW5kZXJlZEdyb3VwcywgbmV3R3JvdXBdKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgcmVuZGVyVm90ZXMoKTtcbiAgfSxbZ3JvdXBzSURdKTtcblxuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgaWYocmVuZGVyZWRHcm91cHMgIT0gW10pIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlbmRlcmVkR3JvdXBzKTtcbiAgICB9XG4gIH0sW3JlbmRlcmVkR3JvdXBzXSk7XG5cbiAgICAvL3JldHVybiA8YT5IZWxsbyBXb3JsZDwvYT47XG4gICAgcmV0dXJuIHJlbmRlcmVkR3JvdXBzID8gcmVuZGVyZWRHcm91cHMubWFwKChncm91cCwgaW5kZXgpID0+IFxuICAgICAgICAvLzxMaW5rIGNsYXNzTmFtZT1cInVpIGJ1dHRvblwiIHJvdXRlID17YC9lbGVjdGlvbnMvdm90ZS8ke3ZvdGV9YH0ga2V5PXtpbmRleH0+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICB7Z3JvdXBbMV19XG4gICAgICAgIDwvbGk+XG4gICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwidWkgbGluayBjYXJkXCIgc3R5bGU9e3t3aWR0aDpcIjgwJVwiLCBjb2xvcjogJyNmMDAwMDAnfX0+XG4gICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+e2dyb3VwWzBdWzBdfTwvZGl2PlxuICAgICAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPmhlbGxvPC9kaXY+XG4gICAgICAgIC8vIDwvZGl2PlxuICAgICAgICAvLyA8L2Rpdj5cbiAgICAgICAgLy8gPC9kaXY+XG4gICkgOiA8PjwvPlxufTtcblxuZXhwb3J0IGRlZmF1bHQgSm9pbkdyb3VwOyJdLCJzb3VyY2VSb290IjoiIn0=