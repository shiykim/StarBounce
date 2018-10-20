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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/starbounce.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/fruits.js":
/*!***********************!*\
  !*** ./lib/fruits.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Fruit; });\nconst FRUITCHOICES = {\n  0: './assets/images/cactus.png',\n  1: './assets/images/grape.png',\n  2: './assets/images/melon.png',\n  3: './assets/images/salmonberry.png',\n  4: './assets/images/starfruit.png',\n  5: './assets/images/trash.png',\n  6: './assets/images/newspaper.png',\n  7: './assets/images/glasses.png'\n};\n\nconst RANDSIDE = {\n\n}\n\nclass Fruit {\n\n  constructor(ctx){\n    let rand = Math.floor(Math.random() * Math.floor(7));\n    let randSide = Math.floor(Math.random());\n    this.fruit = new Image();\n    this.fruit.src = FRUITCHOICES[rand];\n    this.dx = 0;\n    this.dy = Math.floor(Math.random() * 350) + 200;\n    this.width = 10;\n    this.height = 10;\n    this.idx = rand;\n    this.ctx = ctx;\n  }\n\n  draw(){\n    this.ctx.drawImage(this.fruit, 0, 0, 1936, 3000, this.dx, this.dy, 1500, 2500);\n    this.update();\n  }\n\n  update(){\n    this.dx += 8;\n  }\n\n  collision(players){\n    if ((this.dx < players.player1X + players.playerWidth &&\n       this.dx + this.width > players.player1X &&\n  \t   this.dy < players.player1Y + players.playerHeight &&\n  \t   this.dy + this.height > players.player1Y) ||\n       (this.dx < players.player2X + players.playerWidth &&\n          this.dx + this.width > players.player2X &&\n     \t    this.dy < players.player2Y + players.playerHeight &&\n     \t     this.dy + this.height > players.player2Y))\n         {\n      this.dx = 700;\n      if (this.idx < 5){\n        window.score += 10;\n      } else {\n        window.time -= 1000;\n      }\n    }\n  }\n\n}\n\n\n//# sourceURL=webpack:///./lib/fruits.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ \"./lib/player.js\");\n/* harmony import */ var _fruits_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fruits.js */ \"./lib/fruits.js\");\n\n\n\nclass Game {\n\n  constructor(ctx){\n    this.ctx = ctx;\n    this.background = new Image();\n    this.leftB = new Image();\n    this.rightB = new Image();\n    this.background.src = './assets/images/background.jpg';\n    this.leftB.src = './assets/images/branch-left.png';\n    this.rightB.src = './assets/images/branch-right.png';\n    this.players = new _player_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.ctx);\n    this.fruitsArray = [];\n    this.time = 6000;\n    this.score = 0;\n  }\n\n  play(){\n    this.animate(this.ctx);\n    this.fruitsInterval = setInterval(this.createFruit.bind(this), 800);\n  }\n\n  foreground() {\n    this.ctx.drawImage(this.background, 0, 0, 1300, 2000, 0, 0, 739, 1830);\n    this.ctx.drawImage(this.leftB, 0, 0, 1936, 3000, 0, 70, 520, 700);\n    this.ctx.drawImage(this.rightB, 0, 0, 1600, 3000, 350, 70, 520, 700);\n    this.ctx.beginPath();\n    this.ctx.font = \"20px Arial\";\n    this.ctx.save();\n    this.ctx.beginPath();\n    this.ctx.moveTo(290, 630);\n    this.ctx.lineTo(370, 630);\n    this.ctx.lineTo(330, 570);\n    this.ctx.closePath();\n    this.ctx.fillStyle = '#804000';\n    this.ctx.fill();\n    this.ctx.restore();\n  }\n\n  createFruit() {\n    if (this.fruitsArray.length < 15){\n      let newFruit = new _fruits_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx);\n      this.fruitsArray.push(newFruit);\n    } else {\n      this.fruitsArray.shift();\n    }\n  }\n\n  activateFruits(){\n    this.fruitsArray.map((fruit) => {\n      fruit.draw();\n      fruit.collision(this.players);\n    });\n  }\n\n  animate(){\n    requestAnimationFrame(this.animate.bind(this));\n    this.ctx.clearRect(0, 0, canvas.width, canvas.height);\n    this.foreground(this.ctx);\n    this.ctx.fillText(\"Score\", 310, 100);\n    this.ctx.fillText(`${window.score}`, 323, 120);\n    this.ctx.fillText(\"Timer\", 310, 150);\n    this.ctx.fillText(`${Math.floor(window.time/100)}`, 323, 170);\n    window.time--;\n    this.players.draw();\n    this.activateFruits();\n    this.ctx.fillText(\"Score\", 310, 100);\n    this.ctx.fillText(\"Timer\", 310, 150);\n    if (window.time <= 0){\n      window.time = 0;\n      clearInterval(this.fruitsInterval);\n      if (window.score > 20){\n        $('.win').show();\n      } else {\n        $('.lose').show();\n      }\n    }\n  }\n\n}\n\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/player.js":
