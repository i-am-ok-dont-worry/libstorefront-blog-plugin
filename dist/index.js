(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("LSFPlugin", [], factory);
	else if(typeof exports === 'object')
		exports["LSFPlugin"] = factory();
	else
		root["LSFPlugin"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogDefaultState = exports.BlogService = exports.BlogDao = exports.BlogPlugin = void 0;
var index_1 = __webpack_require__(/*! ./src/index */ "./src/index.ts");
Object.defineProperty(exports, "BlogPlugin", { enumerable: true, get: function () { return index_1.BlogPlugin; } });
var index_2 = __webpack_require__(/*! ./src/dao/index */ "./src/dao/index.ts");
Object.defineProperty(exports, "BlogDao", { enumerable: true, get: function () { return index_2.BlogDao; } });
var index_3 = __webpack_require__(/*! ./src/service/index */ "./src/service/index.ts");
Object.defineProperty(exports, "BlogService", { enumerable: true, get: function () { return index_3.BlogService; } });
var blog_default_1 = __webpack_require__(/*! ./src/store/blog.default */ "./src/store/blog.default.ts");
Object.defineProperty(exports, "BlogDefaultState", { enumerable: true, get: function () { return blog_default_1.BlogDefaultState; } });


/***/ }),

/***/ "./src/dao/index.ts":
/*!**************************!*\
  !*** ./src/dao/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogDao = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var BlogDao = /** @class */ (function () {
    function BlogDao(taskQueue) {
        this.taskQueue = taskQueue;
    }
    BlogDao.prototype.getBlogEntries = function () {
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/blog?storeCode=all'),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    };
    BlogDao.prototype.getBlogEntry = function (blogEntryId) {
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/blog/' + blogEntryId + '?storeCode=all'),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    };
    BlogDao = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(libstorefront_1.TaskQueue)),
        __metadata("design:paramtypes", [libstorefront_1.TaskQueue])
    ], BlogDao);
    return BlogDao;
}());
exports.BlogDao = BlogDao;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPlugin = void 0;
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var dao_1 = __webpack_require__(/*! ./dao */ "./src/dao/index.ts");
var service_1 = __webpack_require__(/*! ./service */ "./src/service/index.ts");
var blog_reducer_1 = __webpack_require__(/*! ./store/blog.reducer */ "./src/store/blog.reducer.ts");
var blog_default_1 = __webpack_require__(/*! ./store/blog.default */ "./src/store/blog.default.ts");
/**
 * Plugin provides support for Magento blog
 */
exports.BlogPlugin = (function (libstorefront) {
    libstorefront.getIOCContainer().bind(dao_1.BlogDao).to(dao_1.BlogDao);
    libstorefront.getIOCContainer().bind(service_1.BlogService).to(service_1.BlogService);
    libstorefront.listenTo(libstorefront_1.HookType.AfterCoreModulesRegistered, function (lsf) {
        lsf.registerModule(libstorefront_1.createLibstorefrontModule('blog', blog_reducer_1.blogReducer, blog_default_1.BlogDefaultState));
    });
});


/***/ }),

/***/ "./src/service/index.ts":
/*!******************************!*\
  !*** ./src/service/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var blog_thunks_1 = __webpack_require__(/*! ../store/blog.thunks */ "./src/store/blog.thunks.ts");
var BlogService = /** @class */ (function () {
    function BlogService(store) {
        this.store = store;
    }
    /**
     * Returns list of blog posts
     * @returns {Promise<BlogEntry[]>}
     */
    BlogService.prototype.getBlogPosts = function () {
        return this.store.dispatch(blog_thunks_1.BlogThunks.getBlogPosts());
    };
    /**
     * Returns a single blog post
     * @param {string} blogEntryId
     * @param {Promise<BlogEntry>}
     */
    BlogService.prototype.getBlogPost = function (blogEntryId) {
        return this.store.dispatch(blog_thunks_1.BlogThunks.getSingleBlogPost(blogEntryId));
    };
    BlogService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(libstorefront_1.AbstractStore)),
        __metadata("design:paramtypes", [libstorefront_1.AbstractStore])
    ], BlogService);
    return BlogService;
}());
exports.BlogService = BlogService;


/***/ }),

