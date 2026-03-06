import React from "react";

function Usuarios() {

  const usuarios = [
    { id: 1, nombre: "Juan Pabo Chantaduro", correo: "juan@gmail.com" },
    { id: 2, nombre: "Diego tilin.excel", correo: "diegodiana@gmail.com" },
    { id: 3, nombre: "Antoimi", correo: "antonimivector@gmail.com" }
  ];

  return (
    <div className="tabla container">

      <h2>Tabla de Usuarios</h2>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
          </tr>
        </thead>

        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.correo}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default Usuarios;