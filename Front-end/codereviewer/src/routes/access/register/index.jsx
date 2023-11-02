import "../login/style.css"
import { useNavigate } from "react-router-dom"

export const Register = () => {
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()

    try {
      console.log("register...")
    } catch (error) {}
  }

  return (
    <>
      <h1 className="titulo">Bem-Vindo</h1>

      <form onSubmit={(e) => handleRegister(e)}>
        <input className="input" type="email" placeholder="Forneça um email" />
        <input className="input" type="password" placeholder="Crie uma senha" />

        <button className="entrar" onClick={() => navigate("/")}>
          ja possui uma conta?
        </button>
        <button className="cadastrar" type="submit">
          Cadastrar
        </button>
      </form>
    </>
  )
}
