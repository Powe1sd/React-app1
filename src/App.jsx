import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Components, SumarNumeros, RestarNumeros } from "./Components";
import DividirNumeros from "./dividir";
import MultiplicarNumeros from "./multiplicar";
import Potencia from "./potencia";
import RaizCuadrada from "./componentes/raizcuadrada";
import Factorial from "./componentes/factorial";
import ConversorTemperatura from "./componentes/ConversorTemperatura";
import ConversorUnidades1 from "./componentes/ConversorUnidades";
import CalcularMCD from "./componentes/maximo-comun-div";
import Fibonacci from "./componentes/serie-num"; // Import the Fibonacci component
import Rounding from "./componentes/redondeo";
import CurrencyConverter from "./componentes/conversor-monedas";
import WeightConverter from "./componentes/conversor-peso";
import TimeConverter from "./componentes/conversor-dias";
import SpeedConverter from "./componentes/conversor-velocidad";
import AreaConverter from "./componentes/conversormetros";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <h1>Aplicación con React</h1>
              <Components />
              <SumarNumeros />
              <RestarNumeros />
              <DividirNumeros />
              <MultiplicarNumeros />
              <Potencia />
              <RaizCuadrada />
              <Factorial />
              <ConversorTemperatura />
              <ConversorUnidades1 />
              <CalcularMCD />
              <Fibonacci /> {/* Use the Fibonacci component */}
              <Rounding />
              <CurrencyConverter />
              <WeightConverter />
              <TimeConverter />
              <SpeedConverter />
              <AreaConverter />
            </div>
          }
        />
        {/*  Route for OtraPagina removed */}
      </Routes>
    </Router>
  );
}

export default App;
