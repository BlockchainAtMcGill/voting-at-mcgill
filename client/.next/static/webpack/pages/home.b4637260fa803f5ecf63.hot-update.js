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
    Style: {
      color: "#FFFEFE"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: logoStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    component: "h1",
    className: logoStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "McGill Votes")));

  const getMenuButtons = () => {
    return headersData.map(({
      label,
      href
    }) => {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: href,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: label,
        color: "inherit"
      }, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }
      }), label));
    });
  };

  return __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
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
      lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbImhlYWRlcnNEYXRhIiwibGFiZWwiLCJocmVmIiwia2V5IiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImhlYWRlciIsImJhY2tncm91bmRDb2xvciIsImxvZ28iLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImNvbG9yIiwidGV4dEFsaWduIiwiSGVhZGVyIiwibG9nb1N0eWxlIiwiZGlzcGxheURlc2t0b3AiLCJnZXRNZW51QnV0dG9ucyIsIm1hcCIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQSxNQUFNQSxXQUFXLEdBQUcsQ0FDaEI7QUFDRUMsT0FBSyxFQUFFLE1BRFQ7QUFFRUMsTUFBSSxFQUFFLE9BRlI7QUFHRUMsS0FBRyxFQUFDO0FBSE4sQ0FEZ0IsRUFNaEI7QUFDRUYsT0FBSyxFQUFFLGFBRFQ7QUFFRUMsTUFBSSxFQUFFLGFBRlI7QUFHRUMsS0FBRyxFQUFDO0FBSE4sQ0FOZ0IsRUFXaEI7QUFDRUYsT0FBSyxFQUFFLFVBRFQ7QUFFRUMsTUFBSSxFQUFFLFVBRlI7QUFHRUMsS0FBRyxFQUFDO0FBSE4sQ0FYZ0IsRUFnQmhCO0FBQ0VGLE9BQUssRUFBRSxTQURUO0FBRUVDLE1BQUksRUFBRSxTQUZSO0FBR0VDLEtBQUcsRUFBQztBQUhOLENBaEJnQixDQUFwQjtBQXVCQSxNQUFNQyxTQUFTLEdBQUdDLG9FQUFVLENBQUMsT0FBTztBQUNoQ0MsUUFBTSxFQUFFO0FBQ0xDLG1CQUFlLEVBQUU7QUFEWixHQUR3QjtBQUloQ0MsTUFBSSxFQUFFO0FBQ0ZDLGNBQVUsRUFBRSx1QkFEVjtBQUVGQyxjQUFVLEVBQUUsR0FGVjtBQUdGQyxTQUFLLEVBQUUsU0FITDtBQUlGQyxhQUFTLEVBQUU7QUFKVDtBQUowQixDQUFQLENBQUQsQ0FBNUI7QUFZTyxNQUFNQyxNQUFNLEdBQUcsTUFBTTtBQUFBOztBQUN4QixRQUFNO0FBQUVQLFVBQUY7QUFBVVE7QUFBVixNQUF3QlYsU0FBUyxFQUF2Qzs7QUFFQSxRQUFNVyxjQUFjLEdBQUcsTUFBTTtBQUN6QixXQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHUCxJQURILEVBRUdRLGNBQWMsRUFGakIsQ0FERjtBQU1ILEdBUEQ7O0FBUUEsUUFBTVIsSUFBSSxHQUNOLE1BQUMsZ0RBQUQ7QUFBTSxTQUFLLEVBQUU7QUFBQ0csV0FBSyxFQUFDO0FBQVAsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyx3REFBRDtBQUFRLGFBQVMsRUFBRUcsU0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBUyxFQUFDLElBQW5DO0FBQXdDLGFBQVMsRUFBRUEsU0FBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixDQURBLENBREo7O0FBVUEsUUFBTUUsY0FBYyxHQUFHLE1BQU07QUFDM0IsV0FBT2hCLFdBQVcsQ0FBQ2lCLEdBQVosQ0FBZ0IsQ0FBQztBQUFFaEIsV0FBRjtBQUFTQztBQUFULEtBQUQsS0FBcUI7QUFDMUMsYUFDRSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFJQSxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHdEQUFELHFGQUNNO0FBQ0ZDLFdBQUcsRUFBRUYsS0FESDtBQUVGVSxhQUFLLEVBQUU7QUFGTCxPQUROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFNR1YsS0FOSCxDQURGLENBREY7QUFZRCxLQWJNLENBQVA7QUFjRCxHQWZEOztBQWdCQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQVEsU0FBSyxFQUFFO0FBQUNNLHFCQUFlLEVBQUUsU0FBbEI7QUFBNkJXLGNBQVEsRUFBRTtBQUF2QyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0VILGNBQWMsRUFBbEYsQ0FESixDQURKO0FBTUgsQ0EzQ007O0dBQU1GLE07VUFDcUJULFM7OztLQURyQlMsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ob21lLmI0NjM3MjYwZmE4MDNmNWVjZjYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBcclxuICAgIEFwcEJhciwgXHJcbiAgICBUb29sYmFyLCBcclxuICAgIFR5cG9ncmFwaHksIFxyXG4gICAgbWFrZVN0eWxlcyxcclxuICAgIEJ1dHRvblxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEhvbWUgfSBmcm9tICcuL2hvbWUnO1xyXG5jb25zdCBoZWFkZXJzRGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiSG9tZVwiLFxyXG4gICAgICBocmVmOiBcIi9ob21lXCIsXHJcbiAgICAgIGtleToxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJDcmVhdGUgVm90ZVwiLFxyXG4gICAgICBocmVmOiBcIi9jcmVhdGVWb3RlXCIsXHJcbiAgICAgIGtleToyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJBYm91dCBVc1wiLFxyXG4gICAgICBocmVmOiBcIi9hYm91dFVzXCIsXHJcbiAgICAgIGtleTozXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJMb2cgT3V0XCIsXHJcbiAgICAgIGhyZWY6IFwiL2xvZ291dFwiLFxyXG4gICAgICBrZXk6NFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gICAgaGVhZGVyOiB7XHJcbiAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0VEMUIyRlwiLFxyXG4gICAgfSxcclxuICAgIGxvZ286IHtcclxuICAgICAgICBmb250RmFtaWx5OiBcIldvcmsgU2Fucywgc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgICAgICBjb2xvcjogXCIjRkZGRUZFXCIsXHJcbiAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcclxuICAgICAgfSxcclxuIH0pKTtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGhlYWRlciwgbG9nb1N0eWxlIH0gPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCBkaXNwbGF5RGVza3RvcCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICAgIHtsb2dvfVxyXG4gICAgICAgICAgICB7Z2V0TWVudUJ1dHRvbnMoKX1cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICApO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvZ28gPSAoXHJcbiAgICAgICAgPExpbmsgU3R5bGU9e3tjb2xvcjpcIiNGRkZFRkVcIn19PlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtsb2dvU3R5bGV9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMVwiIGNsYXNzTmFtZT17bG9nb1N0eWxlfSA+XHJcbiAgICAgICAgICAgICAgTWNHaWxsIFZvdGVzXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICk7XHJcblxyXG4gICAgY29uc3QgZ2V0TWVudUJ1dHRvbnMgPSAoKSA9PiB7XHJcbiAgICAgIHJldHVybiBoZWFkZXJzRGF0YS5tYXAoKHsgbGFiZWwsIGhyZWYgfSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8TGluayBocmVmID0ge2hyZWZ9PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgey4uLntcclxuICAgICAgICAgICAgICAgIGtleTogbGFiZWwsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICA8QXBwQmFyIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiNFRDFCMkZcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PntkaXNwbGF5RGVza3RvcCgpfTwvQXBwQmFyPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgIClcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==