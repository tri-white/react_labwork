import React, { useState } from 'react';
import InputForm from './InputComponent';
/*
Створити додаток на реакт згідно варіанту, в якому необхідно обов’язково використати props, state, 
створити мінімум дві компоненти, що мають бути вкладеними.
*/
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secretNumber: Math.floor(1000 + Math.random() * 9000),
      lastResult: '',
      lastGuess: '',
      attempts: 0,
    };
  }


  checkGuess = (guess) => {
    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
      if (guess[i] === this.state.secretNumber[i]) {
        bulls++;
      } 
      else if (this.state.secretNumber.includes(guess[i])) {
        cows++;
      }
    }

    const result = `${bulls}-бик і ${cows}-корови`;
    this.setState({
      lastResult: result,
      lastGuess: guess,
      attempts: this.state.attempts + 1,
    });
  };

  restartGame = () => {
    this.setState({
      secretNumber: this.generateSecretNumber(),
      lastResult: '',
      lastGuess: '',
      attempts: 0,
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <h1 className="display-4">
            Гра "Бики-корови"
        </h1>
        
        <p>
            Останній результат: {this.state.lastResult}
        </p>
          <p>
            Останнє введене число: {this.state.lastGuess}
          </p>
        {this.state.attempts < 25 ? (
          <InputForm checkGuess={this.checkGuess} attempts={25-this.state.attempts} />
        ) : (
          <div>
            <p>Ви програли! Загадане число: {this.state.secretNumber}</p>
            <button className="btn btn-primary" onClick={this.restartGame}>
              Розпочати нову гру
            </button>
          </div>
        )}
      </div>
    );
  }
}


export default Game;
