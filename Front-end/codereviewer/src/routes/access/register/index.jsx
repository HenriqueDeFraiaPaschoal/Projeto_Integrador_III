import "../login/style.css"

export const Register = () => {
  return (
    <>
      <h1 className="titulo">Bem-Vindo</h1>

      <form action="">
        <input className="input" type="email" placeholder="Forneça um email" />
        <input className="input" type="password" placeholder="Crie uma senha" />

        <button type="submit" className="entrar" href="#">
          ja possui uma conta?
        </button>
      </form>
    </>
  )
}
