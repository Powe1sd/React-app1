// componentes/Factorizar.jsx
import React, { useState } from "react";
import * as math from "mathjs";

function Factorizar() {
  const [expression, setExpression] = useState("");
  const [factored, setFactored] = useState(null);
  const [error, setError] = useState(null);

  const factorize = () => {
    setError(null);
    try {
      let simplified = expression.replace(/\s/g, ""); // Remove all spaces
      simplified = simplified.replace(/([0-9])([a-zA-Z])/g, "$1*$2"); // Add * where needed
      simplified = simplified.replace(/\^/g, "**"); // change ^ to **

      const factored = math.factor(simplified);

      if (factored) {
        let factoredString = factored.toString();
        // Check if the factored result is a 'Matrix' type (common with math.js)
        if (factored instanceof math.Matrix) {
          factoredString = factored.toArray().join("*");
        }
        setFactored(factoredString); // Display the possibly modified string
      } else {
        setError(
          "No se pudo factorizar.  Verifica la expresión o usa una forma más simple."
        );
        setFactored(null); // Reset factored if there's an error
      }
    } catch (err) {
      setError(
        "Error al factorizar. Verifica la expresión (math.js).  Asegúrate de usar * para multiplicación (ej: 6*x not 6x)"
      );
      setFactored(null); // Reset factored if there's an error
      console.error("Math.js Error:", err);
    }
  };

  return (
    <div className="card">
      <h2>Factorizar Expresión</h2>
      <input
        type="text"
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
        placeholder="Ej: 6*x^2+11*x+3 o a+b o 2*x+4*y" // Example with *
      />
      <button onClick={factorize}>Factorizar</button>
      {error && <div className="error-message">{error}</div>}
      {factored && <div className="factored-result">Resultado: {factored}</div>}
    </div>
  );
}

export default Factorizar;
