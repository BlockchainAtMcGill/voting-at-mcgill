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


var _jsxFileName = "C:\\Users\\foubroker\\PROJECT_VOTE\\voting-at-mcgill\\client\\src\\components\\header.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var headersData = [{
  label: "Home",
  href: "/home",
  key: 1
}, {
  label: "Create Vote",
  href: "/adminHome",
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
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function () {
  return {
    header: {
      backgroundColor: "#ED1B2F"
    },
    logo: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      color: "#FFFEFE",
      textAlign: "left"
    }
  };
});
var Header = function Header() {
  _s();

  var _useStyles = useStyles(),
      header = _useStyles.header,
      logoStyle = _useStyles.logoStyle;

  var displayDesktop = function displayDesktop() {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }, logo, getMenuButtons());
  };

  var logo = __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: {
      color: "#FFFEFE"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    component: "h1",
    className: logoStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "McGill Votes")));

  var getMenuButtons = function getMenuButtons() {
    return headersData.map(function (_ref) {
      var label = _ref.label,
          href = _ref.href;
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: href,
        key: href,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: label,
        color: "inherit"
      }, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }
      }), label));
    });
  };

  return __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AppBar"], {
    style: {
      backgroundColor: "#ED1B2F",
      position: "absolute"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
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

/***/ }),

