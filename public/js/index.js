"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// cambiar color
var button = document.querySelector('#verde');
var body = document.querySelector('body');
button.addEventListener('click', function (e) {
  body.style.backgroundColor = 'green';
}); // retocar un párrafo

var retocarButton = document.querySelector('#retocar');
var ultimoParrafo = document.querySelector('section p:last-of-type');
retocarButton.addEventListener('click', function (e) {
  ultimoParrafo.classList.add('retocar');
}); // filtrar frutas

var frutasUL = document.querySelectorAll('section ul li');
var filter = document.querySelector('#buscarFruta');
var salida = document.querySelector('#salida');
var frutas = [];

var _iterator = _createForOfIteratorHelper(frutasUL),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var fruta = _step.value;
    frutas.push(fruta.textContent);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

console.log(frutas);
filter.addEventListener('input', function (e) {
  console.log(e.target.value);
});
filter.addEventListener('input', function (e) {
  var filtro = e.target.value;
  var resultado = frutas.filter(function (fruta) {
    return fruta.toLowerCase().includes(filtro);
  });
  salida.textContent = resultado.join(', ');
}); // crear un footer

var footer = document.createElement('footer');
footer.textContent = 'Copyright 2020';
body.appendChild(footer); // crear un botón 

var darthVader = document.querySelector('#darthvader');
var firstSection = document.querySelector('section:first-child');
var galaxy = document.querySelector('#galaxy');
darthVader.addEventListener('click', function (e) {
  /* 
  1. createElement
  2. lo configuramos
  3. bloque.appendChild
  */
  var lukeSkyWalker = document.createElement('button');
  lukeSkyWalker.textContent = 'LukeSkyWalker';
  lukeSkyWalker.addEventListener('click', function () {
    darthVader.style.display = 'none';
  });
  galaxy.appendChild(lukeSkyWalker);
}); // crear un enlace a mi Github

var miGitHub = document.createElement('a');
miGitHub.textContent = 'mi github';
miGitHub.setAttribute('href', 'https://github.com/xavieur');
miGitHub.classList.add('a');
firstSection.appendChild(miGitHub);

//# sourceMappingURL=index.js.map