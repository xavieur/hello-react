const button = document.querySelector('#verde')
const body = document.querySelector('body')

button.addEventListener('click', (e)=>{
    body.style.backgroundColor = 'green'
})

const retocarButton = document.querySelector('#retocar')

const ultimoParrafo = document.querySelector('section p:last-of-type')

retocarButton.addEventListener('click', (e)=>{
    ultimoParrafo.classList.add('retocar')
})





