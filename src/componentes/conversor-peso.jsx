// componentes/WeightConverter.jsx
import React, { useState } from "react";

function WeightConverter() {
  const [weight, setWeight] = useState("");
  const [fromUnit, setFromUnit] = useState("kg"); // Default from unit: kg
  const [toUnit, setToUnit] = useState("lb"); // Default to unit: lb
  const [result, setResult] = useState(null);

  const convertWeight = () => {
    const numWeight = parseFloat(weight);

    if (isNaN(numWeight)) {
      alert("Por favor, ingresa un valor de peso válido.");
      return;
    }

    // Conversion logic (can be expanded for more units)
    let convertedWeight;
    switch (fromUnit) {
      case "kg":
        convertedWeight =
          toUnit === "lb"
            ? numWeight * 2.20462
            : toUnit === "oz"
            ? numWeight * 35.274
            : numWeight; // to 'kg' - no conversion needed
        break;
      case "lb":
        convertedWeight =
          toUnit === "kg"
            ? numWeight / 2.20462
            : toUnit === "oz"
            ? numWeight * 16
            : numWeight; // to 'lb' - no conversion needed
        break;
      case "oz":
        convertedWeight =
          toUnit === "kg"
            ? numWeight / 35.274
            : toUnit === "lb"
            ? numWeight / 16
            : numWeight; // to 'oz' - no conversion needed
        break;
      default:
        convertedWeight = numWeight; // Default - no conversion
    }

    setResult(convertedWeight.toFixed(2)); // Round to 2 decimal places
  };

  return (
    <div className="card">
      <h2>Conversor de Peso</h2>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Ingresa el peso"
      />

      <div className="unit-selectors">
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          <option value="kg">Kilogramos (kg)</option>
          <option value="lb">Libras (lb)</option>
          <option value="oz">Onzas (oz)</option>
        </select>
        <span> a </span> {/* Just a visual separator */}
        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          <option value="kg">Kilogramos (kg)</option>
          <option value="lb">Libras (lb)</option>
          <option value="oz">Onzas (oz)</option>
        </select>
      </div>

      <button onClick={convertWeight}>Convertir</button>

      {result !== null && (
        <div className="result">
          {weight} {fromUnit} = {result} {toUnit}
        </div>
      )}
    </div>
  );
}

export default WeightConverter;
