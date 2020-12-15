class BooksApp extends React.Component {
    constructor(props) {
        super(props)

        this.escogerLibro = this.escogerLibro.bind(this)
        this.borrarLibros = this.borrarLibros.bind(this)
        this.introducirLibro = this.introducirLibro.bind(this)
        this.borrarUnLibro = this.borrarUnLibro.bind(this)

        this.state = {
            books: [
                { title: 'El principito', author: 'Antoine de Saint-Exupéry' },
                { title: 'El Quijote', author: 'Miguel de Cervantes Saavedra' },
                { title: 'Platero y yo', author: 'Juan Ramón Jiménez' }
            ]
        }
    }
    escogerLibro() {
        console.log('escoger libro')
        const indice = Math.floor(Math.random() * this.state.books.length)
        alert(this.state.books[indice].title + ' / ' + this.state.books[indice].author);
    }
    borrarLibros() {
        console.log('aquí ponemos la trituradora')
        this.setState(() => {
            return {
                books: []
            }
        })
    }
    borrarUnLibro(tituloABorrar) {
        console.log('tituloABorrar', tituloABorrar);
        this.setState((estadoPrevio) => {
            return {
                books: estadoPrevio.books.filter((book) => {
                    return book.title !== tituloABorrar
                })
            }
        })
    }
    introducirLibro(nuevoLibro) {
        if (!nuevoLibro.title) {
            return 'Hay que introducir libro válido'
        } else if (
            this.state.books.map((book) => {
                return book.title
            }).indexOf(nuevoLibro.title) > -1
        ) {
            return 'Libro repetido'
        }

        this.setState((estadoPrevio) => {
            return {
                books: estadoPrevio.books.concat(nuevoLibro)
            }
        })
    }
    render() {
        const title = 'Consejero literario digital'
        const subtitle = 'Te asesoro sobre entidades alfanuméricas'

        return (
            <div>
                <Header titulo={title} subtitulo={subtitle} />
                <RecommendBook escogerLibro={this.escogerLibro} hayLibros={this.state.books.length > 0} />
                <Books libros={this.state.books} borrarLibros={this.borrarLibros} borrarUnLibro={this.borrarUnLibro} />
                <AddBook introducirLibro={this.introducirLibro} />
            </div>
        )
    }
}

/* class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.titulo}</h1>
                <h2>{this.props.subtitulo}</h2>
            </div>
        )
    }
} */

const Header = (props) => {
    return (
        <div>
            <h1>{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>
        </div>
    )
}

Header.defaultProps = {
    titulo: 'Consejero literario digital'
}

/* class RecommendBook extends React.Component {

    render() {
        return (
            <div>
                <button disabled={!this.props.hayLibros} onClick={this.props.escogerLibro}>Recomendar libro</button>
            </div>
        )
    }
} */

const RecommendBook = (props) => {
    return (
        <div>
            <button disabled={!props.hayLibros} onClick={props.escogerLibro}>Recomendar libro</button>
        </div>
    )
}

/* class Books extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.libros.length ? `Hay ${this.props.libros.length} libros` : 'No hay libros disponibles en este momento'}</p>
                <p><button onClick={this.props.borrarLibros} >Borrar libros</button></p>
                <ul>
                    {this.props.libros.map((libro) => {
                        return <Book key={libro.title} titulo={libro.title} autor={libro.author} />
                    })}
                </ul>
            </div>
        )
    }
} */

const Books = (props) => {
    return (
        <div>
            <p>{props.libros.length ? `Hay ${props.libros.length} libros` : 'No hay libros disponibles en este momento'}</p>
            <p><button onClick={props.borrarLibros} >Borrar libros</button></p>
            <ul>
                {props.libros.map((libro) => {
                    return <Book key={libro.title} titulo={libro.title} autor={libro.author} borrarUnLibro={props.borrarUnLibro} />
                })}
            </ul>
        </div>
    )
}

/* class Book extends React.Component {
    render() {
        return (
            <li>
                {this.props.titulo} / {this.props.autor} <button>x</button>
            </li>
        )
    }
} */

const Book = (props) => {
    return (
        <li>
            {props.titulo} / {props.autor} <button onClick={(e) => {
                props.borrarUnLibro(props.titulo)
            }} >x</button>
        </li>
    )
}

class AddBook extends React.Component {
    constructor(props) {
        super(props)
        this.introducirLibro = this.introducirLibro.bind(this)
        this.state = {
            error: undefined
        }
    }
    introducirLibro(evento) {
        evento.preventDefault()
        const title = evento.target.elements.title.value.trim()
        const author = evento.target.elements.author.value.trim()
        const error = this.props.introducirLibro({ title, author })
        this.setState(() => {
            return { error: error }
        })
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.introducirLibro}>
                    <label htmlFor="title">Título</label>
                    <input type="text" name="title" id="title" />
                    <label htmlFor="author">Autor</label>
                    <input type="text" name="author" id="author" />
                    <button>Añadir libro</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<BooksApp />, document.querySelector('#appRoot'))