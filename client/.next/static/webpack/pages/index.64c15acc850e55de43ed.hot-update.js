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
    // get web3
    async function initWeb3() {
      web3Instance = await Object(_getWeb3__WEBPACK_IMPORTED_MODULE_3__["default"])();
      setWeb3(web3Instance);
    }

    initWeb3();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // get Factory contract
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
    //just get Vote contract
    async function setup() {
      if (web3 == '') {
        return;
      }

      try {
        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = _contracts_Vote_json__WEBPACK_IMPORTED_MODULE_2__.networks[networkId];
        const instance = new web3.eth.Contract(_contracts_Vote_json__WEBPACK_IMPORTED_MODULE_2__.abi, deployedNetwork && deployedNetwork.address);
        setVoteContract(instance); // Set web3, accounts, and contract to the state, and then proceed with an
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(`Failed to load web3, accounts, or contract. Check console for details.`);
        console.error(error);
      }
    }

    setup();
  }, [contract]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    //testing code for factory contract
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
      // console.log("response is" + response);

      setVotesAddresses(response);
    };

    createVote();
    displayVotes();
  }, [contract]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    //testing code for vote contract
    var displayVotes = async () => {
      if (votesAddresses == []) {
        return;
      }

      const vote = voteContract;
      console.log(vote); // Update state with the result.

      console.log('works!');
    };

    displayVotes();
  }, [votesAddresses[0]]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, "test value: ", votesAddresses)));
}

