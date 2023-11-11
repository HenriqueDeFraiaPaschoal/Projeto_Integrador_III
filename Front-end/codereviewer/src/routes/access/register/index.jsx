import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { URL_BASE } from "constants";

export const Register = () => {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    senha: "", // De acordo com o nome no modelo Prisma
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${URL_BASE}/users`, registerData);

      console.log("FOI!"); // Lidar com a resposta do backend, se necessário

      navigate("/");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  };

  return (
    <>
      <h1 className="titulo">Bem-Vindo</h1>

      <form onSubmit={(e) => handleRegister(e)}>
        <input
          className="input"
          type="text"
          placeholder="Forneça o usuário"
          value={registerData.username}
          onChange={(e) =>
            setRegisterData({ ...registerData, username: e.target.value })
          }
        />

        <input
          className="input"
          type="email"
          placeholder="Forneça um email"
          value={registerData.email}
          onChange={(e) =>
            setRegisterData({ ...registerData, email: e.target.value })
          }
        />
        <input
          className="input"
          type="password"
          placeholder="Crie uma senha"
          value={registerData.senha}
          onChange={(e) =>
            setRegisterData({ ...registerData, senha: e.target.value })
          }
        />

        <button className="entrar" onClick={() => navigate("/")}>
          Já possui uma conta?
        </button>
        <button className="cadastrar" type="submit">
          Cadastrar
        </button>
      </form>
    </>
  );
};
