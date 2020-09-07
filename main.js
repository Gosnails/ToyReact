import { createElement, render, Component} from './toy-react.js';

for(let i of [1, 2, 3]) {
    console.log(i)
}

class MyComponent extends Component {
    render() {
        return <div>
            <h1>my Component</h1>
            {this.children}
        </div>
    }
}

render(<MyComponent id="a" class="c">
    <div>abc</div>
    <div></div>
    <div></div>
    <div></div>
</MyComponent>, document.body)