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
/* harmony import */ var _getWeb3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getWeb3 */ "./src/getWeb3.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
var _jsxFileName = "C:\\Users\\foubroker\\voting-at-mcgill\\client\\src\\pages\\index.js",
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
  var web3Instance;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function initWeb3() {
      web3Instance = await Object(_getWeb3__WEBPACK_IMPORTED_MODULE_2__["default"])();
      setWeb3(web3Instance);
    }

    initWeb3();
  }, []); // useEffect(()=>console.log(web3),[web3])

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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, "test value: ", votesAddresses)));
}

_s(App, "LCeY7CFDg4c6f5VxFBC7g2yTi+U=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcCIsInZvdGVzQWRkcmVzc2VzIiwic2V0Vm90ZXNBZGRyZXNzZXMiLCJ1c2VTdGF0ZSIsIndlYjMiLCJzZXRXZWIzIiwiYWNjb3VudHMiLCJzZXRBY2NvdW50cyIsImNvbnRyYWN0Iiwic2V0Q29udHJhY3QiLCJ3ZWIzSW5zdGFuY2UiLCJ1c2VFZmZlY3QiLCJpbml0V2ViMyIsImdldFdlYjMiLCJzZXR1cCIsImV0aCIsImdldEFjY291bnRzIiwibmV0d29ya0lkIiwibmV0IiwiZ2V0SWQiLCJkZXBsb3llZE5ldHdvcmsiLCJWb3RlRmFjdG9yeUNvbnRyYWN0IiwibmV0d29ya3MiLCJpbnN0YW5jZSIsIkNvbnRyYWN0IiwiYWJpIiwiYWRkcmVzcyIsImVycm9yIiwiYWxlcnQiLCJjb25zb2xlIiwiY3JlYXRlVm90ZSIsIm1ldGhvZHMiLCJzZW5kIiwiZnJvbSIsImRpc3BsYXlWb3RlcyIsInJlc3BvbnNlIiwiZ2V0RGVwbG95ZWRWb3RlcyIsImNhbGwiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEdBQVQsR0FBZTtBQUFBOztBQUNiLFFBQU07QUFBQSxPQUFDQyxjQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQXNDQyxzREFBUSxDQUFDLEVBQUQsQ0FBcEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JGLHNEQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDRyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkosc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCTixzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxNQUFJTyxZQUFKO0FBQ0FDLHlEQUFT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ImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iYzVkNzFhZjJmMzIzY2I2NTE1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFZvdGVGYWN0b3J5Q29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlRmFjdG9yeS5qc29uXCI7XHJcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi9nZXRXZWIzXCI7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuXHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgY29uc3QgW3ZvdGVzQWRkcmVzc2VzLCBzZXRWb3Rlc0FkZHJlc3Nlc10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3dlYjMsIHNldFdlYjNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFthY2NvdW50cywgc2V0QWNjb3VudHNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUoJycpO1xyXG4gIHZhciB3ZWIzSW5zdGFuY2U7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXRXZWIzKCkge1xyXG4gICAgICB3ZWIzSW5zdGFuY2UgPSBhd2FpdCBnZXRXZWIzKClcclxuICAgICAgc2V0V2ViMyh3ZWIzSW5zdGFuY2UpO1xyXG4gICAgfVxyXG4gICAgaW5pdFdlYjMoKTtcclxuICB9LFtdKTtcclxuICAvLyB1c2VFZmZlY3QoKCk9PmNvbnNvbGUubG9nKHdlYjMpLFt3ZWIzXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgICBpZih3ZWIzID09ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgc2V0QWNjb3VudHMoYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKSk7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBjb250cmFjdCBpbnN0YW5jZS5cclxuICAgICAgICBjb25zdCBuZXR3b3JrSWQgPSBhd2FpdCB3ZWIzLmV0aC5uZXQuZ2V0SWQoKTtcclxuICAgICAgICBjb25zdCBkZXBsb3llZE5ldHdvcmsgPSBWb3RlRmFjdG9yeUNvbnRyYWN0Lm5ldHdvcmtzW25ldHdvcmtJZF07XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXHJcbiAgICAgICAgICBWb3RlRmFjdG9yeUNvbnRyYWN0LmFiaSxcclxuICAgICAgICAgIGRlcGxveWVkTmV0d29yayAmJiBkZXBsb3llZE5ldHdvcmsuYWRkcmVzcyxcclxuICAgICAgICApO1xyXG4gICAgICAgIHNldEFjY291bnRzKGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCkpO1xyXG4gICAgICAgIHNldENvbnRyYWN0KGluc3RhbmNlKTtcclxuICAgIFxyXG4gICAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxyXG4gICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICAgc2V0dXAoKTtcclxuICB9LFt3ZWIzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgIHZhciBjcmVhdGVWb3RlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZihjb250cmFjdCA9PSAnJyl7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEdldCB0aGUgdmFsdWUgZnJvbSB0aGUgY29udHJhY3QgdG8gcHJvdmUgaXQgd29ya2VkLlxyXG4gICAgICAvLyB1bmNvbW1lbnQgdG8gY3JlYXRlIHZvdGVzLCBub3RlIHRoYXQgc2Vjb25kIGF3YWl0IGNhbGwgd29udCBydW4gaWYgZmlyc3QgaXMgcnVuLlxyXG4gICAgICBhd2FpdCBjb250cmFjdC5tZXRob2RzLmNyZWF0ZVZvdGUoMCkuc2VuZCh7XHJcbiAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIGRpc3BsYXlWb3RlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYoY29udHJhY3QgPT0gJycpe1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0RGVwbG95ZWRWb3RlcygpLmNhbGwoKTtcclxuICAgICAgLy8gVXBkYXRlIHN0YXRlIHdpdGggdGhlIHJlc3VsdC5cclxuICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZSBpc1wiICsgcmVzcG9uc2UpO1xyXG4gICAgICBzZXRWb3Rlc0FkZHJlc3NlcyhyZXNwb25zZSk7XHJcbiAgICB9O1xyXG4gICAgY3JlYXRlVm90ZSgpO1xyXG4gICAgZGlzcGxheVZvdGVzKCk7XHJcbiAgfSxbY29udHJhY3RdKTtcclxuXHJcbiAgcmV0dXJuKCBcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgIDxkaXY+dGVzdCB2YWx1ZToge3ZvdGVzQWRkcmVzc2VzfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==