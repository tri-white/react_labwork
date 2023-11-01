import React, { useState } from 'react';

function InputForm({ checkGuess, attempts }) {
  const [guess, setGuess] = useState('');

  const handleGuessChange = (e) => {
    // Update the guess state as the player types
    setGuess(e.target.value);
  };

  const handleGuessSubmit = (e) => {
    e.preventDefault();
    // When the player submits a guess, call the checkGuess function
    checkGuess(guess);
    // Clear the guess input
    setGuess('');
  };

  return (
    <div>
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
      <p>
        Залишилось cпроб: {attempts}
      </p>
    </div>
  );
}

export default InputForm;
