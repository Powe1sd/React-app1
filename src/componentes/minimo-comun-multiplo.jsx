// componentes/CalcularMCM.js
import React, { useState } from 'react';

function CalcularMCM2() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [mcm, setMCM] = useState(null);

  const calcularMCM = () => {
    const a = parseInt(num1);
    const b = parseInt(num2);

    if (isNaN(a) || isNaN(b)) return;

    const gcd = (a, b) => b? gcd(b, a % b): a; // Usando un ternario para gcd

    setMCM((a * b) / gcd(a, b)); // Calculando el MCM directamente
  };

  return (
    <div className="card">
      <h2>MCM</h2>
      <input value={num1} onChange={e => setNum1(e.target.value)} placeholder="Número 1" type="number"/> {/* Input type number */}
      <input value={num2} onChange={e => setNum2(e.target.value)} placeholder="Número 2" type="number"/> {/* Input type number */}
      <button onClick={calcularMCM}>Calcular</button>
      {mcm!== null && <div>MCM: {mcm}</div>}
    </div>
  );
}

export default CalcularMCM2;

// App.js (sin cambios)
//... (el código de App.js sigue igual)