import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState.jsx";
import "./NuevaTransaccionStyles.css";

const NuevaTransaccion = () => {
  const [texto, setTexto] = useState("");
  const [cantidad, setCantidad] = useState(0);

  const { agregarTransaccion } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const nuevaTransaccion = {
      id: Math.floor(Math.random() * 100000000),
      texto,
      cantidad: +cantidad,
    };

    agregarTransaccion(nuevaTransaccion);
  };

  return (
    <>
      <section className="transaccion-container">
        <h3>Agrega una nueva transaccion</h3>
        <form onSubmit={onSubmit}>
          <div className="type-form">
            <label htmlFor="texto">Texto</label>
            <input
              type="text"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              placeholder="Tipo de ingreso/gasto..."
            />
          </div>
          <div className="type-form">
            <label htmlFor="cantidad">Cantidad</label>
            <span>Negativo (-), Positivo</span>
            <input
              type="number"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              placeholder="Ingrese la cantidad..."
            />
          </div>
          <button className="btn">Agregar nueva transaccion</button>
        </form>
      </section>
    </>
  );
};

export default NuevaTransaccion;
