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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
    var _k = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        'Min experience': null,
        'Location': null,
        'Remote/on-site': null,
        'Company': null,
        'Role': null,
        'Min base pay': null
    }), filterConfigs = _k[0], setFilterConfigs = _k[1];
    var _l = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        'Min experience': [
            { value: '2', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' },
            { value: '5', label: '5' },
            { value: '6', label: '6' },
            { value: '7', label: '7' },
            { value: '8', label: '8' },
            { value: '9', label: '9' },
            { value: '10', label: '10' }
        ],
        'Location': [],
        'Remote/on-site': [
            { value: 'Remote', label: 'Remote' },
            { value: 'In-office', label: 'In-office' }
        ],
        'Company': [],
        'Role': [],
        'Min base pay': [
            { value: '0', label: '0L' },
            { value: '1', label: '1L' },
            { value: '2', label: '2L' },
            { value: '3', label: '3L' },
            { value: '4', label: '4L' },
            { value: '5', label: '5L' },
            { value: '6', label: '6L' },
            { value: '7', label: '7L' },
            { value: '8', label: '8L' },
            { value: '9', label: '9L' },
            { value: '10', label: '10L' }
        ]
    }), options = _l[0], setOptions = _l[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        _services_services__WEBPACK_IMPORTED_MODULE_2__["default"].fetchJobsData(limit, offset).then(function (res) {
            var jobs = res['jdList'];
            jobs.map(function (jobCard) {
                if ((filterConfigs['Min experience'] ? jobCard['minExp'] >= filterConfigs['Min experience'] : true) &&
                    (filterConfigs['Location'] ? jobCard['location'] == filterConfigs['Location'] : true) &&
                    (filterConfigs['Remote/on-site'] ? (filterConfigs['Remote/on-site'].toLowerCase() == 'remote' ? jobCard['location'].toLowerCase() == 'remote' : jobCard['location'].toLowerCase() != 'remote') : true) &&
                    (filterConfigs['Company'] ? jobCard['companyName'] == filterConfigs['Company'] : true) &&
                    (filterConfigs['Role'] ? jobCard['jobRole'] == filterConfigs['Role'] : true) &&
                    (filterConfigs['Min base pay'] ? jobCard['minJdSalary'] >= filterConfigs['Min base pay'] : true)) {
                    jobCard['visibility'] = true;
                    jobs.push(jobCard);
                }
                else {
                    jobCard['visibility'] = false;
                    jobs.push(jobCard);
                }
            });
            setJobsCards(__spreadArray(__spreadArray([], jobCards, true), jobs, true));
            setJobsCount(res['totalCount']);
        });
    }, [limit, offset]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var jobs = [];
        jobCards.map(function (jobCard) {
            if ((filterConfigs['Min experience'] ? jobCard['minExp'] >= filterConfigs['Min experience'] : true) &&
                (filterConfigs['Location'] ? jobCard['location'] == filterConfigs['Location'] : true) &&
                (filterConfigs['Remote/on-site'] ? (filterConfigs['Remote/on-site'].toLowerCase() == 'remote' ? jobCard['location'].toLowerCase() == 'remote' : jobCard['location'].toLowerCase() != 'remote') : true) &&
                (filterConfigs['Company'] ? jobCard['companyName'] == filterConfigs['Company'] : true) &&
                (filterConfigs['Role'] ? jobCard['jobRole'] == filterConfigs['Role'] : true) &&
                (filterConfigs['Min base pay'] ? jobCard['minJdSalary'] >= filterConfigs['Min base pay'] : true)) {
                jobCard['visibility'] = true;
                jobs.push(jobCard);
            }
            else {
                jobCard['visibility'] = false;
                jobs.push(jobCard);
            }
        });
        setJobsCards(jobs);
    }, [filterConfigs]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var roles = new Set();
        var locations = new Set();
        var companies = new Set();
        jobCards.forEach(function (jobCard) {
            roles.add(jobCard['jobRole']);
            locations.add(jobCard['location']);
            companies.add(jobCard['companyName']);
        });
        setRoleArray(Array.from(roles).map(function (role) {
            return { value: role, label: role };
        }));
        setLocationArray(Array.from(locations).map(function (location) {
            return { value: location, label: location };
        }));
        setCompanyArray(Array.from(companies).map(function (company) {
            return { value: company, label: company };
        }));
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
_b(Home, "82x82IHxn8jNeaFK6+Y2d4Ur9NM=");


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
/******/ 	__webpack_require__.h = () => ("3f98014ae132a1a63603")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.aa0103b15141c9c0d023.hot-update.js.map