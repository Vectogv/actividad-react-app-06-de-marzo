import { useState } from "react";

function Formulario() {

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Contraseña:", password);

    setNombre("");
    setCorreo("");
    setPassword("");
  };

  return (
    <div className="container">

      <h2>Registro</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />

        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(event) => setCorreo(event.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Registrarse</button>

      </form>

    </div>
  );
}

export default Formulario;