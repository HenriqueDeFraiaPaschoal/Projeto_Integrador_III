import '../login/style.css';

export const Register = () => {

  return (
    <>
      <h1 className='titulo'>Bem-Vindo</h1>

      <form action="">
        <input className='input' type="email" placeholder="Forneça email"/>
        <input className='input' type="password" placeholder="insira sua senha"/>

        <button className='entrar' href="#">ja possui uma conta?</button>

        {/* <button className='btn-voltar' href="#">Voltar</button> */}
      </form>
    </>
  )
}