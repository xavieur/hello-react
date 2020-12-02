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

const getCountryByIP = async ()=>{
    const result1 = await axios.get('https://ipinfo.io/json?token=2ad24e9889b095')
    const countryCode = result1.data.country
    /* analizando el resultado de ipinfo.io
    console.log('ipinfo.io: ', result.data.country) */

    // consultar todos los países a restcountries 
    const result2 = await axios.get('https://restcountries.eu/rest/v2/all')
    const countries = result2.data
    /* analizando el resultado de restcountries.eu
    console.log('restcountries.eu: ',countries.data[0].alpha2Code) */

    // buscar el país que tenga nuestro countryCode en todos los países
    const country = countries.find((country)=>{
        return country.alpha2Code === countryCode
    })
    render(country.name)
}

getCountryByIP()

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