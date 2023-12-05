
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WavyContainer } from "react-wavy-transitions";
import { PaginaPrincipal } from "./PaginaPrincipal";
import { Tienda } from "./Tienda";
import { FinalizarPedido } from "./tienda/FinalizarPedido";
import { Tienda2 } from "./Tienda2";
import { AvisoLegal } from "./AvisoLegal";
import { Tienda3 } from "./Tienda3";




function App() {
  return (
    <BrowserRouter>
      <WavyContainer />
      <Routes>
          <Route index element={<PaginaPrincipal />} />
          <Route path="/tienda" element={<Tienda/>} />
          <Route path="/tienda/mint-by-michelle" element={<Tienda2/>} />
          <Route path="/tienda/cadence" element={<Tienda3/>} />
          <Route path="/aviso-legal" element={<AvisoLegal/>} />
          <Route path="/tienda/finalizar-pedido" element={<FinalizarPedido/>} />
          <Route path="*" element={<>No Match</>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
