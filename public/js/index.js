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
    _this.introducirLibro = _this.introducirLibro.bind(_assertThisInitialized(_this));
    _this.borrarUnLibro = _this.borrarUnLibro.bind(_assertThisInitialized(_this));
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
    key: "borrarUnLibro",
    value: function borrarUnLibro(tituloABorrar) {
      console.log('tituloABorrar', tituloABorrar);
      this.setState(function (estadoPrevio) {
        return {
          books: estadoPrevio.books.filter(function (book) {
            return book.title !== tituloABorrar;
          })
        };
      });
    }
  }, {
    key: "introducirLibro",
    value: function introducirLibro(nuevoLibro) {
      if (!nuevoLibro.title) {
        return 'Hay que introducir libro válido';
      } else if (this.state.books.map(function (book) {
        return book.title;
      }).indexOf(nuevoLibro.title) > -1) {
        return 'Libro repetido';
      }

      this.setState(function (estadoPrevio) {
        return {
          books: estadoPrevio.books.concat(nuevoLibro)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = 'Consejero literario digital';
      var subtitle = 'Te asesoro sobre entidades alfanuméricas';
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        titulo: title,
        subtitulo: subtitle
      }), /*#__PURE__*/React.createElement(RecommendBook, {
        escogerLibro: this.escogerLibro,
        hayLibros: this.state.books.length > 0
      }), /*#__PURE__*/React.createElement(Books, {
        libros: this.state.books,
        borrarLibros: this.borrarLibros,
        borrarUnLibro: this.borrarUnLibro
      }), /*#__PURE__*/React.createElement(AddBook, {
        introducirLibro: this.introducirLibro
      }));
    }
  }]);

  return BooksApp;
}(React.Component);
/* class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.titulo}</h1>
                <h2>{this.props.subtitulo}</h2>
            </div>
        )
    }
} */


var Header = function Header(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, props.titulo), /*#__PURE__*/React.createElement("h2", null, props.subtitulo));
};

Header.defaultProps = {
  titulo: 'Consejero literario digital'
};
/* class RecommendBook extends React.Component {

    render() {
        return (
            <div>
                <button disabled={!this.props.hayLibros} onClick={this.props.escogerLibro}>Recomendar libro</button>
            </div>
        )
    }
} */

var RecommendBook = function RecommendBook(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    disabled: !props.hayLibros,
    onClick: props.escogerLibro
  }, "Recomendar libro"));
};
/* class Books extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.libros.length ? `Hay ${this.props.libros.length} libros` : 'No hay libros disponibles en este momento'}</p>
                <p><button onClick={this.props.borrarLibros} >Borrar libros</button></p>
                <ul>
                    {this.props.libros.map((libro) => {
                        return <Book key={libro.title} titulo={libro.title} autor={libro.author} />
                    })}
                </ul>
            </div>
        )
    }
} */


var Books = function Books(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, props.libros.length ? "Hay ".concat(props.libros.length, " libros") : 'No hay libros disponibles en este momento'), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
    onClick: props.borrarLibros
  }, "Borrar libros")), /*#__PURE__*/React.createElement("ul", null, props.libros.map(function (libro) {
    return /*#__PURE__*/React.createElement(Book, {
      key: libro.title,
      titulo: libro.title,
      autor: libro.author,
      borrarUnLibro: props.borrarUnLibro
    });
  })));
};
/* class Book extends React.Component {
    render() {
        return (
            <li>
                {this.props.titulo} / {this.props.autor} <button>x</button>
            </li>
        )
    }
} */


var Book = function Book(props) {
  return /*#__PURE__*/React.createElement("li", null, props.titulo, " / ", props.autor, " ", /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      props.borrarUnLibro(props.titulo);
    }
  }, "x"));
};

var AddBook = /*#__PURE__*/function (_React$Component2) {
  _inherits(AddBook, _React$Component2);

  var _super2 = _createSuper(AddBook);

  function AddBook(props) {
    var _this2;

    _classCallCheck(this, AddBook);

    _this2 = _super2.call(this, props);
    _this2.introducirLibro = _this2.introducirLibro.bind(_assertThisInitialized(_this2));
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddBook, [{
    key: "introducirLibro",
    value: function introducirLibro(evento) {
      evento.preventDefault();
      var title = evento.target.elements.title.value.trim();
      var author = evento.target.elements.author.value.trim();
      var error = this.props.introducirLibro({
        title: title,
        author: author
      });
      this.setState(function () {
        return {
          error: error
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.error && /*#__PURE__*/React.createElement("p", null, this.state.error), /*#__PURE__*/React.createElement("form", {
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
      }), /*#__PURE__*/React.createElement("button", null, "A\xF1adir libro")));
    }
  }]);

  return AddBook;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(BooksApp, null), document.querySelector('#appRoot'));

//# sourceMappingURL=index.js.map