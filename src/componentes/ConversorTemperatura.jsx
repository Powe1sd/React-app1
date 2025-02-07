import React, { useState } from "react";

function ConversorTemperatura() {
  const [temperatura, setTemperatura] = useState("");
  const [unidadOrigen, setUnidadOrigen] = useState("Celsius");
  const [unidadDestino, setUnidadDestino] = useState("Fahrenheit");
  const [resultado, setResultado] = useState(null);

  const convertirTemperatura = () => {
    const temp = Number(temperatura);

    if (isNaN(temp)) {
      alert("Ingrese un valor numérico válido.");
      return;
    }

    let resultadoConvertido;

    if (unidadOrigen === "Celsius") {
      if (unidadDestino === "Fahrenheit") {
        resultadoConvertido = (temp * 9) / 5 + 32;
      } else if (unidadDestino === "Kelvin") {
        resultadoConvertido = temp + 273.15;
      } else {
        resultadoConvertido = temp;
      }
    } else if (unidadOrigen === "Fahrenheit") {
      if (unidadDestino === "Celsius") {
        resultadoConvertido = ((temp - 32) * 5) / 9;
      } else if (unidadDestino === "Kelvin") {
        resultadoConvertido = ((temp - 32) * 5) / 9 + 273.15;
      } else {
        resultadoConvertido = temp;
      }
    } else if (unidadOrigen === "Kelvin") {
      if (unidadDestino === "Celsius") {
        resultadoConvertido = temp - 273.15;
      } else if (unidadDestino === "Fahrenheit") {
        resultadoConvertido = ((temp - 273.15) * 9) / 5 + 32;
      } else {
        resultadoConvertido = temp;
      }
    }

    setResultado(resultadoConvertido.toFixed(2));
  };

  return (
    <div className="card">
      <p>Conversor de Temperatura</p>
      <div className="input-container">
        <input
          type="number"
          placeholder="Ingrese temperatura"
          value={temperatura}
          onChange={(e) => setTemperatura(e.target.value)}
        />
        <select
          value={unidadOrigen}
          onChange={(e) => setUnidadOrigen(e.target.value)}
        >
          <option value="Celsius">Celsius (°C)</option>
          <option value="Fahrenheit">Fahrenheit (°F)</option>
          <option value="Kelvin">Kelvin (K)</option>
        </select>
        <span> ➝ </span>
        <select
          value={unidadDestino}
          onChange={(e) => setUnidadDestino(e.target.value)}
        >
          <option value="Celsius">Celsius (°C)</option>
          <option value="Fahrenheit">Fahrenheit (°F)</option>
          <option value="Kelvin">Kelvin (K)</option>
        </select>
      </div>
      <button onClick={convertirTemperatura}>Convertir</button>
      {resultado !== null && <p>Resultado: {resultado}°</p>}
    </div>
  );
}

export default ConversorTemperatura;
