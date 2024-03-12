import React, { useContext } from "react";
import "./IngresosEgresosStyles.css";
import { GlobalContext } from "../../context/GlobalState.jsx";
import { formateadorDinero } from "../utils/formateadorDinero";

const IngresosEgresos = () => {
  const { transacciones } = useContext(GlobalContext);

  const cantidades = transacciones.map((transaccion) => transaccion.cantidad);

  const ingresos = cantidades
    .filter((cantidad) => cantidad > 0)
    .reduce((acc, cantidad) => (acc += cantidad), 0);

  const egresos =
    cantidades
      .filter((cantidad) => cantidad < 0)
      .reduce((acc, cantidad) => (acc += cantidad), 0) * -1;
  return (
    <>
      <section className="ing-eg-container">
        <div className="border">
          <h3>Ingresos</h3>
          <span className="ingreso">{formateadorDinero(ingresos)}</span>
        </div>
        <div>
          <h3>Egresos</h3>
          <span className="egreso">{formateadorDinero(egresos)}</span>
        </div>
      </section>
    </>
  );
};

export default IngresosEgresos;
