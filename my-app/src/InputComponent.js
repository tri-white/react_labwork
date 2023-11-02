import React, { useState } from 'react';

function InputForm({ checkGuess, attempts }) {
  const [guess, setGuess] = useState('');

  const onGuessChange = (e) => {
    setGuess(e.target.value);
  };

  const onGuessSubmit = (e) => {
    e.preventDefault();
    checkGuess(guess);
  };

  return (
    <div>
      <form onSubmit={onGuessSubmit}>
        <input
          type="text"
          className="form-control"
          value={guess}
          onChange={onGuessChange}
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
