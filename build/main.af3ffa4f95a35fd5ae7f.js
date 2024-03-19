/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js.js":
/*!*******************!*\
  !*** ./src/js.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const tabs = __webpack_require__(/*! ./js/tabs */ \"./src/js/tabs.js\")\nconst popup = __webpack_require__(/*! ./js/popup */ \"./src/js/popup.js\")\n\nconst mobileMenu = document.querySelector('.mobile_menu')\n\n\ndocument.querySelector('.header_menu').addEventListener('click',(event)=>{\n    mobileMenu.classList.remove('hidden')\n    mobileMenu.classList.add('visible')\n})\n\nmobileMenu.querySelector('.mobile_menu__close').addEventListener('click',(event)=>{\n    mobileMenu.classList.remove('visible')\n    mobileMenu.classList.add('hidden')\n})\n\ndocument.querySelector('.mobile_menu__links').addEventListener('click',(event)=>{\n    mobileMenu.classList.remove('visible')\n    mobileMenu.classList.add('hidden')\n})\n\nconsole.log('webPack')\n\n//# sourceURL=webpack://shopper19/./src/js.js?");

/***/ }),

/***/ "./src/js/popup.js":
/*!*************************!*\
  !*** ./src/js/popup.js ***!
  \*************************/
/***/ (() => {

eval("const popup = document.createElement('section');\nconst WELCOME_POPUP_KEY = 'WELCOME_POPUP_KEY'\n\nconst flagStoragePopup = JSON.parse(localStorage.getItem(WELCOME_POPUP_KEY));\n\nif (!flagStoragePopup) {\n    const content =\n        `<!-- welcome-popup -->\n    <section>\n        <div class=\"welcome-popup\">\n            <div class=\"welcome-popup__wrapper\">\n                <h3 class=\"welcome-popup__wrapper_text\">Приветствую! Добро пожаловать на маркетплейс!</h3>\n                <button class=\"btn_popup welcome-popup__wrapper_btn\">Закрыть и больше не показывать</button>\n            </div>\n        </div>\n    </section>`;\n\n    popup.insertAdjacentHTML('afterbegin', content);\n    document.body.append(popup);\n\n    const close_btn = document.querySelector('.welcome-popup__wrapper_btn');\n\n    close_btn.addEventListener('click', (event) => {\n        localStorage.setItem(WELCOME_POPUP_KEY, JSON.stringify(true));\n        popup.remove();\n        //localStorage.clear();\n    });\n}\n\n\n\n//# sourceURL=webpack://shopper19/./src/js/popup.js?");

/***/ }),

/***/ "./src/js/tabs.js":
/*!************************!*\
  !*** ./src/js/tabs.js ***!
  \************************/
/***/ (() => {

eval("\n\nconst cardInfoList = [{\n    cardTitle: \"JBL\",\n    reviews: \"15\",\n    price: \"$51\",\n},{\n    cardTitle: \"Xiaomi\",\n    reviews: \"25\",\n    price: \"$61\",\n},{\n    cardTitle: \"Realme\",\n    reviews: \"35\",\n    price: \"$71\",\n},]\n\n\nconst tabCardWrapper1 = document.querySelector('.main_section02_03').querySelector('.main_section02_03__products')\nconst tabCardWrapper2 = document.querySelector('.main_section02_03_v2').querySelector('.main_section02_03_v2__products')\n\nconst tabButtonCardWrapper1 = document.querySelector('.main_section02_03').querySelector('.main_section02_03__buttons')\nconst tabButtonCardWrapper2 = document.querySelector('.main_section02_03_v2').querySelector('.main_section02_03_v2__buttons')\n\ntabButtonCardWrapper1.addEventListener(\"click\",(event)=>{\n    const target = event.target\n    const ovalButtons = tabButtonCardWrapper1.querySelectorAll('button')\n    ovalButtons.forEach(btn =>{\n        btn.classList.remove('active')\n    })\n    target.classList.add('active')\n    getCards(cardInfoList,tabCardWrapper1)\n})\n\ntabButtonCardWrapper2.addEventListener(\"click\",(event)=>{\n    const target = event.target\n    const ovalButtons = tabButtonCardWrapper2.querySelectorAll('button')\n    ovalButtons.forEach(btn =>{\n        btn.classList.remove('active')\n    })\n    target.classList.add('active')\n    \n    getCards(cardInfoList,tabCardWrapper2)\n})\n\nfunction getCards(cardInfoList, elem){\n    const arr = cardInfoList.forEach(cardInfo => {\n            const tab = `<div class=\"main_section02_03__products_block\"> \n            <div class=\"main_section02_03__products_block_rectangle1\">\n                <img class=\"main_section02_03__products_block_rectangle1_img\" src=\"../src/img/headphones 01.png\" alt=\"headphones\">\n                <div class=\"main_section02_03__products_block_rectangle1_rectangle2\">\n                    <p class=\"main_section02_03__products_block__rectangle1_rectangle2_text\">${cardInfo.cardTitle}</p>\n                    <div class=\"main_section02_03__products_block_rectangle1_rectangle2_rating\">\n                        <div class=\"main_section02_03__products_block_rectangle1_rectangle2_rating_star\">\n                            <img src=\"../src/svg/StarRed.svg\" alt=\"star\">\n                            <img src=\"../src/svg/StarRed.svg\" alt=\"star\">\n                            <img src=\"../src/svg/StarRed.svg\" alt=\"star\">\n                            <img src=\"../src/svg/StarRed.svg\" alt=\"star\">\n                            <img src=\"../src/svg/StarRed.svg\" alt=\"star\">\n                        </div>\n                        <h class=\"main_section02_03__products_block_rectangle1_rectangle2_rating_reviews\">${cardInfo.reviews}</h>\n                    </div>\n                    <p class=\"main_section02_03__products_block_rectangle1_rectangle2_price\">${cardInfo.price}</p>\n                </div>\n            </div>\n            <button class=\"main_section02_03__products_block_button button\">Add to cart</button>\n            <button class=\"main_section02_03__products_block_round bgrclr_green\">Save 60%</button>\n        </div>`\n        \n        elem.insertAdjacentHTML(\"beforeend\",tab)\n        })\n        \n}\n\n\n//# sourceURL=webpack://shopper19/./src/js/tabs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js.js");
/******/ 	
/******/ })()
;