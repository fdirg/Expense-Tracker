import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState.jsx";
import "./HistorialStyles.css";
import Transaccion from "../Transaccion/Transaccion";

const Historial = () => {
  const { transacciones } = useContext(GlobalContext);

  return (
    <>
      <section className="historial-container">
        <h3>Historial</h3>
        <ul className="historial">
          {transacciones.map((transaccion) => (
            <Transaccion key={transaccion.id} transaccion={transaccion} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Historial;
