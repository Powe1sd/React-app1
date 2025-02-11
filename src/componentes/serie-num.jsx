// componentes/Fibonacci.jsx
import React, { useState } from "react";

function Fibonacci() {
  const [n, setN] = useState(""); // Number of terms to generate
  const [fibonacciSeries, setFibonacciSeries] = useState([]);

  const generateFibonacci = () => {
    if (isNaN(n) || n < 0) {
      alert("Por favor, ingresa un número válido (no negativo).");
      return;
    }

    const series = [];
    if (n > 0) {
      let a = 0;
      let b = 1;

      if (n >= 1) series.push(a);
      if (n >= 2) series.push(b);

      for (let i = 2; i < n; i++) {
        const next = a + b;
        series.push(next);
        a = b;
        b = next;
      }
    }

    setFibonacciSeries(series);
  };

  return (
    <div className="card">
      <h2>Serie de Fibonacci</h2>
      <label htmlFor="n">Número de términos:</label>
      <input
        type="number"
        id="n"
        value={n}
        onChange={(e) => setN(parseInt(e.target.value) || 0)} // Allow empty input
        min="0" // Set minimum to 0
      />
      <button onClick={generateFibonacci}>Generar</button>
      <div className="fibonacci-series">
        {fibonacciSeries.length > 0 ? (
          fibonacciSeries.map((term, index) => (
            <span key={index}>
              {term}
              {index < fibonacciSeries.length - 1 ? ", " : ""}
            </span>
          ))
        ) : (
          <p>{n > 0 ? "Genera la serie" : "Ingresa un número de términos"}</p>
        )}
      </div>
    </div>
  );
}

export default Fibonacci;