/*!***********************!*\
  !*** ./lib/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Players; });\nclass Players {\n\n  constructor(ctx){\n    this.playerImage = new Image();\n    this.playerImage.src = './assets/images/junimo2.png';\n    this.player1X = 100;\n    this.player1Y = 70;\n    this.player2X = 480;\n    this.player2Y = 500;\n    this.playerWidth = 50;\n    this.playerHeight = 50;\n    this.ctx = ctx;\n  }\n\n  draw(){\n    this.ctx.drawImage(this.playerImage, 0, 0, 1600, 3000, this.player1X, this.player1Y, 520, 700);\n    this.ctx.drawImage(this.playerImage, 0, 0, 1600, 3000, this.player2X, this.player2Y, 520, 700);\n    this.handleKey();\n    this.seesaw();\n  }\n\n  handleKey(){\n    if (window.rightPressed && (this.player1X > 0) && (this.player2X < 550)){\n      this.player1X += 7;\n      this.player2X += 7;\n    } else if (window.leftPressed && (this.player1X > 0) && (this.player2X > 410)){\n      this.player1X -= 7;\n      this.player2X -= 7;\n    } else if (window.jump && window.direction === 'down') {\n      if (this.player1Y < 500 && this.player2Y < 510) {\n        this.player1Y += 6;\n        this.player2Y -= 6;\n        if (this.player1Y === 496) {\n          window.direction = 'up';\n          window.jump = false;\n        }\n      }\n    } else if (window.jump && window.direction === 'up'){\n      if (this.player1Y > 60 && this.player2Y < 500){\n        this.player1Y -= 6;\n        this.player2Y += 6;\n        if (this.player1Y === 76) {\n          window.direction = 'down';\n          window.jump = false;\n        }\n      }\n    }\n  }\n\n  seesaw(){\n    if (this.player1Y > 470){\n      this.ctx.save();\n      this.ctx.beginPath();\n      this.ctx.rotate(-8*Math.PI/180);\n      this.ctx.lineJoin = \"round\";\n      this.ctx.lineWidth = 20;\n      this.ctx.strokeStyle= \"#804000\";\n      this.ctx.strokeRect(-10, 600, 540, 5);\n      this.ctx.restore();\n    } else {\n      this.ctx.save();\n      this.ctx.beginPath();\n      this.ctx.rotate(10*Math.PI/180);\n      this.ctx.lineJoin = \"round\";\n      this.ctx.lineWidth = 20;\n      this.ctx.strokeStyle = '#804000';\n      this.ctx.strokeRect(160, 490, 530, 5);\n      this.ctx.restore();\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./lib/player.js?");

/***/ }),

/***/ "./lib/starbounce.js":
/*!***************************!*\
  !*** ./lib/starbounce.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./lib/game.js\");\n\n\nconst canvas = document.getElementById('canvas');\nconst ctx = canvas.getContext(\"2d\");\ncanvas.width = 650;\ncanvas.height = 640;\n\ndocument.addEventListener(\"keydown\", keyDownHandler, false);\ndocument.addEventListener(\"keyup\", keyUpHandler, false);\n\nwindow.rightPressed = false;\nwindow.leftPressed = false;\nwindow.jump = false;\nwindow.direction = 'down';\nwindow.time = 6000;\nwindow.score = 0;\n\nlet myAudio = new Audio();\nlet audioStatus = true;\n\n$( \".modal\" ).click(function() {\n  $('.modal').hide();\n  $('.info').show();\n  let game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n  game.play();\n  myAudio.src = './assets/sounds/fall.mp3';\n  myAudio.play();\n  myAudio.addEventListener('ended', function() {\n    this.currentTime = 0;\n    this.play();\n  }, false);\n});\n\n$( \".button\" ).click(function() {\n  document.location.reload();\n});\n\n$( \"#play-image\" ).click(function() {\n  const playImage = document.getElementById('play-image');\n  if(audioStatus){\n    myAudio.pause();\n    playImage.src = './assets/images/volume.png';\n    audioStatus = false;\n  } else {\n    myAudio.play();\n    playImage.src = './assets/images/mute.png';\n    audioStatus = true;\n  }\n});\n\n// handle keys\nfunction keyDownHandler(e) {\n  if(e.keyCode === 68) {\n    window.rightPressed = true;\n  } else if (e.keyCode === 83) {\n    window.jump = true;\n  } else if (e.keyCode === 65) {\n    window.leftPressed = true;\n  }\n}\n\n\nfunction keyUpHandler(e) {\n  if(e.keyCode === 68) {\n    rightPressed = false;\n  } else if(e.keyCode === 65) {\n    leftPressed = false;\n  }\n}\n\n\n//# sourceURL=webpack:///./lib/starbounce.js?");

/***/ })

/******/ });