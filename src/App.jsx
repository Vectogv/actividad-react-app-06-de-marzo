import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Formulario from "./paginas/Formulario"; 
import Usuarios from "./paginas/Usuarios";
import Login from "./paginas/Login";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />        
        <Route path="/login" element={<Login />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;