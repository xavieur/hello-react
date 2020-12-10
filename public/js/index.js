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
  var newTitle = e.target.elements.titulo.value;
  var newAuthor = e.target.elements.autor.value ? e.target.elements.autor.value : 'Anónimo';

  if (newTitle) {
    books.push({
      title: newTitle,
      author: newAuthor
    }); // e.target.reset()

    e.target.elements.titulo.value = '';
    e.target.elements.autor.value = '';
    render();
  }
};

var render = function render() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Consejero literario"), /*#__PURE__*/React.createElement("h2", null, "Recomendaciones personalizadas al detalle"), /*#__PURE__*/React.createElement("p", null, books.length ? "Hay ".concat(books.length, " libros") : 'No hay libros disponibles'), /*#__PURE__*/React.createElement("ul", null, books.map(function (book) {
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
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "autor"
  }, "Nuevo autor: "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "autor",
    id: "autor"
  }), /*#__PURE__*/React.createElement("button", null, "A\xF1adir libro")));
  ReactDOM.render(template, appRoot);
};

render();

//# sourceMappingURL=index.js.map