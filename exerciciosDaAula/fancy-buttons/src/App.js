import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);

    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    };
  }

  handleButtonOne() {
    this.setState((prevState) => ({
      clicksBtnOne: prevState.clicksBtnOne + 1,
    }));
    console.log(this);
  }

  handleButtonTwo() {
    this.setState((prevState) => ({
      clicksBtnTwo: prevState.clicksBtnTwo + 1,
    }));
    console.log(this);
  }

  handleButtonThree() {
    this.setState((prevState) => ({
      clicksBtnThree: prevState.clicksBtnThree + 1,
    }));
    console.log(this);
  }

render() {
  const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
  return (
    <div>
      <button
        type="button"
        onClick={ this.handleButtonOne }
      >
        {`Cliques no botão 1: ${clicksBtnOne}`}
      </button>
      <button 
        type="button"
        onClick={ this.handleButtonTwo }
      >
        {`Cliques no botão 2: ${clicksBtnTwo}`}
      </button>
      <button 
        type="button"
        onClick={ this.handleButtonThree }
      >
        {`Cliques no botão 3: ${clicksBtnThree}`}
      </button>
    </div>
  );
}
}

export default App;