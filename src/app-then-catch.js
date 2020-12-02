const getCountry = (countryCode) => {
    return axios.get('https://restcountries.eu/rest/v2/all').then((countries) => {
        const country = countries.data.find((item) => item.alpha2Code === countryCode)
        return country
    })
}

const getLocation = () => {
    return axios.get('http://ipinfo.io/json?token=2ad24e9889b095')
}

getLocation().then((loc) => {
        return getCountry(loc.data.country)
    }
).then((country) => {
    render(country.name)
}).catch((err) => {
    console.log(err)
})


const appRoot = document.getElementById('appRoot')

const render = (country) => {
    const template = (
        <div>
            <p>{country}</p>
        </div>
    )

    ReactDOM.render(template, appRoot)
}

render() 