/***/ "./src/store/blog.actions.ts":
/*!***********************************!*\
  !*** ./src/store/blog.actions.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogActions = void 0;
var BlogActions;
(function (BlogActions) {
    var SN_BLOG = 'blog';
    BlogActions.SET_BLOG_POSTS = SN_BLOG + '/SET_POSTS';
    BlogActions.setBlogPosts = function (posts) { return ({
        type: BlogActions.SET_BLOG_POSTS,
        payload: posts
    }); };
    BlogActions.SET_CURRENT = SN_BLOG + '/SET_CURRENT';
    BlogActions.setCurrent = function (post) { return ({
        type: BlogActions.SET_CURRENT,
        payload: post
    }); };
})(BlogActions = exports.BlogActions || (exports.BlogActions = {}));


/***/ }),

/***/ "./src/store/blog.default.ts":
/*!***********************************!*\
  !*** ./src/store/blog.default.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogDefaultState = void 0;
exports.BlogDefaultState = {
    items: [],
    current: null
};


/***/ }),

/***/ "./src/store/blog.reducer.ts":
/*!***********************************!*\
  !*** ./src/store/blog.reducer.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogReducer = void 0;
var blog_default_1 = __webpack_require__(/*! ./blog.default */ "./src/store/blog.default.ts");
var blog_actions_1 = __webpack_require__(/*! ./blog.actions */ "./src/store/blog.actions.ts");
var blogReducer = function (state, action) {
    switch (action.type) {
        case blog_actions_1.BlogActions.SET_BLOG_POSTS: {
            return __assign(__assign({}, state), { items: action.payload });
        }
        case blog_actions_1.BlogActions.SET_CURRENT: {
            return __assign(__assign({}, state), { current: action.payload });
        }
        default: return state || blog_default_1.BlogDefaultState;
    }
};
exports.blogReducer = blogReducer;


/***/ }),

/***/ "./src/store/blog.thunks.ts":
/*!**********************************!*\
  !*** ./src/store/blog.thunks.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogThunks = void 0;
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var dao_1 = __webpack_require__(/*! ../dao */ "./src/dao/index.ts");
var blog_actions_1 = __webpack_require__(/*! ./blog.actions */ "./src/store/blog.actions.ts");
var BlogThunks;
(function (BlogThunks) {
    var _this = this;
    BlogThunks.getBlogPosts = function () { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var response, items, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, libstorefront_1.IOCContainer.get(dao_1.BlogDao).getBlogEntries()];
                case 1:
                    response = _a.sent();
                    if (!(response && response.code === libstorefront_1.HttpStatus.OK && response.result)) return [3 /*break*/, 3];
                    items = response.result;
                    return [4 /*yield*/, dispatch(blog_actions_1.BlogActions.setBlogPosts(items))];
                case 2:
                    _a.sent();
                    return [2 /*return*/, items];
                case 3: return [3 /*break*/, 5];
                case 4:
                    e_1 = _a.sent();
                    libstorefront_1.Logger.error('Cannot fetch blog posts', 'blog-plugin', e_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); }; };
    BlogThunks.getSingleBlogPost = function (blogEntryId) { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var response, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, libstorefront_1.IOCContainer.get(dao_1.BlogDao).getBlogEntry(blogEntryId)];
                case 1:
                    response = _a.sent();
                    if (!(response && response.code === libstorefront_1.HttpStatus.OK && response.result)) return [3 /*break*/, 3];
                    return [4 /*yield*/, dispatch(blog_actions_1.BlogActions.setCurrent(response.result))];
                case 2:
                    _a.sent();
                    return [2 /*return*/, response.result];
                case 3: return [3 /*break*/, 5];
                case 4:
                    e_2 = _a.sent();
                    libstorefront_1.Logger.error('Cannot fetch blog post', 'blog-plugin', e_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); }; };
})(BlogThunks = exports.BlogThunks || (exports.BlogThunks = {}));


/***/ }),

/***/ "@grupakmk/libstorefront":
/*!******************************************!*\
  !*** external "@grupakmk/libstorefront" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@grupakmk/libstorefront");

/***/ }),

/***/ "inversify":
/*!****************************!*\
  !*** external "inversify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map