import React, { useState } from "react";

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

export default Components;
