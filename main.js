import { createElement, render, Component} from './toy-react.js';

for(let i of [1, 2, 3]) {
    console.log(i)
}

class MyComponent extends Component {
    constructor(){
        super();
        this.state = {
            a: 1,
            b: 2
        }
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        this.setState({a: this.state.a + 1})
    }
    render() {
        console.log(this.state.a)
        return <div>
            <h1>my Component</h1>
            <button onClick={this.onClick}>add</button>
            <span>{this.state.a.toString()}</span>
        </div>
    }
}

render(<MyComponent id="a" class="c">
    <div>abc</div>
    <div></div>
    <div></div>
    <div></div>
</MyComponent>, document.body)