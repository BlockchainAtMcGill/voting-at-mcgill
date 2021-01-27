webpackHotUpdate_N_E("pages/index",{

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

  const logo = __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    component: "h1",
    className: logoStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, "McGill Votes");

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
          lineNumber: 66,
          columnNumber: 13
        }
      }), label);
    });
  };

  return __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AppBar"], {
    className: header,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbImhlYWRlcnNEYXRhIiwibGFiZWwiLCJocmVmIiwia2V5IiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImhlYWRlciIsImJhY2tncm91bmRDb2xvciIsImxvZ28iLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImNvbG9yIiwidGV4dEFsaWduIiwiSGVhZGVyIiwibG9nb1N0eWxlIiwiZGlzcGxheURlc2t0b3AiLCJnZXRNZW51QnV0dG9ucyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBQ0EsTUFBTUEsV0FBVyxHQUFHLENBQ2hCO0FBQ0VDLE9BQUssRUFBRSxNQURUO0FBRUVDLE1BQUksRUFBRSxPQUZSO0FBR0VDLEtBQUcsRUFBQztBQUhOLENBRGdCLEVBTWhCO0FBQ0VGLE9BQUssRUFBRSxhQURUO0FBRUVDLE1BQUksRUFBRSxhQUZSO0FBR0VDLEtBQUcsRUFBQztBQUhOLENBTmdCLEVBV2hCO0FBQ0VGLE9BQUssRUFBRSxVQURUO0FBRUVDLE1BQUksRUFBRSxVQUZSO0FBR0VDLEtBQUcsRUFBQztBQUhOLENBWGdCLEVBZ0JoQjtBQUNFRixPQUFLLEVBQUUsU0FEVDtBQUVFQyxNQUFJLEVBQUUsU0FGUjtBQUdFQyxLQUFHLEVBQUM7QUFITixDQWhCZ0IsQ0FBcEI7QUF1QkEsTUFBTUMsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLE9BQU87QUFDaENDLFFBQU0sRUFBRTtBQUNMQyxtQkFBZSxFQUFFO0FBRFosR0FEd0I7QUFJaENDLE1BQUksRUFBRTtBQUNGQyxjQUFVLEVBQUUsdUJBRFY7QUFFRkMsY0FBVSxFQUFFLEdBRlY7QUFHRkMsU0FBSyxFQUFFLFNBSEw7QUFJRkMsYUFBUyxFQUFFO0FBSlQ7QUFKMEIsQ0FBUCxDQUFELENBQTVCO0FBWU8sTUFBTUMsTUFBTSxHQUFHLE1BQU07QUFBQTs7QUFDeEIsUUFBTTtBQUFFUCxVQUFGO0FBQVVRO0FBQVYsTUFBd0JWLFNBQVMsRUFBdkM7O0FBRUEsUUFBTVcsY0FBYyxHQUFHLE1BQU07QUFDekIsV0FDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR1AsSUFESCxFQUVHUSxjQUFjLEVBRmpCLENBREY7QUFNSCxHQVBEOztBQVFBLFFBQU1SLElBQUksR0FDTixNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLGFBQVMsRUFBQyxJQUFuQztBQUF3QyxhQUFTLEVBQUVNLFNBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREo7O0FBTUEsUUFBTUUsY0FBYyxHQUFHLE1BQU07QUFDM0IsV0FBT2hCLFdBQVcsQ0FBQ2lCLEdBQVosQ0FBZ0IsQ0FBQztBQUFFaEIsV0FBRjtBQUFTQztBQUFULEtBQUQsS0FBcUI7QUFDMUMsYUFDSSxNQUFDLHdEQUFELHFGQUNNO0FBQ0ZDLFdBQUcsRUFBRUYsS0FESDtBQUVGVSxhQUFLLEVBQUUsU0FGTDtBQUdGVCxZQUFJLEVBQUVBO0FBSEosT0FETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBT0dELEtBUEgsQ0FESjtBQVdELEtBWk0sQ0FBUDtBQWFELEdBZEQ7O0FBZUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRDtBQUFRLGFBQVMsRUFBRUssTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QlMsY0FBYyxFQUExQyxDQURKLENBREo7QUFNSCxDQXRDTTs7R0FBTUYsTTtVQUNxQlQsUzs7O0tBRHJCUyxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjlmMGY3NmRhNDlkNDRhMjM2NmI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBcclxuICAgIEFwcEJhciwgXHJcbiAgICBUb29sYmFyLCBcclxuICAgIFR5cG9ncmFwaHksIFxyXG4gICAgbWFrZVN0eWxlcyxcclxuICAgIEJ1dHRvblxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEhvbWUgfSBmcm9tICcuL2hvbWUnO1xyXG5jb25zdCBoZWFkZXJzRGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiSG9tZVwiLFxyXG4gICAgICBocmVmOiBcIi9ob21lXCIsXHJcbiAgICAgIGtleToxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJDcmVhdGUgVm90ZVwiLFxyXG4gICAgICBocmVmOiBcIi9jcmVhdGVWb3RlXCIsXHJcbiAgICAgIGtleToyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJBYm91dCBVc1wiLFxyXG4gICAgICBocmVmOiBcIi9hYm91dFVzXCIsXHJcbiAgICAgIGtleTozXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJMb2cgT3V0XCIsXHJcbiAgICAgIGhyZWY6IFwiL2xvZ291dFwiLFxyXG4gICAgICBrZXk6NFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gICAgaGVhZGVyOiB7XHJcbiAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0VEMUIyRlwiLFxyXG4gICAgfSxcclxuICAgIGxvZ286IHtcclxuICAgICAgICBmb250RmFtaWx5OiBcIldvcmsgU2Fucywgc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgICAgICBjb2xvcjogXCIjRkZGRUZFXCIsXHJcbiAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcclxuICAgICAgfSxcclxuIH0pKTtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGhlYWRlciwgbG9nb1N0eWxlIH0gPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCBkaXNwbGF5RGVza3RvcCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICAgIHtsb2dvfVxyXG4gICAgICAgICAgICB7Z2V0TWVudUJ1dHRvbnMoKX1cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICApO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvZ28gPSAoXHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDFcIiBjbGFzc05hbWU9e2xvZ29TdHlsZX0+XHJcbiAgICAgICAgICBNY0dpbGwgVm90ZXNcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICk7XHJcblxyXG4gICAgY29uc3QgZ2V0TWVudUJ1dHRvbnMgPSAoKSA9PiB7XHJcbiAgICAgIHJldHVybiBoZWFkZXJzRGF0YS5tYXAoKHsgbGFiZWwsIGhyZWYgfSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB7Li4ue1xyXG4gICAgICAgICAgICAgICAga2V5OiBsYWJlbCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGhyZWY6IGhyZWYsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICA8QXBwQmFyIGNsYXNzTmFtZT17aGVhZGVyfT57ZGlzcGxheURlc2t0b3AoKX08L0FwcEJhcj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=