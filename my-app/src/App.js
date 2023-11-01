import React from 'react';
import Game from './GameComponent';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <Game />
        </div>
      </div>
    </div>
  );
}

export default App;

