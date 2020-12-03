const personA = {
    name: 'Perico',
    age: 25,
    city: 'Reus'
}
const sumar = ()=>{
    personA.age = personA.age + 1
    // personA.age += 1
    // personA.age ++
    render()
}
const restar = ()=>{
    personA.age = personA.age - 1
    // personA.age -= 1
    // personA.age -- 
    render()
}
const reset = ()=>{
    personA.age = 0
    render()
}

const writeLocation=(city)=>{
    if(city){
        return <p>Ciudad: {city}</p>
    }
}

const appRoot = document.getElementById('appRoot')

const render = ()=>{
    const template = (
        <div>
            <h1>Nombre: {personA.name ? personA.name: 'Anónimo'}</h1>
            {(personA.age && personA.age>=18) && <p>Edad: {personA.age}</p> }
            {writeLocation(personA.city)}
            <button onClick={sumar}>+1</button>
            <button onClick={restar}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    )

    console.log(template)
    
    ReactDOM.render(template, appRoot)
}
render()