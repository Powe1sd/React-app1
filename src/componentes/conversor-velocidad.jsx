// componentes/SpeedConverter.jsx
import React, { useState } from 'react';

function SpeedConverter() {
  const [speed, setSpeed] = useState('');
  const [fromUnit, setFromUnit] = useState('km/h'); // Default from unit: km/h
  const [toUnit, setToUnit] = useState('m/s');     // Default to unit: m/s
  const [result, setResult] = useState(null);

  const convertSpeed = () => {
    const numSpeed = parseFloat(speed);

    if (isNaN(numSpeed)) {
      alert('Por favor, ingresa un valor de velocidad válido.');
      return;
    }

    // Conversion logic
    let convertedSpeed;
    switch (fromUnit) {
      case 'km/h':
        convertedSpeed = toUnit === 'm/s'
        ? numSpeed / 3.6
        : toUnit === 'mph'
        ? numSpeed / 1.60934
        : numSpeed; // to km/h - no conversion needed
        break;
      case 'm/s':
        convertedSpeed = toUnit === 'km/h'
        ? numSpeed * 3.6
        : toUnit === 'mph'
        ? numSpeed * 2.23694
        : numSpeed; // to m/s - no conversion needed
        break;
      case 'mph':
        convertedSpeed = toUnit === 'km/h'
        ? numSpeed * 1.60934
        : toUnit === 'm/s'
        ? numSpeed / 2.23694
        : numSpeed; // to mph - no conversion needed
        break;
      default:
        convertedSpeed = numSpeed; // Default - no conversion
    }

    setResult(convertedSpeed.toFixed(2));
  };

  return (
    <div className="card">
      <h2>Conversor de Velocidad</h2>
      <input
        type="number"
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
        placeholder="Ingresa la velocidad"
      />

      <div className="unit-selectors">
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          <option value="km/h">Kilómetros por hora (km/h)</option>
          <option value="m/s">Metros por segundo (m/s)</option>
          <option value="mph">Millas por hora (mph)</option>
        </select>

        <span> a </span>

        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          <option value="km/h">Kilómetros por hora (km/h)</option>
          <option value="m/s">Metros por segundo (m/s)</option>
          <option value="mph">Millas por hora (mph)</option>
        </select>
      </div>

      <button onClick={convertSpeed}>Convertir</button>

      {result!== null && (
        <div className="result">
          {speed} {fromUnit} = {result} {toUnit}
        </div>
      )}
    </div>
  );
}

export default SpeedConverter;