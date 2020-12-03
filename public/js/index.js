"use strict";

var personA = {
  name: 'Perico',
  age: 25,
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

var writeLocation = function writeLocation(city) {
  if (city) {
    return /*#__PURE__*/React.createElement("p", null, "Ciudad: ", city);
  }
};

var appRoot = document.getElementById('appRoot');

var render = function render() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Nombre: ", personA.name ? personA.name : 'Anónimo'), personA.age && personA.age >= 18 && /*#__PURE__*/React.createElement("p", null, "Edad: ", personA.age), writeLocation(personA.city), /*#__PURE__*/React.createElement("button", {
    onClick: sumar
  }, "+1"), /*#__PURE__*/React.createElement("button", {
    onClick: restar
  }, "-1"), /*#__PURE__*/React.createElement("button", {
    onClick: reset
  }, "reset"));
  console.log(template);
  ReactDOM.render(template, appRoot);
};

render();

//# sourceMappingURL=index.js.map