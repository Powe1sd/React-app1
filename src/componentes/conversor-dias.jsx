// componentes/TimeConverter.jsx
import React, { useState } from 'react';

function TimeConverter() {
  const [time, setTime] = useState('');
  const [fromUnit, setFromUnit] = useState('days'); // Default from unit: days
  const [toUnit, setToUnit] = useState('hours');   // Default to unit: hours
  const [result, setResult] = useState(null);

  const convertTime = () => {
    const numTime = parseFloat(time);

    if (isNaN(numTime)) {
      alert('Por favor, ingresa un valor de tiempo válido.');
      return;
    }

    // Conversion logic
    let convertedTime;
    switch (fromUnit) {
      case 'days':
        convertedTime = toUnit === 'hours' 
        ? numTime * 24 
        : toUnit === 'minutes'
        ? numTime * 24 * 60
        : toUnit === 'seconds'
        ? numTime * 24 * 60 * 60
        : numTime; // to days - no conversion needed
        break;
      case 'hours':
        convertedTime = toUnit === 'days'
        ? numTime / 24
        : toUnit === 'minutes'
        ? numTime * 60
        : toUnit === 'seconds'
        ? numTime * 60 * 60
        : numTime; // to hours - no conversion needed
        break;
      case 'minutes':
        convertedTime = toUnit === 'days'
        ? numTime / (24 * 60)
        : toUnit === 'hours'
        ? numTime / 60
        : toUnit === 'seconds'
        ? numTime * 60
        : numTime; // to minutes - no conversion needed
        break;
      case 'seconds':
        convertedTime = toUnit === 'days'
        ? numTime / (24 * 60 * 60)
        : toUnit === 'hours'
        ? numTime / (60 * 60)
        : toUnit === 'minutes'
        ? numTime / 60
        : numTime; // to seconds - no conversion needed
        break;
      default:
        convertedTime = numTime; // Default - no conversion
    }

    setResult(convertedTime.toFixed(2));
  };

  return (
    <div className="card">
      <h2>Conversor de Tiempo</h2>
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Ingresa el tiempo"
      />

      <div className="unit-selectors">
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          <option value="days">Días</option>
          <option value="hours">Horas</option>
          <option value="minutes">Minutos</option>
          <option value="seconds">Segundos</option>
        </select>

        <span> a </span>

        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          <option value="days">Días</option>
          <option value="hours">Horas</option>
          <option value="minutes">Minutos</option>
          <option value="seconds">Segundos</option>
        </select>
      </div>

      <button onClick={convertTime}>Convertir</button>

      {result!== null && (
        <div className="result">
          {time} {fromUnit} = {result} {toUnit}
        </div>
      )}
    </div>
  );
}

export default TimeConverter;