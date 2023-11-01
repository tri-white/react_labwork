import React, { useState } from 'react';

function InputForm({ checkGuess, attempts }) {
  // useState is a React hook used to manage state in functional components.
  // Here, it is used to create a state variable 'guess' and a function 'setGuess'
  // to manage and update the state of the user's guess input.
  const [guess, setGuess] = useState('');

  const onGuessChange = (e) => {
    // This event handler function 'onGuessChange' is called when the user types
    // in the input field. It updates the 'guess' state with the current value
    // of the input field, making it reactive to user input.
    setGuess(e.target.value);
  };

  const onGuessSubmit = (e) => {
    e.preventDefault();
    // This event handler function 'onGuessSubmit' is called when the user submits
    // their guess. It prevents the default form submission behavior and then
    // calls the 'checkGuess' function passed as a prop with the current 'guess'.
    // After that, it clears the 'guess' input field by setting it to an empty string.
    checkGuess(guess);
    setGuess('');
  };

  return (
    <div>
      <form onSubmit={onGuessSubmit}>
        <input
          type="text"
          className="form-control"
          value={guess}
          // 'value={guess}' binds the value of the input field to the 'guess' state.
          // This means that the input field will display the value stored in 'guess'.
          onChange={onGuessChange}
          // 'onChange' is an event handler that listens for changes in the input field.
          // When the user types or modifies the input, 'onGuessChange' is called,
          // and it updates the 'guess' state with the current value of the input.
          placeholder="Введіть число"
          maxLength="4"
        />
        <button type="submit" className="btn btn-success">
          Перевірити
        </button>
      </form>
      <p>
        Залишилось cпроб: {attempts}
        // This line displays the number of remaining attempts, which is passed as a prop.
      </p>
    </div>
  );
}

export default InputForm;
