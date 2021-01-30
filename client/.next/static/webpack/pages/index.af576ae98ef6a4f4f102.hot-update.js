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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
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
        const instance = new web3.eth.Contract(_contracts_Vote_json__WEBPACK_IMPORTED_MODULE_2__.abi, votesAddresses[0]);
        setVoteContract(instance); // Set web3, accounts, and contract to the state, and then proceed with an
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(`Failed to load web3, accounts, or contract. Check console for details.`);
        console.error(error);
      }
    }

    setup();
  }, [contract, votesAddresses]);
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

      console.log("first vote is " + response[0]);
      setVotesAddresses(response);
    };

    createVote();
    displayVotes();
  }, [contract]); // useEffect(()=> {//testing code for vote contract
  //   var displayVotes = async () => {
  //     if(votesAddresses == []){
  //       return;
  //     }
  //     const vote = voteContract.at(votesAddresses[0]);
  //     console.log(vote);
  //     // Update state with the result.
  //     console.log('works!')
  //   };
  //   displayVotes();
  // },[votesAddresses, voteContract]);

  async function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    await voteContract.methods.editElection("title", 1, 2, "description", [1, 2, 3]).send({
      from: accounts[0]
    });
    console.log("method was sent");
    console.log(await voteContract.methods.currentElection.call());
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, __jsx("button", {
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcCIsInZvdGVzQWRkcmVzc2VzIiwic2V0Vm90ZXNBZGRyZXNzZXMiLCJ1c2VTdGF0ZSIsIndlYjMiLCJzZXRXZWIzIiwiYWNjb3VudHMiLCJzZXRBY2NvdW50cyIsImNvbnRyYWN0Iiwic2V0Q29udHJhY3QiLCJ2b3RlQ29udHJhY3QiLCJzZXRWb3RlQ29udHJhY3QiLCJ3ZWIzSW5zdGFuY2UiLCJ1c2VFZmZlY3QiLCJpbml0V2ViMyIsImdldFdlYjMiLCJzZXR1cCIsImV0aCIsImdldEFjY291bnRzIiwibmV0d29ya0lkIiwibmV0IiwiZ2V0SWQiLCJkZXBsb3llZE5ldHdvcmsiLCJWb3RlRmFjdG9yeUNvbnRyYWN0IiwibmV0d29ya3MiLCJpbnN0YW5jZSIsIkNvbnRyYWN0IiwiYWJpIiwiYWRkcmVzcyIsImVycm9yIiwiYWxlcnQiLCJjb25zb2xlIiwiVm90ZUNvbnRyYWN0IiwiY3JlYXRlVm90ZSIsIm1ldGhvZHMiLCJzZW5kIiwiZnJvbSIsImRpc3BsYXlWb3RlcyIsInJlc3BvbnNlIiwiZ2V0RGVwbG95ZWRWb3RlcyIsImNhbGwiLCJsb2ciLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVkaXRFbGVjdGlvbiIsImN1cnJlbnRFbGVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEdBQVQsR0FBZTtBQUFBOztBQUNiLFFBQU07QUFBQSxPQUFDQyxjQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQXNDQyxzREFBUSxDQUFDLEVBQUQsQ0FBcEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JGLHNEQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDRyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkosc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCTixzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ08sWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NSLHNEQUFRLENBQUMsRUFBRCxDQUFoRDtBQUNBLE1BQUlTLFlBQUo7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQUM7QUFDZixtQkFBZUMsUUFBZixHQUEwQjtBQUN4QkYsa0JBQVksR0FBRyxNQUFNRyx3REFBTyxFQUE1QjtBQUNBVixhQUFPLENBQUNPLFlBQUQsQ0FBUDtBQUNEOztBQUNERSxZQUFRO0FBQ1QsR0FOUSxFQU1QLEVBTk8sQ0FBVDtBQVFBRCx5REFBUyxDQUFDLE1BQU07QUFBQztBQUNmLG1CQUFlRyxLQUFmLEdBQXVCO0FBQ3JCLFVBQUdaLElBQUksSUFBSSxFQUFYLEVBQWU7QUFDYjtBQUNEOztBQUNELFVBQUk7QUFDRkcsbUJBQVcsQ0FBQyxNQUFNSCxJQUFJLENBQUNhLEdBQUwsQ0FBU0MsV0FBVCxFQUFQLENBQVgsQ0FERSxDQUVGOztBQUNBLGNBQU1DLFNBQVMsR0FBRyxNQUFNZixJQUFJLENBQUNhLEdBQUwsQ0FBU0csR0FBVCxDQUFhQyxLQUFiLEVBQXhCO0FBQ0EsY0FBTUMsZUFBZSxHQUFHQyx3REFBbUIsQ0FBQ0MsUUFBcEIsQ0FBNkJMLFNBQTdCLENBQXhCO0FBQ0EsY0FBTU0sUUFBUSxHQUFHLElBQUlyQixJQUFJLENBQUNhLEdBQUwsQ0FBU1MsUUFBYixDQUNmSCx3REFBbUIsQ0FBQ0ksR0FETCxFQUVmTCxlQUFlLElBQUlBLGVBQWUsQ0FBQ00sT0FGcEIsQ0FBakI7QUFJQXJCLG1CQUFXLENBQUMsTUFBTUgsSUFBSSxDQUFDYSxHQUFMLENBQVNDLFdBQVQsRUFBUCxDQUFYO0FBQ0FULG1CQUFXLENBQUNnQixRQUFELENBQVgsQ0FWRSxDQVlGO0FBQ0QsT0FiRCxDQWFFLE9BQU9JLEtBQVAsRUFBYztBQUNkO0FBQ0FDLGFBQUssQ0FDRix3RUFERSxDQUFMO0FBR0FDLGVBQU8sQ0FBQ0YsS0FBUixDQUFjQSxLQUFkO0FBQ0Q7QUFDRjs7QUFDQ2IsU0FBSztBQUNSLEdBM0JRLEVBMkJQLENBQUNaLElBQUQsQ0EzQk8sQ0FBVDtBQTZCQVMseURBQVMsQ0FBQyxNQUFNO0FBQUM7QUFDZixtQkFBZUcsS0FBZixHQUF1QjtBQUNyQixVQUFHWixJQUFJLElBQUksRUFBWCxFQUFlO0FBQ2I7QUFDRDs7QUFDRCxVQUFJO0FBQ0Y7QUFDQSxjQUFNcUIsUUFBUSxHQUFHLElBQUlyQixJQUFJLENBQUNhLEdBQUwsQ0FBU1MsUUFBYixDQUNmTSxpREFBWSxDQUFDTCxHQURFLEVBRWYxQixjQUFjLENBQUMsQ0FBRCxDQUZDLENBQWpCO0FBSUFVLHVCQUFlLENBQUNjLFFBQUQsQ0FBZixDQU5FLENBT0Y7QUFDRCxPQVJELENBUUUsT0FBT0ksS0FBUCxFQUFjO0FBQ2Q7QUFDQUMsYUFBSyxDQUNGLHdFQURFLENBQUw7QUFHQUMsZUFBTyxDQUFDRixLQUFSLENBQWNBLEtBQWQ7QUFDRDtBQUNGOztBQUNDYixTQUFLO0FBQ1IsR0F0QlEsRUFzQlAsQ0FBQ1IsUUFBRCxFQUFVUCxjQUFWLENBdEJPLENBQVQ7QUF3QkFZLHlEQUFTLENBQUMsTUFBSztBQUFDO0FBQ2QsUUFBSW9CLFVBQVUsR0FBRyxZQUFZO0FBQzNCLFVBQUd6QixRQUFRLElBQUksRUFBZixFQUFrQjtBQUNoQjtBQUNELE9BSDBCLENBSTNCO0FBQ0E7OztBQUNBLFlBQU1BLFFBQVEsQ0FBQzBCLE9BQVQsQ0FBaUJELFVBQWpCLENBQTRCLENBQTVCLEVBQStCRSxJQUEvQixDQUFvQztBQUN4Q0MsWUFBSSxFQUFFOUIsUUFBUSxDQUFDLENBQUQ7QUFEMEIsT0FBcEMsQ0FBTjtBQUdELEtBVEQ7O0FBVUEsUUFBSStCLFlBQVksR0FBRyxZQUFZO0FBQzdCLFVBQUc3QixRQUFRLElBQUksRUFBZixFQUFrQjtBQUNoQjtBQUNEOztBQUNELFlBQU04QixRQUFRLEdBQUcsTUFBTTlCLFFBQVEsQ0FBQzBCLE9BQVQsQ0FBaUJLLGdCQUFqQixHQUFvQ0MsSUFBcEMsRUFBdkIsQ0FKNkIsQ0FLN0I7O0FBQ0FULGFBQU8sQ0FBQ1UsR0FBUixDQUFZLG1CQUFtQkgsUUFBUSxDQUFDLENBQUQsQ0FBdkM7QUFDQXBDLHVCQUFpQixDQUFDb0MsUUFBRCxDQUFqQjtBQUNELEtBUkQ7O0FBU0FMLGNBQVU7QUFDVkksZ0JBQVk7QUFDYixHQXRCUSxFQXNCUCxDQUFDN0IsUUFBRCxDQXRCTyxDQUFULENBcEVhLENBNEZiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRSxpQkFBZWtDLFdBQWYsQ0FBMkJDLENBQTNCLEVBQThCO0FBQzVCQSxLQUFDLENBQUNDLGNBQUY7QUFDQWIsV0FBTyxDQUFDVSxHQUFSLENBQVksdUJBQVo7QUFDQSxVQUFNL0IsWUFBWSxDQUFDd0IsT0FBYixDQUFxQlcsWUFBckIsQ0FBa0MsT0FBbEMsRUFBMkMsQ0FBM0MsRUFBOEMsQ0FBOUMsRUFBaUQsYUFBakQsRUFBZ0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FBaEUsRUFBeUVWLElBQXpFLENBQThFO0FBQ2xGQyxVQUFJLEVBQUU5QixRQUFRLENBQUMsQ0FBRDtBQURvRSxLQUE5RSxDQUFOO0FBR0F5QixXQUFPLENBQUNVLEdBQVIsQ0FBWSxpQkFBWjtBQUNBVixXQUFPLENBQUNVLEdBQVIsQ0FBWSxNQUFNL0IsWUFBWSxDQUFDd0IsT0FBYixDQUFxQlksZUFBckIsQ0FBcUNOLElBQXJDLEVBQWxCO0FBQ0Q7O0FBRUgsU0FDRSxtRUFDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsV0FBTyxFQUFFRSxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFrQnpDLGNBQWxCLENBRkYsQ0FORixDQURGO0FBY0Q7O0dBaklRRCxHOztLQUFBQSxHO0FBbUlNQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZjU3NmFlOThlZjZhNGY0ZjEwMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFZvdGVGYWN0b3J5Q29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlRmFjdG9yeS5qc29uXCI7XHJcbmltcG9ydCBWb3RlQ29udHJhY3QgZnJvbSBcIi4uL2NvbnRyYWN0cy9Wb3RlLmpzb25cIjtcclxuaW1wb3J0IGdldFdlYjMgZnJvbSBcIi4uL2dldFdlYjNcIjtcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgY29uc3QgW3ZvdGVzQWRkcmVzc2VzLCBzZXRWb3Rlc0FkZHJlc3Nlc10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3dlYjMsIHNldFdlYjNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFthY2NvdW50cywgc2V0QWNjb3VudHNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt2b3RlQ29udHJhY3QsIHNldFZvdGVDb250cmFjdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgdmFyIHdlYjNJbnN0YW5jZTtcclxuICB1c2VFZmZlY3QoKCkgPT4gey8vIGdldCB3ZWIzXHJcbiAgICBhc3luYyBmdW5jdGlvbiBpbml0V2ViMygpIHtcclxuICAgICAgd2ViM0luc3RhbmNlID0gYXdhaXQgZ2V0V2ViMygpXHJcbiAgICAgIHNldFdlYjMod2ViM0luc3RhbmNlKTtcclxuICAgIH1cclxuICAgIGluaXRXZWIzKCk7XHJcbiAgfSxbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7Ly8gZ2V0IEZhY3RvcnkgY29udHJhY3RcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgICBpZih3ZWIzID09ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgc2V0QWNjb3VudHMoYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKSk7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBjb250cmFjdCBpbnN0YW5jZS5cclxuICAgICAgICBjb25zdCBuZXR3b3JrSWQgPSBhd2FpdCB3ZWIzLmV0aC5uZXQuZ2V0SWQoKTtcclxuICAgICAgICBjb25zdCBkZXBsb3llZE5ldHdvcmsgPSBWb3RlRmFjdG9yeUNvbnRyYWN0Lm5ldHdvcmtzW25ldHdvcmtJZF07XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXHJcbiAgICAgICAgICBWb3RlRmFjdG9yeUNvbnRyYWN0LmFiaSxcclxuICAgICAgICAgIGRlcGxveWVkTmV0d29yayAmJiBkZXBsb3llZE5ldHdvcmsuYWRkcmVzcyxcclxuICAgICAgICApO1xyXG4gICAgICAgIHNldEFjY291bnRzKGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCkpO1xyXG4gICAgICAgIHNldENvbnRyYWN0KGluc3RhbmNlKTtcclxuICAgIFxyXG4gICAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxyXG4gICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICAgc2V0dXAoKTtcclxuICB9LFt3ZWIzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7Ly9qdXN0IGdldCBWb3RlIGNvbnRyYWN0XHJcbiAgICBhc3luYyBmdW5jdGlvbiBzZXR1cCgpIHtcclxuICAgICAgaWYod2ViMyA9PSAnJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXHJcbiAgICAgICAgICBWb3RlQ29udHJhY3QuYWJpLFxyXG4gICAgICAgICAgdm90ZXNBZGRyZXNzZXNbMF0sXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRWb3RlQ29udHJhY3QoaW5zdGFuY2UpO1xyXG4gICAgICAgIC8vIFNldCB3ZWIzLCBhY2NvdW50cywgYW5kIGNvbnRyYWN0IHRvIHRoZSBzdGF0ZSwgYW5kIHRoZW4gcHJvY2VlZCB3aXRoIGFuXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gQ2F0Y2ggYW55IGVycm9ycyBmb3IgYW55IG9mIHRoZSBhYm92ZSBvcGVyYXRpb25zLlxyXG4gICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgYEZhaWxlZCB0byBsb2FkIHdlYjMsIGFjY291bnRzLCBvciBjb250cmFjdC4gQ2hlY2sgY29uc29sZSBmb3IgZGV0YWlscy5gLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICAgc2V0dXAoKTtcclxuICB9LFtjb250cmFjdCx2b3Rlc0FkZHJlc3Nlc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PiB7Ly90ZXN0aW5nIGNvZGUgZm9yIGZhY3RvcnkgY29udHJhY3RcclxuICAgIHZhciBjcmVhdGVWb3RlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZihjb250cmFjdCA9PSAnJyl7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEdldCB0aGUgdmFsdWUgZnJvbSB0aGUgY29udHJhY3QgdG8gcHJvdmUgaXQgd29ya2VkLlxyXG4gICAgICAvLyB1bmNvbW1lbnQgdG8gY3JlYXRlIHZvdGVzLCBub3RlIHRoYXQgc2Vjb25kIGF3YWl0IGNhbGwgd29udCBydW4gaWYgZmlyc3QgaXMgcnVuLlxyXG4gICAgICBhd2FpdCBjb250cmFjdC5tZXRob2RzLmNyZWF0ZVZvdGUoMCkuc2VuZCh7XHJcbiAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIGRpc3BsYXlWb3RlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYoY29udHJhY3QgPT0gJycpe1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0RGVwbG95ZWRWb3RlcygpLmNhbGwoKTtcclxuICAgICAgLy8gVXBkYXRlIHN0YXRlIHdpdGggdGhlIHJlc3VsdC5cclxuICAgICAgY29uc29sZS5sb2coXCJmaXJzdCB2b3RlIGlzIFwiICsgcmVzcG9uc2VbMF0pO1xyXG4gICAgICBzZXRWb3Rlc0FkZHJlc3NlcyhyZXNwb25zZSk7XHJcbiAgICB9O1xyXG4gICAgY3JlYXRlVm90ZSgpO1xyXG4gICAgZGlzcGxheVZvdGVzKCk7XHJcbiAgfSxbY29udHJhY3RdKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpPT4gey8vdGVzdGluZyBjb2RlIGZvciB2b3RlIGNvbnRyYWN0XHJcbiAgLy8gICB2YXIgZGlzcGxheVZvdGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgICBpZih2b3Rlc0FkZHJlc3NlcyA9PSBbXSl7XHJcbiAgLy8gICAgICAgcmV0dXJuO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICAgIGNvbnN0IHZvdGUgPSB2b3RlQ29udHJhY3QuYXQodm90ZXNBZGRyZXNzZXNbMF0pO1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyh2b3RlKTtcclxuICAvLyAgICAgLy8gVXBkYXRlIHN0YXRlIHdpdGggdGhlIHJlc3VsdC5cclxuICAvLyAgICAgY29uc29sZS5sb2coJ3dvcmtzIScpXHJcbiAgLy8gICB9O1xyXG4gIC8vICAgZGlzcGxheVZvdGVzKCk7XHJcbiAgLy8gfSxbdm90ZXNBZGRyZXNzZXMsIHZvdGVDb250cmFjdF0pO1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zb2xlLmxvZygnVGhlIGxpbmsgd2FzIGNsaWNrZWQuJyk7XHJcbiAgICAgIGF3YWl0IHZvdGVDb250cmFjdC5tZXRob2RzLmVkaXRFbGVjdGlvbihcInRpdGxlXCIsIDEsIDIsIFwiZGVzY3JpcHRpb25cIiwgWzEsMiwzXSkuc2VuZCh7XHJcbiAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibWV0aG9kIHdhcyBzZW50XCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGF3YWl0IHZvdGVDb250cmFjdC5tZXRob2RzLmN1cnJlbnRFbGVjdGlvbi5jYWxsKCkpXHJcbiAgICB9XHJcblxyXG4gIHJldHVybiggXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT48L2J1dHRvbj5cclxuICAgICAgICA8ZGl2PnRlc3QgdmFsdWU6IHt2b3Rlc0FkZHJlc3Nlc308L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=