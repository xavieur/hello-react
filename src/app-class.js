class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    getDescription(){
        return `Mi nombre es ${this.name}`
    }
    getFullDescription(){
        return `Mi nombre es ${this.name} y mi edad es ${this.age}`
    }
}

const miMejorAmigo = new Person('Grégoire', 35)

console.log(miMejorAmigo.getDescription());
console.log(miMejorAmigo.getFullDescription());


class Amigo extends Person {
    constructor(name, age, location){
        super(name, age)
        this.location = location
    }
    saludar(){
        return '¡Hola!'
    }
}

const unAmigo = new Amigo('Perico', 34, 'Reus')
console.log(unAmigo.saludar());
console.log(unAmigo.getFullDescription());

class Book {
    constructor(title, author){
        this.title = title
        this.author = author
    }
    getDescription(){
        return `Title: ${this.title} / Author: ${this.author}`
    }
}

const miLibroFavorito = new Book('El principito', 'Antoine de Saint-Exupéry')
console.log('con el método original: ', miLibroFavorito.getDescription());

const unLibroCualquiera = {
    title: 'Crónicas marcianas',
    author: 'Ray Bradbury'
}

const getDesc = miLibroFavorito.getDescription.bind(unLibroCualquiera)
console.log('llamando a la función indirectamente: ', getDesc())
