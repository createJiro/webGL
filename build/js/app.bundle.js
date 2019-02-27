/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./log\": \"./node_modules/webpack/hot/log.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./node_modules/webpack/hot sync ^\\\\.\\\\/log$\";\n\n//# sourceURL=webpack:///(webpack)/hot_sync_nonrecursive_^\\.\\/log$?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scene_StartScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene/StartScene */ \"./src/js/scene/StartScene.js\");\n/* harmony import */ var _scene_HelloWorldScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene/HelloWorldScene */ \"./src/js/scene/HelloWorldScene.js\");\n\n // Sceneのインポート\n\n // Sceneのインポート\n\nvar width = window.innerWidth; //let width = 680;\n\nvar height = window.innerHeight; //let height = 400;\n\nvar config = {\n  width: width,\n  height: height,\n  backgroundColor: \"#fff\",\n  scene: [_scene_StartScene__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _scene_HelloWorldScene__WEBPACK_IMPORTED_MODULE_2__[\"default\"]]\n};\nvar game = new Phaser.Game(config);\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/scene/HelloWorldScene.js":
/*!*****************************************!*\
  !*** ./src/js/scene/HelloWorldScene.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HelloWorldScene; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar HelloWorldScene =\n/*#__PURE__*/\nfunction (_Phaser$Scene) {\n  _inherits(HelloWorldScene, _Phaser$Scene);\n\n  function HelloWorldScene() {\n    _classCallCheck(this, HelloWorldScene);\n\n    //!!自動実行をfalseにしておく!!\n    return _possibleConstructorReturn(this, _getPrototypeOf(HelloWorldScene).call(this, {\n      key: 'HelloWorldScene',\n      active: false\n    }));\n  }\n\n  _createClass(HelloWorldScene, [{\n    key: \"preload\",\n    value: function preload() {\n      // atlasの画像読み込み\n      this.load.atlas('cube', 'assets/animations/cube.png', 'assets/animations/cube.json');\n      this.load.spritesheet('mummy', 'assets/animations/mummy37x45.png', {\n        frameWidth: 37,\n        frameHeight: 45\n      });\n      this.load.spritesheet('miyako', 'assets/animations/miyako.png', {\n        frameWidth: 505,\n        frameHeight: 277\n      });\n    }\n  }, {\n    key: \"create\",\n    value: function create() {\n      this.touchTest(); //this.animeTest();\n    }\n  }, {\n    key: \"touchTest\",\n    value: function touchTest() {\n      var rate = 1.7; // 文字表示\n      // text(位置x,位置y,中身,設定)\n      // setOrigin : x・yの詰め (1,1)だと右詰め・上詰め\n      // setInteractive : タッチイベント用\n      //let click = this.add.text(250, 150, 'Click', { fill: '#000' }).setOrigin(0.5).setInteractive();\n\n      var click = this.add.text(this.centerX(), this.centerY() - 160 * rate, 'もっとプリンをよこすの', {\n        fontSize: '32px',\n        fontFamily: 'Nico Moji',\n        fill: '#000'\n      }).setOrigin(0.5);\n      click.setScale(rate);\n      var count = 0;\n      var countText = this.add.text(this.centerX(), this.centerY() + 150 * rate, this.countPrin(count), {\n        fontSize: '32px',\n        fontFamily: 'Nico Moji',\n        fill: '#000'\n      }).setOrigin(0.5);\n      countText.setScale(rate); // スプライトの設定\n\n      var sprite = this.add.sprite(this.centerX(), this.centerY(), 'miyako');\n      sprite.setScale(rate); // アニメーションの設定\n\n      var miyakoAnimation = this.anims.create({\n        key: 'prin',\n        frames: this.anims.generateFrameNumbers('miyako', {\n          start: 1,\n          end: 2\n        }),\n        frameRate: 8,\n        repeat: 1,\n        onComplete: function onComplete() {\n          sprite.setTexture('miyako');\n        }\n      }); // タッチ判定（離れた際）\n\n      this.input.on('pointerup', function (pointer, localX, localY, event) {\n        count++; // 文字表示\n        //countText.setText(this.countPrin(count));\n        // ↑ファンクションが読めない\n\n        countText.setText('プリン ' + String(count) + ' こ'); // アニメーションの再生\n\n        sprite.anims.play('prin');\n      });\n    }\n  }, {\n    key: \"countPrin\",\n    value: function countPrin(count) {\n      return 'プリン ' + String(count) + ' こ';\n    }\n  }, {\n    key: \"animeTest\",\n    value: function animeTest() {\n      // アニメーションの設定\n      this.anims.create({\n        key: 'spin',\n        frames: this.anims.generateFrameNames('cube', {\n          prefix: 'frame',\n          start: 0,\n          end: 23\n        }),\n        frameRate: 50,\n        repeat: -1\n      }); // アニメーションの再生\n      //this.add.sprite(100, 100, 'cube').setScale(0.1).play('spin');\n      // アニメーションの設定\n\n      var mummyAnimation = this.anims.create({\n        key: 'walk',\n        frames: this.anims.generateFrameNumbers('mummy'),\n        frameRate: 16,\n        repeat: 7\n      }); // スプライトの設定\n      // var sprite = this.add.sprite(50, 300, 'mummy').setScale(0.5);\n      // // アニメーションの再生\n      // sprite.play('walk');\n      // // tweenを使用した移動\n      // this.tweens.add({\n      //     targets: sprite,\n      //     x: 100,\n      //     duration: 1000,\n      //     ease: 'Linear'\n      // });\n    }\n  }, {\n    key: \"centerX\",\n    value: function centerX() {\n      return this.sys.game.config.width / 2;\n    }\n  }, {\n    key: \"centerY\",\n    value: function centerY() {\n      return this.sys.game.config.height / 2;\n    }\n  }]);\n\n  return HelloWorldScene;\n}(Phaser.Scene);\n\n\n\n//# sourceURL=webpack:///./src/js/scene/HelloWorldScene.js?");

/***/ }),

