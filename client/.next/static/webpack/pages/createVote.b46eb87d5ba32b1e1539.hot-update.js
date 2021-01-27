webpackHotUpdate_N_E("pages/createVote",{

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ "./src/components/home.js");


var _jsxFileName = "C:\\Users\\foubroker\\voting-at-mcgill\\client\\src\\components\\header.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const headersData = [{
  label: "Home",
  href: "/home",
  key: 1
}, {
  label: "Create Vote",
  href: "/createVote",
  key: 2
}, {
  label: "About Us",
  href: "/aboutUs",
  key: 3
}, {
  label: "Log Out",
  href: "/logout",
  key: 4
}];
const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(() => ({
  header: {
    backgroundColor: "#ED1B2F"
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left"
  }
}));
const Header = () => {
  _s();

  const {
    header,
    logoStyle
  } = useStyles();

  const displayDesktop = () => {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }
    }, logo, getMenuButtons());
  };

  const logo = __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    component: "h1",
    className: logoStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "McGill Votes"));

  const getMenuButtons = () => {
    return headersData.map(({
      label,
      href
    }) => {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: label,
        color: "inherit",
        href: href
      }, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }
      }), label);
    });
  };

  return __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AppBar"], {
    style: {
      backgroundColor: "#ED1B2F",
      position: "absolute",
      'margin-bottom': "20px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, displayDesktop()));
};

_s(Header, "rWysU5dOTDVYgjjC/DvFw5ROOFc=", false, function () {
  return [useStyles];
});

