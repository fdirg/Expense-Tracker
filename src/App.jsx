import "./App.css";
import Balance from "./components/Balance/Balance.jsx";
// import Header from "./components/Header/Header.jsx";
import Historial from "./components/Historial/Historial.jsx";
import IngresosEgresos from "./components/IngresosEgresos/IngresosEgresos.jsx";
import NuevaTransaccion from "./components/NuevaTransaccion/NuevaTransaccion.jsx";
import LeftContainer from "./components/side-container/LeftContainer/LeftContainer.jsx";
import RightContainer from "./components/side-container/RightContainer/RightContainer.jsx";
import { GlobalProvider } from "./context/GlobalState.jsx";

function App() {
  return (
    <>
      <GlobalProvider>
        {/* <Header /> */}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "2rem",
          }}
        >
          <LeftContainer>
            <Balance />
            <IngresosEgresos />
            <NuevaTransaccion />
          </LeftContainer>
          <RightContainer>
            <Historial />
          </RightContainer>
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
