webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contracts/VoteFactory.json */ "./src/contracts/VoteFactory.json");
var _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/VoteFactory.json */ "./src/contracts/VoteFactory.json", 1);
/* harmony import */ var _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contracts/Vote.json */ "./src/contracts/Vote.json");
var _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/Vote.json */ "./src/contracts/Vote.json", 1);
/* harmony import */ var _getWeb3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getWeb3 */ "./src/getWeb3.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
var _jsxFileName = "C:\\Users\\foubroker\\PROJECT_VOTE\\voting-at-mcgill\\client\\src\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function App() {
  _s();

  const {
    0: votesAddresses,
    1: setVotesAddresses
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: web3,
    1: setWeb3
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: accounts,
    1: setAccounts
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: contract,
    1: setContract
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: voteContract,
    1: setVoteContract
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  var web3Instance;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function initWeb3() {
      web3Instance = await Object(_getWeb3__WEBPACK_IMPORTED_MODULE_3__["default"])();
      setWeb3(web3Instance);
    }

    initWeb3();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function setup() {
      if (web3 == '') {
        return;
      }

      try {
        setAccounts(await web3.eth.getAccounts()); // Get the contract instance.

        const networkId = await web3.eth.net.getId();
        const deployedNetwork = _contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_1__.networks[networkId];
        const instance = new web3.eth.Contract(_contracts_VoteFactory_json__WEBPACK_IMPORTED_MODULE_1__.abi, deployedNetwork && deployedNetwork.address);
        setAccounts(await web3.eth.getAccounts());
        setContract(instance); // Set web3, accounts, and contract to the state, and then proceed with an
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(`Failed to load web3, accounts, or contract. Check console for details.`);
        console.error(error);
      }
    }

    setup();
  }, [web3]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function setup() {
      if (web3 == '') {
        return;
      }

      try {
        // setAccounts(await web3.eth.getAccounts());
        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_2__.networks[networkId];
        const instance = new web3.eth.Contract(_contracts_Vote_json__WEBPACK_IMPORTED_MODULE_2__.abi, deployedNetwork && deployedNetwork.address); // setAccounts(await web3.eth.getAccounts());

        setVoteContract(instance);
        console.log(instance); // Set web3, accounts, and contract to the state, and then proceed with an
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(`Failed to load web3, accounts, or contract. Check console for details.`);
        console.error(error);
      }
    }

    setup();
  }, [contract]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    var createVote = async () => {
      if (contract == '') {
        return;
      } // Get the value from the contract to prove it worked.
      // uncomment to create votes, note that second await call wont run if first is run.


      await contract.methods.createVote(0).send({
        from: accounts[0]
      });
    };

    var displayVotes = async () => {
      if (contract == '') {
        return;
      }

      const response = await contract.methods.getDeployedVotes().call(); // Update state with the result.

      console.log("response is" + response);
      setVotesAddresses(response);
    };

    createVote();
    displayVotes();
  }, [contract]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, "test value: ", votesAddresses)));
}

