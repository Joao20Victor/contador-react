import React, { useState } from 'react';
import './App.css';

function App() {
  const  [numero, setnumero] = useState(0)
  function aumentar(){
    setnumero(numero+1)
  }
  function diminuir() {
    setnumero(numero-1)
  }
  function nada (){
    setnumero (numero - numero)
  }

  return (
    <div>
      <h1>contador</h1>
      <button onClick={aumentar}>+</button>
      <button onClick={diminuir}>-</button>
      <button onClick={nada}>0</button>
      <p>{numero}</p>
    </div>
  )
}

export default App;
