const getCountries = async () => {
    const result = await axios.get('https://restcountries.eu/rest/v2/all')
    console.log('result: ', result.data)
    return result.data
}

const countries = getCountries()

const getCountry = async (countryCode) => {
    const result = await axios.get('https://restcountries.eu/rest/v2/all')
    const countries = result.data
    const country = countries.find((country) => country.alpha2Code.toLowerCase() === countryCode.toLowerCase())
    console.log(country.name)
    return country
}

const country = getCountry('es')

const getCountryNameByIP = async ()=>{
    const ipInfo = await axios.get('https://ipinfo.io/json?token=2ad24e9889b095')
    console.log( 'ipInfo: ', ipInfo.data.country)
    const countryCode = ipInfo.data.country
    const result = await axios.get('https://restcountries.eu/rest/v2/all')
    const countries = result.data
    const country = countries.find((country) => country.alpha2Code.toLowerCase() === countryCode.toLowerCase())
    console.log(country.name)
    render(country.name)
}

getCountryNameByIP()



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