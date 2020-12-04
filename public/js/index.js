"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var button = document.querySelector('#verde');
var body = document.querySelector('body');
button.addEventListener('click', function (e) {
  body.style.backgroundColor = 'green';
});
var retocarButton = document.querySelector('#retocar');
var ultimoParrafo = document.querySelector('section p:last-of-type');
retocarButton.addEventListener('click', function (e) {
  ultimoParrafo.classList.add('retocar');
});
/* 
const frutasLI = document.querySelectorAll('ul li')
console.log(frutasLI)
let frutasExtraidasDeLaLista
frutasLI.forEach((fruta)=>{
    console.log(fruta.textContent)
    frutasExtraidasDeLaLista.push(fruta.textContent)
})
for(let fruta of frutasLI){
    frutasExtraidasDeLaLista.push(fruta.textContent)
} */

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
});
var footer = document.createElement('footer');
footer.textContent = 'Copyright 2020';
body.appendChild(footer);

//# sourceMappingURL=index.js.map