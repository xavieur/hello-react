const getCountry = async ()=>{
    const result = await axios.get('https://restcountries.eu/rest/v2/all')
    console.log('result: ', result)
}

getCountry()


const appRoot = document.getElementById('appRoot')

const render = (country)=>{
    const template = (
        <div>
           <p>{country}</p> 
        </div>
    )
    
    ReactDOM.render(template, appRoot)
}

render()