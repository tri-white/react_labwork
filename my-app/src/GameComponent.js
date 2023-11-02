import React from 'react';
import InputForm from './InputComponent';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secretNumber: this.random4Digits(),
      lastResult: '',
      lastGuess: '',
      attempts: 0,
    };
  }

  random4Digits = () => {
    let res = '';
    let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      const randomDigit = digits.splice(randomIndex, 1)[0];
      res += randomDigit;
    }
  
    return res;
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
      secretNumber: this.random4Digits(),
      lastResult: '',
      lastGuess: '',
      attempts: 0,
    });
  };

  render() {
    return (
      <div className="container mt-5">
  <h1 className="display-4">Гра "Бики-корови"</h1>
  <p>Останній результат: {this.state.lastResult}</p>
  <p>Останнє введене число: {this.state.lastGuess}</p>

  {this.state.attempts < 25 ? (
    <InputForm checkGuess={this.checkGuess} attempts={25 - this.state.attempts} />
  ) : (
    <>
      {this.state.lastGuess === this.state.secretNumber ? (
        <div>
          <p>Ви виграли!</p>
          <button className="btn btn-primary" onClick={this.restartGame}>
            Розпочати нову гру
          </button>
        </div>
      ) : (
        <div>
          <p>Ви програли! Загадане число: {this.state.secretNumber}</p>
          <button className="btn btn-primary" onClick={this.restartGame}>
            Розпочати нову гру
          </button>
        </div>
      )}
    </>
  )}
</div>

    );
  }
}


export default Game;
