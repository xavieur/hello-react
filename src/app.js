const books = [
    {
        title: 'El principito',
        author: 'Antoine de Saint-Exupéry'
    },
    {
        title: 'El Quijote',
        author: 'Miguel de Cervantes Saavedra'
    },
    {
        title: 'Platero y yo',
        author: 'Juan Ramón Jiménez'
    }
]

const onSubmitNewBook = (e) => {
    e.preventDefault()
    
    const newTitle = e.target.elements.titulo.value
    const newAuthor = e.target.elements.autor.value ? e.target.elements.autor.value : 'Anónimo'

    if(newTitle){
        books.push({title:newTitle, author:newAuthor})
        // e.target.reset()
        e.target.elements.titulo.value = '' 
        e.target.elements.autor.value = ''
        render()
    }
}

const render = ()=>{

    const template = (
        <div>
            <h1>Consejero literario</h1>
            <h2>Recomendaciones personalizadas al detalle</h2>
            <p>{books.length? `Hay ${books.length} libros`: 'No hay libros disponibles'}</p> 
            <ul>
            {books.map((book) => {
                return <li key={book.title}>{book.title}</li>
            })}
            </ul>
            <form action="" onSubmit={onSubmitNewBook}>
                <label htmlFor="titulo">Nuevo título: </label>
                <input type="text" name="titulo" id="titulo" />
                <label htmlFor="autor">Nuevo autor: </label>
                <input type="text" name="autor" id="autor" />
                <button>Añadir libro</button>
            </form>
        </div>    
    )
    
    ReactDOM.render(template, appRoot)
}
render()