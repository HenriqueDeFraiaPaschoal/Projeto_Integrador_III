import React from "react"
import "./style.css"
import { useNavigate } from "react-router-dom"
import { Signin } from "services/users"
import { UserInfo } from "components/UserInfo"

export const Login = () => {
  const [userData, setUserData] = React.useState({
    user: "",
    password: "",
  })

  const handleGetInputs = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      await Signin(userData)
    } catch (error) {
      console.error(error)
    }
  }

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
          value={userData.user}
          onChange={(e) => handleGetInputs(e)}
        />

        <input
          className="input"
          type="password"
          placeholder="insira sua senha"
          id="password"
          name="password"
          value={userData.password}
          onChange={(e) => handleGetInputs(e)}
        />

        <button
          className="entrar"
          type="submit"
          onClick={() => navigate("/dashboard")}
        >
          Entrar
        </button>
        <button className="cadastrar" onClick={() => navigate("/register")}>
          Cadastrar-se
        </button>
      </form>
    </>
  )
}
