import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("email",email);
  console.log("password",password);

  return (
    <div className="container">

      <h2>Login</h2>
      
      <form>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Ingresar</button>

      </form>

    </div>
  );
}

export default Login;