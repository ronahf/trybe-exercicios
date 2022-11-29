import React from 'react';
import './App.css';

class App extends React.Component {
  // constructor(){
  //   super()
  //   this.handleClick = this.handleClick.bind(this)
  // }

  //usando arrow function, aí não precisa usar bind no constructor.
  handleClick1 = () => {
    // Essa chamada ao `this` retorna `undefined`? !
    console.log(this)
    console.log('Clicou1')
  }

  handleClick2 = () => {
    // Essa chamada ao `this` retorna `undefined`? !
    console.log(this)
    console.log('Clicou2')
  }

  handleClick3 = () => {
    // Essa chamada ao `this` retorna `undefined`? !
    console.log(this)
    console.log('Clicou3')
  }

  render() {
    // Já essa chamada ao `this`, feita de dentro da função `render`, retorna o objeto que esperamos
    console.log(this)
    return (
    <div>
    <button onClick={this.handleClick1}>Meu botão1</button>
    <button onClick={this.handleClick2}>Meu botão2</button>
    <button onClick={this.handleClick3}>Meu botão3</button>
    </div>
  )}
}

export default App;