import { useState } from "react";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const mostrarDatos = () => {
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Contraseña:", password);
  };

  return (
    <div className="container">
      <h2>Registro</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={mostrarDatos}>Registrarse</button>
    </div>
  );
}

export default Registro;