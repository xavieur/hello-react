"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* const getCountries = async () => {
    const result = await axios.get('https://restcountries.eu/rest/v2/all')
    console.log('result: ', result.data)
    return result.data
}

const countries = getCountries()

const getCountry = async (countryCode) => {
    const result = await axios.get('https://restcountries.eu/rest/v2/all')
    const countries = result.data
    const country = countries.find((country) => country.alpha2Code.toLowerCase() === countryCode.toLowerCase())
    render(country.name)
    return country
}
 */
var getCountryByIP = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var result1, countryCode, result2, countries, country;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios.get('https://ipinfo.io/json?token=2ad24e9889b095');

          case 2:
            result1 = _context.sent;
            countryCode = result1.data.country;
            /* analizando el resultado de ipinfo.io
            console.log('ipinfo.io: ', result.data.country) */
            // consultar todos los países a restcountries 

            _context.next = 6;
            return axios.get('https://restcountries.eu/rest/v2/all');

          case 6:
            result2 = _context.sent;
            countries = result2.data;
            /* analizando el resultado de restcountries.eu
            console.log('restcountries.eu: ',countries.data[0].alpha2Code) */
            // buscar el país que tenga nuestro countryCode en todos los países

            country = countries.find(function (country) {
              return country.alpha2Code === countryCode;
            });
            render(country.name);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getCountryByIP() {
    return _ref.apply(this, arguments);
  };
}();

getCountryByIP();
var appRoot = document.getElementById('appRoot');

var render = function render(country) {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, country));
  ReactDOM.render(template, appRoot);
};

render();

//# sourceMappingURL=index.js.map