_s(App, "mp+xPlWreHdGDgGmgv+2MSszpDo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcCIsInZvdGVzQWRkcmVzc2VzIiwic2V0Vm90ZXNBZGRyZXNzZXMiLCJ1c2VTdGF0ZSIsIndlYjMiLCJzZXRXZWIzIiwiYWNjb3VudHMiLCJzZXRBY2NvdW50cyIsImNvbnRyYWN0Iiwic2V0Q29udHJhY3QiLCJ2b3RlQ29udHJhY3QiLCJzZXRWb3RlQ29udHJhY3QiLCJ3ZWIzSW5zdGFuY2UiLCJ1c2VFZmZlY3QiLCJpbml0V2ViMyIsImdldFdlYjMiLCJzZXR1cCIsImV0aCIsImdldEFjY291bnRzIiwibmV0d29ya0lkIiwibmV0IiwiZ2V0SWQiLCJkZXBsb3llZE5ldHdvcmsiLCJWb3RlRmFjdG9yeUNvbnRyYWN0IiwibmV0d29ya3MiLCJpbnN0YW5jZSIsIkNvbnRyYWN0IiwiYWJpIiwiYWRkcmVzcyIsImVycm9yIiwiYWxlcnQiLCJjb25zb2xlIiwiVm90ZUNvbnRyYWN0IiwiY3JlYXRlVm90ZSIsIm1ldGhvZHMiLCJzZW5kIiwiZnJvbSIsImRpc3BsYXlWb3RlcyIsInJlc3BvbnNlIiwiZ2V0RGVwbG95ZWRWb3RlcyIsImNhbGwiLCJ2b3RlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsR0FBVCxHQUFlO0FBQUE7O0FBQ2IsUUFBTTtBQUFBLE9BQUNDLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBc0NDLHNEQUFRLENBQUMsRUFBRCxDQUFwRDtBQUNBLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkYsc0RBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCSixzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssUUFBRDtBQUFBLE9BQVdD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QUFZRDs7R0F2SFFELEc7O0tBQUFBLEc7QUF5SE1BLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY0YzE1YWNjODUwZTU1ZGU0M2VkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVm90ZUZhY3RvcnlDb250cmFjdCBmcm9tIFwiLi4vY29udHJhY3RzL1ZvdGVGYWN0b3J5Lmpzb25cIjtcclxuaW1wb3J0IFZvdGVDb250cmFjdCBmcm9tIFwiLi4vY29udHJhY3RzL1ZvdGUuanNvblwiO1xyXG5pbXBvcnQgZ2V0V2ViMyBmcm9tIFwiLi4vZ2V0V2ViM1wiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XHJcblxyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IFt2b3Rlc0FkZHJlc3Nlcywgc2V0Vm90ZXNBZGRyZXNzZXNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt3ZWIzLCBzZXRXZWIzXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbYWNjb3VudHMsIHNldEFjY291bnRzXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29udHJhY3QsIHNldENvbnRyYWN0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdm90ZUNvbnRyYWN0LCBzZXRWb3RlQ29udHJhY3RdID0gdXNlU3RhdGUoJycpO1xyXG4gIHZhciB3ZWIzSW5zdGFuY2U7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHsvLyBnZXQgd2ViM1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdFdlYjMoKSB7XHJcbiAgICAgIHdlYjNJbnN0YW5jZSA9IGF3YWl0IGdldFdlYjMoKVxyXG4gICAgICBzZXRXZWIzKHdlYjNJbnN0YW5jZSk7XHJcbiAgICB9XHJcbiAgICBpbml0V2ViMygpO1xyXG4gIH0sW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4gey8vIGdldCBGYWN0b3J5IGNvbnRyYWN0XHJcbiAgICBhc3luYyBmdW5jdGlvbiBzZXR1cCgpIHtcclxuICAgICAgaWYod2ViMyA9PSAnJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHNldEFjY291bnRzKGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCkpO1xyXG4gICAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXHJcbiAgICAgICAgY29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViMy5ldGgubmV0LmdldElkKCk7XHJcbiAgICAgICAgY29uc3QgZGVwbG95ZWROZXR3b3JrID0gVm90ZUZhY3RvcnlDb250cmFjdC5uZXR3b3Jrc1tuZXR3b3JrSWRdO1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgICAgICAgVm90ZUZhY3RvcnlDb250cmFjdC5hYmksXHJcbiAgICAgICAgICBkZXBsb3llZE5ldHdvcmsgJiYgZGVwbG95ZWROZXR3b3JrLmFkZHJlc3MsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRBY2NvdW50cyhhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpKTtcclxuICAgICAgICBzZXRDb250cmFjdChpbnN0YW5jZSk7XHJcbiAgICBcclxuICAgICAgICAvLyBTZXQgd2ViMywgYWNjb3VudHMsIGFuZCBjb250cmFjdCB0byB0aGUgc3RhdGUsIGFuZCB0aGVuIHByb2NlZWQgd2l0aCBhblxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIC8vIENhdGNoIGFueSBlcnJvcnMgZm9yIGFueSBvZiB0aGUgYWJvdmUgb3BlcmF0aW9ucy5cclxuICAgICAgICBhbGVydChcclxuICAgICAgICAgIGBGYWlsZWQgdG8gbG9hZCB3ZWIzLCBhY2NvdW50cywgb3IgY29udHJhY3QuIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMuYCxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAgIHNldHVwKCk7XHJcbiAgfSxbd2ViM10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4gey8vanVzdCBnZXQgVm90ZSBjb250cmFjdFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2V0dXAoKSB7XHJcbiAgICAgIGlmKHdlYjMgPT0gJycpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBHZXQgdGhlIGNvbnRyYWN0IGluc3RhbmNlLlxyXG4gICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpO1xyXG4gICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IFZvdGVDb250cmFjdC5uZXR3b3Jrc1tuZXR3b3JrSWRdO1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgICAgICAgVm90ZUNvbnRyYWN0LmFiaSxcclxuICAgICAgICAgIGRlcGxveWVkTmV0d29yayAmJiBkZXBsb3llZE5ldHdvcmsuYWRkcmVzcyxcclxuICAgICAgICApO1xyXG4gICAgICAgIHNldFZvdGVDb250cmFjdChpbnN0YW5jZSk7XHJcbiAgICAgICAgLy8gU2V0IHdlYjMsIGFjY291bnRzLCBhbmQgY29udHJhY3QgdG8gdGhlIHN0YXRlLCBhbmQgdGhlbiBwcm9jZWVkIHdpdGggYW5cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyBDYXRjaCBhbnkgZXJyb3JzIGZvciBhbnkgb2YgdGhlIGFib3ZlIG9wZXJhdGlvbnMuXHJcbiAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmAsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgICBzZXR1cCgpO1xyXG4gIH0sW2NvbnRyYWN0XSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+IHsvL3Rlc3RpbmcgY29kZSBmb3IgZmFjdG9yeSBjb250cmFjdFxyXG4gICAgdmFyIGNyZWF0ZVZvdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmKGNvbnRyYWN0ID09ICcnKXtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gR2V0IHRoZSB2YWx1ZSBmcm9tIHRoZSBjb250cmFjdCB0byBwcm92ZSBpdCB3b3JrZWQuXHJcbiAgICAgIC8vIHVuY29tbWVudCB0byBjcmVhdGUgdm90ZXMsIG5vdGUgdGhhdCBzZWNvbmQgYXdhaXQgY2FsbCB3b250IHJ1biBpZiBmaXJzdCBpcyBydW4uXHJcbiAgICAgIGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuY3JlYXRlVm90ZSgwKS5zZW5kKHtcclxuICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICB2YXIgZGlzcGxheVZvdGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZihjb250cmFjdCA9PSAnJyl7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5nZXREZXBsb3llZFZvdGVzKCkuY2FsbCgpO1xyXG4gICAgICAvLyBVcGRhdGUgc3RhdGUgd2l0aCB0aGUgcmVzdWx0LlxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInJlc3BvbnNlIGlzXCIgKyByZXNwb25zZSk7XHJcbiAgICAgIHNldFZvdGVzQWRkcmVzc2VzKHJlc3BvbnNlKTtcclxuICAgIH07XHJcbiAgICBjcmVhdGVWb3RlKCk7XHJcbiAgICBkaXNwbGF5Vm90ZXMoKTtcclxuICB9LFtjb250cmFjdF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PiB7Ly90ZXN0aW5nIGNvZGUgZm9yIHZvdGUgY29udHJhY3RcclxuICAgIHZhciBkaXNwbGF5Vm90ZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmKHZvdGVzQWRkcmVzc2VzID09IFtdKXtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgdm90ZSA9IHZvdGVDb250cmFjdDtcclxuICAgICAgY29uc29sZS5sb2codm90ZSk7XHJcbiAgICAgIC8vIFVwZGF0ZSBzdGF0ZSB3aXRoIHRoZSByZXN1bHQuXHJcbiAgICAgIGNvbnNvbGUubG9nKCd3b3JrcyEnKVxyXG4gICAgfTtcclxuICAgIGRpc3BsYXlWb3RlcygpO1xyXG4gIH0sW3ZvdGVzQWRkcmVzc2VzWzBdXSk7XHJcblxyXG4gIHJldHVybiggXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICA8ZGl2PnRlc3QgdmFsdWU6IHt2b3Rlc0FkZHJlc3Nlc308L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=