"use strict";

var getCountry = function getCountry(countryCode) {
  return axios.get('https://restcountries.eu/rest/v2/all').then(function (countries) {
    var country = countries.data.find(function (item) {
      return item.alpha2Code === countryCode;
    });
    return country;
  });
};

var getLocation = function getLocation() {
  return axios.get('http://ipinfo.io/json?token=2ad24e9889b095');
};

getLocation().then(function (loc) {
  return getCountry(loc.data.country);
}).then(function (country) {
  render(country.name);
})["catch"](function (err) {
  console.log(err);
});
var appRoot = document.getElementById('appRoot');

var render = function render(country) {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, country));
  ReactDOM.render(template, appRoot);
};

render();

//# sourceMappingURL=index.js.map