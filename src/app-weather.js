const key = '9353d7f8d0ffc410966b55287511f6bb'
const city = 'Barcelona'

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=es`


const getWeather = async ()=>{
    const result = await axios.get(url)
    render(result.data.main.temp, result.data.main.humidity, result.data.main.pressure, result.data.weather[0].description)
}

getWeather()


const appRoot = document.getElementById('appRoot')

const render = (temperatura, humedad, presion, descripcion)=>{
    const template = (
        <div>
            <h1>Tiempo en {city}:</h1>
            <p>En pocas palabras: {descripcion}</p>
            <p>Temperatura: {temperatura} grados Celsius</p>
            <p>Humedad: {humedad}</p>
            <p>Presión: {presion}</p>
        </div>
    )
    
    ReactDOM.render(template, appRoot)
}

render()




/* --source-maps --watch --presets=@babel/preset-env,@babel/preset-react 

"dependencies": {
    "@babel/polyfill": "^7.12.1",
    "core-js": "^3.8.0"
  }*/

