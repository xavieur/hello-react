"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var BooksApp = /*#__PURE__*/function (_React$Component) {
  _inherits(BooksApp, _React$Component);

  var _super = _createSuper(BooksApp);

  function BooksApp(props) {
    var _this;

    _classCallCheck(this, BooksApp);

    _this = _super.call(this, props);
    _this.escogerLibro = _this.escogerLibro.bind(_assertThisInitialized(_this));
    _this.borrarLibros = _this.borrarLibros.bind(_assertThisInitialized(_this));
    _this.state = {
      books: [{
        title: 'El principito',
        author: 'Antoine de Saint-Exupéry'
      }, {
        title: 'El Quijote',
        author: 'Miguel de Cervantes Saavedra'
      }, {
        title: 'Platero y yo',
        author: 'Juan Ramón Jiménez'
      }]
    };
    return _this;
  }

  _createClass(BooksApp, [{
    key: "escogerLibro",
    value: function escogerLibro() {
      console.log('escoger libro');
      var indice = Math.floor(Math.random() * this.state.books.length);
      alert(this.state.books[indice].title + ' / ' + this.state.books[indice].author);
    }
  }, {
    key: "borrarLibros",
    value: function borrarLibros() {
      console.log('aquí ponemos la trituradora');
      this.setState(function () {
        return {
          books: []
        };
      });
    }
  }, {
    key: "introducirLibro",
    value: function introducirLibro(nuevoLibro) {
      this.setState(function (estadoPrevio) {
        books: estadoPrevio.books.concat(nuevoLibro);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var subtitle = 'Te asesoro sobre entidades alfanuméricas';
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        subtitulo: subtitle
      }), /*#__PURE__*/React.createElement(RecommendBook, {
        escogerLibro: this.escogerLibro,
        hayLibros: this.state.books.length > 0
      }), /*#__PURE__*/React.createElement(Books, {
        libros: this.state.books,
        borrarLibros: this.borrarLibros
      }), /*#__PURE__*/React.createElement(AddBook, {
        introducirLibro: this.introducirLibro
      }));
    }
  }]);

  return BooksApp;
}(React.Component);

var Header = /*#__PURE__*/function (_React$Component2) {
  _inherits(Header, _React$Component2);

  var _super2 = _createSuper(Header);

  function Header() {
    _classCallCheck(this, Header);

    return _super2.apply(this, arguments);
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, this.props.titulo), /*#__PURE__*/React.createElement("h2", null, this.props.subtitulo));
    }
  }]);

  return Header;
}(React.Component);

Header.defaultProps = {
  titulo: 'Consejero literario digital'
};

var RecommendBook = /*#__PURE__*/function (_React$Component3) {
  _inherits(RecommendBook, _React$Component3);

  var _super3 = _createSuper(RecommendBook);

  function RecommendBook() {
    _classCallCheck(this, RecommendBook);

    return _super3.apply(this, arguments);
  }

  _createClass(RecommendBook, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        disabled: !this.props.hayLibros,
        onClick: this.props.escogerLibro
      }, "Recomendar libro"));
    }
  }]);

  return RecommendBook;
}(React.Component);

var Books = /*#__PURE__*/function (_React$Component4) {
  _inherits(Books, _React$Component4);

  var _super4 = _createSuper(Books);

  function Books() {
    _classCallCheck(this, Books);

    return _super4.apply(this, arguments);
  }

  _createClass(Books, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, this.props.libros.length ? "Hay ".concat(this.props.libros.length, " libros") : 'No hay libros disponibles en este momento'), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
        onClick: this.props.borrarLibros
      }, "Borrar libros")), /*#__PURE__*/React.createElement("ul", null, this.props.libros.map(function (libro) {
        return /*#__PURE__*/React.createElement(Book, {
          key: libro.title,
          titulo: libro.title
        });
      })));
    }
  }]);

  return Books;
}(React.Component);

var Book = /*#__PURE__*/function (_React$Component5) {
  _inherits(Book, _React$Component5);

  var _super5 = _createSuper(Book);

  function Book() {
    _classCallCheck(this, Book);

    return _super5.apply(this, arguments);
  }

  _createClass(Book, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("li", null, this.props.titulo);
    }
  }]);

  return Book;
}(React.Component);

var AddBook = /*#__PURE__*/function (_React$Component6) {
  _inherits(AddBook, _React$Component6);

  var _super6 = _createSuper(AddBook);

  function AddBook(props) {
    var _this2;

    _classCallCheck(this, AddBook);

    _this2 = _super6.call(this, props);
    _this2.introducirLibro = _this2.introducirLibro(_assertThisInitialized(_this2));
    _this2.state = {};
    return _this2;
  }

  _createClass(AddBook, [{
    key: "introducirLibro",
    value: function introducirLibro(evento) {
      evento.preventDefault();
      var title = evento.target.elements.title.trim();
      var author = evento.target.elements.author.trim();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        onSubmit: this.introducirLibro
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "title"
      }, "T\xEDtulo"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "title",
        id: "title"
      }), /*#__PURE__*/React.createElement("label", {
        htmlFor: "author"
      }, "Autor"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "author",
        id: "author"
      }), /*#__PURE__*/React.createElement("button", null, "A\xF1adir libro"));
    }
  }]);

  return AddBook;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(BooksApp, null), document.querySelector('#appRoot'));

//# sourceMappingURL=index.js.map