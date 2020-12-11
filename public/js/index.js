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

var CounterApp = /*#__PURE__*/function (_React$Component) {
  _inherits(CounterApp, _React$Component);

  var _super = _createSuper(CounterApp);

  function CounterApp(props) {
    var _this;

    _classCallCheck(this, CounterApp);

    _this = _super.call(this, props);
    _this.incrementar = _this.incrementar.bind(_assertThisInitialized(_this));
    _this.decrementar = _this.decrementar.bind(_assertThisInitialized(_this));
    _this.resetear = _this.resetear.bind(_assertThisInitialized(_this));
    _this.state = {
      contador: props.empezandoPor
    };
    return _this;
  }

  _createClass(CounterApp, [{
    key: "incrementar",
    value: function incrementar() {
      console.log('incrementar');
      this.setState(function (estadoPrevio) {
        return {
          contador: estadoPrevio.contador + 1
        };
      });
    }
  }, {
    key: "decrementar",
    value: function decrementar() {
      console.log('decrementar');
      this.setState(function (estadoPrevio) {
        return {
          contador: estadoPrevio.contador - 1
        };
      });
    }
  }, {
    key: "resetear",
    value: function resetear() {
      console.log('resetear');
      this.setState(function () {
        return {
          contador: 0
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Contador"), /*#__PURE__*/React.createElement("p", null, this.state.contador), /*#__PURE__*/React.createElement("button", {
        onClick: this.incrementar
      }, "+1"), /*#__PURE__*/React.createElement("button", {
        onClick: this.decrementar
      }, "-1"), /*#__PURE__*/React.createElement("button", {
        onClick: this.resetear
      }, "reset"));
    }
  }]);

  return CounterApp;
}(React.Component);

CounterApp.defaultProps = {
  empezandoPor: 0
};
ReactDOM.render( /*#__PURE__*/React.createElement(CounterApp, {
  empezandoPor: 10
}), document.querySelector('#appRoot'));

//# sourceMappingURL=index.js.map