/***/ "./src/components/home.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbImhlYWRlcnNEYXRhIiwibGFiZWwiLCJocmVmIiwia2V5IiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImhlYWRlciIsImJhY2tncm91bmRDb2xvciIsImxvZ28iLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImNvbG9yIiwidGV4dEFsaWduIiwiSGVhZGVyIiwibG9nb1N0eWxlIiwiZGlzcGxheURlc2t0b3AiLCJnZXRNZW51QnV0dG9ucyIsIm1hcCIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9BO0FBQ0EsSUFBTUEsV0FBVyxHQUFHLENBQ2hCO0FBQ0VDLE9BQUssRUFBRSxNQURUO0FBRUVDLE1BQUksRUFBRSxPQUZSO0FBR0VDLEtBQUcsRUFBQztBQUhOLENBRGdCLEVBTWhCO0FBQ0VGLE9BQUssRUFBRSxhQURUO0FBRUVDLE1BQUksRUFBRSxZQUZSO0FBR0VDLEtBQUcsRUFBQztBQUhOLENBTmdCLEVBV2hCO0FBQ0VGLE9BQUssRUFBRSxVQURUO0FBRUVDLE1BQUksRUFBRSxVQUZSO0FBR0VDLEtBQUcsRUFBQztBQUhOLENBWGdCLEVBZ0JoQjtBQUNFRixPQUFLLEVBQUUsU0FEVDtBQUVFQyxNQUFJLEVBQUUsU0FGUjtBQUdFQyxLQUFHLEVBQUM7QUFITixDQWhCZ0IsQ0FBcEI7QUF1QkEsSUFBTUMsU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQUEsU0FBTztBQUNoQ0MsVUFBTSxFQUFFO0FBQ0xDLHFCQUFlLEVBQUU7QUFEWixLQUR3QjtBQUloQ0MsUUFBSSxFQUFFO0FBQ0ZDLGdCQUFVLEVBQUUsdUJBRFY7QUFFRkMsZ0JBQVUsRUFBRSxHQUZWO0FBR0ZDLFdBQUssRUFBRSxTQUhMO0FBSUZDLGVBQVMsRUFBRTtBQUpUO0FBSjBCLEdBQVA7QUFBQSxDQUFELENBQTVCO0FBWU8sSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLG1CQUNNVCxTQUFTLEVBRGY7QUFBQSxNQUNoQkUsTUFEZ0IsY0FDaEJBLE1BRGdCO0FBQUEsTUFDUlEsU0FEUSxjQUNSQSxTQURROztBQUd4QixNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDekIsV0FDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR1AsSUFESCxFQUVHUSxjQUFjLEVBRmpCLENBREY7QUFNSCxHQVBEOztBQVFBLE1BQU1SLElBQUksR0FDTixNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsd0RBQUQ7QUFBUSxTQUFLLEVBQUU7QUFBQ0csV0FBSyxFQUFDO0FBQVAsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUF5QixhQUFTLEVBQUMsSUFBbkM7QUFBd0MsYUFBUyxFQUFFRyxTQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLENBREEsQ0FESjs7QUFVQSxNQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsV0FBT2hCLFdBQVcsQ0FBQ2lCLEdBQVosQ0FBZ0IsZ0JBQXFCO0FBQUEsVUFBbEJoQixLQUFrQixRQUFsQkEsS0FBa0I7QUFBQSxVQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDMUMsYUFDRSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFJQSxJQUFkO0FBQW9CLFdBQUcsRUFBR0EsSUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsd0RBQUQscUZBQ007QUFDRkMsV0FBRyxFQUFFRixLQURIO0FBRUZVLGFBQUssRUFBRTtBQUZMLE9BRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQU1HVixLQU5ILENBREYsQ0FERjtBQVlELEtBYk0sQ0FBUDtBQWNELEdBZkQ7O0FBZ0JBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0RBQUQ7QUFBUSxTQUFLLEVBQUU7QUFBQ00scUJBQWUsRUFBRSxTQUFsQjtBQUE2QlcsY0FBUSxFQUFFO0FBQXZDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvRUgsY0FBYyxFQUFsRixDQURKLENBREo7QUFNSCxDQTNDTTs7R0FBTUYsTTtVQUNxQlQsUzs7O0tBRHJCUyxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUwODEwMjcyNWI0ZDcxYmNjOWI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBcclxuICAgIEFwcEJhciwgXHJcbiAgICBUb29sYmFyLCBcclxuICAgIFR5cG9ncmFwaHksIFxyXG4gICAgbWFrZVN0eWxlcyxcclxuICAgIEJ1dHRvblxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmNvbnN0IGhlYWRlcnNEYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJIb21lXCIsXHJcbiAgICAgIGhyZWY6IFwiL2hvbWVcIixcclxuICAgICAga2V5OjFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIkNyZWF0ZSBWb3RlXCIsXHJcbiAgICAgIGhyZWY6IFwiL2FkbWluSG9tZVwiLFxyXG4gICAgICBrZXk6MlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiQWJvdXQgVXNcIixcclxuICAgICAgaHJlZjogXCIvYWJvdXRVc1wiLFxyXG4gICAgICBrZXk6M1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiTG9nIE91dFwiLFxyXG4gICAgICBocmVmOiBcIi9sb2dvdXRcIixcclxuICAgICAga2V5OjRcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICAgIGhlYWRlcjoge1xyXG4gICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNFRDFCMkZcIixcclxuICAgIH0sXHJcbiAgICBsb2dvOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTogXCJXb3JrIFNhbnMsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICAgICAgY29sb3I6IFwiI0ZGRkVGRVwiLFxyXG4gICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgIH0sXHJcbiB9KSk7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBoZWFkZXIsIGxvZ29TdHlsZSB9ID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3QgZGlzcGxheURlc2t0b3AgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgICB7bG9nb31cclxuICAgICAgICAgICAge2dldE1lbnVCdXR0b25zKCl9XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBsb2dvID0gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPEJ1dHRvbiBzdHlsZT17e2NvbG9yOlwiI0ZGRkVGRVwifX0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgxXCIgY2xhc3NOYW1lPXtsb2dvU3R5bGV9ID5cclxuICAgICAgICAgICAgICBNY0dpbGwgVm90ZXNcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKTtcclxuXHJcbiAgICBjb25zdCBnZXRNZW51QnV0dG9ucyA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIGhlYWRlcnNEYXRhLm1hcCgoeyBsYWJlbCwgaHJlZiB9KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxMaW5rIGhyZWYgPSB7aHJlZn0ga2V5ID17aHJlZn0+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB7Li4ue1xyXG4gICAgICAgICAgICAgICAga2V5OiBsYWJlbCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgIDxBcHBCYXIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiI0VEMUIyRlwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+e2Rpc3BsYXlEZXNrdG9wKCl9PC9BcHBCYXI+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9