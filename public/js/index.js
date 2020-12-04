"use strict";

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

//# sourceMappingURL=index.js.map