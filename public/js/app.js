"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getCountries = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios.get('https://restcountries.eu/rest/v2/all');

          case 2:
            result = _context.sent;
            console.log('result: ', result.data);
            return _context.abrupt("return", result.data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getCountries() {
    return _ref.apply(this, arguments);
  };
}();

var countries = getCountries();

var getCountry = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(countryCode) {
    var result, countries, country;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios.get('https://restcountries.eu/rest/v2/all');

          case 2:
            result = _context2.sent;
            countries = result.data;
            country = countries.find(function (country) {
              return country.alpha2Code.toLowerCase() === countryCode.toLowerCase();
            });
            console.log(country.name);
            return _context2.abrupt("return", country);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getCountry(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var country = getCountry('es');

var getCountryNameByIP = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var ipInfo, countryCode, result, countries, country;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios.get('https://ipinfo.io/json?token=2ad24e9889b095');

          case 2:
            ipInfo = _context3.sent;
            console.log('ipInfo: ', ipInfo.data.country);
            countryCode = ipInfo.data.country;
            _context3.next = 7;
            return axios.get('https://restcountries.eu/rest/v2/all');

          case 7:
            result = _context3.sent;
            countries = result.data;
            country = countries.find(function (country) {
              return country.alpha2Code.toLowerCase() === countryCode.toLowerCase();
            });
            console.log(country.name);
            render(country.name);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getCountryNameByIP() {
    return _ref3.apply(this, arguments);
  };
}();

getCountryNameByIP();
var appRoot = document.getElementById('appRoot');

var render = function render(country) {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, country));
  ReactDOM.render(template, appRoot);
};

render();
//# sourceMappingURL=app.js.map