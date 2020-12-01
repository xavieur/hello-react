"use strict";

var personA = {
  name: 'Perico',
  age: 26,
  city: 'Reus'
};

var sumar = function sumar() {
  personA.age = personA.age + 1; // personA.age += 1
  // personA.age ++

  render();
};

var restar = function restar() {
  personA.age = personA.age - 1; // personA.age -= 1
  // personA.age -- 

  render();
};

var reset = function reset() {
  personA.age = 0;
  render();
};

var appRoot = document.getElementById('appRoot');

var render = function render() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Nombre: ", personA.name), /*#__PURE__*/React.createElement("p", null, "Edad: ", personA.age), /*#__PURE__*/React.createElement("p", null, "Ciudad: ", personA.city), /*#__PURE__*/React.createElement("button", {
    onClick: sumar
  }, "+1"), /*#__PURE__*/React.createElement("button", {
    onClick: restar
  }, "-1"), /*#__PURE__*/React.createElement("button", {
    onClick: reset
  }, "reset"));
  ReactDOM.render(template, appRoot);
};

render();
//# sourceMappingURL=app-person.js.map