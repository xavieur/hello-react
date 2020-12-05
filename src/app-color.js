// cambiar una propiedad CSS al hacer click en un botón
const button = document.querySelector('#verde')
const body = document.querySelector('body')

button.addEventListener('click', (e) => {
    body.style.backgroundColor = 'green'
})

// retocar un párrafo en varias propiedades de estilos a la vez
const retocarButton = document.querySelector('#retocar')
const ultimoParrafo = document.querySelector('section p:last-of-type')
retocarButton.addEventListener('click', (e) => {
    ultimoParrafo.classList.add('retocar')
})

// filtrar las frutas que figuran en una lista del documento
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

// crear un footer y añadirlo en un bloque
const footer = document.createElement('footer')
footer.textContent = 'Copyright 2020'
body.appendChild(footer)

// crear un botón que crea otro que elimina el primero
const darthVader = document.querySelector('#darthvader')
const firstSection = document.querySelector('section:first-child')
const galaxy = document.querySelector('#galaxy')

darthVader.addEventListener('click', (e) => {
    /* 
    1. createElement
    2. lo configuramos
    3. bloque.appendChild
    */
    const lukeSkyWalker = document.createElement('button')
    lukeSkyWalker.textContent = 'LukeSkyWalker'
    lukeSkyWalker.addEventListener('click', ()=>{
        darthVader.style.display = 'none'
    })

    galaxy.appendChild(lukeSkyWalker)
})

// crear un enlace a mi Github
const miGitHub = document.createElement('a')
miGitHub.textContent = 'mi github'
miGitHub.setAttribute('href', 'https://github.com/xavieur')
miGitHub.classList.add('a')
firstSection.appendChild(miGitHub)

