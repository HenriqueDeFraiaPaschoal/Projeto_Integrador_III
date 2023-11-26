import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { URL_BASE } from "constants"

export const Register = () => {
  const navigate = useNavigate()

  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    senha: "",
  })

  const handleRegister = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(`${URL_BASE}/users`, registerData)

      navigate("/")
      alert(
        "Usuário cadastrado com sucesso! Efetue o login para acessar sua conta."
      )
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error)

      if (
        error.response &&
        error.response.status === 400 &&
        error.response.data
      ) {
        const errorMessage = error.response.data.message

        if (errorMessage.toLowerCase().includes("existente")) {
          alert("Usuário ou e-mail já existente. Escolha outros.")
        } else {
          alert(`Erro no cadastro: ${errorMessage}`)
        }
      } else if (error.response) {
        alert("Erro interno do servidor. Tente novamente mais tarde.")
      } else if (error.request) {
        alert("Erro na requisição. Verifique sua conexão com a internet.")
      } else {
        alert("Erro desconhecido. Tente novamente mais tarde.")
      }
    }
  }

  const validateInputs = () => {
    if (!registerData.username || !registerData.email || !registerData.senha) {
      alert("Preencha todos os campos")
      return false
    }
    return true
  }

  return (
    <>
      <h1 className="titulo">Bem-Vindo</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (validateInputs()) {
            handleRegister(e)
          }
        }}
      >
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
  )
}
