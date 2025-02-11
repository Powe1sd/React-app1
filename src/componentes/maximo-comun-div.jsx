import React, { useState } from 'react';

function CalcularMCD() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [mcd, setMCD] = useState(null);

  const calcularMCD = () => {
    let a = parseInt(num1);
    let b = parseInt(num2);

    if (isNaN(a) || isNaN(b)) {
      alert('Por favor, ingresa números válidos.');
      return;
    }

    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }

    setMCD(a);
  };

  return (
    <div className="card">
      <h2>Máximo Común Divisor (MCD)</h2>
      <div className="input-container">
        <label>Número 1: </label>
        <input type="text" value={num1} onChange={(e) => setNum1(e.target.value)} />
      </div>
      <div className="input-container">
        <label>Número 2: </label>
        <input type="text" value={num2} onChange={(e) => setNum2(e.target.value)} />
      </div>
      <button onClick={calcularMCD}>Calcular MCD</button>

      {mcd !== null && (
        <div>
          El MCD de {num1} y {num2} es: {mcd}
        </div>
      )}
    </div>
  );
}

export default CalcularMCD;