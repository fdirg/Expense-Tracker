import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState.jsx";
import { formateadorDinero } from "../utils/formateadorDinero";

const Transaccion = ({ transaccion }) => {
  const { eliminarTransaccion } = useContext(GlobalContext);

  const sign = transaccion.cantidad < 0 ? "-" : "+";

  return (
    <li className={transaccion.cantidad < 0 ? "egreso" : "ingreso"}>
      {transaccion.texto}
      <span>
        {/* {sign} */}
        {formateadorDinero(transaccion.cantidad)}
      </span>
      <button
        onClick={() => eliminarTransaccion(transaccion.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transaccion;
