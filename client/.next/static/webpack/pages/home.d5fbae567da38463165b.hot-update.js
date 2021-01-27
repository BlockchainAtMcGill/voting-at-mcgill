webpackHotUpdate_N_E("pages/home",{

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
      position: "absolute"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbImhlYWRlcnNEYXRhIiwibGFiZWwiLCJocmVmIiwia2V5IiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImhlYWRlciIsImJhY2tncm91bmRDb2xvciIsImxvZ28iLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImNvbG9yIiwidGV4dEFsaWduIiwiSGVhZGVyIiwibG9nb1N0eWxlIiwiZGlzcGxheURlc2t0b3AiLCJnZXRNZW51QnV0dG9ucyIsIm1hcCIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQSxNQUFNQSxXQUFXLEdBQUcsQ0FDaEI7QUFDRUMsT0FBSyxFQUFFLE1BRFQ7QUFFRUMsTUFBSSxFQUFFLE9BRlI7QUFHRUMsS0FBRyxFQUFDO0FBSE4sQ0FEZ0IsRUFNaEI7QUFDRUYsT0FBSyxFQUFFLGFBRFQ7QUFFRUMsTUFBSSxFQUFFLGFBRlI7QUFHRUMsS0FBRyxFQUFDO0FBSE4sQ0FOZ0IsRUFXaEI7QUFDRUYsT0FBSyxFQUFFLFVBRFQ7QUFFRUMsTUFBSSxFQUFFLFVBRlI7QUFHRUMsS0FBRyxFQUFDO0FBSE4sQ0FYZ0IsRUFnQmhCO0FBQ0VGLE9BQUssRUFBRSxTQURUO0FBRUVDLE1BQUksRUFBRSxTQUZSO0FBR0VDLEtBQUcsRUFBQztBQUhOLENBaEJnQixDQUFwQjtBQXVCQSxNQUFNQyxTQUFTLEdBQUdDLG9FQUFVLENBQUMsT0FBTztBQUNoQ0MsUUFBTSxFQUFFO0FBQ0xDLG1CQUFlLEVBQUU7QUFEWixHQUR3QjtBQUloQ0MsTUFBSSxFQUFFO0FBQ0ZDLGNBQVUsRUFBRSx1QkFEVjtBQUVGQyxjQUFVLEVBQUUsR0FGVjtBQUdGQyxTQUFLLEVBQUUsU0FITDtBQUlGQyxhQUFTLEVBQUU7QUFKVDtBQUowQixDQUFQLENBQUQsQ0FBNUI7QUFZTyxNQUFNQyxNQUFNLEdBQUcsTUFBTTtBQUFBOztBQUN4QixRQUFNO0FBQUVQLFVBQUY7QUFBVVE7QUFBVixNQUF3QlYsU0FBUyxFQUF2Qzs7QUFFQSxRQUFNVyxjQUFjLEdBQUcsTUFBTTtBQUN6QixXQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHUCxJQURILEVBRUdRLGNBQWMsRUFGakIsQ0FERjtBQU1ILEdBUEQ7O0FBUUEsUUFBTVIsSUFBSSxHQUNOLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUF5QixhQUFTLEVBQUMsSUFBbkM7QUFBd0MsYUFBUyxFQUFFTSxTQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLENBREo7O0FBUUEsUUFBTUUsY0FBYyxHQUFHLE1BQU07QUFDM0IsV0FBT2hCLFdBQVcsQ0FBQ2lCLEdBQVosQ0FBZ0IsQ0FBQztBQUFFaEIsV0FBRjtBQUFTQztBQUFULEtBQUQsS0FBcUI7QUFDMUMsYUFDSSxNQUFDLHdEQUFELHFGQUNNO0FBQ0ZDLFdBQUcsRUFBRUYsS0FESDtBQUVGVSxhQUFLLEVBQUUsU0FGTDtBQUdGVCxZQUFJLEVBQUVBO0FBSEosT0FETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBT0dELEtBUEgsQ0FESjtBQVdELEtBWk0sQ0FBUDtBQWFELEdBZEQ7O0FBZUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRDtBQUFRLFNBQUssRUFBRTtBQUFDTSxxQkFBZSxFQUFFLFNBQWxCO0FBQTZCVyxjQUFRLEVBQUU7QUFBdkMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9FSCxjQUFjLEVBQWxGLENBREosQ0FESjtBQU1ILENBeENNOztHQUFNRixNO1VBQ3FCVCxTOzs7S0FEckJTLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS5kNWZiYWU1NjdkYTM4NDYzMTY1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgXHJcbiAgICBBcHBCYXIsIFxyXG4gICAgVG9vbGJhciwgXHJcbiAgICBUeXBvZ3JhcGh5LCBcclxuICAgIG1ha2VTdHlsZXMsXHJcbiAgICBCdXR0b25cclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBIb21lIH0gZnJvbSAnLi9ob21lJztcclxuY29uc3QgaGVhZGVyc0RhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIkhvbWVcIixcclxuICAgICAgaHJlZjogXCIvaG9tZVwiLFxyXG4gICAgICBrZXk6MVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiQ3JlYXRlIFZvdGVcIixcclxuICAgICAgaHJlZjogXCIvY3JlYXRlVm90ZVwiLFxyXG4gICAgICBrZXk6MlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiQWJvdXQgVXNcIixcclxuICAgICAgaHJlZjogXCIvYWJvdXRVc1wiLFxyXG4gICAgICBrZXk6M1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiTG9nIE91dFwiLFxyXG4gICAgICBocmVmOiBcIi9sb2dvdXRcIixcclxuICAgICAga2V5OjRcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICAgIGhlYWRlcjoge1xyXG4gICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNFRDFCMkZcIixcclxuICAgIH0sXHJcbiAgICBsb2dvOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTogXCJXb3JrIFNhbnMsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICAgICAgY29sb3I6IFwiI0ZGRkVGRVwiLFxyXG4gICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgIH0sXHJcbiB9KSk7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBoZWFkZXIsIGxvZ29TdHlsZSB9ID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3QgZGlzcGxheURlc2t0b3AgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgICB7bG9nb31cclxuICAgICAgICAgICAge2dldE1lbnVCdXR0b25zKCl9XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBsb2dvID0gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgxXCIgY2xhc3NOYW1lPXtsb2dvU3R5bGV9ID5cclxuICAgICAgICAgICAgICBNY0dpbGwgVm90ZXNcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKTtcclxuXHJcbiAgICBjb25zdCBnZXRNZW51QnV0dG9ucyA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIGhlYWRlcnNEYXRhLm1hcCgoeyBsYWJlbCwgaHJlZiB9KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHsuLi57XHJcbiAgICAgICAgICAgICAgICBrZXk6IGxhYmVsLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogaHJlZixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgIDxBcHBCYXIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiI0VEMUIyRlwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+e2Rpc3BsYXlEZXNrdG9wKCl9PC9BcHBCYXI+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9