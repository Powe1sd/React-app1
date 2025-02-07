import React from "react"; // Importa la librería React, necesaria para crear componentes.

import { // Importa componentes específicos de react-router-dom
  BrowserRouter as Router, // El componente principal que habilita el enrutamiento en la app.
  Routes, // Contenedor para las diferentes rutas.
  Route, // Define una ruta individual.
  NavLink, // Un tipo especial de Link que permite aplicar estilos al enlace activo.
} from "react-router-dom";

import OtraPagina from "./componentes/otrapagina"; // Importa el componente OtraPagina desde su archivo.
import { Components, SumarNumeros, RestarNumeros } from "./Components"; // Importa otros componentes desde "./Components"
import DividirNumeros from "./dividir"; // Importa el componente DividirNumeros desde "./dividir"
import MultiplicarNumeros from "./multiplicar"; // Importa el componente MultiplicarNumeros desde "./multiplicar"
import Potencia from "./potencia"; // Importa el componente Potencia desde "./potencia"
import RaizCuadrada from "./componentes/raizcuadrada"; // Importa el componente RaizCuadrada desde "./componentes/raizcuadrada"
import Factorial from "./componentes/factorial"; // Importa el componente Factorial desde "./componentes/factorial"
import DecimalBinario from "./componentes/decimalpromedio"; // Importa el componente DecimalBinario desde "./componentes/decimalpromedio"
import ConversorTemperatura from "./componentes/ConversorTemperatura"; // Importa el componente ConversorTemperatura desde "./componentes/ConversorTemperatura"
import ConversorUnidades1 from "./componentes/ConversorUnidades"; // Importa el componente ConversorUnidades1 desde "./componentes/ConversorUnidades"
import "./App.css"; // Importa los estilos CSS desde el archivo App.css.

function App() { // Define el componente funcional App.
  return ( // El componente retorna JSX (JavaScript XML).
    <Router> {/* Envuelve la app con el componente Router para habilitar el enrutamiento. */}
      <Routes> {/* Contenedor para las diferentes rutas. */}
        <Route // Define una ruta específica.
          path="/" // La ruta para esta página (la principal).
          element={ // El elemento que se renderiza cuando se accede a esta ruta.
            <div className="container"> {/* Un div con la clase "container" para estilos. */}
              <h1>Aplicación con React</h1> {/* Un encabezado. */}
              <Components /> {/* Renderiza el componente Components. */}
              <SumarNumeros /> {/* Renderiza el componente SumarNumeros. */}
              <RestarNumeros /> {/* Renderiza el componente RestarNumeros. */}
              <DividirNumeros /> {/* Renderiza el componente DividirNumeros. */}
              <MultiplicarNumeros /> {/* Renderiza el componente MultiplicarNumeros. */}
              <Potencia /> {/* Renderiza el componente Potencia. */}
              <RaizCuadrada /> {/* Renderiza el componente RaizCuadrada. */}
              <Factorial /> {/* Renderiza el componente Factorial. */}
              <ConversorTemperatura /> {/* Renderiza el componente ConversorTemperatura. */}
              <ConversorUnidades1 /> {/* Renderiza el componente ConversorUnidades1. */}
              <NavLink // Un enlace de navegación a otra página.
                to="/otrapagina" // La ruta a la que enlaza.
                className={({ isActive }) => // Función para asignar clases CSS según si el enlace está activo o no.
                  isActive? "nav-link active": "nav-link" // Si está activo, usa "nav-link active", si no, solo "nav-link".
                }
              >
                Ir a Otra Página {/* El texto del enlace. */}
              </NavLink>
            </div>
          }
        />
        <Route path="/otrapagina" element={<OtraPagina />} /> {/* Define la ruta para /otrapagina y el componente a renderizar. */}
      </Routes>
    </Router>
  );
}

export default App; // Exporta el componente App para que pueda ser usado en otros archivos.