/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ../node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/vagrant/workspace/intro-curriculum-4006/app/entry.js: Identifier 'root' has already been declared (8:6)\n\n\u001b[0m \u001b[90m 6 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 7 | \u001b[39m\u001b[36mimport\u001b[39m crypto from \u001b[32m'crypto'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 8 | \u001b[39m\u001b[36mconst\u001b[39m root \u001b[33m=\u001b[39m document\u001b[33m.\u001b[39mgetElementById(\u001b[32m'root'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   | \u001b[39m      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 9 | \u001b[39mroot\u001b[33m.\u001b[39minnerHTML \u001b[33m=\u001b[39m \u001b[32m'<p>'\u001b[39m \u001b[33m+\u001b[39m crypto\u001b[33m.\u001b[39mrandomBytes(\u001b[35m8\u001b[39m)\u001b[33m.\u001b[39mtoString(\u001b[32m'hex'\u001b[39m) \u001b[33m+\u001b[39m \u001b[32m'</p>'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n    at Parser._raise (/home/vagrant/workspace/intro-curriculum-4006/node_modules/@babel/parser/lib/index.js:742:17)\n    at Parser.raiseWithData (/home/vagrant/workspace/intro-curriculum-4006/node_modules/@babel/parser/lib/index.js:735:17)\n    at Parser.raise (/home/vagrant/workspace/intro-curriculum-4006/node_modules/@babel/parser/lib/index.js:729:17)\n    at ScopeHandler.checkRedeclarationInScope (/home/vagrant/workspace/intro-curriculum-4006/node_modules/@babel/parser/lib/index.js:4781:12)\n    at ScopeHandler.declareName (/home/vagrant/workspace/intro-curriculum-4006/node_modules/@babel/parser/lib/index.js:4747:12)\n    at Parser.checkLVal (/home/vagrant/workspace/intro-curriculum-4006/node_modules/@babel/parser/lib/index.js:9229:22)\n    at Parser.parseVarId (/home/vagrant/workspace/intro-curriculum-4006/node_modules/@babel/parser/lib/index.js:11785:10)\n    at Parser.parseVar (/home/vagrant/workspace/intro-curriculum-4006/node_modules/@babel/parser/lib/index.js:11760:12)\n    at Parser.parseVarStatement (/home/vagrant/workspace/intro-curriculum-4006/node_modules/@babel/parser/lib/index.js:11572:10)\n    at Parser.parseStatementContent (/home/vagrant/workspace/intro-curriculum-4006/node_modules/@babel/parser/lib/index.js:11171:21)\n    at Parser.parseStatement (/home/vagrant/workspace/intro-curriculum-4006/node_modules/@babel/parser/lib/index.js:11104:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/vagrant/workspace/intro-curriculum-4006/node_modules/@babel/parser/lib/index.js:11679:25)\n    at Parser.parseBlockBody (/home/vagrant/workspace/intro-curriculum-4006/node_modules/@babel/parser/lib/index.js:11665:10)\n    at Parser.parseTopLevel (/home/vagrant/workspace/intro-curriculum-4006/node_modules/@babel/parser/lib/index.js:11035:10)\n    at Parser.parse (/home/vagrant/workspace/intro-curriculum-4006/node_modules/@babel/parser/lib/index.js:12671:10)\n    at parse (/home/vagrant/workspace/intro-curriculum-4006/node_modules/@babel/parser/lib/index.js:12722:38)\n    at parser (/home/vagrant/workspace/intro-curriculum-4006/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/vagrant/workspace/intro-curriculum-4006/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/home/vagrant/workspace/intro-curriculum-4006/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/home/vagrant/workspace/intro-curriculum-4006/node_modules/@babel/core/lib/transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (/home/vagrant/workspace/intro-curriculum-4006/node_modules/gensync/index.js:254:32)\n    at gen.next (/home/vagrant/workspace/intro-curriculum-4006/node_modules/gensync/index.js:266:13)\n    at async.call.value (/home/vagrant/workspace/intro-curriculum-4006/node_modules/gensync/index.js:216:11)\n    at errback.call (/home/vagrant/workspace/intro-curriculum-4006/node_modules/gensync/index.js:184:28)\n    at runGenerator.errback (/home/vagrant/workspace/intro-curriculum-4006/node_modules/@babel/core/lib/gensync-utils/async.js:72:7)\n    at val (/home/vagrant/workspace/intro-curriculum-4006/node_modules/gensync/index.js:108:33)");

/***/ })
/******/ ]);