/* 
Ejercicios de JavaScript interactuando con el DOM:
    Document Object Model 

    Crear un elemento:
        const elemento = document.createElement('<etiqueta html>')
    Capturar un elemento
        const elemento = document.querySelector('<selector css>')
    Capturar todos los elementos
        const elementos = document.querySelectorAll('<selector css>')

        +++++++++++++
    
    A partir de un elemento podemos:

    Editar su atributo class

        elemento.classList.add('<nombre de la clase>')
        elemento.classList.remove('<nombre de la clase>')
        elemento.classList.toggle('<nombre de la clase>')

    Editar su atributo style

        elemento.style.<propiedad css>
    
    Editar otros atributos del elemento

        elemento.setAttribute('<nombre atributo>', '<valor atributo>')

    
*/



// cambiar una propiedad CSS al hacer click en un botón
const verdeButton = document.querySelector('#verde')
const blancoButton = document.querySelector('#blanco')
const main = document.querySelector('body')

verdeButton.addEventListener('click', (e) => {
    main.style.backgroundColor = 'green'
})

blancoButton.addEventListener('click', (e) => {
    main.style.backgroundColor = 'white'
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
document.body.appendChild(footer)

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
    lukeSkyWalker.textContent = 'Luke Sky Walker'
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

// escribir en consola los valores introducidos en un formulario
const form = document.querySelector('#unFormulario')
form.addEventListener('submit', (e) => {
    console.log(e.target.elements.nombre); // ya que name="nombre"
    console.log(e.target.elements.email); // ya que name="email"
    console.log(e.target.elements.mensaje); // ya que name="mensaje"
})


