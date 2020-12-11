class BooksApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [
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
        }
    }
    escogerLibro() {
        const indice = Math.floor(Math.random() * this.state.books.length)
        alert(this.state.books[indice].title + ' / ' + this.state.books[indice].author);
    }
    render() {

        const subtitle = 'Te asesoro sobre entidades alfanuméricas'

        return (
            <div>
                <Header subtitulo={subtitle} />
                <RecommendBook />
                <Books libros={this.state.books} />
                <AddBook />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.titulo}</h1>
                <h2>{this.props.subtitulo}</h2>
            </div>
        )
    }
}

Header.defaultProps = {
    titulo: 'Consejero literario digital'
}

class RecommendBook extends React.Component {
    render() {
        return (
            <div>
                <button>Recomendar libro</button>
            </div>
        )
    }
}

class Books extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.libros.length ? `Hay ${this.props.libros.length} libros` : 'No hay libros disponibles en este momento'}</p>
                <p>Aquí van los libros</p>
                <ul>
                    {this.props.libros.map((libro) => {
                        return <Book key={libro.title} titulo={libro.title} />
                    })}
                </ul>
            </div>
        )
    }
}

class Book extends React.Component {
    render() {
        return (
            <li>
                {this.props.titulo}
            </li>
        )
    }
}

class AddBook extends React.Component {
    render() {
        return (
            <form>
                <label htmlFor="title">Título</label>
                <input type="text" name="title" id="title" />
                <label htmlFor="author">Autor</label>
                <input type="text" name="author" id="author" />
                <button>Añadir libro</button>
            </form>
        )
    }
}


ReactDOM.render(<BooksApp />, document.querySelector('#appRoot'))