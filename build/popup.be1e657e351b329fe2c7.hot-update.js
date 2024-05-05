"use strict";
self["webpackHotUpdatechrome_extension_boilerplate_react"]("popup",{

/***/ "./src/pages/Home/Home.tsx":
/*!*********************************!*\
  !*** ./src/pages/Home/Home.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilities_Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utilities/Utilities */ "./src/pages/Utilities/Utilities.tsx");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/services */ "./src/services/services.tsx");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home.css */ "./src/pages/Home/Home.css");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
var _b;
_b = __webpack_require__.$Refresh$.signature();





function Home() {
    _b();
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), jobCards = _c[0], setJobsCards = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10), limit = _d[0], setLimit = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), offset = _e[0], setOffset = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), roleArray = _f[0], setRoleArray = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), locationArray = _g[0], setLocationArray = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), companyArray = _h[0], setCompanyArray = _h[1];
    var _j = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), jobsCount = _j[0], setJobsCount = _j[1];
    var _k = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_services_services__WEBPACK_IMPORTED_MODULE_2__["default"].config.filterConfigs), filterConfigs = _k[0], setFilterConfigs = _k[1];
    var _l = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_services_services__WEBPACK_IMPORTED_MODULE_2__["default"].config.options), options = _l[0], setOptions = _l[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        _services_services__WEBPACK_IMPORTED_MODULE_2__["default"].populateJobsData(limit, offset, filterConfigs, jobCards, setJobsCards, setJobsCount);
    }, [limit, offset]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        _services_services__WEBPACK_IMPORTED_MODULE_2__["default"].onFilterUpdate(jobCards, filterConfigs, setJobsCards);
    }, [filterConfigs]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        _services_services__WEBPACK_IMPORTED_MODULE_2__["default"].populateFilterOptions(jobCards, setRoleArray, setLocationArray, setCompanyArray);
    }, [jobCards]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        setOptions(__assign(__assign({}, options), { 'Role': roleArray, 'Location': locationArray, 'Company': companyArray }));
    }, [roleArray, locationArray, companyArray]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'lexend' },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'Home__header' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Utilities_Utilities__WEBPACK_IMPORTED_MODULE_1__["default"].Header, { jobsCount: jobsCount }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Utilities_Utilities__WEBPACK_IMPORTED_MODULE_1__["default"].Filters, { filterConfigs: filterConfigs, setFilterConfigs: setFilterConfigs, options: options })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Utilities_Utilities__WEBPACK_IMPORTED_MODULE_1__["default"].JobCards, { jobCards: jobCards, setLimit: setLimit, limit: limit, setOffset: setOffset, offset: offset })));
}
_a = Home;
__webpack_require__.$Refresh$.register(_a, "Home");
_b(Home, "GpnZ5fNuiWNYx3FHC3xXcMNWqBU=");


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0cba7289f564be1f0ed6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.be1e657e351b329fe2c7.hot-update.js.map