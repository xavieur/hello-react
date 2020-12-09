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
    console.log(e.target.elements.titulo.value)
}

const render = ()=>{

    const template = (
        <div>
            <h1>Consejero literario</h1>
            <h2>Recomendaciones personalizadas al detalle</h2>
            <p>{books.length}</p>
            <ul>
            {books.map((book) => {
                return <li key={book.title}>{book.title}</li>
            })}
            </ul>
            <form action="" onSubmit={onSubmitNewBook}>
                <label htmlFor="titulo">Nuevo título: </label>
                <input type="text" name="titulo" id="titulo" />
                <button>Añadir título</button>
            </form>
        </div>    
    )
    
    ReactDOM.render(template, appRoot)
}
render()