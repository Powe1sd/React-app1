import React, { useState } from "react";

function Potencia() {
  const [base, setBase] = useState("");
  const [exponente, setExponente] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularPotencia = () => {
    const numBase = Number(base);
    const numExponente = Number(exponente);
    
    if (!isNaN(numBase) && !isNaN(numExponente)) {
      setResultado(Math.pow(numBase, numExponente));
    } else {
      alert("Por favor, ingrese solo números válidos.");
    }
  };

  return (
    <div className="card">
      <p>Calculadora de Potencia</p>
      <div className="input-container">
        <input
          type="number"
          placeholder="Base"
          value={base}
          onChange={(e) => setBase(e.target.value)}
        />
        <input
          type="number"
          placeholder="Exponente"
          value={exponente}
          onChange={(e) => setExponente(e.target.value)}
        />
      </div>
      <button onClick={calcularPotencia}>Calcular</button>
      {resultado !== null && <p>Resultado: {resultado}</p>}
    </div>
  );
}

export default Potencia;
