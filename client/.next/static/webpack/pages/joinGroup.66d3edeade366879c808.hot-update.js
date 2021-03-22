webpackHotUpdate_N_E("pages/joinGroup",{

/***/ "./src/pages/joinGroup.js":
/*!********************************!*\
  !*** ./src/pages/joinGroup.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contracts/VoteFactory.json */ "./src/contracts/VoteFactory.json");
var _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/VoteFactory.json */ "./src/contracts/VoteFactory.json", 1);
/* harmony import */ var _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contracts/Vote.json */ "./src/contracts/Vote.json");
var _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/Vote.json */ "./src/contracts/Vote.json", 1);
/* harmony import */ var _getWeb3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../getWeb3 */ "./src/getWeb3.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "/home/wen_wong/voting-at-mcgill/client/src/pages/joinGroup.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  card: {
    width: '80%'
  }
});

var JoinGroup = function JoinGroup() {
  _s();

  var web3Instance;
  var factoryContract;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      web3 = _useState[0],
      setWeb3 = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      Load = _useState2[0],
      setLoad = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      contract = _useState3[0],
      setContract = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      groupID = _useState4[0],
      setGroupID = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      groupList = _useState5[0],
      setGroups = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      members = _useState6[0],
      getMembers = _useState6[1]; // Initialize Web3


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    function initWeb3() {
      return _initWeb.apply(this, arguments);
    }

    function _initWeb() {
      _initWeb = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_getWeb3__WEBPACK_IMPORTED_MODULE_6__["default"])();

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
  }); // Initialize VoteFactory Contract

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    function setupVoteFactory() {
      return _setupVoteFactory.apply(this, arguments);
    }

    function _setupVoteFactory() {
      _setupVoteFactory = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var networkId, deployedNetwork, instance;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(web3 == '')) {
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
                deployedNetwork = _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_4__.networks[networkId];
                instance = new web3.eth.Contract(_contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_4__.abi, deployedNetwork && deployedNetwork.address);
                factoryContract = instance;
                _context2.next = 16;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](3);
                alert("Failed to load web3, accounts, or contract. Check console for details.");
                console.error(_context2.t0);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 12]]);
      }));
      return _setupVoteFactory.apply(this, arguments);
    }

    setupVoteFactory();
  }, [web3]); // Display all Groups

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var displayGroups = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
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
                setGroups(response);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function displayGroups() {
        return _ref.apply(this, arguments);
      };
    }();

    displayGroups();
  }, [contract]); // Display the information of a Group

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var displayInfo = /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(groupID) {
        var instance;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(groupList == '')) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return");

              case 2:
                _context4.prev = 2;
                instance = new web3.eth.Contract(_contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_4__.abi, groupID);
                _context4.next = 6;
                return instance.methods.getGroup(groupID).call();

              case 6:
                return _context4.abrupt("return", _context4.sent);

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](2);
                console.error(_context4.t0);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[2, 9]]);
      }));

      return function displayInfo(_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    var renderGroups = /*#__PURE__*/function () {
      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var temp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(groupList == '')) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return");

              case 2:
                temp = [];
                _context5.next = 5;
                return groupList.forEach(function (groupID) {
                  displayInfo(groupID).then(function (newGroup) {
                    temp.push(newGroup);
                  });
                });

              case 5:
                setGroups(temp);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function renderGroups() {
        return _ref3.apply(this, arguments);
      };
    }();

    renderGroups();
  }, [groupList]);
  return __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 12
    }
  }, "Hello World"); //     return groupList ? groupList.map((group) => 
  //         //<Link className="ui button" route ={`/elections/vote/${vote}`} key={index}>
  //         <div className="ui link card" style={{width:"80%", color: '#f00000'}}>
  //         <div className="card">
  //         <div className="content">
  //             <div className="header">Group</div>
  //             <div className="meta">
  //                 <a>{group.groupName}</a>
  //             </div>
  //             <div className="description">
  //                 {group.description}
  //             </div>
  //         </div>
  //             <div className="extra content">
  //                 <span>
  //                     <i className="user icon"></i>
  //                     {group.getMembers.size()}
  //                 </span>
  //             </div>
  //         </div>
  //         </div>
  //   ) : <></>
};

