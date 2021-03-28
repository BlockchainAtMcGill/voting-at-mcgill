webpackHotUpdate_N_E("pages/joinGroup",{

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


var _jsxFileName = "/home/wen_wong/voting-at-mcgill/client/src/components/header.js",
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
}, {
  label: "Register",
  href: "/register",
  key: 5
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
    },
    web3: {
      fontFamily: "Work Sans, sans-serif",
      color: "#FFC0CB",
      textAlign: "right",
      right: 0
    }
  };
});
var Header = function Header() {
  _s();

  var _useStyles = useStyles(),
      header = _useStyles.header,
      logoStyle = _useStyles.logoStyle,
      web3 = _useStyles.web3;

  var displayDesktop = function displayDesktop() {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }
    }, logo, getMenuButtons(), connection);
  };

  var logo = __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: {
      color: "#FFFEFE"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    component: "h1",
    className: logoStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, "McGill Votes")));

  function clicked() {
    ethereum.request({
      method: 'eth_requestAccounts'
    });
  }

  var connection = __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: clicked,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: web3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, "Connect to Web3"));

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
          lineNumber: 91,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: label,
        color: "inherit"
      }, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }
      }), label));
    });
  };

  return __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
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
      lineNumber: 106,
      columnNumber: 13
    }
  }, displayDesktop()));
};

_s(Header, "VTW2m/FvJRTi5I49RMg1nvzVR04=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbImhlYWRlcnNEYXRhIiwibGFiZWwiLCJocmVmIiwia2V5IiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImhlYWRlciIsImJhY2tncm91bmRDb2xvciIsImxvZ28iLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImNvbG9yIiwidGV4dEFsaWduIiwid2ViMyIsInJpZ2h0IiwiSGVhZGVyIiwibG9nb1N0eWxlIiwiZGlzcGxheURlc2t0b3AiLCJnZXRNZW51QnV0dG9ucyIsImNvbm5lY3Rpb24iLCJjbGlja2VkIiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwibWFwIiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBT0E7QUFDQSxJQUFNQSxXQUFXLEdBQUcsQ0FDaEI7QUFDRUMsT0FBSyxFQUFFLE1BRFQ7QUFFRUMsTUFBSSxFQUFFLE9BRlI7QUFHRUMsS0FBRyxFQUFDO0FBSE4sQ0FEZ0IsRUFNaEI7QUFDRUYsT0FBSyxFQUFFLGFBRFQ7QUFFRUMsTUFBSSxFQUFFLFlBRlI7QUFHRUMsS0FBRyxFQUFDO0FBSE4sQ0FOZ0IsRUFXaEI7QUFDRUYsT0FBSyxFQUFFLFVBRFQ7QUFFRUMsTUFBSSxFQUFFLFVBRlI7QUFHRUMsS0FBRyxFQUFDO0FBSE4sQ0FYZ0IsRUFnQmhCO0FBQ0VGLE9BQUssRUFBRSxTQURUO0FBRUVDLE1BQUksRUFBRSxTQUZSO0FBR0VDLEtBQUcsRUFBQztBQUhOLENBaEJnQixFQXFCaEI7QUFDRUYsT0FBSyxFQUFFLFVBRFQ7QUFFRUMsTUFBSSxFQUFFLFdBRlI7QUFHRUMsS0FBRyxFQUFDO0FBSE4sQ0FyQmdCLENBQXBCO0FBNEJBLElBQU1DLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUFBLFNBQU87QUFDaENDLFVBQU0sRUFBRTtBQUNMQyxxQkFBZSxFQUFFO0FBRFos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YzYwMmI4NTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBcbiAgICBBcHBCYXIsIFxuICAgIFRvb2xiYXIsIFxuICAgIFR5cG9ncmFwaHksIFxuICAgIG1ha2VTdHlsZXMsXG4gICAgQnV0dG9uXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuY29uc3QgaGVhZGVyc0RhdGEgPSBbXG4gICAge1xuICAgICAgbGFiZWw6IFwiSG9tZVwiLFxuICAgICAgaHJlZjogXCIvaG9tZVwiLFxuICAgICAga2V5OjFcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkNyZWF0ZSBWb3RlXCIsXG4gICAgICBocmVmOiBcIi9hZG1pbkhvbWVcIixcbiAgICAgIGtleToyXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJBYm91dCBVc1wiLFxuICAgICAgaHJlZjogXCIvYWJvdXRVc1wiLFxuICAgICAga2V5OjNcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkxvZyBPdXRcIixcbiAgICAgIGhyZWY6IFwiL2xvZ291dFwiLFxuICAgICAga2V5OjRcbiAgICB9LCBcbiAgICB7XG4gICAgICBsYWJlbDogXCJSZWdpc3RlclwiLFxuICAgICAgaHJlZjogXCIvcmVnaXN0ZXJcIixcbiAgICAgIGtleTo1XG4gICAgfVxuICBdO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XG4gICAgaGVhZGVyOiB7XG4gICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNFRDFCMkZcIixcbiAgICB9LFxuICAgIGxvZ286IHtcbiAgICAgICAgZm9udEZhbWlseTogXCJXb3JrIFNhbnMsIHNhbnMtc2VyaWZcIixcbiAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICBjb2xvcjogXCIjRkZGRUZFXCIsXG4gICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICB9LFxuICAgIHdlYjM6IHtcbiAgICAgIGZvbnRGYW1pbHk6IFwiV29yayBTYW5zLCBzYW5zLXNlcmlmXCIsXG4gICAgICBjb2xvcjogXCIjRkZDMENCXCIsXG4gICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIixcbiAgICAgIHJpZ2h0OiAwXG4gICAgfSxcbiB9KSk7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBoZWFkZXIsIGxvZ29TdHlsZSwgd2ViMyB9ID0gdXNlU3R5bGVzKCk7XG5cbiAgICBjb25zdCBkaXNwbGF5RGVza3RvcCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICAgIHtsb2dvfVxuICAgICAgICAgICAge2dldE1lbnVCdXR0b25zKCl9XG4gICAgICAgICAgICB7Y29ubmVjdGlvbn1cbiAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgICk7XG4gICAgfTtcbiAgICBjb25zdCBsb2dvID0gKFxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8QnV0dG9uIHN0eWxlPXt7Y29sb3I6XCIjRkZGRUZFXCJ9fSA+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMVwiIGNsYXNzTmFtZT17bG9nb1N0eWxlfSA+XG4gICAgICAgICAgICAgIE1jR2lsbCBWb3Rlc1xuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKTtcbiAgICBmdW5jdGlvbiBjbGlja2VkKCkge1xuICAgICAgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xuICAgIH1cbiAgICBjb25zdCBjb25uZWN0aW9uID0gKFxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtjbGlja2VkfT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3dlYjN9ID5cbiAgICAgICAgICAgIENvbm5lY3QgdG8gV2ViM1xuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvQnV0dG9uPlxuICAgIClcblxuICAgIGNvbnN0IGdldE1lbnVCdXR0b25zID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIGhlYWRlcnNEYXRhLm1hcCgoeyBsYWJlbCwgaHJlZiB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExpbmsgaHJlZiA9IHtocmVmfSBrZXkgPXtocmVmfT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgey4uLntcbiAgICAgICAgICAgICAgICBrZXk6IGxhYmVsLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPEFwcEJhciBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCIjRUQxQjJGXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT57ZGlzcGxheURlc2t0b3AoKX08L0FwcEJhcj5cbiAgICAgICAgPC9oZWFkZXI+XG5cbiAgICApXG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=