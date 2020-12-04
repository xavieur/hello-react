const button = document.querySelector('#verde')
const body = document.querySelector('body')

button.addEventListener('click', (e) => {
    body.style.backgroundColor = 'green'
})

const retocarButton = document.querySelector('#retocar')

const ultimoParrafo = document.querySelector('section p:last-of-type')

retocarButton.addEventListener('click', (e) => {
    ultimoParrafo.classList.add('retocar')
})



/* 
const frutasLI = document.querySelectorAll('ul li')
console.log(frutasLI)
let frutasExtraidasDeLaLista
frutasLI.forEach((fruta)=>{
    console.log(fruta.textContent)
    frutasExtraidasDeLaLista.push(fruta.textContent)
})
for(let fruta of frutasLI){
    frutasExtraidasDeLaLista.push(fruta.textContent)
} */

const frutasUL = document.querySelectorAll('section ul li')
const filter = document.querySelector('#buscarFruta')
const salida = document.querySelector('#salida')

let frutas = []
for (let fruta of frutasUL) {
    frutas.push(fruta.textContent)
}
console.log(frutas)

filter.addEventListener('input', (e) => {
    console.log(e.target.value)
})


filter.addEventListener('input', (e) => {
    const filtro = e.target.value
    const resultado = frutas.filter((fruta) => {
        return fruta.toLowerCase().includes(filtro)
    })
    salida.textContent = resultado.join(', ')
})

const footer = document.createElement('footer')
footer.textContent = 'Copyright 2020'
body.appendChild(footer)

const darthVader = document.querySelector('#darthvader')
darthVader.addEventListener('click', (e) => {
    /* 
    1. createElement
    2. lo configuramos
    3. bloque.appendChild
    */
    const lukeSkyWalker = document.createElement('button')
    const firstSection = document.querySelector('section:first-child')

    lukeSkyWalker.textContent = 'LukeSkyWalker'
    lukeSkyWalker.addEventListener('click', ()=>{
        darthVader.style.display = 'none'
    })

    firstSection.appendChild(lukeSkyWalker)
})

