import React, { useState } from "react";

function ConversorUnidades1() {
  const [valor, setValor] = useState("");
  const [unidadOrigen, setUnidadOrigen] = useState("Metros");
  const [unidadDestino, setUnidadDestino] = useState("Kilómetros");
  const [resultado, setResultado] = useState(null);

  // Factores de conversión a metros
  const conversiones = {
    Metros: 1,
    Kilómetros: 0.001,
    Millas: 0.000621371,
    Pies: 3.28084,
    Pulgadas: 39.3701,
    Centímetros: 100,
  };

  const convertirUnidades = () => {
    const num = Number(valor);
    if (isNaN(num) || num < 0) {
      alert("Ingrese un número válido y positivo.");
      return;
    }

    // Convertimos a metros primero
    const enMetros = num / conversiones[unidadOrigen];

    // Convertimos a la unidad destino
    const resultadoFinal = enMetros * conversiones[unidadDestino];

    setResultado(resultadoFinal.toFixed(4));
  };

  return (
    <div className="card">
      <p>Conversor de Unidades</p>
      <div className="input-container">
        <input
          type="number"
          placeholder="Ingrese valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <select
          value={unidadOrigen}
          onChange={(e) => setUnidadOrigen(e.target.value)}
        >
          {Object.keys(conversiones).map((unidad) => (
            <option key={unidad} value={unidad}>
              {unidad}
            </option>
          ))}
        </select>
        <span> ➝ </span>
        <select
          value={unidadDestino}
          onChange={(e) => setUnidadDestino(e.target.value)}
        >
          {Object.keys(conversiones).map((unidad) => (
            <option key={unidad} value={unidad}>
              {unidad}
            </option>
          ))}
        </select>
      </div>
      <button onClick={convertirUnidades}>Convertir</button>
      {resultado !== null && (
        <p>
          Resultado: {resultado} {unidadDestino}
        </p>
      )}
    </div>
  );
}

export default ConversorUnidades1;
