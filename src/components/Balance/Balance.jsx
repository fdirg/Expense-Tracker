import React, { useContext } from "react";
import "./BalanceStyles.css";
import { formateadorDinero } from "../utils/formateadorDinero";
import { GlobalContext } from "../../context/GlobalState.jsx";

const Balance = () => {
  const { transacciones } = useContext(GlobalContext);

  const cantidades = transacciones.map((transaccion) => transaccion.cantidad);

  const total = cantidades.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <section className="balance-container">
        <h3>Balance</h3>
        <span>{formateadorDinero(total)}</span>
      </section>
    </>
  );
};

export default Balance;