/***/ "./src/js/scene/StartScene.js":
/*!************************************!*\
  !*** ./src/js/scene/StartScene.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StartScene; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar StartScene =\n/*#__PURE__*/\nfunction (_Phaser$Scene) {\n  _inherits(StartScene, _Phaser$Scene);\n\n  function StartScene() {\n    var _this;\n\n    _classCallCheck(this, StartScene);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(StartScene).call(this, {\n      key: 'StartScene',\n      active: true\n    }));\n    _this.loaded = false;\n    return _this;\n  }\n\n  _createClass(StartScene, [{\n    key: \"preload\",\n    value: function preload() {\n      // IMPORTANT: below I load google's webfont loader\n      this.load.script('https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont');\n      this.load.on('progress', this.onLoadProgress, this);\n      this.load.on('complete', this.onLoadComplete, this);\n    }\n  }, {\n    key: \"onLoadProgress\",\n    value: function onLoadProgress(progress) {\n      console.log(\"onLoadProgress\");\n    }\n  }, {\n    key: \"onLoadComplete\",\n    value: function onLoadComplete(loader, totalComplete, totalFailed) {\n      var _this2 = this;\n\n      console.log(\"onLoadComplete\");\n      WebFont.load({\n        loading: function loading() {\n          return console.log('ロード開始');\n        },\n        active: function active() {\n          return _this2.loaded = true;\n        },\n        inactive: function inactive() {\n          return console.log('ロード失敗');\n        },\n        custom: {\n          families: ['Nico Moji'],\n          urls: ['https://fonts.googleapis.com/earlyaccess/nicomoji.css'] //I included what this should look like below\n\n        }\n      });\n      console.log('completed: ', totalComplete);\n      console.log('failed: ', totalFailed);\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      if (this.loaded) {\n        console.log(\"update\");\n        this.scene.start('HelloWorldScene');\n      }\n    }\n  }]);\n\n  return StartScene;\n}(Phaser.Scene);\n\n\n\n//# sourceURL=webpack:///./src/js/scene/StartScene.js?");

/***/ }),

/***/ 0:
/*!*********************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://localhost:9000 ./src/js/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! D:\\webGl\\node_modules\\webpack-dev-server\\client\\index.js?http://localhost:9000 */\"./node_modules/webpack-dev-server/client/index.js?http://localhost:9000\");\nmodule.exports = __webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\n\n\n//# sourceURL=webpack:///multi_(webpack)-dev-server/client?");

/***/ })

/******/ });