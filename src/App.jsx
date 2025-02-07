import React from "react";
import { Components, SumarNumeros, RestarNumeros } from "./Components"; // Importamos ambos componentes

import DividirNumeros from "./dividir";
import MultiplicarNumeros from "./multiplicar";
import Potencia from "./potencia";
import RaizCuadrada from "./componentes/raizcuadrada";
import Factorial from "./componentes/factorial";
import DecimalBinario from "./componentes/decimalpromedio";
import ConversorTemperatura from "./componentes/ConversorTemperatura";
import ConversorUnidades1 from "./componentes/ConversorUnidades";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Aplicación con React</h1>
      <Components /> {/* Componente de saludo */}
      <SumarNumeros /> {/* Componente de suma */}
      <RestarNumeros />
      <DividirNumeros /> {/* Agregamos el componente de dividir */}
      <MultiplicarNumeros />
      <Potencia />
      <RaizCuadrada></RaizCuadrada>
      <Factorial></Factorial>
      <ConversorTemperatura />
      <ConversorUnidades1 />
    </div>
  );
}

export default App;
