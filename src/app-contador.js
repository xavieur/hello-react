class CounterApp extends React.Component {
    constructor(props) {
        super(props)
        this.incrementar = this.incrementar.bind(this)
        this.decrementar = this.decrementar.bind(this)
        this.resetear = this.resetear.bind(this)

        this.state = {
            count: 1
        }
    }
    incrementar() {
        console.log('incrementar');
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    decrementar() {
        console.log('decrementar');
        this.count = this.count - 1
    }
    resetear() {
        console.log('resetear');
        this.count = 0
    }
    render() {
        return (
            <div>
                <h1>Contador</h1>
                <p>{this.state.count}</p>
                <button onClick={this.incrementar}>+1</button>
                <button onClick={this.decrementar}>-1</button>
                <button onClick={this.resetear}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<CounterApp />, document.querySelector('#appRoot'))