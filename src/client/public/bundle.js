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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************************!*\
  !*** ./src/client/app/app.js ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* eslint-env browser */\n\n\n// Please register for your own YouTube API key!\n// https://developers.google.com/youtube/v3/getting-started#before-you-start\nconst API_KEY = 'AIzaSyC4trKMxwT42TUFHmikCc4xxQTWWxq5S0g';\nconst API_URL = 'https://www.googleapis.com/youtube/v3/search';\n\nfunction serializeUrlParams(params) {\n  return Object.keys(params).map(key => {\n    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);\n  }).join('&');\n}\n\nfunction youtubeSearch(searchTerm, maxResults) {\n  let params = {\n    part: 'snippet',\n    maxResults: maxResults,\n    order: 'date',\n    key: API_KEY,\n    q: searchTerm\n  };\n\n  let url = new URL(API_URL);\n  url.search = serializeUrlParams(params);\n\n  return fetch(url).then(response => {\n    if (response.ok) {\n      return response.json();\n    }\n    throw new Error(`${response.status}: ${response.statusText}`);\n  }).then(function(json) {\n    return json.items;\n  });\n}\n\ndocument.querySelector('#search').addEventListener('submit', event => {\n  event.preventDefault();\n\n  var results = document.querySelector('#results');\n  while (results.firstChild) {\n    results.removeChild(results.firstChild);\n  }\n\n  let searchTerm = document.querySelector('#searchTerm').value;\n  let maxResults = document.querySelector('#maxResults').value;\n\n  youtubeSearch(searchTerm, maxResults).then(videos => {\n    videos.forEach(video => {\n      let img = document.createElement('img');\n      console.log(video)\n      img.src = video.snippet.thumbnails.medium.url;\n      results.appendChild(img);\n    });\n  }).catch(error => console.warn('YouTube search failed due to', error));\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jbGllbnQvYXBwL2FwcC5qcz8yNGVjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBQbGVhc2UgcmVnaXN0ZXIgZm9yIHlvdXIgb3duIFlvdVR1YmUgQVBJIGtleSFcbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZ2V0dGluZy1zdGFydGVkI2JlZm9yZS15b3Utc3RhcnRcbmNvbnN0IEFQSV9LRVkgPSAnQUl6YVN5QzR0cktNeHdUNDJUVUZIbWlrQ2M0eHhRVFdXeHE1UzBnJztcbmNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9zZWFyY2gnO1xuXG5mdW5jdGlvbiBzZXJpYWxpemVVcmxQYXJhbXMocGFyYW1zKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhwYXJhbXMpLm1hcChrZXkgPT4ge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSk7XG4gIH0pLmpvaW4oJyYnKTtcbn1cblxuZnVuY3Rpb24geW91dHViZVNlYXJjaChzZWFyY2hUZXJtLCBtYXhSZXN1bHRzKSB7XG4gIGxldCBwYXJhbXMgPSB7XG4gICAgcGFydDogJ3NuaXBwZXQnLFxuICAgIG1heFJlc3VsdHM6IG1heFJlc3VsdHMsXG4gICAgb3JkZXI6ICdkYXRlJyxcbiAgICBrZXk6IEFQSV9LRVksXG4gICAgcTogc2VhcmNoVGVybVxuICB9O1xuXG4gIGxldCB1cmwgPSBuZXcgVVJMKEFQSV9VUkwpO1xuICB1cmwuc2VhcmNoID0gc2VyaWFsaXplVXJsUGFyYW1zKHBhcmFtcyk7XG5cbiAgcmV0dXJuIGZldGNoKHVybCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7cmVzcG9uc2Uuc3RhdHVzfTogJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xuICB9KS50aGVuKGZ1bmN0aW9uKGpzb24pIHtcbiAgICByZXR1cm4ganNvbi5pdGVtcztcbiAgfSk7XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gnKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgdmFyIHJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0cycpO1xuICB3aGlsZSAocmVzdWx0cy5maXJzdENoaWxkKSB7XG4gICAgcmVzdWx0cy5yZW1vdmVDaGlsZChyZXN1bHRzLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgbGV0IHNlYXJjaFRlcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoVGVybScpLnZhbHVlO1xuICBsZXQgbWF4UmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXhSZXN1bHRzJykudmFsdWU7XG5cbiAgeW91dHViZVNlYXJjaChzZWFyY2hUZXJtLCBtYXhSZXN1bHRzKS50aGVuKHZpZGVvcyA9PiB7XG4gICAgdmlkZW9zLmZvckVhY2godmlkZW8gPT4ge1xuICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgY29uc29sZS5sb2codmlkZW8pXG4gICAgICBpbWcuc3JjID0gdmlkZW8uc25pcHBldC50aHVtYm5haWxzLm1lZGl1bS51cmw7XG4gICAgICByZXN1bHRzLmFwcGVuZENoaWxkKGltZyk7XG4gICAgfSk7XG4gIH0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUud2FybignWW91VHViZSBzZWFyY2ggZmFpbGVkIGR1ZSB0bycsIGVycm9yKSk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NsaWVudC9hcHAvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);