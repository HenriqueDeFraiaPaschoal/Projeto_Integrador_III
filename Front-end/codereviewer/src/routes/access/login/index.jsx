import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { URL_BASE } from "constants";

export const Login = () => {
  const [userData, setUserData] = useState({
    user: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleGetInputs = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Verificar campos em branco
    if (!userData.user || !userData.password) {
      alert("Preencha todos os campos.");
      return;
    }

    try {
      const response = await axios.post(`${URL_BASE}/login`, userData);

      // Se o login for bem-sucedido, redirecione para a rota "/dashboard"
      if (response.data) {
        navigate("/dashboard");
      } else {
        // Lidar com o caso de login falhado
        alert("Usuário ou senha incorretos. Tente novamente.");
      }
    } catch (error) {
      console.error(error);

      if (error.response && error.response.status === 401) {
        // Lidar com o erro específico de credenciais inválidas
        alert("Usuário ou senha incorretos. Tente novamente.");
      } else if (error.response && error.response.status === 400) {
        // Lidar com o erro específico de campos em branco
        alert("Preencha todos os campos.");
      } else {
        // Lidar com outros erros
        alert("Erro ao realizar o login. Tente novamente mais tarde.");
      }
    }
  };

  return (
    <>
      <h1 className="titulo">Entrar</h1>

      <form onSubmit={(e) => handleLogin(e)}>
        <input
          className="input"
          type="text"
          id="user"
          name="user"
          placeholder="Insira seu usuário"
          value={userData.user}
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
