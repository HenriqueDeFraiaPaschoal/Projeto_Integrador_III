import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { URL_BASE } from "constants";

export const Login = () => {
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });

  const handleGetInputs = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Envie os dados de login para o backend
      const response = await axios.get(`${URL_BASE}/users?user=${userData.user}&password=${userData.password}`);

      // Se o login for bem-sucedido, redirecione para a rota "/dashboard"
      if (response.data) {
        navigate("/dashboard");
      } else {
        // Lidar com o caso de login falhado
        console.log("Login falhou. Verifique seu email e senha.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="titulo">Entrar</h1>

      <form onSubmit={(e) => handleLogin(e)}>
        <input
          className="input"
          type="email"
          id="user"
          name="user"
          placeholder="Insira seu email"
          value={userData.email}
          onChange={(e) => handleGetInputs(e)}
        />

        <input
          className="input"
          type="password"
          placeholder="Insira sua senha"
          id="password"
          name="password"
          value={userData.password}
          onChange={(e) => handleGetInputs(e)}
        />

        <button className="entrar" type="submit">
          Entrar
        </button>
        <button className="cadastrar" onClick={() => navigate("/register")}>
          Cadastrar-se
        </button>
      </form>
    </>
  );
};
