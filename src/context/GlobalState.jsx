import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer.js";

const initialState = {
  transacciones: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function eliminarTransaccion(id) {
    dispatch({
      type: "ELIMINAR_TRANSACCION",
      payload: id,
    });
  }

  function agregarTransaccion(transaccion) {
    dispatch({
      type: "AGREGAR_TRANSACCION",
      payload: transaccion,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transacciones: state.transacciones,
        eliminarTransaccion,
        agregarTransaccion,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