_s(JoinGroup, "wOvwY/lnJ9jsnjmV1H63/EO6cN8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2pvaW5Hcm91cC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImNhcmQiLCJ3aWR0aCIsIkpvaW5Hcm91cCIsIndlYjNJbnN0YW5jZSIsImZhY3RvcnlDb250cmFjdCIsInVzZVN0YXRlIiwid2ViMyIsInNldFdlYjMiLCJMb2FkIiwic2V0TG9hZCIsImNvbnRyYWN0Iiwic2V0Q29udHJhY3QiLCJncm91cElEIiwic2V0R3JvdXBJRCIsImdyb3VwTGlzdCIsInNldEdyb3VwcyIsIm1lbWJlcnMiLCJnZXRNZW1iZXJzIiwidXNlRWZmZWN0IiwiaW5pdFdlYjMiLCJnZXRXZWIzIiwic2V0dXBWb3RlRmFjdG9yeSIsImNvbnNvbGUiLCJsb2ciLCJldGgiLCJuZXQiLCJnZXRJZCIsIm5ldHdvcmtJZCIsImRlcGxveWVkTmV0d29yayIsIlZvdGVGYWN0b3J5Q29udHJhY3QiLCJuZXR3b3JrcyIsImluc3RhbmNlIiwiQ29udHJhY3QiLCJhYmkiLCJhZGRyZXNzIiwiYWxlcnQiLCJlcnJvciIsImRpc3BsYXlHcm91cHMiLCJtZXRob2RzIiwiZ2V0RXhpc3RpbmdHcm91cHMiLCJjYWxsIiwicmVzcG9uc2UiLCJkaXNwbGF5SW5mbyIsImdldEdyb3VwIiwicmVuZGVyR3JvdXBzIiwidGVtcCIsImZvckVhY2giLCJ0aGVuIiwibmV3R3JvdXAiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLG1CQUFPLENBQUMsa0ZBQUQsQ0FBUDs7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDM0JDLE1BQUksRUFBRTtBQUNKQyxTQUFLLEVBQUM7QUFERjtBQURxQixDQUFELENBQTVCOztBQU1BLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZ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b0NBLFNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUCxDQWhHb0IsQ0FpR3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0MsQ0F2SEQ7O0dBQU1aLFM7O0tBQUFBLFM7QUF5SFNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2pvaW5Hcm91cC42NmQzZWRlYWRlMzY2ODc5YzgwOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFZvdGVGYWN0b3J5Q29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlRmFjdG9yeS5qc29uXCI7XG5pbXBvcnQgVm90ZUNvbnRyYWN0IGZyb20gXCIuLi9jb250cmFjdHMvVm90ZS5qc29uXCI7XG5pbXBvcnQgZ2V0V2ViMyBmcm9tIFwiLi4vZ2V0V2ViM1wiO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uL3JvdXRlcydcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xuXG5yZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIpO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgY2FyZDoge1xuICAgIHdpZHRoOic4MCUnXG4gIH1cbn0pO1xuXG5jb25zdCBKb2luR3JvdXAgPSAoKSA9PiB7XG4gICAgdmFyIHdlYjNJbnN0YW5jZTtcbiAgICB2YXIgZmFjdG9yeUNvbnRyYWN0O1xuXG4gICAgY29uc3QgW3dlYjMsIHNldFdlYjNdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtMb2FkLCBzZXRMb2FkXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtjb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtncm91cElELCBzZXRHcm91cElEXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZ3JvdXBMaXN0LCBzZXRHcm91cHNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFttZW1iZXJzLCBnZXRNZW1iZXJzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIC8vIEluaXRpYWxpemUgV2ViM1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gaW5pdFdlYjMoKSB7XG4gICAgICAgICAgICB3ZWIzSW5zdGFuY2UgPSBhd2FpdCBnZXRXZWIzKCk7XG4gICAgICAgICAgICBzZXRXZWIzKHdlYjNJbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgaW5pdFdlYjMoKTtcbiAgICB9KTtcblxuICAgIC8vIEluaXRpYWxpemUgVm90ZUZhY3RvcnkgQ29udHJhY3RcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBzZXR1cFZvdGVGYWN0b3J5KCkge1xuICAgICAgICAgICAgaWYgKHdlYjMgPT0gJycpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5hYmxlIHRvIGdldCBmYWN0b3J5Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IFZvdGVGYWN0b3J5Q29udHJhY3QubmV0d29ya3NbbmV0d29ya0lkXTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcbiAgICAgICAgICAgICAgICAgICAgVm90ZUZhY3RvcnlDb250cmFjdC5hYmksXG4gICAgICAgICAgICAgICAgICAgIGRlcGxveWVkTmV0d29yayAmJiBkZXBsb3llZE5ldHdvcmsuYWRkcmVzc1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgZmFjdG9yeUNvbnRyYWN0ID0gaW5zdGFuY2U7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNldHVwVm90ZUZhY3RvcnkoKTtcbiAgICB9LCBbd2ViM10pO1xuXG4gICAgLy8gRGlzcGxheSBhbGwgR3JvdXBzXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgdmFyIGRpc3BsYXlHcm91cHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29udHJhY3QgPT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0RXhpc3RpbmdHcm91cHMoKS5jYWxsKCk7XG4gICAgICAgICAgICBzZXRHcm91cHMocmVzcG9uc2UpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGRpc3BsYXlHcm91cHMoKTtcbiAgICB9LCBbY29udHJhY3RdKTtcblxuICAgIC8vIERpc3BsYXkgdGhlIGluZm9ybWF0aW9uIG9mIGEgR3JvdXBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB2YXIgZGlzcGxheUluZm8gPSBhc3luYyAoZ3JvdXBJRCkgPT4ge1xuICAgICAgICAgICAgaWYgKGdyb3VwTGlzdCA9PSAnJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcbiAgICAgICAgICAgICAgICAgICAgVm90ZUZhY3RvcnlDb250cmFjdC5hYmksIFxuICAgICAgICAgICAgICAgICAgICBncm91cElEXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiAoYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5nZXRHcm91cChncm91cElEKS5jYWxsKCkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcmVuZGVyR3JvdXBzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGdyb3VwTGlzdCA9PSAnJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHRlbXAgPSBbXTtcbiAgICAgICAgICAgIGF3YWl0IGdyb3VwTGlzdC5mb3JFYWNoKGdyb3VwSUQgPT4ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlJbmZvKGdyb3VwSUQpLnRoZW4obmV3R3JvdXAgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wLnB1c2gobmV3R3JvdXApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNldEdyb3Vwcyh0ZW1wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbmRlckdyb3VwcygpO1xuICAgIH0sIFtncm91cExpc3RdKTtcblxuICAgIHJldHVybiA8YT5IZWxsbyBXb3JsZDwvYT47XG4vLyAgICAgcmV0dXJuIGdyb3VwTGlzdCA/IGdyb3VwTGlzdC5tYXAoKGdyb3VwKSA9PiBcbi8vICAgICAgICAgLy88TGluayBjbGFzc05hbWU9XCJ1aSBidXR0b25cIiByb3V0ZSA9e2AvZWxlY3Rpb25zL3ZvdGUvJHt2b3RlfWB9IGtleT17aW5kZXh9PlxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGxpbmsgY2FyZFwiIHN0eWxlPXt7d2lkdGg6XCI4MCVcIiwgY29sb3I6ICcjZjAwMDAwJ319PlxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPkdyb3VwPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFcIj5cbi8vICAgICAgICAgICAgICAgICA8YT57Z3JvdXAuZ3JvdXBOYW1lfTwvYT5cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuLy8gICAgICAgICAgICAgICAgIHtncm91cC5kZXNjcmlwdGlvbn1cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmEgY29udGVudFwiPlxuLy8gICAgICAgICAgICAgICAgIDxzcGFuPlxuLy8gICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ1c2VyIGljb25cIj48L2k+XG4vLyAgICAgICAgICAgICAgICAgICAgIHtncm91cC5nZXRNZW1iZXJzLnNpemUoKX1cbi8vICAgICAgICAgICAgICAgICA8L3NwYW4+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICApIDogPD48Lz5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEpvaW5Hcm91cDsiXSwic291cmNlUm9vdCI6IiJ9