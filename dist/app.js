/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

var misure = document.querySelector('.misure-list');
var btnCarrello = document.querySelector('.btn-carrello');
var closeModal = document.querySelector('#close-modal');
var rimuoviAdesivi = document.getElementById('rim-adesivi');
var patches = [{
  name: "Anguria",
  side: 'right',
  img: "../img/patch/AACCS202387881.png"
}, {
  name: "Fragola",
  side: 'right',
  img: "../img/patch/AACCS00204380311.png"
}, {
  name: "Cuore",
  side: 'right',
  img: "../img/patch/ADECO02796B80303.png"
}, {
  name: "Anguria",
  side: 'left',
  img: "../img/patch/AACCS202387881-1.png"
}, {
  name: "Fragola",
  side: 'left',
  img: "../img/patch/AACCS00204380311-1.png"
}, {
  name: "Cuore",
  side: 'left',
  img: "../img/patch/ADECO02796B80303-1.png"
}]; // inserisco dinamicamente i tasti per applicare gli adesivi

patches.forEach(function (p) {
  var item = document.createElement("div");
  item.innerHTML = p.name;
  item.classList = "patch ".concat(p.side);
  document.querySelector(".adesivi-list.".concat(p.side)).append(item);
  item.addEventListener('click', function (e) {
    document.querySelectorAll(".patch.".concat(p.side)).forEach(function (item) {
      item.classList.remove('active');
    });
    var img = document.querySelector(".overlay-patch[data-side=".concat(p.side));
    img.innerHTML = "<img src=".concat(p.img, " class=").concat(p.side, "></img>");
    e.target.classList.add('active');
  });
}); // tasto per resettare gli adesivi

rimuoviAdesivi.addEventListener('click', function () {
  // rimuovo la classe active dai tasti
  var listaAdesivi = document.querySelectorAll('.patch');
  listaAdesivi.forEach(function (l) {
    l.classList.remove('active');
  });
  var imgAdesivi = document.querySelectorAll('.overlay-patch');
  console.log(imgAdesivi);
  imgAdesivi.forEach(function (i) {
    i.innerHTML = '';
  });
}); // gestisco il click su una misura

misure.addEventListener('click', function (e) {
  if (e.target.className === 'misure-item') {
    // nascondo il msg di errore se era visibile
    document.querySelector('.err-misura').style.visibility = 'hidden'; // controllo se ho cliccato su un elemento valido della lista
    // rimuovo la classe active da tutti gli elementi
    // e la assegno solo a quello cliccato

    document.querySelectorAll('.misure-item').forEach(function (item) {
      item.classList.remove('active');
    });
    e.target.classList.add('active');
    console.log(e.target.textContent);
  }
});
btnCarrello.addEventListener('click', function () {
  var name = document.querySelector('#name').textContent;
  var price = document.querySelector('#price').textContent;
  var sizeActive = document.querySelector('.misure-item.active');
  var size = sizeActive ? sizeActive.textContent : null;
  var err = document.querySelector('.err-misura');
  var patchSx = document.querySelector('.patch.left.active');
  patchSx = patchSx ? patchSx.textContent : 'Nessuno';
  var patchDx = document.querySelector('.patch.right.active');
  patchDx = patchDx ? patchDx.textContent : 'Nessuno'; // controllo se è stata scelta una misura

  if (!size) {
    err.style.visibility = 'visible';
  } else {
    var modal = document.getElementById('modal');
    var riepilogo = document.getElementById('info');
    modal.style.display = 'flex';
    var info = "\n            <div>\n                <h1>Riepilogo ordine</h1>\n                <h2>Modello: ".concat(name, "</h2>\n                <h2>Prezzo: ").concat(price, "</h2>\n                <h2>Misura: ").concat(size, "</h2>\n                <h2>Adesivo SX: ").concat(patchSx, "</h2>\n                <h2>Adesivo DX: ").concat(patchDx, "</h2>\n            </div>\n        ");
    riepilogo.innerHTML = info;
    err.style.display = 'hidden';
  }
});
closeModal.addEventListener('click', function () {
  document.querySelector('#modal').style.display = 'none';
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/app": 0,
/******/ 			"dist/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktest_4"] = self["webpackChunktest_4"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/app"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/app"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;