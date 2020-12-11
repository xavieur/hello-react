class Description extends React.Component {
    render() {
        return <h2>{this.props.texto}</h2>
        /* return <h2>Recomendaciones personalizadas al detalle</h2> */
    }
}

class Header extends React.Component {
    render() {
        return <h1>{this.props.tituloDeMiApp}</h1>
        /* return <h1>Consejero literario digital</h1> */
    }
}

class ChooseBook extends React.Component {
    render() {
        return <button>Recomendar libro</button>
    }
}

class Books extends React.Component {
    render() {
        return <p>Aquí van los libros</p>
    }
}

class AddBook extends React.Component {
    render() {
        return (
            <form action="">
                <label htmlFor="title">Título</label>
                <input type="text" name="title" id="title" />
                <label htmlFor="author">Autor</label>
                <input type="text" name="author" id="author" />
                <button>Añadir libro</button>
            </form>
        )
    }
}

class RemoveBooks extends React.Component {
    render(){
        return <button>{this.props.orden}</button>
    }
}

class ConsejeroApp extends React.Component {
    render(){
        return (
            <div>
                <Header tituloDeMiApp="Librero digital" />
                <Description texto="Te asesoro sobre entidades alfanuméricas" />
                <ChooseBook />
                <RemoveBooks orden="Borrar libros" />
                <Books />
                <AddBook />
            </div>
        )
    }
}

ReactDOM.render(<ConsejeroApp />, document.querySelector('#appRoot'))