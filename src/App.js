
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WavyContainer } from "react-wavy-transitions";
import { PaginaPrincipal } from "./PaginaPrincipal";
import { Tienda } from "./Tienda";
import { FinalizarPedido } from "./tienda/FinalizarPedido";
import { Tienda2 } from "./Tienda2";
import { AvisoLegal } from "./AvisoLegal";
import { Tienda3 } from "./Tienda3";
import { Tienda3Hybrid } from "./Tienda3Hybrid";
import { Tienda3HybridMetallic } from "./Tienda3HybridMetallic";
import { Tienda3Muebles} from "./Tienda3Muebles";
import { Tienda3Barnices } from "./Tienda3Barnices";
import { Tienda3Cosmos } from "./Tienda3Cosmos";
import { Tienda3Ambientes } from "./Tienda3Ambientes";
import { Tienda3Stencils } from "./Tienda3Stencils";
import { Tienda3StencilsHomeDecor } from "./Tienda3StencilsHomeDecor";
import { Tienda3StencilsHomeDecorMidi } from "./Tienda3StencilsHomeDecorMidi";
import { Tienda3StencilsSerieBN } from "./Tienda3StencilsSerieBN";
import { Tienda3StencilsPrivate } from "./Tienda3StencilsPrivate";
import { Tienda3StencilsCenefas } from "./Tienda3StencilsCenefas";
import { Tienda3StencilsMiscellaneous } from "./Tienda3StencilsMiscellaneous";
import { Tienda3TransfersFolex } from "./Tienda3TransfersFolex";
import { Tienda3Transfers } from "./Tienda3Transfers";
import { Tienda3TransfersHomeDecor } from "./Tienda3TransfersHomeDecor";
import { Tienda3TransfersTextil } from "./Tienda3TransfersTextil";
import { Tienda3Pastas } from "./Tienda3Pastas";
import { Tienda3PastasRelieve } from "./Tienda3PastasRelieve";
import { Tienda3PastasMixtion } from "./Tienda3PastasMixtion";
import { Tienda3PastasPatinaImprimacion } from "./Tienda3PastasPatinaImprimacion";
import { Tienda3PastasShabby } from "./Tienda3PastasShabby";
import { Tienda3PastasZeugma } from "./Tienda3PastasZeugma";
import { Tienda3PastasDistress } from "./Tienda3PastasDistress";
import { Tienda3PastasFlexibleMetalica } from "./Tienda3PastasFlexibleMetalica";
import { Tienda3PastasVintageLegend } from "./Tienda3PastasVintageLegend";
import { Tienda3Madera } from "./Tienda3Madera";
import { Tienda3Variado } from "./Tienda3Variado";




function App() {
  return (
    <BrowserRouter>
      <WavyContainer />
      <Routes>
          <Route index element={<PaginaPrincipal />} />
          <Route path="/tienda" element={<Tienda/>} />
          <Route path="/tienda/mint-by-michelle" element={<Tienda2/>} />
          <Route path="/tienda/cadence" element={<Tienda3/>} />
          <Route path="/tienda/cadence/hybrid" element={<Tienda3Hybrid/>} />
          <Route path="/tienda/cadence/hybrid-metallic" element={<Tienda3HybridMetallic/>} />
          <Route path="/tienda/cadence/barnices-craqueladores" element={<Tienda3Barnices/>} />
          <Route path="/tienda/cadence/pinturas-cosmos" element={<Tienda3Cosmos/>} />
          <Route path="/tienda/cadence/pinturas-ambientes-humedos" element={<Tienda3Ambientes/>} />
          <Route path="/tienda/cadence/stencils" element={<Tienda3Stencils/>} />
          <Route path="/tienda/cadence/stencils/home-decor" element={<Tienda3StencilsHomeDecor/>} />
          <Route path="/tienda/cadence/stencils/home-decor-midi" element={<Tienda3StencilsHomeDecorMidi/>} />
          <Route path="/tienda/cadence/stencils/serie-bn" element={<Tienda3StencilsSerieBN/>} />
          <Route path="/tienda/cadence/stencils/private" element={<Tienda3StencilsPrivate/>} />
          <Route path="/tienda/cadence/stencils/miscellaneous" element={<Tienda3StencilsMiscellaneous/>} />
          <Route path="/tienda/cadence/stencils/cenefas" element={<Tienda3StencilsCenefas/>} />
          <Route path="/tienda/cadence/transfers" element={<Tienda3Transfers/>} />
          <Route path="/tienda/cadence/transfers/folex" element={<Tienda3TransfersFolex/>} />
          <Route path="/tienda/cadence/transfers/home-decor" element={<Tienda3TransfersHomeDecor/>} />
          <Route path="/tienda/cadence/transfers/textil" element={<Tienda3TransfersTextil/>} />
          <Route path="/tienda/cadence/pastas" element={<Tienda3Pastas/>} />
          <Route path="/tienda/cadence/pastas/relieve" element={<Tienda3PastasRelieve/>} />
          <Route path="/tienda/cadence/pastas/mixtion" element={<Tienda3PastasMixtion/>} />
          <Route path="/tienda/cadence/pastas/patina-imprimacion" element={<Tienda3PastasPatinaImprimacion/>} />
          <Route path="/tienda/cadence/pastas/shabby" element={<Tienda3PastasShabby/>} />
          <Route path="/tienda/cadence/pastas/zeugma" element={<Tienda3PastasZeugma/>} />
          <Route path="/tienda/cadence/pastas/distress" element={<Tienda3PastasDistress/>} />
          <Route path="/tienda/cadence/pastas/flexible-metalica" element={<Tienda3PastasFlexibleMetalica/>} />
          <Route path="/tienda/cadence/pastas/vintage-legend" element={<Tienda3PastasVintageLegend/>} />
          <Route path="/tienda/cadence/soportes-madera" element={<Tienda3Madera/>} />
          <Route path="/tienda/cadence/variados" element={<Tienda3Variado/>} />
          <Route path="/tienda/muebles-ornamentos" element={<Tienda3Muebles/>} />
          <Route path="/aviso-legal" element={<AvisoLegal/>} />
          <Route path="/tienda/finalizar-pedido" element={<FinalizarPedido/>} />
          <Route path="*" element={<>No Match</>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
