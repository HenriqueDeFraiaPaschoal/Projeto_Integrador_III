import "./style.css"

export const Login = () => {

  const handleLogin = () => {
    console.log('login...')
  }
  return (
    <>
      <h1 className="titulo">Entrar</h1>

      <form onSubmit={handleLogin} >
        <input className="input" type="email" placeholder="Insira seu email" />
        <input
          className="input"
          type="password"
          placeholder="insira sua senha"
        />

        <button className="entrar" type="submit">
          Entrar
        </button>
      </form>
    </>
  )
}
