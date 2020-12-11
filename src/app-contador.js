class CounterApp extends React.Component {
    constructor(props) {
        super(props)
        this.incrementar = this.incrementar.bind(this)
        this.decrementar = this.decrementar.bind(this)
        this.resetear = this.resetear.bind(this)

        this.state = {
            contador: props.empezandoPor
        }
    }
    incrementar() {
        console.log('incrementar');
        this.setState((estadoPrevio) => {
            return {
                contador: estadoPrevio.contador + 1
            }
        })
    }
    decrementar() {
        console.log('decrementar');
        this.setState((estadoPrevio) => {
            return {
                contador: estadoPrevio.contador - 1
            }
        })
    }
    resetear() {
        console.log('resetear');
        this.setState(() => {
            return {
                contador: 0
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Contador</h1>
                <p>{this.state.contador}</p>
                <button onClick={this.incrementar}>+1</button>
                <button onClick={this.decrementar}>-1</button>
                <button onClick={this.resetear}>reset</button>
            </div>
        )
    }
}

CounterApp.defaultProps = {
    empezandoPor: 0
}

ReactDOM.render(<CounterApp empezandoPor={10} />, document.querySelector('#appRoot'))