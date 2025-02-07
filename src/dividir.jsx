import React, { useState } from "react";

function DividirNumeros() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(null);

  const manejarDivision = () => {
    const num1 = Number(numero1);
    const num2 = Number(numero2);

    if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
      setResultado(num1 / num2);
    } else if (num2 === 0) {
      alert("No se puede dividir entre 0.");
    } else {
      alert("Por favor, ingrese solo números válidos.");
    }
  };

  const handleChange = (e, setNumero) => {
    const value = e.target.value;
    if (!isNaN(value) || value === "") {
      setNumero(value);
    }
  };

  return (
    <div className="card">
      <p>Dividir dos números</p>
      <div className="input-container">
        <input
          type="number"
          placeholder="Número 1"
          value={numero1}
          onChange={(e) => handleChange(e, setNumero1)}
        />
        <input
          type="number"
          placeholder="Número 2"
          value={numero2}
          onChange={(e) => handleChange(e, setNumero2)}
        />
      </div>
      <button onClick={manejarDivision}>Dividir</button>
      {resultado !== null && <p>Resultado: {resultado}</p>}
    </div>
  );
}

export default DividirNumeros;
