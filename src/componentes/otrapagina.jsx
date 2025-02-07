import React from "react";
import { NavLink } from "react-router-dom";
import "./OtraPagina.css"; // Importa el archivo CSS para estilos específicos

const OtraPagina = () => {
  const productos = [
    {
      id: 1,
      nombre: "Producto 1",
      precio: 29000, // Precio en pesos colombianos
      imagen: "https://via.placeholder.com/200",
      descripcion:
        "Descripción del producto 1. Este es un producto fantástico con características increíbles.",
    },
    {
      id: 2,
      nombre: "Producto 2",
      precio: 24000, // Precio en pesos colombianos
      imagen: "https://via.placeholder.com/200",
      descripcion:
        "Descripción del producto 2. Un producto innovador que cambiará tu vida.",
    },
    {
      id: 3,
      nombre: "Producto 3",
      precio: 24000, // Precio en pesos colombianos
      imagen: "https://via.placeholder.com/200",
      descripcion:
        "Descripción del producto 3. La mejor opción para ti. ¡No te arrepentirás!",
    },
    // Agrega más productos aquí
    {
      id: 4,
      nombre: "Producto 4",
      precio: 27000, // Precio en pesos colombianos
      imagen: "https://via.placeholder.com/200",
      descripcion:
        "Descripción del producto 4. La mejor opción para ti. ¡No te arrepentirás!",
    },
    // Agrega más productos aquí
    {
      id: 5,
      nombre: "Producto 5",
      precio: 25000, // Precio en pesos colombianos
      imagen: "https://via.placeholder.com/200",
      descripcion:
        "Descripción del producto 5. La mejor opción para ti. ¡No te arrepentirás!",
    },
    // Agrega más productos aquí
    {
      id: 6,
      nombre: "Producto 6",
      precio: 25000, // Precio en pesos colombianos
      imagen: "https://via.placeholder.com/200",
      descripcion:
        "Descripción del producto 6. La mejor opción para ti. ¡No te arrepentirás!",
    },
    // Agrega más productos aquí
    {
      id: 7,
      nombre: "Producto 7",
      precio: 24000, // Precio en pesos colombianos
      imagen: "https://via.placeholder.com/200",
      descripcion:
        "Descripción del producto 7. La mejor opción para ti. ¡No te arrepentirás!",
    },
    // Agrega más productos aquí
    {
      id: 8,
      nombre: "Producto 8",
      precio: 26000, // Precio en pesos colombianos
      imagen: "https://via.placeholder.com/200",
      descripcion:
        "Descripción del producto 8. La mejor opción para ti. ¡No te arrepentirás!",
    },
    // Agrega más productos aquí
    {
      id: 9,
      nombre: "Producto 9",
      precio: 24000, // Precio en pesos colombianos
      imagen: "https://via.placeholder.com/200",
      descripcion:
        "Descripción del producto 9. La mejor opción para ti. ¡No te arrepentirás!",
    },
  ];

  return (
    <div className="container otra-pagina">
      {/* Clase 'otra-pagina' para estilos específicos */}
      <h1>Tech</h1>
      <div className="productos-grid">
        {/* Grid para mostrar los productos */}
        {productos.map((producto) => (
          <div className="producto" key={producto.id}>
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="producto-imagen"
            />
            <h2 className="producto-nombre">{producto.nombre}</h2>
            <p className="producto-descripcion">{producto.descripcion}</p>
            <p className="producto-precio">
              {new Intl.NumberFormat("es-CO", {
                style: "currency",
                currency: "COP",
                minimumFractionDigits: 0,
              }).format(producto.precio)}
            </p>
            <button className="producto-comprar">Comprar</button>
          </div>
        ))}
      </div>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Volver a la página principal
      </NavLink>
    </div>
  );
};

export default OtraPagina;
