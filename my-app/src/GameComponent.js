import React, { Component, useState, useEffect } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secretNumber: this.generateSecretNumber(),
      lastResult: '',
      lastGuess: '',
      attempts: 0,
    };
  }

  generateSecretNumber() {
    const digits = '0123456789';
    let secret = '';
    while (secret.length < 4) {
      const digit = digits[Math.floor(Math.random() * 10)];
      if (!secret.includes(digit)) {
        secret += digit;
      }
    }
    return secret;
  }

  checkGuess = (guess) => {
    const secretNumber = this.state.secretNumber;
    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
      if (guess[i] === secretNumber[i]) {
        bulls++;
      } else if (secretNumber.includes(guess[i])) {
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
        <h1 className="display-4">Гра "Бики-корови"</h1>
        <p className="lead">Спроб: {this.state.attempts}</p>
        <p>Останній результат: {this.state.lastResult}</p>
        {this.state.lastGuess && (
          <p>Останнє введене число: {this.state.lastGuess}</p>
        )}
        {this.state.attempts < 10 ? (
          <InputForm checkGuess={this.checkGuess} />
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

function InputForm({ checkGuess }) {
  const [guess, setGuess] = useState('');

  const handleGuessChange = (e) => {
    setGuess(e.target.value);
  };

  const handleGuessSubmit = (e) => {
    e.preventDefault();
    checkGuess(guess);
    setGuess('');
  };

  return (
    <form onSubmit={handleGuessSubmit}>
      <input
        type="text"
        className="form-control"
        value={guess}
        onChange={handleGuessChange}
        placeholder="Введіть число"
        maxLength="4"
      />
      <button type="submit" className="btn btn-success">
        Перевірити
      </button>
    </form>
  );
}

export default Game;
