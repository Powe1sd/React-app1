import React, { useState } from "react";

function DecimalBinario() {
  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState(null);

  const convertirABinario = () => {
    const num = Number(numero);

    if (!isNaN(num) && Number.isInteger(num) && num >= 0) {
      setResultado(num.toString(2)); // Convierte a binario
    } else {
      alert("Ingrese un número entero positivo válido.");
    }
  };

  return (
    <div className="card">
      <p>Conversor Decimal a Binario</p>
      <div className="input-container">
        <input
          type="number"
          placeholder="Ingrese un número"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
      </div>
      <button onClick={convertirABinario}>Convertir</button>
      {resultado !== null && <p>Resultado: {resultado}</p>}
    </div>
  );
}

export default DecimalBinario;
