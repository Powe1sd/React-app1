import React, { useState } from "react";

function Factorial() {
  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularFactorial = () => {
    const num = Number(numero);

    if (!isNaN(num) && num >= 0 && Number.isInteger(num)) {
      let fact = 1;
      for (let i = 2; i <= num; i++) {
        fact *= i;
      }
      setResultado(fact);
    } else {
      alert("Ingrese un número entero positivo válido.");
    }
  };

  return (
    <div className="card">
      <p>Calculadora de Factorial</p>
      <div className="input-container">
        <input
          type="number"
          placeholder="Ingrese un número"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
      </div>
      <button onClick={calcularFactorial}>Calcular</button>
      {resultado !== null && <p>Resultado: {resultado}</p>}
    </div>
  );
}

export default Factorial;
