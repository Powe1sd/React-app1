import React, { useState } from "react";

function AreaConverter() {
  const [area, setArea] = useState("");
  const [fromUnit, setFromUnit] = useState("m2"); // Default from unit: square meters
  const [toUnit, setToUnit] = useState("ha"); // Default to unit: hectares
  const [result, setResult] = useState(null);

  const convertArea = () => {
    const numArea = parseFloat(area);

    if (isNaN(numArea) || numArea < 0) {
      alert("Por favor, ingresa un valor de área válido y positivo.");
      return;
    }

    // Conversion rates
    const conversionRates = {
      m2: { ha: 1 / 10000, ft2: 10.7639, m2: 1 },
      ha: { m2: 10000, ft2: 107639, ha: 1 },
      ft2: { m2: 1 / 10.7639, ha: 1 / 107639, ft2: 1 },
    };

    // Convert
    const convertedArea = numArea * (conversionRates[fromUnit][toUnit] || 1);
    setResult(convertedArea.toFixed(6));
  };

  return (
    <div className="card">
      <h2>Conversor de Área</h2>
      <input
        type="number"
        value={area}
        onChange={(e) => setArea(e.target.value)}
        placeholder="Ingresa el área"
        min="0"
      />

      <div className="unit-selectors">
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          <option value="m2">Metros cuadrados (m²)</option>
          <option value="ha">Hectáreas (ha)</option>
          <option value="ft2">Pies cuadrados (ft²)</option>
        </select>

        <span> a </span>

        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          <option value="m2">Metros cuadrados (m²)</option>
          <option value="ha">Hectáreas (ha)</option>
          <option value="ft2">Pies cuadrados (ft²)</option>
        </select>
      </div>

      <button onClick={convertArea}>Convertir</button>

      {result !== null && (
        <div className="result">
          {area} {fromUnit} = {result} {toUnit}
        </div>
      )}
    </div>
  );
}

export default AreaConverter;