_c = Header;

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbImhlYWRlcnNEYXRhIiwibGFiZWwiLCJocmVmIiwia2V5IiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImhlYWRlciIsImJhY2tncm91bmRDb2xvciIsImxvZ28iLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImNvbG9yIiwidGV4dEFsaWduIiwiSGVhZGVyIiwibG9nb1N0eWxlIiwiZGlzcGxheURlc2t0b3AiLCJnZXRNZW51QnV0dG9ucyIsIm1hcCIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQSxNQUFNQSxXQUFXLEdBQUcsQ0FDaEI7QUFDRUMsT0FBSyxFQUFFLE1BRFQ7QUFFRUMsTUFBSSxFQUFFLE9BRlI7QUFHRUMsS0FBRyxFQUFDO0FBSE4sQ0FEZ0IsRUFNaEI7QUFDRUYsT0FBSyxFQUFFLGFBRFQ7QUFFRUMsTUFBSSxFQUFFLGFBRlI7QUFHRUMsS0FBRyxFQUFDO0FBSE4sQ0FOZ0IsRUFXaEI7QUFDRUYsT0FBSyxFQUFFLFVBRFQ7QUFFRUMsTUFBSSxFQUFFLFVBRlI7QUFHRUMsS0FBRyxFQUFDO0FBSE4sQ0FYZ0IsRUFnQmhCO0FBQ0VGLE9BQUssRUFBRSxTQURUO0FBRUVDLE1BQUksRUFBRSxTQUZSO0FBR0VDLEtBQUcsRUFBQztBQUhOLENBaEJnQixDQUFwQjtBQXVCQSxNQUFNQyxTQUFTLEdBQUdDLG9FQUFVLENBQUMsT0FBTztBQUNoQ0MsUUFBTSxFQUFFO0FBQ0xDLG1CQUFlLEVBQUU7QUFEWixHQUR3QjtBQUloQ0MsTUFBSSxFQUFFO0FBQ0ZDLGNBQVUsRUFBRSx1QkFEVjtBQUVGQyxjQUFVLEVBQUUsR0FGVjtBQUdGQyxTQUFLLEVBQUUsU0FITDtBQUlGQyxhQUFTLEVBQUU7QUFKVDtBQUowQixDQUFQLENBQUQsQ0FBNUI7QUFZTyxNQUFNQyxNQUFNLEdBQUcsTUFBTTtBQUFBOztBQUN4QixRQUFNO0FBQUVQLFVBQUY7QUFBVVE7QUFBVixNQUF3QlYsU0FBUyxFQUF2Qzs7QUFFQSxRQUFNVyxjQUFjLEdBQUcsTUFBTTtBQUN6QixXQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHUCxJQURILEVBRUdRLGNBQWMsRUFGakIsQ0FERjtBQU1ILEdBUEQ7O0FBUUEsUUFBTVIsSUFBSSxHQUNOLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUF5QixhQUFTLEVBQUMsSUFBbkM7QUFBd0MsYUFBUyxFQUFFTSxTQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLENBREo7O0FBUUEsUUFBTUUsY0FBYyxHQUFHLE1BQU07QUFDM0IsV0FBT2hCLFdBQVcsQ0FBQ2lCLEdBQVosQ0FBZ0IsQ0FBQztBQUFFaEIsV0FBRjtBQUFTQztBQUFULEtBQUQsS0FBcUI7QUFDMUMsYUFDSSxNQUFDLHdEQUFELHFGQUNNO0FBQ0ZDLFdBQUcsRUFBRUYsS0FESDtBQUVGVSxhQUFLLEVBQUUsU0FGTDtBQUdGVCxZQUFJLEVBQUVBO0FBSEosT0FETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBT0dELEtBUEgsQ0FESjtBQVdELEtBWk0sQ0FBUDtBQWFELEdBZEQ7O0FBZUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRDtBQUFRLFNBQUssRUFBRTtBQUFDTSxxQkFBZSxFQUFFLFNBQWxCO0FBQTZCVyxjQUFRLEVBQUUsVUFBdkM7QUFBbUQsdUJBQWdCO0FBQW5FLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0RkgsY0FBYyxFQUExRyxDQURKLENBREo7QUFNSCxDQXhDTTs7R0FBTUYsTTtVQUNxQlQsUzs7O0tBRHJCUyxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NyZWF0ZVZvdGUuYjQ2ZWI4N2Q1YmEzMmIxZTE1MzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFxyXG4gICAgQXBwQmFyLCBcclxuICAgIFRvb2xiYXIsIFxyXG4gICAgVHlwb2dyYXBoeSwgXHJcbiAgICBtYWtlU3R5bGVzLFxyXG4gICAgQnV0dG9uXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgSG9tZSB9IGZyb20gJy4vaG9tZSc7XHJcbmNvbnN0IGhlYWRlcnNEYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJIb21lXCIsXHJcbiAgICAgIGhyZWY6IFwiL2hvbWVcIixcclxuICAgICAga2V5OjFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIkNyZWF0ZSBWb3RlXCIsXHJcbiAgICAgIGhyZWY6IFwiL2NyZWF0ZVZvdGVcIixcclxuICAgICAga2V5OjJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIkFib3V0IFVzXCIsXHJcbiAgICAgIGhyZWY6IFwiL2Fib3V0VXNcIixcclxuICAgICAga2V5OjNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIkxvZyBPdXRcIixcclxuICAgICAgaHJlZjogXCIvbG9nb3V0XCIsXHJcbiAgICAgIGtleTo0XHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XHJcbiAgICBoZWFkZXI6IHtcclxuICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRUQxQjJGXCIsXHJcbiAgICB9LFxyXG4gICAgbG9nbzoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiV29yayBTYW5zLCBzYW5zLXNlcmlmXCIsXHJcbiAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgIGNvbG9yOiBcIiNGRkZFRkVcIixcclxuICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgICB9LFxyXG4gfSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgaGVhZGVyLCBsb2dvU3R5bGUgfSA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IGRpc3BsYXlEZXNrdG9wID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgICAge2xvZ299XHJcbiAgICAgICAgICAgIHtnZXRNZW51QnV0dG9ucygpfVxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbG9nbyA9IChcclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMVwiIGNsYXNzTmFtZT17bG9nb1N0eWxlfSA+XHJcbiAgICAgICAgICAgICAgTWNHaWxsIFZvdGVzXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICk7XHJcblxyXG4gICAgY29uc3QgZ2V0TWVudUJ1dHRvbnMgPSAoKSA9PiB7XHJcbiAgICAgIHJldHVybiBoZWFkZXJzRGF0YS5tYXAoKHsgbGFiZWwsIGhyZWYgfSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB7Li4ue1xyXG4gICAgICAgICAgICAgICAga2V5OiBsYWJlbCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGhyZWY6IGhyZWYsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICA8QXBwQmFyIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiNFRDFCMkZcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgJ21hcmdpbi1ib3R0b20nOlwiMjBweFwifX0+e2Rpc3BsYXlEZXNrdG9wKCl9PC9BcHBCYXI+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9