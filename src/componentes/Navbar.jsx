import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

function Navbar() {
  const [abierto, setAbierto] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Tio Antonimi gv</h2>

      <div
        className={`hamburguesa ${abierto ? "abierto" : ""}`}
        onClick={() => setAbierto(!abierto)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`menu ${abierto ? "abierto" : ""}`}>
        <Link to="/login" onClick={() => setAbierto(false)}>Iniciar sesión</Link>
        <Link to="/Registro" onClick={() => setAbierto(false)}>Registro</Link>
        <Link to="/usuarios" onClick={() => setAbierto(false)}>Usuarios</Link>
      </div>
    </nav>
  );
}

export default Navbar;