_s(App, "JICdqQxYl9gqdh6/8zpggslSAO4=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcCIsInZvdGVzQWRkcmVzc2VzIiwic2V0Vm90ZXNBZGRyZXNzZXMiLCJ1c2VTdGF0ZSIsIndlYjMiLCJzZXRXZWIzIiwiYWNjb3VudHMiLCJzZXRBY2NvdW50cyIsImNvbnRyYWN0Iiwic2V0Q29udHJhY3QiLCJ2b3RlQ29udHJhY3QiLCJzZXRWb3RlQ29udHJhY3QiLCJ3ZWIzSW5zdGFuY2UiLCJ1c2VFZmZlY3QiLCJpbml0V2ViMyIsImdldFdlYjMiLCJzZXR1cCIsImV0aCIsImdldEFjY291bnRzIiwibmV0d29ya0lkIiwibmV0IiwiZ2V0SWQiLCJkZXBsb3llZE5ldHdvcmsiLCJWb3RlRmFjdG9yeUNvbnRyYWN0IiwibmV0d29ya3MiLCJpbnN0YW5jZSIsIkNvbnRyYWN0IiwiYWJpIiwiYWRkcmVzcyIsImVycm9yIiwiYWxlcnQiLCJjb25zb2xlIiwiVm90ZUNvbnRyYWN0IiwibG9nIiwiY3JlYXRlVm90ZSIsIm1ldGhvZHMiLCJzZW5kIiwiZnJvbSIsImRpc3BsYXlWb3RlcyIsInJlc3BvbnNlIiwiZ2V0RGVwbG95ZWRWb3RlcyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxHQUFULEdBQWU7QUFBQTs7QUFDYixRQUFNO0FBQUEsT0FBQ0MsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ0Msc0RBQVEsQ0FBQyxFQUFELENBQXBEO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCRixzREFBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJKLHNEQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDSyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxN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WSxHQUFHLFlBQVk7QUFDN0IsVUFBRzlCLFFBQVEsSUFBSSxFQUFmLEVBQWtCO0FBQ2hCO0FBQ0Q7O0FBQ0QsWUFBTStCLFFBQVEsR0FBRyxNQUFNL0IsUUFBUSxDQUFDMkIsT0FBVCxDQUFpQkssZ0JBQWpCLEdBQW9DQyxJQUFwQyxFQUF2QixDQUo2QixDQUs3Qjs7QUFDQVYsYUFBTyxDQUFDRSxHQUFSLENBQVksZ0JBQWdCTSxRQUE1QjtBQUNBckMsdUJBQWlCLENBQUNxQyxRQUFELENBQWpCO0FBQ0QsS0FSRDs7QUFTQUwsY0FBVTtBQUNWSSxnQkFBWTtBQUNiLEdBdEJRLEVBc0JQLENBQUM5QixRQUFELENBdEJPLENBQVQ7QUF3QkEsU0FDRSxtRUFDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWtCUCxjQUFsQixDQURGLENBTkYsQ0FERjtBQVlEOztHQTlHUUQsRzs7S0FBQUEsRztBQWdITUEsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzdiY2JhMTk0MjkwMzQ1ZTc4MWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBWb3RlRmFjdG9yeUNvbnRyYWN0IGZyb20gXCIuLi9jb250cmFjdHMvVm90ZUZhY3RvcnkuanNvblwiO1xyXG5pbXBvcnQgVm90ZUNvbnRyYWN0IGZyb20gXCIuLi9jb250cmFjdHMvVm90ZS5qc29uXCI7XHJcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi9nZXRXZWIzXCI7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuXHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgY29uc3QgW3ZvdGVzQWRkcmVzc2VzLCBzZXRWb3Rlc0FkZHJlc3Nlc10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3dlYjMsIHNldFdlYjNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFthY2NvdW50cywgc2V0QWNjb3VudHNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt2b3RlQ29udHJhY3QsIHNldFZvdGVDb250cmFjdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgdmFyIHdlYjNJbnN0YW5jZTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdFdlYjMoKSB7XHJcbiAgICAgIHdlYjNJbnN0YW5jZSA9IGF3YWl0IGdldFdlYjMoKVxyXG4gICAgICBzZXRXZWIzKHdlYjNJbnN0YW5jZSk7XHJcbiAgICB9XHJcbiAgICBpbml0V2ViMygpO1xyXG4gIH0sW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2V0dXAoKSB7XHJcbiAgICAgIGlmKHdlYjMgPT0gJycpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBzZXRBY2NvdW50cyhhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpKTtcclxuICAgICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpO1xyXG4gICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IFZvdGVGYWN0b3J5Q29udHJhY3QubmV0d29ya3NbbmV0d29ya0lkXTtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgIFZvdGVGYWN0b3J5Q29udHJhY3QuYWJpLFxyXG4gICAgICAgICAgZGVwbG95ZWROZXR3b3JrICYmIGRlcGxveWVkTmV0d29yay5hZGRyZXNzLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0QWNjb3VudHMoYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKSk7XHJcbiAgICAgICAgc2V0Q29udHJhY3QoaW5zdGFuY2UpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gU2V0IHdlYjMsIGFjY291bnRzLCBhbmQgY29udHJhY3QgdG8gdGhlIHN0YXRlLCBhbmQgdGhlbiBwcm9jZWVkIHdpdGggYW5cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyBDYXRjaCBhbnkgZXJyb3JzIGZvciBhbnkgb2YgdGhlIGFib3ZlIG9wZXJhdGlvbnMuXHJcbiAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgICBzZXR1cCgpO1xyXG4gIH0sW3dlYjNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgICBpZih3ZWIzID09ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gc2V0QWNjb3VudHMoYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKSk7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBjb250cmFjdCBpbnN0YW5jZS5cclxuICAgICAgICBjb25zdCBuZXR3b3JrSWQgPSBhd2FpdCB3ZWIzLmV0aC5uZXQuZ2V0SWQoKTtcclxuICAgICAgICBjb25zdCBkZXBsb3llZE5ldHdvcmsgPSBWb3RlQ29udHJhY3QubmV0d29ya3NbbmV0d29ya0lkXTtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgIFZvdGVDb250cmFjdC5hYmksXHJcbiAgICAgICAgICBkZXBsb3llZE5ldHdvcmsgJiYgZGVwbG95ZWROZXR3b3JrLmFkZHJlc3MsXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyBzZXRBY2NvdW50cyhhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpKTtcclxuICAgICAgICBzZXRWb3RlQ29udHJhY3QoaW5zdGFuY2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGluc3RhbmNlKVxyXG4gICAgXHJcbiAgICAgICAgLy8gU2V0IHdlYjMsIGFjY291bnRzLCBhbmQgY29udHJhY3QgdG8gdGhlIHN0YXRlLCBhbmQgdGhlbiBwcm9jZWVkIHdpdGggYW5cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyBDYXRjaCBhbnkgZXJyb3JzIGZvciBhbnkgb2YgdGhlIGFib3ZlIG9wZXJhdGlvbnMuXHJcbiAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgICBzZXR1cCgpO1xyXG4gIH0sW2NvbnRyYWN0XSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgIHZhciBjcmVhdGVWb3RlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZihjb250cmFjdCA9PSAnJyl7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEdldCB0aGUgdmFsdWUgZnJvbSB0aGUgY29udHJhY3QgdG8gcHJvdmUgaXQgd29ya2VkLlxyXG4gICAgICAvLyB1bmNvbW1lbnQgdG8gY3JlYXRlIHZvdGVzLCBub3RlIHRoYXQgc2Vjb25kIGF3YWl0IGNhbGwgd29udCBydW4gaWYgZmlyc3QgaXMgcnVuLlxyXG4gICAgICBhd2FpdCBjb250cmFjdC5tZXRob2RzLmNyZWF0ZVZvdGUoMCkuc2VuZCh7XHJcbiAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIGRpc3BsYXlWb3RlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYoY29udHJhY3QgPT0gJycpe1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0RGVwbG95ZWRWb3RlcygpLmNhbGwoKTtcclxuICAgICAgLy8gVXBkYXRlIHN0YXRlIHdpdGggdGhlIHJlc3VsdC5cclxuICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZSBpc1wiICsgcmVzcG9uc2UpO1xyXG4gICAgICBzZXRWb3Rlc0FkZHJlc3NlcyhyZXNwb25zZSk7XHJcbiAgICB9O1xyXG4gICAgY3JlYXRlVm90ZSgpO1xyXG4gICAgZGlzcGxheVZvdGVzKCk7XHJcbiAgfSxbY29udHJhY3RdKTtcclxuXHJcbiAgcmV0dXJuKCBcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgIDxkaXY+dGVzdCB2YWx1ZToge3ZvdGVzQWRkcmVzc2VzfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==