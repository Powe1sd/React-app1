import React, { useState } from "react";

function RaizCuadrada() {
  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularRaiz = () => {
    const num = Number(numero);

    if (!isNaN(num) && num >= 0) {
      setResultado(Math.sqrt(num));
    } else {
      alert("Ingrese un número válido (mayor o igual a 0).");
    }
  };

  return (
    <div className="card">
      <p>Calculadora de Raíz Cuadrada</p>
      <div className="input-container">
        <input
          type="number"
          placeholder="Ingrese un número"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
      </div>
      <button onClick={calcularRaiz}>Calcular</button>
      {resultado !== null && <p>Resultado: {resultado}</p>}
    </div>
  );
}

export default RaizCuadrada;
