import React from 'react';
import InputForm from './InputComponent';

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
    let  secret = this.state.secretNumber.toString();
    for (let i = 0; i < 4; i++) {
      if (guess[i] === secret[i]) {
        bulls++;
      } 
      else if (secret.includes(guess[i])) {
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
      secretNumber: Math.floor(1000 + Math.random() * 9000),
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
        {this.state.attempts < 25 ? 
        (
          <InputForm checkGuess={this.checkGuess} attempts={25-this.state.attempts} />
        ) : 
        (
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
