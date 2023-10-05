import { Parallax } from "./parallax/parallax-2/Parallax";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { WavyContainer, WavyLink } from "react-wavy-transitions";

import { Navbar } from "./navbar/Navbar";
import { PaginaPrincipal } from "./PaginaPrincipal";
import { Tienda } from "./navbar/components/Tienda";




const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Contact = () => <div>Contact</div>;

function App() {
  return (
    <BrowserRouter>
      <WavyContainer />
      <Routes>
          <Route index element={<PaginaPrincipal />} />
          <Route path="about" element={<Tienda/>} />
          <Route path="*" element={<>No Match</>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
