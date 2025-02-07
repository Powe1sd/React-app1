import React from "react";
import { NavLink } from "react-router-dom";
import "./OtraPagina.css"; // Importa el archivo CSS para estilos específicos
const OtraPagina = () => {
  const productos = [
    {
      id: 1,
      nombre: "Producto 1",
      precio: 29.99,
      imagen: "https://via.placeholder.com/200", // Reemplaza con la URL de tu imagen
      descripcion:
        "Descripción del producto 1. Este es un producto fantástico con características increíbles.",
    },
    {
      id: 2,
      nombre: "Producto 2",
      precio: 49.99,
      imagen: "https://via.placeholder.com/200", // Reemplaza con la URL de tu imagen
      descripcion:
        "Descripción del producto 2. Un producto innovador que cambiará tu vida.",
    },
    {
      id: 3,
      nombre: "Producto 3",
      precio: 19.99,
      imagen: "https://via.placeholder.com/200", // Reemplaza con la URL de tu imagen
      descripcion:
        "Descripción del producto 3. La mejor opción para ti. ¡No te arrepentirás!",
    },
    // Agrega más productos aquí
    {
      id: 3,
      nombre: "Producto 3",
      precio: 19.99,
      imagen: "https://via.placeholder.com/200", // Reemplaza con la URL de tu imagen
      descripcion:
        "Descripción del producto 3. La mejor opción para ti. ¡No te arrepentirás!",
    },
    // Agrega más productos aquí
    {
      id: 3,
      nombre: "Producto 3",
      precio: 19.99,
      imagen: "https://via.placeholder.com/200", // Reemplaza con la URL de tu imagen
      descripcion:
        "Descripción del producto 3. La mejor opción para ti. ¡No te arrepentirás!",
    },
    // Agrega más productos aquí
    {
      id: 3,
      nombre: "Producto 3",
      precio: 19.99,
      imagen: "https://via.placeholder.com/200", // Reemplaza con la URL de tu imagen
      descripcion:
        "Descripción del producto 3. La mejor opción para ti. ¡No te arrepentirás!",
    },
    // Agrega más productos aquí
    {
      id: 3,
      nombre: "Producto 3",
      precio: 19.99,
      imagen: "https://via.placeholder.com/200", // Reemplaza con la URL de tu imagen
      descripcion:
        "Descripción del producto 3. La mejor opción para ti. ¡No te arrepentirás!",
    },
    // Agrega más productos aquí
    {
      id: 3,
      nombre: "Producto 3",
      precio: 19.99,
      imagen: "https://via.placeholder.com/200", // Reemplaza con la URL de tu imagen
      descripcion:
        "Descripción del producto 3. La mejor opción para ti. ¡No te arrepentirás!",
    },
    // Agrega más productos aquí
    {
      id: 3,
      nombre: "Producto 3",
      precio: 19.99,
      imagen: "https://via.placeholder.com/200", // Reemplaza con la URL de tu imagen
      descripcion:
        "Descripción del producto 3. La mejor opción para ti. ¡No te arrepentirás!",
    },
    // Agrega más productos aquí
  ];

  return (
    <div className="container otra-pagina">
      {" "}
      {/* Clase 'otra-pagina' para estilos específicos */}
      <h1>Tech</h1>
      <div className="productos-grid">
        {" "}
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
              ${producto.precio.toFixed(2)}
            </p>{" "}
            {/* Precio con 2 decimales */}
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
