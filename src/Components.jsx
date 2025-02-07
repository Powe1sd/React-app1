import React, { useState } from "react";

// Componente de saludo
function Components() {
  const [nombre, setNombre] = useState("");

  return (
    <div className="card">
      <p>Este es un componente básico con Vite</p>
      <div className="input-container">
        <input
          type="text"
          placeholder="Escribe tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <button onClick={() => alert(`Hola, ${nombre}!`)}>Saludar</button>
    </div>
  );
}

// Componente de suma
function SumarNumeros() {
  const [numero1, setNumero1] = useState();
  const [numero2, setNumero2] = useState();
  const [resultado, setResultado] = useState(null);

  const manejarSuma = () => {
    setResultado(numero1 + numero2);
  };

  return (
    <div className="card">
      <p>Sumar dos números</p>
      <div className="input-container">
        <input
          type="number"
          placeholder="Número 1"
          value={numero1}
          onChange={(e) => setNumero1(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Número 2"
          value={numero2}
          onChange={(e) => setNumero2(Number(e.target.value))}
        />
      </div>
      <button onClick={manejarSuma}>Sumar</button>
      {resultado !== null && <p>Resultado: {resultado}</p>}
    </div>
  );
}

// Componente de resta
function RestarNumeros() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(null);

  const manejarResta = () => {
    const num1 = Number(numero1);
    const num2 = Number(numero2);
    if (!isNaN(num1) && !isNaN(num2)) {
      setResultado(num1 - num2);
    } else {
      alert("Por favor, ingrese solo números válidos.");
    }
  };

  const handleChange = (e, setNumero) => {
    // Solo permitimos valores numéricos
    const value = e.target.value;
    if (!isNaN(value) || value === "") {
      setNumero(value);
    }
  };

  return (
    <div className="card">
      <p>Restar dos números</p>
      <div className="input-container">
        <input
          type="number" // Cambié esto de text a number
          placeholder="Número 1"
          value={numero1}
          onChange={(e) => handleChange(e, setNumero1)}
        />
        <input
          type="number" // Cambié esto de text a number
          placeholder="Número 2"
          value={numero2}
          onChange={(e) => handleChange(e, setNumero2)}
        />
      </div>
      <button onClick={manejarResta}>Restar</button>
      {resultado !== null && <p>Resultado: {resultado}</p>}
    </div>
  );
}

// Exportamos ambos componentes
export { Components, SumarNumeros, RestarNumeros };
