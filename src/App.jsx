import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Registro from "./paginas/Registro";
import Usuarios from "./paginas/Usuarios";
import Login from "./paginas/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/registro" element={<Registro />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;