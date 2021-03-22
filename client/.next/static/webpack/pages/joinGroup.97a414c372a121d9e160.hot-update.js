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



var _s = $RefreshSig$();

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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, "Hello World"); //     return groupList ? groupList.map((group) => 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2pvaW5Hcm91cC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImNhcmQiLCJ3aWR0aCIsIkpvaW5Hcm91cCIsIndlYjNJbnN0YW5jZSIsImZhY3RvcnlDb250cmFjdCIsInVzZVN0YXRlIiwid2ViMyIsInNldFdlYjMiLCJMb2FkIiwic2V0TG9hZCIsImNvbnRyYWN0Iiwic2V0Q29udHJhY3QiLCJncm91cElEIiwic2V0R3JvdXBJRCIsImdyb3VwTGlzdCIsInNldEdyb3VwcyIsIm1lbWJlcnMiLCJnZXRNZW1iZXJzIiwidXNlRWZmZWN0IiwiaW5pdFdlYjMiLCJnZXRXZWIzIiwic2V0dXBWb3RlRmFjdG9yeSIsImNvbnNvbGUiLCJsb2ciLCJldGgiLCJuZXQiLCJnZXRJZCIsIm5ldHdvcmtJZCIsImRlcGxveWVkTmV0d29yayIsIlZvdGVGYWN0b3J5Q29udHJhY3QiLCJuZXR3b3JrcyIsImluc3RhbmNlIiwiQ29udHJhY3QiLCJhYmkiLCJhZGRyZXNzIiwiYWxlcnQiLCJlcnJvciIsImRpc3BsYXlHcm91cHMiLCJtZXRob2RzIiwiZ2V0RXhpc3RpbmdHcm91cHMiLCJjYWxsIiwicmVzcG9uc2UiLCJkaXNwbGF5SW5mbyIsImdldEdyb3VwIiwicmVuZGVyR3JvdXBzIiwidGVtcCIsImZvckVhY2giLCJ0aGVuIiwibmV3R3JvdXAiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxtQkFBTyxDQUFDLGtGQUFELENBQVA7O0FBRUEsSUFBTUMsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzNCQyxNQUFJLEVBQUU7QUFDSkMsU0FBSyxFQUFDO0FBREY7QUFEcUIsQ0FBRCxDQUE1Qjs7QUFNQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxH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QSxTQUFPLGlGQUFQLENBaEdvQixDQWlHeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQyxDQXZIRDs7R0FBTVosUzs7S0FBQUEsUztBQXlIU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvam9pbkdyb3VwLjk3YTQxNGMzNzJhMTIxZDllMTYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVm90ZUZhY3RvcnlDb250cmFjdCBmcm9tIFwiLi4vY29udHJhY3RzL1ZvdGVGYWN0b3J5Lmpzb25cIjtcbmltcG9ydCBWb3RlQ29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlLmpzb25cIjtcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi9nZXRXZWIzXCI7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vcm91dGVzJ1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XG5cbnJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIik7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICBjYXJkOiB7XG4gICAgd2lkdGg6JzgwJSdcbiAgfVxufSk7XG5cbmNvbnN0IEpvaW5Hcm91cCA9ICgpID0+IHtcbiAgICB2YXIgd2ViM0luc3RhbmNlO1xuICAgIHZhciBmYWN0b3J5Q29udHJhY3Q7XG5cbiAgICBjb25zdCBbd2ViMywgc2V0V2ViM10gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW0xvYWQsIHNldExvYWRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW2NvbnRyYWN0LCBzZXRDb250cmFjdF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2dyb3VwSUQsIHNldEdyb3VwSURdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtncm91cExpc3QsIHNldEdyb3Vwc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW21lbWJlcnMsIGdldE1lbWJlcnNdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBXZWIzXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgICBhc3luYyBmdW5jdGlvbiBpbml0V2ViMygpIHtcbiAgICAgICAgICAgIHdlYjNJbnN0YW5jZSA9IGF3YWl0IGdldFdlYjMoKTtcbiAgICAgICAgICAgIHNldFdlYjMod2ViM0luc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICBpbml0V2ViMygpO1xuICAgIH0pO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBWb3RlRmFjdG9yeSBDb250cmFjdFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwVm90ZUZhY3RvcnkoKSB7XG4gICAgICAgICAgICBpZiAod2ViMyA9PSAnJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmFibGUgdG8gZ2V0IGZhY3RvcnknKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViMy5ldGgubmV0LmdldElkKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVwbG95ZWROZXR3b3JrID0gVm90ZUZhY3RvcnlDb250cmFjdC5uZXR3b3Jrc1tuZXR3b3JrSWRdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxuICAgICAgICAgICAgICAgICAgICBWb3RlRmFjdG9yeUNvbnRyYWN0LmFiaSxcbiAgICAgICAgICAgICAgICAgICAgZGVwbG95ZWROZXR3b3JrICYmIGRlcGxveWVkTmV0d29yay5hZGRyZXNzXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBmYWN0b3J5Q29udHJhY3QgPSBpbnN0YW5jZTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0dXBWb3RlRmFjdG9yeSgpO1xuICAgIH0sIFt3ZWIzXSk7XG5cbiAgICAvLyBEaXNwbGF5IGFsbCBHcm91cHNcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB2YXIgZGlzcGxheUdyb3VwcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGlmIChjb250cmFjdCA9PSAnJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5nZXRFeGlzdGluZ0dyb3VwcygpLmNhbGwoKTtcbiAgICAgICAgICAgIHNldEdyb3VwcyhyZXNwb25zZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZGlzcGxheUdyb3VwcygpO1xuICAgIH0sIFtjb250cmFjdF0pO1xuXG4gICAgLy8gRGlzcGxheSB0aGUgaW5mb3JtYXRpb24gb2YgYSBHcm91cFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHZhciBkaXNwbGF5SW5mbyA9IGFzeW5jIChncm91cElEKSA9PiB7XG4gICAgICAgICAgICBpZiAoZ3JvdXBMaXN0ID09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxuICAgICAgICAgICAgICAgICAgICBWb3RlRmFjdG9yeUNvbnRyYWN0LmFiaSwgXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwSURcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChhd2FpdCBpbnN0YW5jZS5tZXRob2RzLmdldEdyb3VwKGdyb3VwSUQpLmNhbGwoKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciByZW5kZXJHcm91cHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZ3JvdXBMaXN0ID09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdGVtcCA9IFtdO1xuICAgICAgICAgICAgYXdhaXQgZ3JvdXBMaXN0LmZvckVhY2goZ3JvdXBJRCA9PiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheUluZm8oZ3JvdXBJRCkudGhlbihuZXdHcm91cCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXAucHVzaChuZXdHcm91cCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2V0R3JvdXBzKHRlbXApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyR3JvdXBzKCk7XG4gICAgfSwgW2dyb3VwTGlzdF0pO1xuXG4gICAgcmV0dXJuIDw+SGVsbG8gV29ybGQ8Lz47XG4vLyAgICAgcmV0dXJuIGdyb3VwTGlzdCA/IGdyb3VwTGlzdC5tYXAoKGdyb3VwKSA9PiBcbi8vICAgICAgICAgLy88TGluayBjbGFzc05hbWU9XCJ1aSBidXR0b25cIiByb3V0ZSA9e2AvZWxlY3Rpb25zL3ZvdGUvJHt2b3RlfWB9IGtleT17aW5kZXh9PlxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGxpbmsgY2FyZFwiIHN0eWxlPXt7d2lkdGg6XCI4MCVcIiwgY29sb3I6ICcjZjAwMDAwJ319PlxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPkdyb3VwPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFcIj5cbi8vICAgICAgICAgICAgICAgICA8YT57Z3JvdXAuZ3JvdXBOYW1lfTwvYT5cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuLy8gICAgICAgICAgICAgICAgIHtncm91cC5kZXNjcmlwdGlvbn1cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmEgY29udGVudFwiPlxuLy8gICAgICAgICAgICAgICAgIDxzcGFuPlxuLy8gICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ1c2VyIGljb25cIj48L2k+XG4vLyAgICAgICAgICAgICAgICAgICAgIHtncm91cC5nZXRNZW1iZXJzLnNpemUoKX1cbi8vICAgICAgICAgICAgICAgICA8L3NwYW4+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICApIDogPD48Lz5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEpvaW5Hcm91cDsiXSwic291cmNlUm9vdCI6IiJ9