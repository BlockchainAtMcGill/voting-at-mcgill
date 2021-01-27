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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "h6",
    component: "h1",
    className: logoStyle,
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbImhlYWRlcnNEYXRhIiwibGFiZWwiLCJocmVmIiwia2V5IiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImhlYWRlciIsImJhY2tncm91bmRDb2xvciIsImxvZ28iLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImNvbG9yIiwidGV4dEFsaWduIiwiSGVhZGVyIiwibG9nb1N0eWxlIiwiZGlzcGxheURlc2t0b3AiLCJnZXRNZW51QnV0dG9ucyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBQ0EsTUFBTUEsV0FBVyxHQUFHLENBQ2hCO0FBQ0VDLE9BQUssRUFBRSxNQURUO0FBRUVDLE1BQUksRUFBRSxPQUZSO0FBR0VDLEtBQUcsRUFBQztBQUhOLENBRGdCLEVBTWhCO0FBQ0VGLE9BQUssRUFBRSxhQURUO0FBRUVDLE1BQUksRUFBRSxhQUZSO0FBR0VDLEtBQUcsRUFBQztBQUhOLENBTmdCLEVBV2hCO0FBQ0VGLE9BQUssRUFBRSxVQURUO0FBRUVDLE1BQUksRUFBRSxVQUZSO0FBR0VDLEtBQUcsRUFBQztBQUhOLENBWGdCLEVBZ0JoQjtBQUNFRixPQUFLLEVBQUUsU0FEVDtBQUVFQyxNQUFJLEVBQUUsU0FGUjtBQUdFQyxLQUFHLEVBQUM7QUFITixDQWhCZ0IsQ0FBcEI7QUF1QkEsTUFBTUMsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLE9BQU87QUFDaENDLFFBQU0sRUFBRTtBQUNMQyxtQkFBZSxFQUFFO0FBRFosR0FEd0I7QUFJaENDLE1BQUksRUFBRTtBQUNGQyxjQUFVLEVBQUUsdUJBRFY7QUFFRkMsY0FBVSxFQUFFLEdBRlY7QUFHRkMsU0FBSyxFQUFFLFNBSEw7QUFJRkMsYUFBUyxFQUFFO0FBSlQ7QUFKMEIsQ0FBUCxDQUFELENBQTVCO0FBWU8sTUFBTUMsTUFBTSxHQUFHLE1BQU07QUFBQTs7QUFDeEIsUUFBTTtBQUFFUCxVQUFGO0FBQVVRO0FBQVYsTUFBd0JWLFNBQVMsRUFBdkM7O0FBRUEsUUFBTVcsY0FBYyxHQUFHLE1BQU07QUFDekIsV0FDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR1AsSUFESCxFQUVHUSxjQUFjLEVBRmpCLENBREY7QUFNSCxHQVBEOztBQVFBLFFBQU1SLElBQUksR0FDTixNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLGdEQUFEO0FBQU0sV0FBTyxFQUFDLElBQWQ7QUFBbUIsYUFBUyxFQUFDLElBQTdCO0FBQWtDLGFBQVMsRUFBRU0sU0FBN0M7QUFBd0QsUUFBSSxFQUFDLEdBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREEsQ0FESjs7QUFNQSxRQUFNRSxjQUFjLEdBQUcsTUFBTTtBQUMzQixXQUFPaEIsV0FBVyxDQUFDaUIsR0FBWixDQUFnQixDQUFDO0FBQUVoQixXQUFGO0FBQVNDO0FBQVQsS0FBRCxLQUFxQjtBQUMxQyxhQUNJLE1BQUMsd0RBQUQscUZBQ007QUFDRkMsV0FBRyxFQUFFRixLQURIO0FBRUZVLGFBQUssRUFBRSxTQUZMO0FBR0ZULFlBQUksRUFBRUE7QUFISixPQUROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFPR0QsS0FQSCxDQURKO0FBV0QsS0FaTSxDQUFQO0FBYUQsR0FkRDs7QUFlQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQVEsYUFBUyxFQUFFSyxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRCUyxjQUFjLEVBQTFDLENBREosQ0FESjtBQU1ILENBdENNOztHQUFNRixNO1VBQ3FCVCxTOzs7S0FEckJTLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjhmMDU1ZGQxNDU1YTk4NjZjOTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFxyXG4gICAgQXBwQmFyLCBcclxuICAgIFRvb2xiYXIsIFxyXG4gICAgVHlwb2dyYXBoeSwgXHJcbiAgICBtYWtlU3R5bGVzLFxyXG4gICAgQnV0dG9uXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgSG9tZSB9IGZyb20gJy4vaG9tZSc7XHJcbmNvbnN0IGhlYWRlcnNEYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJIb21lXCIsXHJcbiAgICAgIGhyZWY6IFwiL2hvbWVcIixcclxuICAgICAga2V5OjFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIkNyZWF0ZSBWb3RlXCIsXHJcbiAgICAgIGhyZWY6IFwiL2NyZWF0ZVZvdGVcIixcclxuICAgICAga2V5OjJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIkFib3V0IFVzXCIsXHJcbiAgICAgIGhyZWY6IFwiL2Fib3V0VXNcIixcclxuICAgICAga2V5OjNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIkxvZyBPdXRcIixcclxuICAgICAgaHJlZjogXCIvbG9nb3V0XCIsXHJcbiAgICAgIGtleTo0XHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XHJcbiAgICBoZWFkZXI6IHtcclxuICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRUQxQjJGXCIsXHJcbiAgICB9LFxyXG4gICAgbG9nbzoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiV29yayBTYW5zLCBzYW5zLXNlcmlmXCIsXHJcbiAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgIGNvbG9yOiBcIiNGRkZFRkVcIixcclxuICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgICB9LFxyXG4gfSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgaGVhZGVyLCBsb2dvU3R5bGUgfSA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IGRpc3BsYXlEZXNrdG9wID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgICAge2xvZ299XHJcbiAgICAgICAgICAgIHtnZXRNZW51QnV0dG9ucygpfVxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbG9nbyA9IChcclxuICAgICAgICA8VHlwb2dyYXBoeSA+XHJcbiAgICAgICAgPExpbmsgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDFcIiBjbGFzc05hbWU9e2xvZ29TdHlsZX0gaHJlZj1cIi9cIj5NY0dpbGwgVm90ZXM8L0xpbms+XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICApO1xyXG5cclxuICAgIGNvbnN0IGdldE1lbnVCdXR0b25zID0gKCkgPT4ge1xyXG4gICAgICByZXR1cm4gaGVhZGVyc0RhdGEubWFwKCh7IGxhYmVsLCBocmVmIH0pID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgey4uLntcclxuICAgICAgICAgICAgICAgIGtleTogbGFiZWwsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgPEFwcEJhciBjbGFzc05hbWU9e2hlYWRlcn0+e2Rpc3BsYXlEZXNrdG9wKCl9PC9BcHBCYXI+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9