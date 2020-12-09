"use strict";

var books = [{
  title: 'El principito',
  author: 'Antoine de Saint-Exupéry'
}, {
  title: 'El Quijote',
  author: 'Miguel de Cervantes Saavedra'
}, {
  title: 'Platero y yo',
  author: 'Juan Ramón Jiménez'
}];

var onSubmitNewBook = function onSubmitNewBook(e) {
  e.preventDefault();
  console.log(e.target.elements.titulo.value);
};

var render = function render() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Consejero literario"), /*#__PURE__*/React.createElement("h2", null, "Recomendaciones personalizadas al detalle"), /*#__PURE__*/React.createElement("p", null, books.length), /*#__PURE__*/React.createElement("ul", null, books.map(function (book) {
    return /*#__PURE__*/React.createElement("li", {
      key: book.title
    }, book.title);
  })), /*#__PURE__*/React.createElement("form", {
    action: "",
    onSubmit: onSubmitNewBook
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "titulo"
  }, "Nuevo t\xEDtulo: "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "titulo",
    id: "titulo"
  }), /*#__PURE__*/React.createElement("button", null, "A\xF1adir t\xEDtulo")));
  ReactDOM.render(template, appRoot);
};

render();

//# sourceMappingURL=index.js.map