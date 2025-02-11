// componentes/Rounding.jsx
import React, { useState } from "react";

function Rounding() {
  const [number, setNumber] = useState("");
  const [precision, setPrecision] = useState(""); // Default precision: 0 (integer)
  const [roundedNumber, setRoundedNumber] = useState(null);
  const [truncatedNumber, setTruncatedNumber] = useState(null);

  const handleRounding = () => {
    const num = parseFloat(number); // Parse input as float
    const prec = parseInt(precision); // Parse precision as integer

    if (isNaN(num)) {
      alert("Por favor, ingresa un número válido.");
      return;
    }

    if (isNaN(prec) || prec < 0) {
      alert("Por favor, ingresa una precisión válida (entero no-negativo).");
      return;
    }

    setRoundedNumber(num.toFixed(prec)); // Use toFixed for rounding
    setTruncatedNumber(truncate(num, prec));
  };

  const truncate = (number, decimals) => {
    const factor = Math.pow(10, decimals);
    return Math.floor(number * factor) / factor;
  };

  return (
    <div className="card">
      <h2>Redondeo y Truncado</h2>
      <label htmlFor="number">Número:</label>
      <input
        type="number"
        id="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        step="any" // Allow decimal numbers
      />

      <label htmlFor="precision">Precisión:</label>
      <input
        type="number"
        id="precision"
        value={precision}
        onChange={(e) => setPrecision(parseInt(e.target.value) || 0)} // Allow for empty input, default to 0
        min="0"
      />

      <button onClick={handleRounding}>Calcular</button>

      {roundedNumber !== null && (
        <div className="result">Redondeado: {roundedNumber}</div>
      )}

      {truncatedNumber !== null && (
        <div className="result">Truncado: {truncatedNumber}</div>
      )}
    </div>
  );
}

export default Rounding;
