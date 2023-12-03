
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WavyContainer } from "react-wavy-transitions";
import { PaginaPrincipal } from "./PaginaPrincipal";
import { Tienda } from "./Tienda";
import { FinalizarPedido } from "./tienda/FinalizarPedido";




function App() {
  return (
    <BrowserRouter>
      <WavyContainer />
      <Routes>
          <Route index element={<PaginaPrincipal />} />
          <Route path="/tienda" element={<Tienda/>} />
          <Route path="/tienda/finalizar-pedido" element={<FinalizarPedido/>} />
          <Route path="*" element={<>No Match</>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
